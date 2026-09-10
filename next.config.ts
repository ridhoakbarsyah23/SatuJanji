import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";

const baseSecurityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=()",
  },
];

const contentSecurityPolicyHeader = {
  key: "Content-Security-Policy",
  value: [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline'",
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob:",
    "font-src 'self' data:",
    "connect-src 'self' https://wa.me https://api.whatsapp.com",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "object-src 'none'",
    "upgrade-insecure-requests",
  ].join("; "),
};

const securityHeaders = [
  ...baseSecurityHeaders,
  ...(isProduction ? [contentSecurityPolicyHeader] : []),
];

const nextConfig: NextConfig = {
  // Keep development and production artifacts separate. Running `next build`
  // while the local dev server is active must not invalidate its compiled pages.
  distDir: isProduction ? ".next" : ".next-dev",
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  compiler: {
    removeConsole: isProduction,
  },
  webpack(config) {
    // OneDrive can lock Webpack pack files during atomic renames. Disabling the
    // persistent cache avoids intermittent EPERM/ENOENT errors in every mode.
    config.cache = false;

    return config;
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
