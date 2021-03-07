import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _364a69ce = () => interopDefault(import('..\\pages\\04\\index.vue' /* webpackChunkName: "pages/04/index" */))
const _75ba1fb5 = () => interopDefault(import('..\\pages\\05.vue' /* webpackChunkName: "pages/05" */))
const _3dfc0f2d = () => interopDefault(import('..\\pages\\05\\index.vue' /* webpackChunkName: "pages/05/index" */))
const _22f2343c = () => interopDefault(import('..\\pages\\05\\add.vue' /* webpackChunkName: "pages/05/add" */))
const _bda14fea = () => interopDefault(import('..\\pages\\05\\_detail.vue' /* webpackChunkName: "pages/05/_detail" */))
const _75c83736 = () => interopDefault(import('..\\pages\\06.vue' /* webpackChunkName: "pages/06" */))
const _4d5f59eb = () => interopDefault(import('..\\pages\\07\\index.vue' /* webpackChunkName: "pages/07/index" */))
const _5cc2a4a9 = () => interopDefault(import('..\\pages\\09\\index.vue' /* webpackChunkName: "pages/09/index" */))
const _2ea8c31d = () => interopDefault(import('..\\pages\\04\\add.vue' /* webpackChunkName: "pages/04/add" */))
const _0b85167a = () => interopDefault(import('..\\pages\\07\\add.vue' /* webpackChunkName: "pages/07/add" */))
const _124219f0 = () => interopDefault(import('..\\pages\\07\\detail.vue' /* webpackChunkName: "pages/07/detail" */))
const _620a369a = () => interopDefault(import('..\\pages\\07\\ListCustomer.vue' /* webpackChunkName: "pages/07/ListCustomer" */))
const _28a67e87 = () => interopDefault(import('..\\pages\\09\\_detail.vue' /* webpackChunkName: "pages/09/_detail" */))
const _3670a9d2 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/04",
    component: _364a69ce,
    name: "04"
  }, {
    path: "/05",
    component: _75ba1fb5,
    children: [{
      path: "",
      component: _3dfc0f2d,
      name: "05"
    }, {
      path: "add",
      component: _22f2343c,
      name: "05-add"
    }, {
      path: ":detail",
      component: _bda14fea,
      name: "05-detail"
    }]
  }, {
    path: "/06",
    component: _75c83736,
    name: "06"
  }, {
    path: "/07",
    component: _4d5f59eb,
    name: "07"
  }, {
    path: "/09",
    component: _5cc2a4a9,
    name: "09"
  }, {
    path: "/04/add",
    component: _2ea8c31d,
    name: "04-add"
  }, {
    path: "/07/add",
    component: _0b85167a,
    name: "07-add"
  }, {
    path: "/07/detail",
    component: _124219f0,
    name: "07-detail"
  }, {
    path: "/07/ListCustomer",
    component: _620a369a,
    name: "07-ListCustomer"
  }, {
    path: "/09/:detail",
    component: _28a67e87,
    name: "09-detail"
  }, {
    path: "/",
    component: _3670a9d2,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
