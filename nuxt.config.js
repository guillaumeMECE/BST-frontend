// const env = require('./.env');
require('dotenv').config();

module.exports = {
    mode: 'universal',
    srcDir: './frontend',
    // env: {
    //     baseUrl: process.env.BASE_URL || 'http://localhost:3030'
    // },
    /*
** Headers of the page
*/
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lilita+One&display=swap' },
        ],
    },
    /*
** Customize the progress-bar color
*/
    loading: { color: '#fff' },
    /*
** Global CSS
*/
    css: [
    ],
    /*
** Plugins to load before mounting the App
*/
    plugins: [

    ],
    /*
** Nuxt.js modules
*/
    modules: [

        // Doc: https://vuetifyjs.com/
        '@nuxtjs/vuetify',


        // '@nuxtjs/bootstrap-vue',
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        '@nuxtjs/eslint-module',
    ],

    /*
** Axios module configuration
** See https://axios.nuxtjs.org/options
*/
    axios: {
        baseURL: process.env.BASE_URL,
        redirectError: {
            401: '/index',
        },
    },
    /*
** Build configuration
*/
    build: {
    /*    ** You can extend webpack config here
    */
        extend(config, ctx) {
            if (ctx.dev && ctx.isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/,
                });
            }
        },
    },
};
