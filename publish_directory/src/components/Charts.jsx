import '../App.css'
function Charts({info, graphdata}) {
    if (!info, !graphdata) {
        return <div></div>
    }
    return (
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
            <div>
                <h1 className="text-5xl">Placeholder 1 (pie or small graph)</h1>
            </div>
            <div>
                <h1 className="text-5xl">Placeholder 2 (big graph)</h1>
            </div>
            <div>
                <h1 className="text-5xl">Placeholder 3 (another small graph)</h1>
            </div>
            <div>
                <h1 className="text-5xl">Fetch worked apparently ;D</h1>
            </div>
        </div>
    );
    
};
export default Charts;