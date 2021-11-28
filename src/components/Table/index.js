import React, { useState } from "react";
import ConfirmationModal from "../ConfirmationModal";
import { useDispatch } from "react-redux";
import { sortUser } from "../../Store/actionCreators";
const Table = ({ setShowForm, users, setSelectedUser, selectedUser }) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const handleEdit = (item) => {
    setSelectedUser(item);
    setShowForm(true);
  };

  const handelDelete = (item) => {
    setSelectedUser(item);
    setShowModal(true);
  };

  const handleSort = () => {
    dispatch(sortUser());
  };
  return (
    <>
      <div className="p-4 overflow-x-auto">
        <table className="w-full text-center ">
          <thead className="bg-gray-100 border-2 px-8 shadow-sm text-gray-900">
            <tr>
              <th className="py-8 pl-4 px-2">Id</th>
              <th className="py-8 px-2">Name</th>
              <th className="py-8 px-2">
                <button className="mr-2" onClick={handleSort}>
                  <i className="fa fa-sort"></i>
                </button>
                Username
              </th>
              <th className="py-8 px-2	">Email</th>
              <th className="py-8 px-2">City</th>
              <th className="py-8 w-32 px-2">Edit</th>
              <th className="py-8  w-32 px-2">Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item) => {
              return (
                <tr className="border-2 text-gray-700" key={item.id}>
                  <td className="py-1 md:py-6 pl-4 px-2  ">
                    <p> {item?.id || ""}</p>
                  </td>
                  <td className="py-2 md:py-6  px-2  ">
                    <p>{item?.name || ""}</p>
                  </td>
                  <td className="py-2 md:py-6 px-2 ">
                    <p>{item?.username || ""}</p>
                  </td>
                  <td className="py-2 md:py-6 	px-2 ">
                    <p>{item?.email || ""}</p>
                  </td>
                  <td className="py-2 md:py-6 px-2 ">
                    <p>{item?.address?.city || ""}</p>
                  </td>
                  <td className="py-2 md:py-6 px-2  ">
                    <button
                      className="bg-yellow-500 hover:bg-yellow-700 transition duration-500 ease-in-out 
                      transform hover:-translate-y-1 hover:scale-110 text-white w-16  lg:w-20 	 py-2 rounded-md text-xs lg:text-sm"
                      onClick={() => handleEdit(item)}
                    >
                      Edit
                    </button>
                  </td>
                  <td className="py-2 md:py-6  px-2">
                    <button
                      className="bg-red-500 hover:bg-red-600 transition duration-500 ease-in-out 
                    transform hover:-translate-y-1 hover:scale-110 text-white w-16  lg:w-20 	 py-2 rounded-md text-xs lg:text-sm"
                      onClick={() => handelDelete(item)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {showModal && (
        <ConfirmationModal
          setShowModal={setShowModal}
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
        />
      )}
    </>
  );
};

export default Table;
