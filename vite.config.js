import { defineConfig } from "vite";

// GitHub Pages serves project pages under /<repo>/.
const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repository = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";

export default defineConfig({
  base: isGithubActions && repository ? `/${repository}/` : "/"
});
