import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaApple } from 'react-icons/fa';
import {
    Wifi,
    Battery,
    Search,
    LayoutGrid,
    LogOut
} from 'lucide-react';

interface MenuBarProps {
    appName?: string;
}

const MenuBar: React.FC<MenuBarProps> = ({ appName = 'Finder' }) => {
    const [time, setTime] = useState(new Date());
    const [isAppleMenuOpen, setIsAppleMenuOpen] = useState(false);
    const appleMenuRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 60000);
        return () => clearInterval(timer);
    }, []);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (appleMenuRef.current && !appleMenuRef.current.contains(event.target as Node)) {
                setIsAppleMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const formatTime = (date: Date) => {
        return date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        });
    };

    const formatDate = (date: Date) => {
        return date.toLocaleDateString('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric'
        });
    };

    const handleExit = () => {
        navigate('/'); // Go back to portfolio home
    };

    return (
        <div className="fixed top-0 left-0 right-0 h-8 bg-white/10 backdrop-blur-md border-b border-white/10 flex items-center justify-between px-4 z-[1000] text-white text-sm font-medium">
            <div className="flex items-center gap-4">
                <div className="relative" ref={appleMenuRef}>
                    <button
                        onClick={() => setIsAppleMenuOpen(!isAppleMenuOpen)}
                        className={`p-1 rounded transition-colors ${isAppleMenuOpen ? 'bg-white/20' : 'hover:bg-white/10'}`}
                    >
                        <FaApple className="w-[15px] h-[15px]" />
                    </button>

                    <AnimatePresence>
                        {isAppleMenuOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.1 }}
                                className="absolute top-8 left-0 w-56 bg-white/80 backdrop-blur-2xl rounded-lg shadow-2xl border border-white/20 p-1.5 text-gray-800"
                            >
                                <div className="px-3 py-1.5 text-xs font-bold text-gray-400 uppercase tracking-tighter">System</div>
                                <div className="space-y-0.5">
                                    <button className="w-full text-left px-3 py-1.5 hover:bg-blue-500 hover:text-white rounded-md flex items-center justify-between group">
                                        <span>System Settings...</span>
                                        <span className="text-[10px] opacity-50">⌘,</span>
                                    </button>
                                    <button className="w-full text-left px-3 py-1.5 hover:bg-blue-500 hover:text-white rounded-md flex items-center justify-between">
                                        <span>App Store...</span>
                                    </button>
                                </div>
                                <div className="h-px bg-gray-200/50 my-1 mx-2" />
                                <div className="px-3 py-1.5 text-xs font-bold text-gray-400 uppercase tracking-tighter">Navigation</div>
                                <button
                                    onClick={handleExit}
                                    className="w-full text-left px-3 py-2 hover:bg-red-500 hover:text-white rounded-md flex items-center gap-2 group transition-colors"
                                >
                                    <div className="w-5 h-5 rounded bg-red-100 flex items-center justify-center group-hover:bg-white/20">
                                        <LogOut className="w-3.5 h-3.5 text-red-600 group-hover:text-white" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="font-semibold text-xs text-red-600 group-hover:text-white">Log Out Emaús...</span>
                                        <span className="text-[9px] opacity-60 group-hover:opacity-100">Exit to standard Portfolio</span>
                                    </div>
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <span className="font-bold">{appName}</span>
                <div className="hidden md:flex items-center gap-4 opacity-90 transition-opacity">
                    <span className="cursor-default hover:bg-white/10 px-2 py-1 rounded">File</span>
                    <span className="cursor-default hover:bg-white/10 px-2 py-1 rounded">Edit</span>
                    <span className="cursor-default hover:bg-white/10 px-2 py-1 rounded">View</span>
                    <span className="cursor-default hover:bg-white/10 px-2 py-1 rounded">Go</span>
                    <span className="cursor-default hover:bg-white/10 px-2 py-1 rounded">Window</span>
                    <span className="cursor-default hover:bg-white/10 px-2 py-1 rounded">Help</span>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <Wifi className="w-4 h-4" />
                <Battery className="w-4 h-4" />
                <Search className="w-4 h-4" />
                <LayoutGrid className="w-4 h-4" />
                <div className="flex items-center gap-2">
                    <span>{formatDate(time)}</span>
                    <span>{formatTime(time)}</span>
                </div>
            </div>
        </div>
    );
};

export default MenuBar;
