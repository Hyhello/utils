// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
	// Automatically clear mock calls and instances between every test
	clearMocks: true,

	// The directory where Jest should output its coverage files
	coverageDirectory: 'coverage/',

	// A set of global variables that need to be available in all test environments
	globals: {
		NODE_ENV: 'test'
	},

	// An array of file extensions your modules use
	moduleFileExtensions: [
	  "js",
	  "json",
	  "jsx",
	  "ts",
	  "tsx",
	  "node"
	],

	// A map from regular expressions to module names that allow to stub out resources with a single module
	moduleNameMapper: {
		'^pkg/(.*)$': '<rootDir>/packages/$1'
	},

	// A preset that is used as a base for Jest's configuration
	preset: 'ts-jest',
	// Options that will be passed to the testEnvironment
    testEnvironment: 'jsdom',

	// The glob patterns Jest uses to detect test files
	testMatch: [
        '<rootDir>/**/*.spec.ts'
	],

	// An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
	testPathIgnorePatterns: ['\\\\node_modules\\\\'],
	transform: {
        '\\.(ts)x?$': 'ts-jest',
        '\\.(js)x?$': 'babel-jest'
	},
	// Indicates whether each individual test should be reported during the run
	verbose: true
};
