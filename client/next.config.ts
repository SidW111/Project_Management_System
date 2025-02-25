/** @type {import('next').NextConfig} */
const nextConfig: import('next').NextConfig = {
  eslint: {
    ignoreDuringBuilds: true
  },
  images:{
    remotePatterns:[{
      protocol:"https",
      hostname: "pm-s3-photo.s3.us-east-1.amazonaws.com",
      port:"",
      pathname:"/**"
    }]
  }
};

export default nextConfig;
