import React from 'react';
import {ErrorMessage, Formik, Form, Field} from 'formik'
//<https://www.youtube.com/watch?v=kAHVIjNZ6WI
const Login = () => (
    <div>
        <h1>Login</h1>
        <p>Ligin utilizando uma Api by Silas Sampaio</p>
        <Formik>
            <Form className="Form">
                <div className="Form-group">
                    <Field className="Form-field" />
                    <ErrorMessage className="Form-error"></ErrorMessage>
                    
                </div>
            </Form>
        </Formik>
    </div>
)

export default Login;
