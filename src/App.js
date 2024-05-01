
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import './App.css';
import { Navbar } from './components/dashboard/navbar';
import { Login } from './components/login/login';
import { Register } from "./components/register/register";
import Verifikasi from "./components/verifikasi/verifikasi";
import FormRegister from "./components/register/formRegister";
import Profile from "./components/profile/profile";
import ProtectedRoute from "./helpers/protectedRoute";
import NavbarProfile from "./components/profile/navbarProfile";
import NotFound from "./helpers/notFound";
import MyAccount from "./components/Account/myAccount";
import Percobaan from "./components/percobaan/percobaan";
import SoalUjian from "./components/soalUjian/soalUjian";



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/verifikasiEmail' element={<Verifikasi/>}/>
        <Route path='/profile' element={ 
        <ProtectedRoute>
        <NavbarProfile/>
        </ProtectedRoute>
        }>
          
          <Route path='/profile/' index element={ <Profile/>}/>
          <Route path='/profile/myAccount' element={ <MyAccount/>}/>
          <Route path='/profile/percobaan' element={ <Percobaan/>}/>
          <Route path="/profile/*" element={<NotFound/>}/>
          
        </Route>
        <Route path='/registerBiodata/:nisn' element={<FormRegister/>}/>
        <Route path='/soalUjian/:id_ujian' element={<SoalUjian/>}/>
        <Route path="*" element={<NotFound/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
