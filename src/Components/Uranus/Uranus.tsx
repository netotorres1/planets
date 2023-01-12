import React from "react";
import {useState} from 'react'

import {Container, ContainerContent, ContainerLeft, ContainerRight, Title, Source, ContainerButtons, Overview, InternalStructure,
    SurfaceGeology, ContainerBottom, RotationTime, RevolutionTime, Radius, AverageTemp, ImageOverView, ImageInternalStructure, ImageSurfaceGeology,
    AboutOverview, AboutInternalStructure, AboutSurfaceGeology, RotationTimeTitle, RotationTimeDays, RevolutionTimeTitle, RevolutionTimeDays, RadiusTimeTitle,
     RadiusTimeKm, AverageTempTimeTitle, AverageTempGraus, ContainerRightContent, ButtonsMobile , OverViewBtn, StructureBtn, Surface
    } from './style'

const uranus = require('./../../assets/planet-uranus.svg').default;
const uranusInternal = require('./../../assets/planet-uranus-internal.svg').default;
const uranusgeology = require('./../../assets/geology-uranus.png');

const Saturn = () => {

    const [overview, setOverView] = useState(true)
    const [internalStructure, setinternalStructure] = useState(false)
    const [surfaceGeology, setSurfaceGeology] = useState(false)

    const handleChangeOverView = () => {
        setOverView(true)
        setinternalStructure(false)
        setSurfaceGeology(false)

    }
    const handleChangeinternalStructure = () => {
        setinternalStructure(true)
            setOverView(false)
            setSurfaceGeology(false)

    }
    const handleChangesurfaceGeology = () => {
        setSurfaceGeology(true)
        setOverView(false)
        setinternalStructure(false)

    }

    return(
        <Container>
            <ContainerContent>
                <ContainerLeft>
                    {overview === true ? <ImageOverView src={uranus} /> : <></>}
                    {internalStructure  === true ? <ImageInternalStructure src={uranusInternal} /> : <></>}
                    {surfaceGeology === true ? <ImageSurfaceGeology src={uranusgeology} /> : <></>}
                </ContainerLeft>
                <ButtonsMobile>
                    <OverViewBtn  onClick={handleChangeOverView}>Overview</OverViewBtn>
                    <StructureBtn onClick={handleChangeinternalStructure}>Structure</StructureBtn>
                    <Surface onClick={handleChangesurfaceGeology}>Surface</Surface>
                </ButtonsMobile>
                <ContainerRight>
                    <ContainerRightContent>
                        <Title>Uranus</Title>
                        {overview === true ? <AboutOverview>Uranus is the seventh planet from the Sun. Its name is a reference to the 
                            Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather 
                            of Ares. It has the third-largest planetary radius and fourth-largest planetary 
                            mass in the Solar System.
                        </AboutOverview> : <></>}
                        {internalStructure  === true ? <AboutInternalStructure>
                            The standard model of Uranus's structure is that it consists of three layers: a 
                            rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and 
                            an outer gaseous hydrogen/helium envelope. The core is relatively small, with a 
                            mass of only 0.55 Earth masses.
                        </AboutInternalStructure> : <></>}
                        {surfaceGeology === true ? <AboutSurfaceGeology>
                            The composition of Uranus's atmosphere is different from its bulk, consisting mainly 
                            of molecular hydrogen and helium. The helium molar fraction, i.e. the number of 
                            helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere. 
                        </AboutSurfaceGeology> : <></>}
                        <Source>Source: Wikipeadia</Source>
                    </ContainerRightContent>

                    <ContainerButtons>
                        <Overview onClick={handleChangeOverView}>01 Overview</Overview>
                        <InternalStructure onClick={handleChangeinternalStructure}>02 Internal Structure</InternalStructure>
                        <SurfaceGeology onClick={handleChangesurfaceGeology}>03 Surface Geology</SurfaceGeology>
                    </ContainerButtons>
                </ContainerRight>
            </ContainerContent>
            <ContainerBottom>
                <RotationTime>
                    <RotationTimeTitle>Rotation Time</RotationTimeTitle>
                    <RotationTimeDays>17.2 Hours</RotationTimeDays>
                </RotationTime>
                <RevolutionTime>
                    <RevolutionTimeTitle>Revolution Time</RevolutionTimeTitle>
                    <RevolutionTimeDays>84 Years</RevolutionTimeDays>
                </RevolutionTime>
                <Radius>
                    <RadiusTimeTitle>Radius</RadiusTimeTitle>
                    <RadiusTimeKm>25,362 KM</RadiusTimeKm>
                </Radius>
                <AverageTemp>
                    <AverageTempTimeTitle> Average Temp</AverageTempTimeTitle>
                    <AverageTempGraus>-195°c</AverageTempGraus>
                </AverageTemp>
            </ContainerBottom>
        </Container>
    );
}

export default Saturn