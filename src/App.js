import logo from './logo.svg';
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import './App.css';
import { Dashboard } from './components/dashboard';
import { Login } from './components/login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' index element={<Dashboard/>}></Route>
        <Route path='loin' element={<Login/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
