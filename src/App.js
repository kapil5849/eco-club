import React from 'react';
import './App.css';
import Welcome from './components/Welcome';
import About from './components/About';
import Header from './components/Header';
import Events from './components/Events';
import Project from './components/Project';
import GetInvolved from './components/GetInvolved';
import Footer from './components/Footer';
import Location from './components/Location';


const App = () => {
  return (
    <>
      <Header />
      <Welcome />
      <About />
      <Events />
      <Project />
      <GetInvolved />
      <Location />
      <Footer />
    </>
  );
}

export default App;
