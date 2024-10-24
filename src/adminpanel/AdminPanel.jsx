import { useState } from "react";
import AdminNavbar from "./AdminNavbar";
import AdminSidebar from "./AdminSidebar";

import Resources from "./components/Resources";

import Events from "./components/Events/Events";
import Query from "./components/Query";
import IdCard from "./components/IdCard";
import Notifications from "../components/Admin_panel/Main-Content/Notifications/Notifications";
import ContactUs from "../components/Admin_panel/Main-Content/Contact_Us/Contact-us";
import OurTeams from "../components/Admin_panel/Main-Content/Our-Teams/Our-Teams";
import Main from "./DashBoardpageComponent/Main";
import Transaction_page from "./components/Transaction/Transaction_page";
import Member from "./components/Members/Member";
import AddEvent from "./components/Events/AddEvents";


import EventDetails from "./components/Events/EventsDetails";
import UpdateEvents from "./components/Events/UpdateEvents";
import AddTeams from "./components/Our_Team/AddTeams";
import MutualTransfer from "./components/mutualtransfer/MutualTransfer";
import Missions from "./components/missions/Misisions";
import AddMissions from "./components/missions/AddMission";
import UpdateMissions from "./components/missions/UpdateMissions";
import MutualRequest from "./components/mutualrequest/MutualRequest";

import OnlineTest from "./components/onlinetest/OnlineTest";
import AddTest from "./components/onlinetest/AddTest";
import StudentNews from "./components/studentnews/StudentNews";

import LatestNews from "../components/Admin_panel/LatestNews/LatestNews.jsx";
import AddLatestNews from "../components/Admin_panel/LatestNews/AddLatestNews.jsx";

const AdminPanel = () => {
  const [activeComponent, setActiveComponent] = useState("Dashboard");
  const [eventsData, setEventsData] = useState();
  const [missionData, setMissionData] = useState();
  const renderComponent = () => {
    switch (activeComponent) {
      case "Dashboard":
        return <Main />;
      case "Events":
        return (
          <Events
            setActiveComponent={setActiveComponent}
            setEventsData={setEventsData}
          />
        );
      case "Latest News":
        return (
          <LatestNews
            setActiveComponent={setActiveComponent}
            setEventsData={setEventsData}
          />
        );
      case "Add Latest News":
        return (
          <AddLatestNews
            setActiveComponent={setActiveComponent}
            setEventsData={setEventsData}
          />
        );
      case "Transaction":
        return <Transaction_page />;
      case "Resource":

        return <Resources  setActiveComponent={setActiveComponent}/>;

      case "Add Latest News":
        return <AddLatestNews />;
      case "Members":
        return <Member />;
      case "Query":
        return <Query />;
      case "ID Card":
        return <IdCard />;
      case "Mutual Transfer":
        return <MutualTransfer />;

        case "Mutual Request":
        return <MutualRequest />
      case "Contact us":
        return <ContactUs />;
      case "Newsletter":
        return <Notifications />;
  
          case "Add Teams":
          return <AddTeams setActiveComponent={setActiveComponent} />;
        case "Add Events":
        return <AddEvent setActiveComponent={setActiveComponent} />;

      case "Events Details":
        return (
          <EventDetails
            setActiveComponent={setActiveComponent}
            eventsData={eventsData}
          />
        );
      case "Update Events":
        return (
          <UpdateEvents
            setActiveComponent={setActiveComponent}
            eventsData={eventsData}
          />
        );
      case "Our Missions":
        return (
          <Missions
            setMissionData={setMissionData}
            setActiveComponent={setActiveComponent}
          />
        );
      case "Add Missions":
        return <AddMissions setActiveComponent={setActiveComponent} />;
      case "Update Missions":
        return (
          <UpdateMissions
            missionData={missionData}
            setActiveComponent={setActiveComponent}
          />
        );

      default:
        return <></>;
    }
  };

  return (
    <div className=" flex">
      <div className="lg:w-[20%] max-lg:w-[10%]">
        <AdminSidebar
          activeComponent={activeComponent}
          setActiveComponent={setActiveComponent}
        />
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
