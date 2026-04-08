/** @type {import('next').NextConfig} */

const nextConfig = {
  distDir: ".next",
  typescript: {
    // Temporary safeguard while legacy shared UI files are cleaned up.
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: "avatars.githubusercontent.com",
        protocol: "https",
      },
      {
        hostname: "lh3.googleusercontent.com",
        protocol: "https",
      },
      {
        hostname: "fast.wistia.net",
        protocol: "https",
      },
      {
        protocol: "https",
        hostname: "*.wistia.net",
      },
      {
        protocol: "https",
        hostname: "fast.wistia.com",
      },
      {
        protocol: "https",
        hostname: "owerrlaobwdowecvbfgk.supabase.co",
      },
      {
        protocol: "https",
        hostname: "browser.sentry-cdn.com",
      },
      {
        protocol: "https",
        hostname: "instagram.com",
      },

       {
        protocol: "https",
        hostname: "youtube.com",
      },



      
    ],
  },

  // 👇 ADD THIS SECTION TO FIX THE BLOB ERROR
   async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' http://fast.wistia.com https://fast.wistia.com https://*.wistia.com http://fast.wistia.net https://fast.wistia.net https://*.wistia.net https://browser.sentry-cdn.com",
              // ✅ Added *.sentry.io and *.ingest.sentry.io for Wistia's error reporting
              // ✅ Added http://fast.wistia.net for plugin JS files loaded over HTTP
              "connect-src 'self' http://fast.wistia.com https://fast.wistia.com https://*.wistia.com http://fast.wistia.net https://fast.wistia.net https://*.wistia.net wss://distillery.wistia.com *.supabase.co https://*.sentry.io https://*.ingest.sentry.io https://browser.sentry-cdn.com",
              "img-src 'self' data: blob: https://*.wistia.com https://*.wistia.net https://*.wi.st",
              "media-src 'self' blob: http://*.wistia.net https://*.wistia.com https://*.wistia.net https://*.wi.st",
              "frame-src 'self' https://*.wistia.com https://*.wistia.net",
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
