import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Pricelist from './components/Pricelist';
import Contact from './components/Contact';
import Safety from './components/Safety';
import Update from './components/Update';
import Header from './components/Header';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Update/>
      <Header/>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Aboutus' element={<About/>}/>
      <Route path='/Pricelist' element={<Pricelist/>}/>
      <Route path='/Safety tips' element={<Safety/>}/>
      <Route path='/Contact us' element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
