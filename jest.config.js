module.exports = {
  name: 'platzi-conf-store-web',
  verbose: true,
  testMatch: ['**/*.test.js'],
  testEnvironment: 'node',
  collectCoverageFrom: ['src/**/*.js', '!**/node_modules/**'],
  rootDir: ".",
  moduleNameMapper: {
   '\\.(css|styl|sass|less|scss)$': "<rootDir>/tests/__mocks__/styleMock.js",
    'components/(.*)$': '<rootDir>/src/components/$1',
    'context/(.*)$': '<rootDir>/src/context/$1',
    '^@config': '<rootDir>/src/config/index.js',
    'hooks/(.*)$': '<rootDir>/src/hooks/$1',
    'mocks/(.*)$': '<rootDir>/src/mocks/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/tests/setupTest.js']
};
