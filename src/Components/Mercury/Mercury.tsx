import React from "react";
import {useState} from 'react'

import {Container, ContainerContent, ContainerLeft, ContainerRight, Title, Source, ContainerButtons, Overview, InternalStructure,
    SurfaceGeology, ContainerBottom, RotationTime, RevolutionTime, Radius, AverageTemp, ImageOverView, ImageInternalStructure, ImageSurfaceGeology,
    AboutOverview, AboutInternalStructure, AboutSurfaceGeology, RotationTimeTitle, RotationTimeDays, RevolutionTimeTitle, RevolutionTimeDays, RadiusTimeTitle,
     RadiusTimeKm, AverageTempTimeTitle, AverageTempGraus, ContainerRightContent
    } from './style'

const mercury = require('./../../assets/planet-mercury.svg').default;
const mercuryInternal = require('./../../assets/planet-mercury-internal.svg').default;
const mercurygeology = require('./../../assets/geology-mercury.png');

const Mercury = () => {

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
                    {overview === true ? <ImageOverView src={mercury} /> : <></>}
                    {internalStructure  === true ? <ImageInternalStructure src={mercuryInternal} /> : <></>}
                    {surfaceGeology === true ? <ImageSurfaceGeology src={mercurygeology} /> : <></>}
                </ContainerLeft>
                <ContainerRight>
                    <ContainerRightContent>
                        <Title>Mercury</Title>
                        {overview === true ? <AboutOverview>Mercury is the smallest planet in the Solar System and the closest 
                            to the Sun. Its orbit around the Sun takes 87.97 Earth days, the 
                            shortest of all the Sun's planets. Mercury is one of four terrestrial 
                            planets in the Solar System, and is a rocky body like Earth.
                        </AboutOverview> : <></>}
                        {internalStructure  === true ? <AboutInternalStructure>
                            Mercury appears to have a solid silicate crust and mantle overlying a 
                            solid, iron sulfide outer core layer, a deeper liquid core layer, and 
                            a solid inner core. The planet's density is the second highest in the 
                            Solar System at 5.427 g/cm3 , only slightly less than Earth's density.
                        </AboutInternalStructure> : <></>}
                        {surfaceGeology === true ? <AboutSurfaceGeology>
                            Mercury's surface is similar in appearance to that of the Moon, showing 
                            extensive mare-like plains and heavy cratering, indicating that it has 
                            been geologically inactive for billions of years. It is more heterogeneous 
                            than either Mars's or the Moon’s.
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
                    <RotationTimeDays>58.6 Days</RotationTimeDays>
                </RotationTime>
                <RevolutionTime>
                    <RevolutionTimeTitle>Revolution Time</RevolutionTimeTitle>
                    <RevolutionTimeDays>87.97 Days</RevolutionTimeDays>
                </RevolutionTime>
                <Radius>
                    <RadiusTimeTitle>Radius</RadiusTimeTitle>
                    <RadiusTimeKm>2,439.7 KM</RadiusTimeKm>
                </Radius>
                <AverageTemp>
                    <AverageTempTimeTitle> Average Temp</AverageTempTimeTitle>
                    <AverageTempGraus>430°c</AverageTempGraus>
                </AverageTemp>
            </ContainerBottom>
        </Container>
    );
}

export default Mercury