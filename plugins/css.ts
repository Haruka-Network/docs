import { RspressPlugin } from "@rspress/shared";
import path from "path";

export function pluginCSS(): RspressPlugin {
  return {
    // plugin name
    name: "CSS Plugin",
    globalStyles: path.join(__dirname, "../global.css"),
  };
}
