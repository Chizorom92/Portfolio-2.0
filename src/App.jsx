import { useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Header from './Components/Header';
import About from './Components/About';
import Service from './Components/Service';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import Top from './Components/Top';





const renderPage = (page, setPage) => {
  
  switch (page) {
    case "about":

    return( 
     <About setPage = {setPage}/>
    );

    case "service":
      return(
        <Service/>
      );

      case "contact":
      return(
        <Contact/>
      );

      case "head":
        return (
          <Navbar />
        )

      
  };
};



function App() {
  const [page, setPage] = useState('header')

  return (
    <>
    <Navbar page = {page} setPage = {setPage}/> 

       <div className="content">{renderPage(page, 
      setPage)}</div> 

    <Header page ={page} setPage = {setPage}/> 

    <About page = {page} setPage = {setPage}/> 

    <Service page ={page} setPage = {setPage}/> 

    <Projects/>

    <Top/>

    <Skills />  
    <Contact/>

  <Top/>
    <Footer page = {page} setPage = {setPage}/>
      
    </>
  )
}

export default App
