/*! jQuery Migrate v1.4.1 | (c) jQuery Foundation and other contributors | jquery.org/license */
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0), function(a, b, c) {
    function d(c) {
        var d = b.console;
        f[c] || (f[c] = !0, a.migrateWarnings.push(c), d && d.warn && !a.migrateMute && (d.warn("JQMIGRATE: " + c), a.migrateTrace && d.trace && d.trace()))
    }

    function e(b, c, e, f) {
        if (Object.defineProperty)try {
            return void Object.defineProperty(b, c, {
                configurable : !0, enumerable : !0, get : function() {
                    return d(f), e
                }, set       : function(a) {
                    d(f), e = a
                }
            })
        } catch (g) {
        }
        a._definePropertyBroken = !0, b[c] = e
    }

    a.migrateVersion = "1.4.1";
    var f = {};
    a.migrateWarnings = [], b.console && b.console.log && b.console.log("JQMIGRATE: Migrate is installed" + (a.migrateMute ? "" : " with logging active") + ", version " + a.migrateVersion), a.migrateTrace === c && (a.migrateTrace = !0), a.migrateReset = function() {
        f = {}, a.migrateWarnings.length = 0
    }, "BackCompat" === document.compatMode && d("jQuery is not compatible with Quirks Mode");
    var g = a("<input/>", {size : 1}).attr("size") && a.attrFn, h = a.attr, i = a.attrHooks.value && a.attrHooks.value.get || function() {
            return null
        }, j = a.attrHooks.value && a.attrHooks.value.set || function() {
            return c
        }, k = /^(?:input|button)$/i, l = /^[238]$/, m = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, n = /^(?:checked|selected)$/i;
    e(a, "attrFn", g || {}, "jQuery.attrFn is deprecated"), a.attr = function(b, e, f, i) {
        var j = e.toLowerCase(), o = b && b.nodeType;
        return i && (h.length < 4 && d("jQuery.fn.attr( props, pass ) is deprecated"), b && !l.test(o) && (g ? e in g : a.isFunction(a.fn[e]))) ? a(b)[e](f) : ("type" === e && f !== c && k.test(b.nodeName) && b.parentNode && d("Can't change the 'type' of an input or button in IE 6/7/8"), !a.attrHooks[j] && m.test(j) && (a.attrHooks[j] = {
                get : function(b, d) {
                    var e, f = a.prop(b, d);
                    return f === !0 || "boolean" != typeof f && (e = b.getAttributeNode(d)) && e.nodeValue !== !1 ? d.toLowerCase() : c
                },
                set : function(b, c, d) {
                    var e;
                    return c === !1 ? a.removeAttr(b, d) : (e = a.propFix[d] || d, e in b && (b[e] = !0), b.setAttribute(d, d.toLowerCase())), d
                }
            }, n.test(j) && d("jQuery.fn.attr('" + j + "') might use property instead of attribute")), h.call(a, b, e, f))
    }, a.attrHooks.value = {
        get    : function(a, b) {
            var c = (a.nodeName || "").toLowerCase();
            return "button" === c ? i.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value') no longer gets properties"), b in a ? a.value : null)
        }, set : function(a, b) {
            var c = (a.nodeName || "").toLowerCase();
            return "button" === c ? j.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value', val) no longer sets properties"), void(a.value = b))
        }
    };
    var o, p, q = a.fn.init, r = a.find, s = a.parseJSON, t = /^\s*</, u = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/, v = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g, w = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
    a.fn.init = function(b, e, f) {
        var g, h;
        return b && "string" == typeof b && !a.isPlainObject(e) && (g = w.exec(a.trim(b))) && g[0] && (t.test(b) || d("$(html) HTML strings must start with '<' character"), g[3] && d("$(html) HTML text after last tag is ignored"), "#" === g[0].charAt(0) && (d("HTML string cannot start with a '#' character"), a.error("JQMIGRATE: Invalid selector string (XSS)")), e && e.context && e.context.nodeType && (e = e.context), a.parseHTML) ? q.call(this, a.parseHTML(g[2], e && e.ownerDocument || e || document, !0), e, f) : (h = q.apply(this, arguments), b && b.selector !== c ? (h.selector = b.selector, h.context = b.context) : (h.selector = "string" == typeof b ? b : "", b && (h.context = b.nodeType ? b : e || document)), h)
    }, a.fn.init.prototype = a.fn, a.find = function(a) {
        var b = Array.prototype.slice.call(arguments);
        if ("string" == typeof a && u.test(a))try {
            document.querySelector(a)
        } catch (c) {
            a = a.replace(v, function(a, b, c, d) {
                return "[" + b + c + '"' + d + '"]'
            });
            try {
                document.querySelector(a), d("Attribute selector with '#' must be quoted: " + b[0]), b[0] = a
            } catch (e) {
                d("Attribute selector with '#' was not fixed: " + b[0])
            }
        }
        return r.apply(this, b)
    };
    var x;
    for (x in r)Object.prototype.hasOwnProperty.call(r, x) && (a.find[x] = r[x]);
    a.parseJSON = function(a) {
        return a ? s.apply(this, arguments) : (d("jQuery.parseJSON requires a valid JSON string"), null)
    }, a.uaMatch = function(a) {
        a = a.toLowerCase();
        var b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
        return {browser : b[1] || "", version : b[2] || "0"}
    }, a.browser || (o = a.uaMatch(navigator.userAgent), p = {}, o.browser && (p[o.browser] = !0, p.version = o.version), p.chrome ? p.webkit = !0 : p.webkit && (p.safari = !0), a.browser = p), e(a, "browser", a.browser, "jQuery.browser is deprecated"), a.boxModel = a.support.boxModel = "CSS1Compat" === document.compatMode, e(a, "boxModel", a.boxModel, "jQuery.boxModel is deprecated"), e(a.support, "boxModel", a.support.boxModel, "jQuery.support.boxModel is deprecated"), a.sub = function() {
        function b(a, c) {
            return new b.fn.init(a, c)
        }

        a.extend(!0, b, this), b.superclass = this, b.fn = b.prototype = this(), b.fn.constructor = b, b.sub = this.sub, b.fn.init = function(d, e) {
            var f = a.fn.init.call(this, d, e, c);
            return f instanceof b ? f : b(f)
        }, b.fn.init.prototype = b.fn;
        var c = b(document);
        return d("jQuery.sub() is deprecated"), b
    }, a.fn.size = function() {
        return d("jQuery.fn.size() is deprecated; use the .length property"), this.length
    };
    var y = !1;
    a.swap && a.each(["height", "width", "reliableMarginRight"], function(b, c) {
        var d = a.cssHooks[c] && a.cssHooks[c].get;
        d && (a.cssHooks[c].get = function() {
            var a;
            return y = !0, a = d.apply(this, arguments), y = !1, a
        })
    }), a.swap = function(a, b, c, e) {
        var f, g, h = {};
        y || d("jQuery.swap() is undocumented and deprecated");
        for (g in b)h[g] = a.style[g], a.style[g] = b[g];
        f = c.apply(a, e || []);
        for (g in b)a.style[g] = h[g];
        return f
    }, a.ajaxSetup({converters : {"text json" : a.parseJSON}});
    var z = a.fn.data;
    a.fn.data = function(b) {
        var e, f, g = this[0];
        return !g || "events" !== b || 1 !== arguments.length || (e = a.data(g, b), f = a._data(g, b), e !== c && e !== f || f === c) ? z.apply(this, arguments) : (d("Use of jQuery.fn.data('events') is deprecated"), f)
    };
    var A = /\/(java|ecma)script/i;
    a.clean || (a.clean = function(b, c, e, f) {
        c = c || document, c = !c.nodeType && c[0] || c, c = c.ownerDocument || c, d("jQuery.clean() is deprecated");
        var g, h, i, j, k = [];
        if (a.merge(k, a.buildFragment(b, c).childNodes), e)for (i = function(a) {
            return !a.type || A.test(a.type) ? f ? f.push(a.parentNode ? a.parentNode.removeChild(a) : a) : e.appendChild(a) : void 0
        }, g = 0; null != (h = k[g]); g++)a.nodeName(h, "script") && i(h) || (e.appendChild(h), "undefined" != typeof h.getElementsByTagName && (j = a.grep(a.merge([], h.getElementsByTagName("script")), i), k.splice.apply(k, [g + 1, 0].concat(j)), g += j.length));
        return k
    });
    var B = a.event.add, C = a.event.remove, D = a.event.trigger, E = a.fn.toggle, F = a.fn.live, G = a.fn.die, H = a.fn.load, I = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess", J = new RegExp("\\b(?:" + I + ")\\b"), K = /(?:^|\s)hover(\.\S+|)\b/, L = function(b) {
        return "string" != typeof b || a.event.special.hover ? b : (K.test(b) && d("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), b && b.replace(K, "mouseenter$1 mouseleave$1"))
    };
    a.event.props && "attrChange" !== a.event.props[0] && a.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), a.event.dispatch && e(a.event, "handle", a.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), a.event.add = function(a, b, c, e, f) {
        a !== document && J.test(b) && d("AJAX events should be attached to document: " + b), B.call(this, a, L(b || ""), c, e, f)
    }, a.event.remove = function(a, b, c, d, e) {
        C.call(this, a, L(b) || "", c, d, e)
    }, a.each(["load", "unload", "error"], function(b, c) {
        a.fn[c] = function() {
            var a = Array.prototype.slice.call(arguments, 0);
            return "load" === c && "string" == typeof a[0] ? H.apply(this, a) : (d("jQuery.fn." + c + "() is deprecated"), a.splice(0, 0, c), arguments.length ? this.bind.apply(this, a) : (this.triggerHandler.apply(this, a), this))
        }
    }), a.fn.toggle = function(b, c) {
        if (!a.isFunction(b) || !a.isFunction(c))return E.apply(this, arguments);
        d("jQuery.fn.toggle(handler, handler...) is deprecated");
        var e = arguments, f = b.guid || a.guid++, g = 0, h = function(c) {
            var d = (a._data(this, "lastToggle" + b.guid) || 0) % g;
            return a._data(this, "lastToggle" + b.guid, d + 1), c.preventDefault(), e[d].apply(this, arguments) || !1
        };
        for (h.guid = f; g < e.length;)e[g++].guid = f;
        return this.click(h)
    }, a.fn.live = function(b, c, e) {
        return d("jQuery.fn.live() is deprecated"), F ? F.apply(this, arguments) : (a(this.context).on(b, this.selector, c, e), this)
    }, a.fn.die = function(b, c) {
        return d("jQuery.fn.die() is deprecated"), G ? G.apply(this, arguments) : (a(this.context).off(b, this.selector || "**", c), this)
    }, a.event.trigger = function(a, b, c, e) {
        return c || J.test(a) || d("Global events are undocumented and deprecated"), D.call(this, a, b, c || document, e)
    }, a.each(I.split("|"), function(b, c) {
        a.event.special[c] = {
            setup       : function() {
                var b = this;
                return b !== document && (a.event.add(document, c + "." + a.guid, function() {
                    a.event.trigger(c, Array.prototype.slice.call(arguments, 1), b, !0)
                }), a._data(this, c, a.guid++)), !1
            }, teardown : function() {
                return this !== document && a.event.remove(document, c + "." + a._data(this, c)), !1
            }
        }
    }), a.event.special.ready = {
        setup : function() {
            this === document && d("'ready' event is deprecated")
        }
    };
    var M = a.fn.andSelf || a.fn.addBack, N = a.fn.find;
    if (a.fn.andSelf = function() {
            return d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), M.apply(this, arguments)
        }, a.fn.find = function(a) {
            var b = N.apply(this, arguments);
            return b.context = this.context, b.selector = this.selector ? this.selector + " " + a : a, b
        }, a.Callbacks) {
        var O = a.Deferred, P = [["resolve", "done", a.Callbacks("once memory"), a.Callbacks("once memory"), "resolved"], ["reject", "fail", a.Callbacks("once memory"), a.Callbacks("once memory"), "rejected"], ["notify", "progress", a.Callbacks("memory"), a.Callbacks("memory")]];
        a.Deferred = function(b) {
            var c = O(), e = c.promise();
            return c.pipe = e.pipe = function() {
                var b = arguments;
                return d("deferred.pipe() is deprecated"), a.Deferred(function(d) {
                    a.each(P, function(f, g) {
                        var h = a.isFunction(b[f]) && b[f];
                        c[g[1]](function() {
                            var b = h && h.apply(this, arguments);
                            b && a.isFunction(b.promise) ? b.promise().done(d.resolve).fail(d.reject).progress(d.notify) : d[g[0] + "With"](this === e ? d.promise() : this, h ? [b] : arguments)
                        })
                    }), b = null
                }).promise()
            }, c.isResolved = function() {
                return d("deferred.isResolved is deprecated"), "resolved" === c.state()
            }, c.isRejected = function() {
                return d("deferred.isRejected is deprecated"), "rejected" === c.state()
            }, b && b.call(c, c), c
        }
    }
}(jQuery, window);

/*! pace 1.0.2 */
(function() {
    var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X = [].slice, Y = {}.hasOwnProperty, Z = function(a, b) {
        function c() {
            this.constructor = a
        }

        for (var d in b)Y.call(b, d) && (a[d] = b[d]);
        return c.prototype = b.prototype, a.prototype = new c, a.__super__ = b.prototype, a
    }, $ = [].indexOf || function(a) {
            for (var b = 0, c = this.length; c > b; b++)if (b in this && this[b] === a)return b;
            return -1
        };
    for (u = {
        catchupTime           : 100,
        initialRate           : .03,
        minTime               : 250,
        ghostTime             : 100,
        maxProgressPerFrame   : 20,
        easeFactor            : 1.25,
        startOnPageLoad       : !0,
        restartOnPushState    : !0,
        restartOnRequestAfter : 500,
        target                : "body",
        elements              : {checkInterval : 100, selectors : ["body"]},
        eventLag              : {minSamples : 10, sampleCount : 3, lagThreshold : 3},
        ajax                  : {trackMethods : ["GET"], trackWebSockets : !0, ignoreURLs : []}
    }, C = function() {
        var a;
        return null != (a = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance.now() : void 0) ? a : +new Date
    }, E = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame, t = window.cancelAnimationFrame || window.mozCancelAnimationFrame, null == E && (E = function(a) {
        return setTimeout(a, 50)
    }, t = function(a) {
        return clearTimeout(a)
    }), G = function(a) {
        var b, c;
        return b = C(), (c = function() {
            var d;
            return d = C() - b, d >= 33 ? (b = C(), a(d, function() {
                    return E(c)
                })) : setTimeout(c, 33 - d)
        })()
    }, F = function() {
        var a, b, c;
        return c = arguments[0], b = arguments[1], a = 3 <= arguments.length ? X.call(arguments, 2) : [], "function" == typeof c[b] ? c[b].apply(c, a) : c[b]
    }, v = function() {
        var a, b, c, d, e, f, g;
        for (b = arguments[0], d = 2 <= arguments.length ? X.call(arguments, 1) : [], f = 0, g = d.length; g > f; f++)if (c = d[f])for (a in c)Y.call(c, a) && (e = c[a], null != b[a] && "object" == typeof b[a] && null != e && "object" == typeof e ? v(b[a], e) : b[a] = e);
        return b
    }, q = function(a) {
        var b, c, d, e, f;
        for (c = b = 0, e = 0, f = a.length; f > e; e++)d = a[e], c += Math.abs(d), b++;
        return c / b
    }, x = function(a, b) {
        var c, d, e;
        if (null == a && (a = "options"), null == b && (b = !0), e = document.querySelector("[data-pace-" + a + "]")) {
            if (c = e.getAttribute("data-pace-" + a), !b)return c;
            try {
                return JSON.parse(c)
            } catch (f) {
                return d = f, "undefined" != typeof console && null !== console ? console.error("Error parsing inline pace options", d) : void 0
            }
        }
    }, g = function() {
        function a() {
        }

        return a.prototype.on = function(a, b, c, d) {
            var e;
            return null == d && (d = !1), null == this.bindings && (this.bindings = {}), null == (e = this.bindings)[a] && (e[a] = []), this.bindings[a].push({
                handler : b,
                ctx     : c,
                once    : d
            })
        }, a.prototype.once = function(a, b, c) {
            return this.on(a, b, c, !0)
        }, a.prototype.off = function(a, b) {
            var c, d, e;
            if (null != (null != (d = this.bindings) ? d[a] : void 0)) {
                if (null == b)return delete this.bindings[a];
                for (c = 0, e = []; c < this.bindings[a].length;)this.bindings[a][c].handler === b ? e.push(this.bindings[a].splice(c, 1)) : e.push(c++);
                return e
            }
        }, a.prototype.trigger = function() {
            var a, b, c, d, e, f, g, h, i;
            if (c = arguments[0], a = 2 <= arguments.length ? X.call(arguments, 1) : [], null != (g = this.bindings) ? g[c] : void 0) {
                for (e = 0, i = []; e < this.bindings[c].length;)h = this.bindings[c][e], d = h.handler, b = h.ctx, f = h.once, d.apply(null != b ? b : this, a), f ? i.push(this.bindings[c].splice(e, 1)) : i.push(e++);
                return i
            }
        }, a
    }(), j = window.Pace || {}, window.Pace = j, v(j, g.prototype), D = j.options = v({}, u, window.paceOptions, x()), U = ["ajax", "document", "eventLag", "elements"], Q = 0, S = U.length; S > Q; Q++)K = U[Q], D[K] === !0 && (D[K] = u[K]);
    i = function(a) {
        function b() {
            return V = b.__super__.constructor.apply(this, arguments)
        }

        return Z(b, a), b
    }(Error), b = function() {
        function a() {
            this.progress = 0
        }

        return a.prototype.getElement = function() {
            var a;
            if (null == this.el) {
                if (a = document.querySelector(D.target), !a)throw new i;
                this.el = document.createElement("div"), this.el.className = "pace pace-active", document.body.className = document.body.className.replace(/pace-done/g, ""), document.body.className += " pace-running", this.el.innerHTML = '<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>', null != a.firstChild ? a.insertBefore(this.el, a.firstChild) : a.appendChild(this.el)
            }
            return this.el
        }, a.prototype.finish = function() {
            var a;
            return a = this.getElement(), a.className = a.className.replace("pace-active", ""), a.className += " pace-inactive", document.body.className = document.body.className.replace("pace-running", ""), document.body.className += " pace-done"
        }, a.prototype.update = function(a) {
            return this.progress = a, this.render()
        }, a.prototype.destroy = function() {
            try {
                this.getElement().parentNode.removeChild(this.getElement())
            } catch (a) {
                i = a
            }
            return this.el = void 0
        }, a.prototype.render = function() {
            var a, b, c, d, e, f, g;
            if (null == document.querySelector(D.target))return !1;
            for (a = this.getElement(), d = this.progress + "%", g = ["left"], e = 0, f = g.length; f > e; e++)b = g[e], a.children[0].style[b] = d;
            return (!this.lastRenderedProgress || this.lastRenderedProgress | 0 !== this.progress | 0) && (a.children[0].setAttribute("data-progress-text", "" + (0 | this.progress) + "%"), this.progress >= 100 ? c = "99" : (c = this.progress < 10 ? "0" : "", c += 0 | this.progress), a.children[0].setAttribute("data-progress", "" + c)), this.lastRenderedProgress = this.progress
        }, a.prototype.done = function() {
            return this.progress >= 100
        }, a
    }(), h = function() {
        function a() {
            this.bindings = {}
        }

        return a.prototype.trigger = function(a, b) {
            var c, d, e, f, g;
            if (null != this.bindings[a]) {
                for (f = this.bindings[a], g = [], d = 0, e = f.length; e > d; d++)c = f[d], g.push(c.call(this, b));
                return g
            }
        }, a.prototype.on = function(a, b) {
            var c;
            return null == (c = this.bindings)[a] && (c[a] = []), this.bindings[a].push(b)
        }, a
    }(), P = window.XMLHttpRequest, O = window.XDomainRequest, N = window.WebSocket, w = function(a, b) {
        var c, d, e;
        e = [];
        for (d in b.prototype)try {
            null == a[d] && "function" != typeof b[d] ? "function" == typeof Object.defineProperty ? e.push(Object.defineProperty(a, d, {
                        get          : function() {
                            return b.prototype[d]
                        },
                        configurable : !0,
                        enumerable   : !0
                    })) : e.push(a[d] = b.prototype[d]) : e.push(void 0)
        } catch (f) {
            c = f
        }
        return e
    }, A = [], j.ignore = function() {
        var a, b, c;
        return b = arguments[0], a = 2 <= arguments.length ? X.call(arguments, 1) : [], A.unshift("ignore"), c = b.apply(null, a), A.shift(), c
    }, j.track = function() {
        var a, b, c;
        return b = arguments[0], a = 2 <= arguments.length ? X.call(arguments, 1) : [], A.unshift("track"), c = b.apply(null, a), A.shift(), c
    }, J = function(a) {
        var b;
        if (null == a && (a = "GET"), "track" === A[0])return "force";
        if (!A.length && D.ajax) {
            if ("socket" === a && D.ajax.trackWebSockets)return !0;
            if (b = a.toUpperCase(), $.call(D.ajax.trackMethods, b) >= 0)return !0
        }
        return !1
    }, k = function(a) {
        function b() {
            var a, c = this;
            b.__super__.constructor.apply(this, arguments), a = function(a) {
                var b;
                return b = a.open, a.open = function(d, e, f) {
                    return J(d) && c.trigger("request", {type : d, url : e, request : a}), b.apply(a, arguments)
                }
            }, window.XMLHttpRequest = function(b) {
                var c;
                return c = new P(b), a(c), c
            };
            try {
                w(window.XMLHttpRequest, P)
            } catch (d) {
            }
            if (null != O) {
                window.XDomainRequest = function() {
                    var b;
                    return b = new O, a(b), b
                };
                try {
                    w(window.XDomainRequest, O)
                } catch (d) {
                }
            }
            if (null != N && D.ajax.trackWebSockets) {
                window.WebSocket = function(a, b) {
                    var d;
                    return d = null != b ? new N(a, b) : new N(a), J("socket") && c.trigger("request", {
                        type      : "socket",
                        url       : a,
                        protocols : b,
                        request   : d
                    }), d
                };
                try {
                    w(window.WebSocket, N)
                } catch (d) {
                }
            }
        }

        return Z(b, a), b
    }(h), R = null, y = function() {
        return null == R && (R = new k), R
    }, I = function(a) {
        var b, c, d, e;
        for (e = D.ajax.ignoreURLs, c = 0, d = e.length; d > c; c++)if (b = e[c], "string" == typeof b) {
            if (-1 !== a.indexOf(b))return !0
        } else if (b.test(a))return !0;
        return !1
    }, y().on("request", function(b) {
        var c, d, e, f, g;
        return f = b.type, e = b.request, g = b.url, I(g) ? void 0 : j.running || D.restartOnRequestAfter === !1 && "force" !== J(f) ? void 0 : (d = arguments, c = D.restartOnRequestAfter || 0, "boolean" == typeof c && (c = 0), setTimeout(function() {
                    var b, c, g, h, i, k;
                    if (b = "socket" === f ? e.readyState < 2 : 0 < (h = e.readyState) && 4 > h) {
                        for (j.restart(), i = j.sources, k = [], c = 0, g = i.length; g > c; c++) {
                            if (K = i[c], K instanceof a) {
                                K.watch.apply(K, d);
                                break
                            }
                            k.push(void 0)
                        }
                        return k
                    }
                }, c))
    }), a = function() {
        function a() {
            var a = this;
            this.elements = [], y().on("request", function() {
                return a.watch.apply(a, arguments)
            })
        }

        return a.prototype.watch = function(a) {
            var b, c, d, e;
            return d = a.type, b = a.request, e = a.url, I(e) ? void 0 : (c = "socket" === d ? new n(b) : new o(b), this.elements.push(c))
        }, a
    }(), o = function() {
        function a(a) {
            var b, c, d, e, f, g, h = this;
            if (this.progress = 0, null != window.ProgressEvent)for (c = null, a.addEventListener("progress", function(a) {
                return a.lengthComputable ? h.progress = 100 * a.loaded / a.total : h.progress = h.progress + (100 - h.progress) / 2
            }, !1), g = ["load", "abort", "timeout", "error"], d = 0, e = g.length; e > d; d++)b = g[d], a.addEventListener(b, function() {
                return h.progress = 100
            }, !1); else f = a.onreadystatechange, a.onreadystatechange = function() {
                var b;
                return 0 === (b = a.readyState) || 4 === b ? h.progress = 100 : 3 === a.readyState && (h.progress = 50), "function" == typeof f ? f.apply(null, arguments) : void 0
            }
        }

        return a
    }(), n = function() {
        function a(a) {
            var b, c, d, e, f = this;
            for (this.progress = 0, e = ["error", "open"], c = 0, d = e.length; d > c; c++)b = e[c], a.addEventListener(b, function() {
                return f.progress = 100
            }, !1)
        }

        return a
    }(), d = function() {
        function a(a) {
            var b, c, d, f;
            for (null == a && (a = {}), this.elements = [], null == a.selectors && (a.selectors = []), f = a.selectors, c = 0, d = f.length; d > c; c++)b = f[c], this.elements.push(new e(b))
        }

        return a
    }(), e = function() {
        function a(a) {
            this.selector = a, this.progress = 0, this.check()
        }

        return a.prototype.check = function() {
            var a = this;
            return document.querySelector(this.selector) ? this.done() : setTimeout(function() {
                    return a.check()
                }, D.elements.checkInterval)
        }, a.prototype.done = function() {
            return this.progress = 100
        }, a
    }(), c = function() {
        function a() {
            var a, b, c = this;
            this.progress = null != (b = this.states[document.readyState]) ? b : 100, a = document.onreadystatechange, document.onreadystatechange = function() {
                return null != c.states[document.readyState] && (c.progress = c.states[document.readyState]), "function" == typeof a ? a.apply(null, arguments) : void 0
            }
        }

        return a.prototype.states = {loading : 0, interactive : 50, complete : 100}, a
    }(), f = function() {
        function a() {
            var a, b, c, d, e, f = this;
            this.progress = 0, a = 0, e = [], d = 0, c = C(), b = setInterval(function() {
                var g;
                return g = C() - c - 50, c = C(), e.push(g), e.length > D.eventLag.sampleCount && e.shift(), a = q(e), ++d >= D.eventLag.minSamples && a < D.eventLag.lagThreshold ? (f.progress = 100, clearInterval(b)) : f.progress = 100 * (3 / (a + 3))
            }, 50)
        }

        return a
    }(), m = function() {
        function a(a) {
            this.source = a, this.last = this.sinceLastUpdate = 0, this.rate = D.initialRate, this.catchup = 0, this.progress = this.lastProgress = 0, null != this.source && (this.progress = F(this.source, "progress"))
        }

        return a.prototype.tick = function(a, b) {
            var c;
            return null == b && (b = F(this.source, "progress")), b >= 100 && (this.done = !0), b === this.last ? this.sinceLastUpdate += a : (this.sinceLastUpdate && (this.rate = (b - this.last) / this.sinceLastUpdate), this.catchup = (b - this.progress) / D.catchupTime, this.sinceLastUpdate = 0, this.last = b), b > this.progress && (this.progress += this.catchup * a), c = 1 - Math.pow(this.progress / 100, D.easeFactor), this.progress += c * this.rate * a, this.progress = Math.min(this.lastProgress + D.maxProgressPerFrame, this.progress), this.progress = Math.max(0, this.progress), this.progress = Math.min(100, this.progress), this.lastProgress = this.progress, this.progress
        }, a
    }(), L = null, H = null, r = null, M = null, p = null, s = null, j.running = !1, z = function() {
        return D.restartOnPushState ? j.restart() : void 0
    }, null != window.history.pushState && (T = window.history.pushState, window.history.pushState = function() {
        return z(), T.apply(window.history, arguments)
    }), null != window.history.replaceState && (W = window.history.replaceState, window.history.replaceState = function() {
        return z(), W.apply(window.history, arguments)
    }), l = {ajax : a, elements : d, document : c, eventLag : f}, (B = function() {
        var a, c, d, e, f, g, h, i;
        for (j.sources = L = [], g = ["ajax", "elements", "document", "eventLag"], c = 0, e = g.length; e > c; c++)a = g[c], D[a] !== !1 && L.push(new l[a](D[a]));
        for (i = null != (h = D.extraSources) ? h : [], d = 0, f = i.length; f > d; d++)K = i[d], L.push(new K(D));
        return j.bar = r = new b, H = [], M = new m
    })(), j.stop = function() {
        return j.trigger("stop"), j.running = !1, r.destroy(), s = !0, null != p && ("function" == typeof t && t(p), p = null), B()
    }, j.restart = function() {
        return j.trigger("restart"), j.stop(), j.start()
    }, j.go = function() {
        var a;
        return j.running = !0, r.render(), a = C(), s = !1, p = G(function(b, c) {
            var d, e, f, g, h, i, k, l, n, o, p, q, t, u, v, w;
            for (l = 100 - r.progress, e = p = 0, f = !0, i = q = 0, u = L.length; u > q; i = ++q)for (K = L[i], o = null != H[i] ? H[i] : H[i] = [], h = null != (w = K.elements) ? w : [K], k = t = 0, v = h.length; v > t; k = ++t)g = h[k], n = null != o[k] ? o[k] : o[k] = new m(g), f &= n.done, n.done || (e++, p += n.tick(b));
            return d = p / e, r.update(M.tick(b, d)), r.done() || f || s ? (r.update(100), j.trigger("done"), setTimeout(function() {
                    return r.finish(), j.running = !1, j.trigger("hide")
                }, Math.max(D.ghostTime, Math.max(D.minTime - (C() - a), 0)))) : c()
        })
    }, j.start = function(a) {
        v(D, a), j.running = !0;
        try {
            r.render()
        } catch (b) {
            i = b
        }
        return document.querySelector(".pace") ? (j.trigger("start"), j.go()) : setTimeout(j.start, 50)
    }, "function" == typeof define && define.amd ? define(["pace"], function() {
            return j
        }) : "object" == typeof exports ? module.exports = j : D.startOnPageLoad && j.start()
}).call(this);

/*!
 * jQuery Form Plugin
 * version: 3.51.0-2014.06.20
 * Requires jQuery v1.5 or later
 * Copyright (c) 2014 M. Alsup
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Project repository: https://github.com/malsup/form
 * Dual licensed under the MIT and GPL licenses.
 * https://github.com/malsup/form#copyright-and-license
 */
