import React, { useContext } from "react";
import { Context } from "..";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import { LOGIN_ROUTE, SHOP_ROUTE } from "../utils/const";
import {Button} from 'react-bootstrap';
import {observer} from 'mobx-react-lite'
const NavBar = observer(() => {
    const {user} = useContext(Context)
    return (
<Navbar bg="dark" variant="dark">
        <Container>
          <NavLink to={SHOP_ROUTE}> МагазИн</NavLink>
          {user.isAuth ?
          <Nav className="le-auto">
            <Button>Log out</Button>
            <Button>Admin panell</Button>

          </Nav>
          :
          <Nav className="le-auto">
            <Button  className="ml-2" variant={'outline-light'}><NavLink to={LOGIN_ROUTE}>Autorization</NavLink></Button>

          </Nav>
          }

        </Container>
      </Navbar>
    )
})

export default NavBar;