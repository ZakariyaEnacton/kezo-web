import React from "react";
import Link from "next/link";

interface NavitemProps {
  name: string;
  active: boolean;
}

const Navitem: React.FC<NavitemProps> = ({ name, active }) => {
  return <div className={active ? "font-bold" : ""}>{name}</div>;
};

export default Navitem;
