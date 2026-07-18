import { useQuery } from "@tanstack/react-query";
import { checkAuth } from "../api/auth";


function useAuth(){

    const {
        data:user,
        isLoading,
        isError
    } = useQuery({
        queryKey:["auth"],
        queryFn:checkAuth,
        retry:false
    });


    return {
        user,
        isLoggedIn:!!user,
        loading:isLoading,
        error:isError
    };
}


export default useAuth;