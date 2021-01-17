module.exports = {
    title: "kindeditor-plugin",
    description: "Vue 驱动的静态网站生成器",
    markdown: {
        lineNumbers: true
    },
    plugins: [
        require('vue-kindeditor')
    ],
    themeConfig: {
        nav: [
            {text: '指南', link: '/guide/'},
            {text: '演示', link: '/example/'},
            {text: 'Github', link: 'https://github.com/ff755/vue-kindeditor', target: '_blank'},
        ],

        sidebar: {
            '/guide/': [
                '',
                'basic',
                'advanced',
                'option',
                'faq'
            ],
            '/example/': [
                ''
            ],
            // fallback
            '/': [
                ''
            ],

        }
    },
    '/example/': 'auto'
}
