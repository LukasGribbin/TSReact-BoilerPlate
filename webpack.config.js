module.exports = {
    entry: './src/app.tsx',
    // Remove below line in production
    mode: 'development',
    //devtool: 'eval-source-map',
    //mode: 'production',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js', '.d.ts' ],        
    },
    output: {
        filename: 'index.js',
        //path: path.resolve(__dirname, 'dist')
    },
    plugins: [
    ],
    stats: {
        // Don't display anything, then add back colors, ...
        all: false,
        colors: true,
        errors: true,
        builtAt: true
    }
};