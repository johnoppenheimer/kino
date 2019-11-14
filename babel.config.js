module.exports = api => {
    api.cache(true);

    const plugins = [
        [
            'module-resolver',
            {
                alias: {
                    components: './components',
                    styles: './styles',
                    lib: './lib',
                    utils: './utils',
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
