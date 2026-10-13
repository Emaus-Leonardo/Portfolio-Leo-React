import React, { useState, useCallback, useMemo, type ElementType, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Folder,
  FileText,
  Globe,
  Music as MusicIcon,
  Terminal as TerminalIcon,
  X,
  Cpu,
  User,
  Briefcase,
} from "lucide-react";

import MacOSDock from "../../components/ui/mac-os-dock";
import MenuBar from "../../components/desktop/menu-bar";
import DesktopIcon from "../../components/desktop/desktop-icon";
import AppWindow from "../../components/desktop/app-window";
import { useResponsive } from "../../hooks/useReponsive";

// Window Content Components
import FinderWindow from "../../components/desktop/windows/finder-window";
import NotesWindow from "../../components/desktop/windows/notes-window";
import BrowserWindow from "../../components/desktop/windows/browser-window";
import MusicWindow from "../../components/desktop/windows/music-window";
import TerminalWindow from "../../components/desktop/windows/terminal-window";
import SkillsWindow from "../../components/desktop/windows/skills-window";
import AboutWindow from "../../components/desktop/windows/about-window";
import ProjectsWindow from "../../components/desktop/windows/projects-window";

type AppId = "skills" | "about" | "projects" | "finder" | "safari" | "notes" | "music" | "terminal";

interface AppItem {
  id: AppId;
  name: string;
  icon: string | ElementType;
}

const sampleApps: AppItem[] = [
  { id: "skills", name: "My Skills", icon: Cpu },
  { id: "about", name: "About Me", icon: User },
  { id: "projects", name: "Projects", icon: Briefcase },
  { id: "finder", name: "Finder", icon: "https://cdn.jim-nielsen.com/macos/1024/finder-2021-09-10.png?rf=1024" },
  { id: "safari", name: "Safari", icon: "https://cdn.jim-nielsen.com/macos/1024/safari-2021-06-02.png?rf=1024" },
  { id: "notes", name: "Notes", icon: "https://cdn.jim-nielsen.com/macos/1024/notes-2021-05-25.png?rf=1024" },
  { id: "music", name: "Music", icon: "https://cdn.jim-nielsen.com/macos/1024/music-2021-05-25.png?rf=1024" },
  { id: "terminal", name: "Terminal", icon: "https://cdn.jim-nielsen.com/macos/1024/terminal-2021-06-03.png?rf=1024" },
];

const desktopIcons: AppItem[] = [
  { id: "skills", name: "My Skills", icon: Cpu },
  { id: "about", name: "About Me", icon: User },
  { id: "projects", name: "Projects", icon: Briefcase },
  { id: "finder", name: "Finder", icon: Folder },
  { id: "notes", name: "My Notes", icon: FileText },
  { id: "safari", name: "Browser", icon: Globe },
  { id: "music", name: "Playlists", icon: MusicIcon },
];

const WINDOW_SIZE: Partial<Record<AppId, { width: string; height: string }>> = {
  skills: { width: "900px", height: "600px" },
  about: { width: "800px", height: "700px" },
  projects: { width: "1000px", height: "800px" },
};
const DEFAULT_SIZE = { width: "600px", height: "400px" };

const renderAppContent = (appId: AppId): ReactNode => {
  switch (appId) {
    case "skills": return <SkillsWindow />;
    case "about": return <AboutWindow />;
    case "projects": return <ProjectsWindow />;
    case "finder": return <FinderWindow />;
    case "notes": return <NotesWindow />;
    case "safari": return <BrowserWindow />;
    case "music": return <MusicWindow />;
    case "terminal": return <TerminalWindow />;
    default: return null;
  }
};

// Interactive macOS-style desktop mode (/desktop).
const MySkills = () => {
  const { isMobile, isTablet } = useResponsive();
  const [openApps, setOpenApps] = useState<AppId[]>([]);
  const [focusedApp, setFocusedApp] = useState<AppId | null>(null);
  const [windowZIndexes, setWindowZIndexes] = useState<Partial<Record<AppId, number>>>({});
  const [showWelcome, setShowWelcome] = useState(true);

  const handleFocus = useCallback((appId: string) => {
    const id = appId as AppId;
    setFocusedApp(id);
    setWindowZIndexes((prev) => {
      const maxZ = Math.max(0, ...Object.values(prev)) + 1;
      return { ...prev, [id]: maxZ };
    });
  }, []);

  const handleAppClick = useCallback(
    (appId: string) => {
      const id = appId as AppId;
      setOpenApps((prev) => (prev.includes(id) ? prev : [...prev, id]));
      handleFocus(id);
    },
    [handleFocus]
  );

  const handleClose = useCallback((appId: string) => {
    setOpenApps((prev) => prev.filter((id) => id !== appId));
    setFocusedApp((prev) => (prev === appId ? null : prev));
  }, []);

  const currentAppName = useMemo(() => {
    if (!focusedApp) return "Finder";
    return sampleApps.find((a) => a.id === focusedApp)?.name ?? "Finder";
  }, [focusedApp]);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black select-none font-sans">
      {/* Welcome Popup */}
      <AnimatePresence>
        {showWelcome && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-0 z-[5000] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
          >
            <div className="bg-white/90 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-white/20 max-w-sm w-full relative flex flex-col items-center text-center gap-6">
              <button
                onClick={() => setShowWelcome(false)}
                className="absolute top-4 right-4 p-1 rounded-full hover:bg-black/5 transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>

              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg animate-bounce">
                <TerminalIcon className="w-10 h-10 text-white" />
              </div>

              <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-bold text-gray-800">Welcome to My OS</h2>
                <p className="text-sm text-gray-500 leading-relaxed font-medium">
                  Welcome to my interactive skills portfolio.
                  Click the icons below or on the desktop to explore my experience!
                </p>
              </div>

              <button
                onClick={() => setShowWelcome(false)}
                className="w-full bg-black text-white py-3 rounded-xl font-bold hover:opacity-90 transition-opacity"
              >
                Let&apos;s explore
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dynamic Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 scale-105"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1611641613359-f698d549dca8?q=80&w=2560&auto=format&fit=crop")',
          filter: openApps.length > 0 ? "brightness(0.9) blur(2px)" : "brightness(1)",
        }}
      />

      <MenuBar appName={currentAppName} />

      {/* Desktop Area */}
      <main className="absolute inset-0 pt-8 pb-24 px-4 flex flex-col items-end gap-4 flex-wrap content-end">
        {!isMobile &&
          desktopIcons.map((icon) => (
            <DesktopIcon key={icon.id} id={icon.id} name={icon.name} icon={icon.icon} onClick={handleAppClick} />
          ))}

        <AnimatePresence>
          {openApps.map((appId) => {
            const app = sampleApps.find((a) => a.id === appId);
            const size = WINDOW_SIZE[appId] ?? DEFAULT_SIZE;
            return (
              <AppWindow
                key={appId}
                id={appId}
                title={app?.name || "App"}
                isFocused={focusedApp === appId}
                zIndex={windowZIndexes[appId] || 10}
                onClose={handleClose}
                onFocus={handleFocus}
                isMobile={isMobile || isTablet}
                width={size.width}
                height={size.height}
              >
                {renderAppContent(appId)}
              </AppWindow>
            );
          })}
        </AnimatePresence>
      </main>

      {/* Dock Interaction */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center z-[2000] pointer-events-none">
        <div className="pointer-events-auto">
          <MacOSDock apps={sampleApps} openApps={openApps} onAppClick={handleAppClick} />
        </div>
      </div>
    </div>
  );
};

export default MySkills;
