import Navitem from "./Navitem";

function Navbar() {
  return (
    <div className="flex pt-2 pr-2 pl-5 pb-2 gap-1 items-start rounded-full">
      <div className="flex gap-9 justify-center items-center">
        <Navitem name="Status" active={true} />
        <Navitem name="Calendar" active={false} />
        <Navitem name="Manage Cities" active={false} />
      </div>
    </div>
  );
}

export default Navbar;
