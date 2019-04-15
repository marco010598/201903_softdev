webpackJsonp([0],{

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
throw new Error("Cannot find module \"select2\"");
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['options', 'value', 'name', 'urlName', 'nameData'],
    data: function data() {
        return {
            msg: ''
        };
    },
    mounted: function mounted() {
        var vm = this;

        $(this.$el)
        // init select2
        .select2({ theme: "bootstrap", data: this.options,
            placeholder: 'Select one',
            allowClear: false,
            tags: true,
            createTag: function createTag(params) {
                var term;
                if (!_.isEmpty(vm.urlName)) {
                    term = $.trim(params.term) + (vm.options.some(function (r) {
                        return r.text == params.term;
                    }) ? "" : " (new)");

                    if (term === '' || term === ' (new)') {
                        return null;
                    }
                    return {
                        id: term,
                        text: term,
                        isNewFlag: true
                    };
                }
            }
        }).val(this.value).trigger('change').on('select2:select', function (e) {
            var _this = this;

            if (!_.isEmpty(vm.urlName)) {
                if (e.params.data.isNewFlag) {
                    if (/ \(new\)$/.test(e.params.data.text)) {

                        var post = $.trim(e.params.data.text.replace(/ \(new\)$/, ''));
                        axios.post(vm.urlName, { name: post }).then(function (response) {
                            $(_this).find('[value="' + e.params.data.id + '"]').replaceWith('<option selected value="' + response.data.data.id + '">' + response.data.data.name + '</option>');
                            vm.$emit('modelId', response.data.data);
                        });
                    }
                }
            } else {

                vm.$emit('selectValue', e.params.data.id);

                vm.$emit('selectData', e.params.data.type);
                vm.$emit('selectQuantityValue', e.params.data.quantity);
                vm.$emit('selectStatusValue', e.params.data.status ? e.params.data.status.id : 0);
                vm.$emit('selectManufactureValue', e.params.data.manufacture);
                vm.$emit('selectDescriptionValue', e.params.data.description);
                vm.$emit('selectLocationValue', e.params.data.location);
                vm.$emit('selectCategoryValue', e.params.data.category);
                vm.$emit('selectModelValue', e.params.data.model);
            }
        })
        // emit event on change.
        .on('change', function (e) {
            vm.$emit('input', this.value);
        });
    },

    watch: {
        value: function value(_value) {
            // update value
            $(this.$el).val(_value).trigger('change');
        },
        options: function options(_options) {
            // update options
            $(this.$el).select2({ data: _options });
        }
    },
    destroyed: function destroyed() {
        $(this.$el).off().select2('destroy');
    }
});

/***/ }),

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
exports.push([module.i, "\n#loader {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  z-index: 1;\n  width: 150px;\n  height: 150px;\n  margin: -75px 0 0 -75px;\n  border: 16px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 16px solid #3498db;\n  width: 120px;\n  height: 120px;\n  animation: spin 2s linear infinite;\n}\n@keyframes spin {\n0% { transform: rotate(0deg);\n}\n100% { transform: rotate(360deg);\n}\n}\n", ""]);

/***/ }),

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(122)

var Component = __webpack_require__(3)(
  /* script */
  null,
  /* template */
  __webpack_require__(121),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\xampp\\htdocs\\__inventory_vue__-master\\resources\\assets\\js\\components\\Loader\\Loader.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Loader.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-60cce5ff", Component.options)
  } else {
    hotAPI.reload("data-v-60cce5ff", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!vue-style-loader!css-loader!../../../../../node_modules/vue-loader/lib/style-compiler/index?{\"id\":\"data-v-1b50a5bf\",\"scoped\":false,\"hasInlineConfig\":true}!select2/dist/css/select2.min.css\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!vue-style-loader!css-loader!../../../../../node_modules/vue-loader/lib/style-compiler/index?{\"id\":\"data-v-1b50a5bf\",\"scoped\":false,\"hasInlineConfig\":true}!select2-bootstrap-theme/dist/select2-bootstrap.min.css\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(116),
  /* template */
  __webpack_require__(120),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\xampp\\htdocs\\__inventory_vue__-master\\resources\\assets\\js\\components\\Transfers\\Select2.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Select2.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1b50a5bf", Component.options)
  } else {
    hotAPI.reload("data-v-1b50a5bf", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('select', {
    staticClass: "input-sm",
    attrs: {
      "required": "",
      "name": _vm.name
    }
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1b50a5bf", module.exports)
  }
}

/***/ }),

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "loader"
    }
  })
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-60cce5ff", module.exports)
  }
}

/***/ }),

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(117);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(13)("2213fde4", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-60cce5ff\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Loader.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-60cce5ff\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Loader.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 138:
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


/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['item'],

    data: function data() {
        return {};
    }
});

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Transfers_Select2_vue__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Transfers_Select2_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Transfers_Select2_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Loader_Loader_vue__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Loader_Loader_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Loader_Loader_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Noty_notyAlert__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Uploader_Uploader_vue__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Uploader_Uploader_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Uploader_Uploader_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Filtering_brandStates_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Filtering_categoryStates_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Filtering_descriptionStates_js__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Filtering_ManufacturesStates_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Filtering_locationState_js__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Filtering_productStates_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Filtering_statusStates_js__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Filtering_fetchAll_js__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Filtering_fetchData_js__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Image_Thumbnail_vue__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Image_Thumbnail_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__Image_Thumbnail_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Transaction_Transaction_vue__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Transaction_Transaction_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__Transaction_Transaction_vue__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
    components: {
        Select2: __WEBPACK_IMPORTED_MODULE_0__Transfers_Select2_vue___default.a, Loader: __WEBPACK_IMPORTED_MODULE_1__Loader_Loader_vue___default.a, Uploader: __WEBPACK_IMPORTED_MODULE_3__Uploader_Uploader_vue___default.a, Thumbnail: __WEBPACK_IMPORTED_MODULE_13__Image_Thumbnail_vue___default.a, Transaction: __WEBPACK_IMPORTED_MODULE_14__Transaction_Transaction_vue___default.a
    },
    data: function data() {
        return {
            loading: true,
            dataFetch: __WEBPACK_IMPORTED_MODULE_12__Filtering_fetchData_js__["a" /* default */].data,
            hasError: false,
            postCheck: {
                checkInQuantity: 1
            },
            arrayUrl: {
                manufacture: "../../api/manufactures",
                description: "../../api/descriptions",
                location: '',
                category: "../../api/categories",
                model: "../../api/brands",
                status: "../../api/statuses"
            },
            arrayCollection: {
                model: __WEBPACK_IMPORTED_MODULE_4__Filtering_brandStates_js__["a" /* default */].data,
                categories: __WEBPACK_IMPORTED_MODULE_5__Filtering_categoryStates_js__["a" /* default */].data,
                products: __WEBPACK_IMPORTED_MODULE_9__Filtering_productStates_js__["a" /* default */].data,
                descriptions: __WEBPACK_IMPORTED_MODULE_6__Filtering_descriptionStates_js__["a" /* default */].data,
                manufactures: __WEBPACK_IMPORTED_MODULE_7__Filtering_ManufacturesStates_js__["a" /* default */].data,
                locations: __WEBPACK_IMPORTED_MODULE_8__Filtering_locationState_js__["a" /* default */].data,
                statuses: __WEBPACK_IMPORTED_MODULE_10__Filtering_statusStates_js__["a" /* default */].data

            },
            laravelToken: window.Laravel.csrfToken,
            layout: 'edit',
            transactionState: 'all',
            newFetch: {}

        };
    },
    mounted: function mounted() {
        var vm = this;
        vm.fetchAll(vm.$route.params.id);
    },

    computed: {
        transactionLists: function transactionLists() {
            var vm = this;
            var filterTransaction;
            if (vm.transactionState == 'out') {
                filterTransaction = _.filter(vm.dataFetch.dataFetch.checkouts, function (o) {
                    return o.in == null;
                });
            } else if (vm.transactionState == 'in') {
                filterTransaction = _.filter(vm.dataFetch.dataFetch.checkouts, function (o) {
                    return o.out == null;
                });
            } else if (vm.transactionState == 'all') {
                filterTransaction = vm.dataFetch.dataFetch.checkouts;
            }
            return filterTransaction;
        },
        statusesFetch: function statusesFetch() {
            var vm = this;
            return _.map(vm.arrayCollection.statuses.brands, function (data) {
                var pick = _.pick(data, 'name', 'id');
                var object = { id: pick.id, text: pick.name };
                return object;
            });
        },
        productFetch: function productFetch() {
            var vm = this;
            return _.map(vm.arrayCollection.products.brands, function (data) {
                return _.pick(data, 'serial', 'assetSerial');
            });
        },
        brandsFetch: function brandsFetch() {
            var vm = this;
            return _.map(vm.arrayCollection.model.brands, function (data) {
                var pick = _.pick(data, 'name', 'id');
                var object = { id: pick.id, text: pick.name };
                return object;
            });
        },
        categoriesFetch: function categoriesFetch() {
            var vm = this;
            return _.map(vm.arrayCollection.categories.categories, function (data) {
                var pick = _.pick(data, 'name', 'id');
                var object = { id: pick.id, text: pick.name };
                return object;
            });
        },
        descriptionsFetch: function descriptionsFetch() {
            var vm = this;
            return _.map(vm.arrayCollection.descriptions.descriptions, function (data) {
                var pick = _.pick(data, 'name', 'id');
                var object = { id: pick.id, text: pick.name };
                return object;
            });
        },
        locationsFetch: function locationsFetch() {
            var vm = this;
            return _.map(vm.arrayCollection.locations.locations, function (data) {
                var pick = _.pick(data, 'name', 'id');
                var object = { id: pick.id, text: pick.name };
                return object;
            });
        },
        manufacturesFetch: function manufacturesFetch() {
            var vm = this;
            return _.map(vm.arrayCollection.manufactures.brands, function (data) {
                var pick = _.pick(data, 'name', 'id');
                var object = { id: pick.id, text: pick.name };
                return object;
            });
        },
        validateSerialQuantity: function validateSerialQuantity() {
            var vm = this;
            return _.isEmpty(vm.dataFetch.dataFetch.serial) ? false : true;
        },
        removeProduct: function removeProduct() {
            var vm = this;
            return _.filter(vm.productFetch, function (num) {
                return num.serial !== vm.dataFetch.dataFetch.serialClone;
            });
        },
        validateDuplicate: function validateDuplicate() {
            var vm = this;
            var has = false;
            var pluckSerial = _.compact(_.map(vm.removeProduct, 'serial'));
            _.includes(pluckSerial, vm.dataFetch.dataFetch.serial) ? has = true : has = false;

            return vm.hasError = has;
        },
        validateDuplicateAssetSerial: function validateDuplicateAssetSerial() {
            var vm = this;
            var has = false;
            var pluckAssetSerial = _.compact(_.map(vm.removeProduct, 'assetSerial'));
            _.includes(pluckAssetSerial, vm.dataFetch.dataFetch.assetSerial) ? has = true : has = false;

            return has;
        }
    },
    methods: {
        fetchNew: function fetchNew(newData, type) {
            var vm = this;
            var pickData = _.pick(newData, ['id', 'name']);
            if (type == "Status") {
                __WEBPACK_IMPORTED_MODULE_10__Filtering_statusStates_js__["a" /* default */].dataReceive(pickData.id, pickData.name);
            }
        },
        objectReceive: function objectReceive(event) {
            var vm = this;
            var found = _.find(vm.arrayCollection.categories.categories, function (o) {
                return o.id == event;
            });

            vm.dataFetch.dataFetch.photo = _.isEmpty(found) ? '/images/images.jpg' : found.photo.name;
        },
        deleteData: function deleteData() {
            var _this = this;

            var vm = this;
            axios.delete('../../api/products/' + vm.$route.params.id).then(function (response) {
                __WEBPACK_IMPORTED_MODULE_2__Noty_notyAlert__["a" /* default */].notyAlert('success', 'Tech Item has deleted');
                _this.$router.push({ name: 'products' });
            }).catch(function (error) {
                __WEBPACK_IMPORTED_MODULE_2__Noty_notyAlert__["a" /* default */].notyAlert('error', 'something went wrong');
            });
        },
        postData: function postData() {
            var _object;

            var vm = this;
            var pick = _.pick(vm.dataFetch.dataFetch, 'serial', 'type', 'quantity', 'status', 'manufacture', 'description', 'location', 'category', 'model', 'assetSerial', 'quantityClone');
            var object = (_object = {
                serial: pick.serial,
                type: pick.type,
                quantity: pick.quantity,
                status_id: pick.status.id,
                manufacture_id: pick.manufacture.id,
                description_id: pick.description.id,
                location_id: pick.location.id,
                category_id: pick.category.id,
                photo: pick.category,
                brand_id: pick.model.id
            }, _defineProperty(_object, 'type', pick.type), _defineProperty(_object, '_token', vm.laravelToken), _defineProperty(_object, 'assetSerial', pick.assetSerial), _defineProperty(_object, 'quantityClone', pick.quantityClone), _object);
            axios.patch('../../api/products/' + vm.$route.params.id, { products: object }).then(function (response) {
                __WEBPACK_IMPORTED_MODULE_2__Noty_notyAlert__["a" /* default */].notyAlert('success', response.data.data.message);
            }).catch(function (error) {

                __WEBPACK_IMPORTED_MODULE_2__Noty_notyAlert__["a" /* default */].notyAlert('error', 'something went wrong');
            });
        },
        fetchAll: function fetchAll(dataId) {
            var that = this;
            that.loading = true;
            var data = dataId;
            //fetchAll.fetchAll()
            __WEBPACK_IMPORTED_MODULE_12__Filtering_fetchData_js__["a" /* default */].fetchData('../../api/products/' + data + '/edit');
        }
    }
});

/***/ }),

/***/ 150:
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


/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['transaction'],
    data: function data() {
        return {};
    }
});

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue2_dropzone__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue2_dropzone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue2_dropzone__);
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
            laravelToken: window.Laravel.csrfToken
        };
    },

    computed: {
        getId: function getId() {
            var vm = this;
            return '../../api/products/uploader/' + vm.$route.params.id;
        }
    },
    components: {
        Dropzone: __WEBPACK_IMPORTED_MODULE_0_vue2_dropzone___default.a
    },
    methods: {
        showSuccess: function showSuccess() {
            console.log('the file has been uploaded');
        }
    }
});

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Created by Edward Lance Lorilla on 5/20/2017.
 */
