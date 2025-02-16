/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Ignore API routes in static export
  distDir: '.next',
  images: {
    unoptimized: true,
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/.well-known/appspecific/com.tesla.3p.public-key.pem',
  //       destination: '/api/.well-known/appspecific/com.tesla.3p.public-key.pem'
  //     }
  //   ];
  // }
};

module.exports = nextConfig; 