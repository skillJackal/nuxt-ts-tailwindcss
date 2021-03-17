export default {
    telemetry: false,
    buildModules: ['@nuxt/typescript-build', '@nuxtjs/tailwindcss'],
    server: {
        port: 3000
    },
    tailwindcss: {
        jit: true
    }
}