module.exports = {
    publicPath: process.env.NODE_ENV !== 'production' ? '' : '/StockPage',
    lintOnSave: false,
    devServer: {
        port: 9099,
    },
    css: {
        loaderOptions: {
            css: {},
            postcss: {
                plugins: [
                    require('postcss-px2rem')({
                        remUnit: 40, // 以设计稿750为例， 750 / 10 = 75
                    }),
                ],
            },
        },
    },
};
