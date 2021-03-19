module.exports = {
  name: 'backend',
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'html', 'json'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.test.json',
      diagnostics: {
        // ts-jest raises fake warning message which stop test
        warnOnly: true
      }
    }
  },
  // remove wrong jest warning
  // https://github.com/facebook/jest/issues/8114#issuecomment-475068766
  modulePathIgnorePatterns: ['<rootDir>/dist']
};
