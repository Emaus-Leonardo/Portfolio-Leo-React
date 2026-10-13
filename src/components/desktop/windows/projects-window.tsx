import React from 'react';
import Projects from '../../../pages/Projects';

const ProjectsWindow: React.FC = () => {
    return (
        <div className="h-full bg-[#F4F6F8] overflow-auto rounded-b-xl relative custom-projects-window">
            <style>
                {`
                    .custom-projects-window section {
                        height: auto !important;
                        min-height: 100% !important;
                        width: 100% !important;
                        padding-top: 2rem !important;
                        padding-bottom: 4rem !important;
                    }
                    .custom-projects-window .mt-24 {
                        margin-top: 1rem !important;
                    }
                `}
            </style>
            <Projects />
        </div>
    );
};

export default ProjectsWindow;
