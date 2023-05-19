/*!
 * Bootstrap v4.0.0 (https://getbootstrap.com)
 * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
! function(t, e) {
  "object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery"), require("popper.html")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], e) : e(t.bootstrap = {}, t.jQuery, t.Popper)
}(this, function(t, e, n) {
  "use strict";

  function i(t, e) {
      for (var n = 0; n < e.length; n++) {
          var i = e[n];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
  }

  function s(t, e, n) {
      return e && i(t.prototype, e), n && i(t, n), t
  }

  function r() {
      return (r = Object.assign || function(t) {
          for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
          }
          return t
      }).apply(this, arguments)
  }
  e = e && e.hasOwnProperty("default") ? e.default : e, n = n && n.hasOwnProperty("default") ? n.default : n;
  var o, a, l, h, c, u, f, d, _, g, p, m, v, E, T, y, C, I, A, b, D, S, w, N, O, k, P = function(t) {
          var e = !1;

          function n(e) {
              var n = this,
                  s = !1;
              return t(this).one(i.TRANSITION_END, function() {
                  s = !0
              }), setTimeout(function() {
                  s || i.triggerTransitionEnd(n)
              }, e), this
          }
          var i = {
              TRANSITION_END: "bsTransitionEnd",
              getUID: function(t) {
                  do {
                      t += ~~(1e6 * Math.random())
                  } while (document.getElementById(t));
                  return t
              },
              getSelectorFromElement: function(e) {
                  var n, i = e.getAttribute("data-target");
                  i && "#" !== i || (i = e.getAttribute("href") || ""), "#" === i.charAt(0) && (n = i, i = n = "function" == typeof t.escapeSelector ? t.escapeSelector(n).substr(1) : n.replace(/(:|\.|\[|\]|,|=|@)/g, "\\$1"));
                  try {
                      return t(document).find(i).length > 0 ? i : null
                  } catch (t) {
                      return null
                  }
              },
              reflow: function(t) {
                  return t.offsetHeight
              },
              triggerTransitionEnd: function(n) {
                  t(n).trigger(e.end)
              },
              supportsTransitionEnd: function() {
                  return Boolean(e)
              },
              isElement: function(t) {
                  return (t[0] || t).nodeType
              },
              typeCheckConfig: function(t, e, n) {
                  for (var s in n)
                      if (Object.prototype.hasOwnProperty.call(n, s)) {
                          var r = n[s],
                              o = e[s],
                              a = o && i.isElement(o) ? "element" : (l = o, {}.toString.call(l).match(/\s([a-zA-Z]+)/)[1].toLowerCase());
                          if (!new RegExp(r).test(a)) throw new Error(t.toUpperCase() + ': Option "' + s + '" provided type "' + a + '" but expected type "' + r + '".')
                      }
                  var l
              }
          };
          return e = ("undefined" == typeof window || !window.QUnit) && {
              end: "transitionend"
          }, t.fn.emulateTransitionEnd = n, i.supportsTransitionEnd() && (t.event.special[i.TRANSITION_END] = {
              bindType: e.end,
              delegateType: e.end,
              handle: function(e) {
                  if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
              }
          }), i
      }(e),
      L = (a = "alert", h = "." + (l = "bs.alert"), c = (o = e).fn[a], u = {
          CLOSE: "close" + h,
          CLOSED: "closed" + h,
          CLICK_DATA_API: "click" + h + ".data-api"
      }, f = "alert", d = "fade", _ = "show", g = function() {
          function t(t) {
              this._element = t
          }
          var e = t.prototype;
          return e.close = function(t) {
              t = t || this._element;
              var e = this._getRootElement(t);
              this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
          }, e.dispose = function() {
              o.removeData(this._element, l), this._element = null
          }, e._getRootElement = function(t) {
              var e = P.getSelectorFromElement(t),
                  n = !1;
              return e && (n = o(e)[0]), n || (n = o(t).closest("." + f)[0]), n
          }, e._triggerCloseEvent = function(t) {
              var e = o.Event(u.CLOSE);
              return o(t).trigger(e), e
          }, e._removeElement = function(t) {
              var e = this;
              o(t).removeClass(_), P.supportsTransitionEnd() && o(t).hasClass(d) ? o(t).one(P.TRANSITION_END, function(n) {
                  return e._destroyElement(t, n)
              }).emulateTransitionEnd(150) : this._destroyElement(t)
          }, e._destroyElement = function(t) {
              o(t).detach().trigger(u.CLOSED).remove()
          }, t._jQueryInterface = function(e) {
              return this.each(function() {
                  var n = o(this),
                      i = n.data(l);
                  i || (i = new t(this), n.data(l, i)), "close" === e && i[e](this)
              })
          }, t._handleDismiss = function(t) {
              return function(e) {
                  e && e.preventDefault(), t.close(this)
              }
          }, s(t, null, [{
              key: "VERSION",
              get: function() {
                  return "4.0.0"
              }
          }]), t
      }(), o(document).on(u.CLICK_DATA_API, '[data-dismiss="alert"]', g._handleDismiss(new g)), o.fn[a] = g._jQueryInterface, o.fn[a].Constructor = g, o.fn[a].noConflict = function() {
          return o.fn[a] = c, g._jQueryInterface
      }, g),
      R = (m = "button", E = "." + (v = "bs.button"), T = ".data-api", y = (p = e).fn[m], C = "active", I = "btn", A = "focus", b = '[data-toggle^="button"]', D = '[data-toggle="buttons"]', S = "input", w = ".active", N = ".btn", O = {
          CLICK_DATA_API: "click" + E + T,
          FOCUS_BLUR_DATA_API: "focus" + E + T + " blur" + E + T
      }, k = function() {
          function t(t) {
              this._element = t
          }
          var e = t.prototype;
          return e.toggle = function() {
              var t = !0,
                  e = !0,
                  n = p(this._element).closest(D)[0];
              if (n) {
                  var i = p(this._element).find(S)[0];
                  if (i) {
                      if ("radio" === i.type)
                          if (i.checked && p(this._element).hasClass(C)) t = !1;
                          else {
                              var s = p(n).find(w)[0];
                              s && p(s).removeClass(C)
                          }
                      if (t) {
                          if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;
                          i.checked = !p(this._element).hasClass(C), p(i).trigger("change")
                      }
                      i.focus(), e = !1
                  }
              }
              e && this._element.setAttribute("aria-pressed", !p(this._element).hasClass(C)), t && p(this._element).toggleClass(C)
          }, e.dispose = function() {
              p.removeData(this._element, v), this._element = null
          }, t._jQueryInterface = function(e) {
              return this.each(function() {
                  var n = p(this).data(v);
                  n || (n = new t(this), p(this).data(v, n)), "toggle" === e && n[e]()
              })
          }, s(t, null, [{
              key: "VERSION",
              get: function() {
                  return "4.0.0"
              }
          }]), t
      }(), p(document).on(O.CLICK_DATA_API, b, function(t) {
          t.preventDefault();
          var e = t.target;
          p(e).hasClass(I) || (e = p(e).closest(N)), k._jQueryInterface.call(p(e), "toggle")
      }).on(O.FOCUS_BLUR_DATA_API, b, function(t) {
          var e = p(t.target).closest(N)[0];
          p(e).toggleClass(A, /^focus(in)?$/.test(t.type))
      }), p.fn[m] = k._jQueryInterface, p.fn[m].Constructor = k, p.fn[m].noConflict = function() {
          return p.fn[m] = y, k._jQueryInterface
      }, k),

      H = function(t) {
          var e = "collapse",
              n = "bs.collapse",
              i = "." + n,
              o = t.fn[e],
              a = {
                  toggle: !0,
                  parent: ""
              },
              l = {
                  toggle: "boolean",
                  parent: "(string|element)"
              },
              h = {
                  SHOW: "show" + i,
                  SHOWN: "shown" + i,
                  HIDE: "hide" + i,
                  HIDDEN: "hidden" + i,
                  CLICK_DATA_API: "click" + i + ".data-api"
              },
              c = "show",
              u = "collapse",
              f = "collapsing",
              d = "collapsed",
              _ = "width",
              g = "height",
              p = {
                  ACTIVES: ".show, .collapsing",
                  DATA_TOGGLE: '[data-toggle="collapse"]'
              },
              m = function() {
                  function i(e, n) {
                      this._isTransitioning = !1, this._element = e, this._config = this._getConfig(n), this._triggerArray = t.makeArray(t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
                      for (var i = t(p.DATA_TOGGLE), s = 0; s < i.length; s++) {
                          var r = i[s],
                              o = P.getSelectorFromElement(r);
                          null !== o && t(o).filter(e).length > 0 && (this._selector = o, this._triggerArray.push(r))
                      }
                      this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
                  }
                  var o = i.prototype;
                  return o.toggle = function() {
                      t(this._element).hasClass(c) ? this.hide() : this.show()
                  }, o.show = function() {
                      var e, s, r = this;
                      if (!this._isTransitioning && !t(this._element).hasClass(c) && (this._parent && 0 === (e = t.makeArray(t(this._parent).find(p.ACTIVES).filter('[data-parent="' + this._config.parent + '"]'))).length && (e = null), !(e && (s = t(e).not(this._selector).data(n)) && s._isTransitioning))) {
                          var o = t.Event(h.SHOW);
                          if (t(this._element).trigger(o), !o.isDefaultPrevented()) {
                              e && (i._jQueryInterface.call(t(e).not(this._selector), "hide"), s || t(e).data(n, null));
                              var a = this._getDimension();
                              t(this._element).removeClass(u).addClass(f), this._element.style[a] = 0, this._triggerArray.length > 0 && t(this._triggerArray).removeClass(d).attr("aria-expanded", !0), this.setTransitioning(!0);
                              var l = function() {
                                  t(r._element).removeClass(f).addClass(u).addClass(c), r._element.style[a] = "", r.setTransitioning(!1), t(r._element).trigger(h.SHOWN)
                              };
                              if (P.supportsTransitionEnd()) {
                                  var _ = "scroll" + (a[0].toUpperCase() + a.slice(1));
                                  t(this._element).one(P.TRANSITION_END, l).emulateTransitionEnd(600), this._element.style[a] = this._element[_] + "px"
                              } else l()
                          }
                      }
                  }, o.hide = function() {
                      var e = this;
                      if (!this._isTransitioning && t(this._element).hasClass(c)) {
                          var n = t.Event(h.HIDE);
                          if (t(this._element).trigger(n), !n.isDefaultPrevented()) {
                              var i = this._getDimension();
                              if (this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", P.reflow(this._element), t(this._element).addClass(f).removeClass(u).removeClass(c), this._triggerArray.length > 0)
                                  for (var s = 0; s < this._triggerArray.length; s++) {
                                      var r = this._triggerArray[s],
                                          o = P.getSelectorFromElement(r);
                                      if (null !== o) t(o).hasClass(c) || t(r).addClass(d).attr("aria-expanded", !1)
                                  }
                              this.setTransitioning(!0);
                              var a = function() {
                                  e.setTransitioning(!1), t(e._element).removeClass(f).addClass(u).trigger(h.HIDDEN)
                              };
                              this._element.style[i] = "", P.supportsTransitionEnd() ? t(this._element).one(P.TRANSITION_END, a).emulateTransitionEnd(600) : a()
                          }
                      }
                  }, o.setTransitioning = function(t) {
                      this._isTransitioning = t
                  }, o.dispose = function() {
                      t.removeData(this._element, n), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
                  }, o._getConfig = function(t) {
                      return (t = r({}, a, t)).toggle = Boolean(t.toggle), P.typeCheckConfig(e, t, l), t
                  }, o._getDimension = function() {
                      return t(this._element).hasClass(_) ? _ : g
                  }, o._getParent = function() {
                      var e = this,
                          n = null;
                      P.isElement(this._config.parent) ? (n = this._config.parent, "undefined" != typeof this._config.parent.jquery && (n = this._config.parent[0])) : n = t(this._config.parent)[0];
                      var s = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                      return t(n).find(s).each(function(t, n) {
                          e._addAriaAndCollapsedClass(i._getTargetFromElement(n), [n])
                      }), n
                  }, o._addAriaAndCollapsedClass = function(e, n) {
                      if (e) {
                          var i = t(e).hasClass(c);
                          n.length > 0 && t(n).toggleClass(d, !i).attr("aria-expanded", i)
                      }
                  }, i._getTargetFromElement = function(e) {
                      var n = P.getSelectorFromElement(e);
                      return n ? t(n)[0] : null
                  }, i._jQueryInterface = function(e) {
                      return this.each(function() {
                          var s = t(this),
                              o = s.data(n),
                              l = r({}, a, s.data(), "object" == typeof e && e);
                          if (!o && l.toggle && /show|hide/.test(e) && (l.toggle = !1), o || (o = new i(this, l), s.data(n, o)), "string" == typeof e) {
                              if ("undefined" == typeof o[e]) throw new TypeError('No method named "' + e + '"');
                              o[e]()
                          }
                      })
                  }, s(i, null, [{
                      key: "VERSION",
                      get: function() {
                          return "4.0.0"
                      }
                  }, {
                      key: "Default",
                      get: function() {
                          return a
                      }
                  }]), i
              }();
          return t(document).on(h.CLICK_DATA_API, p.DATA_TOGGLE, function(e) {
              "A" === e.currentTarget.tagName && e.preventDefault();
              var i = t(this),
                  s = P.getSelectorFromElement(this);
              t(s).each(function() {
                  var e = t(this),
                      s = e.data(n) ? "toggle" : i.data();
                  m._jQueryInterface.call(e, s)
              })
          }), t.fn[e] = m._jQueryInterface, t.fn[e].Constructor = m, t.fn[e].noConflict = function() {
              return t.fn[e] = o, m._jQueryInterface
          }, m
      }(e),
      W = function(t) {
          var e = "dropdown",
              i = "bs.dropdown",
              o = "." + i,
              a = ".data-api",
              l = t.fn[e],
              h = new RegExp("38|40|27"),
              c = {
                  HIDE: "hide" + o,
                  HIDDEN: "hidden" + o,
                  SHOW: "show" + o,
                  SHOWN: "shown" + o,
                  CLICK: "click" + o,
                  CLICK_DATA_API: "click" + o + a,
                  KEYDOWN_DATA_API: "keydown" + o + a,
                  KEYUP_DATA_API: "keyup" + o + a
              },
              u = "disabled",
              f = "show",
              d = "dropup",
              _ = "dropright",
              g = "dropleft",
              p = "dropdown-menu-right",
              m = "dropdown-menu-left",
              v = "position-static",
              E = '[data-toggle="dropdown"]',
              T = ".dropdown form",
              y = ".dropdown-menu",
              C = ".navbar-nav",
              I = ".dropdown-menu .dropdown-item:not(.disabled)",
              A = "top-start",
              b = "top-end",
              D = "bottom-start",
              S = "bottom-end",
              w = "right-start",
              N = "left-start",
              O = {
                  offset: 0,
                  flip: !0,
                  boundary: "scrollParent"
              },
              k = {
                  offset: "(number|string|function)",
                  flip: "boolean",
                  boundary: "(string|element)"
              },
              L = function() {
                  function a(t, e) {
                      this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
                  }
                  var l = a.prototype;
                  return l.toggle = function() {
                      if (!this._element.disabled && !t(this._element).hasClass(u)) {
                          var e = a._getParentFromElement(this._element),
                              i = t(this._menu).hasClass(f);
                          if (a._clearMenus(), !i) {
                              var s = {
                                      relatedTarget: this._element
                                  },
                                  r = t.Event(c.SHOW, s);
                              if (t(e).trigger(r), !r.isDefaultPrevented()) {
                                  if (!this._inNavbar) {
                                      if ("undefined" == typeof n) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                                      var o = this._element;
                                      t(e).hasClass(d) && (t(this._menu).hasClass(m) || t(this._menu).hasClass(p)) && (o = e), "scrollParent" !== this._config.boundary && t(e).addClass(v), this._popper = new n(o, this._menu, this._getPopperConfig())
                                  }
                                  "ontouchstart" in document.documentElement && 0 === t(e).closest(C).length && t("body").children().on("mouseover", null, t.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), t(this._menu).toggleClass(f), t(e).toggleClass(f).trigger(t.Event(c.SHOWN, s))
                              }
                          }
                      }
                  }, l.dispose = function() {
                      t.removeData(this._element, i), t(this._element).off(o), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null)
                  }, l.update = function() {
                      this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
                  }, l._addEventListeners = function() {
                      var e = this;
                      t(this._element).on(c.CLICK, function(t) {
                          t.preventDefault(), t.stopPropagation(), e.toggle()
                      })
                  }, l._getConfig = function(n) {
                      return n = r({}, this.constructor.Default, t(this._element).data(), n), P.typeCheckConfig(e, n, this.constructor.DefaultType), n
                  }, l._getMenuElement = function() {
                      if (!this._menu) {
                          var e = a._getParentFromElement(this._element);
                          this._menu = t(e).find(y)[0]
                      }
                      return this._menu
                  }, l._getPlacement = function() {
                      var e = t(this._element).parent(),
                          n = D;
                      return e.hasClass(d) ? (n = A, t(this._menu).hasClass(p) && (n = b)) : e.hasClass(_) ? n = w : e.hasClass(g) ? n = N : t(this._menu).hasClass(p) && (n = S), n
                  }, l._detectNavbar = function() {
                      return t(this._element).closest(".navbar").length > 0
                  }, l._getPopperConfig = function() {
                      var t = this,
                          e = {};
                      return "function" == typeof this._config.offset ? e.fn = function(e) {
                          return e.offsets = r({}, e.offsets, t._config.offset(e.offsets) || {}), e
                      } : e.offset = this._config.offset, {
                          placement: this._getPlacement(),
                          modifiers: {
                              offset: e,
                              flip: {
                                  enabled: this._config.flip
                              },
                              preventOverflow: {
                                  boundariesElement: this._config.boundary
                              }
                          }
                      }
                  }, a._jQueryInterface = function(e) {
                      return this.each(function() {
                          var n = t(this).data(i);
                          if (n || (n = new a(this, "object" == typeof e ? e : null), t(this).data(i, n)), "string" == typeof e) {
                              if ("undefined" == typeof n[e]) throw new TypeError('No method named "' + e + '"');
                              n[e]()
                          }
                      })
                  }, a._clearMenus = function(e) {
                      if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which))
                          for (var n = t.makeArray(t(E)), s = 0; s < n.length; s++) {
                              var r = a._getParentFromElement(n[s]),
                                  o = t(n[s]).data(i),
                                  l = {
                                      relatedTarget: n[s]
                                  };
                              if (o) {
                                  var h = o._menu;
                                  if (t(r).hasClass(f) && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && t.contains(r, e.target))) {
                                      var u = t.Event(c.HIDE, l);
                                      t(r).trigger(u), u.isDefaultPrevented() || ("ontouchstart" in document.documentElement && t("body").children().off("mouseover", null, t.noop), n[s].setAttribute("aria-expanded", "false"), t(h).removeClass(f), t(r).removeClass(f).trigger(t.Event(c.HIDDEN, l)))
                                  }
                              }
                          }
                  }, a._getParentFromElement = function(e) {
                      var n, i = P.getSelectorFromElement(e);
                      return i && (n = t(i)[0]), n || e.parentNode
                  }, a._dataApiKeydownHandler = function(e) {
                      if ((/input|textarea/i.test(e.target.tagName) ? !(32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || t(e.target).closest(y).length)) : h.test(e.which)) && (e.preventDefault(), e.stopPropagation(), !this.disabled && !t(this).hasClass(u))) {
                          var n = a._getParentFromElement(this),
                              i = t(n).hasClass(f);
                          if ((i || 27 === e.which && 32 === e.which) && (!i || 27 !== e.which && 32 !== e.which)) {
                              var s = t(n).find(I).get();
                              if (0 !== s.length) {
                                  var r = s.indexOf(e.target);
                                  38 === e.which && r > 0 && r--, 40 === e.which && r < s.length - 1 && r++, r < 0 && (r = 0), s[r].focus()
                              }
                          } else {
                              if (27 === e.which) {
                                  var o = t(n).find(E)[0];
                                  t(o).trigger("focus")
                              }
                              t(this).trigger("click")
                          }
                      }
                  }, s(a, null, [{
                      key: "VERSION",
                      get: function() {
                          return "4.0.0"
                      }
                  }, {
                      key: "Default",
                      get: function() {
                          return O
                      }
                  }, {
                      key: "DefaultType",
                      get: function() {
                          return k
                      }
                  }]), a
              }();
          return t(document).on(c.KEYDOWN_DATA_API, E, L._dataApiKeydownHandler).on(c.KEYDOWN_DATA_API, y, L._dataApiKeydownHandler).on(c.CLICK_DATA_API + " " + c.KEYUP_DATA_API, L._clearMenus).on(c.CLICK_DATA_API, E, function(e) {
              e.preventDefault(), e.stopPropagation(), L._jQueryInterface.call(t(this), "toggle")
          }).on(c.CLICK_DATA_API, T, function(t) {
              t.stopPropagation()
          }), t.fn[e] = L._jQueryInterface, t.fn[e].Constructor = L, t.fn[e].noConflict = function() {
              return t.fn[e] = l, L._jQueryInterface
          }, L
      }(e),

      U = function(t) {
          var e = "tooltip",
              i = "bs.tooltip",
              o = "." + i,
              a = t.fn[e],
              l = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
              h = {
                  animation: "boolean",
                  template: "string",
                  title: "(string|element|function)",
                  trigger: "string",
                  delay: "(number|object)",
                  html: "boolean",
                  selector: "(string|boolean)",
                  placement: "(string|function)",
                  offset: "(number|string)",
                  container: "(string|element|boolean)",
                  fallbackPlacement: "(string|array)",
                  boundary: "(string|element)"
              },
              c = {
                  AUTO: "auto",
                  TOP: "top",
                  RIGHT: "right",
                  BOTTOM: "bottom",
                  LEFT: "left"
              },
              u = {
                  animation: !0,
                  template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
                  trigger: "hover focus",
                  title: "",
                  delay: 0,
                  html: !1,
                  selector: !1,
                  placement: "top",
                  offset: 0,
                  container: !1,
                  fallbackPlacement: "flip",
                  boundary: "scrollParent"
              },
              f = "show",
              d = "out",
              _ = {
                  HIDE: "hide" + o,
                  HIDDEN: "hidden" + o,
                  SHOW: "show" + o,
                  SHOWN: "shown" + o,
                  INSERTED: "inserted" + o,
                  CLICK: "click" + o,
                  FOCUSIN: "focusin" + o,
                  FOCUSOUT: "focusout" + o,
                  MOUSEENTER: "mouseenter" + o,
                  MOUSELEAVE: "mouseleave" + o
              },
              g = "fade",
              p = "show",
              m = ".tooltip-inner",
              v = ".arrow",
              E = "hover",
              T = "focus",
              y = "click",
              C = "manual",
              I = function() {
                  function a(t, e) {
                      if ("undefined" == typeof n) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
                      this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners()
                  }
                  var I = a.prototype;
                  return I.enable = function() {
                      this._isEnabled = !0
                  }, I.disable = function() {
                      this._isEnabled = !1
                  }, I.toggleEnabled = function() {
                      this._isEnabled = !this._isEnabled
                  }, I.toggle = function(e) {
                      if (this._isEnabled)
                          if (e) {
                              var n = this.constructor.DATA_KEY,
                                  i = t(e.currentTarget).data(n);
                              i || (i = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
                          } else {
                              if (t(this.getTipElement()).hasClass(p)) return void this._leave(null, this);
                              this._enter(null, this)
                          }
                  }, I.dispose = function() {
                      clearTimeout(this._timeout), t.removeData(this.element, this.constructor.DATA_KEY), t(this.element).off(this.constructor.EVENT_KEY), t(this.element).closest(".modal").off("hide.bs.modal"), this.tip && t(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, null !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
                  }, I.show = function() {
                      var e = this;
                      if ("none" === t(this.element).css("display")) throw new Error("Please use show on visible elements");
                      var i = t.Event(this.constructor.Event.SHOW);
                      if (this.isWithContent() && this._isEnabled) {
                          t(this.element).trigger(i);
                          var s = t.contains(this.element.ownerDocument.documentElement, this.element);
                          if (i.isDefaultPrevented() || !s) return;
                          var r = this.getTipElement(),
                              o = P.getUID(this.constructor.NAME);
                          r.setAttribute("id", o), this.element.setAttribute("aria-describedby", o), this.setContent(), this.config.animation && t(r).addClass(g);
                          var l = "function" == typeof this.config.placement ? this.config.placement.call(this, r, this.element) : this.config.placement,
                              h = this._getAttachment(l);
                          this.addAttachmentClass(h);
                          var c = !1 === this.config.container ? document.body : t(this.config.container);
                          t(r).data(this.constructor.DATA_KEY, this), t.contains(this.element.ownerDocument.documentElement, this.tip) || t(r).appendTo(c), t(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new n(this.element, r, {
                              placement: h,
                              modifiers: {
                                  offset: {
                                      offset: this.config.offset
                                  },
                                  flip: {
                                      behavior: this.config.fallbackPlacement
                                  },
                                  arrow: {
                                      element: v
                                  },
                                  preventOverflow: {
                                      boundariesElement: this.config.boundary
                                  }
                              },
                              onCreate: function(t) {
                                  t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
                              },
                              onUpdate: function(t) {
                                  e._handlePopperPlacementChange(t)
                              }
                          }), t(r).addClass(p), "ontouchstart" in document.documentElement && t("body").children().on("mouseover", null, t.noop);
                          var u = function() {
                              e.config.animation && e._fixTransition();
                              var n = e._hoverState;
                              e._hoverState = null, t(e.element).trigger(e.constructor.Event.SHOWN), n === d && e._leave(null, e)
                          };
                          P.supportsTransitionEnd() && t(this.tip).hasClass(g) ? t(this.tip).one(P.TRANSITION_END, u).emulateTransitionEnd(a._TRANSITION_DURATION) : u()
                      }
                  }, I.hide = function(e) {
                      var n = this,
                          i = this.getTipElement(),
                          s = t.Event(this.constructor.Event.HIDE),
                          r = function() {
                              n._hoverState !== f && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), t(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), e && e()
                          };
                      t(this.element).trigger(s), s.isDefaultPrevented() || (t(i).removeClass(p), "ontouchstart" in document.documentElement && t("body").children().off("mouseover", null, t.noop), this._activeTrigger[y] = !1, this._activeTrigger[T] = !1, this._activeTrigger[E] = !1, P.supportsTransitionEnd() && t(this.tip).hasClass(g) ? t(i).one(P.TRANSITION_END, r).emulateTransitionEnd(150) : r(), this._hoverState = "")
                  }, I.update = function() {
                      null !== this._popper && this._popper.scheduleUpdate()
                  }, I.isWithContent = function() {
                      return Boolean(this.getTitle())
                  }, I.addAttachmentClass = function(e) {
                      t(this.getTipElement()).addClass("bs-tooltip-" + e)
                  }, I.getTipElement = function() {
                      return this.tip = this.tip || t(this.config.template)[0], this.tip
                  }, I.setContent = function() {
                      var e = t(this.getTipElement());
                      this.setElementContent(e.find(m), this.getTitle()), e.removeClass(g + " " + p)
                  }, I.setElementContent = function(e, n) {
                      var i = this.config.html;
                      "object" == typeof n && (n.nodeType || n.jquery) ? i ? t(n).parent().is(e) || e.empty().append(n) : e.text(t(n).text()) : e[i ? "html" : "text"](n)
                  }, I.getTitle = function() {
                      var t = this.element.getAttribute("data-original-title");
                      return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t
                  }, I._getAttachment = function(t) {
                      return c[t.toUpperCase()]
                  }, I._setListeners = function() {
                      var e = this;
                      this.config.trigger.split(" ").forEach(function(n) {
                          if ("click" === n) t(e.element).on(e.constructor.Event.CLICK, e.config.selector, function(t) {
                              return e.toggle(t)
                          });
                          else if (n !== C) {
                              var i = n === E ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                                  s = n === E ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                              t(e.element).on(i, e.config.selector, function(t) {
                                  return e._enter(t)
                              }).on(s, e.config.selector, function(t) {
                                  return e._leave(t)
                              })
                          }
                          t(e.element).closest(".modal").on("hide.bs.modal", function() {
                              return e.hide()
                          })
                      }), this.config.selector ? this.config = r({}, this.config, {
                          trigger: "manual",
                          selector: ""
                      }) : this._fixTitle()
                  }, I._fixTitle = function() {
                      var t = typeof this.element.getAttribute("data-original-title");
                      (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
                  }, I._enter = function(e, n) {
                      var i = this.constructor.DATA_KEY;
                      (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusin" === e.type ? T : E] = !0), t(n.getTipElement()).hasClass(p) || n._hoverState === f ? n._hoverState = f : (clearTimeout(n._timeout), n._hoverState = f, n.config.delay && n.config.delay.show ? n._timeout = setTimeout(function() {
                          n._hoverState === f && n.show()
                      }, n.config.delay.show) : n.show())
                  }, I._leave = function(e, n) {
                      var i = this.constructor.DATA_KEY;
                      (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusout" === e.type ? T : E] = !1), n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = d, n.config.delay && n.config.delay.hide ? n._timeout = setTimeout(function() {
                          n._hoverState === d && n.hide()
                      }, n.config.delay.hide) : n.hide())
                  }, I._isWithActiveTrigger = function() {
                      for (var t in this._activeTrigger)
                          if (this._activeTrigger[t]) return !0;
                      return !1
                  }, I._getConfig = function(n) {
                      return "number" == typeof(n = r({}, this.constructor.Default, t(this.element).data(), n)).delay && (n.delay = {
                          show: n.delay,
                          hide: n.delay
                      }), "number" == typeof n.title && (n.title = n.title.toString()), "number" == typeof n.content && (n.content = n.content.toString()), P.typeCheckConfig(e, n, this.constructor.DefaultType), n
                  }, I._getDelegateConfig = function() {
                      var t = {};
                      if (this.config)
                          for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                      return t
                  }, I._cleanTipClass = function() {
                      var e = t(this.getTipElement()),
                          n = e.attr("class").match(l);
                      null !== n && n.length > 0 && e.removeClass(n.join(""))
                  }, I._handlePopperPlacementChange = function(t) {
                      this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement))
                  }, I._fixTransition = function() {
                      var e = this.getTipElement(),
                          n = this.config.animation;
                      null === e.getAttribute("x-placement") && (t(e).removeClass(g), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n)
                  }, a._jQueryInterface = function(e) {
                      return this.each(function() {
                          var n = t(this).data(i),
                              s = "object" == typeof e && e;
                          if ((n || !/dispose|hide/.test(e)) && (n || (n = new a(this, s), t(this).data(i, n)), "string" == typeof e)) {
                              if ("undefined" == typeof n[e]) throw new TypeError('No method named "' + e + '"');
                              n[e]()
                          }
                      })
                  }, s(a, null, [{
                      key: "VERSION",
                      get: function() {
                          return "4.0.0"
                      }
                  }, {
                      key: "Default",
                      get: function() {
                          return u
                      }
                  }, {
                      key: "NAME",
                      get: function() {
                          return e
                      }
                  }, {
                      key: "DATA_KEY",
                      get: function() {
                          return i
                      }
                  }, {
                      key: "Event",
                      get: function() {
                          return _
                      }
                  }, {
                      key: "EVENT_KEY",
                      get: function() {
                          return o
                      }
                  }, {
                      key: "DefaultType",
                      get: function() {
                          return h
                      }
                  }]), a
              }();
          return t.fn[e] = I._jQueryInterface, t.fn[e].Constructor = I, t.fn[e].noConflict = function() {
              return t.fn[e] = a, I._jQueryInterface
          }, I
      }(e),
      x = function(t) {
          var e = "popover",
              n = "bs.popover",
              i = "." + n,
              o = t.fn[e],
              a = new RegExp("(^|\\s)bs-popover\\S+", "g"),
              l = r({}, U.Default, {
                  placement: "right",
                  trigger: "click",
                  content: "",
                  template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
              }),
              h = r({}, U.DefaultType, {
                  content: "(string|element|function)"
              }),
              c = "fade",
              u = "show",
              f = ".popover-header",
              d = ".popover-body",
              _ = {
                  HIDE: "hide" + i,
                  HIDDEN: "hidden" + i,
                  SHOW: "show" + i,
                  SHOWN: "shown" + i,
                  INSERTED: "inserted" + i,
                  CLICK: "click" + i,
                  FOCUSIN: "focusin" + i,
                  FOCUSOUT: "focusout" + i,
                  MOUSEENTER: "mouseenter" + i,
                  MOUSELEAVE: "mouseleave" + i
              },
              g = function(r) {
                  var o, g;

                  function p() {
                      return r.apply(this, arguments) || this
                  }
                  g = r, (o = p).prototype = Object.create(g.prototype), o.prototype.constructor = o, o.__proto__ = g;
                  var m = p.prototype;
                  return m.isWithContent = function() {
                      return this.getTitle() || this._getContent()
                  }, m.addAttachmentClass = function(e) {
                      t(this.getTipElement()).addClass("bs-popover-" + e)
                  }, m.getTipElement = function() {
                      return this.tip = this.tip || t(this.config.template)[0], this.tip
                  }, m.setContent = function() {
                      var e = t(this.getTipElement());
                      this.setElementContent(e.find(f), this.getTitle());
                      var n = this._getContent();
                      "function" == typeof n && (n = n.call(this.element)), this.setElementContent(e.find(d), n), e.removeClass(c + " " + u)
                  }, m._getContent = function() {
                      return this.element.getAttribute("data-content") || this.config.content
                  }, m._cleanTipClass = function() {
                      var e = t(this.getTipElement()),
                          n = e.attr("class").match(a);
                      null !== n && n.length > 0 && e.removeClass(n.join(""))
                  }, p._jQueryInterface = function(e) {
                      return this.each(function() {
                          var i = t(this).data(n),
                              s = "object" == typeof e ? e : null;
                          if ((i || !/destroy|hide/.test(e)) && (i || (i = new p(this, s), t(this).data(n, i)), "string" == typeof e)) {
                              if ("undefined" == typeof i[e]) throw new TypeError('No method named "' + e + '"');
                              i[e]()
                          }
                      })
                  }, s(p, null, [{
                      key: "VERSION",
                      get: function() {
                          return "4.0.0"
                      }
                  }, {
                      key: "Default",
                      get: function() {
                          return l
                      }
                  }, {
                      key: "NAME",
                      get: function() {
                          return e
                      }
                  }, {
                      key: "DATA_KEY",
                      get: function() {
                          return n
                      }
                  }, {
                      key: "Event",
                      get: function() {
                          return _
                      }
                  }, {
                      key: "EVENT_KEY",
                      get: function() {
                          return i
                      }
                  }, {
                      key: "DefaultType",
                      get: function() {
                          return h
                      }
                  }]), p
              }(U);
          return t.fn[e] = g._jQueryInterface, t.fn[e].Constructor = g, t.fn[e].noConflict = function() {
              return t.fn[e] = o, g._jQueryInterface
          }, g
      }(e),
      K = function(t) {
          var e = "scrollspy",
              n = "bs.scrollspy",
              i = "." + n,
              o = t.fn[e],
              a = {
                  offset: 10,
                  method: "auto",
                  target: ""
              },
              l = {
                  offset: "number",
                  method: "string",
                  target: "(string|element)"
              },
              h = {
                  ACTIVATE: "activate" + i,
                  SCROLL: "scroll" + i,
                  LOAD_DATA_API: "load" + i + ".data-api"
              },
              c = "dropdown-item",
              u = "active",
              f = {
                  DATA_SPY: '[data-spy="scroll"]',
                  ACTIVE: ".active",
                  NAV_LIST_GROUP: ".nav, .list-group",
                  NAV_LINKS: ".nav-link",
                  NAV_ITEMS: ".nav-item",
                  LIST_ITEMS: ".list-group-item",
                  DROPDOWN: ".dropdown",
                  DROPDOWN_ITEMS: ".dropdown-item",
                  DROPDOWN_TOGGLE: ".dropdown-toggle"
              },
              d = "offset",
              _ = "position",
              g = function() {
                  function o(e, n) {
                      var i = this;
                      this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(n), this._selector = this._config.target + " " + f.NAV_LINKS + "," + this._config.target + " " + f.LIST_ITEMS + "," + this._config.target + " " + f.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, t(this._scrollElement).on(h.SCROLL, function(t) {
                          return i._process(t)
                      }), this.refresh(), this._process()
                  }
                  var g = o.prototype;
                  return g.refresh = function() {
                      var e = this,
                          n = this._scrollElement === this._scrollElement.window ? d : _,
                          i = "auto" === this._config.method ? n : this._config.method,
                          s = i === _ ? this._getScrollTop() : 0;
                      this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), t.makeArray(t(this._selector)).map(function(e) {
                          var n, r = P.getSelectorFromElement(e);
                          if (r && (n = t(r)[0]), n) {
                              var o = n.getBoundingClientRect();
                              if (o.width || o.height) return [t(n)[i]().top + s, r]
                          }
                          return null
                      }).filter(function(t) {
                          return t
                      }).sort(function(t, e) {
                          return t[0] - e[0]
                      }).forEach(function(t) {
                          e._offsets.push(t[0]), e._targets.push(t[1])
                      })
                  }, g.dispose = function() {
                      t.removeData(this._element, n), t(this._scrollElement).off(i), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
                  }, g._getConfig = function(n) {
                      if ("string" != typeof(n = r({}, a, n)).target) {
                          var i = t(n.target).attr("id");
                          i || (i = P.getUID(e), t(n.target).attr("id", i)), n.target = "#" + i
                      }
                      return P.typeCheckConfig(e, n, l), n
                  }, g._getScrollTop = function() {
                      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
                  }, g._getScrollHeight = function() {
                      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                  }, g._getOffsetHeight = function() {
                      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
                  }, g._process = function() {
                      var t = this._getScrollTop() + this._config.offset,
                          e = this._getScrollHeight(),
                          n = this._config.offset + e - this._getOffsetHeight();
                      if (this._scrollHeight !== e && this.refresh(), t >= n) {
                          var i = this._targets[this._targets.length - 1];
                          this._activeTarget !== i && this._activate(i)
                      } else {
                          if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                          for (var s = this._offsets.length; s--;) {
                              this._activeTarget !== this._targets[s] && t >= this._offsets[s] && ("undefined" == typeof this._offsets[s + 1] || t < this._offsets[s + 1]) && this._activate(this._targets[s])
                          }
                      }
                  }, g._activate = function(e) {
                      this._activeTarget = e, this._clear();
                      var n = this._selector.split(",");
                      n = n.map(function(t) {
                          return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                      });
                      var i = t(n.join(","));
                      i.hasClass(c) ? (i.closest(f.DROPDOWN).find(f.DROPDOWN_TOGGLE).addClass(u), i.addClass(u)) : (i.addClass(u), i.parents(f.NAV_LIST_GROUP).prev(f.NAV_LINKS + ", " + f.LIST_ITEMS).addClass(u), i.parents(f.NAV_LIST_GROUP).prev(f.NAV_ITEMS).children(f.NAV_LINKS).addClass(u)), t(this._scrollElement).trigger(h.ACTIVATE, {
                          relatedTarget: e
                      })
                  }, g._clear = function() {
                      t(this._selector).filter(f.ACTIVE).removeClass(u)
                  }, o._jQueryInterface = function(e) {
                      return this.each(function() {
                          var i = t(this).data(n);
                          if (i || (i = new o(this, "object" == typeof e && e), t(this).data(n, i)), "string" == typeof e) {
                              if ("undefined" == typeof i[e]) throw new TypeError('No method named "' + e + '"');
                              i[e]()
                          }
                      })
                  }, s(o, null, [{
                      key: "VERSION",
                      get: function() {
                          return "4.0.0"
                      }
                  }, {
                      key: "Default",
                      get: function() {
                          return a
                      }
                  }]), o
              }();
          return t(window).on(h.LOAD_DATA_API, function() {
              for (var e = t.makeArray(t(f.DATA_SPY)), n = e.length; n--;) {
                  var i = t(e[n]);
                  g._jQueryInterface.call(i, i.data())
              }
          }), t.fn[e] = g._jQueryInterface, t.fn[e].Constructor = g, t.fn[e].noConflict = function() {
              return t.fn[e] = o, g._jQueryInterface
          }, g
      }(e),
      V = function(t) {
          var e = "bs.tab",
              n = "." + e,
              i = t.fn.tab,
              r = {
                  HIDE: "hide" + n,
                  HIDDEN: "hidden" + n,
                  SHOW: "show" + n,
                  SHOWN: "shown" + n,
                  CLICK_DATA_API: "click.bs.tab.data-api"
              },
              o = "dropdown-menu",
              a = "active",
              l = "disabled",
              h = "fade",
              c = "show",
              u = ".dropdown",
              f = ".nav, .list-group",
              d = ".active",
              _ = "> li > .active",
              g = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
              p = ".dropdown-toggle",
              m = "> .dropdown-menu .active",
              v = function() {
                  function n(t) {
                      this._element = t
                  }
                  var i = n.prototype;
                  return i.show = function() {
                      var e = this;
                      if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass(a) || t(this._element).hasClass(l))) {
                          var n, i, s = t(this._element).closest(f)[0],
                              o = P.getSelectorFromElement(this._element);
                          if (s) {
                              var h = "UL" === s.nodeName ? _ : d;
                              i = (i = t.makeArray(t(s).find(h)))[i.length - 1]
                          }
                          var c = t.Event(r.HIDE, {
                                  relatedTarget: this._element
                              }),
                              u = t.Event(r.SHOW, {
                                  relatedTarget: i
                              });
                          if (i && t(i).trigger(c), t(this._element).trigger(u), !u.isDefaultPrevented() && !c.isDefaultPrevented()) {
                              o && (n = t(o)[0]), this._activate(this._element, s);
                              var g = function() {
                                  var n = t.Event(r.HIDDEN, {
                                          relatedTarget: e._element
                                      }),
                                      s = t.Event(r.SHOWN, {
                                          relatedTarget: i
                                      });
                                  t(i).trigger(n), t(e._element).trigger(s)
                              };
                              n ? this._activate(n, n.parentNode, g) : g()
                          }
                      }
                  }, i.dispose = function() {
                      t.removeData(this._element, e), this._element = null
                  }, i._activate = function(e, n, i) {
                      var s = this,
                          r = ("UL" === n.nodeName ? t(n).find(_) : t(n).children(d))[0],
                          o = i && P.supportsTransitionEnd() && r && t(r).hasClass(h),
                          a = function() {
                              return s._transitionComplete(e, r, i)
                          };
                      r && o ? t(r).one(P.TRANSITION_END, a).emulateTransitionEnd(150) : a()
                  }, i._transitionComplete = function(e, n, i) {
                      if (n) {
                          t(n).removeClass(c + " " + a);
                          var s = t(n.parentNode).find(m)[0];
                          s && t(s).removeClass(a), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1)
                      }
                      if (t(e).addClass(a), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), P.reflow(e), t(e).addClass(c), e.parentNode && t(e.parentNode).hasClass(o)) {
                          var r = t(e).closest(u)[0];
                          r && t(r).find(p).addClass(a), e.setAttribute("aria-expanded", !0)
                      }
                      i && i()
                  }, n._jQueryInterface = function(i) {
                      return this.each(function() {
                          var s = t(this),
                              r = s.data(e);
                          if (r || (r = new n(this), s.data(e, r)), "string" == typeof i) {
                              if ("undefined" == typeof r[i]) throw new TypeError('No method named "' + i + '"');
                              r[i]()
                          }
                      })
                  }, s(n, null, [{
                      key: "VERSION",
                      get: function() {
                          return "4.0.0"
                      }
                  }]), n
              }();
          return t(document).on(r.CLICK_DATA_API, g, function(e) {
              e.preventDefault(), v._jQueryInterface.call(t(this), "show")
          }), t.fn.tab = v._jQueryInterface, t.fn.tab.Constructor = v, t.fn.tab.noConflict = function() {
              return t.fn.tab = i, v._jQueryInterface
          }, v
      }(e);
/*   ! function(t) {
      if ("undefined" == typeof t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
      var e = t.fn.jquery.split(" ")[0].split(".");
      if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || e[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
  }(e), t.Util = P, t.Alert = L, t.Button = R, t.Carousel = j, t.Collapse = H, t.Dropdown = W, t.Modal = M, t.Popover = x, t.Scrollspy = K, t.Tab = V, t.Tooltip = U, Object.defineProperty(t, "__esModule", {
      value: !0
  }) */
});
