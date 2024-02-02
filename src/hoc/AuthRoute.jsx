import { Navigate, Outlet } from "react-router-dom";

const AuthRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (token) {
    return <Navigate to="/" />;
  }
  return <>{children || <Outlet />}</>;
};

export default AuthRoute;
