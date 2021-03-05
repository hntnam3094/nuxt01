import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7814b81e = () => interopDefault(import('..\\pages\\04\\index.vue' /* webpackChunkName: "pages/04/index" */))
const _1faeb6f2 = () => interopDefault(import('..\\pages\\05.vue' /* webpackChunkName: "pages/05" */))
const _68b16d60 = () => interopDefault(import('..\\pages\\05\\index.vue' /* webpackChunkName: "pages/05/index" */))
const _b548c9c2 = () => interopDefault(import('..\\pages\\05\\add.vue' /* webpackChunkName: "pages/05/add" */))
const _70f4956e = () => interopDefault(import('..\\pages\\05\\_detail.vue' /* webpackChunkName: "pages/05/_detail" */))
const _1fbcce73 = () => interopDefault(import('..\\pages\\06.vue' /* webpackChunkName: "pages/06" */))
const _49ead7e4 = () => interopDefault(import('..\\pages\\07\\index.vue' /* webpackChunkName: "pages/07/index" */))
const _2b244268 = () => interopDefault(import('..\\pages\\09\\index.vue' /* webpackChunkName: "pages/09/index" */))
const _9ddbac00 = () => interopDefault(import('..\\pages\\04\\add.vue' /* webpackChunkName: "pages/04/add" */))
const _e4230546 = () => interopDefault(import('..\\pages\\07\\add.vue' /* webpackChunkName: "pages/07/add" */))
const _1e9afd45 = () => interopDefault(import('..\\pages\\07\\detail.vue' /* webpackChunkName: "pages/07/detail" */))
const _5a38e5a0 = () => interopDefault(import('..\\pages\\07\\ListCustomer.vue' /* webpackChunkName: "pages/07/ListCustomer" */))
const _0f28882c = () => interopDefault(import('..\\pages\\09\\_detail.vue' /* webpackChunkName: "pages/09/_detail" */))
const _1cbc6d75 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _7814b81e,
    name: "04"
  }, {
    path: "/05",
    component: _1faeb6f2,
    children: [{
      path: "",
      component: _68b16d60,
      name: "05"
    }, {
      path: "add",
      component: _b548c9c2,
      name: "05-add"
    }, {
      path: ":detail",
      component: _70f4956e,
      name: "05-detail"
    }]
  }, {
    path: "/06",
    component: _1fbcce73,
    name: "06"
  }, {
    path: "/07",
    component: _49ead7e4,
    name: "07"
  }, {
    path: "/09",
    component: _2b244268,
    name: "09"
  }, {
    path: "/04/add",
    component: _9ddbac00,
    name: "04-add"
  }, {
    path: "/07/add",
    component: _e4230546,
    name: "07-add"
  }, {
    path: "/07/detail",
    component: _1e9afd45,
    name: "07-detail"
  }, {
    path: "/07/ListCustomer",
    component: _5a38e5a0,
    name: "07-ListCustomer"
  }, {
    path: "/09/:detail",
    component: _0f28882c,
    name: "09-detail"
  }, {
    path: "/",
    component: _1cbc6d75,
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
