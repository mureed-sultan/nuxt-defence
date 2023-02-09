export default {
    modules: ["@nuxtjs/sanity"],
    buildModules: [
      '@nuxt/postcss8',
    ],
    sanity: {
      projectId: '3zp1fv6w',
      apiVersion: '2022-03-25',
      dataset: 'production',
      useCdn: false,
    },
    css: ["@/assets/css/main.css"],
    nitro: {
      preset: 'vercel-edge',
    },
      postcss: {
        plugins: {
          'postcss-for': {},
          'postcss-hexrgba': {},
          'postcss-import': {},
          'postcss-simple-vars': {},
          'postcss-advanced-variables': {},
          "postcss-nested": {},
          'tailwindcss/nesting':{},
          autoprefixer: {},
          tailwindcss: {},
        },
      },
    components: {
      dirs: ["~/components", "~/components/global"],
    },
  
  };
  