!function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("undefined" != typeof jQuery ? jQuery : window.Zepto)
}(function(e) {
    "use strict";
    function t(t) {
        var r = t.data;
        t.isDefaultPrevented() || (t.preventDefault(), e(t.target).ajaxSubmit(r))
    }

    function r(t) {
        var r = t.target, a = e(r);
        if (!a.is("[type=submit],[type=image]")) {
            var n = a.closest("[type=submit]");
            if (0 === n.length)return;
            r = n[0]
        }
        var i = this;
        if (i.clk = r, "image" == r.type)if (void 0 !== t.offsetX) i.clk_x = t.offsetX, i.clk_y = t.offsetY; else if ("function" == typeof e.fn.offset) {
            var o = a.offset();
            i.clk_x = t.pageX - o.left, i.clk_y = t.pageY - o.top
        } else i.clk_x = t.pageX - r.offsetLeft, i.clk_y = t.pageY - r.offsetTop;
        setTimeout(function() {
            i.clk = i.clk_x = i.clk_y = null
        }, 100)
    }

    function a() {
        if (e.fn.ajaxSubmit.debug) {
            var t = "[jquery.form] " + Array.prototype.join.call(arguments, "");
            window.console && window.console.log ? window.console.log(t) : window.opera && window.opera.postError && window.opera.postError(t)
        }
    }

    var n = {};
    n.fileapi = void 0 !== e("<input type='file'/>").get(0).files, n.formdata = void 0 !== window.FormData;
    var i = !!e.fn.prop;
    e.fn.attr2 = function() {
        if (!i)return this.attr.apply(this, arguments);
        var e = this.prop.apply(this, arguments);
        return e && e.jquery || "string" == typeof e ? e : this.attr.apply(this, arguments)
    }, e.fn.ajaxSubmit = function(t) {
        function r(r) {
            var a, n, i = e.param(r, t.traditional).split("&"), o = i.length, s = [];
            for (a = 0; o > a; a++)i[a] = i[a].replace(/\+/g, " "), n = i[a].split("="), s.push([decodeURIComponent(n[0]), decodeURIComponent(n[1])]);
            return s
        }

        function o(a) {
            for (var n = new FormData, i = 0; i < a.length; i++)n.append(a[i].name, a[i].value);
            if (t.extraData) {
                var o = r(t.extraData);
                for (i = 0; i < o.length; i++)o[i] && n.append(o[i][0], o[i][1])
            }
            t.data = null;
            var s = e.extend(!0, {}, e.ajaxSettings, t, {
                contentType : !1,
                processData : !1,
                cache       : !1,
                type        : u || "POST"
            });
            t.uploadProgress && (s.xhr = function() {
                var r = e.ajaxSettings.xhr();
                return r.upload && r.upload.addEventListener("progress", function(e) {
                    var r = 0, a = e.loaded || e.position, n = e.total;
                    e.lengthComputable && (r = Math.ceil(a / n * 100)), t.uploadProgress(e, a, n, r)
                }, !1), r
            }), s.data = null;
            var c = s.beforeSend;
            return s.beforeSend = function(e, r) {
                r.data = t.formData ? t.formData : n, c && c.call(this, e, r)
            }, e.ajax(s)
        }

        function s(r) {
            function n(e) {
                var t = null;
                try {
                    e.contentWindow && (t = e.contentWindow.document)
                } catch (r) {
                    a("cannot get iframe.contentWindow document: " + r)
                }
                if (t)return t;
                try {
                    t = e.contentDocument ? e.contentDocument : e.document
                } catch (r) {
                    a("cannot get iframe.contentDocument: " + r), t = e.document
                }
                return t
            }

            function o() {
                function t() {
                    try {
                        var e = n(g).readyState;
                        a("state = " + e), e && "uninitialized" == e.toLowerCase() && setTimeout(t, 50)
                    } catch (r) {
                        a("Server abort: ", r, " (", r.name, ")"), s(k), j && clearTimeout(j), j = void 0
                    }
                }

                var r = f.attr2("target"), i = f.attr2("action"), o = "multipart/form-data", c = f.attr("enctype") || f.attr("encoding") || o;
                w.setAttribute("target", p), (!u || /post/i.test(u)) && w.setAttribute("method", "POST"), i != m.url && w.setAttribute("action", m.url), m.skipEncodingOverride || u && !/post/i.test(u) || f.attr({
                    encoding : "multipart/form-data",
                    enctype  : "multipart/form-data"
                }), m.timeout && (j = setTimeout(function() {
                    T = !0, s(D)
                }, m.timeout));
                var l = [];
                try {
                    if (m.extraData)for (var d in m.extraData)m.extraData.hasOwnProperty(d) && l.push(e.isPlainObject(m.extraData[d]) && m.extraData[d].hasOwnProperty("name") && m.extraData[d].hasOwnProperty("value") ? e('<input type="hidden" name="' + m.extraData[d].name + '">').val(m.extraData[d].value).appendTo(w)[0] : e('<input type="hidden" name="' + d + '">').val(m.extraData[d]).appendTo(w)[0]);
                    m.iframeTarget || v.appendTo("body"), g.attachEvent ? g.attachEvent("onload", s) : g.addEventListener("load", s, !1), setTimeout(t, 15);
                    try {
                        w.submit()
                    } catch (h) {
                        var x = document.createElement("form").submit;
                        x.apply(w)
                    }
                } finally {
                    w.setAttribute("action", i), w.setAttribute("enctype", c), r ? w.setAttribute("target", r) : f.removeAttr("target"), e(l).remove()
                }
            }

            function s(t) {
                if (!x.aborted && !F) {
                    if (M = n(g), M || (a("cannot access response document"), t = k), t === D && x)return x.abort("timeout"), void S.reject(x, "timeout");
                    if (t == k && x)return x.abort("server abort"), void S.reject(x, "error", "server abort");
                    if (M && M.location.href != m.iframeSrc || T) {
                        g.detachEvent ? g.detachEvent("onload", s) : g.removeEventListener("load", s, !1);
                        var r, i = "success";
                        try {
                            if (T)throw"timeout";
                            var o = "xml" == m.dataType || M.XMLDocument || e.isXMLDoc(M);
                            if (a("isXml=" + o), !o && window.opera && (null === M.body || !M.body.innerHTML) && --O)return a("requeing onLoad callback, DOM not available"), void setTimeout(s, 250);
                            var u = M.body ? M.body : M.documentElement;
                            x.responseText = u ? u.innerHTML : null, x.responseXML = M.XMLDocument ? M.XMLDocument : M, o && (m.dataType = "xml"), x.getResponseHeader = function(e) {
                                var t = {"content-type" : m.dataType};
                                return t[e.toLowerCase()]
                            }, u && (x.status = Number(u.getAttribute("status")) || x.status, x.statusText = u.getAttribute("statusText") || x.statusText);
                            var c = (m.dataType || "").toLowerCase(), l = /(json|script|text)/.test(c);
                            if (l || m.textarea) {
                                var f = M.getElementsByTagName("textarea")[0];
                                if (f) x.responseText = f.value, x.status = Number(f.getAttribute("status")) || x.status, x.statusText = f.getAttribute("statusText") || x.statusText; else if (l) {
                                    var p = M.getElementsByTagName("pre")[0], h = M.getElementsByTagName("body")[0];
                                    p ? x.responseText = p.textContent ? p.textContent : p.innerText : h && (x.responseText = h.textContent ? h.textContent : h.innerText)
                                }
                            } else"xml" == c && !x.responseXML && x.responseText && (x.responseXML = X(x.responseText));
                            try {
                                E = _(x, c, m)
                            } catch (y) {
                                i = "parsererror", x.error = r = y || i
                            }
                        } catch (y) {
                            a("error caught: ", y), i = "error", x.error = r = y || i
                        }
                        x.aborted && (a("upload aborted"), i = null), x.status && (i = x.status >= 200 && x.status < 300 || 304 === x.status ? "success" : "error"), "success" === i ? (m.success && m.success.call(m.context, E, "success", x), S.resolve(x.responseText, "success", x), d && e.event.trigger("ajaxSuccess", [x, m])) : i && (void 0 === r && (r = x.statusText), m.error && m.error.call(m.context, x, i, r), S.reject(x, "error", r), d && e.event.trigger("ajaxError", [x, m, r])), d && e.event.trigger("ajaxComplete", [x, m]), d && !--e.active && e.event.trigger("ajaxStop"), m.complete && m.complete.call(m.context, x, i), F = !0, m.timeout && clearTimeout(j), setTimeout(function() {
                            m.iframeTarget ? v.attr("src", m.iframeSrc) : v.remove(), x.responseXML = null
                        }, 100)
                    }
                }
            }

            var c, l, m, d, p, v, g, x, y, b, T, j, w = f[0], S = e.Deferred();
            if (S.abort = function(e) {
                    x.abort(e)
                }, r)for (l = 0; l < h.length; l++)c = e(h[l]), i ? c.prop("disabled", !1) : c.removeAttr("disabled");
            if (m = e.extend(!0, {}, e.ajaxSettings, t), m.context = m.context || m, p = "jqFormIO" + (new Date).getTime(), m.iframeTarget ? (v = e(m.iframeTarget), b = v.attr2("name"), b ? p = b : v.attr2("name", p)) : (v = e('<iframe name="' + p + '" src="' + m.iframeSrc + '" />'), v.css({
                        position : "absolute",
                        top      : "-1000px",
                        left     : "-1000px"
                    })), g = v[0], x = {
                    aborted               : 0,
                    responseText          : null,
                    responseXML           : null,
                    status                : 0,
                    statusText            : "n/a",
                    getAllResponseHeaders : function() {
                    },
                    getResponseHeader     : function() {
                    },
                    setRequestHeader      : function() {
                    },
                    abort                 : function(t) {
                        var r = "timeout" === t ? "timeout" : "aborted";
                        a("aborting upload... " + r), this.aborted = 1;
                        try {
                            g.contentWindow.document.execCommand && g.contentWindow.document.execCommand("Stop")
                        } catch (n) {
                        }
                        v.attr("src", m.iframeSrc), x.error = r, m.error && m.error.call(m.context, x, r, t), d && e.event.trigger("ajaxError", [x, m, r]), m.complete && m.complete.call(m.context, x, r)
                    }
                }, d = m.global, d && 0 === e.active++ && e.event.trigger("ajaxStart"), d && e.event.trigger("ajaxSend", [x, m]), m.beforeSend && m.beforeSend.call(m.context, x, m) === !1)return m.global && e.active--, S.reject(), S;
            if (x.aborted)return S.reject(), S;
            y = w.clk, y && (b = y.name, b && !y.disabled && (m.extraData = m.extraData || {}, m.extraData[b] = y.value, "image" == y.type && (m.extraData[b + ".x"] = w.clk_x, m.extraData[b + ".y"] = w.clk_y)));
            var D = 1, k = 2, A = e("meta[name=csrf-token]").attr("content"), L = e("meta[name=csrf-param]").attr("content");
            L && A && (m.extraData = m.extraData || {}, m.extraData[L] = A), m.forceSync ? o() : setTimeout(o, 10);
            var E, M, F, O = 50, X = e.parseXML || function(e, t) {
                    return window.ActiveXObject ? (t = new ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e)) : t = (new DOMParser).parseFromString(e, "text/xml"), t && t.documentElement && "parsererror" != t.documentElement.nodeName ? t : null
                }, C = e.parseJSON || function(e) {
                    return window.eval("(" + e + ")")
                }, _ = function(t, r, a) {
                var n = t.getResponseHeader("content-type") || "", i = "xml" === r || !r && n.indexOf("xml") >= 0, o = i ? t.responseXML : t.responseText;
                return i && "parsererror" === o.documentElement.nodeName && e.error && e.error("parsererror"), a && a.dataFilter && (o = a.dataFilter(o, r)), "string" == typeof o && ("json" === r || !r && n.indexOf("json") >= 0 ? o = C(o) : ("script" === r || !r && n.indexOf("javascript") >= 0) && e.globalEval(o)), o
            };
            return S
        }

        if (!this.length)return a("ajaxSubmit: skipping submit process - no element selected"), this;
        var u, c, l, f = this;
        "function" == typeof t ? t = {success : t} : void 0 === t && (t = {}), u = t.type || this.attr2("method"), c = t.url || this.attr2("action"), l = "string" == typeof c ? e.trim(c) : "", l = l || window.location.href || "", l && (l = (l.match(/^([^#]+)/) || [])[1]), t = e.extend(!0, {
            url       : l,
            success   : e.ajaxSettings.success,
            type      : u || e.ajaxSettings.type,
            iframeSrc : /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank"
        }, t);
        var m = {};
        if (this.trigger("form-pre-serialize", [this, t, m]), m.veto)return a("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this;
        if (t.beforeSerialize && t.beforeSerialize(this, t) === !1)return a("ajaxSubmit: submit aborted via beforeSerialize callback"), this;
        var d = t.traditional;
        void 0 === d && (d = e.ajaxSettings.traditional);
        var p, h = [], v = this.formToArray(t.semantic, h);
        if (t.data && (t.extraData = t.data, p = e.param(t.data, d)), t.beforeSubmit && t.beforeSubmit(v, this, t) === !1)return a("ajaxSubmit: submit aborted via beforeSubmit callback"), this;
        if (this.trigger("form-submit-validate", [v, this, t, m]), m.veto)return a("ajaxSubmit: submit vetoed via form-submit-validate trigger"), this;
        var g = e.param(v, d);
        p && (g = g ? g + "&" + p : p), "GET" == t.type.toUpperCase() ? (t.url += (t.url.indexOf("?") >= 0 ? "&" : "?") + g, t.data = null) : t.data = g;
        var x = [];
        if (t.resetForm && x.push(function() {
                f.resetForm()
            }), t.clearForm && x.push(function() {
                f.clearForm(t.includeHidden)
            }), !t.dataType && t.target) {
            var y = t.success || function() {
                };
            x.push(function(r) {
                var a = t.replaceTarget ? "replaceWith" : "html";
                e(t.target)[a](r).each(y, arguments)
            })
        } else t.success && x.push(t.success);
        if (t.success = function(e, r, a) {
                for (var n = t.context || this, i = 0, o = x.length; o > i; i++)x[i].apply(n, [e, r, a || f, f])
            }, t.error) {
            var b = t.error;
            t.error = function(e, r, a) {
                var n = t.context || this;
                b.apply(n, [e, r, a, f])
            }
        }
        if (t.complete) {
            var T = t.complete;
            t.complete = function(e, r) {
                var a = t.context || this;
                T.apply(a, [e, r, f])
            }
        }
        var j = e("input[type=file]:enabled", this).filter(function() {
            return "" !== e(this).val()
        }), w = j.length > 0, S = "multipart/form-data", D = f.attr("enctype") == S || f.attr("encoding") == S, k = n.fileapi && n.formdata;
        a("fileAPI :" + k);
        var A, L = (w || D) && !k;
        t.iframe !== !1 && (t.iframe || L) ? t.closeKeepAlive ? e.get(t.closeKeepAlive, function() {
                    A = s(v)
                }) : A = s(v) : A = (w || D) && k ? o(v) : e.ajax(t), f.removeData("jqxhr").data("jqxhr", A);
        for (var E = 0; E < h.length; E++)h[E] = null;
        return this.trigger("form-submit-notify", [this, t]), this
    }, e.fn.ajaxForm = function(n) {
        if (n = n || {}, n.delegation = n.delegation && e.isFunction(e.fn.on), !n.delegation && 0 === this.length) {
            var i = {s : this.selector, c : this.context};
            return !e.isReady && i.s ? (a("DOM not ready, queuing ajaxForm"), e(function() {
                    e(i.s, i.c).ajaxForm(n)
                }), this) : (a("terminating; zero elements found by selector" + (e.isReady ? "" : " (DOM not ready)")), this)
        }
        return n.delegation ? (e(document).off("submit.form-plugin", this.selector, t).off("click.form-plugin", this.selector, r).on("submit.form-plugin", this.selector, n, t).on("click.form-plugin", this.selector, n, r), this) : this.ajaxFormUnbind().bind("submit.form-plugin", n, t).bind("click.form-plugin", n, r)
    }, e.fn.ajaxFormUnbind = function() {
        return this.unbind("submit.form-plugin click.form-plugin")
    }, e.fn.formToArray = function(t, r) {
        var a = [];
        if (0 === this.length)return a;
        var i, o = this[0], s = this.attr("id"), u = t ? o.getElementsByTagName("*") : o.elements;
        if (u && !/MSIE [678]/.test(navigator.userAgent) && (u = e(u).get()), s && (i = e(':input[form="' + s + '"]').get(), i.length && (u = (u || []).concat(i))), !u || !u.length)return a;
        var c, l, f, m, d, p, h;
        for (c = 0, p = u.length; p > c; c++)if (d = u[c], f = d.name, f && !d.disabled)if (t && o.clk && "image" == d.type) o.clk == d && (a.push({
            name  : f,
            value : e(d).val(),
            type  : d.type
        }), a.push({name : f + ".x", value : o.clk_x}, {
            name  : f + ".y",
            value : o.clk_y
        })); else if (m = e.fieldValue(d, !0), m && m.constructor == Array)for (r && r.push(d), l = 0, h = m.length; h > l; l++)a.push({
            name  : f,
            value : m[l]
        }); else if (n.fileapi && "file" == d.type) {
            r && r.push(d);
            var v = d.files;
            if (v.length)for (l = 0; l < v.length; l++)a.push({
                name  : f,
                value : v[l],
                type  : d.type
            }); else a.push({name : f, value : "", type : d.type})
        } else null !== m && "undefined" != typeof m && (r && r.push(d), a.push({
            name     : f,
            value    : m,
            type     : d.type,
            required : d.required
        }));
        if (!t && o.clk) {
            var g = e(o.clk), x = g[0];
            f = x.name, f && !x.disabled && "image" == x.type && (a.push({
                name  : f,
                value : g.val()
            }), a.push({name : f + ".x", value : o.clk_x}, {name : f + ".y", value : o.clk_y}))
        }
        return a
    }, e.fn.formSerialize = function(t) {
        return e.param(this.formToArray(t))
    }, e.fn.fieldSerialize = function(t) {
        var r = [];
        return this.each(function() {
            var a = this.name;
            if (a) {
                var n = e.fieldValue(this, t);
                if (n && n.constructor == Array)for (var i = 0, o = n.length; o > i; i++)r.push({
                    name  : a,
                    value : n[i]
                }); else null !== n && "undefined" != typeof n && r.push({name : this.name, value : n})
            }
        }), e.param(r)
    }, e.fn.fieldValue = function(t) {
        for (var r = [], a = 0, n = this.length; n > a; a++) {
            var i = this[a], o = e.fieldValue(i, t);
            null === o || "undefined" == typeof o || o.constructor == Array && !o.length || (o.constructor == Array ? e.merge(r, o) : r.push(o))
        }
        return r
    }, e.fieldValue = function(t, r) {
        var a = t.name, n = t.type, i = t.tagName.toLowerCase();
        if (void 0 === r && (r = !0), r && (!a || t.disabled || "reset" == n || "button" == n || ("checkbox" == n || "radio" == n) && !t.checked || ("submit" == n || "image" == n) && t.form && t.form.clk != t || "select" == i && -1 == t.selectedIndex))return null;
        if ("select" == i) {
            var o = t.selectedIndex;
            if (0 > o)return null;
            for (var s = [], u = t.options, c = "select-one" == n, l = c ? o + 1 : u.length, f = c ? o : 0; l > f; f++) {
                var m = u[f];
                if (m.selected) {
                    var d = m.value;
                    if (d || (d = m.attributes && m.attributes.value && !m.attributes.value.specified ? m.text : m.value), c)return d;
                    s.push(d)
                }
            }
            return s
        }
        return e(t).val()
    }, e.fn.clearForm = function(t) {
        return this.each(function() {
            e("input,select,textarea", this).clearFields(t)
        })
    }, e.fn.clearFields = e.fn.clearInputs = function(t) {
        var r = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
        return this.each(function() {
            var a = this.type, n = this.tagName.toLowerCase();
            r.test(a) || "textarea" == n ? this.value = "" : "checkbox" == a || "radio" == a ? this.checked = !1 : "select" == n ? this.selectedIndex = -1 : "file" == a ? /MSIE/.test(navigator.userAgent) ? e(this).replaceWith(e(this).clone(!0)) : e(this).val("") : t && (t === !0 && /hidden/.test(a) || "string" == typeof t && e(this).is(t)) && (this.value = "")
        })
    }, e.fn.resetForm = function() {
        return this.each(function() {
            ("function" == typeof this.reset || "object" == typeof this.reset && !this.reset.nodeType) && this.reset()
        })
    }, e.fn.enable = function(e) {
        return void 0 === e && (e = !0), this.each(function() {
            this.disabled = !e
        })
    }, e.fn.selected = function(t) {
        return void 0 === t && (t = !0), this.each(function() {
            var r = this.type;
            if ("checkbox" == r || "radio" == r) this.checked = t; else if ("option" == this.tagName.toLowerCase()) {
                var a = e(this).parent("select");
                t && a[0] && "select-one" == a[0].type && a.find("option").selected(!1), this.selected = t
            }
        })
    }, e.fn.ajaxSubmit.debug = !1
});
(function($) {
    'use strict';
    if (typeof _wpcf7 === 'undefined' || _wpcf7 === null) {
        return;
    }
    _wpcf7 = $.extend({cached : 0, inputs : []}, _wpcf7);
    $.fn.wpcf7InitForm = function() {
        this.ajaxForm({
            beforeSubmit    : function(arr, $form, options) {
                $form.wpcf7ClearResponseOutput();
                $form.find('[aria-invalid]').attr('aria-invalid', 'false');
                $form.find('.ajax-loader').addClass('is-active');
                return true;
            },
            beforeSerialize : function($form, options) {
                $form.find('[placeholder].placeheld').each(function(i, n) {
                    $(n).val('');
                });
                return true;
            },
            data            : {'_wpcf7_is_ajax_call' : 1},
            dataType        : 'json',
            success         : $.wpcf7AjaxSuccess,
            error           : function(xhr, status, error, $form) {
                var e = $('<div class="ajax-error"></div>').text(error.message);
                $form.after(e);
            }
        });
        if (_wpcf7.cached) {
            this.wpcf7OnloadRefill();
        }
        this.wpcf7ToggleSubmit();
        this.find('.wpcf7-submit').wpcf7AjaxLoader();
        this.find('.wpcf7-acceptance').click(function() {
            $(this).closest('form').wpcf7ToggleSubmit();
        });
        this.find('.wpcf7-exclusive-checkbox').wpcf7ExclusiveCheckbox();
        this.find('.wpcf7-list-item.has-free-text').wpcf7ToggleCheckboxFreetext();
        this.find('[placeholder]').wpcf7Placeholder();
        if (_wpcf7.jqueryUi && !_wpcf7.supportHtml5.date) {
            this.find('input.wpcf7-date[type="date"]').each(function() {
                $(this).datepicker({
                    dateFormat : 'yy-mm-dd',
                    minDate    : new Date($(this).attr('min')),
                    maxDate    : new Date($(this).attr('max'))
                });
            });
        }
        if (_wpcf7.jqueryUi && !_wpcf7.supportHtml5.number) {
            this.find('input.wpcf7-number[type="number"]').each(function() {
                $(this).spinner({min : $(this).attr('min'), max : $(this).attr('max'), step : $(this).attr('step')});
            });
        }
        this.find('.wpcf7-character-count').wpcf7CharacterCount();
        this.find('.wpcf7-validates-as-url').change(function() {
            $(this).wpcf7NormalizeUrl();
        });
        this.find('.wpcf7-recaptcha').wpcf7Recaptcha();
    };
    $.wpcf7AjaxSuccess = function(data, status, xhr, $form) {
        if (!$.isPlainObject(data) || $.isEmptyObject(data)) {
            return;
        }
        _wpcf7.inputs = $form.serializeArray();
        var $responseOutput = $form.find('div.wpcf7-response-output');
        $form.wpcf7ClearResponseOutput();
        $form.find('.wpcf7-form-control').removeClass('wpcf7-not-valid');
        $form.removeClass('invalid spam sent failed');
        if (data.captcha) {
            $form.wpcf7RefillCaptcha(data.captcha);
        }
        if (data.quiz) {
            $form.wpcf7RefillQuiz(data.quiz);
        }
        if (data.invalids) {
            $.each(data.invalids, function(i, n) {
                $form.find(n.into).wpcf7NotValidTip(n.message);
                $form.find(n.into).find('.wpcf7-form-control').addClass('wpcf7-not-valid');
                $form.find(n.into).find('[aria-invalid]').attr('aria-invalid', 'true');
            });
            $responseOutput.addClass('wpcf7-validation-errors');
            $form.addClass('invalid');
            $(data.into).wpcf7TriggerEvent('invalid');
        } else if (1 == data.spam) {
            $form.find('[name="g-recaptcha-response"]').each(function() {
                if ('' == $(this).val()) {
                    var $recaptcha = $(this).closest('.wpcf7-form-control-wrap');
                    $recaptcha.wpcf7NotValidTip(_wpcf7.recaptcha.messages.empty);
                }
            });
            $responseOutput.addClass('wpcf7-spam-blocked');
            $form.addClass('spam');
            $(data.into).wpcf7TriggerEvent('spam');
        } else if (1 == data.mailSent) {
            $responseOutput.addClass('wpcf7-mail-sent-ok');
            $form.addClass('sent');
            if (data.onSentOk) {
                $.each(data.onSentOk, function(i, n) {
                    eval(n)
                });
            }
            $(data.into).wpcf7TriggerEvent('mailsent');
        } else {
            $responseOutput.addClass('wpcf7-mail-sent-ng');
            $form.addClass('failed');
            $(data.into).wpcf7TriggerEvent('mailfailed');
        }
        if (data.onSubmit) {
            $.each(data.onSubmit, function(i, n) {
                eval(n)
            });
        }
        $(data.into).wpcf7TriggerEvent('submit');
        if (1 == data.mailSent) {
            $form.resetForm();
        }
        $form.find('[placeholder].placeheld').each(function(i, n) {
            $(n).val($(n).attr('placeholder'));
        });
        $responseOutput.append(data.message).slideDown('fast');
        $responseOutput.attr('role', 'alert');
        $.wpcf7UpdateScreenReaderResponse($form, data);
    };
    $.fn.wpcf7TriggerEvent = function(name) {
        return this.each(function() {
            var elmId = this.id;
            var inputs = _wpcf7.inputs;
            var event = new CustomEvent('wpcf7' + name, {bubbles : true, detail : {id : elmId, inputs : inputs}});
            this.dispatchEvent(event);
            $(this).trigger('wpcf7:' + name);
            $(this).trigger(name + '.wpcf7');
        });
    };
    $.fn.wpcf7ExclusiveCheckbox = function() {
        return this.find('input:checkbox').click(function() {
            var name = $(this).attr('name');
            $(this).closest('form').find('input:checkbox[name="' + name + '"]').not(this).prop('checked', false);
        });
    };
    $.fn.wpcf7Placeholder = function() {
        if (_wpcf7.supportHtml5.placeholder) {
            return this;
        }
        return this.each(function() {
            $(this).val($(this).attr('placeholder'));
            $(this).addClass('placeheld');
            $(this).focus(function() {
                if ($(this).hasClass('placeheld')) {
                    $(this).val('').removeClass('placeheld');
                }
            });
            $(this).blur(function() {
                if ('' === $(this).val()) {
                    $(this).val($(this).attr('placeholder'));
                    $(this).addClass('placeheld');
                }
            });
        });
    };
    $.fn.wpcf7AjaxLoader = function() {
        return this.each(function() {
            $(this).after('<span class="ajax-loader"></span>');
        });
    };
    $.fn.wpcf7ToggleSubmit = function() {
        return this.each(function() {
            var form = $(this);
            if (this.tagName.toLowerCase() != 'form') {
                form = $(this).find('form').first();
            }
            if (form.hasClass('wpcf7-acceptance-as-validation')) {
                return;
            }
            var submit = form.find('input:submit');
            if (!submit.length) {
                return;
            }
            var acceptances = form.find('input:checkbox.wpcf7-acceptance');
            if (!acceptances.length) {
                return;
            }
            submit.removeAttr('disabled');
            acceptances.each(function(i, n) {
                n = $(n);
                if (n.hasClass('wpcf7-invert') && n.is(':checked') || !n.hasClass('wpcf7-invert') && !n.is(':checked')) {
                    submit.attr('disabled', 'disabled');
                }
            });
        });
    };
    $.fn.wpcf7ToggleCheckboxFreetext = function() {
        return this.each(function() {
            var $wrap = $(this).closest('.wpcf7-form-control');
            if ($(this).find(':checkbox, :radio').is(':checked')) {
                $(this).find(':input.wpcf7-free-text').prop('disabled', false);
            } else {
                $(this).find(':input.wpcf7-free-text').prop('disabled', true);
            }
            $wrap.find(':checkbox, :radio').change(function() {
                var $cb = $('.has-free-text', $wrap).find(':checkbox, :radio');
                var $freetext = $(':input.wpcf7-free-text', $wrap);
                if ($cb.is(':checked')) {
                    $freetext.prop('disabled', false).focus();
                } else {
                    $freetext.prop('disabled', true);
                }
            });
        });
    };
    $.fn.wpcf7CharacterCount = function() {
        return this.each(function() {
            var $count = $(this);
            var name = $count.attr('data-target-name');
            var down = $count.hasClass('down');
            var starting = parseInt($count.attr('data-starting-value'), 10);
            var maximum = parseInt($count.attr('data-maximum-value'), 10);
            var minimum = parseInt($count.attr('data-minimum-value'), 10);
            var updateCount = function($target) {
                var length = $target.val().length;
                var count = down ? starting - length : length;
                $count.attr('data-current-value', count);
                $count.text(count);
                if (maximum && maximum < length) {
                    $count.addClass('too-long');
                } else {
                    $count.removeClass('too-long');
                }
                if (minimum && length < minimum) {
                    $count.addClass('too-short');
                } else {
                    $count.removeClass('too-short');
                }
            };
            $count.closest('form').find(':input[name="' + name + '"]').each(function() {
                updateCount($(this));
                $(this).keyup(function() {
                    updateCount($(this));
                });
            });
        });
    };
    $.fn.wpcf7NormalizeUrl = function() {
        return this.each(function() {
            var val = $.trim($(this).val());
            if (val && !val.match(/^[a-z][a-z0-9.+-]*:/i)) {
                val = val.replace(/^\/+/, '');
                val = 'http://' + val;
            }
            $(this).val(val);
        });
    };
    $.fn.wpcf7NotValidTip = function(message) {
        return this.each(function() {
            var $into = $(this);
            $into.find('span.wpcf7-not-valid-tip').remove();
            $into.append('<span role="alert" class="wpcf7-not-valid-tip">' + message + '</span>');
            if ($into.is('.use-floating-validation-tip *')) {
                $('.wpcf7-not-valid-tip', $into).mouseover(function() {
                    $(this).wpcf7FadeOut();
                });
                $(':input', $into).focus(function() {
                    $('.wpcf7-not-valid-tip', $into).not(':hidden').wpcf7FadeOut();
                });
            }
        });
    };
    $.fn.wpcf7FadeOut = function() {
        return this.each(function() {
            $(this).animate({opacity : 0}, 'fast', function() {
                $(this).css({'z-index' : -100});
            });
        });
    };
    $.fn.wpcf7OnloadRefill = function() {
        return this.each(function() {
            var url = $(this).attr('action');
            if (0 < url.indexOf('#')) {
                url = url.substr(0, url.indexOf('#'));
            }
            var id = $(this).find('input[name="_wpcf7"]').val();
            var unitTag = $(this).find('input[name="_wpcf7_unit_tag"]').val();
            $.getJSON(url, {_wpcf7_is_ajax_call : 1, _wpcf7 : id, _wpcf7_request_ver : $.now()}, function(data) {
                if (data && data.captcha) {
                    $('#' + unitTag).wpcf7RefillCaptcha(data.captcha);
                }
                if (data && data.quiz) {
                    $('#' + unitTag).wpcf7RefillQuiz(data.quiz);
                }
            });
        });
    };
    $.fn.wpcf7RefillCaptcha = function(captcha) {
        return this.each(function() {
            var form = $(this);
            $.each(captcha, function(i, n) {
                form.find(':input[name="' + i + '"]').clearFields();
                form.find('img.wpcf7-captcha-' + i).attr('src', n);
                var match = /([0-9]+)\.(png|gif|jpeg)$/.exec(n);
                form.find('input:hidden[name="_wpcf7_captcha_challenge_' + i + '"]').attr('value', match[1]);
            });
        });
    };
    $.fn.wpcf7RefillQuiz = function(quiz) {
        return this.each(function() {
            var form = $(this);
            $.each(quiz, function(i, n) {
                form.find(':input[name="' + i + '"]').clearFields();
                form.find(':input[name="' + i + '"]').siblings('span.wpcf7-quiz-label').text(n[0]);
                form.find('input:hidden[name="_wpcf7_quiz_answer_' + i + '"]').attr('value', n[1]);
            });
        });
    };
    $.fn.wpcf7ClearResponseOutput = function() {
        return this.each(function() {
            $(this).find('div.wpcf7-response-output').hide().empty().removeClass('wpcf7-mail-sent-ok wpcf7-mail-sent-ng wpcf7-validation-errors wpcf7-spam-blocked').removeAttr('role');
            $(this).find('span.wpcf7-not-valid-tip').remove();
            $(this).find('.ajax-loader').removeClass('is-active');
        });
    };
    $.fn.wpcf7Recaptcha = function() {
        return this.each(function() {
            var events = 'wpcf7:spam wpcf7:mailsent wpcf7:mailfailed';
            $(this).closest('div.wpcf7').on(events, function(e) {
                if (recaptchaWidgets && grecaptcha) {
                    $.each(recaptchaWidgets, function(index, value) {
                        grecaptcha.reset(value);
                    });
                }
            });
        });
    };
    $.wpcf7UpdateScreenReaderResponse = function($form, data) {
        $('.wpcf7 .screen-reader-response').html('').attr('role', '');
        if (data.message) {
            var $response = $form.siblings('.screen-reader-response').first();
            $response.append(data.message);
            if (data.invalids) {
                var $invalids = $('<ul></ul>');
                $.each(data.invalids, function(i, n) {
                    if (n.idref) {
                        var $li = $('<li></li>').append($('<a></a>').attr('href', '#' + n.idref).append(n.message));
                    } else {
                        var $li = $('<li></li>').append(n.message);
                    }
                    $invalids.append($li);
                });
                $response.append($invalids);
            }
            $response.attr('role', 'alert').focus();
        }
    };
    $.wpcf7SupportHtml5 = function() {
        var features = {};
        var input = document.createElement('input');
        features.placeholder = 'placeholder' in input;
        var inputTypes = ['email', 'url', 'tel', 'number', 'range', 'date'];
        $.each(inputTypes, function(index, value) {
            input.setAttribute('type', value);
            features[value] = input.type !== 'text';
        });
        return features;
    };
    $(function() {
        _wpcf7.supportHtml5 = $.wpcf7SupportHtml5();
        $('div.wpcf7 > form').wpcf7InitForm();
    });
})(jQuery);
(function() {
    if (typeof window.CustomEvent === "function")return false;
    function CustomEvent(event, params) {
        params = params || {bubbles : false, cancelable : false, detail : undefined};
        var evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return evt;
    }

    CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = CustomEvent;
})();

/*!
 * The Final Countdown for jQuery v2.1.0 (http://hilios.github.io/jQuery.countdown/)
 * Copyright (c) 2015 Edson Hilios
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
!function(a) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function(a) {
    "use strict";
    function b(a) {
        if (a instanceof Date)return a;
        if (String(a).match(g))return String(a).match(/^[0-9]*$/) && (a = Number(a)), String(a).match(/\-/) && (a = String(a).replace(/\-/g, "/")), new Date(a);
        throw new Error("Couldn't cast `" + a + "` to a date object.")
    }

    function c(a) {
        var b = a.toString().replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
        return new RegExp(b)
    }

    function d(a) {
        return function(b) {
            var d = b.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);
            if (d)for (var f = 0, g = d.length; g > f; ++f) {
                var h = d[f].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/), j = c(h[0]), k = h[1] || "", l = h[3] || "", m = null;
                h = h[2], i.hasOwnProperty(h) && (m = i[h], m = Number(a[m])), null !== m && ("!" === k && (m = e(l, m)), "" === k && 10 > m && (m = "0" + m.toString()), b = b.replace(j, m.toString()))
            }
            return b = b.replace(/%%/, "%")
        }
    }

    function e(a, b) {
        var c = "s", d = "";
        return a && (a = a.replace(/(:|;|\s)/gi, "").split(/\,/), 1 === a.length ? c = a[0] : (d = a[0], c = a[1])), 1 === Math.abs(b) ? d : c
    }

    var f = [], g = [], h = {precision : 100, elapse : !1};
    g.push(/^[0-9]*$/.source), g.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), g.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), g = new RegExp(g.join("|"));
    var i = {
        Y : "years",
        m : "months",
        n : "daysToMonth",
        w : "weeks",
        d : "daysToWeek",
        D : "totalDays",
        H : "hours",
        M : "minutes",
        S : "seconds"
    }, j = function(b, c, d) {
        this.el = b, this.$el = a(b), this.interval = null, this.offset = {}, this.options = a.extend({}, h), this.instanceNumber = f.length, f.push(this), this.$el.data("countdown-instance", this.instanceNumber), d && ("function" == typeof d ? (this.$el.on("update.countdown", d), this.$el.on("stoped.countdown", d), this.$el.on("finish.countdown", d)) : this.options = a.extend({}, h, d)), this.setFinalDate(c), this.start()
    };
    a.extend(j.prototype, {
        start            : function() {
            null !== this.interval && clearInterval(this.interval);
            var a = this;
            this.update(), this.interval = setInterval(function() {
                a.update.call(a)
            }, this.options.precision)
        }, stop          : function() {
            clearInterval(this.interval), this.interval = null, this.dispatchEvent("stoped")
        }, toggle        : function() {
            this.interval ? this.stop() : this.start()
        }, pause         : function() {
            this.stop()
        }, resume        : function() {
            this.start()
        }, remove        : function() {
            this.stop.call(this), f[this.instanceNumber] = null, delete this.$el.data().countdownInstance
        }, setFinalDate  : function(a) {
            this.finalDate = b(a)
        }, update        : function() {
            if (0 === this.$el.closest("html").length)return void this.remove();
            var b, c = void 0 !== a._data(this.el, "events"), d = new Date;
            b = this.finalDate.getTime() - d.getTime(), b = Math.ceil(b / 1e3), b = !this.options.elapse && 0 > b ? 0 : Math.abs(b), this.totalSecsLeft !== b && c && (this.totalSecsLeft = b, this.elapsed = d >= this.finalDate, this.offset = {
                seconds     : this.totalSecsLeft % 60,
                minutes     : Math.floor(this.totalSecsLeft / 60) % 60,
                hours       : Math.floor(this.totalSecsLeft / 60 / 60) % 24,
                days        : Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                daysToWeek  : Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                daysToMonth : Math.floor(this.totalSecsLeft / 60 / 60 / 24 % 30.4368),
                totalDays   : Math.floor(this.totalSecsLeft / 60 / 60 / 24),
                weeks       : Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7),
                months      : Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 30.4368),
                years       : Math.abs(this.finalDate.getFullYear() - d.getFullYear())
            }, this.options.elapse || 0 !== this.totalSecsLeft ? this.dispatchEvent("update") : (this.stop(), this.dispatchEvent("finish")))
        }, dispatchEvent : function(b) {
            var c = a.Event(b + ".countdown");
            c.finalDate = this.finalDate, c.elapsed = this.elapsed, c.offset = a.extend({}, this.offset), c.strftime = d(this.offset), this.$el.trigger(c)
        }
    }), a.fn.countdown = function() {
        var b = Array.prototype.slice.call(arguments, 0);
        return this.each(function() {
            var c = a(this).data("countdown-instance");
            if (void 0 !== c) {
                var d = f[c], e = b[0];
                j.prototype.hasOwnProperty(e) ? d[e].apply(d, b.slice(1)) : null === String(e).match(/^[$A-Z_][0-9A-Z_$]*$/i) ? (d.setFinalDate.call(d, e), d.start()) : a.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi, e))
            } else new j(this, b[0], b[1])
        })
    }
});

//
// var googleMaps = {};
// var initGoogleMaps = function() {
//     window.addEventListener('load', function() {
//         var elements = document.getElementsByClassName('palko-mirka-sow-google-maps');
//         for (var i = 0; i < elements.length; i++) {
//             var id = elements[i].getAttribute('data-palko-mirka-target'), args = JSON.parse(elements[i].getAttribute('data-palko-mirka-arguments'));
//             googleMaps[id] = {};
//             googleMaps[id]['map'] = new google.maps.Map(document.getElementById(id), args.options);
//             googleMaps[id]['markers'] = {};
//             for (var j = 0; j < args.locations.length; j++) {
//                 var location = args.locations[j];
//                 googleMaps[id]['markers'][j] = new google.maps.Marker({
//                     position  : location['position'],
//                     map       : googleMaps[id]['map'],
//                     icon      : location['icon'],
//                     animation : location['animation'],
//                 });
//                 ;
//                 if (location['info_window'].length > 0) {
//                     googleMaps[id]['markers'][j]['infoWindow'] = new google.maps.InfoWindow({
//                         content  : location['info_window'],
//                         maxWidth : location['info_window_max_width'],
//                     });
//                     googleMaps[id]['markers'][j].addListener('click', function() {
//                         this.infoWindow.open(this.map, this);
//                     });
//                 }
//             }
//         }
//         ;
//     });
// }
// if (window.google && window.google.maps) {
//     window.initGoogleMaps();
// } else {
//     var elements = document.getElementsByClassName('palko-mirka-sow-google-maps');
//     var apiKey = elements[0].getAttribute('data-palko-mirka-api-key');
//     var apiUrl = 'https://maps.googleapis.com/maps/api/js?callback=initGoogleMaps';
//     if (apiKey) {
//         apiUrl += '&key=' + apiKey;
//     }
//     var script = document.createElement('script');
//     script.setAttribute('async', true);
//     script.setAttribute('defer', true);
//     script.setAttribute('src', apiUrl);
//     script.setAttribute('type', 'text/javascript');
//     document.body.appendChild(script);
// }
// ;

/*!
 * Flickity PACKAGED v1.2.1
 * Touch, responsive, flickable galleries
 *
 * Licensed GPLv3 for open source use
 * or Flickity Commercial License for commercial use
 *
 * http://flickity.metafizzy.co
 * Copyright 2015 Metafizzy
 */
!function(t) {
    function e() {
    }

    function i(t) {
        function i(e) {
            e.prototype.option || (e.prototype.option = function(e) {
                t.isPlainObject(e) && (this.options = t.extend(!0, this.options, e))
            })
        }

        function o(e, i) {
            t.fn[e] = function(o) {
                if ("string" == typeof o) {
                    for (var s = n.call(arguments, 1), a = 0, l = this.length; l > a; a++) {
                        var h = this[a], c = t.data(h, e);
                        if (c)if (t.isFunction(c[o]) && "_" !== o.charAt(0)) {
                            var p = c[o].apply(c, s);
                            if (void 0 !== p)return p
                        } else r("no such method '" + o + "' for " + e + " instance"); else r("cannot call methods on " + e + " prior to initialization; attempted to call '" + o + "'")
                    }
                    return this
                }
                return this.each(function() {
                    var n = t.data(this, e);
                    n ? (n.option(o), n._init()) : (n = new i(this, o), t.data(this, e, n))
                })
            }
        }

        if (t) {
            var r = "undefined" == typeof console ? e : function(t) {
                    console.error(t)
                };
            return t.bridget = function(t, e) {
                i(e), o(t, e)
            }, t.bridget
        }
    }

    var n = Array.prototype.slice;
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], i) : i("object" == typeof exports ? require("jquery") : t.jQuery)
}(window), function(t) {
    function e(t) {
        return new RegExp("(^|\\s+)" + t + "(\\s+|$)")
    }

    function i(t, e) {
        var i = n(t, e) ? r : o;
        i(t, e)
    }

    var n, o, r;
    "classList" in document.documentElement ? (n = function(t, e) {
            return t.classList.contains(e)
        }, o = function(t, e) {
            t.classList.add(e)
        }, r = function(t, e) {
            t.classList.remove(e)
        }) : (n = function(t, i) {
            return e(i).test(t.className)
        }, o = function(t, e) {
            n(t, e) || (t.className = t.className + " " + e)
        }, r = function(t, i) {
            t.className = t.className.replace(e(i), " ")
        });
    var s = {hasClass : n, addClass : o, removeClass : r, toggleClass : i, has : n, add : o, remove : r, toggle : i};
    "function" == typeof define && define.amd ? define("classie/classie", s) : "object" == typeof exports ? module.exports = s : t.classie = s
}(window), function() {
    "use strict";
    function t() {
    }

    function e(t, e) {
        for (var i = t.length; i--;)if (t[i].listener === e)return i;
        return -1
    }

    function i(t) {
        return function() {
            return this[t].apply(this, arguments)
        }
    }

    var n = t.prototype, o = this, r = o.EventEmitter;
    n.getListeners = function(t) {
        var e, i, n = this._getEvents();
        if (t instanceof RegExp) {
            e = {};
            for (i in n)n.hasOwnProperty(i) && t.test(i) && (e[i] = n[i])
        } else e = n[t] || (n[t] = []);
        return e
    }, n.flattenListeners = function(t) {
        var e, i = [];
        for (e = 0; e < t.length; e += 1)i.push(t[e].listener);
        return i
    }, n.getListenersAsObject = function(t) {
        var e, i = this.getListeners(t);
        return i instanceof Array && (e = {}, e[t] = i), e || i
    }, n.addListener = function(t, i) {
        var n, o = this.getListenersAsObject(t), r = "object" == typeof i;
        for (n in o)o.hasOwnProperty(n) && -1 === e(o[n], i) && o[n].push(r ? i : {listener : i, once : !1});
        return this
    }, n.on = i("addListener"), n.addOnceListener = function(t, e) {
        return this.addListener(t, {listener : e, once : !0})
    }, n.once = i("addOnceListener"), n.defineEvent = function(t) {
        return this.getListeners(t), this
    }, n.defineEvents = function(t) {
        for (var e = 0; e < t.length; e += 1)this.defineEvent(t[e]);
        return this
    }, n.removeListener = function(t, i) {
        var n, o, r = this.getListenersAsObject(t);
        for (o in r)r.hasOwnProperty(o) && (n = e(r[o], i), -1 !== n && r[o].splice(n, 1));
        return this
    }, n.off = i("removeListener"), n.addListeners = function(t, e) {
        return this.manipulateListeners(!1, t, e)
    }, n.removeListeners = function(t, e) {
        return this.manipulateListeners(!0, t, e)
    }, n.manipulateListeners = function(t, e, i) {
        var n, o, r = t ? this.removeListener : this.addListener, s = t ? this.removeListeners : this.addListeners;
        if ("object" != typeof e || e instanceof RegExp)for (n = i.length; n--;)r.call(this, e, i[n]); else for (n in e)e.hasOwnProperty(n) && (o = e[n]) && ("function" == typeof o ? r.call(this, n, o) : s.call(this, n, o));
        return this
    }, n.removeEvent = function(t) {
        var e, i = typeof t, n = this._getEvents();
        if ("string" === i) delete n[t]; else if (t instanceof RegExp)for (e in n)n.hasOwnProperty(e) && t.test(e) && delete n[e]; else delete this._events;
        return this
    }, n.removeAllListeners = i("removeEvent"), n.emitEvent = function(t, e) {
        var i, n, o, r, s = this.getListenersAsObject(t);
        for (o in s)if (s.hasOwnProperty(o))for (n = s[o].length; n--;)i = s[o][n], i.once === !0 && this.removeListener(t, i.listener), r = i.listener.apply(this, e || []), r === this._getOnceReturnValue() && this.removeListener(t, i.listener);
        return this
    }, n.trigger = i("emitEvent"), n.emit = function(t) {
        var e = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(t, e)
    }, n.setOnceReturnValue = function(t) {
        return this._onceReturnValue = t, this
    }, n._getOnceReturnValue = function() {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }, n._getEvents = function() {
        return this._events || (this._events = {})
    }, t.noConflict = function() {
        return o.EventEmitter = r, t
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
            return t
        }) : "object" == typeof module && module.exports ? module.exports = t : o.EventEmitter = t
}.call(this), function(t) {
    function e(e) {
        var i = t.event;
        return i.target = i.target || i.srcElement || e, i
    }

    var i = document.documentElement, n = function() {
    };
    i.addEventListener ? n = function(t, e, i) {
            t.addEventListener(e, i, !1)
        } : i.attachEvent && (n = function(t, i, n) {
            t[i + n] = n.handleEvent ? function() {
                    var i = e(t);
                    n.handleEvent.call(n, i)
                } : function() {
                    var i = e(t);
                    n.call(t, i)
                }, t.attachEvent("on" + i, t[i + n])
        });
    var o = function() {
    };
    i.removeEventListener ? o = function(t, e, i) {
            t.removeEventListener(e, i, !1)
        } : i.detachEvent && (o = function(t, e, i) {
            t.detachEvent("on" + e, t[e + i]);
            try {
                delete t[e + i]
            } catch (n) {
                t[e + i] = void 0
            }
        });
    var r = {bind : n, unbind : o};
    "function" == typeof define && define.amd ? define("eventie/eventie", r) : "object" == typeof exports ? module.exports = r : t.eventie = r
}(window), function(t) {
    function e(t) {
        if (t) {
            if ("string" == typeof n[t])return t;
            t = t.charAt(0).toUpperCase() + t.slice(1);
            for (var e, o = 0, r = i.length; r > o; o++)if (e = i[o] + t, "string" == typeof n[e])return e
        }
    }

    var i = "Webkit Moz ms Ms O".split(" "), n = document.documentElement.style;
    "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function() {
            return e
        }) : "object" == typeof exports ? module.exports = e : t.getStyleProperty = e
}(window), function(t, e) {
    function i(t) {
        var e = parseFloat(t), i = -1 === t.indexOf("%") && !isNaN(e);
        return i && e
    }

    function n() {
    }

    function o() {
        for (var t = {
            width       : 0,
            height      : 0,
            innerWidth  : 0,
            innerHeight : 0,
            outerWidth  : 0,
            outerHeight : 0
        }, e = 0, i = a.length; i > e; e++) {
            var n = a[e];
            t[n] = 0
        }
        return t
    }

    function r(e) {
        function n() {
            if (!d) {
                d = !0;
                var n = t.getComputedStyle;
                if (h = function() {
                        var t = n ? function(t) {
                                return n(t, null)
                            } : function(t) {
                                return t.currentStyle
                            };
                        return function(e) {
                            var i = t(e);
                            return i || s("Style returned " + i + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), i
                        }
                    }(), c = e("boxSizing")) {
                    var o = document.createElement("div");
                    o.style.width = "200px", o.style.padding = "1px 2px 3px 4px", o.style.borderStyle = "solid", o.style.borderWidth = "1px 2px 3px 4px", o.style[c] = "border-box";
                    var r = document.body || document.documentElement;
                    r.appendChild(o);
                    var a = h(o);
                    p = 200 === i(a.width), r.removeChild(o)
                }
            }
        }

        function r(t) {
            if (n(), "string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
                var e = h(t);
                if ("none" === e.display)return o();
                var r = {};
                r.width = t.offsetWidth, r.height = t.offsetHeight;
                for (var s = r.isBorderBox = !(!c || !e[c] || "border-box" !== e[c]), d = 0, u = a.length; u > d; d++) {
                    var f = a[d], v = e[f];
                    v = l(t, v);
                    var y = parseFloat(v);
                    r[f] = isNaN(y) ? 0 : y
                }
                var g = r.paddingLeft + r.paddingRight, m = r.paddingTop + r.paddingBottom, b = r.marginLeft + r.marginRight, x = r.marginTop + r.marginBottom, S = r.borderLeftWidth + r.borderRightWidth, C = r.borderTopWidth + r.borderBottomWidth, w = s && p, E = i(e.width);
                E !== !1 && (r.width = E + (w ? 0 : g + S));
                var P = i(e.height);
                return P !== !1 && (r.height = P + (w ? 0 : m + C)), r.innerWidth = r.width - (g + S), r.innerHeight = r.height - (m + C), r.outerWidth = r.width + b, r.outerHeight = r.height + x, r
            }
        }

        function l(e, i) {
            if (t.getComputedStyle || -1 === i.indexOf("%"))return i;
            var n = e.style, o = n.left, r = e.runtimeStyle, s = r && r.left;
            return s && (r.left = e.currentStyle.left), n.left = i, i = n.pixelLeft, n.left = o, s && (r.left = s), i
        }

        var h, c, p, d = !1;
        return r
    }

    var s = "undefined" == typeof console ? n : function(t) {
            console.error(t)
        }, a = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
    "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], r) : "object" == typeof exports ? module.exports = r(require("desandro-get-style-property")) : t.getSize = r(t.getStyleProperty)
}(window), function(t) {
    function e(t) {
        "function" == typeof t && (e.isReady ? t() : s.push(t))
    }

    function i(t) {
        var i = "readystatechange" === t.type && "complete" !== r.readyState;
        e.isReady || i || n()
    }

    function n() {
        e.isReady = !0;
        for (var t = 0, i = s.length; i > t; t++) {
            var n = s[t];
            n()
        }
    }

    function o(o) {
        return "complete" === r.readyState ? n() : (o.bind(r, "DOMContentLoaded", i), o.bind(r, "readystatechange", i), o.bind(t, "load", i)), e
    }

    var r = t.document, s = [];
    e.isReady = !1, "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], o) : "object" == typeof exports ? module.exports = o(require("eventie")) : t.docReady = o(t.eventie)
}(window), function(t) {
    "use strict";
    function e(t, e) {
        return t[s](e)
    }

    function i(t) {
        if (!t.parentNode) {
            var e = document.createDocumentFragment();
            e.appendChild(t)
        }
    }

    function n(t, e) {
        i(t);
        for (var n = t.parentNode.querySelectorAll(e), o = 0, r = n.length; r > o; o++)if (n[o] === t)return !0;
        return !1
    }

    function o(t, n) {
        return i(t), e(t, n)
    }

    var r, s = function() {
        if (t.matches)return "matches";
        if (t.matchesSelector)return "matchesSelector";
        for (var e = ["webkit", "moz", "ms", "o"], i = 0, n = e.length; n > i; i++) {
            var o = e[i], r = o + "MatchesSelector";
            if (t[r])return r
        }
    }();
    if (s) {
        var a = document.createElement("div"), l = e(a, "div");
        r = l ? e : o
    } else r = n;
    "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function() {
            return r
        }) : "object" == typeof exports ? module.exports = r : window.matchesSelector = r
}(Element.prototype), function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["doc-ready/doc-ready", "matches-selector/matches-selector"], function(i, n) {
            return e(t, i, n)
        }) : "object" == typeof exports ? module.exports = e(t, require("doc-ready"), require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.docReady, t.matchesSelector)
}(window, function(t, e, i) {
    var n = {};
    n.extend = function(t, e) {
        for (var i in e)t[i] = e[i];
        return t
    }, n.modulo = function(t, e) {
        return (t % e + e) % e
    };
    var o = Object.prototype.toString;
    n.isArray = function(t) {
        return "[object Array]" == o.call(t)
    }, n.makeArray = function(t) {
        var e = [];
        if (n.isArray(t)) e = t; else if (t && "number" == typeof t.length)for (var i = 0, o = t.length; o > i; i++)e.push(t[i]); else e.push(t);
        return e
    }, n.indexOf = Array.prototype.indexOf ? function(t, e) {
            return t.indexOf(e)
        } : function(t, e) {
            for (var i = 0, n = t.length; n > i; i++)if (t[i] === e)return i;
            return -1
        }, n.removeFrom = function(t, e) {
        var i = n.indexOf(t, e);
        -1 != i && t.splice(i, 1)
    }, n.isElement = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function(t) {
            return t instanceof HTMLElement
        } : function(t) {
            return t && "object" == typeof t && 1 == t.nodeType && "string" == typeof t.nodeName
        }, n.setText = function() {
        function t(t, i) {
            e = e || (void 0 !== document.documentElement.textContent ? "textContent" : "innerText"), t[e] = i
        }

        var e;
        return t
    }(), n.getParent = function(t, e) {
        for (; t != document.body;)if (t = t.parentNode, i(t, e))return t
    }, n.getQueryElement = function(t) {
        return "string" == typeof t ? document.querySelector(t) : t
    }, n.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, n.filterFindElements = function(t, e) {
        t = n.makeArray(t);
        for (var o = [], r = 0, s = t.length; s > r; r++) {
            var a = t[r];
            if (n.isElement(a))if (e) {
                i(a, e) && o.push(a);
                for (var l = a.querySelectorAll(e), h = 0, c = l.length; c > h; h++)o.push(l[h])
            } else o.push(a)
        }
        return o
    }, n.debounceMethod = function(t, e, i) {
        var n = t.prototype[e], o = e + "Timeout";
        t.prototype[e] = function() {
            var t = this[o];
            t && clearTimeout(t);
            var e = arguments, r = this;
            this[o] = setTimeout(function() {
                n.apply(r, e), delete r[o]
            }, i || 100)
        }
    }, n.toDashed = function(t) {
        return t.replace(/(.)([A-Z])/g, function(t, e, i) {
            return e + "-" + i
        }).toLowerCase()
    };
    var r = t.console;
    return n.htmlInit = function(i, o) {
        e(function() {
            for (var e = n.toDashed(o), s = document.querySelectorAll(".js-" + e), a = "data-" + e + "-options", l = 0, h = s.length; h > l; l++) {
                var c, p = s[l], d = p.getAttribute(a);
                try {
                    c = d && JSON.parse(d)
                } catch (u) {
                    r && r.error("Error parsing " + a + " on " + p.nodeName.toLowerCase() + (p.id ? "#" + p.id : "") + ": " + u);
                    continue
                }
                var f = new i(p, c), v = t.jQuery;
                v && v.data(p, o, f)
            }
        })
    }, n
}), function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("flickity/js/cell", ["get-size/get-size"], function(i) {
            return e(t, i)
        }) : "object" == typeof exports ? module.exports = e(t, require("get-size")) : (t.Flickity = t.Flickity || {}, t.Flickity.Cell = e(t, t.getSize))
}(window, function(t, e) {
    function i(t, e) {
        this.element = t, this.parent = e, this.create()
    }

    var n = "attachEvent" in t;
    return i.prototype.create = function() {
        this.element.style.position = "absolute", n && this.element.setAttribute("unselectable", "on"), this.x = 0, this.shift = 0
    }, i.prototype.destroy = function() {
        this.element.style.position = "";
        var t = this.parent.originSide;
        this.element.style[t] = ""
    }, i.prototype.getSize = function() {
        this.size = e(this.element)
    }, i.prototype.setPosition = function(t) {
        this.x = t, this.setDefaultTarget(), this.renderPosition(t)
    }, i.prototype.setDefaultTarget = function() {
        var t = "left" == this.parent.originSide ? "marginLeft" : "marginRight";
        this.target = this.x + this.size[t] + this.size.width * this.parent.cellAlign
    }, i.prototype.renderPosition = function(t) {
        var e = this.parent.originSide;
        this.element.style[e] = this.parent.getPositionValue(t)
    }, i.prototype.wrapShift = function(t) {
        this.shift = t, this.renderPosition(this.x + this.parent.slideableWidth * t)
    }, i.prototype.remove = function() {
        this.element.parentNode.removeChild(this.element)
    }, i
}), function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("flickity/js/animate", ["get-style-property/get-style-property", "fizzy-ui-utils/utils"], function(i, n) {
            return e(t, i, n)
        }) : "object" == typeof exports ? module.exports = e(t, require("desandro-get-style-property"), require("fizzy-ui-utils")) : (t.Flickity = t.Flickity || {}, t.Flickity.animatePrototype = e(t, t.getStyleProperty, t.fizzyUIUtils))
}(window, function(t, e, i) {
    for (var n, o = 0, r = "webkit moz ms o".split(" "), s = t.requestAnimationFrame, a = t.cancelAnimationFrame, l = 0; l < r.length && (!s || !a); l++)n = r[l], s = s || t[n + "RequestAnimationFrame"], a = a || t[n + "CancelAnimationFrame"] || t[n + "CancelRequestAnimationFrame"];
    s && a || (s = function(e) {
        var i = (new Date).getTime(), n = Math.max(0, 16 - (i - o)), r = t.setTimeout(function() {
            e(i + n)
        }, n);
        return o = i + n, r
    }, a = function(e) {
        t.clearTimeout(e)
    });
    var h = {};
    h.startAnimation = function() {
        this.isAnimating || (this.isAnimating = !0, this.restingFrames = 0, this.animate())
    }, h.animate = function() {
        this.applyDragForce(), this.applySelectedAttraction();
        var t = this.x;
        if (this.integratePhysics(), this.positionSlider(), this.settle(t), this.isAnimating) {
            var e = this;
            s(function() {
                e.animate()
            })
        }
    };
    var c = e("transform"), p = !!e("perspective");
    return h.positionSlider = function() {
        var t = this.x;
        this.options.wrapAround && this.cells.length > 1 && (t = i.modulo(t, this.slideableWidth), t -= this.slideableWidth, this.shiftWrapCells(t)), t += this.cursorPosition, t = this.options.rightToLeft && c ? -t : t;
        var e = this.getPositionValue(t);
        c ? this.slider.style[c] = p && this.isAnimating ? "translate3d(" + e + ",0,0)" : "translateX(" + e + ")" : this.slider.style[this.originSide] = e
    }, h.positionSliderAtSelected = function() {
        if (this.cells.length) {
            var t = this.cells[this.selectedIndex];
            this.x = -t.target, this.positionSlider()
        }
    }, h.getPositionValue = function(t) {
        return this.options.percentPosition ? .01 * Math.round(t / this.size.innerWidth * 1e4) + "%" : Math.round(t) + "px"
    }, h.settle = function(t) {
        this.isPointerDown || Math.round(100 * this.x) != Math.round(100 * t) || this.restingFrames++, this.restingFrames > 2 && (this.isAnimating = !1, delete this.isFreeScrolling, p && this.positionSlider(), this.dispatchEvent("settle"))
    }, h.shiftWrapCells = function(t) {
        var e = this.cursorPosition + t;
        this._shiftCells(this.beforeShiftCells, e, -1);
        var i = this.size.innerWidth - (t + this.slideableWidth + this.cursorPosition);
        this._shiftCells(this.afterShiftCells, i, 1)
    }, h._shiftCells = function(t, e, i) {
        for (var n = 0, o = t.length; o > n; n++) {
            var r = t[n], s = e > 0 ? i : 0;
            r.wrapShift(s), e -= r.size.outerWidth
        }
    }, h._unshiftCells = function(t) {
        if (t && t.length)for (var e = 0, i = t.length; i > e; e++)t[e].wrapShift(0)
    }, h.integratePhysics = function() {
        this.velocity += this.accel, this.x += this.velocity, this.velocity *= this.getFrictionFactor(), this.accel = 0
    }, h.applyForce = function(t) {
        this.accel += t
    }, h.getFrictionFactor = function() {
        return 1 - this.options[this.isFreeScrolling ? "freeScrollFriction" : "friction"]
    }, h.getRestingPosition = function() {
        return this.x + this.velocity / (1 - this.getFrictionFactor())
    }, h.applyDragForce = function() {
        if (this.isPointerDown) {
            var t = this.dragX - this.x, e = t - this.velocity;
            this.applyForce(e)
        }
    }, h.applySelectedAttraction = function() {
        var t = this.cells.length;
        if (!this.isPointerDown && !this.isFreeScrolling && t) {
            var e = this.cells[this.selectedIndex], i = this.options.wrapAround && t > 1 ? this.slideableWidth * Math.floor(this.selectedIndex / t) : 0, n = -1 * (e.target + i) - this.x, o = n * this.options.selectedAttraction;
            this.applyForce(o)
        }
    }, h
}), function(t, e) {
    "use strict";
    if ("function" == typeof define && define.amd) define("flickity/js/flickity", ["classie/classie", "eventEmitter/EventEmitter", "eventie/eventie", "get-size/get-size", "fizzy-ui-utils/utils", "./cell", "./animate"], function(i, n, o, r, s, a, l) {
        return e(t, i, n, o, r, s, a, l)
    }); else if ("object" == typeof exports) module.exports = e(t, require("desandro-classie"), require("wolfy87-eventemitter"), require("eventie"), require("get-size"), require("fizzy-ui-utils"), require("./cell"), require("./animate")); else {
        var i = t.Flickity;
        t.Flickity = e(t, t.classie, t.EventEmitter, t.eventie, t.getSize, t.fizzyUIUtils, i.Cell, i.animatePrototype)
    }
}(window, function(t, e, i, n, o, r, s, a) {
    function l(t, e) {
        for (t = r.makeArray(t); t.length;)e.appendChild(t.shift())
    }

    function h(t, e) {
        var i = r.getQueryElement(t);
        return i ? (this.element = i, c && (this.$element = c(this.element)), this.options = r.extend({}, this.constructor.defaults), this.option(e), void this._create()) : void(d && d.error("Bad element for Flickity: " + (i || t)))
    }

    var c = t.jQuery, p = t.getComputedStyle, d = t.console, u = 0, f = {};
    h.defaults = {
        accessibility      : !0,
        cellAlign          : "center",
        freeScrollFriction : .075,
        friction           : .28,
        percentPosition    : !0,
        resize             : !0,
        selectedAttraction : .025,
        setGallerySize     : !0
    }, h.createMethods = [], r.extend(h.prototype, i.prototype), h.prototype._create = function() {
        var e = this.guid = ++u;
        this.element.flickityGUID = e, f[e] = this, this.selectedIndex = 0, this.restingFrames = 0, this.x = 0, this.velocity = 0, this.accel = 0, this.originSide = this.options.rightToLeft ? "right" : "left", this.viewport = document.createElement("div"), this.viewport.className = "flickity-viewport", h.setUnselectable(this.viewport), this._createSlider(), (this.options.resize || this.options.watchCSS) && (n.bind(t, "resize", this), this.isResizeBound = !0);
        for (var i = 0, o = h.createMethods.length; o > i; i++) {
            var r = h.createMethods[i];
            this[r]()
        }
        this.options.watchCSS ? this.watchCSS() : this.activate()
    }, h.prototype.option = function(t) {
        r.extend(this.options, t)
    }, h.prototype.activate = function() {
        if (!this.isActive) {
            this.isActive = !0, e.add(this.element, "flickity-enabled"), this.options.rightToLeft && e.add(this.element, "flickity-rtl"), this.getSize();
            var t = this._filterFindCellElements(this.element.children);
            l(t, this.slider), this.viewport.appendChild(this.slider), this.element.appendChild(this.viewport), this.reloadCells(), this.options.accessibility && (this.element.tabIndex = 0, n.bind(this.element, "keydown", this)), this.emit("activate");
            var i, o = this.options.initialIndex;
            i = this.isInitActivated ? this.selectedIndex : void 0 !== o && this.cells[o] ? o : 0, this.select(i, !1, !0), this.isInitActivated = !0
        }
    }, h.prototype._createSlider = function() {
        var t = document.createElement("div");
        t.className = "flickity-slider", t.style[this.originSide] = 0, this.slider = t
    }, h.prototype._filterFindCellElements = function(t) {
        return r.filterFindElements(t, this.options.cellSelector)
    }, h.prototype.reloadCells = function() {
        this.cells = this._makeCells(this.slider.children), this.positionCells(), this._getWrapShiftCells(), this.setGallerySize()
    }, h.prototype._makeCells = function(t) {
        for (var e = this._filterFindCellElements(t), i = [], n = 0, o = e.length; o > n; n++) {
            var r = e[n], a = new s(r, this);
            i.push(a)
        }
        return i
    }, h.prototype.getLastCell = function() {
        return this.cells[this.cells.length - 1]
    }, h.prototype.positionCells = function() {
        this._sizeCells(this.cells), this._positionCells(0)
    }, h.prototype._positionCells = function(t) {
        t = t || 0, this.maxCellHeight = t ? this.maxCellHeight || 0 : 0;
        var e = 0;
        if (t > 0) {
            var i = this.cells[t - 1];
            e = i.x + i.size.outerWidth
        }
        for (var n, o = this.cells.length, r = t; o > r; r++)n = this.cells[r], n.setPosition(e), e += n.size.outerWidth, this.maxCellHeight = Math.max(n.size.outerHeight, this.maxCellHeight);
        this.slideableWidth = e, this._containCells()
    }, h.prototype._sizeCells = function(t) {
        for (var e = 0, i = t.length; i > e; e++) {
            var n = t[e];
            n.getSize()
        }
    }, h.prototype._init = h.prototype.reposition = function() {
        this.positionCells(), this.positionSliderAtSelected()
    }, h.prototype.getSize = function() {
        this.size = o(this.element), this.setCellAlign(), this.cursorPosition = this.size.innerWidth * this.cellAlign
    };
    var v = {center : {left : .5, right : .5}, left : {left : 0, right : 1}, right : {right : 0, left : 1}};
    h.prototype.setCellAlign = function() {
        var t = v[this.options.cellAlign];
        this.cellAlign = t ? t[this.originSide] : this.options.cellAlign
    }, h.prototype.setGallerySize = function() {
        this.options.setGallerySize && (this.viewport.style.height = this.maxCellHeight + "px")
    }, h.prototype._getWrapShiftCells = function() {
        if (this.options.wrapAround) {
            this._unshiftCells(this.beforeShiftCells), this._unshiftCells(this.afterShiftCells);
            var t = this.cursorPosition, e = this.cells.length - 1;
            this.beforeShiftCells = this._getGapCells(t, e, -1), t = this.size.innerWidth - this.cursorPosition, this.afterShiftCells = this._getGapCells(t, 0, 1)
        }
    }, h.prototype._getGapCells = function(t, e, i) {
        for (var n = []; t > 0;) {
            var o = this.cells[e];
            if (!o)break;
            n.push(o), e += i, t -= o.size.outerWidth
        }
        return n
    }, h.prototype._containCells = function() {
        if (this.options.contain && !this.options.wrapAround && this.cells.length)for (var t = this.options.rightToLeft ? "marginRight" : "marginLeft", e = this.options.rightToLeft ? "marginLeft" : "marginRight", i = this.cells[0].size[t], n = this.getLastCell(), o = this.slideableWidth - n.size[e], r = o - this.size.innerWidth * (1 - this.cellAlign), s = o < this.size.innerWidth, a = 0, l = this.cells.length; l > a; a++) {
            var h = this.cells[a];
            h.setDefaultTarget(), s ? h.target = o * this.cellAlign : (h.target = Math.max(h.target, this.cursorPosition + i), h.target = Math.min(h.target, r))
        }
    }, h.prototype.dispatchEvent = function(t, e, i) {
        var n = [e].concat(i);
        if (this.emitEvent(t, n), c && this.$element)if (e) {
            var o = c.Event(e);
            o.type = t, this.$element.trigger(o, i)
        } else this.$element.trigger(t, i)
    }, h.prototype.select = function(t, e, i) {
        if (this.isActive) {
            t = parseInt(t, 10);
            var n = this.cells.length;
            this.options.wrapAround && n > 1 && (0 > t ? this.x -= this.slideableWidth : t >= n && (this.x += this.slideableWidth)), (this.options.wrapAround || e) && (t = r.modulo(t, n)), this.cells[t] && (this.selectedIndex = t, this.setSelectedCell(), i ? this.positionSliderAtSelected() : this.startAnimation(), this.dispatchEvent("cellSelect"))
        }
    }, h.prototype.previous = function(t) {
        this.select(this.selectedIndex - 1, t)
    }, h.prototype.next = function(t) {
        this.select(this.selectedIndex + 1, t)
    }, h.prototype.setSelectedCell = function() {
        this._removeSelectedCellClass(), this.selectedCell = this.cells[this.selectedIndex], this.selectedElement = this.selectedCell.element, e.add(this.selectedElement, "is-selected")
    }, h.prototype._removeSelectedCellClass = function() {
        this.selectedCell && e.remove(this.selectedCell.element, "is-selected")
    }, h.prototype.getCell = function(t) {
        for (var e = 0, i = this.cells.length; i > e; e++) {
            var n = this.cells[e];
            if (n.element == t)return n
        }
    }, h.prototype.getCells = function(t) {
        t = r.makeArray(t);
        for (var e = [], i = 0, n = t.length; n > i; i++) {
            var o = t[i], s = this.getCell(o);
            s && e.push(s)
        }
        return e
    }, h.prototype.getCellElements = function() {
        for (var t = [], e = 0, i = this.cells.length; i > e; e++)t.push(this.cells[e].element);
        return t
    }, h.prototype.getParentCell = function(t) {
        var e = this.getCell(t);
        return e ? e : (t = r.getParent(t, ".flickity-slider > *"), this.getCell(t))
    }, h.prototype.getAdjacentCellElements = function(t, e) {
        if (!t)return [this.selectedElement];
        e = void 0 === e ? this.selectedIndex : e;
        var i = this.cells.length;
        if (1 + 2 * t >= i)return this.getCellElements();
        for (var n = [], o = e - t; e + t >= o; o++) {
            var s = this.options.wrapAround ? r.modulo(o, i) : o, a = this.cells[s];
            a && n.push(a.element)
        }
        return n
    }, h.prototype.uiChange = function() {
        this.emit("uiChange")
    }, h.prototype.childUIPointerDown = function(t) {
        this.emitEvent("childUIPointerDown", [t])
    }, h.prototype.onresize = function() {
        this.watchCSS(), this.resize()
    }, r.debounceMethod(h, "onresize", 150), h.prototype.resize = function() {
        this.isActive && (this.getSize(), this.options.wrapAround && (this.x = r.modulo(this.x, this.slideableWidth)), this.positionCells(), this._getWrapShiftCells(), this.setGallerySize(), this.positionSliderAtSelected())
    };
    var y = h.supportsConditionalCSS = function() {
        var t;
        return function() {
            if (void 0 !== t)return t;
            if (!p)return void(t = !1);
            var e = document.createElement("style"), i = document.createTextNode('body:after { content: "foo"; display: none; }');
            e.appendChild(i), document.head.appendChild(e);
            var n = p(document.body, ":after").content;
            return t = -1 != n.indexOf("foo"), document.head.removeChild(e), t
        }
    }();
    h.prototype.watchCSS = function() {
        var t = this.options.watchCSS;
        if (t) {
            var e = y();
            if (!e) {
                var i = "fallbackOn" == t ? "activate" : "deactivate";
                return void this[i]()
            }
            var n = p(this.element, ":after").content;
            -1 != n.indexOf("flickity") ? this.activate() : this.deactivate()
        }
    }, h.prototype.onkeydown = function(t) {
        if (this.options.accessibility && (!document.activeElement || document.activeElement == this.element))if (37 == t.keyCode) {
            var e = this.options.rightToLeft ? "next" : "previous";
            this.uiChange(), this[e]()
        } else if (39 == t.keyCode) {
            var i = this.options.rightToLeft ? "previous" : "next";
            this.uiChange(), this[i]()
        }
    }, h.prototype.deactivate = function() {
        if (this.isActive) {
            e.remove(this.element, "flickity-enabled"), e.remove(this.element, "flickity-rtl");
            for (var t = 0, i = this.cells.length; i > t; t++) {
                var o = this.cells[t];
                o.destroy()
            }
            this._removeSelectedCellClass(), this.element.removeChild(this.viewport), l(this.slider.children, this.element), this.options.accessibility && (this.element.removeAttribute("tabIndex"), n.unbind(this.element, "keydown", this)), this.isActive = !1, this.emit("deactivate")
        }
    }, h.prototype.destroy = function() {
        this.deactivate(), this.isResizeBound && n.unbind(t, "resize", this), this.emit("destroy"), c && this.$element && c.removeData(this.element, "flickity"), delete this.element.flickityGUID, delete f[this.guid]
    }, r.extend(h.prototype, a);
    var g = "attachEvent" in t;
    return h.setUnselectable = function(t) {
        g && t.setAttribute("unselectable", "on")
    }, h.data = function(t) {
        t = r.getQueryElement(t);
        var e = t && t.flickityGUID;
        return e && f[e]
    }, r.htmlInit(h, "flickity"), c && c.bridget && c.bridget("flickity", h), h.Cell = s, h
}), function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("unipointer/unipointer", ["eventEmitter/EventEmitter", "eventie/eventie"], function(i, n) {
            return e(t, i, n)
        }) : "object" == typeof exports ? module.exports = e(t, require("wolfy87-eventemitter"), require("eventie")) : t.Unipointer = e(t, t.EventEmitter, t.eventie)
}(window, function(t, e, i) {
    function n() {
    }

    function o() {
    }

    o.prototype = new e, o.prototype.bindStartEvent = function(t) {
        this._bindStartEvent(t, !0)
    }, o.prototype.unbindStartEvent = function(t) {
        this._bindStartEvent(t, !1)
    }, o.prototype._bindStartEvent = function(e, n) {
        n = void 0 === n ? !0 : !!n;
        var o = n ? "bind" : "unbind";
        t.navigator.pointerEnabled ? i[o](e, "pointerdown", this) : t.navigator.msPointerEnabled ? i[o](e, "MSPointerDown", this) : (i[o](e, "mousedown", this), i[o](e, "touchstart", this))
    }, o.prototype.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, o.prototype.getTouch = function(t) {
        for (var e = 0, i = t.length; i > e; e++) {
            var n = t[e];
            if (n.identifier == this.pointerIdentifier)return n
        }
    }, o.prototype.onmousedown = function(t) {
        var e = t.button;
        e && 0 !== e && 1 !== e || this._pointerDown(t, t)
    }, o.prototype.ontouchstart = function(t) {
        this._pointerDown(t, t.changedTouches[0])
    }, o.prototype.onMSPointerDown = o.prototype.onpointerdown = function(t) {
        this._pointerDown(t, t)
    }, o.prototype._pointerDown = function(t, e) {
        this.isPointerDown || (this.isPointerDown = !0, this.pointerIdentifier = void 0 !== e.pointerId ? e.pointerId : e.identifier, this.pointerDown(t, e))
    }, o.prototype.pointerDown = function(t, e) {
        this._bindPostStartEvents(t), this.emitEvent("pointerDown", [t, e])
    };
    var r = {
        mousedown     : ["mousemove", "mouseup"],
        touchstart    : ["touchmove", "touchend", "touchcancel"],
        pointerdown   : ["pointermove", "pointerup", "pointercancel"],
        MSPointerDown : ["MSPointerMove", "MSPointerUp", "MSPointerCancel"]
    };
    return o.prototype._bindPostStartEvents = function(e) {
        if (e) {
            for (var n = r[e.type], o = e.preventDefault ? t : document, s = 0, a = n.length; a > s; s++) {
                var l = n[s];
                i.bind(o, l, this)
            }
            this._boundPointerEvents = {events : n, node : o}
        }
    }, o.prototype._unbindPostStartEvents = function() {
        var t = this._boundPointerEvents;
        if (t && t.events) {
            for (var e = 0, n = t.events.length; n > e; e++) {
                var o = t.events[e];
                i.unbind(t.node, o, this)
            }
            delete this._boundPointerEvents
        }
    }, o.prototype.onmousemove = function(t) {
        this._pointerMove(t, t)
    }, o.prototype.onMSPointerMove = o.prototype.onpointermove = function(t) {
        t.pointerId == this.pointerIdentifier && this._pointerMove(t, t)
    }, o.prototype.ontouchmove = function(t) {
        var e = this.getTouch(t.changedTouches);
        e && this._pointerMove(t, e)
    }, o.prototype._pointerMove = function(t, e) {
        this.pointerMove(t, e)
    }, o.prototype.pointerMove = function(t, e) {
        this.emitEvent("pointerMove", [t, e])
    }, o.prototype.onmouseup = function(t) {
        this._pointerUp(t, t)
    }, o.prototype.onMSPointerUp = o.prototype.onpointerup = function(t) {
        t.pointerId == this.pointerIdentifier && this._pointerUp(t, t)
    }, o.prototype.ontouchend = function(t) {
        var e = this.getTouch(t.changedTouches);
        e && this._pointerUp(t, e)
    }, o.prototype._pointerUp = function(t, e) {
        this._pointerDone(), this.pointerUp(t, e)
    }, o.prototype.pointerUp = function(t, e) {
        this.emitEvent("pointerUp", [t, e])
    }, o.prototype._pointerDone = function() {
        this.isPointerDown = !1, delete this.pointerIdentifier, this._unbindPostStartEvents(), this.pointerDone()
    }, o.prototype.pointerDone = n, o.prototype.onMSPointerCancel = o.prototype.onpointercancel = function(t) {
        t.pointerId == this.pointerIdentifier && this._pointerCancel(t, t)
    }, o.prototype.ontouchcancel = function(t) {
        var e = this.getTouch(t.changedTouches);
        e && this._pointerCancel(t, e)
    }, o.prototype._pointerCancel = function(t, e) {
        this._pointerDone(), this.pointerCancel(t, e)
    }, o.prototype.pointerCancel = function(t, e) {
        this.emitEvent("pointerCancel", [t, e])
    }, o.getPointerPoint = function(t) {
        return {x : void 0 !== t.pageX ? t.pageX : t.clientX, y : void 0 !== t.pageY ? t.pageY : t.clientY}
    }, o
}), function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("unidragger/unidragger", ["eventie/eventie", "unipointer/unipointer"], function(i, n) {
            return e(t, i, n)
        }) : "object" == typeof exports ? module.exports = e(t, require("eventie"), require("unipointer")) : t.Unidragger = e(t, t.eventie, t.Unipointer)
}(window, function(t, e, i) {
    function n() {
    }

    function o(t) {
        t.preventDefault ? t.preventDefault() : t.returnValue = !1
    }

    function r() {
    }

    function s() {
        return !1
    }

    r.prototype = new i, r.prototype.bindHandles = function() {
        this._bindHandles(!0)
    }, r.prototype.unbindHandles = function() {
        this._bindHandles(!1)
    };
    var a = t.navigator;
    r.prototype._bindHandles = function(t) {
        t = void 0 === t ? !0 : !!t;
        var i;
        i = a.pointerEnabled ? function(e) {
                e.style.touchAction = t ? "none" : ""
            } : a.msPointerEnabled ? function(e) {
                    e.style.msTouchAction = t ? "none" : ""
                } : function() {
                    t && h(s)
                };
        for (var n = t ? "bind" : "unbind", o = 0, r = this.handles.length; r > o; o++) {
            var s = this.handles[o];
            this._bindStartEvent(s, t), i(s), e[n](s, "click", this)
        }
    };
    var l = "attachEvent" in document.documentElement, h = l ? function(t) {
            "IMG" == t.nodeName && (t.ondragstart = s);
            for (var e = t.querySelectorAll("img"), i = 0, n = e.length; n > i; i++) {
                var o = e[i];
                o.ondragstart = s
            }
        } : n;
    r.prototype.pointerDown = function(i, n) {
        if ("INPUT" == i.target.nodeName && "range" == i.target.type)return this.isPointerDown = !1, void delete this.pointerIdentifier;
        this._dragPointerDown(i, n);
        var o = document.activeElement;
        o && o.blur && o.blur(), this._bindPostStartEvents(i), this.pointerDownScroll = r.getScrollPosition(), e.bind(t, "scroll", this), this.emitEvent("pointerDown", [i, n])
    }, r.prototype._dragPointerDown = function(t, e) {
        this.pointerDownPoint = i.getPointerPoint(e);
        var n = "touchstart" == t.type, r = t.target.nodeName;
        n || "SELECT" == r || o(t)
    }, r.prototype.pointerMove = function(t, e) {
        var i = this._dragPointerMove(t, e);
        this.emitEvent("pointerMove", [t, e, i]), this._dragMove(t, e, i)
    }, r.prototype._dragPointerMove = function(t, e) {
        var n = i.getPointerPoint(e), o = {x : n.x - this.pointerDownPoint.x, y : n.y - this.pointerDownPoint.y};
        return !this.isDragging && this.hasDragStarted(o) && this._dragStart(t, e), o
    }, r.prototype.hasDragStarted = function(t) {
        return Math.abs(t.x) > 3 || Math.abs(t.y) > 3
    }, r.prototype.pointerUp = function(t, e) {
        this.emitEvent("pointerUp", [t, e]), this._dragPointerUp(t, e)
    }, r.prototype._dragPointerUp = function(t, e) {
        this.isDragging ? this._dragEnd(t, e) : this._staticClick(t, e)
    }, r.prototype.pointerDone = function() {
        e.unbind(t, "scroll", this)
    }, r.prototype._dragStart = function(t, e) {
        this.isDragging = !0, this.dragStartPoint = r.getPointerPoint(e), this.isPreventingClicks = !0, this.dragStart(t, e)
    }, r.prototype.dragStart = function(t, e) {
        this.emitEvent("dragStart", [t, e])
    }, r.prototype._dragMove = function(t, e, i) {
        this.isDragging && this.dragMove(t, e, i)
    }, r.prototype.dragMove = function(t, e, i) {
        o(t), this.emitEvent("dragMove", [t, e, i])
    }, r.prototype._dragEnd = function(t, e) {
        this.isDragging = !1;
        var i = this;
        setTimeout(function() {
            delete i.isPreventingClicks
        }), this.dragEnd(t, e)
    }, r.prototype.dragEnd = function(t, e) {
        this.emitEvent("dragEnd", [t, e])
    }, r.prototype.pointerDone = function() {
        e.unbind(t, "scroll", this), delete this.pointerDownScroll
    }, r.prototype.onclick = function(t) {
        this.isPreventingClicks && o(t)
    }, r.prototype._staticClick = function(t, e) {
        if (!this.isIgnoringMouseUp || "mouseup" != t.type) {
            var i = t.target.nodeName;
            if (("INPUT" == i || "TEXTAREA" == i) && t.target.focus(), this.staticClick(t, e), "mouseup" != t.type) {
                this.isIgnoringMouseUp = !0;
                var n = this;
                setTimeout(function() {
                    delete n.isIgnoringMouseUp
                }, 400)
            }
        }
    }, r.prototype.staticClick = function(t, e) {
        this.emitEvent("staticClick", [t, e])
    }, r.prototype.onscroll = function() {
        var t = r.getScrollPosition(), e = this.pointerDownScroll.x - t.x, i = this.pointerDownScroll.y - t.y;
        (Math.abs(e) > 3 || Math.abs(i) > 3) && this._pointerDone()
    }, r.getPointerPoint = function(t) {
        return {x : void 0 !== t.pageX ? t.pageX : t.clientX, y : void 0 !== t.pageY ? t.pageY : t.clientY}
    };
    var c = void 0 !== t.pageYOffset;
    return r.getScrollPosition = function() {
        return {x : c ? t.pageXOffset : document.body.scrollLeft, y : c ? t.pageYOffset : document.body.scrollTop}
    }, r.getPointerPoint = i.getPointerPoint, r
}), function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("flickity/js/drag", ["classie/classie", "eventie/eventie", "./flickity", "unidragger/unidragger", "fizzy-ui-utils/utils"], function(i, n, o, r, s) {
            return e(t, i, n, o, r, s)
        }) : "object" == typeof exports ? module.exports = e(t, require("desandro-classie"), require("eventie"), require("./flickity"), require("unidragger"), require("fizzy-ui-utils")) : t.Flickity = e(t, t.classie, t.eventie, t.Flickity, t.Unidragger, t.fizzyUIUtils)
}(window, function(t, e, i, n, o, r) {
    function s(t) {
        t.preventDefault ? t.preventDefault() : t.returnValue = !1
    }

    r.extend(n.defaults, {draggable : !0}), n.createMethods.push("_createDrag"), r.extend(n.prototype, o.prototype), n.prototype._createDrag = function() {
        this.on("activate", this.bindDrag), this.on("uiChange", this._uiChangeDrag), this.on("childUIPointerDown", this._childUIPointerDownDrag), this.on("deactivate", this.unbindDrag)
    }, n.prototype.bindDrag = function() {
        this.options.draggable && !this.isDragBound && (e.add(this.element, "is-draggable"), this.handles = [this.viewport], this.bindHandles(), this.isDragBound = !0)
    }, n.prototype.unbindDrag = function() {
        this.isDragBound && (e.remove(this.element, "is-draggable"), this.unbindHandles(), delete this.isDragBound)
    }, n.prototype._uiChangeDrag = function() {
        delete this.isFreeScrolling
    }, n.prototype._childUIPointerDownDrag = function(t) {
        s(t), this.pointerDownFocus(t)
    }, n.prototype.pointerDown = function(n, r) {
        if ("INPUT" == n.target.nodeName && "range" == n.target.type)return this.isPointerDown = !1, void delete this.pointerIdentifier;
        this._dragPointerDown(n, r);
        var s = document.activeElement;
        s && s.blur && s != this.element && s != document.body && s.blur(), this.pointerDownFocus(n), this.dragX = this.x, e.add(this.viewport, "is-pointer-down"), this._bindPostStartEvents(n), this.pointerDownScroll = o.getScrollPosition(), i.bind(t, "scroll", this), this.dispatchEvent("pointerDown", n, [r])
    };
    var a = {touchstart : !0, MSPointerDown : !0}, l = {INPUT : !0, SELECT : !0};
    return n.prototype.pointerDownFocus = function(e) {
        if (this.options.accessibility && !a[e.type] && !l[e.target.nodeName]) {
            var i = t.pageYOffset;
            this.element.focus(), t.pageYOffset != i && t.scrollTo(t.pageXOffset, i)
        }
    }, n.prototype.hasDragStarted = function(t) {
        return Math.abs(t.x) > 3
    }, n.prototype.pointerUp = function(t, i) {
        e.remove(this.viewport, "is-pointer-down"), this.dispatchEvent("pointerUp", t, [i]), this._dragPointerUp(t, i)
    }, n.prototype.pointerDone = function() {
        i.unbind(t, "scroll", this), delete this.pointerDownScroll
    }, n.prototype.dragStart = function(t, e) {
        this.dragStartPosition = this.x, this.startAnimation(), this.dispatchEvent("dragStart", t, [e])
    }, n.prototype.dragMove = function(t, e, i) {
        s(t), this.previousDragX = this.dragX;
        var n = this.options.rightToLeft ? -1 : 1, o = this.dragStartPosition + i.x * n;
        if (!this.options.wrapAround && this.cells.length) {
            var r = Math.max(-this.cells[0].target, this.dragStartPosition);
            o = o > r ? .5 * (o + r) : o;
            var a = Math.min(-this.getLastCell().target, this.dragStartPosition);
            o = a > o ? .5 * (o + a) : o
        }
        this.dragX = o, this.dragMoveTime = new Date, this.dispatchEvent("dragMove", t, [e, i])
    }, n.prototype.dragEnd = function(t, e) {
        this.options.freeScroll && (this.isFreeScrolling = !0);
        var i = this.dragEndRestingSelect();
        if (this.options.freeScroll && !this.options.wrapAround) {
            var n = this.getRestingPosition();
            this.isFreeScrolling = -n > this.cells[0].target && -n < this.getLastCell().target
        } else this.options.freeScroll || i != this.selectedIndex || (i += this.dragEndBoostSelect());
        delete this.previousDragX, this.select(i), this.dispatchEvent("dragEnd", t, [e])
    }, n.prototype.dragEndRestingSelect = function() {
        var t = this.getRestingPosition(), e = Math.abs(this.getCellDistance(-t, this.selectedIndex)), i = this._getClosestResting(t, e, 1), n = this._getClosestResting(t, e, -1), o = i.distance < n.distance ? i.index : n.index;
        return o
    }, n.prototype._getClosestResting = function(t, e, i) {
        for (var n = this.selectedIndex, o = 1 / 0, r = this.options.contain && !this.options.wrapAround ? function(t, e) {
                return e >= t
            } : function(t, e) {
                return e > t
            }; r(e, o) && (n += i, o = e, e = this.getCellDistance(-t, n), null !== e);)e = Math.abs(e);
        return {distance : o, index : n - i}
    }, n.prototype.getCellDistance = function(t, e) {
        var i = this.cells.length, n = this.options.wrapAround && i > 1, o = n ? r.modulo(e, i) : e, s = this.cells[o];
        if (!s)return null;
        var a = n ? this.slideableWidth * Math.floor(e / i) : 0;
        return t - (s.target + a)
    }, n.prototype.dragEndBoostSelect = function() {
        if (void 0 === this.previousDragX || !this.dragMoveTime || new Date - this.dragMoveTime > 100)return 0;
        var t = this.getCellDistance(-this.dragX, this.selectedIndex), e = this.previousDragX - this.dragX;
        return t > 0 && e > 0 ? 1 : 0 > t && 0 > e ? -1 : 0
    }, n.prototype.staticClick = function(t, e) {
        var i = this.getParentCell(t.target), n = i && i.element, o = i && r.indexOf(this.cells, i);
        this.dispatchEvent("staticClick", t, [e, n, o])
    }, n
}), function(t, e) {
    "function" == typeof define && define.amd ? define("tap-listener/tap-listener", ["unipointer/unipointer"], function(i) {
            return e(t, i)
        }) : "object" == typeof exports ? module.exports = e(t, require("unipointer")) : t.TapListener = e(t, t.Unipointer)
}(window, function(t, e) {
    function i(t) {
        this.bindTap(t)
    }

    i.prototype = new e, i.prototype.bindTap = function(t) {
        t && (this.unbindTap(), this.tapElement = t, this._bindStartEvent(t, !0))
    }, i.prototype.unbindTap = function() {
        this.tapElement && (this._bindStartEvent(this.tapElement, !0), delete this.tapElement)
    };
    var n = void 0 !== t.pageYOffset;
    return i.prototype.pointerUp = function(i, o) {
        if (!this.isIgnoringMouseUp || "mouseup" != i.type) {
            var r = e.getPointerPoint(o), s = this.tapElement.getBoundingClientRect(), a = n ? t.pageXOffset : document.body.scrollLeft, l = n ? t.pageYOffset : document.body.scrollTop, h = r.x >= s.left + a && r.x <= s.right + a && r.y >= s.top + l && r.y <= s.bottom + l;
            h && this.emitEvent("tap", [i, o]), "mouseup" != i.type && (this.isIgnoringMouseUp = !0, setTimeout(function() {
                delete this.isIgnoringMouseUp
            }.bind(this), 320))
        }
    }, i.prototype.destroy = function() {
        this.pointerDone(), this.unbindTap()
    }, i
}), function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("flickity/js/prev-next-button", ["eventie/eventie", "./flickity", "tap-listener/tap-listener", "fizzy-ui-utils/utils"], function(i, n, o, r) {
            return e(t, i, n, o, r)
        }) : "object" == typeof exports ? module.exports = e(t, require("eventie"), require("./flickity"), require("tap-listener"), require("fizzy-ui-utils")) : e(t, t.eventie, t.Flickity, t.TapListener, t.fizzyUIUtils)
}(window, function(t, e, i, n, o) {
    function r(t, e) {
        this.direction = t, this.parent = e, this._create()
    }

    function s(t) {
        return "string" == typeof t ? t : "M " + t.x0 + ",50 L " + t.x1 + "," + (t.y1 + 50) + " L " + t.x2 + "," + (t.y2 + 50) + " L " + t.x3 + ",50  L " + t.x2 + "," + (50 - t.y2) + " L " + t.x1 + "," + (50 - t.y1) + " Z"
    }

    var a = "http://www.w3.org/2000/svg", l = function() {
        function t() {
            if (void 0 !== e)return e;
            var t = document.createElement("div");
            return t.innerHTML = "<svg/>", e = (t.firstChild && t.firstChild.namespaceURI) == a
        }

        var e;
        return t
    }();
    return r.prototype = new n, r.prototype._create = function() {
        this.isEnabled = !0, this.isPrevious = -1 == this.direction;
        var t = this.parent.options.rightToLeft ? 1 : -1;
        this.isLeft = this.direction == t;
        var e = this.element = document.createElement("button");
        if (e.className = "flickity-prev-next-button", e.className += this.isPrevious ? " previous" : " next", e.setAttribute("type", "button"), this.disable(), e.setAttribute("aria-label", this.isPrevious ? "previous" : "next"), i.setUnselectable(e), l()) {
            var n = this.createSVG();
            e.appendChild(n)
        } else this.setArrowText(), e.className += " no-svg";
        var o = this;
        this.onCellSelect = function() {
            o.update()
        }, this.parent.on("cellSelect", this.onCellSelect), this.on("tap", this.onTap), this.on("pointerDown", function(t, e) {
            o.parent.childUIPointerDown(e)
        })
    }, r.prototype.activate = function() {
        this.bindTap(this.element), e.bind(this.element, "click", this), this.parent.element.appendChild(this.element)
    }, r.prototype.deactivate = function() {
        this.parent.element.removeChild(this.element), n.prototype.destroy.call(this), e.unbind(this.element, "click", this)
    }, r.prototype.createSVG = function() {
        var t = document.createElementNS(a, "svg");
        t.setAttribute("viewBox", "0 0 100 100");
        var e = document.createElementNS(a, "path"), i = s(this.parent.options.arrowShape);
        return e.setAttribute("d", i), e.setAttribute("class", "arrow"), this.isLeft || e.setAttribute("transform", "translate(100, 100) rotate(180) "), t.appendChild(e), t
    }, r.prototype.setArrowText = function() {
        var t = this.parent.options, e = this.isLeft ? t.leftArrowText : t.rightArrowText;
        o.setText(this.element, e)
    }, r.prototype.onTap = function() {
        if (this.isEnabled) {
            this.parent.uiChange();
            var t = this.isPrevious ? "previous" : "next";
            this.parent[t]()
        }
    }, r.prototype.handleEvent = o.handleEvent, r.prototype.onclick = function() {
        var t = document.activeElement;
        t && t == this.element && this.onTap()
    }, r.prototype.enable = function() {
        this.isEnabled || (this.element.disabled = !1, this.isEnabled = !0)
    }, r.prototype.disable = function() {
        this.isEnabled && (this.element.disabled = !0, this.isEnabled = !1)
    }, r.prototype.update = function() {
        var t = this.parent.cells;
        if (this.parent.options.wrapAround && t.length > 1)return void this.enable();
        var e = t.length ? t.length - 1 : 0, i = this.isPrevious ? 0 : e, n = this.parent.selectedIndex == i ? "disable" : "enable";
        this[n]()
    }, r.prototype.destroy = function() {
        this.deactivate()
    }, o.extend(i.defaults, {
        prevNextButtons : !0,
        leftArrowText   : "‹",
        rightArrowText  : "›",
        arrowShape      : {x0 : 10, x1 : 60, y1 : 50, x2 : 70, y2 : 40, x3 : 30}
    }), i.createMethods.push("_createPrevNextButtons"), i.prototype._createPrevNextButtons = function() {
        this.options.prevNextButtons && (this.prevButton = new r(-1, this), this.nextButton = new r(1, this), this.on("activate", this.activatePrevNextButtons))
    }, i.prototype.activatePrevNextButtons = function() {
        this.prevButton.activate(), this.nextButton.activate(), this.on("deactivate", this.deactivatePrevNextButtons)
    }, i.prototype.deactivatePrevNextButtons = function() {
        this.prevButton.deactivate(), this.nextButton.deactivate(), this.off("deactivate", this.deactivatePrevNextButtons)
    }, i.PrevNextButton = r, i
}), function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("flickity/js/page-dots", ["eventie/eventie", "./flickity", "tap-listener/tap-listener", "fizzy-ui-utils/utils"], function(i, n, o, r) {
            return e(t, i, n, o, r)
        }) : "object" == typeof exports ? module.exports = e(t, require("eventie"), require("./flickity"), require("tap-listener"), require("fizzy-ui-utils")) : e(t, t.eventie, t.Flickity, t.TapListener, t.fizzyUIUtils)
}(window, function(t, e, i, n, o) {
    function r(t) {
        this.parent = t, this._create()
    }

    return r.prototype = new n, r.prototype._create = function() {
        this.holder = document.createElement("ol"), this.holder.className = "flickity-page-dots", i.setUnselectable(this.holder), this.dots = [];
        var t = this;
        this.onCellSelect = function() {
            t.updateSelected()
        }, this.parent.on("cellSelect", this.onCellSelect), this.on("tap", this.onTap), this.on("pointerDown", function(e, i) {
            t.parent.childUIPointerDown(i)
        })
    }, r.prototype.activate = function() {
        this.setDots(), this.bindTap(this.holder), this.parent.element.appendChild(this.holder)
    }, r.prototype.deactivate = function() {
        this.parent.element.removeChild(this.holder), n.prototype.destroy.call(this)
    }, r.prototype.setDots = function() {
        var t = this.parent.cells.length - this.dots.length;
        t > 0 ? this.addDots(t) : 0 > t && this.removeDots(-t)
    }, r.prototype.addDots = function(t) {
        for (var e = document.createDocumentFragment(), i = []; t;) {
            var n = document.createElement("li");
            n.className = "dot", e.appendChild(n), i.push(n), t--
        }
        this.holder.appendChild(e), this.dots = this.dots.concat(i)
    }, r.prototype.removeDots = function(t) {
        for (var e = this.dots.splice(this.dots.length - t, t), i = 0, n = e.length; n > i; i++) {
            var o = e[i];
            this.holder.removeChild(o)
        }
    }, r.prototype.updateSelected = function() {
        this.selectedDot && (this.selectedDot.className = "dot"), this.dots.length && (this.selectedDot = this.dots[this.parent.selectedIndex], this.selectedDot.className = "dot is-selected")
    }, r.prototype.onTap = function(t) {
        var e = t.target;
        if ("LI" == e.nodeName) {
            this.parent.uiChange();
            var i = o.indexOf(this.dots, e);
            this.parent.select(i)
        }
    }, r.prototype.destroy = function() {
        this.deactivate()
    }, i.PageDots = r, o.extend(i.defaults, {pageDots : !0}), i.createMethods.push("_createPageDots"), i.prototype._createPageDots = function() {
        this.options.pageDots && (this.pageDots = new r(this), this.on("activate", this.activatePageDots), this.on("cellAddedRemoved", this.onCellAddedRemovedPageDots), this.on("deactivate", this.deactivatePageDots))
    }, i.prototype.activatePageDots = function() {
        this.pageDots.activate()
    }, i.prototype.onCellAddedRemovedPageDots = function() {
        this.pageDots.setDots()
    }, i.prototype.deactivatePageDots = function() {
        this.pageDots.deactivate()
    }, i.PageDots = r, i
}), function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("flickity/js/player", ["eventEmitter/EventEmitter", "eventie/eventie", "fizzy-ui-utils/utils", "./flickity"], function(t, i, n, o) {
            return e(t, i, n, o)
        }) : "object" == typeof exports ? module.exports = e(require("wolfy87-eventemitter"), require("eventie"), require("fizzy-ui-utils"), require("./flickity")) : e(t.EventEmitter, t.eventie, t.fizzyUIUtils, t.Flickity)
}(window, function(t, e, i, n) {
    function o(t) {
        if (this.parent = t, this.state = "stopped", s) {
            var e = this;
            this.onVisibilityChange = function() {
                e.visibilityChange()
            }
        }
    }

    var r, s;
    return "hidden" in document ? (r = "hidden", s = "visibilitychange"): "webkitHidden"
    in
    document && (r = "webkitHidden", s = "webkitvisibilitychange"), o.prototype = new t, o.prototype.play = function() {
        "playing" != this.state && (this.state = "playing", s && document.addEventListener(s, this.onVisibilityChange, !1), this.tick())
    }, o.prototype.tick = function() {
        if ("playing" == this.state) {
            var t = this.parent.options.autoPlay;
            t = "number" == typeof t ? t : 3e3;
            var e = this;
            this.clear(), this.timeout = setTimeout(function() {
                e.parent.next(!0), e.tick()
            }, t)
        }
    }, o.prototype.stop = function() {
        this.state = "stopped", this.clear(), s && document.removeEventListener(s, this.onVisibilityChange, !1)
    }, o.prototype.clear = function() {
        clearTimeout(this.timeout)
    }, o.prototype.pause = function() {
        "playing" == this.state && (this.state = "paused", this.clear())
    }, o.prototype.unpause = function() {
        "paused" == this.state && this.play()
    }, o.prototype.visibilityChange = function() {
        var t = document[r];
        this[t ? "pause" : "unpause"]()
    }, i.extend(n.defaults, {pauseAutoPlayOnHover : !0}), n.createMethods.push("_createPlayer"), n.prototype._createPlayer = function() {
        this.player = new o(this), this.on("activate", this.activatePlayer), this.on("uiChange", this.stopPlayer), this.on("pointerDown", this.stopPlayer), this.on("deactivate", this.deactivatePlayer)
    }, n.prototype.activatePlayer = function() {
        this.options.autoPlay && (this.player.play(), e.bind(this.element, "mouseenter", this), this.isMouseenterBound = !0)
    }, n.prototype.playPlayer = function() {
        this.player.play()
    }, n.prototype.stopPlayer = function() {
        this.player.stop()
    }, n.prototype.pausePlayer = function() {
        this.player.pause()
    }, n.prototype.unpausePlayer = function() {
        this.player.unpause()
    }, n.prototype.deactivatePlayer = function() {
        this.player.stop(), this.isMouseenterBound && (e.unbind(this.element, "mouseenter", this), delete this.isMouseenterBound)
    }, n.prototype.onmouseenter = function() {
        this.options.pauseAutoPlayOnHover && (this.player.pause(), e.bind(this.element, "mouseleave", this))
    }, n.prototype.onmouseleave = function() {
        this.player.unpause(), e.unbind(this.element, "mouseleave", this)
    }, n.Player = o, n
}), function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("flickity/js/add-remove-cell", ["./flickity", "fizzy-ui-utils/utils"], function(i, n) {
            return e(t, i, n)
        }) : "object" == typeof exports ? module.exports = e(t, require("./flickity"), require("fizzy-ui-utils")) : e(t, t.Flickity, t.fizzyUIUtils)
}(window, function(t, e, i) {
    function n(t) {
        for (var e = document.createDocumentFragment(), i = 0, n = t.length; n > i; i++) {
            var o = t[i];
            e.appendChild(o.element)
        }
        return e
    }

    return e.prototype.insert = function(t, e) {
        var i = this._makeCells(t);
        if (i && i.length) {
            var o = this.cells.length;
            e = void 0 === e ? o : e;
            var r = n(i), s = e == o;
            if (s) this.slider.appendChild(r); else {
                var a = this.cells[e].element;
                this.slider.insertBefore(r, a)
            }
            if (0 === e) this.cells = i.concat(this.cells); else if (s) this.cells = this.cells.concat(i); else {
                var l = this.cells.splice(e, o - e);
                this.cells = this.cells.concat(i).concat(l)
            }
            this._sizeCells(i);
            var h = e > this.selectedIndex ? 0 : i.length;
            this._cellAddedRemoved(e, h)
        }
    }, e.prototype.append = function(t) {
        this.insert(t, this.cells.length)
    }, e.prototype.prepend = function(t) {
        this.insert(t, 0)
    }, e.prototype.remove = function(t) {
        var e, n, o, r = this.getCells(t), s = 0;
        for (e = 0, n = r.length; n > e; e++) {
            o = r[e];
            var a = i.indexOf(this.cells, o) < this.selectedIndex;
            s -= a ? 1 : 0
        }
        for (e = 0, n = r.length; n > e; e++)o = r[e], o.remove(), i.removeFrom(this.cells, o);
        r.length && this._cellAddedRemoved(0, s)
    }, e.prototype._cellAddedRemoved = function(t, e) {
        e = e || 0, this.selectedIndex += e, this.selectedIndex = Math.max(0, Math.min(this.cells.length - 1, this.selectedIndex)), this.emitEvent("cellAddedRemoved", [t, e]), this.cellChange(t, !0)
    }, e.prototype.cellSizeChange = function(t) {
        var e = this.getCell(t);
        if (e) {
            e.getSize();
            var n = i.indexOf(this.cells, e);
            this.cellChange(n)
        }
    }, e.prototype.cellChange = function(t, e) {
        var i = this.slideableWidth;
        if (this._positionCells(t), this._getWrapShiftCells(), this.setGallerySize(), this.options.freeScroll) {
            var n = i - this.slideableWidth;
            this.x += n * this.cellAlign, this.positionSlider()
        } else e && this.positionSliderAtSelected(), this.select(this.selectedIndex)
    }, e
}), function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("flickity/js/lazyload", ["classie/classie", "eventie/eventie", "./flickity", "fizzy-ui-utils/utils"], function(i, n, o, r) {
            return e(t, i, n, o, r)
        }) : "object" == typeof exports ? module.exports = e(t, require("desandro-classie"), require("eventie"), require("./flickity"), require("fizzy-ui-utils")) : e(t, t.classie, t.eventie, t.Flickity, t.fizzyUIUtils)
}(window, function(t, e, i, n, o) {
    "use strict";
    function r(t) {
        if ("IMG" == t.nodeName && t.getAttribute("data-flickity-lazyload"))return [t];
        var e = t.querySelectorAll("img[data-flickity-lazyload]");
        return o.makeArray(e)
    }

    function s(t, e) {
        this.img = t, this.flickity = e, this.load()
    }

    return n.createMethods.push("_createLazyload"), n.prototype._createLazyload = function() {
        this.on("cellSelect", this.lazyLoad)
    }, n.prototype.lazyLoad = function() {
        var t = this.options.lazyLoad;
        if (t) {
            for (var e = "number" == typeof t ? t : 0, i = this.getAdjacentCellElements(e), n = [], o = 0, a = i.length; a > o; o++) {
                var l = i[o], h = r(l);
                n = n.concat(h)
            }
            for (o = 0, a = n.length; a > o; o++) {
                var c = n[o];
                new s(c, this)
            }
        }
    }, s.prototype.handleEvent = o.handleEvent, s.prototype.load = function() {
        i.bind(this.img, "load", this), i.bind(this.img, "error", this), this.img.src = this.img.getAttribute("data-flickity-lazyload"), this.img.removeAttribute("data-flickity-lazyload")
    }, s.prototype.onload = function(t) {
        this.complete(t, "flickity-lazyloaded")
    }, s.prototype.onerror = function(t) {
        this.complete(t, "flickity-lazyerror")
    }, s.prototype.complete = function(t, n) {
        i.unbind(this.img, "load", this), i.unbind(this.img, "error", this);
        var o = this.flickity.getParentCell(this.img), r = o && o.element;
        this.flickity.cellSizeChange(r), e.add(this.img, n), this.flickity.dispatchEvent("lazyLoad", t, r)
    }, n.LazyLoader = s, n
}), function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("flickity/js/index", ["./flickity", "./drag", "./prev-next-button", "./page-dots", "./player", "./add-remove-cell", "./lazyload"], e) : "object" == typeof exports && (module.exports = e(require("./flickity"), require("./drag"), require("./prev-next-button"), require("./page-dots"), require("./player"), require("./add-remove-cell"), require("./lazyload")))
}(window, function(t) {
    return t
}), function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("flickity-as-nav-for/as-nav-for", ["classie/classie", "flickity/js/index", "fizzy-ui-utils/utils"], function(i, n, o) {
            return e(t, i, n, o)
        }) : "object" == typeof exports ? module.exports = e(t, require("desandro-classie"), require("flickity"), require("fizzy-ui-utils")) : t.Flickity = e(t, t.classie, t.Flickity, t.fizzyUIUtils)
}(window, function(t, e, i, n) {
    return i.createMethods.push("_createAsNavFor"), i.prototype._createAsNavFor = function() {
        this.on("activate", this.activateAsNavFor), this.on("deactivate", this.deactivateAsNavFor), this.on("destroy", this.destroyAsNavFor);
        var t = this.options.asNavFor;
        if (t) {
            var e = this;
            setTimeout(function() {
                e.setNavCompanion(t)
            })
        }
    }, i.prototype.setNavCompanion = function(t) {
        t = n.getQueryElement(t);
        var e = i.data(t);
        if (e && e != this) {
            this.navCompanion = e;
            var o = this;
            this.onNavCompanionSelect = function() {
                o.navCompanionSelect()
            }, e.on("cellSelect", this.onNavCompanionSelect), this.on("staticClick", this.onNavStaticClick), this.navCompanionSelect()
        }
    }, i.prototype.navCompanionSelect = function() {
        if (this.navCompanion) {
            var t = this.navCompanion.selectedIndex;
            this.select(t), this.removeNavSelectedElement(), this.selectedIndex == t && (this.navSelectedElement = this.cells[t].element, e.add(this.navSelectedElement, "is-nav-selected"))
        }
    }, i.prototype.activateAsNavFor = function() {
        this.navCompanionSelect()
    }, i.prototype.removeNavSelectedElement = function() {
        this.navSelectedElement && (e.remove(this.navSelectedElement, "is-nav-selected"), delete this.navSelectedElement)
    }, i.prototype.onNavStaticClick = function(t, e, i, n) {
        "number" == typeof n && this.navCompanion.select(n)
    }, i.prototype.deactivateAsNavFor = function() {
        this.removeNavSelectedElement()
    }, i.prototype.destroyAsNavFor = function() {
        this.navCompanion && (this.navCompanion.off("cellSelect", this.onNavCompanionSelect), this.off("staticClick", this.onNavStaticClick), delete this.navCompanion)
    }, i
}), function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("imagesloaded/imagesloaded", ["eventEmitter/EventEmitter", "eventie/eventie"], function(i, n) {
            return e(t, i, n)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("wolfy87-eventemitter"), require("eventie")) : t.imagesLoaded = e(t, t.EventEmitter, t.eventie)
}(window, function(t, e, i) {
    function n(t, e) {
        for (var i in e)t[i] = e[i];
        return t
    }

    function o(t) {
        return "[object Array]" == p.call(t)
    }

    function r(t) {
        var e = [];
        if (o(t)) e = t; else if ("number" == typeof t.length)for (var i = 0; i < t.length; i++)e.push(t[i]); else e.push(t);
        return e
    }

    function s(t, e, i) {
        if (!(this instanceof s))return new s(t, e, i);
        "string" == typeof t && (t = document.querySelectorAll(t)), this.elements = r(t), this.options = n({}, this.options), "function" == typeof e ? i = e : n(this.options, e), i && this.on("always", i), this.getImages(), h && (this.jqDeferred = new h.Deferred);
        var o = this;
        setTimeout(function() {
            o.check()
        })
    }

    function a(t) {
        this.img = t
    }

    function l(t, e) {
        this.url = t, this.element = e, this.img = new Image
    }

    var h = t.jQuery, c = t.console, p = Object.prototype.toString;
    s.prototype = new e, s.prototype.options = {}, s.prototype.getImages = function() {
        this.images = [];
        for (var t = 0; t < this.elements.length; t++) {
            var e = this.elements[t];
            this.addElementImages(e)
        }
    }, s.prototype.addElementImages = function(t) {
        "IMG" == t.nodeName && this.addImage(t), this.options.background === !0 && this.addElementBackgroundImages(t);
        var e = t.nodeType;
        if (e && d[e]) {
            for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {
                var o = i[n];
                this.addImage(o)
            }
            if ("string" == typeof this.options.background) {
                var r = t.querySelectorAll(this.options.background);
                for (n = 0; n < r.length; n++) {
                    var s = r[n];
                    this.addElementBackgroundImages(s)
                }
            }
        }
    };
    var d = {1 : !0, 9 : !0, 11 : !0};
    s.prototype.addElementBackgroundImages = function(t) {
        for (var e = u(t), i = /url\(['"]*([^'"\)]+)['"]*\)/gi, n = i.exec(e.backgroundImage); null !== n;) {
            var o = n && n[1];
            o && this.addBackground(o, t), n = i.exec(e.backgroundImage)
        }
    };
    var u = t.getComputedStyle || function(t) {
            return t.currentStyle
        };
    return s.prototype.addImage = function(t) {
        var e = new a(t);
        this.images.push(e)
    }, s.prototype.addBackground = function(t, e) {
        var i = new l(t, e);
        this.images.push(i)
    }, s.prototype.check = function() {
        function t(t, i, n) {
            setTimeout(function() {
                e.progress(t, i, n)
            })
        }

        var e = this;
        if (this.progressedCount = 0, this.hasAnyBroken = !1, !this.images.length)return void this.complete();
        for (var i = 0; i < this.images.length; i++) {
            var n = this.images[i];
            n.once("progress", t), n.check()
        }
    }, s.prototype.progress = function(t, e, i) {
        this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emit("progress", this, t, e), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount == this.images.length && this.complete(), this.options.debug && c && c.log("progress: " + i, t, e)
    }, s.prototype.complete = function() {
        var t = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0, this.emit(t, this), this.emit("always", this), this.jqDeferred) {
            var e = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[e](this)
        }
    }, a.prototype = new e, a.prototype.check = function() {
        var t = this.getIsImageComplete();
        return t ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, i.bind(this.proxyImage, "load", this), i.bind(this.proxyImage, "error", this), i.bind(this.img, "load", this), i.bind(this.img, "error", this), void(this.proxyImage.src = this.img.src))
    }, a.prototype.getIsImageComplete = function() {
        return this.img.complete && void 0 !== this.img.naturalWidth
    }, a.prototype.confirm = function(t, e) {
        this.isLoaded = t, this.emit("progress", this, this.img, e)
    }, a.prototype.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, a.prototype.onload = function() {
        this.confirm(!0, "onload"), this.unbindEvents()
    }, a.prototype.onerror = function() {
        this.confirm(!1, "onerror"), this.unbindEvents()
    }, a.prototype.unbindEvents = function() {
        i.unbind(this.proxyImage, "load", this), i.unbind(this.proxyImage, "error", this), i.unbind(this.img, "load", this), i.unbind(this.img, "error", this)
    }, l.prototype = new a, l.prototype.check = function() {
        i.bind(this.img, "load", this), i.bind(this.img, "error", this), this.img.src = this.url;
        var t = this.getIsImageComplete();
        t && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
    }, l.prototype.unbindEvents = function() {
        i.unbind(this.img, "load", this), i.unbind(this.img, "error", this)
    }, l.prototype.confirm = function(t, e) {
        this.isLoaded = t, this.emit("progress", this, this.element, e)
    }, s.makeJQueryPlugin = function(e) {
        e = e || t.jQuery, e && (h = e, h.fn.imagesLoaded = function(t, e) {
            var i = new s(this, t, e);
            return i.jqDeferred.promise(h(this))
        })
    }, s.makeJQueryPlugin(), s
}), function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["flickity/js/index", "imagesloaded/imagesloaded"], function(i, n) {
            return e(t, i, n)
        }) : "object" == typeof exports ? module.exports = e(t, require("flickity"), require("imagesloaded")) : t.Flickity = e(t, t.Flickity, t.imagesLoaded)
}(window, function(t, e, i) {
    "use strict";
    return e.createMethods.push("_createImagesLoaded"), e.prototype._createImagesLoaded = function() {
        this.on("activate", this.imagesLoaded)
    }, e.prototype.imagesLoaded = function() {
        function t(t, i) {
            var n = e.getParentCell(i.img);
            e.cellSizeChange(n && n.element), e.options.freeScroll || e.positionSliderAtSelected()
        }

        if (this.options.imagesLoaded) {
            var e = this;
            i(this.slider).on("progress", t)
        }
    }, e
});

