(function (y, x) {
  typeof exports == "object" && typeof module != "undefined"
    ? x(exports)
    : typeof define == "function" && define.amd
    ? define(["exports"], x)
    : ((y = typeof globalThis != "undefined" ? globalThis : y || self),
      x((y.storyblokVue = {})));
})(this, function (y) {
  "use strict";
  var x = Object.defineProperty,
    Pe = Object.defineProperties,
    _e = Object.getOwnPropertyDescriptors,
    Q = Object.getOwnPropertySymbols,
    je = Object.prototype.hasOwnProperty,
    $e = Object.prototype.propertyIsEnumerable,
    ee = (r, e, t) =>
      e in r
        ? x(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
        : (r[e] = t),
    E = (r, e) => {
      for (var t in e || (e = {})) je.call(e, t) && ee(r, t, e[t]);
      if (Q) for (var t of Q(e)) $e.call(e, t) && ee(r, t, e[t]);
      return r;
    },
    q = (r, e) => Pe(r, _e(e));
  let te = !1;
  const re = [],
    Ne = (r) =>
      new Promise((e, t) => {
        if (
          typeof window == "undefined" ||
          ((window.storyblokRegisterEvent = (s) => {
            if (window.location === window.parent.location) {
              console.warn(
                "You are not in Draft Mode or in the Visual Editor."
              );
              return;
            }
            te ? s() : re.push(s);
          }),
          document.getElementById("storyblok-javascript-bridge"))
        )
          return;
        const n = document.createElement("script");
        (n.async = !0),
          (n.src = r),
          (n.id = "storyblok-javascript-bridge"),
          (n.onerror = (s) => t(s)),
          (n.onload = (s) => {
            re.forEach((o) => o()), (te = !0), e(s);
          }),
          document.getElementsByTagName("head")[0].appendChild(n);
      });
  var D = { exports: {} },
    ne = function (e, t) {
      return function () {
        for (var s = new Array(arguments.length), o = 0; o < s.length; o++)
          s[o] = arguments[o];
        return e.apply(t, s);
      };
    },
    Ue = ne,
    w = Object.prototype.toString;
  function M(r) {
    return w.call(r) === "[object Array]";
  }
  function I(r) {
    return typeof r == "undefined";
  }
  function Le(r) {
    return (
      r !== null &&
      !I(r) &&
      r.constructor !== null &&
      !I(r.constructor) &&
      typeof r.constructor.isBuffer == "function" &&
      r.constructor.isBuffer(r)
    );
  }
  function Be(r) {
    return w.call(r) === "[object ArrayBuffer]";
  }
  function qe(r) {
    return typeof FormData != "undefined" && r instanceof FormData;
  }
  function De(r) {
    var e;
    return (
      typeof ArrayBuffer != "undefined" && ArrayBuffer.isView
        ? (e = ArrayBuffer.isView(r))
        : (e = r && r.buffer && r.buffer instanceof ArrayBuffer),
      e
    );
  }
  function Me(r) {
    return typeof r == "string";
  }
  function Ie(r) {
    return typeof r == "number";
  }
  function se(r) {
    return r !== null && typeof r == "object";
  }
  function A(r) {
    if (w.call(r) !== "[object Object]") return !1;
    var e = Object.getPrototypeOf(r);
    return e === null || e === Object.prototype;
  }
  function He(r) {
    return w.call(r) === "[object Date]";
  }
  function Je(r) {
    return w.call(r) === "[object File]";
  }
  function Ve(r) {
    return w.call(r) === "[object Blob]";
  }
  function oe(r) {
    return w.call(r) === "[object Function]";
  }
  function Fe(r) {
    return se(r) && oe(r.pipe);
  }
  function ze(r) {
    return (
      typeof URLSearchParams != "undefined" && r instanceof URLSearchParams
    );
  }
  function Ke(r) {
    return r.trim ? r.trim() : r.replace(/^\s+|\s+$/g, "");
  }
  function We() {
    return typeof navigator != "undefined" &&
      (navigator.product === "ReactNative" ||
        navigator.product === "NativeScript" ||
        navigator.product === "NS")
      ? !1
      : typeof window != "undefined" && typeof document != "undefined";
  }
  function H(r, e) {
    if (!(r === null || typeof r == "undefined"))
      if ((typeof r != "object" && (r = [r]), M(r)))
        for (var t = 0, n = r.length; t < n; t++) e.call(null, r[t], t, r);
      else
        for (var s in r)
          Object.prototype.hasOwnProperty.call(r, s) &&
            e.call(null, r[s], s, r);
  }
  function J() {
    var r = {};
    function e(s, o) {
      A(r[o]) && A(s)
        ? (r[o] = J(r[o], s))
        : A(s)
        ? (r[o] = J({}, s))
        : M(s)
        ? (r[o] = s.slice())
        : (r[o] = s);
    }
    for (var t = 0, n = arguments.length; t < n; t++) H(arguments[t], e);
    return r;
  }
  function Xe(r, e, t) {
    return (
      H(e, function (s, o) {
        t && typeof s == "function" ? (r[o] = Ue(s, t)) : (r[o] = s);
      }),
      r
    );
  }
  function Ye(r) {
    return r.charCodeAt(0) === 65279 && (r = r.slice(1)), r;
  }
  var v = {
      isArray: M,
      isArrayBuffer: Be,
      isBuffer: Le,
      isFormData: qe,
      isArrayBufferView: De,
      isString: Me,
      isNumber: Ie,
      isObject: se,
      isPlainObject: A,
      isUndefined: I,
      isDate: He,
      isFile: Je,
      isBlob: Ve,
      isFunction: oe,
      isStream: Fe,
      isURLSearchParams: ze,
      isStandardBrowserEnv: We,
      forEach: H,
      merge: J,
      extend: Xe,
      trim: Ke,
      stripBOM: Ye,
    },
    T = v;
  function ie(r) {
    return encodeURIComponent(r)
      .replace(/%3A/gi, ":")
      .replace(/%24/g, "$")
      .replace(/%2C/gi, ",")
      .replace(/%20/g, "+")
      .replace(/%5B/gi, "[")
      .replace(/%5D/gi, "]");
  }
  var ae = function (e, t, n) {
      if (!t) return e;
      var s;
      if (n) s = n(t);
      else if (T.isURLSearchParams(t)) s = t.toString();
      else {
        var o = [];
        T.forEach(t, function (i, l) {
          i === null ||
            typeof i == "undefined" ||
            (T.isArray(i) ? (l = l + "[]") : (i = [i]),
            T.forEach(i, function (h) {
              T.isDate(h)
                ? (h = h.toISOString())
                : T.isObject(h) && (h = JSON.stringify(h)),
                o.push(ie(l) + "=" + ie(h));
            }));
        }),
          (s = o.join("&"));
      }
      if (s) {
        var a = e.indexOf("#");
        a !== -1 && (e = e.slice(0, a)),
          (e += (e.indexOf("?") === -1 ? "?" : "&") + s);
      }
      return e;
    },
    Ge = v;
  function P() {
    this.handlers = [];
  }
  (P.prototype.use = function (e, t, n) {
    return (
      this.handlers.push({
        fulfilled: e,
        rejected: t,
        synchronous: n ? n.synchronous : !1,
        runWhen: n ? n.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }),
    (P.prototype.eject = function (e) {
      this.handlers[e] && (this.handlers[e] = null);
    }),
    (P.prototype.forEach = function (e) {
      Ge.forEach(this.handlers, function (n) {
        n !== null && e(n);
      });
    });
  var Ze = P,
    Qe = v,
    et = function (e, t) {
      Qe.forEach(e, function (s, o) {
        o !== t &&
          o.toUpperCase() === t.toUpperCase() &&
          ((e[t] = s), delete e[o]);
      });
    },
    ue = function (e, t, n, s, o) {
      return (
        (e.config = t),
        n && (e.code = n),
        (e.request = s),
        (e.response = o),
        (e.isAxiosError = !0),
        (e.toJSON = function () {
          return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: this.config,
            code: this.code,
          };
        }),
        e
      );
    },
    tt = ue,
    le = function (e, t, n, s, o) {
      var a = new Error(e);
      return tt(a, t, n, s, o);
    },
    rt = le,
    nt = function (e, t, n) {
      var s = n.config.validateStatus;
      !n.status || !s || s(n.status)
        ? e(n)
        : t(
            rt(
              "Request failed with status code " + n.status,
              n.config,
              null,
              n.request,
              n
            )
          );
    },
    _ = v,
    st = _.isStandardBrowserEnv()
      ? (function () {
          return {
            write: function (t, n, s, o, a, u) {
              var i = [];
              i.push(t + "=" + encodeURIComponent(n)),
                _.isNumber(s) && i.push("expires=" + new Date(s).toGMTString()),
                _.isString(o) && i.push("path=" + o),
                _.isString(a) && i.push("domain=" + a),
                u === !0 && i.push("secure"),
                (document.cookie = i.join("; "));
            },
            read: function (t) {
              var n = document.cookie.match(
                new RegExp("(^|;\\s*)(" + t + ")=([^;]*)")
              );
              return n ? decodeURIComponent(n[3]) : null;
            },
            remove: function (t) {
              this.write(t, "", Date.now() - 864e5);
            },
          };
        })()
      : (function () {
          return {
            write: function () {},
            read: function () {
              return null;
            },
            remove: function () {},
          };
        })(),
    ot = function (e) {
      return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e);
    },
    it = function (e, t) {
      return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
    },
    at = ot,
    ut = it,
    lt = function (e, t) {
      return e && !at(t) ? ut(e, t) : t;
    },
    V = v,
    ct = [
      "age",
      "authorization",
      "content-length",
      "content-type",
      "etag",
      "expires",
      "from",
      "host",
      "if-modified-since",
      "if-unmodified-since",
      "last-modified",
      "location",
      "max-forwards",
      "proxy-authorization",
      "referer",
      "retry-after",
      "user-agent",
    ],
    dt = function (e) {
      var t = {},
        n,
        s,
        o;
      return (
        e &&
          V.forEach(
            e.split(`
`),
            function (u) {
              if (
                ((o = u.indexOf(":")),
                (n = V.trim(u.substr(0, o)).toLowerCase()),
                (s = V.trim(u.substr(o + 1))),
                n)
              ) {
                if (t[n] && ct.indexOf(n) >= 0) return;
                n === "set-cookie"
                  ? (t[n] = (t[n] ? t[n] : []).concat([s]))
                  : (t[n] = t[n] ? t[n] + ", " + s : s);
              }
            }
          ),
        t
      );
    },
    ce = v,
    ft = ce.isStandardBrowserEnv()
      ? (function () {
          var e = /(msie|trident)/i.test(navigator.userAgent),
            t = document.createElement("a"),
            n;
          function s(o) {
            var a = o;
            return (
              e && (t.setAttribute("href", a), (a = t.href)),
              t.setAttribute("href", a),
              {
                href: t.href,
                protocol: t.protocol ? t.protocol.replace(/:$/, "") : "",
                host: t.host,
                search: t.search ? t.search.replace(/^\?/, "") : "",
                hash: t.hash ? t.hash.replace(/^#/, "") : "",
                hostname: t.hostname,
                port: t.port,
                pathname:
                  t.pathname.charAt(0) === "/" ? t.pathname : "/" + t.pathname,
              }
            );
          }
          return (
            (n = s(window.location.href)),
            function (a) {
              var u = ce.isString(a) ? s(a) : a;
              return u.protocol === n.protocol && u.host === n.host;
            }
          );
        })()
      : (function () {
          return function () {
            return !0;
          };
        })(),
    j = v,
    ht = nt,
    pt = st,
    mt = ae,
    vt = lt,
    gt = dt,
    yt = ft,
    F = le,
    de = function (e) {
      return new Promise(function (n, s) {
        var o = e.data,
          a = e.headers,
          u = e.responseType;
        j.isFormData(o) && delete a["Content-Type"];
        var i = new XMLHttpRequest();
        if (e.auth) {
          var l = e.auth.username || "",
            f = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : "";
          a.Authorization = "Basic " + btoa(l + ":" + f);
        }
        var h = vt(e.baseURL, e.url);
        i.open(e.method.toUpperCase(), mt(h, e.params, e.paramsSerializer), !0),
          (i.timeout = e.timeout);
        function d() {
          if (!!i) {
            var k =
                "getAllResponseHeaders" in i
                  ? gt(i.getAllResponseHeaders())
                  : null,
              b =
                !u || u === "text" || u === "json"
                  ? i.responseText
                  : i.response,
              C = {
                data: b,
                status: i.status,
                statusText: i.statusText,
                headers: k,
                config: e,
                request: i,
              };
            ht(n, s, C), (i = null);
          }
        }
        if (
          ("onloadend" in i
            ? (i.onloadend = d)
            : (i.onreadystatechange = function () {
                !i ||
                  i.readyState !== 4 ||
                  (i.status === 0 &&
                    !(i.responseURL && i.responseURL.indexOf("file:") === 0)) ||
                  setTimeout(d);
              }),
          (i.onabort = function () {
            !i || (s(F("Request aborted", e, "ECONNABORTED", i)), (i = null));
          }),
          (i.onerror = function () {
            s(F("Network Error", e, null, i)), (i = null);
          }),
          (i.ontimeout = function () {
            var b = "timeout of " + e.timeout + "ms exceeded";
            e.timeoutErrorMessage && (b = e.timeoutErrorMessage),
              s(
                F(
                  b,
                  e,
                  e.transitional && e.transitional.clarifyTimeoutError
                    ? "ETIMEDOUT"
                    : "ECONNABORTED",
                  i
                )
              ),
              (i = null);
          }),
          j.isStandardBrowserEnv())
        ) {
          var c =
            (e.withCredentials || yt(h)) && e.xsrfCookieName
              ? pt.read(e.xsrfCookieName)
              : void 0;
          c && (a[e.xsrfHeaderName] = c);
        }
        "setRequestHeader" in i &&
          j.forEach(a, function (b, C) {
            typeof o == "undefined" && C.toLowerCase() === "content-type"
              ? delete a[C]
              : i.setRequestHeader(C, b);
          }),
          j.isUndefined(e.withCredentials) ||
            (i.withCredentials = !!e.withCredentials),
          u && u !== "json" && (i.responseType = e.responseType),
          typeof e.onDownloadProgress == "function" &&
            i.addEventListener("progress", e.onDownloadProgress),
          typeof e.onUploadProgress == "function" &&
            i.upload &&
            i.upload.addEventListener("progress", e.onUploadProgress),
          e.cancelToken &&
            e.cancelToken.promise.then(function (b) {
              !i || (i.abort(), s(b), (i = null));
            }),
          o || (o = null),
          i.send(o);
      });
    },
    p = v,
    fe = et,
    bt = ue,
    wt = { "Content-Type": "application/x-www-form-urlencoded" };
  function he(r, e) {
    !p.isUndefined(r) &&
      p.isUndefined(r["Content-Type"]) &&
      (r["Content-Type"] = e);
  }
  function kt() {
    var r;
    return (
      (typeof XMLHttpRequest != "undefined" ||
        (typeof process != "undefined" &&
          Object.prototype.toString.call(process) === "[object process]")) &&
        (r = de),
      r
    );
  }
  function Et(r, e, t) {
    if (p.isString(r))
      try {
        return (e || JSON.parse)(r), p.trim(r);
      } catch (n) {
        if (n.name !== "SyntaxError") throw n;
      }
    return (t || JSON.stringify)(r);
  }
  var $ = {
    transitional: {
      silentJSONParsing: !0,
      forcedJSONParsing: !0,
      clarifyTimeoutError: !1,
    },
    adapter: kt(),
    transformRequest: [
      function (e, t) {
        return (
          fe(t, "Accept"),
          fe(t, "Content-Type"),
          p.isFormData(e) ||
          p.isArrayBuffer(e) ||
          p.isBuffer(e) ||
          p.isStream(e) ||
          p.isFile(e) ||
          p.isBlob(e)
            ? e
            : p.isArrayBufferView(e)
            ? e.buffer
            : p.isURLSearchParams(e)
            ? (he(t, "application/x-www-form-urlencoded;charset=utf-8"),
              e.toString())
            : p.isObject(e) || (t && t["Content-Type"] === "application/json")
            ? (he(t, "application/json"), Et(e))
            : e
        );
      },
    ],
    transformResponse: [
      function (e) {
        var t = this.transitional,
          n = t && t.silentJSONParsing,
          s = t && t.forcedJSONParsing,
          o = !n && this.responseType === "json";
        if (o || (s && p.isString(e) && e.length))
          try {
            return JSON.parse(e);
          } catch (a) {
            if (o)
              throw a.name === "SyntaxError" ? bt(a, this, "E_JSON_PARSE") : a;
          }
        return e;
      },
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    validateStatus: function (e) {
      return e >= 200 && e < 300;
    },
  };
  ($.headers = { common: { Accept: "application/json, text/plain, */*" } }),
    p.forEach(["delete", "get", "head"], function (e) {
      $.headers[e] = {};
    }),
    p.forEach(["post", "put", "patch"], function (e) {
      $.headers[e] = p.merge(wt);
    });
  var z = $,
    Tt = v,
    Rt = z,
    St = function (e, t, n) {
      var s = this || Rt;
      return (
        Tt.forEach(n, function (a) {
          e = a.call(s, e, t);
        }),
        e
      );
    },
    pe = function (e) {
      return !!(e && e.__CANCEL__);
    },
    me = v,
    K = St,
    xt = pe,
    Ot = z;
  function W(r) {
    r.cancelToken && r.cancelToken.throwIfRequested();
  }
  var Ct = function (e) {
      W(e),
        (e.headers = e.headers || {}),
        (e.data = K.call(e, e.data, e.headers, e.transformRequest)),
        (e.headers = me.merge(
          e.headers.common || {},
          e.headers[e.method] || {},
          e.headers
        )),
        me.forEach(
          ["delete", "get", "head", "post", "put", "patch", "common"],
          function (s) {
            delete e.headers[s];
          }
        );
      var t = e.adapter || Ot.adapter;
      return t(e).then(
        function (s) {
          return (
            W(e),
            (s.data = K.call(e, s.data, s.headers, e.transformResponse)),
            s
          );
        },
        function (s) {
          return (
            xt(s) ||
              (W(e),
              s &&
                s.response &&
                (s.response.data = K.call(
                  e,
                  s.response.data,
                  s.response.headers,
                  e.transformResponse
                ))),
            Promise.reject(s)
          );
        }
      );
    },
    m = v,
    ve = function (e, t) {
      t = t || {};
      var n = {},
        s = ["url", "method", "data"],
        o = ["headers", "auth", "proxy", "params"],
        a = [
          "baseURL",
          "transformRequest",
          "transformResponse",
          "paramsSerializer",
          "timeout",
          "timeoutMessage",
          "withCredentials",
          "adapter",
          "responseType",
          "xsrfCookieName",
          "xsrfHeaderName",
          "onUploadProgress",
          "onDownloadProgress",
          "decompress",
          "maxContentLength",
          "maxBodyLength",
          "maxRedirects",
          "transport",
          "httpAgent",
          "httpsAgent",
          "cancelToken",
          "socketPath",
          "responseEncoding",
        ],
        u = ["validateStatus"];
      function i(d, c) {
        return m.isPlainObject(d) && m.isPlainObject(c)
          ? m.merge(d, c)
          : m.isPlainObject(c)
          ? m.merge({}, c)
          : m.isArray(c)
          ? c.slice()
          : c;
      }
      function l(d) {
        m.isUndefined(t[d])
          ? m.isUndefined(e[d]) || (n[d] = i(void 0, e[d]))
          : (n[d] = i(e[d], t[d]));
      }
      m.forEach(s, function (c) {
        m.isUndefined(t[c]) || (n[c] = i(void 0, t[c]));
      }),
        m.forEach(o, l),
        m.forEach(a, function (c) {
          m.isUndefined(t[c])
            ? m.isUndefined(e[c]) || (n[c] = i(void 0, e[c]))
            : (n[c] = i(void 0, t[c]));
        }),
        m.forEach(u, function (c) {
          c in t ? (n[c] = i(e[c], t[c])) : c in e && (n[c] = i(void 0, e[c]));
        });
      var f = s.concat(o).concat(a).concat(u),
        h = Object.keys(e)
          .concat(Object.keys(t))
          .filter(function (c) {
            return f.indexOf(c) === -1;
          });
      return m.forEach(h, l), n;
    },
    At = {
      name: "axios",
      version: "0.21.4",
      description: "Promise based HTTP client for the browser and node.js",
      main: "index.js",
      scripts: {
        test: "grunt test",
        start: "node ./sandbox/server.js",
        build: "NODE_ENV=production grunt build",
        preversion: "npm test",
        version:
          "npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json",
        postversion: "git push && git push --tags",
        examples: "node ./examples/server.js",
        coveralls:
          "cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",
        fix: "eslint --fix lib/**/*.js",
      },
      repository: { type: "git", url: "https://github.com/axios/axios.git" },
      keywords: ["xhr", "http", "ajax", "promise", "node"],
      author: "Matt Zabriskie",
      license: "MIT",
      bugs: { url: "https://github.com/axios/axios/issues" },
      homepage: "https://axios-http.com",
      devDependencies: {
        coveralls: "^3.0.0",
        "es6-promise": "^4.2.4",
        grunt: "^1.3.0",
        "grunt-banner": "^0.6.0",
        "grunt-cli": "^1.2.0",
        "grunt-contrib-clean": "^1.1.0",
        "grunt-contrib-watch": "^1.0.0",
        "grunt-eslint": "^23.0.0",
        "grunt-karma": "^4.0.0",
        "grunt-mocha-test": "^0.13.3",
        "grunt-ts": "^6.0.0-beta.19",
        "grunt-webpack": "^4.0.2",
        "istanbul-instrumenter-loader": "^1.0.0",
        "jasmine-core": "^2.4.1",
        karma: "^6.3.2",
        "karma-chrome-launcher": "^3.1.0",
        "karma-firefox-launcher": "^2.1.0",
        "karma-jasmine": "^1.1.1",
        "karma-jasmine-ajax": "^0.1.13",
        "karma-safari-launcher": "^1.0.0",
        "karma-sauce-launcher": "^4.3.6",
        "karma-sinon": "^1.0.5",
        "karma-sourcemap-loader": "^0.3.8",
        "karma-webpack": "^4.0.2",
        "load-grunt-tasks": "^3.5.2",
        minimist: "^1.2.0",
        mocha: "^8.2.1",
        sinon: "^4.5.0",
        "terser-webpack-plugin": "^4.2.3",
        typescript: "^4.0.5",
        "url-search-params": "^0.10.0",
        webpack: "^4.44.2",
        "webpack-dev-server": "^3.11.0",
      },
      browser: { "./lib/adapters/http.js": "./lib/adapters/xhr.js" },
      jsdelivr: "dist/axios.min.js",
      unpkg: "dist/axios.min.js",
      typings: "./index.d.ts",
      dependencies: { "follow-redirects": "^1.14.0" },
      bundlesize: [{ path: "./dist/axios.min.js", threshold: "5kB" }],
    },
    ge = At,
    X = {};
  ["object", "boolean", "number", "function", "string", "symbol"].forEach(
    function (r, e) {
      X[r] = function (n) {
        return typeof n === r || "a" + (e < 1 ? "n " : " ") + r;
      };
    }
  );
  var ye = {},
    Pt = ge.version.split(".");
  function be(r, e) {
    for (var t = e ? e.split(".") : Pt, n = r.split("."), s = 0; s < 3; s++) {
      if (t[s] > n[s]) return !0;
      if (t[s] < n[s]) return !1;
    }
    return !1;
  }
  X.transitional = function (e, t, n) {
    var s = t && be(t);
    function o(a, u) {
      return (
        "[Axios v" +
        ge.version +
        "] Transitional option '" +
        a +
        "'" +
        u +
        (n ? ". " + n : "")
      );
    }
    return function (a, u, i) {
      if (e === !1) throw new Error(o(u, " has been removed in " + t));
      return (
        s &&
          !ye[u] &&
          ((ye[u] = !0),
          console.warn(
            o(
              u,
              " has been deprecated since v" +
                t +
                " and will be removed in the near future"
            )
          )),
        e ? e(a, u, i) : !0
      );
    };
  };
  function _t(r, e, t) {
    if (typeof r != "object") throw new TypeError("options must be an object");
    for (var n = Object.keys(r), s = n.length; s-- > 0; ) {
      var o = n[s],
        a = e[o];
      if (a) {
        var u = r[o],
          i = u === void 0 || a(u, o, r);
        if (i !== !0) throw new TypeError("option " + o + " must be " + i);
        continue;
      }
      if (t !== !0) throw Error("Unknown option " + o);
    }
  }
  var jt = { isOlderVersion: be, assertOptions: _t, validators: X },
    we = v,
    $t = ae,
    ke = Ze,
    Ee = Ct,
    N = ve,
    Te = jt,
    R = Te.validators;
  function O(r) {
    (this.defaults = r),
      (this.interceptors = { request: new ke(), response: new ke() });
  }
  (O.prototype.request = function (e) {
    typeof e == "string"
      ? ((e = arguments[1] || {}), (e.url = arguments[0]))
      : (e = e || {}),
      (e = N(this.defaults, e)),
      e.method
        ? (e.method = e.method.toLowerCase())
        : this.defaults.method
        ? (e.method = this.defaults.method.toLowerCase())
        : (e.method = "get");
    var t = e.transitional;
    t !== void 0 &&
      Te.assertOptions(
        t,
        {
          silentJSONParsing: R.transitional(R.boolean, "1.0.0"),
          forcedJSONParsing: R.transitional(R.boolean, "1.0.0"),
          clarifyTimeoutError: R.transitional(R.boolean, "1.0.0"),
        },
        !1
      );
    var n = [],
      s = !0;
    this.interceptors.request.forEach(function (d) {
      (typeof d.runWhen == "function" && d.runWhen(e) === !1) ||
        ((s = s && d.synchronous), n.unshift(d.fulfilled, d.rejected));
    });
    var o = [];
    this.interceptors.response.forEach(function (d) {
      o.push(d.fulfilled, d.rejected);
    });
    var a;
    if (!s) {
      var u = [Ee, void 0];
      for (
        Array.prototype.unshift.apply(u, n),
          u = u.concat(o),
          a = Promise.resolve(e);
        u.length;

      )
        a = a.then(u.shift(), u.shift());
      return a;
    }
    for (var i = e; n.length; ) {
      var l = n.shift(),
        f = n.shift();
      try {
        i = l(i);
      } catch (h) {
        f(h);
        break;
      }
    }
    try {
      a = Ee(i);
    } catch (h) {
      return Promise.reject(h);
    }
    for (; o.length; ) a = a.then(o.shift(), o.shift());
    return a;
  }),
    (O.prototype.getUri = function (e) {
      return (
        (e = N(this.defaults, e)),
        $t(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
      );
    }),
    we.forEach(["delete", "get", "head", "options"], function (e) {
      O.prototype[e] = function (t, n) {
        return this.request(
          N(n || {}, { method: e, url: t, data: (n || {}).data })
        );
      };
    }),
    we.forEach(["post", "put", "patch"], function (e) {
      O.prototype[e] = function (t, n, s) {
        return this.request(N(s || {}, { method: e, url: t, data: n }));
      };
    });
  var Nt = O;
  function Y(r) {
    this.message = r;
  }
  (Y.prototype.toString = function () {
    return "Cancel" + (this.message ? ": " + this.message : "");
  }),
    (Y.prototype.__CANCEL__ = !0);
  var Re = Y,
    Ut = Re;
  function U(r) {
    if (typeof r != "function")
      throw new TypeError("executor must be a function.");
    var e;
    this.promise = new Promise(function (s) {
      e = s;
    });
    var t = this;
    r(function (s) {
      t.reason || ((t.reason = new Ut(s)), e(t.reason));
    });
  }
  (U.prototype.throwIfRequested = function () {
    if (this.reason) throw this.reason;
  }),
    (U.source = function () {
      var e,
        t = new U(function (s) {
          e = s;
        });
      return { token: t, cancel: e };
    });
  var Lt = U,
    Bt = function (e) {
      return function (n) {
        return e.apply(null, n);
      };
    },
    qt = function (e) {
      return typeof e == "object" && e.isAxiosError === !0;
    },
    Se = v,
    Dt = ne,
    L = Nt,
    Mt = ve,
    It = z;
  function xe(r) {
    var e = new L(r),
      t = Dt(L.prototype.request, e);
    return Se.extend(t, L.prototype, e), Se.extend(t, e), t;
  }
  var g = xe(It);
  (g.Axios = L),
    (g.create = function (e) {
      return xe(Mt(g.defaults, e));
    }),
    (g.Cancel = Re),
    (g.CancelToken = Lt),
    (g.isCancel = pe),
    (g.all = function (e) {
      return Promise.all(e);
    }),
    (g.spread = Bt),
    (g.isAxiosError = qt),
    (D.exports = g),
    (D.exports.default = g);
  var Ht = D.exports;
  /*!
   * storyblok-js-client v0.0.0-development
   * Universal JavaScript SDK for Storyblok's API
   * (c) 2020-2022 Stobylok Team
   */ function Oe(r) {
    return typeof r == "number" && r == r && r !== 1 / 0 && r !== -1 / 0;
  }
  function Ce(r, e, t) {
    if (!Oe(e)) throw new TypeError("Expected `limit` to be a finite number");
    if (!Oe(t))
      throw new TypeError("Expected `interval` to be a finite number");
    var n = [],
      s = [],
      o = 0,
      a = function () {
        o++;
        var i = setTimeout(function () {
          o--,
            n.length > 0 && a(),
            (s = s.filter(function (f) {
              return f !== i;
            }));
        }, t);
        s.indexOf(i) < 0 && s.push(i);
        var l = n.shift();
        l.resolve(r.apply(l.self, l.args));
      },
      u = function () {
        var i = arguments,
          l = this;
        return new Promise(function (f, h) {
          n.push({ resolve: f, reject: h, args: i, self: l }), o < e && a();
        });
      };
    return (
      (u.abort = function () {
        s.forEach(clearTimeout),
          (s = []),
          n.forEach(function (i) {
            i.reject(new throttle.AbortError());
          }),
          (n.length = 0);
      }),
      u
    );
  }
  Ce.AbortError = function () {
    Error.call(this, "Throttled function aborted"), (this.name = "AbortError");
  };
  const Jt = function (r, e) {
    if (!r) return null;
    let t = {};
    for (let n in r) {
      let s = r[n];
      e.indexOf(n) > -1 && s !== null && (t[n] = s);
    }
    return t;
  };
  var Vt = {
    nodes: {
      horizontal_rule: (r) => ({ singleTag: "hr" }),
      blockquote: (r) => ({ tag: "blockquote" }),
      bullet_list: (r) => ({ tag: "ul" }),
      code_block: (r) => ({ tag: ["pre", { tag: "code", attrs: r.attrs }] }),
      hard_break: (r) => ({ singleTag: "br" }),
      heading: (r) => ({ tag: "h" + r.attrs.level }),
      image: (r) => ({
        singleTag: [
          { tag: "img", attrs: Jt(r.attrs, ["src", "alt", "title"]) },
        ],
      }),
      list_item: (r) => ({ tag: "li" }),
      ordered_list: (r) => ({ tag: "ol" }),
      paragraph: (r) => ({ tag: "p" }),
    },
    marks: {
      bold: () => ({ tag: "b" }),
      strike: () => ({ tag: "strike" }),
      underline: () => ({ tag: "u" }),
      strong: () => ({ tag: "strong" }),
      code: () => ({ tag: "code" }),
      italic: () => ({ tag: "i" }),
      link(r) {
        const e = E({}, r.attrs),
          { linktype: t = "url" } = r.attrs;
        return (
          t === "email" && (e.href = "mailto:" + e.href),
          e.anchor && ((e.href = `${e.href}#${e.anchor}`), delete e.anchor),
          { tag: [{ tag: "a", attrs: e }] }
        );
      },
      styled: (r) => ({ tag: [{ tag: "span", attrs: r.attrs }] }),
    },
  };
  class Ft {
    constructor(e) {
      e || (e = Vt), (this.marks = e.marks || []), (this.nodes = e.nodes || []);
    }
    addNode(e, t) {
      this.nodes[e] = t;
    }
    addMark(e, t) {
      this.marks[e] = t;
    }
    render(e = {}) {
      if (e.content && Array.isArray(e.content)) {
        let t = "";
        return (
          e.content.forEach((n) => {
            t += this.renderNode(n);
          }),
          t
        );
      }
      return (
        console.warn(
          "The render method must receive an object with a content field, which is an array"
        ),
        ""
      );
    }
    renderNode(e) {
      let t = [];
      e.marks &&
        e.marks.forEach((s) => {
          const o = this.getMatchingMark(s);
          o && t.push(this.renderOpeningTag(o.tag));
        });
      const n = this.getMatchingNode(e);
      return (
        n && n.tag && t.push(this.renderOpeningTag(n.tag)),
        e.content
          ? e.content.forEach((s) => {
              t.push(this.renderNode(s));
            })
          : e.text
          ? t.push(
              (function (s) {
                const o = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;",
                  },
                  a = /[&<>"']/g,
                  u = RegExp(a.source);
                return s && u.test(s) ? s.replace(a, (i) => o[i]) : s;
              })(e.text)
            )
          : n && n.singleTag
          ? t.push(this.renderTag(n.singleTag, " /"))
          : n && n.html && t.push(n.html),
        n && n.tag && t.push(this.renderClosingTag(n.tag)),
        e.marks &&
          e.marks
            .slice(0)
            .reverse()
            .forEach((s) => {
              const o = this.getMatchingMark(s);
              o && t.push(this.renderClosingTag(o.tag));
            }),
        t.join("")
      );
    }
    renderTag(e, t) {
      return e.constructor === String
        ? `<${e}${t}>`
        : e
            .map((n) => {
              if (n.constructor === String) return `<${n}${t}>`;
              {
                let s = "<" + n.tag;
                if (n.attrs)
                  for (let o in n.attrs) {
                    let a = n.attrs[o];
                    a !== null && (s += ` ${o}="${a}"`);
                  }
                return `${s}${t}>`;
              }
            })
            .join("");
    }
    renderOpeningTag(e) {
      return this.renderTag(e, "");
    }
    renderClosingTag(e) {
      return e.constructor === String
        ? `</${e}>`
        : e
            .slice(0)
            .reverse()
            .map((t) => (t.constructor === String ? `</${t}>` : `</${t.tag}>`))
            .join("");
    }
    getMatchingNode(e) {
      if (typeof this.nodes[e.type] == "function") return this.nodes[e.type](e);
    }
    getMatchingMark(e) {
      if (typeof this.marks[e.type] == "function") return this.marks[e.type](e);
    }
  }
  const zt = (r = 0, e = r) => {
      const t = Math.abs(e - r) || 0,
        n = r < e ? 1 : -1;
      return ((s = 0, o) => [...Array(s)].map(o))(t, (s, o) => o * n + r);
    },
    G = (r, e, t) => {
      const n = [];
      for (const s in r) {
        if (!Object.prototype.hasOwnProperty.call(r, s)) continue;
        const o = r[s],
          a = t ? "" : encodeURIComponent(s);
        let u;
        (u =
          typeof o == "object"
            ? G(
                o,
                e ? e + encodeURIComponent("[" + a + "]") : a,
                Array.isArray(o)
              )
            : (e ? e + encodeURIComponent("[" + a + "]") : a) +
              "=" +
              encodeURIComponent(o)),
          n.push(u);
      }
      return n.join("&");
    };
  let B = {},
    S = {};
  class Kt {
    constructor(e, t) {
      if (!t) {
        let o = e.region ? "-" + e.region : "",
          a = e.https === !1 ? "http" : "https";
        t =
          e.oauthToken === void 0
            ? `${a}://api${o}.storyblok.com/v2`
            : `${a}://api${o}.storyblok.com/v1`;
      }
      let n = Object.assign({}, e.headers),
        s = 5;
      e.oauthToken !== void 0 && ((n.Authorization = e.oauthToken), (s = 3)),
        e.rateLimit !== void 0 && (s = e.rateLimit),
        (this.richTextResolver = new Ft(e.richTextSchema)),
        typeof e.componentResolver == "function" &&
          this.setComponentResolver(e.componentResolver),
        (this.maxRetries = e.maxRetries || 5),
        (this.throttle = Ce(this.throttledRequest, s, 1e3)),
        (this.accessToken = e.accessToken),
        (this.relations = {}),
        (this.links = {}),
        (this.cache = e.cache || { clear: "manual" }),
        (this.client = Ht.create({
          baseURL: t,
          timeout: e.timeout || 0,
          headers: n,
          proxy: e.proxy || !1,
        })),
        e.responseInterceptor &&
          this.client.interceptors.response.use((o) =>
            e.responseInterceptor(o)
          );
    }
    setComponentResolver(e) {
      this.richTextResolver.addNode("blok", (t) => {
        let n = "";
        return (
          t.attrs.body.forEach((s) => {
            n += e(s.component, s);
          }),
          { html: n }
        );
      });
    }
    parseParams(e = {}) {
      return (
        e.version || (e.version = "published"),
        e.token || (e.token = this.getToken()),
        e.cv || (e.cv = S[e.token]),
        Array.isArray(e.resolve_relations) &&
          (e.resolve_relations = e.resolve_relations.join(",")),
        e
      );
    }
    factoryParamOptions(e, t = {}) {
      return ((n = "") => n.indexOf("/cdn/") > -1)(e) ? this.parseParams(t) : t;
    }
    makeRequest(e, t, n, s) {
      const o = this.factoryParamOptions(
        e,
        ((a = {}, u = 25, i = 1) => q(E({}, a), { per_page: u, page: i }))(
          t,
          n,
          s
        )
      );
      return this.cacheResponse(e, o);
    }
    get(e, t) {
      let n = "/" + e;
      const s = this.factoryParamOptions(n, t);
      return this.cacheResponse(n, s);
    }
    async getAll(e, t = {}, n) {
      const s = t.per_page || 25,
        o = "/" + e,
        a = o.split("/");
      n = n || a[a.length - 1];
      const u = await this.makeRequest(o, t, s, 1),
        i = Math.ceil(u.total / s);
      return ((l = [], f) =>
        l
          .map(f)
          .reduce(
            (h, d) => [...h, ...d],
            []
          ))([u, ...(await (async (l = [], f) => Promise.all(l.map(f)))(zt(1, i), async (l) => this.makeRequest(o, t, s, l + 1)))], (l) => Object.values(l.data[n]));
    }
    post(e, t) {
      let n = "/" + e;
      return this.throttle("post", n, t);
    }
    put(e, t) {
      let n = "/" + e;
      return this.throttle("put", n, t);
    }
    delete(e, t) {
      let n = "/" + e;
      return this.throttle("delete", n, t);
    }
    getStories(e) {
      return this.get("cdn/stories", e);
    }
    getStory(e, t) {
      return this.get("cdn/stories/" + e, t);
    }
    setToken(e) {
      this.accessToken = e;
    }
    getToken() {
      return this.accessToken;
    }
    _cleanCopy(e) {
      return JSON.parse(JSON.stringify(e));
    }
    _insertLinks(e, t) {
      const n = e[t];
      n &&
      n.fieldtype == "multilink" &&
      n.linktype == "story" &&
      typeof n.id == "string" &&
      this.links[n.id]
        ? (n.story = this._cleanCopy(this.links[n.id]))
        : n &&
          n.linktype === "story" &&
          typeof n.uuid == "string" &&
          this.links[n.uuid] &&
          (n.story = this._cleanCopy(this.links[n.uuid]));
    }
    _insertRelations(e, t, n) {
      if (n.indexOf(e.component + "." + t) > -1) {
        if (typeof e[t] == "string")
          this.relations[e[t]] &&
            (e[t] = this._cleanCopy(this.relations[e[t]]));
        else if (e[t].constructor === Array) {
          let s = [];
          e[t].forEach((o) => {
            this.relations[o] && s.push(this._cleanCopy(this.relations[o]));
          }),
            (e[t] = s);
        }
      }
    }
    iterateTree(e, t) {
      let n = (s) => {
        if (s != null) {
          if (s.constructor === Array)
            for (let o = 0; o < s.length; o++) n(s[o]);
          else if (s.constructor === Object) {
            if (s._stopResolving) return;
            for (let o in s)
              ((s.component && s._uid) || s.type === "link") &&
                (this._insertRelations(s, o, t), this._insertLinks(s, o)),
                n(s[o]);
          }
        }
      };
      n(e.content);
    }
    async resolveLinks(e, t) {
      let n = [];
      if (e.link_uuids) {
        const s = e.link_uuids.length;
        let o = [];
        const a = 50;
        for (let u = 0; u < s; u += a) {
          const i = Math.min(s, u + a);
          o.push(e.link_uuids.slice(u, i));
        }
        for (let u = 0; u < o.length; u++)
          (
            await this.getStories({
              per_page: a,
              language: t.language,
              version: t.version,
              by_uuids: o[u].join(","),
            })
          ).data.stories.forEach((i) => {
            n.push(i);
          });
      } else n = e.links;
      n.forEach((s) => {
        this.links[s.uuid] = q(E({}, s), { _stopResolving: !0 });
      });
    }
    async resolveRelations(e, t) {
      let n = [];
      if (e.rel_uuids) {
        const s = e.rel_uuids.length;
        let o = [];
        const a = 50;
        for (let u = 0; u < s; u += a) {
          const i = Math.min(s, u + a);
          o.push(e.rel_uuids.slice(u, i));
        }
        for (let u = 0; u < o.length; u++)
          (
            await this.getStories({
              per_page: a,
              language: t.language,
              version: t.version,
              by_uuids: o[u].join(","),
            })
          ).data.stories.forEach((i) => {
            n.push(i);
          });
      } else n = e.rels;
      n.forEach((s) => {
        this.relations[s.uuid] = q(E({}, s), { _stopResolving: !0 });
      });
    }
    async resolveStories(e, t) {
      let n = [];
      t.resolve_relations !== void 0 &&
        t.resolve_relations.length > 0 &&
        ((n = t.resolve_relations.split(",")),
        await this.resolveRelations(e, t)),
        ["1", "story", "url"].indexOf(t.resolve_links) > -1 &&
          (await this.resolveLinks(e, t));
      for (const s in this.relations) this.iterateTree(this.relations[s], n);
      e.story
        ? this.iterateTree(e.story, n)
        : e.stories.forEach((s) => {
            this.iterateTree(s, n);
          });
    }
    cacheResponse(e, t, n) {
      return (
        n === void 0 && (n = 0),
        new Promise(async (s, o) => {
          let a = G({ url: e, params: t }),
            u = this.cacheProvider();
          if (
            (this.cache.clear === "auto" &&
              t.version === "draft" &&
              (await this.flushCache()),
            t.version === "published" && e != "/cdn/spaces/me")
          ) {
            const l = await u.get(a);
            if (l) return s(l);
          }
          try {
            let l = await this.throttle("get", e, {
                params: t,
                paramsSerializer: (h) => G(h),
              }),
              f = { data: l.data, headers: l.headers };
            if (
              (l.headers["per-page"] &&
                (f = Object.assign({}, f, {
                  perPage: parseInt(l.headers["per-page"]),
                  total: parseInt(l.headers.total),
                })),
              l.status != 200)
            )
              return o(l);
            (f.data.story || f.data.stories) &&
              (await this.resolveStories(f.data, t)),
              t.version === "published" && e != "/cdn/spaces/me" && u.set(a, f),
              f.data.cv &&
                (t.version == "draft" &&
                  S[t.token] != f.data.cv &&
                  this.flushCache(),
                (S[t.token] = f.data.cv)),
              s(f);
          } catch (l) {
            if (
              l.response &&
              l.response.status === 429 &&
              (n += 1) < this.maxRetries
            )
              return (
                console.log(`Hit rate limit. Retrying in ${n} seconds.`),
                await ((i = 1e3 * n), new Promise((f) => setTimeout(f, i))),
                this.cacheResponse(e, t, n).then(s).catch(o)
              );
            o(l);
          }
          var i;
        })
      );
    }
    throttledRequest(e, t, n) {
      return this.client[e](t, n);
    }
    cacheVersions() {
      return S;
    }
    cacheVersion() {
      return S[this.accessToken];
    }
    setCacheVersion(e) {
      this.accessToken && (S[this.accessToken] = e);
    }
    cacheProvider() {
      switch (this.cache.type) {
        case "memory":
          return {
            get: (e) => B[e],
            getAll: () => B,
            set(e, t) {
              B[e] = t;
            },
            flush() {
              B = {};
            },
          };
        default:
          return { get() {}, getAll() {}, set() {}, flush() {} };
      }
    }
    async flushCache() {
      return await this.cacheProvider().flush(), this;
    }
  }
  var Wt = (r = {}) => {
      const { apiOptions: e } = r;
      if (!e.accessToken) {
        console.error(
          "You need to provide an access token to interact with Storyblok API. Read https://www.storyblok.com/docs/api/content-delivery#topics/authentication"
        );
        return;
      }
      return { storyblokApi: new Kt(e) };
    },
    Xt = (r) => {
      if (typeof r != "object" || typeof r._editable == "undefined") return {};
      const e = JSON.parse(
        r._editable.replace(/^<!--#storyblok#/, "").replace(/-->$/, "")
      );
      return {
        "data-blok-c": JSON.stringify(e),
        "data-blok-uid": e.id + "-" + e.uid,
      };
    };
  const Yt = (r, e, t = {}) => {
      if (typeof window != "undefined") {
        if (typeof window.storyblokRegisterEvent == "undefined") {
          console.error(
            "Storyblok Bridge is disabled. Please enable it to use it. Read https://github.com/storyblok/storyblok-js"
          );
          return;
        }
        window.storyblokRegisterEvent(() => {
          new window.StoryblokBridge(t).on(
            ["input", "published", "change"],
            (s) => {
              s.action == "input" && s.story.id === r
                ? e(s.story)
                : window.location.reload();
            }
          );
        });
      }
    },
    Gt = (r = {}) => {
      const { bridge: e, accessToken: t, use: n = [], apiOptions: s = {} } = r;
      s.accessToken = s.accessToken || t;
      const o = { bridge: e, apiOptions: s };
      let a = {};
      return (
        n.forEach((u) => {
          a = E(E({}, a), u(o));
        }),
        e !== !1 && Ne("https://app.storyblok.com/f/storyblok-v2-latest.js"),
        a
      );
    },
    Zt = {
      bind(r, e) {
        if (e.value) {
          const t = Xt(e.value);
          r.setAttribute("data-blok-c", t["data-blok-c"]),
            r.setAttribute("data-blok-uid", t["data-blok-uid"]),
            r.classList.add("storyblok__outline");
        }
      },
    };
  let Z = null;
  const Qt = () => (
      Z ||
        console.error(`You can't use useStoryblokApi if you're not loading apiPlugin. Please enable it like in this example:

import { StoryblokVue, apiPlugin } from "@storyblok/vue";
app.use(StoryblokVue, {
  accessToken: "<your-token>",
  use: [apiPlugin], // use it only if you need it
});    
    `),
      Z
    ),
    Ae = {
      install(r, e = {}) {
        r.directive("editable", Zt);
        const { storyblokApi: t } = Gt(e);
        (Z = t), (r.prototype.$storyblokApi = t);
      },
    };
  typeof window != "undefined" && window.Vue && window.Vue.use(Ae),
    (y.StoryblokVue = Ae),
    (y.apiPlugin = Wt),
    (y.useStoryblokApi = Qt),
    (y.useStoryblokBridge = Yt),
    Object.defineProperty(y, "__esModule", { value: !0 }),
    (y[Symbol.toStringTag] = "Module");
});