/* harmony default export */ __webpack_exports__["a"] = ({

    data: {
        dataFetch: {}
    },
    fetchData: function fetchData(data) {
        var vm = this;
        axios.get(data).then(function (response) {
            var _vm$data$dataFetch;

            var pick = _.pick(response.data.data, 'id', 'quantity', 'serial', 'type', 'assetSerial', 'manufacture', 'description', 'location', 'category', 'checkouts', 'brand', 'status', 'photos');
            vm.data.dataFetch = (_vm$data$dataFetch = {
                id: pick.id,
                serial: pick.serial,
                assetSerial: pick.assetSerial,
                quantity: pick.quantity,
                type: pick.type,
                description: {
                    id: pick.description ? pick.description.id : null,
                    text: pick.description ? pick.description.name : null
                },
                status: {
                    id: pick.status ? pick.status.id : null,
                    text: pick.status ? pick.status.name : null
                },
                manufacture: {
                    id: pick.manufacture ? pick.manufacture.id : null,
                    text: pick.manufacture ? pick.manufacture.name : null
                },
                location: {
                    id: pick.location ? pick.location.id : null,
                    text: pick.location ? pick.location.name : null
                },
                category: {
                    id: pick.category ? pick.category.id : null,
                    text: pick.category ? pick.category.name : null
                },
                model: {
                    id: pick.brand ? pick.brand.id : null,
                    text: pick.brand ? pick.brand.name : null
                },
                photo: pick.category ? pick.category.photo ? pick.category.photo.name : '/images/images.jpg' : '/images/images.jpg',
                photos: _.map(pick.photos, function (p) {
                    return _.pick(p, 'id', 'name');
                }),
                checkouts: _.map(pick.checkouts, function (p) {
                    return _.pick(p, 'id', 'created_at', 'updated_at', 'in', 'out');
                })
            }, _defineProperty(_vm$data$dataFetch, 'status', pick.status), _defineProperty(_vm$data$dataFetch, 'serialClone', pick.serial), _defineProperty(_vm$data$dataFetch, 'quantityClone', pick.quantity), _defineProperty(_vm$data$dataFetch, 'assetSerialClone', pick.assetSerial), _vm$data$dataFetch);
        });
    }
});

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
exports.push([module.i, "\n.noty_layout_mixin, #noty_layout__top, #noty_layout__topLeft, #noty_layout__topCenter, #noty_layout__topRight, #noty_layout__bottom, #noty_layout__bottomLeft, #noty_layout__bottomCenter, #noty_layout__bottomRight, #noty_layout__center, #noty_layout__centerLeft, #noty_layout__centerRight {\n  position: fixed;\n  margin: 0;\n  padding: 0;\n  z-index: 9999999;\n  transform: translateZ(0) scale(1, 1);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  -webkit-font-smoothing: subpixel-antialiased;\n  filter: blur(0);\n  -webkit-filter: blur(0);\n  max-width: 90%;\n}\n#noty_layout__top {\n  top: 0;\n  left: 5%;\n  width: 90%;\n}\n#noty_layout__topLeft {\n  top: 20px;\n  left: 20px;\n  width: 325px;\n}\n#noty_layout__topCenter {\n  top: 5%;\n  left: 50%;\n  width: 325px;\n  transform: translate(calc(-50% - .5px)) translateZ(0) scale(1, 1);\n}\n#noty_layout__topRight {\n  top: 20px;\n  right: 20px;\n  width: 325px;\n}\n#noty_layout__bottom {\n  bottom: 0;\n  left: 5%;\n  width: 90%;\n}\n#noty_layout__bottomLeft {\n  bottom: 20px;\n  left: 20px;\n  width: 325px;\n}\n#noty_layout__bottomCenter {\n  bottom: 5%;\n  left: 50%;\n  width: 325px;\n  transform: translate(calc(-50% - .5px)) translateZ(0) scale(1, 1);\n}\n#noty_layout__bottomRight {\n  bottom: 20px;\n  right: 20px;\n  width: 325px;\n}\n#noty_layout__center {\n  top: 50%;\n  left: 50%;\n  width: 325px;\n  transform: translate(calc(-50% - .5px), calc(-50% - .5px)) translateZ(0) scale(1, 1);\n}\n#noty_layout__centerLeft {\n  top: 50%;\n  left: 20px;\n  width: 325px;\n  transform: translate(0, calc(-50% - .5px)) translateZ(0) scale(1, 1);\n}\n#noty_layout__centerRight {\n  top: 50%;\n  right: 20px;\n  width: 325px;\n  transform: translate(0, calc(-50% - .5px)) translateZ(0) scale(1, 1);\n}\n.noty_progressbar {\n  display: none;\n}\n.noty_has_timeout.noty_has_progressbar .noty_progressbar {\n  display: block;\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  height: 3px;\n  width: 100%;\n  background-color: #646464;\n  opacity: 0.2;\n  filter: alpha(opacity=10);\n}\n.noty_bar {\n  -webkit-backface-visibility: hidden;\n  transform: translate(0, 0) scale(1, 1);\n  -webkit-font-smoothing: subpixel-antialiased;\n  overflow: hidden;\n}\n.noty_effects_open {\n  opacity: 0;\n  transform: translate(50%);\n  animation: noty_anim_in 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n  animation-fill-mode: forwards;\n}\n.noty_effects_close {\n  animation: noty_anim_out 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n  animation-fill-mode: forwards;\n}\n.noty_fix_effects_height {\n  animation: noty_anim_height 75ms ease-out;\n}\n.noty_close_with_click {\n  cursor: pointer;\n}\n.noty_close_button {\n  position: absolute;\n  top: 2px;\n  right: 2px;\n  font-weight: bold;\n  width: 20px;\n  height: 20px;\n  text-align: center;\n  line-height: 20px;\n  background-color: rgba(0, 0, 0, 0.05);\n  border-radius: 2px;\n  cursor: pointer;\n  transition: all .2s ease-out;\n}\n.noty_close_button:hover {\n  background-color: rgba(0, 0, 0, 0.1);\n}\n.noty_modal {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background-color: #000;\n  z-index: 10000;\n  opacity: .3;\n  left: 0;\n  top: 0;\n}\n.noty_modal.noty_modal_open {\n  opacity: 0;\n  animation: noty_modal_in .3s ease-out;\n}\n.noty_modal.noty_modal_close {\n  animation: noty_modal_out .3s ease-out;\n  animation-fill-mode: forwards;\n}\n@keyframes noty_modal_in {\n100% {\n    opacity: .3;\n}\n}\n@keyframes noty_modal_out {\n100% {\n    opacity: 0;\n}\n}\n@keyframes noty_modal_out {\n100% {\n    opacity: 0;\n}\n}\n@keyframes noty_anim_in {\n100% {\n    transform: translate(0);\n    opacity: 1;\n}\n}\n@keyframes noty_anim_out {\n100% {\n    transform: translate(50%);\n    opacity: 0;\n}\n}\n@keyframes noty_anim_height {\n100% {\n    height: 0;\n}\n}\n.noty_theme__relax.noty_bar {\n  margin: 4px 0;\n  overflow: hidden;\n  border-radius: 2px;\n  position: relative;\n}\n.noty_theme__relax.noty_bar .noty_body {\n    padding: 10px;\n}\n.noty_theme__relax.noty_bar .noty_buttons {\n    border-top: 1px solid #e7e7e7;\n    padding: 5px 10px;\n}\n.noty_theme__relax.noty_type__alert,\n.noty_theme__relax.noty_type__notification {\n  background-color: #fff;\n  border: 1px solid #dedede;\n  color: #444;\n}\n.noty_theme__relax.noty_type__warning {\n  background-color: #FFEAA8;\n  border: 1px solid #FFC237;\n  color: #826200;\n}\n.noty_theme__relax.noty_type__warning .noty_buttons {\n    border-color: #dfaa30;\n}\n.noty_theme__relax.noty_type__error {\n  background-color: #FF8181;\n  border: 1px solid #e25353;\n  color: #FFF;\n}\n.noty_theme__relax.noty_type__error .noty_buttons {\n    border-color: darkred;\n}\n.noty_theme__relax.noty_type__info,\n.noty_theme__relax.noty_type__information {\n  background-color: #78C5E7;\n  border: 1px solid #3badd6;\n  color: #FFF;\n}\n.noty_theme__relax.noty_type__info .noty_buttons,\n  .noty_theme__relax.noty_type__information .noty_buttons {\n    border-color: #0B90C4;\n}\n.noty_theme__relax.noty_type__success {\n  background-color: #BCF5BC;\n  border: 1px solid #7cdd77;\n  color: darkgreen;\n}\n.noty_theme__relax.noty_type__success .noty_buttons {\n    border-color: #50C24E;\n}\n.noty_theme__metroui.noty_bar {\n  margin: 4px 0;\n  overflow: hidden;\n  position: relative;\n  box-shadow: rgba(0, 0, 0, 0.298039) 0 0 5px 0;\n}\n.noty_theme__metroui.noty_bar .noty_progressbar {\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    height: 3px;\n    width: 100%;\n    background-color: #000;\n    opacity: 0.2;\n    filter: alpha(opacity=20);\n}\n.noty_theme__metroui.noty_bar .noty_body {\n    padding: 1.25em;\n    font-size: 14px;\n}\n.noty_theme__metroui.noty_bar .noty_buttons {\n    padding: 0 10px .5em 10px;\n}\n.noty_theme__metroui.noty_type__alert,\n.noty_theme__metroui.noty_type__notification {\n  background-color: #fff;\n  color: #1d1d1d;\n}\n.noty_theme__metroui.noty_type__warning {\n  background-color: #FA6800;\n  color: #fff;\n}\n.noty_theme__metroui.noty_type__error {\n  background-color: #CE352C;\n  color: #FFF;\n}\n.noty_theme__metroui.noty_type__info,\n.noty_theme__metroui.noty_type__information {\n  background-color: #1BA1E2;\n  color: #FFF;\n}\n.noty_theme__metroui.noty_type__success {\n  background-color: #60A917;\n  color: #fff;\n}\n.noty_theme__mint.noty_bar {\n  margin: 4px 0;\n  overflow: hidden;\n  border-radius: 2px;\n  position: relative;\n}\n.noty_theme__mint.noty_bar .noty_body {\n    padding: 10px;\n    font-size: 14px;\n}\n.noty_theme__mint.noty_bar .noty_buttons {\n    padding: 10px;\n}\n.noty_theme__mint.noty_type__alert,\n.noty_theme__mint.noty_type__notification {\n  background-color: #fff;\n  border-bottom: 1px solid #D1D1D1;\n  color: #2F2F2F;\n}\n.noty_theme__mint.noty_type__warning {\n  background-color: #FFAE42;\n  border-bottom: 1px solid #E89F3C;\n  color: #fff;\n}\n.noty_theme__mint.noty_type__error {\n  background-color: #DE636F;\n  border-bottom: 1px solid #CA5A65;\n  color: #fff;\n}\n.noty_theme__mint.noty_type__info,\n.noty_theme__mint.noty_type__information {\n  background-color: #7F7EFF;\n  border-bottom: 1px solid #7473E8;\n  color: #fff;\n}\n.noty_theme__mint.noty_type__success {\n  background-color: #AFC765;\n  border-bottom: 1px solid #A0B55C;\n  color: #fff;\n}\n.noty_theme__sunset.noty_bar {\n  margin: 4px 0;\n  overflow: hidden;\n  border-radius: 2px;\n  position: relative;\n}\n.noty_theme__sunset.noty_bar .noty_body {\n    padding: 10px;\n    font-size: 14px;\n    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);\n}\n.noty_theme__sunset.noty_bar .noty_buttons {\n    padding: 10px;\n}\n.noty_theme__sunset.noty_type__alert,\n.noty_theme__sunset.noty_type__notification {\n  background-color: #073B4C;\n  color: #fff;\n}\n.noty_theme__sunset.noty_type__alert .noty_progressbar,\n  .noty_theme__sunset.noty_type__notification .noty_progressbar {\n    background-color: #fff;\n}\n.noty_theme__sunset.noty_type__warning {\n  background-color: #FFD166;\n  color: #fff;\n}\n.noty_theme__sunset.noty_type__error {\n  background-color: #EF476F;\n  color: #fff;\n}\n.noty_theme__sunset.noty_type__error .noty_progressbar {\n    opacity: .4;\n}\n.noty_theme__sunset.noty_type__info,\n.noty_theme__sunset.noty_type__information {\n  background-color: #118AB2;\n  color: #fff;\n}\n.noty_theme__sunset.noty_type__info .noty_progressbar,\n  .noty_theme__sunset.noty_type__information .noty_progressbar {\n    opacity: .6;\n}\n.noty_theme__sunset.noty_type__success {\n  background-color: #06D6A0;\n  color: #fff;\n}\n.noty_theme__bootstrap-v3.noty_bar {\n  margin: 4px 0;\n  overflow: hidden;\n  position: relative;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n.noty_theme__bootstrap-v3.noty_bar .noty_body {\n    padding: 15px;\n}\n.noty_theme__bootstrap-v3.noty_bar .noty_buttons {\n    padding: 10px;\n}\n.noty_theme__bootstrap-v3.noty_bar .noty_close_button {\n    font-size: 21px;\n    font-weight: 700;\n    line-height: 1;\n    color: #000;\n    text-shadow: 0 1px 0 #fff;\n    filter: alpha(opacity=20);\n    opacity: .2;\n    background: transparent;\n}\n.noty_theme__bootstrap-v3.noty_bar .noty_close_button:hover {\n    background: transparent;\n    text-decoration: none;\n    cursor: pointer;\n    filter: alpha(opacity=50);\n    opacity: .5;\n}\n.noty_theme__bootstrap-v3.noty_type__alert,\n.noty_theme__bootstrap-v3.noty_type__notification {\n  background-color: #fff;\n  color: inherit;\n}\n.noty_theme__bootstrap-v3.noty_type__warning {\n  background-color: #fcf8e3;\n  color: #8a6d3b;\n  border-color: #faebcc;\n}\n.noty_theme__bootstrap-v3.noty_type__error {\n  background-color: #f2dede;\n  color: #a94442;\n  border-color: #ebccd1;\n}\n.noty_theme__bootstrap-v3.noty_type__info,\n.noty_theme__bootstrap-v3.noty_type__information {\n  background-color: #d9edf7;\n  color: #31708f;\n  border-color: #bce8f1;\n}\n.noty_theme__bootstrap-v3.noty_type__success {\n  background-color: #dff0d8;\n  color: #3c763d;\n  border-color: #d6e9c6;\n}\n.noty_theme__bootstrap-v4.noty_bar {\n  margin: 4px 0;\n  overflow: hidden;\n  position: relative;\n  border: 1px solid transparent;\n  border-radius: .25rem;\n}\n.noty_theme__bootstrap-v4.noty_bar .noty_body {\n    padding: .75rem 1.25rem;\n}\n.noty_theme__bootstrap-v4.noty_bar .noty_buttons {\n    padding: 10px;\n}\n.noty_theme__bootstrap-v4.noty_bar .noty_close_button {\n    font-size: 1.5rem;\n    font-weight: 700;\n    line-height: 1;\n    color: #000;\n    text-shadow: 0 1px 0 #fff;\n    filter: alpha(opacity=20);\n    opacity: .5;\n    background: transparent;\n}\n.noty_theme__bootstrap-v4.noty_bar .noty_close_button:hover {\n    background: transparent;\n    text-decoration: none;\n    cursor: pointer;\n    filter: alpha(opacity=50);\n    opacity: .75;\n}\n.noty_theme__bootstrap-v4.noty_type__alert,\n.noty_theme__bootstrap-v4.noty_type__notification {\n  background-color: #fff;\n  color: inherit;\n}\n.noty_theme__bootstrap-v4.noty_type__warning {\n  background-color: #fcf8e3;\n  color: #8a6d3b;\n  border-color: #faebcc;\n}\n.noty_theme__bootstrap-v4.noty_type__error {\n  background-color: #f2dede;\n  color: #a94442;\n  border-color: #ebccd1;\n}\n.noty_theme__bootstrap-v4.noty_type__info,\n.noty_theme__bootstrap-v4.noty_type__information {\n  background-color: #d9edf7;\n  color: #31708f;\n  border-color: #bce8f1;\n}\n.noty_theme__bootstrap-v4.noty_type__success {\n  background-color: #dff0d8;\n  color: #3c763d;\n  border-color: #d6e9c6;\n}\n.noty_theme__semanticui.noty_bar {\n  margin: 4px 0;\n  overflow: hidden;\n  position: relative;\n  border: 1px solid transparent;\n  font-size: 1em;\n  border-radius: .28571429rem;\n  box-shadow: 0 0 0 1px rgba(34, 36, 38, 0.22) inset, 0 0 0 0 transparent;\n}\n.noty_theme__semanticui.noty_bar .noty_body {\n    padding: 1em 1.5em;\n    line-height: 1.4285em;\n}\n.noty_theme__semanticui.noty_bar .noty_buttons {\n    padding: 10px;\n}\n.noty_theme__semanticui.noty_type__alert,\n.noty_theme__semanticui.noty_type__notification {\n  background-color: #f8f8f9;\n  color: rgba(0, 0, 0, 0.87);\n}\n.noty_theme__semanticui.noty_type__warning {\n  background-color: #fffaf3;\n  color: #573a08;\n  box-shadow: 0 0 0 1px #c9ba9b inset, 0 0 0 0 transparent;\n}\n.noty_theme__semanticui.noty_type__error {\n  background-color: #fff6f6;\n  color: #9f3a38;\n  box-shadow: 0 0 0 1px #e0b4b4 inset, 0 0 0 0 transparent;\n}\n.noty_theme__semanticui.noty_type__info,\n.noty_theme__semanticui.noty_type__information {\n  background-color: #f8ffff;\n  color: #276f86;\n  box-shadow: 0 0 0 1px #a9d5de inset, 0 0 0 0 transparent;\n}\n.noty_theme__semanticui.noty_type__success {\n  background-color: #fcfff5;\n  color: #2c662d;\n  box-shadow: 0 0 0 1px #a3c293 inset, 0 0 0 0 transparent;\n}\n.noty_theme__nest.noty_bar {\n  margin: 0 0 15px 0;\n  overflow: hidden;\n  border-radius: 2px;\n  position: relative;\n  box-shadow: rgba(0, 0, 0, 0.098039) 5px 4px 10px 0;\n}\n.noty_theme__nest.noty_bar .noty_body {\n    padding: 10px;\n    font-size: 14px;\n    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);\n}\n.noty_theme__nest.noty_bar .noty_buttons {\n    padding: 10px;\n}\n.noty_layout .noty_theme__nest.noty_bar {\n  z-index: 5;\n}\n.noty_layout .noty_theme__nest.noty_bar:nth-child(2) {\n  position: absolute;\n  top: 0;\n  margin-top: 4px;\n  margin-right: -4px;\n  margin-left: 4px;\n  z-index: 4;\n  width: 100%;\n}\n.noty_layout .noty_theme__nest.noty_bar:nth-child(3) {\n  position: absolute;\n  top: 0;\n  margin-top: 8px;\n  margin-right: -8px;\n  margin-left: 8px;\n  z-index: 3;\n  width: 100%;\n}\n.noty_layout .noty_theme__nest.noty_bar:nth-child(4) {\n  position: absolute;\n  top: 0;\n  margin-top: 12px;\n  margin-right: -12px;\n  margin-left: 12px;\n  z-index: 2;\n  width: 100%;\n}\n.noty_layout .noty_theme__nest.noty_bar:nth-child(5) {\n  position: absolute;\n  top: 0;\n  margin-top: 16px;\n  margin-right: -16px;\n  margin-left: 16px;\n  z-index: 1;\n  width: 100%;\n}\n.noty_layout .noty_theme__nest.noty_bar:nth-child(n+6) {\n  position: absolute;\n  top: 0;\n  margin-top: 20px;\n  margin-right: -20px;\n  margin-left: 20px;\n  z-index: -1;\n  width: 100%;\n}\n#noty_layout__bottomLeft .noty_theme__nest.noty_bar:nth-child(2),\n#noty_layout__topLeft .noty_theme__nest.noty_bar:nth-child(2) {\n  margin-top: 4px;\n  margin-left: -4px;\n  margin-right: 4px;\n}\n#noty_layout__bottomLeft .noty_theme__nest.noty_bar:nth-child(3),\n#noty_layout__topLeft .noty_theme__nest.noty_bar:nth-child(3) {\n  margin-top: 8px;\n  margin-left: -8px;\n  margin-right: 8px;\n}\n#noty_layout__bottomLeft .noty_theme__nest.noty_bar:nth-child(4),\n#noty_layout__topLeft .noty_theme__nest.noty_bar:nth-child(4) {\n  margin-top: 12px;\n  margin-left: -12px;\n  margin-right: 12px;\n}\n#noty_layout__bottomLeft .noty_theme__nest.noty_bar:nth-child(5),\n#noty_layout__topLeft .noty_theme__nest.noty_bar:nth-child(5) {\n  margin-top: 16px;\n  margin-left: -16px;\n  margin-right: 16px;\n}\n#noty_layout__bottomLeft .noty_theme__nest.noty_bar:nth-child(n+6),\n#noty_layout__topLeft .noty_theme__nest.noty_bar:nth-child(n+6) {\n  margin-top: 20px;\n  margin-left: -20px;\n  margin-right: 20px;\n}\n.noty_theme__nest.noty_type__alert,\n.noty_theme__nest.noty_type__notification {\n  background-color: #073B4C;\n  color: #fff;\n}\n.noty_theme__nest.noty_type__alert .noty_progressbar,\n  .noty_theme__nest.noty_type__notification .noty_progressbar {\n    background-color: #fff;\n}\n.noty_theme__nest.noty_type__warning {\n  background-color: #FFD166;\n  color: #fff;\n}\n.noty_theme__nest.noty_type__error {\n  background-color: #EF476F;\n  color: #fff;\n}\n.noty_theme__nest.noty_type__error .noty_progressbar {\n    opacity: .4;\n}\n.noty_theme__nest.noty_type__info,\n.noty_theme__nest.noty_type__information {\n  background-color: #118AB2;\n  color: #fff;\n}\n.noty_theme__nest.noty_type__info .noty_progressbar,\n  .noty_theme__nest.noty_type__information .noty_progressbar {\n    opacity: .6;\n}\n.noty_theme__nest.noty_type__success {\n  background-color: #06D6A0;\n  color: #fff;\n}\n.noty_theme__light.noty_bar {\n  margin: 4px 0;\n  overflow: hidden;\n  border-radius: 2px;\n  position: relative;\n}\n.noty_theme__light.noty_bar .noty_body {\n    padding: 10px;\n}\n.noty_theme__light.noty_bar .noty_buttons {\n    border-top: 1px solid #e7e7e7;\n    padding: 5px 10px;\n}\n.noty_theme__light.noty_type__alert,\n.noty_theme__light.noty_type__notification {\n  background-color: #fff;\n  border: 1px solid #dedede;\n  color: #444;\n}\n.noty_theme__light.noty_type__warning {\n  background-color: #FFEAA8;\n  border: 1px solid #FFC237;\n  color: #826200;\n}\n.noty_theme__light.noty_type__warning .noty_buttons {\n    border-color: #dfaa30;\n}\n.noty_theme__light.noty_type__error {\n  background-color: #ED7000;\n  border: 1px solid #e25353;\n  color: #FFF;\n}\n.noty_theme__light.noty_type__error .noty_buttons {\n    border-color: darkred;\n}\n.noty_theme__light.noty_type__info,\n.noty_theme__light.noty_type__information {\n  background-color: #78C5E7;\n  border: 1px solid #3badd6;\n  color: #FFF;\n}\n.noty_theme__light.noty_type__info .noty_buttons,\n  .noty_theme__light.noty_type__information .noty_buttons {\n    border-color: #0B90C4;\n}\n.noty_theme__light.noty_type__success {\n  background-color: #57C880;\n  border: 1px solid #7cdd77;\n  color: darkgreen;\n}\n.noty_theme__light.noty_type__success .noty_buttons {\n    border-color: #50C24E;\n}", ""]);

/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(138),
  /* template */
  __webpack_require__(201),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\xampp\\htdocs\\__inventory_vue__-master\\resources\\assets\\js\\components\\Image\\Thumbnail.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Thumbnail.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d212ba30", Component.options)
  } else {
    hotAPI.reload("data-v-d212ba30", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(150),
  /* template */
  __webpack_require__(176),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\xampp\\htdocs\\__inventory_vue__-master\\resources\\assets\\js\\components\\Transaction\\Transaction.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Transaction.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-01190c5d", Component.options)
  } else {
    hotAPI.reload("data-v-01190c5d", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(154),
  /* template */
  __webpack_require__(181),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\xampp\\htdocs\\__inventory_vue__-master\\resources\\assets\\js\\components\\Uploader\\Uploader.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Uploader.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-160bd95f", Component.options)
  } else {
    hotAPI.reload("data-v-160bd95f", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('td', [_vm._v(_vm._s(_vm.transaction.in === null ? 'OUT' : 'IN'))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.transaction.in === null ? _vm.transaction.out : _vm.transaction.in))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.transaction.created_at))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.transaction.updated_at))])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-01190c5d", module.exports)
  }
}

