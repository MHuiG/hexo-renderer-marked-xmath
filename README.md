# hexo-xm

[![](https://img.shields.io/npm/v/hexo-xm.svg?style=flat-square)](https://www.npmjs.com/package/hexo-xm)

Hexo 懒人包 一键支持 Markdown 和 Mathjax.

> 懒人包不应当用很长的包名[…](https://www.npmjs.com/package/hexo-renderer-marked-xmath)


## 准备

安装之前需要卸载全部的 Markdown 渲染器和数学公式渲染器。包括 hexo-renderer-marked 。

```shell
npm uninstall hexo-xmath
npm uninstall hexo-renderer-marked
npm uninstall hexo-renderer-kramed
npm uninstall hexo-renderer-markdown-it
npm uninstall hexo-renderer-markdown-it-plus
npm uninstall hexo-renderer-multi-markdown-it
npm uninstall hexo-renderer-pandoc
npm uninstall hexo-renderer-unified
npm uninstall hexo-renderer-marked-xmath
npm uninstall hexo-filter-mathjax

```


## 安装

```shell
npm install hexo-xm --save

```


## 配置选项

因为是懒人包，因此不需要过多的配置，开箱即用。

详细配置见：

[hexo-renderer-marked](https://github.com/hexojs/hexo-renderer-marked) 

[hexo-xmath](https://github.com/MHuiG/hexo-xmath/)

<details>
<summary>题外话</summary>

## 题外话

如果笔者哪天不在了，必要时可以尝试使用暴力解决问题。

```shell
npm uninstall hexo-xm
npm cache clean --force 
npm install hexo-renderer-marked-xmath --save --force

```

</details>

## 许可证

根据 [GPL-3.0](https://github.com/MHuiG/hexo-xmath/blob/main/LICENSE) 发布。
