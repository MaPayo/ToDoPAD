importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js')

console.log(`Workbox ${workbox ? 'sí' : 'no'} está funcionando`)

workbox.precaching.precacheAndRoute([
  {url: '/ToDoPAD.github.io/index.html', revision: null },
  {url: '/ToDoPAD.github.io/preact.js', revision: null},
  {url: '/ToDoPAD.github.io/style.css', revision: null},
  {url: '/ToDoPAD.github.io/functions.js', revision: null},
  {url: '/ToDoPAD.github.io/VT323.ttf', revision: null},
  {url: '/ToDoPAD.github.io/m.json', revision: null},
])