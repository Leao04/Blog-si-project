export { default as Header } from '../..\\components\\Header.vue'

export const LazyHeader = import('../..\\components\\Header.vue' /* webpackChunkName: "components_Header" */).then(c => c.default || c)
