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
