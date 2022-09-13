import React from "react";
import Inputform from "../../components/Inputform";
import Userlist from "../../components/Userlist";

const Functionalpage = () => {
  return (
    <div className="functionalpage">
      <Inputform flag="fromfunction" />
      <Userlist flag="fromfunction"/>
    </div>
  );
};

export default Functionalpage;
