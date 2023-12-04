import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Navitem from "./Navitem";
import { UserCircleIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  return (
    <div className="flex pt-2 pr-2 pl-5 pb-2 gap-1 items-center rounded-full z-10 bg-white ">
      <div className="flex gap-9 justify-center items-center mr-8">
        <Navitem href="/" name="Status" active={true} />
        <Navitem href="/calendar" name="Calendar" active={false} />
        <Navitem href="/manage-cities" name="Manage Cities" active={false} />
      </div>
      <div className="items-center flex gap-1">
        <span>
          <UserCircleIcon className="h-6 w-6" color="#008522" />
        </span>
        <span>
          <ChevronDownIcon className="h-5 w-5 opacity-25" />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
