
import React, { useState } from "react";
import UserManagement from "./UserManagement";
import CourseManagement from "./CourseManagement";
import ExpertManagement from "./ExpertManagement";
import UpdateCourse from "./UpdateCourse";


const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeContent, setActiveContent] = useState("Home");

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const renderContent = () => {
    switch (activeContent) {
      case "Home":
        return <div className="h-full"><HomeContent /></div>;
      case "UserManagement":
        return <div className="h-full"><UserManagement /></div>;
      case "CoursesManagement":
        return <div className="h-full"><CourseManagement /></div>;
      case "ExpertManagement":
        return <div className="h-full"><ExpertManagement /></div>;
      default:
        return <div>Select a menu item</div>;
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="">
        {/* Toggle Button */}
        <button
          className="md:hidden "
          onClick={toggleSidebar}
        >
          <img className="absolute top-4 left-4 h-6 " src="https://img.icons8.com/ios-filled/50/000000/menu.png" alt="Menu" />
        </button>

        {/* Sidebar */}

        <div className={` absolute top-0 left-0 w-48 h-full bg-gray-100 p-4 transition-transform transform ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:w-1/5 md:block md:min-h-screen md:fixed`}>
          <div className="logo">
            <button className="md:hidden " onClick={toggleSidebar}>
              <img
                className="absolute top-3 left-3 h-6"
                src="https://img.icons8.com/ios-filled/50/000000/multiply.png"
                alt="Close"
              />
            </button>
            <img className="h-6 mb-8 mt-6" src="https://dersyb7nfifdf.cloudfront.net/public/assets/logointervue.png" alt="Logo" />
            <div className="MenuList flex flex-col gap-6 font-semibold text-base font-serif text-indigo-900 md:text-lg">
              <a href="#" onClick={() => setActiveContent("Home")}>Home</a>
              <a href="#" onClick={() => setActiveContent("UserManagement")}>User Management</a>
              <a href="#" className="leading-5" onClick={() => setActiveContent("CoursesManagement")}>Courses Management</a>
              <a href="#" className="leading-5" onClick={() => setActiveContent("ExpertManagement")}>Expert Management</a>
            </div>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div className="flex-1  h-full">
        {renderContent()}
      </div>
    </div>
  );
};

const HomeContent = () => {
  return <div className="h-full ">Home Content</div>;
};

export default SideBar;