import React from 'react';
import About from '../../../pages/About';

const AboutWindow: React.FC = () => {
    return (
        <div className="h-full bg-white overflow-auto rounded-b-xl relative custom-window-content">
            <style>
                {`
                    .custom-window-content section {
                        height: auto !important;
                        min-height: 100% !important;
                        width: 100% !important;
                        padding-top: 2rem !important;
                        padding-bottom: 2rem !important;
                    }
                    .custom-window-content .container {
                        max-width: 100% !important;
                    }
                `}
            </style>
            <About />
        </div>
    );
};

export default AboutWindow;
