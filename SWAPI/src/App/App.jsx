import Card from '../ui/components/Card';
import UseForm from '../ui/components/UseForm';
import { ContainerContent as Container, StyledButton as Button } from './components';
import { useDispatch } from 'react-redux';
import { swapiAsyncActions } from '../core/saga/swapiAsyncActions';

export default function App() {
    const dispatch = useDispatch();

    const clearData = () => {
        dispatch(swapiAsyncActions.clearSwapiDataAsync());
    };

    return (
        <Container>
            <UseForm />
            <Card />
            <Button variant='contained' onClick={clearData}>Clear</Button>
        </Container>
    );
}
