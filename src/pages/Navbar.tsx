import { Outlet, NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
function Navbar() {
  return (
    <div className="outline">
      <div className="bg-gray-500 h-[70px] flex items-center">
        <IoMenu size={45} className="text-white ml-3" />
      </div>
      <Outlet />
    </div>
  );
}

export default Navbar;
