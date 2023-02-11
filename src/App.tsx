import { useRoutes } from "react-router-dom";
import { routes as r } from './router';
import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';

function App() {
	const routes = useRoutes(r);
	const [theme, colorMode] = useMode();

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<div className='app'>
					{routes}
				</div>
			</ThemeProvider>
		</ColorModeContext.Provider>

	)
}

export default App
