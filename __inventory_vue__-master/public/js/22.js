webpackJsonp([22],{

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            developer: ['Marco Joaquin Po']
        };
    }
});

/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-8 col-md-offset-2"
  }, [_c('div', {
    staticClass: "panel panel-default"
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_vm._v("Developers")]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, _vm._l((_vm.developer), function(develop) {
    return _c('div', [_vm._v("\n                        " + _vm._s(develop) + "\n                    ")])
  }), 0)])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6351ca3c", module.exports)
  }
}

/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(134),
  /* template */
  __webpack_require__(192),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\xampp\\htdocs\\__inventory_vue__-master\\resources\\assets\\js\\components\\Contact\\Contacts.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Contacts.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6351ca3c", Component.options)
  } else {
    hotAPI.reload("data-v-6351ca3c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ })

});