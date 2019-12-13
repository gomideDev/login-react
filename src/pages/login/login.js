import React from 'react';
import * as yup from 'yup'
import axios from 'axios'
import {history} from '../../history'
import {ErrorMessage, Formik, Form, Field} from 'formik'
import './login.css'
//<https://www.youtube.com/watch?v=kAHVIjNZ6WI

const validations = yup.object().shape({
    email: yup.string().email().required(),
    senha: yup.string().min(8).required(),

})

const login = () => {
    var tipoUsuario = '';
    const handleSubmit = values => {
        axios.post('https://app-silas.herokuapp.com/auth/authenticate', values).then((result)=>{
            const {token, permission} = result.data;
            if(token){
                localStorage.setItem('app-token', token);
                //history.push('/');
                
                tipoUsuario = permission;
                console.log(tipoUsuario);
            }                
        });
    }
    return (
        <div>
        <div className="login-top">
            <h1>Login</h1>
            <p>Ligin utilizando uma Api by Silas Sampaio</p>
        </div>
        <Formik 
        initialValues={{}} 
        onSubmit={handleSubmit}
        validationSchema={validations}
        >
            <Form className="login">
                <div className="login-group">
                    <Field name="email" 
                    className="login-field" />
                    <ErrorMessage component='span' 
                    name='email' className="login-error"/>
                </div>
                <div className="login-group">
                    <Field 
                    name="senha" 
                    className="login-field" />
                    <ErrorMessage component='span' 
                    name='senha' className="login-error"/>
                </div>
                <button className='login-btn' type='submit'>
                    Login
                </button>
            </Form>
        </Formik>
    <h1>{tipoUsuario}</h1>
    </div>
    );
}

export default login;
