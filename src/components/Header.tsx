import Navbar from "./Navbar";

const Header = () => {
  return (
    <header>
      <div className="max-w-[1392px] container">
        <div className="flex m-6 py-4 md:px-5 justify-between items-center rounded-full bg-white/20 shadow-header">
          <img src="/Image/logo.png" alt="Logo" />
          <Navbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
