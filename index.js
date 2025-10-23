/* global hexo */

'use strict';

const renderer = require('hexo-renderer-marked/lib/renderer');

hexo.config.marked = Object.assign({
  gfm: true,
  pedantic: false,
  breaks: true,
  smartLists: true,
  smartypants: false,
  modifyAnchors: 0,
  autolink: true,
  mangle: true,
  sanitizeUrl: false,
  dompurify: false,
  headerIds: true,
  anchorAlias: false,
  lazyload: false,
  prependRoot: true,
  postAsset: false,
  external_link: {
    enable: false,
    exclude: [],
    nofollow: false
  },
  descriptionLists: true
}, hexo.config.marked);

renderer.disableNunjucks = Boolean(hexo.config.marked.disableNunjucks);

hexo.extend.renderer.register('md', 'html', renderer, true);
hexo.extend.renderer.register('markdown', 'html', renderer, true);
hexo.extend.renderer.register('mkd', 'html', renderer, true);
hexo.extend.renderer.register('mkdn', 'html', renderer, true);
hexo.extend.renderer.register('mdwn', 'html', renderer, true);
hexo.extend.renderer.register('mdtxt', 'html', renderer, true);
hexo.extend.renderer.register('mdtext', 'html', renderer, true);




const config = require('hexo-xmath/lib/config')(hexo);
const {filter_md, filter_math,  render} = require('hexo-xmath/lib/process')(hexo);

hexo.extend.filter.register('before_post_render', data => {filter_md(config,data)}, 5);
hexo.extend.filter.register('after_post_render', async(data) => {await filter_math(config,data)}, 5);
hexo.extend.filter.register('after_render:html', (html, { page }) => {return render(config,html,page)});