/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('dropzone', {
    attrs: {
      "id": "myVueDropzone",
      "url": _vm.getId,
      "name": "file"
    },
    on: {
      "vdropzone-success": _vm.showSuccess
    }
  }, [_c('input', {
    attrs: {
      "type": "hidden",
      "name": "token"
    },
    domProps: {
      "value": _vm.laravelToken
    }
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-160bd95f", module.exports)
  }
}

/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "col-lg-3 col-sm-4 col-xs-6"
  }, [_c('a', {
    staticClass: "thumbnail"
  }, [_c('img', {
    staticClass: "img-responsive",
    attrs: {
      "src": _vm.item.name
    }
  })])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-d212ba30", module.exports)
  }
}

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-4"
  }, [_c('div', {
    staticClass: "panel panel-default"
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_vm._v(_vm._s(_vm.dataFetch.dataFetch.serial))]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('img', {
    attrs: {
      "src": _vm.dataFetch.dataFetch.photo
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "list-group"
  }, [_c('button', {
    staticClass: "list-group-item",
    class: {
      'active': _vm.layout == 'upload'
    },
    attrs: {
      "type": "button"
    },
    on: {
      "click": function($event) {
        _vm.layout = 'upload'
      }
    }
  }, [_vm._v(_vm._s(_vm.dataFetch.dataFetch.serial) + " Images\n                            ")]), _vm._v(" "), _c('button', {
    staticClass: "list-group-item",
    class: {
      'active': _vm.layout == 'edit'
    },
    attrs: {
      "type": "button"
    },
    on: {
      "click": function($event) {
        _vm.layout = 'edit'
      }
    }
  }, [_vm._v(_vm._s(_vm.dataFetch.dataFetch.serial) + " Edit\n                            ")]), _vm._v(" "), _c('button', {
    staticClass: "list-group-item",
    class: {
      'active': _vm.layout == 'transaction'
    },
    attrs: {
      "type": "button"
    },
    on: {
      "click": function($event) {
        _vm.layout = 'transaction'
      }
    }
  }, [_vm._v(_vm._s(_vm.dataFetch.dataFetch.serial) + " Edit\n                            ")])]), _vm._v(" "), _c('div', {
    staticClass: "panel-footer"
  }, [_c('div', {
    staticClass: "input-group"
  }, [_c('span', {
    staticClass: "input-group-btn"
  }, [_c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function($event) {
        return _vm.checkIn()
      }
    }
  }, [_c('span', {
    staticClass: "glyphicon glyphicon-upload"
  }), _vm._v(" Check in")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.number",
      value: (_vm.postCheck.checkInQuantity),
      expression: "postCheck.checkInQuantity",
      modifiers: {
        "number": true
      }
    }],
    staticClass: "form-control",
    attrs: {
      "type": "number",
      "placeholder": "Increment Quantity"
    },
    domProps: {
      "value": (_vm.postCheck.checkInQuantity)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.postCheck, "checkInQuantity", _vm._n($event.target.value))
      },
      "blur": function($event) {
        return _vm.$forceUpdate()
      }
    }
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-8"
  }, [_c('div', {
    staticClass: "panel panel-default"
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_vm._v("Edit " + _vm._s(_vm.dataFetch.dataFetch.serial))]), _vm._v(" "), (_vm.layout == 'edit') ? _c('div', {
    staticClass: "panel-body"
  }, [_c('input', {
    attrs: {
      "name": "_token",
      "type": "hidden"
    },
    domProps: {
      "value": _vm.laravelToken
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.dataFetch.dataFetch.type),
      expression: "dataFetch.dataFetch.type"
    }],
    attrs: {
      "type": "checkbox"
    },
    domProps: {
      "checked": Array.isArray(_vm.dataFetch.dataFetch.type) ? _vm._i(_vm.dataFetch.dataFetch.type, null) > -1 : (_vm.dataFetch.dataFetch.type)
    },
    on: {
      "change": function($event) {
        var $$a = _vm.dataFetch.dataFetch.type,
          $$el = $event.target,
          $$c = $$el.checked ? (true) : (false);
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.$set(_vm.dataFetch.dataFetch, "type", $$a.concat([$$v])))
          } else {
            $$i > -1 && (_vm.$set(_vm.dataFetch.dataFetch, "type", $$a.slice(0, $$i).concat($$a.slice($$i + 1))))
          }
        } else {
          _vm.$set(_vm.dataFetch.dataFetch, "type", $$c)
        }
      }
    }
  }), _vm._v(" "), _c('label', [_vm._v("Type: " + _vm._s(_vm.dataFetch.dataFetch.type ? 'Non-Consumable' : 'Consumable') + " ")])]), _vm._v(" "), _c('div', {
    staticClass: "form-group",
    class: {
      'has-error': _vm.validateDuplicate
    }
  }, [_c('label', [_vm._v(_vm._s(_vm.dataFetch.dataFetch.type ? 'Serial' : 'Name'))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.dataFetch.dataFetch.serial),
      expression: "dataFetch.dataFetch.serial"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": "Serial"
    },
    domProps: {
      "value": (_vm.dataFetch.dataFetch.serial)
    },
    on: {
      "keydown": function($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) { return null; }
        $event.preventDefault();
        return _vm.postData($event)
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.dataFetch.dataFetch, "serial", $event.target.value)
      }
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "help-block",
    class: {
      'hidden': !(_vm.validateDuplicate)
    }
  }, [_vm._v("Duplicated Serial Entry")])]), _vm._v(" "), _c('div', {
    staticClass: "form-group",
    class: {
      'has-error': _vm.validateDuplicateAssetSerial
    }
  }, [_c('label', [_vm._v("Asset Serial")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.dataFetch.dataFetch.assetSerial),
      expression: "dataFetch.dataFetch.assetSerial"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": "Asset Serial"
    },
    domProps: {
      "value": (_vm.dataFetch.dataFetch.assetSerial)
    },
    on: {
      "keydown": function($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) { return null; }
        $event.preventDefault();
        return _vm.postData($event)
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.dataFetch.dataFetch, "assetSerial", $event.target.value)
      }
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "help-block",
    class: {
      'hidden': !(_vm.validateDuplicateAssetSerial)
    }
  }, [_vm._v("Duplicated Asset Serial Entry")])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Quantity")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.number",
      value: (_vm.dataFetch.dataFetch.type ? (_vm.validateSerialQuantity ? _vm.dataFetch.dataFetch.quantity = 1 : _vm.dataFetch.dataFetch.quantity) : _vm.dataFetch.dataFetch.quantity),
      expression: "dataFetch.dataFetch.type ? (validateSerialQuantity ? dataFetch.dataFetch.quantity = 1 : dataFetch.dataFetch.quantity) :  dataFetch.dataFetch.quantity",
      modifiers: {
        "number": true
      }
    }],
    staticClass: "form-control",
    attrs: {
      "min": "1",
      "disabled": _vm.dataFetch.dataFetch.type ? (_vm.validateSerialQuantity ? _vm.dataFetch.dataFetch.quantity = 1 : _vm.dataFetch.dataFetch.quantity) : false,
      "type": "number"
    },
    domProps: {
      "value": (_vm.dataFetch.dataFetch.type ? (_vm.validateSerialQuantity ? _vm.dataFetch.dataFetch.quantity = 1 : _vm.dataFetch.dataFetch.quantity) : _vm.dataFetch.dataFetch.quantity)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.dataFetch.dataFetch.type ? (_vm.validateSerialQuantity ? _vm.dataFetch.dataFetch.quantity = 1 : _vm.dataFetch.dataFetch.quantity) : _vm.dataFetch.dataFetch, "quantity", _vm._n($event.target.value))
      },
      "blur": function($event) {
        return _vm.$forceUpdate()
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Manufacture")]), _vm._v(" "), _c('select2', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "options": _vm.manufacturesFetch,
      "required": "",
      "urlName": _vm.arrayUrl.manufacture
    },
    on: {
      "modelId": function($event) {
        _vm.dataFetch.dataFetch.manufacture.id = $event.id
      }
    },
    model: {
      value: (_vm.dataFetch.dataFetch.manufacture.id),
      callback: function($$v) {
        _vm.$set(_vm.dataFetch.dataFetch.manufacture, "id", _vm._n($$v))
      },
      expression: "dataFetch.dataFetch.manufacture.id"
    }
  }, [_c('option', {
    attrs: {
      "disabled": "",
      "value": "0"
    }
  }, [_vm._v("Select one")])])], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Description")]), _vm._v(" "), _c('select2', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "options": _vm.descriptionsFetch,
      "required": "",
      "urlName": _vm.arrayUrl.description
    },
    on: {
      "modelId": function($event) {
        _vm.dataFetch.dataFetch.description.id = $event.id
      }
    },
    model: {
      value: (_vm.dataFetch.dataFetch.description.id),
      callback: function($$v) {
        _vm.$set(_vm.dataFetch.dataFetch.description, "id", _vm._n($$v))
      },
      expression: "dataFetch.dataFetch.description.id"
    }
  }, [_c('option', {
    attrs: {
      "disabled": "",
      "value": "0"
    }
  }, [_vm._v("Select one")])])], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Location")]), _vm._v(" "), _c('select2', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "options": _vm.locationsFetch,
      "required": "",
      "urlName": _vm.arrayUrl.location
    },
    model: {
      value: (_vm.dataFetch.dataFetch.location.id),
      callback: function($$v) {
        _vm.$set(_vm.dataFetch.dataFetch.location, "id", _vm._n($$v))
      },
      expression: "dataFetch.dataFetch.location.id"
    }
  }, [_c('option', {
    attrs: {
      "disabled": "",
      "value": "0"
    }
  }, [_vm._v("Select one")])])], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Category")]), _vm._v(" "), _c('select2', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "options": _vm.categoriesFetch,
      "required": "",
      "urlName": _vm.arrayUrl.category
    },
    on: {
      "modelId": function($event) {
        _vm.dataFetch.dataFetch.category.id = $event.id
      },
      "input": function($event) {
        return _vm.objectReceive($event)
      }
    },
    model: {
      value: (_vm.dataFetch.dataFetch.category.id),
      callback: function($$v) {
        _vm.$set(_vm.dataFetch.dataFetch.category, "id", _vm._n($$v))
      },
      expression: "dataFetch.dataFetch.category.id"
    }
  }, [_c('option', {
    attrs: {
      "disabled": "",
      "value": "0"
    }
  }, [_vm._v("Select one")])])], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Model")]), _vm._v(" "), _c('select2', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "options": _vm.brandsFetch,
      "required": "",
      "urlName": _vm.arrayUrl.model
    },
    on: {
      "modelId": function($event) {
        _vm.dataFetch.dataFetch.model.id = $event.id
      }
    },
    model: {
      value: (_vm.dataFetch.dataFetch.model.id),
      callback: function($$v) {
        _vm.$set(_vm.dataFetch.dataFetch.model, "id", _vm._n($$v))
      },
      expression: "dataFetch.dataFetch.model.id"
    }
  }, [_c('option', {
    attrs: {
      "disabled": "",
      "value": "0"
    }
  }, [_vm._v("Select one")])])], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v("Status")]), _vm._v(" "), _c('select2', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "options": _vm.statusesFetch,
      "required": "",
      "urlName": _vm.arrayUrl.status
    },
    on: {
      "modelId": function($event) {
        _vm.dataFetch.dataFetch.status.id = $event.id;
        _vm.fetchNew($event, 'Status')
      }
    },
    model: {
      value: (_vm.dataFetch.dataFetch.status.id),
      callback: function($$v) {
        _vm.$set(_vm.dataFetch.dataFetch.status, "id", _vm._n($$v))
      },
      expression: "dataFetch.dataFetch.status.id"
    }
  }, [_c('option', {
    attrs: {
      "disabled": "",
      "value": "0"
    }
  }, [_vm._v("Select one")])])], 1)]) : _vm._e(), _vm._v(" "), (_vm.layout == 'upload') ? _c('div', {
    staticClass: "panel-body"
  }, [_c('uploader'), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, _vm._l((_vm.dataFetch.dataFetch.photos), function(item, key, index) {
    return _c('thumbnail', {
      key: item.id,
      attrs: {
        "item": item
      }
    })
  }), 1)], 1) : _vm._e(), _vm._v(" "), (_vm.layout == 'transaction') ? _c('div', [_c('button', {
    staticClass: "btn btn-primary",
    on: {
      "click": function($event) {
        _vm.transactionState = 'all'
      }
    }
  }, [_vm._v("All")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-success",
    on: {
      "click": function($event) {
        _vm.transactionState = 'in'
      }
    }
  }, [_vm._v("In")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-info",
    on: {
      "click": function($event) {
        _vm.transactionState = 'out'
      }
    }
  }, [_vm._v("Out")]), _vm._v(" "), _c('table', {
    staticClass: "table"
  }, [_vm._m(0), _vm._v(" "), _c('tbody', _vm._l((_vm.transactionLists), function(transaction) {
    return _c('transaction', {
      key: transaction.id,
      attrs: {
        "transaction": transaction
      }
    })
  }), 1)])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "panel-footer"
  }, [_c('span', {
    staticClass: "btn-group"
  }, [_c('button', {
    staticClass: "btn btn-danger",
    on: {
      "click": _vm.deleteData
    }
  }, [_vm._v("Delete")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "disabled": _vm.validateDuplicate || _vm.validateDuplicateAssetSerial
    },
    on: {
      "click": _vm.postData
    }
  }, [_vm._v("Update " + _vm._s(_vm.dataFetch.dataFetch.serial))])])])])])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('thead', [_c('tr', [_c('th', [_vm._v("Action")]), _vm._v(" "), _c('th', [_vm._v("Quantity")]), _vm._v(" "), _c('th', [_vm._v("Created at")]), _vm._v(" "), _c('th', [_vm._v("Updated at")])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-d5c325b6", module.exports)
  }
}

/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(171);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(13)("0d213be9", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-d5c325b6\",\"scoped\":false,\"hasInlineConfig\":true}!./noty.css", function() {
     var newContent = require("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-d5c325b6\",\"scoped\":false,\"hasInlineConfig\":true}!./noty.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["vue2-dropzone"]=t():e["vue2-dropzone"]=t()}(this,function(){return function(e){function t(n){if(i[n])return i[n].exports;var o=i[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var i={};return t.m=e,t.c=i,t.p="",t(0)}([function(e,t,i){var n,o,r={};i(8),n=i(2),o=i(6),e.exports=n||{},e.exports.__esModule&&(e.exports=e.exports.default);var s="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;o&&(s.template=o),s.computed||(s.computed={}),Object.keys(r).forEach(function(e){var t=r[e];s.computed[e]=function(){return t}})},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var i=this[t];i[2]?e.push("@media "+i[2]+"{"+i[1]+"}"):e.push(i[1])}return e.join("")},e.i=function(t,i){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},o=0;o<this.length;o++){var r=this[o][0];"number"==typeof r&&(n[r]=!0)}for(o=0;o<t.length;o++){var s=t[o];"number"==typeof s[0]&&n[s[0]]||(i&&!s[2]?s[2]=i:i&&(s[2]="("+s[2]+") and ("+i+")"),e.push(s))}},e}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{id:{type:String,required:!0},url:{type:String,required:!0},clickable:{type:[Boolean,String],default:!0},confirm:{type:Function,default:void 0},paramName:{type:String,default:"file"},acceptedFileTypes:{type:String},thumbnailHeight:{type:Number,default:200},thumbnailWidth:{type:Number,default:200},showRemoveLink:{type:Boolean,default:!0},maxFileSizeInMB:{type:Number,default:2},maxNumberOfFiles:{type:Number,default:5},autoProcessQueue:{type:Boolean,default:!0},useFontAwesome:{type:Boolean,default:!1},headers:{type:Object},language:{type:Object,default:function(){return{}}},previewTemplate:{type:Function,default:function(e){return'\n                    <div class="dz-preview dz-file-preview">\n                        <div class="dz-image" style="width: '+e.thumbnailWidth+"px;height: "+e.thumbnailHeight+'px">\n                        <img data-dz-thumbnail /></div>\n                        <div class="dz-details">\n                            <div class="dz-size"><span data-dz-size></span></div>\n                            <div class="dz-filename"><span data-dz-name></span></div>\n                        </div>\n                        <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>\n                        <div class="dz-error-message"><span data-dz-errormessage></span></div>\n                        <div class="dz-success-mark">'+e.doneIcon+'</div>\n                        <div class="dz-error-mark">'+e.errorIcon+"</div>\n                    </div>\n                "}},useCustomDropzoneOptions:{type:Boolean,default:!1},dropzoneOptions:{type:Object,default:function(){return{}}},resizeWidth:{type:Number,default:null},resizeHeight:{type:Number,default:null},resizeMimeType:{type:String,default:null},resizeQuality:{type:Number,default:.8},resizeMethod:{type:String,default:"contain"},uploadMultiple:{type:Boolean,default:!1},duplicateCheck:{type:Boolean,default:!1},parallelUploads:{type:Number,default:2},timeout:{type:Number,default:3e4},method:{type:String,default:"POST"},withCredentials:{type:Boolean,default:!1},capture:{type:String,default:null},hiddenInputContainer:{type:String,default:"body"}},methods:{manuallyAddFile:function(e,t,i,n,o){this.dropzone.emit("addedfile",e),this.dropzone.emit("thumbnail",e,t),this.dropzone.createThumbnailFromUrl(e,t,i,n),this.dropzone.emit("complete",e),"undefined"!=typeof o.dontSubstractMaxFiles&&o.dontSubstractMaxFiles||(this.dropzone.options.maxFiles=this.dropzone.options.maxFiles-1),"undefined"!=typeof o.addToFiles&&o.addToFiles&&this.dropzone.files.push(e),this.$emit("vdropzone-file-added-manually",e)},setOption:function(e,t){this.dropzone.options[e]=t},removeAllFiles:function(){this.dropzone.removeAllFiles(!0)},processQueue:function(){var e=this.dropzone;this.dropzone.processQueue(),this.dropzone.on("success",function(){e.options.autoProcessQueue=!0}),this.dropzone.on("queuecomplete",function(){e.options.autoProcessQueue=!1})},removeFile:function(e){this.dropzone.removeFile(e)},getAcceptedFiles:function(){return this.dropzone.getAcceptedFiles()},getRejectedFiles:function(){return this.dropzone.getRejectedFiles()},getUploadingFiles:function(){return this.dropzone.getUploadingFiles()},getQueuedFiles:function(){return this.dropzone.getQueuedFiles()},getProp:function(e,t){return this.useCustomDropzoneOptions&&void 0!==t&&null!==t&&""!==t?t:e}},computed:{languageSettings:function(){var e={dictDefaultMessage:"<br>Drop files here to upload",dictCancelUpload:"Cancel upload",dictCancelUploadConfirmation:"Are you sure you want to cancel this upload?",dictFallbackMessage:"Your browser does not support drag and drop file uploads.",dictFallbackText:"Please use the fallback form below to upload your files like in the olden days.",dictFileTooBig:"File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",dictInvalidFileType:"You can't upload files of this type.",dictMaxFilesExceeded:"You can not upload any more files. (max: {{maxFiles}})",dictRemoveFile:"Remove",dictRemoveFileConfirmation:null,dictResponseError:"Server responded with {{statusCode}} code."};for(var t in this.language)e[t]=this.language[t];if(this.useCustomDropzoneOptions&&this.dropzoneOptions.language)for(var i in this.dropzoneOptions.language)e[i]=this.dropzoneOptions.language[i];return e},cloudIcon:function(){return this.useFontAwesome?'<i class="fa fa-cloud-upload"></i>':'<i class="material-icons">cloud_upload</i>'},doneIcon:function(){return this.useFontAwesome?'<i class="fa fa-check"></i>':' <i class="material-icons">done</i>'},errorIcon:function(){return this.useFontAwesome?'<i class="fa fa-close"></i>':' <i class="material-icons">error</i>'}},mounted:function(){if(!this.$isServer){var e=i(5);e.autoDiscover=!1,this.confirm&&(e.confirm=this.getProp(this.confirm,this.dropzoneOptions.confirm));var t=document.getElementById(this.id);this.dropzone=new e(t,{clickable:this.getProp(this.clickable,this.dropzoneOptions.clickable),paramName:this.getProp(this.paramName,this.dropzoneOptions.paramName),thumbnailWidth:this.getProp(this.thumbnailWidth,this.dropzoneOptions.thumbnailWidth),thumbnailHeight:this.getProp(this.thumbnailHeight,this.dropzoneOptions.thumbnailHeight),maxFiles:this.getProp(this.maxNumberOfFiles,this.dropzoneOptions.maxNumberOfFiles),maxFilesize:this.getProp(this.maxFileSizeInMB,this.dropzoneOptions.maxFileSizeInMB),addRemoveLinks:this.getProp(this.showRemoveLink,this.dropzoneOptions.showRemoveLink),acceptedFiles:this.getProp(this.acceptedFileTypes,this.dropzoneOptions.acceptedFileTypes),autoProcessQueue:this.getProp(this.autoProcessQueue,this.dropzoneOptions.autoProcessQueue),headers:this.getProp(this.headers,this.dropzoneOptions.headers),previewTemplate:this.previewTemplate(this),dictDefaultMessage:this.cloudIcon+this.languageSettings.dictDefaultMessage,dictCancelUpload:this.languageSettings.dictCancelUpload,dictCancelUploadConfirmation:this.languageSettings.dictCancelUploadConfirmation,dictFallbackMessage:this.languageSettings.dictFallbackMessage,dictFallbackText:this.languageSettings.dictFallbackText,dictFileTooBig:this.languageSettings.dictFileTooBig,dictInvalidFileType:this.languageSettings.dictInvalidFileType,dictMaxFilesExceeded:this.languageSettings.dictMaxFilesExceeded,dictRemoveFile:this.languageSettings.dictRemoveFile,dictRemoveFileConfirmation:this.languageSettings.dictRemoveFileConfirmation,dictResponseError:this.languageSettings.dictResponseError,resizeWidth:this.getProp(this.resizeWidth,this.dropzoneOptions.resizeWidth),resizeHeight:this.getProp(this.resizeHeight,this.dropzoneOptions.resizeHeight),resizeMimeType:this.getProp(this.resizeMimeType,this.dropzoneOptions.resizeMimeType),resizeQuality:this.getProp(this.resizeQuality,this.dropzoneOptions.resizeQuality),resizeMethod:this.getProp(this.resizeMethod,this.dropzoneOptions.resizeMethod),uploadMultiple:this.getProp(this.uploadMultiple,this.dropzoneOptions.uploadMultiple),parallelUploads:this.getProp(this.parallelUploads,this.dropzoneOptions.parallelUploads),timeout:this.getProp(this.timeout,this.dropzoneOptions.timeout),method:this.getProp(this.method,this.dropzoneOptions.method),capture:this.getProp(this.capture,this.dropzoneOptions.capture),hiddenInputContainer:this.getProp(this.hiddenInputContainer,this.dropzoneOptions.hiddenInputContainer),withCredentials:this.getProp(this.withCredentials,this.dropzoneOptions.withCredentials)});var n=this;this.dropzone.on("thumbnail",function(e,t){n.$emit("vdropzone-thumbnail",e,t)}),this.dropzone.on("addedfile",function(e){if(n.duplicateCheck&&this.files.length){var t,i;for(t=0,i=this.files.length;t<i-1;t++)this.files[t].name===e.name&&(this.removeFile(e),n.$emit("duplicate-file",e))}n.$emit("vdropzone-file-added",e)}),this.dropzone.on("addedfiles",function(e){n.$emit("vdropzone-files-added",e)}),this.dropzone.on("removedfile",function(e){n.$emit("vdropzone-removed-file",e)}),this.dropzone.on("success",function(e,t){n.$emit("vdropzone-success",e,t)}),this.dropzone.on("successmultiple",function(e,t){n.$emit("vdropzone-success-multiple",e,t)}),this.dropzone.on("error",function(e,t,i){n.$emit("vdropzone-error",e,t,i)}),this.dropzone.on("sending",function(e,t,i){n.$emit("vdropzone-sending",e,t,i)}),this.dropzone.on("sendingmultiple",function(e,t,i){n.$emit("vdropzone-sending-multiple",e,t,i)}),this.dropzone.on("queuecomplete",function(e,t,i){n.$emit("vdropzone-queue-complete",e,t,i)}),this.dropzone.on("totaluploadprogress",function(e,t,i){n.$emit("vdropzone-total-upload-progress",e,t,i)}),n.$emit("vdropzone-mounted")}},beforeDestroy:function(){this.dropzone.destroy()}}},function(e,t,i){t=e.exports=i(1)(),t.push([e.id,'@-webkit-keyframes passing-through{0%{opacity:0;-webkit-transform:translateY(40px);transform:translateY(40px)}30%,70%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}to{opacity:0;-webkit-transform:translateY(-40px);transform:translateY(-40px)}}@keyframes passing-through{0%{opacity:0;-webkit-transform:translateY(40px);transform:translateY(40px)}30%,70%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}to{opacity:0;-webkit-transform:translateY(-40px);transform:translateY(-40px)}}@-webkit-keyframes slide-in{0%{opacity:0;-webkit-transform:translateY(40px);transform:translateY(40px)}30%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes slide-in{0%{opacity:0;-webkit-transform:translateY(40px);transform:translateY(40px)}30%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes pulse{0%{-webkit-transform:scale(1);transform:scale(1)}10%{-webkit-transform:scale(1.1);transform:scale(1.1)}20%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes pulse{0%{-webkit-transform:scale(1);transform:scale(1)}10%{-webkit-transform:scale(1.1);transform:scale(1.1)}20%{-webkit-transform:scale(1);transform:scale(1)}}.dropzone,.dropzone *{box-sizing:border-box}.dropzone{min-height:150px;border:2px solid rgba(0,0,0,.3);background:#fff;padding:20px}.dropzone.dz-clickable{cursor:pointer}.dropzone.dz-clickable *{cursor:default}.dropzone.dz-clickable .dz-message,.dropzone.dz-clickable .dz-message *{cursor:pointer}.dropzone.dz-started .dz-message{display:none}.dropzone.dz-drag-hover{border-style:solid}.dropzone.dz-drag-hover .dz-message{opacity:.5}.dropzone .dz-message{text-align:center;margin:2em 0}.dropzone .dz-preview{position:relative;display:inline-block;vertical-align:top;margin:16px;min-height:100px}.dropzone .dz-preview:hover{z-index:1000}.dropzone .dz-preview.dz-file-preview .dz-image{border-radius:20px;background:#999;background:linear-gradient(180deg,#eee,#ddd)}.dropzone .dz-preview.dz-file-preview .dz-details{opacity:1}.dropzone .dz-preview.dz-image-preview{background:#fff}.dropzone .dz-preview.dz-image-preview .dz-details{transition:opacity .2s linear}.dropzone .dz-preview .dz-remove{font-size:14px;text-align:center;display:block;cursor:pointer;border:none}.dropzone .dz-preview .dz-remove:hover{text-decoration:underline}.dropzone .dz-preview:hover .dz-details{opacity:1}.dropzone .dz-preview .dz-details{z-index:20;position:absolute;top:0;left:0;opacity:0;font-size:13px;min-width:100%;max-width:100%;padding:2em 1em;text-align:center;color:rgba(0,0,0,.9);line-height:150%}.dropzone .dz-preview .dz-details .dz-size{margin-bottom:1em;font-size:16px}.dropzone .dz-preview .dz-details .dz-filename{white-space:nowrap}.dropzone .dz-preview .dz-details .dz-filename:hover span{border:1px solid hsla(0,0%,78%,.8);background-color:hsla(0,0%,100%,.8)}.dropzone .dz-preview .dz-details .dz-filename:not(:hover){overflow:hidden;text-overflow:ellipsis}.dropzone .dz-preview .dz-details .dz-filename:not(:hover) span{border:1px solid transparent}.dropzone .dz-preview .dz-details .dz-filename span,.dropzone .dz-preview .dz-details .dz-size span{background-color:hsla(0,0%,100%,.4);padding:0 .4em;border-radius:3px}.dropzone .dz-preview:hover .dz-image img{-webkit-transform:scale(1.05);transform:scale(1.05);-webkit-filter:blur(8px);filter:blur(8px)}.dropzone .dz-preview .dz-image{border-radius:20px;overflow:hidden;width:120px;height:120px;position:relative;display:block;z-index:10}.dropzone .dz-preview .dz-image img{display:block}.dropzone .dz-preview.dz-success .dz-success-mark{-webkit-animation:passing-through 3s cubic-bezier(.77,0,.175,1);animation:passing-through 3s cubic-bezier(.77,0,.175,1)}.dropzone .dz-preview.dz-error .dz-error-mark{opacity:1;-webkit-animation:slide-in 3s cubic-bezier(.77,0,.175,1);animation:slide-in 3s cubic-bezier(.77,0,.175,1)}.dropzone .dz-preview .dz-error-mark,.dropzone .dz-preview .dz-success-mark{pointer-events:none;opacity:0;z-index:500;position:absolute;display:block;top:50%;left:50%;margin-left:-27px;margin-top:-27px}.dropzone .dz-preview .dz-error-mark svg,.dropzone .dz-preview .dz-success-mark svg{display:block;width:54px;height:54px}.dropzone .dz-preview.dz-processing .dz-progress{opacity:1;transition:all .2s linear}.dropzone .dz-preview.dz-complete .dz-progress{opacity:0;transition:opacity .4s ease-in}.dropzone .dz-preview:not(.dz-processing) .dz-progress{-webkit-animation:pulse 6s ease infinite;animation:pulse 6s ease infinite}.dropzone .dz-preview .dz-progress{opacity:1;z-index:1000;pointer-events:none;position:absolute;height:16px;left:50%;top:50%;margin-top:-8px;width:80px;margin-left:-40px;background:hsla(0,0%,100%,.9);-webkit-transform:scale(1);border-radius:8px;overflow:hidden}.dropzone .dz-preview .dz-progress .dz-upload{background:#333;background:linear-gradient(180deg,#666,#444);position:absolute;top:0;left:0;bottom:0;width:0;transition:width .3s ease-in-out}.dropzone .dz-preview.dz-error .dz-error-message{display:block}.dropzone .dz-preview.dz-error:hover .dz-error-message{opacity:1;pointer-events:auto}.dropzone .dz-preview .dz-error-message{pointer-events:none;z-index:1000;position:absolute;display:block;display:none;opacity:0;transition:opacity .3s ease;border-radius:8px;font-size:13px;top:130px;left:-10px;width:140px;background:#be2626;background:linear-gradient(180deg,#be2626,#a92222);padding:.5em 1.2em;color:#fff}.dropzone .dz-preview .dz-error-message:after{content:"";position:absolute;top:-6px;left:64px;width:0;height:0;border-left:6px solid transparent;border-right:6px solid transparent;border-bottom:6px solid #be2626}',""])},function(e,t,i){t=e.exports=i(1)(),t.i(i(3),""),t.push([e.id,".vue-dropzone{border:2px solid #e5e5e5;font-family:Arial,sans-serif;letter-spacing:.2px;color:#777;transition:background-color .2s linear}.vue-dropzone:hover{background-color:#f6f6f6}.vue-dropzone i{color:#ccc}.vue-dropzone .dz-preview .dz-image{border-radius:0}.vue-dropzone .dz-preview .dz-image:hover img{-webkit-transform:none;transform:none;-webkit-filter:none}.vue-dropzone .dz-preview .dz-details{bottom:0;top:0;color:#fff;background-color:rgba(33,150,243,.8);transition:opacity .2s linear;text-align:left}.vue-dropzone .dz-preview .dz-details .dz-filename span,.vue-dropzone .dz-preview .dz-details .dz-size span{background-color:transparent}.vue-dropzone .dz-preview .dz-details .dz-filename:not(:hover) span{border:none}.vue-dropzone .dz-preview .dz-details .dz-filename:hover span{background-color:transparent;border:none}.vue-dropzone .dz-preview .dz-progress .dz-upload{background:#ccc}.vue-dropzone .dz-preview .dz-remove{position:absolute;z-index:30;color:#fff;margin-left:15px;padding:10px;top:inherit;bottom:15px;border:2px solid #fff;text-decoration:none;text-transform:uppercase;font-size:.8rem;font-weight:800;letter-spacing:1.1px;opacity:0}.vue-dropzone .dz-preview:hover .dz-remove{opacity:1}.vue-dropzone .dz-preview .dz-error-mark,.vue-dropzone .dz-preview .dz-success-mark{margin-left:auto!important;margin-top:auto!important;width:100%!important;top:35%!important;left:0}.vue-dropzone .dz-preview .dz-error-mark i,.vue-dropzone .dz-preview .dz-success-mark i{color:#fff!important;font-size:5rem!important}.vue-dropzone .dz-preview .dz-error-message{top:75%;left:15%}",""])},function(e,t,i){(function(e){(function(){var t,i,n,o,r,s,a,l,d,p=[].slice,u=function(e,t){function i(){this.constructor=e}for(var n in t)c.call(t,n)&&(e[n]=t[n]);return i.prototype=t.prototype,e.prototype=new i,e.__super__=t.prototype,e},c={}.hasOwnProperty;l=function(){},i=function(){function e(){}return e.prototype.addEventListener=e.prototype.on,e.prototype.on=function(e,t){return this._callbacks=this._callbacks||{},this._callbacks[e]||(this._callbacks[e]=[]),this._callbacks[e].push(t),this},e.prototype.emit=function(){var e,t,i,n,o,r;if(n=arguments[0],e=2<=arguments.length?p.call(arguments,1):[],this._callbacks=this._callbacks||{},i=this._callbacks[n])for(o=0,r=i.length;o<r;o++)t=i[o],t.apply(this,e);return this},e.prototype.removeListener=e.prototype.off,e.prototype.removeAllListeners=e.prototype.off,e.prototype.removeEventListener=e.prototype.off,e.prototype.off=function(e,t){var i,n,o,r,s;if(!this._callbacks||0===arguments.length)return this._callbacks={},this;if(n=this._callbacks[e],!n)return this;if(1===arguments.length)return delete this._callbacks[e],this;for(o=r=0,s=n.length;r<s;o=++r)if(i=n[o],i===t){n.splice(o,1);break}return this},e}(),t=function(e){function t(e,i){var n,r,s;if(this.element=e,this.version=t.version,this.defaultOptions.previewTemplate=this.defaultOptions.previewTemplate.replace(/\n*/g,""),this.clickableElements=[],this.listeners=[],this.files=[],"string"==typeof this.element&&(this.element=document.querySelector(this.element)),!this.element||null==this.element.nodeType)throw new Error("Invalid dropzone element.");if(this.element.dropzone)throw new Error("Dropzone already attached.");if(t.instances.push(this),this.element.dropzone=this,n=null!=(s=t.optionsForElement(this.element))?s:{},this.options=o({},this.defaultOptions,n,null!=i?i:{}),this.options.forceFallback||!t.isBrowserSupported())return this.options.fallback.call(this);if(null==this.options.url&&(this.options.url=this.element.getAttribute("action")),!this.options.url)throw new Error("No URL provided.");if(this.options.acceptedFiles&&this.options.acceptedMimeTypes)throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");this.options.acceptedMimeTypes&&(this.options.acceptedFiles=this.options.acceptedMimeTypes,delete this.options.acceptedMimeTypes),null!=this.options.renameFilename&&(this.options.renameFile=function(e){return function(t){return e.options.renameFilename.call(e,t.name,t)}}(this)),this.options.method=this.options.method.toUpperCase(),(r=this.getExistingFallback())&&r.parentNode&&r.parentNode.removeChild(r),this.options.previewsContainer!==!1&&(this.options.previewsContainer?this.previewsContainer=t.getElement(this.options.previewsContainer,"previewsContainer"):this.previewsContainer=this.element),this.options.clickable&&(this.options.clickable===!0?this.clickableElements=[this.element]:this.clickableElements=t.getElements(this.options.clickable,"clickable")),this.init()}var o,r;return u(t,e),t.prototype.Emitter=i,t.prototype.events=["drop","dragstart","dragend","dragenter","dragover","dragleave","addedfile","addedfiles","removedfile","thumbnail","error","errormultiple","processing","processingmultiple","uploadprogress","totaluploadprogress","sending","sendingmultiple","success","successmultiple","canceled","canceledmultiple","complete","completemultiple","reset","maxfilesexceeded","maxfilesreached","queuecomplete"],t.prototype.defaultOptions={url:null,method:"post",withCredentials:!1,timeout:3e4,parallelUploads:2,uploadMultiple:!1,maxFilesize:256,paramName:"file",createImageThumbnails:!0,maxThumbnailFilesize:10,thumbnailWidth:120,thumbnailHeight:120,thumbnailMethod:"crop",resizeWidth:null,resizeHeight:null,resizeMimeType:null,resizeQuality:.8,resizeMethod:"contain",filesizeBase:1e3,maxFiles:null,params:{},headers:null,clickable:!0,ignoreHiddenFiles:!0,acceptedFiles:null,acceptedMimeTypes:null,autoProcessQueue:!0,autoQueue:!0,addRemoveLinks:!1,previewsContainer:null,hiddenInputContainer:"body",capture:null,renameFilename:null,renameFile:null,forceFallback:!1,dictDefaultMessage:"Drop files here to upload",dictFallbackMessage:"Your browser does not support drag'n'drop file uploads.",dictFallbackText:"Please use the fallback form below to upload your files like in the olden days.",dictFileTooBig:"File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",dictInvalidFileType:"You can't upload files of this type.",dictResponseError:"Server responded with {{statusCode}} code.",dictCancelUpload:"Cancel upload",dictCancelUploadConfirmation:"Are you sure you want to cancel this upload?",dictRemoveFile:"Remove file",dictRemoveFileConfirmation:null,dictMaxFilesExceeded:"You can not upload any more files.",dictFileSizeUnits:{tb:"TB",gb:"GB",mb:"MB",kb:"KB",b:"b"},init:function(){return l},accept:function(e,t){return t()},fallback:function(){var e,i,n,o,r,s;for(this.element.className=this.element.className+" dz-browser-not-supported",r=this.element.getElementsByTagName("div"),i=0,n=r.length;i<n;i++)e=r[i],/(^| )dz-message($| )/.test(e.className)&&(o=e,e.className="dz-message");return o||(o=t.createElement('<div class="dz-message"><span></span></div>'),this.element.appendChild(o)),s=o.getElementsByTagName("span")[0],s&&(null!=s.textContent?s.textContent=this.options.dictFallbackMessage:null!=s.innerText&&(s.innerText=this.options.dictFallbackMessage)),this.element.appendChild(this.getFallbackForm())},resize:function(e,t,i,n){var o,r,s;if(o={srcX:0,srcY:0,srcWidth:e.width,srcHeight:e.height},r=e.width/e.height,null==t&&null==i?(t=o.srcWidth,i=o.srcHeight):null==t?t=i*r:null==i&&(i=t/r),t=Math.min(t,o.srcWidth),i=Math.min(i,o.srcHeight),s=t/i,o.srcWidth>t||o.srcHeight>i)if("crop"===n)r>s?(o.srcHeight=e.height,o.srcWidth=o.srcHeight*s):(o.srcWidth=e.width,o.srcHeight=o.srcWidth/s);else{if("contain"!==n)throw new Error("Unknown resizeMethod '"+n+"'");r>s?i=t/r:t=i*r}return o.srcX=(e.width-o.srcWidth)/2,o.srcY=(e.height-o.srcHeight)/2,o.trgWidth=t,o.trgHeight=i,o},transformFile:function(e,t){return(this.options.resizeWidth||this.options.resizeHeight)&&e.type.match(/image.*/)?this.resizeImage(e,this.options.resizeWidth,this.options.resizeHeight,this.options.resizeMethod,t):t(e)},previewTemplate:'<div class="dz-preview dz-file-preview">\n  <div class="dz-image"><img data-dz-thumbnail /></div>\n  <div class="dz-details">\n    <div class="dz-size"><span data-dz-size></span></div>\n    <div class="dz-filename"><span data-dz-name></span></div>\n  </div>\n  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>\n  <div class="dz-error-message"><span data-dz-errormessage></span></div>\n  <div class="dz-success-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Check</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <path d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" stroke-opacity="0.198794158" stroke="#747474" fill-opacity="0.816519475" fill="#FFFFFF" sketch:type="MSShapeGroup"></path>\n      </g>\n    </svg>\n  </div>\n  <div class="dz-error-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Error</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <g id="Check-+-Oval-2" sketch:type="MSLayerGroup" stroke="#747474" stroke-opacity="0.198794158" fill="#FFFFFF" fill-opacity="0.816519475">\n          <path d="M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" sketch:type="MSShapeGroup"></path>\n        </g>\n      </g>\n    </svg>\n  </div>\n</div>',drop:function(e){return this.element.classList.remove("dz-drag-hover")},dragstart:l,dragend:function(e){return this.element.classList.remove("dz-drag-hover")},dragenter:function(e){return this.element.classList.add("dz-drag-hover")},dragover:function(e){return this.element.classList.add("dz-drag-hover")},dragleave:function(e){return this.element.classList.remove("dz-drag-hover")},paste:l,reset:function(){return this.element.classList.remove("dz-started")},addedfile:function(e){var i,n,o,r,s,a,l,d,p,u,c,h,f;if(this.element===this.previewsContainer&&this.element.classList.add("dz-started"),this.previewsContainer){for(e.previewElement=t.createElement(this.options.previewTemplate.trim()),e.previewTemplate=e.previewElement,this.previewsContainer.appendChild(e.previewElement),d=e.previewElement.querySelectorAll("[data-dz-name]"),i=0,r=d.length;i<r;i++)l=d[i],l.textContent=e.name;for(p=e.previewElement.querySelectorAll("[data-dz-size]"),n=0,s=p.length;n<s;n++)l=p[n],l.innerHTML=this.filesize(e.size);for(this.options.addRemoveLinks&&(e._removeLink=t.createElement('<a class="dz-remove" href="javascript:undefined;" data-dz-remove>'+this.options.dictRemoveFile+"</a>"),e.previewElement.appendChild(e._removeLink)),c=function(i){return function(n){return n.preventDefault(),n.stopPropagation(),e.status===t.UPLOADING?t.confirm(i.options.dictCancelUploadConfirmation,function(){return i.removeFile(e)}):i.options.dictRemoveFileConfirmation?t.confirm(i.options.dictRemoveFileConfirmation,function(){return i.removeFile(e)}):i.removeFile(e)}}(this),u=e.previewElement.querySelectorAll("[data-dz-remove]"),f=[],o=0,a=u.length;o<a;o++)h=u[o],f.push(h.addEventListener("click",c));return f}},removedfile:function(e){var t;return e.previewElement&&null!=(t=e.previewElement)&&t.parentNode.removeChild(e.previewElement),this._updateMaxFilesReachedClass()},thumbnail:function(e,t){var i,n,o,r;if(e.previewElement){for(e.previewElement.classList.remove("dz-file-preview"),o=e.previewElement.querySelectorAll("[data-dz-thumbnail]"),i=0,n=o.length;i<n;i++)r=o[i],r.alt=e.name,r.src=t;return setTimeout(function(t){return function(){return e.previewElement.classList.add("dz-image-preview")}}(this),1)}},error:function(e,t){var i,n,o,r,s;if(e.previewElement){for(e.previewElement.classList.add("dz-error"),"String"!=typeof t&&t.error&&(t=t.error),r=e.previewElement.querySelectorAll("[data-dz-errormessage]"),s=[],i=0,n=r.length;i<n;i++)o=r[i],s.push(o.textContent=t);return s}},errormultiple:l,processing:function(e){if(e.previewElement&&(e.previewElement.classList.add("dz-processing"),e._removeLink))return e._removeLink.textContent=this.options.dictCancelUpload},processingmultiple:l,uploadprogress:function(e,t,i){var n,o,r,s,a;if(e.previewElement){for(s=e.previewElement.querySelectorAll("[data-dz-uploadprogress]"),a=[],n=0,o=s.length;n<o;n++)r=s[n],"PROGRESS"===r.nodeName?a.push(r.value=t):a.push(r.style.width=t+"%");return a}},totaluploadprogress:l,sending:l,sendingmultiple:l,success:function(e){if(e.previewElement)return e.previewElement.classList.add("dz-success")},successmultiple:l,canceled:function(e){return this.emit("error",e,"Upload canceled.")},canceledmultiple:l,complete:function(e){if(e._removeLink&&(e._removeLink.textContent=this.options.dictRemoveFile),e.previewElement)return e.previewElement.classList.add("dz-complete")},completemultiple:l,maxfilesexceeded:l,maxfilesreached:l,queuecomplete:l,addedfiles:l},o=function(){var e,t,i,n,o,r,s;for(r=arguments[0],o=2<=arguments.length?p.call(arguments,1):[],e=0,i=o.length;e<i;e++){n=o[e];for(t in n)s=n[t],r[t]=s}return r},t.prototype.getAcceptedFiles=function(){var e,t,i,n,o;for(n=this.files,o=[],t=0,i=n.length;t<i;t++)e=n[t],e.accepted&&o.push(e);return o},t.prototype.getRejectedFiles=function(){var e,t,i,n,o;for(n=this.files,o=[],t=0,i=n.length;t<i;t++)e=n[t],e.accepted||o.push(e);return o},t.prototype.getFilesWithStatus=function(e){var t,i,n,o,r;for(o=this.files,r=[],i=0,n=o.length;i<n;i++)t=o[i],t.status===e&&r.push(t);return r},t.prototype.getQueuedFiles=function(){return this.getFilesWithStatus(t.QUEUED)},t.prototype.getUploadingFiles=function(){return this.getFilesWithStatus(t.UPLOADING)},t.prototype.getAddedFiles=function(){return this.getFilesWithStatus(t.ADDED)},t.prototype.getActiveFiles=function(){var e,i,n,o,r;for(o=this.files,r=[],i=0,n=o.length;i<n;i++)e=o[i],e.status!==t.UPLOADING&&e.status!==t.QUEUED||r.push(e);return r},t.prototype.init=function(){var e,i,n,o,r,s,a;for("form"===this.element.tagName&&this.element.setAttribute("enctype","multipart/form-data"),this.element.classList.contains("dropzone")&&!this.element.querySelector(".dz-message")&&this.element.appendChild(t.createElement('<div class="dz-default dz-message"><span>'+this.options.dictDefaultMessage+"</span></div>")),this.clickableElements.length&&(a=function(e){return function(){return e.hiddenFileInput&&e.hiddenFileInput.parentNode.removeChild(e.hiddenFileInput),e.hiddenFileInput=document.createElement("input"),e.hiddenFileInput.setAttribute("type","file"),(null==e.options.maxFiles||e.options.maxFiles>1)&&e.hiddenFileInput.setAttribute("multiple","multiple"),e.hiddenFileInput.className="dz-hidden-input",null!=e.options.acceptedFiles&&e.hiddenFileInput.setAttribute("accept",e.options.acceptedFiles),null!=e.options.capture&&e.hiddenFileInput.setAttribute("capture",e.options.capture),
e.hiddenFileInput.style.visibility="hidden",e.hiddenFileInput.style.position="absolute",e.hiddenFileInput.style.top="0",e.hiddenFileInput.style.left="0",e.hiddenFileInput.style.height="0",e.hiddenFileInput.style.width="0",document.querySelector(e.options.hiddenInputContainer).appendChild(e.hiddenFileInput),e.hiddenFileInput.addEventListener("change",function(){var t,i,n,o;if(i=e.hiddenFileInput.files,i.length)for(n=0,o=i.length;n<o;n++)t=i[n],e.addFile(t);return e.emit("addedfiles",i),a()})}}(this))(),this.URL=null!=(r=window.URL)?r:window.webkitURL,s=this.events,i=0,n=s.length;i<n;i++)e=s[i],this.on(e,this.options[e]);return this.on("uploadprogress",function(e){return function(){return e.updateTotalUploadProgress()}}(this)),this.on("removedfile",function(e){return function(){return e.updateTotalUploadProgress()}}(this)),this.on("canceled",function(e){return function(t){return e.emit("complete",t)}}(this)),this.on("complete",function(e){return function(t){if(0===e.getAddedFiles().length&&0===e.getUploadingFiles().length&&0===e.getQueuedFiles().length)return setTimeout(function(){return e.emit("queuecomplete")},0)}}(this)),o=function(e){return e.stopPropagation(),e.preventDefault?e.preventDefault():e.returnValue=!1},this.listeners=[{element:this.element,events:{dragstart:function(e){return function(t){return e.emit("dragstart",t)}}(this),dragenter:function(e){return function(t){return o(t),e.emit("dragenter",t)}}(this),dragover:function(e){return function(t){var i;try{i=t.dataTransfer.effectAllowed}catch(e){}return t.dataTransfer.dropEffect="move"===i||"linkMove"===i?"move":"copy",o(t),e.emit("dragover",t)}}(this),dragleave:function(e){return function(t){return e.emit("dragleave",t)}}(this),drop:function(e){return function(t){return o(t),e.drop(t)}}(this),dragend:function(e){return function(t){return e.emit("dragend",t)}}(this)}}],this.clickableElements.forEach(function(e){return function(i){return e.listeners.push({element:i,events:{click:function(n){return(i!==e.element||n.target===e.element||t.elementInside(n.target,e.element.querySelector(".dz-message")))&&e.hiddenFileInput.click(),!0}}})}}(this)),this.enable(),this.options.init.call(this)},t.prototype.destroy=function(){var e;return this.disable(),this.removeAllFiles(!0),(null!=(e=this.hiddenFileInput)?e.parentNode:void 0)&&(this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput),this.hiddenFileInput=null),delete this.element.dropzone,t.instances.splice(t.instances.indexOf(this),1)},t.prototype.updateTotalUploadProgress=function(){var e,t,i,n,o,r,s,a;if(s=0,r=0,e=this.getActiveFiles(),e.length){for(o=this.getActiveFiles(),i=0,n=o.length;i<n;i++)t=o[i],s+=t.upload.bytesSent,r+=t.upload.total;a=100*s/r}else a=100;return this.emit("totaluploadprogress",a,r,s)},t.prototype._getParamName=function(e){return"function"==typeof this.options.paramName?this.options.paramName(e):""+this.options.paramName+(this.options.uploadMultiple?"["+e+"]":"")},t.prototype._renameFile=function(e){return"function"!=typeof this.options.renameFile?e.name:this.options.renameFile(e)},t.prototype.getFallbackForm=function(){var e,i,n,o;return(e=this.getExistingFallback())?e:(n='<div class="dz-fallback">',this.options.dictFallbackText&&(n+="<p>"+this.options.dictFallbackText+"</p>"),n+='<input type="file" name="'+this._getParamName(0)+'" '+(this.options.uploadMultiple?'multiple="multiple"':void 0)+' /><input type="submit" value="Upload!"></div>',i=t.createElement(n),"FORM"!==this.element.tagName?(o=t.createElement('<form action="'+this.options.url+'" enctype="multipart/form-data" method="'+this.options.method+'"></form>'),o.appendChild(i)):(this.element.setAttribute("enctype","multipart/form-data"),this.element.setAttribute("method",this.options.method)),null!=o?o:i)},t.prototype.getExistingFallback=function(){var e,t,i,n,o,r;for(t=function(e){var t,i,n;for(i=0,n=e.length;i<n;i++)if(t=e[i],/(^| )fallback($| )/.test(t.className))return t},o=["div","form"],i=0,n=o.length;i<n;i++)if(r=o[i],e=t(this.element.getElementsByTagName(r)))return e},t.prototype.setupEventListeners=function(){var e,t,i,n,o,r,s;for(r=this.listeners,s=[],i=0,n=r.length;i<n;i++)e=r[i],s.push(function(){var i,n;i=e.events,n=[];for(t in i)o=i[t],n.push(e.element.addEventListener(t,o,!1));return n}());return s},t.prototype.removeEventListeners=function(){var e,t,i,n,o,r,s;for(r=this.listeners,s=[],i=0,n=r.length;i<n;i++)e=r[i],s.push(function(){var i,n;i=e.events,n=[];for(t in i)o=i[t],n.push(e.element.removeEventListener(t,o,!1));return n}());return s},t.prototype.disable=function(){var e,t,i,n,o;for(this.clickableElements.forEach(function(e){return e.classList.remove("dz-clickable")}),this.removeEventListeners(),n=this.files,o=[],t=0,i=n.length;t<i;t++)e=n[t],o.push(this.cancelUpload(e));return o},t.prototype.enable=function(){return this.clickableElements.forEach(function(e){return e.classList.add("dz-clickable")}),this.setupEventListeners()},t.prototype.filesize=function(e){var t,i,n,o,r,s,a,l;if(r=0,s="b",e>0){for(l=["tb","gb","mb","kb","b"],i=n=0,o=l.length;n<o;i=++n)if(a=l[i],t=Math.pow(this.options.filesizeBase,4-i)/10,e>=t){r=e/Math.pow(this.options.filesizeBase,4-i),s=a;break}r=Math.round(10*r)/10}return"<strong>"+r+"</strong> "+this.options.dictFileSizeUnits[s]},t.prototype._updateMaxFilesReachedClass=function(){return null!=this.options.maxFiles&&this.getAcceptedFiles().length>=this.options.maxFiles?(this.getAcceptedFiles().length===this.options.maxFiles&&this.emit("maxfilesreached",this.files),this.element.classList.add("dz-max-files-reached")):this.element.classList.remove("dz-max-files-reached")},t.prototype.drop=function(e){var t,i;e.dataTransfer&&(this.emit("drop",e),t=e.dataTransfer.files,this.emit("addedfiles",t),t.length&&(i=e.dataTransfer.items,i&&i.length&&null!=i[0].webkitGetAsEntry?this._addFilesFromItems(i):this.handleFiles(t)))},t.prototype.paste=function(e){var t,i;if(null!=(null!=e&&null!=(i=e.clipboardData)?i.items:void 0))return this.emit("paste",e),t=e.clipboardData.items,t.length?this._addFilesFromItems(t):void 0},t.prototype.handleFiles=function(e){var t,i,n,o;for(o=[],i=0,n=e.length;i<n;i++)t=e[i],o.push(this.addFile(t));return o},t.prototype._addFilesFromItems=function(e){var t,i,n,o,r;for(r=[],n=0,o=e.length;n<o;n++)i=e[n],null!=i.webkitGetAsEntry&&(t=i.webkitGetAsEntry())?t.isFile?r.push(this.addFile(i.getAsFile())):t.isDirectory?r.push(this._addFilesFromDirectory(t,t.name)):r.push(void 0):null!=i.getAsFile&&(null==i.kind||"file"===i.kind)?r.push(this.addFile(i.getAsFile())):r.push(void 0);return r},t.prototype._addFilesFromDirectory=function(e,t){var i,n,o;return i=e.createReader(),n=function(e){return"undefined"!=typeof console&&null!==console&&"function"==typeof console.log?console.log(e):void 0},(o=function(e){return function(){return i.readEntries(function(i){var n,r,s;if(i.length>0){for(r=0,s=i.length;r<s;r++)n=i[r],n.isFile?n.file(function(i){if(!e.options.ignoreHiddenFiles||"."!==i.name.substring(0,1))return i.fullPath=t+"/"+i.name,e.addFile(i)}):n.isDirectory&&e._addFilesFromDirectory(n,t+"/"+n.name);o()}return null},n)}}(this))()},t.prototype.accept=function(e,i){return e.size>1024*this.options.maxFilesize*1024?i(this.options.dictFileTooBig.replace("{{filesize}}",Math.round(e.size/1024/10.24)/100).replace("{{maxFilesize}}",this.options.maxFilesize)):t.isValidFile(e,this.options.acceptedFiles)?null!=this.options.maxFiles&&this.getAcceptedFiles().length>=this.options.maxFiles?(i(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}",this.options.maxFiles)),this.emit("maxfilesexceeded",e)):this.options.accept.call(this,e,i):i(this.options.dictInvalidFileType)},t.prototype.addFile=function(e){return e.upload={progress:0,total:e.size,bytesSent:0,filename:this._renameFile(e)},this.files.push(e),e.status=t.ADDED,this.emit("addedfile",e),this._enqueueThumbnail(e),this.accept(e,function(t){return function(i){return i?(e.accepted=!1,t._errorProcessing([e],i)):(e.accepted=!0,t.options.autoQueue&&t.enqueueFile(e)),t._updateMaxFilesReachedClass()}}(this))},t.prototype.enqueueFiles=function(e){var t,i,n;for(i=0,n=e.length;i<n;i++)t=e[i],this.enqueueFile(t);return null},t.prototype.enqueueFile=function(e){if(e.status!==t.ADDED||e.accepted!==!0)throw new Error("This file can't be queued because it has already been processed or was rejected.");if(e.status=t.QUEUED,this.options.autoProcessQueue)return setTimeout(function(e){return function(){return e.processQueue()}}(this),0)},t.prototype._thumbnailQueue=[],t.prototype._processingThumbnail=!1,t.prototype._enqueueThumbnail=function(e){if(this.options.createImageThumbnails&&e.type.match(/image.*/)&&e.size<=1024*this.options.maxThumbnailFilesize*1024)return this._thumbnailQueue.push(e),setTimeout(function(e){return function(){return e._processThumbnailQueue()}}(this),0)},t.prototype._processThumbnailQueue=function(){var e;if(!this._processingThumbnail&&0!==this._thumbnailQueue.length)return this._processingThumbnail=!0,e=this._thumbnailQueue.shift(),this.createThumbnail(e,this.options.thumbnailWidth,this.options.thumbnailHeight,this.options.thumbnailMethod,!0,function(t){return function(i){return t.emit("thumbnail",e,i),t._processingThumbnail=!1,t._processThumbnailQueue()}}(this))},t.prototype.removeFile=function(e){if(e.status===t.UPLOADING&&this.cancelUpload(e),this.files=d(this.files,e),this.emit("removedfile",e),0===this.files.length)return this.emit("reset")},t.prototype.removeAllFiles=function(e){var i,n,o,r;for(null==e&&(e=!1),r=this.files.slice(),n=0,o=r.length;n<o;n++)i=r[n],(i.status!==t.UPLOADING||e)&&this.removeFile(i);return null},t.prototype.resizeImage=function(e,i,o,r,s){return this.createThumbnail(e,i,o,r,!1,function(i){return function(o,r){var a,l;return null===r?s(e):(a=i.options.resizeMimeType,null==a&&(a=e.type),l=r.toDataURL(a,i.options.resizeQuality),"image/jpeg"!==a&&"image/jpg"!==a||(l=n.restore(e.dataURL,l)),s(t.dataURItoBlob(l)))}}(this))},t.prototype.createThumbnail=function(e,t,i,n,o,r){var s;return s=new FileReader,s.onload=function(a){return function(){return e.dataURL=s.result,"image/svg+xml"===e.type?void(null!=r&&r(s.result)):a.createThumbnailFromUrl(e,t,i,n,o,r)}}(this),s.readAsDataURL(e)},t.prototype.createThumbnailFromUrl=function(e,t,i,n,o,r,s){var l;return l=document.createElement("img"),s&&(l.crossOrigin=s),l.onload=function(s){return function(){var d;return d=function(e){return e(1)},"undefined"!=typeof EXIF&&null!==EXIF&&o&&(d=function(e){return EXIF.getData(l,function(){return e(EXIF.getTag(this,"Orientation"))})}),d(function(o){var d,p,u,c,h,f,m,g;switch(e.width=l.width,e.height=l.height,m=s.options.resize.call(s,e,t,i,n),d=document.createElement("canvas"),p=d.getContext("2d"),d.width=m.trgWidth,d.height=m.trgHeight,o>4&&(d.width=m.trgHeight,d.height=m.trgWidth),o){case 2:p.translate(d.width,0),p.scale(-1,1);break;case 3:p.translate(d.width,d.height),p.rotate(Math.PI);break;case 4:p.translate(0,d.height),p.scale(1,-1);break;case 5:p.rotate(.5*Math.PI),p.scale(1,-1);break;case 6:p.rotate(.5*Math.PI),p.translate(0,-d.height);break;case 7:p.rotate(.5*Math.PI),p.translate(d.width,-d.height),p.scale(-1,1);break;case 8:p.rotate(-.5*Math.PI),p.translate(-d.width,0)}if(a(p,l,null!=(u=m.srcX)?u:0,null!=(c=m.srcY)?c:0,m.srcWidth,m.srcHeight,null!=(h=m.trgX)?h:0,null!=(f=m.trgY)?f:0,m.trgWidth,m.trgHeight),g=d.toDataURL("image/png"),null!=r)return r(g,d)})}}(this),null!=r&&(l.onerror=r),l.src=e.dataURL},t.prototype.processQueue=function(){var e,t,i,n;if(t=this.options.parallelUploads,i=this.getUploadingFiles().length,e=i,!(i>=t)&&(n=this.getQueuedFiles(),n.length>0)){if(this.options.uploadMultiple)return this.processFiles(n.slice(0,t-i));for(;e<t;){if(!n.length)return;this.processFile(n.shift()),e++}}},t.prototype.processFile=function(e){return this.processFiles([e])},t.prototype.processFiles=function(e){var i,n,o;for(n=0,o=e.length;n<o;n++)i=e[n],i.processing=!0,i.status=t.UPLOADING,this.emit("processing",i);return this.options.uploadMultiple&&this.emit("processingmultiple",e),this.uploadFiles(e)},t.prototype._getFilesWithXhr=function(e){var t,i;return i=function(){var i,n,o,r;for(o=this.files,r=[],i=0,n=o.length;i<n;i++)t=o[i],t.xhr===e&&r.push(t);return r}.call(this)},t.prototype.cancelUpload=function(e){var i,n,o,r,s,a,l;if(e.status===t.UPLOADING){for(n=this._getFilesWithXhr(e.xhr),o=0,s=n.length;o<s;o++)i=n[o],i.status=t.CANCELED;for(e.xhr.abort(),r=0,a=n.length;r<a;r++)i=n[r],this.emit("canceled",i);this.options.uploadMultiple&&this.emit("canceledmultiple",n)}else(l=e.status)!==t.ADDED&&l!==t.QUEUED||(e.status=t.CANCELED,this.emit("canceled",e),this.options.uploadMultiple&&this.emit("canceledmultiple",[e]));if(this.options.autoProcessQueue)return this.processQueue()},r=function(){var e,t;return t=arguments[0],e=2<=arguments.length?p.call(arguments,1):[],"function"==typeof t?t.apply(this,e):t},t.prototype.uploadFile=function(e){return this.uploadFiles([e])},t.prototype.uploadFiles=function(e){var i,n,s,a,l,d,p,u,c,h,f,m,g,v,z,b,y,w,F,x,k,E,C,T,S,M,A,L,I,O,U,N,P,R,D,_,B;for(B=new XMLHttpRequest,g=0,y=e.length;g<y;g++)s=e[g],s.xhr=B;E=r(this.options.method,e),D=r(this.options.url,e),B.open(E,D,!0),B.timeout=r(this.options.timeout,e),B.withCredentials=!!this.options.withCredentials,N=null,l=function(t){return function(){var i,n,o;for(o=[],i=0,n=e.length;i<n;i++)s=e[i],o.push(t._errorProcessing(e,N||t.options.dictResponseError.replace("{{statusCode}}",B.status),B));return o}}(this),R=function(t){return function(i){var n,o,r,a,l,d,p,u,c;if(null!=i)for(u=100*i.loaded/i.total,o=0,a=e.length;o<a;o++)s=e[o],s.upload.progress=u,s.upload.total=i.total,s.upload.bytesSent=i.loaded;else{for(n=!0,u=100,r=0,l=e.length;r<l;r++)s=e[r],100===s.upload.progress&&s.upload.bytesSent===s.upload.total||(n=!1),s.upload.progress=u,s.upload.bytesSent=s.upload.total;if(n)return}for(c=[],p=0,d=e.length;p<d;p++)s=e[p],c.push(t.emit("uploadprogress",s,u,s.upload.bytesSent));return c}}(this),B.onload=function(i){return function(n){var o;if(e[0].status!==t.CANCELED&&4===B.readyState){if("arraybuffer"!==B.responseType&&"blob"!==B.responseType&&(N=B.responseText,B.getResponseHeader("content-type")&&~B.getResponseHeader("content-type").indexOf("application/json")))try{N=JSON.parse(N)}catch(e){n=e,N="Invalid JSON response from server."}return R(),200<=(o=B.status)&&o<300?i._finished(e,N,n):l()}}}(this),B.onerror=function(i){return function(){if(e[0].status!==t.CANCELED)return l()}}(this),S=null!=(M=B.upload)?M:B,S.onprogress=R,u={Accept:"application/json","Cache-Control":"no-cache","X-Requested-With":"XMLHttpRequest"},this.options.headers&&o(u,this.options.headers);for(d in u)p=u[d],p&&B.setRequestHeader(d,p);if(a=new FormData,this.options.params){A=this.options.params;for(z in A)_=A[z],a.append(z,_)}for(v=0,w=e.length;v<w;v++)s=e[v],this.emit("sending",s,B,a);if(this.options.uploadMultiple&&this.emit("sendingmultiple",e,B,a),"FORM"===this.element.tagName)for(L=this.element.querySelectorAll("input, textarea, select, button"),b=0,F=L.length;b<F;b++)if(h=L[b],f=h.getAttribute("name"),m=h.getAttribute("type"),"SELECT"===h.tagName&&h.hasAttribute("multiple"))for(I=h.options,k=0,x=I.length;k<x;k++)T=I[k],T.selected&&a.append(f,T.value);else(!m||"checkbox"!==(O=m.toLowerCase())&&"radio"!==O||h.checked)&&a.append(f,h.value);for(i=0,P=[],c=C=0,U=e.length-1;0<=U?C<=U:C>=U;c=0<=U?++C:--C)n=function(t){return function(n,o,r){return function(n){if(a.append(o,n,r),++i===e.length)return t.submitRequest(B,a,e)}}}(this),P.push(this.options.transformFile.call(this,e[c],n(e[c],this._getParamName(c),e[c].upload.filename)));return P},t.prototype.submitRequest=function(e,t,i){return e.send(t)},t.prototype._finished=function(e,i,n){var o,r,s;for(r=0,s=e.length;r<s;r++)o=e[r],o.status=t.SUCCESS,this.emit("success",o,i,n),this.emit("complete",o);if(this.options.uploadMultiple&&(this.emit("successmultiple",e,i,n),this.emit("completemultiple",e)),this.options.autoProcessQueue)return this.processQueue()},t.prototype._errorProcessing=function(e,i,n){var o,r,s;for(r=0,s=e.length;r<s;r++)o=e[r],o.status=t.ERROR,this.emit("error",o,i,n),this.emit("complete",o);if(this.options.uploadMultiple&&(this.emit("errormultiple",e,i,n),this.emit("completemultiple",e)),this.options.autoProcessQueue)return this.processQueue()},t}(i),t.version="5.1.1",t.options={},t.optionsForElement=function(e){return e.getAttribute("id")?t.options[o(e.getAttribute("id"))]:void 0},t.instances=[],t.forElement=function(e){if("string"==typeof e&&(e=document.querySelector(e)),null==(null!=e?e.dropzone:void 0))throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");return e.dropzone},t.autoDiscover=!0,t.discover=function(){var e,i,n,o,r,s;for(document.querySelectorAll?n=document.querySelectorAll(".dropzone"):(n=[],e=function(e){var t,i,o,r;for(r=[],i=0,o=e.length;i<o;i++)t=e[i],/(^| )dropzone($| )/.test(t.className)?r.push(n.push(t)):r.push(void 0);return r},e(document.getElementsByTagName("div")),e(document.getElementsByTagName("form"))),s=[],o=0,r=n.length;o<r;o++)i=n[o],t.optionsForElement(i)!==!1?s.push(new t(i)):s.push(void 0);return s},t.blacklistedBrowsers=[/opera.*Macintosh.*version\/12/i],t.isBrowserSupported=function(){var e,i,n,o,r;if(e=!0,window.File&&window.FileReader&&window.FileList&&window.Blob&&window.FormData&&document.querySelector)if("classList"in document.createElement("a"))for(o=t.blacklistedBrowsers,i=0,n=o.length;i<n;i++)r=o[i],r.test(navigator.userAgent)&&(e=!1);else e=!1;else e=!1;return e},t.dataURItoBlob=function(e){var t,i,n,o,r,s,a;for(i=atob(e.split(",")[1]),s=e.split(",")[0].split(":")[1].split(";")[0],t=new ArrayBuffer(i.length),o=new Uint8Array(t),n=r=0,a=i.length;0<=a?r<=a:r>=a;n=0<=a?++r:--r)o[n]=i.charCodeAt(n);return new Blob([t],{type:s})},d=function(e,t){var i,n,o,r;for(r=[],n=0,o=e.length;n<o;n++)i=e[n],i!==t&&r.push(i);return r},o=function(e){return e.replace(/[\-_](\w)/g,function(e){return e.charAt(1).toUpperCase()})},t.createElement=function(e){var t;return t=document.createElement("div"),t.innerHTML=e,t.childNodes[0]},t.elementInside=function(e,t){if(e===t)return!0;for(;e=e.parentNode;)if(e===t)return!0;return!1},t.getElement=function(e,t){var i;if("string"==typeof e?i=document.querySelector(e):null!=e.nodeType&&(i=e),null==i)throw new Error("Invalid `"+t+"` option provided. Please provide a CSS selector or a plain HTML element.");return i},t.getElements=function(e,t){var i,n,o,r,s,a,l,d;if(e instanceof Array){o=[];try{for(r=0,a=e.length;r<a;r++)n=e[r],o.push(this.getElement(n,t))}catch(e){i=e,o=null}}else if("string"==typeof e)for(o=[],d=document.querySelectorAll(e),s=0,l=d.length;s<l;s++)n=d[s],o.push(n);else null!=e.nodeType&&(o=[e]);if(null==o||!o.length)throw new Error("Invalid `"+t+"` option provided. Please provide a CSS selector, a plain HTML element or a list of those.");return o},t.confirm=function(e,t,i){return window.confirm(e)?t():null!=i?i():void 0},t.isValidFile=function(e,t){var i,n,o,r,s;if(!t)return!0;for(t=t.split(","),r=e.type,i=r.replace(/\/.*$/,""),n=0,o=t.length;n<o;n++)if(s=t[n],s=s.trim(),"."===s.charAt(0)){if(e.name.toLowerCase().indexOf(s.toLowerCase(),e.name.length-s.length)!==-1)return!0}else if(/\/\*$/.test(s)){if(i===s.replace(/\/.*$/,""))return!0}else if(r===s)return!0;return!1},"undefined"!=typeof jQuery&&null!==jQuery&&(jQuery.fn.dropzone=function(e){return this.each(function(){return new t(this,e)})}),"undefined"!=typeof e&&null!==e?e.exports=t:window.Dropzone=t,t.ADDED="added",t.QUEUED="queued",t.ACCEPTED=t.QUEUED,t.UPLOADING="uploading",t.PROCESSING=t.UPLOADING,t.CANCELED="canceled",t.ERROR="error",t.SUCCESS="success",s=function(e){var t,i,n,o,r,s,a,l,d,p;for(a=e.naturalWidth,s=e.naturalHeight,i=document.createElement("canvas"),i.width=1,i.height=s,n=i.getContext("2d"),n.drawImage(e,0,0),o=n.getImageData(1,0,1,s).data,p=0,r=s,l=s;l>p;)t=o[4*(l-1)+3],0===t?r=l:p=l,l=r+p>>1;return d=l/s,0===d?1:d},a=function(e,t,i,n,o,r,a,l,d,p){var u;return u=s(t),e.drawImage(t,i,n,o,r,a,l,d,p/u)},n=function(){function e(){}return e.KEY_STR="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",e.encode64=function(e){var t,i,n,o,r,s,a,l,d;for(d="",t=void 0,i=void 0,n="",o=void 0,r=void 0,s=void 0,a="",l=0;;)if(t=e[l++],i=e[l++],n=e[l++],o=t>>2,r=(3&t)<<4|i>>4,s=(15&i)<<2|n>>6,a=63&n,isNaN(i)?s=a=64:isNaN(n)&&(a=64),d=d+this.KEY_STR.charAt(o)+this.KEY_STR.charAt(r)+this.KEY_STR.charAt(s)+this.KEY_STR.charAt(a),t=i=n="",o=r=s=a="",!(l<e.length))break;return d},e.restore=function(e,t){var i,n,o;return e.match("data:image/jpeg;base64,")?(n=this.decode64(e.replace("data:image/jpeg;base64,","")),o=this.slice2Segments(n),i=this.exifManipulation(t,o),"data:image/jpeg;base64,"+this.encode64(i)):t},e.exifManipulation=function(e,t){var i,n,o;return n=this.getExifArray(t),o=this.insertExif(e,n),i=new Uint8Array(o)},e.getExifArray=function(e){var t,i;for(t=void 0,i=0;i<e.length;){if(t=e[i],255===t[0]&225===t[1])return t;i++}return[]},e.insertExif=function(e,t){var i,n,o,r,s,a;return r=e.replace("data:image/jpeg;base64,",""),o=this.decode64(r),a=o.indexOf(255,3),s=o.slice(0,a),n=o.slice(a),i=s,i=i.concat(t),i=i.concat(n)},e.slice2Segments=function(e){var t,i,n,o,r;for(i=0,r=[];;){if(255===e[i]&218===e[i+1])break;if(255===e[i]&216===e[i+1]?i+=2:(n=256*e[i+2]+e[i+3],t=i+n+2,o=e.slice(i,t),r.push(o),i=t),i>e.length)break}return r},e.decode64=function(e){var t,i,n,o,r,s,a,l,d,p,u;for(u="",n=void 0,o=void 0,r="",s=void 0,a=void 0,l=void 0,d="",p=0,i=[],t=/[^A-Za-z0-9\+\/\=]/g,t.exec(e)&&console.warning("There were invalid base64 characters in the input text.\nValid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\nExpect errors in decoding."),e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");;)if(s=this.KEY_STR.indexOf(e.charAt(p++)),a=this.KEY_STR.indexOf(e.charAt(p++)),l=this.KEY_STR.indexOf(e.charAt(p++)),d=this.KEY_STR.indexOf(e.charAt(p++)),n=s<<2|a>>4,o=(15&a)<<4|l>>2,r=(3&l)<<6|d,i.push(n),64!==l&&i.push(o),64!==d&&i.push(r),n=o=r="",s=a=l=d="",!(p<e.length))break;return i},e}(),r=function(e,t){var i,n,o,r,s,a,l,d,p;if(o=!1,p=!0,n=e.document,d=n.documentElement,i=n.addEventListener?"addEventListener":"attachEvent",l=n.addEventListener?"removeEventListener":"detachEvent",a=n.addEventListener?"":"on",r=function(i){if("readystatechange"!==i.type||"complete"===n.readyState)return("load"===i.type?e:n)[l](a+i.type,r,!1),!o&&(o=!0)?t.call(e,i.type||i):void 0},s=function(){var e;try{d.doScroll("left")}catch(t){return e=t,void setTimeout(s,50)}return r("poll")},"complete"!==n.readyState){if(n.createEventObject&&d.doScroll){try{p=!e.frameElement}catch(e){}p&&s()}return n[i](a+"DOMContentLoaded",r,!1),n[i](a+"readystatechange",r,!1),e[i](a+"load",r,!1)}},t._autoDiscoverFunction=function(){if(t.autoDiscover)return t.discover()},r(window,t._autoDiscoverFunction)}).call(this)}).call(t,i(9)(e))},function(e,t){e.exports=' <form :action=url class="vue-dropzone dropzone" :id=id> <slot></slot> </form> '},function(e,t,i){function n(e,t){for(var i=0;i<e.length;i++){var n=e[i],o=u[n.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](n.parts[r]);for(;r<n.parts.length;r++)o.parts.push(l(n.parts[r],t))}else{for(var s=[],r=0;r<n.parts.length;r++)s.push(l(n.parts[r],t));u[n.id]={id:n.id,refs:1,parts:s}}}}function o(e){for(var t=[],i={},n=0;n<e.length;n++){var o=e[n],r=o[0],s=o[1],a=o[2],l=o[3],d={css:s,media:a,sourceMap:l};i[r]?i[r].parts.push(d):t.push(i[r]={id:r,parts:[d]})}return t}function r(e,t){var i=f(),n=v[v.length-1];if("top"===e.insertAt)n?n.nextSibling?i.insertBefore(t,n.nextSibling):i.appendChild(t):i.insertBefore(t,i.firstChild),v.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");i.appendChild(t)}}function s(e){e.parentNode.removeChild(e);var t=v.indexOf(e);t>=0&&v.splice(t,1)}function a(e){var t=document.createElement("style");return t.type="text/css",r(e,t),t}function l(e,t){var i,n,o;if(t.singleton){var r=g++;i=m||(m=a(t)),n=d.bind(null,i,r,!1),o=d.bind(null,i,r,!0)}else i=a(t),n=p.bind(null,i),o=function(){s(i)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}function d(e,t,i,n){var o=i?"":n.css;if(e.styleSheet)e.styleSheet.cssText=z(t,o);else{var r=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(r,s[t]):e.appendChild(r)}}function p(e,t){var i=t.css,n=t.media,o=t.sourceMap;if(n&&e.setAttribute("media",n),o&&(i+="\n/*# sourceURL="+o.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var u={},c=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},h=c(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),f=c(function(){return document.head||document.getElementsByTagName("head")[0]}),m=null,g=0,v=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=h()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var i=o(e);return n(i,t),function(e){for(var r=[],s=0;s<i.length;s++){var a=i[s],l=u[a.id];l.refs--,r.push(l)}if(e){var d=o(e);n(d,t)}for(var s=0;s<r.length;s++){var l=r[s];if(0===l.refs){for(var p=0;p<l.parts.length;p++)l.parts[p]();delete u[l.id]}}}};var z=function(){var e=[];return function(t,i){return e[t]=i,e.filter(Boolean).join("\n")}}()},function(e,t,i){var n=i(4);"string"==typeof n&&(n=[[e.id,n,""]]);i(7)(n,{});n.locals&&(e.exports=n.locals)},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children=[],e.webpackPolyfill=1),e}}])});

/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(219)

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(147),
  /* template */
  __webpack_require__(202),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\xampp\\htdocs\\__inventory_vue__-master\\resources\\assets\\js\\components\\Products\\edit.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] edit.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d5c325b6", Component.options)
  } else {
    hotAPI.reload("data-v-d5c325b6", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_noty__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_noty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_noty__);

/* harmony default export */ __webpack_exports__["a"] = ({
    notyAlert: function notyAlert(type, message) {
        new __WEBPACK_IMPORTED_MODULE_0_noty___default.a({
            type: type,
            layout: 'topRight',
            theme: 'bootstrap-v3',
            text: message,
            timeout: 3000,
            progressBar: true,
            closeWith: ['click', 'button'],
            animation: {
                open: function open(promise) {
                    var n = this;
                    Velocity(n.barDom, {
                        left: 450,
                        scaleY: 2
                    }, {
                        duration: 0
                    });
                    Velocity(n.barDom, {
                        left: 0,
                        scaleY: 1
                    }, {
                        easing: [8, 8],
                        complete: function complete() {
                            promise(function (resolve) {
                                resolve();
                            });
                        }
                    });
                },
                close: function close(promise) {
                    var n = this;
                    Velocity(n.barDom, {
                        left: '+=-50'
                    }, {
                        easing: [8, 8, 2],
                        duration: 350
                    });
                    Velocity(n.barDom, {
                        left: 450,
                        scaleY: .2,
                        height: 0,
                        margin: 0
                    }, {
                        easing: [8, 8],
                        complete: function complete() {
                            promise(function (resolve) {
                                resolve();
                            });
                        }
                    });
                }
            }
        }).show();
    }
});

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

/* 
  @package NOTY - Dependency-free notification library 
  @version version: 3.1.4 
  @contributors https://github.com/needim/noty/graphs/contributors 
  @documentation Examples and Documentation - http://needim.github.com/noty 
  @license Licensed under the MIT licenses: http://www.opensource.org/licenses/mit-license.php 
*/

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Noty", [], factory);
	else if(typeof exports === 'object')
		exports["Noty"] = factory();
	else
		root["Noty"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.css = exports.deepExtend = exports.animationEndEvents = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.inArray = inArray;
exports.stopPropagation = stopPropagation;
exports.generateID = generateID;
exports.outerHeight = outerHeight;
exports.addListener = addListener;
exports.hasClass = hasClass;
exports.addClass = addClass;
exports.removeClass = removeClass;
exports.remove = remove;
exports.classList = classList;
exports.visibilityChangeFlow = visibilityChangeFlow;
exports.createAudioElements = createAudioElements;

var _api = __webpack_require__(1);

var API = _interopRequireWildcard(_api);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var animationEndEvents = exports.animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

function inArray(needle, haystack, argStrict) {
  var key = void 0;
  var strict = !!argStrict;

  if (strict) {
    for (key in haystack) {
      if (haystack.hasOwnProperty(key) && haystack[key] === needle) {
        return true;
      }
    }
  } else {
    for (key in haystack) {
      if (haystack.hasOwnProperty(key) && haystack[key] === needle) {
        return true;
      }
    }
  }
  return false;
}

function stopPropagation(evt) {
  evt = evt || window.event;

  if (typeof evt.stopPropagation !== 'undefined') {
    evt.stopPropagation();
  } else {
    evt.cancelBubble = true;
  }
}

var deepExtend = exports.deepExtend = function deepExtend(out) {
  out = out || {};

  for (var i = 1; i < arguments.length; i++) {
    var obj = arguments[i];

    if (!obj) continue;

    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (Array.isArray(obj[key])) {
          out[key] = obj[key];
        } else if (_typeof(obj[key]) === 'object' && obj[key] !== null) {
          out[key] = deepExtend(out[key], obj[key]);
        } else {
          out[key] = obj[key];
        }
      }
    }
  }

  return out;
};

function generateID() {
  var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  var id = 'noty_' + prefix + '_';

  id += 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0;
    var v = c === 'x' ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });

  return id;
}

