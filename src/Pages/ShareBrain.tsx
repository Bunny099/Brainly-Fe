import axios from "axios"
import { BACKEND_URL } from "../config"
import { useRef, useState } from "react";
import { Card } from "../Components/Card";

export function ShareBrain(){
 const [state,setState] = useState(null);
const linkRef = useRef<HTMLInputElement>()

     async function watchBrain(){
      const link = linkRef.current?.value;
      console.log(link)
      try{
        const response =await axios.get(`${link}`);
        if(response.data){
          //@ts-ignore
          setState(response.data)
          console.log("response:" + response.data)
        }

      }catch(error){
        console.error("erroe while fetchinh", error)
      }
        

        
      }
      if(!state){
        return <div> 
          <h1 className="text-xl font-semibold p-2">  Get the share brain</h1>
        
          <input placeholder="enter the link" className="outline-none border rounded-lg px-6" type="text" ref={linkRef}/>
       <button className="bg-blue-500 px-4 py-1 rounded-xl ml-2 text-white text-xl" onClick={watchBrain}>Get Brain</button>
          </div>
        
      }
      const {username,content} = state;
      const {title,link,type} = content;

    return <div className="h-screen w-screen bg-gray-100">
       
       
      <div>Brain of: {username}</div>
      <div className='flex gap-2 flex-wrap'>
      {content.map(({title,link,type})=> <Card title={title} link={link} type={type} ></Card>)}
    </div>

    </div>
    }