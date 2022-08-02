import axios from "axios";
import React from "react";
import { useQuery, useQueryClient } from "react-query";
import { Link } from "react-router-dom";
import { UseAddSuperHero, useRQsuperhook } from "../Hooks/useRQsuperhook";
const fetchSuperHeros = () => {
	return axios.get("http://localhost:4000/superheroes");
};
export const RQSuperHeroesPage = () => {
	const [hName, setHName] = React.useState("");
	const [hAlter, setHAlter] = React.useState("");
	const onSuccess = (data) => {
		console.log("done", data);
	};
	const onError = (error) => {
		console.log("error", error);
	};
	const { mutate } = UseAddSuperHero();
	const AddHeros = () => {
		const hero = {
			hName,
			hAlter,
		};
		mutate(hero);
	};

	const { isLoading, data, isError, error } = useRQsuperhook(
		onSuccess,
		onError
	);
	if (isLoading) {
		return <h2>Loading...</h2>;
	}

	if (isError) {
		return <h2>{error}</h2>;
	}
	console.log(data);
	return (
		<>
			<h2>Super Heroes Page</h2>
			<input
				type={"text"}
				placeholder="Name"
				onChange={(e) => {
					setHName(e.target.value);
				}}
			/>
			{""}
			<br />
			<input
				type={"text"}
				placeholder="ALterEgo"
				onChange={(e) => {
					setHAlter(e.target.value);
				}}
			/>
			<button onCLick={AddHeros}>Add Hero</button>

			{data?.data.map((hero) => {
				return (
					<div key={hero.name}>
						<Link to={`/rq-Hero/${hero.id}`}>{hero.name}</Link>
					</div>
				);
			})}
		</>
	);
};
