(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{510:function(s,a,n){"use strict";n.r(a);var e=n(3),o=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("ArticleTopAd"),s._v(" "),a("p",[s._v("转自"),a("a",{attrs:{href:"http://blog.suy.me/play/remove_the_ads_of_youdao_dict",target:"_blank",rel:"nofollow noopener noreferrer"}},[s._v("青之蓝图"),a("OutboundLink")],1),s._v(" 其实Windows 10系统的话，单纯查词，用UWP的必应词典是最简单干净的。 然而作为一个英语水平并不是很好的我，平常又少不了要看不少英文文献，屏幕取词功能此时非常重要，而UWP是不支持这些功能的…… 所以我们回到桌面词典软件，排个队： 林格斯词霸、金山词霸、有道词典、欧路词典")]),s._v(" "),a("blockquote",[a("p",[s._v("最早使用林格斯词霸，可以比较自由地扩展词库，取词等功能也都有，然而取词体验并不好，也没有特别适合查询专业名词的离线词库可选择。 后来使用有道，有我喜欢的柯林斯词典，专业释义也较为准确，取词精准且顺手，无奈广告太多，用过几天受不了放弃了。 再后来用金山，那时候没广告，界面也还可以，无奈一直无法对PDF取词，这简直是致命的。这几天又下载了最新版的试了一下，PDF取词可以了，但是专业程度有待提高，界面广告也多了，右下角弹窗无法禁用，Pass。 然后是欧路词典，界面虽然算不上美观但是比较清爽，词典资源多，可以导入mdict资源，我收集了数G的词典，最后留下来的有四个：柯林斯、必应离线、韦氏大学、牛津搭配，相当顺手，很适合学习英语的人，然而取词依然氏短板")])]),s._v(" "),a("p",[s._v("有道词典的界面全部是基于HTML语言配合CSS和Javascript实现的，比如之前6.X时代的主界面就是index.html，并且各个区块还有贴心的注释，如果有心的话，可以自定义玩出很多花样来，去广告只是其中很简单的一种。 进入7.0时代，依然是基于HTML+CSS+Javascript，所以修改起来相比其他软件还是要方便蛮多的（比如之前修改Evernote去广告就需要用到十六进制编辑器……）。 本代的index.html只是作为一个框架，主要内容从几个Javascript文件中调用，再调入其他html文件。一个个分析，可以比较完美的干掉几乎全部广告，唯独取词窗口，因为找不到对应的是哪个文件，所以没能处理，不过取词窗口的广告占地不是很显眼，也就忍一忍了。 下面正文 首先是词典首页底部的banner样式的广告，将index.html用Chrome打开，右键广告审查元素，可以看见这是位于footer下面的adv标签。 "),a("img",{attrs:{src:"https://jsd.cdn.zzko.cn/gh/pxpy/img@master/blog/pic/c26c910b09d2afc7563cb987afad6e0b_0.6737352768486136-1.png",alt:"index.js"}}),s._v(" 修改方法：用文本编辑器（记事本也可以）打开安装目录中的Youdao\\Dictbeta\\7.0.0.1012\\resultui\\index.js，查找footer，然后将其后的< Adv >< /Adv >删除（图中蓝框部分），保存。 其次是查词界面和单词本界面中的广告，需要修改的分别是Youdao\\Dictbeta\\7.0.0.1012\\resultui\\dict\\result.js和Youdao\\Dictbeta\\7.0.0.1012\\resultui\\wordbook\\right.js这两个文件，这两个文件需要修改的内容一样，如下图： "),a("img",{attrs:{src:"https://jsd.cdn.zzko.cn/gh/pxpy/img@master/blog/pic/c26c910b09d2afc7563cb987afad6e0b_0.8257764376757906-1.png",alt:"result.js"}}),s._v(" 忽略图中的红色标记（编辑器的识别问题），删去图中蓝色框线框住的地方，也就是< a >和< /a >之间的内容，保存。 之后重新打开有道词典，Bingo~")]),s._v(" "),a("h2",{attrs:{id:"我的补充"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#我的补充"}},[s._v("#")]),s._v(" 我的补充")]),s._v(" "),a("p",[s._v("实测起作用的，但仍然有一些广告，取词和划词界面广告可加下面修改host进一步屏蔽，其它的广告还不知道怎么去除，不建议安装网上的破解版，去广告版，尽量自己动手修改官网的吧！ 以下hosts是github上屏蔽广告hosts中有道的部分，也可以下载全部hosts文件，"),a("a",{attrs:{href:"https://raw.githubusercontent.com/lack006/Android-Hosts-L/master/hosts_files/2016_hosts/AD",target:"_blank",rel:"nofollow noopener noreferrer"}},[s._v("点我下载"),a("OutboundLink")],1),s._v(",作者主页:"),a("a",{attrs:{href:"https://github.com/lack006",target:"_blank",rel:"nofollow noopener noreferrer"}},[s._v("https://github.com/lack006"),a("OutboundLink")],1),s._v("，作者还制作了安卓app，试了一下，需要root权限，手机有道除了打开软件广告以外基本都屏蔽了。")]),s._v(" "),a("div",{staticClass:"language-host line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("127.0.0.1 feedback.youdao.com\n127.0.0.1 impservice.chnl.youdao.com\n127.0.0.1 impservice.dictapp.youdao.com\n127.0.0.1 rlogs.youdao.com\n127.0.0.1 union.youdao.com\n127.0.0.1 impservice2.youdao.com\n127.0.0.1 impservice.union.youdao.com\n127.0.0.1 impservice.dict.youdao.com\n127.0.0.1 dsp-impr2.youdao.com\n127.0.0.1 gorgon.youdao.com\n127.0.0.1 impservice.dictword.youdao.com\n127.0.0.1 impservice.mail.youdao.com\n127.0.0.1 m.clkservice.youdao.com\n127.0.0.1 conv.youdao.com\n127.0.0.1 ydpushserver.youdao.com\n127.0.0.1 tb060x.corp.youdao.com\n127.0.0.1 dsp-impr.youdao.com\n127.0.0.1 nc045x.corp.youdao.com\n127.0.0.1 impservice.dictweb.youdao.com\n127.0.0.1 impservice.youdao.com\n127.0.0.1 dictpushreg.youdao.com\n127.0.0.1 clkservice.union.youdao.com\n127.0.0.1 d.clkservice.youdao.com\n127.0.0.1 qt002x.corp.youdao.com\n127.0.0.1 p.clkservice.youdao.com\n127.0.0.1 clkservice2.dict.youdao.com\n127.0.0.1 i.clkservice.youdao.com\n127.0.0.1 nc004x.corp.youdao.com\n127.0.0.1 b.clkservice.youdao.com\n127.0.0.1 clkservice.mail.youdao.com\n127.0.0.1 clkservice.youdao.com\n127.0.0.1 a.youdao.com\n127.0.0.1 impservice.dictvista.youdao.com\n127.0.0.1 toolbar.youdao.com\n127.0.0.1 tb104x.corp.youdao.com\n127.0.0.1 impservice-test.dictapp.youdao.com\n127.0.0.1 s.clkservice.youdao.com\n127.0.0.1 dsp.youdao.com\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br")])])],1)}),[],!1,null,null,null);a.default=o.exports}}]);