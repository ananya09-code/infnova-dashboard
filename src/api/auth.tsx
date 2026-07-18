import axios from "axios";

export const loginUser = async (data: {
  email: string;
  password: string;
}) => {
  const response = await axios.post(
    "https://infnova-intern.vercel.app/api/auth/login",
    data,

  );

  return response.data;
};


export const checkAuth = async () => {

    const token = localStorage.getItem("token");

    const res = await axios.get(
        "https://infnova-intern.vercel.app/api/auth/me",
        {
            headers:{
                Authorization:`Bearer ${token}`
            }
        }
    );

    return res.data;
};
