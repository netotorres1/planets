import React from "react";
import {useState} from 'react'

import {Container, ContainerContent, ContainerLeft, ContainerRight, Title, Source, ContainerButtons, Overview, InternalStructure,
    SurfaceGeology, ContainerBottom, RotationTime, RevolutionTime, Radius, AverageTemp, ImageOverView, ImageInternalStructure, ImageSurfaceGeology,
    AboutOverview, AboutInternalStructure, AboutSurfaceGeology, RotationTimeTitle, RotationTimeDays, RevolutionTimeTitle, RevolutionTimeDays, RadiusTimeTitle,
     RadiusTimeKm, AverageTempTimeTitle, AverageTempGraus, ContainerRightContent, ButtonsMobile , OverViewBtn, StructureBtn, Surface
    } from './style'

const neptune = require('./../../assets/planet-neptune.svg').default;
const neptuneInternal = require('./../../assets/planet-neptune-internal.svg').default;
const neptunegeology = require('./../../assets/geology-neptune.png');

const Neptune = () => {

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
                    {overview === true ? <ImageOverView src={neptune} /> : <></>}
                    {internalStructure  === true ? <ImageInternalStructure src={neptuneInternal} /> : <></>}
                    {surfaceGeology === true ? <ImageSurfaceGeology src={neptunegeology} /> : <></>}
                </ContainerLeft>
                <ContainerRight>
                    <ContainerRightContent>
                        <Title>Neptune</Title>
                        {overview === true ? <AboutOverview>Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar 
                            System, it is the fourth-largest planet by diameter, the third-most-massive planet, 
                            and the densest giant planet. It is 17 times the mass of Earth, more massive than 
                            its near-twin Uranus.
                        </AboutOverview> : <></>}
                        {internalStructure  === true ? <AboutInternalStructure>
                            Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% 
                            to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. 
                            Increasing concentrations of methane, ammonia and water are found in the lower regions.
                        </AboutInternalStructure> : <></>}
                        {surfaceGeology === true ? <AboutSurfaceGeology>
                            Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also 
                            present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in 
                            the red and infrared portion of the spectrum.
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
                    <RotationTimeDays>16.08 Hours</RotationTimeDays>
                </RotationTime>
                <RevolutionTime>
                    <RevolutionTimeTitle>Revolution Time</RevolutionTimeTitle>
                    <RevolutionTimeDays>164.79 Years</RevolutionTimeDays>
                </RevolutionTime>
                <Radius>
                    <RadiusTimeTitle>Radius</RadiusTimeTitle>
                    <RadiusTimeKm>24,622 KM</RadiusTimeKm>
                </Radius>
                <AverageTemp>
                    <AverageTempTimeTitle> Average Temp</AverageTempTimeTitle>
                    <AverageTempGraus>-201°c</AverageTempGraus>
                </AverageTemp>
            </ContainerBottom>
        </Container>
    );
}

export default Neptune