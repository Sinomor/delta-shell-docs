import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Delta Shell",
  description: "A desktop shell based on Ags",
  base: "/delta-shell-docs/",
  lastUpdated: true,
  themeConfig: {
    outline: "deep",
    nav: [
      { text: "Home", link: "/" },
      { text: "Getting Started", link: "/getting-started/installation" },
    ],

    sidebar: [
      {
        text: "Getting Started",
        items: [
          { text: "Installation", link: "/getting-started/installation" },
        ],
      },
      {
        text: "Configuration",
        items: [
          { text: "Config", link: "/config/config" },
          { text: "Bar", link: "/config/bar" },
          { text: "Quicks Settings", link: "/config/quicksettings" },
          { text: "Launcher", link: "/config/launcher" },
          { text: "Clipboard", link: "/config/clipboard" },
          { text: "On Screen Display", link: "/config/osd" },
          { text: "Notifications", link: "/config/notifications" },
          { text: "Weather", link: "/config/weather" },
        ],
      },
      {
        text: "Theming",
        items: [{ text: "Theme", link: "/theme/theme" }],
      },
    ],

    lastUpdated: {
      text: "Last updated",
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/sinomor/delta-shell" },
    ],
  },
});
