import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
	palette: {
		primary: {
			main: 'rgb(30, 92, 185)',
		},
		secondary: {
			main: 'rgb(35, 112, 228);',
		},
		error: {
			main: red.A400,
		},
	},
});

export default theme;
