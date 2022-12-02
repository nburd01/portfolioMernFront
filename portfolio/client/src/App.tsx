import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { LandingPage } from './components/Pages/Header';
import { AboutMe } from './components/Pages/AboutMe';
import './assets/fonts/ApercuPro-Medium.ttf'
import './assets/fonts/ApercuPro-MediumItalic.ttf'
import './assets/fonts/ApercuPro-ExtraLight.ttf'
import './assets/fonts/ApercuPro-Black.ttf'
import './assets/fonts/ApercuPro-Bold.ttf'
import './assets/fonts/ApercuPro-BoldItalic.ttf'
import './assets/fonts/ApercuPro-Thin.ttf'
import './assets/fonts/ApercuPro-ThinItalic.ttf'
import './assets/fonts/ApercuPro-Regular.ttf'
import './assets/fonts/ApercuPro-Italic.ttf'
import './assets/fonts/ApercuPro-ExtraLightItalic.ttf'
import './assets/fonts/ApercuPro-Light.ttf'
import './assets/fonts/ApercuPro-LightItalic.ttf'
import './assets/fonts/ApercuPro-BlackItalic.ttf'
import { Nav } from './components/Blocks/Nav';
import { Contact } from './components/Pages/Contact';
import { TechSkills } from './components/Pages/TechSkills';
import { Projects } from './components/Pages/Projects';
import Api from './components/Blocks/ApiTest';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Nav/>
      <LandingPage/>
      <TechSkills/>
      {/* <Projects/> */}
      <Contact/>  
      {/* <Api/> */}
    </div>
    </BrowserRouter>
  );
}

export default App;
