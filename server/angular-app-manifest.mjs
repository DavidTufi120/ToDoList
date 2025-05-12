
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
    'index.csr.html': {size: 540, hash: '0e12429b1b4c7f4226236119f0781ecfd79e6858daf50a1179be55e8c33d1078', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1060, hash: 'e0c31fa40c8471215042d90e1811d96df83196a933458cb19de88c747ac8342a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 2972, hash: '81f462282f036e9672621e7ab207118574099068314f04d5ecfdad30295e68bc', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'list/index.html': {size: 2942, hash: '80924f5eec2ec88a04da6542eceb4727aa0cbe8bec652ff22527b7d8a844ac7f', text: () => import('./assets-chunks/list_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
