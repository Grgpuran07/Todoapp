import React, { useEffect, useState } from "react";
import Singleinput from "./Singleinput";
import { useSelector } from "react-redux";

const Filterbar = ({ setFilteritems }) => {
  const [search, setSearch] = useState("");
  const allUsers = useSelector((state) => state.datas.users);

  const handleChange = (e) => {
    setSearch(e.target.value);
    // console.log(search);
  };

  useEffect(() => {
    setFilteritems(
      [...allUsers].filter((user) => {
        return `${user.name}${user.address}${user.contactno}`
          .toLowerCase()
          .includes(search.toLowerCase());
      })
    );
  }, [search, allUsers]);

  return (
    <Singleinput
      labelname="Filter"
      value={search}
      handleChange={handleChange}
      name="search"
    />
  );
};

export default Filterbar;
