
import { BrowserRouter,Route,Routes } from 'react-router'
import './index.css'
import { DashBoard } from './Pages/DashBoard'
import { SingUp } from './Pages/Signup'
import { SingIn } from './Pages/SingIn'
import { ShareBrain } from './Pages/ShareBrain'
import { Home } from './Pages/Home'
import { ProtectedRoute } from './Components/ProtectedRoute'


function App () {
 

  return (
    <>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>}/>
 
  <Route path='/signup' element={<SingUp/> }/>
  <Route path='/signin' element={<SingIn /> }/>
  <Route path='sharebrain' element={<ShareBrain />}/>
  <Route path='/dashboard' element={<ProtectedRoute >
    <DashBoard/>
  </ProtectedRoute> }/>
</Routes>
</BrowserRouter>
    </>
  )
}

export default App
