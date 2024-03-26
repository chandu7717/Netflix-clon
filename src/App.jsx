import React from 'react'
import "./index.css"
import { BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import Home from "./component/Home"
import SignIn from './component/SignIn'

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<SignIn/>}/>

      </Routes>
    </Router>
    {/* <SignIn/> */}
    
    
   </>
    
  )
}

export default App