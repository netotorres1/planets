import React from "react";
import {useState} from 'react'

import {Container, ContainerContent, ContainerLeft, ContainerRight, Title, Source, ContainerButtons, Overview, InternalStructure,
    SurfaceGeology, ContainerBottom, RotationTime, RevolutionTime, Radius, AverageTemp, ImageOverView, ImageInternalStructure, ImageSurfaceGeology,
    AboutOverview, AboutInternalStructure, AboutSurfaceGeology, RotationTimeTitle, RotationTimeDays, RevolutionTimeTitle, RevolutionTimeDays, RadiusTimeTitle,
     RadiusTimeKm, AverageTempTimeTitle, AverageTempGraus, ContainerRightContent, ButtonsMobile , OverViewBtn, StructureBtn, Surface
    } from './style'

const jupiter = require('./../../assets/planet-jupiter.svg').default;
const jupiterInternal = require('./../../assets/planet-jupiter-internal.svg').default;
const jupitergeology = require('./../../assets/geology-jupiter.png');

const Jupiter = () => {

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
                    {overview === true ? <ImageOverView src={jupiter} /> : <></>}
                    {internalStructure  === true ? <ImageInternalStructure src={jupiterInternal} /> : <></>}
                    {surfaceGeology === true ? <ImageSurfaceGeology src={jupitergeology} /> : <></>}
                </ContainerLeft>
                <ContainerRight>
                    <ContainerRightContent>
                        <Title>Jupiter</Title>
                        {overview === true ? <AboutOverview>Jupiter is the fifth planet from the Sun and the largest in the Solar System. 
                            It is a gas giant with a mass two and a half times that of all the other 
                            planets in the Solar System combined, but less than one-thousandth the mass 
                            of the Sun.
                        </AboutOverview> : <></>}
                        {internalStructure  === true ? <AboutInternalStructure>
                            When the Juno arrived in 2016, it found that Jupiter has a very diffuse core 
                            that mixes into its mantle. A possible cause is an impact from a planet of 
                            about ten Earth masses a few million years after Jupiter's formation, which 
                            would have disrupted an originally solid Jovian core.
                        </AboutInternalStructure> : <></>}
                        {surfaceGeology === true ? <AboutSurfaceGeology>
                            The best known feature of Jupiter is the Great Red Spot, a persistent 
                            anticyclonic storm located 22° south of the equator. It is known to have 
                            existed since at least 1831, and possibly since 1665.
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
                    <RotationTimeDays>9.93 Hours</RotationTimeDays>
                </RotationTime>
                <RevolutionTime>
                    <RevolutionTimeTitle>Revolution Time</RevolutionTimeTitle>
                    <RevolutionTimeDays>11.86 Years</RevolutionTimeDays>
                </RevolutionTime>
                <Radius>
                    <RadiusTimeTitle>Radius</RadiusTimeTitle>
                    <RadiusTimeKm>69,911 KM</RadiusTimeKm>
                </Radius>
                <AverageTemp>
                    <AverageTempTimeTitle> Average Temp</AverageTempTimeTitle>
                    <AverageTempGraus>-108°c</AverageTempGraus>
                </AverageTemp>
            </ContainerBottom>
        </Container>
    );
}

export default Jupiter