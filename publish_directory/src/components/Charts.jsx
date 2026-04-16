import '../App.css'
function Charts({info, graphdata}) {
    if (!info, !graphdata) {
        return <div></div>
    }
    return (
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
            <div>
                <h1 className="text-5xl">Placeholder 1</h1>
            </div>
            <div>
                <h1 className="text-5xl">Placeholder 2</h1>
            </div>
            <div>
                <h1 className="text-5xl">Placeholder 3</h1>
            </div>
            <div>
                <h1 className="text-5xl">Fetch worked!</h1>
            </div>
        </div>
    );
    
};
export default Charts;