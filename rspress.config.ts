import * as path from "path";
import { defineConfig } from "rspress/config";

import { pluginCSS } from "./plugins/css";

export default defineConfig({
  root: path.join(__dirname, "docs"),
  title: "Haruka Network",
  description: "综合文档",
  icon: "https://ai.haruka.cloud/logo-simple.png",
  logo: "https://ai.haruka.cloud/logo-simple.png",
  logoText: "Haruka Network Documentation",
  markdown: {
    checkDeadLinks: true,
  },
  ssg: {
    strict: true,
  },
  themeConfig: {
    enableContentAnimation: true,
    enableAppearanceAnimation: false,
    footer: {
      message: "© 2024 Haruka Network LIMITED. All Rights Reserved.",
    },
    hideNavbar: "auto",
    socialLinks: [
      {
        icon: "github",
        mode: "link",
        content: "https://github.com/Haruka-Network/docs",
      },
    ],
  },
  plugins: [pluginCSS()],
});
