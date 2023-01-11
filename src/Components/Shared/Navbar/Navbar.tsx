import React from 'react'
import {Container, Logo, Nav, ButtonMercury , ButtonVenus, ButtonEarth, ButtonMars, ButtonJupiter, ButtonSaturn, ButtonUranus, ButtonNeptune } from './style'

const Navbar: React.FC = () => {
    return(
        <Container>
            <Logo>The Planets</Logo>
            <Nav>
                <ButtonMercury>Mercury</ButtonMercury>
                <ButtonVenus>Venus</ButtonVenus>
                <ButtonEarth>Earth</ButtonEarth>
                <ButtonMars>Mars</ButtonMars>
                <ButtonJupiter>Jupiter</ButtonJupiter>
                <ButtonSaturn>Saturn</ButtonSaturn>
                <ButtonUranus>Uranus</ButtonUranus>
                <ButtonNeptune>Neptune</ButtonNeptune>
            </Nav>
        </Container>
    );
}

export default Navbar