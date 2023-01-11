import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MercuryPage from './Pages/Mercury/MercuryPage'

const RoutesApp = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MercuryPage/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp