import { Navigate,Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";




function ProtectedRoute() {
    const {
        isLoggedIn,
        loading
    } = useAuth();


    if (loading) {
        return <p>Loading...</p>;
    }


    if (!isLoggedIn) {
        return <Navigate to="/login" replace />;
    }


    return <Outlet/>;
}


export default ProtectedRoute;