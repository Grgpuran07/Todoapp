import { actions } from "../constants/constants";

export const addUser = (payload) => {
  return {
    type: actions.adduser,
    payload: payload,
  };
};

export const deleteUser = (id) => {
  return {
    type: actions.deleteuser,
    payload: id,
  };
};

export const setEdituser = (id) => {
  return {
    type: actions.setedituser,
    payload: id,
  };
};

export const setEdituserfromclass = (id) => {
  return {
    type: actions.setedituserfromclass,
    payload: id,
  };
};

export const updateUser = (payload) => {
  return {
    type: actions.updateuser,
    payload: payload,
  };
};

export const updateUserfromclass = (payload) => {
  return {
    type: actions.updateuserfromclass,
    payload: payload,
  };
};
