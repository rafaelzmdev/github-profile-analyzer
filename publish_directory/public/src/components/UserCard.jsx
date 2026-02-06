import '../App.css'
function Card({info}) {
    if (!info) {
        return <div></div>
    }
    let email = info.email
    if (!email) {
        email = "Unavailable"
    }
    let location = info.location
    if (!location) {
        location = "Unavailable"
    }
    console.log(info)
    return(
        <div className="imgcontainer w-29.5 flex flex-col align-top justify-center">   
            <div className="w-29.5 flex justify-center">
                <img src={info.avatar_url} alt="User avatar" className="border-solid border-black border-opacity-75 backdrop-blur-[0.8px] dark:border-white dark:border-opacity-100 dark:border-[6px] dark:backdrop-blur-[0.8px] border-[9px] rounded-full max-w-[25.5rem]"></img>
            </div> 
            <div className="datacontainer w-29.5 flex flex-col items-center mt-[6px] gap-1.5">
                <p className="username text-[3.25rem] font-[605]">{info.login}</p>
                <p className="follows text-[1.75rem] font-[520]">{info.followers} Followers; Following {info.following}</p>
                <p className="reposnumber text-[1.75rem] font-[450]">Public repositories: {info.public_repos}</p>
                <p className="gists text-[1.75rem] font-[450]">Public gists: {info.public_gists}</p>
                <p className="location text-[1.75rem] font-[450]">Location: {location}</p>
                <p className="email text-[1.75rem] font-[450]">Email: {email}</p>
            </div>
        </div>
    )
}
export default Card