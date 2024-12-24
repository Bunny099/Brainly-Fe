import { SetStateAction, useRef } from "react";
import Button from "../Components/Button";
import { Input } from "../Components/Input";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router";



export function SingIn() {
  const usernameRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();
  const navigate = useNavigate();

  async function signin() {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
        try{
          const response = await axios.post(BACKEND_URL + "/signin", {
            username,
            password,
          });
          const jwt = response.data.token;
          localStorage.setItem("token", jwt);
         
          navigate("/dashboard")
      
          alert("you signed in");
        }catch(e){
          console.error("error is",e)
        }
   
  }

  return (
    <div className="flex justify-center items-center  h-screen w-screen bg-slate-100 ">
      <div className="bg-white p-8 border rounded-xl ">
        <h1 className="text-xl font-semibold text-center pb-2 text-gray-800">
          Sign In
        </h1>

        <div className="py-2">
          <Input type="text" refrence={usernameRef} placeholder="Username" />
        </div>
        <div className="py-2">
          <Input
            type="password"
            refrence={passwordRef}
            placeholder="password"
          />
        </div>
        <div className="pt-4 flex items-center justify-center">
          {" "}
          <Button
            varient="primary"
            text="Sign In"
            fullWidth={true}
            onClick={signin}
          />
        </div>
        
      </div>
    </div>
  );
}
