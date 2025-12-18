import * as path from "path";
import { defineConfig } from "rspress/config";

import { pluginCSS } from "./plugins/css";

export default defineConfig({
  lang: "en-US",
  root: path.join(__dirname, "docs"),
  title: "Haruka Network",
  description: "Haruka Network Documentation",
  icon: "https://ai.haruka.cloud/logo-simple.png",
  logo: "https://ai.haruka.cloud/logo-simple.png",
  logoText: "Haruka Network Documentation",
  markdown: {
    checkDeadLinks: true,
  },
  themeConfig: {
    lastUpdated: true,
    enableScrollToTop: true,
    enableContentAnimation: true,
    footer: {
      message: "© 2025 Haruka Network LIMITED. All Rights Reserved.",
    },
    socialLinks: [
      {
        icon: "github",
        mode: "link",
        content: "https://github.com/Haruka-Network/docs",
      },
    ],
    locales: [
      {
        lang: "en-US",
        label: "English",
      },
      {
        lang: "zh-CN",
        label: "简体中文",
      },
    ],
  },
  locales: [
    {
      lang: "en-US",
      label: "English",
    },
    {
      lang: "zh-CN",
      label: "简体中文",
    },
  ],
  plugins: [pluginCSS()],
});
