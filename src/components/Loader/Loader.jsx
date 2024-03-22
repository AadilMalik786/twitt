import React from "react";
import "./style.scss"
const Loader =()=>{
    return(
        <>
        <div className="loader-wrapper"></div>
        <div style={{position:"relative",height:"100px",width:"400px",display:"flex",justifyContent:"center"}}>
        <div className="loader">

        </div>
        </div>
        
        </>
    )
}
export default Loader;