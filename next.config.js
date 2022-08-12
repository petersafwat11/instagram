/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains:["logo-logos.com", 'static01.nyt.com', 'i.pravatar.cc', 'assets.goal.com', 'mobilemonkey.com', 'lh3.googleusercontent.com']
  },
}

module.exports = nextConfig
 