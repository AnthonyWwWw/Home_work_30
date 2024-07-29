import { Box, Card, Chip, styled } from '@mui/material';

export const ContainerCard = styled(Box)({
    maxWidth: 700,
    minWidth: 275,
    minHeight: 500,
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 2,
});

export const SkeletonContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
});

export const StyledCard = styled(Card)({
    minWidth: 275,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: 'none',
});

export const StyledChip = styled(Chip)({
    width: 100,
    margin: 20,
});
