import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home'
import Footer from './components/footer/Footer';
import {Routes, Route} from 'react-router-dom';
import Work from './pages/work/Work';
import Achievement from './pages/achievement/newAch';
import About from './pages/about/About';
import ContactPage from './pages/contact/ContactPage'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path = '/' element = {<Home />} ></Route>
        <Route path = '/achievement' element = {<Achievement />} ></Route>
        <Route path = '/about' element = {<About />} ></Route>
        <Route path = '/work' element = {<Work />} ></Route>
        <Route path = '/contact' element = {<ContactPage />} ></Route>
      </Routes>
      <Footer />
      
    </div>
  );
}

export default App;
