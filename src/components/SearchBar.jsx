import { data } from 'autoprefixer';
import '../App.css'
import { useState, useEffect } from "react";




function Search() {
    const [info, setInfo] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [username, setUsername] = useState("");

    const fetchGithubApi = async (username) => {
        setLoading(true);
        try {
            const response = await fetch(`https://api.github.com/users/${username}`)
            if (!response.ok) throw new Error('Failed to fetch API')
            const data = await response.json()
            setInfo(data)
            console.log(info)
        }  catch (err) {
            setError(err.message);
            //stop the spinner/
        }  finally {
            console.log("API Fetched sucessfuly")
            setLoading(false)
            //stop the spinner/
        }
    };

    const handleClick = () => {
        console.log("Search button clicked")
        if (username) {
            fetchGithubApi(username)
            /*start the spinner*/
        } else {
            setError("Please enter a username.")
        }
    };
    const handleInputChange = (e) => {
        setUsername(e.target.value);
    }

    return (
        <div className="flex pt-1 ml-2">
            <textarea className="min-w-420 font-normal overflow-x-hidden whitespace-nowrap pl-2 pr-2 p-1 border-4 rounded-3xl border-gray-700 dark:border-gray-200 bg-gray-300 dark:bg-gray-600 resize-none outline-none text-3xl max-h-14" wrap="off" placeholder="Enter username here" spellCheck="false" onChange={handleInputChange}></textarea>
            <i className="bx bx-search font-bold pl-2 pt-1 text-5xl cursor-pointer hover:-translate-y-0.5 transition-transform" onClick={handleClick}></i>
        </div>
        
    );
};
export default Search;