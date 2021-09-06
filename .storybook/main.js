module.exports = {
    "stories": [
        "../src/**/*.stories.mdx",
        "../src/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    "addons": [
        "@storybook/addon-links",
        // "@storybook/addon-essentials",
        {
            name: '@storybook/addon-essentials',
            options: {
                actions: true,
                backgrounds: false,
                controls: true,
                docs: true,
                viewport: false,
                toolbars: false
            }
        },
        "@storybook/preset-create-react-app",
        '@whitespace/storybook-addon-html',
        'storybook-addon-themes'
    ]
}