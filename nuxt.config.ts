// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: "Nuxt Blog",
            meta: [
                {charset: "utf-8"},
                {name: "viewport", content: "width-device-width, initial-scale-1"},
                {hid: "description", name: "description", content: "learn"}
            ]
        }
    },
    devtools: {enabled: true},
    modules: [
        '@nuxtjs/tailwindcss'
    ]
})
