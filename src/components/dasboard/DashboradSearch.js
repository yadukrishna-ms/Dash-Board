import { Search } from "lucide-react";
import { useEffect, useState } from "react";

const DashboradSearch = () => {
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    console.log("searchValue", searchValue);
  }, [searchValue]);

  const handleOnChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  return (
    <div className="dashboradSearchDiv">
      <Search />
      <input
        className="dashboradSearch"
        type="input"
        placeholder="Search"
        onChange={(e) => handleOnChange(e)}
      />
    </div>
  );
};
export default DashboradSearch;