function outerHeight(el) {
  var height = el.offsetHeight;
  var style = window.getComputedStyle(el);

  height += parseInt(style.marginTop) + parseInt(style.marginBottom);
  return height;
}

var css = exports.css = function () {
  var cssPrefixes = ['Webkit', 'O', 'Moz', 'ms'];
  var cssProps = {};

  function camelCase(string) {
    return string.replace(/^-ms-/, 'ms-').replace(/-([\da-z])/gi, function (match, letter) {
      return letter.toUpperCase();
    });
  }

  function getVendorProp(name) {
    var style = document.body.style;
    if (name in style) return name;

    var i = cssPrefixes.length;
    var capName = name.charAt(0).toUpperCase() + name.slice(1);
    var vendorName = void 0;

    while (i--) {
      vendorName = cssPrefixes[i] + capName;
      if (vendorName in style) return vendorName;
    }

    return name;
  }

  function getStyleProp(name) {
    name = camelCase(name);
    return cssProps[name] || (cssProps[name] = getVendorProp(name));
  }

  function applyCss(element, prop, value) {
    prop = getStyleProp(prop);
    element.style[prop] = value;
  }

  return function (element, properties) {
    var args = arguments;
    var prop = void 0;
    var value = void 0;

    if (args.length === 2) {
      for (prop in properties) {
        if (properties.hasOwnProperty(prop)) {
          value = properties[prop];
          if (value !== undefined && properties.hasOwnProperty(prop)) {
            applyCss(element, prop, value);
          }
        }
      }
    } else {
      applyCss(element, args[1], args[2]);
    }
  };
}();

