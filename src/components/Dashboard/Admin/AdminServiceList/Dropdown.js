import React from "react";

const Dropdown = ({ handleStatus, currentStatus, id }) => {
  console.log(id, currentStatus);

  return (
    <div>
      <select
        value={currentStatus}
        defaultValue={currentStatus}
        onChange={(e) => {
          handleStatus(e, id);
        }}
        name="status"
        id="status"
      >
        <option value="pending">pending</option>
        <option value="ongoing">ongoing</option>
        <option value="done">done</option>
      </select>
    </div>
  );
};

export default Dropdown;
