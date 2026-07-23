import Logo from "../components/Logo"
import { useState } from "react"
import { useMutation } from "@tanstack/react-query"
import { loginUser } from "../api/auth"
import { useNavigate } from "react-router-dom";


type Formdata = {
    email: string;
    password: string;
}

function Login() {
   const navigate = useNavigate();
    const [formData, setFormdata] = useState<Formdata>({
        email: "",
        password: ""
    })
    const loginMutation=useMutation({
      mutationFn: loginUser,

    onSuccess: (data) => {
      localStorage.setItem("token", data.accessToken);
      console.log("Logged in", data);
      navigate("/home")

    },

    onError: (error) => {
      console.log(error);
    }
  });

    const handleChange = (e: any) => {
        setFormdata({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit= ()=>{
    if (formData.email === "" || formData.password === "") {
           return;}

   loginMutation.mutate({
    email: formData.email,
    password: formData.password,
});
    }

    return (
       <div
  className="
    min-h-screen
    flex
    items-center
    justify-center
    bg-gradient-to-br
    from-yellow-50
    via-white
    to-amber-100
    px-4
  "
>

  <div
    className="
      w-full
      max-w-md
      rounded-2xl
      bg-white/80
      backdrop-blur-lg
      border
      border-amber-200
      shadow-xl
      p-8
      flex
      flex-col
      gap-6
    "
  >

    <div className="flex flex-col items-center gap-3">

  <Logo
    style="w-20 h-20"
    type={2}
  />

  <div className="text-center">
    <h1 className="text-2xl font-bold text-gray-800">
      INFNOVA
    </h1>

    <p className="text-sm font-medium text-amber-500">
      Technologies
    </p>
  </div>

</div>


    <div className="text-center">
      <h1 className="text-2xl font-bold text-gray-800">
        Welcome Back
      </h1>

      <p className="mt-1 text-sm text-gray-500">
        Login to your internship dashboard
      </p>
    </div>


    <div className="flex flex-col gap-2">
      <label
        htmlFor="email"
        className="text-sm font-medium text-gray-700"
      >
        Email
      </label>

      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter your email"
        className="
          rounded-xl
          border
          border-gray-200
          bg-white
          p-3
          outline-none
          transition
          focus:border-amber-400
          focus:ring-2
          focus:ring-amber-200
        "
      />
    </div>


    <div className="flex flex-col gap-2">
      <label
        htmlFor="password"
        className="text-sm font-medium text-gray-700"
      >
        Password
      </label>

      <input
        type="password"
        id="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Enter your password"
        className="
          rounded-xl
          border
          border-gray-200
          bg-white
          p-3
          outline-none
          transition
          focus:border-amber-400
          focus:ring-2
          focus:ring-amber-200
        "
      />
    </div>


    <button
      onClick={handleSubmit}
      className="
        rounded-xl
        bg-amber-400
        py-3
        font-semibold
        text-white
        transition
        hover:bg-amber-500
        active:scale-95
      "
    >
      Login
    </button>


  </div>

</div>
    )
}

export default Login