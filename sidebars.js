module.exports = {
    about: ['about/thank-you'],
    docs: [
        {
            type: 'category',
            label: '关于 y-taro-ui',
            items: ['getting-started', 'create-a-page', 'create-a-document']
        },
        {
            type: 'category',
            label: '关于2',
            items: ['create-a-blog-post', 'markdown-features', 'thank-you']
        }
    ],
    ui: [
        'ui/introduction',
        'ui/getting-started',
        {
            type: 'category',
            label: '数据录入',
            collapsed: false,
            items: ['ui/form/doc']
        }
    ],
    template: ['template/getting-started'],
}
