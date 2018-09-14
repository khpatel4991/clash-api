require("@babel/polyfill");
module.exports = (function(e) {
  function t(r) {
    if (n[r]) return n[r].exports;
    var o = (n[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
  }
  var n = {};
  return (
    (t.m = e),
    (t.c = n),
    (t.d = function(e, n, r) {
      t.o(e, n) ||
        Object.defineProperty(e, n, {
          configurable: !1,
          enumerable: !0,
          get: r
        });
    }),
    (t.n = function(e) {
      var n =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return t.d(n, "a", n), n;
    }),
    (t.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (t.p = "/static/"),
    t((t.s = 34))
  );
})([
  function(e, t) {
    e.exports = require("react");
  },
  function(e, t) {
    e.exports = require("react-redux");
  },
  function(e, t) {
    e.exports = require("redux-first-router");
  },
  function(e, t) {
    e.exports = {
      switcher: "Switcher__switcher--2LNIO",
      spinner: "Switcher__spinner--1Awb2",
      load3: "Switcher__load3--3Kh8F",
      admin: "Switcher__admin--24A93",
      login: "Switcher__login--WY46z",
      notFound: "Switcher__notFound--VyF3e"
    };
  },
  function(e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = n(0),
      a = r(o),
      i = n(5),
      u = r(i),
      l = n(6),
      c = r(l),
      s = n(7),
      f = r(s),
      d = n(85),
      p = r(d);
    t.default = function() {
      return a.default.createElement(
        "div",
        null,
        a.default.createElement(
          "div",
          { className: p.default.app },
          a.default.createElement(c.default, null),
          a.default.createElement(f.default, null)
        ),
        a.default.createElement(u.default, null)
      );
    };
  },
  function(e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      a = n(0),
      i = r(a),
      u = n(1),
      l = n(71),
      c = r(l),
      s = function() {
        return i.default.createElement(
          "div",
          { className: c.default.container },
          i.default.createElement(
            "div",
            { className: c.default.titleBar },
            i.default.createElement("span", null, "ACTIONS"),
            i.default.createElement("span", null, "DEV-TOOLS"),
            i.default.createElement("span", null, "STATE")
          ),
          i.default.createElement(
            "div",
            { className: c.default.devTools },
            i.default.createElement(d, null),
            i.default.createElement(h, null)
          )
        );
      },
      f = function(e) {
        var t = e.actions;
        return i.default.createElement(
          "div",
          { className: c.default.actionsBox },
          i.default.createElement("pre", null, JSON.stringify(t, null, 1))
        );
      },
      d = (0, u.connect)(function(e) {
        return { actions: e.actions };
      })(f),
      p = function(e) {
        return i.default.createElement(
          "div",
          { className: c.default.stateBox },
          i.default.createElement("pre", null, JSON.stringify(e, null, 1))
        );
      },
      h = (0, u.connect)(function(e) {
        return o({}, e, { actions: void 0 });
      })(p);
    t.default = s;
  },
  function(e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = n(0),
      a = r(o),
      i = n(1),
      u = n(22),
      l = n(30),
      c = n(72),
      s = r(c),
      f = function(e) {
        var t = e.onClick,
          n = e.path;
        return a.default.createElement(
          "div",
          { className: s.default.sidebar },
          a.default.createElement("h2", null, "SEO-FRIENDLY LINKS"),
          a.default.createElement(
            u.NavLink,
            { activeClassName: s.default.active, exact: !0, to: "/" },
            "HOME"
          ),
          a.default.createElement(
            u.NavLink,
            { activeClassName: s.default.active, to: "/cards" },
            "CARDS"
          ),
          a.default.createElement(
            u.NavLink,
            { activeClassName: s.default.active, to: "/list/db-graphql" },
            "DB & GRAPHQL"
          ),
          a.default.createElement(
            u.NavLink,
            { activeClassName: s.default.active, to: ["list", "react-redux"] },
            "REACT & REDUX"
          ),
          a.default.createElement(
            u.NavLink,
            {
              activeClassName: s.default.active,
              to: { type: "LIST", payload: { category: "fp" } }
            },
            "FP"
          ),
          a.default.createElement(
            u.NavLink,
            {
              activeClassName: s.default.active,
              to: { type: "PROFILE", payload: { playerName: "kashyap" } }
            },
            "Kashyap Profile"
          ),
          a.default.createElement("div", { style: { height: 20 } }),
          a.default.createElement("h2", null, "EVENT HANDLERS"),
          a.default.createElement(
            "span",
            {
              role: "link",
              tabIndex: "0",
              className: d(n, "/"),
              onClick: function() {
                return t("HOME");
              },
              onKeyPress: function() {
                return t("HOME");
              }
            },
            "HOME"
          ),
          a.default.createElement(
            "span",
            {
              role: "link",
              tabIndex: "0",
              className: d(n, "/cards"),
              onClick: function() {
                return t("CARDS");
              },
              onKeyPress: function() {
                return t("CARDS");
              }
            },
            "CARDS"
          ),
          a.default.createElement(
            "span",
            {
              role: "link",
              tabIndex: "0",
              className: d(n, "/list/db-graphql"),
              onClick: function() {
                return t("LIST", "db-graphql");
              },
              onKeyPress: function() {
                return t("LIST", "db-graphql");
              }
            },
            "DB & GRAPHQL"
          ),
          a.default.createElement(
            "span",
            {
              role: "link",
              tabIndex: "0",
              className: d(n, "/list/react-redux"),
              onClick: function() {
                return t("LIST", "react-redux");
              },
              onKeyPress: function() {
                return t("LIST", "react-redux");
              }
            },
            "REACT & REDUX"
          ),
          a.default.createElement(
            "span",
            {
              role: "link",
              tabIndex: "0",
              className: d(n, "/list/fp"),
              onClick: function() {
                return t("LIST", "fp");
              },
              onKeyPress: function() {
                return t("LIST", "fp");
              }
            },
            "FP"
          ),
          a.default.createElement(
            "span",
            {
              role: "link",
              tabIndex: "0",
              className: d(n, "/profile/kashyap"),
              onClick: function() {
                return t("PROFILE", "kashyap");
              },
              onKeyPress: function() {
                return t("PROFILE", "kashyap");
              }
            },
            "Kashyap Profile"
          ),
          a.default.createElement("div", { style: { height: 14 } }),
          a.default.createElement(
            u.NavLink,
            { to: { type: "ADMIN" }, activeClassName: s.default.active },
            "ADMIN"
          )
        );
      },
      d = function(e, t) {
        return e === t ? s.default.active : "";
      },
      p = { onClick: l.goToPage },
      h = function(e) {
        return { path: e.location.pathname };
      };
    t.default = (0, i.connect)(h, p)(f);
  },
  function(e, t, n) {
    "use strict";
    (function(e) {
      function r(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function o(e, t) {
        var n = {};
        for (var r in e)
          t.indexOf(r) >= 0 ||
            (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
        return n;
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = n(73),
        i = r(a),
        u = n(74),
        l = r(u),
        c = n(75),
        s = r(c),
        f = n(0),
        d = r(f),
        p = n(1),
        h = n(77),
        v = n(31),
        m = r(v),
        y = n(8),
        g = r(y),
        b = n(9),
        _ = r(b),
        E = n(78),
        w = r(E),
        x = n(3),
        O = r(x),
        k = (0, m.default)(
          function(t) {
            var r = t.page;
            return (0, s.default)({
              id: "./${page}",
              file:
                "/home/kashyap/dev/redux-first-router-demo/src/components/Switcher.js",
              load: function() {
                return Promise.all([
                  n(79)("./" + r),
                  (0, l.default)("" + r, {})
                ]).then(function(e) {
                  return e[0];
                });
              },
              path: function() {
                return i.default.join(e, "./" + r);
              },
              resolve: function() {
                return n(84).resolve("./" + r);
              },
              chunkName: function() {
                return "" + r;
              }
            });
          },
          { minDelay: 500, loading: g.default, error: _.default }
        ),
        S = function(e) {
          var t = e.page,
            n = e.direction,
            r = e.isLoading;
          return d.default.createElement(
            h.TransitionGroup,
            {
              className: O.default.switcher + " " + n,
              duration: 500,
              prefix: "fade"
            },
            d.default.createElement(
              h.Transition,
              { key: t },
              d.default.createElement(k, { page: t, isLoading: r })
            )
          );
        },
        P = function(e) {
          var t = e.page,
            n = e.direction,
            r = o(e, ["page", "direction"]);
          return { page: t, direction: n, isLoading: (0, w.default)(r) };
        };
      t.default = (0, p.connect)(P)(S);
    }.call(t, "/"));
  },
  function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(0),
      o = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(r),
      a = n(3);
    t.default = function() {
      return o.default.createElement(
        "div",
        { className: a.spinner },
        o.default.createElement("div", null)
      );
    };
  },
  function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(0),
      o = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(r),
      a = n(3);
    t.default = function(e) {
      return o.default.createElement(
        "div",
        { className: a.notFound },
        "ERROR: ",
        e.message
      );
    };
  },
  function(e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = n(0),
      a = r(o),
      i = n(1),
      u = n(22),
      l = r(u),
      c = n(33),
      s = r(c),
      f = function(e) {
        var t = e.playing,
          n = e.youtubeId,
          r = e.slug,
          o = e.color;
        return t
          ? a.default.createElement("iframe", {
              className: s.default.iframe,
              frameBorder: "0",
              allowFullScreen: !0,
              src: p(n)
            })
          : a.default.createElement(
              "div",
              {
                className: s.default.heroContainer,
                style: { backgroundImage: d(n) }
              },
              a.default.createElement(
                l.default,
                { to: "/video/" + r + "/play" },
                a.default.createElement("span", {
                  className: "ion-play",
                  style: { backgroundColor: o }
                })
              )
            );
      },
      d = function(e) {
        return "url(https://img.youtube.com/vi/" + e + "/maxresdefault.jpg)";
      },
      p = function(e) {
        return (
          "https://www.youtube.com/embed/" +
          e +
          "?playlist=" +
          e +
          "&autoplay=1&rel=0&theme=dark&loop=1&color=white&controls=2&autohide=1&showinfo=0"
        );
      };
    t.default = (0, i.connect)(function(e) {
      return { playing: e.playing };
    })(f);
  },
  function(e, t, n) {
    "use strict";
    function r(e, t, r, l) {
      var c = t.key,
        s = t.timeout,
        f = void 0 === s ? 15e3 : s,
        d = t.onLoad,
        p = t.onError,
        h = t.isDynamic,
        v = t.modCache,
        m = t.promCache,
        y = u(h, e, t, r),
        g = y.chunkName,
        b = y.path,
        _ = y.resolve,
        E = y.load,
        w = (!b && !_) || "function" == typeof g;
      return {
        requireSync: function(e, t) {
          var r = (0, o.loadFromCache)(g, e, v);
          if (!r) {
            var a = void 0;
            if (!(0, o.isWebpack)() && b) {
              var i = (0, o.callForString)(b, e) || "";
              a = (0, o.tryRequire)(i);
            } else if ((0, o.isWebpack)() && _) {
              var u = (0, o.callForString)(_, e);
              n.m[u] && (a = (0, o.tryRequire)(u));
            }
            a && (r = (0, o.resolveExport)(a, c, d, g, e, t, v, !0));
          }
          return r;
        },
        requireAsync: function(e, t) {
          var n = (0, o.loadFromCache)(g, e, v);
          if (n) return Promise.resolve(n);
          var r = (0, o.loadFromPromiseCache)(g, e, m);
          if (r) return r;
          var a = new Promise(function(n, r) {
            var a = function(e) {
                if (
                  ((e = e || new Error("timeout exceeded")), clearTimeout(i), p)
                ) {
                  var t = "undefined" == typeof window;
                  p(e, { isServer: t });
                }
                r(e);
              },
              i = f && setTimeout(a, f),
              u = function(r) {
                clearTimeout(i);
                var u = (0, o.resolveExport)(r, c, d, g, e, t, v);
                if (u) return n(u);
                a(new Error("export not found"));
              },
              l = E(e, { resolve: u, reject: a });
            l && "function" == typeof l.then && l.then(u).catch(a);
          });
          return (0, o.cacheProm)(a, g, e, m), a;
        },
        addModule: function(e) {
          if (o.isServer || o.isTest) {
            if (g) {
              var t = (0, o.callForString)(g, e);
              if ((t && a.add(t), !o.isTest)) return t;
            }
            if ((0, o.isWebpack)()) {
              var n = (0, o.callForString)(_, e);
              return n && i.add(n), n;
            }
            if (!(0, o.isWebpack)()) {
              var r = (0, o.callForString)(b, e);
              return r && i.add(r), r;
            }
          }
        },
        shouldUpdate: function(n, r) {
          var a = (0, o.callForString)(g, n),
            i = u(h, e, t, r);
          return a !== (0, o.callForString)(i.chunkName, r);
        },
        asyncOnly: w
      };
    }
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.clearChunks = t.flushModuleIds = t.flushChunkNames = t.MODULE_IDS = t.CHUNK_NAMES = void 0),
      (t.default = r);
    var o = n(23),
      a = (t.CHUNK_NAMES = new Set()),
      i = (t.MODULE_IDS = new Set()),
      u = ((t.flushChunkNames = function() {
        var e = Array.from(a);
        return a.clear(), e;
      }),
      (t.flushModuleIds = function() {
        var e = Array.from(i);
        return i.clear(), e;
      }),
      (t.clearChunks = function() {
        a.clear(), i.clear();
      }),
      function(e, t, n, r) {
        if (e) return "function" == typeof t ? t(r) : t;
        var o =
          "function" == typeof t
            ? t
            : function() {
                return t;
              };
        return {
          file: "default",
          id: n.id || "default",
          chunkName: n.chunkName || "default",
          resolve: n.resolve || "",
          path: n.path || "",
          load: o
        };
      });
  },
  function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(0),
      o = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(r),
      a = n(3);
    t.default = function() {
      return o.default.createElement(
        "div",
        { className: a.admin },
        "U FIGURED OUT HOW TO DO AUTH!"
      );
    };
  },
  function(e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      a = n(0),
      i = r(a),
      u = n(1),
      l = n(80),
      c = r(l),
      s = function(e) {
        var t = e.cards;
        return i.default.createElement(
          "div",
          { className: c.default.cardList },
          t.map(function(e) {
            return i.default.createElement(f, o({}, e, { key: e.id }));
          })
        );
      },
      f = function(e) {
        var t = e.name,
          n = e.maxLevel,
          r = e.rarity,
          o = e.iconUrls;
        return i.default.createElement(
          "div",
          {
            className: c.default.card,
            style: { backgroundImage: "url(" + o.medium + ")" }
          },
          i.default.createElement("span", { className: c.default.title }, t),
          i.default.createElement("div", { className: c.default.gradient }),
          i.default.createElement(
            "span",
            { className: c.default.by },
            "Rarity: ",
            r,
            ", MaxLevel: ",
            n
          )
        );
      },
      d = function(e) {
        return { cards: e.cards || [] };
      };
    t.default = (0, u.connect)(d)(s);
  },
  function(e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = n(0),
      a = r(o),
      i = n(81),
      u = r(i),
      l = function() {
        return a.default.createElement(
          "div",
          { className: u.default.home },
          a.default.createElement("h1", null, "HOME"),
          a.default.createElement(
            "h2",
            null,
            "NOTE: The top set of links are real links made like this:"
          ),
          a.default.createElement(
            "span",
            { style: { color: "rgb(200,200,200)", marginTop: 20 } },
            "HREF STRING:"
          ),
          a.default.createElement(
            "span",
            null,
            "<Link to='/list/db-graphql'>DB & GRAPHQL</Link>"
          ),
          a.default.createElement(
            "span",
            { style: { color: "rgb(200,200,200)", marginTop: 20 } },
            "PATH SEGMENTS:"
          ),
          a.default.createElement(
            "span",
            null,
            "<Link to={['list', 'react-redux']}>REACT & REDUX</Link>"
          ),
          a.default.createElement(
            "span",
            { style: { color: "rgb(200,200,200)", marginTop: 20 } },
            "ACTION:"
          ),
          a.default.createElement(
            "span",
            null,
            "<Link to={{ type: 'LIST', payload: {slug: 'fp'} }}>FP</Link>"
          ),
          a.default.createElement(
            "h1",
            { style: { margin: 20 } },
            "EVENT HANDLERS DISPATCH ACTION"
          ),
          a.default.createElement(
            "pre",
            null,
            "\nonClick: () => dispatch({\n  type: 'LIST',\n  payload: { category: 'react-redux' }\n})\n      "
          ),
          a.default.createElement(
            "div",
            null,
            a.default.createElement(
              "span",
              { style: { color: "#c5af8f", display: "inline" } },
              "DIRECTIONS: "
            ),
            a.default.createElement(
              "span",
              { className: u.default.directions },
              "inspect the sidebar tabs to see the top set are real <a> tag links and the\n        bottom set not, yet the address bar changes for both. The decision is up to you.\n        When using the <Link /> component, if you provide an action as the `href` prop, you never\n        need to worry if you change the static path segments (e.g: `/list`) in the routes passed \n        to `connectRoutes`. ALSO: DON'T FORGET TO USE THE BROWSER BACK/NEXT BUTTONS TO SEE THAT WORKING TOO!"
            )
          ),
          a.default.createElement(
            "h1",
            { style: { marginTop: 25 } },
            "LINKS ABOUT REDUX-FIRST ROUTER:"
          ),
          "> ",
          a.default.createElement(
            "a",
            {
              className: u.default.articleLinks,
              target: "_blank",
              href:
                "https://medium.com/faceyspacey/server-render-like-a-pro-w-redux-first-router-in-10-steps-b27dd93859de",
              rel: "noopener noreferrer"
            },
            "Server-Render Like A Pro in 10 Steps /w Redux-First Router 🚀"
          ),
          a.default.createElement("br", null),
          a.default.createElement("br", null),
          "> ",
          a.default.createElement(
            "a",
            {
              className: u.default.articleLinks,
              target: "_blank",
              href:
                "https://medium.com/faceyspacey/redux-first-router-lookin-sexy-on-code-sandbox-d9d9bea15053",
              rel: "noopener noreferrer"
            },
            "Things To Pay Attention To In This Demo"
          ),
          a.default.createElement("br", null),
          a.default.createElement("br", null),
          "> ",
          a.default.createElement(
            "a",
            {
              className: u.default.articleLinks,
              target: "_blank",
              href:
                "https://medium.com/faceyspacey/pre-release-redux-first-router-a-step-beyond-redux-little-router-cd2716576aea",
              rel: "noopener noreferrer"
            },
            "Pre Release: Redux-First Router — A Step Beyond Redux-Little-Router"
          ),
          a.default.createElement("br", null),
          a.default.createElement("br", null),
          "> ",
          a.default.createElement(
            "a",
            {
              className: u.default.articleLinks,
              target: "_blank",
              href:
                "https://medium.com/faceyspacey/redux-first-router-data-fetching-solving-the-80-use-case-for-async-middleware-14529606c262",
              rel: "noopener noreferrer"
            },
            "Redux-First Router data-fetching: solving the 80% use case for async Middleware"
          )
        );
      };
    t.default = l;
  },
  function(e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      a = n(0),
      i = r(a),
      u = n(1),
      l = n(22),
      c = r(l),
      s = n(82),
      f = r(s),
      d = function(e) {
        var t = e.videos;
        return i.default.createElement(
          "div",
          { className: f.default.list },
          t.map(function(e, t) {
            return i.default.createElement(p, o({}, e, { key: t }));
          })
        );
      },
      p = function(e) {
        var t = e.slug,
          n = e.title,
          r = e.youtubeId,
          o = e.by,
          a = e.color;
        return i.default.createElement(
          c.default,
          {
            className: f.default.row,
            to: "/video/" + t,
            style: { backgroundImage: h(r) }
          },
          i.default.createElement(
            "div",
            { className: f.default.avatar, style: { backgroundColor: a } },
            v(o)
          ),
          i.default.createElement("span", { className: f.default.title }, n),
          i.default.createElement("div", { className: f.default.gradient }),
          i.default.createElement(
            "span",
            { className: f.default.by },
            "by: ",
            o
          )
        );
      },
      h = function(e) {
        return "url(https://img.youtube.com/vi/" + e + "/maxresdefault.jpg)";
      },
      v = function(e) {
        return e
          .split(" ")
          .map(function(e) {
            return e[0];
          })
          .join("");
      },
      m = function(e) {
        var t = e.category,
          n = e.videosByCategory,
          r = e.videosHash;
        return {
          videos: (n[t] || []).map(function(e) {
            return r[e];
          })
        };
      };
    t.default = (0, u.connect)(m)(d);
  },
  function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(0),
      o = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(r),
      a = n(3);
    t.default = function() {
      return o.default.createElement(
        "div",
        { className: a.login },
        "YOU ARE NOT ALLOWED IN!"
      );
    };
  },
  function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(0),
      o = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(r),
      a = n(3);
    t.default = function() {
      return o.default.createElement(
        "div",
        { className: a.notFound },
        "PAGE NOT FOUND - 404"
      );
    };
  },
  function(e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = n(0),
      a = r(o),
      i = n(1),
      u = n(83),
      l = r(u),
      c = function(e) {
        var t = e.name,
          n = e.tag,
          r = e.trophies,
          o = e.clanName;
        return a.default.createElement(
          "div",
          null,
          a.default.createElement("p", null, "Player Name: ", t),
          a.default.createElement("p", null, "Tag: ", n),
          a.default.createElement("p", null, "Trophies: ", r),
          a.default.createElement("p", null, "Clan Name: ", o)
        );
      },
      s = function(e) {
        return (0, l.default)(e);
      };
    t.default = (0, i.connect)(s)(c);
  },
  function(e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = n(0),
      a = r(o),
      i = n(1),
      u = n(10),
      l = r(u),
      c = n(33),
      s = r(c),
      f = function(e) {
        var t = e.slug,
          n = e.title,
          r = e.youtubeId,
          o = e.category,
          i = e.by,
          u = e.color,
          c = e.tip;
        return a.default.createElement(
          "div",
          { className: s.default.video },
          a.default.createElement(l.default, {
            slug: t,
            youtubeId: r,
            color: u
          }),
          a.default.createElement(
            "div",
            { className: s.default.infoContainer },
            a.default.createElement("span", { className: s.default.title }, n),
            a.default.createElement(
              "div",
              { className: s.default.infoRow },
              a.default.createElement(
                "div",
                {
                  className: s.default.category,
                  style: { backgroundColor: u }
                },
                a.default.createElement("span", null, o)
              ),
              a.default.createElement(
                "span",
                { className: s.default.byText },
                "by: ",
                i
              )
            ),
            a.default.createElement("div", { className: s.default.separator }),
            a.default.createElement(
              "span",
              { className: s.default.tipTitle },
              "Tip"
            ),
            a.default.createElement(
              "div",
              { className: s.default.tip },
              t
                ? c
                : a.default.createElement(
                    "span",
                    { style: { color: "orange" } },
                    "YOU FOUND A MISSING FEATURE! There is no data because you Refreshed the video page, whose data is fetched on the previous page. Try adding a thunk to this route in",
                    a.default.createElement(
                      "span",
                      { style: { color: "white" } },
                      " configureStore.js "
                    ),
                    "to insure when visited directly this page has its data as well. Use the",
                    a.default.createElement(
                      "span",
                      { style: { color: "white" } },
                      " findVideo(slug) "
                    ),
                    "method in",
                    a.default.createElement(
                      "span",
                      { style: { color: "white" } },
                      "../api/index.js:"
                    )
                  )
            )
          )
        );
      },
      d = function(e) {
        return e.videosHash[e.slug] || {};
      };
    t.default = (0, i.connect)(d)(f);
  },
  function(e, t) {
    e.exports = function(e) {
      return (
        e.webpackPolyfill ||
          ((e.deprecate = function() {}),
          (e.paths = []),
          e.children || (e.children = []),
          Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function() {
              return e.l;
            }
          }),
          Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function() {
              return e.i;
            }
          }),
          (e.webpackPolyfill = 1)),
        e
      );
    };
  },
  function(e, t) {
    e.exports = require("redux");
  },
  function(e, t) {
    e.exports = require("redux-first-router-link");
  },
  function(e, t, n) {
    "use strict";
    (function(e) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.cacheProm = t.loadFromPromiseCache = t.cacheExport = t.loadFromCache = t.callForString = t.createElement = t.findExport = t.resolveExport = t.requireById = t.tryRequire = t.DefaultError = t.DefaultLoading = t.babelInterop = t.isWebpack = t.isServer = t.isTest = void 0);
      var r =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              },
        o = n(0),
        a = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(o),
        i = ((t.isTest = !1),
        (t.isServer = !(
          "undefined" != typeof window &&
          window.document &&
          window.document.createElement
        ))),
        u = (t.isWebpack = function() {
          return void 0 !== n;
        }),
        l = (t.babelInterop = function(e) {
          return e &&
            "object" === (void 0 === e ? "undefined" : r(e)) &&
            e.__esModule
            ? e.default
            : e;
        }),
        c = ((t.DefaultLoading = function() {
          return a.default.createElement("div", null, "Loading...");
        }),
        (t.DefaultError = function(e) {
          var t = e.error;
          return a.default.createElement(
            "div",
            null,
            "Error: ",
            t && t.message
          );
        }),
        (t.tryRequire = function(e) {
          try {
            return c(e);
          } catch (e) {}
          return null;
        }),
        (t.requireById = function(t) {
          return u() || "string" != typeof t ? n(t) : e.require(t);
        })),
        s = ((t.resolveExport = function(e, t, n, r, o, a, i) {
          var u =
              arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
            l = s(e, t);
          if (n && e) {
            n(e, { isServer: "undefined" == typeof window, isSync: u }, o, a);
          }
          return r && l && d(l, r, o, i), l;
        }),
        (t.findExport = function(e, t) {
          return "function" == typeof t
            ? t(e)
            : null === t
              ? e
              : e && "object" === (void 0 === e ? "undefined" : r(e)) && t
                ? e[t]
                : l(e);
        })),
        f = ((t.createElement = function(e, t) {
          return a.default.isValidElement(e)
            ? a.default.cloneElement(e, t)
            : a.default.createElement(e, t);
        }),
        (t.callForString = function(e, t) {
          return "function" == typeof e ? e(t) : e;
        })),
        d = ((t.loadFromCache = function(e, t, n) {
          return !i && n[f(e, t)];
        }),
        (t.cacheExport = function(e, t, n, r) {
          return (r[f(t, n)] = e);
        }));
      (t.loadFromPromiseCache = function(e, t, n) {
        return n[f(e, t)];
      }),
        (t.cacheProm = function(e, t, n, r) {
          return (r[f(t, n)] = e);
        });
    }.call(t, n(20)(e)));
  },
  function(e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function a(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    function i(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof t
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var u = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      l = n(0),
      c = r(l),
      s = n(25),
      f = r(s),
      d = (function(e) {
        function t() {
          return (
            o(this, t),
            a(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
            )
          );
        }
        return (
          i(t, e),
          u(t, [
            {
              key: "getChildContext",
              value: function() {
                return { report: this.props.report };
              }
            },
            {
              key: "render",
              value: function() {
                return c.default.Children.only(this.props.children);
              }
            }
          ]),
          t
        );
      })(c.default.Component);
    (d.propTypes = { report: f.default.func.isRequired }),
      (d.childContextTypes = { report: f.default.func.isRequired }),
      (t.default = d);
  },
  function(e, t) {
    e.exports = require("prop-types");
  },
  function(e, t) {
    e.exports = require("warning");
  },
  function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r = ((t.addLeadingSlash = function(e) {
      return "/" === e.charAt(0) ? e : "/" + e;
    }),
    (t.stripLeadingSlash = function(e) {
      return "/" === e.charAt(0) ? e.substr(1) : e;
    }),
    (t.hasBasename = function(e, t) {
      return new RegExp("^" + t + "(\\/|\\?|#|$)", "i").test(e);
    }));
    (t.stripBasename = function(e, t) {
      return r(e, t) ? e.substr(t.length) : e;
    }),
      (t.stripTrailingSlash = function(e) {
        return "/" === e.charAt(e.length - 1) ? e.slice(0, -1) : e;
      }),
      (t.parsePath = function(e) {
        var t = e || "/",
          n = "",
          r = "",
          o = t.indexOf("#");
        -1 !== o && ((r = t.substr(o)), (t = t.substr(0, o)));
        var a = t.indexOf("?");
        return (
          -1 !== a && ((n = t.substr(a)), (t = t.substr(0, a))),
          { pathname: t, search: "?" === n ? "" : n, hash: "#" === r ? "" : r }
        );
      }),
      (t.createPath = function(e) {
        var t = e.pathname,
          n = e.search,
          r = e.hash,
          o = t || "/";
        return (
          n && "?" !== n && (o += "?" === n.charAt(0) ? n : "?" + n),
          r && "#" !== r && (o += "#" === r.charAt(0) ? r : "#" + r),
          o
        );
      });
  },
  function(e, t, n) {
    "use strict";
    function r(e) {
      return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, n) {
          function r(o, a) {
            try {
              var i = t[o](a),
                u = i.value;
            } catch (e) {
              return void n(e);
            }
            if (!i.done)
              return Promise.resolve(u).then(
                function(e) {
                  r("next", e);
                },
                function(e) {
                  r("throw", e);
                }
              );
            e(u);
          }
          return r("next");
        });
      };
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = n(2),
      a = n(29);
    t.default = {
      HOME: "/",
      CARDS: {
        path: "/cards",
        thunk: (function() {
          var e = r(
            regeneratorRuntime.mark(function e(t, n) {
              var r, i, u, l, c;
              return regeneratorRuntime.wrap(
                function(e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (((r = n()), (i = r.jwToken), (u = r.cards), u)) {
                          e.next = 3;
                          break;
                        }
                        return e.abrupt("return");
                      case 3:
                        return (e.next = 5), (0, a.fetchData)("/api/cards", i);
                      case 5:
                        if (((l = e.sent), (c = l.cards), 0 !== c.length)) {
                          e.next = 9;
                          break;
                        }
                        return e.abrupt("return", t({ type: o.NOT_FOUND }));
                      case 9:
                        t({ type: "CARDS_FETCHED", payload: { cards: c } });
                      case 10:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                void 0
              );
            })
          );
          return function(t, n) {
            return e.apply(this, arguments);
          };
        })()
      },
      PROFILE: {
        path: "/profile/:playerName",
        thunk: (function() {
          var e = r(
            regeneratorRuntime.mark(function e(t, n) {
              var r, i, u, l;
              return regeneratorRuntime.wrap(
                function(e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (r = n()),
                          (i = r.location.payload.playerName),
                          (e.next = 3),
                          (0, a.fetchData)("/api/profile/" + i)
                        );
                      case 3:
                        if (
                          ((u = e.sent), (l = u.profile), console.info(l), l)
                        ) {
                          e.next = 8;
                          break;
                        }
                        return e.abrupt("return", t({ type: o.NOT_FOUND }));
                      case 8:
                        t({ type: "PROFILE_FOUND", payload: { profile: l } });
                      case 9:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                void 0
              );
            })
          );
          return function(t, n) {
            return e.apply(this, arguments);
          };
        })()
      },
      LIST: {
        path: "/list/:category",
        thunk: (function() {
          var e = r(
            regeneratorRuntime.mark(function e(t, n) {
              var r, i, u, l, c, s;
              return regeneratorRuntime.wrap(
                function(e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          ((r = n()),
                          (i = r.jwToken),
                          (u = r.location.payload.category),
                          (l = r.videosByCategory),
                          !l[u])
                        ) {
                          e.next = 3;
                          break;
                        }
                        return e.abrupt("return");
                      case 3:
                        return (
                          (e.next = 5), (0, a.fetchData)("/api/videos/" + u, i)
                        );
                      case 5:
                        if (((c = e.sent), (s = c.videos), 0 !== s.length)) {
                          e.next = 9;
                          break;
                        }
                        return e.abrupt("return", t({ type: o.NOT_FOUND }));
                      case 9:
                        t({
                          type: "VIDEOS_FETCHED",
                          payload: { videos: s, category: u }
                        });
                      case 10:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                void 0
              );
            })
          );
          return function(t, n) {
            return e.apply(this, arguments);
          };
        })()
      },
      VIDEO: {
        path: "/video/:slug",
        thunk: (function() {
          var e = r(
            regeneratorRuntime.mark(function e(t, n) {
              var r, i, u, l, c, s;
              return regeneratorRuntime.wrap(
                function(e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          ((r = n()),
                          (i = r.jwToken),
                          (u = r.location.payload.slug),
                          (l = r.videosHash),
                          !l[u])
                        ) {
                          e.next = 3;
                          break;
                        }
                        return e.abrupt("return");
                      case 3:
                        return (
                          (e.next = 5), (0, a.fetchData)("/api/video/" + u, i)
                        );
                      case 5:
                        if (((c = e.sent), null !== (s = c.video))) {
                          e.next = 9;
                          break;
                        }
                        return e.abrupt("return", t({ type: o.NOT_FOUND }));
                      case 9:
                        t({
                          type: "VIDEO_FOUND",
                          payload: { slug: u, video: s }
                        });
                      case 10:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                void 0
              );
            })
          );
          return function(t, n) {
            return e.apply(this, arguments);
          };
        })()
      },
      PLAY: {
        path: "/video/:slug/play",
        thunk: function(e, t) {
          if ("undefined" == typeof window) {
            var n = t().location.payload.slug;
            e((0, o.redirect)({ type: "VIDEO", payload: { slug: n } }));
          }
        }
      },
      LOGIN: "/login",
      ADMIN: { path: "/admin", role: "admin" }
    };
  },
  function(e, t, n) {
    "use strict";
    function r(e) {
      return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, n) {
          function r(o, a) {
            try {
              var i = t[o](a),
                u = i.value;
            } catch (e) {
              return void n(e);
            }
            if (!i.done)
              return Promise.resolve(u).then(
                function(e) {
                  r("next", e);
                },
                function(e) {
                  r("throw", e);
                }
              );
            e(u);
          }
          return r("next");
        });
      };
    }
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.isAllowed = t.fetchData = t.isServer = void 0);
    var o = n(28),
      a = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(o),
      i = (t.isServer = "undefined" == typeof window),
      u = ((t.fetchData = (function() {
        var e = r(
          regeneratorRuntime.mark(function e(t, n) {
            return regeneratorRuntime.wrap(
              function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt(
                        "return",
                        fetch("http://localhost:8082" + t, {
                          headers: {
                            Accept: "application/json",
                            Authorization: "Bearer " + (n || "")
                          }
                        }).then(function(e) {
                          return e.json();
                        })
                      );
                    case 1:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              void 0
            );
          })
        );
        return function(t, n) {
          return e.apply(this, arguments);
        };
      })()),
      (t.isAllowed = function(e, t) {
        var n = a.default[e] && a.default[e].role;
        if (!n) return !0;
        var r = i
          ? c.verify(t.jwToken, Object({ NODE_ENV: "production" }).JWT_SECRET)
          : l(t);
        return !!r && r.roles.includes(n);
      }),
      { roles: ["admin"] }),
      l = function(e) {
        var t = e.jwToken;
        e.user;
        return "real" === t && u;
      },
      c = {
        verify: function(e, t) {
          return "real" === e && u;
        }
      };
  },
  function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.visitVideo = t.visitCategory = t.notFound = t.goToAdmin = t.goHome = t.goToPage = void 0);
    var r = n(2);
    (t.goToPage = function(e, t) {
      return { type: e, payload: t && { category: t } };
    }),
      (t.goHome = function() {
        return { type: "HOME" };
      }),
      (t.goToAdmin = function() {
        return { type: "ADMIN" };
      }),
      (t.notFound = function() {
        return { type: r.NOT_FOUND };
      }),
      (t.visitCategory = function(e) {
        return { type: "LIST", payload: { category: e } };
      }),
      (t.visitVideo = function(e) {
        return { type: "VIDEO", payload: { slug: e } };
      });
  },
  function(e, t, n) {
    "use strict";
    (function(e) {
      function r(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function o(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function a(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      function i(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      function u(e, t) {
        var n = {};
        for (var r in e)
          t.indexOf(r) >= 0 ||
            (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
        return n;
      }
      function l(e) {
        var t,
          n,
          r =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          l = r.loading,
          f = void 0 === l ? _.DefaultLoading : l,
          d = r.error,
          p = void 0 === d ? _.DefaultError : d,
          v = r.minDelay,
          y = void 0 === v ? 0 : v,
          x = r.alwaysDelay,
          O = void 0 !== x && x,
          k = r.testBabelPlugin,
          S = void 0 !== k && k,
          P = r.loadingTransition,
          N = void 0 === P || P,
          T = u(r, [
            "loading",
            "error",
            "minDelay",
            "alwaysDelay",
            "testBabelPlugin",
            "loadingTransition"
          ]),
          C = E || S;
        return (
          (T.isDynamic = C),
          (T.modCache = {}),
          (T.promCache = {}),
          (n = t = (function(t) {
            function n(e, t) {
              o(this, n);
              var r = a(
                this,
                (n.__proto__ || Object.getPrototypeOf(n)).call(this, e, t)
              );
              return (
                (r.update = function(e) {
                  var t =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1],
                    n =
                      arguments.length > 2 &&
                      void 0 !== arguments[2] &&
                      arguments[2],
                    o =
                      arguments.length > 3 &&
                      void 0 !== arguments[3] &&
                      arguments[3];
                  r._mounted &&
                    (e.error || (e.error = null), r.handleAfter(e, t, n, o));
                }),
                (r.state = { error: null }),
                r
              );
            }
            return (
              i(n, t),
              s(n, null, [
                {
                  key: "preload",
                  value: function(t) {
                    var r =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                    t = t || {};
                    var o = (0, b.default)(e, T, t),
                      a = o.requireAsync,
                      i = o.requireSync,
                      u = void 0;
                    try {
                      u = i(t, r);
                    } catch (e) {
                      return Promise.reject(e);
                    }
                    return Promise.resolve()
                      .then(function() {
                        return u || a(t, r);
                      })
                      .then(function(e) {
                        return (0, g.default)(n, e, { preload: !0 }), e;
                      });
                  }
                }
              ]),
              s(n, [
                {
                  key: "componentWillMount",
                  value: function() {
                    this._mounted = !0;
                    var t = (0, b.default)(e, T, this.props),
                      n = t.addModule,
                      r = t.requireSync,
                      o = t.requireAsync,
                      a = t.asyncOnly,
                      i = void 0;
                    try {
                      i = r(this.props, this.context);
                    } catch (e) {
                      return this.update({ error: e });
                    }
                    this._asyncOnly = a;
                    var u = n(this.props);
                    if (
                      (this.context.report && this.context.report(u),
                      i || _.isServer)
                    )
                      return (
                        this.handleBefore(!0, !0, _.isServer),
                        void this.update({ Component: i }, !0, !0, _.isServer)
                      );
                    this.handleBefore(!0, !1),
                      this.requireAsync(o, this.props, !0);
                  }
                },
                {
                  key: "componentWillUnmount",
                  value: function() {
                    this._mounted = !1;
                  }
                },
                {
                  key: "componentWillReceiveProps",
                  value: function(t) {
                    var n = this;
                    if (C || this._asyncOnly) {
                      var r = (0, b.default)(e, T, t, this.props),
                        o = r.requireSync,
                        a = r.requireAsync;
                      if ((0, r.shouldUpdate)(t, this.props)) {
                        var i = void 0;
                        try {
                          i = o(t, this.context);
                        } catch (e) {
                          return this.update({ error: e });
                        }
                        if ((this.handleBefore(!1, !!i), !i))
                          return this.requireAsync(a, t);
                        var u = { Component: i };
                        if (O)
                          return (
                            N && this.update({ Component: null }),
                            void setTimeout(function() {
                              return n.update(u, !1, !0);
                            }, y)
                          );
                        this.update(u, !1, !0);
                      } else if (w()) {
                        var l = o(t, this.context);
                        this.setState({
                          Component: function() {
                            return null;
                          }
                        }),
                          setTimeout(function() {
                            return n.setState({ Component: l });
                          });
                      }
                    }
                  }
                },
                {
                  key: "requireAsync",
                  value: function(e, t, n) {
                    var r = this;
                    this.state.Component &&
                      N &&
                      this.update({ Component: null });
                    var o = new Date();
                    e(t, this.context)
                      .then(function(e) {
                        var t = { Component: e },
                          a = new Date() - o;
                        if (a < y) {
                          var i = y - a;
                          return setTimeout(function() {
                            return r.update(t, n);
                          }, i);
                        }
                        r.update(t, n);
                      })
                      .catch(function(e) {
                        return r.update({ error: e });
                      });
                  }
                },
                {
                  key: "handleBefore",
                  value: function(e, t) {
                    var n =
                      arguments.length > 2 &&
                      void 0 !== arguments[2] &&
                      arguments[2];
                    if (this.props.onBefore) {
                      (0, this.props.onBefore)({
                        isMount: e,
                        isSync: t,
                        isServer: n
                      });
                    }
                  }
                },
                {
                  key: "handleAfter",
                  value: function(e, t, r, o) {
                    var a = e.Component,
                      i = e.error;
                    if (a && !i) {
                      if (
                        ((0, g.default)(n, a, { preload: !0 }),
                        this.props.onAfter)
                      ) {
                        var u = this.props.onAfter,
                          l = { isMount: t, isSync: r, isServer: o };
                        u(l, a);
                      }
                    } else i && this.props.onError && this.props.onError(i);
                    this.setState(e);
                  }
                },
                {
                  key: "render",
                  value: function() {
                    var e = this.state,
                      t = e.error,
                      n = e.Component,
                      r = this.props,
                      o = r.isLoading,
                      a = r.error,
                      i = u(r, ["isLoading", "error"]);
                    return o
                      ? (0, _.createElement)(f, i)
                      : a
                        ? (0, _.createElement)(p, c({}, i, { error: a }))
                        : t
                          ? (0, _.createElement)(p, c({}, i, { error: t }))
                          : n
                            ? (0, _.createElement)(n, i)
                            : (0, _.createElement)(f, i);
                  }
                }
              ]),
              n
            );
          })(h.default.Component)),
          (t.contextTypes = {
            store: m.default.object,
            report: m.default.func
          }),
          n
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = t.setHasBabelPlugin = t.ReportChunks = t.MODULE_IDS = t.CHUNK_NAMES = void 0);
      var c =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        s = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        f = n(11);
      Object.defineProperty(t, "CHUNK_NAMES", {
        enumerable: !0,
        get: function() {
          return f.CHUNK_NAMES;
        }
      }),
        Object.defineProperty(t, "MODULE_IDS", {
          enumerable: !0,
          get: function() {
            return f.MODULE_IDS;
          }
        });
      var d = n(24);
      Object.defineProperty(t, "ReportChunks", {
        enumerable: !0,
        get: function() {
          return r(d).default;
        }
      });
      var p = n(0),
        h = r(p),
        v = n(25),
        m = r(v),
        y = n(76),
        g = r(y),
        b = r(f),
        _ = n(23),
        E = !1,
        w = function() {
          return e.hot && (e.hot.data || "apply" === e.hot.status());
        };
      t.setHasBabelPlugin = function() {
        E = !0;
      };
      t.default = l;
    }.call(t, n(20)(e)));
  },
  function(e, t) {
    e.exports = require("reselect");
  },
  function(e, t) {
    e.exports = {
      video: "Video__video--ir416",
      heroContainer: "Video__heroContainer--2ZQDs",
      iframe: "Video__iframe--qmSGK",
      infoContainer: "Video__infoContainer--XPYiD",
      videoTitle: "Video__videoTitle--piFpl",
      infoRow: "Video__infoRow--3eXXK",
      category: "Video__category--28p21",
      byText: "Video__byText--3pt-C",
      separator: "Video__separator--2T0IX",
      tipTitle: "Video__tipTitle--1XueQ",
      tip: "Video__tip--35bIx"
    };
  },
  function(e, t, n) {
    n(35), (e.exports = n(36));
  },
  function(e, t) {
    e.exports = require("fetch-everywhere");
  },
  function(e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e) {
      return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, n) {
          function r(o, a) {
            try {
              var i = t[o](a),
                u = i.value;
            } catch (e) {
              return void n(e);
            }
            if (!i.done)
              return Promise.resolve(u).then(
                function(e) {
                  r("next", e);
                },
                function(e) {
                  r("throw", e);
                }
              );
            e(u);
          }
          return r("next");
        });
      };
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var a = n(0),
      i = r(a),
      u = n(37),
      l = r(u),
      c = n(1),
      s = n(42),
      f = n(43),
      d = r(f),
      p = n(46),
      h = r(p),
      v = n(4),
      m = r(v);
    t.default = function(e) {
      var t = e.clientStats;
      return (function() {
        var e = o(
          regeneratorRuntime.mark(function e(n, r, o) {
            var a, i, u, c, f, p, v, g, b;
            return regeneratorRuntime.wrap(
              function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (!/\/static\//.test(n.url)) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return", o());
                    case 2:
                      return (
                        fastify.log.info(
                          "===============Request Incoming ============"
                        ),
                        fastify.log.info(
                          "===============Url: " + n.url + "============"
                        ),
                        fastify.log.info(
                          "===============Request Incoming ============"
                        ),
                        fastify.log.info(
                          "===============Request Incoming ============"
                        ),
                        (e.next = 8),
                        (0, h.default)(n, r)
                      );
                    case 8:
                      if ((a = e.sent)) {
                        e.next = 11;
                        break;
                      }
                      return e.abrupt("return");
                    case 11:
                      (i = y(m.default, a)),
                        (u = l.default.renderToString(i)),
                        (c = JSON.stringify(a.getState())),
                        fastify.log.info(
                          "===============State Keys: " +
                            Object.keys(a.getState()).toString() +
                            " ============"
                        ),
                        (f = (0, s.flushChunkNames)()),
                        (p = (0, d.default)(t, { chunkNames: f })),
                        (v = p.js),
                        (g = p.styles),
                        (b = p.cssHash),
                        console.info("REQUESTED PATH:", n.url),
                        console.info("CHUNK NAMES", f),
                        r.end(
                          '<!doctype html>\n      <html>\n        <head>\n          <meta charset="utf-8">\n          <title>redux-first-router-demo</title>\n          ' +
                            g +
                            '\n          <link rel="stylesheet prefetch" href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">\n        </head>\n        <body>\n          <script>window.REDUX_STATE = ' +
                            c +
                            '</script>\n          <div id="root">' +
                            u +
                            "</div>\n          " +
                            b +
                            "\n          <script type='text/javascript' src='/static/vendor.js'></script>\n          " +
                            v +
                            "\n        </body>\n      </html>"
                        );
                    case 20:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              void 0
            );
          })
        );
        return function(t, n, r) {
          return e.apply(this, arguments);
        };
      })();
    };
    var y = function(e, t) {
      return i.default.createElement(
        c.Provider,
        { store: t },
        i.default.createElement(e, null)
      );
    };
  },
  function(e, t, n) {
    "use strict";
    e.exports = n(38);
  },
  function(e, t, n) {
    "use strict";
    e.exports = n(39);
  },
  function(e, t, n) {
    "use strict";
    function r(e, t, n, r, o, a, i, u) {
      if (!e) {
        if (((e = void 0), void 0 === t))
          e = Error(
            "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
          );
        else {
          var l = [n, r, o, a, i, u],
            c = 0;
          (e = Error(
            t.replace(/%s/g, function() {
              return l[c++];
            })
          )),
            (e.name = "Invariant Violation");
        }
        throw ((e.framesToPop = 1), e);
      }
    }
    function o(e) {
      for (
        var t = arguments.length - 1,
          n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
          o = 0;
        o < t;
        o++
      )
        n += "&args[]=" + encodeURIComponent(arguments[o + 1]);
      r(
        !1,
        "Minified React error #" +
          e +
          "; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",
        n
      );
    }
    function a(e) {
      if (null == e) return null;
      if ("function" == typeof e) return e.displayName || e.name || null;
      if ("string" == typeof e) return e;
      switch (e) {
        case N:
          return "AsyncMode";
        case x:
          return "Fragment";
        case w:
          return "Portal";
        case k:
          return "Profiler";
        case O:
          return "StrictMode";
        case C:
          return "Placeholder";
      }
      if ("object" == typeof e) {
        switch (e.$$typeof) {
          case P:
            return "Context.Consumer";
          case S:
            return "Context.Provider";
          case T:
            var t = e.render;
            return (
              (t = t.displayName || t.name || ""),
              e.displayName ||
                ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef")
            );
        }
        if (
          "function" == typeof e.then &&
          (e = 1 === e._reactStatus ? e._reactResult : null)
        )
          return a(e);
      }
      return null;
    }
    function i(e) {
      return (
        !!M.call(F, e) ||
        (!M.call(L, e) && (j.test(e) ? (F[e] = !0) : ((L[e] = !0), !1)))
      );
    }
    function u(e, t, n, r) {
      if (null !== n && 0 === n.type) return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean":
          return (
            !r &&
            (null !== n
              ? !n.acceptsBooleans
              : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e)
          );
        default:
          return !1;
      }
    }
    function l(e, t, n, r) {
      if (null === t || void 0 === t || u(e, t, n, r)) return !0;
      if (r) return !1;
      if (null !== n)
        switch (n.type) {
          case 3:
            return !t;
          case 4:
            return !1 === t;
          case 5:
            return isNaN(t);
          case 6:
            return isNaN(t) || 1 > t;
        }
      return !1;
    }
    function c(e, t, n, r, o) {
      (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
        (this.attributeName = r),
        (this.attributeNamespace = o),
        (this.mustUseProperty = n),
        (this.propertyName = e),
        (this.type = t);
    }
    function s(e) {
      return e[1].toUpperCase();
    }
    function f(e) {
      if ("boolean" == typeof e || "number" == typeof e) return "" + e;
      e = "" + e;
      var t = R.exec(e);
      if (t) {
        var n,
          r = "",
          o = 0;
        for (n = t.index; n < e.length; n++) {
          switch (e.charCodeAt(n)) {
            case 34:
              t = "&quot;";
              break;
            case 38:
              t = "&amp;";
              break;
            case 39:
              t = "&#x27;";
              break;
            case 60:
              t = "&lt;";
              break;
            case 62:
              t = "&gt;";
              break;
            default:
              continue;
          }
          o !== n && (r += e.substring(o, n)), (o = n + 1), (r += t);
        }
        e = o !== n ? r + e.substring(o, n) : r;
      }
      return e;
    }
    function d(e) {
      switch (e) {
        case "svg":
          return "http://www.w3.org/2000/svg";
        case "math":
          return "http://www.w3.org/1998/Math/MathML";
        default:
          return "http://www.w3.org/1999/xhtml";
      }
    }
    function p(e) {
      if (void 0 === e || null === e) return e;
      var t = "";
      return (
        b.Children.forEach(e, function(e) {
          null != e && (t += e);
        }),
        t
      );
    }
    function h(e, t) {
      if ((e = e.contextTypes)) {
        var n,
          r = {};
        for (n in e) r[n] = t[n];
        t = r;
      } else t = J;
      return t;
    }
    function v(e, t) {
      void 0 === e && o("152", a(t) || "Component");
    }
    function m(e, t) {
      for (; b.isValidElement(e); ) {
        var n = e,
          r = n.type;
        if ("function" != typeof r) break;
        !(function(n, r) {
          var i = h(r, t),
            u = [],
            l = !1,
            c = {
              isMounted: function() {
                return !1;
              },
              enqueueForceUpdate: function() {
                if (null === u) return null;
              },
              enqueueReplaceState: function(e, t) {
                (l = !0), (u = [t]);
              },
              enqueueSetState: function(e, t) {
                if (null === u) return null;
                u.push(t);
              }
            },
            s = void 0;
          if (r.prototype && r.prototype.isReactComponent) {
            if (
              ((s = new r(n.props, i, c)),
              "function" == typeof r.getDerivedStateFromProps)
            ) {
              var f = r.getDerivedStateFromProps.call(null, n.props, s.state);
              null != f && (s.state = g({}, s.state, f));
            }
          } else if (null == (s = r(n.props, i, c)) || null == s.render)
            return (e = s), void v(e, r);
          if (
            ((s.props = n.props),
            (s.context = i),
            (s.updater = c),
            (c = s.state),
            void 0 === c && (s.state = c = null),
            "function" == typeof s.UNSAFE_componentWillMount ||
              "function" == typeof s.componentWillMount)
          )
            if (
              ("function" == typeof s.componentWillMount &&
                "function" != typeof r.getDerivedStateFromProps &&
                s.componentWillMount(),
              "function" == typeof s.UNSAFE_componentWillMount &&
                "function" != typeof r.getDerivedStateFromProps &&
                s.UNSAFE_componentWillMount(),
              u.length)
            ) {
              c = u;
              var d = l;
              if (((u = null), (l = !1), d && 1 === c.length)) s.state = c[0];
              else {
                f = d ? c[0] : s.state;
                var p = !0;
                for (d = d ? 1 : 0; d < c.length; d++) {
                  var m = c[d];
                  null !=
                    (m =
                      "function" == typeof m ? m.call(s, f, n.props, i) : m) &&
                    (p ? ((p = !1), (f = g({}, f, m))) : g(f, m));
                }
                s.state = f;
              }
            } else u = null;
          if (
            ((e = s.render()),
            v(e, r),
            (n = void 0),
            "function" == typeof s.getChildContext &&
              "object" == typeof (i = r.childContextTypes))
          ) {
            n = s.getChildContext();
            for (var y in n) y in i || o("108", a(r) || "Unknown", y);
          }
          n && (t = g({}, t, n));
        })(n, r);
      }
      return { child: e, context: t };
    }
    function y(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof t
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    }
    /** @license React v16.5.1
     * react-dom-server.node.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var g = n(40),
      b = n(0),
      _ = n(41),
      E = "function" == typeof Symbol && Symbol.for,
      w = E ? Symbol.for("react.portal") : 60106,
      x = E ? Symbol.for("react.fragment") : 60107,
      O = E ? Symbol.for("react.strict_mode") : 60108,
      k = E ? Symbol.for("react.profiler") : 60114,
      S = E ? Symbol.for("react.provider") : 60109,
      P = E ? Symbol.for("react.context") : 60110,
      N = E ? Symbol.for("react.async_mode") : 60111,
      T = E ? Symbol.for("react.forward_ref") : 60112,
      C = E ? Symbol.for("react.placeholder") : 60113,
      j = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
      M = Object.prototype.hasOwnProperty,
      L = {},
      F = {},
      I = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
      .split(" ")
      .forEach(function(e) {
        I[e] = new c(e, 0, !1, e, null);
      }),
      [
        ["acceptCharset", "accept-charset"],
        ["className", "class"],
        ["htmlFor", "for"],
        ["httpEquiv", "http-equiv"]
      ].forEach(function(e) {
        var t = e[0];
        I[t] = new c(t, 1, !1, e[1], null);
      }),
      ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(
        e
      ) {
        I[e] = new c(e, 2, !1, e.toLowerCase(), null);
      }),
      [
        "autoReverse",
        "externalResourcesRequired",
        "focusable",
        "preserveAlpha"
      ].forEach(function(e) {
        I[e] = new c(e, 2, !1, e, null);
      }),
      "allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
        .split(" ")
        .forEach(function(e) {
          I[e] = new c(e, 3, !1, e.toLowerCase(), null);
        }),
      ["checked", "multiple", "muted", "selected"].forEach(function(e) {
        I[e] = new c(e, 3, !0, e, null);
      }),
      ["capture", "download"].forEach(function(e) {
        I[e] = new c(e, 4, !1, e, null);
      }),
      ["cols", "rows", "size", "span"].forEach(function(e) {
        I[e] = new c(e, 6, !1, e, null);
      }),
      ["rowSpan", "start"].forEach(function(e) {
        I[e] = new c(e, 5, !1, e.toLowerCase(), null);
      });
    var D = /[\-:]([a-z])/g;
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
      .split(" ")
      .forEach(function(e) {
        var t = e.replace(D, s);
        I[t] = new c(t, 1, !1, e, null);
      }),
      "xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type"
        .split(" ")
        .forEach(function(e) {
          var t = e.replace(D, s);
          I[t] = new c(t, 1, !1, e, "http://www.w3.org/1999/xlink");
        }),
      ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
        var t = e.replace(D, s);
        I[t] = new c(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace");
      }),
      (I.tabIndex = new c("tabIndex", 1, !1, "tabindex", null));
    var R = /["'&<>]/,
      A = {
        html: "http://www.w3.org/1999/xhtml",
        mathml: "http://www.w3.org/1998/Math/MathML",
        svg: "http://www.w3.org/2000/svg"
      },
      H = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
      },
      U = g({ menuitem: !0 }, H),
      V = {
        animationIterationCount: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
      },
      q = ["Webkit", "ms", "Moz", "O"];
    Object.keys(V).forEach(function(e) {
      q.forEach(function(t) {
        (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (V[t] = V[e]);
      });
    });
    var B = /([A-Z])/g,
      W = /^ms-/,
      K = b.Children.toArray,
      G = { listing: !0, pre: !0, textarea: !0 },
      $ = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,
      z = {},
      X = {},
      J = {},
      Y = Object.prototype.hasOwnProperty,
      Z = {
        children: null,
        dangerouslySetInnerHTML: null,
        suppressContentEditableWarning: null,
        suppressHydrationWarning: null
      },
      Q = (function() {
        function e(t, n) {
          if (!(this instanceof e))
            throw new TypeError("Cannot call a class as a function");
          b.isValidElement(t)
            ? t.type !== x
              ? (t = [t])
              : ((t = t.props.children), (t = b.isValidElement(t) ? [t] : K(t)))
            : (t = K(t)),
            (this.stack = [
              {
                type: null,
                domNamespace: A.html,
                children: t,
                childIndex: 0,
                context: J,
                footer: ""
              }
            ]),
            (this.exhausted = !1),
            (this.currentSelectValue = null),
            (this.previousWasTextNode = !1),
            (this.makeStaticMarkup = n),
            (this.contextIndex = -1),
            (this.contextStack = []),
            (this.contextValueStack = []);
        }
        return (
          (e.prototype.pushProvider = function(e) {
            var t = ++this.contextIndex,
              n = e.type._context,
              r = n._currentValue;
            (this.contextStack[t] = n),
              (this.contextValueStack[t] = r),
              (n._currentValue = e.props.value);
          }),
          (e.prototype.popProvider = function() {
            var e = this.contextIndex,
              t = this.contextStack[e],
              n = this.contextValueStack[e];
            (this.contextStack[e] = null),
              (this.contextValueStack[e] = null),
              this.contextIndex--,
              (t._currentValue = n);
          }),
          (e.prototype.read = function(e) {
            if (this.exhausted) return null;
            for (var t = ""; t.length < e; ) {
              if (0 === this.stack.length) {
                this.exhausted = !0;
                break;
              }
              var n = this.stack[this.stack.length - 1];
              if (n.childIndex >= n.children.length) {
                var r = n.footer;
                (t += r),
                  "" !== r && (this.previousWasTextNode = !1),
                  this.stack.pop(),
                  "select" === n.type
                    ? (this.currentSelectValue = null)
                    : null != n.type &&
                      null != n.type.type &&
                      n.type.type.$$typeof === S &&
                      this.popProvider(n.type);
              } else
                (r = n.children[n.childIndex++]),
                  (t += this.render(r, n.context, n.domNamespace));
            }
            return t;
          }),
          (e.prototype.render = function(e, t, n) {
            if ("string" == typeof e || "number" == typeof e)
              return "" === (n = "" + e)
                ? ""
                : this.makeStaticMarkup
                  ? f(n)
                  : this.previousWasTextNode
                    ? "\x3c!-- --\x3e" + f(n)
                    : ((this.previousWasTextNode = !0), f(n));
            if (
              ((t = m(e, t)),
              (e = t.child),
              (t = t.context),
              null === e || !1 === e)
            )
              return "";
            if (!b.isValidElement(e)) {
              if (null != e && null != e.$$typeof) {
                var r = e.$$typeof;
                r === w && o("257"), o("258", r.toString());
              }
              return (
                (e = K(e)),
                this.stack.push({
                  type: null,
                  domNamespace: n,
                  children: e,
                  childIndex: 0,
                  context: t,
                  footer: ""
                }),
                ""
              );
            }
            if ("string" == typeof (r = e.type)) return this.renderDOM(e, t, n);
            switch (r) {
              case O:
              case N:
              case k:
              case x:
                return (
                  (e = K(e.props.children)),
                  this.stack.push({
                    type: null,
                    domNamespace: n,
                    children: e,
                    childIndex: 0,
                    context: t,
                    footer: ""
                  }),
                  ""
                );
            }
            if ("object" == typeof r && null !== r)
              switch (r.$$typeof) {
                case T:
                  return (
                    (e = K(r.render(e.props, e.ref))),
                    this.stack.push({
                      type: null,
                      domNamespace: n,
                      children: e,
                      childIndex: 0,
                      context: t,
                      footer: ""
                    }),
                    ""
                  );
                case S:
                  return (
                    (r = K(e.props.children)),
                    (n = {
                      type: e,
                      domNamespace: n,
                      children: r,
                      childIndex: 0,
                      context: t,
                      footer: ""
                    }),
                    this.pushProvider(e),
                    this.stack.push(n),
                    ""
                  );
                case P:
                  return (
                    (r = K(e.props.children(e.type._currentValue))),
                    this.stack.push({
                      type: e,
                      domNamespace: n,
                      children: r,
                      childIndex: 0,
                      context: t,
                      footer: ""
                    }),
                    ""
                  );
              }
            o("130", null == r ? r : typeof r, "");
          }),
          (e.prototype.renderDOM = function(e, t, n) {
            var r = e.type.toLowerCase();
            n === A.html && d(r),
              z.hasOwnProperty(r) || ($.test(r) || o("65", r), (z[r] = !0));
            var a = e.props;
            if ("input" === r)
              a = g({ type: void 0 }, a, {
                defaultChecked: void 0,
                defaultValue: void 0,
                value: null != a.value ? a.value : a.defaultValue,
                checked: null != a.checked ? a.checked : a.defaultChecked
              });
            else if ("textarea" === r) {
              var u = a.value;
              if (null == u) {
                u = a.defaultValue;
                var c = a.children;
                null != c &&
                  (null != u && o("92"),
                  Array.isArray(c) && (1 >= c.length || o("93"), (c = c[0])),
                  (u = "" + c)),
                  null == u && (u = "");
              }
              a = g({}, a, { value: void 0, children: "" + u });
            } else if ("select" === r)
              (this.currentSelectValue =
                null != a.value ? a.value : a.defaultValue),
                (a = g({}, a, { value: void 0 }));
            else if ("option" === r) {
              c = this.currentSelectValue;
              var s = p(a.children);
              if (null != c) {
                var h = null != a.value ? a.value + "" : s;
                if (((u = !1), Array.isArray(c))) {
                  for (var v = 0; v < c.length; v++)
                    if ("" + c[v] === h) {
                      u = !0;
                      break;
                    }
                } else u = "" + c === h;
                a = g({ selected: void 0, children: void 0 }, a, {
                  selected: u,
                  children: s
                });
              }
            }
            (u = a) &&
              (U[r] &&
                (null != u.children || null != u.dangerouslySetInnerHTML) &&
                o("137", r, ""),
              null != u.dangerouslySetInnerHTML &&
                (null != u.children && o("60"),
                ("object" == typeof u.dangerouslySetInnerHTML &&
                  "__html" in u.dangerouslySetInnerHTML) ||
                  o("61")),
              null != u.style && "object" != typeof u.style && o("62", "")),
              (u = a),
              (c = this.makeStaticMarkup),
              (s = 1 === this.stack.length),
              (h = "<" + e.type);
            for (O in u)
              if (Y.call(u, O)) {
                var m = u[O];
                if (null != m) {
                  if ("style" === O) {
                    v = void 0;
                    var y = "",
                      b = "";
                    for (v in m)
                      if (m.hasOwnProperty(v)) {
                        var _ = 0 === v.indexOf("--"),
                          E = m[v];
                        if (null != E) {
                          var w = v;
                          if (X.hasOwnProperty(w)) w = X[w];
                          else {
                            var x = w
                              .replace(B, "-$1")
                              .toLowerCase()
                              .replace(W, "-ms-");
                            w = X[w] = x;
                          }
                          (y += b + w + ":"),
                            (b = v),
                            (_ =
                              null == E || "boolean" == typeof E || "" === E
                                ? ""
                                : _ ||
                                  "number" != typeof E ||
                                  0 === E ||
                                  (V.hasOwnProperty(b) && V[b])
                                  ? ("" + E).trim()
                                  : E + "px"),
                            (y += _),
                            (b = ";");
                        }
                      }
                    m = y || null;
                  }
                  v = null;
                  e: if (((_ = r), (E = u), -1 === _.indexOf("-")))
                    _ = "string" == typeof E.is;
                  else
                    switch (_) {
                      case "annotation-xml":
                      case "color-profile":
                      case "font-face":
                      case "font-face-src":
                      case "font-face-uri":
                      case "font-face-format":
                      case "font-face-name":
                      case "missing-glyph":
                        _ = !1;
                        break e;
                      default:
                        _ = !0;
                    }
                  _
                    ? Z.hasOwnProperty(O) ||
                      ((v = O),
                      (v = i(v) && null != m ? v + '="' + f(m) + '"' : ""))
                    : ((_ = O),
                      (v = m),
                      (m = I.hasOwnProperty(_) ? I[_] : null),
                      (E = "style" !== _) &&
                        (E =
                          null !== m
                            ? 0 === m.type
                            : 2 < _.length &&
                              ("o" === _[0] || "O" === _[0]) &&
                              ("n" === _[1] || "N" === _[1])),
                      E || l(_, v, m, !1)
                        ? (v = "")
                        : null !== m
                          ? ((_ = m.attributeName),
                            (m = m.type),
                            (v =
                              3 === m || (4 === m && !0 === v)
                                ? _ + '=""'
                                : _ + '="' + f(v) + '"'))
                          : (v = i(_) ? _ + '="' + f(v) + '"' : "")),
                    v && (h += " " + v);
                }
              }
            c || (s && (h += ' data-reactroot=""'));
            var O = h;
            (u = ""),
              H.hasOwnProperty(r)
                ? (O += "/>")
                : ((O += ">"), (u = "</" + e.type + ">"));
            e: {
              if (null != (c = a.dangerouslySetInnerHTML)) {
                if (null != c.__html) {
                  c = c.__html;
                  break e;
                }
              } else if (
                "string" == typeof (c = a.children) ||
                "number" == typeof c
              ) {
                c = f(c);
                break e;
              }
              c = null;
            }
            return (
              null != c
                ? ((a = []),
                  G[r] && "\n" === c.charAt(0) && (O += "\n"),
                  (O += c))
                : (a = K(a.children)),
              (e = e.type),
              (n =
                null == n || "http://www.w3.org/1999/xhtml" === n
                  ? d(e)
                  : "http://www.w3.org/2000/svg" === n && "foreignObject" === e
                    ? "http://www.w3.org/1999/xhtml"
                    : n),
              this.stack.push({
                domNamespace: n,
                type: r,
                children: a,
                childIndex: 0,
                context: t,
                footer: u
              }),
              (this.previousWasTextNode = !1),
              O
            );
          }),
          e
        );
      })(),
      ee = (function(e) {
        function t(n, r) {
          if (!(this instanceof t))
            throw new TypeError("Cannot call a class as a function");
          var o = e.call(this, {});
          if (!this)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return (
            (o =
              !o || ("object" != typeof o && "function" != typeof o)
                ? this
                : o),
            (o.partialRenderer = new Q(n, r)),
            o
          );
        }
        return (
          y(t, e),
          (t.prototype._read = function(e) {
            try {
              this.push(this.partialRenderer.read(e));
            } catch (e) {
              this.emit("error", e);
            }
          }),
          t
        );
      })(_.Readable),
      te = {
        renderToString: function(e) {
          return new Q(e, !1).read(1 / 0);
        },
        renderToStaticMarkup: function(e) {
          return new Q(e, !0).read(1 / 0);
        },
        renderToNodeStream: function(e) {
          return new ee(e, !1);
        },
        renderToStaticNodeStream: function(e) {
          return new ee(e, !0);
        },
        version: "16.5.1"
      },
      ne = { default: te },
      re = (ne && te) || ne;
    e.exports = re.default || re;
  },
  function(e, t) {
    e.exports = require("object-assign");
  },
  function(e, t) {
    e.exports = require("stream");
  },
  function(e, t, n) {
    e.exports = {
      flushModuleIds: n(11).flushModuleIds,
      flushChunkNames: n(11).flushChunkNames,
      clearChunks: n(11).clearChunks,
      ReportChunks: n(24).default
    };
  },
  function(e, t, n) {
    "use strict";
    function r(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n;
      }
      return Array.from(e);
    }
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.filesFromChunks = t.concatFilesAtKeys = t.normalizePath = t.isUnique = t.createFilesByModuleId = t.createFilesByPath = t.flushWebpack = t.flushBabel = t.flush = t.flushFilesPure = t.flushFiles = t.flushChunks = void 0);
    var o = n(44),
      a = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(o),
      i = null,
      u = null,
      l = void 0 !== n,
      c = { before: ["bootstrap", "vendor"], after: ["main"] };
    t.default = function(e, t) {
      return s(e, l, t);
    };
    var s = function(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          o = n.before || c.before,
          i = E(o, e.assetsByChunkName),
          u = n.chunkNames
            ? E(n.chunkNames, e.assetsByChunkName, !0)
            : p(n.moduleIds || [], e, n.rootDir, t),
          l = n.after || c.after,
          s = E(l, e.assetsByChunkName);
        return (0, a.default)(
          [].concat(r(i), r(u), r(s)),
          [].concat(r(i), r(s.reverse()), r(u)),
          e,
          n.outputPath
        );
      },
      f = function(e, t) {
        return d(e, l, t);
      },
      d = function(e, t, n) {
        var r = n.chunkNames
            ? E(n.chunkNames, e.assetsByChunkName)
            : p(n.moduleIds || [], e, n.rootDir, t),
          o = n.filter;
        if (o) {
          if ("function" == typeof o) return r.filter(o);
          var a = o instanceof RegExp ? o : new RegExp("." + o + "$");
          return r.filter(function(e) {
            return a.test(e);
          });
        }
        return r;
      },
      p = function(e, t, n, r) {
        return r ? v(e, t).filter(g) : h(e, t, n).filter(g);
      },
      h = function(e, t, n) {
        if (!n)
          throw new Error(
            "No `rootDir` was provided as an option to `flushChunks`.\n      Please provide one so modules rendered server-side can be\n      paired to their webpack equivalents client-side, and their\n      corresponding chunks."
          );
        var r = n;
        return (
          (i = i || m(t)),
          _(
            i,
            e.map(function(e) {
              return b(e, r);
            })
          )
        );
      },
      v = function(e, t) {
        return (u = u || y(t)), _(u, e);
      },
      m = function(e) {
        var t = e.chunks,
          n = e.modules,
          r = t.reduce(function(e, t) {
            return (e[t.id] = t.files), e;
          }, {});
        return n.reduce(function(e, t) {
          var n = t.name,
            o = _(r, t.chunks);
          return (e[n] = o.filter(g)), e;
        }, {});
      },
      y = function(e) {
        var t = m(e);
        return e.modules.reduce(function(e, n) {
          var r = n.name;
          return (e[n.id] = t[r]), e;
        }, {});
      },
      g = function(e, t, n) {
        return n.indexOf(e) === t;
      },
      b = function(e, t) {
        return e.replace(t, ".").replace(/\.js$/, "") + ".js";
      },
      _ = function(e, t) {
        return t.reduce(function(t, n) {
          return t.concat(e[n] || []);
        }, []);
      },
      E = function(e, t, n) {
        var o,
          a = function(e) {
            var r = !(!t[e] && !t[e + "-"]);
            return (
              !r &&
                n &&
                console.warn(
                  "[FLUSH CHUNKS]: Unable to find " +
                    e +
                    " in Webpack chunks. Please check usage of Babel plugin."
                ),
              r
            );
          },
          i = function(e) {
            return t[e] || t[e + "-"];
          };
        return (o = []).concat.apply(o, r(e.filter(a).map(i)));
      };
    (t.flushChunks = s),
      (t.flushFiles = f),
      (t.flushFilesPure = d),
      (t.flush = p),
      (t.flushBabel = h),
      (t.flushWebpack = v),
      (t.createFilesByPath = m),
      (t.createFilesByModuleId = y),
      (t.isUnique = g),
      (t.normalizePath = b),
      (t.concatFilesAtKeys = _),
      (t.filesFromChunks = E);
  },
  function(e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.createCssHash = t.stylesAsString = t.isCss = t.isJs = t.getJsFileRegex = void 0);
    var o = n(0),
      a = r(o),
      i = n(45),
      u = r(i);
    t.default = function(e, t, n, r) {
      var o = n.publicPath.replace(/\/$/, ""),
        i = l(e),
        u = e.filter(function(e) {
          return c(i, e);
        }),
        p = t.filter(s),
        h = d(n),
        v = {
          Js: function() {
            return a.default.createElement(
              "span",
              null,
              u.map(function(e, t) {
                return a.default.createElement("script", {
                  type: "text/javascript",
                  src: o + "/" + e,
                  key: t,
                  defer: !0
                });
              })
            );
          },
          Styles: function() {
            return a.default.createElement(
              "span",
              null,
              p.map(function(e, t) {
                return a.default.createElement("link", {
                  rel: "stylesheet",
                  href: o + "/" + e,
                  key: t
                });
              })
            );
          },
          js: {
            toString: function() {
              return u
                .map(function(e) {
                  return (
                    "<script type='text/javascript' src='" +
                    o +
                    "/" +
                    e +
                    "' defer></script>"
                  );
                })
                .join("\n");
            }
          },
          styles: {
            toString: function() {
              return p
                .map(function(e) {
                  return "<link rel='stylesheet' href='" + o + "/" + e + "' />";
                })
                .join("\n");
            }
          },
          Css: function() {
            return a.default.createElement(
              "span",
              null,
              a.default.createElement("style", null, f(p, r))
            );
          },
          css: {
            toString: function() {
              return "<style>" + f(p, r) + "</style>";
            }
          },
          scripts: u,
          stylesheets: p,
          publicPath: o,
          outputPath: r,
          cssHashRaw: h,
          CssHash: function() {
            return a.default.createElement("script", {
              type: "text/javascript",
              dangerouslySetInnerHTML: {
                __html: "window.__CSS_CHUNKS__ = " + JSON.stringify(h)
              }
            });
          },
          cssHash: {
            toString: function() {
              return (
                "<script type='text/javascript'>window.__CSS_CHUNKS__= " +
                JSON.stringify(h) +
                "</script>"
              );
            }
          }
        };
      return v;
    };
    var l = (t.getJsFileRegex = function(e) {
        return !e.find(function(e) {
          return e.includes("no_css");
        })
          ? /\.js$/
          : /\.no_css\.js$/;
      }),
      c = (t.isJs = function(e, t) {
        return e.test(t) && !/\.hot-update\.js$/.test(t);
      }),
      s = (t.isCss = function(e) {
        return /\.css$/.test(e);
      }),
      f = (t.stylesAsString = function(e, t) {
        if (!t)
          throw new Error(
            "No `outputPath` was provided as an option to `flushChunks`. \n      Please provide one so stylesheets can be read from the\n      file system since you're embedding the css as a string."
          );
        var n = t.replace(/\/$/, "");
        return e
          .map(function(e) {
            var t = n + "/" + e;
            return u.default.readFileSync(t, "utf8");
          })
          .join("\n")
          .replace(/\/\*# sourceMappingURL=.+\*\//g, "");
      }),
      d = (t.createCssHash = function(e) {
        var t = e.assetsByChunkName,
          n = e.publicPath;
        return Object.keys(t).reduce(function(e, r) {
          if (!t[r] || !t[r].find) return e;
          var o = t[r].find(function(e) {
            return e.endsWith(".css");
          });
          return o && (e[r] = "" + n + o), e;
        }, {});
      });
  },
  function(e, t) {
    e.exports = require("fs");
  },
  function(e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e) {
      return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, n) {
          function r(o, a) {
            try {
              var i = t[o](a),
                u = i.value;
            } catch (e) {
              return void n(e);
            }
            if (!i.done)
              return Promise.resolve(u).then(
                function(e) {
                  r("next", e);
                },
                function(e) {
                  r("throw", e);
                }
              );
            e(u);
          }
          return r("next");
        });
      };
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var a = n(47),
      i = r(a),
      u = n(2),
      l = n(52),
      c = r(l);
    t.default = (function() {
      var e = o(
        regeneratorRuntime.mark(function e(t, n) {
          var r, o, a, l, f, d, p, h, v;
          return regeneratorRuntime.wrap(
            function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      ((r = "real"),
                      (o = { jwToken: r }),
                      (a = (0, i.default)({ initialEntries: [t.url] })),
                      (l = (0, c.default)(a, o)),
                      (f = l.store),
                      (d = l.thunk),
                      (p = f.getState()),
                      (h = p.location),
                      !s(h, n))
                    ) {
                      e.next = 7;
                      break;
                    }
                    return e.abrupt("return", !1);
                  case 7:
                    return (e.next = 9), d(f);
                  case 9:
                    if (((h = f.getState().location), !s(h, n))) {
                      e.next = 12;
                      break;
                    }
                    return e.abrupt("return", !1);
                  case 12:
                    return (
                      (v = h.type === u.NOT_FOUND ? 404 : 200),
                      (n.statusCode = v),
                      e.abrupt("return", f)
                    );
                  case 15:
                  case "end":
                    return e.stop();
                }
            },
            e,
            void 0
          );
        })
      );
      return function(t, n) {
        return e.apply(this, arguments);
      };
    })();
    var s = function(e, t) {
      var n = e.kind,
        r = e.pathname;
      return "redirect" === n && (t.redirect(302, r), !0);
    };
  },
  function(e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.__esModule = !0;
    var o =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            },
      a =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      i = n(26),
      u = r(i),
      l = n(27),
      c = n(48),
      s = n(51),
      f = r(s),
      d = function(e, t, n) {
        return Math.min(Math.max(e, t), n);
      },
      p = function() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.getUserConfirmation,
          n = e.initialEntries,
          r = void 0 === n ? ["/"] : n,
          i = e.initialIndex,
          s = void 0 === i ? 0 : i,
          p = e.keyLength,
          h = void 0 === p ? 6 : p,
          v = (0, f.default)(),
          m = function(e) {
            a(T, e),
              (T.length = T.entries.length),
              v.notifyListeners(T.location, T.action);
          },
          y = function() {
            return Math.random()
              .toString(36)
              .substr(2, h);
          },
          g = d(s, 0, r.length - 1),
          b = r.map(function(e) {
            return "string" == typeof e
              ? (0, c.createLocation)(e, void 0, y())
              : (0, c.createLocation)(e, void 0, e.key || y());
          }),
          _ = l.createPath,
          E = function(e, n) {
            (0, u.default)(
              !(
                "object" === (void 0 === e ? "undefined" : o(e)) &&
                void 0 !== e.state &&
                void 0 !== n
              ),
              "You should avoid providing a 2nd state argument to push when the 1st argument is a location-like object that already has state; it is ignored"
            );
            var r = (0, c.createLocation)(e, n, y(), T.location);
            v.confirmTransitionTo(r, "PUSH", t, function(e) {
              if (e) {
                var t = T.index,
                  n = t + 1,
                  o = T.entries.slice(0);
                o.length > n ? o.splice(n, o.length - n, r) : o.push(r),
                  m({ action: "PUSH", location: r, index: n, entries: o });
              }
            });
          },
          w = function(e, n) {
            (0, u.default)(
              !(
                "object" === (void 0 === e ? "undefined" : o(e)) &&
                void 0 !== e.state &&
                void 0 !== n
              ),
              "You should avoid providing a 2nd state argument to replace when the 1st argument is a location-like object that already has state; it is ignored"
            );
            var r = (0, c.createLocation)(e, n, y(), T.location);
            v.confirmTransitionTo(r, "REPLACE", t, function(e) {
              e &&
                ((T.entries[T.index] = r),
                m({ action: "REPLACE", location: r }));
            });
          },
          x = function(e) {
            var n = d(T.index + e, 0, T.entries.length - 1),
              r = T.entries[n];
            v.confirmTransitionTo(r, "POP", t, function(e) {
              e ? m({ action: "POP", location: r, index: n }) : m();
            });
          },
          O = function() {
            return x(-1);
          },
          k = function() {
            return x(1);
          },
          S = function(e) {
            var t = T.index + e;
            return t >= 0 && t < T.entries.length;
          },
          P = function() {
            var e =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return v.setPrompt(e);
          },
          N = function(e) {
            return v.appendListener(e);
          },
          T = {
            length: b.length,
            action: "POP",
            location: b[g],
            index: g,
            entries: b,
            createHref: _,
            push: E,
            replace: w,
            go: x,
            goBack: O,
            goForward: k,
            canGo: S,
            block: P,
            listen: N
          };
        return T;
      };
    t.default = p;
  },
  function(e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (t.__esModule = !0), (t.locationsAreEqual = t.createLocation = void 0);
    var o =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      a = n(49),
      i = r(a),
      u = n(50),
      l = r(u),
      c = n(27);
    (t.createLocation = function(e, t, n, r) {
      var a = void 0;
      "string" == typeof e
        ? ((a = (0, c.parsePath)(e)), (a.state = t))
        : ((a = o({}, e)),
          void 0 === a.pathname && (a.pathname = ""),
          a.search
            ? "?" !== a.search.charAt(0) && (a.search = "?" + a.search)
            : (a.search = ""),
          a.hash
            ? "#" !== a.hash.charAt(0) && (a.hash = "#" + a.hash)
            : (a.hash = ""),
          void 0 !== t && void 0 === a.state && (a.state = t));
      try {
        a.pathname = decodeURI(a.pathname);
      } catch (e) {
        throw e instanceof URIError
          ? new URIError(
              'Pathname "' +
                a.pathname +
                '" could not be decoded. This is likely caused by an invalid percent-encoding.'
            )
          : e;
      }
      return (
        n && (a.key = n),
        r
          ? a.pathname
            ? "/" !== a.pathname.charAt(0) &&
              (a.pathname = (0, i.default)(a.pathname, r.pathname))
            : (a.pathname = r.pathname)
          : a.pathname || (a.pathname = "/"),
        a
      );
    }),
      (t.locationsAreEqual = function(e, t) {
        return (
          e.pathname === t.pathname &&
          e.search === t.search &&
          e.hash === t.hash &&
          e.key === t.key &&
          (0, l.default)(e.state, t.state)
        );
      });
  },
  function(e, t) {
    e.exports = require("resolve-pathname");
  },
  function(e, t) {
    e.exports = require("value-equal");
  },
  function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r = n(26),
      o = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(r),
      a = function() {
        var e = null,
          t = function(t) {
            return (
              (0, o.default)(
                null == e,
                "A history supports only one prompt at a time"
              ),
              (e = t),
              function() {
                e === t && (e = null);
              }
            );
          },
          n = function(t, n, r, a) {
            if (null != e) {
              var i = "function" == typeof e ? e(t, n) : e;
              "string" == typeof i
                ? "function" == typeof r
                  ? r(i, a)
                  : ((0, o.default)(
                      !1,
                      "A history needs a getUserConfirmation function in order to use a prompt message"
                    ),
                    a(!0))
                : a(!1 !== i);
            } else a(!0);
          },
          r = [];
        return {
          setPrompt: t,
          confirmTransitionTo: n,
          appendListener: function(e) {
            var t = !0,
              n = function() {
                t && e.apply(void 0, arguments);
              };
            return (
              r.push(n),
              function() {
                (t = !1),
                  (r = r.filter(function(e) {
                    return e !== n;
                  }));
              }
            );
          },
          notifyListeners: function() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            r.forEach(function(e) {
              return e.apply(void 0, t);
            });
          }
        };
      };
    t.default = a;
  },
  function(e, t, n) {
    "use strict";
    function r(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return (t.default = e), t;
    }
    function o(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var a =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      i = n(21),
      u = n(53),
      l = n(2),
      c = n(28),
      s = o(c),
      f = n(56),
      d = o(f),
      p = n(57),
      h = r(p),
      v = n(30),
      m = r(v);
    t.default = function(e, t) {
      var n = (0, l.connectRoutes)(e, s.default, d.default),
        r = n.reducer,
        o = n.middleware,
        u = n.enhancer,
        c = n.thunk,
        f = (0, i.combineReducers)(a({}, h, { location: r })),
        p = (0, i.applyMiddleware)(o),
        v = y(u, p),
        m = (0, i.createStore)(f, t, v);
      return { store: m, thunk: c };
    };
    var y = function() {
      return "undefined" != typeof window
        ? (0, u.composeWithDevTools)({ actionCreators: m }).apply(
            void 0,
            arguments
          )
        : i.compose.apply(void 0, arguments);
    };
  },
  function(e, t, n) {
    "use strict";
    var r = (n(21).compose, n(54));
    (t.__esModule = !0),
      (t.composeWithDevTools = r.composeWithDevTools),
      (t.devToolsEnhancer = r.devToolsEnhancer);
  },
  function(e, t, n) {
    "use strict";
    function r() {
      var e = arguments[0] || {};
      return (
        (e.features = { pause: !0, export: !0, test: !0 }),
        (e.type = "redux"),
        void 0 === e.autoPause && (e.autoPause = !0),
        void 0 === e.latency && (e.latency = 500),
        function(t) {
          return function(n, r, o) {
            var i = t(n, r, o),
              u = i.dispatch,
              l = window.__REDUX_DEVTOOLS_EXTENSION__.connect(e);
            l.init(i.getState());
            var c = function(e) {
              var t = u(e);
              return l.send(e, i.getState()), t;
            };
            return Object.assign
              ? Object.assign(i, { dispatch: c })
              : a(i, "dispatch", c);
          };
        }
      );
    }
    function o(e) {
      return function() {
        return i(i.apply(null, arguments), r(e));
      };
    }
    var a = n(55),
      i = n(21).compose;
    (t.__esModule = !0),
      (t.composeWithDevTools = function() {
        if ("undefined" != typeof window && window.__REDUX_DEVTOOLS_EXTENSION__)
          return 0 === arguments.length
            ? r()
            : "object" == typeof arguments[0]
              ? o(arguments[0])
              : o().apply(null, arguments);
        if (0 !== arguments.length)
          return "object" == typeof arguments[0] ? i : i.apply(null, arguments);
      }),
      (t.devToolsEnhancer =
        "undefined" != typeof window && window.__REDUX_DEVTOOLS_EXTENSION__
          ? r
          : function() {
              return function(e) {
                return e;
              };
            });
  },
  function(e, t) {
    function n(e, t, n) {
      for (var o = r(e), a = {}, i = 0, u = o.length; i < u; i++) {
        var l = o[i];
        a[l] = e[l];
      }
      return (a[t] = n), a;
    }
    var r =
      Object.keys ||
      function(e) {
        var t = [];
        for (var n in e) ({}.hasOwnProperty.call(e, n) && t.push(n));
        return t;
      };
    e.exports = n;
  },
  function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(2),
      o = n(29);
    t.default = {
      onBeforeChange: function(e, t, n) {
        (0, o.isAllowed)(n.type, t()) || e((0, r.redirect)({ type: "LOGIN" }));
      },
      onAfterChange: function(e, t) {
        "LOGIN" !== t().location.type ||
          o.isServer ||
          setTimeout(function() {
            alert(a);
          }, 1500);
      }
    };
    var a =
      "NICE, You're adventurous! Try changing the jwToken cookie from 'fake' to 'real' in server/index.js (and manually refresh) to access the Admin Panel. Then 'onBeforeChange' will let you in.";
  },
  function(e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = n(58);
    Object.defineProperty(t, "page", {
      enumerable: !0,
      get: function() {
        return r(o).default;
      }
    });
    var a = n(59);
    Object.defineProperty(t, "slug", {
      enumerable: !0,
      get: function() {
        return r(a).default;
      }
    });
    var i = n(60);
    Object.defineProperty(t, "category", {
      enumerable: !0,
      get: function() {
        return r(i).default;
      }
    });
    var u = n(61);
    Object.defineProperty(t, "direction", {
      enumerable: !0,
      get: function() {
        return r(u).default;
      }
    });
    var l = n(62);
    Object.defineProperty(t, "videosHash", {
      enumerable: !0,
      get: function() {
        return r(l).default;
      }
    });
    var c = n(63);
    Object.defineProperty(t, "videosByCategory", {
      enumerable: !0,
      get: function() {
        return r(c).default;
      }
    });
    var s = n(64);
    Object.defineProperty(t, "playing", {
      enumerable: !0,
      get: function() {
        return r(s).default;
      }
    });
    var f = n(65);
    Object.defineProperty(t, "user", {
      enumerable: !0,
      get: function() {
        return r(f).default;
      }
    });
    var d = n(66);
    Object.defineProperty(t, "title", {
      enumerable: !0,
      get: function() {
        return r(d).default;
      }
    });
    var p = n(67);
    Object.defineProperty(t, "actions", {
      enumerable: !0,
      get: function() {
        return r(p).default;
      }
    });
    var h = n(68);
    Object.defineProperty(t, "jwToken", {
      enumerable: !0,
      get: function() {
        return r(h).default;
      }
    });
    var v = n(69);
    Object.defineProperty(t, "cards", {
      enumerable: !0,
      get: function() {
        return r(v).default;
      }
    });
    var m = n(70);
    Object.defineProperty(t, "profile", {
      enumerable: !0,
      get: function() {
        return r(m).default;
      }
    });
  },
  function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(2);
    t.default = function() {
      var e =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : "HOME",
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return o[t.type] || e;
    };
    var o = (function(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (e[t] = n),
        e
      );
    })(
      {
        HOME: "Home",
        LIST: "List",
        VIDEO: "Video",
        ADMIN: "Admin",
        LOGIN: "Login",
        CARDS: "Cards",
        PROFILE: "Profile"
      },
      r.NOT_FOUND,
      "NotFound"
    );
  },
  function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = function() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return "VIDEO" === t.type ? t.payload.slug : e;
      });
  },
  function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = function() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return "LIST" === t.type ? t.payload.category : e;
      });
  },
  function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = function() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "next",
          t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!t.meta || !t.meta.location) return e;
        var n = t.type,
          r = t.meta.location.prev.type;
        return n === r
          ? e
          : "HOME" === n
            ? "back"
            : "LIST" === n && "HOME" === r
              ? "next"
              : "LIST" === n && "VIDEO" === r
                ? "back"
                : "LIST" === n && "PLAY" === r
                  ? "back"
                  : "VIDEO" === n && "LIST" === r
                    ? "next"
                    : "LOGIN" === n
                      ? "back"
                      : "ADMIN" === n
                        ? "next"
                        : e;
      });
  },
  function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = function() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        switch (t.type) {
          case "VIDEOS_FETCHED":
            return t.payload.videos.reduce(function(t, n) {
              return (e[n.slug] = n), t;
            }, e);
          case "VIDEO_FOUND":
            var n = t.payload,
              r = n.slug,
              o = n.video;
            return (e[r] = o), e;
          default:
            return e;
        }
      });
  },
  function(e, t, n) {
    "use strict";
    function r(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (e[t] = n),
        e
      );
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o =
      Object.assign ||
      function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      };
    t.default = function() {
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      if ("VIDEOS_FETCHED" === t.type) {
        var n = t.payload,
          a = n.category,
          i = n.videos,
          u = i.map(function(e) {
            return e.slug;
          });
        return o({}, e, r({}, a, u));
      }
      return e;
    };
  },
  function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = function() {
        arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return (
          "PLAY" ===
          (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
            .type
        );
      });
  },
  function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = function() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : { roles: ["member"] };
        arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return e;
      });
  },
  function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = function() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "RFR Demo",
          t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        switch (t.type) {
          case "HOME":
            return "RFR Demo";
          case "LIST":
            return "RFR: " + r(t.payload.category);
          case "VIDEO":
            return "RFR: " + r(t.payload.slug);
          case "LOGIN":
            return "RFR Login";
          case "ADMIN":
            return "RFR Admin";
          default:
            return e;
        }
      });
    var r = function(e) {
      return e.replace(/-/g, " ").replace(/\b\w/g, function(e) {
        return e.toUpperCase();
      });
    };
  },
  function(e, t, n) {
    "use strict";
    function r(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n;
      }
      return Array.from(e);
    }
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = function() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return "@@redux/INIT" === t.type || "@@INIT" === t.type
          ? e
          : [t].concat(r(e));
      });
  },
  function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = function() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : null,
          t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return ("TOKEN" === t.type && t.payload) || e;
      });
  },
  function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = function() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return "CARDS_FETCHED" === t.type ? t.payload.cards : e;
      });
  },
  function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = function() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        switch (t.type) {
          case "PROFILE_FOUND":
            return t.payload.profile;
          default:
            return e;
        }
      });
  },
  function(e, t) {
    e.exports = {
      container: "DevTools__container--1k7mO",
      titleBar: "DevTools__titleBar--2olyu",
      devTools: "DevTools__devTools--2LR_R",
      actionsBox: "DevTools__actionsBox--2rMQZ",
      stateBox: "DevTools__stateBox--3yFU5"
    };
  },
  function(e, t) {
    e.exports = {
      sidebar: "Sidebar__sidebar--3GLl8",
      active: "Sidebar__active--1fdDB",
      span: "Sidebar__span--3cUFl"
    };
  },
  function(e, t) {
    e.exports = require("path");
  },
  function(e, t, n) {
    function r(e) {
      return "undefined" != typeof window && window.__CSS_CHUNKS__
        ? window.__CSS_CHUNKS__[e]
        : null;
    }
    function o() {
      var e = navigator.userAgent,
        t = e.match(/\ AppleWebKit\/(\d+)\.(\d+)/);
      if (t) {
        var n = +t[1],
          r = +t[2];
        return (535 === n && r >= 24) || n > 535;
      }
      return !0;
    }
    var a = {};
    e.exports = function(e, t) {
      var n = r(e);
      if (n) {
        if (a[n]) return a[n];
        var i = document.getElementsByTagName("head")[0],
          u = document.createElement("link");
        (u.charset = "utf-8"),
          (u.type = "text/css"),
          (u.rel = "stylesheet"),
          (u.timeout = 3e4);
        var l = new Promise(function(t, r) {
          var a,
            l,
            c = function() {
              l && ((u.href = n), (l.onerror = null)),
                (u.onerror = null),
                clearTimeout(a),
                t();
            };
          (u.onerror = function() {
            (u.onerror = u.onload = null),
              clearTimeout(a),
              r(new Error("could not load css chunk: " + e));
          }),
            o() && "onload" in u
              ? ((u.onload = c), (u.href = n))
              : ((l = document.createElement("img")),
                (l.onerror = c),
                (l.src = n)),
            (a = setTimeout(u.onerror, u.timeout)),
            i.appendChild(u);
        });
        return (a[n] = l), l;
      }
    };
  },
  function(e, t, n) {
    (function(e) {
      e.exports = function(e, t) {
        if (!1 === t) return e;
        var n = e.load;
        return (
          (e.then = function(e) {
            return n().then(function(t) {
              return e && e(t);
            });
          }),
          (e.catch = function(e) {
            return n().catch(function(t) {
              return e && e(t);
            });
          }),
          e
        );
      };
      var t = !1;
      !(function() {
        if (!t) {
          var r,
            o = void 0 !== n;
          try {
            (r = o ? n(31) : e.require("react-universal-component")),
              r && (r.setHasBabelPlugin(), (t = !0));
          } catch (e) {}
        }
      })();
    }.call(t, n(20)(e)));
  },
  function(e, t) {
    e.exports = require("hoist-non-react-statics");
  },
  function(e, t) {
    e.exports = require("transition-group");
  },
  function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(32);
    t.default = (0, r.createSelector)(
      [
        function(e) {
          return e.location.type;
        },
        function(e) {
          return e.location.payload;
        },
        function(e) {
          return e.videosHash;
        },
        function(e) {
          return e.videosByCategory;
        }
      ],
      function(e, t, n, r) {
        var o = t.slug,
          a = t.category;
        return "VIDEO" === e ? !n[o] : "LIST" === e ? !r[a] : void 0;
      }
    );
  },
  function(e, t, n) {
    function r(e) {
      var t = o[e];
      return t
        ? Promise.all(t.slice(1).map(n.e)).then(function() {
            return n(t[0]);
          })
        : Promise.reject(new Error("Cannot find module '" + e + "'."));
    }
    var o = {
      "./Admin": [12, 0],
      "./Admin.js": [12, 0],
      "./App": [4],
      "./App.js": [4],
      "./Cards": [13, 0],
      "./Cards.js": [13, 0],
      "./DevTools": [5],
      "./DevTools.js": [5],
      "./Error": [9],
      "./Error.js": [9],
      "./Home": [14, 0],
      "./Home.js": [14, 0],
      "./List": [15, 0],
      "./List.js": [15, 0],
      "./Loading": [8],
      "./Loading.js": [8],
      "./Login": [16, 0],
      "./Login.js": [16, 0],
      "./NotFound": [17, 0],
      "./NotFound.js": [17, 0],
      "./Player": [10, 0],
      "./Player.js": [10, 0],
      "./Profile": [18, 0],
      "./Profile.js": [18, 0],
      "./Sidebar": [6],
      "./Sidebar.js": [6],
      "./Switcher": [7],
      "./Switcher.js": [7],
      "./Video": [19, 0],
      "./Video.js": [19, 0]
    };
    (r.keys = function() {
      return Object.keys(o);
    }),
      (r.id = 79),
      (e.exports = r);
  },
  function(e, t) {
    e.exports = {
      cardList: "Cards__cardList--1-6Nt",
      card: "Cards__card--4npIo",
      avatar: "Cards__avatar--1gAL8",
      title: "Cards__title--2m3pt",
      gradient: "Cards__gradient--26aRo",
      by: "Cards__by--2ZKS9"
    };
  },
  function(e, t) {
    e.exports = {
      home: "Home__home--hWrjv",
      directions: "Home__directions--3Hsgs",
      articleLinks: "Home__articleLinks--1-lhc"
    };
  },
  function(e, t) {
    e.exports = {
      list: "List__list--1UmSB",
      row: "List__row--1yZ2d",
      avatar: "List__avatar--_UvLE",
      title: "List__title--Em6wI",
      gradient: "List__gradient--3OSFe",
      by: "List__by--3WigH"
    };
  },
  function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(32),
      o = function(e) {
        return e.profile;
      };
    t.default = (0, r.createSelector)(o, function(e) {
      return {
        tag: e.tag,
        name: e.name,
        trophies: e.trophies,
        expLevel: e.expLevel,
        clanName: e.clan.name
      };
    });
  },
  function(e, t, n) {
    function r(e) {
      var t = o(e);
      if (!n.m[t])
        throw new Error(
          "Module '" + e + "' ('" + t + "') is not available (weak dependency)"
        );
      return n(t);
    }
    function o(e) {
      var t = a[e];
      if (!(t + 1)) throw new Error("Cannot find module '" + e + "'.");
      return t;
    }
    var a = {
      "./Admin": 12,
      "./Admin.js": 12,
      "./App": 4,
      "./App.js": 4,
      "./Cards": 13,
      "./Cards.js": 13,
      "./DevTools": 5,
      "./DevTools.js": 5,
      "./Error": 9,
      "./Error.js": 9,
      "./Home": 14,
      "./Home.js": 14,
      "./List": 15,
      "./List.js": 15,
      "./Loading": 8,
      "./Loading.js": 8,
      "./Login": 16,
      "./Login.js": 16,
      "./NotFound": 17,
      "./NotFound.js": 17,
      "./Player": 10,
      "./Player.js": 10,
      "./Profile": 18,
      "./Profile.js": 18,
      "./Sidebar": 6,
      "./Sidebar.js": 6,
      "./Switcher": 7,
      "./Switcher.js": 7,
      "./Video": 19,
      "./Video.js": 19
    };
    (r.keys = function() {
      return Object.keys(a);
    }),
      (r.resolve = o),
      (r.id = 84),
      (e.exports = r);
  },
  function(e, t) {
    e.exports = { app: "App__app--3LuPb" };
  }
]);
