/** @type {import('next').NextConfig} */

const nextConfig = {
  distDir: ".next",
  typescript: {
    // Temporary safeguard while legacy shared UI files are cleaned up.
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      { hostname: "avatars.githubusercontent.com", protocol: "https" },
      { hostname: "lh3.googleusercontent.com", protocol: "https" },
      { hostname: "fast.wistia.net", protocol: "https" },
      { hostname: "*.wistia.net", protocol: "https" },
      { hostname: "fast.wistia.com", protocol: "https" },
      { hostname: "owerrlaobwdowecvbfgk.supabase.co", protocol: "https" },
      { hostname: "browser.sentry-cdn.com", protocol: "https" },
      { hostname: "instagram.com", protocol: "https" },
      // I've added wildcards here just in case you ever pass GTM/GA images through next/image
      { hostname: "*.googletagmanager.com", protocol: "https" },
      { hostname: "*.google-analytics.com", protocol: "https" },
    ],
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              // ✅ Added GTM and GA to script-src
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' http://fast.wistia.com https://fast.wistia.com https://*.wistia.com http://fast.wistia.net https://fast.wistia.net https://*.wistia.net https://browser.sentry-cdn.com https://*.googletagmanager.com https://*.google-analytics.com",
              // ✅ Fixed connect-src to use wildcards for GTM, GA, and added analytics.google.com
              "connect-src 'self' http://fast.wistia.com https://fast.wistia.com https://*.wistia.com http://fast.wistia.net https://fast.wistia.net https://*.wistia.net wss://distillery.wistia.com *.supabase.co https://*.sentry.io https://*.ingest.sentry.io https://browser.sentry-cdn.com https://*.googletagmanager.com https://*.google-analytics.com https://*.analytics.google.com",
              // ✅ Added GTM and GA to img-src (essential for tracking pixels)
              "img-src 'self' data: blob: https://*.wistia.com https://*.wistia.net https://*.wi.st https://*.googletagmanager.com https://*.google-analytics.com",
              "media-src 'self' blob: http://*.wistia.net https://*.wistia.com https://*.wistia.net https://*.wi.st",
              // ✅ Added GTM to frame-src (required for your <noscript> iframe fallback)
              "frame-src 'self' https://*.wistia.com https://*.wistia.net https://*.googletagmanager.com",
              "style-src 'self' 'unsafe-inline' https://*.wistia.com https://*.wistia.net",
              "worker-src blob: 'self'",
              "font-src 'self' data: https://*.wistia.com https://*.wistia.net",
            ].join('; '),
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;