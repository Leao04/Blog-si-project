import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _54fb70a2 = () => interopDefault(import('..\\pages\\publications.vue' /* webpackChunkName: "pages/publications" */))
const _f1b1e6f8 = () => interopDefault(import('..\\pages\\publish.vue' /* webpackChunkName: "pages/publish" */))
const _667d7207 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/publications",
    component: _54fb70a2,
    name: "publications"
  }, {
    path: "/publish",
    component: _f1b1e6f8,
    name: "publish"
  }, {
    path: "/",
    component: _667d7207,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
