import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';
import PaletteZoom from './components/PaletteZoom';
import SolidColors from './components/SolidColors';
import Hero from './components/Hero';

import './sass/App.scss';
import TintShade from './components/TintShade';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <div className="container"></div> */}
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/solid-color' element={<SolidColors />}/>
        <Route path='/palette-zoom' element={<PaletteZoom />}/>
        <Route path='/palette/:id' element={<PaletteZoom />}/>
        <Route path='/tint-and-shade-generator' element={<TintShade />}/>
        <Route path='/motion' element={<Hero heading='123' para1='sarang' para2='kumar'/>}/>
        <Route path='*' element={<PageNotFound />}/>
      </Routes>      
      {/* <Loader /> */}
      {/* <Loader2 /> */}
      <Footer />
    </div>
  );
}

export default App;
