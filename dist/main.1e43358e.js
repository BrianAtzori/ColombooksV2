// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../../../../opt/homebrew/lib/node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;
function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }
  return bundleURL;
}
function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);
    if (matches) {
      return getBaseURL(matches[0]);
    }
  }
  return '/';
}
function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../../../../opt/homebrew/lib/node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    link.remove();
  };
  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
module.exports = reloadCSS;
},{"./bundle-url":"../../../../opt/homebrew/lib/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"src/styles/general-style.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../../../../opt/homebrew/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/styles/header-style.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../../../../opt/homebrew/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/styles/search-section-style.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../../../../opt/homebrew/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/styles/books-showcase-style.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../../../../opt/homebrew/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/scripts/classes.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var Book = /*#__PURE__*/_createClass(
//Need to be fixed and improved

function Book(title, author, cover, key, details) {
  _classCallCheck(this, Book);
  this.title = title;
  this.author = author;
  this.cover = cover;
  this.key = key;
  this.details = details;
});
exports.default = Book;
},{}],"src/scripts/pop-ups.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.closeDetailsWindowPopUp = closeDetailsWindowPopUp;
exports.closeInfoWindowPopUp = closeInfoWindowPopUp;
exports.openDetailsWindowPopuUp = openDetailsWindowPopuUp;
exports.openInfoWindowPopUp = openInfoWindowPopUp;
//Si può migliorare questa gestione eventi

//Generalize with Pop Up Generator

//Show Info

