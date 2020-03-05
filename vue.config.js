const path = require("path");

module.exports = {
  // outputDir: path.resolve(__dirname, "../../../sites/default/files/dist/"),
    outputDir: path.resolve(__dirname, "../../../sites/all/modules/custom/teste/dist/"),
    chainWebpack: config => {
        if(config.plugins.has('extract-css')) {
            const extractCSSPlugin = config.plugin('extract-css')
            extractCSSPlugin && extractCSSPlugin.tap(() => [{
                filename: '[name].css',
                chunkFilename: '[name].css'
            }])
        }
    },
    configureWebpack: {
        output: {
            filename: '[name].js',
            chunkFilename: '[name].js'
        }
    },
    pages: {
        catalogo: {
            // entry for the page
            entry: 'src/pages/catalogo/main.js',
            // the source template
            template: 'public/catalogo.html',
            // output as dist/index.html
            filename: 'catalogo.html',
            // when using title option,
            // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'Catalogo',
            // chunks to include on this page, by default includes
            // extracted common chunks and vendor chunks.
            chunks: ['chunk-vendors', 'chunk-common', 'catalogo']
        },
        details: {
            entry: 'src/pages/details/main.js',
            template: 'public/details.html',
            filename: 'details.html',
            title: 'Detalhes',
            chunks: ['chunk-vendors', 'chunk-common', 'details']
        },
        cubo: {
            entry: 'src/pages/cubo/main.js',
            template: 'public/cubo.html',
            filename: 'cubo.html',
            title: 'cubo',
            chunks: ['chunk-vendors', 'chunk-common', 'cubo']
        },
        // when using the entry-only string format,
        // template is inferred to be `public/subpage.html`
        // and falls back to `public/index.html` if not found.
        // Output filename is inferred to be `subpage.html`.
        // subpage: 'src/subpage/main.js'
    }
}
