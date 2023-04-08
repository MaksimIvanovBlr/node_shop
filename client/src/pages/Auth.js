import React from 'react';
import {Form ,Card, Container, Button } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/const';



const Auth = () => {
  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE

  return (
    <Container 

    className="d-flex justify-content-center align-items-center"
    style={{height: window.innerHeight - 54}}
    
    >
      <Card style={{width:600}} className='p-5'>
      <h2 className='ml-auto'>{isLogin ? 'Auth' : 'Registration' }</h2>
      <Form className='d-flex flex-column'>

    <Form.Control 
        className='mt-3'
        placeholder='enter your email...'
    />
    <Form.Control 
        className='mt-3'
        placeholder='enter your passwoord...'
    />
    <Form className='d-flex justify-content-between mt-3  pl-3 pr-3'>

    {isLogin ?   
    <div>Registration...<NavLink to={REGISTRATION_ROUTE}>here</NavLink></div>
    :
    <div>LogIn in account <NavLink to={LOGIN_ROUTE}>here</NavLink></div> 
    }
    <Button variant={'outline-success'}>
    {isLogin ? 'LOGIN' : 'REGISTRATION'} 
    </Button>
    </Form>

      </Form>

      </Card>
    </Container>
  );
};

export default Auth;


<Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        ></Container>