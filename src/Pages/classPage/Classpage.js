import React, { Component } from "react";
import Filterbar from "../../components/Filterbar";
import Inputform from "../../components/Inputform";
import Userlist from "../../components/Userlist";

export default class Classpage extends Component {
  render() {
    return (
      <div className="classpage">
        <Inputform flag="fromclass" />
        <Userlist flag="fromclass"/>
      </div>
    );
  }
}
