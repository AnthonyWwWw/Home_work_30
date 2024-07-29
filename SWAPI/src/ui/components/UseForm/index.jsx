import * as React from 'react';
import { StyledBox as Box } from './components';
import { StyledTextField as TextField } from './components';
import { StyledButton as Button } from './components';
import { StyledTypography as Typography } from './components';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { swapiAsyncActions } from '../../../core/saga/swapiAsyncActions';

export default function UseForm() {
    const dispatch = useDispatch();

    return (
        <Formik
            initialValues={{ text: '' }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    dispatch(swapiAsyncActions.getSwapiDataAsync(values));
                    setSubmitting(false);
                }, 1000);
            }}
        >
            {({ isSubmitting }) => (
                <Form>
                    <Box noValidate autoComplete='off'>
                        <Typography variant='h5' gutterBottom>
                            https://swapi.dev/api/
                        </Typography>
                        <Field
                            as={TextField}
                            id='outlined-basic'
                            label='people/1/ or planets/3/ or starships/9/'
                            variant='outlined'
                            name='text'
                        />
                        <Button type='submit' variant='contained' disabled={isSubmitting}>Send</Button>
                    </Box>
                </Form>
            )}
        </Formik>
    );
}
