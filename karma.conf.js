module.exports = function(config) {
    config.set({

        frameworks: ["jasmine", "karma-typescript"],

        files: [
            { pattern: "tests/**/*.ts" },
            { pattern: "src/**/*.ts" },
            { pattern: "dist/**/*.ts" }
        ],

        exclude: [ "tests/test-init.ts" ],

        preprocessors: {
            "**/*.ts": ["karma-typescript"]
        },

        reporters: ["dots", "karma-typescript"],

        browsers: ['ChromeHeadlessTest'],

        customLaunchers: {
            ChromeHeadlessTest: {
                base: 'ChromeHeadless',
                flags: [
                    '--no-sandbox', // required to run without privileges in docker
                    '--user-data-dir=/tmp/chrome-test-profile',
                    '--disable-web-security'
                ]
            }
        }
    });
};
