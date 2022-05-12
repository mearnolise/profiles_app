import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Home from "./context/page/Home";
import About from "./context/page/About";
import { HomeProvider } from "./context/Home/HomeContext";
import NotFound from "./context/page/NotFound";
import {FormProvider} from "./context/form/Formcontext";


function App() {
  return (
    <FormProvider>
    <HomeProvider>
      
      <Router>
        <div className="body-container">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>

          <Footer />
        </div>
      </Router>
    </HomeProvider>
    </FormProvider>
  );
}
export default App;
