import { ReactElement } from "react"


let defaultStyles = "flex items-center cursor-pointer m-2 rounded-md p-0.5"
function Sidebaritem({text,icons,hover,onClick}:{text:string,icons:ReactElement,hover?:boolean,onClick?:()=>void}) {
  return (
    <div onClick={onClick} className={ `${defaultStyles}  ${hover ?"hover:bg-slate-200":" "}`}  >
      
      <div className=" p-1  text-gray-700"> {icons}</div>
      <div className="p-1 pl-2 text-lg text-gray-700"> {text} </div>
      
    </div>
  )
}

export default Sidebaritem