/*!
 * Isotope PACKAGED v3.0.0
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * http://isotope.metafizzy.co
 * Copyright 2016 Metafizzy
 */
!function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(i) {
            e(t, i)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
}(window, function(t, e) {
    "use strict";
    function i(i, r, a) {
        function u(t, e, n) {
            var o, r = "$()." + i + '("' + e + '")';
            return t.each(function(t, u) {
                var h = a.data(u, i);
                if (!h)return void s(i + " not initialized. Cannot call methods, i.e. " + r);
                var d = h[e];
                if (!d || "_" == e.charAt(0))return void s(r + " is not a valid method");
                var l = d.apply(h, n);
                o = void 0 === o ? l : o
            }), void 0 !== o ? o : t
        }

        function h(t, e) {
            t.each(function(t, n) {
                var o = a.data(n, i);
                o ? (o.option(e), o._init()) : (o = new r(n, e), a.data(n, i, o))
            })
        }

        a = a || e || t.jQuery, a && (r.prototype.option || (r.prototype.option = function(t) {
            a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
        }), a.fn[i] = function(t) {
            if ("string" == typeof t) {
                var e = o.call(arguments, 1);
                return u(this, t, e)
            }
            return h(this, t), this
        }, n(a))
    }

    function n(t) {
        !t || t && t.bridget || (t.bridget = i)
    }

    var o = Array.prototype.slice, r = t.console, s = "undefined" == typeof r ? function() {
        } : function(t) {
            r.error(t)
        };
    return n(e || t.jQuery), i
}), function(t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}(this, function() {
    function t() {
    }

    var e = t.prototype;
    return e.on = function(t, e) {
        if (t && e) {
            var i = this._events = this._events || {}, n = i[t] = i[t] || [];
            return -1 == n.indexOf(e) && n.push(e), this
        }
    }, e.once = function(t, e) {
        if (t && e) {
            this.on(t, e);
            var i = this._onceEvents = this._onceEvents || {}, n = i[t] = i[t] || {};
            return n[e] = !0, this
        }
    }, e.off = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var n = i.indexOf(e);
            return -1 != n && i.splice(n, 1), this
        }
    }, e.emitEvent = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var n = 0, o = i[n];
            e = e || [];
            for (var r = this._onceEvents && this._onceEvents[t]; o;) {
                var s = r && r[o];
                s && (this.off(t, o), delete r[o]), o.apply(this, e), n += s ? 0 : 1, o = i[n]
            }
            return this
        }
    }, t
}), function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("get-size/get-size", [], function() {
            return e()
        }) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
}(window, function() {
    "use strict";
    function t(t) {
        var e = parseFloat(t), i = -1 == t.indexOf("%") && !isNaN(e);
        return i && e
    }

    function e() {
    }

    function i() {
        for (var t = {
            width       : 0,
            height      : 0,
            innerWidth  : 0,
            innerHeight : 0,
            outerWidth  : 0,
            outerHeight : 0
        }, e = 0; h > e; e++) {
            var i = u[e];
            t[i] = 0
        }
        return t
    }

    function n(t) {
        var e = getComputedStyle(t);
        return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), e
    }

    function o() {
        if (!d) {
            d = !0;
            var e = document.createElement("div");
            e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
            var i = document.body || document.documentElement;
            i.appendChild(e);
            var o = n(e);
            r.isBoxSizeOuter = s = 200 == t(o.width), i.removeChild(e)
        }
    }

    function r(e) {
        if (o(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
            var r = n(e);
            if ("none" == r.display)return i();
            var a = {};
            a.width = e.offsetWidth, a.height = e.offsetHeight;
            for (var d = a.isBorderBox = "border-box" == r.boxSizing, l = 0; h > l; l++) {
                var f = u[l], c = r[f], m = parseFloat(c);
                a[f] = isNaN(m) ? 0 : m
            }
            var p = a.paddingLeft + a.paddingRight, y = a.paddingTop + a.paddingBottom, g = a.marginLeft + a.marginRight, v = a.marginTop + a.marginBottom, _ = a.borderLeftWidth + a.borderRightWidth, I = a.borderTopWidth + a.borderBottomWidth, z = d && s, x = t(r.width);
            x !== !1 && (a.width = x + (z ? 0 : p + _));
            var S = t(r.height);
            return S !== !1 && (a.height = S + (z ? 0 : y + I)), a.innerWidth = a.width - (p + _), a.innerHeight = a.height - (y + I), a.outerWidth = a.width + g, a.outerHeight = a.height + v, a
        }
    }

    var s, a = "undefined" == typeof console ? e : function(t) {
            console.error(t)
        }, u = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"], h = u.length, d = !1;
    return r
}), function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
}(window, function() {
    "use strict";
    var t = function() {
        var t = Element.prototype;
        if (t.matches)return "matches";
        if (t.matchesSelector)return "matchesSelector";
        for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
            var n = e[i], o = n + "MatchesSelector";
            if (t[o])return o
        }
    }();
    return function(e, i) {
        return e[t](i)
    }
}), function(t, e) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(i) {
            return e(t, i)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
}(window, function(t, e) {
    var i = {};
    i.extend = function(t, e) {
        for (var i in e)t[i] = e[i];
        return t
    }, i.modulo = function(t, e) {
        return (t % e + e) % e
    }, i.makeArray = function(t) {
        var e = [];
        if (Array.isArray(t)) e = t; else if (t && "number" == typeof t.length)for (var i = 0; i < t.length; i++)e.push(t[i]); else e.push(t);
        return e
    }, i.removeFrom = function(t, e) {
        var i = t.indexOf(e);
        -1 != i && t.splice(i, 1)
    }, i.getParent = function(t, i) {
        for (; t != document.body;)if (t = t.parentNode, e(t, i))return t
    }, i.getQueryElement = function(t) {
        return "string" == typeof t ? document.querySelector(t) : t
    }, i.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, i.filterFindElements = function(t, n) {
        t = i.makeArray(t);
        var o = [];
        return t.forEach(function(t) {
            if (t instanceof HTMLElement) {
                if (!n)return void o.push(t);
                e(t, n) && o.push(t);
                for (var i = t.querySelectorAll(n), r = 0; r < i.length; r++)o.push(i[r])
            }
        }), o
    }, i.debounceMethod = function(t, e, i) {
        var n = t.prototype[e], o = e + "Timeout";
        t.prototype[e] = function() {
            var t = this[o];
            t && clearTimeout(t);
            var e = arguments, r = this;
            this[o] = setTimeout(function() {
                n.apply(r, e), delete r[o]
            }, i || 100)
        }
    }, i.docReady = function(t) {
        "complete" == document.readyState ? t() : document.addEventListener("DOMContentLoaded", t)
    }, i.toDashed = function(t) {
        return t.replace(/(.)([A-Z])/g, function(t, e, i) {
            return e + "-" + i
        }).toLowerCase()
    };
    var n = t.console;
    return i.htmlInit = function(e, o) {
        i.docReady(function() {
            var r = i.toDashed(o), s = "data-" + r, a = document.querySelectorAll("[" + s + "]"), u = document.querySelectorAll(".js-" + r), h = i.makeArray(a).concat(i.makeArray(u)), d = s + "-options", l = t.jQuery;
            h.forEach(function(t) {
                var i, r = t.getAttribute(s) || t.getAttribute(d);
                try {
                    i = r && JSON.parse(r)
                } catch (a) {
                    return void(n && n.error("Error parsing " + s + " on " + t.className + ": " + a))
                }
                var u = new e(t, i);
                l && l.data(t, o, u)
            })
        })
    }, i
}), function(t, e) {
    "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize))
}(window, function(t, e) {
    "use strict";
    function i(t) {
        for (var e in t)return !1;
        return e = null, !0
    }

    function n(t, e) {
        t && (this.element = t, this.layout = e, this.position = {x : 0, y : 0}, this._create())
    }

    function o(t) {
        return t.replace(/([A-Z])/g, function(t) {
            return "-" + t.toLowerCase()
        })
    }

    var r = document.documentElement.style, s = "string" == typeof r.transition ? "transition" : "WebkitTransition", a = "string" == typeof r.transform ? "transform" : "WebkitTransform", u = {
        WebkitTransition : "webkitTransitionEnd",
        transition       : "transitionend"
    }[s], h = {
        transform          : a,
        transition         : s,
        transitionDuration : s + "Duration",
        transitionProperty : s + "Property",
        transitionDelay    : s + "Delay"
    }, d = n.prototype = Object.create(t.prototype);
    d.constructor = n, d._create = function() {
        this._transn = {ingProperties : {}, clean : {}, onEnd : {}}, this.css({position : "absolute"})
    }, d.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, d.getSize = function() {
        this.size = e(this.element)
    }, d.css = function(t) {
        var e = this.element.style;
        for (var i in t) {
            var n = h[i] || i;
            e[n] = t[i]
        }
    }, d.getPosition = function() {
        var t = getComputedStyle(this.element), e = this.layout._getOption("originLeft"), i = this.layout._getOption("originTop"), n = t[e ? "left" : "right"], o = t[i ? "top" : "bottom"], r = this.layout.size, s = -1 != n.indexOf("%") ? parseFloat(n) / 100 * r.width : parseInt(n, 10), a = -1 != o.indexOf("%") ? parseFloat(o) / 100 * r.height : parseInt(o, 10);
        s = isNaN(s) ? 0 : s, a = isNaN(a) ? 0 : a, s -= e ? r.paddingLeft : r.paddingRight, a -= i ? r.paddingTop : r.paddingBottom, this.position.x = s, this.position.y = a
    }, d.layoutPosition = function() {
        var t = this.layout.size, e = {}, i = this.layout._getOption("originLeft"), n = this.layout._getOption("originTop"), o = i ? "paddingLeft" : "paddingRight", r = i ? "left" : "right", s = i ? "right" : "left", a = this.position.x + t[o];
        e[r] = this.getXValue(a), e[s] = "";
        var u = n ? "paddingTop" : "paddingBottom", h = n ? "top" : "bottom", d = n ? "bottom" : "top", l = this.position.y + t[u];
        e[h] = this.getYValue(l), e[d] = "", this.css(e), this.emitEvent("layout", [this])
    }, d.getXValue = function(t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
    }, d.getYValue = function(t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
    }, d._transitionTo = function(t, e) {
        this.getPosition();
        var i = this.position.x, n = this.position.y, o = parseInt(t, 10), r = parseInt(e, 10), s = o === this.position.x && r === this.position.y;
        if (this.setPosition(t, e), s && !this.isTransitioning)return void this.layoutPosition();
        var a = t - i, u = e - n, h = {};
        h.transform = this.getTranslate(a, u), this.transition({
            to              : h,
            onTransitionEnd : {transform : this.layoutPosition},
            isCleaning      : !0
        })
    }, d.getTranslate = function(t, e) {
        var i = this.layout._getOption("originLeft"), n = this.layout._getOption("originTop");
        return t = i ? t : -t, e = n ? e : -e, "translate3d(" + t + "px, " + e + "px, 0)"
    }, d.goTo = function(t, e) {
        this.setPosition(t, e), this.layoutPosition()
    }, d.moveTo = d._transitionTo, d.setPosition = function(t, e) {
        this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
    }, d._nonTransition = function(t) {
        this.css(t.to), t.isCleaning && this._removeStyles(t.to);
        for (var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)
    }, d.transition = function(t) {
        if (!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(t);
        var e = this._transn;
        for (var i in t.onTransitionEnd)e.onEnd[i] = t.onTransitionEnd[i];
        for (i in t.to)e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
        if (t.from) {
            this.css(t.from);
            var n = this.element.offsetHeight;
            n = null
        }
        this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
    };
    var l = "opacity," + o(a);
    d.enableTransition = function() {
        if (!this.isTransitioning) {
            var t = this.layout.options.transitionDuration;
            t = "number" == typeof t ? t + "ms" : t, this.css({
                transitionProperty : l,
                transitionDuration : t,
                transitionDelay    : this.staggerDelay || 0
            }), this.element.addEventListener(u, this, !1)
        }
    }, d.onwebkitTransitionEnd = function(t) {
        this.ontransitionend(t)
    }, d.onotransitionend = function(t) {
        this.ontransitionend(t)
    };
    var f = {"-webkit-transform" : "transform"};
    d.ontransitionend = function(t) {
        if (t.target === this.element) {
            var e = this._transn, n = f[t.propertyName] || t.propertyName;
            if (delete e.ingProperties[n], i(e.ingProperties) && this.disableTransition(), n in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[n]), n in e.onEnd) {
                var o = e.onEnd[n];
                o.call(this), delete e.onEnd[n]
            }
            this.emitEvent("transitionEnd", [this])
        }
    }, d.disableTransition = function() {
        this.removeTransitionStyles(), this.element.removeEventListener(u, this, !1), this.isTransitioning = !1
    }, d._removeStyles = function(t) {
        var e = {};
        for (var i in t)e[i] = "";
        this.css(e)
    };
    var c = {transitionProperty : "", transitionDuration : "", transitionDelay : ""};
    return d.removeTransitionStyles = function() {
        this.css(c)
    }, d.stagger = function(t) {
        t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms"
    }, d.removeElem = function() {
        this.element.parentNode.removeChild(this.element), this.css({display : ""}), this.emitEvent("remove", [this])
    }, d.remove = function() {
        return s && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() {
                this.removeElem()
            }), void this.hide()) : void this.removeElem()
    }, d.reveal = function() {
        delete this.isHidden, this.css({display : ""});
        var t = this.layout.options, e = {}, i = this.getHideRevealTransitionEndProperty("visibleStyle");
        e[i] = this.onRevealTransitionEnd, this.transition({
            from            : t.hiddenStyle,
            to              : t.visibleStyle,
            isCleaning      : !0,
            onTransitionEnd : e
        })
    }, d.onRevealTransitionEnd = function() {
        this.isHidden || this.emitEvent("reveal")
    }, d.getHideRevealTransitionEndProperty = function(t) {
        var e = this.layout.options[t];
        if (e.opacity)return "opacity";
        for (var i in e)return i
    }, d.hide = function() {
        this.isHidden = !0, this.css({display : ""});
        var t = this.layout.options, e = {}, i = this.getHideRevealTransitionEndProperty("hiddenStyle");
        e[i] = this.onHideTransitionEnd, this.transition({
            from            : t.visibleStyle,
            to              : t.hiddenStyle,
            isCleaning      : !0,
            onTransitionEnd : e
        })
    }, d.onHideTransitionEnd = function() {
        this.isHidden && (this.css({display : "none"}), this.emitEvent("hide"))
    }, d.destroy = function() {
        this.css({position : "", left : "", right : "", top : "", bottom : "", transition : "", transform : ""})
    }, n
}), function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(i, n, o, r) {
            return e(t, i, n, o, r)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
}(window, function(t, e, i, n, o) {
    "use strict";
    function r(t, e) {
        var i = n.getQueryElement(t);
        if (!i)return void(u && u.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
        this.element = i, h && (this.$element = h(this.element)), this.options = n.extend({}, this.constructor.defaults), this.option(e);
        var o = ++l;
        this.element.outlayerGUID = o, f[o] = this, this._create();
        var r = this._getOption("initLayout");
        r && this.layout()
    }

    function s(t) {
        function e() {
            t.apply(this, arguments)
        }

        return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e
    }

    function a(t) {
        if ("number" == typeof t)return t;
        var e = t.match(/(^\d*\.?\d*)(\w*)/), i = e && e[1], n = e && e[2];
        if (!i.length)return 0;
        i = parseFloat(i);
        var o = m[n] || 1;
        return i * o
    }

    var u = t.console, h = t.jQuery, d = function() {
    }, l = 0, f = {};
    r.namespace = "outlayer", r.Item = o, r.defaults = {
        containerStyle     : {position : "relative"},
        initLayout         : !0,
        originLeft         : !0,
        originTop          : !0,
        resize             : !0,
        resizeContainer    : !0,
        transitionDuration : "0.4s",
        hiddenStyle        : {opacity : 0, transform : "scale(0.001)"},
        visibleStyle       : {opacity : 1, transform : "scale(1)"}
    };
    var c = r.prototype;
    n.extend(c, e.prototype), c.option = function(t) {
        n.extend(this.options, t)
    }, c._getOption = function(t) {
        var e = this.constructor.compatOptions[t];
        return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
    }, r.compatOptions = {
        initLayout      : "isInitLayout",
        horizontal      : "isHorizontal",
        layoutInstant   : "isLayoutInstant",
        originLeft      : "isOriginLeft",
        originTop       : "isOriginTop",
        resize          : "isResizeBound",
        resizeContainer : "isResizingContainer"
    }, c._create = function() {
        this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), n.extend(this.element.style, this.options.containerStyle);
        var t = this._getOption("resize");
        t && this.bindResize()
    }, c.reloadItems = function() {
        this.items = this._itemize(this.element.children)
    }, c._itemize = function(t) {
        for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], o = 0; o < e.length; o++) {
            var r = e[o], s = new i(r, this);
            n.push(s)
        }
        return n
    }, c._filterFindItemElements = function(t) {
        return n.filterFindElements(t, this.options.itemSelector)
    }, c.getItemElements = function() {
        return this.items.map(function(t) {
            return t.element
        })
    }, c.layout = function() {
        this._resetLayout(), this._manageStamps();
        var t = this._getOption("layoutInstant"), e = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, e), this._isLayoutInited = !0
    }, c._init = c.layout, c._resetLayout = function() {
        this.getSize()
    }, c.getSize = function() {
        this.size = i(this.element)
    }, c._getMeasurement = function(t, e) {
        var n, o = this.options[t];
        o ? ("string" == typeof o ? n = this.element.querySelector(o) : o instanceof HTMLElement && (n = o), this[t] = n ? i(n)[e] : o) : this[t] = 0
    }, c.layoutItems = function(t, e) {
        t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
    }, c._getItemsForLayout = function(t) {
        return t.filter(function(t) {
            return !t.isIgnored
        })
    }, c._layoutItems = function(t, e) {
        if (this._emitCompleteOnItems("layout", t), t && t.length) {
            var i = [];
            t.forEach(function(t) {
                var n = this._getItemLayoutPosition(t);
                n.item = t, n.isInstant = e || t.isLayoutInstant, i.push(n)
            }, this), this._processLayoutQueue(i)
        }
    }, c._getItemLayoutPosition = function() {
        return {x : 0, y : 0}
    }, c._processLayoutQueue = function(t) {
        this.updateStagger(), t.forEach(function(t, e) {
            this._positionItem(t.item, t.x, t.y, t.isInstant, e)
        }, this)
    }, c.updateStagger = function() {
        var t = this.options.stagger;
        return null === t || void 0 === t ? void(this.stagger = 0) : (this.stagger = a(t), this.stagger)
    }, c._positionItem = function(t, e, i, n, o) {
        n ? t.goTo(e, i) : (t.stagger(o * this.stagger), t.moveTo(e, i))
    }, c._postLayout = function() {
        this.resizeContainer()
    }, c.resizeContainer = function() {
        var t = this._getOption("resizeContainer");
        if (t) {
            var e = this._getContainerSize();
            e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1))
        }
    }, c._getContainerSize = d, c._setContainerMeasure = function(t, e) {
        if (void 0 !== t) {
            var i = this.size;
            i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
        }
    }, c._emitCompleteOnItems = function(t, e) {
        function i() {
            o.dispatchEvent(t + "Complete", null, [e])
        }

        function n() {
            s++, s == r && i()
        }

        var o = this, r = e.length;
        if (!e || !r)return void i();
        var s = 0;
        e.forEach(function(e) {
            e.once(t, n)
        })
    }, c.dispatchEvent = function(t, e, i) {
        var n = e ? [e].concat(i) : i;
        if (this.emitEvent(t, n), h)if (this.$element = this.$element || h(this.element), e) {
            var o = h.Event(e);
            o.type = t, this.$element.trigger(o, i)
        } else this.$element.trigger(t, i)
    }, c.ignore = function(t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0)
    }, c.unignore = function(t) {
        var e = this.getItem(t);
        e && delete e.isIgnored
    }, c.stamp = function(t) {
        t = this._find(t), t && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
    }, c.unstamp = function(t) {
        t = this._find(t), t && t.forEach(function(t) {
            n.removeFrom(this.stamps, t), this.unignore(t)
        }, this)
    }, c._find = function(t) {
        return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = n.makeArray(t)) : void 0
    }, c._manageStamps = function() {
        this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
    }, c._getBoundingRect = function() {
        var t = this.element.getBoundingClientRect(), e = this.size;
        this._boundingRect = {
            left   : t.left + e.paddingLeft + e.borderLeftWidth,
            top    : t.top + e.paddingTop + e.borderTopWidth,
            right  : t.right - (e.paddingRight + e.borderRightWidth),
            bottom : t.bottom - (e.paddingBottom + e.borderBottomWidth)
        }
    }, c._manageStamp = d, c._getElementOffset = function(t) {
        var e = t.getBoundingClientRect(), n = this._boundingRect, o = i(t), r = {
            left   : e.left - n.left - o.marginLeft,
            top    : e.top - n.top - o.marginTop,
            right  : n.right - e.right - o.marginRight,
            bottom : n.bottom - e.bottom - o.marginBottom
        };
        return r
    }, c.handleEvent = n.handleEvent, c.bindResize = function() {
        t.addEventListener("resize", this), this.isResizeBound = !0
    }, c.unbindResize = function() {
        t.removeEventListener("resize", this), this.isResizeBound = !1
    }, c.onresize = function() {
        this.resize()
    }, n.debounceMethod(r, "onresize", 100), c.resize = function() {
        this.isResizeBound && this.needsResizeLayout() && this.layout()
    }, c.needsResizeLayout = function() {
        var t = i(this.element), e = this.size && t;
        return e && t.innerWidth !== this.size.innerWidth
    }, c.addItems = function(t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)), e
    }, c.appended = function(t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0), this.reveal(e))
    }, c.prepended = function(t) {
        var e = this._itemize(t);
        if (e.length) {
            var i = this.items.slice(0);
            this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
        }
    }, c.reveal = function(t) {
        if (this._emitCompleteOnItems("reveal", t), t && t.length) {
            var e = this.updateStagger();
            t.forEach(function(t, i) {
                t.stagger(i * e), t.reveal()
            })
        }
    }, c.hide = function(t) {
        if (this._emitCompleteOnItems("hide", t), t && t.length) {
            var e = this.updateStagger();
            t.forEach(function(t, i) {
                t.stagger(i * e), t.hide()
            })
        }
    }, c.revealItemElements = function(t) {
        var e = this.getItems(t);
        this.reveal(e)
    }, c.hideItemElements = function(t) {
        var e = this.getItems(t);
        this.hide(e)
    }, c.getItem = function(t) {
        for (var e = 0; e < this.items.length; e++) {
            var i = this.items[e];
            if (i.element == t)return i
        }
    }, c.getItems = function(t) {
        t = n.makeArray(t);
        var e = [];
        return t.forEach(function(t) {
            var i = this.getItem(t);
            i && e.push(i)
        }, this), e
    }, c.remove = function(t) {
        var e = this.getItems(t);
        this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function(t) {
            t.remove(), n.removeFrom(this.items, t)
        }, this)
    }, c.destroy = function() {
        var t = this.element.style;
        t.height = "", t.position = "", t.width = "", this.items.forEach(function(t) {
            t.destroy()
        }), this.unbindResize();
        var e = this.element.outlayerGUID;
        delete f[e], delete this.element.outlayerGUID, h && h.removeData(this.element, this.constructor.namespace)
    }, r.data = function(t) {
        t = n.getQueryElement(t);
        var e = t && t.outlayerGUID;
        return e && f[e]
    }, r.create = function(t, e) {
        var i = s(r);
        return i.defaults = n.extend({}, r.defaults), n.extend(i.defaults, e), i.compatOptions = n.extend({}, r.compatOptions), i.namespace = t, i.data = r.data, i.Item = s(o), n.htmlInit(i, t), h && h.bridget && h.bridget(t, i), i
    };
    var m = {ms : 1, s : 1e3};
    return r.Item = o, r
}), function(t, e) {
    "function" == typeof define && define.amd ? define("isotope/item", ["outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
}(window, function(t) {
    "use strict";
    function e() {
        t.Item.apply(this, arguments)
    }

    var i = e.prototype = Object.create(t.Item.prototype), n = i._create;
    i._create = function() {
        this.id = this.layout.itemGUID++, n.call(this), this.sortData = {}
    }, i.updateSortData = function() {
        if (!this.isIgnored) {
            this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
            var t = this.layout.options.getSortData, e = this.layout._sorters;
            for (var i in t) {
                var n = e[i];
                this.sortData[i] = n(this.element, this)
            }
        }
    };
    var o = i.destroy;
    return i.destroy = function() {
        o.apply(this, arguments), this.css({display : ""})
    }, e
}), function(t, e) {
    "function" == typeof define && define.amd ? define("isotope/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
}(window, function(t, e) {
    "use strict";
    function i(t) {
        this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
    }

    var n = i.prototype, o = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"];
    return o.forEach(function(t) {
        n[t] = function() {
            return e.prototype[t].apply(this.isotope, arguments)
        }
    }), n.needsVerticalResizeLayout = function() {
        var e = t(this.isotope.element), i = this.isotope.size && e;
        return i && e.innerHeight != this.isotope.size.innerHeight
    }, n._getMeasurement = function() {
        this.isotope._getMeasurement.apply(this, arguments)
    }, n.getColumnWidth = function() {
        this.getSegmentSize("column", "Width")
    }, n.getRowHeight = function() {
        this.getSegmentSize("row", "Height")
    }, n.getSegmentSize = function(t, e) {
        var i = t + e, n = "outer" + e;
        if (this._getMeasurement(i, n), !this[i]) {
            var o = this.getFirstItemSize();
            this[i] = o && o[n] || this.isotope.size["inner" + e]
        }
    }, n.getFirstItemSize = function() {
        var e = this.isotope.filteredItems[0];
        return e && e.element && t(e.element)
    }, n.layout = function() {
        this.isotope.layout.apply(this.isotope, arguments)
    }, n.getSize = function() {
        this.isotope.getSize(), this.size = this.isotope.size
    }, i.modes = {}, i.create = function(t, e) {
        function o() {
            i.apply(this, arguments)
        }

        return o.prototype = Object.create(n), o.prototype.constructor = o, e && (o.options = e), o.prototype.namespace = t, i.modes[t] = o, o
    }, i
}), function(t, e) {
    "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
}(window, function(t, e) {
    var i = t.create("masonry");
    return i.compatOptions.fitWidth = "isFitWidth", i.prototype._resetLayout = function() {
        this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
        for (var t = 0; t < this.cols; t++)this.colYs.push(0);
        this.maxY = 0
    }, i.prototype.measureColumns = function() {
        if (this.getContainerWidth(), !this.columnWidth) {
            var t = this.items[0], i = t && t.element;
            this.columnWidth = i && e(i).outerWidth || this.containerWidth
        }
        var n = this.columnWidth += this.gutter, o = this.containerWidth + this.gutter, r = o / n, s = n - o % n, a = s && 1 > s ? "round" : "floor";
        r = Math[a](r), this.cols = Math.max(r, 1)
    }, i.prototype.getContainerWidth = function() {
        var t = this._getOption("fitWidth"), i = t ? this.element.parentNode : this.element, n = e(i);
        this.containerWidth = n && n.innerWidth
    }, i.prototype._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = t.size.outerWidth % this.columnWidth, i = e && 1 > e ? "round" : "ceil", n = Math[i](t.size.outerWidth / this.columnWidth);
        n = Math.min(n, this.cols);
        for (var o = this._getColGroup(n), r = Math.min.apply(Math, o), s = o.indexOf(r), a = {
            x : this.columnWidth * s,
            y : r
        }, u = r + t.size.outerHeight, h = this.cols + 1 - o.length, d = 0; h > d; d++)this.colYs[s + d] = u;
        return a
    }, i.prototype._getColGroup = function(t) {
        if (2 > t)return this.colYs;
        for (var e = [], i = this.cols + 1 - t, n = 0; i > n; n++) {
            var o = this.colYs.slice(n, n + t);
            e[n] = Math.max.apply(Math, o)
        }
        return e
    }, i.prototype._manageStamp = function(t) {
        var i = e(t), n = this._getElementOffset(t), o = this._getOption("originLeft"), r = o ? n.left : n.right, s = r + i.outerWidth, a = Math.floor(r / this.columnWidth);
        a = Math.max(0, a);
        var u = Math.floor(s / this.columnWidth);
        u -= s % this.columnWidth ? 0 : 1, u = Math.min(this.cols - 1, u);
        for (var h = this._getOption("originTop"), d = (h ? n.top : n.bottom) + i.outerHeight, l = a; u >= l; l++)this.colYs[l] = Math.max(d, this.colYs[l])
    }, i.prototype._getContainerSize = function() {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = {height : this.maxY};
        return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t
    }, i.prototype._getContainerFitWidth = function() {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];)t++;
        return (this.cols - t) * this.columnWidth - this.gutter
    }, i.prototype.needsResizeLayout = function() {
        var t = this.containerWidth;
        return this.getContainerWidth(), t != this.containerWidth
    }, i
}), function(t, e) {
    "function" == typeof define && define.amd ? define("isotope/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry)
}(window, function(t, e) {
    "use strict";
    var i = t.create("masonry"), n = i.prototype, o = {_getElementOffset : !0, layout : !0, _getMeasurement : !0};
    for (var r in e.prototype)o[r] || (n[r] = e.prototype[r]);
    var s = n.measureColumns;
    n.measureColumns = function() {
        this.items = this.isotope.filteredItems, s.call(this)
    };
    var a = n._getOption;
    return n._getOption = function(t) {
        return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments)
    }, i
}), function(t, e) {
    "function" == typeof define && define.amd ? define("isotope/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function(t) {
    "use strict";
    var e = t.create("fitRows"), i = e.prototype;
    return i._resetLayout = function() {
        this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
    }, i._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = t.size.outerWidth + this.gutter, i = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
        var n = {x : this.x, y : this.y};
        return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, n
    }, i._getContainerSize = function() {
        return {height : this.maxY}
    }, e
}), function(t, e) {
    "function" == typeof define && define.amd ? define("isotope/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function(t) {
    "use strict";
    var e = t.create("vertical", {horizontalAlignment : 0}), i = e.prototype;
    return i._resetLayout = function() {
        this.y = 0
    }, i._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment, i = this.y;
        return this.y += t.size.outerHeight, {x : e, y : i}
    }, i._getContainerSize = function() {
        return {height : this.y}
    }, e
}), function(t, e) {
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "./item", "./layout-mode", "./layout-modes/masonry", "./layout-modes/fit-rows", "./layout-modes/vertical"], function(i, n, o, r, s, a) {
            return e(t, i, n, o, r, s, a)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("./item"), require("./layout-mode"), require("./layout-modes/masonry"), require("./layout-modes/fit-rows"), require("./layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode)
}(window, function(t, e, i, n, o, r, s) {
    function a(t, e) {
        return function(i, n) {
            for (var o = 0; o < t.length; o++) {
                var r = t[o], s = i.sortData[r], a = n.sortData[r];
                if (s > a || a > s) {
                    var u = void 0 !== e[r] ? e[r] : e, h = u ? 1 : -1;
                    return (s > a ? 1 : -1) * h
                }
            }
            return 0
        }
    }

    var u = t.jQuery, h = String.prototype.trim ? function(t) {
            return t.trim()
        } : function(t) {
            return t.replace(/^\s+|\s+$/g, "")
        }, d = e.create("isotope", {layoutMode : "masonry", isJQueryFiltering : !0, sortAscending : !0});
    d.Item = r, d.LayoutMode = s;
    var l = d.prototype;
    l._create = function() {
        this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
        for (var t in s.modes)this._initLayoutMode(t)
    }, l.reloadItems = function() {
        this.itemGUID = 0, e.prototype.reloadItems.call(this)
    }, l._itemize = function() {
        for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) {
            var n = t[i];
            n.id = this.itemGUID++
        }
        return this._updateItemsSortData(t), t
    }, l._initLayoutMode = function(t) {
        var e = s.modes[t], i = this.options[t] || {};
        this.options[t] = e.options ? o.extend(e.options, i) : i, this.modes[t] = new e(this)
    }, l.layout = function() {
        return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout()
    }, l._layout = function() {
        var t = this._getIsInstant();
        this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
    }, l.arrange = function(t) {
        this.option(t), this._getIsInstant();
        var e = this._filter(this.items);
        this.filteredItems = e.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e), this._sort(), this._layout()
    }, l._init = l.arrange, l._hideReveal = function(t) {
        this.reveal(t.needReveal), this.hide(t.needHide)
    }, l._getIsInstant = function() {
        var t = this._getOption("layoutInstant"), e = void 0 !== t ? t : !this._isLayoutInited;
        return this._isInstant = e, e
    }, l._bindArrangeComplete = function() {
        function t() {
            e && i && n && o.dispatchEvent("arrangeComplete", null, [o.filteredItems])
        }

        var e, i, n, o = this;
        this.once("layoutComplete", function() {
            e = !0, t()
        }), this.once("hideComplete", function() {
            i = !0, t()
        }), this.once("revealComplete", function() {
            n = !0, t()
        })
    }, l._filter = function(t) {
        var e = this.options.filter;
        e = e || "*";
        for (var i = [], n = [], o = [], r = this._getFilterTest(e), s = 0; s < t.length; s++) {
            var a = t[s];
            if (!a.isIgnored) {
                var u = r(a);
                u && i.push(a), u && a.isHidden ? n.push(a) : u || a.isHidden || o.push(a)
            }
        }
        return {matches : i, needReveal : n, needHide : o}
    }, l._getFilterTest = function(t) {
        return u && this.options.isJQueryFiltering ? function(e) {
                return u(e.element).is(t)
            } : "function" == typeof t ? function(e) {
                    return t(e.element)
                } : function(e) {
                    return n(e.element, t)
                }
    }, l.updateSortData = function(t) {
        var e;
        t ? (t = o.makeArray(t), e = this.getItems(t)): e= this.items, this._getSorters(), this._updateItemsSortData(e)
    }, l._getSorters = function() {
        var t = this.options.getSortData;
        for (var e in t) {
            var i = t[e];
            this._sorters[e] = f(i)
        }
    }, l._updateItemsSortData = function(t) {
        for (var e = t && t.length, i = 0; e && e > i; i++) {
            var n = t[i];
            n.updateSortData()
        }
    };
    var f = function() {
        function t(t) {
            if ("string" != typeof t)return t;
            var i = h(t).split(" "), n = i[0], o = n.match(/^\[(.+)\]$/), r = o && o[1], s = e(r, n), a = d.sortDataParsers[i[1]];
            return t = a ? function(t) {
                    return t && a(s(t))
                } : function(t) {
                    return t && s(t)
                }
        }

        function e(t, e) {
            return t ? function(e) {
                    return e.getAttribute(t)
                } : function(t) {
                    var i = t.querySelector(e);
                    return i && i.textContent
                }
        }

        return t
    }();
    d.sortDataParsers = {
        parseInt      : function(t) {
            return parseInt(t, 10)
        }, parseFloat : function(t) {
            return parseFloat(t)
        }
    }, l._sort = function() {
        var t = this.options.sortBy;
        if (t) {
            var e = [].concat.apply(t, this.sortHistory), i = a(e, this.options.sortAscending);
            this.filteredItems.sort(i), t != this.sortHistory[0] && this.sortHistory.unshift(t)
        }
    }, l._mode = function() {
        var t = this.options.layoutMode, e = this.modes[t];
        if (!e)throw new Error("No layout mode: " + t);
        return e.options = this.options[t], e
    }, l._resetLayout = function() {
        e.prototype._resetLayout.call(this), this._mode()._resetLayout()
    }, l._getItemLayoutPosition = function(t) {
        return this._mode()._getItemLayoutPosition(t)
    }, l._manageStamp = function(t) {
        this._mode()._manageStamp(t)
    }, l._getContainerSize = function() {
        return this._mode()._getContainerSize()
    }, l.needsResizeLayout = function() {
        return this._mode().needsResizeLayout()
    }, l.appended = function(t) {
        var e = this.addItems(t);
        if (e.length) {
            var i = this._filterRevealAdded(e);
            this.filteredItems = this.filteredItems.concat(i)
        }
    }, l.prepended = function(t) {
        var e = this._itemize(t);
        if (e.length) {
            this._resetLayout(), this._manageStamps();
            var i = this._filterRevealAdded(e);
            this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items)
        }
    }, l._filterRevealAdded = function(t) {
        var e = this._filter(t);
        return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches
    }, l.insert = function(t) {
        var e = this.addItems(t);
        if (e.length) {
            var i, n, o = e.length;
            for (i = 0; o > i; i++)n = e[i], this.element.appendChild(n.element);
            var r = this._filter(e).matches;
            for (i = 0; o > i; i++)e[i].isLayoutInstant = !0;
            for (this.arrange(), i = 0; o > i; i++)delete e[i].isLayoutInstant;
            this.reveal(r)
        }
    };
    var c = l.remove;
    return l.remove = function(t) {
        t = o.makeArray(t);
        var e = this.getItems(t);
        c.call(this, t);
        for (var i = e && e.length, n = 0; i && i > n; n++) {
            var r = e[n];
            o.removeFrom(this.filteredItems, r)
        }
    }, l.shuffle = function() {
        for (var t = 0; t < this.items.length; t++) {
            var e = this.items[t];
            e.sortData.random = Math.random()
        }
        this.options.sortBy = "random", this._sort(), this._layout()
    }, l._noTransition = function(t, e) {
        var i = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var n = t.apply(this, e);
        return this.options.transitionDuration = i, n
    }, l.getFilteredItemElements = function() {
        return this.filteredItems.map(function(t) {
            return t.element
        })
    }, d
});

