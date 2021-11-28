import React, { useState } from "react";
import Header from "../components/Header";
import ContainerHeader from "../components/ContainerHeader";
import Table from "../components/Table";
import Form from "../components/Form";
import { useSelector } from "react-redux";
const Container = () => {
  const [showForm, setShowForm] = useState(false);
  const users = useSelector((state) => state.users);
  const [selectedUser, setSelectedUser] = useState({});

  return (
    <div>
      <Header />
      <div className="border-2 border-gray-200 rounded-md shadow ">
        <ContainerHeader showForm={showForm} setShowForm={setShowForm} />
        {showForm ? (
          <Form
            setShowForm={setShowForm}
            selectedUser={selectedUser}
            setSelectedUser={setSelectedUser}
          />
        ) : users === null ? (
          <p className="p-8 italic">Loading...</p>
        ) : users.length > 0 ? (
          <Table
            setShowForm={setShowForm}
            users={users}
            setSelectedUser={setSelectedUser}
            selectedUser={selectedUser}
          />
        ) : (
          <p className="p-8 italic">No Data Available.</p>
        )}
      </div>
    </div>
  );
};

export default Container;
