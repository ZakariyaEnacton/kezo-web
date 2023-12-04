import React from "react";
import Link from "next/link";

interface NavitemProps {
  name: string;
  active: boolean;
  href: string;
}

const Navitem: React.FC<NavitemProps> = ({ name, active, href }) => {
  return (
    <Link
      className={
        active ? "font-bold text-sm text-black" : "text-sm text-gray-400"
      }
      href={href}
    >
      {name}
    </Link>
  );
};

export default Navitem;
