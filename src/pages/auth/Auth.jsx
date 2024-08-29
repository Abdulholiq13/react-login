import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const Auth = () => {
  let token = useSelector((state) => state.token);
  return token ? <Outlet /> : <Navigate replace to={"/login"} />;
};

export default Auth;
