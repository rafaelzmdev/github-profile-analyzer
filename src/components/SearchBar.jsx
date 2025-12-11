{/*<i class='bxr  bx-search'></i> */}
import '../app.css'
import { useState, useEffect } from "react";

function Search() {


    return (
        <div className="flex pt-1 ml-2 max-w-sameastitle">
            <textarea className="overflow-x-hidden whitespace-nowrap pl-2 pr-2 p-1 border-4 rounded-3xl border-gray-700 dark:border-gray-200 bg-gray-300 dark:bg-gray-600 resize-none w-full outline-none text-3xl max-h-14" wrap="off" placeholder="Enter username here"></textarea>
            <i className='bxr  bx-search'></i>
        </div>
    )
}
export default Search;