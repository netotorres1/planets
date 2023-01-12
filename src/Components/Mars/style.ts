import styled from "styled-components";
import {tablet, mobile} from './../../responsive'

const bg = require('./../../assets/background-stars.svg').default;

export const ButtonsMobile = styled.div`
    ${mobile({width: '380px'})};
    ${mobile({position: 'relative'})};
    ${mobile({bottom: '240px'})};
    ${mobile({left: '0px'})};
    ${mobile({display: 'flex'})};
    ${mobile({justifyContent: 'space-between'})};
    ${mobile({alignItems: 'center'})};
    ${mobile({borderBottom: '1px solid #38384f'})};

    display: none;
`
export const OverViewBtn = styled.button`
    padding: 20px;
    background-color: transparent;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 2px;
    border: none;

    &:hover{
        ${mobile({borderBottom: '3px solid #d14c32'})};
    }
`
export const StructureBtn = styled.button`
    padding: 20px;
    background-color: transparent;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 2px;
    border: none;

    &:hover{
        ${mobile({borderBottom: '3px solid #d14c32'})};
    }
`
export const Surface = styled.button`
    padding: 20px;
    background-color: transparent;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 2px;
    border: none;

    &:hover{
        ${mobile({borderBottom: '3px solid #d14c32'})};
    }
`

export const ContainerRightContent = styled.div`
    ${tablet({width: '50%'})};
    ${mobile({width: '90%'})};
`

