import '../App.css'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";
function Charts({info, graphdata}) {
    if (!info || !graphdata) {
        return <div></div>
    }
    console.log(graphdata)
    return (
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
            <div>
                <div className="col-span-2">
                    <h1 className="text-4xl mb-2">Monthly Contributions</h1>

                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={graphdata.contributions}>
                            <XAxis
                              dataKey="month"
                              tick={{ fontSize: 12 }}
                              interval="preserveStartEnd"
                            />
                            <YAxis />
                            <Tooltip />
                            <Line
                                type="monotone"
                                dataKey="contributions"
                                strokeWidth={2}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
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