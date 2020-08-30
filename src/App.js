import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Treatments from './components/treatments'
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Treatments />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
