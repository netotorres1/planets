import styled from 'styled-components';
import {tablet, mobile} from './../../../responsive'
const bg = require('./../../../assets/background-stars.svg').default;

export const BtnMenuMobile = styled.button`
    background-color: transparent;
    border:none;
    display: none;
    ${mobile({display: 'flex'})};
`
export const CircleMercury = styled.div`
    display:none;

    ${mobile({display: 'flex'})};
    ${mobile({height: '20px'})};
    ${mobile({width: '20px'})};
    ${mobile({borderRadius: '50%'})};
    ${mobile({marginRight: '20px'})};
    ${mobile({background: '#fff'})};

`
export const CircleVenus = styled.div`
    display:none;

    ${mobile({display: 'flex'})};
    ${mobile({height: '20px'})};
    ${mobile({width: '20px'})};
    ${mobile({borderRadius: '50%'})};
    ${mobile({marginRight: '20px'})};
    ${mobile({background: '#eda249'})};

`
export const CircleEarth = styled.div`
    display:none;

    ${mobile({display: 'flex'})};
    ${mobile({height: '20px'})};
    ${mobile({width: '20px'})};
    ${mobile({borderRadius: '50%'})};
    ${mobile({marginRight: '20px'})};
    ${mobile({background: '#6f2ed6'})};

`
export const CircleMars = styled.div`
    display:none;

    ${mobile({display: 'flex'})};
    ${mobile({height: '20px'})};
    ${mobile({width: '20px'})};
    ${mobile({borderRadius: '50%'})};
    ${mobile({marginRight: '20px'})};
    ${mobile({background: '#d14c32'})};

`
export const CircleJupiter = styled.div`
    display:none;

    ${mobile({display: 'flex'})};
    ${mobile({height: '20px'})};
    ${mobile({width: '20px'})};
    ${mobile({borderRadius: '50%'})};
    ${mobile({marginRight: '20px'})};
    ${mobile({background: '#d83a34'})};

`
export const CircleSaturn = styled.div`
    display:none;

    ${mobile({display: 'flex'})};
    ${mobile({height: '20px'})};
    ${mobile({width: '20px'})};
    ${mobile({borderRadius: '50%'})};
    ${mobile({marginRight: '20px'})};
    ${mobile({background: '#cd5120'})};

`
export const CircleUranus = styled.div`
    display:none;

    ${mobile({display: 'flex'})};
    ${mobile({height: '20px'})};
    ${mobile({width: '20px'})};
    ${mobile({borderRadius: '50%'})};
    ${mobile({marginRight: '20px'})};
    ${mobile({background: '#1ec2a4'})};

`
export const CircleNeptune = styled.div`
    display:none;

    ${mobile({display: 'flex'})};
    ${mobile({height: '20px'})};
    ${mobile({width: '20px'})};
    ${mobile({borderRadius: '50%'})};
    ${mobile({marginRight: '20px'})};
    ${mobile({background: '#2d68f0'})};

`
export const Container = styled.header`
    width: 100vw;
    background-color: #070724;
    color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-family: antonio;
    border-bottom: 2px solid #38384f;
    background-image: url(${bg});
    ${tablet({width: '768px'})};
    ${tablet({display: 'flex'})};
    ${tablet({flexDirection: 'column'})};
    ${tablet({justifyContent: 'center'})};

    ${mobile({width: '380px'})};
    ${mobile({flexDirection: 'row'})};
    ${mobile({justifyContent: 'space-between'})};

`
export const Logo = styled.h1`
    padding: 25px;
    text-transform: uppercase;
    font-size: 30px;
    line-height: 2px;
    font-weight: 300;
    ${tablet({padding: '50px'})};

    ${mobile({padding: '35px'})};
    ${mobile({paddingLeft: '20px'})};

`

export const Nav = styled.nav`
    display: flex;
    justify-content: space-around;
    width: 50%;
    ${tablet({width: '90%'})};

    ${mobile({display: 'none'})};


    ${mobile({flexDirection: 'column'})};
    ${mobile({position: 'absolute'})};
    ${mobile({zIndex: '1'})};
    ${mobile({top: '75px'})};
    ${mobile({width: '380px'})};
    ${mobile({background: '#070724'})};
    &.open{
        ${mobile({display: 'flex'})};
    }
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
    border-top: 3px solid transparent;
    display: flex;
    flex-direction: column;
    ${mobile({padding: '20px'})};
    ${mobile({display: 'flex'})};
    ${mobile({flexDirection: 'row'})};

    &:hover{
        border-top: 3px solid #ffffff;
        color: #fff;
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
    border-top: 3px solid transparent;
    ${tablet({padding: '20px'})};

    ${mobile({padding: '20px'})};
    ${mobile({display: 'flex'})};
    ${mobile({flexDirection: 'row'})};

    &:hover{
        border-top: 3px solid #EDA249;
        color: #fff;
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
    border-top: 3px solid transparent;
    ${tablet({padding: '20px'})};

    ${mobile({padding: '20px'})};
    ${mobile({display: 'flex'})};
    ${mobile({flexDirection: 'row'})};

    &:hover{
        border-top: 3px solid #6f2ed6;
        color: #fff;
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
    border-top: 3px solid transparent;
    ${tablet({padding: '20px'})};

    ${mobile({padding: '20px'})};
    ${mobile({display: 'flex'})};
    ${mobile({flexDirection: 'row'})};

    &:hover{
        border-top: 3px solid #d14c32;
        color: #fff;
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
    border-top: 3px solid transparent;
    ${tablet({padding: '20px'})};

    ${mobile({padding: '20px'})};
    ${mobile({display: 'flex'})};
    ${mobile({flexDirection: 'row'})};

    &:hover{
        border-top: 3px solid #d83a34;
        color: #fff;
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
    border-top: 3px solid transparent;
    ${tablet({padding: '20px'})};

    ${mobile({padding: '20px'})};
    ${mobile({display: 'flex'})};
    ${mobile({flexDirection: 'row'})};

    &:hover{
        border-top: 3px solid #cd5120;
        color: #fff;
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
    border-top: 3px solid transparent;
    ${tablet({padding: '20px'})};

    ${mobile({padding: '20px'})};
    ${mobile({display: 'flex'})};
    ${mobile({flexDirection: 'row'})};

    &:hover{
        border-top: 3px solid #1ce2a4;
        color: #fff;
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
    border-top: 3px solid transparent;
    ${tablet({padding: '20px'})};

    ${mobile({padding: '20px'})};
    ${mobile({display: 'flex'})};
    ${mobile({flexDirection: 'row'})};

    &:hover{
        border-top: 3px solid #2d68f0;
        color: #fff;
    }
`