/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/.well-known/appspecific/com.tesla.3p.public-key.pem',
        destination: '/api/.well-known/appspecific/com.tesla.3p.public-key.pem'
      }
    ];
  }
};

module.exports = nextConfig; 