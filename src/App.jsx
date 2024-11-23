import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Data from './utils/mook'
import Design from './pages/Design'

const App = () => {

  const [data, steData] = useState(Data)
  return (
    <div>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Design/>}/>
        {
          data.map((v) => (
            <Route path={v.navigation} element ={v.component}>
              {
                v.childs?.map((value) =>(
                  <Route path={value.navigation} element={value.component}/>
                ))
              }
            </Route>
          ))
        }


      </Routes>
    </div>
  )
}

export default App
