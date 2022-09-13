import React, { useState } from "react";
import Singleuser from "./singleuser/Singeluser";
import { useSelector } from "react-redux";
import Filterbar from "./Filterbar";

const Userlist = ({ flag }) => {
  const allUsers = useSelector((state) => state.datas.users);
  // console.log(allUsers);
  const [filteritems, setFilteritems] = useState(allUsers);
  let renderList = "";
  if (filteritems.length === 0) {
    renderList = <p>User store is empty..add users</p>;
  } else {
    renderList = filteritems.map((user) => {
      return <Singleuser {...user} key={user.id} flag={flag} />;
    });
  }
  return (
    <div>
      Here are list Users..
      <Filterbar setFilteritems={setFilteritems}/>
      {renderList}
    </div>
  );
};

export default Userlist;
