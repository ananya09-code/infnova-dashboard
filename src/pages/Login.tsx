import Logo from "../components/Logo"
import { useState } from "react"
import { useMutation } from "@tanstack/react-query"
import { loginUser } from "../api/auth"
type Formdata = {
    email: string;
    password: string;
}

function Login() {
    const [formData, setFormdata] = useState<Formdata>({
        email: "",
        password: ""
    })
    const loginMutation=useMutation({
      mutationFn: loginUser,

    onSuccess: (data) => {
      localStorage.setItem("token", data.accessToken);
      console.log("Logged in", data);

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
           className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
           style={{ backgroundImage: "url('/background.png')" }}>
    
            <div className="w-full max-w-md bg-gray-100 rounded-xl  border-2 border-amber-300 shadow-md p-8 flex flex-col gap-5">
                
                 <Logo style="w-full h-30 " type={1} />

                <div className="flex flex-col gap-2">
                    <label 
                        htmlFor="email"
                        className="text-sm font-medium"
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
                        required
                        className="border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-amber-200"
                    />
                </div>


                <div className="flex flex-col gap-2">
                    <label 
                        htmlFor="password"
                        className="text-sm font-medium"
                    >
                        Password
                    </label>

                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        placeholder="Enter your password"
                        className="border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-amber-200"
                    />
                </div>
                <button className="bg-amber-500 text-white rounded p-2" onClick={handleSubmit}>Login</button>

            </div>

        </div>
    )
}

export default Login