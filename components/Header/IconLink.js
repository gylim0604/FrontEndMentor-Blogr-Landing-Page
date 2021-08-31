import { Link } from '@chakra-ui/react';
import React from 'react';

function IconLink({ icon, onClick, isVisible }) {
    return (
        <Link onClick={onClick} d={!isVisible ? 'none' : 'block'}>
            {icon}
        </Link>
    );
}

export default IconLink;
