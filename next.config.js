/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
    },
    // Support for video files
    webpack: (config) => {
        config.module.rules.push({
            test: /\.(mp4|webm|ogg|swf|ogv)$/,
            use: {
                loader: 'file-loader',
                options: {
                    publicPath: '/_next/static/videos/',
                    outputPath: 'static/videos/',
                    name: '[name].[hash].[ext]',
                },
            },
        });
        return config;
    },
};

module.exports = nextConfig;
