import { CrossIcon } from "../icons/CrossIcon"
import { Input } from "./Input"
import Button from "./Button"
import { useRef, useState } from "react"
import { BACKEND_URL } from "../config"
import axios from "axios"
import { useContent } from "../hooks/useContent"
const ContentType={
    YouTube : "YouTube",
    Twitter : "Twitter"
}
export function CreateContent({open,onClose}){

 
const linkRef = useRef<HTMLInputElement>()
const titleRef = useRef<HTMLInputElement>()
const [type,setType] = useState(ContentType.YouTube)
    async function addContent(){
        const link = linkRef.current?.value;
        
        const title = titleRef.current?.value
        await axios.post(BACKEND_URL+"/content",{link,title,type},{
            headers:{
                "Authorization":localStorage.getItem("token")
            }
        })
        onClose()
        
    }
    return <>
    <div>
        {open && <div className="h-screen w-screen fixed bg-blue-100 top-0 left-0 bg-opacity-80 flex justify-center items-center">
            <div className="bg-white min-h-60 min-w-72 border rounded-lg p-2 ">
                <div className="flex justify-end">
                    <div onClick={onClose} className="cursor-pointer">
                    <CrossIcon/>
                    </div>
                   
                    
                </div>
                <div className="flex flex-col items-center ">

                    <div className="py-2"> <Input type="text" refrence={titleRef} placeholder={'tittle'} ></Input></div>
                  <div className="py-2">
                  <Input type="text" refrence={linkRef} placeholder = {"link"}></Input>
                  </div>
                   
                </div>
                <div className="flex flex-col items-center">
                    <h1 className="text-xl font-semibold text-blue-500 mb-1">Type</h1>
                    <div className="flex gap-4 justify-center">
                    <Button onClick={()=>setType(ContentType.Twitter) } text="Twitter" varient={type===ContentType.Twitter?"primary":"secondary"}/>
                    <Button onClick={()=>setType(ContentType.YouTube) } text="Youtube" varient={type===ContentType.YouTube?"primary":"secondary"}/>
                    </div>
                    
                </div>
                <div className="flex justify-center py-2">
                <Button onClick={addContent}  varient="primary" text="Submit" loading={true}></Button>
                </div>
                
            </div>
             </div>}
    </div>
    </>
    }

