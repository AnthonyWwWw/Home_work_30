import { useSelector } from 'react-redux';
import { ContainerCard, 
        SkeletonContainer, 
        StyledCard as Card, 
        StyledChip as Chip } from './components';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';

export default function CardComponent() {
    const isLoading = useSelector((state) => state.swapi.loader);
    const data = useSelector((state) => state.swapi.data);
    const action = useSelector((state) => state.swapi.action);
    const skeletonCount = typeof data === 'object' && data !== null && !Array.isArray(data) ? Math.min(Object.keys(data).length, 10) : 1;

    return (
        <>
            {action && (<Chip label={action} />)}
            <ContainerCard>
                {isLoading ? (
                    <SkeletonContainer>
                        {Array.from({ length: skeletonCount }).map((_, index) => (
                            <Skeleton key={index} variant='rectangular' height={30} width='100%' sx={{ mb: 2 }} />
                        ))}
                    </SkeletonContainer>
                ) : (
                    <Card>
                        <CardContent>
                            {data ? (
                                <pre>{JSON.stringify(data, null, 3)}</pre>
                            ) : (
                                <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
                                    No data available
                                </Typography>
                            )}
                        </CardContent>
                    </Card>
                )}
            </ContainerCard>
        </>
    );
}
