module.exports = {
    "stories": [
        "../src/**/*.stories.mdx",
        "../src/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    "addons": [
        "@storybook/addon-links",
        // '@storybook/addon-controls',
        "@storybook/addon-essentials",
        // "@storybook/addon-docs",
        "@storybook/preset-create-react-app",
        '@whitespace/storybook-addon-html',
        'storybook-addon-themes'
    ]
}