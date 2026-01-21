import '../App.css'
function Charts({info}) {
    if (!info) {
        return <div></div>
    }
    return (
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
            <div>
                <h1 className="text-5xl">damn</h1>
            </div>
            <div>
                <h1 className="text-5xl">damn the second</h1>
            </div>
            <div>
                <h1 className="text-5xl">damn the third</h1>
            </div>
            <div>
                <h1 className="text-5xl">damn the fourth</h1>
            </div>
        </div>
    );
    
};
export default Charts;