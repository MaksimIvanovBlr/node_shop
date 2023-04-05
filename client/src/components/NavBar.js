import React, { useContext } from "react";
import { Context } from "..";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import { SHOP_ROUTE } from "../utils/const";
import {Button} from 'react-bootstrap';

const NavBar = () => {
    const {user} = useContext(Context)
    return (
<Navbar bg="dark" variant="dark">
        <Container>
          <NavLink to={SHOP_ROUTE}> МагазИн</NavLink>
          <Nav className="le-auto">
            <Button>Autorization</Button>

          </Nav>
        </Container>
      </Navbar>
    )
}

export default NavBar;