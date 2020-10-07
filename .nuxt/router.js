import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

<<<<<<< HEAD
const _614633cd = () => interopDefault(import('..\\pages\\publications.vue' /* webpackChunkName: "pages/publications" */))
const _3ed3ba79 = () => interopDefault(import('..\\pages\\publish.vue' /* webpackChunkName: "pages/publish" */))
const _15f7193c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
=======
const _fd424876 = () => interopDefault(import('..\\pages\\publications.vue' /* webpackChunkName: "pages/publications" */))
const _610010fe = () => interopDefault(import('..\\pages\\publish.vue' /* webpackChunkName: "pages/publish" */))
const _5dc20f78 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
>>>>>>> 97d93511f74358f378efe68421f017b5af998336

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
<<<<<<< HEAD
    component: _614633cd,
    name: "publications"
  }, {
    path: "/publish",
    component: _3ed3ba79,
    name: "publish"
  }, {
    path: "/",
    component: _15f7193c,
=======
    component: _fd424876,
    name: "publications"
  }, {
    path: "/publish",
    component: _610010fe,
    name: "publish"
  }, {
    path: "/",
    component: _5dc20f78,
>>>>>>> 97d93511f74358f378efe68421f017b5af998336
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
