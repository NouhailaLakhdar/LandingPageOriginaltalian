import Homee from '@mui/icons-material/Home';
import Home from "./Components/Home";
import About from './Components/About';
import Work from './Components/Work';
import Testimonials from './Components/Testimonials';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Home />
      <Work />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
