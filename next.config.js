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
      { hostname: "*.googletagmanager.com", protocol: "https" },
      { hostname: "*.google-analytics.com", protocol: "https" },
      // ✅ Added Facebook for Pixel image fallbacks
      { hostname: "www.facebook.com", protocol: "https" },
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
              // ✅ Added www.facebook.com to allow the Event Setup Tool script (iwl.js)
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' http://fast.wistia.com https://fast.wistia.com https://*.wistia.com http://fast.wistia.net https://fast.wistia.net https://*.wistia.net https://browser.sentry-cdn.com https://*.googletagmanager.com https://*.google-analytics.com https://connect.facebook.net https://www.facebook.com",
              "connect-src 'self' http://fast.wistia.com https://fast.wistia.com https://*.wistia.com http://fast.wistia.net https://fast.wistia.net https://*.wistia.net wss://distillery.wistia.com *.supabase.co https://*.sentry.io https://*.ingest.sentry.io https://browser.sentry-cdn.com https://*.googletagmanager.com https://*.google-analytics.com https://*.analytics.google.com https://www.facebook.com",
              "img-src 'self' data: blob: https://*.wistia.com https://*.wistia.net https://*.wi.st https://*.googletagmanager.com https://*.google-analytics.com https://www.facebook.com",
              "media-src 'self' blob: http://*.wistia.net https://*.wistia.com https://*.wistia.net https://*.wi.st",
              "frame-src 'self' https://*.wistia.com https://*.wistia.net https://*.googletagmanager.com https://www.facebook.com",
              // ✅ Added fonts.googleapis.com for your Next.js fonts
              "style-src 'self' 'unsafe-inline' https://*.wistia.com https://*.wistia.net https://fonts.googleapis.com",
              "worker-src blob: 'self'",
              // ✅ Added fonts.gstatic.com for the actual Google font files
              "font-src 'self' data: https://*.wistia.com https://*.wistia.net https://fonts.gstatic.com",
            ].join('; '),
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;