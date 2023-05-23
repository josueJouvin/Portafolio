import Menu from './components/Menu';
import Header from './components/Header';
import Proyectos from './components/Proyectos';
import Tecnologias from './components/Tecnologias';
import SobreMi from './components/SobreMi';
import Footer from './components/Footer';
import { useRef } from 'react';

const App = () => {
  const footerRef = useRef(null);
  const headerRef = useRef(null)

  const scrollFooter = () =>{
    footerRef.current.scrollIntoView({behavior: 'smooth'});
  };

  const scrollHeader = () =>{
    headerRef.current.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <>
     <Menu handleClick={scrollFooter} />
        <Header headerRef={headerRef}/>
        <Proyectos/>
        <SobreMi/>
        <Tecnologias/>
        <Footer footerRef={footerRef} handleClick={scrollHeader}/>
    </>
  )
}

export default App
