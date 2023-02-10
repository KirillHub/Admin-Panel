import { Component, lazy, Suspense } from "react"
import SuspenseLoader from "./components/SuspenseLoader";
import { TestLazy } from "./containers/TestRouters/TestLazy";

const Loader = (Component: any) => (props: any) =>
(
	<Suspense fallback={'we loading, bro yap'}>
		<Component {...props} />
	</Suspense>
);

const MainPage = Loader(
	lazy(() => import('./containers/MainPage/MainPage'))
);


export const links = {
	main: '/',
	testRoute: '/test-route'
};

export const routes = [
	{
		path: links.main,
		element: <MainPage />
	},
	{
		path: links.testRoute,
		element: <TestLazy />
	}
];