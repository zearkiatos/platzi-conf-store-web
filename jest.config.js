module.exports = {
  name: 'platzi-conf-store-web',
  verbose: true,
  testMatch: ['**/*.test.js'],
  testEnvironment: 'node',
  collectCoverageFrom: ['src/**/*.js', '!**/node_modules/**'],
  rootDir: ".",
  moduleNameMapper: {
   '\\.(css|less)$': "<rootDir>/tests/__mocks__/styleMock.js",
    'components/(.*)$': '<rootDir>/src/components/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/tests/setupTest.js']
};
