import '../App.css'
function Card({info}) {
    if (!info) {
        return <div></div>
    }
    let email = info.email
    if (!email) {
        email = "Unavailable"
    }
    console.log(info)
    return(
        <div className="imgcontainer w-29.5 flex flex-col align-top justify-center">   
            <div className="w-29.5 flex justify-center">
                <img src={info.avatar_url} alt="User avatar" className="border-solid border-gray-300 border-opacity-45 backdrop-blur-[0.8px] dark:border-gray-700 dark:border-opacity-45 dark:backdrop-blur-[0.8px] border-[9px] rounded-full max-w-[25.5rem]"></img>
            </div> 
            <div className="datacontainer w-29.5 flex flex-col items-center mt-[-0.5rem] gap-1.5">
                <p className="username text-[3.25rem]">{info.login}</p>
                <p className="follows text-[1.75rem]">{info.followers} Followers; Following {info.following}</p>
                <p className="reposnumber text-[1.75rem]">Public repositories: {info.public_repos}</p>
                <p className="email text-[1.75rem]">Email: {email}</p>
            </div>
        </div>
    )
}
export default Card