import { useRoutes } from "react-router-dom";
import { routes as r } from './router';

function App() {
	const routes = useRoutes(r);

	return (
		<div className='app'>
			{routes}
		</div>
	)
}

export default App
