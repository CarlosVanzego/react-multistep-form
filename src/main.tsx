import React from 'react'; // Importing React library
import ReactDOM from 'react-dom/client'; // Importing ReactDOM from client
import App from './App.tsx'; // Importing App component

// Rendering the root component
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode> {/* Wrapping App component in React.StrictMode */}
    <App /> {/* Rendering the App component */}
  </React.StrictMode>,
);