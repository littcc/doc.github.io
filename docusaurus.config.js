/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'Y-TARO-DOC',
    tagline: '基于TARO的一些基础库',
    url: 'https://your-docusaurus-test-site.com',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'littcc', // Usually your GitHub org/user name.
    projectName: 'y-taro-doc', // Usually your repo name.
    themeConfig: {
        navbar: {
            title: 'Y-TARO-DOC',
            logo: {
                alt: 'Y-TARO-DOC Logo',
                src: 'img/logo.svg'
            },
            items: [
                // {
                //     to: 'docs/about/thank-you',
                //     activeBasePath: 'docs/about',
                //     label: '关于',
                //     position: 'right'
                // },
                {
                    label: 'Y-TARO-UI',
                    activeBasePath: 'docs/ui',
                    to: 'docs/ui/introduction',
                    position: 'right'
                },
                {
                    label: 'TARO-RAY',
                    activeBasePath: 'docs/request',
                    to: 'docs/request/introduction',
                    position: 'right'
                },
                {
                    label: 'Y-TARO-TEMPLATE',
                    activeBasePath: 'docs/template',
                    to: 'docs/template/getting-started',
                    position: 'right'
                },
                // {
                //     label: 'API',
                //     activeBasePath: 'api',
                //     position: 'left',
                //     items: [
                //         { label: 'REST API', to: 'docs/api/rest' },
                //         { label: 'WebSocket API', to: 'docs/api/websocket' },
                //         { label: 'Supervisor API', to: 'docs/api/supervisor/endpoints' },
                //         {
                //             label: 'Native App Integration',
                //             to: 'docs/api/native-app-integration'
                //         }
                //     ]
                // },
                { to: 'blog', label: 'Blog', position: 'right' },
                {
                    href: 'https://www.npmjs.com/package/y-taro-ui',
                    label: 'NPM',
                    position: 'right'
                }
            ]
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Docs',
                    items: [
                        {
                            label: 'Getting Started',
                            to: 'docs/'
                        }
                    ]
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Taro',
                            href: 'https://taro-docs.jd.com/taro/docs/README'
                        }
                    ]
                },
                {
                    title: 'More',
                    items: [
                        {
                            label: 'Blog',
                            to: 'blog'
                        },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/facebook/docusaurus'
                        }
                    ]
                }
            ],
            copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`
        }
    },
    plugins: [
        // 'css-loader',
        [
            '@docusaurus-plugin/less',
            {
                lessOptions: {
                    javascriptEnabled: true,
                    modules: true
                }
            }
        ]
    ],
    // plugins: ['docusaurus-plugin-less'],
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js')
                    // Please change this to your repo.
                    // editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/'
                },
                blog: {
                    showReadingTime: true
                    // Please change this to your repo.
                    // editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/blog/'
                },
                theme: {
                    customCss: require.resolve('./src/less/motion.less')
                }
            }
        ]
    ]
}
