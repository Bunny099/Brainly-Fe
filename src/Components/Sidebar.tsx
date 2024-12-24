import { useNavigate } from "react-router";
import { LogoIcon } from "../icons/LogoIcon";
import { Logout } from "../icons/Logout";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YouTubeIcon } from "../icons/YouTubeIcon";
import Sidebaritem from "./Sidebaritem";
import { LogoutButton } from "./Logout";
export function Sidebar() {




  return (
    <div className="bg-white fixed left-0 top-0 border-r  h-screen w-80 flex flex-col justify-between ">

      <div> <div className="flex p-2 gap-2 px-8 items-center hover:cursor-pointer">
        <LogoIcon />
        <h1 className="text-3xl font-bold text-blue-700">Brainly</h1>
      </div>
      <div className="pt-14 pl-6">
        <Sidebaritem icons={<TwitterIcon />} text="Twitter" hover={true} />
        <Sidebaritem icons={<YouTubeIcon />} text="Youtube" hover={true} />
      </div></div>
     

      <div className=" p-2 "><LogoutButton /></div>
    </div>
  );
}
