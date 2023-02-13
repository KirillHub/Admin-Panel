import { Component, lazy, Suspense } from "react"
import SuspenseLoader from "./components/suspenseLoader/SuspenseLoader";


const Loader = (Component: any) => (props: any) =>
(
	<Suspense fallback={<SuspenseLoader />}>
		<Component {...props} />
	</Suspense>
);

export const MainPage = Loader(lazy(() => import('./components/mainPage/MainPage')));
const Dashboard = Loader(lazy(() => import('./scenes/dashboard/index')));
const Team = Loader(lazy(() => import('./scenes/team/index')));
const Contacts = Loader(lazy(() => import('./scenes/contacts/index')));
const Invoices = Loader(lazy(() => import('./scenes/invoices/index')));
const Form = Loader(lazy(() => import('./scenes/form/index')));
const Calendar = Loader(lazy(() => import('./scenes/calendar/calendar')));
const FAQ = Loader(lazy(() => import('./scenes/faq/index')));
const Bar = Loader(lazy(() => import('./scenes/bar/index')));
const Pie = Loader(lazy(() => import('./scenes/pie/index')));
const Line = Loader(lazy(() => import('./scenes/line/index')));
const Geography = Loader(lazy(() => import('./scenes/geography/index')));

export const links = {
	dashboard: '/',
	team: 'team',
	contacts: 'contacts',
	invoices: 'invoices',
	form: 'form',
	calendar: 'calendar',
	faq: 'faq',
	bar: 'bar',
	pie: 'pie',
	line: 'line',
	geography: 'geography'
};

export const routes = [
	{
		path: links.dashboard,
		element: <Dashboard />
	},
	{
		path: links.team,
		element: <Team />
	},
	{
		path: links.contacts,
		element: <Contacts />
	},
	{
		path: links.invoices,
		element: <Invoices />
	},
	{
		path: links.form,
		element: <Form />
	},
	{
		path: links.calendar,
		element: <Calendar />
	},
	{
		path: links.faq,
		element: <FAQ />
	},
	{
		path: links.bar,
		element: <Bar />
	},
	{
		path: links.pie,
		element: <Pie />
	},
	{
		path: links.line,
		element: <Line />
	},
	{
		path: links.geography,
		element: <Geography />
	},
];