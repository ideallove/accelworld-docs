/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["C:/Users/ideallove/Desktop/awnovel-blog/public/404.html","bef0c9cbd2813e5550407a523151badb"],["C:/Users/ideallove/Desktop/awnovel-blog/public/about/index.html","a4ad7454fb863797293f5ffcec0ee21e"],["C:/Users/ideallove/Desktop/awnovel-blog/public/archives/2020/03/index.html","6af7c9809a7c0f4f5d202c40f3bea788"],["C:/Users/ideallove/Desktop/awnovel-blog/public/archives/2020/index.html","985b7903c7bcca3c23b28f1c5d3aad9c"],["C:/Users/ideallove/Desktop/awnovel-blog/public/archives/index.html","4599a68935442a8be3fef7ab633160b9"],["C:/Users/ideallove/Desktop/awnovel-blog/public/aw-22/index.html","80b367622375401e659bd06ea4e4fdaf"],["C:/Users/ideallove/Desktop/awnovel-blog/public/aw-23/index.html","e97f7756dcbb4c7874819c4b8207781e"],["C:/Users/ideallove/Desktop/awnovel-blog/public/aw-24/index.html","521801ee05797891c84a9866b3e285da"],["C:/Users/ideallove/Desktop/awnovel-blog/public/burstlink/index.html","0d94139a592ce9d04823c015184d704b"],["C:/Users/ideallove/Desktop/awnovel-blog/public/categories/index.html","64b789a4d5575e5313dce429f03e2f3b"],["C:/Users/ideallove/Desktop/awnovel-blog/public/categories/小说/index.html","6fad31e7ccedcfda36059907c9822479"],["C:/Users/ideallove/Desktop/awnovel-blog/public/categories/小说/正篇/index.html","46a74bdc5830052f5550ef989e057715"],["C:/Users/ideallove/Desktop/awnovel-blog/public/categories/网站相关/index.html","3da32cce4e42efbdc6c79253a0cf4488"],["C:/Users/ideallove/Desktop/awnovel-blog/public/css/style.css","a6f374595ad3f5fc1269c3338d0ad763"],["C:/Users/ideallove/Desktop/awnovel-blog/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["C:/Users/ideallove/Desktop/awnovel-blog/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["C:/Users/ideallove/Desktop/awnovel-blog/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["C:/Users/ideallove/Desktop/awnovel-blog/public/friends/index.html","69fd0d1509e1c3a2e3241211a07c4945"],["C:/Users/ideallove/Desktop/awnovel-blog/public/images/blog-02-01.png","e3fcb6f2208bab4ab8964c11f14a94d4"],["C:/Users/ideallove/Desktop/awnovel-blog/public/images/blog-02-02.png","bb1b9c1dd0578814063f08719bdf40b9"],["C:/Users/ideallove/Desktop/awnovel-blog/public/images/blog-02-03.png","1e7e8616f819c78089ba698166da7ea9"],["C:/Users/ideallove/Desktop/awnovel-blog/public/images/blog-02-04.png","a7eaa3b600c81f72f0a3a4d94cc05d66"],["C:/Users/ideallove/Desktop/awnovel-blog/public/images/blog-02-05.png","778b48ea1ca9f369efd071e75e9a6ea1"],["C:/Users/ideallove/Desktop/awnovel-blog/public/images/blog-02-06.png","44cda5ab0030236479d4779af5015976"],["C:/Users/ideallove/Desktop/awnovel-blog/public/images/blog-02-07.png","d91af8835d19ab9cfa2cd4714daf1833"],["C:/Users/ideallove/Desktop/awnovel-blog/public/images/blog-02-08.png","17715333200d6a515229ce050e280a66"],["C:/Users/ideallove/Desktop/awnovel-blog/public/images/blog-02-09.png","a7182275b6a474de2275681343aaa9ff"],["C:/Users/ideallove/Desktop/awnovel-blog/public/images/blog-02-10.png","33a7621f58a6cd4f289c81fa88f1fc92"],["C:/Users/ideallove/Desktop/awnovel-blog/public/images/blog-02-11.png","8a62686aad6d5e80cf128ba33f7e84f8"],["C:/Users/ideallove/Desktop/awnovel-blog/public/images/blog-02-12.png","15d43b3a41a68abcc54b0721db8cd164"],["C:/Users/ideallove/Desktop/awnovel-blog/public/images/blog-02-13.png","b9312cd13fc8234b9a6f65a32fe0d43e"],["C:/Users/ideallove/Desktop/awnovel-blog/public/images/blog-02-14.png","72ce559bea5e9eaad592396cbb63cf07"],["C:/Users/ideallove/Desktop/awnovel-blog/public/images/blog-02-15.png","01f3243b4e0ddb82b844ff58d445006b"],["C:/Users/ideallove/Desktop/awnovel-blog/public/images/blog-02-16.png","67a7d75b775955d5231ad2716c149d6b"],["C:/Users/ideallove/Desktop/awnovel-blog/public/images/blog-02-17.png","a81593ff33d1b57b8e7d291f7c4d280f"],["C:/Users/ideallove/Desktop/awnovel-blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/Users/ideallove/Desktop/awnovel-blog/public/img/azure.svg","2da58a6d0c799e5a1292d52ac5e9cb0a"],["C:/Users/ideallove/Desktop/awnovel-blog/public/img/baidu.svg","33b56d2242d2765d09fcf8c83b0c28f5"],["C:/Users/ideallove/Desktop/awnovel-blog/public/index.html","efa3ba7374c489d76e669b14fda5e7f0"],["C:/Users/ideallove/Desktop/awnovel-blog/public/js/app.js","3efe9ec73cf447af4342722b18e3f90c"],["C:/Users/ideallove/Desktop/awnovel-blog/public/js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["C:/Users/ideallove/Desktop/awnovel-blog/public/js/valine.js","f70b377010100ac6af3382c85c59901f"],["C:/Users/ideallove/Desktop/awnovel-blog/public/mylist/index.html","f60f8fc92edb1f5b0a19f2719f6ac418"],["C:/Users/ideallove/Desktop/awnovel-blog/public/projects/index.html","3badd182c9199224a90a954872ca2c4a"],["C:/Users/ideallove/Desktop/awnovel-blog/public/share/index.html","09a732d2f14ec5b3db90b2cba0ca4347"],["C:/Users/ideallove/Desktop/awnovel-blog/public/tags/AW/index.html","c2327da2c1ebef844a8e5f9c5b586b43"],["C:/Users/ideallove/Desktop/awnovel-blog/public/tags/index.html","1aa3d439a9bc7a070f989a5feb149697"],["C:/Users/ideallove/Desktop/awnovel-blog/public/tags/正篇/index.html","a286bb503cc5327d16109db7cfeed967"],["C:/Users/ideallove/Desktop/awnovel-blog/public/tags/网站相关/index.html","dc62fc99e7cb03cd082ad0ac7161376a"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







