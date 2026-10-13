import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { markdownFiles } from "./src/content/markdown";

/**
 * Publishes the Markdown exports (CV, portfolio for LLMs, llms.txt) generated from
 * `src/content/profile.ts`: served by the dev server and emitted into `dist/` at build.
 * Nothing generated is committed, so the files cannot drift from the site.
 */
function markdownExports(): Plugin {
  const render = () => {
    // SITE_URL wins; on Vercel the production domain is provided at build time.
    const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
    const siteUrl = (process.env.SITE_URL ?? (vercel ? `https://${vercel}` : undefined))?.replace(/\/$/, "");
    return markdownFiles({ siteUrl, updated: new Date().toISOString().slice(0, 10) });
  };

  return {
    name: "markdown-exports",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const pathname = (req.url ?? "").split("?")[0].replace(/^\//, "");
        const file = render().find((f) => f.path === pathname);
        if (!file) return next();
        res.setHeader("Content-Type", file.contentType);
        res.end(file.body);
      });
    },
    generateBundle() {
      for (const f of render()) this.emitFile({ type: "asset", fileName: f.path, source: f.body });
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), markdownExports()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
