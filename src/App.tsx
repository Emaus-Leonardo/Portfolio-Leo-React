import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import AnimationRoutes from "./components/animationRoutes";
import { LanguageProvider } from "./i18n";

function App() {
  return (
    <LanguageProvider>
      <TooltipProvider>
        <Router>
          <AnimationRoutes />
        </Router>
      </TooltipProvider>
    </LanguageProvider>
  );
}

export default App;
