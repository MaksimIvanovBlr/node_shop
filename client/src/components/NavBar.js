import React, { useContext } from "react";
import { Context } from "..";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import { ADMINE_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/const";
import {Button} from 'react-bootstrap';
import {observer} from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom';


const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()

    const logOut = () => {
      user.setUser({})
      user.setIsAuth(false)
    }


    return (
<Navbar bg="dark" variant="dark">
        <Container>
          <NavLink to={SHOP_ROUTE}> МагазИн</NavLink>
          {user.isAuth ?
          <Nav className="le-auto">
            <Button variant={'outline-light'} onClick={() => logOut()}>Log out</Button>
            <Button variant={'outline-light'} onClick={() => navigate(ADMINE_ROUTE)}>Admin panell</Button>

          </Nav>
          :
          <Nav className="le-auto">
            <Button  className="ml-2" variant={'outline-light'} onClick={() => navigate(LOGIN_ROUTE)}>Autorization</Button>

          </Nav>
          }

        </Container>
      </Navbar>
    )
})

export default NavBar;