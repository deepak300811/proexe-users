import React from "react";

const ContainerHeader = ({ showForm, setShowForm }) => {
  const handelAddNew = () => {
    setShowForm(true);
  };
  return (
    <div className="px-6 py-4 border-b-2">
      <div className="flex flex-row justify-between items-center">
        <p className="text-gray-600 font-semibold text-xl">
          {showForm ? "Form" : "User List"}
        </p>
        {showForm ? (
          ""
        ) : (
          <button
            className="bg-blue-600 hover:bg-blue-900 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 text-white px-8 py-2 rounded-md"
            onClick={handelAddNew}
          >
            Add new
          </button>
        )}
      </div>
    </div>
  );
};

export default ContainerHeader;
