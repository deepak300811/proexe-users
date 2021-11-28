import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addData, editData, setUpdateData } from "../../Store/actionCreators";
const Form = ({ setShowForm, selectedUser, setSelectedUser }) => {
  const [name, setName] = useState(selectedUser.name || "");
  const [email, setEmail] = useState(selectedUser.email || "");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [touched, setTouched] = useState(false);
  const dispatch = useDispatch();
  const { id, userAdded } = selectedUser;
  const handelCancel = (e) => {
    e.preventDefault();
    setShowForm(false);
    setSelectedUser({});
  };

  useEffect(() => {
    window.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        return false;
      }
    });
    return () =>
      window.removeEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          return false;
        }
      });
  }, []);

  const handelSubmit = (e) => {
    e.preventDefault();
    if (!nameError && !emailError && (touched || selectedUser.id)) {
      if (id) {
        if (userAdded) {
          dispatch(setUpdateData({ id, name: name.trim(), email }));
        } else {
          dispatch(editData({ id, name: name.trim(), email }));
        }
      } else {
        dispatch(addData({ name: name.trim(), email }));
      }
      setShowForm(false);
      setSelectedUser({});
    } else {
      setTouched(true);
      if (name.length < 1) {
        setNameError(true);
      }
      if (email.length < 1) {
        setEmailError(true);
      }
    }
  };

  const handelName = (e) => {
    setTouched(true);
    const letters = /^[a-zA-Z\s]*$/;
    if (e.target.value.match(letters)) {
      setName(() => {
        const temp = e.target.value;
        if (temp.trim().length < 3 || temp.trim().length > 100) {
          setNameError(true);
        } else {
          setNameError(false);
        }
        return temp;
      });
    }
  };
  const handelEmail = (e) => {
    setTouched(true);
    const temp = e.target.value;
    const emailLetters = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (temp.length < 3 || temp.length > 100 || !temp.match(emailLetters)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    setEmail(temp);
  };

  return (
    <div className=" px-6 md:px-8 py-12 flex  items-center flex-col">
      <form
        className="w-full	md:w-9/12 lg:w-6/12 flex flex-col "
        onSubmit={handelSubmit}
      >
        <section className="custom-grid">
          <label className="text-lg text-gray-700">Name</label>
          <div>
            <input
              type="text"
              value={name}
              onChange={handelName}
              className="py-1 px-4 border-2 rounded-md focus:outline-none focus:border-red-300 w-full"
            ></input>
            {touched && nameError && (
              <p className="text-red-500 text-xs md:text-sm pl-1 mt-0.5">
                Please enter name between 3 to 100 characters.
              </p>
            )}
          </div>
          <label className="text-lg text-gray-700">Email</label>
          <div>
            <input
              type="text"
              value={email}
              onChange={handelEmail}
              className="py-1 px-4 border-2 rounded-md focus:outline-none focus:border-red-300 w-full"
            ></input>

            {touched && emailError && (
              <p className="text-red-500  pl-1 text-xs md:text-sm mt-0.5">
                Please enter email in correct format.
              </p>
            )}
          </div>
        </section>
        <section className="mt-10 self-center md:self-end	">
          <button
            className=" mr-6 bg-white border-red-400 border-2 hover:bg-red-700 hover:border-red-700 
            hover:text-white transition duration-500 ease-in-out transform hover:-translate-y-1 
            hover:scale-110 text-red-400 px-6 py-1 rounded-md text-sm md:text-base"
            onClick={handelCancel}
          >
            Cancel
          </button>
          <button
            className=" bg-green-600 border-green-600 border-2 hover:bg-green-700 hover:border-green-700  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 text-white px-6 py-1 rounded-md text-sm md:text-base"
            type="submit"
          >
            Submit
          </button>
        </section>
      </form>
    </div>
  );
};

export default Form;
