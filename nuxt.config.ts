import ElementPlus from "unplugin-element-plus/vite";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ["element-plus/dist/index.css"],
  vite: {
    plugins: [ElementPlus()],
  },
  // auto import components
  components: true,
});
