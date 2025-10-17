import { createSecureHeaders } from 'next-secure-headers';

const securityHeaders = createSecureHeaders();

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  headers: async () => [
    {
      source: '/(.*)',
      headers: securityHeaders
    }
  ]
};

export default nextConfig;
