export { default as Footer } from '../..\\components\\Footer.vue'
export { default as Header } from '../..\\components\\Header.vue'

export const LazyFooter = import('../..\\components\\Footer.vue' /* webpackChunkName: "components_Footer" */).then(c => c.default || c)
export const LazyHeader = import('../..\\components\\Header.vue' /* webpackChunkName: "components_Header" */).then(c => c.default || c)
