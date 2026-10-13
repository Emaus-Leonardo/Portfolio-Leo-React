import React, { useState, useEffect } from "react";
import { FaApple, FaWifi, FaBatteryFull, FaSearch } from "react-icons/fa";

const MacOSMenuBar = () => {
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime(
                now.toLocaleDateString("en-US", {
                    weekday: "short",
                    month: "short",
                    day: "numeric",
                }) +
                "  " +
                now.toLocaleTimeString("en-US", {
                    hour: "numeric",
                    minute: "2-digit",
                })
            );
        };

        updateTime();
        const interval = setInterval(updateTime, 10000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className="fixed top-0 left-0 w-full h-[28px] px-4 flex items-center justify-between z-[60] backdrop-blur-md bg-black/20 text-white font-medium text-[13px] border-b border-white/10 shadow-sm"
            style={{
                fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
            }}
        >
            {/* Left side: Apple Logo & App Menus */}
            <div className="flex items-center gap-4 h-full">
                <div className="flex items-center hover:bg-white/20 h-full px-2 rounded cursor-default transition-colors">
                    <FaApple size={16} />
                </div>
                <div className="flex items-center hover:bg-white/20 h-full px-2 rounded font-bold cursor-default transition-colors">
                    Portfolio
                </div>
                <div className="hidden sm:flex items-center hover:bg-white/20 h-full px-2 rounded cursor-default transition-colors">
                    File
                </div>
                <div className="hidden sm:flex items-center hover:bg-white/20 h-full px-2 rounded cursor-default transition-colors">
                    Edit
                </div>
                <div className="hidden sm:flex items-center hover:bg-white/20 h-full px-2 rounded cursor-default transition-colors">
                    View
                </div>
                <div className="hidden sm:flex items-center hover:bg-white/20 h-full px-2 rounded cursor-default transition-colors">
                    Window
                </div>
                <div className="hidden md:flex items-center hover:bg-white/20 h-full px-2 rounded cursor-default transition-colors">
                    Help
                </div>
            </div>

            {/* Right side: Status Icons & Clock */}
            <div className="flex items-center gap-3 h-full">
                <div className="flex items-center hover:bg-white/20 h-full px-2 rounded cursor-default transition-colors">
                    <FaWifi size={14} />
                </div>
                <div className="flex items-center hover:bg-white/20 h-full px-2 rounded cursor-default transition-colors">
                    <FaSearch size={14} />
                </div>
                <div className="flex items-center hover:bg-white/20 h-full px-2 rounded cursor-default transition-colors">
                    <FaBatteryFull size={16} />
                </div>
                <div className="flex items-center hover:bg-white/20 h-full px-2 rounded cursor-default transition-colors whitespace-pre">
                    {time}
                </div>
            </div>
        </div>
    );
};

export default MacOSMenuBar;