export const Container = styled.section`
    width: 100vw;
    height: 100vh;
    background-color: #070724;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: antonio;
    background-image: url(${bg});
    ${tablet({width: '768px'})};
    ${mobile({width: '380px'})};
`
export const ContainerContent = styled.div`
    width: 75%;
    height: 60%;
    display: flex;
    flex-direction: row;
    margin-top: 100px;
    ${tablet({display: 'flex'})};
    ${tablet({flexDirection: 'column'})};
    ${tablet({width: '90%'})};
    ${tablet({marginBottom: '150px'})};
    ${tablet({marginTop: '300px'})};

    ${mobile({width: '100%'})};
    ${tablet({marginTop: '300px'})};
    ${mobile({marginBottom: '150px'})};
`
export const ContainerLeft = styled.div`
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    ${tablet({width: '100%'})};

`
export const ImageOverView = styled.img`
    width: 45%;
    ${tablet({width: '30%'})};
    ${tablet({marginBottom: '100px'})};

    ${mobile({marginTop: '140px'})};
    ${mobile({marginBottom: '30px'})};
`
export const ImageInternalStructure = styled.img`
    ${tablet({width: '30%'})};
    ${tablet({marginBottom: '100px'})};

    ${mobile({marginTop: '140px'})};
    ${mobile({marginBottom: '30px'})};
`
export const ImageSurfaceGeology = styled.img`
    ${tablet({width: '30%'})};
    ${tablet({marginBottom: '100px'})};

    ${mobile({marginTop: '114px'})};
    ${mobile({marginBottom: '30px'})};
`
export const AboutOverview = styled.p`
    margin-bottom: 30px;
    color: #838391;
    font-weight: 300;
    line-height: 30px;
    letter-spacing: 1px;
    ${tablet({fontSize: '13px'})};
    ${tablet({lineHeight: '25px'})};
    ${tablet({marginBottom: '15px'})};

    ${mobile({textAlign: 'center'})};
    
`
export const AboutInternalStructure = styled.p`
    margin-bottom: 30px;
    color: #838391;
    font-weight: 300;
    line-height: 30px;
    letter-spacing: 1px;
    ${tablet({fontSize: '13px'})};
    ${tablet({lineHeight: '25px'})};
    ${tablet({marginBottom: '15px'})};

    ${mobile({textAlign: 'center'})};
`
export const AboutSurfaceGeology = styled.p`
    margin-bottom: 30px;
    color: #838391;
    font-weight: 300;
    line-height: 30px;
    letter-spacing: 1px;
    ${tablet({fontSize: '13px'})};
    ${tablet({lineHeight: '25px'})};
    ${tablet({marginBottom: '15px'})};

    ${mobile({textAlign: 'center'})};
`
export const ContainerRight = styled.div`
    width: 30%;
    ${tablet({display: 'flex'})};
    ${tablet({flexDirection: 'row'})};
    ${tablet({justifyContent: 'space-between'})};
    ${tablet({alignItems: 'center'})};
    ${tablet({width: '100%'})};

    ${mobile({flexDirection: 'column'})};
    ${mobile({width: '100%'})};
`
export const Title = styled.h2`
    font-size: 80px;
    margin-bottom: 30px;
    font-weight: 300;
    ${tablet({fontSize: '50px'})};
    ${tablet({marginBottom: '15px'})};

    ${mobile({textAlign: 'center'})};
`
export const Source = styled.p`
    margin-bottom: 30px;
    color: #838391;
    font-weight: 300;
    line-height: 30px;
    letter-spacing: 1px;

    ${mobile({textAlign: 'center'})};
`
export const ContainerButtons = styled.div`
    height: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    ${tablet({width: '40%'})};

    ${mobile({display: 'none'})};
    ${mobile({width: '90%'})};
    ${mobile({position: 'absolute'})};
    ${mobile({bottom: '630px'})};
    ${mobile({height: '70px'})};
`
export const Overview = styled.button`
    width: 100%;
    padding: 15px;
    text-align: left;
    background-color: transparent;
    border: 1px solid #38384f;
    font-weight: bold;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-family: antonio;
    margin-bottom: 15px;

    &:hover{
        background-color: #d14c32;
        border: none;
    }

    ${mobile({fontSize: '10px'})};
    
`
export const InternalStructure = styled.button`
     width: 100%;
    padding: 15px;
    text-align: left;
    background-color: transparent;
    border: 1px solid #38384f;
    font-weight: bold;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-family: antonio;
    margin-bottom: 15px;

    &:hover{
        background-color: #d14c32;
        border: none;
    }
    ${mobile({fontSize: '10px'})};
`
export const SurfaceGeology = styled.button`
     width: 100%;
    padding: 15px;
    text-align: left;
    background-color: transparent;
    border: 1px solid #38384f;
    font-weight: bold;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-family: antonio;
    margin-bottom: 15px;

    &:hover{
        background-color: #d14c32;
        border: none;
    }
    ${mobile({fontSize: '10px'})};
`
export const ContainerBottom = styled.div`
    height:400px;
    margin-top: 100px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 75%;
    justify-content: space-between; 
    ${tablet({width: '90%'})};
    ${tablet({marginBottom: '50px'})};

    ${mobile({flexDirection: 'column'})};
    ${mobile({width: '100%'})};
    
`
export const RotationTime = styled.div`
    border: 1px solid #38384f;
    width: 23%;
    height: 100%;
    padding: 20px;
    ${mobile({width: '90%'})};
    ${mobile({display: 'flex'})};
    ${mobile({justifyContent: 'space-between'})};
    ${mobile({flexDirection: 'row'})};
    ${mobile({marginBottom: '10px'})};

`
export const RevolutionTime = styled.div`
   border: 1px solid #38384f;
    width: 23%;
    height: 100%;
    padding: 20px;
    ${mobile({width: '90%'})};
    ${mobile({display: 'flex'})};
    ${mobile({justifyContent: 'space-between'})};
    ${mobile({flexDirection: 'row'})};
    ${mobile({marginBottom: '10px'})};
`
export const Radius = styled.div`
   border: 1px solid #38384f;
    width: 23%;
    height: 100%;
    padding: 20px;
    ${mobile({width: '90%'})};
    ${mobile({display: 'flex'})};
    ${mobile({justifyContent: 'space-between'})};
    ${mobile({flexDirection: 'row'})};
    ${mobile({marginBottom: '10px'})};
`
export const AverageTemp = styled.div`
   border: 1px solid #38384f;
    width: 23%;
    height: 100%;
    padding: 20px;
    ${mobile({width: '90%'})};
    ${mobile({display: 'flex'})};
    ${mobile({justifyContent: 'space-between'})};
    ${mobile({flexDirection: 'row'})};
    ${mobile({marginBottom: '10px'})};
`
export const RotationTimeDays = styled.h2`
    font-size: 30px;
    ${tablet({fontSize: '25px'})};
`

export const RevolutionTimeDays = styled.h2`
    font-size: 30px;
    ${tablet({fontSize: '25px'})};
`
export const RadiusTimeKm = styled.h2`
    font-size: 30px;
    ${tablet({fontSize: '25px'})};
`

export const AverageTempGraus = styled.h2`
    font-size: 30px;
    ${tablet({fontSize: '25px'})};
`

export const RadiusTimeTitle = styled.h4`
    font-size: 15px;
    color: #838391;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 15px;
    ${tablet({fontSize: '10px'})};

    ${tablet({fontSize: '10px'})};
    ${mobile({marginBottom: '0px'})};
`
export const AverageTempTimeTitle = styled.h4`
    font-size: 15px;
    color: #838391;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 15px;
    ${tablet({fontSize: '10px'})};
    ${mobile({marginBottom: '0px'})};
`
export const RevolutionTimeTitle = styled.h4`
    font-size: 15px;
    color: #838391;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 15px;
    ${tablet({fontSize: '10px'})};
    ${mobile({marginBottom: '0px'})};
`
export const RotationTimeTitle = styled.h4`
    font-size: 15px;
    color: #838391;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 15px;
    ${tablet({fontSize: '10px'})};
    ${mobile({marginBottom: '0px'})};
`