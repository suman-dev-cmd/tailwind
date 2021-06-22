import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./pages";
import Footer from "./components/Footer";
import About from "./pages/about";
import Menu from "./pages/menu";
import Contact from "./pages/contact";
import Dropdown from './components/Dropdown';
interface ToggleType{
  toggle:()=>void,
  hideMenu:()=>void
}
const App:React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log('i resized');
      }
    };

    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  });
  return(
    <Router>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
        <Route path='/' component={Home} exact/>
        <Route path='/about' component={About}/>
        <Route path='/gellary' component={Menu}/>
        <Route path='/contact' component={Contact}/>
      <Footer />
    </Router>
  );
}

export default App;