webpackJsonp([7],{"4dDR":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=["","bounce","flash","pulse","rubberBand","shake","swing","tada","wobble","jello","bounceIn","bounceInDown","bounceInLeft","bounceInRight","bounceInUp","bounceOut","bounceOutDown","bounceOutLeft","bounceOutRight","bounceOutUp","fadeIn","fadeInDown","fadeInDownBig","fadeInLeft","fadeInLeftBig","fadeInRight","fadeInRightBig","fadeInUp","fadeInUpBig","fadeOut","fadeOutDown","fadeOutDownBig","fadeOutLeft","fadeOutLeftBig","fadeOutRight","fadeOutRightBig","fadeOutUp","fadeOutUpBig","flip","flipInX","flipInY","flipOutX","flipOutY","lightSpeedIn","lightSpeedOut","rotateIn","rotateInDownLeft","rotateInDownRight","rotateInUpLeft","rotateInUpRight","rotateOut","rotateOutDownLeft","rotateOutDownRight","rotateOutUpLeft","rotateOutUpRight","slideInUp","slideInDown","slideInLeft","slideInRight","slideOutUp","slideOutDown","slideOutLeft","slideOutRight","zoomIn","zoomInDown","zoomInLeft","zoomInRight","zoomInUp","zoomOut","zoomOutDown","zoomOutLeft","zoomOutRight","zoomOutUp","hinge","jackInTheBox","rollIn","rollOut"],a={name:"CustomComponent",data:function(){return{enterAnimated:"",leaveAnimated:""}},methods:{emitNotify:function(e,t){this.$my_notify({autoClose:3e3,content:'<a href="https://github.com/Neveryu/vue-cms" target="_blank">项目仓库地址</a>',enterAnimated:e,leaveAnimated:t})}},created:function(){this.options=o}},i={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper"},[n("el-alert",{attrs:{title:"自定义的通知(notify)组件",type:"success",description:"自定义的通知组件支持在全局使用 <notification /> 以及使用 api 的形式来调用"}}),e._v(" "),n("el-row",{staticClass:"animate-wrapper"},[e._v("\n    进入动画：\n    "),n("el-select",{attrs:{filterable:"",placeholder:"请选择(可搜索)"},model:{value:e.enterAnimated,callback:function(t){e.enterAnimated=t},expression:"enterAnimated"}},e._l(e.options,function(e){return n("el-option",{key:e,attrs:{label:e,value:e}})}),1),e._v("\n    离开动画：\n    "),n("el-select",{attrs:{filterable:"",placeholder:"请选择(可搜索)"},model:{value:e.leaveAnimated,callback:function(t){e.leaveAnimated=t},expression:"leaveAnimated"}},e._l(e.options,function(e){return n("el-option",{key:e,attrs:{label:e,value:e}})}),1),e._v(" "),n("el-button",{attrs:{type:"danger",plain:""},on:{click:function(t){return e.emitNotify(e.enterAnimated,e.leaveAnimated)}}},[e._v("触发")])],1)],1)},staticRenderFns:[]};var l=n("VU/8")(a,i,!1,function(e){n("ZLDI")},"data-v-2ba6b0e7",null);t.default=l.exports},ZLDI:function(e,t){}});
//# sourceMappingURL=7.6540421a4d18dfd84fba.js.map