import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const initialState = {
  exercise: {
    username: "",
    description: "",
    duration: 0,
    date: new Date(),
  },
};

const CreateExercise = () => {
  const [exercise, setExercise] = useState(initialState.exercise);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      let res = await axios.get("http://localhost:8000/users/");
      setUsers(
        res?.data.length > 0 ? res?.data.map((user) => user.username) : []
      );
      setExercise({ ...exercise, username: res?.data[0].username });
    })();
  }, []);

  const onChangeExerciseData = (e) => {
    setExercise({ ...exercise, [e.target.name]: e.target.value });
  };

  const onChangeDate = (date) => {
    setExercise({ ...exercise, date });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    let res = await axios.post("http://localhost:8000/exercises/add", exercise);

    console.log(res);
    window.location = "/";
  };

  return (
    <>
      <div>
        <h3>Create New Exercise Log</h3>

        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label>Username: </label>
            <select
              required
              className="form-control"
              name="username"
              value={exercise.username}
              onChange={onChangeExerciseData}
            >
              {users.length > 0 &&
                users.map((username) => {
                  return (
                    <option key={username} value={username}>
                      {username}
                    </option>
                  );
                })}
            </select>
          </div>
          <div className="form-group">
            <label>Description: </label>
            <input
              type="text"
              required
              className="form-control"
              name="description"
              value={exercise.description}
              onChange={onChangeExerciseData}
            />
          </div>
          <div className="form-group">
            <label>Duration (in minutes): </label>
            <input
              type="text"
              className="form-control"
              name="duration"
              value={exercise.duration}
              onChange={onChangeExerciseData}
            />
          </div>
          <div className="form-group">
            <label>Date: </label>
            <div>
              <ReactDatePicker
                selected={exercise.date}
                onChange={onChangeDate}
              />
            </div>
          </div>

          <div className="form-group pt-2">
            <input
              type="submit"
              value="Create Exercise Log"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateExercise;