function addListener(el, events, cb) {
  var useCapture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  events = events.split(' ');
  for (var i = 0; i < events.length; i++) {
    if (document.addEventListener) {
      el.addEventListener(events[i], cb, useCapture);
    } else if (document.attachEvent) {
      el.attachEvent('on' + events[i], cb);
    }
  }
}

function hasClass(element, name) {
  var list = typeof element === 'string' ? element : classList(element);
  return list.indexOf(' ' + name + ' ') >= 0;
}

function addClass(element, name) {
  var oldList = classList(element);
  var newList = oldList + name;

  if (hasClass(oldList, name)) return;

  // Trim the opening space.
  element.className = newList.substring(1);
}

function removeClass(element, name) {
  var oldList = classList(element);
  var newList = void 0;

  if (!hasClass(element, name)) return;

  // Replace the class name.
  newList = oldList.replace(' ' + name + ' ', ' ');

  // Trim the opening and closing spaces.
  element.className = newList.substring(1, newList.length - 1);
}

function remove(element) {
  if (element.parentNode) {
    element.parentNode.removeChild(element);
  }
}

function classList(element) {
  return (' ' + (element && element.className || '') + ' ').replace(/\s+/gi, ' ');
}

function visibilityChangeFlow() {
  var hidden = void 0;
  var visibilityChange = void 0;
  if (typeof document.hidden !== 'undefined') {
    // Opera 12.10 and Firefox 18 and later support
    hidden = 'hidden';
    visibilityChange = 'visibilitychange';
  } else if (typeof document.msHidden !== 'undefined') {
    hidden = 'msHidden';
    visibilityChange = 'msvisibilitychange';
  } else if (typeof document.webkitHidden !== 'undefined') {
    hidden = 'webkitHidden';
    visibilityChange = 'webkitvisibilitychange';
  }

  function onVisibilityChange() {
    API.PageHidden = document[hidden];
    handleVisibilityChange();
  }

  function onBlur() {
    API.PageHidden = true;
    handleVisibilityChange();
  }

  function onFocus() {
    API.PageHidden = false;
    handleVisibilityChange();
  }

  function handleVisibilityChange() {
    if (API.PageHidden) stopAll();else resumeAll();
  }

  function stopAll() {
    setTimeout(function () {
      Object.keys(API.Store).forEach(function (id) {
        if (API.Store.hasOwnProperty(id)) {
          if (API.Store[id].options.visibilityControl) {
            API.Store[id].stop();
          }
        }
      });
    }, 100);
  }

  function resumeAll() {
    setTimeout(function () {
      Object.keys(API.Store).forEach(function (id) {
        if (API.Store.hasOwnProperty(id)) {
          if (API.Store[id].options.visibilityControl) {
            API.Store[id].resume();
          }
        }
      });
      API.queueRenderAll();
    }, 100);
  }

  if (visibilityChange) {
    addListener(document, visibilityChange, onVisibilityChange);
  }

  addListener(window, 'blur', onBlur);
  addListener(window, 'focus', onFocus);
}

