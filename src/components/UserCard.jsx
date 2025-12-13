import '../App.css'
function Card({info}) {
    if (!info) {
        return <div></div>
    }
    console.log(info)
    return(
        <div className="imgcontainer w-29.5 flex flex-col align-top justify-left">
            <img src={info.avatar_url} alt="User avatar" className="border-solid border-gray-300 border-opacity-45 backdrop-blur-[0.8px] dark:border-gray-700 dark:border-opacity-45 dark:backdrop-blur-[0.8px] border-8 rounded-128 w-72"></img>
            <div className="datacontainer w-72 flex flex-col items-center mt-[-0.5rem] gap-1.5">
                <p className="username text-[3rem]">{info.login}</p>
                <p className="follows text-[1.25rem]">{info.followers} Followers; Following {info.following}</p>
                <p className="reposnumber text-[1.25rem]">Public repositories: {info.public_repos}</p>
            </div>
        </div>
    )
}
export default Card