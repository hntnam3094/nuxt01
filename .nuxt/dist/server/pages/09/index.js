exports.ids = [15];
exports.modules = {

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/09/index.vue?vue&type=template&id=91036460&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('NuxtLink',{attrs:{"to":"/07/ListCustomer"}},[_vm._v("List Customer")]),_vm._ssrNode(" <div class=\"row justify-content-center\"><div class=\"col-12 col-sm-8 col-md-6 justify-content-center\"><h4>09-Demo div tag</h4></div></div> <div class=\"row justify-content-center\"><div class=\"col-12 col-sm-8 col-md-6 justify-content-center\"><div class=\"row mt-3\"><div class=\"col\"><input type=\"text\" aria-label=\"Username\" placeholder=\"Search...\""+(_vm._ssrAttr("value",(_vm.keyword)))+" class=\"form-control\" style=\"min-width: 500px\"></div> <div class=\"col\"><button class=\"btn btn-primary\"><i class=\"mdi mdi-magnify\"></i></button></div></div> <div class=\"row mt-3 align-items-center\"><div class=\"col-3\"><button type=\"button\" class=\"btn btn-success mx-2 d-flex justify-en\"><i class=\"mdi mdi-plus\"></i></button></div> <div class=\"col-3\"><div class=\"form-check form-switch\"><input type=\"checkbox\" id=\"flexSwitchCheckChecked\" checked=\"checked\" class=\"form-check-input\"> <label for=\"flexSwitchCheckChecked\">"+_vm._ssrEscape("Order by "+_vm._s(_vm.orderByAscText))+"</label></div></div> <div class=\"col-6\"></div></div> <div class=\"row mt-2\"><div class=\"col\"><table class=\"table\"><thead><tr style=\"text-align:center\"><th>Action</th> <th>ID Area</th> <th>Display Sequence</th> <th>Name</th> <th>Updated At</th></tr></thead> <tbody>"+(_vm._ssrList((_vm.result),function(area){return ("<tr><th><button class=\"btn btn-warning\">View</button></th> <th scope=\"row\">"+_vm._ssrEscape(_vm._s(area.id))+"</th> <th>"+_vm._ssrEscape(_vm._s(area.sequence))+"</th> <td>"+_vm._ssrEscape(_vm._s(area.name))+"</td> <td>"+_vm._ssrEscape(_vm._s(area.updated_at))+"</td></tr>")}))+"</tbody></table></div></div></div></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/09/index.vue?vue&type=template&id=91036460&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/09/index.vue?vue&type=script&lang=js&
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
/* harmony default export */ var _09vue_type_script_lang_js_ = ({
  head() {
    return {
      title: '05-Demo'
    };
  },

  async asyncData({
    params
  }) {
    return {
      prevData: params.data
    };
  },

  data() {
    return {
      keyword: '',
      orderByAsc: true,
      orderByAscText: 'ASC',
      result: [],
      prevData: {}
    };
  },

  watch: {
    orderByAsc: function () {
      this.orderByAscText = this.orderByAsc ? 'ASC' : 'DESC';
      this.fetchData();
    }
  },

  created() {
    if (this.orderByAsc) {
      this.fetchData();
    }
  },

  mounted() {
    if (!!this.prevData) {
      this.keyword = this.prevData.keyword;
      this.orderByAsc = this.prevData.orderby;
    }
  },

  methods: {
    addArea() {
      this.prevData = {
        keyword: this.keyword,
        orderby: this.orderByAsc
      };
      this.$router.push({
        name: '07-add',
        params: {
          data: this.prevData
        }
      });
    },

    searchArea() {
      this.fetchData();
    },

    fetchData() {
      this.$axios.$get('/areas', {
        params: {
          keyword: this.keyword,
          orderBy: this.orderByAscText
        }
      }).then(res => {
        this.result = res;
      }).catch(error => {
        console.log(error);
      });
    },

    viewDetail(id) {
      this.prevData = {
        keyword: this.keyword,
        orderby: this.orderByAsc
      };
      this.$router.push({
        name: '07-detail',
        params: {
          detail: id,
          data: this.prevData
        }
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/09/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_09vue_type_script_lang_js_ = (_09vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/09/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_09vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5efedf08"
  
)

/* harmony default export */ var _09 = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map