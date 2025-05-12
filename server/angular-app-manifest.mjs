
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/ToDoList/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/ToDoList/login",
    "route": "/ToDoList"
  },
  {
    "renderMode": 2,
    "route": "/ToDoList/login"
  },
  {
    "renderMode": 2,
    "route": "/ToDoList/list"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 829, hash: '95130401ba651adfccca0ed6974f3c184848dbb64958090b609f73244bd6f166', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1882, hash: '5948c21be7a843aa4657ed88c2dcec54eec1599affeea953d2bbc1ed2d1e5235', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'list/index.html': {size: 3719, hash: '54542090f18a2176b5b34ab1e1ada1b751c634f503728b57e7a206d5548c61e0', text: () => import('./assets-chunks/list_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 3749, hash: '5a3619da8b61a1d9312d402628206663763c94f06cbce5bf8f430a744a6b5b26', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
