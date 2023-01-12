import React from "react";
import {useState} from 'react'

import {Container, ContainerContent, ContainerLeft, ContainerRight, Title, Source, ContainerButtons, Overview, InternalStructure,
    SurfaceGeology, ContainerBottom, RotationTime, RevolutionTime, Radius, AverageTemp, ImageOverView, ImageInternalStructure, ImageSurfaceGeology,
    AboutOverview, AboutInternalStructure, AboutSurfaceGeology, RotationTimeTitle, RotationTimeDays, RevolutionTimeTitle, RevolutionTimeDays, RadiusTimeTitle,
     RadiusTimeKm, AverageTempTimeTitle, AverageTempGraus, ContainerRightContent, ButtonsMobile , OverViewBtn, StructureBtn, Surface
    } from './style'

const earth = require('./../../assets/planet-earth.svg').default;
const earthInternal = require('./../../assets/planet-earth-internal.svg').default;
const earthgeology = require('./../../assets/geology-earth.png');

const Earth = () => {

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
                    {overview === true ? <ImageOverView src={earth} /> : <></>}
                    {internalStructure  === true ? <ImageInternalStructure src={earthInternal} /> : <></>}
                    {surfaceGeology === true ? <ImageSurfaceGeology src={earthgeology} /> : <></>}
                </ContainerLeft>
                <ButtonsMobile>
                    <OverViewBtn  onClick={handleChangeOverView}>Overview</OverViewBtn>
                    <StructureBtn onClick={handleChangeinternalStructure}>Structure</StructureBtn>
                    <Surface onClick={handleChangesurfaceGeology}>Surface</Surface>
                </ButtonsMobile>
                <ContainerRight>
                    <ContainerRightContent>
                        <Title>Earth</Title>
                        {overview === true ? <AboutOverview>Third planet from the Sun and the only known planet to harbor life. 
                        About 29.2% of Earth's surface is land with remaining 70.8% is 
                        covered with water. Earth's distance from the Sun, physical properties 
                        and geological history have allowed life to evolve and thrive.
                        </AboutOverview> : <></>}
                        {internalStructure  === true ? <AboutInternalStructure>
                            Earth's interior, like that of the other terrestrial planets, is divided 
                            into layers by their chemical or physical (rheological) properties. The 
                            outer layer is a chemically distinct silicate solid crust, which is 
                            underlain by a highly viscous solid mantle.
                        </AboutInternalStructure> : <></>}
                        {surfaceGeology === true ? <AboutSurfaceGeology>
                            The total surface area of Earth is about 510 million km2. The continental 
                            crust consists of lower density material such as the igneous rocks granite 
                            and andesite. Less common is basalt, a denser volcanic rock that is the 
                            primary constituent of the ocean floors.
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
                    <RotationTimeDays>0.99 Days</RotationTimeDays>
                </RotationTime>
                <RevolutionTime>
                    <RevolutionTimeTitle>Revolution Time</RevolutionTimeTitle>
                    <RevolutionTimeDays>365.26 Days</RevolutionTimeDays>
                </RevolutionTime>
                <Radius>
                    <RadiusTimeTitle>Radius</RadiusTimeTitle>
                    <RadiusTimeKm>6,371 KM</RadiusTimeKm>
                </Radius>
                <AverageTemp>
                    <AverageTempTimeTitle> Average Temp</AverageTempTimeTitle>
                    <AverageTempGraus>16°c</AverageTempGraus>
                </AverageTemp>
            </ContainerBottom>
        </Container>
    );
}

export default Earth