import React from "react";
import {useState} from 'react'

import {Container, ContainerContent, ContainerLeft, ContainerRight, Title, Source, ContainerButtons, Overview, InternalStructure,
    SurfaceGeology, ContainerBottom, RotationTime, RevolutionTime, Radius, AverageTemp, ImageOverView, ImageInternalStructure, ImageSurfaceGeology,
    AboutOverview, AboutInternalStructure, AboutSurfaceGeology, RotationTimeTitle, RotationTimeDays, RevolutionTimeTitle, RevolutionTimeDays, RadiusTimeTitle,
     RadiusTimeKm, AverageTempTimeTitle, AverageTempGraus, ContainerRightContent, ButtonsMobile , OverViewBtn, StructureBtn, Surface
    } from './style'

const saturn = require('./../../assets/planet-saturn.svg').default;
const saturnInternal = require('./../../assets/planet-saturn-internal.svg').default;
const saturngeology = require('./../../assets/geology-saturn.png');

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
                    {overview === true ? <ImageOverView src={saturn} /> : <></>}
                    {internalStructure  === true ? <ImageInternalStructure src={saturnInternal} /> : <></>}
                    {surfaceGeology === true ? <ImageSurfaceGeology src={saturngeology} /> : <></>}
                </ContainerLeft>
                <ContainerRight>
                    <ContainerRightContent>
                        <Title>Saturn</Title>
                        {overview === true ? <AboutOverview>Saturn is the sixth planet from the Sun and the second-largest in the Solar 
                            System, after Jupiter. It is a gas giant with an average radius of about 
                            nine and a half times that of Earth. It only has one-eighth the average 
                            density of Earth.
                        </AboutOverview> : <></>}
                        {internalStructure  === true ? <AboutInternalStructure>
                            Despite consisting mostly of hydrogen and helium, most of Saturn's mass 
                            is not in the gas phase, because hydrogen becomes a non-ideal liquid 
                            when the density is above 0.01 g/cm3, which is reached at a radius 
                            containing 99.9% of Saturn's mass.
                        </AboutInternalStructure> : <></>}
                        {surfaceGeology === true ? <AboutSurfaceGeology>
                            The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% 
                            helium by volume. The planet's most famous feature is its prominent ring 
                            system, which is composed mostly of ice particles with a smaller amount 
                            of rocky debris and dust. 
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
                    <RotationTimeDays>10.8 Hours</RotationTimeDays>
                </RotationTime>
                <RevolutionTime>
                    <RevolutionTimeTitle>Revolution Time</RevolutionTimeTitle>
                    <RevolutionTimeDays>29.46 Years</RevolutionTimeDays>
                </RevolutionTime>
                <Radius>
                    <RadiusTimeTitle>Radius</RadiusTimeTitle>
                    <RadiusTimeKm>58,232 KM</RadiusTimeKm>
                </Radius>
                <AverageTemp>
                    <AverageTempTimeTitle> Average Temp</AverageTempTimeTitle>
                    <AverageTempGraus>-138°c</AverageTempGraus>
                </AverageTemp>
            </ContainerBottom>
        </Container>
    );
}

export default Saturn