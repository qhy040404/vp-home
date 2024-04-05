import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";

export default hopeTheme({
  hostname: "https://qhy04.com",

  author: {
    name: "qhy040404",
    url: "https://qhy04.com",
  },

  iconAssets: "fontawesome-with-brands",

  logo: "favicon.ico",

  repo: "qhy04/vp-home",

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

  // 在这里配置主题提供的插件
  plugins: {
    blog: true,

    components: {
      components: ["Badge", "VPCard"],
    },

    // 此处开启了很多功能用于演示，你应仅保留用到的功能。
    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
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
      tabs: true,
      vPre: true,
    }
  },
});
