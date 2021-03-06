module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  moduleNameMapper: {
    '\\.svg': '<rootDir>/__mocks__/svgMock.js',
  },
  setupFiles: [
    '<rootDir>/__mocks__/@react-native-async-storage/async-storage.js',
  ],
};