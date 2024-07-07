module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.imagin.studio',
        port: '',
        pathname: '/getimage',
      },
    ],
  },
  env: {
    NEXT_PUBLIC_RAPID_API_KEY: process.env.NEXT_PUBLIC_RAPID_API_KEY,
    NEXT_PUBLIC_IMAGIN_API_KEY: process.env.NEXT_PUBLIC_IMAGIN_API_KEY,
  },
};
