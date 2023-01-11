import React from 'react'
import { Link } from 'react-router-dom';
import {Container, Logo, Nav, ButtonMercury, ButtonVenus, ButtonEarth, ButtonMars, ButtonJupiter, ButtonSaturn, ButtonUranus, ButtonNeptune } from './style'

const Navbar: React.FC = () => {
    return(
        <Container>
                <Logo>The Planets</Logo>
                <Nav>
                    <Link to={'/'}><ButtonMercury>Mercury</ButtonMercury></Link>
                    <Link to={'/venus'}><ButtonVenus>Venus</ButtonVenus></Link>
                    <Link to={'/earth'}><ButtonEarth>Earth</ButtonEarth></Link>
                    <Link to={'/mars'}><ButtonMars>Mars</ButtonMars></Link>
                    <Link to={'/jupiter'}><ButtonJupiter>Jupiter</ButtonJupiter></Link>
                    <Link to={'/saturn'}><ButtonSaturn>Saturn</ButtonSaturn></Link>
                    <Link to={'/uranus'}><ButtonUranus>Uranus</ButtonUranus></Link>
                    <Link to={'/neptune'}><ButtonNeptune>Neptune</ButtonNeptune></Link>
                </Nav>
        </Container>
    );
}

export default Navbar