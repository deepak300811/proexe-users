import { createStore } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {
  DELETE_DATA,
  SET_DATA,
  SET_NEW_DATA,
  SET_UPDATE_DATA,
  SORT_USERS,
} from "./actions";
const initialState = {
  users: null,
  sort: "ASC",
};

const ascendingFunction = (user1, user2) => {
  if (!user1.username && !user2.username) {
    return 0;
  } else if (!user1.username) {
    return -1;
  } else if (!user2.username) {
    return 1;
  } else {
    return user1.username.localeCompare(user2.username);
  }
};

const descendingFunction = (user1, user2) => {
  if (!user1.username && !user2.username) {
    return 0;
  } else if (!user1.username) {
    return 1;
  } else if (!user2.username) {
    return -1;
  } else {
    return user1.username.localeCompare(user2.username) * -1;
  }
};

const reducer = (state = initialState, action) => {
  if (action.type === SET_DATA) {
    const newArr = action.payload.map((user) => {
      user.userAdded = false;
      return user;
    });
    return {
      ...state,
      users: newArr,
    };
  } else if (action.type === SET_UPDATE_DATA) {
    const newArr = state.users.map((item) => {
      if (item.id === action.payload.id) {
        item.name = action.payload.name;
        item.email = action.payload.email;
      }
      return item;
    });
    return { ...state, users: newArr };
  } else if (action.type === SET_NEW_DATA) {
    const biggestID = state.users.reduce((accu, curr) => {
      if (accu < curr.id) {
        accu = curr.id;
      }
      return accu;
    }, 0);
    const newArr = state.users.concat({ ...action.payload, id: biggestID + 1 });
    return { ...state, users: newArr };
  } else if (action.type === DELETE_DATA) {
    const newArr = state.users.filter((user) => user.id !== action.payload.id);
    return { ...state, users: newArr };
  } else if (action.type === SORT_USERS) {
    let nextSortType = "";
    if (state.sort === "ASC") {
      state.users.sort(ascendingFunction);
      nextSortType = "DESC";
    } else {
      state.users.sort(descendingFunction);
      nextSortType = "ASC";
    }
    const newArr = [...state.users];
    return { ...state, users: newArr, sort: nextSortType };
  }
  return state;
};
export const store = createStore(reducer, applyMiddleware(thunk));
