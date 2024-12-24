import { ReactElement } from "react"

interface ButtonProps{
    varient:"primary" | "secondary",
    text:string,
    startIcon?:ReactElement,
    onClick?: ()=>void,
    fullWidth?:boolean,
    loading? : boolean
}
const varientsClass = {
    "primary" : "bg-blue-500 text-white",
    "secondary":"bg-blue-300 text-black"
}
const defaultStyles = "px-3 py-2 rounded-md font-semibold flex justify-center items-center "

function Button({varient,text,startIcon,onClick,fullWidth,loading}:ButtonProps) {

  return <button onClick={onClick} className={varientsClass[varient]+" "+ defaultStyles + ` ${fullWidth ? "w-full": ""} ` }>
    <span className="px-1 ">
    {startIcon}
    </span>
   
    {text}</button>
}

export default Button