/*! lightgallery - v1.2.19 - 2016-05-17
 * http://sachinchoolur.github.io/lightGallery/
 * Copyright (c) 2016 Sachin N; Licensed Apache 2.0 */
!function(a, b, c, d) {
    "use strict";
    function e(b, d) {
        if (this.el = b, this.$el = a(b), this.s = a.extend({}, f, d), this.s.dynamic && "undefined" !== this.s.dynamicEl && this.s.dynamicEl.constructor === Array && !this.s.dynamicEl.length)throw"When using dynamic mode, you must also define dynamicEl as an Array.";
        return this.modules = {}, this.lGalleryOn = !1, this.lgBusy = !1, this.hideBartimeout = !1, this.isTouch = "ontouchstart" in c.documentElement, this.s.slideEndAnimatoin && (this.s.hideControlOnEnd = !1), this.s.dynamic ? this.$items = this.s.dynamicEl : "this" === this.s.selector ? this.$items = this.$el : "" !== this.s.selector ? this.s.selectWithin ? this.$items = a(this.s.selectWithin).find(this.s.selector) : this.$items = this.$el.find(a(this.s.selector)) : this.$items = this.$el.children(), this.$slide = "", this.$outer = "", this.init(), this
    }

    var f = {
        mode                     : "lg-slide",
        cssEasing                : "ease",
        easing                   : "linear",
        speed                    : 600,
        height                   : "100%",
        width                    : "100%",
        addClass                 : "",
        startClass               : "lg-start-zoom",
        backdropDuration         : 150,
        hideBarsDelay            : 6e3,
        useLeft                  : !1,
        closable                 : !0,
        loop                     : !0,
        escKey                   : !0,
        keyPress                 : !0,
        controls                 : !0,
        slideEndAnimatoin        : !0,
        hideControlOnEnd         : !1,
        mousewheel               : !0,
        getCaptionFromTitleOrAlt : !0,
        appendSubHtmlTo          : ".lg-sub-html",
        preload                  : 1,
        showAfterLoad            : !0,
        selector                 : "",
        selectWithin             : "",
        nextHtml                 : "",
        prevHtml                 : "",
        index                    : !1,
        iframeMaxWidth           : "100%",
        download                 : !0,
        counter                  : !0,
        appendCounterTo          : ".lg-toolbar",
        swipeThreshold           : 50,
        enableSwipe              : !0,
        enableDrag               : !0,
        dynamic                  : !1,
        dynamicEl                : [],
        galleryId                : 1
    };
    e.prototype.init = function() {
        var c = this;
        c.s.preload > c.$items.length && (c.s.preload = c.$items.length);
        var d = b.location.hash;
        d.indexOf("lg=" + this.s.galleryId) > 0 && (c.index = parseInt(d.split("&slide=")[1], 10), a("body").addClass("lg-from-hash"), a("body").hasClass("lg-on") || setTimeout(function() {
            c.build(c.index), a("body").addClass("lg-on")
        })), c.s.dynamic ? (c.$el.trigger("onBeforeOpen.lg"), c.index = c.s.index || 0, a("body").hasClass("lg-on") || setTimeout(function() {
                c.build(c.index), a("body").addClass("lg-on")
            })) : c.$items.on("click.lgcustom", function(b) {
                try {
                    b.preventDefault(), b.preventDefault()
                } catch (d) {
                    b.returnValue = !1
                }
                c.$el.trigger("onBeforeOpen.lg"), c.index = c.s.index || c.$items.index(this), a("body").hasClass("lg-on") || (c.build(c.index), a("body").addClass("lg-on"))
            })
    }, e.prototype.build = function(b) {
        var c = this;
        c.structure(), a.each(a.fn.lightGallery.modules, function(b) {
            c.modules[b] = new a.fn.lightGallery.modules[b](c.el)
        }), c.slide(b, !1, !1), c.s.keyPress && c.keyPress(), c.$items.length > 1 && (c.arrow(), setTimeout(function() {
            c.enableDrag(), c.enableSwipe()
        }, 50), c.s.mousewheel && c.mousewheel()), c.counter(), c.closeGallery(), c.$el.trigger("onAfterOpen.lg"), c.$outer.on("mousemove.lg click.lg touchstart.lg", function() {
            c.$outer.removeClass("lg-hide-items"), clearTimeout(c.hideBartimeout), c.hideBartimeout = setTimeout(function() {
                c.$outer.addClass("lg-hide-items")
            }, c.s.hideBarsDelay)
        })
    }, e.prototype.structure = function() {
        var c, d = "", e = "", f = 0, g = "", h = this;
        for (a("body").append('<div class="lg-backdrop"></div>'), a(".lg-backdrop").css("transition-duration", this.s.backdropDuration + "ms"), f = 0; f < this.$items.length; f++)d += '<div class="lg-item"></div>';
        if (this.s.controls && this.$items.length > 1 && (e = '<div class="lg-actions"><div class="lg-prev lg-icon">' + this.s.prevHtml + '</div><div class="lg-next lg-icon">' + this.s.nextHtml + "</div></div>"), ".lg-sub-html" === this.s.appendSubHtmlTo && (g = '<div class="lg-sub-html"></div>'), c = '<div class="lg-outer ' + this.s.addClass + " " + this.s.startClass + '"><div class="lg" style="width:' + this.s.width + "; height:" + this.s.height + '"><div class="lg-inner">' + d + '</div><div class="lg-toolbar group"><span class="lg-close lg-icon"></span></div>' + e + g + "</div></div>", a("body").append(c), this.$outer = a(".lg-outer"), this.$slide = this.$outer.find(".lg-item"), this.s.useLeft ? (this.$outer.addClass("lg-use-left"), this.s.mode = "lg-slide") : this.$outer.addClass("lg-use-css3"), h.setTop(), a(b).on("resize.lg orientationchange.lg", function() {
                setTimeout(function() {
                    h.setTop()
                }, 100)
            }), this.$slide.eq(this.index).addClass("lg-current"), this.doCss() ? this.$outer.addClass("lg-css3") : (this.$outer.addClass("lg-css"), this.s.speed = 0), this.$outer.addClass(this.s.mode), this.s.enableDrag && this.$items.length > 1 && this.$outer.addClass("lg-grab"), this.s.showAfterLoad && this.$outer.addClass("lg-show-after-load"), this.doCss()) {
            var i = this.$outer.find(".lg-inner");
            i.css("transition-timing-function", this.s.cssEasing), i.css("transition-duration", this.s.speed + "ms")
        }
        a(".lg-backdrop").addClass("in"), setTimeout(function() {
            h.$outer.addClass("lg-visible")
        }, this.s.backdropDuration), this.s.download && this.$outer.find(".lg-toolbar").append('<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>'), this.prevScrollTop = a(b).scrollTop()
    }, e.prototype.setTop = function() {
        if ("100%" !== this.s.height) {
            var c = a(b).height(), d = (c - parseInt(this.s.height, 10)) / 2, e = this.$outer.find(".lg");
            c >= parseInt(this.s.height, 10) ? e.css("top", d + "px") : e.css("top", "0px")
        }
    }, e.prototype.doCss = function() {
        var a = function() {
            var a = ["transition", "MozTransition", "WebkitTransition", "OTransition", "msTransition", "KhtmlTransition"], b = c.documentElement, d = 0;
            for (d = 0; d < a.length; d++)if (a[d] in b.style)return !0
        };
        return !!a()
    }, e.prototype.isVideo = function(a, b) {
        var c;
        if (c = this.s.dynamic ? this.s.dynamicEl[b].html : this.$items.eq(b).attr("data-html"), !a && c)return {html5 : !0};
        var d = a.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i), e = a.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i), f = a.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i), g = a.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i);
        return d ? {youtube : d} : e ? {vimeo : e} : f ? {dailymotion : f} : g ? {vk : g} : void 0
    }, e.prototype.counter = function() {
        this.s.counter && a(this.s.appendCounterTo).append('<div id="lg-counter"><span id="lg-counter-current">' + (parseInt(this.index, 10) + 1) + '</span> / <span id="lg-counter-all">' + this.$items.length + "</span></div>")
    }, e.prototype.addHtml = function(b) {
        var c, d = null;
        if (this.s.dynamic ? this.s.dynamicEl[b].subHtmlUrl ? c = this.s.dynamicEl[b].subHtmlUrl : d = this.s.dynamicEl[b].subHtml : this.$items.eq(b).attr("data-sub-html-url") ? c = this.$items.eq(b).attr("data-sub-html-url") : (d = this.$items.eq(b).attr("data-sub-html"), this.s.getCaptionFromTitleOrAlt && !d && (d = this.$items.eq(b).attr("title") || this.$items.eq(b).find("img").first().attr("alt"))), !c)if ("undefined" != typeof d && null !== d) {
            var e = d.substring(0, 1);
            "." !== e && "#" !== e || (d = a(d).html())
        } else d = "";
        ".lg-sub-html" === this.s.appendSubHtmlTo ? c ? this.$outer.find(this.s.appendSubHtmlTo).load(c) : this.$outer.find(this.s.appendSubHtmlTo).html(d) : c ? this.$slide.eq(b).load(c) : this.$slide.eq(b).append(d), "undefined" != typeof d && null !== d && ("" === d ? this.$outer.find(this.s.appendSubHtmlTo).addClass("lg-empty-html") : this.$outer.find(this.s.appendSubHtmlTo).removeClass("lg-empty-html")), this.$el.trigger("onAfterAppendSubHtml.lg", [b])
    }, e.prototype.preload = function(a) {
        var b = 1, c = 1;
        for (b = 1; b <= this.s.preload && !(b >= this.$items.length - a); b++)this.loadContent(a + b, !1, 0);
        for (c = 1; c <= this.s.preload && !(0 > a - c); c++)this.loadContent(a - c, !1, 0)
    }, e.prototype.loadContent = function(c, d, e) {
        var f, g, h, i, j, k, l = this, m = !1, n = function(c) {
            for (var d = [], e = [], f = 0; f < c.length; f++) {
                var h = c[f].split(" ");
                "" === h[0] && h.splice(0, 1), e.push(h[0]), d.push(h[1])
            }
            for (var i = a(b).width(), j = 0; j < d.length; j++)if (parseInt(d[j], 10) > i) {
                g = e[j];
                break
            }
        };
        if (l.s.dynamic) {
            if (l.s.dynamicEl[c].poster && (m = !0, h = l.s.dynamicEl[c].poster), k = l.s.dynamicEl[c].html, g = l.s.dynamicEl[c].src, l.s.dynamicEl[c].responsive) {
                var o = l.s.dynamicEl[c].responsive.split(",");
                n(o)
            }
            i = l.s.dynamicEl[c].srcset, j = l.s.dynamicEl[c].sizes
        } else {
            if (l.$items.eq(c).attr("data-poster") && (m = !0, h = l.$items.eq(c).attr("data-poster")), k = l.$items.eq(c).attr("data-html"), g = l.$items.eq(c).attr("href") || l.$items.eq(c).attr("data-src"), l.$items.eq(c).attr("data-responsive")) {
                var p = l.$items.eq(c).attr("data-responsive").split(",");
                n(p)
            }
            i = l.$items.eq(c).attr("data-srcset"), j = l.$items.eq(c).attr("data-sizes")
        }
        var q = !1;
        l.s.dynamic ? l.s.dynamicEl[c].iframe && (q = !0) : "true" === l.$items.eq(c).attr("data-iframe") && (q = !0);
        var r = l.isVideo(g, c);
        if (!l.$slide.eq(c).hasClass("lg-loaded")) {
            if (q) l.$slide.eq(c).prepend('<div class="lg-video-cont" style="max-width:' + l.s.iframeMaxWidth + '"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="' + g + '"  allowfullscreen="true"></iframe></div></div>'); else if (m) {
                var s = "";
                s = r && r.youtube ? "lg-has-youtube" : r && r.vimeo ? "lg-has-vimeo" : "lg-has-html5", l.$slide.eq(c).prepend('<div class="lg-video-cont ' + s + ' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="' + h + '" /></div></div>')
            } else r ? (l.$slide.eq(c).prepend('<div class="lg-video-cont "><div class="lg-video"></div></div>'), l.$el.trigger("hasVideo.lg", [c, g, k])) : l.$slide.eq(c).prepend('<div class="lg-img-wrap"><img class="lg-object lg-image" src="' + g + '" /></div>');
            if (l.$el.trigger("onAferAppendSlide.lg", [c]), f = l.$slide.eq(c).find(".lg-object"), j && f.attr("sizes", j), i) {
                f.attr("srcset", i);
                try {
                    picturefill({elements : [f[0]]})
                } catch (t) {
                    console.error("Make sure you have included Picturefill version 2")
                }
            }
            ".lg-sub-html" !== this.s.appendSubHtmlTo && l.addHtml(c), l.$slide.eq(c).addClass("lg-loaded")
        }
        l.$slide.eq(c).find(".lg-object").on("load.lg error.lg", function() {
            var b = 0;
            e && !a("body").hasClass("lg-from-hash") && (b = e), setTimeout(function() {
                l.$slide.eq(c).addClass("lg-complete"), l.$el.trigger("onSlideItemLoad.lg", [c, e || 0])
            }, b)
        }), r && r.html5 && !m && l.$slide.eq(c).addClass("lg-complete"), d === !0 && (l.$slide.eq(c).hasClass("lg-complete") ? l.preload(c) : l.$slide.eq(c).find(".lg-object").on("load.lg error.lg", function() {
                l.preload(c)
            }))
    }, e.prototype.slide = function(b, c, d) {
        var e = this.$outer.find(".lg-current").index(), f = this;
        if (!f.lGalleryOn || e !== b) {
            var g = this.$slide.length, h = f.lGalleryOn ? this.s.speed : 0, i = !1, j = !1;
            if (!f.lgBusy) {
                if (this.s.download) {
                    var k;
                    k = f.s.dynamic ? f.s.dynamicEl[b].downloadUrl !== !1 && (f.s.dynamicEl[b].downloadUrl || f.s.dynamicEl[b].src) : "false" !== f.$items.eq(b).attr("data-download-url") && (f.$items.eq(b).attr("data-download-url") || f.$items.eq(b).attr("href") || f.$items.eq(b).attr("data-src")), k ? (a("#lg-download").attr("href", k), f.$outer.removeClass("lg-hide-download")) : f.$outer.addClass("lg-hide-download")
                }
                if (this.$el.trigger("onBeforeSlide.lg", [e, b, c, d]), f.lgBusy = !0, clearTimeout(f.hideBartimeout), ".lg-sub-html" === this.s.appendSubHtmlTo && setTimeout(function() {
                        f.addHtml(b)
                    }, h), this.arrowDisable(b), c) {
                    var l = b - 1, m = b + 1;
                    0 === b && e === g - 1 ? (m = 0, l = g - 1): b
                ===
                    g - 1 && 0 === e && (m = 0, l = g - 1), this.$slide.removeClass("lg-prev-slide lg-current lg-next-slide"), f.$slide.eq(l).addClass("lg-prev-slide"), f.$slide.eq(m).addClass("lg-next-slide"), f.$slide.eq(b).addClass("lg-current")
                } else f.$outer.addClass("lg-no-trans"), this.$slide.removeClass("lg-prev-slide lg-next-slide"), e > b ? (j = !0, 0 !== b || e !== g - 1 || d || (j = !1, i = !0)) : b > e && (i = !0, b !== g - 1 || 0 !== e || d || (j = !0, i = !1)), j ? (this.$slide.eq(b).addClass("lg-prev-slide"), this.$slide.eq(e).addClass("lg-next-slide")) : i && (this.$slide.eq(b).addClass("lg-next-slide"), this.$slide.eq(e).addClass("lg-prev-slide")), setTimeout(function() {
                    f.$slide.removeClass("lg-current"), f.$slide.eq(b).addClass("lg-current"), f.$outer.removeClass("lg-no-trans")
                }, 50);
                f.lGalleryOn ? (setTimeout(function() {
                        f.loadContent(b, !0, 0)
                    }, this.s.speed + 50), setTimeout(function() {
                        f.lgBusy = !1, f.$el.trigger("onAfterSlide.lg", [e, b, c, d])
                    }, this.s.speed)) : (f.loadContent(b, !0, f.s.backdropDuration), f.lgBusy = !1, f.$el.trigger("onAfterSlide.lg", [e, b, c, d])), f.lGalleryOn = !0, this.s.counter && a("#lg-counter-current").text(b + 1)
            }
        }
    }, e.prototype.goToNextSlide = function(a) {
        var b = this;
        b.lgBusy || (b.index + 1 < b.$slide.length ? (b.index++, b.$el.trigger("onBeforeNextSlide.lg", [b.index]), b.slide(b.index, a, !1)) : b.s.loop ? (b.index = 0, b.$el.trigger("onBeforeNextSlide.lg", [b.index]), b.slide(b.index, a, !1)) : b.s.slideEndAnimatoin && (b.$outer.addClass("lg-right-end"), setTimeout(function() {
                    b.$outer.removeClass("lg-right-end")
                }, 400)))
    }, e.prototype.goToPrevSlide = function(a) {
        var b = this;
        b.lgBusy || (b.index > 0 ? (b.index--, b.$el.trigger("onBeforePrevSlide.lg", [b.index, a]), b.slide(b.index, a, !1)) : b.s.loop ? (b.index = b.$items.length - 1, b.$el.trigger("onBeforePrevSlide.lg", [b.index, a]), b.slide(b.index, a, !1)) : b.s.slideEndAnimatoin && (b.$outer.addClass("lg-left-end"), setTimeout(function() {
                    b.$outer.removeClass("lg-left-end")
                }, 400)))
    }, e.prototype.keyPress = function() {
        var c = this;
        this.$items.length > 1 && a(b).on("keyup.lg", function(a) {
            c.$items.length > 1 && (37 === a.keyCode && (a.preventDefault(), c.goToPrevSlide()), 39 === a.keyCode && (a.preventDefault(), c.goToNextSlide()))
        }), a(b).on("keydown.lg", function(a) {
            c.s.escKey === !0 && 27 === a.keyCode && (a.preventDefault(), c.$outer.hasClass("lg-thumb-open") ? c.$outer.removeClass("lg-thumb-open") : c.destroy())
        })
    }, e.prototype.arrow = function() {
        var a = this;
        this.$outer.find(".lg-prev").on("click.lg", function() {
            a.goToPrevSlide()
        }), this.$outer.find(".lg-next").on("click.lg", function() {
            a.goToNextSlide()
        })
    }, e.prototype.arrowDisable = function(a) {
        !this.s.loop && this.s.hideControlOnEnd && (a + 1 < this.$slide.length ? this.$outer.find(".lg-next").removeAttr("disabled").removeClass("disabled") : this.$outer.find(".lg-next").attr("disabled", "disabled").addClass("disabled"), a > 0 ? this.$outer.find(".lg-prev").removeAttr("disabled").removeClass("disabled") : this.$outer.find(".lg-prev").attr("disabled", "disabled").addClass("disabled"))
    }, e.prototype.setTranslate = function(a, b, c) {
        this.s.useLeft ? a.css("left", b) : a.css({transform : "translate3d(" + b + "px, " + c + "px, 0px)"})
    }, e.prototype.touchMove = function(b, c) {
        var d = c - b;
        Math.abs(d) > 15 && (this.$outer.addClass("lg-dragging"), this.setTranslate(this.$slide.eq(this.index), d, 0), this.setTranslate(a(".lg-prev-slide"), -this.$slide.eq(this.index).width() + d, 0), this.setTranslate(a(".lg-next-slide"), this.$slide.eq(this.index).width() + d, 0))
    }, e.prototype.touchEnd = function(a) {
        var b = this;
        "lg-slide" !== b.s.mode && b.$outer.addClass("lg-slide"), this.$slide.not(".lg-current, .lg-prev-slide, .lg-next-slide").css("opacity", "0"), setTimeout(function() {
            b.$outer.removeClass("lg-dragging"), 0 > a && Math.abs(a) > b.s.swipeThreshold ? b.goToNextSlide(!0) : a > 0 && Math.abs(a) > b.s.swipeThreshold ? b.goToPrevSlide(!0) : Math.abs(a) < 5 && b.$el.trigger("onSlideClick.lg"), b.$slide.removeAttr("style")
        }), setTimeout(function() {
            b.$outer.hasClass("lg-dragging") || "lg-slide" === b.s.mode || b.$outer.removeClass("lg-slide")
        }, b.s.speed + 100)
    }, e.prototype.enableSwipe = function() {
        var a = this, b = 0, c = 0, d = !1;
        a.s.enableSwipe && a.isTouch && a.doCss() && (a.$slide.on("touchstart.lg", function(c) {
            a.$outer.hasClass("lg-zoomed") || a.lgBusy || (c.preventDefault(), a.manageSwipeClass(), b = c.originalEvent.targetTouches[0].pageX)
        }), a.$slide.on("touchmove.lg", function(e) {
            a.$outer.hasClass("lg-zoomed") || (e.preventDefault(), c = e.originalEvent.targetTouches[0].pageX, a.touchMove(b, c), d = !0)
        }), a.$slide.on("touchend.lg", function() {
            a.$outer.hasClass("lg-zoomed") || (d ? (d = !1, a.touchEnd(c - b)) : a.$el.trigger("onSlideClick.lg"))
        }))
    }, e.prototype.enableDrag = function() {
        var c = this, d = 0, e = 0, f = !1, g = !1;
        c.s.enableDrag && !c.isTouch && c.doCss() && (c.$slide.on("mousedown.lg", function(b) {
            c.$outer.hasClass("lg-zoomed") || (a(b.target).hasClass("lg-object") || a(b.target).hasClass("lg-video-play")) && (b.preventDefault(), c.lgBusy || (c.manageSwipeClass(), d = b.pageX, f = !0, c.$outer.scrollLeft += 1, c.$outer.scrollLeft -= 1, c.$outer.removeClass("lg-grab").addClass("lg-grabbing"), c.$el.trigger("onDragstart.lg")))
        }), a(b).on("mousemove.lg", function(a) {
            f && (g = !0, e = a.pageX, c.touchMove(d, e), c.$el.trigger("onDragmove.lg"))
        }), a(b).on("mouseup.lg", function(b) {
            g ? (g = !1, c.touchEnd(e - d), c.$el.trigger("onDragend.lg")) : (a(b.target).hasClass("lg-object") || a(b.target).hasClass("lg-video-play")) && c.$el.trigger("onSlideClick.lg"), f && (f = !1, c.$outer.removeClass("lg-grabbing").addClass("lg-grab"))
        }))
    }, e.prototype.manageSwipeClass = function() {
        var a = this.index + 1, b = this.index - 1, c = this.$slide.length;
        this.s.loop && (0 === this.index ? b = c - 1 : this.index === c - 1 && (a = 0)), this.$slide.removeClass("lg-next-slide lg-prev-slide"), b > -1 && this.$slide.eq(b).addClass("lg-prev-slide"), this.$slide.eq(a).addClass("lg-next-slide")
    }, e.prototype.mousewheel = function() {
        var a = this;
        a.$outer.on("mousewheel.lg", function(b) {
            b.deltaY && (b.deltaY > 0 ? a.goToPrevSlide() : a.goToNextSlide(), b.preventDefault())
        })
    }, e.prototype.closeGallery = function() {
        var b = this, c = !1;
        this.$outer.find(".lg-close").on("click.lg", function() {
            b.destroy()
        }), b.s.closable && (b.$outer.on("mousedown.lg", function(b) {
            c = !!(a(b.target).is(".lg-outer") || a(b.target).is(".lg-item ") || a(b.target).is(".lg-img-wrap"))
        }), b.$outer.on("mouseup.lg", function(d) {
            (a(d.target).is(".lg-outer") || a(d.target).is(".lg-item ") || a(d.target).is(".lg-img-wrap") && c) && (b.$outer.hasClass("lg-dragging") || b.destroy())
        }))
    }, e.prototype.destroy = function(c) {
        var d = this;
        c || d.$el.trigger("onBeforeClose.lg"), a(b).scrollTop(d.prevScrollTop), c && (d.s.dynamic || this.$items.off("click.lg click.lgcustom"), a.removeData(d.el, "lightGallery")), this.$el.off(".lg.tm"), a.each(a.fn.lightGallery.modules, function(a) {
            d.modules[a] && d.modules[a].destroy()
        }), this.lGalleryOn = !1, clearTimeout(d.hideBartimeout), this.hideBartimeout = !1, a(b).off(".lg"), a("body").removeClass("lg-on lg-from-hash"), d.$outer && d.$outer.removeClass("lg-visible"), a(".lg-backdrop").removeClass("in"), setTimeout(function() {
            d.$outer && d.$outer.remove(), a(".lg-backdrop").remove(), c || d.$el.trigger("onCloseAfter.lg")
        }, d.s.backdropDuration + 50)
    }, a.fn.lightGallery = function(b) {
        return this.each(function() {
            if (a.data(this, "lightGallery"))try {
                a(this).data("lightGallery").init()
            } catch (c) {
                console.error("lightGallery has not initiated properly")
            } else a.data(this, "lightGallery", new e(this, b))
        })
    }, a.fn.lightGallery.modules = {}
}(jQuery, window, document);
(function(e) {
    function s(e) {
        if (e instanceof jQuery) {
            e = e[0]
        }
        var t = e.getBoundingClientRect();
        return t.top >= 0 && t.left >= 0 && t.bottom <= (window.innerHeight || document.documentElement.clientHeight) && t.right <= (window.innerWidth || document.documentElement.clientWidth)
    }

    function o(e) {
        return e[Math.floor(Math.random() * e.length)]
    }

    function u(e, t) {
        return Math.floor(Math.random() * (t - e + 1)) + e
    }

    var t = 0;
    var n = ["webkit", "o", "ms", "moz", ""];
    var r = n.length;
    for (var i = 0; i < r && !window.requestAnimationFrame; ++i) {
        window.requestAnimationFrame = window[n[i] + "RequestAnimationFrame"];
        window.cancelAnimationFrame = window[n[i] + "CancelAnimationFrame"] || window[n[i] + "CancelRequestAnimationFrame"]
    }
    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function(e) {
            var n = (new Date).getTime();
            var r = Math.max(0, 16 - (n - t));
            var i = window.setTimeout(function() {
                e(n + r)
            }, r);
            t = n + r;
            return i
        }
    }
    if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function(e) {
            clearTimeout(e)
        }
    }
    e.fn.prefixedEvent = function(e, t) {
        for (var i = 0; i < r; ++i) {
            if (!n[i]) {
                e = e.toLowerCase()
            }
            el = this instanceof jQuery ? this[0] : this;
            el.addEventListener(n[i] + e, t, false)
        }
        return this
    };
    e.fn.sakura = function(t, n) {
        var r = this.selector == "" ? e("body") : this;
        var i = {
            blowAnimations : ["blow-soft-left", "blow-medium-left", "blow-soft-right", "blow-medium-right"],
            className      : "sakura",
            fallSpeed      : 1,
            maxSize        : 14,
            minSize        : 10,
            newOn          : 300,
            swayAnimations : ["sway-0", "sway-1", "sway-2", "sway-3", "sway-4", "sway-5", "sway-6", "sway-7", "sway-8"]
        };
        var n = e.extend({}, i, n);
        if (typeof t === "undefined" || t === "start") {
            r.css({"overflow-x" : "hidden"});
            var a = function() {
                if (r.data("sakura-anim-id")) {
                    setTimeout(function() {
                        requestAnimationFrame(a)
                    }, n.newOn)
                }
                var t = o(n.blowAnimations);
                var i = o(n.swayAnimations);
                var f = (document.documentElement.clientHeight * .007 + Math.round(Math.random() * 5)) * n.fallSpeed;
                var l = "fall " + f + "s linear 0s 1" + ", " + t + " " + ((f > 30 ? f : 30) - 20 + u(0, 20)) + "s linear 0s infinite" + ", " + i + " " + u(2, 4) + "s linear 0s infinite";
                var c = e('<div class="' + n.className + '" />');
                var h = u(n.minSize, n.maxSize);
                var p = h - Math.floor(u(0, n.minSize) / 3);
                c.prefixedEvent("AnimationEnd", function() {
                    if (!s(this)) {
                        e(this).remove()
                    }
                }).prefixedEvent("AnimationIteration", function(t) {
                    if ((e.inArray(t.animationName, n.blowAnimations) != -1 || e.inArray(t.animationName, n.swayAnimations) != -1) && !s(this)) {
                        e(this).remove()
                    }
                }).css({
                    "-webkit-animation" : l,
                    animation           : l,
                    "border-radius"     : u(n.maxSize, n.maxSize + Math.floor(Math.random() * 10)) + "px " + u(1, Math.floor(p / 4)) + "px",
                    height              : h + "px",
                    left                : Math.random() * document.documentElement.clientWidth - 100 + "px",
                    "margin-top"        : -(Math.floor(Math.random() * 20) + 15) + "px",
                    width               : p + "px"
                });
                r.append(c)
            };
            r.data("sakura-anim-id", requestAnimationFrame(a))
        } else if (t === "stop") {
            var f = r.data("sakura-anim-id");
            if (f) {
                cancelAnimationFrame(f);
                r.data("sakura-anim-id", null)
            }
            setTimeout(function() {
                e("." + n.className).remove()
            }, n.newOn + 50)
        }
    }
})(jQuery);

