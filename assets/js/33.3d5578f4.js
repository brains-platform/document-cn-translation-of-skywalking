(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{339:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"基于-token-认证"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基于-token-认证"}},[t._v("#")]),t._v(" 基于 Token 认证")]),t._v(" "),s("h2",{attrs:{id:"版本支持"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#版本支持"}},[t._v("#")]),t._v(" 版本支持")]),t._v(" "),s("p",[t._v("5.0.0-beta +")]),t._v(" "),s("h2",{attrs:{id:"在使用了tls-认证之后-为何还需要基于-token-的认证"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在使用了tls-认证之后-为何还需要基于-token-的认证"}},[t._v("#")]),t._v(" 在使用了TLS 认证之后,为何还需要基于 Token 的认证?")]),t._v(" "),s("p",[t._v("TLS 是保证传输层的安全,保证传输的网络是可信的.\n基于 token 的认证是为了保证应用的监控数据是 "),s("strong",[t._v("可信的")]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"token"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#token"}},[t._v("#")]),t._v(" Token")]),t._v(" "),s("p",[t._v("在现在的版本中, Token是一个简单的字符串.")]),t._v(" "),s("h3",{attrs:{id:"设置-token"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置-token"}},[t._v("#")]),t._v(" 设置 Token")]),t._v(" "),s("ol",[s("li",[t._v("在 agent.config 文件中设置 Token")])]),t._v(" "),s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Authentication active is based on backend setting, see application.yml for more details.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("agent.authentication")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("xxxx")]),t._v("\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("在 "),s("code",[t._v("application.yml")]),t._v(" 文件中设置 token")])]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("agent_gRPC")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("gRPC")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("host")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" localhost\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11800")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Set your own token to active auth")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("authentication")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" xxxxxx\n")])])]),s("h2",{attrs:{id:"认证失败"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#认证失败"}},[t._v("#")]),t._v(" 认证失败")]),t._v(" "),s("p",[t._v("collector验证来自探针的每个请求,只有 token 正确,验证才能通过。")]),t._v(" "),s("p",[t._v("如果token不正确，您将在探针端的日志看到如下日志:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("org.apache.skywalking.apm.dependencies.io.grpc.StatusRuntimeException: PERMISSION_DENIED\n")])])]),s("h2",{attrs:{id:"faq"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[t._v("#")]),t._v(" FAQ")]),t._v(" "),s("h3",{attrs:{id:"我可以只使用token认证而不用tls"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#我可以只使用token认证而不用tls"}},[t._v("#")]),t._v(" 我可以只使用token认证而不用TLS?")]),t._v(" "),s("p",[t._v("不行. 从技术层面来说, 当然可以.但是token 和 TLS 用于不被信任的网络环境. 在这种情况下, TLS显得更加重要, token 认证仅仅在 TLS 认证的之后才能被信任,\n如果在一个没有 TLS 的网络环节中, token非常容易被拦截和窃取.")]),t._v(" "),s("h3",{attrs:{id:"现在skywalking是否支持其他的认证机制-比如-ak-sk"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#现在skywalking是否支持其他的认证机制-比如-ak-sk"}},[t._v("#")]),t._v(" 现在skywalking是否支持其他的认证机制? 比如 ak/sk?")]),t._v(" "),s("p",[t._v("现在还不支持,但是如果有人愿意提供这些这些新特性,我们表示感谢.")])])}],!1,null,null,null);a.default=n.exports}}]);