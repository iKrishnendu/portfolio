import React, { useEffect, useState } from "react";
import { db } from "../../utils/firebase"; // Adjust the path as per your project structure
import {
  doc,
  getDoc,
  setDoc,
  addDoc,
  collection,
  query,
  where,
  getDocs,
  Timestamp,
} from "firebase/firestore";

export const VisitCounter = () => {
  const [totalUniqueVisits, setTotalUniqueVisits] = useState(0);

  useEffect(() => {
    const visitCollection = "visits";
    const lastVisitDateKey = "lastVisitDate";
    const visitorIdKey = "visitorId";

    const today = new Date();
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - 7); // 7 days ago

    const getUniqueId = () => "_" + Math.random().toString(36).substr(2, 9);

    // Function to get unique visits within the last 7 days
    const getUniqueVisits = async () => {
      const visitDocRef = doc(db, visitCollection, "visitData");
      const visitorId = localStorage.getItem(visitorIdKey) || getUniqueId();

      // Store visitor ID in localStorage if not already present
      localStorage.setItem(visitorIdKey, visitorId);

      // Add a new visit to Firestore
      await addDoc(collection(db, visitCollection), {
        visitorId,
        timestamp: Timestamp.fromDate(today),
      });

      // Query unique visits within the last 7 days
      const q = query(
        collection(db, visitCollection),
        where("timestamp", ">=", Timestamp.fromDate(startDate))
      );
      const querySnapshot = await getDocs(q);
      const uniqueVisitors = new Set();

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        uniqueVisitors.add(data.visitorId);
      });

      setTotalUniqueVisits(uniqueVisitors.size);
    };

    getUniqueVisits();
  }, []); // Empty dependency array means this useEffect runs once after the initial render

  return (
    <div className="VisitCounter">
      Total unique visits in the last 7 days: {totalUniqueVisits}
      <br />
      <small>
        <i>
          This count represents the total number of unique visits to the site
          over the past 7 days.
          <br /> Each unique visit is counted once per visitor within this
          period. The count is updated as new visits occur.
        </i>
      </small>
    </div>
  );
};
