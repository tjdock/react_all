import React, { useState, useEffect, FC } from 'react';
import './App.css';

const App: FC = () => {
  // Create the count state.
  const [count, setCount] = useState(0);
  // Update the count (+1 every second).
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);
  // Return the App component.
  return (
    <div className="App">
      <header className="App-header">
        <img src='http://placehold.it/30x30' className="App-logo" alt="logo" />
        <p>
          Page 1 has been open for <code>{count}</code> seconds.
        </p>
      </header>
    </div>
  );
}

export default App;