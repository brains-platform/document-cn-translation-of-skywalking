(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{310:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("在大多数生产环境中，后端应用需要支持高吞吐量并且支持高可用来保证服务的稳定，所以你始终需要在生产环境进行集群管理。")]),t._v(" "),a("p",[t._v("SkyWalking的backend提供了几种集群管理的方案。选择你需要或想要的那个。")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),a("p",[t._v("Zookeeper版本需要在3.4以上。")]),t._v(" "),t._m(4),t._m(5),t._v(" "),a("p",[t._v("在某些情况下，OAP默认的GRPC主机和核心端口不适合OAP节点之间的内部通信。\n根据您自己的LAN环境，可通过下列参数设置你的host和port。")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._m(8),t._v(" "),a("p",[t._v("需要backend集群部署在kubernetes中, 可参考 "),a("router-link",{attrs:{to:"./backend-k8s.html"}},[t._v("Deploy in kubernetes")]),t._v(".\n设置实现者为"),a("code",[t._v("kubernetes")]),t._v(".")],1),t._v(" "),t._m(9),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),a("p",[t._v("和Zookeeper协调方式一样\n在某些情况下，OAP默认的GRPC主机和核心端口不适合OAP节点之间的内部通信。\n根据您自己的LAN环境，可通过下列参数设置你的host和port。")]),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16)])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"集群管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#集群管理"}},[this._v("#")]),this._v(" 集群管理")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("a",{attrs:{href:"#Zookeeper%E5%8D%8F%E8%B0%83%E6%96%B9%E5%BC%8F"}},[t._v("Zookeeper协调方式")]),t._v("。使用ZooKeeper让后端实例彼此之间检测和通信。")]),t._v(" "),a("li",[a("a",{attrs:{href:"#kubernetes"}},[t._v("Kubernetes")]),t._v("。 当backend集群部署在kubernetes时，你可以使用k8s原生的APIs来管理集群。")]),t._v(" "),a("li",[a("a",{attrs:{href:"#consul"}},[t._v("Consul")]),t._v("。 使用Consul作为集群管理的实现者，来协调backend的实例。")]),t._v(" "),a("li",[a("a",{attrs:{href:"#nacos"}},[t._v("Nacos")]),t._v(". 使用 Nacos 作为集群管理的实现者, 来协调后端的实例。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"zookeeper协调方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#zookeeper协调方式"}},[this._v("#")]),this._v(" Zookeeper协调方式")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Zookeeper是一个很常见并的广泛使用的集群协调者。在yml文件中设置 "),s("strong",[this._v("cluster")]),this._v(" 实现者为"),s("strong",[this._v("zookeeper")]),this._v("来启用它。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cluster")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("zookeeper")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("nameSpace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("SW_NAMESPACE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("hostPort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("SW_CLUSTER_ZK_HOST_PORT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("localhost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2181")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Retry Policy")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("baseSleepTimeMs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# initial amount of time to wait between retries")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("maxRetries")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# max number of times to retry")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("code",[t._v("hostPort")]),t._v("是zookeeper服务器的列表。格式"),a("code",[t._v("IP1:PORT1,IP2:PORT2,...,IPn:PORTn")])]),t._v(" "),a("li",[a("code",[t._v("hostPort")]),t._v(", "),a("code",[t._v("baseSleepTimeMs")]),t._v(" and "),a("code",[t._v("maxRetries")]),t._v(" 是Zookeeper客户端的设置。.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("InternalComHost。已注册的主机和其它OAP节点使用它与当前节点通信。")]),this._v(" "),s("li",[this._v("InternalCompart。已注册的端口和其它OAP节点使用它与当前节点通信。")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("zookeeper")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("nameSpace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("SW_NAMESPACE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("hostPort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("SW_CLUSTER_ZK_HOST_PORT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("localhost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2181")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Retry Policy")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("baseSleepTimeMs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("SW_CLUSTER_ZK_SLEEP_TIME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# initial amount of time to wait between retries")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("maxRetries")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("SW_CLUSTER_ZK_MAX_RETRIES"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# max number of times to retry")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("internalComHost")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 172.10.4.10\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("internalComPort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11800")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"kubernetes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes"}},[this._v("#")]),this._v(" Kubernetes")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cluster")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kubernetes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("watchTimeoutSeconds")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("namespace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" default\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labelSelector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" app=collector"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("release=skywalking\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uidEnvName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" SKYWALKING_COLLECTOR_UID\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"consul"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#consul"}},[this._v("#")]),this._v(" Consul")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("目前，consul正成为一个流行的系统，很多公司和开发者使用它作为服务发现的手段。在yml文件中设置 "),s("strong",[this._v("cluster")]),this._v(" 实现者为"),s("strong",[this._v("consul")]),this._v("来启用它。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cluster")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("consul")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("serviceName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("SW_SERVICE_NAME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SkyWalking_OAP_Cluster"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Consul cluster nodes, example: 10.0.0.1:8500,10.0.0.2:8500,10.0.0.3:8500")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("hostPort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("SW_CLUSTER_CONSUL_HOST_PORT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("localhost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8500")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("InternalComHost。已注册的主机和其它OAP节点使用它与当前节点通信。")]),this._v(" "),s("li",[this._v("InternalCompart。已注册的端口和其它OAP节点使用它与当前节点通信。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"nacos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nacos"}},[this._v("#")]),this._v(" Nacos")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在 yml 文件中设置 "),s("strong",[this._v("cluster")]),this._v(" 模块的实现为 "),s("strong",[this._v("nacos")]),this._v(" 来激活 Nacos.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cluster")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("nacos")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("serviceName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("SW_SERVICE_NAME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SkyWalking_OAP_Cluster"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Nacos cluster nodes, example: 10.0.0.1:8848,10.0.0.2:8848,10.0.0.3:8848")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("hostPort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("SW_CLUSTER_NACOS_HOST_PORT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("localhost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8848")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);s.default=n.exports}}]);