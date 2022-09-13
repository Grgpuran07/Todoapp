import { actions } from "../constants/constants";
const initialState = {
  users: [
    {
      name: "Puran Gurung",
      address: "Parbat",
      contactno: "9864421282",
      id: 0,
    },
    {
      name: "Sandesh Niroula",
      address: "Jhapa",
      contactno: "9864421282",
      id: 1,
    },
    {
      name: "Aashish Khanal",
      address: "Chitwan",
      contactno: "9861163272",
      id: 2,
    },
    {
      name: "Pravij Upreti",
      address: "Palpa",
      contactno: "9864456742",
      id: 3,
    },
    {
      name: "Amar Shah",
      address: "Biratnagar",
      contactno: "9864431125",
      id: 4,
    },
  ],
  edit: false,
  editUser: {
    name: "",
    address: "",
    contactno: "",
  },
  editclass: false,
  editUserforclass: {
    name: "",
    address: "",
    contactno: "",
  },
};

export const addDeletereducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.adduser:
      const newUser = { ...action.payload, id: new Date().getTime() };
      return {
        ...state,
        users: [...state.users, newUser],
      };

    case actions.deleteuser:
      const id = action.payload;
      return {
        ...state,
        users: [...state.users].filter((user) => {
          return user.id.toString() !== id.toString();
        }),
      };

    case actions.setedituser:
      const editid = action.payload;
      console.log(action.payload);
      console.log(editid);
      const editUser = state.users.find(
        (user) => user.id.toString() === editid.toString()
      );
      return {
        ...state,
        edit: true,
        editUser,
      };

    case actions.setedituserfromclass:
      const idclass = action.payload;
      const editUserforclass = state.users.find(
        (user) => user.id.toString() === idclass.toString()
      );
      return {
        ...state,
        editclass: true,
        editUserforclass,
      };

    case actions.updateuser:
      console.log(action.payload);
      const updateid = state.editUser.id;

      return {
        ...state,
        users: [...state.users].map((user) => {
          if (user.id.toString() === updateid.toString()) {
            return {
              ...action.payload,
              id: updateid,
            };
          } else {
            return user;
          }
        }),
        edit: false,
        editUser: {
          name: "",
          address: "",
          contactno: "",
        },
      };

    case actions.updateuserfromclass:
      const updatefromclassid = state.editUserforclass.id;
      console.log(action.payload);
      return {
        ...state,
        users: [...state.users].map((user) => {
          if (user.id.toString() === updatefromclassid.toString()) {
            return {
              ...action.payload,
              id: updatefromclassid,
            };
          } else {
            return user;
          }
        }),
        editclass: false,
        editUserforclass: {
          name: "",
          address: "",
          contactno: "",
        },
      };

    default:
      return state;
  }
};
