import axios from "axios";
import React, { useEffect, useState } from "react";
import Exercise from "./Exercise";

const ExerciseList = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    (async () => {
      let res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/exercises/`);
      setExercises(res.data);
    })();
  }, []);

  const deleteExercise = async (id) => {
    const deleted = await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/exercises/` + id);
    // console.log(deleted.data);
    setExercises(exercises.filter((el) => el._id !== id));
  };

  return (
    <div>
      <h3>Logged Exercises</h3>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Username</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {exercises.map((exercise) => (
            <Exercise
              exercise={exercise}
              deleteExercise={() => deleteExercise(exercise?._id)}
              key={exercise?._id}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExerciseList;
