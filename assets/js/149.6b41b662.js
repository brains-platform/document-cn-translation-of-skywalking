(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{319:function(t,e,s){"use strict";s.r(e);var _=s(0),i=Object(_.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),s("p",[t._v("SkyWalking 跨进程传播的头部协议版本 2.0 也叫做 sw6 协议. 第二版的协议与"),s("router-link",{attrs:{to:"./Skywalking-Cross-Process-Propagation-Headers-Protocol-v1.html"}},[t._v("第一版协议(亦即 sw3)")]),t._v("有相同的目的, 就是确保上下文得以正常传播.")],1),t._v(" "),t._m(3),t._v(" "),s("p",[t._v("两个版本的差异主要来自 SkyWalking 的演进, 包括")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),s("p",[t._v("头部值包含以下段, 所有字符串类型的值都是 BASE64 编码的.")]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),s("p",[t._v("当代理/SDK 没有这些信息时, 或者头部大于阈值(默认 2k)时, 可选项可以不存在头部值中")]),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"skywalking-跨进程传播的头部协议"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#skywalking-跨进程传播的头部协议"}},[this._v("#")]),this._v(" SkyWalking 跨进程传播的头部协议")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("版本 2.0")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"摘要"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#摘要"}},[this._v("#")]),this._v(" 摘要")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"与版本-v1-的差异"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#与版本-v1-的差异"}},[this._v("#")]),this._v(" 与版本 v1 的差异")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("服务网格和语言并不总是一样, 头部中的某些信息应该是可选的")]),this._v(" "),e("li",[this._v("需要 BASE64 编码")]),this._v(" "),e("li",[this._v("包括了采样标记")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"头部项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#头部项"}},[this._v("#")]),this._v(" 头部项")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("头部名称: "),e("code",[this._v("sw6")])]),this._v(" "),e("li",[this._v("头部值: 由 "),e("code",[this._v("-")]),this._v(" 分割, 各部分如下. 头部值的最大长度(默认)应该小于 2k.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("值格式示例, "),e("code",[this._v("XXXXX-XXXXX-XXXX-XXXX")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"值"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#值"}},[this._v("#")]),this._v(" 值")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("必须项")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ol",[s("li",[t._v("采样(Sample). 0 或 1. 0 表示上下文存在, 但是可以(也很可能)忽略. 1 表示此追踪需要采样并发送到后端.")]),t._v(" "),s("li",[t._v("追踪标识(Trace Id). "),s("strong",[t._v("字符串(BASE64 编码)")]),t._v(". 由 "),s("code",[t._v(".")]),t._v(" 分割的三个 long 类型值, 表示此追踪的唯一标识.")]),t._v(" "),s("li",[t._v("父追踪段 ID(Parent trace segment Id). "),s("strong",[t._v("字符串(BASE64 编码)")]),t._v(". 由 "),s("code",[t._v(".")]),t._v(" 分割的三个 long 类型值, 表示父服务中的追踪段的唯一标识.")]),t._v(" "),s("li",[t._v("父 Span 标识(Parent span Id). 整数. 从 0 开始. 此 Span ID 指向了父追踪段中的 Span.")]),t._v(" "),s("li",[t._v("父服务实例标识(Parent service instance Id). 整数. 父服务的实例 ID.")]),t._v(" "),s("li",[t._v("入口服务实例标识(Entrance service instance Id). 整数. 入口服务的实例 ID.")]),t._v(" "),s("li",[t._v("本请求的目标地址(Target address of this request). "),s("strong",[t._v("字符串(BASE64 编码)")]),t._v(". 客户端用于访问目标服务的网络地址(不一定是 IP + 端口). "),s("strong",[t._v("该值可以使用压缩收集器服务来获得一个 id(整数) 来代表这个字符串, 如果你使用字符串, 则字符串必须以 "),s("code",[t._v("#")]),t._v(" 开始, 否则直接使用整数 ID.")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("可选项")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ol",[s("li",[t._v("追踪的入口端点. "),s("strong",[t._v("字符串(BASE64 编码)")]),t._v(". "),s("strong",[t._v("该值可以使用压缩收集器服务来获得一个 id(整数) 来代表这个字符串, 如果你使用字符串, 则字符串必须以 "),s("code",[t._v("#")]),t._v(" 开始, 否则直接使用整数 ID.")])]),t._v(" "),s("li",[t._v("父服务的端点. "),s("strong",[t._v("字符串(BASE64 编码)")]),t._v(". "),s("strong",[t._v("该值可以使用压缩收集器服务来获得一个 id(整数) 来代表这个字符串, 如果你使用字符串, 则字符串必须以 "),s("code",[t._v("#")]),t._v(" 开始, 否则直接使用整数 ID.")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"示例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[this._v("#")]),this._v(" 示例")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("简单版本, "),e("code",[this._v("1-TRACEID-SEGMENTID-3-5-2-IPPORT")])]),this._v(" "),e("li",[this._v("完整版本 "),e("code",[this._v("1-TRACEID-SEGMENTID-3-5-2-IPPORT-ENTRYURI-PARENTURI")])])])}],!1,null,null,null);e.default=i.exports}}]);