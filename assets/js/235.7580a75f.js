(window.webpackJsonp=window.webpackJsonp||[]).push([[235],{200:function(e,v,_){"use strict";_.r(v);var t=_(0),r=Object(t.a)({},(function(){var e=this.$createElement;this._self._c;return this._m(0)}),[function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("div",{staticClass:"content"},[_("h1",{attrs:{id:"高级部署"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#高级部署"}},[e._v("#")]),e._v(" 高级部署")]),e._v(" "),_("p",[e._v("OAP服务器在集群环境中相互通信。\n在集群模式中，可通过不同的角色运行。")]),e._v(" "),_("ul",[_("li",[e._v("Mixed(默认)")]),e._v(" "),_("li",[e._v("Receiver")]),e._v(" "),_("li",[e._v("Aggregator")])]),e._v(" "),_("p",[e._v("有时，用户希望集群中的节点承担明确的角色。可以参考以下：")]),e._v(" "),_("h2",{attrs:{id:"mixed"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#mixed"}},[e._v("#")]),e._v(" Mixed")]),e._v(" "),_("p",[e._v("默认角色，OAP需承担以下责任：")]),e._v(" "),_("ol",[_("li",[e._v("接收agent的跟踪或指标。")]),e._v(" "),_("li",[e._v("做L1聚合")]),e._v(" "),_("li",[e._v("内部通信(发送/接收)")]),e._v(" "),_("li",[e._v("做L2聚合")]),e._v(" "),_("li",[e._v("持久化数据")]),e._v(" "),_("li",[e._v("报警")])]),e._v(" "),_("h2",{attrs:{id:"receiver"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#receiver"}},[e._v("#")]),e._v(" Receiver")]),e._v(" "),_("p",[e._v("OAP需承担以下责任：")]),e._v(" "),_("ol",[_("li",[e._v("接收代理跟踪或指标")]),e._v(" "),_("li",[e._v("做L1聚合")]),e._v(" "),_("li",[e._v("内部通信(发送)")])]),e._v(" "),_("h2",{attrs:{id:"aggregator"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#aggregator"}},[e._v("#")]),e._v(" Aggregator")]),e._v(" "),_("p",[e._v("OAP需承担以下责任：")]),e._v(" "),_("ol",[_("li",[e._v("内部沟通(接收)")]),e._v(" "),_("li",[e._v("做L2聚合")]),e._v(" "),_("li",[e._v("持久化数据")]),e._v(" "),_("li",[e._v("告警")])]),e._v(" "),_("hr"),e._v(" "),_("p",[e._v("这些角色是基于安全和网络策略的复杂部署需求而设计的。")]),e._v(" "),_("h2",{attrs:{id:"kubernetes"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes"}},[e._v("#")]),e._v(" Kubernetes")]),e._v(" "),_("p",[e._v("如果你正在使用我们原生的[Kubernetes coordinator](backend-cluster.md# Kubernetes)，"),_("code",[e._v("labelSelector")]),e._v("\n的设置可用于"),_("code",[e._v("Aggregator")]),e._v("角色。根据你的需求选择正确的OAP部署。")])])}],!1,null,null,null);v.default=r.exports}}]);