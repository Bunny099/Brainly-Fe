import { BACKEND_URL } from "../config";
import { DeleteIcon } from "../icons/DeleteIcon";
import { ShareIcon } from "../icons/Shareicon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YouTubeIcon } from "../icons/YouTubeIcon";
import axios from "axios";
import GetLink from "./GetLink";

interface Cardprops{
    title:string,
    link:string,
    type: "Twitter" | "YouTube"
}

export function Card({title,link,type}:Cardprops){

        let embedLink ="";
        if(type === "YouTube"){
            try{
                embedLink=GetLink(link);
            }catch(error){
                console.error("invalid youtube url", error)
            }
        }

        async function deleteContent(){
            await axios.delete(`${BACKEND_URL}/content`,{
                headers:{
                    "Authorization":localStorage.getItem("token")
                }
            })
        }

    return <div className="bg-white-400  min-h-80 min-w-80 rounded-lg border border-gray-300 bg-white m-1"  >
        <div className="flex justify-between items-center p-1">
            <div className="flex items-center">
                <div className="p-2  text-gray-900">
                {type === "Twitter" ? <TwitterIcon/> :<YouTubeIcon/>}
                </div>
               <div className="p-2 text-black text-lg">
                {title}
               </div>
               
            </div>
            <div className="flex px-2 items-center">
                <div className="p-2 text-gray-900">
                    <a href={link} target="_blank"><ShareIcon /></a>
                     
                     </div>
                <div className="p-2  text-gray-900" onClick={deleteContent}> <DeleteIcon/></div>
               
                
            </div>

        </div>
        <div className="pt-4 w-100">
            {type == "YouTube" && embedLink && <iframe width={"100%"} src={embedLink}title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}
       

    {type == "Twitter" && <blockquote className   ="twitter-tweet"><a href={link.replace("x.com","twitter.com")}></a></blockquote> }
        

        </div>
        
    </div>
}
