import Header from './components/Header';
import Hero from './components/Hero';
import Loader from './components/Loader';
import './sass/App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container"></div>
      <Hero />
      <h3>fad</h3>
    <Loader />
    
    </div>
  );
}

export default App;
