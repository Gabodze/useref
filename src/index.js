import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  const inputRef = useRef();
  const buttonRef = useRef();

  useEffect(() => {
    // input
    inputRef.current.focus();

    // button
    buttonRef.current.click();
  }, []);

  const handleClick = () => {
    alert('hi');
  };

  return (
    <>
      <input type="number" ref={inputRef} />
      <br></br>
      <br></br>

      <button ref={buttonRef} onClick={handleClick}>
        see more
      </button>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
