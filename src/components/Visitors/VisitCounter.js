import React, { useEffect, useState } from "react";
import { db } from "../../utils/firebase"; // Adjust the path as per your project structure
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  runTransaction,
} from "firebase/firestore";

export const VisitCounter = () => {
  const [totalVisits, setTotalVisits] = useState(0);

  useEffect(() => {
    const visitCountKey = "visitCount";
    const lastVisitDateKey = "lastVisitDate";
    const visitorIdKey = "visitorId";

    const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format
    const lastVisitDate = localStorage.getItem(lastVisitDateKey);
    const visitorId = localStorage.getItem(visitorIdKey);

    // Function to get a unique identifier for the visitor
    const getUniqueId = () => "_" + Math.random().toString(36).substr(2, 9);

    // Function to increment visit count in Firestore
    const incrementVisitCount = async () => {
      const visitDocRef = doc(db, "visits", "count");
      await runTransaction(db, async (transaction) => {
        const docSnap = await transaction.get(visitDocRef);
        if (!docSnap.exists()) {
          throw "Document does not exist!";
        }
        const newCount = docSnap.data().count + 1;
        transaction.update(visitDocRef, { count: newCount });
        setTotalVisits(newCount);
      });
    };

    // Function to get the visit count from Firestore
    const getVisitCount = async () => {
      const visitDocRef = doc(db, "visits", "count");
      const docSnap = await getDoc(visitDocRef);
      if (docSnap.exists()) {
        setTotalVisits(docSnap.data().count);
      }
    };

    // Initialize the visit count if it does not exist
    const initializeVisitCount = async () => {
      const visitDocRef = doc(db, "visits", "count");
      const docSnap = await getDoc(visitDocRef);
      if (!docSnap.exists()) {
        await setDoc(visitDocRef, { count: 0 });
      }
    };

    // Check if the visitor is new today
    const handleVisits = async () => {
      await initializeVisitCount();
      if (!visitorId) {
        // Generate and store a unique visitor ID
        localStorage.setItem(visitorIdKey, getUniqueId());
      }

      if (lastVisitDate !== today) {
        // Update the last visit date to today
        localStorage.setItem(lastVisitDateKey, today);
        await incrementVisitCount();
      }
      await getVisitCount();
    };

    handleVisits();
  }, []); // Remove totalVisits from dependencies

  return (
    <div className="VisitCounter">Total number of visits: {totalVisits}</div>
  );
};
