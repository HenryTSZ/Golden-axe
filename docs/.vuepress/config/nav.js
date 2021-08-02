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
      { text: '入门', link: '/pages/23ed85/' } // 这些link是在相应md文件定义的永久链接。另外，注意结尾是有斜杠的
    ]
  }
]
