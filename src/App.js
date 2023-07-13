import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Homes from './pages/Homes/Homes.jsx';
import About from './pages/About/About.jsx';
import Contact from './pages/Contacts/index.jsx';
import Uzbekistan from './pages/AboutUzbekistan/index.js';
import Galery from './pages/PhotoGallery/index.js';



function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route index element={<Homes/> } />
      <Route path='/home' element={<Homes/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/uzbekistan' element={<Uzbekistan/>} />
      <Route path='/galery' element={<Galery/>} />

    </Routes>
   </BrowserRouter>
  );
}

export default App;
