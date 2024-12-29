import { useRef, useState } from "react";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import axios from "axios";
import { BACKEND_URL } from "../utils/lib";
import { useNavigate } from "react-router-dom";

export function Signup(){
    const navigate = useNavigate()
    const usernameRef = useRef<HTMLInputElement | null>()
    const passwordRef = useRef<HTMLInputElement | null>()
    const emailRef = useRef<HTMLInputElement | null>()
    const [role, setRole] = useState<string>(); 

    async function handleSignup(){
        const res = await axios.post(`${BACKEND_URL}/signup`,{
            username: usernameRef.current?.value,
            password: passwordRef.current?.value,
            email: emailRef.current?.value,
            role: role,
        })
        console.log(res.data)
        navigate('/signin')
    }
    

    return    <div className="w-screen h-screen bg-gray-600 opacity-70 fixed top-0 left-0 flex justify-center">
        <div className="flex flex-col justify-center w-96 p-5">
            <span className="bg-white p-4 rounded-md opacity-100 cursor-pointer flex flex-col gap-3">
                <div className="flex justify-center text-2xl font-semibold">
                    Signup
                </div>
            <div className="flex flex-col gap-3 text-black">
                <Input reference={usernameRef} placeholder={"Username"}/>
                <Input reference={passwordRef} placeholder={"Password"}/>
                <Input reference={emailRef} placeholder={"Email"}/>
                <select onChange={(e)=>{setRole(e.target.value)}} className="px-2 py-2">
                    <option value="student">Student</option>
                    <option value="admin">Admin</option>
                </select>
                <div className="flex justify-center">
                <Button onClick={handleSignup} title={"Submit"} />
                </div>
            </div>
            </span>
        </div>
    </div>
}