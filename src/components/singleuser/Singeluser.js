import React from "react";
import Button from "../Button";
import "./singleuser.css";
import {
  deleteUser,
  setEdituser,
  setEdituserfromclass,
} from "../../redux/actions/actions";
import { useDispatch } from "react-redux/es/hooks/useDispatch";

const Singleuser = ({ name, address, contactno, id, flag }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  const handleEdit = (id) => {
    if (flag === "fromfunction") {
      dispatch(setEdituser(id));
    } else {
      dispatch(setEdituserfromclass(id));
    }
  };
  return (
    <div className="singleuser">
      <p>Name:{name}</p>
      <p>Address:{address}</p>
      <p>Contactno:{contactno}</p>
      <Button name="Edit" onClick={() => handleEdit(id)} />
      <Button name="Delete" onClick={() => handleDelete(id)} />
    </div>
  );
};

export default Singleuser;
