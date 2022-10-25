import { Navigate, Outlet } from "react-router-dom";

//Esta validacion puede ser usada por varias rutas
export const ProtectedRoute = ({ isAllowed, children, redirectTo="/landing" }) => {
  if (!isAllowed) {
    return <Navigate to={redirectTo} />;
  }

  return children ? children : <Outlet/>;
};
