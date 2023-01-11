import React from 'react'
import {useState} from 'react'

import {Container, ContainerContent, ContainerLeft, ContainerRight, Title, Source, ContainerButtons, Overview, InternalStructure,
    SurfaceGeology, ContainerBottom, RotationTime, RevolutionTime, Radius, AverageTemp, ImageOverView, ImageInternalStructure, ImageSurfaceGeology,
    AboutOverview, AboutInternalStructure, AboutSurfaceGeology, RotationTimeTitle, RotationTimeDays, RevolutionTimeTitle, RevolutionTimeDays, RadiusTimeTitle,
     RadiusTimeKm, AverageTempTimeTitle, AverageTempGraus, ContainerRightContent, ButtonsMobile , OverViewBtn, StructureBtn, Surface
    } from './style'

const venus = require('./../../assets/planet-venus.svg').default;
const venusInternal = require('./../../assets/planet-venus-internal.svg').default;
const venusgeology = require('./../../assets/geology-venus.png');

const Venus = () => {
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
                    {overview === true ? <ImageOverView src={venus} /> : <></>}
                    {internalStructure  === true ? <ImageInternalStructure src={venusInternal} /> : <></>}
                    {surfaceGeology === true ? <ImageSurfaceGeology src={venusgeology} /> : <></>}
                </ContainerLeft>
                <ButtonsMobile>
                    <OverViewBtn  onClick={handleChangeOverView}>Overview</OverViewBtn>
                    <StructureBtn onClick={handleChangeinternalStructure}>Structure</StructureBtn>
                    <Surface onClick={handleChangesurfaceGeology}>Surface</Surface>
                </ButtonsMobile>
                <ContainerRight>
                    <ContainerRightContent>
                        <Title>Venus</Title>
                        {overview === true ? <AboutOverview>Venus is the second planet from the Sun. It is named after the 
                        Roman goddess of love and beauty. As the brightest natural object 
                        in Earth's night sky after the Moon, Venus can cast shadows and 
                        can be, on rare occasions, visible to the naked eye in broad daylight.
                        </AboutOverview> : <></>}
                        {internalStructure  === true ? <AboutInternalStructure>
                            The similarity in size and density between Venus and Earth suggests 
                            they share a similar internal structure: a core, mantle, and crust. 
                            Like that of Earth, Venusian core is most likely at least partially 
                            liquid because the two planets have been cooling at about the same rate.
                        </AboutInternalStructure> : <></>}
                        {surfaceGeology === true ? <AboutSurfaceGeology>
                            Much of the Venusian surface appears to have been shaped by volcanic activity. 
                            Venus has several times as many volcanoes as Earth, and it has 167 large 
                            volcanoes that are over 100 km (60 mi) across. The only volcanic complex 
                            of this size on Earth is the Big Island of Hawaii.
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
        </Container>)
}

export default Venus