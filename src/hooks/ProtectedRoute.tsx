import { Navigate,Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import StateMessage from "../components/StateMessage";

function ProtectedRoute() {
    const {
        isLoggedIn,
        loading,
        error
    } = useAuth();


    if (loading) {
    return <StateMessage type="loading" />;}

   if (!isLoggedIn) {
      return <Navigate to="/login" replace />;
    }
    if(error){
        return <StateMessage type="error"/>
    }


    return <Outlet/>;
}


export default ProtectedRoute;