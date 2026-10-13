import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Server, Users } from 'lucide-react';
import FrontEnd from '../../FrontEnd';
import BackEnd from '../../BackEnd';
import SoftSkills from '../../SoftSkills';

const SkillsWindow = () => {
    const [activeSection, setActiveSection] = useState('frontend');

    const menuItems = [
        { id: 'frontend', label: 'Frontend', icon: Code, color: 'text-blue-500' },
        { id: 'backend', label: 'Backend', icon: Server, color: 'text-green-500' },
        { id: 'softskills', label: 'Soft Skills', icon: Users, color: 'text-purple-500' },
    ];

    const renderContent = () => {
        switch (activeSection) {
            case 'frontend': return <FrontEnd noScroll />;
            case 'backend': return <BackEnd noScroll />;
            case 'softskills': return <SoftSkills noScroll />;
            default: return null;
        }
    };

    return (
        <div className="flex h-full bg-[#F6F6F6]">
            {/* Sidebar-style Navigation */}
            <div className="w-50 border-r border-gray-200/50 bg-[#E8E8E8]/50 backdrop-blur-xl p-4 flex flex-col justify-between">
                <div>
                    <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider pl-3 mb-4 block">Categories</span>
                    <div className="space-y-1">
                        {menuItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => setActiveSection(item.id)}
                                className={`w-full flex items-center gap-3 p-2.5 rounded-lg transition-all duration-200 ${activeSection === item.id
                                    ? 'bg-blue-500 text-white shadow-md shadow-blue-500/20'
                                    : 'hover:bg-black/5 text-gray-700'
                                    }`}
                            >
                                <item.icon className={`w-4 h-4 ${activeSection === item.id ? 'text-white' : item.color}`} />
                                <span className={`text-[13px] font-medium ${activeSection === item.id ? 'text-white' : 'text-gray-700'}`}>{item.label}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Profile Section at Bottom */}
                <div className="p-4 bg-white/40 rounded-xl border border-white/40 flex items-center gap-3 shadow-sm">
                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm flex-shrink-0">
                        <img
                            src="/img/ProfileMySkills.png"
                            alt="Leo"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="flex flex-col overflow-hidden">
                        <span className="text-xs font-bold text-gray-800 truncate">Emaus Leonardo</span>
                        <span className="text-[10px] text-gray-500 truncate">Push your limits</span>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 overflow-auto">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeSection}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="flex justify-center"
                    >
                        {renderContent()}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default SkillsWindow;
