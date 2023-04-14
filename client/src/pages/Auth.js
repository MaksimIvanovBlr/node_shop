import React, { useContext, useState } from 'react';
import {Form ,Card, Container, Button } from 'react-bootstrap';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/const';
import { login, registration } from '../http/userAPI';
import { observer } from 'mobx-react-lite';
import { Context } from '..';



const Auth = observer(() => {
  const {user} = useContext(Context) 
  const location = useLocation()
  const navigate = useNavigate()
  const isLogin = location.pathname === LOGIN_ROUTE
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const click = async () => {
    try {
      let data;
    
    if (isLogin){
      data = await login(email, password)
      console.log(data);
    }else {

      data = await registration(email, password)
      console.log(data);
    }
    user.setUser(data)
    user.setIsAuth(true)
    navigate(SHOP_ROUTE)
    } catch (error) {
      alert(error.response.data.message)
    }

  }

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
        value={email}
        onChange={e => setEmail(e.target.value)}
    />
    <Form.Control 
        className='mt-3'
        placeholder='enter your password...'
        value={password}
        onChange={e => setPassword(e.target.value)}
        type='password'
    />
    <Form className='d-flex justify-content-between mt-3  pl-3 pr-3'>

    {isLogin ?   
    <div>Registration...<NavLink to={REGISTRATION_ROUTE}>here</NavLink></div>
    :
    <div>LogIn in account <NavLink to={LOGIN_ROUTE}>here</NavLink></div> 
    }
    <Button variant={'outline-success'}
    onClick={click}
    >
    {isLogin ? 'LOGIN' : 'REGISTRATION'} 
    </Button>
    </Form>

      </Form>

      </Card>
    </Container>
  );
});

export default Auth;


<Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        ></Container>