import '../App.css'
import { useState, useEffect } from "react";
function Card({info}) {
    if (!info) {
        return <div></div>
    }
    


    return(
        <div>
            <img src={info.avatar_url} alt="User avatar" className="transition-transform duration-700"></img>
        </div>
    )
}
export default Card