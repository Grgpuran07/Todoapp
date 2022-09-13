import React, { useEffect, useState } from "react";
import Button from "./Button";
import Singleinput from "./Singleinput";
import {
  addUser,
  updateUser,
  updateUserfromclass,
} from "../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux/es/exports";

const Inputform = ({ flag }) => {
  const dispatch = useDispatch();
  let initialUser = {
    name: "",
    address: "",
    contactno: "",
  };

  const [userInfo, setUserinfo] = useState(initialUser);
  const { edit } = useSelector((state) => state.datas);
  const { editclass } = useSelector((state) => state.datas);
  const { editUserforclass } = useSelector((state) => state.datas);
  const { editUser } = useSelector((state) => state.datas);

  useEffect(() => {
    if (flag === "fromfunction") {
      const { name, address, contactno } = editUser;
      setUserinfo({
        name,
        address,
        contactno,
      });
    } else {
      const { name, address, contactno } = editUserforclass;
      setUserinfo({
        name,
        address,
        contactno,
      });
    }
  }, [editUser, editUserforclass]);

  const handleChange = (e) => {
    setUserinfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleAdd = () => {
    const { name, address, contactno } = userInfo;
    if (!name || !address || !contactno) {
      alert("Enter all fields..");
      return;
    }
    dispatch(addUser(userInfo));
    setUserinfo({
      name: "",
      address: "",
      contactno: "",
    });
  };

  const handleEdit = () => {
    const { name, address, contactno } = userInfo;
    if (!name || !address || !contactno) {
      alert("Enter all fields..");
      return;
    }
    if (flag === "fromfunction") {
      dispatch(updateUser({ ...userInfo }));
    } else {
      dispatch(updateUserfromclass({ ...userInfo }));
    }
  };

  let button = "";
  if (flag === "fromfunction") {
    if (edit) {
      button = <Button name="Edit" onClick={handleEdit} />;
    } else {
      button = <Button name="Add" onClick={handleAdd} />;
    }
  } else {
    if (editclass) {
      button = <Button name="Edit" onClick={handleEdit} />;
    } else {
      button = <Button name="Add" onClick={handleAdd} />;
    }
  }

  return (
    <div>
      <Singleinput
        labelname="Name"
        name="name"
        value={userInfo.name}
        handleChange={handleChange}
      />
      <Singleinput
        labelname="Address"
        name="address"
        value={userInfo.address}
        handleChange={handleChange}
      />
      <Singleinput
        labelname="Contactno"
        name="contactno"
        value={userInfo.contactno}
        handleChange={handleChange}
      />
      {button}
    </div>
  );
};

export default Inputform;
