import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
    sm: '320px',
    md: '1400px',
    lg: '1400px',
    xl: '2100px',
});

const customTheme = extendTheme({
    breakpoints,
    styles: {
        global: {
            // styles for the `body`
            body: {
                overflowX: 'hidden',
                boxSizing: 'border-box',
                fontSize: '16px',
                fontWeight: '300',
            },
        },
    },
    colors: {
        lightRed: 'hsl(356, 100%, 66%)',
        vLightRed: 'hsl(355, 100%, 74%)',
        vDarkBlue: 'hsl(208, 49%, 24%)',
        white: 'hsl(0, 0%, 100%)',
        grayBlue: 'hsl(240, 2%, 79%)',
        vGrayBlue: ' hsl(207, 13%, 34%)',
        vvDarkBlue: 'hsl(240, 10%, 16%)',
    },
    fonts: {
        heading: 'Overpass',
        body: 'Overpass',
    },
});

export default customTheme;
