import { Link } from '@chakra-ui/react';
import React from 'react';

function IconLink({ icon, onClick }) {
    return <Link onClick={onClick}>{icon}</Link>;
}

export default IconLink;
