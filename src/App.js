import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Footer from './components/layout/Footer';
import Navbar from "./components/layout/Navbar";
import Home from './context/page/Home';
import About from './context/page/About';
import {HomeProvider} from './context/Home/HomeContext';

function App() {
  return (
    <HomeProvider>
    <Router>
    <div className="body-container">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
        
      <Footer />


    </div>
    </Router>
    </HomeProvider>
  );
}

export default App;
