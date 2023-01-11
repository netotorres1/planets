import styled from 'styled-components';
const bg = require('./../../../assets/background-stars.svg')

export const Container = styled.header`
    background-color: #070724;
    color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-family: antonio;
    border-bottom: 2px solid #38384f;
    background-image: url(${bg});
`
export const Logo = styled.h1`
    padding: 25px;
    text-transform: uppercase;
    font-size: 30px;
    line-height: 2px;
`

export const Nav = styled.nav`
    display: flex;
    justify-content: space-around;
    width: 50%;
    padding-right: 30px;
`

export const ButtonMercury = styled.button`
padding: 25px;
background-color: transparent;
text-transform: uppercase;
font-family: antonio;
font-size: 17px;
letter-spacing: 2px;
color: #838391;
border: none;
border-bottom: 3px solid transparent;

&:hover{
    border-bottom: 3px solid #ffffff;
}
`
export const ButtonVenus = styled.button`
padding: 25px;
background-color: transparent;
text-transform: uppercase;
font-family: antonio;
font-size: 17px;
letter-spacing: 2px;
color: #838391;
border: none;
border-bottom: 3px solid transparent;

&:hover{
    border-bottom: 3px solid #EDA249;
}
`
export const ButtonEarth = styled.button`
padding: 25px;
background-color: transparent;
text-transform: uppercase;
font-family: antonio;
font-size: 17px;
letter-spacing: 2px;
color: #838391;
border: none;
border-bottom: 3px solid transparent;

&:hover{
    border-bottom: 3px solid #6f2ed6;
}
`
export const ButtonMars = styled.button`
padding: 25px;
background-color: transparent;
text-transform: uppercase;
font-family: antonio;
font-size: 17px;
letter-spacing: 2px;
color: #838391;
border: none;
border-bottom: 3px solid transparent;

&:hover{
    border-bottom: 3px solid #d14c32;
}
`
export const ButtonJupiter = styled.button`
padding: 25px;
background-color: transparent;
text-transform: uppercase;
font-family: antonio;
font-size: 17px;
letter-spacing: 2px;
color: #838391;
border: none;
border-bottom: 3px solid transparent;

&:hover{
    border-bottom: 3px solid #d83a34;
}
`
export const ButtonSaturn = styled.button`
padding: 25px;
background-color: transparent;
text-transform: uppercase;
font-family: antonio;
font-size: 17px;
letter-spacing: 2px;
color: #838391;
border: none;
border-bottom: 3px solid transparent;

&:hover{
    border-bottom: 3px solid #cd5120;
}
`
export const ButtonUranus = styled.button`
padding: 25px;
background-color: transparent;
text-transform: uppercase;
font-family: antonio;
font-size: 17px;
letter-spacing: 2px;
color: #838391;
border: none;
border-bottom: 3px solid transparent;

&:hover{
    border-bottom: 3px solid #1ce2a4;
}
`
export const ButtonNeptune = styled.button`
padding: 25px;
background-color: transparent;
text-transform: uppercase;
font-family: antonio;
font-size: 17px;
letter-spacing: 2px;
color: #838391;
border: none;
border-bottom: 3px solid transparent;

&:hover{
    border-bottom: 3px solid #2d68f0;
}
`