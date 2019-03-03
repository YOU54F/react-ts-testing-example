module.exports = {
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.json"
    }
  },
  moduleFileExtensions: ["ts", "js"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  testMatch: ["**/**/**/**/**/.test.(tsx)"],
  testEnvironment: "node",
  reporters: ["default", "jest-junit"],
  coverageDirectory: "./coverage",
  collectCoverage: true
};
