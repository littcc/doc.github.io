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
    example: [
        'api/rest',
        'api/websocket',
        {
            type: 'category',
            label: 'Supervisor API',
            items: ['api/supervisor/endpoints', 'api/supervisor/models', 'api/supervisor/examples']
        },
        {
            type: 'category',
            label: 'Native App Integration',
            items: [
                'api/native-app-integration',
                'api/native-app-integration/setup',
                'api/native-app-integration/sending-data',
                'api/native-app-integration/sensors',
                'api/native-app-integration/notifications',
                'api/native-app-integration/webview'
            ]
        }
    ]
}
