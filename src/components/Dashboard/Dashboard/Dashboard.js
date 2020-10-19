import React from "react";
import "./Dashboard.css";
import logo from "../../../images/logos/logo.png";
import Sidebar from "../sidebar/Sidebar";
import { useState } from "react";
import Order from "../User/Order/Order";
import ServiceList from "../User/ServiceList/ServiceList";
import Review from "../User/Review/Review";
import AdminServiceList from "../Admin/AdminServiceList/AdminServiceList";
import AdService from "../Admin/AdService/AdService";
import MakeAdmin from "../Admin/MakeAdmin/MakeAdmin";

const Dashboard = () => {
  const adminOrUser = sessionStorage.getItem("adminOrUser");
  console.log(adminOrUser);
  const name = sessionStorage.getItem("name");
  const photo = sessionStorage.getItem("photo");
  console.log(photo);
  const defaultSelectedPage = () => {
    if (adminOrUser === "admin") return ["admin-service-list", "Service list"];
    if (adminOrUser === "user") return ["user-order", "Place Order"];
  };

  const defaultPageInfo = defaultSelectedPage();
  const [dashPage, setDashPage] = useState({
    selectedPage: defaultPageInfo[0],
    title: defaultPageInfo[1],
  });

  const handleBtnClick = (e) => {
    e.preventDefault();
    const targetElement = e.target.parentElement;
    const newPage = { ...dashPage };
    newPage.selectedPage = targetElement.id;
    newPage.title = e.target.innerText;
    setDashPage(newPage);
  };

  return (
    <section className="dashboard">
      <div className="top-bar ">
        <img className="logo-brand" src={logo} alt="" />
        <h3>{dashPage.title}</h3>
        <div className="d-flex ml-auto align-items-center">
          <div className="logged-img-container">
            <img src={photo} alt="" />
          </div>
          <h6>{name}</h6>
        </div>
      </div>
      <div className="sidebar-main-container">
        <div className="sidebar">
          <div>
            <Sidebar
              adminOrUser={adminOrUser}
              handleBtnClick={handleBtnClick}
            ></Sidebar>
          </div>
        </div>
        <div className="main">
          <div className="main-content">
            {(() => {
              if (dashPage.selectedPage === "user-order")
                return <Order></Order>;
              if (dashPage.selectedPage === "user-service-list")
                return <ServiceList></ServiceList>;
              if (dashPage.selectedPage === "user-review")
                return <Review></Review>;
              if (dashPage.selectedPage === "admin-service-list")
                return <AdminServiceList></AdminServiceList>;
              if (dashPage.selectedPage === "admin-add-service")
                return <AdService></AdService>;
              if (dashPage.selectedPage === "admin-make-admin")
                return <MakeAdmin></MakeAdmin>;
            })()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
