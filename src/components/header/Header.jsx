import { NavLink } from "react-router-dom";
import { IoIosHeartEmpty } from "react-icons/io";

const Header = () => {
  return (
    <div className="container py-4 flex items-center">
      <NavLink className="text-2xl font-bold mr-auto" replace to={"/"}>
        DummyProducts
      </NavLink>

      <nav>
        <NavLink to={"/wishlist"} className={"flex items-center gap-2"}>
          <IoIosHeartEmpty className="text-2xl" />
          Wishlist
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
