module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    '^.+\\.svg$': 'jest-transformer-svg', // Use this package for SVG transformation
  },
  moduleNameMapper: {
    '\\.(css|scss)$': '<rootDir>/node_modules/jest-css-modules',
  },
  transformIgnorePatterns: ['/node_modules/(?!react-icons)/'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
};