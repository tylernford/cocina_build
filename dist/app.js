/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// ---------------------------------------------------------------------------
/*! respimage - v1.4.2 - 2015-08-22
 Licensed MIT */
!function (a, b, c) {
	"use strict";
	function d(a) {
		return a.trim ? a.trim() : a.replace(/^\s+|\s+$/g, "");
	}function e() {
		var b;R = !1, U = a.devicePixelRatio, S = {}, T = {}, b = (U || 1) * D.xQuant, D.uT || (D.maxX = Math.max(1.3, D.maxX), b = Math.min(b, D.maxX), v.DPR = b), V.width = Math.max(a.innerWidth || 0, B.clientWidth), V.height = Math.max(a.innerHeight || 0, B.clientHeight), V.vw = V.width / 100, V.vh = V.height / 100, V.em = v.getEmValue(), V.rem = V.em, o = D.lazyFactor / 2, o = o * b + o, q = .4 + .1 * b, l = .5 + .2 * b, m = .5 + .25 * b, p = b + 1.3, (n = V.width > V.height) || (o *= .9), I && (o *= .9), u = [V.width, V.height, b].join("-");
	}function f(a, b, c) {
		var d = b * Math.pow(a - .4, 1.9);return n || (d /= 1.3), a += d, a > c;
	}function g(a) {
		var b,
		    c = v.getSet(a),
		    d = !1;"pending" != c && (d = u, c && (b = v.setRes(c), d = v.applySetCandidate(b, a))), a[v.ns].evaled = d;
	}function h(a, b) {
		return a.res - b.res;
	}function i(a, b, c) {
		var d;return !c && b && (c = a[v.ns].sets, c = c && c[c.length - 1]), d = j(b, c), d && (b = v.makeUrl(b), a[v.ns].curSrc = b, a[v.ns].curCan = d, d.res || _(d, d.set.sizes)), d;
	}function j(a, b) {
		var c, d, e;if (a && b) for (e = v.parseSet(b), a = v.makeUrl(a), c = 0; c < e.length; c++) {
			if (a == v.makeUrl(e[c].url)) {
				d = e[c];break;
			}
		}return d;
	}function k(a, b) {
		var c,
		    d,
		    e,
		    f,
		    g = a.getElementsByTagName("source");for (c = 0, d = g.length; d > c; c++) {
			e = g[c], e[v.ns] = !0, f = e.getAttribute("srcset"), f && b.push({ srcset: f, media: e.getAttribute("media"), type: e.getAttribute("type"), sizes: e.getAttribute("sizes") });
		}
	}var l,
	    m,
	    n,
	    o,
	    p,
	    q,
	    r,
	    s,
	    t,
	    u,
	    v = {},
	    w = function w() {},
	    x = b.createElement("img"),
	    y = x.getAttribute,
	    z = x.setAttribute,
	    A = x.removeAttribute,
	    B = b.documentElement,
	    C = {},
	    D = { xQuant: 1, lazyFactor: .4, maxX: 2 },
	    E = "data-pfsrc",
	    F = E + "set",
	    G = "webkitBackfaceVisibility" in B.style,
	    H = navigator.userAgent,
	    I = /rident/.test(H) || /ecko/.test(H) && H.match(/rv\:(\d+)/) && RegExp.$1 > 35,
	    J = "currentSrc",
	    K = /\s+\+?\d+(e\d+)?w/,
	    L = /((?:\([^)]+\)(?:\s*and\s*|\s*or\s*|\s*not\s*)?)+)?\s*(.+)/,
	    M = /^([\+eE\d\.]+)(w|x)$/,
	    N = /\s*\d+h\s*/,
	    O = a.respimgCFG,
	    P = ("https:" == location.protocol, "position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)"),
	    Q = "font-size:100%!important;",
	    R = !0,
	    S = {},
	    T = {},
	    U = a.devicePixelRatio,
	    V = { px: 1, "in": 96 },
	    W = b.createElement("a"),
	    X = !1,
	    Y = function Y(a, b, c, d) {
		a.addEventListener ? a.addEventListener(b, c, d || !1) : a.attachEvent && a.attachEvent("on" + b, c);
	},
	    Z = function Z(a) {
		var b = {};return function (c) {
			return c in b || (b[c] = a(c)), b[c];
		};
	},
	    $ = function () {
		var a = /^([\d\.]+)(em|vw|px)$/,
		    b = function b() {
			for (var a = arguments, b = 0, c = a[0]; ++b in a;) {
				c = c.replace(a[b], a[++b]);
			}return c;
		},
		    c = Z(function (a) {
			return "return " + b((a || "").toLowerCase(), /\band\b/g, "&&", /,/g, "||", /min-([a-z-\s]+):/g, "e.$1>=", /max-([a-z-\s]+):/g, "e.$1<=", /calc([^)]+)/g, "($1)", /(\d+[\.]*[\d]*)([a-z]+)/g, "($1 * e.$2)", /^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi, "");
		});return function (b, d) {
			var e;if (!(b in S)) if (S[b] = !1, d && (e = b.match(a))) S[b] = e[1] * V[e[2]];else try {
				S[b] = new Function("e", c(b))(V);
			} catch (f) {}return S[b];
		};
	}(),
	    _ = function _(a, b) {
		return a.w ? (a.cWidth = v.calcListLength(b || "100vw"), a.res = a.w / a.cWidth) : a.res = a.x, a;
	},
	    ab = function ab(c) {
		var d,
		    e,
		    f,
		    g = c || {};if (g.elements && 1 == g.elements.nodeType && ("IMG" == g.elements.nodeName.toUpperCase() ? g.elements = [g.elements] : (g.context = g.elements, g.elements = null)), g.reparse && (g.reevaluate = !0, a.console && console.warn && console.warn("reparse was renamed to reevaluate!")), d = g.elements || v.qsa(g.context || b, g.reevaluate || g.reselect ? v.sel : v.selShort), f = d.length) {
			for (v.setupRun(g), X = !0, e = 0; f > e; e++) {
				v.fillImg(d[e], g);
			}v.teardownRun(g);
		}
	},
	    bb = Z(function (a) {
		var b = [1, "x"],
		    c = d(a || "");return c && (c = c.replace(N, ""), b = c.match(M) ? [1 * RegExp.$1, RegExp.$2] : !1), b;
	});if (J in x || (J = "src"), C["image/jpeg"] = !0, C["image/gif"] = !0, C["image/png"] = !0, C["image/svg+xml"] = b.implementation.hasFeature("http://wwwindow.w3.org/TR/SVG11/feature#Image", "1.1"), v.ns = ("ri" + new Date().getTime()).substr(0, 9), v.supSrcset = "srcset" in x, v.supSizes = "sizes" in x, v.supPicture = !!a.HTMLPictureElement, v.supSrcset && v.supPicture && !v.supSizes && !function (a) {
		x.srcset = "data:,a", a.src = "data:,a", v.supSrcset = x.complete === a.complete, v.supPicture = v.supSrcset && v.supPicture;
	}(b.createElement("img")), v.selShort = "picture>img,img[srcset]", v.sel = v.selShort, v.cfg = D, v.supSrcset && (v.sel += ",img[" + F + "]"), v.DPR = U || 1, v.u = V, v.types = C, s = v.supSrcset && !v.supSizes, v.setSize = w, v.makeUrl = Z(function (a) {
		return W.href = a, W.href;
	}), v.qsa = function (a, b) {
		return a.querySelectorAll(b);
	}, v.matchesMedia = function () {
		return v.matchesMedia = a.matchMedia && (matchMedia("(min-width: 0.1em)") || {}).matches ? function (a) {
			return !a || matchMedia(a).matches;
		} : v.mMQ, v.matchesMedia.apply(this, arguments);
	}, v.mMQ = function (a) {
		return a ? $(a) : !0;
	}, v.calcLength = function (a) {
		var b = $(a, !0) || !1;return 0 > b && (b = !1), b;
	}, v.supportsType = function (a) {
		return a ? C[a] : !0;
	}, v.parseSize = Z(function (a) {
		var b = (a || "").match(L);return { media: b && b[1], length: b && b[2] };
	}), v.parseSet = function (a) {
		if (!a.cands) {
			var b,
			    c,
			    d,
			    e,
			    f,
			    g,
			    h = a.srcset;for (a.cands = []; h;) {
				h = h.replace(/^\s+/g, ""), b = h.search(/\s/g), d = null, -1 != b ? (c = h.slice(0, b), e = c.charAt(c.length - 1), "," != e && c || (c = c.replace(/,+$/, ""), d = ""), h = h.slice(b + 1), null == d && (f = h.indexOf(","), -1 != f ? (d = h.slice(0, f), h = h.slice(f + 1)) : (d = h, h = ""))) : (c = h, h = ""), c && (d = bb(d)) && (g = { url: c.replace(/^,+/, ""), set: a }, g[d[1]] = d[0], "x" == d[1] && 1 == d[0] && (a.has1x = !0), a.cands.push(g));
			}
		}return a.cands;
	}, v.getEmValue = function () {
		var a;if (!r && (a = b.body)) {
			var c = b.createElement("div"),
			    d = B.style.cssText,
			    e = a.style.cssText;c.style.cssText = P, B.style.cssText = Q, a.style.cssText = Q, a.appendChild(c), r = c.offsetWidth, a.removeChild(c), r = parseFloat(r, 10), B.style.cssText = d, a.style.cssText = e;
		}return r || 16;
	}, v.calcListLength = function (a) {
		if (!(a in T) || D.uT) {
			var b,
			    c,
			    e,
			    f,
			    g,
			    h,
			    i = d(a).split(/\s*,\s*/),
			    j = !1;for (g = 0, h = i.length; h > g && (b = i[g], c = v.parseSize(b), e = c.length, f = c.media, !e || !v.matchesMedia(f) || (j = v.calcLength(e)) === !1); g++) {}T[a] = j ? j : V.width;
		}return T[a];
	}, v.setRes = function (a) {
		var b;if (a) {
			b = v.parseSet(a);for (var c = 0, d = b.length; d > c; c++) {
				_(b[c], a.sizes);
			}
		}return b;
	}, v.setRes.res = _, v.applySetCandidate = function (a, b) {
		if (a.length) {
			var c,
			    d,
			    e,
			    g,
			    j,
			    k,
			    n,
			    r,
			    s,
			    t,
			    w,
			    x,
			    y,
			    z = b[v.ns],
			    A = u,
			    B = o,
			    C = q;if (r = z.curSrc || b[J], s = z.curCan || i(b, r, a[0].set), d = v.DPR, y = s && s.res, !n && r && (x = I && !b.complete && s && y - .2 > d, x || s && !(p > y) || (s && d > y && y > l && (m > y && (B *= .8, C += .04 * d), s.res += B * Math.pow(y - C, 2)), t = !z.pic || s && s.set == a[0].set, s && t && s.res >= d && (n = s))), !n) for (y && (s.res = s.res - (s.res - y) / 2), a.sort(h), k = a.length, n = a[k - 1], e = 0; k > e; e++) {
				if (c = a[e], c.res >= d) {
					g = e - 1, n = a[g] && (j = c.res - d) && (x || r != v.makeUrl(c.url)) && f(a[g].res, j, d) ? a[g] : c;break;
				}
			}return y && (s.res = y), n && (w = v.makeUrl(n.url), z.curSrc = w, z.curCan = n, w != r && v.setSrc(b, n), v.setSize(b)), A;
		}
	}, v.setSrc = function (a, b) {
		var c;a.src = b.url, G && (c = a.style.zoom, a.style.zoom = "0.999", a.style.zoom = c);
	}, v.getSet = function (a) {
		var b,
		    c,
		    d,
		    e = !1,
		    f = a[v.ns].sets;for (b = 0; b < f.length && !e; b++) {
			if (c = f[b], c.srcset && v.matchesMedia(c.media) && (d = v.supportsType(c.type))) {
				"pending" == d && (c = d), e = c;break;
			}
		}return e;
	}, v.parseSets = function (a, b, d) {
		var e,
		    f,
		    g,
		    h,
		    i = "PICTURE" == b.nodeName.toUpperCase(),
		    l = a[v.ns];(l.src === c || d.src) && (l.src = y.call(a, "src"), l.src ? z.call(a, E, l.src) : A.call(a, E)), (l.srcset === c || !v.supSrcset || a.srcset || d.srcset) && (e = y.call(a, "srcset"), l.srcset = e, h = !0), l.sets = [], i && (l.pic = !0, k(b, l.sets)), l.srcset ? (f = { srcset: l.srcset, sizes: y.call(a, "sizes") }, l.sets.push(f), g = (s || l.src) && K.test(l.srcset || ""), g || !l.src || j(l.src, f) || f.has1x || (f.srcset += ", " + l.src, f.cands.push({ url: l.src, x: 1, set: f }))) : l.src && l.sets.push({ srcset: l.src, sizes: null }), l.curCan = null, l.curSrc = c, l.supported = !(i || f && !v.supSrcset || g), h && v.supSrcset && !l.supported && (e ? (z.call(a, F, e), a.srcset = "") : A.call(a, F)), l.supported && !l.srcset && (!l.src && a.src || a.src != v.makeUrl(l.src)) && (null == l.src ? a.removeAttribute("src") : a.src = l.src), l.parsed = !0;
	}, v.fillImg = function (a, b) {
		var c,
		    d,
		    e = b.reselect || b.reevaluate;if (a[v.ns] || (a[v.ns] = {}), d = a[v.ns], e || d.evaled != u) {
			if (!d.parsed || b.reevaluate) {
				if (c = a.parentNode, !c) return;v.parseSets(a, c, b);
			}d.supported ? d.evaled = u : g(a);
		}
	}, v.setupRun = function (b) {
		(!X || R || U != a.devicePixelRatio) && (e(), b.elements || b.context || clearTimeout(t));
	}, v.supPicture ? (ab = w, v.fillImg = w) : (b.createElement("picture"), function () {
		var c,
		    d = a.attachEvent ? /d$|^c/ : /d$|^c|^i/,
		    e = function e() {
			var a = b.readyState || "";h = setTimeout(e, "loading" == a ? 200 : 999), b.body && (c = c || d.test(a), v.fillImgs(), c && clearTimeout(h));
		},
		    f = function f() {
			v.fillImgs();
		},
		    g = function g() {
			clearTimeout(t), R = !0, t = setTimeout(f, 99);
		},
		    h = setTimeout(e, b.body ? 0 : 20);Y(a, "resize", g), Y(b, "readystatechange", e);
	}()), v.respimage = ab, v.fillImgs = ab, v.teardownRun = w, ab._ = v, a.respimage = a.picturefill || ab, !a.picturefill) for (a.respimgCFG = { ri: v, push: function push(a) {
			var b = a.shift();"function" == typeof v[b] ? v[b].apply(v, a) : (D[b] = a[0], X && v.fillImgs({ reselect: !0 }));
		} }; O && O.length;) {
		a.respimgCFG.push(O.shift());
	}a.picturefill || (a.picturefill = a.respimage, a.picturefillCFG || (a.picturefillCFG = a.respimgCFG));
}(window, document);

