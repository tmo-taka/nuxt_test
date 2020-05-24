import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2355a81b = () => interopDefault(import('../pages/article.vue' /* webpackChunkName: "pages/article" */))
const _6a88dbbf = () => interopDefault(import('../pages/createArticle.vue' /* webpackChunkName: "pages/createArticle" */))
const _7207bb8d = () => interopDefault(import('../pages/category/_article.vue' /* webpackChunkName: "pages/category/_article" */))
const _c62f9592 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    path: "/article",
    component: _2355a81b,
    name: "article"
  }, {
    path: "/createArticle",
    component: _6a88dbbf,
    name: "createArticle"
  }, {
    path: "/category/:article?",
    component: _7207bb8d,
    name: "category-article"
  }, {
    path: "/",
    component: _c62f9592,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
