import { defineConfig } from 'vitepress'

const nav = [
  { text: '主页', link: '/' },
  { text: '面试专栏', link: '/interview/base/html' }
]

const sidebar = {
  '/interview/': [
    {
      text: '基础',
      collapsed: false,
      items: [
        {
          text: 'HTML',
          link: '/interview/base/html'
        },
        {
          text: 'CSS',
          link: '/interview/base/css'
        },
        {
          text: 'JavaScript',
          link: '/interview/base/javaScript'
        },
        {
          text: 'TypeScript',
          link: '/interview/advanced/vue'
        }
      ]
    },
    {
      text: '框架',
      collapsed: false,
      items: [
        {
          text: 'Vue',
          link: '/interview/advanced/vue'
        },
        {
          text: 'React',
          link: '/interview/advanced/react'
        },
        {
          text: 'Webpack',
          link: '/interview/advanced/react'
        }
      ]
    },
    {
      text: '实战进阶',
      collapsed: false,
      items: [

        {
          text: '前端工程化',
          link: '/interview/advanced/vue'
        },
        {
          text: '性能优化',
          link: '/interview/advanced/vue'
        },
      ]
    },
    {
      text: '通用技能',
      collapsed: false,
      items: [
        {
          text: '计算机基础',
          link: '/interview/advanced/vue'
        },
        {
          text: '网络安全',
          link: '/interview/advanced/vue'
        },
        {
          text: 'git',
          link: '/interview/advanced/vue'
        }
      ]
    },
  ],
  '/base/': [
    {
      text: 'Basic',
      items: [
        {
          text: 'Hello World',
          link: '/base/#hello-world'
        },
        {
          text: 'Handling User Input',
          link: '/examples/#handling-input'
        },
        {
          text: 'Attribute Bindings',
          link: '/examples/#attribute-bindings'
        },
        {
          text: 'Conditionals and Loops',
          link: '/examples/#conditionals-and-loops'
        },
        {
          text: 'Form Bindings',
          link: '/examples/#form-bindings'
        },
        {
          text: 'Simple Component',
          link: '/examples/#simple-component'
        }
      ]
    },
  ],
}


// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "大前端 - 前端高级进阶",
  titleTemplate: ':title',
  description: "A VitePress Site",
  lastUpdated: true,
  srcDir: 'src',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav,

    sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/lin-shaojie' },
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>'
        },
        link: '...'
      }
    ],

    outlineTitle: '本页目录'
  }
})