// ----------------------------------------------------------------------------
/*! lazysizes - v3.0.0 | https://cdnjs.cloudflare.com/ajax/libs/lazysizes/3.0.0/lazysizes.min.js */
!function (a, b) {
	var c = b(a, a.document);a.lazySizes = c, "object" == ( false ? "undefined" : _typeof(module)) && module.exports && (module.exports = c);
}(window, function (a, b) {
	"use strict";
	if (b.getElementsByClassName) {
		var c,
		    d = b.documentElement,
		    e = a.Date,
		    f = a.HTMLPictureElement,
		    g = "addEventListener",
		    h = "getAttribute",
		    i = a[g],
		    j = a.setTimeout,
		    k = a.requestAnimationFrame || j,
		    l = a.requestIdleCallback,
		    m = /^picture$/i,
		    n = ["load", "error", "lazyincluded", "_lazyloaded"],
		    o = {},
		    p = Array.prototype.forEach,
		    q = function q(a, b) {
			return o[b] || (o[b] = new RegExp("(\\s|^)" + b + "(\\s|$)")), o[b].test(a[h]("class") || "") && o[b];
		},
		    r = function r(a, b) {
			q(a, b) || a.setAttribute("class", (a[h]("class") || "").trim() + " " + b);
		},
		    s = function s(a, b) {
			var c;(c = q(a, b)) && a.setAttribute("class", (a[h]("class") || "").replace(c, " "));
		},
		    t = function t(a, b, c) {
			var d = c ? g : "removeEventListener";c && t(a, b), n.forEach(function (c) {
				a[d](c, b);
			});
		},
		    u = function u(a, c, d, e, f) {
			var g = b.createEvent("CustomEvent");return g.initCustomEvent(c, !e, !f, d || {}), a.dispatchEvent(g), g;
		},
		    v = function v(b, d) {
			var e;!f && (e = a.picturefill || c.pf) ? e({ reevaluate: !0, elements: [b] }) : d && d.src && (b.src = d.src);
		},
		    w = function w(a, b) {
			return (getComputedStyle(a, null) || {})[b];
		},
		    x = function x(a, b, d) {
			for (d = d || a.offsetWidth; d < c.minSize && b && !a._lazysizesWidth;) {
				d = b.offsetWidth, b = b.parentNode;
			}return d;
		},
		    y = function () {
			var a,
			    c,
			    d = [],
			    e = [],
			    f = d,
			    g = function g() {
				var b = f;for (f = d.length ? e : d, a = !0, c = !1; b.length;) {
					b.shift()();
				}a = !1;
			},
			    h = function h(d, e) {
				a && !e ? d.apply(this, arguments) : (f.push(d), c || (c = !0, (b.hidden ? j : k)(g)));
			};return h._lsFlush = g, h;
		}(),
		    z = function z(a, b) {
			return b ? function () {
				y(a);
			} : function () {
				var b = this,
				    c = arguments;y(function () {
					a.apply(b, c);
				});
			};
		},
		    A = function A(a) {
			var b,
			    c = 0,
			    d = 125,
			    f = 666,
			    g = f,
			    h = function h() {
				b = !1, c = e.now(), a();
			},
			    i = l ? function () {
				l(h, { timeout: g }), g !== f && (g = f);
			} : z(function () {
				j(h);
			}, !0);return function (a) {
				var f;(a = a === !0) && (g = 44), b || (b = !0, f = d - (e.now() - c), 0 > f && (f = 0), a || 9 > f && l ? i() : j(i, f));
			};
		},
		    B = function B(a) {
			var b,
			    c,
			    d = 99,
			    f = function f() {
				b = null, a();
			},
			    g = function g() {
				var a = e.now() - c;d > a ? j(g, d - a) : (l || f)(f);
			};return function () {
				c = e.now(), b || (b = j(g, d));
			};
		},
		    C = function () {
			var f,
			    k,
			    l,
			    n,
			    o,
			    x,
			    C,
			    E,
			    F,
			    G,
			    H,
			    I,
			    J,
			    K,
			    L,
			    M = /^img$/i,
			    N = /^iframe$/i,
			    O = "onscroll" in a && !/glebot/.test(navigator.userAgent),
			    P = 0,
			    Q = 0,
			    R = 0,
			    S = -1,
			    T = function T(a) {
				R--, a && a.target && t(a.target, T), (!a || 0 > R || !a.target) && (R = 0);
			},
			    U = function U(a, c) {
				var e,
				    f = a,
				    g = "hidden" == w(b.body, "visibility") || "hidden" != w(a, "visibility");for (F -= c, I += c, G -= c, H += c; g && (f = f.offsetParent) && f != b.body && f != d;) {
					g = (w(f, "opacity") || 1) > 0, g && "visible" != w(f, "overflow") && (e = f.getBoundingClientRect(), g = H > e.left && G < e.right && I > e.top - 1 && F < e.bottom + 1);
				}return g;
			},
			    V = function V() {
				var a, e, g, i, j, m, n, p, q;if ((o = c.loadMode) && 8 > R && (a = f.length)) {
					e = 0, S++, null == K && ("expand" in c || (c.expand = d.clientHeight > 500 && d.clientWidth > 500 ? 500 : 370), J = c.expand, K = J * c.expFactor), K > Q && 1 > R && S > 2 && o > 2 && !b.hidden ? (Q = K, S = 0) : Q = o > 1 && S > 1 && 6 > R ? J : P;for (; a > e; e++) {
						if (f[e] && !f[e]._lazyRace) if (O) {
							if ((p = f[e][h]("data-expand")) && (m = 1 * p) || (m = Q), q !== m && (C = innerWidth + m * L, E = innerHeight + m, n = -1 * m, q = m), g = f[e].getBoundingClientRect(), (I = g.bottom) >= n && (F = g.top) <= E && (H = g.right) >= n * L && (G = g.left) <= C && (I || H || G || F) && (l && 3 > R && !p && (3 > o || 4 > S) || U(f[e], m))) {
								if (ba(f[e]), j = !0, R > 9) break;
							} else !j && l && !i && 4 > R && 4 > S && o > 2 && (k[0] || c.preloadAfterLoad) && (k[0] || !p && (I || H || G || F || "auto" != f[e][h](c.sizesAttr))) && (i = k[0] || f[e]);
						} else ba(f[e]);
					}i && !j && ba(i);
				}
			},
			    W = A(V),
			    X = function X(a) {
				r(a.target, c.loadedClass), s(a.target, c.loadingClass), t(a.target, Z);
			},
			    Y = z(X),
			    Z = function Z(a) {
				Y({ target: a.target });
			},
			    $ = function $(a, b) {
				try {
					a.contentWindow.location.replace(b);
				} catch (c) {
					a.src = b;
				}
			},
			    _ = function _(a) {
				var b,
				    d,
				    e = a[h](c.srcsetAttr);(b = c.customMedia[a[h]("data-media") || a[h]("media")]) && a.setAttribute("media", b), e && a.setAttribute("srcset", e), b && (d = a.parentNode, d.insertBefore(a.cloneNode(), a), d.removeChild(a));
			},
			    aa = z(function (a, b, d, e, f) {
				var g, i, k, l, o, q;(o = u(a, "lazybeforeunveil", b)).defaultPrevented || (e && (d ? r(a, c.autosizesClass) : a.setAttribute("sizes", e)), i = a[h](c.srcsetAttr), g = a[h](c.srcAttr), f && (k = a.parentNode, l = k && m.test(k.nodeName || "")), q = b.firesLoad || "src" in a && (i || g || l), o = { target: a }, q && (t(a, T, !0), clearTimeout(n), n = j(T, 2500), r(a, c.loadingClass), t(a, Z, !0)), l && p.call(k.getElementsByTagName("source"), _), i ? a.setAttribute("srcset", i) : g && !l && (N.test(a.nodeName) ? $(a, g) : a.src = g), (i || l) && v(a, { src: g })), a._lazyRace && delete a._lazyRace, s(a, c.lazyClass), y(function () {
					(!q || a.complete && a.naturalWidth > 1) && (q ? T(o) : R--, X(o));
				}, !0);
			}),
			    ba = function ba(a) {
				var b,
				    d = M.test(a.nodeName),
				    e = d && (a[h](c.sizesAttr) || a[h]("sizes")),
				    f = "auto" == e;(!f && l || !d || !a.src && !a.srcset || a.complete || q(a, c.errorClass)) && (b = u(a, "lazyunveilread").detail, f && D.updateElem(a, !0, a.offsetWidth), a._lazyRace = !0, R++, aa(a, b, f, e, d));
			},
			    ca = function ca() {
				if (!l) {
					if (e.now() - x < 999) return void j(ca, 999);var a = B(function () {
						c.loadMode = 3, W();
					});l = !0, c.loadMode = 3, W(), i("scroll", function () {
						3 == c.loadMode && (c.loadMode = 2), a();
					}, !0);
				}
			};return { _: function _() {
					x = e.now(), f = b.getElementsByClassName(c.lazyClass), k = b.getElementsByClassName(c.lazyClass + " " + c.preloadClass), L = c.hFac, i("scroll", W, !0), i("resize", W, !0), a.MutationObserver ? new MutationObserver(W).observe(d, { childList: !0, subtree: !0, attributes: !0 }) : (d[g]("DOMNodeInserted", W, !0), d[g]("DOMAttrModified", W, !0), setInterval(W, 999)), i("hashchange", W, !0), ["focus", "mouseover", "click", "load", "transitionend", "animationend", "webkitAnimationEnd"].forEach(function (a) {
						b[g](a, W, !0);
					}), /d$|^c/.test(b.readyState) ? ca() : (i("load", ca), b[g]("DOMContentLoaded", W), j(ca, 2e4)), f.length ? (V(), y._lsFlush()) : W();
				}, checkElems: W, unveil: ba };
		}(),
		    D = function () {
			var a,
			    d = z(function (a, b, c, d) {
				var e, f, g;if (a._lazysizesWidth = d, d += "px", a.setAttribute("sizes", d), m.test(b.nodeName || "")) for (e = b.getElementsByTagName("source"), f = 0, g = e.length; g > f; f++) {
					e[f].setAttribute("sizes", d);
				}c.detail.dataAttr || v(a, c.detail);
			}),
			    e = function e(a, b, c) {
				var e,
				    f = a.parentNode;f && (c = x(a, f, c), e = u(a, "lazybeforesizes", { width: c, dataAttr: !!b }), e.defaultPrevented || (c = e.detail.width, c && c !== a._lazysizesWidth && d(a, f, e, c)));
			},
			    f = function f() {
				var b,
				    c = a.length;if (c) for (b = 0; c > b; b++) {
					e(a[b]);
				}
			},
			    g = B(f);return { _: function _() {
					a = b.getElementsByClassName(c.autosizesClass), i("resize", g);
				}, checkElems: g, updateElem: e };
		}(),
		    E = function E() {
			E.i || (E.i = !0, D._(), C._());
		};return function () {
			var b,
			    d = { lazyClass: "lazyload", loadedClass: "lazyloaded", loadingClass: "lazyloading", preloadClass: "lazypreload", errorClass: "lazyerror", autosizesClass: "lazyautosizes", srcAttr: "data-src", srcsetAttr: "data-srcset", sizesAttr: "data-sizes", minSize: 40, customMedia: {}, init: !0, expFactor: 1.5, hFac: .8, loadMode: 2 };c = a.lazySizesConfig || a.lazysizesConfig || {};for (b in d) {
				b in c || (c[b] = d[b]);
			}a.lazySizesConfig = c, j(function () {
				c.init && E();
			});
		}(), { cfg: c, autoSizer: D, loader: C, init: E, uP: v, aC: r, rC: s, hC: q, fire: u, gW: x, rAF: y };
	}
});
// support for background images:
document.addEventListener('lazybeforeunveil', function (e) {
	var bg = e.target.getAttribute('data-bg');
	if (bg) {
		e.target.style.backgroundImage = 'url(' + bg + ')';
	}
});

