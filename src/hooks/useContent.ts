import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";
export function useContent(){

    const [contents,setContent] = useState([]);
     function refresh(){
         axios.get(`${BACKEND_URL}/content`,{
            headers:{
                "Authorization":localStorage.getItem("token")
            }
        }).then((response)=>{
            setContent(response.data.content)
        })
    }
    useEffect(()=>{
        refresh();
        let interval = setInterval(()=>{
            refresh()
        },10*1000)
        return ()=>{
            clearInterval(interval)
        }
       
    },[])
    return {contents,refresh};
}