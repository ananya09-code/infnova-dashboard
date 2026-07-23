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

export const logoutUser = async () => {
  const token = localStorage.getItem("token");

  try {
    const res = await axios.post(
      "https://infnova-intern.vercel.app/api/auth/logout",
      {}, 
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return {
      isLoggedOut: res.status === 204,
      detail: res.data,
    };
  } catch (error) {
    console.error(error);

    return {
      isLoggedOut: false,
      detail: error,
    };
  }
};