/**
 * author Remy Sharp
 * url http://remysharp.com/2009/01/26/element-in-view-event-plugin/
 * fork https://github.com/zuk/jquery.inview
 *
 * Modified: use outerHeight() instead of height()
 */
(function(e) {
    "use strict";
    function t() {
        return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    }

    function n() {
        var t = window.innerHeight;
        if (t) {
            return t
        }
        var n = document.compatMode;
        if (n || !e.support.boxModel) {
            t = n === "CSS1Compat" ? document.documentElement.clientHeight : document.body.clientHeight
        }
        return t
    }

    function r(e) {
        var t = 0;
        for (var n = e; n; n = n.offsetParent) {
            t += n.offsetTop
        }
        return t
    }

    function i() {
        var i = t(), s = i + n(), o = [];
        e.each(e.cache, function() {
            if (this.events && this.events.inview) {
                o.push(this.handle.elem)
            }
        });
        e(o).each(function() {
            var t = e(this), n = r(this), o = t.outerHeight(), u = n + o, a = t.data("inview") || false, f = t.data("offset") || 0, l = n > i && u < s, c = u + f > i && n < i, h = n - f < s && u > s, p = l || c || h || n < i && u > s;
            if (p) {
                var d = h ? "top" : c ? "bottom" : "both";
                if (!a || a !== d) {
                    t.data("inview", d);
                    t.trigger("inview", [true, d])
                }
            } else if (!l && a) {
                t.data("inview", false);
                t.trigger("inview", [false])
            }
        })
    }

    function s(e, t) {
        function i() {
            if (r !== null) {
                n = true;
                return
            }
            n = false;
            e();
            r = setTimeout(function() {
                r = null;
                if (n) {
                    i()
                }
            }, t)
        }

        var n = false;
        var r = null;
        return i
    }

    var o = s(i, 100);
    e(window).on("checkInView.inview click.inview ready.inview scroll.inview resize.inview", o)
})(jQuery);
(function() {
    "use strict";
    function a() {
    }

    function b(a, b) {
        for (var c = a.length; c--;)if (a[c].listener === b)return c;
        return -1
    }

    function c(a) {
        return function() {
            return this[a].apply(this, arguments)
        }
    }

    var d = a.prototype, e = this, f = e.EventEmitter;
    d.getListeners = function(a) {
        var b, c, d = this._getEvents();
        if ("object" == typeof a) {
            b = {};
            for (c in d)d.hasOwnProperty(c) && a.test(c) && (b[c] = d[c])
        } else b = d[a] || (d[a] = []);
        return b
    }, d.flattenListeners = function(a) {
        var b, c = [];
        for (b = 0; b < a.length; b += 1)c.push(a[b].listener);
        return c
    }, d.getListenersAsObject = function(a) {
        var b, c = this.getListeners(a);
        return c instanceof Array && (b = {}, b[a] = c), b || c
    }, d.addListener = function(a, c) {
        var d, e = this.getListenersAsObject(a), f = "object" == typeof c;
        for (d in e)e.hasOwnProperty(d) && -1 === b(e[d], c) && e[d].push(f ? c : {listener : c, once : !1});
        return this
    }, d.on = c("addListener"), d.addOnceListener = function(a, b) {
        return this.addListener(a, {listener : b, once : !0})
    }, d.once = c("addOnceListener"), d.defineEvent = function(a) {
        return this.getListeners(a), this
    }, d.defineEvents = function(a) {
        for (var b = 0; b < a.length; b += 1)this.defineEvent(a[b]);
        return this
    }, d.removeListener = function(a, c) {
        var d, e, f = this.getListenersAsObject(a);
        for (e in f)f.hasOwnProperty(e) && (d = b(f[e], c), -1 !== d && f[e].splice(d, 1));
        return this
    }, d.off = c("removeListener"), d.addListeners = function(a, b) {
        return this.manipulateListeners(!1, a, b)
    }, d.removeListeners = function(a, b) {
        return this.manipulateListeners(!0, a, b)
    }, d.manipulateListeners = function(a, b, c) {
        var d, e, f = a ? this.removeListener : this.addListener, g = a ? this.removeListeners : this.addListeners;
        if ("object" != typeof b || b instanceof RegExp)for (d = c.length; d--;)f.call(this, b, c[d]); else for (d in b)b.hasOwnProperty(d) && (e = b[d]) && ("function" == typeof e ? f.call(this, d, e) : g.call(this, d, e));
        return this
    }, d.removeEvent = function(a) {
        var b, c = typeof a, d = this._getEvents();
        if ("string" === c) delete d[a]; else if ("object" === c)for (b in d)d.hasOwnProperty(b) && a.test(b) && delete d[b]; else delete this._events;
        return this
    }, d.removeAllListeners = c("removeEvent"), d.emitEvent = function(a, b) {
        var c, d, e, f, g = this.getListenersAsObject(a);
        for (e in g)if (g.hasOwnProperty(e))for (d = g[e].length; d--;)c = g[e][d], c.once === !0 && this.removeListener(a, c.listener), f = c.listener.apply(this, b || []), f === this._getOnceReturnValue() && this.removeListener(a, c.listener);
        return this
    }, d.trigger = c("emitEvent"), d.emit = function(a) {
        var b = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(a, b)
    }, d.setOnceReturnValue = function(a) {
        return this._onceReturnValue = a, this
    }, d._getOnceReturnValue = function() {
        return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue
    }, d._getEvents = function() {
        return this._events || (this._events = {})
    }, a.noConflict = function() {
        return e.EventEmitter = f, a
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
            return a
        }) : "object" == typeof module && module.exports ? module.exports = a : this.EventEmitter = a
}).call(this), function(a) {
    function b(b) {
        var c = a.event;
        return c.target = c.target || c.srcElement || b, c
    }

    var c = document.documentElement, d = function() {
    };
    c.addEventListener ? d = function(a, b, c) {
            a.addEventListener(b, c, !1)
        } : c.attachEvent && (d = function(a, c, d) {
            a[c + d] = d.handleEvent ? function() {
                    var c = b(a);
                    d.handleEvent.call(d, c)
                } : function() {
                    var c = b(a);
                    d.call(a, c)
                }, a.attachEvent("on" + c, a[c + d])
        });
    var e = function() {
    };
    c.removeEventListener ? e = function(a, b, c) {
            a.removeEventListener(b, c, !1)
        } : c.detachEvent && (e = function(a, b, c) {
            a.detachEvent("on" + b, a[b + c]);
            try {
                delete a[b + c]
            } catch (d) {
                a[b + c] = void 0
            }
        });
    var f = {bind : d, unbind : e};
    "function" == typeof define && define.amd ? define("eventie/eventie", f) : a.eventie = f
}(this), function(a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function(c, d) {
            return b(a, c, d)
        }) : "object" == typeof module && module.exports ? module.exports = b(a, require("wolfy87-eventemitter"), require("eventie")) : a.imagesLoaded = b(a, a.EventEmitter, a.eventie)
}(window, function(a, b, c) {
    function d(a, b) {
        for (var c in b)a[c] = b[c];
        return a
    }

    function e(a) {
        return "[object Array]" == l.call(a)
    }

    function f(a) {
        var b = [];
        if (e(a)) b = a; else if ("number" == typeof a.length)for (var c = 0; c < a.length; c++)b.push(a[c]); else b.push(a);
        return b
    }

    function g(a, b, c) {
        if (!(this instanceof g))return new g(a, b, c);
        "string" == typeof a && (a = document.querySelectorAll(a)), this.elements = f(a), this.options = d({}, this.options), "function" == typeof b ? c = b : d(this.options, b), c && this.on("always", c), this.getImages(), j && (this.jqDeferred = new j.Deferred);
        var e = this;
        setTimeout(function() {
            e.check()
        })
    }

    function h(a) {
        this.img = a
    }

    function i(a, b) {
        this.url = a, this.element = b, this.img = new Image
    }

    var j = a.jQuery, k = a.console, l = Object.prototype.toString;
    g.prototype = new b, g.prototype.options = {}, g.prototype.getImages = function() {
        this.images = [];
        for (var a = 0; a < this.elements.length; a++) {
            var b = this.elements[a];
            this.addElementImages(b)
        }
    }, g.prototype.addElementImages = function(a) {
        "IMG" == a.nodeName && this.addImage(a), this.options.background === !0 && this.addElementBackgroundImages(a);
        var b = a.nodeType;
        if (b && m[b]) {
            for (var c = a.querySelectorAll("img"), d = 0; d < c.length; d++) {
                var e = c[d];
                this.addImage(e)
            }
            if ("string" == typeof this.options.background) {
                var f = a.querySelectorAll(this.options.background);
                for (d = 0; d < f.length; d++) {
                    var g = f[d];
                    this.addElementBackgroundImages(g)
                }
            }
        }
    };
    var m = {1 : !0, 9 : !0, 11 : !0};
    g.prototype.addElementBackgroundImages = function(a) {
        for (var b = n(a), c = /url\(['"]*([^'"\)]+)['"]*\)/gi, d = c.exec(b.backgroundImage); null !== d;) {
            var e = d && d[1];
            e && this.addBackground(e, a), d = c.exec(b.backgroundImage)
        }
    };
    var n = a.getComputedStyle || function(a) {
            return a.currentStyle
        };
    return g.prototype.addImage = function(a) {
        var b = new h(a);
        this.images.push(b)
    }, g.prototype.addBackground = function(a, b) {
        var c = new i(a, b);
        this.images.push(c)
    }, g.prototype.check = function() {
        function a(a, c, d) {
            setTimeout(function() {
                b.progress(a, c, d)
            })
        }

        var b = this;
        if (this.progressedCount = 0, this.hasAnyBroken = !1, !this.images.length)return void this.complete();
        for (var c = 0; c < this.images.length; c++) {
            var d = this.images[c];
            d.once("progress", a), d.check()
        }
    }, g.prototype.progress = function(a, b, c) {
        this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !a.isLoaded, this.emit("progress", this, a, b), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, a), this.progressedCount == this.images.length && this.complete(), this.options.debug && k && k.log("progress: " + c, a, b)
    }, g.prototype.complete = function() {
        var a = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0, this.emit(a, this), this.emit("always", this), this.jqDeferred) {
            var b = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[b](this)
        }
    }, h.prototype = new b, h.prototype.check = function() {
        var a = this.getIsImageComplete();
        return a ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, c.bind(this.proxyImage, "load", this), c.bind(this.proxyImage, "error", this), c.bind(this.img, "load", this), c.bind(this.img, "error", this), void(this.proxyImage.src = this.img.src))
    }, h.prototype.getIsImageComplete = function() {
        return this.img.complete && void 0 !== this.img.naturalWidth
    }, h.prototype.confirm = function(a, b) {
        this.isLoaded = a, this.emit("progress", this, this.img, b)
    }, h.prototype.handleEvent = function(a) {
        var b = "on" + a.type;
        this[b] && this[b](a)
    }, h.prototype.onload = function() {
        this.confirm(!0, "onload"), this.unbindEvents()
    }, h.prototype.onerror = function() {
        this.confirm(!1, "onerror"), this.unbindEvents()
    }, h.prototype.unbindEvents = function() {
        c.unbind(this.proxyImage, "load", this), c.unbind(this.proxyImage, "error", this), c.unbind(this.img, "load", this), c.unbind(this.img, "error", this)
    }, i.prototype = new h, i.prototype.check = function() {
        c.bind(this.img, "load", this), c.bind(this.img, "error", this), this.img.src = this.url;
        var a = this.getIsImageComplete();
        a && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
    }, i.prototype.unbindEvents = function() {
        c.unbind(this.img, "load", this), c.unbind(this.img, "error", this)
    }, i.prototype.confirm = function(a, b) {
        this.isLoaded = a, this.emit("progress", this, this.element, b)
    }, g.makeJQueryPlugin = function(b) {
        b = b || a.jQuery, b && (j = b, j.fn.imagesLoaded = function(a, b) {
            var c = new g(this, a, b);
            return c.jqDeferred.promise(j(this))
        })
    }, g.makeJQueryPlugin(), g
});

