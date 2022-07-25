import {defineNuxtConfig} from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    meta: {
        link: [
            {
                rel: 'stylesheet',
                href: '/css/bootstrap/bootstrap.css',
            }
        ]
    }
})
