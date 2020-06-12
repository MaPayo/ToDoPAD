importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js')

console.log(`Workbox ${workbox ? 'sí' : 'no'} está funcionando`)

workbox.precaching.precacheAndRoute([
  {url: '/index.html', revision: null },
  {url: '/preact.js', revision: null},
  {url: '/style.css', revision: null},
  {url: '/functions.js', revision: null},
  {url: '/VT323.ttf', revision: null},
  {url: '/m.json', revision: null},
])