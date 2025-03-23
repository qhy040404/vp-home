import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";

export default hopeTheme({
  hostname: "https://qhy04.com",

  author: {
    name: "qhy040404",
    url: "https://qhy04.com",
  },

  logo: "favicon.ico",

  repo: "qhy040404/vp-home",

  docsDir: "src",

  // 导航栏
  navbar,

  // 页脚
  footer: "<a href='https://beian.miit.gov.cn/'>蜀ICP备2022025022号</a>",
  displayFooter: true,

  // 博客相关
  blog: {
    description: "一个2b",
    intro: "/intro.html",
    medias: {
      Email: "mailto:qhy040404@163.com",
      GitHub: "https://github.com/qhy040404",
    },
  },

  markdown: {
    align: true,
    attrs: true,
    component: true,
    demo: true,
    include: true,
    mark: true,
    stylize: [
      {
        matcher: "Recommended",
        replacer: ({tag}) => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: {type: "tip"},
              content: "Recommended",
            };
        },
      },
    ],
    sub: true,
    sup: true,
    vPre: true,
  },

  // 在这里配置主题提供的插件
  plugins: {
    blog: true,

    components: {
      components: ["Badge", "VPCard"],
    },

    icon: {
      assets: "fontawesome-with-brands"
    }
  },
});
