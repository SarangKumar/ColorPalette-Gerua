import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';
import PaletteZoom from './components/PaletteZoom';
import SolidColors from './components/SolidColors';
import './sass/App.scss';



function App() {
  return (
    <div className="App">
      <Header />
      {/* <div className="container"></div> */}
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/solid-color' element={<SolidColors />}/>
        <Route path='/palette-zoom' element={<PaletteZoom />}/>
        <Route path='/palette/:id' element={<PaletteZoom />}/>
        <Route path='*' element={<PageNotFound />}/>
      </Routes>      
      {/* <Loader /> */}
      {/* <Loader2 /> */}
      <Footer />
    </div>
  );
}

export default App;
