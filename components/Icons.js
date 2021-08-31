import { Box } from '@chakra-ui/react';
import React from 'react';

export function ArrowDownLight() {
    return (
        <Box
            as='svg'
            role='img'
            width='10px'
            height='7px'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            stroke='#FFF'
            stroke-width='2'
            opacity='.75'
        >
            <path d='M1 1l4 4 4-4' />
        </Box>
    );
}

export function ArrowDownDark() {
    return (
        <Box
            as='svg'
            role='img'
            width='10px'
            height='7px'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            stroke='#FF7B86'
            stroke-width='2'
            opacity='.75'
        >
            <path d='M1 1l4 4 4-4' />
        </Box>
    );
}
