import React, { useEffect, useState } from "react";
import Sidebar from "../components/common/Sidebar";
import MainContent from "../components/dasboard/Maincontent";
import { X } from "lucide-react";
const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  useEffect(() => {
    function handleWindowResize() {
      if (window.innerWidth <= 768) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    }

    window.addEventListener("resize", handleWindowResize);

    handleWindowResize();

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <div className="mainContainer dashboard">
      {sidebarOpen && <Sidebar />}
      {sidebarOpen && (
        <div
          className="close"
          style={{ display: "none" }}
          onClick={() => {
            setSidebarOpen(false);
          }}
        >
          <X />
        </div>
      )}
      <MainContent
        sidebarOpen={sidebarOpen}
        handleSidebarOpen={setSidebarOpen}
      />
    </div>
  );
};

export default Dashboard;
