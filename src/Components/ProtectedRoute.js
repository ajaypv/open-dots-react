import { Navigate } from "react-router-dom";
import { useAuthContext } from "../Context/UserContext";
export const ProtectedRoute = ({ children }) => {
  let { user } = useAuthContext();
  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
};