/*! Stellar.js v0.6.2 | Copyright 2014, Mark Dalgleish | http://markdalgleish.com/projects/stellar.js | http://markdalgleish.mit-license.org */
!function(a, b, c, d) {
    function e(b, c) {
        this.element = b, this.options = a.extend({}, g, c), this._defaults = g, this._name = f, this.init()
    }

    var f = "stellar", g = {
        scrollProperty      : "scroll",
        positionProperty    : "position",
        horizontalScrolling : !0,
        verticalScrolling   : !0,
        horizontalOffset    : 0,
        verticalOffset      : 0,
        responsive          : !1,
        parallaxBackgrounds : !0,
        parallaxElements    : !0,
        hideDistantElements : !0,
        hideElement         : function(a) {
            a.hide()
        },
        showElement         : function(a) {
            a.show()
        }
    }, h = {
        scroll       : {
            getLeft    : function(a) {
                return a.scrollLeft()
            }, setLeft : function(a, b) {
                a.scrollLeft(b)
            }, getTop  : function(a) {
                return a.scrollTop()
            }, setTop  : function(a, b) {
                a.scrollTop(b)
            }
        }, position  : {
            getLeft   : function(a) {
                return -1 * parseInt(a.css("left"), 10)
            }, getTop : function(a) {
                return -1 * parseInt(a.css("top"), 10)
            }
        }, margin    : {
            getLeft   : function(a) {
                return -1 * parseInt(a.css("margin-left"), 10)
            }, getTop : function(a) {
                return -1 * parseInt(a.css("margin-top"), 10)
            }
        }, transform : {
            getLeft   : function(a) {
                var b = getComputedStyle(a[0])[k];
                return "none" !== b ? -1 * parseInt(b.match(/(-?[0-9]+)/g)[4], 10) : 0
            }, getTop : function(a) {
                var b = getComputedStyle(a[0])[k];
                return "none" !== b ? -1 * parseInt(b.match(/(-?[0-9]+)/g)[5], 10) : 0
            }
        }
    }, i = {
        position     : {
            setLeft   : function(a, b) {
                a.css("left", b)
            }, setTop : function(a, b) {
                a.css("top", b)
            }
        }, transform : {
            setPosition : function(a, b, c, d, e) {
                a[0].style[k] = "translate3d(" + (b - c) + "px, " + (d - e) + "px, 0)"
            }
        }
    }, j = function() {
        var b, c = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/, d = a("script")[0].style, e = "";
        for (b in d)if (c.test(b)) {
            e = b.match(c)[0];
            break
        }
        return "WebkitOpacity" in d && (e = "Webkit"), "KhtmlOpacity" in d && (e = "Khtml"), function(a) {
            return e + (e.length > 0 ? a.charAt(0).toUpperCase() + a.slice(1) : a)
        }
    }(), k = j("transform"), l = a("<div />", {style : "background:#fff"}).css("background-position-x") !== d, m = l ? function(a, b, c) {
            a.css({"background-position-x" : b, "background-position-y" : c})
        } : function(a, b, c) {
            a.css("background-position", b + " " + c)
        }, n = l ? function(a) {
            return [a.css("background-position-x"), a.css("background-position-y")]
        } : function(a) {
            return a.css("background-position").split(" ")
        }, o = b.requestAnimationFrame || b.webkitRequestAnimationFrame || b.mozRequestAnimationFrame || b.oRequestAnimationFrame || b.msRequestAnimationFrame || function(a) {
            setTimeout(a, 1e3 / 60)
        };
    e.prototype = {
        init                          : function() {
            this.options.name = f + "_" + Math.floor(1e9 * Math.random()), this._defineElements(), this._defineGetters(), this._defineSetters(), this._handleWindowLoadAndResize(), this._detectViewport(), this.refresh({firstLoad : !0}), "scroll" === this.options.scrollProperty ? this._handleScrollEvent() : this._startAnimationLoop()
        }, _defineElements            : function() {
            this.element === c.body && (this.element = b), this.$scrollElement = a(this.element), this.$element = this.element === b ? a("body") : this.$scrollElement, this.$viewportElement = this.options.viewportElement !== d ? a(this.options.viewportElement) : this.$scrollElement[0] === b || "scroll" === this.options.scrollProperty ? this.$scrollElement : this.$scrollElement.parent()
        }, _defineGetters             : function() {
            var a = this, b = h[a.options.scrollProperty];
            this._getScrollLeft = function() {
                return b.getLeft(a.$scrollElement)
            }, this._getScrollTop = function() {
                return b.getTop(a.$scrollElement)
            }
        }, _defineSetters             : function() {
            var b = this, c = h[b.options.scrollProperty], d = i[b.options.positionProperty], e = c.setLeft, f = c.setTop;
            this._setScrollLeft = "function" == typeof e ? function(a) {
                    e(b.$scrollElement, a)
                } : a.noop, this._setScrollTop = "function" == typeof f ? function(a) {
                    f(b.$scrollElement, a)
                } : a.noop, this._setPosition = d.setPosition || function(a, c, e, f, g) {
                    b.options.horizontalScrolling && d.setLeft(a, c, e), b.options.verticalScrolling && d.setTop(a, f, g)
                }
        }, _handleWindowLoadAndResize : function() {
            var c = this, d = a(b);
            c.options.responsive && d.bind("load." + this.name, function() {
                c.refresh()
            }), d.bind("resize." + this.name, function() {
                c._detectViewport(), c.options.responsive && c.refresh()
            })
        }, refresh                    : function(c) {
            var d = this, e = d._getScrollLeft(), f = d._getScrollTop();
            c && c.firstLoad || this._reset(), this._setScrollLeft(0), this._setScrollTop(0), this._setOffsets(), this._findParticles(), this._findBackgrounds(), c && c.firstLoad && /WebKit/.test(navigator.userAgent) && a(b).load(function() {
                var a = d._getScrollLeft(), b = d._getScrollTop();
                d._setScrollLeft(a + 1), d._setScrollTop(b + 1), d._setScrollLeft(a), d._setScrollTop(b)
            }), this._setScrollLeft(e), this._setScrollTop(f)
        }, _detectViewport            : function() {
            var a = this.$viewportElement.offset(), b = null !== a && a !== d;
            this.viewportWidth = this.$viewportElement.width(), this.viewportHeight = this.$viewportElement.height(), this.viewportOffsetTop = b ? a.top : 0, this.viewportOffsetLeft = b ? a.left : 0
        }, _findParticles             : function() {
            {
                var b = this;
                this._getScrollLeft(), this._getScrollTop()
            }
            if (this.particles !== d)for (var c = this.particles.length - 1; c >= 0; c--)this.particles[c].$element.data("stellar-elementIsActive", d);
            this.particles = [], this.options.parallaxElements && this.$element.find("[data-stellar-ratio]").each(function() {
                var c, e, f, g, h, i, j, k, l, m = a(this), n = 0, o = 0, p = 0, q = 0;
                if (m.data("stellar-elementIsActive")) {
                    if (m.data("stellar-elementIsActive") !== this)return
                } else m.data("stellar-elementIsActive", this);
                b.options.showElement(m), m.data("stellar-startingLeft") ? (m.css("left", m.data("stellar-startingLeft")), m.css("top", m.data("stellar-startingTop"))) : (m.data("stellar-startingLeft", m.css("left")), m.data("stellar-startingTop", m.css("top"))), f = m.position().left, g = m.position().top, h = "auto" === m.css("margin-left") ? 0 : parseInt(m.css("margin-left"), 10), i = "auto" === m.css("margin-top") ? 0 : parseInt(m.css("margin-top"), 10), k = m.offset().left - h, l = m.offset().top - i, m.parents().each(function() {
                    var b = a(this);
                    return b.data("stellar-offset-parent") === !0 ? (n = p, o = q, j = b, !1) : (p += b.position().left, void(q += b.position().top))
                }), c = m.data("stellar-horizontal-offset") !== d ? m.data("stellar-horizontal-offset") : j !== d && j.data("stellar-horizontal-offset") !== d ? j.data("stellar-horizontal-offset") : b.horizontalOffset, e = m.data("stellar-vertical-offset") !== d ? m.data("stellar-vertical-offset") : j !== d && j.data("stellar-vertical-offset") !== d ? j.data("stellar-vertical-offset") : b.verticalOffset, b.particles.push({
                    $element             : m,
                    $offsetParent        : j,
                    isFixed              : "fixed" === m.css("position"),
                    horizontalOffset     : c,
                    verticalOffset       : e,
                    startingPositionLeft : f,
                    startingPositionTop  : g,
                    startingOffsetLeft   : k,
                    startingOffsetTop    : l,
                    parentOffsetLeft     : n,
                    parentOffsetTop      : o,
                    stellarRatio         : m.data("stellar-ratio") !== d ? m.data("stellar-ratio") : 1,
                    width                : m.outerWidth(!0),
                    height               : m.outerHeight(!0),
                    isHidden             : !1
                })
            })
        }, _findBackgrounds           : function() {
            var b, c = this, e = this._getScrollLeft(), f = this._getScrollTop();
            this.backgrounds = [], this.options.parallaxBackgrounds && (b = this.$element.find("[data-stellar-background-ratio]"), this.$element.data("stellar-background-ratio") && (b = b.add(this.$element)), b.each(function() {
                var b, g, h, i, j, k, l, o = a(this), p = n(o), q = 0, r = 0, s = 0, t = 0;
                if (o.data("stellar-backgroundIsActive")) {
                    if (o.data("stellar-backgroundIsActive") !== this)return
                } else o.data("stellar-backgroundIsActive", this);
                o.data("stellar-backgroundStartingLeft") ? m(o, o.data("stellar-backgroundStartingLeft"), o.data("stellar-backgroundStartingTop")) : (o.data("stellar-backgroundStartingLeft", p[0]), o.data("stellar-backgroundStartingTop", p[1])), h = "auto" === o.css("margin-left") ? 0 : parseInt(o.css("margin-left"), 10), i = "auto" === o.css("margin-top") ? 0 : parseInt(o.css("margin-top"), 10), j = o.offset().left - h - e, k = o.offset().top - i - f, o.parents().each(function() {
                    var b = a(this);
                    return b.data("stellar-offset-parent") === !0 ? (q = s, r = t, l = b, !1) : (s += b.position().left, void(t += b.position().top))
                }), b = o.data("stellar-horizontal-offset") !== d ? o.data("stellar-horizontal-offset") : l !== d && l.data("stellar-horizontal-offset") !== d ? l.data("stellar-horizontal-offset") : c.horizontalOffset, g = o.data("stellar-vertical-offset") !== d ? o.data("stellar-vertical-offset") : l !== d && l.data("stellar-vertical-offset") !== d ? l.data("stellar-vertical-offset") : c.verticalOffset, c.backgrounds.push({
                    $element                       : o,
                    $offsetParent                  : l,
                    isFixed                        : "fixed" === o.css("background-attachment"),
                    horizontalOffset               : b,
                    verticalOffset                 : g,
                    startingValueLeft              : p[0],
                    startingValueTop               : p[1],
                    startingBackgroundPositionLeft : isNaN(parseInt(p[0], 10)) ? 0 : parseInt(p[0], 10),
                    startingBackgroundPositionTop  : isNaN(parseInt(p[1], 10)) ? 0 : parseInt(p[1], 10),
                    startingPositionLeft           : o.position().left,
                    startingPositionTop            : o.position().top,
                    startingOffsetLeft             : j,
                    startingOffsetTop              : k,
                    parentOffsetLeft               : q,
                    parentOffsetTop                : r,
                    stellarRatio                   : o.data("stellar-background-ratio") === d ? 1 : o.data("stellar-background-ratio")
                })
            }))
        }, _reset                     : function() {
            var a, b, c, d, e;
            for (e = this.particles.length - 1; e >= 0; e--)a = this.particles[e], b = a.$element.data("stellar-startingLeft"), c = a.$element.data("stellar-startingTop"), this._setPosition(a.$element, b, b, c, c), this.options.showElement(a.$element), a.$element.data("stellar-startingLeft", null).data("stellar-elementIsActive", null).data("stellar-backgroundIsActive", null);
            for (e = this.backgrounds.length - 1; e >= 0; e--)d = this.backgrounds[e], d.$element.data("stellar-backgroundStartingLeft", null).data("stellar-backgroundStartingTop", null), m(d.$element, d.startingValueLeft, d.startingValueTop)
        }, destroy                    : function() {
            this._reset(), this.$scrollElement.unbind("resize." + this.name).unbind("scroll." + this.name), this._animationLoop = a.noop, a(b).unbind("load." + this.name).unbind("resize." + this.name)
        }, _setOffsets                : function() {
            var c = this, d = a(b);
            d.unbind("resize.horizontal-" + this.name).unbind("resize.vertical-" + this.name), "function" == typeof this.options.horizontalOffset ? (this.horizontalOffset = this.options.horizontalOffset(), d.bind("resize.horizontal-" + this.name, function() {
                    c.horizontalOffset = c.options.horizontalOffset()
                })) : this.horizontalOffset = this.options.horizontalOffset, "function" == typeof this.options.verticalOffset ? (this.verticalOffset = this.options.verticalOffset(), d.bind("resize.vertical-" + this.name, function() {
                    c.verticalOffset = c.options.verticalOffset()
                })) : this.verticalOffset = this.options.verticalOffset
        }, _repositionElements        : function() {
            var a, b, c, d, e, f, g, h, i, j, k = this._getScrollLeft(), l = this._getScrollTop(), n = !0, o = !0;
            if (this.currentScrollLeft !== k || this.currentScrollTop !== l || this.currentWidth !== this.viewportWidth || this.currentHeight !== this.viewportHeight) {
                for (this.currentScrollLeft = k, this.currentScrollTop = l, this.currentWidth = this.viewportWidth, this.currentHeight = this.viewportHeight, j = this.particles.length - 1; j >= 0; j--)a = this.particles[j], b = a.isFixed ? 1 : 0, this.options.horizontalScrolling ? (f = (k + a.horizontalOffset + this.viewportOffsetLeft + a.startingPositionLeft - a.startingOffsetLeft + a.parentOffsetLeft) * -(a.stellarRatio + b - 1) + a.startingPositionLeft, h = f - a.startingPositionLeft + a.startingOffsetLeft) : (f = a.startingPositionLeft, h = a.startingOffsetLeft), this.options.verticalScrolling ? (g = (l + a.verticalOffset + this.viewportOffsetTop + a.startingPositionTop - a.startingOffsetTop + a.parentOffsetTop) * -(a.stellarRatio + b - 1) + a.startingPositionTop, i = g - a.startingPositionTop + a.startingOffsetTop) : (g = a.startingPositionTop, i = a.startingOffsetTop), this.options.hideDistantElements && (o = !this.options.horizontalScrolling || h + a.width > (a.isFixed ? 0 : k) && h < (a.isFixed ? 0 : k) + this.viewportWidth + this.viewportOffsetLeft, n = !this.options.verticalScrolling || i + a.height > (a.isFixed ? 0 : l) && i < (a.isFixed ? 0 : l) + this.viewportHeight + this.viewportOffsetTop), o && n ? (a.isHidden && (this.options.showElement(a.$element), a.isHidden = !1), this._setPosition(a.$element, f, a.startingPositionLeft, g, a.startingPositionTop)) : a.isHidden || (this.options.hideElement(a.$element), a.isHidden = !0);
                for (j = this.backgrounds.length - 1; j >= 0; j--)c = this.backgrounds[j], b = c.isFixed ? 0 : 1, d = this.options.horizontalScrolling ? (k + c.horizontalOffset - this.viewportOffsetLeft - c.startingOffsetLeft + c.parentOffsetLeft - c.startingBackgroundPositionLeft) * (b - c.stellarRatio) + "px" : c.startingValueLeft, e = this.options.verticalScrolling ? (l + c.verticalOffset - this.viewportOffsetTop - c.startingOffsetTop + c.parentOffsetTop - c.startingBackgroundPositionTop) * (b - c.stellarRatio) + "px" : c.startingValueTop, m(c.$element, d, e)
            }
        }, _handleScrollEvent         : function() {
            var a = this, b = !1, c = function() {
                a._repositionElements(), b = !1
            }, d = function() {
                b || (o(c), b = !0)
            };
            this.$scrollElement.bind("scroll." + this.name, d), d()
        }, _startAnimationLoop        : function() {
            var a = this;
            this._animationLoop = function() {
                o(a._animationLoop), a._repositionElements()
            }, this._animationLoop()
        }
    }, a.fn[f] = function(b) {
        var c = arguments;
        return b === d || "object" == typeof b ? this.each(function() {
                a.data(this, "plugin_" + f) || a.data(this, "plugin_" + f, new e(this, b))
            }) : "string" == typeof b && "_" !== b[0] && "init" !== b ? this.each(function() {
                    var d = a.data(this, "plugin_" + f);
                    d instanceof e && "function" == typeof d[b] && d[b].apply(d, Array.prototype.slice.call(c, 1)), "destroy" === b && a.data(this, "plugin_" + f, null)
                }) : void 0
    }, a[f] = function() {
        var c = a(b);
        return c.stellar.apply(c, Array.prototype.slice.call(arguments, 0))
    }, a[f].scrollProperty = h, a[f].positionProperty = i, b.Stellar = e
}(jQuery, this, document);
;jQuery.noConflict();
(function($) {
    "use strict";
    $(document).on('ready', function() {
        var $window = $(window), $document = $(document), $body = $('body');
        var isMobile = {
            Android       : function() {
                return navigator.userAgent.match(/Android/i);
            }, BlackBerry : function() {
                return navigator.userAgent.match(/BlackBerry/i);
            }, iOS        : function() {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i);
            }, Opera      : function() {
                return navigator.userAgent.match(/Opera Mini/i);
            }, Windows    : function() {
                return navigator.userAgent.match(/IEMobile/i);
            }, any        : function() {
                return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
            },
        }
        if (!('placeholder' in document.createElement('input'))) {
            $('form').on('submit', function() {
                $(this).find('[placeholder]').each(function() {
                    var $input = $(this);
                    if ($input.val() == $input.attr('placeholder')) {
                        $input.val('');
                    }
                });
            });
            $('[placeholder]').on('focus', function() {
                var $input = $(this);
                if ($input.val() == $input.attr('placeholder')) {
                    $input.val('');
                    $input.removeClass('placeholder');
                }
            }).on('blur', function() {
                var $input = $(this);
                if ($input.val() == '' || $input.val() == $input.attr('placeholder')) {
                    $input.addClass('placeholder');
                    $input.val($input.attr('placeholder'));
                }
            }).blur();
        }
        var $els = $('[class*="palko-mirka-animation-"]');
        if ($body.hasClass('palko-mirka-enable-animations') && !isMobile.any()) {
            $els.one('inview', function() {
                $(this).addClass('palko-mirka-animate');
            });
        }
        else {
            $els.addClass('palko-mirka-no-animate');
        }
        if ($('.header-section').hasClass('header-floating')) {
            var detectFloatingHeader = function() {
                if ($window.scrollTop() >= $('.header-anchor').offset().top - $body.offset().top) {
                    $('.header-section').addClass('floating').css('top', $body.offset().top);
                } else {
                    $('.header-section').removeClass('floating').css('top', '');
                }
            }
            detectFloatingHeader();
            $window.on('resize', detectFloatingHeader);
            $window.on('scroll', detectFloatingHeader);
        }
        $body.on('click', '.toggle', function(e) {
            e.preventDefault();
            $('.toggle.active').not(this).removeClass('active');
            $(this).toggleClass('active');
        });
        $('a[href="#"]').on('click', function(e) {
            e.preventDefault();
        });
        $('.header-navigation ul a, a.anchor-link').on('click', function(e) {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname && location.search == this.search) {
                var $target = $(this.hash), target_top, speed;
                $target = $target.length ? $target : $('[name=' + this.hash.slice(1) + ']');
                target_top = $target.offset().top - $('.header-section').innerHeight() - $body.offset().top;
                speed = Math.abs($window.scrollTop() - target_top) / 2.5;
                if ($target.length) {
                    $('html, body').animate({scrollTop : target_top,}, speed);
                    $('.header-navigation-toggle').removeClass('active');
                    return false;
                }
            }
        });
        $('[data-palko-mirka-background-parallax]').each(function(i, el) {
            var $el = $(el), $img = $(document.createElement('img')), $bg, data = JSON.parse($el.attr('data-palko-mirka-background-parallax'));
            $bg = $el.find('.section-background');
            if ($bg.length < 1) {
                $bg = $(document.createElement('div')).addClass('section-background').prependTo($el);
            }
            $img.attr('src', data.src).attr('width', data.width).attr('height', data.height).attr('data-stellar-ratio', data.ratio).attr('alt', '').css({'opacity' : 0}).appendTo($bg);
        });
        var resizeBackground = function() {
            $('.section-background video, .section-background img').each(function(i, el) {
                var $el = $(el), $section = $el.parent(), min_w = 0, el_w = $el.attr('width') || (el.tagName == 'VIDEO' ? el.videoWidth : el.naturalWidth), el_h = $el.attr('height') || (el.tagName == 'VIDEO' ? el.videoHeight : el.naturalHeight), section_w = $section.outerWidth(), section_h = $section.outerHeight(), scale_w = section_w / el_w, scale_h = section_h / el_h, scale = scale_w > scale_h ? scale_w : scale_h, new_el_w, new_el_h, offset_top, offset_left;
                if (scale * el_w < min_w) {
                    scale = min_w / el_w;
                }
                new_el_w = scale * el_w;
                new_el_h = scale * el_h;
                offset_left = (new_el_w - section_w) / 2 * -1;
                offset_top = (new_el_h - section_h) / 2 * -1;
                $el.css({
                    "width"       : new_el_w,
                    "height"      : new_el_h,
                    "margin-top"  : offset_top,
                    "margin-left" : offset_left,
                    "opacity"     : 1,
                });
            });
        }
        $window.on('resize', function() {
            clearTimeout(this.resizeBackgroundTimeout);
            this.resizeBackgroundTimeout = setTimeout(resizeBackground, 50);
        });
        $window.on('pageStart', resizeBackground);
        if (isMobile.any()) {
            $('.section-background video').remove();
        }
        var navigationMaxHeight = function() {
            $('.header-navigation > div > ul').css('max-height', 0.8 * ($window.height() - $('.header-section').innerHeight() - $body.offset().top));
        }
        navigationMaxHeight();
        $window.on('resize', navigationMaxHeight);
        if ($('.hero-logo').length > 0) {
            var fadeOutHeroLogo = function() {
                var $logo = $('.hero-logo'), scroll = $window.scrollTop(), target = $logo.offset().top + (0.7 * $logo.outerHeight());
                $logo.css('opacity', 1 - (scroll / target).toFixed(2));
            }
            fadeOutHeroLogo();
            $window.on('scroll', fadeOutHeroLogo);
            $window.on('resize', fadeOutHeroLogo);
        }
        if ($.fn.countdown) {
            $('.palko-mirka-sow-countdown').each(function(i, el) {
                var $el = $(el), target = $el.attr('data-palko-mirka-target'), $fragments = $el.children();
                $el.countdown(target, {elapse : true,}).on('update.countdown', function(e) {
                    $fragments.each(function(j, fragment) {
                        var $fragment = $(fragment),
                            format = $fragment.attr('data-palko-mirka-format'),
                            singular = $fragment.attr('data-palko-mirka-singular'),
                            plural = $fragment.attr('data-palko-mirka-plural');
                        $fragment.find('big').html(e.strftime('%' + format));
                        $fragment.find('small').html(e.strftime('%!' + format + ':' + singular + ',' + plural + ';'));
                    });
                });
            });
        }
        if ($.fn.lightGallery) {
            $('.lightgallery.palko-mirka-sow-gallery-grid-items').each(function(i, el) {
                var $el = $(el);
                $el.lightGallery({selector : '.palko-mirka-sow-gallery-grid-item > a', download : false,});
            });
        }
        if ($.fn.isotope) {
            $('.palko-mirka-sow-gallery-grid').each(function(i, el) {
                var $el = $(el), $grid = $el.find('.palko-mirka-sow-gallery-grid-items'), $filter = $el.find('.palko-mirka-sow-gallery-grid-filters');
                $grid.imagesLoaded(function() {
                    $grid.isotope({itemSelector : '.palko-mirka-sow-gallery-grid-item', transitionDuration : '1s',});
                });
                $filter.on('click', 'a', function(e) {
                    e.preventDefault();
                    var $el = $(this);
                    $el.siblings().removeClass('active');
                    $el.addClass('active');
                    $grid.isotope({filter : $el.attr('data-filter')});
                });
            });
        }
        if ($('.palko-mirka-sow-google-maps').length > 0) {
            var resizeGoogleMaps = function() {
                $('[id*="gmaps-"]').css('max-height', 0.8 * ($window.height() - $('.header-section').innerHeight() - $body.offset().top));
            }
            $window.on('resize', function() {
                resizeGoogleMaps();
            });
            resizeGoogleMaps();
        }
        if ($.fn.flickity) {
            $window.on('pageStart', function() {
                $('.hero-slider').each(function() {
                    var $el = $(this), autoplay = parseInt($el.attr('data-palko-mirka-autoplay'));
                    $el.flickity({
                        setGallerySize       : false,
                        draggable            : false,
                        wrapAround           : true,
                        autoPlay             : (autoplay > 0 && $el.children().length > 1) ? autoplay : false,
                        pauseAutoPlayOnHover : false,
                        prevNextButtons      : false,
                        pageDots             : ($el.children().length > 1) ? true : false,
                        selectedAttraction   : 0.2,
                        friction             : 0.8,
                    }).on('cellSelect', function() {
                        var data = $(this).data('flickity'), $cells = $el.find('.hero-slide');
                        $cells.each(function(i, cell) {
                            var $video = $(cell).find('video');
                            if ($video.length > 0) {
                                if (cell == data.selectedElement) {
                                    $video.get(0).play();
                                } else {
                                    $video.get(0).pause();
                                }
                            }
                        });
                    }).trigger('cellSelect');
                });
                $('.palko-mirka-sow-quote').each(function() {
                    var $el = $(this), autoplay = parseInt($el.attr('data-palko-mirka-autoplay'));
                    $el.flickity({
                        wrapAround           : true,
                        autoPlay             : (autoplay > 0 && $el.children().length > 1) ? autoplay : false,
                        pauseAutoPlayOnHover : false,
                        prevNextButtons      : false,
                        pageDots             : ($el.children().length > 1) ? true : false,
                        selectedAttraction   : 0.2,
                        friction             : 0.8,
                    });
                });
            });
        }
        if ($.fn.sakura && $('#hero-effect').length > 0 && !isMobile.any()) {
            $window.on('pageStart', function() {
                var $el = $('#hero-effect'), effect = $el.attr('data-palko-mirka-effect');
                $el.sakura('start', {
                    className : 'sakura hero-effect-item ' + effect,
                    maxSize   : (effect == 'snow') ? 7 : 14,
                    minSize   : (effect == 'snow') ? 4 : 9,
                    newOn     : (effect == 'snow') ? 200 : 300,
                });
            });
        }
        if ($.fn.stellar) {
            $window.stellar('destroy');
            if (!isMobile.any()) {
                $window.stellar({
                    verticalOffset      : function() {
                        return $body.offset().top
                    },
                    positionProperty    : 'transform',
                    responsive          : true,
                    hideDistantElements : false,
                    horizontalScrolling : false,
                });
            } else {
                $.stellar = function() {
                    return;
                };
            }
        }
        if ($('#preloader').length > 0) {
            Pace.on('done', function() {
                $('#preloader').addClass('palko-mirka-preloader-done');
                $window.trigger('pageStart');
            });
        }
        else {
            $window.trigger('pageStart');
        }
        $window.trigger('scroll');
    });
})(jQuery);
!function(a, b) {
    "use strict";
    function c() {
        if (!e) {
            e = !0;
            var a, c, d, f, g = -1 !== navigator.appVersion.indexOf("MSIE 10"), h = !!navigator.userAgent.match(/Trident.*rv:11\./), i = b.querySelectorAll("iframe.wp-embedded-content");
            for (c = 0; c < i.length; c++) {
                if (d = i[c], !d.getAttribute("data-secret")) f = Math.random().toString(36).substr(2, 10), d.src += "#?secret=" + f, d.setAttribute("data-secret", f);
                if (g || h) a = d.cloneNode(!0), a.removeAttribute("security"), d.parentNode.replaceChild(a, d)
            }
        }
    }

    var d = !1, e = !1;
    if (b.querySelector)if (a.addEventListener) d = !0;
    if (a.wp = a.wp || {}, !a.wp.receiveEmbedMessage)if (a.wp.receiveEmbedMessage = function(c) {
            var d = c.data;
            if (d.secret || d.message || d.value)if (!/[^a-zA-Z0-9]/.test(d.secret)) {
                var e, f, g, h, i, j = b.querySelectorAll('iframe[data-secret="' + d.secret + '"]'), k = b.querySelectorAll('blockquote[data-secret="' + d.secret + '"]');
                for (e = 0; e < k.length; e++)k[e].style.display = "none";
                for (e = 0; e < j.length; e++)if (f = j[e], c.source === f.contentWindow) {
                    if (f.removeAttribute("style"), "height" === d.message) {
                        if (g = parseInt(d.value, 10), g > 1e3) g = 1e3; else if (~~g < 200) g = 200;
                        f.height = g
                    }
                    if ("link" === d.message)if (h = b.createElement("a"), i = b.createElement("a"), h.href = f.getAttribute("src"), i.href = d.value, i.host === h.host)if (b.activeElement === f) a.top.location.href = d.value
                } else;
            }
        }, d) a.addEventListener("message", a.wp.receiveEmbedMessage, !1), b.addEventListener("DOMContentLoaded", c, !1), a.addEventListener("load", c, !1)
}(window, document);
jQuery(function(t) {
    var e = t(panelsStyles.fullContainer);
    0 === e.length && (e = t("body"));
    var r = function() {
        t(".siteorigin-panels-stretch.panel-row-style").each(function() {
            var r = t(this);
            r.css({"margin-left" : 0, "margin-right" : 0, "padding-left" : 0, "padding-right" : 0});
            var i = r.offset().left - e.offset().left, n = e.outerWidth() - i - r.parent().outerWidth();
            r.css({
                "margin-left"   : -i,
                "margin-right"  : -n,
                "padding-left"  : "full" === r.data("stretch-type") ? i : 0,
                "padding-right" : "full" === r.data("stretch-type") ? n : 0
            });
            var a = r.find("> .panel-grid-cell");
            "full-stretched" === r.data("stretch-type") && 1 === a.length && a.css({
                "padding-left"  : 0,
                "padding-right" : 0
            }), r.css({"border-left" : 0, "border-right" : 0})
        }), t(".siteorigin-panels-stretch.panel-row-style").length && t(window).trigger("panelsStretchRows")
    };
    t(window).resize(r).load(r), r(), t("body").removeClass("siteorigin-panels-before-js")
});

window.initMap = function() {

    var kursalon = {
        lat : 48.590461,
        lng : 17.837634
    };

    var kostol = {
        lat : 48.588707,
        lng : 17.839099
    };
    var map = new
        google.maps.Map(document.getElementById('gmaps-1'), {
        zoom   : 16,
        center : kursalon,
        scrollwheel: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },

            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#bdbdbd"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dadada"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#c9c9c9"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            }
        ]
    });
    var markerKursalon = new google.maps.Marker({
        position : kursalon,
        map      : map
    });
    var markerKostol = new google.maps.Marker({
        position : kostol,
        map      : map
    });
}