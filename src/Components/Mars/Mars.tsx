import React from "react";
import {useState} from 'react'

import {Container, ContainerContent, ContainerLeft, ContainerRight, Title, Source, ContainerButtons, Overview, InternalStructure,
    SurfaceGeology, ContainerBottom, RotationTime, RevolutionTime, Radius, AverageTemp, ImageOverView, ImageInternalStructure, ImageSurfaceGeology,
    AboutOverview, AboutInternalStructure, AboutSurfaceGeology, RotationTimeTitle, RotationTimeDays, RevolutionTimeTitle, RevolutionTimeDays, RadiusTimeTitle,
     RadiusTimeKm, AverageTempTimeTitle, AverageTempGraus, ContainerRightContent
    } from './style'

const mars = require('./../../assets/planet-mars.svg').default;
const marsInternal = require('./../../assets/planet-mars-internal.svg').default;
const marsgeology = require('./../../assets/geology-mars.png');

const Mars = () => {

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
                    {overview === true ? <ImageOverView src={mars} /> : <></>}
                    {internalStructure  === true ? <ImageInternalStructure src={marsInternal} /> : <></>}
                    {surfaceGeology === true ? <ImageSurfaceGeology src={marsgeology} /> : <></>}
                </ContainerLeft>
                <ContainerRight>
                    <ContainerRightContent>
                        <Title>Mars</Title>
                        {overview === true ? <AboutOverview>Mars is the fourth planet from the Sun and the second-smallest planet 
                        in the Solar System, being larger than only Mercury. In English, Mars 
                        carries the name of the Roman god of war and is often referred to as 
                        the "Red Planet".
                        </AboutOverview> : <></>}
                        {internalStructure  === true ? <AboutInternalStructure>
                            Like Earth, Mars has differentiated into a dense metallic core overlaid 
                            by less dense materials. Scientists initially determined that the core 
                            is at least partially liquid. Current models of its interior imply a 
                            core consisting primarily of iron and nickel with about 16–17% sulfur.
                        </AboutInternalStructure> : <></>}
                        {surfaceGeology === true ? <AboutSurfaceGeology>
                            Mars is a terrestrial planet whose surface consists of minerals containing 
                            silicon and oxygen, metals, and other elements that typically make up rock. 
                            The surface is primarily composed of tholeiitic basalt, although parts are 
                            more silica-rich than typical basalt.
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
                    <RotationTimeDays>1.03 Days</RotationTimeDays>
                </RotationTime>
                <RevolutionTime>
                    <RevolutionTimeTitle>Revolution Time</RevolutionTimeTitle>
                    <RevolutionTimeDays>1.88 Years</RevolutionTimeDays>
                </RevolutionTime>
                <Radius>
                    <RadiusTimeTitle>Radius</RadiusTimeTitle>
                    <RadiusTimeKm>3,389.5 KM</RadiusTimeKm>
                </Radius>
                <AverageTemp>
                    <AverageTempTimeTitle> Average Temp</AverageTempTimeTitle>
                    <AverageTempGraus>-28°c</AverageTempGraus>
                </AverageTemp>
            </ContainerBottom>
        </Container>
    );
}

export default Mars