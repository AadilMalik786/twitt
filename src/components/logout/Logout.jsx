import React from "react";
import { auth } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";

const LogOut=()=>{
const navigate = useNavigate();

    const handleLogout = async () => {
        try {
          await auth.signOut(); // The signOut method is part of the Firebase Authentication API
          // Redirect or handle the user state after logout
          navigate("/");
        } catch (error) {
          console.error("Error logging out:", error.message);
        }
      };

    return(
        <>
        <div style={{position:"relative",backgroundColor:"red"}}>
    <div style={{backgroundColor:"white",color:"black",height:"300px",width:"50%",position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}} >
        <div style={{cursor:"pointer"}} onClick={handleLogout}>logout</div>
    <div  style={{cursor:"pointer"}} onClick={()=>navigate(-1)}>cancel</div>
    </div>
    </div>
        </>
    )
}
export default LogOut;