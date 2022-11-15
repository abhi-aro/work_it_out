import React, { useState } from "react";
import axios from "axios";

const initialState = {
  user: {
    username: "",
  },
};

const CreateUser = () => {
  const [user, setUser] = useState(initialState.user);

  const onChangeUserData = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const resetUser = () => {
    setUser(initialState.user);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    let res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/users/add`, user);

    // console.log(res);
    resetUser();
  };

  return (
    <>
      <div>
        <h3>Create New User</h3>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label>Username: </label>
            <input
              type="text"
              required
              className="form-control"
              name="username"
              value={user.username}
              onChange={onChangeUserData}
            />
          </div>

          <div className="form-group pt-2">
            <input
              type="submit"
              value="Create User"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateUser;
