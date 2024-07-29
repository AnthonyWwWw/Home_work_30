import { styled, Container, Button } from '@mui/material';

export const ContainerContent = styled(Container)({
    margin: '0 auto',
    width: 900,
    display: 'flex',
    flexDirection: 'column',
});

export const StyledButton = styled(Button)({
    width: 150,
    height: 50,
    backgroundColor: '#FFD700',
    color: '#000',
    margin: 20,
});
