(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{439:function(v,_,t){"use strict";t.r(_);var l=t(0),a=Object(l.a)({},(function(){var v=this.$createElement;this._self._c;return this._m(0)}),[function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"skywalking-跨进程传播的头部协议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#skywalking-跨进程传播的头部协议"}},[v._v("#")]),v._v(" SkyWalking 跨进程传播的头部协议")]),v._v(" "),t("ul",[t("li",[v._v("1.0 版本")])]),v._v(" "),t("p",[v._v("SkyWalking 不仅是一个普通的分布式追踪系统, 更是一个应用性能监控(APM)系统.\n因此其头部信息与它们在改进分析性能的收集器中相比要更加复杂.\n你可以在其他商业应用性能监控系统中找到许多相似的机制(其中某些甚至比 SkyWalking 更复杂).")]),v._v(" "),t("h1",{attrs:{id:"头部项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#头部项"}},[v._v("#")]),v._v(" 头部项")]),v._v(" "),t("ul",[t("li",[v._v("头部名称: "),t("code",[v._v("sw3")])]),v._v(" "),t("li",[v._v("头部值: 通过 "),t("code",[v._v("|")]),v._v(" 分割, 各部分如下:")])]),v._v(" "),t("p",[t("strong",[v._v("此头部协议来自 SkyWalking 3, 直到 2017 年, 因此头部名称 "),t("code",[v._v("sw3")]),v._v(" 沿用至今.")])]),v._v(" "),t("h2",{attrs:{id:"值"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#值"}},[v._v("#")]),v._v(" 值")]),v._v(" "),t("ul",[t("li",[v._v("追踪段 ID")])]),v._v(" "),t("p",[v._v("追踪段 ID 是分布式追踪中某一部分的唯一标识. 每一个 ID 只能在一个线程中使用. 此 ID 包含了 3 部分(long 类型数值), 如 "),t("code",[v._v('"1.2343.234234234')])]),v._v(" "),t("ol",[t("li",[v._v("第一部分表示应用实例 ID, 由收集器赋值. (基本上就是一个 int 数值, 在 protobuf 中比较有用)")]),v._v(" "),t("li",[v._v("第二部分表示线程 ID. (在 Java 中很可能是一个 int 数值, 在 protobuf 中比较有用)")]),v._v(" "),t("li",[v._v("第三部分又分为两部分\n"),t("ol",[t("li",[v._v("一个时间戳, 单位毫秒")]),v._v(" "),t("li",[v._v("一个序列号, 在本线程中, 从 0 (包含 0) 到 999 (包含 999)")])])])]),v._v(" "),t("p",[v._v("如果你在使用其他编程语言, 你可以自己生成你的 ID, 但是确保它是唯一的, 且包含以上三部分内容.")]),v._v(" "),t("ul",[t("li",[v._v("Span ID")])]),v._v(" "),t("p",[v._v("一个整数, 在一个追踪段中唯一, 从 0 开始;")]),v._v(" "),t("ul",[t("li",[v._v("父应用实例")])]),v._v(" "),t("p",[v._v("父节点的实例 ID, 如: 对于一个 RPC 服务来说, ID 是来自客户端应用实例的 ID.")]),v._v(" "),t("ul",[t("li",[v._v("入口应用实例")])]),v._v(" "),t("p",[v._v("入口应用的实例 ID. 如: 一个分布式追踪 "),t("code",[v._v("A->B->C")]),v._v(", 此 ID 为 "),t("code",[v._v("A")]),v._v(" 的 ID.")]),v._v(" "),t("ul",[t("li",[v._v("对等主机")])]),v._v(" "),t("p",[v._v("对等主机/对等 ID 来自客户端. 如: 客户端使用 "),t("code",[v._v("182.14.39.1:9080")]),v._v(" 来访问服务器, 此 ip:port 就是对等主机.")]),v._v(" "),t("p",[t("strong",[v._v("该值可以使用压缩收集器服务来获得一个 id(整数) 来代表这个字符串, 如果你使用字符串, 则字符串必须以 "),t("code",[v._v("#")]),v._v(" 开始, 否则直接使用整数 ID.")])]),v._v(" "),t("ul",[t("li",[v._v("第一个追踪段的入口 Span 操作名称")])]),v._v(" "),t("p",[v._v("从 "),t("strong",[v._v("入口应用实例")]),v._v(" 传播过来的入口 Span 的操作名称/id")]),v._v(" "),t("p",[t("strong",[v._v("该值可以使用压缩收集器服务来获得一个 id(整数) 来代表这个字符串, 如果你使用字符串, 则字符串必须以 "),t("code",[v._v("#")]),v._v(" 开始, 否则直接使用整数 ID.")])]),v._v(" "),t("ul",[t("li",[v._v("父追踪段的入口 Span 操作名称")])]),v._v(" "),t("p",[v._v("从 "),t("strong",[v._v("父应用实例")]),v._v(" 传播过来的入口 Span 的操作名称/id")]),v._v(" "),t("p",[t("strong",[v._v("该值可以使用压缩收集器服务来获得一个 id(整数) 来代表这个字符串, 如果你使用字符串, 则字符串必须以 "),t("code",[v._v("#")]),v._v(" 开始, 否则直接使用整数 ID.")])]),v._v(" "),t("ul",[t("li",[v._v("分布式追踪 ID")])]),v._v(" "),t("p",[v._v("整个链路追踪中的分布式追踪 ID, 如果在一个批处理进程中, 则它来自第一个批处理生产者的追踪. 组成部分与 "),t("strong",[v._v("追踪段 ID")]),v._v(" 一样, 包含三个部分.")]),v._v(" "),t("h3",{attrs:{id:"示例值"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#示例值"}},[v._v("#")]),v._v(" 示例值")]),v._v(" "),t("ol",[t("li",[t("code",[v._v("1.2343.234234234|1|1|1|#127.0.0.1:8080|#/portal/|#/testEntrySpan|1.2343.234234234")])]),v._v(" "),t("li",[t("code",[v._v("1.2343.234234234|1|1|1|#127.0.0.1:8080|#/portal/|1038|1.2343.234234234")])])])])}],!1,null,null,null);_.default=a.exports}}]);