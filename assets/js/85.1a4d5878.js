(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{415:function(t,a,e){"use strict";e.r(a);var s=e(0),r=Object(s.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"backend的telemetry"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#backend的telemetry"}},[t._v("#")]),t._v(" Backend的telemetry")]),t._v(" "),e("p",[t._v("默认情况下, telemetry功能是关闭的，像这样：")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("telemetry")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("none")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n")])])]),e("h2",{attrs:{id:"prometheus"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#prometheus"}},[t._v("#")]),t._v(" Prometheus")]),t._v(" "),e("p",[t._v("Prometheus可做为telemetry功能的实现者。\n使用这个，prometheus可以从Skywalking的backend收集度量。")]),t._v(" "),e("p",[t._v("将"),e("code",[t._v("prometheus")]),t._v("设置为provider。端点在开放在"),e("code",[t._v("http://0.0.0.0:1234/")]),t._v("和"),e("code",[t._v("http://0.0.0.0:1234/metrics")]),t._v("。")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("telemetry")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("prometheus")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n")])])]),e("p",[t._v("根据需要设置主机和端口。")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("telemetry")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("prometheus")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("host")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 127.0.0.1\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1543")]),t._v("\n")])])]),e("h3",{attrs:{id:"grafana可视化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#grafana可视化"}},[t._v("#")]),t._v(" Grafana可视化")]),t._v(" "),e("p",[t._v("提供了两种grafana仪表盘的设置。")]),t._v(" "),e("ol",[e("li",[t._v("当SkyWalking 和追踪agent一起使用时，参考"),e("a",{attrs:{href:"telemetry/trace-mode-grafana.json"}},[t._v("SkyWalking trace-mode dashboard")]),t._v("。")]),t._v(" "),e("li",[t._v("当SkyWalking 和service mesh telemetry（包括istio和envoy）一起使用时，参考"),e("a",{attrs:{href:"telemetry/mesh-mode-grafana.json"}},[t._v("SkyWalking mesh-mode dashboard")]),t._v("。")])])])}],!1,null,null,null);a.default=r.exports}}]);