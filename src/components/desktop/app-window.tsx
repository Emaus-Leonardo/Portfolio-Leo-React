import React from 'react';
import { motion } from 'framer-motion';
import { X, Minus, Maximize2 } from 'lucide-react';

interface AppWindowProps {
    id: string;
    title: string;
    onClose: (id: string) => void;
    onFocus: (id: string) => void;
    isFocused: boolean;
    children: React.ReactNode;
    zIndex: number;
    isMobile?: boolean;
    width?: string;
    height?: string;
}

const AppWindow: React.FC<AppWindowProps> = ({
    id,
    title,
    onClose,
    onFocus,
    isFocused,
    children,
    zIndex,
    isMobile = false,
    width = '600px',
    height = '400px'
}) => {
    return (
        <motion.div
            drag={!isMobile}
            dragMomentum={false}
            initial={isMobile ? { y: '100%', opacity: 0 } : { scale: 0.9, opacity: 0 }}
            animate={isMobile ? { y: 0, opacity: 1 } : { scale: 1, opacity: 1 }}
            exit={isMobile ? { y: '100%', opacity: 0 } : { scale: 0.9, opacity: 0 }}
            onMouseDown={() => onFocus(id)}
            style={{
                zIndex,
                ...(isMobile ? {
                    top: '10%',
                    left: '5%',
                    right: '5%',
                    bottom: '12%',
                    width: 'auto',
                    height: 'auto'
                } : {
                    width,
                    height
                })
            }}
            className={`absolute bg-white/80 backdrop-blur-xl rounded-xl shadow-2xl border border-white/20 overflow-hidden flex flex-col ${isFocused ? 'ring-2 ring-blue-500/20' : ''}`}
        >
            {/* Title Bar */}
            <div className="h-10 bg-white/50 backdrop-blur-md flex items-center justify-between px-4 cursor-default select-none group">
                <div className="flex items-center gap-2">
                    {/* Traffic Lights */}
                    <div className="flex gap-2">
                        <button
                            onClick={(e) => { e.stopPropagation(); onClose(id); }}
                            className="w-3 h-3 rounded-full bg-[#FF5F56] hover:bg-[#FF5F56]/80 flex items-center justify-center group-hover:after:content-['']"
                        >
                            <X className="w-2 h-2 text-black/50 opacity-0 group-hover:opacity-100" />
                        </button>
                        <button className="w-3 h-3 rounded-full bg-[#FFBD2E] hover:bg-[#FFBD2E]/80 flex items-center justify-center">
                            <Minus className="w-2 h-2 text-black/50 opacity-0 group-hover:opacity-100" />
                        </button>
                        <button className="w-3 h-3 rounded-full bg-[#27C93F] hover:bg-[#27C93F]/80 flex items-center justify-center">
                            <Maximize2 className="w-2 h-2 text-black/50 opacity-0 group-hover:opacity-100" />
                        </button>
                    </div>
                </div>

                <span className="text-gray-700 text-sm font-semibold">{title}</span>

                <div className="w-16" /> {/* Spacer */}
            </div>

            {/* Content */}
            <div className="flex-1 overflow-auto bg-white/10">
                {children}
            </div>
        </motion.div>
    );
};

export default AppWindow;
