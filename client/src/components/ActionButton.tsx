import { Button, ButtonProps } from '@mui/material';
import React from 'react';


export type ActionButtonProps = ButtonProps
const ActionButton = ({ children, ...props }: ActionButtonProps) =>
    <Button variant="contained" size={'large'}{...props}>{children}</Button>;

export default ActionButton;