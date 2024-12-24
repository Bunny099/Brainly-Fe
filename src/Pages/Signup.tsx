import { useRef } from "react";
import Button from "../Components/Button";
import { Input } from "../Components/Input";
import {BACKEND_URL} from "../config"
import axios from "axios"
import { useNavigate } from "react-router";
import { LogoIcon } from "../icons/LogoIcon";
import { useState } from "react";
import Toast from "../Components/Toast";

export function SingUp(){
    const [toast, setToast] = useState({
        isVisible: false,
        message: '',
        type: 'success' as 'success' | 'error',
      });

    const emailRef = useRef<HTMLInputElement>()
    const userRef = useRef<HTMLInputElement>()
    const passwordRef = useRef<HTMLInputElement>()
    const navigate= useNavigate()

    async function signUp(){
        const email = emailRef.current?.value;
        const username = userRef.current?.value;
        const password = passwordRef.current?.value;
        await axios.post(BACKEND_URL+"/signup",{   
                email,
                username,
                password   
        }
        )
        
        navigate("/signin")
        alert("you have signed up")
    
    }


    
    return <div className="flex justify-center items-center  h-screen w-screen bg-slate-100 shadow-md">
        
        <div className="bg-white p-8 border rounded-xl ">
        <h1 className="text-xl font-semibold text-center pb-2 text-gray-800">Sign Up</h1>
            <div className="py-2 "><Input type="text" refrence={emailRef} placeholder="Email"/></div>
            <div className="py-2 "><Input type="text" refrence={userRef} placeholder="Username"/></div>
            <div className="py-2 "><Input type="password" refrence={passwordRef} placeholder="password"/></div>
            <div className="pt-4 flex items-center justify-center "> <Button varient="primary" text="Sign up" fullWidth={true} onClick={signUp} /></div>
            <div className="py-2 border-t-2 mt-4 border-slate-200  text-slate-400">Already have an account? <span className="text-blue-600 hover:cursor-pointer" onClick={()=>{navigate("/signin")}}>Sign In</span></div>
            
            
        </div>

    </div>
}