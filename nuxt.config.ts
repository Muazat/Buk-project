// https://v3.nuxtjs.org/api/configuration/nuxt.config
import { defineNuxtConfig } from "nuxt/config";
export default defineNuxtConfig({
  css: ["@/assets/css/main.css"],
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "@nuxtjs/supabase"],
});
