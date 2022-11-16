import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  ResponsiveContainer,
  YAxis,
  Tooltip,
} from "recharts";

const MOCK_DATA = [
  { name: "04 Apr '22", uv: 3800000 },
  {
    name: "06 Apr '22",
    uv: 4000000,
  },
  {
    name: "08 Apr '22",
    uv: 3500000,
  },
  {
    name: "10 Apr '22",
    uv: 4400000,
  },
];

const RenderLineChart = () => (
  <ResponsiveContainer width="100%" height={300}>
    <LineChart data={MOCK_DATA} margin={{ top: 5, bottom: 5, left: 10 }}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
    </LineChart>
  </ResponsiveContainer>
);

export default RenderLineChart;
