import React from 'react';
import {AboutUs,Chef,FindUs,Gallery,Header,Intro,Laurels,SpecialMenu} from './container'
import {Footer, Navbar} from './components'
import './App.css';
import { video04, video01 } from './constants/images';
// import images from './constants/images'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <AboutUs/>
      <SpecialMenu/>
      <Intro video={video01}/>
      <Chef/>
      <Intro video={video04}/>
      <Laurels/>
      <Gallery/>
      <FindUs/>
      <Footer/>
    </div>
  );
}

export default App;
