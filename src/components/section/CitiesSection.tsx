import React from "react";
import CityCard from "../cards/CityCard";

interface Email {
  id: number;
  name: string;
  email: string;
}

const CitiesSection: React.FC = () => {
  const emails: Email[] = [
    { id: 1, name: "Rapperswil-Jona", email: "sampleuser1@gmail.com" },
    { id: 2, name: "Wetzikon", email: "" },
    { id: 3, name: "Gossau", email: "sampleuser1@gmail.com" },
    { id: 4, name: "Wald", email: "" },
    { id: 5, name: "Rüti", email: "sampleuser1@gmail.com" },
    { id: 6, name: "Gosau", email: "" },
    { id: 7, name: "Wald", email: "" },
    { id: 8, name: "Rüti", email: "sampleuser1@gmail.com" },
  ];
  return (
    <div className="flex container p-3 flex-col items-center gap-2 rounded-2xl bg-white shadow-header ">
      {emails.map((data) => (
        <CityCard data={data} />
      ))}
    </div>
  );
};

export default CitiesSection;
