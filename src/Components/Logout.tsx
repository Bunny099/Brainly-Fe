import { useNavigate } from "react-router-dom";



export function LogoutButton() {
  const navigate = useNavigate();

  function handleLogout() {
    try{
     
    localStorage.removeItem("token");
   
        console.log("loging out");
   
    navigate("/");

    }catch(e){console.error("logout failed",e)}
    
  }

  return (
    <button
      onClick={handleLogout}
      className=" mr-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
    >
      Logout
    </button>
  );
}
