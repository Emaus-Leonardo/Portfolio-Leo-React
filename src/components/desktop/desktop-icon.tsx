import React from 'react';
import { motion } from 'framer-motion';

interface DesktopIconProps {
    id: string;
    name: string;
    icon: string | React.ElementType;
    onClick: (id: string) => void;
}

const DesktopIcon: React.FC<DesktopIconProps> = ({ id, name, icon: Icon, onClick }) => {
    return (
        <motion.button
            whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
            className="flex flex-col items-center gap-1 p-1.5 rounded-lg transition-colors group w-18"
            onClick={() => onClick(id)}
        >
            <div className="w-11 h-11 flex items-center justify-center">
                {typeof Icon === 'string' ? (
                    <img src={Icon} alt={name} className="w-full h-full object-contain" />
                ) : (
                    <div className="w-[90%] h-[90%] bg-blue-500 rounded-lg flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                        <Icon className="w-[60%] h-[60%] text-white" />
                    </div>
                )}
            </div>
            <span className="text-white text-[10px] font-medium [text-shadow:0_1px_2px_rgba(0,0,0,0.8)] text-center break-words w-full leading-tight">
                {name}
            </span>
        </motion.button>
    );
};

export default DesktopIcon;
