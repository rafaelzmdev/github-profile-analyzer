import '../App.css'
import { useState, useEffect } from "react";
function Card({info}) {
    if (!info) {
        return <div></div>
    }
    


    return(
        <div className="imgcontainer w-29.5 flex flex-col align-top justify-left">
            <img src={info.avatar_url} alt="User avatar" className="border-solid border-gray-300 border-opacity-45 backdrop-blur-[0.8px] dark:border-gray-700 dark:border-opacity-45 dark:backdrop-blur-[0.8px] border-8 rounded-128 w-72"></img>
            <h1>sum testing</h1>
        </div>
    )
}
export default Card