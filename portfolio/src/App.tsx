import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Projects } from './components/Projects/Projects';

function App() {
  const GAP_TOP_HEADER = 6 * 16;
  const HEADER_HEIGHT = 9 * 16;
  const MEDIUM_SCREEN_WIDTH = 868;
  
  const [isStartScrolled, setIsStartScrolled] = useState(false);
  const [windowWidth, setwindowWidth] = useState(window.innerWidth);
  const [isScrolling, setIsScrolling] = useState(false);
  
  const isLargeMode = windowWidth > MEDIUM_SCREEN_WIDTH;
  
  function handleScroll() {
    if (isScrolling) return;
    
    const { scrollY } = window;
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
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 
  
  return (
    <>
      <Header 
        isStartScrolled={isStartScrolled}
      />
      <main>
        <Projects 
          HEADER_HEIGHT={HEADER_HEIGHT}
          isLargeMode={isLargeMode}
          setIsScrolling={setIsScrolling}
        />
      </main>
    </>
  )
}

export default App