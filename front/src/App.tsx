import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { ProjectsPage } from './components/Projects/ProjectsPage';
import { Route, Routes } from 'react-router';
import CvPage from './components/Cv/CvPage';
import Footer from './components/Footer';

function App() {
  const GAP_TOP_HEADER = 6 * 16;
  const HEADER_HEIGHT = 9 * 16;
  const MEDIUM_SCREEN_WIDTH = 868;
  
  const [isStartScrolled, setIsStartScrolled] = useState(false);
  const [windowWidth, setwindowWidth] = useState(window.innerWidth);
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);
  
  const isMediumScreen = windowWidth > MEDIUM_SCREEN_WIDTH;
  
  function handleScroll() {
    // If an autoscroll is triggered, ignore the function
    if (isAutoScrolling) return;
    
    const { scrollY } = window;

    // When the scroll is below the header, we notice the header for change CSS to fixed header
    if (scrollY > GAP_TOP_HEADER) {
      setIsStartScrolled(true);
    } else {
      setIsStartScrolled(false);
    }
  }
  
  function handleResize() {
    setwindowWidth(window.innerWidth);
  }
  
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () =>  window.removeEventListener("resize", handleResize);
  }, []);
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () =>  window.removeEventListener('scroll', handleScroll);;
  }, []); 
  
  return (
    <>
      <Header 
        isStartScrolled={isStartScrolled}
        isMediumScreen={isMediumScreen}
      />
      <main>
        <Routes>
          <Route path="/" element={
            <ProjectsPage 
              HEADER_HEIGHT={HEADER_HEIGHT}
              isMediumScreen={isMediumScreen}
              setIsAutoScrolling={setIsAutoScrolling}
            />}/>
          <Route path="/cv" element={
            <CvPage 
          />}/>
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App