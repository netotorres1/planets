import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MercuryPage from './Pages/Mercury/MercuryPage'
import Venus from './Pages/Venus/VenusPage'

const RoutesApp = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MercuryPage/>} />
                <Route path='/venus' element={<Venus/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp