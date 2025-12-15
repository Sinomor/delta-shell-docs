import DefaultTheme from "vitepress/theme";
import "../theme.css";

// (если ты добавляешь компоненты, например ColorBlock.vue)
import ColorBlock from "./components/ColorBlock.vue";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component("ColorBlock", ColorBlock);
  },
};
