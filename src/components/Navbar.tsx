function Navbar() {
  return (
    <div className="flex pt-2 pr-2 pl-5 pb-2 gap-1 items-start bg-white rounded-full">
      <div className="flex gap-9 justify-center items-center">
        <p className="not-italic text-sm font-medium">Status</p>
        <p>Calendar</p>
        <p>Manage Cities</p>
      </div>
    </div>
  );
}

export default Navbar;
