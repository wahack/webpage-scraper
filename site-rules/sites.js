/* eslint-disable */
module.exports = [
  {
    "name": "cnbeta.com",
    "title": "[[{$('header.title h1').text()}]]",
    "about": "[[{$('.article-summary').text()}]]",
    "article": "[['div.article-content']]",
    "url": "*.cnbeta.com/articles/*/*.htm"
  },
  {
    "name": "qdaily.com",
    "title": "[['h2.title']]",
    "about": "[['p.excerpt']]",
    "article": "[['div.article-detail-bd']]",
    "url": "www.qdaily.com/articles/"
  },
  {
    "name": "36kr.com",
    "title": "[['title']]",
    "about": "[['section.summary']]",
    "article": "[['section.textblock']]",
    "url": "36kr.com/p/"
  },
  {
    "name": "pingwest.com",
    "title": "[['h1.title']]",
    "article": "#sc-container",
    "url": "www.pingwest.com/"
  },
  {
    "name": "jiemian.com",
    "title": "[['title']]",
    "article": "[['div.article-main']]",
    "url": "www.jiemian.com/article/"
  },
  {
    "name": "news.ifanr.com",
    "title": "[['h1.c-single-normal__title']]",
    "article": "[['article']]",
    "url": "www.ifanr.com/news/"
  },
  {
    "name": "minapp.ifanr.com",
    "title": "[['h1.c-single-normal__title']]",
    "article": "[['article']]",
    "url": "www.ifanr.com/minapp/"
  },
  {
    "name": "app.ifanr.com",
    "title": "[['title']]",
    "about": "[[{$('meta[name=description]').attr('content')}]]",
    "article": "[['article']]",
    "url": "www.ifanr.com/app/"
  },
  {
    "name": "dasheng.ifanr.com",
    "title": "[['p.c-single-dasheng__content']]",
    "article": "[['article']]",
    "url": "www.ifanr.com/dasheng/"
  },
  {
    "name": "data.ifanr.com",
    "title": "[['p.c-single-data__desc']]",
    "article": "[['article']]",
    "url": "www.ifanr.com/data/"
  },
  {
    "name": "weizhizao.ifanr.com",
    "title": "[['h1.c-single-normal__title']]",
    "article": "[['article']]",
    "url": "www.ifanr.com/weizhizao/"
  },
  {
    "name": "ifanr.com",
    "title": "[['title']]",
    "article": "[['article']]",
    "url": "www.ifanr.com/"
  },
  {
    "name": "minapp.com",
    "title": "[['h1.article-header-title']]",
    "article": "[['div.origin-content']]",
    "url": "minapp.com/article/"
  },
  {
    "name": "sspai.com",
    "title": "[['h1.title']]",
    "about": "[[{$('meta[name=description]').attr('content')}]]",
    "article": "[[{$('.content').html()}]]",
    "url": "sspai.com/post/"
  },
  {
    "name": "dgtle.com",
    "title": "[[{$('meta[name=keywords]').attr('content')}]]",
    "about": "[[{$('meta[name=description]').attr('content')}]]",
    "article": "#view_content",
    "url": "www.dgtle.com/article-*.html"
  },
  {
    "name": "zhuanlan.zhihu.com",
    "title": "[['h1.PostIndex-title']]",
    "article": "[['div.PostIndex-content']]",
    "url": "zhuanlan.zhihu.com/p/"
  },
  {
    "name": "dudu.zhihu.com",
    "title": "[['h1.headline-title']]",
    "article": "[['div.content']]",
    "url": "dudu.zhihu.com/story/"
  },
  {
    "name": "daily.zhihu.com",
    "title": "[['h1.headline-title']]",
    "article": "[[{$('.content').html()}]]",
    "url": "daily.zhihu.com/story/"
  },
  {
    "name": "question.zhihu.com",
    "title": "[[{$($('.QuestionHeader-main').find('h1')[0]).text()}]]",
    "article": "[[{$('.RichContent-inner')}]]",
    "url": "www.zhihu.com/question/**/*"
  },
  {
    "name": "geekpark.net",
    "title": "[['h1.topic-title']]",
    "about": "[[{$('meta[name=description]').attr('content')}]]",
    "article": "[['article.article-body']]",
    "url": "www.geekpark.net/topics/"
  },
  {
    "name": "jianshu.com",
    "title": "[['h1.title']]",
    "article": "[['div.show-content']]",
    "image": "[[{$('.image-package img').eq(0).attr('src')}]]",    
    "url": "www.jianshu.com/p/",
    "publisher": {
      'name': "简书",
      'avatar': "http://www.jianshu.com/favicon.ico",
      'source': 'jianshu',
      'authorName': "[['.author .name']]",
      'authorAvatar': "[[{$('.author .avatar img').attr('src')||''}]]",
      'authorBio': "[['.follow-detail .signature']]"
    }
  },
  {
    "name": "waerfa.com",
    "title": "[['h1.Article__title']]",
    "article": "[['div.Article__content']]",
    "url": "www.waerfa.com/"
  },
  {
    "name": "article.guokr.com",
    "title": "#articleTitle",
    "about": "[[{$('meta[name=description]').attr('content')}]]",
    "article": "#articleContent",
    "url": "www.guokr.com/article/"
  },
  {
    "name": "post.guokr.com",
    "title": "#articleTitle",
    "article": "#articleContent",
    "url": "www.guokr.com/post/"
  },
  {
    "name": "question.guokr.com",
    "title": "#articleTitle",
    "article": "[[{$('.gbbcode-content')}]]",
    "url": "www.guokr.com/question/*"
  },
  {
    "name": "zuimeia.com",
    "title": "[['span.sub-title']]",
    "about": "[['div.short-des']]",
    "article": "#article_content",
    "url": "zuimeia.com/app/"
  },
  {
    "name": "huxiu.com",
    "title": "[['h1.t-h1']]",
    "article": "[['div.article-content-wrap']]",
    "url": "www.huxiu.com/article/"
  },
  {
    "name": "douban.com",
    "title": "[['title']]",
    "article": "#link-report",
    "url": "www.douban.com/*"
  },
  {
    "name": "qingmang.me",
    "title": "[['h1']]",
    "article": "[['article']]",
    "url": "qingmang.me/magazines/*/**/*"
  },
  {
    "name": "leiphone.com",
    "title": "[['h1.headTit']]",
    "article": "[['div.lph-article-comView']]",
    "url": "www.leiphone.com/news/*/*.html"
  },
  {
    "name": "tmtpost.com",
    "title": "[['h1']]",
    "about": "[['p.post-abstract']]",
    "article": "[['article']]",
    "url": "www.tmtpost.com/*.html"
  },
  {
    "name": "songshuhui.net",
    "title": "[['span.contenttitle']]",
    "article": "[['div.entry']]",
    "url": "songshuhui.net/archives/"
  },
  {
    "name": "infzm.com",
    "title": "[['h1.articleHeadline']]",
    "about": "[[{$('meta[name=description]').attr('content')}]]",
    "article": "#articleContent",
    "url": "www.infzm.com/content/"
  },
  {
    "name": "nationalgeographic.com.cn",
    "title": "[['div.title']]",
    "article": "#detailMain_box_img",
    "url": "www.nationalgeographic.com.cn/**/*/*.html"
  },
  {
    "name": "appinn.com",
    "title": "[['h2.entry-title']]",
    "article": "[['div.entry-content']]",
    "url": "www.appinn.com/*/"
  },
  {
    "name": "apprcn.com",
    "title": "[['h2.entry-title']]",
    "article": "[['div.entry-content']]",
    "url": "www.apprcn.com/*.html"
  },
  {
    "name": "playpcesor.com",
    "title": "[['h3.entry-title']]",
    "article": "[['div.entry-content']]",
    "url": "www.playpcesor.com/*"
  },
  {
    "name": "steachs.com",
    "title": "[['h1']]",
    "article": "[['div.post-contents']]",
    "url": "steachs.com/archives/"
  },
  {
    "name": "azofreeware.com",
    "title": "[['h2.entry-title']]",
    "article": "[['div.entry-content']]",
    "url": "www.azofreeware.com/*"
  },
  {
    "name": "weibo.com",
    "title": "[[{$('.main_editor ').find('.title').text()}]]",
    "article": "[['div.WB_editor_iframe']]",
    "url": "weibo.com/ttarticle/p/",
    "image": "[[{$('.main_toppic img').attr('src')}]]",
    "publisher": {
      'name': "微博头条文章",
      'avatar': "http://weibo.com/favicon.ico",
      'authorName': "[['.authorinfo .W_autocut']]",
      'authorAvatar': "[[{$('.authorinfo .W_autocut img').attr('src')||''}]]"
    }
  },
  {
    "name": "leikeji.com",
    "title": "[['h1.article-title']]",
    "article": "[['div.article-body']]",
    "url": "www.leikeji.com/article/"
  },
  {
    "name": "xueqiu.com",
    "title": "[['h1.status-title']]",
    "article": "[[{$('.status-content').find('.detail').html()}]]",
    "url": "xueqiu.com/*/*"
  },
  {
    "name": "chuansong.me",
    "title": "#activity-name",
    "article": "#js_content",
    "url": "chuansong.me/n/"
  },
  {
    "name": "stream.107cine.cm",
    "title": "[['h2']]",
    "article": "[['div.flow_content']]",
    "url": "107cine.com/stream/*"
  },
  {
    "name": "zhuanti.107cine.cm",
    "title": "[['h1']]",
    "article": "[['div.zhuanti']]",
    "url": "107cine.com/zhuanti/*"
  },
  {
    "name": "jiemi.baike.com",
    "title": "[['h1.title']]",
    "article": "[['div.jiemi-content']]",
    "url": "jiemi.baike.com/pa/detail?id=*"
  },
  {
    "name": "wikipedia.org",
    "title": "[['title']]",
    "article": "[['div.mw-parser-output']]",
    "url": "*.wikipedia.org/wiki/*"
  },
  {
    "name": "blog.jobbole.com",
    "title": "[['.entry-header h1']]",
    "article": "[[{$('.entry').exclude('.crayon-nums,.crayon-toolbar').html()}]]",
    "url": "blog.jobbole.com/*/"
  },
  {
    "name": "top.jobbole.com",
    "title": "[['h1.p-tit-single']]",
    "article": "[[{$('.p-entry').exclude('.crayon-nums').html()}]]",
    "url": "top.jobbole.com/*/"
  },
  {
    "name": "cnodejs.org",
    "title": "[['title']]",
    "article": "[['div.topic_content']]",
    "url": "cnodejs.org/topic/"
  },
  {
    "name": "w3cplus.com",
    "title": "#page-title",
    "article": "[['div.body-content']]",
    "url": "www.w3cplus.com/**/*.html"
  },
  {
    "name": "w3cways.com",
    "title": "[[{$('.container').find('h2 span').text()}]]",
    "article": "[['article.article-content']]",
    "url": "www.w3cways.com/*.html"
  },
  {
    "name": "div.io",
    "title": "[['h1']]",
    "article": "[['div.topic-firstfloor-detail']]",
    "url": "div.io/topic/"
  },
  {
    "name": "news.aotu.io",
    "title": "[['h1']]",
    "article": "[[{$('.news-body').exclude('.gutter').html()}]]",
    "url": "news.aotu.io/a/*"
  },
  {
    "name": "aotu.io",
    "title": "[['h1.post-tit']]",
    "article": "[[{$('.post-content').exclude('.gutter').html()}]]",
    "url": "aotu.io/notes/**/*/*/"
  },
  {
    "name": "ruby-china.org",
    "title": "[['h1.media-heading']]",
    "article": "[[{$($('.panel-body')[0]).html()}]]",
    "url": "ruby-china.org/topics/"
  },
  {
    "name": "news.infoq.com",
    "title": "[['#content h1']]",
    "image": "[[{$('.text_info img').eq(0).attr('src')}]]",
    "article": function ($) {
      let $info = $('.text_info')
      $info.find('.clear').nextAll().remove()
      return $info.html()
    },
    "url": "www.infoq.com/cn/**/*"
  },
  {
    "name": "segmentfault.com",
    "title": "[['title']]",
    "article": "[['#articleTitle']]",
    "url": "segmentfault.com/a/",
    "image": "[[{$('.article__content img').eq(0).attr('src')}]]"
  },
  {
    "name": "post.juejin.im",
    "title": "[['h1.post-title']]",
    "article": "[['div.post-content-container']]",
    "url": "juejin.im/post/"
  },
  {
    "name": "entry.juejin.im",
    "title": "[[{$('.entry-public-view h1').text()}]]",
    "about": "[['div.header']]",
    "article": "[['div.entry-content']]",
    "url": "juejin.im/entry/"
  },
  {
    "name": "qianduan.net",
    "title": "[['h1.post-title']]",
    "article": "[['section.post-content']]",
    "url": "www.qianduan.net/*/"
  },
  {
    "name": "importnew.com",
    "title": "[['div.entry-header']]",
    "article": "[['div.entry']]",
    "url": "www.importnew.com/*.html"
  },
  {
    "name": "solidot.org",
    "title": "[['div.bg_htit']]",
    "article": "[['div.p_mainnew']]",
    "url": "www.solidot.org/story?sid=*"
  },
  {
    "name": "ifeve.com",
    "title": "[['h3.title']]",
    "article": "[['div.post_content']]",
    "url": "ifeve.com/*/"
  },
  {
    "name": "code.oschina.net",
    "title": "[[{$('.QTitle').find('h1').text()}]]",
    "article": "[['div.Body']]",
    "url": "www.oschina.net/code/snippet_*_*"
  },
  {
    "name": "translate.oschina.net",
    "title": "[['title']]",
    "article": "[['div.content']]",
    "url": "www.oschina.net/translate/"
  },
  {
    "name": "project.oschina.net",
    "title": "[[{$('header.box').find('a').attr('title')}]]",
    "article": "[['div.editor-viewer']]",
    "url": "www.oschina.net/p/"
  },
  {
    "name": "my.oschina.net",
    "title": "[['title']]",
    "about": "[['div.blog-abstract']]",
    "article": "[['div.BlogContent']]",
    "url": "my.oschina.net/**/*/blog/*"
  },
  {
    "name": "oschina.net",
    "title": "[['h1']]",
    "article": "[['div.editor-viewer']]",
    "url": "www.oschina.net/news/**/*"
  },
  {
    "name": "question.oschina.net",
    "title": "[['span.question-title-link']]",
    "article": "[['header.detail']]",
    "url": "www.oschina.net/question/*_*"
  },
  {
    "name": "geek.csdn.net",
    "title": "[['title']]",
    "article": "[['div.news_description']]",
    "url": "geek.csdn.net/news/detail/"
  },
  {
    "name": "blog.csdn.net",
    "title": "[['span.link_title']]",
    "article": "#article_content",
    "url": "blog.csdn.net/*/article/details/*"
  },
  {
    "name": "lib.csdn.net",
    "title": "[['h1']]",
    "article": "[['div.divtexts']]",
    "url": "lib.csdn.net/article/*/*"
  },
  {
    "name": "hacpai.com",
    "title": "[['h1.article-title']]",
    "article": "[['div.article-content']]",
    "url": "hacpai.com/article/"
  },
  {
    "name": "freebuf.com",
    "title": "[[{$('.title h2').text()}]]",
    "article": "#contenttxt",
    "url": "www.freebuf.com/**/*/*.html"
  },
  {
    "name": "ruanyifeng.com",
    "title": "#page-title",
    "article": "#main-content",
    "url": "www.ruanyifeng.com/blog/**/*/*.html"
  },
  {
    "name": "v2ex.com",
    "title": "[[{$('.header h1').text()}]]",
    "article": "[['div.markdown_body']]",
    "url": "www.v2ex.com/t/"
  },
  {
    "name": "news.cnblogs.com",
    "title": "#news_title",
    "article": "#news_body",
    "url": "news.cnblogs.com/n/"
  },
  {
    "name": "cnblogs.com",
    "title": "#cb_post_title_url",
    "article": "#cnblogs_post_body",
    "url": "www.cnblogs.com/**/*/*.html"
  },
  {
    "name": "tuicool.com",
    "title": "[['h1']]",
    "article": "[['div.article_body']]",
    "url": "www.tuicool.com/articles/"
  },
  {
    "name": "w3ctech.com",
    "title": "[[{$('.topic_info ').find('h1').text()}]]",
    "article": "[['div.callout']]",
    "url": "www.w3ctech.com/topic/"
  },
  {
    "name": "html-js.com",
    "title": "[[{$('.wrapper ').find('div[rel=bookmark]').text()}]]",
    "article": "[['div.entry-content']]",
    "url": "www.html-js.com/article/"
  },
  {
    "name": "open-open.com",
    "title": "#articleTitle",
    "article": "[['article']]",
    "url": "www.open-open.com/lib/*/*.html"
  },
  {
    "name": "colobu.com",
    "title": "[['h1.article-title']]",
    "article": "[['div.article-entry']]",
    "url": "colobu.com/**/*/"
  },
  {
    "name": "liqi.io",
    "title": "[['h1.entry-title']]",
    "article": "[['div.entry-content']]",
    "url": "liqi.io/*/"
  },
  {
    "name": "daqianduan.com",
    "title": "[['h1.article-title']]",
    "article": "[['article.article-content']]",
    "url": "www.daqianduan.com/*.html"
  },
  {
    "name": "caibaojian.com",
    "title": "[['h1.entry-title']]",
    "article": "[['div.entry-content']]",
    "url": "caibaojian.com/*.html"
  },
  {
    "name": "hao.caibaojian.com",
    "title": "[['h1.entry-title']]",
    "article": "[['div.entry-content']]",
    "url": "hao.caibaojian.com/*.html"
  },
  {
    "name": "xfenglin.com",
    "title": "[[{$('.t-head').find('h2').text()}]]",
    "article": "[['div.article__content']]",
    "url": "xfenglin.com/a/"
  },
  {
    "name": "ibm.com",
    "title": "#ibm-pagetitle-h1",
    "article": "[['div.ibm-col-6-4']]",
    "url": "www.ibm.com/developerworks/cn/**/*/*.html"
  },
  {
    "name": "guanggoo.com",
    "title": "[['h3.title']]",
    "article": "[[{$($('.ui-content')[0]).html()}]]",
    "url": "www.guanggoo.com/t/"
  },
  {
    "name": "ctolib.com",
    "title": "[['h3.m-t-xs']]",
    "article": "[['article']]",
    "url": "www.ctolib.com/*.html"
  },
  {
    "name": "zuojj.com",
    "title": "[['h1.article-title']]",
    "article": "[['article.article-content']]",
    "url": "www.zuojj.com/archives/"
  },
  {
    "name": "wkee.net",
    "title": "[['h1.title']]",
    "article": "#content0",
    "url": "wkee.net/post/"
  },
  {
    "name": "xituqu.com",
    "title": "[['h1.title']]",
    "article": "[['div.post-content']]",
    "url": "xituqu.com/*.html"
  },
  {
    "name": "linuxsight.com",
    "title": "[['h1.entry-title']]",
    "article": "[['div.single-content']]",
    "url": "www.linuxsight.com/blog/"
  },
  {
    "name": "coyee.com",
    "title": "[['h1']]",
    "article": "#sections",
    "url": "coyee.com/article/"
  },
  {
    "name": "36dsj.com",
    "title": "[['h1.article-title']]",
    "article": "[['article.article-content']]",
    "url": "www.36dsj.com/archives/"
  },
  {
    "name": "cocoachina.com",
    "title": "[['h2']]",
    "article": "#detailbody",
    "url": "www.cocoachina.com/*/*/*.html"
  },
  {
    "name": "dataunion.org",
    "title": "[['h1.mscctitle']]",
    "article": "[['div.content-text']]",
    "url": "dataunion.org/*.html"
  },
  {
    "name": "linux.cn",
    "title": "#article_title",
    "article": "#article_content",
    "url": "linux.cn/article-*.html"
  },
  {
    "name": "techug.com",
    "title": "[['h1.entry-title']]",
    "article": "#content0",
    "url": "www.techug.com/post/"
  },
  {
    "name": "article.ituring.com.cn",
    "title": "[[{$('.article-title').find('h2').text()}]]",
    "article": "[['div.article']]",
    "url": "www.ituring.com.cn/article/"
  },
  {
    "name": "book.ituring.com.cn",
    "title": "[[{$('.online-book-title').find('h3').text()}]]",
    "article": "[['div.article-detail']]",
    "url": "www.ituring.com.cn/book/tupubarticle/"
  },
  {
    "name": "issue.github.com",
    "title": "[[{$('h1.gh-header-title .js-issue-title').text()}]]",
    "article": "[[{$('#discussion_bucket table td.js-comment-body').html()}]]",
    "url": "github.com/*/*/issues/*"
  },
  {
    "name": "readme.github.com",
    "title": "[[{$('title').text()}]]",
    "article": "[['article.markdown-body']]",
    "url": "github.com/**/*/README*.md"
  },
  {
    "name": "msdn.microsoft.com",
    "title": "[['h1.title']]",
    "article": "#content",
    "url": "msdn.microsoft.com/**/*/*.aspx"
  },
  {
    "name": "docs.microsoft.com",
    "title": "[['h1']]",
    "article": "#main",
    "url": "docs.microsoft.com/*/*/*"
  },
  {
    "name": "developer.mozilla.org",
    "title": "[['title']]",
    "article": "#wikiArticle",
    "url": "developer.mozilla.org/*/docs/*/**/*"
  },
  {
    "name": "apps.mozilla.org",
    "title": "[['title']]",
    "article": "#wikiArticle",
    "url": "developer.mozilla.org/*/Apps/*/**/*"
  },
  {
    "name": "article.52im.net",
    "title": "[['h1.ph']]",
    "about": "[['div.js-ptl-atcl-summery']]",
    "article": "#article_content",
    "url": "www.52im.net/article-*.html"
  },
  {
    "name": "thread.52im.net",
    "title": "#thread_subject",
    "article": "[[{$('td.t_f:first').html()}]]",
    "url": "www.52im.net/thread-*.html"
  },
  {
    "name": "edaoe.com",
    "title": "[['h1.article-title']]",
    "article": "[['article.article-content']]",
    "url": "www.edaoe.com/*.html"
  },
  {
    "name": "gallery.edaoe.com",
    "title": "[['h1.article-title']]",
    "article": "[['article.article-content']]",
    "url": "www.edaoe.com/gallery/*.html"
  },
  {
    "name": "chinabyte.cm",
    "title": "[['title']]",
    "article": "[['div.art_txt']]",
    "url": "*.chinabyte.com/**/*/*.shtml"
  },
  {
    "name": "wiki.jikexueyuan.com",
    "title": "[['title']]",
    "article": "[['div.markdown-body']]",
    "url": "wiki.jikexueyuan.com/project/*"
  },
  {
    "name": "voidcn.com",
    "title": "[['h1.title']]",
    "article": "[['div.post-content']]",
    "url": "www.voidcn.com/blog/**/*/*.html"
  },
  {
    "name": "thepaper.cn",
    "title": "[['h1.news_title']]",
    "article": "[['div.news_txt']]",
    "url": "www.thepaper.cn/newsDetail_*"
  },
  {
    "name": "vice.cn",
    "title": "[['h3.article-title']]",
    "about": "[['div.article-summary']]",
    "article": "[['div.article-body']]",
    "url": "www.vice.cn/read/"
  },
  {
    "name": "jandan.net",
    "title": "[[{$('.post h1').text()}]]",
    "article": "[[{$($('.post')[0]).html()}]]",
    "url": "jandan.net/**/*/*.html"
  },
  {
    "name": "post.smzdm.com",
    "title": "[['h1.item-name']]",
    "article": "[['article']]",
    "url": "post.smzdm.com/p/"
  },
  {
    "name": "news.mydrivers.com",
    "title": "#thread_subject",
    "article": "[['div.news_info']]",
    "url": "news.mydrivers.com/*/*/*.htm"
  },
  {
    "name": "ftchinese.com",
    "title": "[['h1.story-headline']]",
    "about": "[['div.story-lead']]",
    "article": "[['div.story-body']]",
    "url": "www.ftchinese.com/story/"
  },
  {
    "name": "young.ifeng.com",
    "title": "[['h1']]",
    "article": "[['div.ya_main_con']]",
    "url": "young.ifeng.com/a/*/*.shtml"
  },
  {
    "name": "news.ifeng.com",
    "title": "#artical_topic",
    "article": "#artical_real",
    "url": "*.ifeng.com/a/*/*.shtml"
  },
  {
    "name": "news.mtime.com",
    "title": "[['h2']]",
    "about": "[['div.newsnote']]",
    "article": "#newsContent",
    "url": "news.mtime.com/**/*/*.html"
  },
  {
    "name": "feng.com",
    "title": "[[{$('.h2').text()==''?$('h1').text():$('.h2').text()}]]",
    "about": "[['p.content_title']]",
    "article": "#article_content",
    "url": "*.feng.com/**/*/*.shtml"
  },
  {
    "name": "caixin.com",
    "title": "[['h1']]",
    "about": "#subhead",
    "article": "#Main_Content_Val",
    "url": "*.caixin.com/*/*.html"
  },
  {
    "name": "ithome.com",
    "title": "[['h1']]",
    "article": "#paragraph",
    "url": "www.ithome.com/html/**/*/*.htm"
  },
  {
    "name": "news.sohu.com",
    "title": "[['h1']]",
    "article": "#contentText",
    "url": "news.sohu.com/*/*.shtml"
  },
  {
    "name": "sohu.com",
    "title": "[['h1']]",
    "article": "[['article.article']]",
    "url": "www.sohu.com/a/*_*"
  },
  {
    "name": "news.sina.com.cn",
    "title": "#artibodyTitle",
    "article": "#artibody",
    "url": "news.sina.com.cn/**/*/*.shtml"
  },
  {
    "name": "tech.sina.com.cn",
    "title": "#main_title",
    "article": "[['div.content']]",
    "url": "tech.sina.com.cn/**/*/*.shtml"
  },
  {
    "name": "finance.sina.com.cn",
    "title": "#artibodyTitle",
    "article": "#artibody",
    "url": "finance.sina.com.cn/**/*/*.shtml"
  },
  {
    "name": "people.com.cn",
    "title": "[['h1']]",
    "article": "#rwb_zw",
    "url": "*.people.com.cn/**/*/*.html"
  },
  {
    "name": "chinanews.com",
    "title": "[['title']]",
    "article": "[['div.left_zw']]",
    "url": "www.chinanews.com/*/**/*/*.shtml"
  },
  {
    "name": "toutiao.com",
    "title": "[['h1.article-title']]",
    "article": "[['div.article-content']]",
    "url": "www.toutiao.com/a*/"
  },
  {
    "name": "cwzg.cm",
    "title": "[['h1']]",
    "about": "[['div.article-brief']]",
    "article": "#article",
    "url": "www.cwzg.cn/*/*/*.html"
  },
  {
    "name": "idianzixun.com",
    "title": "[['h2']]",
    "article": "[['div.content-bd']]",
    "url": "www.yidianzixun.com/article/*"
  },
  {
    "name": "reader.s-reader.com",
    "title": "[['title']]",
    "article": "[['div.content']]",
    "url": "reader.s-reader.com/article/*/*.html"
  },
  {
    "name": "news.163.com",
    "title": "[['title']]",
    "article": "#endText",
    "url": "news.163.com/**/*/*.html"
  },
  {
    "name": "renjian.163.com",
    "title": "[['title']]",
    "article": "#endText",
    "url": "renjian.163.com/**/*/*.html"
  },
  {
    "name": "tech.163.com",
    "title": "[[{$('.post_content_main').find('h1').text()}]]",
    "article": "[['div.post_text']]",
    "url": "*.163.com/**/*/*.html"
  },
  {
    "name": "mi.techweb.com.cn",
    "title": "[[{$('.title').find('h1').text()}]]",
    "article": "[['div.content_txt']]",
    "url": "mi.techweb.com.cn/tmt/*/*.shtml"
  },
  {
    "name": "techweb.com.cn",
    "title": "[[{$('.title').find('h1').text()}]]",
    "article": "[['div.content_txt']]",
    "url": "www.techweb.com.cn/*/*/*.shtml"
  },
  {
    "name": "donews.com",
    "title": "[[{$($('.contentbox').find('h2')[0]).text()}]]",
    "article": "[[{$($('.article-con')[0]).html()}]]",
    "url": "www.donews.com/**/*/*.html"
  },
  {
    "name": "flashnews.donews.com",
    "title": "[[{$($('.contentbox').find('h2')[0]).text()}]]",
    "article": "[[{$($('.article-con')[0]).html()}]]",
    "url": "www.donews.com/flashnews/detail/"
  },
  {
    "name": "newseed.pedaily.cn",
    "title": "[['h1']]",
    "about": "[['div.subject']]",
    "article": "#news-content",
    "url": "newseed.pedaily.cn/*/*.shtml"
  },
  {
    "name": "digi.tech.qq.com",
    "title": "[[{$('.hd').find('h1').text()}]]",
    "about": "[['p.titdd-Article']]",
    "article": "[['div.Cnt-Main-Article-QQ']]",
    "url": "digi.tech.qq.com/a/*/*.htm"
  },
  {
    "name": "qq.com",
    "title": "[[{$('.hd h1').text()}]]",
    "article": "#Cnt-Main-Article-QQ",
    "url": "*.qq.com/a/*/*.htm"
  },
  {
    "name": "view.inews.qq.com",
    "title": "[['p.title']]",
    "article": "#content",
    "url": "view.inews.qq.com/a/"
  },
  {
    "name": "view2.inews.qq.com",
    "title": "#sharetitle",
    "article": "#articleContent",
    "url": "view.news.qq.com/original/intouchtoday/*.html"
  },
  {
    "name": "zhidx.com",
    "title": "[[{$('.finTit').find('h1').text()}]]",
    "article": "[['div.finCnt']]",
    "url": "zhidx.com/p/"
  },
  {
    "name": "iheima.com",
    "title": "[['div.title']]",
    "about": "[['div.outline']]",
    "article": "[['div.main-content']]",
    "url": "www.iheima.com/zixun/*/*/*.shtml"
  },
  {
    "name": "pintu360.com",
    "title": "[['h1.title']]",
    "about": "[['div.article-note']]",
    "article": "[[{$('.article-content').find('.text').html()}]]",
    "url": "www.pintu360.com/article/"
  },
  {
    "name": "tech2ipo.com",
    "title": "[[{$('.title').find('h1').text()}]]",
    "article": "[['div.content']]",
    "url": "tech2ipo.com/*"
  },
  {
    "name": "column.iresearch.cn",
    "title": "[[{$('.title').find('h1').text()}]]",
    "article": "[['div.m-article']]",
    "url": "column.iresearch.cn/b/*/*.shtml"
  },
  {
    "name": "news.iresearch.cn",
    "title": "[[{$('.title').find('h1').text()}]]",
    "about": "[['div.review']]",
    "article": "[['div.m-article']]",
    "url": "news.iresearch.cn/content/**/*/*.shtml"
  },
  {
    "name": "lanjingtmt.com",
    "title": "[[{$('.newsTitle').find('h1').text()}]]",
    "about": "[['div.dm_zy']]",
    "article": "#pageTxt",
    "url": "www.lanjingtmt.com/news/detail/"
  },
  {
    "name": "timetimetime.net",
    "title": "[['h1']]",
    "article": "[[{$('.neir').html()}]]",
    "url": "www.timetimetime.net/*/*.html"
  },
  {
    "name": "mifengtd.cn",
    "title": "[['a.p-name']]",
    "article": "[['div.e-content']]",
    "url": "www.mifengtd.cn/articles/"
  },
  {
    "name": "vgtime.com",
    "title": "[['h1.art_max_width']]",
    "article": "[['div.paragraph']]",
    "url": "www.vgtime.com/article/"
  },
  {
    "name": "keke289.com",
    "title": "[['h2']]",
    "article": "[['section.article-bd']]",
    "url": "www.keke289.com/news/"
  },
  {
    "name": "ebrun.com",
    "title": "[['h1']]",
    "article": "[['div.cmsDiv']]",
    "url": "www.ebrun.com/*/*.shtml"
  },
  {
    "name": "cokeji.com",
    "title": "[[{$('.single-header').find('h1').text()}]]",
    "article": "[['div.single-main']]",
    "url": "www.cokeji.com/*.html"
  },
  {
    "name": "199it.com",
    "title": "[['h1.entry-title']]",
    "article": "[['div.entry-content']]",
    "url": "www.199it.com/archives/"
  },
  {
    "name": "aliresearch.com",
    "title": "[['h2']]",
    "article": "#contents",
    "url": "www.aliresearch.com/blog/article/detail/id/"
  },
  {
    "name": "cn.engadget.com",
    "title": "[[{$('head').find('title').text()}]]",
    "article": "[['div.article-text']]",
    "url": "cn.engadget.com/*/*/*/*/"
  },
  {
    "name": "chinaventure.com.cn",
    "title": "[['h1.h1_01']]",
    "article": "[['div.content_01']]",
    "url": "www.chinaventure.com.cn/cmsmodel/news/detail/"
  },
  {
    "name": "baijia.baidu.com",
    "title": "[['h1.title']]",
    "article": "[['section.news-content']]",
    "url": "baijia.baidu.com/s?id=*"
  },
  {
    "name": "g-cores.com",
    "title": "[['h1.story_title']]",
    "about": "[['p.story_desc']]",
    "article": "[['div.story']]",
    "url": "www.g-cores.com/articles/"
  },
  {
    "name": "tieba.baidu.com",
    "title": "[[{$('.core_title_txt').text()}]]",
    "article": "[[{$('.p_content')}]]",
    "url": "tieba.baidu.com/p/"
  },
  {
    "name": "article.chiphell.com",
    "title": "[['h1.ph']]",
    "article": "[['table.vwtb']]",
    "url": "www.chiphell.com/article-*.html"
  },
  {
    "name": "chiphell.com",
    "title": "#thread_subject",
    "article": "[[{$('.t_f')}]]",
    "url": "www.chiphell.com/thread-*.html"
  },
  {
    "name": "qu.la",
    "title": "[['h1']]",
    "article": "#content",
    "url": "www.qu.la/book/*/*.html"
  },
  {
    "name": "biquge.com.tw",
    "title": "[[{$('.bookname').find('h1').text()}]]",
    "article": "#content",
    "url": "www.biquge.com.tw/**/*.html"
  },
  {
    "name": "xxbiquge.com",
    "title": "[['h1']]",
    "article": "#content",
    "url": "www.xxbiquge.com/**/*.html"
  },
  {
    "name": "biquge5200.com",
    "title": "[['h1']]",
    "article": "#content",
    "url": "www.biquge5200.com/**/*.html"
  },
  {
    "name": "piaotian.com",
    "title": "[['h1']]",
    "article": "#content",
    "url": "www.piaotian.com/html/**/*.html"
  },
  {
    "name": "zanghaihua.org",
    "title": "[[{$('.chaptertitle').find('h1').text()}]]",
    "article": "[['div.bookcontent']]",
    "url": "www.zanghaihua.org/*.html"
  },
  {
    "name": "lofter.com",
    "title": "[['title']]",
    "article": "[[{$('.content').html()||$('.text').html()}]]",
    "url": "*.lofter.com/post/*"
  },
  {
    "name": "ui.cn",
    "title": "[['#p-title']]",
    "article": "[['#p-content']]",
    "image": "[[{$('#p-content img').eq(0).attr('src')}]]",
    "url": "www.ui.cn/detail/",
    "publisher": {
      'name': "UI中国",
      'avatar': "http://www.ui.cn/favicon.ico",
      'authorName': "[[{$('#p-author').text().trim()}]]",
      'authorAvatar': "[[{$('.aside .zbd_portrait img').attr('src')}]]"
    }
  }, {
    "name": "pmcaff.com/article",
    "title": "[['.article-title h1']]",
    "article": "[['.article-body article']]",
    "image": "[[{$('.article-body img').eq(0).attr('src')}]]",
    "url": "www.pmcaff.com/article/index/*",
    "publisher": {
      "name": "pmcaff产品经理社区",
      "avatar": "http://www.pmcaff.com/favicon.ico"
    }
  }, {
    "name": "pmcaff.com/discuss",
    "title": "[['.discussion-topic h1']]",
    "article": "[['.discussion-content']]",
    "url": "www.pmcaff.com/discuss/answer/*",
    "publisher": {
      "name": "pmcaff产品经理社区",
      "avatar": "http://www.pmcaff.com/favicon.ico"
    }
  }
]