import React from 'react';
import { Play, SkipBack, SkipForward, Repeat, Shuffle, Volume2 } from 'lucide-react';

const MusicWindow = () => {
    return (
        <div className="h-full flex flex-col bg-gradient-to-br from-[#1DB954]/20 to-black/80 text-white rounded-lg overflow-hidden">
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center gap-6">
                <div className="w-48 h-48 bg-gray-800 rounded-lg shadow-2xl overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=500&auto=format&fit=crop"
                        alt="Album Art"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-xl font-bold">Midnight Dreams</span>
                    <span className="text-sm text-gray-400">Electronic Symphony</span>
                </div>
            </div>

            <div className="bg-black/40 backdrop-blur-md p-6 flex flex-col gap-4">
                <div className="w-full bg-gray-600 h-1 rounded-full relative overflow-hidden">
                    <div className="absolute left-0 top-0 h-full bg-[#1DB954] w-[40%]" />
                </div>
                <div className="flex justify-between text-[10px] text-gray-400">
                    <span>1:42</span>
                    <span>4:05</span>
                </div>

                <div className="flex items-center justify-center gap-8">
                    <Shuffle className="w-4 h-4 text-gray-400" />
                    <SkipBack className="w-6 h-6 fill-white" />
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform cursor-pointer">
                        <Play className="w-6 h-6 text-black fill-black ml-1" />
                    </div>
                    <SkipForward className="w-6 h-6 fill-white" />
                    <Repeat className="w-4 h-4 text-gray-400" />
                </div>

                <div className="flex items-center gap-3">
                    <Volume2 className="w-4 h-4 text-gray-400" />
                    <div className="flex-1 bg-gray-600 h-1 rounded-full relative overflow-hidden">
                        <div className="absolute left-0 top-0 h-full bg-white w-[70%]" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MusicWindow;
