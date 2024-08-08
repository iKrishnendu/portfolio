import React, { useEffect, useState } from "react";
import { db } from "../../utils/firebase";
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
    const visitorExpirationDateKey = "visitorExpirationDate";
    const expirationDays = 7;

    const today = new Date().toISOString().split("T")[0];
    const lastVisitDate = localStorage.getItem(lastVisitDateKey);
    const visitorId = localStorage.getItem(visitorIdKey);
    const visitorExpirationDate = localStorage.getItem(
      visitorExpirationDateKey
    );

    const getUniqueId = () => "_" + Math.random().toString(36).substr(2, 9);

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

    const getVisitCount = async () => {
      const visitDocRef = doc(db, "visits", "count");
      const docSnap = await getDoc(visitDocRef);
      if (docSnap.exists()) {
        setTotalVisits(docSnap.data().count);
      }
    };

    const initializeVisitCount = async () => {
      const visitDocRef = doc(db, "visits", "count");
      const docSnap = await getDoc(visitDocRef);
      if (!docSnap.exists()) {
        await setDoc(visitDocRef, { count: 0 });
      }
    };

    const handleVisits = async () => {
      await initializeVisitCount();

      const currentDate = new Date();
      const expirationDate = new Date(visitorExpirationDate);

      if (!visitorId || currentDate > expirationDate) {
        // Generate a new unique ID and set the new expiration date
        localStorage.setItem(visitorIdKey, getUniqueId());
        const newExpirationDate = new Date();
        newExpirationDate.setDate(newExpirationDate.getDate() + expirationDays);
        localStorage.setItem(
          visitorExpirationDateKey,
          newExpirationDate.toISOString().split("T")[0]
        );
      }

      if (lastVisitDate !== today) {
        // Update the last visit date to today
        localStorage.setItem(lastVisitDateKey, today);
        await incrementVisitCount();
      }
      await getVisitCount();
    };

    handleVisits();
  }, []);

  return (
    <div className="VisitCounter">
      Total number unique of visits: {totalVisits}
    </div>
  );
};
