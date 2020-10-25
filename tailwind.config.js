module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                plex: {
                    '600': '#e19b0e',
                    '700': '#cd8e0f',
                },
            },
        },
        inset: {
            '2': '0.5rem',
        },
    },
    variants: {},
    plugins: [],
};
