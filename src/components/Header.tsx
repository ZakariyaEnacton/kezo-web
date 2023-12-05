"use client";
import { useRouter } from "next/navigation";
import Navbar from "./Navbar";

const Header = () => {
  const router = useRouter();
  return (
    <header>
      <div className="max-w-[1444px] container">
        <div className="flex m-6 py-4 md:px-5 justify-between items-center rounded-full bg-white/20 shadow-header">
          <div onClick={() => router.replace("/")} className="cursor-pointer">
            <img src="/Image/logo.png" alt="Logo" />
          </div>
          <Navbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
