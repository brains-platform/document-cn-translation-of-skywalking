(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{422:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),s("p",[t._v("注意，如果添加这些设置，请确保它们与核心模块不同，因为核心的GRPC/HTTP服务器仍用于UI和OAP内部通信。")]),t._v(" "),t._m(9),t._v(" "),s("p",[t._v("Zipkin receiver可以在两种不同的模式下工作。")]),t._v(" "),t._m(10),t._v(" "),s("p",[t._v("使用以下配置来激活.")]),t._v(" "),t._m(11),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._m(15),t._v(" "),s("p",[t._v("Jaeger receiver 目前只在跟踪模式下工作，不支持分析模式。Jaeger receiver提供额外的GRPC主机/端口，如果没有，将使用共享服务器主机/端口，还没有就使用核心GRPC主机/端口。Receiver需要激活Jaeger ElasticSearch存储实现。阅读此内容了解如何激活。right now only works in "),s("code",[t._v("Tracing Mode")]),t._v(", and no analysis.\nJaeger receiver provides extra gRPC host/port, if absent, sharing-server host/port will be used, then core gRPC host/port.\nReceiver requires "),s("code",[t._v("jaeger-elasticsearch")]),t._v(" storage implementation active.\nRead "),s("router-link",{attrs:{to:"./backend-storage.html#elasticsearch-6-with-jaeger-trace-extension"}},[t._v("this")]),t._v(" to know how to active.")],1),t._v(" "),s("p",[t._v("现在，你需要"),s("a",{attrs:{href:"https://www.jaegertracing.io/docs/1.11/architecture/#agent",target:"_blank",rel:"noopener noreferrer"}},[t._v("jaeger agent"),s("OutboundLink")],1),t._v(" 来批量发送spans到 SkyWalking的oap服务器。\n阅读"),s("a",{attrs:{href:"https://www.jaegertracing.io/docs/1.11/architecture/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Jaeger Architecture"),s("OutboundLink")],1),t._v("获取更多详情。")]),t._v(" "),s("p",[t._v("激活这个receiver。")]),t._v(" "),t._m(16)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"选择receiver"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#选择receiver"}},[this._v("#")]),this._v(" 选择Receiver")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Receiver是SkyWalking backend中的一个概念。 所有负责从其它监控系统接收测量或追踪数据的模块都被称为"),e("strong",[this._v("Receiver")]),this._v(" 。虽然目前大多数Receiver都使用gRPC或HTTPRestful来提供服务，事实上，不管是监听模式或者拉取模式都可以是receiver。Receiver可以基于从远程拉取数据，如Kakfa MQ。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("我们有以下receiver，Apache distribution.zzz中提供了"),e("code",[this._v("default")]),this._v("实现者。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ol",[s("li",[s("strong",[t._v("receiver-trace")]),t._v("。 gRPC和HTTPRestful服务，接收skywalk格式的跟踪。")]),t._v(" "),s("li",[s("strong",[t._v("receiver-register")]),t._v(".。gRPC和HTTPRestful服务，提供服务,服务实例和终端的注册。.")]),t._v(" "),s("li",[s("strong",[t._v("service-mesh")]),t._v("。 gRPC服务，接收来自入站网格探针的数据。")]),t._v(" "),s("li",[s("strong",[t._v("receiver-jvm")]),t._v("。 gRPC services，接收JVM度量数据。.")]),t._v(" "),s("li",[s("strong",[t._v("istio-telemetry")]),t._v("。 ISTIO遥测来自ISTIO官方的旁路适配器，这个Receiver匹配它自己的gRPC服务。")]),t._v(" "),s("li",[s("strong",[t._v("envoy-metrics")]),t._v(". Envoyd的"),s("code",[t._v("metrics_service")]),t._v(" 由它提供支持。 OAL脚本支持所有仪表类型度量。")]),t._v(" "),s("li",[s("strong",[t._v("receiver_zipkin")]),t._v(". 详见 "),s("a",{attrs:{href:"#zipkin-receiver"}},[t._v("details")]),t._v(".")]),t._v(" "),s("li",[s("strong",[t._v("receiver_jaeger")]),t._v(". 详见 "),s("a",{attrs:{href:"#jaeger-receiver"}},[t._v("details")]),t._v(".")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("这些receiver的示例设置已在默认的"),e("code",[this._v("application.yml")]),this._v("文件中，在此也列一下：")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("receiver-register")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("default")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("receiver-trace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("default")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("bufferPath")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ../trace"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("buffer/  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Path to trace buffer files, suggest to use absolute path")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("bufferOffsetMaxFileSize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Unit is MB")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("bufferDataMaxFileSize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Unit is MB")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("bufferFileCleanWhenRestart")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("sampleRate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("SW_TRACE_SAMPLE_RATE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The sample rate precision is 1/10000. 10000 means 100% sample in default.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("receiver-jvm")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("default")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("service-mesh")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("default")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("bufferPath")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ../mesh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("buffer/  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Path to trace buffer files, suggest to use absolute path")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("bufferOffsetMaxFileSize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Unit is MB")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("bufferDataMaxFileSize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Unit is MB")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("bufferFileCleanWhenRestart")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("istio-telemetry")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("default")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("envoy-metrics")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("default")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("receiver_zipkin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("default")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("host")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0.0.0.0\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9411")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("contextPath")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"提供给receiver的grpc-http服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#提供给receiver的grpc-http服务"}},[this._v("#")]),this._v(" 提供给receiver的gRPC/HTTP服务")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("默认情况下，所有GRPC/HTTP服务都应在"),e("code",[this._v("core/gRPC")]),this._v("和"),e("code",[this._v("core/rest")]),this._v("处提供。\n但是"),e("code",[this._v("receiver-sharing-server")]),this._v("模块提供了一种方式可使所有的receiver提供不同的ip:port，当然这需要你明确地设置。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("receiver-sharing-server")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("default")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restHost")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("SW_SHARING_SERVER_REST_HOST"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("0.0.0.0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restPort")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("SW_SHARING_SERVER_REST_PORT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12800")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restContextPath")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("SW_SHARING_SERVER_REST_CONTEXT_PATH"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("gRPCHost")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("SW_SHARING_SERVER_GRPC_HOST"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("0.0.0.0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("gRPCPort")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("SW_SHARING_SERVER_GRPC_PORT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11800")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"zipkin-receiver"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zipkin-receiver"}},[this._v("#")]),this._v(" Zipkin receiver")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("Tracing mode(默认)。追踪模式就是，skywalking的OAP表现得像个Zipkin收集器，通过HTTP服务完全支持Zipkin的v1/v2格式， 还在Skywalking用户界面提供了持久化和查询。但它不会从中分析度量标准。在大多数情况下，当度量来自service mesh时，我建议你可以使用这个特性。"),e("br"),this._v("\n注意，在这种模式下，Zipkinr eceiver需要激活"),e("code",[this._v("zipkin-elasticsearch")]),this._v("的存储实现。阅读[this]（backend storage.md elasticsearch-6-with-zipkin-trace-extension）了解如何激活。")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("receiver_zipkin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("default")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("host")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("SW_RECEIVER_ZIPKIN_HOST"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("0.0.0.0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("SW_RECEIVER_ZIPKIN_PORT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9411")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("contextPath")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("SW_RECEIVER_ZIPKIN_CONTEXT_PATH"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"2"}},[e("li",[this._v("Analysis mode(Not production ready),。通过HTTP服务接收Zipkin的v1/v2格式。将trace转换为skywalking原生的格式，并像skywalking trace那样进行分析。这个特性尚不能在生产环境使用，这是因为zipkin标签/端点值不可预测，我们无法确保它符合生产环境要求。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("要激活 "),e("code",[this._v("analysis mode")]),this._v(", 你需要设置"),e("code",[this._v("needAnalysis")]),this._v("配置")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("receiver_zipkin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("default")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("host")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("SW_RECEIVER_ZIPKIN_HOST"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("0.0.0.0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("SW_RECEIVER_ZIPKIN_PORT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9411")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("contextPath")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("SW_RECEIVER_ZIPKIN_CONTEXT_PATH"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("needAnalysis")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"jaeger-receiver"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jaeger-receiver"}},[this._v("#")]),this._v(" Jaeger receiver")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("receiver_jaeger")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("default")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("gRPCHost")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("SW_RECEIVER_JAEGER_HOST"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("0.0.0.0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("gRPCPort")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("SW_RECEIVER_JAEGER_PORT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14250")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);e.default=n.exports}}]);