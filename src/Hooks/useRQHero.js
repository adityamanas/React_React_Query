import axios from "axios";
import { useQuery, useQueryClient } from "react-query";
export const useRQHero = (heroId) => {
	const QueryClient = useQueryClient();
	console.log(QueryClient);
	return useQuery(
		["super-hero", heroId],
		() => {
			return axios.get(`http://localhost:4000/superheroes/${heroId}`);
		},
		{
			// refetchInterval: 3000,
			// onError: onError,
			// onSuccess: onSuccess,
			// select: (data) => {
			// 	const superheroes = data.data.map((hero) => hero.name);
			// 	return superheroes;
			// },
			initialData: () => {
				const hero = QueryClient.getQueryCache("super-heroes")?.data?.find(
					(hero) => hero.id === parseInt(heroId)
				);
				if (hero) {
					return {
						data: hero,
					};
				} else {
					return undefined;
				}
			},
		}
	);
};
