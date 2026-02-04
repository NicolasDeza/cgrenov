// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  css: ["~/assets/css/main.css"],

  modules: ["@nuxtjs/tailwindcss", "@nuxt/image"],

  // Storyblock (CMS)
  // storyblok: {
  //   accessToken: process.env.STORYBLOK_API_TOKEN,
  //   apiOptions: {
  //     region: "eu",
  //   },
  // },

  // Config SMTP
  runtimeConfig: {
    smtp: {
      host: process.env.NUXT_SMTP_HOST || "",
      port: Number(process.env.NUXT_SMTP_PORT) || 587,
      user: process.env.NUXT_SMTP_USER || "",
      pass: process.env.NUXT_SMTP_PASS || "",
    },
    mail: {
      from: process.env.NUXT_MAIL_FROM || "",
      to: process.env.NUXT_MAIL_TO || "",
    },
    turnstileSecretKey: process.env.TURNSTILE_SECRET_KEY,
    public: {
      turnstileSiteKey: process.env.NUXT_PUBLIC_TURNSTILE_SITE_KEY,
      // storyblokToken: process.env.STORYBLOK_API_TOKEN,
    },
  },

  vite: {
    server: {
      allowedHosts: true,
    },
  },

  //  SEO GLOBAL (BASE) – Nuxt Starter

  app: {
    pageTransition: { name: "page", mode: "out-in" },

    head: {
      htmlAttrs: {
        lang: "fr",
      },

      // Titre par défaut + template
      titleTemplate: "%s – CG Renov",

      meta: [
        {
          name: "description",
          content:
            "CG Renov est une entreprise de rénovation en Belgique spécialisée en rénovation intérieure et extérieure.",
        },
        { name: "robots", content: "index, follow" },
        { name: "author", content: "CG Renov" },
      ],

      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/images/logo/logo-cg-renov.png",
        },
        // {
        //   rel: "icon",
        //   type: "image/x-icon",
        //   href: "/favicon.ico",
        // },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/images/logo/logo-cg-renov.png",
        },
      ],
    },
  },
});
