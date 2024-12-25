
import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Adduser from './User/Adduser';
import Edituser from './User/Edituser';
import View from './User/View';

function App() {
  return (
      <div className='App'>
    
 <BrowserRouter>
 <Navbar/>
   <Routes>
    <Route  path='/' element={<Home/>} />
    <Route path='/adduser' element={<Adduser/>} />
    <Route path='/edituser/:id' element={<Edituser/>}/>
    <Route path='/viewuser' element={<View/>}/>
   </Routes>
 </BrowserRouter>



   
        </div>
  
  )
}

export default App
