(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{471:function(t,s,n){"use strict";n.r(s);var i=n(3),o=Object(i.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("ArticleTopAd"),t._v(" "),s("p",[s("a",{attrs:{href:"https://jsd.cdn.zzko.cn/gh/pxpy/img@master/blog/pic/win10.jpg",target:"_blank",rel:"nofollow noopener noreferrer"}},[s("img",{attrs:{src:"https://jsd.cdn.zzko.cn/gh/pxpy/img@master/blog/pic/win10.jpg",alt:"win10"}}),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"_1、先说关闭-获取windows10-升级提醒的方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、先说关闭-获取windows10-升级提醒的方法"}},[t._v("#")]),t._v(" 1、先说关闭“获取Windows10”升级提醒的方法：")]),t._v(" "),s("p",[t._v('打开注册表编辑器，定位至 [box style="tips"]HKLM\\Software\\Microsoft\\Windows\\CurrentVersion\\WindowsUpdate\\OSUpgrade[/box] 注：建议修改前备份注册表。 在右侧窗口中找到ReservationsAllowed，把数值数据修改为 0 即可。')]),t._v(" "),s("h2",{attrs:{id:"_2、再说一下关闭win10升级推送的两种方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、再说一下关闭win10升级推送的两种方法"}},[t._v("#")]),t._v(" 2、再说一下关闭Win10升级推送的两种方法：")]),t._v(" "),s("h3",{attrs:{id:"方法一-修改注册表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方法一-修改注册表"}},[t._v("#")]),t._v(" 方法一：修改注册表")]),t._v(" "),s("p",[t._v('打开注册表编辑器（win+R，regedit），定位至：[box style="tips"]HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\WindowsUpdate[/box] 注：建议修改前备份注册表。 在右侧窗口中找到DisableOSUpgrade，把数值数据修改为 1 即可。')]),t._v(" "),s("h3",{attrs:{id:"方法二-配置组策略"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方法二-配置组策略"}},[t._v("#")]),t._v(" 方法二：配置组策略")]),t._v(" "),s("p",[t._v("PS：因为Win7家庭普通版和Win8.1标准版没有组策略组件，所以本方法只适用Win7家庭高级版/专业版/旗舰版/企业版和Win8.1专业版/企业版等高级版本。 Win + R 快捷键调出“运行”对话框，输入“gpedit.msc”，确定，打开“本地组策略编辑器”，在左侧列表中定位至“计算机配置 - 管理模板 - Windows组件 - Windows Update”，然后在右侧窗口中找到“Turn off the upgrade to the latest version of Windows through Windows Update”配置项，双击该项打开配置窗口，设置为“已启用”，确定关闭窗口。 这样就关闭了Win10升级推送功能。 注：通过这两种方法关闭关闭Win10升级推送的同时，也关闭了“获取Windows10”升级提醒。以后想要升级Win10系统的话，只需把以上修改再改回默认即可。")]),t._v(" "),s("blockquote",[s("p",[t._v("也可以用这个，非官方，更方便《获取Windows10》移除工具下载：http://pan.baidu.com/s/1c0Pynny")])])],1)}),[],!1,null,null,null);s.default=o.exports}}]);