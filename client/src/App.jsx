import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'
// import {registerLicense} from "@syncfusion/ej2-base"
// registerLicense("Ngo9BigBOggjHTQxAR8/V1NAaF5cWWJCf0x0TXxbf1x0ZFRMYl1bRnVPIiBoS35RckViW35fc3ZURGNcWEd1")

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
    </Routes>
    </BrowserRouter>

  )
}

export default App
