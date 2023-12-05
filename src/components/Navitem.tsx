import React from "react";
import Link from "next/link";

interface NavitemProps {
  name: string;
  active: boolean;
  href: string;
  onClick?: () => void;
}

const Navitem: React.FC<NavitemProps> = ({ name, active, href, onClick }) => {
  return (
    <Link
      href={href}
      className={
        active ? "font-bold text-sm text-black" : "text-sm text-gray-400"
      }
      onClick={onClick}
    >
      {name}
    </Link>
  );
};

export default Navitem;
