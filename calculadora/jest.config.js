module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    transform: {
      "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
    },
    moduleNameMapper: {
      "\\.(css|less|scss|sass)$": "identity-obj-proxy"
    },
    setupFilesAfterEnv: [
      "<rootDir>/jest.setup.js"
    ]
  };
  