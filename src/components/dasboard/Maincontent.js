import Chart from "./Chart";
import DashboradSearch from "./DashboradSearch";
import Greeting from "./Greeting";
import Statistics from "./Statistics";
import ProductSell from "./ProductSell";
import { Menu } from "lucide-react";

const MainContent = ({ handleSidebarOpen, sidebarOpen }) => {
  return (
    <div
      className="mainContent"
      style={
        sidebarOpen
          ? { marginLeft: "330px" }
          : { marginLeft: "0", marginRight: "0" }
      }
    >
      <div className="dashboardHeader">
        <div className="menu">
          <Menu
            className={`menuSvg ${sidebarOpen ? "sidebarOpen" : ""}`}
            onClick={() => handleSidebarOpen(!sidebarOpen)}
          />
          <Greeting />
        </div>
        <DashboradSearch />
      </div>
      <Statistics />
      <Chart />
      <ProductSell />
    </div>
  );
};
export default MainContent;
