import React from 'react';
import { Folder, FileCode, Smartphone, Globe } from 'lucide-react';

const FinderWindow = () => {
    const folders = [
        { name: 'Projects', icon: Folder, color: 'text-blue-500' },
        { name: 'Mobile Apps', icon: Smartphone, color: 'text-green-500' },
        { name: 'Web Dev', icon: Globe, color: 'text-purple-500' },
        { name: 'Source Code', icon: FileCode, color: 'text-orange-500' },
    ];

    return (
        <div className="flex h-full p-4">
            <div className="w-40 border-r border-gray-200/50 pr-4 flex flex-col gap-2">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider pl-2">Favorites</span>
                <div className="flex flex-col">
                    {folders.map(f => (
                        <div key={f.name} className="flex items-center gap-2 p-2 rounded-lg hover:bg-black/5 cursor-default transition-colors">
                            <f.icon className={`w-4 h-4 ${f.color}`} />
                            <span className="text-xs text-gray-700">{f.name}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex-1 p-4">
                <div className="grid grid-cols-4 gap-4">
                    {folders.map(f => (
                        <div key={f.name} className="flex flex-col items-center gap-1 group">
                            <f.icon className={`w-12 h-12 ${f.color} group-hover:scale-110 transition-transform`} />
                            <span className="text-[11px] text-gray-600 font-medium">{f.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FinderWindow;
