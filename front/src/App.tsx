import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Projects } from './components/Projects/Projects';

function App() {
  const GAP_TOP_HEADER = 6 * 16;
  const HEADER_HEIGHT = 9 * 16;
  const MEDIUM_SCREEN_WIDTH = 868;
  
  const [isStartScrolled, setIsStartScrolled] = useState(false);
  const [windowWidth, setwindowWidth] = useState(window.innerWidth);
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);
  
  const isLargeMode = windowWidth > MEDIUM_SCREEN_WIDTH;
  
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
          setIsAutoScrolling={setIsAutoScrolling}
        />
      </main>
    </>
  )
}

export default App