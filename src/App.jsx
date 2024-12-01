import { Toaster } from 'react-hot-toast'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'
import Register from './comp/loginComp/Register'
import SignUp from './comp/loginComp/SignUp'
import HomeMain from './comp/loginComp/Home'
import Main from './comp/siteComp/main'
function App() {

  return (
    <>
   
      <></>

      <Toaster />
      <BrowserRouter>
        <HomeMain />
        <Routes>
          <Route path='Register' element={<Register />}></Route>
          <Route path='/Signup' element={<SignUp />} />
          <Route path='/main' element={<Main />} />       </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
