import { Box, Button, styled, Typography as MTypography, TextField as MTextField } from '@mui/material';

export const StyledBox = styled(Box)({
    width: 700,
    height: 200,
    display: 'flex',
    alignItems: 'center',
});

export const StyledTextField = styled(MTextField)({
    width: 500,
    '& .MuiFormControl-root': {
        '& .MuiFormLabel-root': {
            color: '#000',
        },
    },
});

export const StyledButton = styled(Button)({
    width: 200,
    height: 50,
    marginLeft: 10,
    backgroundColor: '#000',
});

export const StyledTypography = styled(MTypography)({
    margin: 10,
});
