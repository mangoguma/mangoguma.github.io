'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "836374729715c3058310d60ef72f6c4e",
"assets/assets/%25EB%25A7%25A5%25EB%258F%2584%25EB%2582%25A0%25EB%2593%259C.jpg": "2ac687ea4d94dfd7f6cffb6b49d53f46",
"assets/assets/%25EB%25A7%25A5%25EC%2598%25AC%25EB%258D%25B0%25EC%259D%25B4.jpeg": "2d251036595aa03ddc8c2fd7ca68ee1b",
"assets/assets/%25EB%25A7%25A5%25EC%2598%25AC%25EB%258D%25B0%25EC%259D%25B4.jpg": "7c244abb978b8aa48d8f502e83667f60",
"assets/assets/%25EB%25A7%25A5%25EC%25BB%25A4%25ED%2594%25BC-.png": "42c8a4534bf09c79ab9f381244345fb6",
"assets/assets/%25EB%25A7%25A5%25EC%25BB%25A4%25ED%2594%25BC.jpeg": "d9baa5419e9287a7946b7fe46d9b80da",
"assets/assets/%25EB%25B2%2584%25EA%25B1%25B0%25EB%25A9%2594%25EB%2589%25B4.jpg": "3770e44af5285faf7b9e9df3b9e89581",
"assets/assets/%25EB%25B9%2585%25EB%25A7%25A5%25EC%2584%25B8%25ED%258A%25B8.jpg": "b3dcd3b9fc351132b907010f3b5b545a",
"assets/assets/%25EC%25B6%2594%25EC%25B2%259C%2520%25EB%25A9%2594%25EB%2589%25B4.png": "e426b07104dbf2cd29f969d5071bde33",
"assets/assets/%25EC%25BB%25A4%25ED%2594%25BC.jpeg": "74d81f69cf157423edbd8ee86afc40b7",
"assets/assets/%25EC%25BB%25A4%25ED%2594%25BC_.png": "91167ae05f0ae0dc598077c913bd4f48",
"assets/assets/%25EC%25BD%259C%25EB%259D%25BC.jpeg": "9e11540d4e1f722858e24cb4bc5fd67e",
"assets/assets/%25EC%25BD%259C%25EB%259D%25BC_.png": "d373a7df53ae132df5ee17e2246f4756",
"assets/assets/1010.png": "d2f4f652522d734a2061a4cf73c91984",
"assets/assets/1111.png": "8cd47cbd2de2bda93fd9b0e439c25a40",
"assets/assets/1212.png": "dc47f3693203c9b019c364e758637bfd",
"assets/assets/333.png": "0dfe99335765a177cfec2dc8808eef38",
"assets/assets/444.png": "461757b97fa913a5765b39d387f7520c",
"assets/assets/555.png": "ee535e5654007f652d9d0beb9b8b852f",
"assets/assets/666.png": "b5ca2fdcb1ff7363769ca2c374085bc8",
"assets/assets/777.png": "878173719defec592acc7b9ee84f39ae",
"assets/assets/778.png": "c254bfa1017fba64a5d1ee5bf3057414",
"assets/assets/888.png": "6634c7d3ee3aac2b07b49c3b5567d53d",
"assets/assets/999.png": "ff45c35f2a1a29a1b8543920d22cb98e",
"assets/assets/bigmac.PNG": "f1a64a68dc71bf87f8e725bc2ff2a0a6",
"assets/assets/BTS%2520%25EC%2584%25B8%25ED%258A%25B8.jpeg": "9ed34291fff46740f38f3b63989e323c",
"assets/assets/buger.png": "8654986cdfee7ec7d06933551ccec1e3",
"assets/assets/disabled.png": "67f1f13ef8cefabdcdff8c8b6e33363c",
"assets/assets/drinkhome.png": "19ddd4ac616168b583da33b8d542f53b",
"assets/assets/happymeal.jpeg": "caac07258f3110a3d9f655637790626e",
"assets/assets/logo.png": "da1df8aa13bf9774e8da61798f296186",
"assets/assets/macall.PNG": "cdb0a60170f72c80f80f0c56176b3a9d",
"assets/assets/maclunch.jpg": "30f6ce4dad7f111c162c1e3022141c14",
"assets/assets/Mcdonald%2520Kiosk.pdf": "f14f52af79eb3bbfaffed5a9c22eb69b",
"assets/assets/pages/01.png": "f2802769a3e5d66ccfd6dc9acf17b173",
"assets/assets/pages/02.png": "48374f95a52eca845c4af21061bb24f8",
"assets/assets/pages/03.png": "d3cafb926eee062902d7090f6359b3f7",
"assets/assets/pages/04.png": "5a28c053652fc1fcccc36ba39890d377",
"assets/assets/pages/05.png": "ca7a84b1248d0027e12ebad6badfa6d6",
"assets/assets/pages/06.png": "ba4529f8c35080c361f6db82db78c4d7",
"assets/assets/pages/07.png": "11441199e3ab4691dae487925b3abe00",
"assets/assets/pages/08.png": "970fd1b862d4636e8d460cb9e27712bd",
"assets/assets/pages/09.png": "0b56410c3b1df9abd53ddec670452f2e",
"assets/assets/pages/10.png": "6634c7d3ee3aac2b07b49c3b5567d53d",
"assets/assets/pages/11.png": "1b9cf2732257377642a2dffc96755eb9",
"assets/assets/pages/12.png": "c2ae42781e5858e699f7fe8013f34296",
"assets/assets/pages/13.png": "8cd47cbd2de2bda93fd9b0e439c25a40",
"assets/assets/pages/14.png": "dc47f3693203c9b019c364e758637bfd",
"assets/assets/pages/15.png": "da1df8aa13bf9774e8da61798f296186",
"assets/assets/png-transparent-mcdonald-s-logo-oldest-mcdonald-s-restaurant-ronald-mcdonald-logo-golden-arches-mcdonalds-miscellaneous-angle-food-thumbnail.png": "da897c30d0d64c0c2f01acc31140b2b7",
"assets/assets/potato.png": "c5fe47d8267370ed92ecf118237ecb38",
"assets/assets/takeout.jpg": "1449d30fbee86e5c6adb0f2ff1cea8d6",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "3a6813ae7dee5e9cfc21beccff9585eb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0c7cf016ea9798bfe9c91c72f0edd150",
"/": "0c7cf016ea9798bfe9c91c72f0edd150",
"main.dart.js": "2df1cec124cdf74dfa35ef7e2f55f591",
"manifest.json": "22098d2acd0b0e393d6a724f7f06130f",
"version.json": "8beb1d9e23c784e37dc9f37b506d75aa"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
