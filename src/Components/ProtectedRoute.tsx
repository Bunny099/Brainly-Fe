import { ReactElement } from "react";
import { Navigate } from "react-router-dom";


interface ChildrenProps{
    children:ReactElement
}
export function ProtectedRoute({children}:ChildrenProps):ReactElement{
    
    const token =localStorage.getItem("token");
    
    if(token==null){
        return <Navigate to="/signin"  />;
    }else{
        return children
    }
  
}