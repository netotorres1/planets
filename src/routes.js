import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EarthPage from './Pages/Earth/EarthPage'
import JupiterPage from './Pages/Jupiter/JupiterPage'
import MarsPage from './Pages/Mars/MarsPage'
import MercuryPage from './Pages/Mercury/MercuryPage'
import NeptunePage from './Pages/Neptune/NeptunePage'
import SaturnPage from './Pages/Saturn/SaturnPage'
import UranusPage from './Pages/Uranus/UranusPage'
import Venus from './Pages/Venus/VenusPage'

const RoutesApp = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MercuryPage/>} />
                <Route path='/venus' element={<Venus/>} />
                <Route path='/earth' element={<EarthPage/>} />
                <Route path='/mars' element={<MarsPage/>} />
                <Route path='/jupiter' element={<JupiterPage/>} />
                <Route path='/saturn' element={<SaturnPage/>} />
                <Route path='/uranus' element={<UranusPage/>} />
                <Route path='/neptune' element={<NeptunePage/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp