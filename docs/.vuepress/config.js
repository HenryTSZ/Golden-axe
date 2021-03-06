const nav = require('./config/nav.js')

module.exports = {
  title: 'Golden-axe',
  description: '水星财富学堂', // 描述,以 <meta> 标签渲染到页面html中
  head: [
    ['link', { rel: 'icon', href: '/img/favicon.png' }], //favicons，资源放在public文件夹
    [
      'meta',
      {
        name: 'keywords',
        content: '水星财富学堂'
      }
    ],
    ['meta', { name: 'theme-color', content: '#11a8cd' }] // 移动浏览器主题颜色
  ],
  markdown: {
    lineNumbers: true // 代码行号
  },

  theme: 'vdoing', // 使用依赖包主题

  themeConfig: {
    // 主题配置
    nav,
    sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
    logo: '/img/favicon.png', // 导航栏logo
    repo: 'HenryTSZ/Golden-axe', // 导航栏右侧生成Github链接
    searchMaxSuggestions: 10, // 搜索结果显示最大数
    lastUpdated: '上次更新', // 更新的时间，及前缀文字   string | boolean (取值为git提交时间)
    docsDir: 'docs', // 编辑的文件夹
    editLinks: true, // 启用编辑
    editLinkText: '编辑',

    //*** 以下配置是Vdoing主题改动和新增的配置 ***//

    // category: false, // 是否打开分类功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含分类字段 2.页面中显示与分类相关的信息和模块 3.自动生成分类页面（在@pages文件夹）。如关闭，则反之。
    // tag: false, // 是否打开标签功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含标签字段 2.页面中显示与标签相关的信息和模块 3.自动生成标签页面（在@pages文件夹）。如关闭，则反之。
    // archive: false, // 是否打开归档功能，默认true。 如打开，会做的事情有：1.自动生成归档页面（在@pages文件夹）。如关闭，则反之。
    // categoryText: '随笔', // 碎片化文章（_posts文件夹的文章）预设生成的分类值，默认'随笔'

    bodyBgImg: '/img/bg.webp', // body背景大图，默认无。 单张图片 String || 多张图片 Array, 多张图片时每隔15秒换一张。
    bodyBgImgOpacity: 0.9, // body背景图透明度，选值 0 ~ 1.0, 默认0.5

    // titleBadge: false, // 文章标题前的图标是否显示，默认true
    // titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
    //   '图标地址1',
    //   '图标地址2'
    // ],
    // contentBgStyle: 6, // 文章内容块的背景风格，默认无. 1 => 方格 | 2 => 横线 | 3 => 竖线 | 4 => 左斜线 | 5 => 右斜线 | 6 => 点状

    // updateBar: { // 最近更新栏
    //   showToArticle: true, // 显示到文章页底部，默认true
    //   moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
    // },
    // sidebarOpen: false, // 初始状态是否打开侧边栏，默认true
    // pageButton: false, // 是否显示快捷翻页按钮，默认true

    sidebar: 'structuring', // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页

    author: {
      // 文章默认的作者信息，可在md文件中单独配置此信息 String | {name: String, link: String}
      name: 'Henry', // 必需
      link: 'https://github.com/HenryTSZ' // 可选的
    },
    blogger: {
      // 博主信息，显示在首页侧边栏
      avatar: '/img/avatar.jpg',
      name: 'Henry',
      slogan: '一起理财, 一起暴富'
    },
    social: {
      // 社交图标，显示于博主信息栏和页脚栏
      // iconfontCssFile: '//at.alicdn.com/t/font_1678482_u4nrnp8xp6g.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自由添加
      icons: [
        {
          iconClass: 'icon-youjian',
          title: '发邮件',
          link: 'mailto:lh69jh@gmail.com'
        },
        {
          iconClass: 'icon-github',
          title: 'GitHub',
          link: 'https://github.com/HenryTSZ'
        },
        {
          iconClass: 'icon-erji',
          title: '听音乐',
          link: 'https://music.163.com/#/my/m/music/playlist?id=392991609'
        }
      ]
    },
    footer: {
      // 页脚信息
      createYear: 2017, // 博客创建年份
      copyrightInfo:
        'HenryTSZ | <a href="https://github.com/HenryTSZ/vuepress-blog/blob/main/LICENSE" target="_blank">MIT License</a>' // 博客版权信息，支持a标签
    }
  },
  plugins: [
    'vuepress-plugin-smooth-scroll',
    [
      'thirdparty-search',
      {
        // 可以添加第三方搜索链接的搜索框（原官方搜索框的参数仍可用）
        thirdparty: [
          // 可选，默认 []
          {
            title: '在 天天基金网 中搜索',
            frontUrl: 'http://fund.eastmoney.com/', // 搜索链接的前面部分
            behindUrl: '.html' // 搜索链接的后面部分，可选，默认 ''
          },
          {
            title: '在 中证指数有限公司 中搜索',
            frontUrl: 'https://www.csindex.com.cn/#/search?searchText='
          },
          {
            title: '在 国证指数网 中搜索',
            frontUrl:
              'http://www.cnindex.com.cn/module/index-series.html?act_menu=1&index_type=0&search='
          },
          {
            title: '在 韭圈儿 中搜索',
            frontUrl: 'https://www.funddb.cn/search/index/'
          }
        ]
      }
    ],

    [
      'one-click-copy',
      {
        // 代码块复制按钮
        copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
        copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
        duration: 1000, // prompt message display time.
        showInMobile: false // whether to display on the mobile side, default: false.
      }
    ],
    [
      'vuepress-plugin-zooming', // 放大图片
      {
        selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
        options: {
          bgColor: 'rgba(0,0,0,0.6)'
        }
      }
    ],
    [
      'vuepress-plugin-comment', // 评论
      {
        choosen: 'gitalk',
        options: {
          clientID: '702d7ec3a20c26ce03a7',
          clientSecret: '10e24879499d5dd4734ea6f3bdace17bd8bf2194',
          repo: 'Golden-axe', // GitHub 仓库
          owner: 'HenryTSZ', // GitHub仓库所有者
          admin: ['HenryTSZ'], // 对仓库有写权限的人
          // distractionFreeMode: true,
          pagerDirection: 'last', // 'first'正序 | 'last'倒序
          id: '<%- (frontmatter.permalink || frontmatter.to.path).slice(-16) %>', //  页面的唯一标识,长度不能超过50
          title: '「评论」<%- frontmatter.title %>', // GitHub issue 的标题
          labels: ['Gitalk', 'Comment'], // GitHub issue 的标签
          body:
            '页面：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>' // GitHub issue 的内容
        }
      }
    ],
    '@vuepress/last-updated' // "上次更新"
  ]
  // configureWebpack: {
  //   //webpack别名 如![Image from alias](~@alias/image.png)
  //   resolve: {
  //     alias: {
  //       '@alias': 'path/to/some/dir'
  //     }
  //   }
  // }
}
