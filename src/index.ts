import plugin from 'tailwindcss/plugin'

export default plugin(({ addUtilities, addBase }) => {
    addUtilities({
        '.no-scrollbar': {
            '-ms-overflow-style': 'none',
            'scrollbar-width': 'none',
            '&::-webkit-scrollbar': {
                display: 'none',
            },
        },
    })

    addBase({
        'html.route-hide-scrollbar, body.route-hide-scrollbar': {
            '-ms-overflow-style': 'none',
            'scrollbar-width': 'none',
            '&::-webkit-scrollbar': {
                width: '0',
                height: '0',
                display: 'none',
            },
        },
    })

    addUtilities({
        '.usage-code-scrollbar-none *': {
            '-ms-overflow-style': 'none',
            'scrollbar-width': 'none',
        },
        '.usage-code-scrollbar-none ::-webkit-scrollbar': {
            display: 'none',
        },
    })
})
