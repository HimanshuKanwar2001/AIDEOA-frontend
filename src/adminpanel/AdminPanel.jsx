import React, { useState } from "react";
import AdminNavbar from "./AdminNavbar";
import AdminSidebar from "./AdminSidebar";

import Resources from "./components/Resources";
import CommonLinks from './components/Commanlinks'
import Events from './components/Events/Events'
import Query from './components/Query'
import IdCard from './components/IdCard'
import Notifications from "../components/Admin_panel/Main-Content/Notifications/Notifications";
import ContactUs from "../components/Admin_panel/Main-Content/Contact_Us/Contact-us";
import OurTeams from "../components/Admin_panel/Main-Content/Our-Teams/Our-Teams";
import Main from "./DashBoardpageComponent/Main";
import Transaction_page from "./components/Transaction/Transaction_page";
import Member from "./components/Members/Member";
const AdminPanel = () => {
  const [activeComponent, setActiveComponent] = useState("Dashboard");
 

  const renderComponent = () => {
    switch (activeComponent) {
      case "Dashboard":
        return <Main /> ;
      case "Events":
        return <Events />;
        case "Transaction":
          return <Transaction_page />;
      case "Resource":
        return <Resources />;
        case "Members":
          return <Member />;
      case "Query":
        return <Query />;
      case "ID Card":
        return <IdCard />;
      case "Contact us":
        return <ContactUs/>;
      case "Notification":
        return <Notifications/>;
      case "Common Links":
        return <CommonLinks />;
        case "Our Teams":
          return <OurTeams />;  
      default:
        return <></>;
    }
  };

  return (
    <div className=" flex">
      <div className="lg:w-[20%] max-lg:w-[10%]">
        <AdminSidebar activeComponent={activeComponent} setActiveComponent={setActiveComponent}/>
      </div>
      <div className="lg:w-[80%] max-lg:w-[90%] h-screen bg-gray-200">
      
          <AdminNavbar />
       
        <div className="p-8 max-lg:px-4 bg-gray-200 h-screen">
        {renderComponent()}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;