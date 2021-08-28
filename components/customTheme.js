import { extendTheme } from '@chakra-ui/react';
import { Fonts } from './Fonts';

const customTheme = extendTheme({
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
        // heading: 'Julius Sans One',
        heading: 'Ubuntu',
        body: 'Ubuntu',
    },
});

export default customTheme;
