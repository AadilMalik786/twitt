import React from "react";
import "./style.scss";
const ContentWrapper =React.memo(({children})=>{
    console.log("contentWrapper");
    
    return(
        // <>
        <div className="contentWrapper" >{children}</div>
        // </>
    )
})
export default ContentWrapper;