import React from "react";
import { Link } from "react-router-dom";

const Exercise = ({ exercise, deleteExercise }) => {
  return (
    <tr>
      <td>{exercise?.username}</td>
      <td>{exercise?.description}</td>
      <td>{exercise?.duration}</td>
      <td>{exercise?.date.substring(0, 10)}</td>
      <td>
        <Link to={"/edit/" + exercise?._id}>edit</Link>
        &nbsp;|&nbsp;
        <Link to="#" onClick={() => deleteExercise(exercise?._id)}>
          delete
        </Link>
      </td>
    </tr>
  );
};

export default Exercise;
