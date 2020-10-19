import React from "react";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { buttonList } from "../../../Data/Data";

const Sidebar = ({ handleBtnClick, adminOrUser }) => {
  const newButtonList = buttonList.filter(
    (button) => button.name === adminOrUser
  );
  console.log(adminOrUser);
  return (
    <div className="d-flex flex-column">
      {newButtonList.map((btn) => (
        <div key={newButtonList.indexOf(btn)}>
          <button id={btn.id} className="btn-sidebar">
            <FontAwesomeIcon icon={btn.icon} />
            <span onClick={handleBtnClick}>{btn.title}</span>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
