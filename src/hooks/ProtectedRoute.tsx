import { Navigate,Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import StateMessage from "../components/StateMessage";

import axios from "axios";

function ProtectedRoute() {
  const {
    isLoggedIn,
    loading,
    error,
    isError,
  } = useAuth();

  if (loading) {
    return <StateMessage type="loading" />;
  }

  if (
    isError &&
    axios.isAxiosError(error) &&
    error.response?.status === 401
  ) {
    return <StateMessage type="expired" />;
  }

  if (isError) {
    return <StateMessage type="error" />;
  }

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;