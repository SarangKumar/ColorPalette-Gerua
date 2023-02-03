import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';
import PaletteZoom from './components/PaletteZoom';
import SolidColors from './components/SolidColors';

import './sass/App.scss';
import TintShade from './components/TintShade';

import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <div className="container"></div> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/solid-color' element={<SolidColors />} />
        <Route path='/palette-zoom' element={<PaletteZoom />} />
        <Route path='/palette/:id' element={<PaletteZoom />} />
        <Route path='/tint-and-shade-generator/:colorHex' element={<TintShade />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      {/* <Loader /> */}
      {/* <Loader2 /> */}
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
