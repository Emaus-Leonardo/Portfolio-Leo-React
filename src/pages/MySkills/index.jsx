import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Code, Server, Users } from "lucide-react";

import Smooth from "../../SmoothTransition";

import SoftSkills from "../../components/SoftSkills";
import FrontEnd from "../../components/FrontEnd";
import BackEnd from "../../components/BackEnd";
import ProfileMySkills from "../../../public/img/ProfileMySkills.png";
import WindowControls from "../../components/ui/window-controls";
import { Button } from "../../components/ui/button";
import { useResponsive } from "@/hooks/useReponsive";
import SkillsMobile from "@/components/SkillsMobile";

const MySkills = () => {
  const { isMobile } = useResponsive();
  const [showWindow, setShowWindow] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [menuOpen, setMenuOpen] = useState(true);

  // Handle responsive menu
  useEffect(() => {
    const handleResize = () => {
      setMenuOpen(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClose = () => {
    setIsAnimating(true);
    setShowWindow(false);
    setActiveSection(null);
  };

  const handleSection = (section) => {
    setActiveSection(section);
    setShowWindow(true);
  };

  const menuItems = [
    {
      id: "frontEnd",
      label: "Frontend",
      icon: Code,
      description: "UI/UX Development",
    },
    {
      id: "backEnd",
      label: "Backend",
      icon: Server,
      description: "Server & Database",
    },
    {
      id: "softSkills",
      label: "Soft Skills",
      icon: Users,
      description: "Leadership & Communication",
    },
  ];

  const contentClass = "flex justify-center items-start w-full max-h-[65vh] overflow-y-auto";

  const renderSkillsContent = () => {
    switch (activeSection) {
      case "frontEnd":
        return (
          <div className={contentClass}>
            <FrontEnd noScroll />
          </div>
        );
      case "backEnd":
        return (
          <div className={contentClass}>
            <BackEnd noScroll />
          </div>
        );
      case "softSkills":
        return (
          <div className={contentClass}>
            <SoftSkills noScroll />
          </div>
        );
      default:
        return (
          <div className="flex items-center justify-center h-full p-4">
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={Smooth}
                className="w-24 h-24 bg-white rounded-full mx-auto mb-6 flex items-center justify-center"
              >
                <Code className="w-12 h-12 text-black" />
              </motion.div>
              <h3 className="text-2xl font-bold text-window-content-foreground mb-3">
                Select a Skill Category
              </h3>
              <p className="text-window-content-foreground/70">
                Choose from the sidebar to explore my technical and soft skills
              </p>
            </div>
          </div>
        );
    }
  };

   if (isMobile) {
    return (
      <SkillsMobile 
        SoftSkills={SoftSkills}
        FrontEnd={FrontEnd}
        BackEnd={BackEnd}
        ProfileMySkills={ProfileMySkills}
      />
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={Smooth}
      className="mx-auto h-screen flex flex-col justify-center items-center bg-background p-4"
    >
      <AnimatePresence>
        {!showWindow && !isAnimating && (
          <motion.div
            initial={{ opacity: 0, y: "80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={Smooth}
            className="absolute"
          >
            <button
              onClick={() => setShowWindow(true)}
              style={{
                visibility: showWindow || isAnimating ? "hidden" : "visible",
              }}
              className="w-[210px] h-[55px] bg-black text-white font-bold lg:mt-7 mt-2 hover:shadow-lg"
            >
              Get Started
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showWindow && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ opacity: 0, y: 100 }}
            transition={Smooth} onAnimationComplete={() => setIsAnimating(false)}
            className="w-full max-w-7xl mx-auto flex flex-col rounded-xl overflow-hidden"
          >
            {/* Window Header */}
            <nav className="flex justify-between items-center h-12 bg-[#3F3F46] px-6">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                <p className="text-white text-sm font-medium">
                  My Skills Portfolio
                </p>
              </div>
              <WindowControls onClose={handleClose} />
            </nav>

            <div className="flex flex-row min-h-[70vh]">
              {/* Sidebar */}
              <motion.aside
                animate={{ width: menuOpen ? 280 : 80 }}
                transition={Smooth}
                className="bg-[#27272A] border-r border-border/50 flex flex-col"
              >
                {/* Toggle Button */}
                <div className="p-4 border-b border-border/30">
                  <Button
                    onClick={toggleMenu}
                    variant="ghost"
                    size="sm"
                    className="w-full flex items-center justify-center hover:bg-background/10"
                  >
                    {menuOpen ? (
                      <ChevronLeft className="w-5 h-5 text-white" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-white" />
                    )}
                  </Button>
                </div>

                {/* Menu Items */}
                <div className="flex-1 p-4 space-y-2">
                  {menuItems.map((item) => {
                    const IconComponent = item.icon;
                    const isActive = activeSection === item.id;

                    return (
                      <motion.button
                        key={item.id}
                        onClick={() => handleSection(item.id)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-200 ${isActive
                          ? "bg-black text-white shadow-md"
                          : "hover:bg-background/10 text-foreground"
                          }`}
                      >
                        <IconComponent className="w-5 h-5 text-white flex-shrink-0" />

                        <AnimatePresence>
                          {menuOpen && (
                            <motion.div
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -10 }}
                              transition={{ duration: 0.2 }}
                              className="flex text-white flex-col items-start text-left"
                            >
                              <span className="font-medium">{item.label}</span>
                              <span className="text-xs opacity-70">
                                {item.description}
                              </span>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.button>
                    );
                  })}
                </div>

                {/* Profile Section */}
                <div className="p-4 border-t border-border/30">
                  <div className="flex items-center gap-3">
                    <img
                      src={ProfileMySkills}
                      alt="Developer Profile"
                      className="w-12 h-12 rounded-full object-cover"
                    />

                    <AnimatePresence>
                      {menuOpen && (
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          transition={Smooth} className="flex flex-col"
                        >
                          <span className="text-sm font-medium text-white">
                            Developer
                          </span>
                          <span className="text-xs text-gray-300">
                            Push your limits
                          </span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.aside>

              {/* Content Area */}
              <main className="flex-1 bg-[#F4F4F5]">
                <div className="h-full overflow-y-auto">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeSection}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={Smooth} className="min-h-full flex items-center justify-center p-6"
                    >
                      {renderSkillsContent()}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </main>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default MySkills;
