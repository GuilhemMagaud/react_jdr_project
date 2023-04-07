import { createTheme } from '@mui/material/styles';
import BreatheFire from './BreatheFire.otf';

const breatheFire = createTheme({
    typography: {
        fontFamily: [
            'Breathe Fire',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif'
        ].join(','),
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                '@font-face': {
                    fontFamily: 'Breathe Fire',
                    src: `url(${BreatheFire})`,
                },
            },
        },
    },
});

export { breatheFire };
