import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import AnimationRoutes from './components/animationRoutes';
import { TooltipProvider } from '@radix-ui/react-tooltip';

function App() {
  return (
    <>
      <TooltipProvider>
        <Router>
          <Header />
          <AnimationRoutes />
        </Router>
      </TooltipProvider>
    </>
  );
}

export default App;
