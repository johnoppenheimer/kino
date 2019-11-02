module.exports = api => {
    api.cache(true);

    const plugins = [
        [
            'module-resolver',
            {
                alias: {
                    components: './components',
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
