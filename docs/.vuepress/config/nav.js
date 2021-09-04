module.exports = [
  { text: '首页', link: '/' },
  {
    text: '小白营',
    link: '/camp/' //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
  },
  {
    text: '保险',
    link: '/insure/'
  },
  {
    text: '基金',
    link: '/fund/',
    items: [
      { text: '入门', link: '/pages/23ed85/' }, // 这些link是在相应md文件定义的永久链接。另外，注意结尾是有斜杠的
      { text: '初级', link: '/pages/1827a9/' },
      { text: '进阶', link: '/pages/8f5a99/' },
      { text: '高级', link: '/pages/82ce40/' }
    ]
  },
  {
    text: '实用网站',
    items: [
      { text: '晨星网', link: 'http://www.morningstar.cn/' },
      { text: '天天基金网', link: 'https://fund.eastmoney.com/' },
      { text: '中证指数有限公司', link: 'http://www.csindex.com.cn/' },
      { text: '国证指数网', link: 'http://www.cnindex.com.cn/' },
      { text: '理杏仁', link: 'http://www.lixinger.com/' },
      { text: '韭圈儿', link: 'http://www.funddb.cn/site/index' },
      { text: 'shibor', link: 'http://www.shibor.org/' },
      { text: '中国债券信息网', link: 'http://yield.chinabond.com.cn/' },
      { text: '集思录', link: 'https://www.jisilu.cn/' }
    ]
  },
  {
    text: '索引',
    link: '/archives/',
    items: [
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
      { text: '归档', link: '/archives/' }
    ]
  }
]
