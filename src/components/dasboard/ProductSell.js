import { Search } from "lucide-react";

const ProductSell = () => {
  const initialRecord = [
    {
      image:
        "https://images.unsplash.com/photo-1620121478247-ec786b9be2fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
      name: "Abstract 3D",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      stock: "32 in stock",
      price: "45.99",
      totalSales: "20",
    },
    {
      image:
        "https://images.unsplash.com/photo-1627637820550-423ab938955c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
      name: "Sarphens Illustration",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      stock: "32 in stock",
      price: "45.99",
      totalSales: "20",
    },
  ];
  return (
    <div className="table">
      <div className="top">
        <div>
          <h3>Product Sell</h3>
        </div>
        <div className="tableFilters">
          <div className="tableSearchDiv">
            <Search />
            <input className="tableSearch" type="input" placeholder="Search" />
          </div>
          <div className="dropdown">
            <select>
              <option>Last 30 days</option>
              <option>Last 60 days</option>
              <option>Last 10 days</option>
            </select>
          </div>
        </div>
      </div>
      <table>
        <thead className="tableHeader">
          <tr>
            <td style={{ width: "50%" }}>Product Name</td>
            <td style={{ width: "12.5%", textAlign: "center" }}>Stock</td>
            <td style={{ width: "12.5%", textAlign: "center" }}>Price</td>
            <td style={{ width: "12.5%", textAlign: "center" }}>Total Sales</td>
          </tr>
        </thead>
        <hr></hr>
        <tbody className="tableBody">
          {initialRecord.map((item, index) => (
            <tr>
              <td className="details" style={{ width: "100%" }}>
                <img alt="" src={item.image} className="ProductImage"></img>
                <div className="">
                  <h4>{item.name}</h4>
                  <p className="description">{item.desc}</p>
                </div>
              </td>
              <td style={{ width: "12.5%", textAlign: "center" }}>
                {item.stock}
              </td>
              <td style={{ width: "12.5%", textAlign: "center" }}>
                $ {item.price}
              </td>
              <td style={{ width: "12.5%", textAlign: "center" }}>
                {item.totalSales}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductSell;
