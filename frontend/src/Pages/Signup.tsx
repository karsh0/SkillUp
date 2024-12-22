import { useRef } from "react";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import axios from "axios";
import { BACKEND_URL } from "../utils/lib";

export function Signup(){
    const usernameRef = useRef<HTMLInputElement | null>(null)
    const passwordRef = useRef()
    const emailRef = useRef()
    const roleRef = useRef()

    async function handleSignup(){
        const res = await axios.post(`${BACKEND_URL}/user/signup`,{
            username: usernameRef.current.value,
            password: passwordRef.current.value,
            email: emailRef.current.value,
            role: roleRef.current.value,
        })
        console.log(res.data)
    }

    return    <div className="w-screen h-screen bg-gray-600 opacity-70 fixed top-0 left-0 flex justify-center">
        <div className="flex flex-col justify-center ">
            <span className="bg-white p-4 rounded-md opacity-100 cursor-pointer">
                <div className="flex justify-center text-2xl text-semibold">
                    Signup
                </div>
            <div>
                <Input reference={usernameRef} placeholder={"Username"}/>
                <Input reference={passwordRef} placeholder={"Password"}/>
                <Input reference={emailRef} placeholder={"Email"}/>
                <Input reference={roleRef} placeholder={"Role"}/>
                <div className="flex justify-center">
                <Button onClick={handleSignup} title={"Submit"} />
                </div>
            </div>
            </span>
        </div>
    </div>
}