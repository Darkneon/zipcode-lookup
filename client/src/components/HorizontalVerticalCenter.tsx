import { Box } from '@mui/material';
import React, { PropsWithChildren } from 'react';

function HorizontalVerticalCenter({ children }: PropsWithChildren) {
    return <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
    >
        {children}
    </Box>
}

export default HorizontalVerticalCenter;

