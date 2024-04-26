
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import './App.css';
import { Navbar } from './components/dashboard/navbar';
import { Login } from './components/login/login';
import { Register } from "./components/register/register";
import Verifikasi from "./components/verifikasi/verifikasi";
import FormRegister from "./components/register/formRegister";



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/verifikasiEmail' element={<Verifikasi/>}/>
        
        <Route path='/registerBiodata/:nisn' element={<FormRegister/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
