"use client";
import { useEffect, useState } from "react";
import CalCard from "../cards/CalCard";
import CalContent from "../table/CalContent";
import SecCard from "../cards/SecCard";

const CalendarSection = () => {
  const [status, setStatus] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setStatus(false);
    }, 6000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="container flex items-start gap-8 mb-4">
      <CalContent />
      {status ? <CalCard /> : <SecCard />}
    </div>
  );
};

export default CalendarSection;
