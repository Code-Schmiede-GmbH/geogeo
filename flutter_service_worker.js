'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "469b962fc056bfa7c17e11b510c5f93a",
"assets/AssetManifest.bin.json": "ac742dfeeb96fc224aa227aa11e34694",
"assets/AssetManifest.json": "5b5de6204b7d2f250ac0daaac959834b",
"assets/assets/background-aerial-2.jpg": "8ac2fccbf71232b6a1298a2dec537b05",
"assets/assets/background-aerial.jpg": "6be928e33507ae41643103e9ff92f1d0",
"assets/assets/background-map.png": "948abd9f228cc9340e60fd203513d50a",
"assets/assets/crosshair.svg": "c353c881eb732f73f10c80be04928071",
"assets/assets/fonts/Lato/Lato-Bold.ttf": "24b516c266d7341c954cb2918f1c8f38",
"assets/assets/fonts/Lato/Lato-BoldItalic.ttf": "acc03ac1e9162f0388c005177d55d762",
"assets/assets/fonts/Lato/Lato-Italic.ttf": "5d22f337a040ae2857e36e7c5800369b",
"assets/assets/fonts/Lato/Lato-Regular.ttf": "122dd68d69fe9587e062d20d9ff5de2a",
"assets/assets/fonts/Merriweather/Merriweather_36pt-Bold.ttf": "13bb8854449795f1a7a0017128e18dd0",
"assets/assets/fonts/Merriweather/Merriweather_36pt-BoldItalic.ttf": "7d7592b44c5ed0fa34dadbe096b5929f",
"assets/assets/fonts/Merriweather/Merriweather_36pt-Italic.ttf": "c2a73e94ec9785b5ef7bd7e6f58b5f61",
"assets/assets/fonts/Merriweather/Merriweather_36pt-Regular.ttf": "202a365a4c587469a005e3f7387e7b9c",
"assets/assets/images/avatar-0.png": "5ae61fbfa11b5bdf200931bd78d615af",
"assets/assets/images/avatar-1.png": "15eec07ace1047555e2913c359d991da",
"assets/assets/images/avatar-10.png": "247b9866454fb667ea6678ea8b579874",
"assets/assets/images/avatar-11.png": "be1e79440e3ca02d4f230bb0c619ff61",
"assets/assets/images/avatar-12.png": "7f5bd9e5df77b73cb658c5e5d8a63a4b",
"assets/assets/images/avatar-13.png": "59a21b07a44ba3448c32e12446952edb",
"assets/assets/images/avatar-14.png": "4356405da439547dfb99a02e2bb6324b",
"assets/assets/images/avatar-15.png": "22b4d22534d54618aedbfdf8acf59981",
"assets/assets/images/avatar-16.png": "59a8f40784078655d44a86aa517aac4a",
"assets/assets/images/avatar-17.png": "0fd6b5731fe2a5268358f6c33a32e348",
"assets/assets/images/avatar-18.png": "e81a2da23f5fd5b266f9c4de6a9fcd91",
"assets/assets/images/avatar-19.png": "6a9dff48ab54e88c4b23cda82b0f7164",
"assets/assets/images/avatar-2.png": "64102c21802c63e95b11209d8904edce",
"assets/assets/images/avatar-20.png": "b97944a9f1b8ee074a61124d2460cd92",
"assets/assets/images/avatar-21.png": "426dfc8d372673247fa68a8dfbada64a",
"assets/assets/images/avatar-22.png": "dfa0df75f845971c0f8dd45982881c2a",
"assets/assets/images/avatar-23.png": "0c2058192a5ab74dbadd5a965b50d6eb",
"assets/assets/images/avatar-24.png": "eeecf81af1c6e3885d319ab305e16adf",
"assets/assets/images/avatar-25.png": "8a14c2c7bca38a0bc9b22844a3f4961b",
"assets/assets/images/avatar-26.png": "13df25b008ff02861f05f9a76f6d358e",
"assets/assets/images/avatar-27.png": "e7ccfeef58c33d08b0ced448c7be2a7b",
"assets/assets/images/avatar-28.png": "4d0695bcea644a36afc06c9f72301486",
"assets/assets/images/avatar-29.png": "57b45eeaa695874ad44dd4a94d748aaf",
"assets/assets/images/avatar-3.png": "4802343455f6fc8aeaf68d1e300e86fe",
"assets/assets/images/avatar-30.png": "979238b1b4fa7a716972fa12645853c9",
"assets/assets/images/avatar-31.png": "93ad17a065de2922100061baf2c6602f",
"assets/assets/images/avatar-32.png": "626a1cfe27edafd8690e794b6e76d56e",
"assets/assets/images/avatar-33.png": "50967401a498707912afc1abc21ab66c",
"assets/assets/images/avatar-4.png": "25eb8eb5de5772f368c03188e27ba57e",
"assets/assets/images/avatar-5.png": "08fe110a993cbe9fd8e2d7c715346a56",
"assets/assets/images/avatar-6.png": "c0f57e7e71bfa0215bdc820a8b6d4f7f",
"assets/assets/images/avatar-7.png": "3db7b48ca0aab598c32fdc6b221a4330",
"assets/assets/images/avatar-8.png": "e85118eff2b29df0a6cefa1ea83e59be",
"assets/assets/images/avatar-9.png": "9b7313a0c0b5ae68d5e694e676651dbf",
"assets/assets/images/background-0.png": "39f28ff74ef0a73dd7ff6035adec32c2",
"assets/assets/images/background-1.png": "a0573188fb9226a59e772c84eb7521c9",
"assets/assets/images/background-2.png": "db8175b94bdd7f4280e5f30387f56862",
"assets/assets/images/wozumteufel-sign.png": "76c0bef3204134a831a552403df8ff6e",
"assets/assets/images/wozumteufel-start.png": "83a649e54f220d9ac7963daf24a0847a",
"assets/assets/mountain.svg": "cb4fa29b50f5b81bb469a029e1b23db8",
"assets/FontManifest.json": "d34c584d4bf2920ed2e875051a8b5f8f",
"assets/fonts/MaterialIcons-Regular.otf": "37d70126ec578cee0ee6c19ccbe73e39",
"assets/NOTICES": "160987d7faa9ccd2084a5299f879ae50",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "9131deea39619861c64dda9393e63b50",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e6872ee6b4153262a4ef3928d2297a82",
"/": "e6872ee6b4153262a4ef3928d2297a82",
"main.dart.js": "a62fdc4062301d0a006fd910404f371c",
"manifest.json": "076481207ee73145d2861ab973a37573",
"version.json": "b30eee8591464dd9d0ae9df950817fa3"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
