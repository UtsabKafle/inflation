import React from 'react'
import './Styles/home.css'
import Expenses from '../Expenses/Expenses'
import Sidebar from '../Sidebar/Sidebar'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const home = () => {
  return (
    <div>

          <BrowserRouter>
          <Routes>

            <Route path='expenses' element={<Expenses/>}/>
            <Route path='' element={<h2>Daashboard</h2>}/>
          </Routes>    
          <Sidebar/>

          </BrowserRouter>

    </div>
  )
}
export default home