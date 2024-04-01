const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  testMatch: ['**/__tests__/*.js?(x)'],
  collectCoverageFrom: [
    // '**/*.{js,jsx,ts,tsx}',
    '<rootDir>/components/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/utils/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/__tests__/*.spec.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!<rootDir>/out/**',
    '!<rootDir>/.next/**',
    '!<rootDir>/*.config.js',
    '!<rootDir>/coverage/**',
  ],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/build/'],
  testEnvironment: 'jest-environment-jsdom',
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
