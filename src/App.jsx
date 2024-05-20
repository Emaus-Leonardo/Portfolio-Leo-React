import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import AnimationRoutes from './components/animationRoutes'; 

function App() {
  return (
    <>
      <Router>
        <Header />
        <AnimationRoutes /> 
      </Router>
    </>
  );
}

export default App;
