
import { useEffect, useState } from 'react'
import Button from '../Components/Button'
import { Card } from '../Components/Card'
import { CreateContent } from '../Components/CreateContent'
import { PluseIcon } from '../icons/Pluseicon'
import { ShareIcon } from '../icons/Shareicon'
import axios from 'axios'
import { Sidebar } from '../Components/Sidebar'
import { useContent } from '../hooks/useContent'
import { BACKEND_URL } from '../config'
import { useNavigate } from 'react-router'

export function DashBoard(){
const nav = useNavigate()
    const [modal,setModal] = useState(false)
    
    const {contents,refresh} = useContent()
     const [sharelink,setSharelink] = useState("");

     useEffect(()=>{
      refresh()
     },[modal])
    async function shareBrain(){

      const response=await axios.post(BACKEND_URL+"/share",{
        share:true
      },{
        headers:{
          "Authorization":localStorage.getItem("token")
        }
      })
      const shareUrl = `http://localhost:5173/share${response.data.hash}` ;
      if(shareUrl){
        setSharelink(shareUrl)
        nav("/sharebrain")
      }
      alert(shareUrl)
    }
    return<>
    <div >
      <div>
      
      <Sidebar/>
         
      </div>
      <div className='ml-80 bg-gray-100 h-screen  '>
      <CreateContent open={modal} onClose={()=>setModal(false)}/>
    
    <div className='flex justify-end gap-2 p-2'>
    <Button onClick={()=>setModal(true)} varient='primary' text='Add content' startIcon={<PluseIcon/>}></Button>
    <Button onClick={shareBrain} varient='secondary' text='Share Brain' startIcon={<ShareIcon/>}></Button>
    </div>
 
 <div className='flex gap-2 flex-wrap'>
  {contents.map(({title,link,type})=> <Card title={title} link={link} type={type} ></Card>)}
 </div>
      </div>
    </div>
    </>
}