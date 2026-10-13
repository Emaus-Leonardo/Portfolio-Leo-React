import React, { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { motion, useReducedMotion, type MotionProps } from "framer-motion";
import LandingMenuBar from "../../components/landing/LandingMenuBar";
import CaseSidebar from "../../components/case/CaseSidebar";
import MediaStream from "../../components/case/MediaStream";
import ProjectPager from "../../components/case/ProjectPager";
import SplitText from "../../components/landing/SplitText";
import { projects, findProject } from "../../util/projects";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const hostOf = (url?: string): string | null => {
  if (!url) return null;
  try {
    return new URL(url).host;
  } catch {
    return null;
  }
};

export default function CaseStudy() {
  const { slug } = useParams();
  const reduce = useReducedMotion();
  const project = findProject(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) return <Navigate to="/#projects" replace />;

  const prev = projects[(project.index - 1 + projects.length) % projects.length];
  const next = projects[(project.index + 1) % projects.length];
  const enter = (delay: number): MotionProps =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, filter: "blur(14px)", y: 40 },
          animate: { opacity: 1, filter: "blur(0px)", y: 0 },
          transition: { duration: 0.85, delay, ease },
        };

  return (
    <div className="relative isolate min-h-screen text-neutral-900">
      <div className="wallpaper" aria-hidden="true" />
      {/* The open "app" in the menu bar is the project itself */}
      <LandingMenuBar title={project.title} />

      <main key={project.slug} className="mx-auto max-w-[1500px] px-5 sm:px-8 pt-24 pb-8">
        <div className="mb-10 md:mb-14">
          <p className="font-mono text-sm text-neutral-500">
            ~/projects/<span className="text-neutral-900">{project.slug}</span>
            <span className="caret ml-1 text-[#0071e3]" />
          </p>
          <h1 className="sr-only">{project.title}</h1>
          <SplitText
            as="p"
            text={project.title}
            delay={0.1}
            className="mt-4 block text-[clamp(2.5rem,7vw,6rem)] font-medium tracking-[-0.05em] leading-[1.02] text-neutral-900"
          />
        </div>

        <div className="grid gap-10 lg:gap-8 lg:grid-cols-[340px_minmax(0,1fr)] items-start">
          <motion.div {...enter(0.25)} className="lg:sticky lg:top-[calc(2rem+24px)]">
            <CaseSidebar project={project} total={projects.length} />
          </motion.div>
          <motion.div {...enter(0.4)} className="lg:mb-28">
            <MediaStream media={project.media} host={hostOf(project.demo) ?? hostOf(project.github) ?? "localhost"} />
          </motion.div>
        </div>
      </main>

      <ProjectPager prev={prev} next={next} />
    </div>
  );
}
