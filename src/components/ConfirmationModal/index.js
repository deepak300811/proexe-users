import React, { useEffect } from "react";
import reactDom from "react-dom";
import { useDispatch } from "react-redux";

import { deleteData, removeUser } from "../../Store/actionCreators";

const ConfirmationModal = ({ setShowModal, selectedUser, setSelectedUser }) => {
  const dispatch = useDispatch();
  const handelDelete = () => {
    if (selectedUser.userAdded) {
      dispatch(deleteData(selectedUser));
    } else {
      dispatch(removeUser(selectedUser));
    }
    setSelectedUser({});
    setShowModal(false);
  };
  const handelCancel = () => {
    setSelectedUser({});
    setShowModal(false);
  };

  useEffect(() => {
    document.getElementsByTagName("BODY")[0].classList.add("overflow-hidden");
    return () =>
      document
        .getElementsByTagName("BODY")[0]
        .classList.remove("overflow-hidden");
  }, []);

  return reactDom.createPortal(
    <div
      className="fixed top-0 left-0 w-screen h-screen
    bg-gray-900
    bg-opacity-80 overflow-hidden z-10 flex items-center justify-center"
    >
      <div className="w-10/12 md:w-9/12 lg:w-7/12 xl:w-6/12 bg-white rounded-md border-gray-100 border-2 shadow-lg">
        <header className="p-8 py-3 border-b-2 border-gray-200 rounded-t-md font-bold text-gray-800 text-xl">
          Delete
        </header>
        <div className="p-8 text-gray-900 ">
          <p className="mb-4">Below mentioned user details will be deleted</p>
          <section className="grid grid-cols-1  md:grid-cols-ModalCustom">
            <p className="font-bold">ID</p>
            <p className="mb-2 md:mb-0">{selectedUser.id}</p>
            <p className="font-bold">Name</p>
            <p className="mb-2 md:mb-0">{selectedUser.name || ""}</p>
            <p className="font-bold">Username</p>
            <p className="mb-2 md:mb-0">
              {selectedUser.username || (
                <i className="text-sm  font-light">Not available.</i>
              )}
            </p>
            <p className="font-bold">Email</p>
            <p>{selectedUser.email || ""}</p>
          </section>
          <p className="mt-4">Are you sure ?</p>
        </div>
        <footer className="p-8 py-3 border-t-2 border-gray-200 flex flex-row-reverse">
          <section>
            <button
              className="bg-gray-600 hover:bg-gray-800 transition duration-500 ease-in-out 
                    transform hover:-translate-y-1 hover:scale-110 text-white w-16  lg:w-20 	 
                    py-2 rounded-md text-sm lg:text-base mr-4 md:mr-6"
              onClick={handelCancel}
            >
              Cancle
            </button>
            <button
              className="bg-red-500 hover:bg-red-600 transition duration-500 ease-in-out 
                    transform hover:-translate-y-1 hover:scale-110 text-white w-16  lg:w-20 	 py-2 rounded-md text-sm lg:text-base"
              onClick={handelDelete}
            >
              Delete
            </button>
          </section>
        </footer>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default ConfirmationModal;
