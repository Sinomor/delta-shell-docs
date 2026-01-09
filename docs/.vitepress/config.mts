import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Delta Shell",
  description: "Modern Wayland desktop shell built with AGS",
  base: "/delta-shell-docs/",
  lastUpdated: true,
  ignoreDeadLinks: true,
  themeConfig: {
    outline: "deep",
    nav: [
      { text: "Home", link: "/" },
      { text: "Get Started", link: "/getting-started/installation" },
    ],

    sidebar: [
      {
        text: "Get Started",
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
      {
        text: "Help",
        items: [{ text: "FAQ", link: "/help/faq" }],
      },
    ],

    lastUpdated: {
      text: "Last updated",
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/sinomor/delta-shell" },
      { icon: "discord", link: "https://discord.gg/zx4ssRgsS2" },
    ],
    search: {
      provider: "local",
    },
  },
});
