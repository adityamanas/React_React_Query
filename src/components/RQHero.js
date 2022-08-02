import React from "react";
import { useParams } from "react-router-dom";
import { useRQHero } from "../Hooks/useRQHero";

export const RQHero = () => {
	const { heroId } = useParams();
	// console.log(data);
	const { isLoading, data, isError, error } = useRQHero(heroId);
	if (isLoading) {
		return <h2>Loading...</h2>;
	}

	if (isError) {
		return <h2>{error}</h2>;
	}
	return (
		<div>
			{data?.data.name} - {data?.data}
		</div>
	);
};
