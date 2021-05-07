import React from 'react';
//import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import {
  BrowserRouter as Router,
  Swith,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
      </Router>

      <Home />
    </div>
  );
}

export default App;
