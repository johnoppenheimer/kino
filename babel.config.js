module.exports = (api) => {
    api.cache(true);

    const plugins = [
        [
            'module-resolver',
            {
                alias: {
                    components: './components',
                    styles: './styles',
                    utils: './utils',
                    hooks: './hooks',
                    models: './models',
                    store: './store',
                },
                root: '.',
            },
        ],
    ];

    return {
        presets: ['next/babel'],
        plugins,
    };
};
