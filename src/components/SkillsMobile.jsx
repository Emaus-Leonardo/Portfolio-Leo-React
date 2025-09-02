import React, { useState } from "react";
import { motion } from "framer-motion";
import { Code, Server, Users, ChevronRight } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

const SkillsMobile = ({ SoftSkills, FrontEnd, BackEnd, ProfileMySkills }) => {
  const [activeSection, setActiveSection] = useState(null);

  const skillCards = [
    {
      id: "frontEnd",
      title: "Frontend",
      subtitle: "UI/UX Development",
      icon: Code,
      component: FrontEnd,
    },
    {
      id: "backEnd", 
      title: "Backend",
      subtitle: "Server & Database",
      icon: Server,
      component: BackEnd,
    },
    {
      id: "softSkills",
      title: "Soft Skills", 
      subtitle: "Leadership & Communication",
      icon: Users,
      component: SoftSkills,
    },
  ];

  const handleCardClick = (cardId) => {
    setActiveSection(cardId);
  };

  const activeCard = skillCards.find((card) => card.id === activeSection);

  return (
    <motion.div 
      className="min-h-screen bg-background"
      initial={{ opacity: 0, y: 20  }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
    >
      <div className="px-4 py-60">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <motion.div 
            className="relative inline-block mb-4 sm:mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src={ProfileMySkills}
              alt="Profile"
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-2 border-primary mx-auto"
            />
            <motion.div 
              className="absolute -top-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-primary rounded-full flex items-center justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, duration: 0.3, type: "spring" }}
            >
              <Code className="w-3 h-3 text-white" />
            </motion.div>
          </motion.div>

          <motion.h1 
            className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 text-foreground"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Minhas Habilidades
          </motion.h1>
          <motion.p 
            className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 max-w-sm mx-auto px-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Explore meu portfólio de habilidades técnicas e comportamentais
          </motion.p>
        </motion.div>

        {/* Skills Cards */}
        <div className="space-y-3 sm:space-y-4 max-w-lg mx-auto">
          {skillCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                whileHover={{ y: -2 }}
              >
                <Sheet>
                  <SheetTrigger asChild>
                    <Card className="cursor-pointer hover:shadow-md transition-shadow">
                      <CardHeader className="p-4 sm:p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="p-2 sm:p-3 rounded-lg bg-primary text-primary-foreground">
                              <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                            </div>
                            <div className="text-left">
                              <CardTitle className="text-base sm:text-lg">{card.title}</CardTitle>
                              <CardDescription className="text-sm">{card.subtitle}</CardDescription>
                            </div>
                          </div>
                          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
                        </div>
                      </CardHeader>
                    </Card>
                  </SheetTrigger>
                  
                  <SheetContent side="bottom" className="w-full">
                    <SheetHeader className="pb-4">
                      <SheetTitle className="flex items-center gap-2 text-left">
                        <div className="p-2 rounded-lg bg-primary text-primary-foreground">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        {card.title}
                      </SheetTitle>
                    </SheetHeader>
                    
                    <div className="overflow-y-auto">
                      <card.component />
                    </div>
                  </SheetContent>
                </Sheet>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default SkillsMobile;