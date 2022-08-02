import React from "react";
import axios from "axios";
import { useQuery, useMutation } from "react-query";
export const useRQsuperhook = (onError, onSuccess) => {
	return useQuery(
		"super-heros",
		() => {
			return axios.get("http://localhost:4000/superheroes");
		},
		{
			refetchInterval: 3000,
			onError: onError,
			onSuccess: onSuccess,
			// select: (data) => {
			// 	const superheroes = data.data.map((hero) => hero.name);
			// 	return superheroes;
			// },
		}
	);
};

export const UseAddSuperHero = (hero) => {
	return useMutation(axios.post("http://localhost:4000/superheroes", hero));
};
