
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
    'index.csr.html': {size: 859, hash: 'ccfa6c2a1ecb77bdc8ec9f95207dcf4311a749621b6090eb1dfda667981f4c6f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1912, hash: '190032f4baa8dc7a41a66dc3b594b04bf6460305d712616ce29502464f636ebd', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'list/index.html': {size: 3749, hash: 'a2473333ab07a2a084e6672ace3dbcff884979e61e21cac529ffdc744fc62800', text: () => import('./assets-chunks/list_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 3779, hash: '28f6516bf955f4a00315cf44620c67d0e9299db5bbdeec73b0a0c2a9a6fc3a2f', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
