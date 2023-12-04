import Navbar from "./Navbar";

function Header() {
  return (
    <header className="min-w-[1392px] m-6">
      <div className="flex py-4 md:px-5 justify-between items-center rounded-full backdrop-blur backdrop-sepia-0 shadow-sm shadow-blackShadow">
        <img src="/Image/logo.png" alt="Logo" />
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
