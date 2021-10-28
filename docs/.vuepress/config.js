module.exports = {
    title:"阿伟",
    decription: "阿伟随便玩玩",
    themeConfig: {
        lastUpdated: '更新时间',
        logo: '/assets/img/logo.png',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'about', link: '/about' },
            {
                text: 'Languages',
                ariaLabel: 'Language Menu',
                items: [
                    { text: 'Chinese', link: '/language/chinese/' },
                    { text: 'Japanese', link: '/language/japanese/' }
                ]
            },
            { text: 'External', link: 'https://google.com' }
        ],
        sidebar: [
            '',
            'about',
        ],
    }
}