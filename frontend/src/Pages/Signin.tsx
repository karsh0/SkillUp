import { useRef } from "react";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import axios from "axios";
import { BACKEND_URL } from "../utils/lib";
import { useNavigate } from "react-router-dom";

export function Signin(){
    const navigate = useNavigate()
    const emailRef = useRef<HTMLInputElement | null>()
    const passwordRef = useRef<HTMLInputElement | null>()
    async function handleSignin(){
        const res = await axios.post(`${BACKEND_URL}/user/signin`,{
            email: emailRef.current?.value,
            password: passwordRef.current?.value,
        })
        localStorage.setItem('token', res.data.token)
        console.log(res.data)
        console.log(res.data.token)
        navigate('/dashboard')
    }

    return    <div className="w-screen h-screen bg-gray-600 opacity-70 fixed top-0 left-0 flex justify-center">
        <div className="flex flex-col justify-center w-96 p-5">
            <span className="bg-white p-4 rounded-md opacity-100 cursor-pointer flex flex-col gap-3">
                <div className="flex justify-center text-2xl font-semibold">
                    Signin
                </div>
            <div className="flex flex-col gap-3">
                <Input reference={emailRef} placeholder={"Email"}/>
                <Input reference={passwordRef} placeholder={"Password"}/>
                <div className="flex justify-center">
                <Button onClick={handleSignin} title={"Submit"} />
                </div>
            </div>
            </span>
        </div>
    </div>
}