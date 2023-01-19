import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Loader from './components/Loader';
import './sass/App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container"></div>
      <Hero 
      heading={"Popular Color Palettes"} 
      para1={"Collection of 1000+ color palettes."} 
      para2={"Pick your perfect color palette for your next dream project."} />
      
      <Hero 
      heading={"Beautiful Solid Colors"} 
      para1={"Collection of 10000+ solid colors for your"} 
      para2={"next projects."} />
      
      
      
      <h3>fad</h3>
      <Loader />
      <Footer />

    </div>
  );
}

export default App;
