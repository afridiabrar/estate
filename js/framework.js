if (navigator.userAgent.match(/Mobi/) && self != top) {
    top.location.href = 'http://washington.sensationthemes.com';
}

!function t(e, n, i) {
    function r(a, s) {
        if (!n[a]) {
            if (!e[a]) {
                var u = "function" == typeof require && require;
                if (!s && u)return u(a, !0);
                if (o)return o(a, !0);
                var c = new Error("Cannot find module '" + a + "'");
                throw c.code = "MODULE_NOT_FOUND", c
            }
            var l = n[a] = {exports: {}};
            e[a][0].call(l.exports, function (t) {
                var n = e[a][1][t];
                return r(n ? n : t)
            }, l, l.exports, t, e, n, i)
        }
        return n[a].exports
    }

    for (var o = "function" == typeof require && require, a = 0; a < i.length; a++)r(i[a]);
    return r
}({
    1: [function (t, e, n) {
        "use strict";
        var i = t("./framework-lib");
        window.Framework = i;
        var r = i.define;
        r("ix", t("./framework-ix")), r("touch", t("./framework-touch")), r("forms", t("./framework-forms")), r("maps", t("./framework-maps")), r("gplus", t("./framework-gplus")), r("scroll", t("./framework-scroll")), r("links", t("./framework-links")), r("slider", t("./framework-slider")), r("lightbox", t("./framework-lightbox")), r("navbar", t("./framework-navbar")), r("dropdown", t("./framework-dropdown")), r("tabs", t("./framework-tabs")), r("brand", t("./framework-brand"))
    }, {
        "./framework-brand": 2,
        "./framework-dropdown": 3,
        "./framework-forms": 4,
        "./framework-gplus": 5,
        "./framework-ix": 6,
        "./framework-lib": 7,
        "./framework-lightbox": 8,
        "./framework-links": 9,
        "./framework-maps": 10,
        "./framework-navbar": 11,
        "./framework-scroll": 12,
        "./framework-slider": 13,
        "./framework-tabs": 14,
        "./framework-touch": 15
    }], 2: [function (t, e, n) {
        "use strict";
        var i = t("./framework-lib");
        e.exports = function (t, e) {
            {
                var n = {}, r = t("html"), o = t("body");
                window.location, i.env()
            }
            return n.ready = function () {
                var e = r.attr("data-wf-status");
                if (e) {
                    var n = t("<div></div>"), i = t("<a></a>");
                    i.attr("href", "http://framework.com?utm_campaign=brandjs"), n.css({
                        position: "fixed",
                        bottom: 0,
                        right: 0,
                        borderTop: "5px solid #2b3239",
                        borderLeft: "5px solid #2b3239",
                        borderTopLeftRadius: "5px",
                        backgroundColor: "#2b3239",
                        padding: "5px 5px 5px 10px",
                        fontFamily: "Arial",
                        fontSize: "10px",
                        textTransform: "uppercase",
                        opacity: "0",
                        transition: "opacity 0.50s ease-in-out"
                    }), i.css({color: "#AAADB0", textDecoration: "none"});
                    var a = t("<img>");
                    if (a.attr("src", "https://daks2k3a4ib2z.cloudfront.net/54153e6a3d25f2755b1f14ed/5445a4b1944ecdaa4df86d3e_subdomain-brand.svg"), a.css({
                            opacity: .9,
                            width: "55px",
                            verticalAlign: "middle",
                            paddingLeft: "4px",
                            paddingBottom: "3px"
                        }), n.text("Built with"), n.append(a), i.append(n), o.append(i), /PhantomJS/.test(window.navigator.userAgent))return;
                    n.css({opacity: "1.0"})
                }
            }, n
        }
    }, {"./framework-lib": 7}], 3: [function (t, e, n) {
        "use strict";
        var i = t("./framework-lib");
        e.exports = function (t, e) {
            function n() {
                p = w && i.env("design"), h = m.find(g), h.each(r)
            }

            function r(e, n) {
                var i = t(n), r = t.data(n, g);
                r || (r = t.data(n, g, {
                    open: !1,
                    el: i,
                    config: {}
                })), r.list = i.children(".w-dropdown-list"), r.toggle = i.children(".w-dropdown-toggle"), r.links = r.list.children(".w-dropdown-link"), r.outside = f(r), r.complete = d(r), i.off(g), r.toggle.off(g), o(r), r.nav && r.nav.off(g), r.nav = i.closest(".w-nav"), r.nav.on(y, a(r)), p ? i.on("setting" + g, a(r)) : (r.toggle.on("tap" + g, s(r)), i.on(y, a(r)), w && c(r))
            }

            function o(t) {
                t.config = {hover: +t.el.attr("data-hover"), delay: +t.el.attr("data-delay") || 0}
            }

            function a(t) {
                return function (e, n) {
                    return n = n || {}, "w-close" == e.type ? c(t) : "setting" == e.type ? (o(t), n.open === !0 && u(t, !0), void(n.open === !1 && c(t, !0))) : void 0
                }
            }

            function s(t) {
                return e.debounce(function (e) {
                    t.open ? c(t) : u(t)
                })
            }

            function u(t, e) {
                t.open || (l(t), t.open = !0, t.list.addClass(b), t.toggle.addClass(b), x.intro(0, t.el[0]), i.redraw.up(), p || m.on("tap" + g, t.outside), window.clearTimeout(t.delayId))
            }

            function c(t, e) {
                if (t.open) {
                    t.open = !1;
                    var n = t.config;
                    return x.outro(0, t.el[0]), m.off("tap" + g, t.outside), window.clearTimeout(t.delayId), !n.delay || e ? t.complete() : void(t.delayId = window.setTimeout(t.complete, n.delay))
                }
            }

            function l(e) {
                var n = e.el[0];
                h.each(function (e, i) {
                    var r = t(i);
                    r.is(n) || r.has(n).length || r.triggerHandler(y)
                })
            }

            function f(n) {
                return n.outside && m.off("tap" + g, n.outside), e.debounce(function (e) {
                    if (n.open) {
                        var i = t(e.target);
                        i.closest(".w-dropdown-toggle").length || n.el.is(i.closest(g)) || c(n)
                    }
                })
            }

            function d(t) {
                return function () {
                    t.list.removeClass(b), t.toggle.removeClass(b)
                }
            }

            var h, p, v = {}, m = (t.tram, t(document)), w = i.env(), g = ".w-dropdown", b = "w--open", y = "w-close" + g, x = i.ixEvents();
            return v.ready = v.design = v.preview = n, v
        }
    }, {"./framework-lib": 7}], 4: [function (t, e, n) {
        "use strict";
        var i = t("./framework-lib");
        e.exports = function (e, n) {
            function r() {
                w = e("html").attr("data-wf-site"), m = e(z + " form"), m.length && m.each(o)
            }

            function o(t, n) {
                var i = e(n), r = e.data(n, z);
                r || (r = e.data(n, z, {form: i})), s(r);
                var o = i.closest("div.w-form");
                r.done = o.find("> .w-form-done"), r.fail = o.find("> .w-form-fail");
                var a = r.action = i.attr("action");
                return r.handler = null, r.redirect = i.attr("data-redirect"), C.test(a) ? void(r.handler = d) : a ? void 0 : w ? void(r.handler = f) : void M()
            }

            function a() {
                g = !0, k.on("submit", z + " form", function (t) {
                    var n = e.data(this, z);
                    n.handler && (n.evt = t, n.handler(n))
                })
            }

            function s(t) {
                var e = t.btn = t.form.find(':input[type="submit"]');
                t.wait = t.btn.attr("data-wait") || null, t.success = !1, e.prop("disabled", !1), t.label && e.val(t.label)
            }

            function u(t) {
                var e = t.btn, n = t.wait;
                e.prop("disabled", !0), n && (t.label = e.val(), e.val(n))
            }

            function c(t, n) {
                var i = null;
                return n = n || {}, t.find(':input:not([type="submit"])').each(function (r, o) {
                    var a = e(o), s = a.attr("type"), u = a.attr("data-name") || a.attr("name") || "Field " + (r + 1), c = a.val();
                    if ("checkbox" == s && (c = a.is(":checked")), "radio" == s) {
                        if (null === n[u] || "string" == typeof n[u])return;
                        c = t.find('input[name="' + a.attr("name") + '"]:checked').val() || null
                    }
                    "string" == typeof c && (c = e.trim(c)), n[u] = c, i = i || l(a, u, c)
                }), i
            }

            function l(t, e, n) {
                var i = null;
                return t.attr("required") ? (n ? (E.test(e) || E.test(t.attr("type"))) && (L.test(n) || (i = "Please enter a valid email address for: " + e)) : i = "Please fill out the required field: " + e, i) : null
            }

            function f(t) {
                s(t);
                var n = t.form, r = {
                    name: n.attr("data-name") || n.attr("name") || "Untitled Form",
                    source: _.href,
                    test: i.env(),
                    fields: {}
                };
                p(t);
                var o = c(n, r.fields);
                if (o)return A(o);
                if (u(t), !w)return void h(t);
                var a = b + "/api/v1/form/" + w;
                T && a.indexOf(y) >= 0 && (a = a.replace(y, x)), e.ajax({
                    url: a,
                    type: "POST",
                    data: r,
                    dataType: "json",
                    crossDomain: !0
                }).done(function () {
                    t.success = !0, h(t)
                }).fail(function () {
                    h(t)
                })
            }

            function d(t) {
                s(t);
                var i = t.form, r = {};
                if (/^https/.test(_.href) && !/^https/.test(t.action))return void i.attr("method", "post");
                p(t);
                var o = c(i, r);
                if (o)return A(o);
                u(t);
                var a;
                n.each(r, function (t, e) {
                    E.test(e) && (r.EMAIL = t), /^((full[ _-]?)?name)$/i.test(e) && (a = t), /^(first[ _-]?name)$/i.test(e) && (r.FNAME = t), /^(last[ _-]?name)$/i.test(e) && (r.LNAME = t)
                }), a && !r.FNAME && (a = a.split(" "), r.FNAME = a[0], r.LNAME = r.LNAME || a[1]);
                var l = t.action.replace("/post?", "/post-json?") + "&c=?", f = l.indexOf("u=") + 2;
                f = l.substring(f, l.indexOf("&", f));
                var d = l.indexOf("id=") + 3;
                d = l.substring(d, l.indexOf("&", d)), r["b_" + f + "_" + d] = "", e.ajax({
                    url: l,
                    data: r,
                    dataType: "jsonp"
                }).done(function (e) {
                    t.success = "success" == e.result || /already/.test(e.msg), t.success || console.info("MailChimp error: " + e.msg), h(t)
                }).fail(function () {
                    h(t)
                })
            }

            function h(t) {
                var e = t.form, n = (e.closest("div.w-form"), t.redirect), r = t.success;
                return r && n ? void i.location(n) : (t.done.toggle(r), t.fail.toggle(!r), e.toggle(!r), void s(t))
            }

            function p(t) {
                t.evt && t.evt.preventDefault(), t.evt = null
            }

            var v = {};
            t("../plugins/xdomain-min");
            var m, w, g, b = "https://framework.com", y = "https://framework.com", x = "http://formdata.framework.com", k = e(document), _ = window.location, T = window.XDomainRequest && !window.atob, z = ".w-form", E = /e(\-)?mail/i, L = /^\S+@\S+$/, A = window.alert, C = /list-manage[1-9]?.com/i;
            v.ready = function () {
                r(), g || a()
            }, v.preview = v.design = function () {
                r()
            };
            var M = n.debounce(function () {
                A("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.")
            }, 100);
            return v
        }
    }, {"../plugins/xdomain-min": 18, "./framework-lib": 7}], 5: [function (t, e, n) {
        "use strict";
        var i = t("./framework-lib");
        e.exports = function (t, e) {
            function n() {
                a.find(".w-widget-gplus").length && r()
            }

            function r() {
                o = !0, t.getScript("https://apis.google.com/js/plusone.js")
            }

            var o, a = t(document), s = {};
            return s.ready = function () {
                i.env() || o || n()
            }, s
        }
    }, {"./framework-lib": 7}], 6: [function (t, e, n) {
        "use strict";
        var i = t("./framework-lib");
        e.exports = function (t, e) {
            function n(t) {
                t && (q = {}, e.each(t, function (t) {
                    q[t.slug] = t.value
                }), r())
            }

            function r() {
                var e = t("[data-ix]");
                e.length && (e.each(s), e.each(o), I.length && (i.scroll.on(u), setTimeout(u, 1)), D.length && i.load(c), $.length && setTimeout(l, 1), m())
            }

            function o(n, r) {
                var o = t(r), s = o.attr("data-ix"), u = q[s];
                if (u) {
                    var c = u.triggers;
                    c && (y.style(o, u.style), e.each(c, function (t) {
                        function e() {
                            f(t, o, {group: "A"})
                        }

                        function n() {
                            f(t, o, {group: "B"})
                        }

                        var r = {}, s = t.type, u = t.stepsB && t.stepsB.length;
                        if ("load" == s)return void(t.preload && !z ? D.push(e) : $.push(e));
                        if ("click" == s)return o.on("click" + k, function (e) {
                            i.validClick(e.currentTarget) && ("#" === o.attr("href") && e.preventDefault(), f(t, o, {group: r.clicked ? "B" : "A"}), u && (r.clicked = !r.clicked))
                        }), void(j = j.add(o));
                        if ("hover" == s)return o.on("mouseenter" + k, e), o.on("mouseleave" + k, n), void(j = j.add(o));
                        if ("scroll" == s)return void I.push({
                            el: o,
                            trigger: t,
                            state: {active: !1},
                            offsetTop: a(t.offsetTop),
                            offsetBot: a(t.offsetBot)
                        });
                        var c = S[s];
                        if (c) {
                            var l = o.closest(c);
                            return l.on(A, e).on(C, n), void(j = j.add(l))
                        }
                    }))
                }
            }

            function a(t) {
                if (!t)return 0;
                t += "";
                var e = parseInt(t, 10);
                return e !== e ? 0 : (t.indexOf("%") > 0 && (e /= 100, e >= 1 && (e = .999)), e)
            }

            function s(e, n) {
                t(n).off(k)
            }

            function u() {
                for (var t = x.scrollTop(), e = x.height(), n = I.length, i = 0; n > i; i++) {
                    var r = I[i], o = r.el, a = r.trigger, s = a.stepsB && a.stepsB.length, u = r.state, c = o.offset().top, l = o.outerHeight(), d = r.offsetTop, h = r.offsetBot;
                    1 > d && d > 0 && (d *= e), 1 > h && h > 0 && (h *= e);
                    var p = c + l - d >= t && t + e >= c + h;
                    p !== u.active && (p !== !1 || s) && (u.active = p, f(a, o, {group: p ? "A" : "B"}))
                }
            }

            function c() {
                for (var t = D.length, e = 0; t > e; e++)D[e]()
            }

            function l() {
                for (var t = $.length, e = 0; t > e; e++)$[e]()
            }

            function f(e, n, i, r) {
                function o() {
                    return u ? f(e, n, i, !0) : ("auto" == p.width && h.set({width: "auto"}), "auto" == p.height && h.set({height: "auto"}), void(a && a()))
                }

                i = i || {};
                var a = i.done;
                if (!g || i.force) {
                    var s = i.group || "A", u = e["loop" + s], c = e["steps" + s];
                    if (c && c.length) {
                        if (c.length < 2 && (u = !1), !r) {
                            var l = e.selector;
                            l && (n = e.descend ? n.find(l) : e.siblings ? n.siblings(l) : t(l), z && n.attr("data-ix-affect", 1)), E && n.addClass("w-ix-emptyfix")
                        }
                        for (var h = _(n), p = {}, v = 0; v < c.length; v++)d(h, c[v], p);
                        p.start ? h.then(o) : o()
                    }
                }
            }

            function d(t, e, n) {
                var r = "add", o = "start";
                n.start && (r = o = "then");
                var a = e.transition;
                if (a) {
                    a = a.split(",");
                    for (var s = 0; s < a.length; s++) {
                        var u = a[s], c = M.test(u) ? {fallback: !0} : null;
                        t[r](u, c)
                    }
                }
                var l = v(e) || {};
                if (null != l.width && (n.width = l.width), null != l.height && (n.height = l.height), null == a) {
                    n.start ? t.then(function () {
                        var e = this.queue;
                        this.set(l), l.display && (t.redraw(), i.redraw.up()), this.queue = e, this.next()
                    }) : (t.set(l), l.display && (t.redraw(), i.redraw.up()));
                    var f = l.wait;
                    null != f && (t.wait(f), n.start = !0)
                } else {
                    if (l.display) {
                        var d = l.display;
                        delete l.display, n.start ? t.then(function () {
                            var t = this.queue;
                            this.set({display: d}).redraw(), i.redraw.up(), this.queue = t, this.next()
                        }) : (t.set({display: d}).redraw(), i.redraw.up())
                    }
                    t[o](l), n.start = !0
                }
            }

            function h(t, e) {
                var n = _(t);
                t.css("transition", "");
                var i = t.css("transition");
                i === L && (i = n.upstream = null), n.upstream = L, n.set(v(e)), n.upstream = i
            }

            function p(t, e) {
                _(t).set(v(e))
            }

            function v(t) {
                var e = {}, n = !1;
                for (var i in t)"transition" !== i && (e[i] = t[i], n = !0);
                return n ? e : null
            }

            function m() {
                for (var e = O.length, n = 0; e > n; n++) {
                    var i = O[n];
                    i[0](0, i[1])
                }
                O = [], t.extend(y.events, B)
            }

            function w() {
                e.each(B, function (t, e) {
                    y.events[e] = function (e, n) {
                        O.push([t, n])
                    }
                })
            }

            var g, b, y = {}, x = t(window), k = ".w-ix", _ = t.tram, T = i.env, z = T(), E = T.chrome && T.chrome < 35, L = "none 0s ease 0s", A = "w-ix-intro" + k, C = "w-ix-outro" + k, M = /width|height/, O = [], j = t(), q = {}, I = [], D = [], $ = [], S = {
                tabs: ".w-tab-link, .w-tab-pane",
                dropdown: ".w-dropdown",
                slider: ".w-slide",
                navbar: ".w-nav"
            };
            y.init = function (t) {
                setTimeout(function () {
                    n(t)
                }, 1)
            }, y.preview = function () {
                g = !1, setTimeout(function () {
                    n(window.__wf_ix)
                }, 1)
            }, y.design = function () {
                g = !0, y.destroy()
            }, y.destroy = function () {
                b = !0, j.each(s), i.scroll.off(u), w(), I = [], D = [], $ = []
            }, y.ready = function () {
                q && b && (b = !1, r())
            }, y.run = f, y.events = {}, y.style = z ? h : p;
            var B = {
                reset: function (t, e) {
                    e.__wf_intro = null
                }, intro: function (e, n) {
                    n.__wf_intro || (n.__wf_intro = !0, t(n).triggerHandler(A))
                }, outro: function (e, n) {
                    n.__wf_intro && (n.__wf_intro = null, t(n).triggerHandler(C))
                }
            };
            return w(), y
        }
    }, {"./framework-lib": 7}], 7: [function (t, e, n) {
        "use strict";
        function i(t) {
            u.env() && (v(t.design) && h.on("__wf_design", t.design), v(t.preview) && h.on("__wf_preview", t.preview)), v(t.destroy) && h.on("__wf_destroy", t.destroy), t.ready && v(t.ready) && (g ? t.ready() : l.push(t.ready))
        }

        function r(t) {
            v(t.design) && h.off("__wf_design", t.design), v(t.preview) && h.off("__wf_preview", t.preview), v(t.destroy) && h.off("__wf_destroy", t.destroy), g || (l = m.filter(l, function (e) {
                return e !== t.ready
            }))
        }

        function o(t, e) {
            var n = [], i = {};
            return i.up = m.throttle(function (t) {
                m.each(n, function (e) {
                    e(t)
                })
            }), t && e && t.on(e, i.up), i.on = function (t) {
                "function" == typeof t && (m.contains(n, t) || n.push(t))
            }, i.off = function (t) {
                return arguments.length ? void(n = m.filter(n, function (e) {
                    return e !== t
                })) : void(n = [])
            }, i
        }

        function a(t) {
            v(t) && t()
        }

        function s() {
            M && (M.reject(), h.off("load", M.resolve)), M = new d.Deferred, h.on("load", M.resolve)
        }

        var u = {}, c = {}, l = [], f = window.Framework || [], d = window.jQuery, h = d(window), p = d(document), v = d.isFunction, m = u._ = t("../plugins/underscore-custom"), w = t("../plugins/tram-min") && d.tram, g = !1, b = window.Modernizr, y = function () {
        };
        w.config.hideBackface = !1, w.config.keepInherited = !0, u.define = function (t, e) {
            c[t] && r(c[t]);
            var n = c[t] = e(d, m) || {};
            return i(n), n
        }, u.require = function (t) {
            return c[t]
        }, u.push = function (t) {
            return g ? void(v(t) && t()) : void f.push(t)
        }, u.env = function (t) {
            var e = window.__wf_design, n = "undefined" != typeof e;
            return t ? "design" == t ? n && e : "preview" == t ? n && !e : "slug" == t ? n && window.__wf_slug : "editor" == t ? window.FrameworkEditor : "test" == t ? window.__wf_test : void 0 : n
        };
        var x = navigator.userAgent.toLowerCase(), k = navigator.appVersion.toLowerCase(), _ = u.env.touch = "ontouchstart"in window || window.DocumentTouch && document instanceof window.DocumentTouch, T = u.env.chrome = /chrome/.test(x) && /Google/.test(navigator.vendor) && parseInt(k.match(/chrome\/(\d+)\./)[1], 10), z = u.env.ios = b && b.ios;
        u.env.safari = /safari/.test(x) && !T && !z;
        var E;
        _ && p.on("touchstart mousedown", function (t) {
            E = t.target
        }), u.validClick = _ ? function (t) {
            return t === E || d.contains(t, E)
        } : function () {
            return !0
        };
        var L = "resize.framework orientationchange.framework load.framework", A = "scroll.framework " + L;
        if (u.resize = o(h, L), u.scroll = o(h, A), u.redraw = o(), u.ixEvents = function () {
                var t = u.require("ix");
                return t && t.events || {reset: y, intro: y, outro: y}
            }, u.location = function (t) {
                window.location = t
            }, u.app = u.env() ? {} : null, u.app) {
            var C = new Event("__wf_redraw");
            u.app.redrawElement = function (t, e) {
                e.dispatchEvent(C)
            }, u.location = function (t) {
                window.dispatchEvent(new CustomEvent("__wf_location", {detail: t}))
            }
        }
        u.ready = function () {
            g = !0, m.each(l.concat(f), a), u.resize.up()
        };
        var M;
        u.load = function (t) {
            M.then(t)
        }, u.destroy = function () {
            h.triggerHandler("__wf_destroy"), m.each(c, r), c = {}, u.resize.off(), u.scroll.off(), u.redraw.off(), "pending" == M.state() && s()
        }, d(u.ready), s(), e.exports = u
    }, {"../plugins/tram-min": 16, "../plugins/underscore-custom": 17}], 8: [function (t, e, n) {
        "use strict";
        function i(t, e, n, i) {
            function r(t, e) {
                return L = _(t) ? t : [t], y || r.build(), L.length > 1 && (y.items = y.empty, L.forEach(function (t) {
                    var e = w("thumbnail"), n = w("item").append(e);
                    y.items = y.items.add(n), c(t.thumbnailUrl || t.url, function (t) {
                        t.prop("width") > t.prop("height") ? p(t, "wide") : p(t, "tall"), e.append(p(t, "thumbnail-image"))
                    })
                }), y.strip.empty().append(y.items), p(y.content, "group")), k(v(y.lightbox, "hide").focus()).add("opacity .3s").start({opacity: 1}), p(y.html, "noscroll"), r.show(e || 0)
            }

            function o(t) {
                return function (e) {
                    this == e.target && (e.stopPropagation(), e.preventDefault(), t())
                }
            }

            function a(t) {
                t.preventDefault()
            }

            function s(t) {
                var e = t.keyCode;
                27 == e ? r.hide() : 37 == e ? r.prev() : 39 == e && r.next()
            }

            function u() {
                v(y.html, "noscroll"), p(y.lightbox, "hide"), y.strip.empty(), y.view && y.view.remove(), v(y.content, "group"), p(y.arrowLeft, "inactive"), p(y.arrowRight, "inactive"), b = y.view = i
            }

            function c(t, e) {
                var n = w("img", "img");
                return n.one("load", function () {
                    e(n)
                }), n.attr("src", t), n
            }

            function l(t) {
                return function () {
                    t.remove()
                }
            }

            function f(t, e, n) {
                this.$element = t, this.className = e, this.delay = n || 200, this.hide()
            }

            function d(t, e) {
                return t.replace(E, (e ? " ." : " ") + z)
            }

            function h(t) {
                return d(t, !0)
            }

            function p(t, e) {
                return t.addClass(d(e))
            }

            function v(t, e) {
                return t.removeClass(d(e))
            }

            function m(t, e, n) {
                return t.toggleClass(d(e), n)
            }

            function w(t, i) {
                return p(n(e.createElement(i || "div")), t)
            }

            function g(t, e) {
                var n = '<svg xmlns="http://www.w3.org/2000/svg" width="' + t + '" height="' + e + '"/>';
                return "data:image/svg+xml;charset=utf-8," + encodeURI(n)
            }

            var b, y, x, k = n.tram, _ = Array.isArray, T = "w-lightbox", z = T + "-", E = /(^|\s+)/g, L = [];
            r.build = function () {
                return r.destroy(), y = {
                    html: n(e.documentElement),
                    empty: n()
                }, y.arrowLeft = w("control left inactive"), y.arrowRight = w("control right inactive"), y.close = w("control close"), y.spinner = w("spinner"), y.strip = w("strip"), x = new f(y.spinner, d("hide")), y.content = w("content").append(y.spinner, y.arrowLeft, y.arrowRight, y.close), y.container = w("container").append(y.content, y.strip), y.lightbox = w("backdrop hide").append(y.container), y.strip.on("tap", h("item"), O), y.content.on("swipe", j).on("tap", h("left"), A).on("tap", h("right"), C).on("tap", h("close"), M).on("tap", h("image, caption"), C), y.container.on("tap", h("view, strip"), M).on("dragstart", h("img"), a), y.lightbox.on("keydown", s).on("focusin", q), n("body").append(y.lightbox.prop("tabIndex", 0)), r
            }, r.destroy = function () {
                y && (y.lightbox.remove(), y = i)
            }, r.show = function (t) {
                if (t !== b) {
                    var e = L[t];
                    if (!e)return r.hide();
                    var i = b;
                    b = t, x.show();
                    var o = e.html && g(e.width, e.height) || e.url;
                    return c(o, function (r) {
                        function o() {
                            return x.hide(), t != b ? void f.remove() : (m(y.arrowLeft, "inactive", 0 >= t), m(y.arrowRight, "inactive", t >= L.length - 1), y.view ? (k(y.view).add("opacity .3s").start({opacity: 0}).then(l(y.view)), k(f).add("opacity .3s").add("transform .3s").set({x: t > i ? "80px" : "-80px"}).start({
                                opacity: 1,
                                x: 0
                            })) : f.css("opacity", 1), y.view = f, void(y.items && p(v(y.items, "active").eq(t), "active")))
                        }

                        if (t == b) {
                            var a, s, u = w("figure", "figure").append(p(r, "image")), c = w("frame").append(u), f = w("view").append(c);
                            e.html && (a = n(e.html), s = a.is("iframe"), s && a.on("load", o), u.append(p(a, "embed"))), e.caption && u.append(w("caption", "figcaption").text(e.caption)), y.spinner.before(f), s || o()
                        }
                    }), r
                }
            }, r.hide = function () {
                return k(y.lightbox).add("opacity .3s").start({opacity: 0}).then(u), r
            }, r.prev = function () {
                b > 0 && r.show(b - 1)
            }, r.next = function () {
                b < L.length - 1 && r.show(b + 1)
            };
            var A = o(r.prev), C = o(r.next), M = o(r.hide), O = function (t) {
                var e = n(this).index();
                t.preventDefault(), r.show(e)
            }, j = function (t, e) {
                t.preventDefault(), "left" == e.direction ? r.next() : "right" == e.direction && r.prev()
            }, q = function () {
                this.focus()
            };
            return f.prototype.show = function () {
                var t = this;
                t.timeoutId || (t.timeoutId = setTimeout(function () {
                    t.$element.removeClass(t.className), delete t.timeoutId
                }, t.delay))
            }, f.prototype.hide = function () {
                var t = this;
                return t.timeoutId ? (clearTimeout(t.timeoutId), void delete t.timeoutId) : void t.$element.addClass(t.className)
            }, function () {
                function n() {
                    var e = t.innerHeight, n = t.innerWidth, i = ".w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" + e + "px}.w-lightbox-view {width:" + n + "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" + .86 * e + "px}.w-lightbox-image {max-width:" + n + "px;max-height:" + e + "px}.w-lightbox-group .w-lightbox-image {max-height:" + .86 * e + "px}.w-lightbox-strip {padding: 0 " + .01 * e + "px}.w-lightbox-item {width:" + .1 * e + "px;padding:" + .02 * e + "px " + .01 * e + "px}.w-lightbox-thumbnail {height:" + .1 * e + "px}@media (min-width: 768px) {.w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" + .96 * e + "px}.w-lightbox-content {margin-top:" + .02 * e + "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" + .84 * e + "px}.w-lightbox-image {max-width:" + .96 * n + "px;max-height:" + .96 * e + "px}.w-lightbox-group .w-lightbox-image {max-width:" + .823 * n + "px;max-height:" + .84 * e + "px}}";
                    a.textContent = i
                }

                var i = t.navigator.userAgent, r = /(iPhone|iPod|iPad).+AppleWebKit/i.test(i), o = i.indexOf("Android ") > -1 && -1 == i.indexOf("Chrome");
                if (r || o) {
                    var a = e.createElement("style");
                    e.head.appendChild(a), t.addEventListener("orientationchange", n, !0), n()
                }
            }(), r
        }

        var r = t("./framework-lib");
        e.exports = function (t, e) {
            function n() {
                l = v && r.env("design"), u = t(document.body), h.destroy(), f = {}, c = p.find(m), c.frameworkLightBox()
            }

            function o(t) {
                var e, n, i = t.el.children(".w-json").html();
                if (!i)return void(t.items = []);
                try {
                    i = JSON.parse(i), s(i), e = i.group, e ? (n = f[e], n || (n = f[e] = []), t.items = n, i.items.length && (t.index = n.length, n.push.apply(n, i.items))) : t.items = i.items
                } catch (r) {
                    console.error("Malformed lightbox JSON configuration.", r.message)
                }
            }

            function a(t) {
                return function () {
                    t.items.length && h(t.items, t.index || 0)
                }
            }

            function s(t) {
                t.images && (t.images.forEach(function (t) {
                    t.type = "image"
                }), t.items = t.images), t.embed && (t.embed.type = "video", t.items = [t.embed]), t.groupId && (t.group = t.groupId)
            }

            var u, c, l, f, d = {}, h = i(window, document, t), p = t(document), v = r.env(), m = ".w-lightbox";
            return d.ready = d.design = d.preview = n, jQuery.fn.extend({
                frameworkLightBox: function () {
                    var e = this;
                    t.each(e, function (e, n) {
                        var i = t.data(n, m);
                        i || (i = t.data(n, m, {
                            el: t(n),
                            mode: "images",
                            images: [],
                            embed: ""
                        })), i.el.off(m), o(i), l ? i.el.on("setting" + m, o.bind(null, i)) : i.el.on("tap" + m, a(i)).on("click" + m, function (t) {
                            t.preventDefault()
                        })
                    })
                }
            }), d
        }
    }, {"./framework-lib": 7}], 9: [function (t, e, n) {
        "use strict";
        var i = t("./framework-lib");
        e.exports = function (t, e) {
            function n() {
                s = d && i.env("design"), c = i.env("slug") || h.pathname || "", i.scroll.off(o), u = [];
                for (var t = document.links, e = 0; e < t.length; ++e)r(t[e]);
                u.length && (i.scroll.on(o), o())
            }

            function r(e) {
                var n = s && e.getAttribute("href-disabled") || e.getAttribute("href");
                if (p.href = n, !(n.indexOf(":") >= 0)) {
                    var i = t(e);
                    if (0 === n.indexOf("#") && m.test(n)) {
                        var r = t(n);
                        return void(r.length && u.push({link: i, sec: r, active: !1}))
                    }
                    if ("#" !== n) {
                        var o = p.href === h.href || n === c || w.test(n) && g.test(c);
                        a(i, v, o)
                    }
                }
            }

            function o() {
                var t = f.scrollTop(), n = f.height();
                e.each(u, function (e) {
                    var i = e.link, r = e.sec, o = r.offset().top, u = r.outerHeight(), c = .5 * n, l = r.is(":visible") && o + u - c >= t && t + n >= o + c;
                    e.active !== l && (e.active = l, a(i, v, l), s && (i[0].__wf_current = l))
                })
            }

            function a(t, e, n) {
                var i = t.hasClass(e);
                n && i || (n || i) && (n ? t.addClass(e) : t.removeClass(e))
            }

            var s, u, c, l = {}, f = t(window), d = i.env(), h = window.location, p = document.createElement("a"), v = "w--current", m = /^#[a-zA-Z][\w:.-]*$/, w = /index\.(html|php)$/, g = /\/$/;
            return l.ready = l.design = l.preview = n, l
        }
    }, {"./framework-lib": 7}], 10: [function (t, e, n) {
        "use strict";
        var i = t("./framework-lib");
        e.exports = function (t, e) {
            function n() {
                f.length && i.app && f.each(i.app.redrawElement)
            }

            function r() {
                function e() {
                    window._wf_maps_loaded = function () {
                    }, p = window.google, f.each(s), o(), a()
                }

                f = h.find(v), f.length && (null === p ? (t.getScript("https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&callback=_wf_maps_loaded"), window._wf_maps_loaded = e) : e())
            }

            function o() {
                i.resize.off(u), i.redraw.off(u)
            }

            function a() {
                i.resize.on(u), i.redraw.on(u)
            }

            function s(e, n) {
                var i = t(n).data();
                l(n, i)
            }

            function u() {
                f.each(c)
            }

            function c(t, e) {
                var n = l(e);
                p.maps.event.trigger(n.map, "resize"), n.setMapPosition()
            }

            function l(e, n) {
                var r = t.data(e, m);
                if (r)return r;
                var o = t(e);
                r = t.data(e, m, {
                    latLng: "51.511214,-0.119824",
                    tooltip: "",
                    style: "roadmap",
                    zoom: 12,
                    marker: new p.maps.Marker({draggable: !1}),
                    infowindow: new p.maps.InfoWindow({disableAutoPan: !0})
                });
                var a = n.widgetLatlng || r.latLng;
                r.latLng = a;
                var s = a.split(","), u = new p.maps.LatLng(s[0], s[1]);
                r.latLngObj = u;
                var c = i.env.touch && n.disableTouch ? !1 : !0;
                r.map = new p.maps.Map(e, {
                    center: r.latLngObj,
                    zoom: r.zoom,
                    maxZoom: 18,
                    mapTypeControl: !1,
                    panControl: !1,
                    streetViewControl: !1,
                    scrollwheel: !n.disableScroll,
                    draggable: c,
                    zoomControl: !0,
                    zoomControlOptions: {style: p.maps.ZoomControlStyle.SMALL},
                    mapTypeId: r.style
                }), r.marker.setMap(r.map), r.setMapPosition = function () {
                    r.map.setCenter(r.latLngObj);
                    var t = 0, e = 0, n = o.css(["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"]);
                    t -= parseInt(n.paddingLeft, 10), t += parseInt(n.paddingRight, 10), e -= parseInt(n.paddingTop, 10), e += parseInt(n.paddingBottom, 10), (t || e) && r.map.panBy(t, e), o.css("position", "")
                }, p.maps.event.addListener(r.map, "tilesloaded", function () {
                    p.maps.event.clearListeners(r.map, "tilesloaded"), r.setMapPosition()
                }), r.setMapPosition(), r.marker.setPosition(r.latLngObj), r.infowindow.setPosition(r.latLngObj);
                var l = n.widgetTooltip;
                l && (r.tooltip = l, r.infowindow.setContent(l), r.infowindowOpen || (r.infowindow.open(r.map, r.marker), r.infowindowOpen = !0));
                var f = n.widgetStyle;
                f && r.map.setMapTypeId(f);
                var d = n.widgetZoom;
                return null != d && (r.zoom = d, r.map.setZoom(+d)), p.maps.event.addListener(r.marker, "click", function () {
                    window.open("https://maps.google.com/?z=" + r.zoom + "&daddr=" + r.latLng)
                }), r
            }

            var f, d = {}, h = t(document), p = null, v = ".w-widget-map";
            d.ready = function () {
                i.env() || r()
            }, d.preview = function () {
                f = h.find(v), i.resize.off(n), f.length && (i.resize.on(n), n())
            }, d.design = function (t) {
                f = h.find(v), i.resize.off(n), f.length && e.defer(n)
            }, d.destroy = o;
            var m = "w-widget-map";
            return d
        }
    }, {"./framework-lib": 7}], 11: [function (t, e, n) {
        "use strict";
        var i = t("./framework-lib");
        e.exports = function (t, e) {
            function n() {
                _ = A && i.env("design"), x = t(document.body), k = L.find(M), k.length && (k.each(s), r(), o())
            }

            function r() {
                i.resize.off(a)
            }

            function o() {
                i.resize.on(a)
            }

            function a() {
                k.each(m)
            }

            function s(e, n) {
                var i = t(n), r = t.data(n, M);
                r || (r = t.data(n, M, {
                    open: !1,
                    el: i,
                    config: {}
                })), r.menu = i.find(".w-nav-menu"), r.links = r.menu.find(".w-nav-link"), r.dropdowns = r.menu.find(".w-dropdown"), r.button = i.find(".w-nav-button"), r.container = i.find(".w-container"), r.outside = v(r), r.el.off(M), r.button.off(M), r.menu.off(M), l(r), _ ? (u(r), r.el.on("setting" + M, f(r))) : (c(r), r.button.on("tap" + M, h(r)), r.menu.on("click" + M, "a", p(r))), m(e, n)
            }

            function u(t) {
                t.overlay && (y(t, !0), t.overlay.remove(), t.overlay = null)
            }

            function c(e) {
                e.overlay || (e.overlay = t(C).appendTo(e.el), e.parent = e.menu.parent(), y(e, !0))
            }

            function l(t) {
                var n = {}, i = t.config || {}, r = n.animation = t.el.attr("data-animation") || "default";
                n.animOver = /^over/.test(r), n.animDirect = /left$/.test(r) ? -1 : 1, i.animation != r && t.open && e.defer(d, t), n.easing = t.el.attr("data-easing") || "ease", n.easing2 = t.el.attr("data-easing2") || "ease";
                var o = t.el.attr("data-duration");
                n.duration = null != o ? +o : 400, n.docHeight = t.el.attr("data-doc-height"), t.config = n
            }

            function f(t) {
                return function (n, i) {
                    i = i || {};
                    var r = E.width();
                    l(t), i.open === !0 && g(t, !0), i.open === !1 && y(t, !0), t.open && e.defer(function () {
                        r != E.width() && d(t)
                    })
                }
            }

            function d(t) {
                t.open && (y(t, !0), g(t, !0))
            }

            function h(t) {
                return e.debounce(function (e) {
                    t.open ? y(t) : g(t)
                })
            }

            function p(e) {
                return function (n) {
                    var r = t(this), o = r.attr("href");
                    return i.validClick(n.currentTarget) ? void(o && 0 === o.indexOf("#") && e.open && y(e)) : void n.preventDefault()
                }
            }

            function v(n) {
                return n.outside && L.off("tap" + M, n.outside), e.debounce(function (e) {
                    if (n.open) {
                        var i = t(e.target).closest(".w-nav-menu");
                        n.menu.is(i) || y(n)
                    }
                })
            }

            function m(e, n) {
                var i = t.data(n, M), r = i.collapsed = "none" != i.button.css("display");
                if (!i.open || r || _ || y(i, !0), i.container.length) {
                    var o = w(i);
                    i.links.each(o), i.dropdowns.each(o)
                }
                i.open && b(i)
            }

            function w(e) {
                var n = e.container.css(D);
                return "none" == n && (n = ""), function (e, i) {
                    i = t(i), i.css(D, ""), "none" == i.css(D) && i.css(D, n)
                }
            }

            function g(t, e) {
                if (!t.open) {
                    t.open = !0, t.menu.addClass(j), t.links.addClass(q), t.button.addClass(O);
                    var n = t.config, r = n.animation;
                    "none" != r && z.support.transform || (e = !0);
                    var o = b(t), a = t.menu.outerHeight(!0), s = t.menu.outerWidth(!0), u = t.el.height(), c = t.el[0];
                    if (m(0, c), I.intro(0, c), i.redraw.up(), _ || L.on("tap" + M, t.outside), !e) {
                        var l = "transform " + n.duration + "ms " + n.easing;
                        if (t.overlay && t.overlay.show().append(t.menu), n.animOver)return z(t.menu).add(l).set({
                            x: n.animDirect * s,
                            height: o
                        }).start({x: 0}), void(t.overlay && t.overlay.width(s));
                        var f = u + a;
                        z(t.menu).add(l).set({y: -f}).start({y: 0})
                    }
                }
            }

            function b(t) {
                var e = t.config, n = e.docHeight ? L.height() : x.height();
                return e.animOver ? t.menu.height(n) : "fixed" != t.el.css("position") && (n -= t.el.height()), t.overlay && t.overlay.height(n), n
            }

            function y(t, e) {
                function n() {
                    t.menu.height(""), z(t.menu).set({
                        x: 0,
                        y: 0
                    }), t.menu.removeClass(j), t.links.removeClass(q), t.overlay && t.overlay.children().length && (t.menu.appendTo(t.parent), t.overlay.attr("style", "").hide()), t.el.triggerHandler("w-close")
                }

                if (t.open) {
                    t.open = !1, t.button.removeClass(O);
                    var i = t.config;
                    "none" != i.animation && z.support.transform || (e = !0);
                    {
                        i.animation
                    }
                    if (I.outro(0, t.el[0]), L.off("tap" + M, t.outside), e)return z(t.menu).stop(), void n();
                    var r = "transform " + i.duration + "ms " + i.easing2, o = t.menu.outerHeight(!0), a = t.menu.outerWidth(!0), s = t.el.height();
                    if (i.animOver)return void z(t.menu).add(r).start({x: a * i.animDirect}).then(n);
                    var u = s + o;
                    z(t.menu).add(r).start({y: -u}).then(n)
                }
            }

            var x, k, _, T = {}, z = t.tram, E = t(window), L = t(document), A = i.env(), C = '<div class="w-nav-overlay" data-wf-ignore />', M = ".w-nav", O = "w--open", j = "w--nav-menu-open", q = "w--nav-link-open", I = i.ixEvents();
            T.ready = T.design = T.preview = n, T.destroy = r;
            var D = "max-width";
            return T
        }
    }, {"./framework-lib": 7}], 12: [function (t, e, n) {
        "use strict";
        var i = t("./framework-lib");
        e.exports = function (t, e) {
            function n() {
                try {
                    return !!l.frameElement
                } catch (t) {
                    return !0
                }
            }

            function r() {
                f.hash && o(f.hash.substring(1)), c.on("click", "a", function (e) {
                    if (!(i.env("design") || window.$.mobile && t(e.currentTarget).hasClass("ui-link"))) {
                        if ("#" === this.getAttribute("href"))return void e.preventDefault();
                        var n = this.hash ? this.hash.substring(1) : null;
                        n && o(n, e)
                    }
                })
            }

            function o(e, n) {
                if (h.test(e)) {
                    var i = t("#" + e);
                    if (i.length) {
                        if (n && (n.preventDefault(), n.stopPropagation()), f.hash !== e && d && d.pushState) {
                            var r = d.state && d.state.hash;
                            r !== e && d.pushState({hash: e}, "", "#" + e)
                        }
                        var o = t("header, body > .header, body > .w-nav:not([data-no-scroll])"), s = "fixed" === o.css("position") ? o.outerHeight() : 0;
                        l.setTimeout(function () {
                            a(i, s)
                        }, n ? 0 : 300)
                    }
                }
            }

            function a(e, n) {
                var i = t(l).scrollTop(), r = e.offset().top - n;
                if ("mid" == e.data("scroll")) {
                    var o = t(l).height() - n, a = e.outerHeight();
                    o > a && (r -= Math.round((o - a) / 2))
                }
                var u = 1;
                t("body").add(e).each(function (e) {
                    var n = parseFloat(t(this).attr("data-scroll-time"), 10);
                    !isNaN(n) && (0 === n || n > 0) && (u = n)
                }), Date.now || (Date.now = function () {
                    return (new Date).getTime()
                });
                var c = Date.now(), f = l.requestAnimationFrame || l.mozRequestAnimationFrame || l.webkitRequestAnimationFrame || function (t) {
                        l.setTimeout(t, 15)
                    }, d = (472.143 * Math.log(Math.abs(i - r) + 125) - 2e3) * u, h = function () {
                    var t = Date.now() - c;
                    l.scroll(0, s(i, r, t, d)), d >= t && f(h)
                };
                h()
            }

            function s(t, e, n, i) {
                return n > i ? e : t + (e - t) * u(n / i)
            }

            function u(t) {
                return .5 > t ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
            }

            var c = t(document), l = window, f = l.location, d = n() ? null : l.history, h = /^[a-zA-Z][\w:.-]*$/;
            return {ready: r}
        }
    }, {"./framework-lib": 7}], 13: [function (t, e, n) {
        "use strict";
        var i = t("./framework-lib");
        e.exports = function (t, e) {
            function n() {
                x = L.find(C), x.length && (x.filter(":visible").each(s), T = null, _ || (r(), o()))
            }

            function r() {
                i.resize.off(a), i.redraw.off(z.redraw)
            }

            function o() {
                i.resize.on(a), i.redraw.on(z.redraw)
            }

            function a() {
                x.filter(":visible").each(m)
            }

            function s(e, n) {
                var i = t(n), r = t.data(n, C);
                return r || (r = t.data(n, C, {
                    index: 0,
                    depth: 1,
                    el: i,
                    config: {}
                })), r.mask = i.children(".w-slider-mask"), r.left = i.children(".w-slider-arrow-left"), r.right = i.children(".w-slider-arrow-right"), r.nav = i.children(".w-slider-nav"), r.slides = r.mask.children(".w-slide"), r.slides.each(O.reset), T && (r.maskWidth = 0), E.support.transform ? (r.el.off(C), r.left.off(C), r.right.off(C), r.nav.off(C), u(r), k ? (r.el.on("setting" + C, p(r)), h(r), r.hasTimer = !1) : (r.el.on("swipe" + C, p(r)), r.left.on("tap" + C, c(r)), r.right.on("tap" + C, l(r)), r.config.autoplay && !r.hasTimer && (r.hasTimer = !0, r.timerCount = 1, d(r))), r.nav.on("tap" + C, "> div", p(r)), A || r.mask.contents().filter(function () {
                    return 3 === this.nodeType
                }).remove(), void m(e, n)) : (r.left.hide(), r.right.hide(), r.nav.hide(), void(_ = !0))
            }

            function u(t) {
                var e = {};
                e.crossOver = 0, e.animation = t.el.attr("data-animation") || "slide", "outin" == e.animation && (e.animation = "cross", e.crossOver = .5), e.easing = t.el.attr("data-easing") || "ease";
                var n = t.el.attr("data-duration");
                if (e.duration = null != n ? +n : 500, +t.el.attr("data-infinite") && (e.infinite = !0), +t.el.attr("data-hide-arrows") ? e.hideArrows = !0 : t.config.hideArrows && (t.left.show(), t.right.show()), +t.el.attr("data-autoplay")) {
                    e.autoplay = !0, e.delay = +t.el.attr("data-delay") || 2e3, e.timerMax = +t.el.attr("data-autoplay-limit");
                    var i = "mousedown" + C + " touchstart" + C;
                    k || t.el.off(i).one(i, function () {
                        h(t)
                    })
                }
                var r = t.right.width();
                e.edge = r ? r + 40 : 100, t.config = e
            }

            function c(t) {
                return function (e) {
                    v(t, {index: t.index - 1, vector: -1})
                }
            }

            function l(t) {
                return function (e) {
                    v(t, {index: t.index + 1, vector: 1})
                }
            }

            function f(i, r) {
                var o = null;
                r === i.slides.length && (n(), w(i)), e.each(i.anchors, function (e, n) {
                    t(e.els).each(function (e, i) {
                        t(i).index() === r && (o = n)
                    })
                }), null != o && v(i, {
                    index: o, immediate: !0
                })
            }

            function d(t) {
                h(t);
                var e = t.config, n = e.timerMax;
                n && t.timerCount++ > n || (t.timerId = window.setTimeout(function () {
                    null == t.timerId || k || (l(t)(), d(t))
                }, e.delay))
            }

            function h(t) {
                window.clearTimeout(t.timerId), t.timerId = null
            }

            function p(e) {
                return function (n, r) {
                    if (r = r || {}, k && "setting" == n.type) {
                        if ("prev" == r.select)return c(e)();
                        if ("next" == r.select)return l(e)();
                        if (u(e), w(e), null == r.select)return;
                        return void f(e, r.select)
                    }
                    if ("swipe" != n.type)e.nav.has(n.target).length && v(e, {index: t(n.target).index()}); else {
                        if (i.env("editor"))return;
                        if ("left" == r.direction)return l(e)();
                        if ("right" == r.direction)return c(e)()
                    }
                }
            }

            function v(e, n) {
                function i() {
                    var n = t(o[e.index].els), i = e.slides.not(n);
                    "slide" != v && (f.visibility = "hidden"), E(i).set(f)
                }

                n = n || {};
                var r = e.config, o = e.anchors;
                e.previous = e.index;
                var a = n.index, s = {};
                0 > a ? (a = o.length - 1, r.infinite && (s.x = -e.endX, s.from = 0, s.to = o[0].width)) : a >= o.length && (a = 0, r.infinite && (s.x = o[o.length - 1].width, s.from = -o[o.length - 1].x, s.to = s.from - s.x)), e.index = a;
                var u = e.nav.children().eq(e.index).addClass("w-active");
                e.nav.children().not(u).removeClass("w-active"), r.hideArrows && (e.index === o.length - 1 ? e.right.hide() : e.right.show(), 0 === e.index ? e.left.hide() : e.left.show());
                var c = e.offsetX || 0, l = e.offsetX = -o[e.index].x, f = {
                    x: l,
                    opacity: 1,
                    visibility: ""
                }, d = t(o[e.index].els), h = t(o[e.previous] && o[e.previous].els), p = e.slides.not(d), v = r.animation, m = r.easing, w = Math.round(r.duration), g = n.vector || (e.index > e.previous ? 1 : -1), b = "opacity " + w + "ms " + m, y = "transform " + w + "ms " + m;
                if (k || (d.each(O.intro), p.each(O.outro)), n.immediate && !T)return E(d).set(f), void i();
                if (e.index != e.previous) {
                    if ("cross" == v) {
                        var x = Math.round(w - w * r.crossOver), _ = Math.round(w - x);
                        return b = "opacity " + x + "ms " + m, E(h).set({visibility: ""}).add(b).start({opacity: 0}), void E(d).set({
                            visibility: "",
                            x: l,
                            opacity: 0,
                            zIndex: e.depth++
                        }).add(b).wait(_).then({opacity: 1}).then(i)
                    }
                    return "fade" == v ? (E(h).set({visibility: ""}).stop(), void E(d).set({
                        visibility: "",
                        x: l,
                        opacity: 0,
                        zIndex: e.depth++
                    }).add(b).start({opacity: 1}).then(i)) : "over" == v ? (f = {x: e.endX}, E(h).set({visibility: ""}).stop(), void E(d).set({
                        visibility: "",
                        zIndex: e.depth++,
                        x: l + o[e.index].width * g
                    }).add(y).start({x: l}).then(i)) : void(r.infinite && s.x ? (E(e.slides.not(h)).set({
                        visibility: "",
                        x: s.x
                    }).add(y).start({x: l}), E(h).set({
                        visibility: "",
                        x: s.from
                    }).add(y).start({x: s.to}), e.shifted = h) : (r.infinite && e.shifted && (E(e.shifted).set({
                        visibility: "",
                        x: c
                    }), e.shifted = null), E(e.slides).set({visibility: ""}).add(y).start({x: l})))
                }
            }

            function m(e, n) {
                var i = t.data(n, C);
                return b(i) ? w(i) : void(k && y(i) && w(i))
            }

            function w(e) {
                var n = 1, i = 0, r = 0, o = 0, a = e.maskWidth, s = a - e.config.edge;
                0 > s && (s = 0), e.anchors = [{els: [], x: 0, width: 0}], e.slides.each(function (u, c) {
                    r - i > s && (n++, i += a, e.anchors[n - 1] = {
                        els: [],
                        x: r,
                        width: 0
                    }), o = t(c).outerWidth(!0), r += o, e.anchors[n - 1].width += o, e.anchors[n - 1].els.push(c)
                }), e.endX = r, k && (e.pages = null), e.nav.length && e.pages !== n && (e.pages = n, g(e));
                var u = e.index;
                u >= n && (u = n - 1), v(e, {immediate: !0, index: u})
            }

            function g(e) {
                var n, i = [], r = e.el.attr("data-nav-spacing");
                r && (r = parseFloat(r) + "px");
                for (var o = 0; o < e.pages; o++)n = t(M), e.nav.hasClass("w-num") && n.text(o + 1), null != r && n.css({
                    "margin-left": r,
                    "margin-right": r
                }), i.push(n);
                e.nav.empty().append(i)
            }

            function b(t) {
                var e = t.mask.width();
                return t.maskWidth !== e ? (t.maskWidth = e, !0) : !1
            }

            function y(e) {
                var n = 0;
                return e.slides.each(function (e, i) {
                    n += t(i).outerWidth(!0)
                }), e.slidesWidth !== n ? (e.slidesWidth = n, !0) : !1
            }

            var x, k, _, T, z = {}, E = t.tram, L = t(document), A = i.env(), C = ".w-slider", M = '<div class="w-slider-dot" data-wf-ignore />', O = i.ixEvents();
            return z.ready = function () {
                n()
            }, z.design = function () {
                k = !0, n()
            }, z.preview = function () {
                k = !1, n()
            }, z.redraw = function () {
                T = !0, n()
            }, z.destroy = r, z
        }
    }, {"./framework-lib": 7}], 14: [function (t, e, n) {
        "use strict";
        var i = t("./framework-lib");
        e.exports = function (t, e) {
            function n() {
                c = v && i.env("design"), u = d.find(w), u.length && u.each(r)
            }

            function r(e, n) {
                var i = t(n), r = t.data(n, w);
                if (r || (r = t.data(n, w, {
                        el: i,
                        config: {}
                    })), r.current = null, r.menu = i.children(".w-tab-menu"), r.links = r.menu.children(".w-tab-link"), r.content = i.children(".w-tab-content"), r.panes = r.content.children(".w-tab-pane"), r.el.off(w), r.links.off(w), o(r), !c) {
                    r.links.on("click" + w, a(r));
                    var u = r.links.filter("." + g), l = u.attr(m);
                    l && s(r, {tab: l, immediate: !0})
                }
            }

            function o(t) {
                {
                    var e = {};
                    t.config || {}
                }
                e.easing = t.el.attr("data-easing") || "ease";
                var n = +t.el.attr("data-duration-in");
                n = e.intro = n === n ? n : 0;
                var i = +t.el.attr("data-duration-out");
                i = e.outro = i === i ? i : 0, e.immediate = !n && !i, t.config = e
            }

            function a(t) {
                return function (e) {
                    var n = e.currentTarget.getAttribute(m);
                    n && s(t, {tab: n})
                }
            }

            function s(e, n) {
                function r() {
                    return d.removeClass(b).removeAttr("style"), l.addClass(b).each(y.intro), i.redraw.up(), o.intro ? void f(l).set({opacity: 0}).redraw().add("opacity " + o.intro + "ms " + a, {fallback: p}).start({opacity: 1}) : f(l).set({opacity: 1})
                }

                n = n || {};
                var o = e.config, a = o.easing, s = n.tab;
                if (s !== e.current) {
                    e.current = s, e.links.each(function (e, n) {
                        var i = t(n);
                        n.getAttribute(m) === s ? i.addClass(g).each(y.intro) : i.hasClass(g) && i.removeClass(g).each(y.outro)
                    });
                    var u = [], c = [];
                    e.panes.each(function (e, n) {
                        var i = t(n);
                        n.getAttribute(m) === s ? u.push(n) : i.hasClass(b) && c.push(n)
                    });
                    var l = t(u), d = t(c);
                    return n.immediate || o.immediate ? (l.addClass(b).each(y.intro), d.removeClass(b), void i.redraw.up()) : void(d.length && o.outro ? (d.each(y.outro), f(d).add("opacity " + o.outro + "ms " + a, {fallback: p}).start({opacity: 0}).then(r)) : r())
                }
            }

            var u, c, l = {}, f = t.tram, d = (t(window), t(document)), h = i.env, p = h.safari, v = h(), m = "data-w-tab", w = ".w-tabs", g = "w--current", b = "w--tab-active", y = i.ixEvents();
            return l.ready = l.design = l.preview = n, l
        }
    }, {"./framework-lib": 7}], 15: [function (t, e, n) {
        "use strict";
        e.exports = function (t, e) {
            function n(t) {
                function e(t) {
                    var e = t.touches;
                    e && e.length > 1 || (f = !0, d = !1, e ? (h = !0, u = e[0].clientX, c = e[0].clientY) : (u = t.clientX, c = t.clientY), l = u)
                }

                function n(t) {
                    if (f) {
                        if (h && "mousemove" === t.type)return t.preventDefault(), void t.stopPropagation();
                        var e = t.touches, n = e ? e[0].clientX : t.clientX, r = e ? e[0].clientY : t.clientY, s = n - l;
                        l = n, Math.abs(s) > p && a && a() + "" == "" && (i("swipe", t, {direction: s > 0 ? "right" : "left"}), o()), (Math.abs(n - u) > 10 || Math.abs(r - c) > 10) && (d = !0)
                    }
                }

                function r(t) {
                    return f ? (f = !1, h && "mouseup" === t.type ? (t.preventDefault(), t.stopPropagation(), void(h = !1)) : void(d || i("tap", t))) : void 0
                }

                function o(t) {
                    f = !1
                }

                function s() {
                    t.removeEventListener("touchstart", e, !1), t.removeEventListener("touchmove", n, !1), t.removeEventListener("touchend", r, !1), t.removeEventListener("touchcancel", o, !1), t.removeEventListener("mousedown", e, !1), t.removeEventListener("mousemove", n, !1), t.removeEventListener("mouseup", r, !1), t.removeEventListener("mouseout", o, !1), t = null
                }

                var u, c, l, f = !1, d = !1, h = !1, p = Math.min(Math.round(.04 * window.innerWidth), 40);
                t.addEventListener("touchstart", e, !1), t.addEventListener("touchmove", n, !1), t.addEventListener("touchend", r, !1), t.addEventListener("touchcancel", o, !1), t.addEventListener("mousedown", e, !1), t.addEventListener("mousemove", n, !1), t.addEventListener("mouseup", r, !1), t.addEventListener("mouseout", o, !1), this.destroy = s
            }

            function i(e, n, i) {
                var r = t.Event(e, {originalEvent: n});
                t(n.target).trigger(r, i)
            }

            var r = {}, o = !document.addEventListener, a = window.getSelection;
            return o && (t.event.special.tap = {bindType: "click", delegateType: "click"}), r.init = function (e) {
                return o ? null : (e = "string" == typeof e ? t(e).get(0) : e, e ? new n(e) : null)
            }, r.instance = r.init(document), r
        }
    }, {}], 16: [function (t, e, n) {
        window.tram = function (t) {
            function e(t, e) {
                var n = new S.Bare;
                return n.init(t, e)
            }

            function n(t) {
                return t.replace(/[A-Z]/g, function (t) {
                    return "-" + t.toLowerCase()
                })
            }

            function i(t) {
                var e = parseInt(t.slice(1), 16), n = e >> 16 & 255, i = e >> 8 & 255, r = 255 & e;
                return [n, i, r]
            }

            function r(t, e, n) {
                return "#" + (1 << 24 | t << 16 | e << 8 | n).toString(16).slice(1)
            }

            function o() {
            }

            function a(t, e) {
                K("Type warning: Expected: [" + t + "] Got: [" + typeof e + "] " + e)
            }

            function s(t, e, n) {
                K("Units do not match [" + t + "]: " + e + ", " + n)
            }

            function u(t, e, n) {
                if (void 0 !== e && (n = e), void 0 === t)return n;
                var i = n;
                return Q.test(t) || !V.test(t) ? i = parseInt(t, 10) : V.test(t) && (i = 1e3 * parseFloat(t)), 0 > i && (i = 0), i === i ? i : n
            }

            function c(t) {
                for (var e = -1, n = t ? t.length : 0, i = []; ++e < n;) {
                    var r = t[e];
                    r && i.push(r)
                }
                return i
            }

            var l = function (t, e, n) {
                function i(t) {
                    return "object" == typeof t
                }

                function r(t) {
                    return "function" == typeof t
                }

                function o() {
                }

                function a(s, u) {
                    function c() {
                        var t = new l;
                        return r(t.init) && t.init.apply(t, arguments), t
                    }

                    function l() {
                    }

                    u === n && (u = s, s = Object), c.Bare = l;
                    var f, d = o[t] = s[t], h = l[t] = c[t] = new o;
                    return h.constructor = c, c.mixin = function (e) {
                        return l[t] = c[t] = a(c, e)[t], c
                    }, c.open = function (t) {
                        if (f = {}, r(t) ? f = t.call(c, h, d, c, s) : i(t) && (f = t), i(f))for (var n in f)e.call(f, n) && (h[n] = f[n]);
                        return r(h.init) || (h.init = s), c
                    }, c.open(u)
                }

                return a
            }("prototype", {}.hasOwnProperty), f = {
                ease: ["ease", function (t, e, n, i) {
                    var r = (t /= i) * t, o = r * t;
                    return e + n * (-2.75 * o * r + 11 * r * r + -15.5 * o + 8 * r + .25 * t)
                }], "ease-in": ["ease-in", function (t, e, n, i) {
                    var r = (t /= i) * t, o = r * t;
                    return e + n * (-1 * o * r + 3 * r * r + -3 * o + 2 * r)
                }], "ease-out": ["ease-out", function (t, e, n, i) {
                    var r = (t /= i) * t, o = r * t;
                    return e + n * (.3 * o * r + -1.6 * r * r + 2.2 * o + -1.8 * r + 1.9 * t)
                }], "ease-in-out": ["ease-in-out", function (t, e, n, i) {
                    var r = (t /= i) * t, o = r * t;
                    return e + n * (2 * o * r + -5 * r * r + 2 * o + 2 * r)
                }], linear: ["linear", function (t, e, n, i) {
                    return n * t / i + e
                }], "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function (t, e, n, i) {
                    return n * (t /= i) * t + e
                }], "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function (t, e, n, i) {
                    return -n * (t /= i) * (t - 2) + e
                }], "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function (t, e, n, i) {
                    return (t /= i / 2) < 1 ? n / 2 * t * t + e : -n / 2 * (--t * (t - 2) - 1) + e
                }], "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function (t, e, n, i) {
                    return n * (t /= i) * t * t + e
                }], "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function (t, e, n, i) {
                    return n * ((t = t / i - 1) * t * t + 1) + e
                }], "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function (t, e, n, i) {
                    return (t /= i / 2) < 1 ? n / 2 * t * t * t + e : n / 2 * ((t -= 2) * t * t + 2) + e
                }], "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function (t, e, n, i) {
                    return n * (t /= i) * t * t * t + e
                }], "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function (t, e, n, i) {
                    return -n * ((t = t / i - 1) * t * t * t - 1) + e
                }], "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function (t, e, n, i) {
                    return (t /= i / 2) < 1 ? n / 2 * t * t * t * t + e : -n / 2 * ((t -= 2) * t * t * t - 2) + e
                }], "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function (t, e, n, i) {
                    return n * (t /= i) * t * t * t * t + e
                }], "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function (t, e, n, i) {
                    return n * ((t = t / i - 1) * t * t * t * t + 1) + e
                }], "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function (t, e, n, i) {
                    return (t /= i / 2) < 1 ? n / 2 * t * t * t * t * t + e : n / 2 * ((t -= 2) * t * t * t * t + 2) + e
                }], "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function (t, e, n, i) {
                    return -n * Math.cos(t / i * (Math.PI / 2)) + n + e
                }], "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function (t, e, n, i) {
                    return n * Math.sin(t / i * (Math.PI / 2)) + e
                }], "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function (t, e, n, i) {
                    return -n / 2 * (Math.cos(Math.PI * t / i) - 1) + e
                }], "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function (t, e, n, i) {
                    return 0 === t ? e : n * Math.pow(2, 10 * (t / i - 1)) + e
                }], "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function (t, e, n, i) {
                    return t === i ? e + n : n * (-Math.pow(2, -10 * t / i) + 1) + e
                }], "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function (t, e, n, i) {
                    return 0 === t ? e : t === i ? e + n : (t /= i / 2) < 1 ? n / 2 * Math.pow(2, 10 * (t - 1)) + e : n / 2 * (-Math.pow(2, -10 * --t) + 2) + e
                }], "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function (t, e, n, i) {
                    return -n * (Math.sqrt(1 - (t /= i) * t) - 1) + e
                }], "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function (t, e, n, i) {
                    return n * Math.sqrt(1 - (t = t / i - 1) * t) + e
                }], "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function (t, e, n, i) {
                    return (t /= i / 2) < 1 ? -n / 2 * (Math.sqrt(1 - t * t) - 1) + e : n / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + e
                }], "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function (t, e, n, i, r) {
                    return void 0 === r && (r = 1.70158), n * (t /= i) * t * ((r + 1) * t - r) + e
                }], "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function (t, e, n, i, r) {
                    return void 0 === r && (r = 1.70158), n * ((t = t / i - 1) * t * ((r + 1) * t + r) + 1) + e
                }], "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function (t, e, n, i, r) {
                    return void 0 === r && (r = 1.70158), (t /= i / 2) < 1 ? n / 2 * t * t * (((r *= 1.525) + 1) * t - r) + e : n / 2 * ((t -= 2) * t * (((r *= 1.525) + 1) * t + r) + 2) + e
                }]
            }, d = {
                "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
                "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
                "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
            }, h = document, p = window, v = "bkwld-tram", m = /[\-\.0-9]/g, w = /[A-Z]/, g = "number", b = /^(rgb|#)/, y = /(em|cm|mm|in|pt|pc|px)$/, x = /(em|cm|mm|in|pt|pc|px|%)$/, k = /(deg|rad|turn)$/, _ = "unitless", T = /(all|none) 0s ease 0s/, z = /^(width|height)$/, E = " ", L = h.createElement("a"), A = ["Webkit", "Moz", "O", "ms"], C = ["-webkit-", "-moz-", "-o-", "-ms-"], M = function (t) {
                if (t in L.style)return {dom: t, css: t};
                var e, n, i = "", r = t.split("-");
                for (e = 0; e < r.length; e++)i += r[e].charAt(0).toUpperCase() + r[e].slice(1);
                for (e = 0; e < A.length; e++)if (n = A[e] + i, n in L.style)return {dom: n, css: C[e] + t}
            }, O = e.support = {
                bind: Function.prototype.bind,
                transform: M("transform"),
                transition: M("transition"),
                backface: M("backface-visibility"),
                timing: M("transition-timing-function")
            };
            if (O.transition) {
                var j = O.timing.dom;
                if (L.style[j] = f["ease-in-back"][0], !L.style[j])for (var q in d)f[q][0] = d[q]
            }
            var I = e.frame = function () {
                var t = p.requestAnimationFrame || p.webkitRequestAnimationFrame || p.mozRequestAnimationFrame || p.oRequestAnimationFrame || p.msRequestAnimationFrame;
                return t && O.bind ? t.bind(p) : function (t) {
                    p.setTimeout(t, 16)
                }
            }(), D = e.now = function () {
                var t = p.performance, e = t && (t.now || t.webkitNow || t.msNow || t.mozNow);
                return e && O.bind ? e.bind(t) : Date.now || function () {
                    return +new Date
                }
            }(), $ = l(function (e) {
                function i(t, e) {
                    var n = c(("" + t).split(E)), i = n[0];
                    e = e || {};
                    var r = G[i];
                    if (!r)return K("Unsupported property: " + i);
                    if (!e.weak || !this.props[i]) {
                        var o = r[0], a = this.props[i];
                        return a || (a = this.props[i] = new o.Bare), a.init(this.$el, n, r, e), a
                    }
                }

                function r(t, e, n) {
                    if (t) {
                        var r = typeof t;
                        if (e || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), "number" == r && e)return this.timer = new X({
                            duration: t,
                            context: this,
                            complete: s
                        }), void(this.active = !0);
                        if ("string" == r && e) {
                            switch (t) {
                                case"hide":
                                    h.call(this);
                                    break;
                                case"stop":
                                    l.call(this);
                                    break;
                                case"redraw":
                                    p.call(this);
                                    break;
                                default:
                                    i.call(this, t, n && n[1])
                            }
                            return s.call(this)
                        }
                        if ("function" == r)return void t.call(this, this);
                        if ("object" == r) {
                            var o = 0;
                            b.call(this, t, function (t, e) {
                                t.span > o && (o = t.span), t.stop(), t.animate(e)
                            }, function (t) {
                                "wait"in t && (o = u(t.wait, 0))
                            }), g.call(this), o > 0 && (this.timer = new X({
                                duration: o,
                                context: this
                            }), this.active = !0, e && (this.timer.complete = s));
                            var a = this, c = !1, f = {};
                            I(function () {
                                b.call(a, t, function (t) {
                                    t.active && (c = !0, f[t.name] = t.nextStyle)
                                }), c && a.$el.css(f)
                            })
                        }
                    }
                }

                function o(t) {
                    t = u(t, 0), this.active ? this.queue.push({options: t}) : (this.timer = new X({
                        duration: t,
                        context: this,
                        complete: s
                    }), this.active = !0)
                }

                function a(t) {
                    return this.active ? (this.queue.push({
                        options: t,
                        args: arguments
                    }), void(this.timer.complete = s)) : K("No active transition timer. Use start() or wait() before then().")
                }

                function s() {
                    if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
                        var t = this.queue.shift();
                        r.call(this, t.options, !0, t.args)
                    }
                }

                function l(t) {
                    this.timer && this.timer.destroy(), this.queue = [], this.active = !1;
                    var e;
                    "string" == typeof t ? (e = {}, e[t] = 1) : e = "object" == typeof t && null != t ? t : this.props, b.call(this, e, y), g.call(this)
                }

                function f(t) {
                    l.call(this, t), b.call(this, t, x, k)
                }

                function d(t) {
                    "string" != typeof t && (t = "block"), this.el.style.display = t
                }

                function h() {
                    l.call(this), this.el.style.display = "none"
                }

                function p() {
                    this.el.offsetHeight
                }

                function m() {
                    l.call(this), t.removeData(this.el, v), this.$el = this.el = null
                }

                function g() {
                    var t, e, n = [];
                    this.upstream && n.push(this.upstream);
                    for (t in this.props)e = this.props[t], e.active && n.push(e.string);
                    n = n.join(","), this.style !== n && (this.style = n, this.el.style[O.transition.dom] = n)
                }

                function b(t, e, r) {
                    var o, a, s, u, c = e !== y, l = {};
                    for (o in t)s = t[o], o in J ? (l.transform || (l.transform = {}), l.transform[o] = s) : (w.test(o) && (o = n(o)), o in G ? l[o] = s : (u || (u = {}), u[o] = s));
                    for (o in l) {
                        if (s = l[o], a = this.props[o], !a) {
                            if (!c)continue;
                            a = i.call(this, o)
                        }
                        e.call(this, a, s)
                    }
                    r && u && r.call(this, u)
                }

                function y(t) {
                    t.stop()
                }

                function x(t, e) {
                    t.set(e)
                }

                function k(t) {
                    this.$el.css(t)
                }

                function _(t, n) {
                    e[t] = function () {
                        return this.children ? z.call(this, n, arguments) : (this.el && n.apply(this, arguments), this)
                    }
                }

                function z(t, e) {
                    var n, i = this.children.length;
                    for (n = 0; i > n; n++)t.apply(this.children[n], e);
                    return this
                }

                e.init = function (e) {
                    if (this.$el = t(e), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, H.keepInherited && !H.fallback) {
                        var n = Z(this.el, "transition");
                        n && !T.test(n) && (this.upstream = n)
                    }
                    O.backface && H.hideBackface && U(this.el, O.backface.css, "hidden")
                }, _("add", i), _("start", r), _("wait", o), _("then", a), _("next", s), _("stop", l), _("set", f), _("show", d), _("hide", h), _("redraw", p), _("destroy", m)
            }), S = l($, function (e) {
                function n(e, n) {
                    var i = t.data(e, v) || t.data(e, v, new $.Bare);
                    return i.el || i.init(e), n ? i.start(n) : i
                }

                e.init = function (e, i) {
                    var r = t(e);
                    if (!r.length)return this;
                    if (1 === r.length)return n(r[0], i);
                    var o = [];
                    return r.each(function (t, e) {
                        o.push(n(e, i))
                    }), this.children = o, this
                }
            }), B = l(function (t) {
                function e() {
                    var t = this.get();
                    this.update("auto");
                    var e = this.get();
                    return this.update(t), e
                }

                function n(t, e, n) {
                    return void 0 !== e && (n = e), t in f ? t : n
                }

                function i(t) {
                    var e = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(t);
                    return (e ? r(e[1], e[2], e[3]) : t).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
                }

                var o = {duration: 500, ease: "ease", delay: 0};
                t.init = function (t, e, i, r) {
                    this.$el = t, this.el = t[0];
                    var a = e[0];
                    i[2] && (a = i[2]), Y[a] && (a = Y[a]), this.name = a, this.type = i[1], this.duration = u(e[1], this.duration, o.duration), this.ease = n(e[2], this.ease, o.ease), this.delay = u(e[3], this.delay, o.delay), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = z.test(this.name), this.unit = r.unit || this.unit || H.defaultUnit, this.angle = r.angle || this.angle || H.defaultAngle, H.fallback || r.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + E + this.duration + "ms" + ("ease" != this.ease ? E + f[this.ease][0] : "") + (this.delay ? E + this.delay + "ms" : ""))
                }, t.set = function (t) {
                    t = this.convert(t, this.type), this.update(t), this.redraw()
                }, t.transition = function (t) {
                    this.active = !0, t = this.convert(t, this.type), this.auto && ("auto" == this.el.style[this.name] && (this.update(this.get()), this.redraw()), "auto" == t && (t = e.call(this))), this.nextStyle = t
                }, t.fallback = function (t) {
                    var n = this.el.style[this.name] || this.convert(this.get(), this.type);
                    t = this.convert(t, this.type), this.auto && ("auto" == n && (n = this.convert(this.get(), this.type)), "auto" == t && (t = e.call(this))), this.tween = new N({
                        from: n,
                        to: t,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease,
                        update: this.update,
                        context: this
                    })
                }, t.get = function () {
                    return Z(this.el, this.name)
                }, t.update = function (t) {
                    U(this.el, this.name, t)
                }, t.stop = function () {
                    (this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, U(this.el, this.name, this.get()));
                    var t = this.tween;
                    t && t.context && t.destroy()
                }, t.convert = function (t, e) {
                    if ("auto" == t && this.auto)return t;
                    var n, r = "number" == typeof t, o = "string" == typeof t;
                    switch (e) {
                        case g:
                            if (r)return t;
                            if (o && "" === t.replace(m, ""))return +t;
                            n = "number(unitless)";
                            break;
                        case b:
                            if (o) {
                                if ("" === t && this.original)return this.original;
                                if (e.test(t))return "#" == t.charAt(0) && 7 == t.length ? t : i(t)
                            }
                            n = "hex or rgb string";
                            break;
                        case y:
                            if (r)return t + this.unit;
                            if (o && e.test(t))return t;
                            n = "number(px) or string(unit)";
                            break;
                        case x:
                            if (r)return t + this.unit;
                            if (o && e.test(t))return t;
                            n = "number(px) or string(unit or %)";
                            break;
                        case k:
                            if (r)return t + this.angle;
                            if (o && e.test(t))return t;
                            n = "number(deg) or string(angle)";
                            break;
                        case _:
                            if (r)return t;
                            if (o && x.test(t))return t;
                            n = "number(unitless) or string(unit or %)"
                    }
                    return a(n, t), t
                }, t.redraw = function () {
                    this.el.offsetHeight
                }
            }), R = l(B, function (t, e) {
                t.init = function () {
                    e.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), b))
                }
            }), F = l(B, function (t, e) {
                t.init = function () {
                    e.init.apply(this, arguments), this.animate = this.fallback
                }, t.get = function () {
                    return this.$el[this.name]()
                }, t.update = function (t) {
                    this.$el[this.name](t)
                }
            }), P = l(B, function (t, e) {
                function n(t, e) {
                    var n, i, r, o, a;
                    for (n in t)o = J[n], r = o[0], i = o[1] || n, a = this.convert(t[n], r), e.call(this, i, a, r)
                }

                t.init = function () {
                    e.init.apply(this, arguments), this.current || (this.current = {}, J.perspective && H.perspective && (this.current.perspective = H.perspective, U(this.el, this.name, this.style(this.current)), this.redraw()))
                }, t.set = function (t) {
                    n.call(this, t, function (t, e) {
                        this.current[t] = e
                    }), U(this.el, this.name, this.style(this.current)), this.redraw()
                }, t.transition = function (t) {
                    var e = this.values(t);
                    this.tween = new W({
                        current: this.current,
                        values: e,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease
                    });
                    var n, i = {};
                    for (n in this.current)i[n] = n in e ? e[n] : this.current[n];
                    this.active = !0, this.nextStyle = this.style(i)
                }, t.fallback = function (t) {
                    var e = this.values(t);
                    this.tween = new W({
                        current: this.current,
                        values: e,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease,
                        update: this.update,
                        context: this
                    })
                }, t.update = function () {
                    U(this.el, this.name, this.style(this.current))
                }, t.style = function (t) {
                    var e, n = "";
                    for (e in t)n += e + "(" + t[e] + ") ";
                    return n
                }, t.values = function (t) {
                    var e, i = {};
                    return n.call(this, t, function (t, n, r) {
                        i[t] = n, void 0 === this.current[t] && (e = 0, ~t.indexOf("scale") && (e = 1), this.current[t] = this.convert(e, r))
                    }), i
                }
            }), N = l(function (e) {
                function n(t) {
                    1 === h.push(t) && I(a)
                }

                function a() {
                    var t, e, n, i = h.length;
                    if (i)for (I(a), e = D(), t = i; t--;)n = h[t], n && n.render(e)
                }

                function u(e) {
                    var n, i = t.inArray(e, h);
                    i >= 0 && (n = h.slice(i + 1), h.length = i, n.length && (h = h.concat(n)))
                }

                function c(t) {
                    return Math.round(t * p) / p
                }

                function l(t, e, n) {
                    return r(t[0] + n * (e[0] - t[0]), t[1] + n * (e[1] - t[1]), t[2] + n * (e[2] - t[2]))
                }

                var d = {ease: f.ease[1], from: 0, to: 1};
                e.init = function (t) {
                    this.duration = t.duration || 0, this.delay = t.delay || 0;
                    var e = t.ease || d.ease;
                    f[e] && (e = f[e][1]), "function" != typeof e && (e = d.ease), this.ease = e, this.update = t.update || o, this.complete = t.complete || o, this.context = t.context || this, this.name = t.name;
                    var n = t.from, i = t.to;
                    void 0 === n && (n = d.from), void 0 === i && (i = d.to), this.unit = t.unit || "", "number" == typeof n && "number" == typeof i ? (this.begin = n, this.change = i - n) : this.format(i, n), this.value = this.begin + this.unit, this.start = D(), t.autoplay !== !1 && this.play()
                }, e.play = function () {
                    this.active || (this.start || (this.start = D()), this.active = !0, n(this))
                }, e.stop = function () {
                    this.active && (this.active = !1, u(this))
                }, e.render = function (t) {
                    var e, n = t - this.start;
                    if (this.delay) {
                        if (n <= this.delay)return;
                        n -= this.delay
                    }
                    if (n < this.duration) {
                        var i = this.ease(n, 0, 1, this.duration);
                        return e = this.startRGB ? l(this.startRGB, this.endRGB, i) : c(this.begin + i * this.change), this.value = e + this.unit, void this.update.call(this.context, this.value)
                    }
                    e = this.endHex || this.begin + this.change, this.value = e + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy()
                }, e.format = function (t, e) {
                    if (e += "", t += "", "#" == t.charAt(0))return this.startRGB = i(e), this.endRGB = i(t), this.endHex = t, this.begin = 0, void(this.change = 1);
                    if (!this.unit) {
                        var n = e.replace(m, ""), r = t.replace(m, "");
                        n !== r && s("tween", e, t), this.unit = n
                    }
                    e = parseFloat(e), t = parseFloat(t), this.begin = this.value = e, this.change = t - e
                }, e.destroy = function () {
                    this.stop(), this.context = null, this.ease = this.update = this.complete = o
                };
                var h = [], p = 1e3
            }), X = l(N, function (t) {
                t.init = function (t) {
                    this.duration = t.duration || 0, this.complete = t.complete || o, this.context = t.context, this.play()
                }, t.render = function (t) {
                    var e = t - this.start;
                    e < this.duration || (this.complete.call(this.context), this.destroy())
                }
            }), W = l(N, function (t, e) {
                t.init = function (t) {
                    this.context = t.context, this.update = t.update, this.tweens = [], this.current = t.current;
                    var e, n;
                    for (e in t.values)n = t.values[e], this.current[e] !== n && this.tweens.push(new N({
                        name: e,
                        from: this.current[e],
                        to: n,
                        duration: t.duration,
                        delay: t.delay,
                        ease: t.ease,
                        autoplay: !1
                    }));
                    this.play()
                }, t.render = function (t) {
                    var e, n, i = this.tweens.length, r = !1;
                    for (e = i; e--;)n = this.tweens[e], n.context && (n.render(t), this.current[n.name] = n.value, r = !0);
                    return r ? void(this.update && this.update.call(this.context)) : this.destroy()
                }, t.destroy = function () {
                    if (e.destroy.call(this), this.tweens) {
                        var t, n = this.tweens.length;
                        for (t = n; t--;)this.tweens[t].destroy();
                        this.tweens = null, this.current = null
                    }
                }
            }), H = e.config = {
                defaultUnit: "px",
                defaultAngle: "deg",
                keepInherited: !1,
                hideBackface: !1,
                perspective: "",
                fallback: !O.transition,
                agentTests: []
            };
            e.fallback = function (t) {
                if (!O.transition)return H.fallback = !0;
                H.agentTests.push("(" + t + ")");
                var e = new RegExp(H.agentTests.join("|"), "i");
                H.fallback = e.test(navigator.userAgent)
            }, e.fallback("6.0.[2-5] Safari"), e.tween = function (t) {
                return new N(t)
            }, e.delay = function (t, e, n) {
                return new X({complete: e, duration: t, context: n})
            }, t.fn.tram = function (t) {
                return e.call(null, this, t)
            };
            var U = t.style, Z = t.css, Y = {transform: O.transform && O.transform.css}, G = {
                color: [R, b],
                background: [R, b, "background-color"],
                "outline-color": [R, b],
                "border-color": [R, b],
                "border-top-color": [R, b],
                "border-right-color": [R, b],
                "border-bottom-color": [R, b],
                "border-left-color": [R, b],
                "border-width": [B, y],
                "border-top-width": [B, y],
                "border-right-width": [B, y],
                "border-bottom-width": [B, y],
                "border-left-width": [B, y],
                "border-spacing": [B, y],
                "letter-spacing": [B, y],
                margin: [B, y],
                "margin-top": [B, y],
                "margin-right": [B, y],
                "margin-bottom": [B, y],
                "margin-left": [B, y],
                padding: [B, y],
                "padding-top": [B, y],
                "padding-right": [B, y],
                "padding-bottom": [B, y],
                "padding-left": [B, y],
                "outline-width": [B, y],
                opacity: [B, g],
                top: [B, x],
                right: [B, x],
                bottom: [B, x],
                left: [B, x],
                "font-size": [B, x],
                "text-indent": [B, x],
                "word-spacing": [B, x],
                width: [B, x],
                "min-width": [B, x],
                "max-width": [B, x],
                height: [B, x],
                "min-height": [B, x],
                "max-height": [B, x],
                "line-height": [B, _],
                "scroll-top": [F, g, "scrollTop"],
                "scroll-left": [F, g, "scrollLeft"]
            }, J = {};
            O.transform && (G.transform = [P], J = {
                x: [x, "translateX"],
                y: [x, "translateY"],
                rotate: [k],
                rotateX: [k],
                rotateY: [k],
                scale: [g],
                scaleX: [g],
                scaleY: [g],
                skew: [k],
                skewX: [k],
                skewY: [k]
            }), O.transform && O.backface && (J.z = [x, "translateZ"], J.rotateZ = [k], J.scaleZ = [g], J.perspective = [y]);
            var Q = /ms/, V = /s|\./, K = function () {
                var t = "warn", e = window.console;
                return e && e[t] ? function (n) {
                    e[t](n)
                } : o
            }();
            return t.tram = e
        }(window.jQuery)
    }, {}], 17: [function (t, e, n) {
        "use strict";
        var i = window.$, r = t("../plugins/tram-min") && i.tram;
        e.exports = function () {
            var t = {};
            t.VERSION = "1.6.0-Framework";
            var e = {}, n = Array.prototype, i = Object.prototype, o = Function.prototype, a = (n.push, n.slice), s = (n.concat, i.toString, i.hasOwnProperty), u = n.forEach, c = n.map, l = (n.reduce, n.reduceRight, n.filter), f = (n.every, n.some), d = n.indexOf, h = (n.lastIndexOf, Array.isArray, Object.keys), p = (o.bind, t.each = t.forEach = function (n, i, r) {
                if (null == n)return n;
                if (u && n.forEach === u)n.forEach(i, r); else if (n.length === +n.length) {
                    for (var o = 0, a = n.length; a > o; o++)if (i.call(r, n[o], o, n) === e)return
                } else for (var s = t.keys(n), o = 0, a = s.length; a > o; o++)if (i.call(r, n[s[o]], s[o], n) === e)return;
                return n
            });
            t.map = t.collect = function (t, e, n) {
                var i = [];
                return null == t ? i : c && t.map === c ? t.map(e, n) : (p(t, function (t, r, o) {
                    i.push(e.call(n, t, r, o))
                }), i)
            }, t.find = t.detect = function (t, e, n) {
                var i;
                return v(t, function (t, r, o) {
                    return e.call(n, t, r, o) ? (i = t, !0) : void 0
                }), i
            }, t.filter = t.select = function (t, e, n) {
                var i = [];
                return null == t ? i : l && t.filter === l ? t.filter(e, n) : (p(t, function (t, r, o) {
                    e.call(n, t, r, o) && i.push(t)
                }), i)
            };
            var v = t.some = t.any = function (n, i, r) {
                i || (i = t.identity);
                var o = !1;
                return null == n ? o : f && n.some === f ? n.some(i, r) : (p(n, function (t, n, a) {
                    return o || (o = i.call(r, t, n, a)) ? e : void 0
                }), !!o)
            };
            t.contains = t.include = function (t, e) {
                return null == t ? !1 : d && t.indexOf === d ? -1 != t.indexOf(e) : v(t, function (t) {
                    return t === e
                })
            }, t.delay = function (t, e) {
                var n = a.call(arguments, 2);
                return setTimeout(function () {
                    return t.apply(null, n)
                }, e)
            }, t.defer = function (e) {
                return t.delay.apply(t, [e, 1].concat(a.call(arguments, 1)))
            }, t.throttle = function (t) {
                var e, n, i;
                return function () {
                    e || (e = !0, n = arguments, i = this, r.frame(function () {
                        e = !1, t.apply(i, n)
                    }))
                }
            }, t.debounce = function (e, n, i) {
                var r, o, a, s, u, c = function () {
                    var l = t.now() - s;
                    n > l ? r = setTimeout(c, n - l) : (r = null, i || (u = e.apply(a, o), a = o = null))
                };
                return function () {
                    a = this, o = arguments, s = t.now();
                    var l = i && !r;
                    return r || (r = setTimeout(c, n)), l && (u = e.apply(a, o), a = o = null), u
                }
            }, t.defaults = function (e) {
                if (!t.isObject(e))return e;
                for (var n = 1, i = arguments.length; i > n; n++) {
                    var r = arguments[n];
                    for (var o in r)void 0 === e[o] && (e[o] = r[o])
                }
                return e
            }, t.keys = function (e) {
                if (!t.isObject(e))return [];
                if (h)return h(e);
                var n = [];
                for (var i in e)t.has(e, i) && n.push(i);
                return n
            }, t.has = function (t, e) {
                return s.call(t, e)
            }, t.isObject = function (t) {
                return t === Object(t)
            }, t.now = Date.now || function () {
                return (new Date).getTime()
            }, t.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            };
            var m = /(.)^/, w = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "\u2028": "u2028",
                "\u2029": "u2029"
            }, g = /\\|'|\r|\n|\u2028|\u2029/g, b = function (t) {
                return "\\" + w[t]
            };
            return t.template = function (e, n, i) {
                !n && i && (n = i), n = t.defaults({}, n, t.templateSettings);
                var r = RegExp([(n.escape || m).source, (n.interpolate || m).source, (n.evaluate || m).source].join("|") + "|$", "g"), o = 0, a = "__p+='";
                e.replace(r, function (t, n, i, r, s) {
                    return a += e.slice(o, s).replace(g, b), o = s + t.length, n ? a += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : i ? a += "'+\n((__t=(" + i + "))==null?'':__t)+\n'" : r && (a += "';\n" + r + "\n__p+='"), t
                }), a += "';\n", n.variable || (a = "with(obj||{}){\n" + a + "}\n"), a = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
                try {
                    var s = new Function(n.variable || "obj", "_", a)
                } catch (u) {
                    throw u.source = a, u
                }
                var c = function (e) {
                    return s.call(this, e, t)
                }, l = n.variable || "obj";
                return c.source = "function(" + l + "){\n" + a + "}", c
            }, t
        }()
    }, {"../plugins/tram-min": 16}], 18: [function (t, e, n) {
        e.exports = function (t) {
            if (!t.support.cors && t.ajaxTransport && window.XDomainRequest) {
                var e = /^https?:\/\//i, n = /^get|post$/i, i = new RegExp("^" + location.protocol, "i");
                t.ajaxTransport("* text html xml json", function (r, o, a) {
                    if (r.crossDomain && r.async && n.test(r.type) && e.test(r.url) && i.test(r.url)) {
                        var s = null;
                        return {
                            send: function (e, n) {
                                var i = "", a = (o.dataType || "").toLowerCase();
                                s = new XDomainRequest, /^\d+$/.test(o.timeout) && (s.timeout = o.timeout), s.ontimeout = function () {
                                    n(500, "timeout")
                                }, s.onload = function () {
                                    var e = "Content-Length: " + s.responseText.length + "\r\nContent-Type: " + s.contentType, i = {
                                        code: 200,
                                        message: "success"
                                    }, r = {text: s.responseText};
                                    try {
                                        if ("html" === a || /text\/html/i.test(s.contentType))r.html = s.responseText; else if ("json" === a || "text" !== a && /\/json/i.test(s.contentType))try {
                                            r.json = t.parseJSON(s.responseText)
                                        } catch (o) {
                                            i.code = 500, i.message = "parseerror"
                                        } else if ("xml" === a || "text" !== a && /\/xml/i.test(s.contentType)) {
                                            var u = new ActiveXObject("Microsoft.XMLDOM");
                                            u.async = !1;
                                            try {
                                                u.loadXML(s.responseText)
                                            } catch (o) {
                                                u = void 0
                                            }
                                            if (!u || !u.documentElement || u.getElementsByTagName("parsererror").length)throw i.code = 500, i.message = "parseerror", "Invalid XML: " + s.responseText;
                                            r.xml = u
                                        }
                                    } catch (c) {
                                        throw c
                                    } finally {
                                        n(i.code, i.message, r, e)
                                    }
                                }, s.onprogress = function () {
                                }, s.onerror = function () {
                                    n(500, "error", {text: s.responseText})
                                }, o.data && (i = "string" === t.type(o.data) ? o.data : t.param(o.data)), s.open(r.type, r.url), s.send(i)
                            }, abort: function () {
                                s && s.abort()
                            }
                        }
                    }
                })
            }
        }(window.jQuery)
    }, {}]
}, {}, [1]);
Framework.require("ix").init([{
    slug: "menu-mask",
    name: "Menu Mask",
    value: {
        style: {opacity: 0},
        triggers: [{
            type: "navbar",
            stepsA: [{display: "block"}, {opacity: .7, transition: "opacity 500ms ease 0ms"}],
            stepsB: [{opacity: 0, transition: "opacity 500ms ease 0ms"}, {display: "none"}]
        }]
    }
}, {
    slug: "list-item",
    name: "List Item",
    value: {
        style: {opacity: 0, x: "-26px", y: "0px"},
        triggers: [{
            type: "scroll",
            stepsA: [{
                opacity: 1,
                transition: "transform 500ms ease-out-quint 0ms, opacity 500ms ease-out-quint 0ms",
                x: "0px",
                y: "0px"
            }],
            stepsB: []
        }]
    }
}, {
    slug: "search-box",
    name: "Search Box",
    value: {
        style: {},
        triggers: [{
            type: "click",
            selector: ".body",
            stepsA: [{transition: "transform 500ms ease-out-quint 0ms", x: "0px", y: "0px"}],
            stepsB: [{transition: "transform 500ms ease-out-quint 0ms", x: "0px", y: "-69px"}]
        }, {
            type: "click",
            selector: ".news-mask",
            stepsA: [{display: "block"}, {opacity: 1, transition: "opacity 500ms ease-out-quint 0ms"}],
            stepsB: [{opacity: 0, transition: "opacity 500ms ease-out-quint 0ms"}, {display: "none"}]
        }]
    }
}, {
    slug: "hide-navbar-icons",
    name: "Hide Navbar Icons",
    value: {
        style: {},
        triggers: [{
            type: "navbar",
            selector: ".navbar-button",
            stepsA: [{opacity: 0, transition: "opacity 200ms ease 0ms"}],
            stepsB: [{wait: 200}, {opacity: 1, transition: "opacity 500ms ease 0ms"}]
        }]
    }
}]), document.addEventListener("touchstart", function () {
}, !0), $(function () {
    var t = $(".page-content").attr("data-splash");
    var e = $(".page-content").attr("data-redirect");
    t > 0 && ($(".loading-mask").addClass("stop-loading"), setTimeout(function () {
        a(e)
    }, t)), $("#submit-form").submit(function (t) {
        var e = $(this).attr("data-redirect");
        return a(e), t.preventDefault(), !1
    }), navigator.userAgent.match(/Mobi/) && $(".mobile-wrapper").width("100%");
    var s = function () {
        var t = $(window).height();
        $(".mobile-wrapper").height(t)
    };
    s(), $(window).resize(function () {
        s()
    }), $("input:radio.radio-bullet").change(function () {
        var t = $(this).attr("name");
        $('input:radio[name="' + t + '"]').each(function (t) {
            $(this).prev(".radio-bullet-replacement").removeClass("checked")
        }), $(this).is(":checked") ? $(this).prev(".radio-bullet-replacement").addClass("checked") : $(this).prev(".radio-bullet-replacement").removeClass("checked")
    }), $("input:checkbox.checkbox-input").change(function () {
        $(this).is(":checked") ? ($(this).prev(".checkbox-handle").addClass("checked"), $(this).next(".checkbox-label").addClass("checked")) : ($(this).prev(".checkbox-handle").removeClass("checked"), $(this).next(".checkbox-label").removeClass("checked"))
    }), setTimeout(function () {
        $(".loading-mask").addClass("stop-loading")
    }, 1), $('[data-load="1"]').click(function (t) {
        var e = $(this).attr("href");
        a(e), $(this).attr("href", "#")
    });
    var a = function (t) {
        setTimeout(function () {
            $(".loading-mask").removeClass("stop-loading")
        }, 1), $.get(t, function (e) {
            setTimeout(function () {
                window.history.pushState({html: e, pageTitle: ""}, "", t), $("body").html(e), window.scrollTo(0, 0);
                window.location.href = t;
                //console.log(e);
            }, 1)
        })
    };
    window.onpopstate = function (t) {
        t.state && ($(".loading-mask").removeClass("stop-loading"), setTimeout(function () {
            $("body").html(t.state.html), document.title = t.state.pageTitle
        }, 400))
    }
});