// ----------------------------------------------------------------------------
// ScrollMonitor
// https://github.com/stutrek/scrollMonitor/blob/master/scrollMonitor.js
!function (t, e) {
	"object" == ( false ? "undefined" : _typeof(exports)) && "object" == ( false ? "undefined" : _typeof(module)) ? module.exports = e() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.scrollMonitor = e() : t.scrollMonitor = e();
}(undefined, function () {
	return function (t) {
		function e(o) {
			if (i[o]) return i[o].exports;var s = i[o] = { exports: {}, id: o, loaded: !1 };return t[o].call(s.exports, s, s.exports, e), s.loaded = !0, s.exports;
		}var i = {};return e.m = t, e.c = i, e.p = "", e(0);
	}([function (t, e, i) {
		"use strict";
		var o = i(1),
		    s = o.isInBrowser,
		    n = i(2),
		    r = new n(s ? document.body : null);r.setStateFromDOM(null), r.listenToDOM(), s && (window.scrollMonitor = r), t.exports = r;
	}, function (t, e) {
		"use strict";
		e.VISIBILITYCHANGE = "visibilityChange", e.ENTERVIEWPORT = "enterViewport", e.FULLYENTERVIEWPORT = "fullyEnterViewport", e.EXITVIEWPORT = "exitViewport", e.PARTIALLYEXITVIEWPORT = "partiallyExitViewport", e.LOCATIONCHANGE = "locationChange", e.STATECHANGE = "stateChange", e.eventTypes = [e.VISIBILITYCHANGE, e.ENTERVIEWPORT, e.FULLYENTERVIEWPORT, e.EXITVIEWPORT, e.PARTIALLYEXITVIEWPORT, e.LOCATIONCHANGE, e.STATECHANGE], e.isOnServer = "undefined" == typeof window, e.isInBrowser = !e.isOnServer, e.defaultOffsets = { top: 0, bottom: 0 };
	}, function (t, e, i) {
		"use strict";
		function o(t, e) {
			if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
		}function s(t) {
			return c ? 0 : t === document.body ? window.innerHeight || document.documentElement.clientHeight : t.clientHeight;
		}function n(t) {
			return c ? 0 : t === document.body ? Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.documentElement.clientHeight) : t.scrollHeight;
		}function r(t) {
			return c ? 0 : t === document.body ? window.pageYOffset || document.documentElement && document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop;
		}var h = i(1),
		    c = h.isOnServer,
		    a = h.isInBrowser,
		    l = h.eventTypes,
		    p = i(3),
		    w = function () {
			function t(e, i) {
				function h() {
					if (a.viewportTop = r(e), a.viewportBottom = a.viewportTop + a.viewportHeight, a.documentHeight = n(e), a.documentHeight !== p) {
						for (w = a.watchers.length; w--;) {
							a.watchers[w].recalculateLocation();
						}p = a.documentHeight;
					}
				}function c() {
					for (u = a.watchers.length; u--;) {
						a.watchers[u].update();
					}for (u = a.watchers.length; u--;) {
						a.watchers[u].triggerCallbacks();
					}
				}o(this, t);var a = this;this.item = e, this.watchers = [], this.viewportTop = null, this.viewportBottom = null, this.documentHeight = n(e), this.viewportHeight = s(e), this.DOMListener = function () {
					t.prototype.DOMListener.apply(a, arguments);
				}, this.eventTypes = l, i && (this.containerWatcher = i.create(e));var p, w, u;this.update = function () {
					h(), c();
				}, this.recalculateLocations = function () {
					this.documentHeight = 0, this.update();
				};
			}return t.prototype.listenToDOM = function () {
				a && (window.addEventListener ? (this.item === document.body ? window.addEventListener("scroll", this.DOMListener) : this.item.addEventListener("scroll", this.DOMListener), window.addEventListener("resize", this.DOMListener)) : (this.item === document.body ? window.attachEvent("onscroll", this.DOMListener) : this.item.attachEvent("onscroll", this.DOMListener), window.attachEvent("onresize", this.DOMListener)), this.destroy = function () {
					window.addEventListener ? (this.item === document.body ? (window.removeEventListener("scroll", this.DOMListener), this.containerWatcher.destroy()) : this.item.removeEventListener("scroll", this.DOMListener), window.removeEventListener("resize", this.DOMListener)) : (this.item === document.body ? (window.detachEvent("onscroll", this.DOMListener), this.containerWatcher.destroy()) : this.item.detachEvent("onscroll", this.DOMListener), window.detachEvent("onresize", this.DOMListener));
				});
			}, t.prototype.destroy = function () {}, t.prototype.DOMListener = function (t) {
				this.setStateFromDOM(t);
			}, t.prototype.setStateFromDOM = function (t) {
				var e = r(this.item),
				    i = s(this.item),
				    o = n(this.item);this.setState(e, i, o, t);
			}, t.prototype.setState = function (t, e, i, o) {
				var s = e !== this.viewportHeight || i !== this.contentHeight;if (this.latestEvent = o, this.viewportTop = t, this.viewportHeight = e, this.viewportBottom = t + e, this.contentHeight = i, s) for (var n = this.watchers.length; n--;) {
					this.watchers[n].recalculateLocation();
				}this.updateAndTriggerWatchers(o);
			}, t.prototype.updateAndTriggerWatchers = function (t) {
				for (var e = this.watchers.length; e--;) {
					this.watchers[e].update();
				}for (e = this.watchers.length; e--;) {
					this.watchers[e].triggerCallbacks(t);
				}
			}, t.prototype.createCustomContainer = function () {
				return new t();
			}, t.prototype.createContainer = function (e) {
				"string" == typeof e ? e = document.querySelector(e) : e && e.length > 0 && (e = e[0]);var i = new t(e, this);return i.setStateFromDOM(), i.listenToDOM(), i;
			}, t.prototype.create = function (t, e) {
				"string" == typeof t ? t = document.querySelector(t) : t && t.length > 0 && (t = t[0]);var i = new p(this, t, e);return this.watchers.push(i), i;
			}, t.prototype.beget = function (t, e) {
				return this.create(t, e);
			}, t;
		}();t.exports = w;
	}, function (t, e, i) {
		"use strict";
		function o(t, e, i) {
			function o(t, e) {
				if (0 !== t.length) for (E = t.length; E--;) {
					T = t[E], T.callback.call(s, e, s), T.isOne && t.splice(E, 1);
				}
			}var s = this;this.watchItem = e, this.container = t, i ? i === +i ? this.offsets = { top: i, bottom: i } : this.offsets = { top: i.top || u.top, bottom: i.bottom || u.bottom } : this.offsets = u, this.callbacks = {};for (var d = 0, f = w.length; d < f; d++) {
				s.callbacks[w[d]] = [];
			}this.locked = !1;var m, v, b, I, E, T;this.triggerCallbacks = function (t) {
				switch (this.isInViewport && !m && o(this.callbacks[r], t), this.isFullyInViewport && !v && o(this.callbacks[h], t), this.isAboveViewport !== b && this.isBelowViewport !== I && (o(this.callbacks[n], t), v || this.isFullyInViewport || (o(this.callbacks[h], t), o(this.callbacks[a], t)), m || this.isInViewport || (o(this.callbacks[r], t), o(this.callbacks[c], t))), !this.isFullyInViewport && v && o(this.callbacks[a], t), !this.isInViewport && m && o(this.callbacks[c], t), this.isInViewport !== m && o(this.callbacks[n], t), !0) {case m !== this.isInViewport:case v !== this.isFullyInViewport:case b !== this.isAboveViewport:case I !== this.isBelowViewport:
						o(this.callbacks[p], t);}m = this.isInViewport, v = this.isFullyInViewport, b = this.isAboveViewport, I = this.isBelowViewport;
			}, this.recalculateLocation = function () {
				if (!this.locked) {
					var t = this.top,
					    e = this.bottom;if (this.watchItem.nodeName) {
						var i = this.watchItem.style.display;"none" === i && (this.watchItem.style.display = "");for (var s = 0, n = this.container; n.containerWatcher;) {
							s += n.containerWatcher.top - n.containerWatcher.container.viewportTop, n = n.containerWatcher.container;
						}var r = this.watchItem.getBoundingClientRect();this.top = r.top + this.container.viewportTop - s, this.bottom = r.bottom + this.container.viewportTop - s, "none" === i && (this.watchItem.style.display = i);
					} else this.watchItem === +this.watchItem ? this.watchItem > 0 ? this.top = this.bottom = this.watchItem : this.top = this.bottom = this.container.documentHeight - this.watchItem : (this.top = this.watchItem.top, this.bottom = this.watchItem.bottom);this.top -= this.offsets.top, this.bottom += this.offsets.bottom, this.height = this.bottom - this.top, void 0 === t && void 0 === e || this.top === t && this.bottom === e || o(this.callbacks[l], null);
				}
			}, this.recalculateLocation(), this.update(), m = this.isInViewport, v = this.isFullyInViewport, b = this.isAboveViewport, I = this.isBelowViewport;
		}var s = i(1),
		    n = s.VISIBILITYCHANGE,
		    r = s.ENTERVIEWPORT,
		    h = s.FULLYENTERVIEWPORT,
		    c = s.EXITVIEWPORT,
		    a = s.PARTIALLYEXITVIEWPORT,
		    l = s.LOCATIONCHANGE,
		    p = s.STATECHANGE,
		    w = s.eventTypes,
		    u = s.defaultOffsets;o.prototype = { on: function on(t, e, i) {
				switch (!0) {case t === n && !this.isInViewport && this.isAboveViewport:case t === r && this.isInViewport:case t === h && this.isFullyInViewport:case t === c && this.isAboveViewport && !this.isInViewport:case t === a && this.isInViewport && this.isAboveViewport:
						if (e.call(this, this.container.latestEvent, this), i) return;}if (!this.callbacks[t]) throw new Error("Tried to add a scroll monitor listener of type " + t + ". Your options are: " + w.join(", "));this.callbacks[t].push({ callback: e, isOne: i || !1 });
			}, off: function off(t, e) {
				if (!this.callbacks[t]) throw new Error("Tried to remove a scroll monitor listener of type " + t + ". Your options are: " + w.join(", "));for (var i, o = 0; i = this.callbacks[t][o]; o++) {
					if (i.callback === e) {
						this.callbacks[t].splice(o, 1);break;
					}
				}
			}, one: function one(t, e) {
				this.on(t, e, !0);
			}, recalculateSize: function recalculateSize() {
				this.height = this.watchItem.offsetHeight + this.offsets.top + this.offsets.bottom, this.bottom = this.top + this.height;
			}, update: function update() {
				this.isAboveViewport = this.top < this.container.viewportTop, this.isBelowViewport = this.bottom > this.container.viewportBottom, this.isInViewport = this.top < this.container.viewportBottom && this.bottom > this.container.viewportTop, this.isFullyInViewport = this.top >= this.container.viewportTop && this.bottom <= this.container.viewportBottom || this.isAboveViewport && this.isBelowViewport;
			}, destroy: function destroy() {
				var t = this.container.watchers.indexOf(this),
				    e = this;this.container.watchers.splice(t, 1);for (var i = 0, o = w.length; i < o; i++) {
					e.callbacks[w[i]].length = 0;
				}
			}, lock: function lock() {
				this.locked = !0;
			}, unlock: function unlock() {
				this.locked = !1;
			} };for (var d = function d(t) {
			return function (e, i) {
				this.on.call(this, t, e, i);
			};
		}, f = 0, m = w.length; f < m; f++) {
			var v = w[f];o.prototype[v] = d(v);
		}t.exports = o;
	}]);
});

