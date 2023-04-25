import React, { useState, useEffect } from 'react';
import '../css/Background.css'

function Background() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    function handleScroll() {
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const newOpacity = .2 - (scrollY / (windowHeight));
      setOpacity(newOpacity);
    
      if (scrollY === 0) { // check if user has scrolled to the top
        setOpacity(1);
      } else {
        setOpacity(newOpacity < 0 ? 0 : newOpacity);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className="background"
      style={{
        opacity: opacity,
        backgroundImage: 'url(https://images.hdqwalls.com/wallpapers/moon-clouds-4k-1p.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        transition: 'opacity 0.5s ease',
      }}
    ></div>
  );
}

export default Background;
