import '../App.css'

function Search({ username, handleInputChange, handleClick }) {
    return (
        <div className="flex pt-1 ml-2">
            <textarea className="min-w-420 font-normal overflow-x-hidden whitespace-nowrap pl-2 pr-2 p-1 border-4 rounded-3xl border-gray-700 dark:border-gray-200 bg-gray-300 dark:bg-gray-600 resize-none outline-none text-3xl max-h-14" wrap="off" placeholder="Enter username here" spellCheck="false" onChange={handleInputChange} value={username}></textarea>
            <i className="bx bx-search font-bold pl-2 pt-1 text-5xl cursor-pointer hover:-translate-y-0.5 transition-transform" onClick={handleClick}></i>
        </div>
    );
};
export default Search;