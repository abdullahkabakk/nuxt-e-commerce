export default defineNuxtConfig({
    css: ["@/assets/css/tailwind.css"],
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
        configPath: 'tailwind.config.js',
        exposeConfig: false,
        injectPosition: 0,
        viewer: true,
    },
    modules: ['@nuxtjs/tailwindcss', "@nuxtjs/color-mode", "@pinia/nuxt"],
    colorMode: {
        classSuffix: ""
    },
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                },
            },
        },
    },
    runtimeConfig: {
        apiUrl: process.env.BASE_API_URL,
        guid: process.env.GUID,
        userName: process.env.NAMEUSER,
        passWord: process.env.PASSWORD,
    },
});