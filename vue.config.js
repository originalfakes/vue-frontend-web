module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://gm98fa.ateam99.net',
                ws: true,
                changeOrigin: true,
            },
        },
    },
}
