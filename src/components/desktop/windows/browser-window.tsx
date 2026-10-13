import React from 'react';
import { ChevronLeft, ChevronRight, RotateCw, Lock, Share, Plus } from 'lucide-react';

const BrowserWindow = () => {
    return (
        <div className="h-full flex flex-col">
            <div className="flex items-center gap-4 bg-gray-100/80 p-2 rounded-t-lg border-b border-gray-200">
                <div className="flex gap-2">
                    <ChevronLeft className="w-4 h-4 text-gray-400" />
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                </div>
                <RotateCw className="w-4 h-4 text-gray-400" />
                <div className="flex-1 bg-white rounded-md border border-gray-200 flex items-center px-3 py-1 gap-2">
                    <Lock className="w-3 h-3 text-gray-400" />
                    <span className="text-xs text-gray-600 truncate">https://leo-portfolio.com</span>
                </div>
                <div className="flex gap-3">
                    <Share className="w-4 h-4 text-gray-400" />
                    <Plus className="w-4 h-4 text-gray-400" />
                </div>
            </div>
            <div className="flex-1 bg-white p-8">
                <div className="max-w-2xl mx-auto flex flex-col gap-6">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Welcome to the Future
                    </h1>
                    <p className="text-gray-600 leading-relaxed text-lg">
                        This is a mock browser window integrated into a macOS-style desktop environment.
                        Everything you see here is built with React, Tailwind, and Shadcn UI.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 flex flex-col gap-2">
                            <span className="font-bold text-gray-800">Fast Performance</span>
                            <span className="text-xs text-gray-500">Optimized with Vite and React.</span>
                        </div>
                        <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 flex flex-col gap-2">
                            <span className="font-bold text-gray-800">Beautiful Design</span>
                            <span className="text-xs text-gray-500">Styled with Tailwind CSS.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrowserWindow;
