import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import MySkills from '../pages/MySkills';

const AnimationRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence initial={true} mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/myskills' element={<MySkills />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimationRoutes;
