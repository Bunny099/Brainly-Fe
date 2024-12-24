import { LogoIcon } from "../icons/LogoIcon";
import brainly from "../assets/brainly.svg"
import { SingUp } from "./Signup";
import { UserIcon } from "../icons/UserIcon";
import Button from "../Components/Button";
import { useNavigate } from "react-router";


let brain = brainly
export function Home(){
const nav = useNavigate()

    return <div className="h-screen w-screen  bg-slate-100 ">
       <nav className="flex items-center justify-around mt-1">
       <div className="flex items-center "><img src={brain} className="h-14 " /> <h1 className="text-3xl font-bold text-blue-700 pl-1">Brainly</h1></div>
            <div>
                <Button onClick={()=>{nav("/signin")}} text={"Login"} varient="primary" startIcon={<UserIcon/>}></Button>
            </div>
       </nav>
       <div className="flex flex-col justify-center items-center mt-32  p-8  ">
           <div> <h1 className="text-5xl font-bold text-wrap text-center p-4">Store and Share Links with Ease</h1></div>
           <div><h1 className="text-xl text-gray-600 text-center ">Effortlessly organize your favorite Youtube and Twitter links and share them with world. </h1></div>
           <div className="p-3 mt-3"> <Button onClick={()=>{nav("/signup")}} text="Start Now" varient="primary"/></div>
       </div>

    </div>
}