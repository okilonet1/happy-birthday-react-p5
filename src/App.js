import React, { useLayoutEffect, useState } from 'react';

import './App.css';
import sketch from './sketch';
import p5 from 'p5';


function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

function ShowWindowDimensions(props) {
  const [width, height] = useWindowSize();
  return <span>Window size: {width} x {height}</span>;
}

const TEXT = 'Happy Birthday MOM';

const App = () => {
  const canvasRef = React.useRef(null)

  React.useEffect(() => {
    const canvasDivElement = canvasRef.current;

    // NOTE: If you change TEXT value to something else, you'll need to make changes in sketch.js as well to make it work
    // See my comments in sketch.js
    new p5(sketch(canvasDivElement, TEXT), canvasDivElement);
  })

  return (
    <div className="main">
      <div ref={canvasRef} />
    </div >
  )
}

export default App;
