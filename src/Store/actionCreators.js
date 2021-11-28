import axios from "axios";
import {
  SET_DATA,
  SET_UPDATE_DATA,
  SET_NEW_DATA,
  DELETE_DATA,
  SORT_USERS,
} from "./actions";

const api_constant =
  "https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data";

const setData = (users) => {
  return { type: SET_DATA, payload: users };
};

export const getData = () => {
  return (dispatch) => {
    const hitApi = async () => {
      try {
        const res = await axios.get(api_constant);
        dispatch(setData(res.data));
      } catch (error) {
        console.error("Error While getting Users=", error.message);
      }
    };
    hitApi();
  };
};

export const setUpdateData = (user) => {
  return { type: SET_UPDATE_DATA, payload: user };
};

export const editData = (selectedUser) => {
  return (dispatch) => {
    const hitApi = async () => {
      try {
        const res = await axios.put(`${api_constant}/${selectedUser.id}`, {
          email: selectedUser.email,
          name: selectedUser.name,
        });
        dispatch(setUpdateData(res.data));
      } catch (error) {
        console.error("Error While Editting User=", error.message);
      }
    };
    hitApi();
  };
};

const setNewData = (user) => {
  user.userAdded = true;
  return { type: SET_NEW_DATA, payload: user };
};

export const addData = (newUser) => {
  return (dispatch) => {
    const hitApi = async () => {
      try {
        const res = await axios.post(`${api_constant}/`, {
          email: newUser.email,
          name: newUser.name,
        });
        dispatch(setNewData(res.data));
      } catch (error) {
        console.error("Error While Adding User=", error.message);
      }
    };
    hitApi();
  };
};

export const deleteData = (user) => {
  return { type: DELETE_DATA, payload: user };
};

export const removeUser = (user) => {
  return (dispatch) => {
    const hitApi = async () => {
      try {
        const res = await axios.delete(`${api_constant}/${user.id}`);
        if (res.status === 200) {
          dispatch(deleteData(user));
        }
      } catch (error) {
        console.error("Error While Removing User=", error.message);
      }
    };
    hitApi();
  };
};

export const sortUser = () => {
  return {
    type: SORT_USERS,
  };
};
