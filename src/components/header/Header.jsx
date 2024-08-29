import { NavLink } from "react-router-dom";
import { IoIosHeartEmpty, IoIosCart } from "react-icons/io";

const Header = () => {
  return (
    <div className="container py-4 flex items-center">
      <NavLink className="text-2xl font-bold mr-auto" replace to={"/"}>
        DummyProducts
      </NavLink>

      <nav className="flex items-center gap-3">
        <NavLink to={"/wishlist"} className={"flex items-center gap-2"}>
          <IoIosHeartEmpty className="text-2xl" />
          Wishlist
        </NavLink>

        <NavLink to={"/cart"} className={"flex items-center gap-2"}>
          <IoIosCart className="text-2xl" />
          Wishlist
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