function createAudioElements(ref) {
  if (ref.hasSound) {
    var audioElement = document.createElement('audio');

    ref.options.sounds.sources.forEach(function (s) {
      var source = document.createElement('source');
      source.src = s;
      source.type = 'audio/' + getExtension(s);
      audioElement.appendChild(source);
    });

    if (ref.barDom) {
      ref.barDom.appendChild(audioElement);
    } else {
      document.querySelector('body').appendChild(audioElement);
    }

    audioElement.volume = ref.options.sounds.volume;

    if (!ref.soundPlayed) {
      audioElement.play();
      ref.soundPlayed = true;
    }

    audioElement.onended = function () {
      remove(audioElement);
    };
  }
}

function getExtension(fileName) {
  return fileName.match(/\.([^.]+)$/)[1];
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Defaults = exports.Store = exports.Queues = exports.DefaultMaxVisible = exports.docTitle = exports.DocModalCount = exports.PageHidden = undefined;
exports.getQueueCounts = getQueueCounts;
exports.addToQueue = addToQueue;
exports.removeFromQueue = removeFromQueue;
exports.queueRender = queueRender;
exports.queueRenderAll = queueRenderAll;
exports.ghostFix = ghostFix;
exports.build = build;
exports.hasButtons = hasButtons;
exports.handleModal = handleModal;
exports.handleModalClose = handleModalClose;
exports.queueClose = queueClose;
exports.dequeueClose = dequeueClose;
exports.fire = fire;
exports.openFlow = openFlow;
exports.closeFlow = closeFlow;

var _utils = __webpack_require__(0);

var Utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var PageHidden = exports.PageHidden = false;
var DocModalCount = exports.DocModalCount = 0;

var DocTitleProps = {
  originalTitle: null,
  count: 0,
  changed: false,
  timer: -1
};

var docTitle = exports.docTitle = {
  increment: function increment() {
    DocTitleProps.count++;

    docTitle._update();
  },

  decrement: function decrement() {
    DocTitleProps.count--;

    if (DocTitleProps.count <= 0) {
      docTitle._clear();
      return;
    }

    docTitle._update();
  },

  _update: function _update() {
    var title = document.title;

    if (!DocTitleProps.changed) {
      DocTitleProps.originalTitle = title;
      document.title = '(' + DocTitleProps.count + ') ' + title;
      DocTitleProps.changed = true;
    } else {
      document.title = '(' + DocTitleProps.count + ') ' + DocTitleProps.originalTitle;
    }
  },

  _clear: function _clear() {
    if (DocTitleProps.changed) {
      DocTitleProps.count = 0;
      document.title = DocTitleProps.originalTitle;
      DocTitleProps.changed = false;
    }
  }
};

var DefaultMaxVisible = exports.DefaultMaxVisible = 5;

var Queues = exports.Queues = {
  global: {
    maxVisible: DefaultMaxVisible,
    queue: []
  }
};

var Store = exports.Store = {};

var Defaults = exports.Defaults = {
  type: 'alert',
  layout: 'topRight',
  theme: 'mint',
  text: '',
  timeout: false,
  progressBar: true,
  closeWith: ['click'],
  animation: {
    open: 'noty_effects_open',
    close: 'noty_effects_close'
  },
  id: false,
  force: false,
  killer: false,
  queue: 'global',
  container: false,
  buttons: [],
  callbacks: {
    beforeShow: null,
    onShow: null,
    afterShow: null,
    onClose: null,
    afterClose: null,
    onClick: null,
    onHover: null,
    onTemplate: null
  },
  sounds: {
    sources: [],
    volume: 1,
    conditions: []
  },
  titleCount: {
    conditions: []
  },
  modal: false,
  visibilityControl: false

  /**
   * @param {string} queueName
   * @return {object}
   */
};function getQueueCounts() {
  var queueName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'global';

  var count = 0;
  var max = DefaultMaxVisible;

  if (Queues.hasOwnProperty(queueName)) {
    max = Queues[queueName].maxVisible;
    Object.keys(Store).forEach(function (i) {
      if (Store[i].options.queue === queueName && !Store[i].closed) count++;
    });
  }

  return {
    current: count,
    maxVisible: max
  };
}

/**
 * @param {Noty} ref
 * @return {void}
 */
function addToQueue(ref) {
  if (!Queues.hasOwnProperty(ref.options.queue)) {
    Queues[ref.options.queue] = { maxVisible: DefaultMaxVisible, queue: [] };
  }

  Queues[ref.options.queue].queue.push(ref);
}

/**
 * @param {Noty} ref
 * @return {void}
 */
function removeFromQueue(ref) {
  if (Queues.hasOwnProperty(ref.options.queue)) {
    var queue = [];
    Object.keys(Queues[ref.options.queue].queue).forEach(function (i) {
      if (Queues[ref.options.queue].queue[i].id !== ref.id) {
        queue.push(Queues[ref.options.queue].queue[i]);
      }
    });
    Queues[ref.options.queue].queue = queue;
  }
}

/**
 * @param {string} queueName
 * @return {void}
 */
function queueRender() {
  var queueName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'global';

  if (Queues.hasOwnProperty(queueName)) {
    var noty = Queues[queueName].queue.shift();

    if (noty) noty.show();
  }
}

/**
 * @return {void}
 */
function queueRenderAll() {
  Object.keys(Queues).forEach(function (queueName) {
    queueRender(queueName);
  });
}

/**
 * @param {Noty} ref
 * @return {void}
 */
function ghostFix(ref) {
  var ghostID = Utils.generateID('ghost');
  var ghost = document.createElement('div');
  ghost.setAttribute('id', ghostID);
  Utils.css(ghost, {
    height: Utils.outerHeight(ref.barDom) + 'px'
  });

  ref.barDom.insertAdjacentHTML('afterend', ghost.outerHTML);

  Utils.remove(ref.barDom);
  ghost = document.getElementById(ghostID);
  Utils.addClass(ghost, 'noty_fix_effects_height');
  Utils.addListener(ghost, Utils.animationEndEvents, function () {
    Utils.remove(ghost);
  });
}

/**
 * @param {Noty} ref
 * @return {void}
 */
function build(ref) {
  findOrCreateContainer(ref);

  var markup = '<div class="noty_body">' + ref.options.text + '</div>' + buildButtons(ref) + '<div class="noty_progressbar"></div>';

  ref.barDom = document.createElement('div');
  ref.barDom.setAttribute('id', ref.id);
  Utils.addClass(ref.barDom, 'noty_bar noty_type__' + ref.options.type + ' noty_theme__' + ref.options.theme);

  ref.barDom.innerHTML = markup;

  fire(ref, 'onTemplate');
}

/**
 * @param {Noty} ref
 * @return {boolean}
 */
function hasButtons(ref) {
  return !!(ref.options.buttons && Object.keys(ref.options.buttons).length);
}

/**
 * @param {Noty} ref
 * @return {string}
 */
function buildButtons(ref) {
  if (hasButtons(ref)) {
    var buttons = document.createElement('div');
    Utils.addClass(buttons, 'noty_buttons');

    Object.keys(ref.options.buttons).forEach(function (key) {
      buttons.appendChild(ref.options.buttons[key].dom);
    });

    ref.options.buttons.forEach(function (btn) {
      buttons.appendChild(btn.dom);
    });
    return buttons.outerHTML;
  }
  return '';
}

/**
 * @param {Noty} ref
 * @return {void}
 */
function handleModal(ref) {
  if (ref.options.modal) {
    if (DocModalCount === 0) {
      createModal(ref);
    }

    exports.DocModalCount = DocModalCount += 1;
  }
}

/**
 * @param {Noty} ref
 * @return {void}
 */
function handleModalClose(ref) {
  if (ref.options.modal && DocModalCount > 0) {
    exports.DocModalCount = DocModalCount -= 1;

    if (DocModalCount <= 0) {
      var modal = document.querySelector('.noty_modal');

      if (modal) {
        Utils.removeClass(modal, 'noty_modal_open');
        Utils.addClass(modal, 'noty_modal_close');
        Utils.addListener(modal, Utils.animationEndEvents, function () {
          Utils.remove(modal);
        });
      }
    }
  }
}

/**
 * @return {void}
 */
function createModal() {
  var body = document.querySelector('body');
  var modal = document.createElement('div');
  Utils.addClass(modal, 'noty_modal');
  body.insertBefore(modal, body.firstChild);
  Utils.addClass(modal, 'noty_modal_open');

  Utils.addListener(modal, Utils.animationEndEvents, function () {
    Utils.removeClass(modal, 'noty_modal_open');
  });
}

/**
 * @param {Noty} ref
 * @return {void}
 */
function findOrCreateContainer(ref) {
  if (ref.options.container) {
    ref.layoutDom = document.querySelector(ref.options.container);
    return;
  }

  var layoutID = 'noty_layout__' + ref.options.layout;
  ref.layoutDom = document.querySelector('div#' + layoutID);

  if (!ref.layoutDom) {
    ref.layoutDom = document.createElement('div');
    ref.layoutDom.setAttribute('id', layoutID);
    ref.layoutDom.setAttribute('role', 'alert');
    ref.layoutDom.setAttribute('aria-live', 'polite');
    Utils.addClass(ref.layoutDom, 'noty_layout');
    document.querySelector('body').appendChild(ref.layoutDom);
  }
}

/**
 * @param {Noty} ref
 * @return {void}
 */
function queueClose(ref) {
  if (ref.options.timeout) {
    if (ref.options.progressBar && ref.progressDom) {
      Utils.css(ref.progressDom, {
        transition: 'width ' + ref.options.timeout + 'ms linear',
        width: '0%'
      });
    }

    clearTimeout(ref.closeTimer);

    ref.closeTimer = setTimeout(function () {
      ref.close();
    }, ref.options.timeout);
  }
}

/**
 * @param {Noty} ref
 * @return {void}
 */
function dequeueClose(ref) {
  if (ref.options.timeout && ref.closeTimer) {
    clearTimeout(ref.closeTimer);
    ref.closeTimer = -1;

    if (ref.options.progressBar && ref.progressDom) {
      Utils.css(ref.progressDom, {
        transition: 'width 0ms linear',
        width: '100%'
      });
    }
  }
}

/**
 * @param {Noty} ref
 * @param {string} eventName
 * @return {void}
 */
function fire(ref, eventName) {
  if (ref.listeners.hasOwnProperty(eventName)) {
    ref.listeners[eventName].forEach(function (cb) {
      if (typeof cb === 'function') {
        cb.apply(ref);
      }
    });
  }
}

/**
 * @param {Noty} ref
 * @return {void}
 */
function openFlow(ref) {
  fire(ref, 'afterShow');
  queueClose(ref);

  Utils.addListener(ref.barDom, 'mouseenter', function () {
    dequeueClose(ref);
  });

  Utils.addListener(ref.barDom, 'mouseleave', function () {
    queueClose(ref);
  });
}

/**
 * @param {Noty} ref
 * @return {void}
 */
function closeFlow(ref) {
  delete Store[ref.id];
  ref.closing = false;
  fire(ref, 'afterClose');

  Utils.remove(ref.barDom);

  if (ref.layoutDom.querySelectorAll('.noty_bar').length === 0 && !ref.options.container) {
    Utils.remove(ref.layoutDom);
  }

  if (Utils.inArray('docVisible', ref.options.titleCount.conditions) || Utils.inArray('docHidden', ref.options.titleCount.conditions)) {
    docTitle.decrement();
  }

  queueRender(ref.options.queue);
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotyButton = undefined;

var _utils = __webpack_require__(0);

var Utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NotyButton = exports.NotyButton = function NotyButton(html, classes, cb) {
  var _this = this;

  var attributes = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  _classCallCheck(this, NotyButton);

  this.dom = document.createElement('button');
  this.dom.innerHTML = html;
  this.id = attributes.id = attributes.id || Utils.generateID('button');
  this.cb = cb;
  Object.keys(attributes).forEach(function (propertyName) {
    _this.dom.setAttribute(propertyName, attributes[propertyName]);
  });
  Utils.addClass(this.dom, classes || 'noty_btn');

  return this;
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Push = exports.Push = function () {
  function Push() {
    var workerPath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/service-worker.js';

    _classCallCheck(this, Push);

    this.subData = {};
    this.workerPath = workerPath;
    this.listeners = {
      onPermissionGranted: [],
      onPermissionDenied: [],
      onSubscriptionSuccess: [],
      onSubscriptionCancel: [],
      onWorkerError: [],
      onWorkerSuccess: [],
      onWorkerNotSupported: []
    };
    return this;
  }

  /**
   * @param {string} eventName
   * @param {function} cb
   * @return {Push}
   */


  _createClass(Push, [{
    key: 'on',
    value: function on(eventName) {
      var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

      if (typeof cb === 'function' && this.listeners.hasOwnProperty(eventName)) {
        this.listeners[eventName].push(cb);
      }

      return this;
    }
  }, {
    key: 'fire',
    value: function fire(eventName) {
      var _this = this;

      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      if (this.listeners.hasOwnProperty(eventName)) {
        this.listeners[eventName].forEach(function (cb) {
          if (typeof cb === 'function') {
            cb.apply(_this, params);
          }
        });
      }
    }
  }, {
    key: 'create',
    value: function create() {
      console.log('NOT IMPLEMENTED YET');
    }

    /**
     * @return {boolean}
     */

  }, {
    key: 'isSupported',
    value: function isSupported() {
      var result = false;

      try {
        result = window.Notification || window.webkitNotifications || navigator.mozNotification || window.external && window.external.msIsSiteMode() !== undefined;
      } catch (e) {}

      return result;
    }

    /**
     * @return {string}
     */

  }, {
    key: 'getPermissionStatus',
    value: function getPermissionStatus() {
      var perm = 'default';

      if (window.Notification && window.Notification.permissionLevel) {
        perm = window.Notification.permissionLevel;
      } else if (window.webkitNotifications && window.webkitNotifications.checkPermission) {
        switch (window.webkitNotifications.checkPermission()) {
          case 1:
            perm = 'default';
            break;
          case 0:
            perm = 'granted';
            break;
          default:
            perm = 'denied';
        }
      } else if (window.Notification && window.Notification.permission) {
        perm = window.Notification.permission;
      } else if (navigator.mozNotification) {
        perm = 'granted';
      } else if (window.external && window.external.msIsSiteMode() !== undefined) {
        perm = window.external.msIsSiteMode() ? 'granted' : 'default';
      }

      return perm.toString().toLowerCase();
    }

    /**
     * @return {string}
     */

  }, {
    key: 'getEndpoint',
    value: function getEndpoint(subscription) {
      var endpoint = subscription.endpoint;
      var subscriptionId = subscription.subscriptionId;

      // fix for Chrome < 45
      if (subscriptionId && endpoint.indexOf(subscriptionId) === -1) {
        endpoint += '/' + subscriptionId;
      }

      return endpoint;
    }

    /**
     * @return {boolean}
     */

  }, {
    key: 'isSWRegistered',
    value: function isSWRegistered() {
      try {
        return navigator.serviceWorker.controller.state === 'activated';
      } catch (e) {
        return false;
      }
    }

    /**
     * @return {void}
     */

  }, {
    key: 'unregisterWorker',
    value: function unregisterWorker() {
      var self = this;
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.getRegistrations().then(function (registrations) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = registrations[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var registration = _step.value;

              registration.unregister();
              self.fire('onSubscriptionCancel');
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        });
      }
    }

    /**
     * @return {void}
     */

  }, {
    key: 'requestSubscription',
    value: function requestSubscription() {
      var _this2 = this;

      var userVisibleOnly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      var self = this;
      var current = this.getPermissionStatus();
      var cb = function cb(result) {
        if (result === 'granted') {
          _this2.fire('onPermissionGranted');

          if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register(_this2.workerPath).then(function () {
              navigator.serviceWorker.ready.then(function (serviceWorkerRegistration) {
                self.fire('onWorkerSuccess');
                serviceWorkerRegistration.pushManager.subscribe({
                  userVisibleOnly: userVisibleOnly
                }).then(function (subscription) {
                  var key = subscription.getKey('p256dh');
                  var token = subscription.getKey('auth');

                  self.subData = {
                    endpoint: self.getEndpoint(subscription),
                    p256dh: key ? window.btoa(String.fromCharCode.apply(null, new Uint8Array(key))) : null,
                    auth: token ? window.btoa(String.fromCharCode.apply(null, new Uint8Array(token))) : null
                  };

                  self.fire('onSubscriptionSuccess', [self.subData]);
                }).catch(function (err) {
                  self.fire('onWorkerError', [err]);
                });
              });
            });
          } else {
            self.fire('onWorkerNotSupported');
          }
        } else if (result === 'denied') {
          _this2.fire('onPermissionDenied');
          _this2.unregisterWorker();
        }
      };

      if (current === 'default') {
        if (window.Notification && window.Notification.requestPermission) {
          window.Notification.requestPermission(cb);
        } else if (window.webkitNotifications && window.webkitNotifications.checkPermission) {
          window.webkitNotifications.requestPermission(cb);
        }
      } else {
        cb(current);
      }
    }
  }]);

  return Push;
}();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, global) {var require;/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   4.1.1
 */

(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.ES6Promise = factory());
}(this, (function () { 'use strict';

function objectOrFunction(x) {
  var type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}

function isFunction(x) {
  return typeof x === 'function';
}

var _isArray = undefined;
if (Array.isArray) {
  _isArray = Array.isArray;
} else {
  _isArray = function (x) {
    return Object.prototype.toString.call(x) === '[object Array]';
  };
}

var isArray = _isArray;

var len = 0;
var vertxNext = undefined;
var customSchedulerFn = undefined;

var asap = function asap(callback, arg) {
  queue[len] = callback;
  queue[len + 1] = arg;
  len += 2;
  if (len === 2) {
    // If len is 2, that means that we need to schedule an async flush.
    // If additional callbacks are queued before the queue is flushed, they
    // will be processed by this flush that we are scheduling.
    if (customSchedulerFn) {
      customSchedulerFn(flush);
    } else {
      scheduleFlush();
    }
  }
};

function setScheduler(scheduleFn) {
  customSchedulerFn = scheduleFn;
}

function setAsap(asapFn) {
  asap = asapFn;
}

var browserWindow = typeof window !== 'undefined' ? window : undefined;
var browserGlobal = browserWindow || {};
var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && ({}).toString.call(process) === '[object process]';

// test for web worker but not in IE10
var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';

// node
function useNextTick() {
  // node version 0.10.x displays a deprecation warning when nextTick is used recursively
  // see https://github.com/cujojs/when/issues/410 for details
  return function () {
    return process.nextTick(flush);
  };
}

// vertx
function useVertxTimer() {
  if (typeof vertxNext !== 'undefined') {
    return function () {
      vertxNext(flush);
    };
  }

  return useSetTimeout();
}

function useMutationObserver() {
  var iterations = 0;
  var observer = new BrowserMutationObserver(flush);
  var node = document.createTextNode('');
  observer.observe(node, { characterData: true });

  return function () {
    node.data = iterations = ++iterations % 2;
  };
}

// web worker
function useMessageChannel() {
  var channel = new MessageChannel();
  channel.port1.onmessage = flush;
  return function () {
    return channel.port2.postMessage(0);
  };
}

function useSetTimeout() {
  // Store setTimeout reference so es6-promise will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())
  var globalSetTimeout = setTimeout;
  return function () {
    return globalSetTimeout(flush, 1);
  };
}

var queue = new Array(1000);
function flush() {
  for (var i = 0; i < len; i += 2) {
    var callback = queue[i];
    var arg = queue[i + 1];

    callback(arg);

    queue[i] = undefined;
    queue[i + 1] = undefined;
  }

  len = 0;
}

function attemptVertx() {
  try {
    var r = require;
    var vertx = __webpack_require__(9);
    vertxNext = vertx.runOnLoop || vertx.runOnContext;
    return useVertxTimer();
  } catch (e) {
    return useSetTimeout();
  }
}

var scheduleFlush = undefined;
// Decide what async method to use to triggering processing of queued callbacks:
if (isNode) {
  scheduleFlush = useNextTick();
} else if (BrowserMutationObserver) {
  scheduleFlush = useMutationObserver();
} else if (isWorker) {
  scheduleFlush = useMessageChannel();
} else if (browserWindow === undefined && "function" === 'function') {
  scheduleFlush = attemptVertx();
} else {
  scheduleFlush = useSetTimeout();
}

function then(onFulfillment, onRejection) {
  var _arguments = arguments;

  var parent = this;

  var child = new this.constructor(noop);

  if (child[PROMISE_ID] === undefined) {
    makePromise(child);
  }

  var _state = parent._state;

  if (_state) {
    (function () {
      var callback = _arguments[_state - 1];
      asap(function () {
        return invokeCallback(_state, child, callback, parent._result);
      });
    })();
  } else {
    subscribe(parent, child, onFulfillment, onRejection);
  }

  return child;
}

/**
  `Promise.resolve` returns a promise that will become resolved with the
  passed `value`. It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    resolve(1);
  });

  promise.then(function(value){
    // value === 1
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.resolve(1);

  promise.then(function(value){
    // value === 1
  });
  ```

  @method resolve
  @static
  @param {Any} value value that the returned promise will be resolved with
  Useful for tooling.
  @return {Promise} a promise that will become fulfilled with the given
  `value`
*/
function resolve$1(object) {
  /*jshint validthis:true */
  var Constructor = this;

  if (object && typeof object === 'object' && object.constructor === Constructor) {
    return object;
  }

  var promise = new Constructor(noop);
  resolve(promise, object);
  return promise;
}

var PROMISE_ID = Math.random().toString(36).substring(16);

function noop() {}

var PENDING = void 0;
var FULFILLED = 1;
var REJECTED = 2;

var GET_THEN_ERROR = new ErrorObject();

function selfFulfillment() {
  return new TypeError("You cannot resolve a promise with itself");
}

function cannotReturnOwn() {
  return new TypeError('A promises callback cannot return that same promise.');
}

function getThen(promise) {
  try {
    return promise.then;
  } catch (error) {
    GET_THEN_ERROR.error = error;
    return GET_THEN_ERROR;
  }
}

function tryThen(then$$1, value, fulfillmentHandler, rejectionHandler) {
  try {
    then$$1.call(value, fulfillmentHandler, rejectionHandler);
  } catch (e) {
    return e;
  }
}

function handleForeignThenable(promise, thenable, then$$1) {
  asap(function (promise) {
    var sealed = false;
    var error = tryThen(then$$1, thenable, function (value) {
      if (sealed) {
        return;
      }
      sealed = true;
      if (thenable !== value) {
        resolve(promise, value);
      } else {
        fulfill(promise, value);
      }
    }, function (reason) {
      if (sealed) {
        return;
      }
      sealed = true;

      reject(promise, reason);
    }, 'Settle: ' + (promise._label || ' unknown promise'));

    if (!sealed && error) {
      sealed = true;
      reject(promise, error);
    }
  }, promise);
}

function handleOwnThenable(promise, thenable) {
  if (thenable._state === FULFILLED) {
    fulfill(promise, thenable._result);
  } else if (thenable._state === REJECTED) {
    reject(promise, thenable._result);
  } else {
    subscribe(thenable, undefined, function (value) {
      return resolve(promise, value);
    }, function (reason) {
      return reject(promise, reason);
    });
  }
}

function handleMaybeThenable(promise, maybeThenable, then$$1) {
  if (maybeThenable.constructor === promise.constructor && then$$1 === then && maybeThenable.constructor.resolve === resolve$1) {
    handleOwnThenable(promise, maybeThenable);
  } else {
    if (then$$1 === GET_THEN_ERROR) {
      reject(promise, GET_THEN_ERROR.error);
      GET_THEN_ERROR.error = null;
    } else if (then$$1 === undefined) {
      fulfill(promise, maybeThenable);
    } else if (isFunction(then$$1)) {
      handleForeignThenable(promise, maybeThenable, then$$1);
    } else {
      fulfill(promise, maybeThenable);
    }
  }
}

function resolve(promise, value) {
  if (promise === value) {
    reject(promise, selfFulfillment());
  } else if (objectOrFunction(value)) {
    handleMaybeThenable(promise, value, getThen(value));
  } else {
    fulfill(promise, value);
  }
}

function publishRejection(promise) {
  if (promise._onerror) {
    promise._onerror(promise._result);
  }

  publish(promise);
}

function fulfill(promise, value) {
  if (promise._state !== PENDING) {
    return;
  }

  promise._result = value;
  promise._state = FULFILLED;

  if (promise._subscribers.length !== 0) {
    asap(publish, promise);
  }
}

function reject(promise, reason) {
  if (promise._state !== PENDING) {
    return;
  }
  promise._state = REJECTED;
  promise._result = reason;

  asap(publishRejection, promise);
}

function subscribe(parent, child, onFulfillment, onRejection) {
  var _subscribers = parent._subscribers;
  var length = _subscribers.length;

  parent._onerror = null;

  _subscribers[length] = child;
  _subscribers[length + FULFILLED] = onFulfillment;
  _subscribers[length + REJECTED] = onRejection;

  if (length === 0 && parent._state) {
    asap(publish, parent);
  }
}

function publish(promise) {
  var subscribers = promise._subscribers;
  var settled = promise._state;

  if (subscribers.length === 0) {
    return;
  }

  var child = undefined,
      callback = undefined,
      detail = promise._result;

  for (var i = 0; i < subscribers.length; i += 3) {
    child = subscribers[i];
    callback = subscribers[i + settled];

    if (child) {
      invokeCallback(settled, child, callback, detail);
    } else {
      callback(detail);
    }
  }

  promise._subscribers.length = 0;
}

function ErrorObject() {
  this.error = null;
}

var TRY_CATCH_ERROR = new ErrorObject();

function tryCatch(callback, detail) {
  try {
    return callback(detail);
  } catch (e) {
    TRY_CATCH_ERROR.error = e;
    return TRY_CATCH_ERROR;
  }
}

function invokeCallback(settled, promise, callback, detail) {
  var hasCallback = isFunction(callback),
      value = undefined,
      error = undefined,
      succeeded = undefined,
      failed = undefined;

  if (hasCallback) {
    value = tryCatch(callback, detail);

    if (value === TRY_CATCH_ERROR) {
      failed = true;
      error = value.error;
      value.error = null;
    } else {
      succeeded = true;
    }

    if (promise === value) {
      reject(promise, cannotReturnOwn());
      return;
    }
  } else {
    value = detail;
    succeeded = true;
  }

  if (promise._state !== PENDING) {
    // noop
  } else if (hasCallback && succeeded) {
      resolve(promise, value);
    } else if (failed) {
      reject(promise, error);
    } else if (settled === FULFILLED) {
      fulfill(promise, value);
    } else if (settled === REJECTED) {
      reject(promise, value);
    }
}

function initializePromise(promise, resolver) {
  try {
    resolver(function resolvePromise(value) {
      resolve(promise, value);
    }, function rejectPromise(reason) {
      reject(promise, reason);
    });
  } catch (e) {
    reject(promise, e);
  }
}

var id = 0;
function nextId() {
  return id++;
}

function makePromise(promise) {
  promise[PROMISE_ID] = id++;
  promise._state = undefined;
  promise._result = undefined;
  promise._subscribers = [];
}

function Enumerator$1(Constructor, input) {
  this._instanceConstructor = Constructor;
  this.promise = new Constructor(noop);

  if (!this.promise[PROMISE_ID]) {
    makePromise(this.promise);
  }

  if (isArray(input)) {
    this.length = input.length;
    this._remaining = input.length;

    this._result = new Array(this.length);

    if (this.length === 0) {
      fulfill(this.promise, this._result);
    } else {
      this.length = this.length || 0;
      this._enumerate(input);
      if (this._remaining === 0) {
        fulfill(this.promise, this._result);
      }
    }
  } else {
    reject(this.promise, validationError());
  }
}

function validationError() {
  return new Error('Array Methods must be provided an Array');
}

Enumerator$1.prototype._enumerate = function (input) {
  for (var i = 0; this._state === PENDING && i < input.length; i++) {
    this._eachEntry(input[i], i);
  }
};

Enumerator$1.prototype._eachEntry = function (entry, i) {
  var c = this._instanceConstructor;
  var resolve$$1 = c.resolve;

  if (resolve$$1 === resolve$1) {
    var _then = getThen(entry);

    if (_then === then && entry._state !== PENDING) {
      this._settledAt(entry._state, i, entry._result);
    } else if (typeof _then !== 'function') {
      this._remaining--;
      this._result[i] = entry;
    } else if (c === Promise$2) {
      var promise = new c(noop);
      handleMaybeThenable(promise, entry, _then);
      this._willSettleAt(promise, i);
    } else {
      this._willSettleAt(new c(function (resolve$$1) {
        return resolve$$1(entry);
      }), i);
    }
  } else {
    this._willSettleAt(resolve$$1(entry), i);
  }
};

Enumerator$1.prototype._settledAt = function (state, i, value) {
  var promise = this.promise;

  if (promise._state === PENDING) {
    this._remaining--;

    if (state === REJECTED) {
      reject(promise, value);
    } else {
      this._result[i] = value;
    }
  }

  if (this._remaining === 0) {
    fulfill(promise, this._result);
  }
};

Enumerator$1.prototype._willSettleAt = function (promise, i) {
  var enumerator = this;

  subscribe(promise, undefined, function (value) {
    return enumerator._settledAt(FULFILLED, i, value);
  }, function (reason) {
    return enumerator._settledAt(REJECTED, i, reason);
  });
};

/**
  `Promise.all` accepts an array of promises, and returns a new promise which
  is fulfilled with an array of fulfillment values for the passed promises, or
  rejected with the reason of the first passed promise to be rejected. It casts all
  elements of the passed iterable to promises as it runs this algorithm.

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = resolve(2);
  let promise3 = resolve(3);
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // The array here would be [ 1, 2, 3 ];
  });
  ```

  If any of the `promises` given to `all` are rejected, the first promise
  that is rejected will be given as an argument to the returned promises's
  rejection handler. For example:

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = reject(new Error("2"));
  let promise3 = reject(new Error("3"));
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // Code here never runs because there are rejected promises!
  }, function(error) {
    // error.message === "2"
  });
  ```

  @method all
  @static
  @param {Array} entries array of promises
  @param {String} label optional string for labeling the promise.
  Useful for tooling.
  @return {Promise} promise that is fulfilled when all `promises` have been
  fulfilled, or rejected if any of them become rejected.
  @static
*/
function all$1(entries) {
  return new Enumerator$1(this, entries).promise;
}

/**
  `Promise.race` returns a new promise which is settled in the same way as the
  first passed promise to settle.

  Example:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 2');
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // result === 'promise 2' because it was resolved before promise1
    // was resolved.
  });
  ```

  `Promise.race` is deterministic in that only the state of the first
  settled promise matters. For example, even if other promises given to the
  `promises` array argument are resolved, but the first settled promise has
  become rejected before the other promises became fulfilled, the returned
  promise will become rejected:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      reject(new Error('promise 2'));
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // Code here never runs
  }, function(reason){
    // reason.message === 'promise 2' because promise 2 became rejected before
    // promise 1 became fulfilled
  });
  ```

  An example real-world use case is implementing timeouts:

  ```javascript
  Promise.race([ajax('foo.json'), timeout(5000)])
  ```

  @method race
  @static
  @param {Array} promises array of promises to observe
  Useful for tooling.
  @return {Promise} a promise which settles in the same way as the first passed
  promise to settle.
*/
function race$1(entries) {
  /*jshint validthis:true */
  var Constructor = this;

  if (!isArray(entries)) {
    return new Constructor(function (_, reject) {
      return reject(new TypeError('You must pass an array to race.'));
    });
  } else {
    return new Constructor(function (resolve, reject) {
      var length = entries.length;
      for (var i = 0; i < length; i++) {
        Constructor.resolve(entries[i]).then(resolve, reject);
      }
    });
  }
}

/**
  `Promise.reject` returns a promise rejected with the passed `reason`.
  It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    reject(new Error('WHOOPS'));
  });

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.reject(new Error('WHOOPS'));

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  @method reject
  @static
  @param {Any} reason value that the returned promise will be rejected with.
  Useful for tooling.
  @return {Promise} a promise rejected with the given `reason`.
*/
function reject$1(reason) {
  /*jshint validthis:true */
  var Constructor = this;
  var promise = new Constructor(noop);
  reject(promise, reason);
  return promise;
}

function needsResolver() {
  throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
}

function needsNew() {
  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
}

/**
  Promise objects represent the eventual result of an asynchronous operation. The
  primary way of interacting with a promise is through its `then` method, which
  registers callbacks to receive either a promise's eventual value or the reason
  why the promise cannot be fulfilled.

  Terminology
  -----------

  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
  - `thenable` is an object or function that defines a `then` method.
  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
  - `exception` is a value that is thrown using the throw statement.
  - `reason` is a value that indicates why a promise was rejected.
  - `settled` the final resting state of a promise, fulfilled or rejected.

  A promise can be in one of three states: pending, fulfilled, or rejected.

  Promises that are fulfilled have a fulfillment value and are in the fulfilled
  state.  Promises that are rejected have a rejection reason and are in the
  rejected state.  A fulfillment value is never a thenable.

  Promises can also be said to *resolve* a value.  If this value is also a
  promise, then the original promise's settled state will match the value's
  settled state.  So a promise that *resolves* a promise that rejects will
  itself reject, and a promise that *resolves* a promise that fulfills will
  itself fulfill.


  Basic Usage:
  ------------

  ```js
  let promise = new Promise(function(resolve, reject) {
    // on success
    resolve(value);

    // on failure
    reject(reason);
  });

  promise.then(function(value) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Advanced Usage:
  ---------------

  Promises shine when abstracting away asynchronous interactions such as
  `XMLHttpRequest`s.

  ```js
  function getJSON(url) {
    return new Promise(function(resolve, reject){
      let xhr = new XMLHttpRequest();

      xhr.open('GET', url);
      xhr.onreadystatechange = handler;
      xhr.responseType = 'json';
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.send();

      function handler() {
        if (this.readyState === this.DONE) {
          if (this.status === 200) {
            resolve(this.response);
          } else {
            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
          }
        }
      };
    });
  }

  getJSON('/posts.json').then(function(json) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Unlike callbacks, promises are great composable primitives.

  ```js
  Promise.all([
    getJSON('/posts'),
    getJSON('/comments')
  ]).then(function(values){
    values[0] // => postsJSON
    values[1] // => commentsJSON

    return values;
  });
  ```

  @class Promise
  @param {function} resolver
  Useful for tooling.
  @constructor
*/
function Promise$2(resolver) {
  this[PROMISE_ID] = nextId();
  this._result = this._state = undefined;
  this._subscribers = [];

  if (noop !== resolver) {
    typeof resolver !== 'function' && needsResolver();
    this instanceof Promise$2 ? initializePromise(this, resolver) : needsNew();
  }
}

Promise$2.all = all$1;
Promise$2.race = race$1;
Promise$2.resolve = resolve$1;
Promise$2.reject = reject$1;
Promise$2._setScheduler = setScheduler;
Promise$2._setAsap = setAsap;
Promise$2._asap = asap;

Promise$2.prototype = {
  constructor: Promise$2,

  /**
    The primary way of interacting with a promise is through its `then` method,
    which registers callbacks to receive either a promise's eventual value or the
    reason why the promise cannot be fulfilled.
  
    ```js
    findUser().then(function(user){
      // user is available
    }, function(reason){
      // user is unavailable, and you are given the reason why
    });
    ```
  
    Chaining
    --------
  
    The return value of `then` is itself a promise.  This second, 'downstream'
    promise is resolved with the return value of the first promise's fulfillment
    or rejection handler, or rejected if the handler throws an exception.
  
    ```js
    findUser().then(function (user) {
      return user.name;
    }, function (reason) {
      return 'default name';
    }).then(function (userName) {
      // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
      // will be `'default name'`
    });
  
    findUser().then(function (user) {
      throw new Error('Found user, but still unhappy');
    }, function (reason) {
      throw new Error('`findUser` rejected and we're unhappy');
    }).then(function (value) {
      // never reached
    }, function (reason) {
      // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
      // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
    });
    ```
    If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
  
    ```js
    findUser().then(function (user) {
      throw new PedagogicalException('Upstream error');
    }).then(function (value) {
      // never reached
    }).then(function (value) {
      // never reached
    }, function (reason) {
      // The `PedgagocialException` is propagated all the way down to here
    });
    ```
  
    Assimilation
    ------------
  
    Sometimes the value you want to propagate to a downstream promise can only be
    retrieved asynchronously. This can be achieved by returning a promise in the
    fulfillment or rejection handler. The downstream promise will then be pending
    until the returned promise is settled. This is called *assimilation*.
  
    ```js
    findUser().then(function (user) {
      return findCommentsByAuthor(user);
    }).then(function (comments) {
      // The user's comments are now available
    });
    ```
  
    If the assimliated promise rejects, then the downstream promise will also reject.
  
    ```js
    findUser().then(function (user) {
      return findCommentsByAuthor(user);
    }).then(function (comments) {
      // If `findCommentsByAuthor` fulfills, we'll have the value here
    }, function (reason) {
      // If `findCommentsByAuthor` rejects, we'll have the reason here
    });
    ```
  
    Simple Example
    --------------
  
    Synchronous Example
  
    ```javascript
    let result;
  
    try {
      result = findResult();
      // success
    } catch(reason) {
      // failure
    }
    ```
  
    Errback Example
  
    ```js
    findResult(function(result, err){
      if (err) {
        // failure
      } else {
        // success
      }
    });
    ```
  
    Promise Example;
  
    ```javascript
    findResult().then(function(result){
      // success
    }, function(reason){
      // failure
    });
    ```
  
    Advanced Example
    --------------
  
    Synchronous Example
  
    ```javascript
    let author, books;
  
    try {
      author = findAuthor();
      books  = findBooksByAuthor(author);
      // success
    } catch(reason) {
      // failure
    }
    ```
  
    Errback Example
  
    ```js
  
    function foundBooks(books) {
  
    }
  
    function failure(reason) {
  
    }
  
    findAuthor(function(author, err){
      if (err) {
        failure(err);
        // failure
      } else {
        try {
          findBoooksByAuthor(author, function(books, err) {
            if (err) {
              failure(err);
            } else {
              try {
                foundBooks(books);
              } catch(reason) {
                failure(reason);
              }
            }
          });
        } catch(error) {
          failure(err);
        }
        // success
      }
    });
    ```
  
    Promise Example;
  
    ```javascript
    findAuthor().
      then(findBooksByAuthor).
      then(function(books){
        // found books
    }).catch(function(reason){
      // something went wrong
    });
    ```
  
    @method then
    @param {Function} onFulfilled
    @param {Function} onRejected
    Useful for tooling.
    @return {Promise}
  */
  then: then,

  /**
    `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
    as the catch block of a try/catch statement.
  
    ```js
    function findAuthor(){
      throw new Error('couldn't find that author');
    }
  
    // synchronous
    try {
      findAuthor();
    } catch(reason) {
      // something went wrong
    }
  
    // async with promises
    findAuthor().catch(function(reason){
      // something went wrong
    });
    ```
  
    @method catch
    @param {Function} onRejection
    Useful for tooling.
    @return {Promise}
  */
  'catch': function _catch(onRejection) {
    return this.then(null, onRejection);
  }
};

/*global self*/
function polyfill$1() {
    var local = undefined;

    if (typeof global !== 'undefined') {
        local = global;
    } else if (typeof self !== 'undefined') {
        local = self;
    } else {
        try {
            local = Function('return this')();
        } catch (e) {
            throw new Error('polyfill failed because global object is unavailable in this environment');
        }
    }

    var P = local.Promise;

    if (P) {
        var promiseToString = null;
        try {
            promiseToString = Object.prototype.toString.call(P.resolve());
        } catch (e) {
            // silently ignored
        }

        if (promiseToString === '[object Promise]' && !P.cast) {
            return;
        }
    }

    local.Promise = Promise$2;
}

// Strange compat..
Promise$2.polyfill = polyfill$1;
Promise$2.Promise = Promise$2;

return Promise$2;

})));

