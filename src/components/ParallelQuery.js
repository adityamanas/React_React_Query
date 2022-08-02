import axios from "axios";
import React from "react";
import { useQueries } from "react-query";

const fetchSuperHeros = (heroId) => {
	return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};
export const ParallelQuery = ({ heroId }) => {
	const queryResult = useQueries(
		heroId.map((id) => {
			return {
				queryKey: ["super-hero", id],
				queryFn: () => fetchSuperHeros(id),
			};
		})
	);
	console.log(queryResult);
	return <div>P arallelQuery</div>;
};
