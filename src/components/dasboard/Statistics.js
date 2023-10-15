import {
  ArrowDown,
  ArrowUp,
  CircleDollarSign,
  ClipboardList,
  ShoppingBag,
  Wallet2,
} from "lucide-react";

const Statistics = () => {
  return (
    <div className="statistics">
      <div className="card">
        <div className="icon colorLightGreen">
          <CircleDollarSign />
        </div>
        <div className="details">
          <p className="heading">Earning</p>
          <h2 className="amount">$198k</h2>
          <p className="stats">
            <span className="percentage profit">
              <ArrowUp />
              37.8%
            </span>{" "}
            this month
          </p>
        </div>
      </div>
      <div className="card">
        <div className="icon colorLightPurple">
          <ClipboardList />
        </div>
        <div className="details">
          <p className="heading">Orders</p>
          <h2 className="amount">$2.4k</h2>
          <p className="stats">
            <span className="percentage loss">
              <ArrowDown />
              2%
            </span>{" "}
            this month
          </p>
        </div>
      </div>
      <div className="card">
        <div className="icon colorLightBlue">
          <Wallet2 />
        </div>
        <div className="details">
          <p className="heading">Balance</p>
          <h2 className="amount">$2.4k</h2>
          <p className="stats">
            <span className="percentage loss">
              <ArrowDown />
              2%
            </span>{" "}
            this month
          </p>
        </div>
      </div>
      <div className="card">
        <div className="icon colorLightRed">
          <ShoppingBag />
        </div>
        <div className="details">
          <p className="heading">Total Sales</p>
          <h2 className="amount">$89k</h2>
          <p className="stats">
            <span className="percentage profit">
              <ArrowUp />
              11%
            </span>{" "}
            this month
          </p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