//# sourceMappingURL=es6-promise.map

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7), __webpack_require__(8)))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* global VERSION */

__webpack_require__(5);

var _es6Promise = __webpack_require__(4);

var _es6Promise2 = _interopRequireDefault(_es6Promise);

var _utils = __webpack_require__(0);

var Utils = _interopRequireWildcard(_utils);

var _api = __webpack_require__(1);

var API = _interopRequireWildcard(_api);

var _button = __webpack_require__(2);

var _push = __webpack_require__(3);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Noty = function () {
  /**
   * @param {object} options
   * @return {Noty}
   */
  function Noty() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Noty);

    this.options = Utils.deepExtend({}, API.Defaults, options);
    this.id = this.options.id || Utils.generateID('bar');
    this.closeTimer = -1;
    this.barDom = null;
    this.layoutDom = null;
    this.progressDom = null;
    this.showing = false;
    this.shown = false;
    this.closed = false;
    this.closing = false;
    this.killable = this.options.timeout || this.options.closeWith.length > 0;
    this.hasSound = this.options.sounds.sources.length > 0;
    this.soundPlayed = false;
    this.listeners = {
      beforeShow: [],
      onShow: [],
      afterShow: [],
      onClose: [],
      afterClose: [],
      onClick: [],
      onHover: [],
      onTemplate: []
    };
    this.promises = {
      show: null,
      close: null
    };
    this.on('beforeShow', this.options.callbacks.beforeShow);
    this.on('onShow', this.options.callbacks.onShow);
    this.on('afterShow', this.options.callbacks.afterShow);
    this.on('onClose', this.options.callbacks.onClose);
    this.on('afterClose', this.options.callbacks.afterClose);
    this.on('onClick', this.options.callbacks.onClick);
    this.on('onHover', this.options.callbacks.onHover);
    this.on('onTemplate', this.options.callbacks.onTemplate);

    return this;
  }

  /**
   * @param {string} eventName
   * @param {function} cb
   * @return {Noty}
   */


  _createClass(Noty, [{
    key: 'on',
    value: function on(eventName) {
      var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

      if (typeof cb === 'function' && this.listeners.hasOwnProperty(eventName)) {
        this.listeners[eventName].push(cb);
      }

      return this;
    }

    /**
     * @return {Noty}
     */

  }, {
    key: 'show',
    value: function show() {
      var _this = this;

      if (this.options.killer === true) {
        Noty.closeAll();
      } else if (typeof this.options.killer === 'string') {
        Noty.closeAll(this.options.killer);
      }

      var queueCounts = API.getQueueCounts(this.options.queue);

      if (queueCounts.current >= queueCounts.maxVisible || API.PageHidden && this.options.visibilityControl) {
        API.addToQueue(this);

        if (API.PageHidden && this.hasSound && Utils.inArray('docHidden', this.options.sounds.conditions)) {
          Utils.createAudioElements(this);
        }

        if (API.PageHidden && Utils.inArray('docHidden', this.options.titleCount.conditions)) {
          API.docTitle.increment();
        }

        return this;
      }

      API.Store[this.id] = this;

      API.fire(this, 'beforeShow');

      this.showing = true;

      if (this.closing) {
        this.showing = false;
        return this;
      }

      API.build(this);
      API.handleModal(this);

      if (this.options.force) {
        this.layoutDom.insertBefore(this.barDom, this.layoutDom.firstChild);
      } else {
        this.layoutDom.appendChild(this.barDom);
      }

      if (this.hasSound && !this.soundPlayed && Utils.inArray('docVisible', this.options.sounds.conditions)) {
        Utils.createAudioElements(this);
      }

      if (Utils.inArray('docVisible', this.options.titleCount.conditions)) {
        API.docTitle.increment();
      }

      this.shown = true;
      this.closed = false;

      // bind button events if any
      if (API.hasButtons(this)) {
        Object.keys(this.options.buttons).forEach(function (key) {
          var btn = _this.barDom.querySelector('#' + _this.options.buttons[key].id);
          Utils.addListener(btn, 'click', function (e) {
            Utils.stopPropagation(e);
            _this.options.buttons[key].cb();
          });
        });
      }

      this.progressDom = this.barDom.querySelector('.noty_progressbar');

      if (Utils.inArray('click', this.options.closeWith)) {
        Utils.addClass(this.barDom, 'noty_close_with_click');
        Utils.addListener(this.barDom, 'click', function (e) {
          Utils.stopPropagation(e);
          API.fire(_this, 'onClick');
          _this.close();
        }, false);
      }

      Utils.addListener(this.barDom, 'mouseenter', function () {
        API.fire(_this, 'onHover');
      }, false);

      if (this.options.timeout) Utils.addClass(this.barDom, 'noty_has_timeout');
      if (this.options.progressBar) {
        Utils.addClass(this.barDom, 'noty_has_progressbar');
      }

      if (Utils.inArray('button', this.options.closeWith)) {
        Utils.addClass(this.barDom, 'noty_close_with_button');

        var closeButton = document.createElement('div');
        Utils.addClass(closeButton, 'noty_close_button');
        closeButton.innerHTML = '×';
        this.barDom.appendChild(closeButton);

        Utils.addListener(closeButton, 'click', function (e) {
          Utils.stopPropagation(e);
          _this.close();
        }, false);
      }

      API.fire(this, 'onShow');

      if (this.options.animation.open === null) {
        this.promises.show = new _es6Promise2.default(function (resolve) {
          resolve();
        });
      } else if (typeof this.options.animation.open === 'function') {
        this.promises.show = new _es6Promise2.default(this.options.animation.open.bind(this));
      } else {
        Utils.addClass(this.barDom, this.options.animation.open);
        this.promises.show = new _es6Promise2.default(function (resolve) {
          Utils.addListener(_this.barDom, Utils.animationEndEvents, function () {
            Utils.removeClass(_this.barDom, _this.options.animation.open);
            resolve();
          });
        });
      }

      this.promises.show.then(function () {
        var _t = _this;
        setTimeout(function () {
          API.openFlow(_t);
        }, 100);
      });

      return this;
    }

    /**
     * @return {Noty}
     */

  }, {
    key: 'stop',
    value: function stop() {
      API.dequeueClose(this);
      return this;
    }

    /**
     * @return {Noty}
     */

  }, {
    key: 'resume',
    value: function resume() {
      API.queueClose(this);
      return this;
    }

    /**
     * @param {int|boolean} ms
     * @return {Noty}
     */

  }, {
    key: 'setTimeout',
    value: function (_setTimeout) {
      function setTimeout(_x) {
        return _setTimeout.apply(this, arguments);
      }

      setTimeout.toString = function () {
        return _setTimeout.toString();
      };

      return setTimeout;
    }(function (ms) {
      this.stop();
      this.options.timeout = ms;

      if (this.barDom) {
        if (this.options.timeout) {
          Utils.addClass(this.barDom, 'noty_has_timeout');
        } else {
          Utils.removeClass(this.barDom, 'noty_has_timeout');
        }

        var _t = this;
        setTimeout(function () {
          // ugly fix for progressbar display bug
          _t.resume();
        }, 100);
      }

      return this;
    })

    /**
     * @param {string} html
     * @param {boolean} optionsOverride
     * @return {Noty}
     */

  }, {
    key: 'setText',
    value: function setText(html) {
      var optionsOverride = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (this.barDom) {
        this.barDom.querySelector('.noty_body').innerHTML = html;
      }

      if (optionsOverride) this.options.text = html;

      return this;
    }

    /**
     * @param {string} type
     * @param {boolean} optionsOverride
     * @return {Noty}
     */

  }, {
    key: 'setType',
    value: function setType(type) {
      var _this2 = this;

      var optionsOverride = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (this.barDom) {
        var classList = Utils.classList(this.barDom).split(' ');

        classList.forEach(function (c) {
          if (c.substring(0, 11) === 'noty_type__') {
            Utils.removeClass(_this2.barDom, c);
          }
        });

        Utils.addClass(this.barDom, 'noty_type__' + type);
      }

      if (optionsOverride) this.options.type = type;

      return this;
    }

    /**
     * @param {string} theme
     * @param {boolean} optionsOverride
     * @return {Noty}
     */

  }, {
    key: 'setTheme',
    value: function setTheme(theme) {
      var _this3 = this;

      var optionsOverride = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (this.barDom) {
        var classList = Utils.classList(this.barDom).split(' ');

        classList.forEach(function (c) {
          if (c.substring(0, 12) === 'noty_theme__') {
            Utils.removeClass(_this3.barDom, c);
          }
        });

        Utils.addClass(this.barDom, 'noty_theme__' + theme);
      }

      if (optionsOverride) this.options.theme = theme;

      return this;
    }

    /**
     * @return {Noty}
     */

  }, {
    key: 'close',
    value: function close() {
      var _this4 = this;

      if (this.closed) return this;

      if (!this.shown) {
        // it's in the queue
        API.removeFromQueue(this);
        return this;
      }

      API.fire(this, 'onClose');

      this.closing = true;

      if (this.options.animation.close === null) {
        this.promises.close = new _es6Promise2.default(function (resolve) {
          resolve();
        });
      } else if (typeof this.options.animation.close === 'function') {
        this.promises.close = new _es6Promise2.default(this.options.animation.close.bind(this));
      } else {
        Utils.addClass(this.barDom, this.options.animation.close);
        this.promises.close = new _es6Promise2.default(function (resolve) {
          Utils.addListener(_this4.barDom, Utils.animationEndEvents, function () {
            if (_this4.options.force) {
              Utils.remove(_this4.barDom);
            } else {
              API.ghostFix(_this4);
            }
            resolve();
          });
        });
      }

      this.promises.close.then(function () {
        API.closeFlow(_this4);
        API.handleModalClose(_this4);
      });

      this.closed = true;

      return this;
    }

    // API functions

    /**
     * @param {boolean|string} queueName
     * @return {Noty}
     */

  }], [{
    key: 'closeAll',
    value: function closeAll() {
      var queueName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      Object.keys(API.Store).forEach(function (id) {
        if (queueName) {
          if (API.Store[id].options.queue === queueName && API.Store[id].killable) {
            API.Store[id].close();
          }
        } else if (API.Store[id].killable) {
          API.Store[id].close();
        }
      });
      return this;
    }

    /**
     * @param {Object} obj
     * @return {Noty}
     */

  }, {
    key: 'overrideDefaults',
    value: function overrideDefaults(obj) {
      API.Defaults = Utils.deepExtend({}, API.Defaults, obj);
      return this;
    }

    /**
     * @param {int} amount
     * @param {string} queueName
     * @return {Noty}
     */

  }, {
    key: 'setMaxVisible',
    value: function setMaxVisible() {
      var amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : API.DefaultMaxVisible;
      var queueName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'global';

      if (!API.Queues.hasOwnProperty(queueName)) {
        API.Queues[queueName] = { maxVisible: amount, queue: [] };
      }

      API.Queues[queueName].maxVisible = amount;
      return this;
    }

    /**
     * @param {string} innerHtml
     * @param {String} classes
     * @param {Function} cb
     * @param {Object} attributes
     * @return {NotyButton}
     */

  }, {
    key: 'button',
    value: function button(innerHtml) {
      var classes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var cb = arguments[2];
      var attributes = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      return new _button.NotyButton(innerHtml, classes, cb, attributes);
    }

    /**
     * @return {string}
     */

  }, {
    key: 'version',
    value: function version() {
      return "3.1.4";
    }

    /**
     * @param {String} workerPath
     * @return {Push}
     */

  }, {
    key: 'Push',
    value: function Push(workerPath) {
      return new _push.Push(workerPath);
    }
  }]);

  return Noty;
}();

// Document visibility change controller


exports.default = Noty;
Utils.visibilityChangeFlow();
module.exports = exports['default'];

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 8 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })
/******/ ]);
});
//# sourceMappingURL=noty.js.map

/***/ })

});