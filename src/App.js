import Homee from '@mui/icons-material/Home';
import Home from "./Components/Home";
import About from './Components/About';
import Offers from './Components/Offers';
import Testimonials from './Components/Testimonials';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Home />
      <Offers />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
