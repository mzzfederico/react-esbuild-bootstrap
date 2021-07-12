const path = require("path");

require('esbuild').build({
    entryPoints: [path.resolve(__dirname, "client", "src", "index.js")],
    outfile: path.resolve(__dirname, "client", "dist", "index.dist.js"),
    bundle: true,
    loader: {
        ".png": "dataurl"
    },
    watch: {
        onRebuild(error, result) {
            if (error) console.error('watch build failed:', error)
            else console.log('watch build succeeded:', JSON.stringify(result))
        },
    },
});