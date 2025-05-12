
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/login",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/login"
  },
  {
    "renderMode": 2,
    "route": "/list"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 498, hash: '97a52d6f0f200156349b49283d2299f639b9ce329a6e09b878413656f12e1e2e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1011, hash: 'b0b50e7c44cd30c0a8f1a512b1963d620cdffb3683ab45229e538c4d1195212d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'list/index.html': {size: 2913, hash: '22d52686c7417c037186d535ca48b1c19a4be582ee4143a25c24bdecfd2251e6', text: () => import('./assets-chunks/list_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 2943, hash: '0b570fd77d4aa35f96100adeca3ac3724fc0ba614706b64a2ef4d34aa9be0603', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
