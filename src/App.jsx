import dateformat from "dateformat";
import AgentItem from "./components/AgentItem";
import CardItem from "./components/Card";
import SidebarPart from "./components/Sidebar";
import StatisticItem from "./components/Statistics/StatisticItem";
import RenderLineChart from "./components/LineChart";
import Navbar from "./components/Navbar";

import {
  HiArrowDownRight,
  HiArrowUpRight,
  HiArrowRight,
} from "react-icons/hi2";

export default function App() {
  return (
    <div className="sm:block md:flex lg:flex gap-4 p-4 sm:p-4 md:p-0 lg:p-0 overflow-hidden">
      <div className="lg:w-1/6 sm:hidden hidden md:hidden lg:block h-screen sticky top-4">
        <SidebarPart />
      </div>
      <div className="lg:w-5/6 md:full sm:w-full sm:p-4">
        <Navbar
          profileName="Muhammad Ilham Adhim"
          position="Front-End Candidate"
        />

        <h1 className="text-3xl font-bold mt-4">Dashboard</h1>
        <p className="text-secondary mt-2">
          Today's date : {dateformat(new Date(), "dddd, dS mmmm yyyy")}
        </p>

        <div>
          {/* Statistic */}
          <div className="grid lg:grid-cols-3 sm:grid-cols-1  gap-4 my-6">
            <StatisticItem
              entity="Profit"
              amount={1150000}
              color="text-danger"
              description="0.3% compared to 7 days ago"
              icon={<HiArrowDownRight />}
            />
            <StatisticItem
              entity="Sales"
              amount={1150000}
              color="text-success"
              description="0.3% compared to 7 days ago"
              icon={<HiArrowUpRight />}
            />
            <StatisticItem
              entity="Transaction"
              amount={1150000}
              color="text-warning"
              description="0.3% compared to 7 days ago"
              icon={<HiArrowRight />}
            />
          </div>

          <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row gap-4">
            <div className="lg:w-2/3 md:w-full sm:w-full">
              {/* Chart */}
              <div className="p-4 shadow-lg">
                <div className="text-primary font-bold mb-4">Sales Chart</div>
                <RenderLineChart />
              </div>

              {/* Top Products */}

              <div className="p-4 shadow-lg">
                <div className="text-primary font-bold"> Top 5 Products </div>
                <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 gap-4">
                  <CardItem
                    product="Telkomsel"
                    amount={150000}
                    transaction={120}
                  />
                  <CardItem product="Maxim" amount={25000} transaction={98} />
                  <CardItem product="Three" amount={50000} transaction={74} />
                  <CardItem product="OVO" amount={100000} transaction={68} />
                  <CardItem product="PLN" amount={"-"} transaction={50} />
                </div>
              </div>
            </div>

            {/* Top Agents */}

            <div className="shadow-lg p-4 w-full lg:w-1/3">
              <div className="text-primary font-bold"> Top 5 Agents </div>
              <div className="grid lg:grid-col-1 md:grid-col-1 sm:grid-col-1 gap-2">
                <AgentItem
                  company="PT Suka Maju Jakarta"
                  transaction={20}
                  sales={120000}
                  profit={100000}
                />
                <AgentItem
                  company="Susi Susanti"
                  transaction={20}
                  sales={120000}
                  profit={100000}
                />
                <AgentItem
                  company="Toko Pulsa II Depok"
                  transaction={20}
                  sales={120000}
                  profit={100000}
                />
                <AgentItem
                  company="PT Suka Maju Bogor"
                  transaction={20}
                  sales={120000}
                  profit={100000}
                />
                <AgentItem
                  company="Anton Antoman"
                  transaction={20}
                  sales={120000}
                  profit={100000}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
