import React from "react";

const Singleinput = ({ labelname, name, value, handleChange }) => {
  return (
    <div>
      <label htmlFor={name}>{`${labelname}:`}</label>
      <input
        type="text"
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default Singleinput;
