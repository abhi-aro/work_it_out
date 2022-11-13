import React from "react";
import { Route, Routes } from "react-router-dom";
import CreateExercise from "./components/Exercise/CreateExercise";
import EditExercise from "./components/Exercise/EditExercise";
import ExerciseList from "./components/Exercise/ExerciseList";
import CreateUser from "./components/User/CreateUser";

const routes = () => {
	return (
		<Routes>
			<Route path="/" exact element={<ExerciseList />} />
			<Route path="/edit/:id" element={<EditExercise />} />
			<Route path="/create" element={<CreateExercise />} />
			<Route path="/user" element={<CreateUser />} />
		</Routes>
	);
};

export default routes;
