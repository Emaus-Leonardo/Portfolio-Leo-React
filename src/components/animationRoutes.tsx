import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Landing from "../pages/Landing";
import CaseStudy from "../pages/CaseStudy";
import AboutMe from "../pages/AboutMe";
import MySkills from "../pages/MySkills";

const AnimationRoutes = () => (
  <Routes>
    <Route path="/" element={<Landing />} />
    <Route path="/work/:slug" element={<CaseStudy />} />
    <Route path="/about" element={<AboutMe />} />
    <Route path="/desktop" element={<MySkills />} />

    {/* Legacy URLs */}
    <Route path="/myskills" element={<Navigate to="/desktop" replace />} />
    <Route path="/projects" element={<Navigate to="/#projects" replace />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

export default AnimationRoutes;
