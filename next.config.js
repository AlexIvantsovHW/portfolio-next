/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    disableStaticImages: false,
  },
  webpack: (config) => {
    // Игнорировать файлы тестов
    config.module.rules.push({
      test: /.*\.(test|spec)\.(js|jsx|ts|tsx)$/,
    });
    return config;
  },
  env: {
    BASE_URL: process.env.BASE_URL,
  },
};

module.exports = nextConfig;