var overlayBackground = document.querySelector('#overlay');
function openInfoWindowPopUp(infoWindowPopUp) {
  infoWindowPopUp.classList.add('active');
  overlayBackground.classList.add('active');
}
function closeInfoWindowPopUp(infoWindowPopUp) {
  infoWindowPopUp.classList.remove('active');
  overlayBackground.classList.remove('active');
}
function openDetailsWindowPopuUp(detailsInfoWindowPopUp) {
  detailsInfoWindowPopUp.classList.add('active');
  detailsInfoWindowPopUp.innerText = Book.details.toString();
  overlayBackground.classList.add('active');
}
function closeDetailsWindowPopUp(detailsInfoWindowPopUp) {
  detailsInfoWindowPopUp.classList.remove('active');
  overlayBackground.classList.remove('active');
}
},{}],"src/scripts/showcase-manager.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showDetails = showDetails;
var popUpManager = _interopRequireWildcard(require("./pop-ups.js"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var detailsButtonPopUp = document.querySelector('.info-window');
function showDetails() {
  console.log("Sono Entrato qui");
  fetch("https://openlibrary.org" + Book.key + ".json").then(function (response) {
    return response.json();
  }).then(function (data) {
    return Book.details = data;
  });
  popUpManager.openDetailsWindowPopuUp(detailsButtonPopUp);
}
},{"./pop-ups.js":"src/scripts/pop-ups.js"}],"src/scripts/showcase-generator.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateGUI = generateGUI;
exports.generateGUI2 = generateGUI2;
exports.generateGUI3 = generateGUI3;
exports.generateGUI4 = generateGUI4;
var _classes = _interopRequireDefault(require("./classes.js"));
var _showcaseManager = _interopRequireDefault(require("./showcase-manager.js"));
var _externalCalls = require("./external-calls.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var booksShowcaseDiv = document.querySelector('.books-showcase');
var Zsa = "";
function generateGUI(datafromAPI) {
  for (var i = 0; i < 12; i++) {
    console.log(datafromAPI);
    Zsa = new _classes.default(datafromAPI.works[i].title, datafromAPI.works[i].authors[0].name, "https://covers.openlibrary.org/b/id/" + datafromAPI.works[i].cover_id + "-L.jpg", datafromAPI.works[i].key, "");
    console.log("Autore:" + Zsa.author + " Titolo:" + Zsa.title + " i:" + i);
    var newBookContainer = document.createElement('div');
    newBookContainer.classList.add('book-container');

    //Alt su copertina dinamico?
    var newBookCover = document.createElement('img');
    newBookCover.classList.add('book-cover');
    newBookCover.src = Zsa.cover;
    newBookCover.style = "width: 80px; height: 100px;";
    var newTitle = document.createElement('p');
    newTitle.classList.add('title-label');
    newTitle.innerText = "\"" + Zsa.title + "\"";
    var newAuthor = document.createElement('p');
    newAuthor.classList.add('author-label');
    newAuthor.innerText = Zsa.author;
    var detailsButton = document.createElement('input');
    detailsButton.type = 'button';
    detailsButton.value = 'Details';
    detailsButton.classList.add('expand-details-button');
    detailsButton.addEventListener('click', _showcaseManager.default);
    newBookContainer.appendChild(newBookCover);
    newBookContainer.appendChild(newTitle);
    newBookContainer.appendChild(newAuthor);
    newBookContainer.appendChild(detailsButton);
    booksShowcaseDiv.appendChild(newBookContainer);

    //console.log(Book)
  }
}

function generateGUI2(datafromAPI2) {
  var authorKey = datafromAPI2.docs[0].key;
  (0, _externalCalls.requestToApi3)(authorKey);
}
function generateGUI3(datafromAPI3) {
  console.log(datafromAPI3);
  for (var i = 0; i < 50; i++) {
    Zsa = new _classes.default(datafromAPI3.entries[i].title, "", /*"https://covers.openlibrary.org/b/id/"+datafromAPI3.entries[i].covers[0]+"-L.jpg" -> "TO FIX MISSING COVER*/"assets/img/dummy-cover.jpeg", datafromAPI3.entries[i].key, "");
    console.log("Autore:" + Zsa.author + " Titolo:" + Zsa.title + " i:" + i);
    var newBookContainer = document.createElement('div');
    newBookContainer.classList.add('book-container');

    //Alt su copertina dinamico?
    var newBookCover = document.createElement('img');
    newBookCover.classList.add('book-cover');
    newBookCover.src = Zsa.cover;
    newBookCover.style = "width: 80px; height: 100px;";
    var newTitle = document.createElement('p');
    newTitle.classList.add('title-label');
    newTitle.innerText = Zsa.title;
    var newAuthor = document.createElement('p');
    newAuthor.classList.add('author-label');
    newAuthor.innerText = Zsa.author;
    var detailsButton = document.createElement('input');
    detailsButton.type = 'button';
    detailsButton.value = 'Details';
    detailsButton.classList.add('expand-details-button');
    detailsButton.addEventListener('click', _showcaseManager.default);
    newBookContainer.appendChild(newBookCover);
    newBookContainer.appendChild(newTitle);
    newBookContainer.appendChild(newAuthor);
    newBookContainer.appendChild(detailsButton);
    booksShowcaseDiv.appendChild(newBookContainer);

    //console.log(Book)
  }
}

function generateGUI4(datafromAPI4) {
  console.log(datafromAPI4);
  for (var i = 0; i < datafromAPI4.docs.length; i++) {
    Zsa = new _classes.default(datafromAPI4.docs[i].title, datafromAPI4.docs[i].author_name, /*"https://covers.openlibrary.org/b/id/"+datafromAPI3.entries[i].covers[0]+"-L.jpg" -> "TO FIX MISSING COVER*/"assets/img/dummy-cover.jpeg", datafromAPI4.docs[i].key, "");
    console.log("Autore:" + Zsa.author + " Titolo:" + Zsa.title + " i:" + i);
    var newBookContainer = document.createElement('div');
    newBookContainer.classList.add('book-container');

    //Alt su copertina dinamico?
    var newBookCover = document.createElement('img');
    newBookCover.classList.add('book-cover');
    newBookCover.src = Zsa.cover;
    newBookCover.style = "width: 80px; height: 100px;";
    var newTitle = document.createElement('p');
    newTitle.classList.add('title-label');
    newTitle.innerText = Zsa.title;
    var newAuthor = document.createElement('p');
    newAuthor.classList.add('author-label');
    newAuthor.innerText = Zsa.author;
    var detailsButton = document.createElement('input');
    detailsButton.type = 'button';
    detailsButton.value = 'Details';
    detailsButton.classList.add('expand-details-button');
    detailsButton.addEventListener('click', _showcaseManager.default);
    newBookContainer.appendChild(newBookCover);
    newBookContainer.appendChild(newTitle);
    newBookContainer.appendChild(newAuthor);
    newBookContainer.appendChild(detailsButton);
    booksShowcaseDiv.appendChild(newBookContainer);

    //console.log(Book)
  }
}
},{"./classes.js":"src/scripts/classes.js","./showcase-manager.js":"src/scripts/showcase-manager.js","./external-calls.js":"src/scripts/external-calls.js"}],"src/scripts/external-calls.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requestToApi = requestToApi;
exports.requestToApi2 = requestToApi2;
exports.requestToApi3 = requestToApi3;
exports.requestToApi4 = requestToApi4;
var showcaseGenerator = _interopRequireWildcard(require("./showcase-generator"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
//Try & Catch?
function requestToApi(_x) {
  return _requestToApi.apply(this, arguments);
}
function _requestToApi() {
  _requestToApi = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(genre) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            //Check for better method

            fetch("https://openlibrary.org/subjects/" + genre + ".json").then(function (response) {
              return response.json();
            }).then(function (data) {
              return showcaseGenerator.generateGUI(data);
            }); //Call verso Data Manager
          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _requestToApi.apply(this, arguments);
}
function requestToApi2(_x2) {
  return _requestToApi2.apply(this, arguments);
}
function _requestToApi2() {
  _requestToApi2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(author) {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            fetch("https://openlibrary.org/search/authors.json?q=" + author).then(function (response) {
              return response.json();
            }).then(function (data) {
              return showcaseGenerator.generateGUI2(data);
            });
          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _requestToApi2.apply(this, arguments);
}
function requestToApi3(_x3) {
  return _requestToApi3.apply(this, arguments);
}
function _requestToApi3() {
  _requestToApi3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(authorKey) {
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            fetch("https://openlibrary.org/authors/" + authorKey + "/works.json").then(function (response) {
              return response.json();
            }).then(function (data) {
              return showcaseGenerator.generateGUI3(data);
            });
          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _requestToApi3.apply(this, arguments);
}
function requestToApi4(_x4) {
  return _requestToApi4.apply(this, arguments);
}
function _requestToApi4() {
  _requestToApi4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(title) {
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            fetch("https://openlibrary.org/search.json?q=" + title).then(function (response) {
              return response.json();
            }).then(function (data) {
              return showcaseGenerator.generateGUI4(data);
            });
          case 1:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _requestToApi4.apply(this, arguments);
}
},{"./showcase-generator":"src/scripts/showcase-generator.js"}],"src/main.js":[function(require,module,exports) {
"use strict";

require("./styles/general-style.scss");
require("./styles/header-style.scss");
require("./styles/search-section-style.scss");
require("./styles/books-showcase-style.scss");
var externalCalls = _interopRequireWildcard(require("./scripts/external-calls.js"));
var popUpManager = _interopRequireWildcard(require("./scripts/pop-ups.js"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
// ----------------------- Classes.js ------------------------------

//------------------------- Main.js -------------------------------

//Info Window Elements

var buttonShowInfo = document.querySelector('.icon-info');
var infoWindowPopUp = document.querySelector('.info-window');
var infoWindowsCloseButton = document.querySelector('.info-window-close-button');

//Search Elements

var searchButton = document.querySelector('.search-button');
var genreToSearchInput = document.querySelector('.genre-search-bar');

//Advanced Search Elements

var advancedSearchButton = document.querySelector('.advanced-search-button');
var advancedSearchFieldsContainer = document.querySelector('.advanced-search-input-container');
var advancedSearchAuthorInput = document.querySelector('.author-search-bar');
var advancedSearchTitleInput = document.querySelector('.title-search-bar');

//Showcase Elements

var detailPopUpCloseButton = document.querySelector('.info-window-close-button');

// Loading "Animation"?

// ------------------------ External Calls.js ---------------------------------

// --------------------------- Pop Ups.js -------------------------------

buttonShowInfo.addEventListener('click', function () {
  popUpManager.openInfoWindowPopUp(infoWindowPopUp);
});
infoWindowsCloseButton.addEventListener('click', function () {
  popUpManager.closeInfoWindowPopUp(infoWindowPopUp);
});
detailPopUpCloseButton.addEventListener('click', function () {
  popUpManager.closeDetailsWindowPopUp(infoWindowPopUp);
});

// ---------------------- Search Section.js -------------------------------

advancedSearchButton.addEventListener('click', function () {
  advancedSearchFieldsContainer.classList.add('active');
});
searchButton.addEventListener('click', function () {
  if (advancedSearchFieldsContainer.classList.contains('active')) {
    if (advancedSearchTitleInput.value == "") {
      externalCalls.requestToApi2(advancedSearchAuthorInput.value);
    } else if (advancedSearchAuthorInput.value == "") {
      externalCalls.requestToApi4(advancedSearchTitleInput.value);
    }
  } else {
    externalCalls.requestToApi(genreToSearchInput.value);
    //Aggiungiamo un H2 con quello cercato?
    genreToSearchInput.value = "";
  }
});

//-------------------------------- Showcase Generator.js ---------------------------------

//--------------------------------- Showcase Manager.js -------------------------------
},{"./styles/general-style.scss":"src/styles/general-style.scss","./styles/header-style.scss":"src/styles/header-style.scss","./styles/search-section-style.scss":"src/styles/search-section-style.scss","./styles/books-showcase-style.scss":"src/styles/books-showcase-style.scss","./scripts/external-calls.js":"src/scripts/external-calls.js","./scripts/pop-ups.js":"src/scripts/pop-ups.js"}],"../../../../opt/homebrew/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49677" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../../../../opt/homebrew/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/main.js"], null)
//# sourceMappingURL=/main.1e43358e.js.map