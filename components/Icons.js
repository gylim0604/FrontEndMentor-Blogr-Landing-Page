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
            strokeWidth='2'
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
            strokeWidth='2'
            opacity='.75'
        >
            <path d='M1 1l4 4 4-4' />
        </Box>
    );
}

export function Hamburger() {
    return (
        <Box
            as='svg'
            role='img'
            width='32px'
            height='18px'
            xmlns='http://www.w3.org/2000/svg'
            fill='#FFF'
            fillRule='evenodd'
        >
            <path d='M0 0h32v2H0zM0 8h32v2H0zM0 16h32v2H0z' />
        </Box>
    );
}

export function Close() {
    return (
        <Box
            as='svg'
            role='img'
            width='26px'
            height='26px'
            xmlns='http://www.w3.org/2000/svg'
            fill='#FFF'
            fillRule='evenodd'
        >
            <path d='M23.607.98l1.414 1.413L14.414 13l10.607 10.607-1.414 1.414L13 14.414 2.393 25.021.98 23.607 11.586 13 .98 2.393 2.393.98 13 11.586 23.607.98z' />
        </Box>
    );
}
