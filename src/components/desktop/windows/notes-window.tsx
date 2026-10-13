import React from 'react';

const NotesWindow = () => {
    return (
        <div className="h-full flex flex-col bg-[#FFF9E5] p-6 rounded-lg shadow-inner">
            <div className="text-2xl font-bold text-gray-800 mb-4 border-b border-gray-300 pb-2 font-serif">
                Personal Notes
            </div>
            <div className="flex-1 font-serif text-gray-700 leading-relaxed whitespace-pre-wrap outline-none">
                Today&apos;s Objective:
                - Finish the macOS desktop experience
                - Implement window dragging and focus
                - Add remaining app windows
                - Polish animations

                Ideas for future components:
                - Control Center
                - Notification Center
                - Launchpad
            </div>
        </div>
    );
};

export default NotesWindow;
