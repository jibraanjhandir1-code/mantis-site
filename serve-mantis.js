// Tiny static server for MANTIS 3D.html (so .glb models can load — file:// can't).
// Run:  node serve-mantis.js   then open  http://localhost:4599
const http = require('http'), fs = require('fs'), path = require('path');
const ROOT = __dirname, PORT = 4599;
const TYPES = { '.html':'text/html', '.js':'text/javascript', '.css':'text/css',
  '.glb':'model/gltf-binary', '.gltf':'model/gltf+json', '.bin':'application/octet-stream',
  '.png':'image/png', '.jpg':'image/jpeg', '.jpeg':'image/jpeg', '.svg':'image/svg+xml',
  '.webp':'image/webp', '.hdr':'application/octet-stream', '.ktx2':'application/octet-stream' };
http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0]);
  if (p === '/') p = '/index.html';
  const fp = path.join(ROOT, p);
  if (!fp.startsWith(ROOT)) { res.writeHead(403); return res.end('forbidden'); }
  fs.readFile(fp, (e, d) => {
    if (e) { res.writeHead(404); return res.end('404: ' + p); }
    res.writeHead(200, { 'Content-Type': TYPES[path.extname(fp).toLowerCase()] || 'application/octet-stream',
      'Access-Control-Allow-Origin': '*' });
    res.end(d);
  });
}).listen(PORT, () => console.log('MANTIS 3D running →  http://localhost:' + PORT));
