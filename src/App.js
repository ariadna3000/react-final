import React from 'react';
import './App.css';
import Weather from "./Weather";
export default function App() {
  return (
    <div className="App">
      <div className="container">
       
        <Weather />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/ariadna-ch%C3%A1vez-l%C3%B3pez-8478135b/"
            target="_blank"
          >
            Ariadna Chavez{" "}
          </a>
          and is{" "}
          <a href="https://github.com/ariadna3000/react-final" target="_blank">
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

