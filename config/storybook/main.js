module.exports = {
    stories: [
        '../../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        'storybook-addon-mock/register',
    ],
    framework: '@storybook/react',
    core: {
        builder: 'webpack5',
    },
    // Временно добавил отключение чувствительности регистра путей для windows (если будут проблемы с деплоем то разобраться)
    webpackFinal: async (config) => {
        // Находим и удаляем case-sensitive-paths-webpack-plugin
        config.plugins = config.plugins.filter(
            (plugin) => plugin.constructor.name !== 'CaseSensitivePathsPlugin',
        );
        return config;
    },
};
