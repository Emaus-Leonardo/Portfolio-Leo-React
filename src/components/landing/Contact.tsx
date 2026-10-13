import React, { type ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowUp, Download } from "lucide-react";
import Reveal from "./Reveal";
import TechText from "../TechText";
import { profile } from "../../content/profile";
import { sections, socials } from "../../util/landing";
import { downloads } from "../../util/downloads";
import { useLang } from "../../i18n";

const social = (name: string) => {
  const found = socials.find((s) => s.name === name);
  if (!found) throw new Error(`Missing social link: ${name}`);
  return found;
};
const linkedin = social("LinkedIn");
// "Get in touch" opens the e-mail client once an address is set in profile.ts; LinkedIn until then.
const touchHref = profile.email ? `mailto:${profile.email}` : linkedin.href;
const touchExternal = !profile.email;

function Column({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/40 mb-5">{title}</p>
      <ul className="space-y-3 text-white/80">{children}</ul>
    </div>
  );
}

const linkClass = "inline-flex items-center gap-1.5 hover:text-white transition-colors";

export default function Contact() {
  const { t, lang } = useLang();
  const files = downloads(lang);

  return (
    <>
      {/* Call to action */}
      <section id="contact" className="relative min-h-[80svh] scroll-mt-8 flex items-center">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 py-24">
          <Reveal>
            <p className="inline-block text-sm text-neutral-500 bg-[#fafafa] shadow-[0_0_0_5px_#fafafa]">
              {t("contact.label")}
            </p>
            <h2 className="mt-8 max-w-[1120px] text-[clamp(2.75rem,6.5vw,5.75rem)] font-medium tracking-[-0.045em] leading-[0.95] text-neutral-900">
              {t("contact.title1")} <span className="text-neutral-400">{t("contact.title2")}</span>
            </h2>

            <div className="mt-10 md:mt-12 flex flex-wrap items-center gap-2">
              <a
                href={touchHref}
                {...(touchExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group inline-flex items-center gap-2 min-h-[46px] px-5 rounded-lg bg-neutral-900 text-[#fafafa] font-medium hover:bg-neutral-700 transition-colors duration-[180ms]"
              >
                {t("contact.touch")}
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-3 sm:px-5 pb-3 sm:pb-5">
        <div className="relative overflow-hidden rounded-[1.75rem] bg-[#0c0c10] text-white px-6 sm:px-10 md:px-14 pt-12 md:pt-16 pb-6">
          <div
            aria-hidden="true"
            className="absolute -top-40 -right-24 w-[26rem] h-[26rem] rounded-full bg-[#0071e3]/35 blur-3xl"
          />

          <div className="relative mx-auto max-w-7xl grid grid-cols-2 gap-x-6 gap-y-10 md:gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
            <div className="col-span-2 md:col-span-1">
              <p className="text-xl font-medium tracking-[-0.02em]">Emaús Leonardo</p>
              <p className="mt-2 max-w-xs text-white/50 leading-relaxed">{t("footer.blurb")}</p>
            </div>

            <Column title={t("footer.navigate")}>
              {sections.map((s) => (
                <li key={s.id}>
                  <Link to={`/#${s.id}`} className={linkClass}>
                    {t(`nav.${s.id}`)}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/about" className={linkClass}>
                  {t("hero.about")} <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </Column>

            <Column title={t("footer.social")}>
              {socials.map((s) => (
                <li key={s.name}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    {s.name} <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </li>
              ))}
            </Column>

            <Column title={t("footer.elsewhere")}>
              <li>
                <Link to="/desktop" className={linkClass}>
                  {t("menu.desktop")} <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
              <li>
                <a href={files.cv.href} download={files.cv.filename} className={linkClass}>
                  {t("dl.cv")} <Download className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a href={files.portfolio.href} download={files.portfolio.filename} className={linkClass}>
                  {t("dl.portfolio")} <Download className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a href={files.llms.href} className={linkClass}>
                  {t("dl.llms")} <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
            </Column>
          </div>

          <div className="relative mx-auto max-w-7xl mt-10 h-[160px] sm:h-[230px] md:h-[300px]">
            <TechText
              text="Léo."
              fontWeight={700}
              fontSize={320}
              color="#ffffff"
              accentColor="#6cb4ff"
              reveal="letter"
              dashLength={4}
              dashGap={2}
              specks={15}
            />
          </div>

          <blockquote className="relative mx-auto max-w-7xl mt-16 md:mt-24">
            <p className="max-w-3xl text-2xl sm:text-3xl md:text-4xl font-medium tracking-[-0.03em] leading-[1.15] text-white/80">
              &ldquo;{profile.quote}&rdquo;
            </p>
          </blockquote>

          <div className="relative mx-auto max-w-7xl mt-12 md:mt-16 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/40">
            <p>
              © {new Date().getFullYear()} Emaús Leonardo. {t("footer.rights")}
            </p>
            <p className="font-mono text-[11px] hidden md:block">{t("footer.letters")}</p>
            <a href="#home" className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
              {t("footer.top")} <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
