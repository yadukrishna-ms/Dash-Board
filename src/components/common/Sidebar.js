import {
  GaugeCircle,
  KanbanSquare,
  UserSquare,
  Wallet2,
  Settings,
  ChevronRight,
  BadgePercent,
  HelpCircle,
  ChevronDown,
} from "lucide-react";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sideBarMain">
          <div className="logo">
            <Settings />
            Dashboard
          </div>
          <ul className="navList">
            <li className="navItem active">
              <span>
                <GaugeCircle />
                Dashboard
              </span>
            </li>
            <li className="navItem">
              <span>
                <KanbanSquare />
                Product
              </span>
              <ChevronRight />
            </li>
            <li className="navItem">
              <span>
                <UserSquare />
                Customers
              </span>
              <ChevronRight />
            </li>
            <li className="navItem">
              <span>
                <Wallet2 />
                Income
              </span>
              <ChevronRight />
            </li>

            <li className="navItem">
              <span>
                <BadgePercent />
                Promote
              </span>
              <ChevronRight />
            </li>

            <li className="navItem">
              <span>
                <HelpCircle />
                Help
              </span>
              <ChevronRight />
            </li>
          </ul>
        </div>
        <div className="userProfile">
          <div className="details">
            <img alt="" src={require("../../assets/images/profile.png")} />
            <div className="">
              <h4 className="name">Evano</h4>
              <p className="designation">Project Manager</p>
            </div>
          </div>
          <ChevronDown />
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
