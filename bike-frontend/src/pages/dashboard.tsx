import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const lineGraphData = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

function Dashboard() {
  return (
    <div className="flex flex-col flex-grow p-6">
      <h1 className="text-3xl text-black pb-6">Dashboard</h1>

      <div className="w-full mt-6">
        <p className="text-xl pb-3 flex items-center">
          <i className="fas fa-plus mr-3"></i> Monthly Reports
        </p>
        <div className="bg-white overflow-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                  Name
                </th>
                <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                  Job
                </th>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                  Phone
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr>
                <td className="w-1/3 text-left py-3 px-4">John Doe</td>
                <td className="w-1/3 text-left py-3 px-4">Software Engineer</td>
                <td className="text-left py-3 px-4">555-555-5555</td>
              </tr>
              <tr className="bg-gray-200">
                <td className="w-1/3 text-left py-3 px-4">Jane Smith</td>
                <td className="w-1/3 text-left py-3 px-4">Graphic Designer</td>
                <td className="text-left py-3 px-4">555-555-5555</td>
              </tr>
              <tr>
                <td className="w-1/3 text-left py-3 px-4">Sam Brown</td>
                <td className="w-1/3 text-left py-3 px-4">Software Engineer</td>
                <td className="text-left py-3 px-4">555-555-5555</td>
              </tr>
              <tr className="bg-gray-200">
                <td className="w-1/3 text-left py-3 px-4">Mary Johnson</td>
                <td className="w-1/3 text-left py-3 px-4">Project Manager</td>
                <td className="text-left py-3 px-4">555-555-5555</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex h-[500px] gap-4">
        {/* Line graph ======================================
        ===================================================== */}
        <div className="flex-1">
          <div className="w-full lg:w-1/2 pl-0 lg:pl-2 mt-12 mb-3 font-semibold text-xl">
            <i className="fas fa-plus mr-3"></i> Line Graph
          </div>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={300}
              data={lineGraphData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Bar graph ======================================
        ===================================================== */}
        <div className="flex-1">
          <div className="w-full lg:w-1/2 pl-0 lg:pl-2 mt-12 mb-3 font-semibold text-xl">
            <i className="fas fa-plus mr-3"></i> Bar Graph
          </div>

          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={300}
              data={lineGraphData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="pv"
                fill="#8884d8"
                activeBar={<Rectangle fill="pink" stroke="blue" />}
              />
              <Bar
                dataKey="uv"
                fill="#82ca9d"
                activeBar={<Rectangle fill="gold" stroke="purple" />}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
