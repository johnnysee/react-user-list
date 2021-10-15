import React from "react";

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault;
  };

  return (
    <div>
      <form onSubmit={addUserHandler}>
        <label htmlFor>Username</label>
        <input id="username" type="text" />
        <label htmlFor>Age (Years)</label>
        <input id="age" type="number" />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
