import Navbar from "./Navbar";

function Header() {
  return (
    <header className="min-w-[1392px] m-6">
      <div className="flex py-4 md:px-5 justify-between items-center rounded-full bg-white/70 shadow-header">
        <img src="/Image/logo.png" alt="Logo" />
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
