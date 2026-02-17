import { BrowserRouter, Route, Routes } from "react-router-dom";

import './styles.css'
import { Header } from "./components/header/Header";

import {WelcomeSection} from "./components/welcomeSection/WelcomeSection"
import {Banner} from "./components/Banner/Banner"
import {AboutMe} from "./components/AboutMe/AboutMe"
import {ProyectsPage} from "./components/ProyectsPage/ProyectsPage"
import {Proyect} from "./components/ProyectsPage/Proyect/Proyect"
import {FooterSection} from "./components/FooterSection/FooterSection"


import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SomethingElse } from "./components/SomethingElse/SomethingElse";



export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); // se ejecuta cada vez que cambia la ruta

  return null; // no renderiza nada
};








function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ScrollToTop />
        <Header/>
        <Routes>
          <Route path="/" element= {
            <>
              <WelcomeSection/>
              <Banner/>
              <AboutMe/>
              <ProyectsPage/>
              <SomethingElse/>
            
              
            </>
          } />
          
          <Route path="/:nombreProyecto" element={
            <Proyect/>} >
          </Route>

        </Routes>
        
        <FooterSection/>
      </BrowserRouter>
      
      
      
    </div>
  );
}

export default App;