$('.section-animate').each(function (index, section) {
	var sectionWatcher = scrollMonitor.create(section, -150);
	sectionWatcher.enterViewport(function () {
		section.classList.add('animated');
	});
	sectionWatcher.exitViewport(function () {
		section.classList.remove('animated');
	});
});

// JS Goes here - ES6 supported
$(document).ready(function () {

	// ---------------------------------------------------------------------------
	// Menu Toggle
	var hamburger = document.querySelector(".hamburger");
	hamburger.addEventListener("click", function () {
		hamburger.classList.toggle("is-active");
	});

	// ---------------------------------------------------------------------------
	// New Nav
	(function () {
		function transformStart() {
			document.querySelector(".js-nav").classList.toggle("is-visible");
			document.querySelector("body").classList.toggle("overflow-hidden");
		}
		document.querySelector("#js-menu").addEventListener("click", transformStart);
	})();

	// ---------------------------------------------------------------------------
	// #js-menu  Show/Hide
	var navButton = document.querySelector('#js-menu');
	navButton.addEventListener('click', function () {
		var expanded = this.getAttribute('aria-expanded') === 'true' || false;
		this.setAttribute('aria-expanded', !expanded);
		var menu = this.nextElementSibling;
		menu.hidden = !menu.hidden;
	});

	// ---------------------------------------------------------------------------
	// Image Swaps
	var previewImg = $("img.js-product-photo-featured");
	$(".js-product-photo-grid a:first").addClass("active");
	$(".js-product-photo-grid a img").click(function () {
		var link = $(this).parent();
		var linkHref = link.attr("href");
		var linkAlt = link.attr("alt");
		if ($(link).hasClass("active") == false) {
			$("a").removeClass("active");
			link.addClass("active");
			$(previewImg).animate({
				opacity: 0
			}, 300, function () {
				previewImg.attr("src", linkHref);
				previewImg.attr("alt", linkAlt);
				$(this).animate({
					opacity: 1
				}, 750);
			});
		}
		return false;
	});

	// ------------------------------------  -------------------------------------
	// Loaded
	// setTimeout(function() {
	$('body').addClass('load--done');
	// }, 1500);

	// ------------------------------------------------------------------------
	// Done
	console.log("Cocina214 | Built by Telegraph ");
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })
/******/ ]);