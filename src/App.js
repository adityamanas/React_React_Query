import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { HomePage } from "./components/Home.page";
import { RQSuperHeroesPage } from "./components/RQSuperHeroes.page";
import { SuperHeroesPage } from "./components/SuperHeroes.page";
import { ReactQueryDevTools } from "react-query/devtools";
import { RQHero } from "./components/RQHero";
import { ParallelQuery } from "./components/ParallelQuery";
import { PaginatedQueriesPage } from "./components/PaginatedQuery";

const queryClient = new QueryClient();
function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Router>
				<div>
					<nav>
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/super-heroes">Traditional Super Heroes</Link>
							</li>
							<li>
								<Link to="/rq-super-heroes">RQ Super Heroes</Link>
							</li>
							<li>
								<Link to="/parallel-query">parallel-Query</Link>
							</li>
							<li>
								<Link to="/PaginatedQuery">PaginatedQuery</Link>
							</li>
						</ul>
					</nav>
					<Switch>
						<Route path="/rq-Hero/:heroId">
							<RQHero />
						</Route>
						<Route path="/PaginatedQuery">
							<PaginatedQueriesPage />
						</Route>
						<Route path="/super-heroes">
							<SuperHeroesPage />
						</Route>
						<Route path="/rq-super-heroes">
							<RQSuperHeroesPage />
						</Route>
						<Route path="/parallel-query">
							<ParallelQuery heroId={[1, 2]} />
						</Route>
						<Route path="/">
							<HomePage />
						</Route>
					</Switch>
				</div>
			</Router>
			{/* <ReactQueryDevTools intialIsOpem={false} position="bottom-right" /> */}
		</QueryClientProvider>
	);
}

export default App;
