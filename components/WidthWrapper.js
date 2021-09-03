import { Box } from '@chakra-ui/react';
import React from 'react';

function WidthWrapper({ children }) {
    return <Box maxW='1519px'>{children}</Box>;
}

export default WidthWrapper;
