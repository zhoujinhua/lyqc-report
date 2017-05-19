function pieChart(t, e, i, n, r) {
    console.log($("#" + t));
    var o = null,
    s = null;
    _tooltip = {},
    r && (r.pf && (_tooltip = {
        pointFormat: r.pf
    }), r.height && (o = r.height), r.width && (s = r.width)),
    $("#" + t).highcharts({
        credits: {
            enabled: !1
        },
        chart: {
            height: o,
            width: s,
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: !1,
            type: "pie"
        },
        exporting: {
            enabled: !1
        },
        title: {
            text: i,
            style: {
                color: "#000",
                fontWeight: "bold"
            }
        },
        tooltip: _tooltip,
        plotOptions: {
            pie: {
                allowPointSelect: !0,
                cursor: "pointer",
                startAngle: 0,
                colors: ["#2f7ed8", "#0d233a", "#910000", "#1aadce", "#492970", "#f28f43", "#77a1e5", "#c42525", "#a6c96a"],
                dataLabels: {
                    enabled: !0,
                    softConnector: !1,
                    distance: 5,
                    style: {
                        fontSize: "10px"
                    },
                    format: "{point.name}:{point.percentage:.2f}%"
                }
            }
        },
        series: [{
            name: n,
            data: e
        }]
    })
}
function lineChart(t, e, i, n) {
    $("#" + t).highcharts({
        legend: {
            enabled: !1
        },
        credits: {
            enabled: !1
        },
        title: {
            text: i,
            style: {
                color: "#000",
                fontWeight: "bold"
            }
        },
        exporting: {
            enabled: !1
        },
        tooltip: {
            enabled: !0,
            headerFormat: "<span style='font-size: 10px'>\u7b2c{point.key}\u5468</span><br/>"
        },
        xAxis: {
            categories: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25"]
        },
        yAxis: {
            min: 0,
            gridLineDashStyle: "longdash",
            title: {
                text: ""
            }
        },
        series: [{
            name: n,
            data: e
        }]
    })
}
function columnChart(t, e, i, n) {
    console.log($("#" + t));
    var r, o = e.n,
    s = parseInt((o.length + 11) / 12);
    if (n) {
        if (n.c) for (var a = 0; a < e.n.length; a++) o[a] = {
            y: o[a],
            color: n.c
        };
        n.pf && (r = n.pf)
    }
    $("#" + t).highcharts({
        credits: {
            enabled: !1
        },
        chart: {
            type: "column",
            margin: [100, 50, 100, 120]
        },
        title: {
            text: i[0],
            margin: 30
        },
        subtitle: {
            text: i[1]
        },
        xAxis: {
            categories: e.c,
            tickInterval: s,
            labels: {
                enable: !1,
                rotation: -30,
                align: "right",
                formatter: function() {
                    var t = this.value,
                    e = t.indexOf("-");
                    return t.substr(2, e - 2) + "\u5e74" + t.substr(t.indexOf("-") + 1) + "\u5468"
                },
                style: {
                    fontSize: "8px"
                }
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: ""
            },
            labels: {
                formatter: function() {
                    var t = this.value;
                    return t >= 1e6 ? (t /= 1e6, t += "M") : t >= 1e3 && 1e6 > t && (t /= 1e3, t += "K"),
                    t
                }
            }
        },
        legend: {
            enabled: !1
        },
        tooltip: {
            formatter: function() {
                var t = this.x,
                e = t.indexOf("-");
                return t.substr(0, e) + "\u5e74" + t.substr(e + 1) + "\u5468<br/>" + r.replace("{y}", this.y)
            }
        },
        series: [{
            data: o,
            dataLabels: {
                enabled: o.length <= 12
            }
        }],
        exporting: {
            enabled: !1
        }
    })
}
function barChart(t, e, i) {
    $("#" + t).highcharts({
        chart: {
            height: 300,
            width: 500,
            type: "bar"
        },
        title: {
            text: i
        },
        xAxis: {
            categories: e.categories,
            title: {
                text: null
            }
        },
        yAxis: {
            labels: {
                format: "{value}%"
            },
            title: {
                text: null
            }
        },
        tooltip: {
            valueSuffix: " %"
        },
        plotOptions: {
            bar: {
                pointPadding: 0,
                borderWidth: 0,
                dataLabels: {
                    enabled: !1
                }
            }
        },
        credits: {
            enabled: !1
        },
        series: e.series
    })
}
function bubbleChart(t, e, i) {
    console.log($("#" + t)),
    $("#" + t).highcharts({
        chart: {
            height: 300,
            width: 500,
            type: "bubble",
            zoomType: "xy"
        },
        title: {
            text: i.title
        },
        xAxis: {
            tickInterval: 5,
            categories: e.categories,
            labels: {
                format: "{value}%"
            },
            title: {
                text: i.x
            }
        },
        yAxis: {
            labels: {
                format: "{value}%"
            },
            title: {
                text: i.y
            }
        },
        credits: {
            enabled: !1
        },
        legend: {
            align: "right",
            layout: "vertical",
            verticalAlign: "middle",
            itemMarginBottom: 5,
            itemMarginTop: 5
        },
        tooltip: {
            pointFormat: i.x + ": <b>{point.x}</b>%<br/>" + i.y + ": <b>{point.y}</b>%<br/>" + i.z + ": <b>{point.z}</b>%"
        },
        series: e.series
    })
}
function fmt_money(t) {
    if (null == t) return "";
    var e = /^[0-9]+$/;
    return e.test(t) ? (parseInt(t) / 100).toFixed(2) : t
}
function sleep(t) {
    for (var e = (new Date).getTime();;) if ((new Date).getTime() - e > t) break
}
function disableButton() {
    var t = $(".query_button");
    console.log(t),
    t.val("\u6b63\u5728\u8bf7\u6c42\u670d\u52a1\u5668,\u8bf7\u7a0d\u7b49..."),
    t.attr("disabled", !0)
}
function enableButton() {
    var t = $(".query_button");
    t.val("\u67e5\u770b\u8d26\u6237\u4fe1\u606f"),
    t.attr("disabled", !1)
}
function short_str(t) {
    var e = [];
    if (t) for (var i = 0; i < t.length; i++) {
        var n = t[i];
        n.length > 10 && (n = n.substring(0, 4) + "**" + n.substring(n.length - 4, n.length)),
        e.push(n)
    }
    return e
}
function bill_verify(t, e, i, n) {
    var r = t,
    e = e,
    i = i,
    o = {
        heading: "\u7cfb\u7edf\u63d0\u793a",
        body: "merchants" == e ? "\u672a\u67e5\u5230\u8be5\u5546\u6237\u6216\u5546\u6237\u7f16\u53f7\u7684\u6210\u529f\u4ea4\u6613": "\u672a\u67e5\u5230\u8be5\u5361\u53f7\u7684\u6210\u529f\u4ea4\u6613",
        alertValue: "\u786e\u5b9a",
        callback: function() {
            "bill_verify_btn" == r.attr("id") && $.ajax({
                type: "GET",
                url: "/" + e + "/bills/search.js",
                data: {
                    type: "bill,verify_bill"
                }
            })
        }
    },
    n = n;
    $.ajax({
        type: "GET",
        url: i,
        data: n,
        contentType: "application/json",
        success: function(t) {
            var i = t.transactions;
            if (i && i.length > 0) {
                if ("merchants" == e) for (var n = "<table class='table table-striped table-hover'><thead><tr><th style='text-align: center'>\u4ea4\u6613\u65f6\u95f4</th><th style='text-align: center'>\u4ea4\u6613\u91d1\u989d\uff08\u5143\uff09</th><th style='text-align: center'>\u94f6\u884c\u5361\u53f7</th></tr></thead>",
                s = 0; s < i.length; s++) {
                    var a = i[s];
                    n += "<tr><td>" + a.transTime + "</td><td>" + fmt_money(a.transAmount) + "</td><td>" + a.card + "</td></tr>"
                } else for (var n = "<table class='table table-striped table-hover'><thead><tr><th style='text-align: center'>\u4ea4\u6613\u65f6\u95f4</th><th style='text-align: center'>\u4ea4\u6613\u91d1\u989d\uff08\u5143\uff09</th></tr></thead>",
                s = 0; s < i.length; s++) {
                    var a = i[s];
                    n += "<tr><td>" + a.transTime + "</td><td>" + fmt_money(a.transAmount) + "</td></tr>"
                }
                n += "</table>",
                o.body = n
            }
            r.alertModal(o)
        },
        error: function() {
            r.alertModal(o)
        }
    })
} !
function(t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    }: e(t)
} ("undefined" != typeof window ? window: this,
function(t, e) {
    function i(t) {
        var e = t.length,
        i = re.type(t);
        return "function" === i || re.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
    }
    function n(t, e, i) {
        if (re.isFunction(e)) return re.grep(t,
        function(t, n) {
            return !! e.call(t, n, t) !== i
        });
        if (e.nodeType) return re.grep(t,
        function(t) {
            return t === e !== i
        });
        if ("string" == typeof e) {
            if (de.test(e)) return re.filter(e, t, i);
            e = re.filter(e, t)
        }
        return re.grep(t,
        function(t) {
            return re.inArray(t, e) >= 0 !== i
        })
    }
    function r(t, e) {
        do t = t[e];
        while (t && 1 !== t.nodeType);
        return t
    }
    function o(t) {
        var e = xe[t] = {};
        return re.each(t.match(be) || [],
        function(t, i) {
            e[i] = !0
        }),
        e
    }
    function s() {
        fe.addEventListener ? (fe.removeEventListener("DOMContentLoaded", a, !1), t.removeEventListener("load", a, !1)) : (fe.detachEvent("onreadystatechange", a), t.detachEvent("onload", a))
    }
    function a() { (fe.addEventListener || "load" === event.type || "complete" === fe.readyState) && (s(), re.ready())
    }
    function l(t, e, i) {
        if (void 0 === i && 1 === t.nodeType) {
            var n = "data-" + e.replace(Te, "-$1").toLowerCase();
            if (i = t.getAttribute(n), "string" == typeof i) {
                try {
                    i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null: +i + "" === i ? +i: Ce.test(i) ? re.parseJSON(i) : i
                } catch(r) {}
                re.data(t, e, i)
            } else i = void 0
        }
        return i
    }
    function h(t) {
        var e;
        for (e in t) if (("data" !== e || !re.isEmptyObject(t[e])) && "toJSON" !== e) return ! 1;
        return ! 0
    }
    function c(t, e, i, n) {
        if (re.acceptData(t)) {
            var r, o, s = re.expando,
            a = t.nodeType,
            l = a ? re.cache: t,
            h = a ? t[s] : t[s] && s;
            if (h && l[h] && (n || l[h].data) || void 0 !== i || "string" != typeof e) return h || (h = a ? t[s] = U.pop() || re.guid++:s),
            l[h] || (l[h] = a ? {}: {
                toJSON: re.noop
            }),
            ("object" == typeof e || "function" == typeof e) && (n ? l[h] = re.extend(l[h], e) : l[h].data = re.extend(l[h].data, e)),
            o = l[h],
            n || (o.data || (o.data = {}), o = o.data),
            void 0 !== i && (o[re.camelCase(e)] = i),
            "string" == typeof e ? (r = o[e], null == r && (r = o[re.camelCase(e)])) : r = o,
            r
        }
    }
    function u(t, e, i) {
        if (re.acceptData(t)) {
            var n, r, o = t.nodeType,
            s = o ? re.cache: t,
            a = o ? t[re.expando] : re.expando;
            if (s[a]) {
                if (e && (n = i ? s[a] : s[a].data)) {
                    re.isArray(e) ? e = e.concat(re.map(e, re.camelCase)) : e in n ? e = [e] : (e = re.camelCase(e), e = e in n ? [e] : e.split(" ")),
                    r = e.length;
                    for (; r--;) delete n[e[r]];
                    if (i ? !h(n) : !re.isEmptyObject(n)) return
                } (i || (delete s[a].data, h(s[a]))) && (o ? re.cleanData([t], !0) : ie.deleteExpando || s != s.window ? delete s[a] : s[a] = null)
            }
        }
    }
    function d() {
        return ! 0
    }
    function p() {
        return ! 1
    }
    function f() {
        try {
            return fe.activeElement
        } catch(t) {}
    }
    function g(t) {
        var e = $e.split("|"),
        i = t.createDocumentFragment();
        if (i.createElement) for (; e.length;) i.createElement(e.pop());
        return i
    }
    function m(t, e) {
        var i, n, r = 0,
        o = typeof t.getElementsByTagName !== Se ? t.getElementsByTagName(e || "*") : typeof t.querySelectorAll !== Se ? t.querySelectorAll(e || "*") : void 0;
        if (!o) for (o = [], i = t.childNodes || t; null != (n = i[r]); r++) ! e || re.nodeName(n, e) ? o.push(n) : re.merge(o, m(n, e));
        return void 0 === e || e && re.nodeName(t, e) ? re.merge([t], o) : o
    }
    function v(t) {
        Le.test(t.type) && (t.defaultChecked = t.checked)
    }
    function y(t, e) {
        return re.nodeName(t, "table") && re.nodeName(11 !== e.nodeType ? e: e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }
    function b(t) {
        return t.type = (null !== re.find.attr(t, "type")) + "/" + t.type,
        t
    }
    function x(t) {
        var e = Ve.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"),
        t
    }
    function w(t, e) {
        for (var i, n = 0; null != (i = t[n]); n++) re._data(i, "globalEval", !e || re._data(e[n], "globalEval"))
    }
    function k(t, e) {
        if (1 === e.nodeType && re.hasData(t)) {
            var i, n, r, o = re._data(t),
            s = re._data(e, o),
            a = o.events;
            if (a) {
                delete s.handle,
                s.events = {};
                for (i in a) for (n = 0, r = a[i].length; r > n; n++) re.event.add(e, i, a[i][n])
            }
            s.data && (s.data = re.extend({},
            s.data))
        }
    }
    function S(t, e) {
        var i, n, r;
        if (1 === e.nodeType) {
            if (i = e.nodeName.toLowerCase(), !ie.noCloneEvent && e[re.expando]) {
                r = re._data(e);
                for (n in r.events) re.removeEvent(e, n, r.handle);
                e.removeAttribute(re.expando)
            }
            "script" === i && e.text !== t.text ? (b(e).text = t.text, x(e)) : "object" === i ? (e.parentNode && (e.outerHTML = t.outerHTML), ie.html5Clone && t.innerHTML && !re.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === i && Le.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === i ? e.defaultSelected = e.selected = t.defaultSelected: ("input" === i || "textarea" === i) && (e.defaultValue = t.defaultValue)
        }
    }
    function C(e, i) {
        var n, r = re(i.createElement(e)).appendTo(i.body),
        o = t.getDefaultComputedStyle && (n = t.getDefaultComputedStyle(r[0])) ? n.display: re.css(r[0], "display");
        return r.detach(),
        o
    }
    function T(t) {
        var e = fe,
        i = Je[t];
        return i || (i = C(t, e), "none" !== i && i || (Ze = (Ze || re("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = (Ze[0].contentWindow || Ze[0].contentDocument).document, e.write(), e.close(), i = C(t, e), Ze.detach()), Je[t] = i),
        i
    }
    function D(t, e) {
        return {
            get: function() {
                var i = t();
                if (null != i) return i ? void delete this.get: (this.get = e).apply(this, arguments)
            }
        }
    }
    function A(t, e) {
        if (e in t) return e;
        for (var i = e.charAt(0).toUpperCase() + e.slice(1), n = e, r = di.length; r--;) if (e = di[r] + i, e in t) return e;
        return n
    }
    function P(t, e) {
        for (var i, n, r, o = [], s = 0, a = t.length; a > s; s++) n = t[s],
        n.style && (o[s] = re._data(n, "olddisplay"), i = n.style.display, e ? (o[s] || "none" !== i || (n.style.display = ""), "" === n.style.display && Pe(n) && (o[s] = re._data(n, "olddisplay", T(n.nodeName)))) : (r = Pe(n), (i && "none" !== i || !r) && re._data(n, "olddisplay", r ? i: re.css(n, "display"))));
        for (s = 0; a > s; s++) n = t[s],
        n.style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? o[s] || "": "none"));
        return t
    }
    function _(t, e, i) {
        var n = li.exec(e);
        return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e
    }
    function L(t, e, i, n, r) {
        for (var o = i === (n ? "border": "content") ? 4 : "width" === e ? 1 : 0, s = 0; 4 > o; o += 2)"margin" === i && (s += re.css(t, i + Ae[o], !0, r)),
        n ? ("content" === i && (s -= re.css(t, "padding" + Ae[o], !0, r)), "margin" !== i && (s -= re.css(t, "border" + Ae[o] + "Width", !0, r))) : (s += re.css(t, "padding" + Ae[o], !0, r), "padding" !== i && (s += re.css(t, "border" + Ae[o] + "Width", !0, r)));
        return s
    }
    function E(t, e, i) {
        var n = !0,
        r = "width" === e ? t.offsetWidth: t.offsetHeight,
        o = ti(t),
        s = ie.boxSizing && "border-box" === re.css(t, "boxSizing", !1, o);
        if (0 >= r || null == r) {
            if (r = ei(t, e, o), (0 > r || null == r) && (r = t.style[e]), ni.test(r)) return r;
            n = s && (ie.boxSizingReliable() || r === t.style[e]),
            r = parseFloat(r) || 0
        }
        return r + L(t, e, i || (s ? "border": "content"), n, o) + "px"
    }
    function M(t, e, i, n, r) {
        return new M.prototype.init(t, e, i, n, r)
    }
    function F() {
        return setTimeout(function() {
            pi = void 0
        }),
        pi = re.now()
    }
    function N(t, e) {
        var i, n = {
            height: t
        },
        r = 0;
        for (e = e ? 1 : 0; 4 > r; r += 2 - e) i = Ae[r],
        n["margin" + i] = n["padding" + i] = t;
        return e && (n.opacity = n.width = t),
        n
    }
    function I(t, e, i) {
        for (var n, r = (bi[e] || []).concat(bi["*"]), o = 0, s = r.length; s > o; o++) if (n = r[o].call(i, e, t)) return n
    }
    function $(t, e, i) {
        var n, r, o, s, a, l, h, c, u = this,
        d = {},
        p = t.style,
        f = t.nodeType && Pe(t),
        g = re._data(t, "fxshow");
        i.queue || (a = re._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
            a.unqueued || l()
        }), a.unqueued++, u.always(function() {
            u.always(function() {
                a.unqueued--,
                re.queue(t, "fx").length || a.empty.fire()
            })
        })),
        1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [p.overflow, p.overflowX, p.overflowY], h = re.css(t, "display"), c = "none" === h ? re._data(t, "olddisplay") || T(t.nodeName) : h, "inline" === c && "none" === re.css(t, "float") && (ie.inlineBlockNeedsLayout && "inline" !== T(t.nodeName) ? p.zoom = 1 : p.display = "inline-block")),
        i.overflow && (p.overflow = "hidden", ie.shrinkWrapBlocks() || u.always(function() {
            p.overflow = i.overflow[0],
            p.overflowX = i.overflow[1],
            p.overflowY = i.overflow[2]
        }));
        for (n in e) if (r = e[n], gi.exec(r)) {
            if (delete e[n], o = o || "toggle" === r, r === (f ? "hide": "show")) {
                if ("show" !== r || !g || void 0 === g[n]) continue;
                f = !0
            }
            d[n] = g && g[n] || re.style(t, n)
        } else h = void 0;
        if (re.isEmptyObject(d))"inline" === ("none" === h ? T(t.nodeName) : h) && (p.display = h);
        else {
            g ? "hidden" in g && (f = g.hidden) : g = re._data(t, "fxshow", {}),
            o && (g.hidden = !f),
            f ? re(t).show() : u.done(function() {
                re(t).hide()
            }),
            u.done(function() {
                var e;
                re._removeData(t, "fxshow");
                for (e in d) re.style(t, e, d[e])
            });
            for (n in d) s = I(f ? g[n] : 0, n, u),
            n in g || (g[n] = s.start, f && (s.end = s.start, s.start = "width" === n || "height" === n ? 1 : 0))
        }
    }
    function O(t, e) {
        var i, n, r, o, s;
        for (i in t) if (n = re.camelCase(i), r = e[n], o = t[i], re.isArray(o) && (r = o[1], o = t[i] = o[0]), i !== n && (t[n] = o, delete t[i]), s = re.cssHooks[n], s && "expand" in s) {
            o = s.expand(o),
            delete t[n];
            for (i in o) i in t || (t[i] = o[i], e[i] = r)
        } else e[n] = r
    }
    function R(t, e, i) {
        var n, r, o = 0,
        s = yi.length,
        a = re.Deferred().always(function() {
            delete l.elem
        }),
        l = function() {
            if (r) return ! 1;
            for (var e = pi || F(), i = Math.max(0, h.startTime + h.duration - e), n = i / h.duration || 0, o = 1 - n, s = 0, l = h.tweens.length; l > s; s++) h.tweens[s].run(o);
            return a.notifyWith(t, [h, o, i]),
            1 > o && l ? i: (a.resolveWith(t, [h]), !1)
        },
        h = a.promise({
            elem: t,
            props: re.extend({},
            e),
            opts: re.extend(!0, {
                specialEasing: {}
            },
            i),
            originalProperties: e,
            originalOptions: i,
            startTime: pi || F(),
            duration: i.duration,
            tweens: [],
            createTween: function(e, i) {
                var n = re.Tween(t, h.opts, e, i, h.opts.specialEasing[e] || h.opts.easing);
                return h.tweens.push(n),
                n
            },
            stop: function(e) {
                var i = 0,
                n = e ? h.tweens.length: 0;
                if (r) return this;
                for (r = !0; n > i; i++) h.tweens[i].run(1);
                return e ? a.resolveWith(t, [h, e]) : a.rejectWith(t, [h, e]),
                this
            }
        }),
        c = h.props;
        for (O(c, h.opts.specialEasing); s > o; o++) if (n = yi[o].call(h, t, c, h.opts)) return n;
        return re.map(c, I, h),
        re.isFunction(h.opts.start) && h.opts.start.call(t, h),
        re.fx.timer(re.extend(l, {
            elem: t,
            anim: h,
            queue: h.opts.queue
        })),
        h.progress(h.opts.progress).done(h.opts.done, h.opts.complete).fail(h.opts.fail).always(h.opts.always)
    }
    function H(t) {
        return function(e, i) {
            "string" != typeof e && (i = e, e = "*");
            var n, r = 0,
            o = e.toLowerCase().match(be) || [];
            if (re.isFunction(i)) for (; n = o[r++];)"+" === n.charAt(0) ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
        }
    }
    function B(t, e, i, n) {
        function r(a) {
            var l;
            return o[a] = !0,
            re.each(t[a] || [],
            function(t, a) {
                var h = a(e, i, n);
                return "string" != typeof h || s || o[h] ? s ? !(l = h) : void 0 : (e.dataTypes.unshift(h), r(h), !1)
            }),
            l
        }
        var o = {},
        s = t === Wi;
        return r(e.dataTypes[0]) || !o["*"] && r("*")
    }
    function z(t, e) {
        var i, n, r = re.ajaxSettings.flatOptions || {};
        for (n in e) void 0 !== e[n] && ((r[n] ? t: i || (i = {}))[n] = e[n]);
        return i && re.extend(!0, t, i),
        t
    }
    function j(t, e, i) {
        for (var n, r, o, s, a = t.contents,
        l = t.dataTypes;
        "*" === l[0];) l.shift(),
        void 0 === r && (r = t.mimeType || e.getResponseHeader("Content-Type"));
        if (r) for (s in a) if (a[s] && a[s].test(r)) {
            l.unshift(s);
            break
        }
        if (l[0] in i) o = l[0];
        else {
            for (s in i) {
                if (!l[0] || t.converters[s + " " + l[0]]) {
                    o = s;
                    break
                }
                n || (n = s)
            }
            o = o || n
        }
        return o ? (o !== l[0] && l.unshift(o), i[o]) : void 0
    }
    function W(t, e, i, n) {
        var r, o, s, a, l, h = {},
        c = t.dataTypes.slice();
        if (c[1]) for (s in t.converters) h[s.toLowerCase()] = t.converters[s];
        for (o = c.shift(); o;) if (t.responseFields[o] && (i[t.responseFields[o]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = c.shift()) if ("*" === o) o = l;
        else if ("*" !== l && l !== o) {
            if (s = h[l + " " + o] || h["* " + o], !s) for (r in h) if (a = r.split(" "), a[1] === o && (s = h[l + " " + a[0]] || h["* " + a[0]])) {
                s === !0 ? s = h[r] : h[r] !== !0 && (o = a[0], c.unshift(a[1]));
                break
            }
            if (s !== !0) if (s && t["throws"]) e = s(e);
            else try {
                e = s(e)
            } catch(u) {
                return {
                    state: "parsererror",
                    error: s ? u: "No conversion from " + l + " to " + o
                }
            }
        }
        return {
            state: "success",
            data: e
        }
    }
    function q(t, e, i, n) {
        var r;
        if (re.isArray(e)) re.each(e,
        function(e, r) {
            i || Vi.test(t) ? n(t, r) : q(t + "[" + ("object" == typeof r ? e: "") + "]", r, i, n)
        });
        else if (i || "object" !== re.type(e)) n(t, e);
        else for (r in e) q(t + "[" + r + "]", e[r], i, n)
    }
    function Y() {
        try {
            return new t.XMLHttpRequest
        } catch(e) {}
    }
    function X() {
        try {
            return new t.ActiveXObject("Microsoft.XMLHTTP")
        } catch(e) {}
    }
    function V(t) {
        return re.isWindow(t) ? t: 9 === t.nodeType ? t.defaultView || t.parentWindow: !1
    }
    var U = [],
    G = U.slice,
    K = U.concat,
    Q = U.push,
    Z = U.indexOf,
    J = {},
    te = J.toString,
    ee = J.hasOwnProperty,
    ie = {},
    ne = "1.11.2",
    re = function(t, e) {
        return new re.fn.init(t, e)
    },
    oe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    se = /^-ms-/,
    ae = /-([\da-z])/gi,
    le = function(t, e) {
        return e.toUpperCase()
    };
    re.fn = re.prototype = {
        jquery: ne,
        constructor: re,
        selector: "",
        length: 0,
        toArray: function() {
            return G.call(this)
        },
        get: function(t) {
            return null != t ? 0 > t ? this[t + this.length] : this[t] : G.call(this)
        },
        pushStack: function(t) {
            var e = re.merge(this.constructor(), t);
            return e.prevObject = this,
            e.context = this.context,
            e
        },
        each: function(t, e) {
            return re.each(this, t, e)
        },
        map: function(t) {
            return this.pushStack(re.map(this,
            function(e, i) {
                return t.call(e, i, e)
            }))
        },
        slice: function() {
            return this.pushStack(G.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq( - 1)
        },
        eq: function(t) {
            var e = this.length,
            i = +t + (0 > t ? e: 0);
            return this.pushStack(i >= 0 && e > i ? [this[i]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: Q,
        sort: U.sort,
        splice: U.splice
    },
    re.extend = re.fn.extend = function() {
        var t, e, i, n, r, o, s = arguments[0] || {},
        a = 1,
        l = arguments.length,
        h = !1;
        for ("boolean" == typeof s && (h = s, s = arguments[a] || {},
        a++), "object" == typeof s || re.isFunction(s) || (s = {}), a === l && (s = this, a--); l > a; a++) if (null != (r = arguments[a])) for (n in r) t = s[n],
        i = r[n],
        s !== i && (h && i && (re.isPlainObject(i) || (e = re.isArray(i))) ? (e ? (e = !1, o = t && re.isArray(t) ? t: []) : o = t && re.isPlainObject(t) ? t: {},
        s[n] = re.extend(h, o, i)) : void 0 !== i && (s[n] = i));
        return s
    },
    re.extend({
        expando: "jQuery" + (ne + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === re.type(t)
        },
        isArray: Array.isArray ||
        function(t) {
            return "array" === re.type(t)
        },
        isWindow: function(t) {
            return null != t && t == t.window
        },
        isNumeric: function(t) {
            return ! re.isArray(t) && t - parseFloat(t) + 1 >= 0
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t) return ! 1;
            return ! 0
        },
        isPlainObject: function(t) {
            var e;
            if (!t || "object" !== re.type(t) || t.nodeType || re.isWindow(t)) return ! 1;
            try {
                if (t.constructor && !ee.call(t, "constructor") && !ee.call(t.constructor.prototype, "isPrototypeOf")) return ! 1
            } catch(i) {
                return ! 1
            }
            if (ie.ownLast) for (e in t) return ee.call(t, e);
            for (e in t);
            return void 0 === e || ee.call(t, e)
        },
        type: function(t) {
            return null == t ? t + "": "object" == typeof t || "function" == typeof t ? J[te.call(t)] || "object": typeof t
        },
        globalEval: function(e) {
            e && re.trim(e) && (t.execScript ||
            function(e) {
                t.eval.call(t, e)
            })(e)
        },
        camelCase: function(t) {
            return t.replace(se, "ms-").replace(ae, le)
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function(t, e, n) {
            var r, o = 0,
            s = t.length,
            a = i(t);
            if (n) {
                if (a) for (; s > o && (r = e.apply(t[o], n), r !== !1); o++);
                else for (o in t) if (r = e.apply(t[o], n), r === !1) break
            } else if (a) for (; s > o && (r = e.call(t[o], o, t[o]), r !== !1); o++);
            else for (o in t) if (r = e.call(t[o], o, t[o]), r === !1) break;
            return t
        },
        trim: function(t) {
            return null == t ? "": (t + "").replace(oe, "")
        },
        makeArray: function(t, e) {
            var n = e || [];
            return null != t && (i(Object(t)) ? re.merge(n, "string" == typeof t ? [t] : t) : Q.call(n, t)),
            n
        },
        inArray: function(t, e, i) {
            var n;
            if (e) {
                if (Z) return Z.call(e, t, i);
                for (n = e.length, i = i ? 0 > i ? Math.max(0, n + i) : i: 0; n > i; i++) if (i in e && e[i] === t) return i
            }
            return - 1
        },
        merge: function(t, e) {
            for (var i = +e.length,
            n = 0,
            r = t.length; i > n;) t[r++] = e[n++];
            if (i !== i) for (; void 0 !== e[n];) t[r++] = e[n++];
            return t.length = r,
            t
        },
        grep: function(t, e, i) {
            for (var n, r = [], o = 0, s = t.length, a = !i; s > o; o++) n = !e(t[o], o),
            n !== a && r.push(t[o]);
            return r
        },
        map: function(t, e, n) {
            var r, o = 0,
            s = t.length,
            a = i(t),
            l = [];
            if (a) for (; s > o; o++) r = e(t[o], o, n),
            null != r && l.push(r);
            else for (o in t) r = e(t[o], o, n),
            null != r && l.push(r);
            return K.apply([], l)
        },
        guid: 1,
        proxy: function(t, e) {
            var i, n, r;
            return "string" == typeof e && (r = t[e], e = t, t = r),
            re.isFunction(t) ? (i = G.call(arguments, 2), n = function() {
                return t.apply(e || this, i.concat(G.call(arguments)))
            },
            n.guid = t.guid = t.guid || re.guid++, n) : void 0
        },
        now: function() {
            return + new Date
        },
        support: ie
    }),
    re.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),
    function(t, e) {
        J["[object " + e + "]"] = e.toLowerCase()
    });
    var he = function(t) {
        function e(t, e, i, n) {
            var r, o, s, a, l, h, u, p, f, g;
            if ((e ? e.ownerDocument || e: B) !== M && E(e), e = e || M, i = i || [], a = e.nodeType, "string" != typeof t || !t || 1 !== a && 9 !== a && 11 !== a) return i;
            if (!n && N) {
                if (11 !== a && (r = ye.exec(t))) if (s = r[1]) {
                    if (9 === a) {
                        if (o = e.getElementById(s), !o || !o.parentNode) return i;
                        if (o.id === s) return i.push(o),
                        i
                    } else if (e.ownerDocument && (o = e.ownerDocument.getElementById(s)) && R(e, o) && o.id === s) return i.push(o),
                    i
                } else {
                    if (r[2]) return Z.apply(i, e.getElementsByTagName(t)),
                    i;
                    if ((s = r[3]) && w.getElementsByClassName) return Z.apply(i, e.getElementsByClassName(s)),
                    i
                }
                if (w.qsa && (!I || !I.test(t))) {
                    if (p = u = H, f = e, g = 1 !== a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
                        for (h = T(t), (u = e.getAttribute("id")) ? p = u.replace(xe, "\\$&") : e.setAttribute("id", p), p = "[id='" + p + "'] ", l = h.length; l--;) h[l] = p + d(h[l]);
                        f = be.test(t) && c(e.parentNode) || e,
                        g = h.join(",")
                    }
                    if (g) try {
                        return Z.apply(i, f.querySelectorAll(g)),
                        i
                    } catch(m) {} finally {
                        u || e.removeAttribute("id")
                    }
                }
            }
            return A(t.replace(le, "$1"), e, i, n)
        }
        function i() {
            function t(i, n) {
                return e.push(i + " ") > k.cacheLength && delete t[e.shift()],
                t[i + " "] = n
            }
            var e = [];
            return t
        }
        function n(t) {
            return t[H] = !0,
            t
        }
        function r(t) {
            var e = M.createElement("div");
            try {
                return !! t(e)
            } catch(i) {
                return ! 1
            } finally {
                e.parentNode && e.parentNode.removeChild(e),
                e = null
            }
        }
        function o(t, e) {
            for (var i = t.split("|"), n = t.length; n--;) k.attrHandle[i[n]] = e
        }
        function s(t, e) {
            var i = e && t,
            n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || V) - (~t.sourceIndex || V);
            if (n) return n;
            if (i) for (; i = i.nextSibling;) if (i === e) return - 1;
            return t ? 1 : -1
        }
        function a(t) {
            return function(e) {
                var i = e.nodeName.toLowerCase();
                return "input" === i && e.type === t
            }
        }
        function l(t) {
            return function(e) {
                var i = e.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && e.type === t
            }
        }
        function h(t) {
            return n(function(e) {
                return e = +e,
                n(function(i, n) {
                    for (var r, o = t([], i.length, e), s = o.length; s--;) i[r = o[s]] && (i[r] = !(n[r] = i[r]))
                })
            })
        }
        function c(t) {
            return t && "undefined" != typeof t.getElementsByTagName && t
        }
        function u() {}
        function d(t) {
            for (var e = 0,
            i = t.length,
            n = ""; i > e; e++) n += t[e].value;
            return n
        }
        function p(t, e, i) {
            var n = e.dir,
            r = i && "parentNode" === n,
            o = j++;
            return e.first ?
            function(e, i, o) {
                for (; e = e[n];) if (1 === e.nodeType || r) return t(e, i, o)
            }: function(e, i, s) {
                var a, l, h = [z, o];
                if (s) {
                    for (; e = e[n];) if ((1 === e.nodeType || r) && t(e, i, s)) return ! 0
                } else for (; e = e[n];) if (1 === e.nodeType || r) {
                    if (l = e[H] || (e[H] = {}), (a = l[n]) && a[0] === z && a[1] === o) return h[2] = a[2];
                    if (l[n] = h, h[2] = t(e, i, s)) return ! 0
                }
            }
        }
        function f(t) {
            return t.length > 1 ?
            function(e, i, n) {
                for (var r = t.length; r--;) if (!t[r](e, i, n)) return ! 1;
                return ! 0
            }: t[0]
        }
        function g(t, i, n) {
            for (var r = 0,
            o = i.length; o > r; r++) e(t, i[r], n);
            return n
        }
        function m(t, e, i, n, r) {
            for (var o, s = [], a = 0, l = t.length, h = null != e; l > a; a++)(o = t[a]) && (!i || i(o, n, r)) && (s.push(o), h && e.push(a));
            return s
        }
        function v(t, e, i, r, o, s) {
            return r && !r[H] && (r = v(r)),
            o && !o[H] && (o = v(o, s)),
            n(function(n, s, a, l) {
                var h, c, u, d = [],
                p = [],
                f = s.length,
                v = n || g(e || "*", a.nodeType ? [a] : a, []),
                y = !t || !n && e ? v: m(v, d, t, a, l),
                b = i ? o || (n ? t: f || r) ? [] : s: y;
                if (i && i(y, b, a, l), r) for (h = m(b, p), r(h, [], a, l), c = h.length; c--;)(u = h[c]) && (b[p[c]] = !(y[p[c]] = u));
                if (n) {
                    if (o || t) {
                        if (o) {
                            for (h = [], c = b.length; c--;)(u = b[c]) && h.push(y[c] = u);
                            o(null, b = [], h, l)
                        }
                        for (c = b.length; c--;)(u = b[c]) && (h = o ? te(n, u) : d[c]) > -1 && (n[h] = !(s[h] = u))
                    }
                } else b = m(b === s ? b.splice(f, b.length) : b),
                o ? o(null, s, b, l) : Z.apply(s, b)
            })
        }
        function y(t) {
            for (var e, i, n, r = t.length,
            o = k.relative[t[0].type], s = o || k.relative[" "], a = o ? 1 : 0, l = p(function(t) {
                return t === e
            },
            s, !0), h = p(function(t) {
                return te(e, t) > -1
            },
            s, !0), c = [function(t, i, n) {
                var r = !o && (n || i !== P) || ((e = i).nodeType ? l(t, i, n) : h(t, i, n));
                return e = null,
                r
            }]; r > a; a++) if (i = k.relative[t[a].type]) c = [p(f(c), i)];
            else {
                if (i = k.filter[t[a].type].apply(null, t[a].matches), i[H]) {
                    for (n = ++a; r > n && !k.relative[t[n].type]; n++);
                    return v(a > 1 && f(c), a > 1 && d(t.slice(0, a - 1).concat({
                        value: " " === t[a - 2].type ? "*": ""
                    })).replace(le, "$1"), i, n > a && y(t.slice(a, n)), r > n && y(t = t.slice(n)), r > n && d(t))
                }
                c.push(i)
            }
            return f(c)
        }
        function b(t, i) {
            var r = i.length > 0,
            o = t.length > 0,
            s = function(n, s, a, l, h) {
                var c, u, d, p = 0,
                f = "0",
                g = n && [],
                v = [],
                y = P,
                b = n || o && k.find.TAG("*", h),
                x = z += null == y ? 1 : Math.random() || .1,
                w = b.length;
                for (h && (P = s !== M && s); f !== w && null != (c = b[f]); f++) {
                    if (o && c) {
                        for (u = 0; d = t[u++];) if (d(c, s, a)) {
                            l.push(c);
                            break
                        }
                        h && (z = x)
                    }
                    r && ((c = !d && c) && p--, n && g.push(c))
                }
                if (p += f, r && f !== p) {
                    for (u = 0; d = i[u++];) d(g, v, s, a);
                    if (n) {
                        if (p > 0) for (; f--;) g[f] || v[f] || (v[f] = K.call(l));
                        v = m(v)
                    }
                    Z.apply(l, v),
                    h && !n && v.length > 0 && p + i.length > 1 && e.uniqueSort(l)
                }
                return h && (z = x, P = y),
                g
            };
            return r ? n(s) : s
        }
        var x, w, k, S, C, T, D, A, P, _, L, E, M, F, N, I, $, O, R, H = "sizzle" + 1 * new Date,
        B = t.document,
        z = 0,
        j = 0,
        W = i(),
        q = i(),
        Y = i(),
        X = function(t, e) {
            return t === e && (L = !0),
            0
        },
        V = 1 << 31,
        U = {}.hasOwnProperty,
        G = [],
        K = G.pop,
        Q = G.push,
        Z = G.push,
        J = G.slice,
        te = function(t, e) {
            for (var i = 0,
            n = t.length; n > i; i++) if (t[i] === e) return i;
            return - 1
        },
        ee = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        ie = "[\\x20\\t\\r\\n\\f]",
        ne = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        re = ne.replace("w", "w#"),
        oe = "\\[" + ie + "*(" + ne + ")(?:" + ie + "*([*^$|!~]?=)" + ie + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ie + "*\\]",
        se = ":(" + ne + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)",
        ae = new RegExp(ie + "+", "g"),
        le = new RegExp("^" + ie + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ie + "+$", "g"),
        he = new RegExp("^" + ie + "*," + ie + "*"),
        ce = new RegExp("^" + ie + "*([>+~]|" + ie + ")" + ie + "*"),
        ue = new RegExp("=" + ie + "*([^\\]'\"]*?)" + ie + "*\\]", "g"),
        de = new RegExp(se),
        pe = new RegExp("^" + re + "$"),
        fe = {
            ID: new RegExp("^#(" + ne + ")"),
            CLASS: new RegExp("^\\.(" + ne + ")"),
            TAG: new RegExp("^(" + ne.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + oe),
            PSEUDO: new RegExp("^" + se),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ie + "*(even|odd|(([+-]|)(\\d*)n|)" + ie + "*(?:([+-]|)" + ie + "*(\\d+)|))" + ie + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + ee + ")$", "i"),
            needsContext: new RegExp("^" + ie + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ie + "*((?:-\\d)?\\d*)" + ie + "*\\)|)(?=[^-]|$)", "i")
        },
        ge = /^(?:input|select|textarea|button)$/i,
        me = /^h\d$/i,
        ve = /^[^{]+\{\s*\[native \w/,
        ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        be = /[+~]/,
        xe = /'|\\/g,
        we = new RegExp("\\\\([\\da-f]{1,6}" + ie + "?|(" + ie + ")|.)", "ig"),
        ke = function(t, e, i) {
            var n = "0x" + e - 65536;
            return n !== n || i ? e: 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
        },
        Se = function() {
            E()
        };
        try {
            Z.apply(G = J.call(B.childNodes), B.childNodes),
            G[B.childNodes.length].nodeType
        } catch(Ce) {
            Z = {
                apply: G.length ?
                function(t, e) {
                    Q.apply(t, J.call(e))
                }: function(t, e) {
                    for (var i = t.length,
                    n = 0; t[i++] = e[n++];);
                    t.length = i - 1
                }
            }
        }
        w = e.support = {},
        C = e.isXML = function(t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return e ? "HTML" !== e.nodeName: !1
        },
        E = e.setDocument = function(t) {
            var e, i, n = t ? t.ownerDocument || t: B;
            return n !== M && 9 === n.nodeType && n.documentElement ? (M = n, F = n.documentElement, i = n.defaultView, i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", Se, !1) : i.attachEvent && i.attachEvent("onunload", Se)), N = !C(n), w.attributes = r(function(t) {
                return t.className = "i",
                !t.getAttribute("className")
            }), w.getElementsByTagName = r(function(t) {
                return t.appendChild(n.createComment("")),
                !t.getElementsByTagName("*").length
            }), w.getElementsByClassName = ve.test(n.getElementsByClassName), w.getById = r(function(t) {
                return F.appendChild(t).id = H,
                !n.getElementsByName || !n.getElementsByName(H).length
            }), w.getById ? (k.find.ID = function(t, e) {
                if ("undefined" != typeof e.getElementById && N) {
                    var i = e.getElementById(t);
                    return i && i.parentNode ? [i] : []
                }
            },
            k.filter.ID = function(t) {
                var e = t.replace(we, ke);
                return function(t) {
                    return t.getAttribute("id") === e
                }
            }) : (delete k.find.ID, k.filter.ID = function(t) {
                var e = t.replace(we, ke);
                return function(t) {
                    var i = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                    return i && i.value === e
                }
            }), k.find.TAG = w.getElementsByTagName ?
            function(t, e) {
                return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : w.qsa ? e.querySelectorAll(t) : void 0
            }: function(t, e) {
                var i, n = [],
                r = 0,
                o = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; i = o[r++];) 1 === i.nodeType && n.push(i);
                    return n
                }
                return o
            },
            k.find.CLASS = w.getElementsByClassName &&
            function(t, e) {
                return N ? e.getElementsByClassName(t) : void 0
            },
            $ = [], I = [], (w.qsa = ve.test(n.querySelectorAll)) && (r(function(t) {
                F.appendChild(t).innerHTML = "<a id='" + H + "'></a><select id='" + H + "-\f]' msallowcapture=''><option selected=''></option></select>",
                t.querySelectorAll("[msallowcapture^='']").length && I.push("[*^$]=" + ie + "*(?:''|\"\")"),
                t.querySelectorAll("[selected]").length || I.push("\\[" + ie + "*(?:value|" + ee + ")"),
                t.querySelectorAll("[id~=" + H + "-]").length || I.push("~="),
                t.querySelectorAll(":checked").length || I.push(":checked"),
                t.querySelectorAll("a#" + H + "+*").length || I.push(".#.+[+~]")
            }), r(function(t) {
                var e = n.createElement("input");
                e.setAttribute("type", "hidden"),
                t.appendChild(e).setAttribute("name", "D"),
                t.querySelectorAll("[name=d]").length && I.push("name" + ie + "*[*^$|!~]?="),
                t.querySelectorAll(":enabled").length || I.push(":enabled", ":disabled"),
                t.querySelectorAll("*,:x"),
                I.push(",.*:")
            })), (w.matchesSelector = ve.test(O = F.matches || F.webkitMatchesSelector || F.mozMatchesSelector || F.oMatchesSelector || F.msMatchesSelector)) && r(function(t) {
                w.disconnectedMatch = O.call(t, "div"),
                O.call(t, "[s!='']:x"),
                $.push("!=", se)
            }), I = I.length && new RegExp(I.join("|")), $ = $.length && new RegExp($.join("|")), e = ve.test(F.compareDocumentPosition), R = e || ve.test(F.contains) ?
            function(t, e) {
                var i = 9 === t.nodeType ? t.documentElement: t,
                n = e && e.parentNode;
                return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
            }: function(t, e) {
                if (e) for (; e = e.parentNode;) if (e === t) return ! 0;
                return ! 1
            },
            X = e ?
            function(t, e) {
                if (t === e) return L = !0,
                0;
                var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return i ? i: (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & i || !w.sortDetached && e.compareDocumentPosition(t) === i ? t === n || t.ownerDocument === B && R(B, t) ? -1 : e === n || e.ownerDocument === B && R(B, e) ? 1 : _ ? te(_, t) - te(_, e) : 0 : 4 & i ? -1 : 1)
            }: function(t, e) {
                if (t === e) return L = !0,
                0;
                var i, r = 0,
                o = t.parentNode,
                a = e.parentNode,
                l = [t],
                h = [e];
                if (!o || !a) return t === n ? -1 : e === n ? 1 : o ? -1 : a ? 1 : _ ? te(_, t) - te(_, e) : 0;
                if (o === a) return s(t, e);
                for (i = t; i = i.parentNode;) l.unshift(i);
                for (i = e; i = i.parentNode;) h.unshift(i);
                for (; l[r] === h[r];) r++;
                return r ? s(l[r], h[r]) : l[r] === B ? -1 : h[r] === B ? 1 : 0
            },
            n) : M
        },
        e.matches = function(t, i) {
            return e(t, null, null, i)
        },
        e.matchesSelector = function(t, i) {
            if ((t.ownerDocument || t) !== M && E(t), i = i.replace(ue, "='$1']"), !(!w.matchesSelector || !N || $ && $.test(i) || I && I.test(i))) try {
                var n = O.call(t, i);
                if (n || w.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
            } catch(r) {}
            return e(i, M, null, [t]).length > 0
        },
        e.contains = function(t, e) {
            return (t.ownerDocument || t) !== M && E(t),
            R(t, e)
        },
        e.attr = function(t, e) { (t.ownerDocument || t) !== M && E(t);
            var i = k.attrHandle[e.toLowerCase()],
            n = i && U.call(k.attrHandle, e.toLowerCase()) ? i(t, e, !N) : void 0;
            return void 0 !== n ? n: w.attributes || !N ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value: null
        },
        e.error = function(t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        },
        e.uniqueSort = function(t) {
            var e, i = [],
            n = 0,
            r = 0;
            if (L = !w.detectDuplicates, _ = !w.sortStable && t.slice(0), t.sort(X), L) {
                for (; e = t[r++];) e === t[r] && (n = i.push(r));
                for (; n--;) t.splice(i[n], 1)
            }
            return _ = null,
            t
        },
        S = e.getText = function(t) {
            var e, i = "",
            n = 0,
            r = t.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) i += S(t)
                } else if (3 === r || 4 === r) return t.nodeValue
            } else for (; e = t[n++];) i += S(e);
            return i
        },
        k = e.selectors = {
            cacheLength: 50,
            createPseudo: n,
            match: fe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(t) {
                    return t[1] = t[1].replace(we, ke),
                    t[3] = (t[3] || t[4] || t[5] || "").replace(we, ke),
                    "~=" === t[2] && (t[3] = " " + t[3] + " "),
                    t.slice(0, 4)
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(),
                    "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]),
                    t
                },
                PSEUDO: function(t) {
                    var e, i = !t[6] && t[2];
                    return fe.CHILD.test(t[0]) ? null: (t[3] ? t[2] = t[4] || t[5] || "": i && de.test(i) && (e = T(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function(t) {
                    var e = t.replace(we, ke).toLowerCase();
                    return "*" === t ?
                    function() {
                        return ! 0
                    }: function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function(t) {
                    var e = W[t + " "];
                    return e || (e = new RegExp("(^|" + ie + ")" + t + "(" + ie + "|$)")) && W(t,
                    function(t) {
                        return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                    })
                },
                ATTR: function(t, i, n) {
                    return function(r) {
                        var o = e.attr(r, t);
                        return null == o ? "!=" === i: i ? (o += "", "=" === i ? o === n: "!=" === i ? o !== n: "^=" === i ? n && 0 === o.indexOf(n) : "*=" === i ? n && o.indexOf(n) > -1 : "$=" === i ? n && o.slice( - n.length) === n: "~=" === i ? (" " + o.replace(ae, " ") + " ").indexOf(n) > -1 : "|=" === i ? o === n || o.slice(0, n.length + 1) === n + "-": !1) : !0
                    }
                },
                CHILD: function(t, e, i, n, r) {
                    var o = "nth" !== t.slice(0, 3),
                    s = "last" !== t.slice( - 4),
                    a = "of-type" === e;
                    return 1 === n && 0 === r ?
                    function(t) {
                        return !! t.parentNode
                    }: function(e, i, l) {
                        var h, c, u, d, p, f, g = o !== s ? "nextSibling": "previousSibling",
                        m = e.parentNode,
                        v = a && e.nodeName.toLowerCase(),
                        y = !l && !a;
                        if (m) {
                            if (o) {
                                for (; g;) {
                                    for (u = e; u = u[g];) if (a ? u.nodeName.toLowerCase() === v: 1 === u.nodeType) return ! 1;
                                    f = g = "only" === t && !f && "nextSibling"
                                }
                                return ! 0
                            }
                            if (f = [s ? m.firstChild: m.lastChild], s && y) {
                                for (c = m[H] || (m[H] = {}), h = c[t] || [], p = h[0] === z && h[1], d = h[0] === z && h[2], u = p && m.childNodes[p]; u = ++p && u && u[g] || (d = p = 0) || f.pop();) if (1 === u.nodeType && ++d && u === e) {
                                    c[t] = [z, p, d];
                                    break
                                }
                            } else if (y && (h = (e[H] || (e[H] = {}))[t]) && h[0] === z) d = h[1];
                            else for (; (u = ++p && u && u[g] || (d = p = 0) || f.pop()) && ((a ? u.nodeName.toLowerCase() !== v: 1 !== u.nodeType) || !++d || (y && ((u[H] || (u[H] = {}))[t] = [z, d]), u !== e)););
                            return d -= r,
                            d === n || d % n === 0 && d / n >= 0
                        }
                    }
                },
                PSEUDO: function(t, i) {
                    var r, o = k.pseudos[t] || k.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return o[H] ? o(i) : o.length > 1 ? (r = [t, t, "", i], k.setFilters.hasOwnProperty(t.toLowerCase()) ? n(function(t, e) {
                        for (var n, r = o(t, i), s = r.length; s--;) n = te(t, r[s]),
                        t[n] = !(e[n] = r[s])
                    }) : function(t) {
                        return o(t, 0, r)
                    }) : o
                }
            },
            pseudos: {
                not: n(function(t) {
                    var e = [],
                    i = [],
                    r = D(t.replace(le, "$1"));
                    return r[H] ? n(function(t, e, i, n) {
                        for (var o, s = r(t, null, n, []), a = t.length; a--;)(o = s[a]) && (t[a] = !(e[a] = o))
                    }) : function(t, n, o) {
                        return e[0] = t,
                        r(e, null, o, i),
                        e[0] = null,
                        !i.pop()
                    }
                }),
                has: n(function(t) {
                    return function(i) {
                        return e(t, i).length > 0
                    }
                }),
                contains: n(function(t) {
                    return t = t.replace(we, ke),
                    function(e) {
                        return (e.textContent || e.innerText || S(e)).indexOf(t) > -1
                    }
                }),
                lang: n(function(t) {
                    return pe.test(t || "") || e.error("unsupported lang: " + t),
                    t = t.replace(we, ke).toLowerCase(),
                    function(e) {
                        var i;
                        do
                        if (i = N ? e.lang: e.getAttribute("xml:lang") || e.getAttribute("lang")) return i = i.toLowerCase(),
                        i === t || 0 === i.indexOf(t + "-");
                        while ((e = e.parentNode) && 1 === e.nodeType);
                        return ! 1
                    }
                }),
                target: function(e) {
                    var i = t.location && t.location.hash;
                    return i && i.slice(1) === e.id
                },
                root: function(t) {
                    return t === F
                },
                focus: function(t) {
                    return t === M.activeElement && (!M.hasFocus || M.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                },
                enabled: function(t) {
                    return t.disabled === !1
                },
                disabled: function(t) {
                    return t.disabled === !0
                },
                checked: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                },
                selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex,
                    t.selected === !0
                },
                empty: function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeType < 6) return ! 1;
                    return ! 0
                },
                parent: function(t) {
                    return ! k.pseudos.empty(t)
                },
                header: function(t) {
                    return me.test(t.nodeName)
                },
                input: function(t) {
                    return ge.test(t.nodeName)
                },
                button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function(t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: h(function() {
                    return [0]
                }),
                last: h(function(t, e) {
                    return [e - 1]
                }),
                eq: h(function(t, e, i) {
                    return [0 > i ? i + e: i]
                }),
                even: h(function(t, e) {
                    for (var i = 0; e > i; i += 2) t.push(i);
                    return t
                }),
                odd: h(function(t, e) {
                    for (var i = 1; e > i; i += 2) t.push(i);
                    return t
                }),
                lt: h(function(t, e, i) {
                    for (var n = 0 > i ? i + e: i; --n >= 0;) t.push(n);
                    return t
                }),
                gt: h(function(t, e, i) {
                    for (var n = 0 > i ? i + e: i; ++n < e;) t.push(n);
                    return t
                })
            }
        },
        k.pseudos.nth = k.pseudos.eq;
        for (x in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) k.pseudos[x] = a(x);
        for (x in {
            submit: !0,
            reset: !0
        }) k.pseudos[x] = l(x);
        return u.prototype = k.filters = k.pseudos,
        k.setFilters = new u,
        T = e.tokenize = function(t, i) {
            var n, r, o, s, a, l, h, c = q[t + " "];
            if (c) return i ? 0 : c.slice(0);
            for (a = t, l = [], h = k.preFilter; a;) { (!n || (r = he.exec(a))) && (r && (a = a.slice(r[0].length) || a), l.push(o = [])),
                n = !1,
                (r = ce.exec(a)) && (n = r.shift(), o.push({
                    value: n,
                    type: r[0].replace(le, " ")
                }), a = a.slice(n.length));
                for (s in k.filter) ! (r = fe[s].exec(a)) || h[s] && !(r = h[s](r)) || (n = r.shift(), o.push({
                    value: n,
                    type: s,
                    matches: r
                }), a = a.slice(n.length));
                if (!n) break
            }
            return i ? a.length: a ? e.error(t) : q(t, l).slice(0)
        },
        D = e.compile = function(t, e) {
            var i, n = [],
            r = [],
            o = Y[t + " "];
            if (!o) {
                for (e || (e = T(t)), i = e.length; i--;) o = y(e[i]),
                o[H] ? n.push(o) : r.push(o);
                o = Y(t, b(r, n)),
                o.selector = t
            }
            return o
        },
        A = e.select = function(t, e, i, n) {
            var r, o, s, a, l, h = "function" == typeof t && t,
            u = !n && T(t = h.selector || t);
            if (i = i || [], 1 === u.length) {
                if (o = u[0] = u[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && w.getById && 9 === e.nodeType && N && k.relative[o[1].type]) {
                    if (e = (k.find.ID(s.matches[0].replace(we, ke), e) || [])[0], !e) return i;
                    h && (e = e.parentNode),
                    t = t.slice(o.shift().value.length)
                }
                for (r = fe.needsContext.test(t) ? 0 : o.length; r--&&(s = o[r], !k.relative[a = s.type]);) if ((l = k.find[a]) && (n = l(s.matches[0].replace(we, ke), be.test(o[0].type) && c(e.parentNode) || e))) {
                    if (o.splice(r, 1), t = n.length && d(o), !t) return Z.apply(i, n),
                    i;
                    break
                }
            }
            return (h || D(t, u))(n, e, !N, i, be.test(t) && c(e.parentNode) || e),
            i
        },
        w.sortStable = H.split("").sort(X).join("") === H,
        w.detectDuplicates = !!L,
        E(),
        w.sortDetached = r(function(t) {
            return 1 & t.compareDocumentPosition(M.createElement("div"))
        }),
        r(function(t) {
            return t.innerHTML = "<a href='#'></a>",
            "#" === t.firstChild.getAttribute("href")
        }) || o("type|href|height|width",
        function(t, e, i) {
            return i ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }),
        w.attributes && r(function(t) {
            return t.innerHTML = "<input/>",
            t.firstChild.setAttribute("value", ""),
            "" === t.firstChild.getAttribute("value")
        }) || o("value",
        function(t, e, i) {
            return i || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
        }),
        r(function(t) {
            return null == t.getAttribute("disabled")
        }) || o(ee,
        function(t, e, i) {
            var n;
            return i ? void 0 : t[e] === !0 ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value: null
        }),
        e
    } (t);
    re.find = he,
    re.expr = he.selectors,
    re.expr[":"] = re.expr.pseudos,
    re.unique = he.uniqueSort,
    re.text = he.getText,
    re.isXMLDoc = he.isXML,
    re.contains = he.contains;
    var ce = re.expr.match.needsContext,
    ue = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    de = /^.[^:#\[\.,]*$/;
    re.filter = function(t, e, i) {
        var n = e[0];
        return i && (t = ":not(" + t + ")"),
        1 === e.length && 1 === n.nodeType ? re.find.matchesSelector(n, t) ? [n] : [] : re.find.matches(t, re.grep(e,
        function(t) {
            return 1 === t.nodeType
        }))
    },
    re.fn.extend({
        find: function(t) {
            var e, i = [],
            n = this,
            r = n.length;
            if ("string" != typeof t) return this.pushStack(re(t).filter(function() {
                for (e = 0; r > e; e++) if (re.contains(n[e], this)) return ! 0
            }));
            for (e = 0; r > e; e++) re.find(t, n[e], i);
            return i = this.pushStack(r > 1 ? re.unique(i) : i),
            i.selector = this.selector ? this.selector + " " + t: t,
            i
        },
        filter: function(t) {
            return this.pushStack(n(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(n(this, t || [], !0))
        },
        is: function(t) {
            return !! n(this, "string" == typeof t && ce.test(t) ? re(t) : t || [], !1).length
        }
    });
    var pe, fe = t.document,
    ge = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    me = re.fn.init = function(t, e) {
        var i, n;
        if (!t) return this;
        if ("string" == typeof t) {
            if (i = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : ge.exec(t), !i || !i[1] && e) return ! e || e.jquery ? (e || pe).find(t) : this.constructor(e).find(t);
            if (i[1]) {
                if (e = e instanceof re ? e[0] : e, re.merge(this, re.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e: fe, !0)), ue.test(i[1]) && re.isPlainObject(e)) for (i in e) re.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                return this
            }
            if (n = fe.getElementById(i[2]), n && n.parentNode) {
                if (n.id !== i[2]) return pe.find(t);
                this.length = 1,
                this[0] = n
            }
            return this.context = fe,
            this.selector = t,
            this
        }
        return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : re.isFunction(t) ? "undefined" != typeof pe.ready ? pe.ready(t) : t(re) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), re.makeArray(t, this))
    };
    me.prototype = re.fn,
    pe = re(fe);
    var ve = /^(?:parents|prev(?:Until|All))/,
    ye = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    re.extend({
        dir: function(t, e, i) {
            for (var n = [], r = t[e]; r && 9 !== r.nodeType && (void 0 === i || 1 !== r.nodeType || !re(r).is(i));) 1 === r.nodeType && n.push(r),
            r = r[e];
            return n
        },
        sibling: function(t, e) {
            for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
            return i
        }
    }),
    re.fn.extend({
        has: function(t) {
            var e, i = re(t, this),
            n = i.length;
            return this.filter(function() {
                for (e = 0; n > e; e++) if (re.contains(this, i[e])) return ! 0
            })
        },
        closest: function(t, e) {
            for (var i, n = 0,
            r = this.length,
            o = [], s = ce.test(t) || "string" != typeof t ? re(t, e || this.context) : 0; r > n; n++) for (i = this[n]; i && i !== e; i = i.parentNode) if (i.nodeType < 11 && (s ? s.index(i) > -1 : 1 === i.nodeType && re.find.matchesSelector(i, t))) {
                o.push(i);
                break
            }
            return this.pushStack(o.length > 1 ? re.unique(o) : o)
        },
        index: function(t) {
            return t ? "string" == typeof t ? re.inArray(this[0], re(t)) : re.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length: -1
        },
        add: function(t, e) {
            return this.pushStack(re.unique(re.merge(this.get(), re(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject: this.prevObject.filter(t))
        }
    }),
    re.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e: null
        },
        parents: function(t) {
            return re.dir(t, "parentNode")
        },
        parentsUntil: function(t, e, i) {
            return re.dir(t, "parentNode", i)
        },
        next: function(t) {
            return r(t, "nextSibling")
        },
        prev: function(t) {
            return r(t, "previousSibling")
        },
        nextAll: function(t) {
            return re.dir(t, "nextSibling")
        },
        prevAll: function(t) {
            return re.dir(t, "previousSibling")
        },
        nextUntil: function(t, e, i) {
            return re.dir(t, "nextSibling", i)
        },
        prevUntil: function(t, e, i) {
            return re.dir(t, "previousSibling", i)
        },
        siblings: function(t) {
            return re.sibling((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return re.sibling(t.firstChild)
        },
        contents: function(t) {
            return re.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document: re.merge([], t.childNodes)
        }
    },
    function(t, e) {
        re.fn[t] = function(i, n) {
            var r = re.map(this, e, i);
            return "Until" !== t.slice( - 5) && (n = i),
            n && "string" == typeof n && (r = re.filter(n, r)),
            this.length > 1 && (ye[t] || (r = re.unique(r)), ve.test(t) && (r = r.reverse())),
            this.pushStack(r)
        }
    });
    var be = /\S+/g,
    xe = {};
    re.Callbacks = function(t) {
        t = "string" == typeof t ? xe[t] || o(t) : re.extend({},
        t);
        var e, i, n, r, s, a, l = [],
        h = !t.once && [],
        c = function(o) {
            for (i = t.memory && o, n = !0, s = a || 0, a = 0, r = l.length, e = !0; l && r > s; s++) if (l[s].apply(o[0], o[1]) === !1 && t.stopOnFalse) {
                i = !1;
                break
            }
            e = !1,
            l && (h ? h.length && c(h.shift()) : i ? l = [] : u.disable())
        },
        u = {
            add: function() {
                if (l) {
                    var n = l.length; !
                    function o(e) {
                        re.each(e,
                        function(e, i) {
                            var n = re.type(i);
                            "function" === n ? t.unique && u.has(i) || l.push(i) : i && i.length && "string" !== n && o(i)
                        })
                    } (arguments),
                    e ? r = l.length: i && (a = n, c(i))
                }
                return this
            },
            remove: function() {
                return l && re.each(arguments,
                function(t, i) {
                    for (var n; (n = re.inArray(i, l, n)) > -1;) l.splice(n, 1),
                    e && (r >= n && r--, s >= n && s--)
                }),
                this
            },
            has: function(t) {
                return t ? re.inArray(t, l) > -1 : !(!l || !l.length)
            },
            empty: function() {
                return l = [],
                r = 0,
                this
            },
            disable: function() {
                return l = h = i = void 0,
                this
            },
            disabled: function() {
                return ! l
            },
            lock: function() {
                return h = void 0,
                i || u.disable(),
                this
            },
            locked: function() {
                return ! h
            },
            fireWith: function(t, i) {
                return ! l || n && !h || (i = i || [], i = [t, i.slice ? i.slice() : i], e ? h.push(i) : c(i)),
                this
            },
            fire: function() {
                return u.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !! n
            }
        };
        return u
    },
    re.extend({
        Deferred: function(t) {
            var e = [["resolve", "done", re.Callbacks("once memory"), "resolved"], ["reject", "fail", re.Callbacks("once memory"), "rejected"], ["notify", "progress", re.Callbacks("memory")]],
            i = "pending",
            n = {
                state: function() {
                    return i
                },
                always: function() {
                    return r.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var t = arguments;
                    return re.Deferred(function(i) {
                        re.each(e,
                        function(e, o) {
                            var s = re.isFunction(t[e]) && t[e];
                            r[o[1]](function() {
                                var t = s && s.apply(this, arguments);
                                t && re.isFunction(t.promise) ? t.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[o[0] + "With"](this === n ? i.promise() : this, s ? [t] : arguments)
                            })
                        }),
                        t = null
                    }).promise()
                },
                promise: function(t) {
                    return null != t ? re.extend(t, n) : n
                }
            },
            r = {};
            return n.pipe = n.then,
            re.each(e,
            function(t, o) {
                var s = o[2],
                a = o[3];
                n[o[1]] = s.add,
                a && s.add(function() {
                    i = a
                },
                e[1 ^ t][2].disable, e[2][2].lock),
                r[o[0]] = function() {
                    return r[o[0] + "With"](this === r ? n: this, arguments),
                    this
                },
                r[o[0] + "With"] = s.fireWith
            }),
            n.promise(r),
            t && t.call(r, r),
            r
        },
        when: function(t) {
            var e, i, n, r = 0,
            o = G.call(arguments),
            s = o.length,
            a = 1 !== s || t && re.isFunction(t.promise) ? s: 0,
            l = 1 === a ? t: re.Deferred(),
            h = function(t, i, n) {
                return function(r) {
                    i[t] = this,
                    n[t] = arguments.length > 1 ? G.call(arguments) : r,
                    n === e ? l.notifyWith(i, n) : --a || l.resolveWith(i, n)
                }
            };
            if (s > 1) for (e = new Array(s), i = new Array(s), n = new Array(s); s > r; r++) o[r] && re.isFunction(o[r].promise) ? o[r].promise().done(h(r, n, o)).fail(l.reject).progress(h(r, i, e)) : --a;
            return a || l.resolveWith(n, o),
            l.promise()
        }
    });
    var we;
    re.fn.ready = function(t) {
        return re.ready.promise().done(t),
        this
    },
    re.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? re.readyWait++:re.ready(!0)
        },
        ready: function(t) {
            if (t === !0 ? !--re.readyWait: !re.isReady) {
                if (!fe.body) return setTimeout(re.ready);
                re.isReady = !0,
                t !== !0 && --re.readyWait > 0 || (we.resolveWith(fe, [re]), re.fn.triggerHandler && (re(fe).triggerHandler("ready"), re(fe).off("ready")))
            }
        }
    }),
    re.ready.promise = function(e) {
        if (!we) if (we = re.Deferred(), "complete" === fe.readyState) setTimeout(re.ready);
        else if (fe.addEventListener) fe.addEventListener("DOMContentLoaded", a, !1),
        t.addEventListener("load", a, !1);
        else {
            fe.attachEvent("onreadystatechange", a),
            t.attachEvent("onload", a);
            var i = !1;
            try {
                i = null == t.frameElement && fe.documentElement
            } catch(n) {}
            i && i.doScroll && !
            function r() {
                if (!re.isReady) {
                    try {
                        i.doScroll("left")
                    } catch(t) {
                        return setTimeout(r, 50)
                    }
                    s(),
                    re.ready()
                }
            } ()
        }
        return we.promise(e)
    };
    var ke, Se = "undefined";
    for (ke in re(ie)) break;
    ie.ownLast = "0" !== ke,
    ie.inlineBlockNeedsLayout = !1,
    re(function() {
        var t, e, i, n;
        i = fe.getElementsByTagName("body")[0],
        i && i.style && (e = fe.createElement("div"), n = fe.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(e), typeof e.style.zoom !== Se && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ie.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (i.style.zoom = 1)), i.removeChild(n))
    }),
    function() {
        var t = fe.createElement("div");
        if (null == ie.deleteExpando) {
            ie.deleteExpando = !0;
            try {
                delete t.test
            } catch(e) {
                ie.deleteExpando = !1
            }
        }
        t = null
    } (),
    re.acceptData = function(t) {
        var e = re.noData[(t.nodeName + " ").toLowerCase()],
        i = +t.nodeType || 1;
        return 1 !== i && 9 !== i ? !1 : !e || e !== !0 && t.getAttribute("classid") === e
    };
    var Ce = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    Te = /([A-Z])/g;
    re.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(t) {
            return t = t.nodeType ? re.cache[t[re.expando]] : t[re.expando],
            !!t && !h(t)
        },
        data: function(t, e, i) {
            return c(t, e, i)
        },
        removeData: function(t, e) {
            return u(t, e)
        },
        _data: function(t, e, i) {
            return c(t, e, i, !0)
        },
        _removeData: function(t, e) {
            return u(t, e, !0)
        }
    }),
    re.fn.extend({
        data: function(t, e) {
            var i, n, r, o = this[0],
            s = o && o.attributes;
            if (void 0 === t) {
                if (this.length && (r = re.data(o), 1 === o.nodeType && !re._data(o, "parsedAttrs"))) {
                    for (i = s.length; i--;) s[i] && (n = s[i].name, 0 === n.indexOf("data-") && (n = re.camelCase(n.slice(5)), l(o, n, r[n])));
                    re._data(o, "parsedAttrs", !0)
                }
                return r
            }
            return "object" == typeof t ? this.each(function() {
                re.data(this, t)
            }) : arguments.length > 1 ? this.each(function() {
                re.data(this, t, e)
            }) : o ? l(o, t, re.data(o, t)) : void 0
        },
        removeData: function(t) {
            return this.each(function() {
                re.removeData(this, t)
            })
        }
    }),
    re.extend({
        queue: function(t, e, i) {
            var n;
            return t ? (e = (e || "fx") + "queue", n = re._data(t, e), i && (!n || re.isArray(i) ? n = re._data(t, e, re.makeArray(i)) : n.push(i)), n || []) : void 0
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var i = re.queue(t, e),
            n = i.length,
            r = i.shift(),
            o = re._queueHooks(t, e),
            s = function() {
                re.dequeue(t, e)
            };
            "inprogress" === r && (r = i.shift(), n--),
            r && ("fx" === e && i.unshift("inprogress"), delete o.stop, r.call(t, s, o)),
            !n && o && o.empty.fire()
        },
        _queueHooks: function(t, e) {
            var i = e + "queueHooks";
            return re._data(t, i) || re._data(t, i, {
                empty: re.Callbacks("once memory").add(function() {
                    re._removeData(t, e + "queue"),
                    re._removeData(t, i)
                })
            })
        }
    }),
    re.fn.extend({
        queue: function(t, e) {
            var i = 2;
            return "string" != typeof t && (e = t, t = "fx", i--),
            arguments.length < i ? re.queue(this[0], t) : void 0 === e ? this: this.each(function() {
                var i = re.queue(this, t, e);
                re._queueHooks(this, t),
                "fx" === t && "inprogress" !== i[0] && re.dequeue(this, t)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                re.dequeue(this, t)
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            var i, n = 1,
            r = re.Deferred(),
            o = this,
            s = this.length,
            a = function() {--n || r.resolveWith(o, [o])
            };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;) i = re._data(o[s], t + "queueHooks"),
            i && i.empty && (n++, i.empty.add(a));
            return a(),
            r.promise(e)
        }
    });
    var De = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    Ae = ["Top", "Right", "Bottom", "Left"],
    Pe = function(t, e) {
        return t = e || t,
        "none" === re.css(t, "display") || !re.contains(t.ownerDocument, t)
    },
    _e = re.access = function(t, e, i, n, r, o, s) {
        var a = 0,
        l = t.length,
        h = null == i;
        if ("object" === re.type(i)) {
            r = !0;
            for (a in i) re.access(t, e, a, i[a], !0, o, s)
        } else if (void 0 !== n && (r = !0, re.isFunction(n) || (s = !0), h && (s ? (e.call(t, n), e = null) : (h = e, e = function(t, e, i) {
            return h.call(re(t), i)
        })), e)) for (; l > a; a++) e(t[a], i, s ? n: n.call(t[a], a, e(t[a], i)));
        return r ? t: h ? e.call(t) : l ? e(t[0], i) : o
    },
    Le = /^(?:checkbox|radio)$/i; !
    function() {
        var t = fe.createElement("input"),
        e = fe.createElement("div"),
        i = fe.createDocumentFragment();
        if (e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ie.leadingWhitespace = 3 === e.firstChild.nodeType, ie.tbody = !e.getElementsByTagName("tbody").length, ie.htmlSerialize = !!e.getElementsByTagName("link").length, ie.html5Clone = "<:nav></:nav>" !== fe.createElement("nav").cloneNode(!0).outerHTML, t.type = "checkbox", t.checked = !0, i.appendChild(t), ie.appendChecked = t.checked, e.innerHTML = "<textarea>x</textarea>", ie.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, i.appendChild(e), e.innerHTML = "<input type='radio' checked='checked' name='t'/>", ie.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, ie.noCloneEvent = !0, e.attachEvent && (e.attachEvent("onclick",
        function() {
            ie.noCloneEvent = !1
        }), e.cloneNode(!0).click()), null == ie.deleteExpando) {
            ie.deleteExpando = !0;
            try {
                delete e.test
            } catch(n) {
                ie.deleteExpando = !1
            }
        }
    } (),
    function() {
        var e, i, n = fe.createElement("div");
        for (e in {
            submit: !0,
            change: !0,
            focusin: !0
        }) i = "on" + e,
        (ie[e + "Bubbles"] = i in t) || (n.setAttribute(i, "t"), ie[e + "Bubbles"] = n.attributes[i].expando === !1);
        n = null
    } ();
    var Ee = /^(?:input|select|textarea)$/i,
    Me = /^key/,
    Fe = /^(?:mouse|pointer|contextmenu)|click/,
    Ne = /^(?:focusinfocus|focusoutblur)$/,
    Ie = /^([^.]*)(?:\.(.+)|)$/;
    re.event = {
        global: {},
        add: function(t, e, i, n, r) {
            var o, s, a, l, h, c, u, d, p, f, g, m = re._data(t);
            if (m) {
                for (i.handler && (l = i, i = l.handler, r = l.selector), i.guid || (i.guid = re.guid++), (s = m.events) || (s = m.events = {}), (c = m.handle) || (c = m.handle = function(t) {
                    return typeof re === Se || t && re.event.triggered === t.type ? void 0 : re.event.dispatch.apply(c.elem, arguments)
                },
                c.elem = t), e = (e || "").match(be) || [""], a = e.length; a--;) o = Ie.exec(e[a]) || [],
                p = g = o[1],
                f = (o[2] || "").split(".").sort(),
                p && (h = re.event.special[p] || {},
                p = (r ? h.delegateType: h.bindType) || p, h = re.event.special[p] || {},
                u = re.extend({
                    type: p,
                    origType: g,
                    data: n,
                    handler: i,
                    guid: i.guid,
                    selector: r,
                    needsContext: r && re.expr.match.needsContext.test(r),
                    namespace: f.join(".")
                },
                l), (d = s[p]) || (d = s[p] = [], d.delegateCount = 0, h.setup && h.setup.call(t, n, f, c) !== !1 || (t.addEventListener ? t.addEventListener(p, c, !1) : t.attachEvent && t.attachEvent("on" + p, c))), h.add && (h.add.call(t, u), u.handler.guid || (u.handler.guid = i.guid)), r ? d.splice(d.delegateCount++, 0, u) : d.push(u), re.event.global[p] = !0);
                t = null
            }
        },
        remove: function(t, e, i, n, r) {
            var o, s, a, l, h, c, u, d, p, f, g, m = re.hasData(t) && re._data(t);
            if (m && (c = m.events)) {
                for (e = (e || "").match(be) || [""], h = e.length; h--;) if (a = Ie.exec(e[h]) || [], p = g = a[1], f = (a[2] || "").split(".").sort(), p) {
                    for (u = re.event.special[p] || {},
                    p = (n ? u.delegateType: u.bindType) || p, d = c[p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = d.length; o--;) s = d[o],
                    !r && g !== s.origType || i && i.guid !== s.guid || a && !a.test(s.namespace) || n && n !== s.selector && ("**" !== n || !s.selector) || (d.splice(o, 1), s.selector && d.delegateCount--, u.remove && u.remove.call(t, s));
                    l && !d.length && (u.teardown && u.teardown.call(t, f, m.handle) !== !1 || re.removeEvent(t, p, m.handle), delete c[p])
                } else for (p in c) re.event.remove(t, p + e[h], i, n, !0);
                re.isEmptyObject(c) && (delete m.handle, re._removeData(t, "events"))
            }
        },
        trigger: function(e, i, n, r) {
            var o, s, a, l, h, c, u, d = [n || fe],
            p = ee.call(e, "type") ? e.type: e,
            f = ee.call(e, "namespace") ? e.namespace.split(".") : [];
            if (a = c = n = n || fe, 3 !== n.nodeType && 8 !== n.nodeType && !Ne.test(p + re.event.triggered) && (p.indexOf(".") >= 0 && (f = p.split("."), p = f.shift(), f.sort()), s = p.indexOf(":") < 0 && "on" + p, e = e[re.expando] ? e: new re.Event(p, "object" == typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = f.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), i = null == i ? [e] : re.makeArray(i, [e]), h = re.event.special[p] || {},
            r || !h.trigger || h.trigger.apply(n, i) !== !1)) {
                if (!r && !h.noBubble && !re.isWindow(n)) {
                    for (l = h.delegateType || p, Ne.test(l + p) || (a = a.parentNode); a; a = a.parentNode) d.push(a),
                    c = a;
                    c === (n.ownerDocument || fe) && d.push(c.defaultView || c.parentWindow || t)
                }
                for (u = 0; (a = d[u++]) && !e.isPropagationStopped();) e.type = u > 1 ? l: h.bindType || p,
                o = (re._data(a, "events") || {})[e.type] && re._data(a, "handle"),
                o && o.apply(a, i),
                o = s && a[s],
                o && o.apply && re.acceptData(a) && (e.result = o.apply(a, i), e.result === !1 && e.preventDefault());
                if (e.type = p, !r && !e.isDefaultPrevented() && (!h._default || h._default.apply(d.pop(), i) === !1) && re.acceptData(n) && s && n[p] && !re.isWindow(n)) {
                    c = n[s],
                    c && (n[s] = null),
                    re.event.triggered = p;
                    try {
                        n[p]()
                    } catch(g) {}
                    re.event.triggered = void 0,
                    c && (n[s] = c)
                }
                return e.result
            }
        },
        dispatch: function(t) {
            t = re.event.fix(t);
            var e, i, n, r, o, s = [],
            a = G.call(arguments),
            l = (re._data(this, "events") || {})[t.type] || [],
            h = re.event.special[t.type] || {};
            if (a[0] = t, t.delegateTarget = this, !h.preDispatch || h.preDispatch.call(this, t) !== !1) {
                for (s = re.event.handlers.call(this, t, l), e = 0; (r = s[e++]) && !t.isPropagationStopped();) for (t.currentTarget = r.elem, o = 0; (n = r.handlers[o++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(n.namespace)) && (t.handleObj = n, t.data = n.data, i = ((re.event.special[n.origType] || {}).handle || n.handler).apply(r.elem, a), void 0 !== i && (t.result = i) === !1 && (t.preventDefault(), t.stopPropagation()));
                return h.postDispatch && h.postDispatch.call(this, t),
                t.result
            }
        },
        handlers: function(t, e) {
            var i, n, r, o, s = [],
            a = e.delegateCount,
            l = t.target;
            if (a && l.nodeType && (!t.button || "click" !== t.type)) for (; l != this; l = l.parentNode || this) if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
                for (r = [], o = 0; a > o; o++) n = e[o],
                i = n.selector + " ",
                void 0 === r[i] && (r[i] = n.needsContext ? re(i, this).index(l) >= 0 : re.find(i, this, null, [l]).length),
                r[i] && r.push(n);
                r.length && s.push({
                    elem: l,
                    handlers: r
                })
            }
            return a < e.length && s.push({
                elem: this,
                handlers: e.slice(a)
            }),
            s
        },
        fix: function(t) {
            if (t[re.expando]) return t;
            var e, i, n, r = t.type,
            o = t,
            s = this.fixHooks[r];
            for (s || (this.fixHooks[r] = s = Fe.test(r) ? this.mouseHooks: Me.test(r) ? this.keyHooks: {}), n = s.props ? this.props.concat(s.props) : this.props, t = new re.Event(o), e = n.length; e--;) i = n[e],
            t[i] = o[i];
            return t.target || (t.target = o.srcElement || fe),
            3 === t.target.nodeType && (t.target = t.target.parentNode),
            t.metaKey = !!t.metaKey,
            s.filter ? s.filter(t, o) : t
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode: e.keyCode),
                t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(t, e) {
                var i, n, r, o = e.button,
                s = e.fromElement;
                return null == t.pageX && null != e.clientX && (n = t.target.ownerDocument || fe, r = n.documentElement, i = n.body, t.pageX = e.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), t.pageY = e.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)),
                !t.relatedTarget && s && (t.relatedTarget = s === t.target ? e.toElement: s),
                t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
                t
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== f() && this.focus) try {
                        return this.focus(),
                        !1
                    } catch(t) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === f() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return re.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(t) {
                    return re.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        },
        simulate: function(t, e, i, n) {
            var r = re.extend(new re.Event, i, {
                type: t,
                isSimulated: !0,
                originalEvent: {}
            });
            n ? re.event.trigger(r, null, e) : re.event.dispatch.call(e, r),
            r.isDefaultPrevented() && i.preventDefault()
        }
    },
    re.removeEvent = fe.removeEventListener ?
    function(t, e, i) {
        t.removeEventListener && t.removeEventListener(e, i, !1)
    }: function(t, e, i) {
        var n = "on" + e;
        t.detachEvent && (typeof t[n] === Se && (t[n] = null), t.detachEvent(n, i))
    },
    re.Event = function(t, e) {
        return this instanceof re.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? d: p) : this.type = t, e && re.extend(this, e), this.timeStamp = t && t.timeStamp || re.now(), void(this[re.expando] = !0)) : new re.Event(t, e)
    },
    re.Event.prototype = {
        isDefaultPrevented: p,
        isPropagationStopped: p,
        isImmediatePropagationStopped: p,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = d,
            t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = d,
            t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = d,
            t && t.stopImmediatePropagation && t.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    re.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    },
    function(t, e) {
        re.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var i, n = this,
                r = t.relatedTarget,
                o = t.handleObj;
                return (!r || r !== n && !re.contains(n, r)) && (t.type = o.origType, i = o.handler.apply(this, arguments), t.type = e),
                i
            }
        }
    }),
    ie.submitBubbles || (re.event.special.submit = {
        setup: function() {
            return re.nodeName(this, "form") ? !1 : void re.event.add(this, "click._submit keypress._submit",
            function(t) {
                var e = t.target,
                i = re.nodeName(e, "input") || re.nodeName(e, "button") ? e.form: void 0;
                i && !re._data(i, "submitBubbles") && (re.event.add(i, "submit._submit",
                function(t) {
                    t._submit_bubble = !0
                }), re._data(i, "submitBubbles", !0))
            })
        },
        postDispatch: function(t) {
            t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && re.event.simulate("submit", this.parentNode, t, !0))
        },
        teardown: function() {
            return re.nodeName(this, "form") ? !1 : void re.event.remove(this, "._submit")
        }
    }),
    ie.changeBubbles || (re.event.special.change = {
        setup: function() {
            return Ee.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (re.event.add(this, "propertychange._change",
            function(t) {
                "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
            }), re.event.add(this, "click._change",
            function(t) {
                this._just_changed && !t.isTrigger && (this._just_changed = !1),
                re.event.simulate("change", this, t, !0)
            })), !1) : void re.event.add(this, "beforeactivate._change",
            function(t) {
                var e = t.target;
                Ee.test(e.nodeName) && !re._data(e, "changeBubbles") && (re.event.add(e, "change._change",
                function(t) { ! this.parentNode || t.isSimulated || t.isTrigger || re.event.simulate("change", this.parentNode, t, !0)
                }), re._data(e, "changeBubbles", !0))
            })
        },
        handle: function(t) {
            var e = t.target;
            return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return re.event.remove(this, "._change"),
            !Ee.test(this.nodeName)
        }
    }),
    ie.focusinBubbles || re.each({
        focus: "focusin",
        blur: "focusout"
    },
    function(t, e) {
        var i = function(t) {
            re.event.simulate(e, t.target, re.event.fix(t), !0)
        };
        re.event.special[e] = {
            setup: function() {
                var n = this.ownerDocument || this,
                r = re._data(n, e);
                r || n.addEventListener(t, i, !0),
                re._data(n, e, (r || 0) + 1)
            },
            teardown: function() {
                var n = this.ownerDocument || this,
                r = re._data(n, e) - 1;
                r ? re._data(n, e, r) : (n.removeEventListener(t, i, !0), re._removeData(n, e))
            }
        }
    }),
    re.fn.extend({
        on: function(t, e, i, n, r) {
            var o, s;
            if ("object" == typeof t) {
                "string" != typeof e && (i = i || e, e = void 0);
                for (o in t) this.on(o, e, i, t[o], r);
                return this
            }
            if (null == i && null == n ? (n = e, i = e = void 0) : null == n && ("string" == typeof e ? (n = i, i = void 0) : (n = i, i = e, e = void 0)), n === !1) n = p;
            else if (!n) return this;
            return 1 === r && (s = n, n = function(t) {
                return re().off(t),
                s.apply(this, arguments)
            },
            n.guid = s.guid || (s.guid = re.guid++)),
            this.each(function() {
                re.event.add(this, t, n, i, e)
            })
        },
        one: function(t, e, i, n) {
            return this.on(t, e, i, n, 1)
        },
        off: function(t, e, i) {
            var n, r;
            if (t && t.preventDefault && t.handleObj) return n = t.handleObj,
            re(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace: n.origType, n.selector, n.handler),
            this;
            if ("object" == typeof t) {
                for (r in t) this.off(r, e, t[r]);
                return this
            }
            return (e === !1 || "function" == typeof e) && (i = e, e = void 0),
            i === !1 && (i = p),
            this.each(function() {
                re.event.remove(this, t, i, e)
            })
        },
        trigger: function(t, e) {
            return this.each(function() {
                re.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var i = this[0];
            return i ? re.event.trigger(t, e, i, !0) : void 0
        }
    });
    var $e = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    Oe = / jQuery\d+="(?:null|\d+)"/g,
    Re = new RegExp("<(?:" + $e + ")[\\s/>]", "i"),
    He = /^\s+/,
    Be = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    ze = /<([\w:]+)/,
    je = /<tbody/i,
    We = /<|&#?\w+;/,
    qe = /<(?:script|style|link)/i,
    Ye = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Xe = /^$|\/(?:java|ecma)script/i,
    Ve = /^true\/(.*)/,
    Ue = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    Ge = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: ie.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    },
    Ke = g(fe),
    Qe = Ke.appendChild(fe.createElement("div"));
    Ge.optgroup = Ge.option,
    Ge.tbody = Ge.tfoot = Ge.colgroup = Ge.caption = Ge.thead,
    Ge.th = Ge.td,
    re.extend({
        clone: function(t, e, i) {
            var n, r, o, s, a, l = re.contains(t.ownerDocument, t);
            if (ie.html5Clone || re.isXMLDoc(t) || !Re.test("<" + t.nodeName + ">") ? o = t.cloneNode(!0) : (Qe.innerHTML = t.outerHTML, Qe.removeChild(o = Qe.firstChild)), !(ie.noCloneEvent && ie.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || re.isXMLDoc(t))) for (n = m(o), a = m(t), s = 0; null != (r = a[s]); ++s) n[s] && S(r, n[s]);
            if (e) if (i) for (a = a || m(t), n = n || m(o), s = 0; null != (r = a[s]); s++) k(r, n[s]);
            else k(t, o);
            return n = m(o, "script"),
            n.length > 0 && w(n, !l && m(t, "script")),
            n = a = r = null,
            o
        },
        buildFragment: function(t, e, i, n) {
            for (var r, o, s, a, l, h, c, u = t.length,
            d = g(e), p = [], f = 0; u > f; f++) if (o = t[f], o || 0 === o) if ("object" === re.type(o)) re.merge(p, o.nodeType ? [o] : o);
            else if (We.test(o)) {
                for (a = a || d.appendChild(e.createElement("div")), l = (ze.exec(o) || ["", ""])[1].toLowerCase(), c = Ge[l] || Ge._default, a.innerHTML = c[1] + o.replace(Be, "<$1></$2>") + c[2], r = c[0]; r--;) a = a.lastChild;
                if (!ie.leadingWhitespace && He.test(o) && p.push(e.createTextNode(He.exec(o)[0])), !ie.tbody) for (o = "table" !== l || je.test(o) ? "<table>" !== c[1] || je.test(o) ? 0 : a: a.firstChild, r = o && o.childNodes.length; r--;) re.nodeName(h = o.childNodes[r], "tbody") && !h.childNodes.length && o.removeChild(h);
                for (re.merge(p, a.childNodes), a.textContent = ""; a.firstChild;) a.removeChild(a.firstChild);
                a = d.lastChild
            } else p.push(e.createTextNode(o));
            for (a && d.removeChild(a), ie.appendChecked || re.grep(m(p, "input"), v), f = 0; o = p[f++];) if ((!n || -1 === re.inArray(o, n)) && (s = re.contains(o.ownerDocument, o), a = m(d.appendChild(o), "script"), s && w(a), i)) for (r = 0; o = a[r++];) Xe.test(o.type || "") && i.push(o);
            return a = null,
            d
        },
        cleanData: function(t, e) {
            for (var i, n, r, o, s = 0,
            a = re.expando,
            l = re.cache,
            h = ie.deleteExpando,
            c = re.event.special; null != (i = t[s]); s++) if ((e || re.acceptData(i)) && (r = i[a], o = r && l[r])) {
                if (o.events) for (n in o.events) c[n] ? re.event.remove(i, n) : re.removeEvent(i, n, o.handle);
                l[r] && (delete l[r], h ? delete i[a] : typeof i.removeAttribute !== Se ? i.removeAttribute(a) : i[a] = null, U.push(r))
            }
        }
    }),
    re.fn.extend({
        text: function(t) {
            return _e(this,
            function(t) {
                return void 0 === t ? re.text(this) : this.empty().append((this[0] && this[0].ownerDocument || fe).createTextNode(t))
            },
            null, t, arguments.length)
        },
        append: function() {
            return this.domManip(arguments,
            function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = y(this, t);
                    e.appendChild(t)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments,
            function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = y(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments,
            function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return this.domManip(arguments,
            function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        remove: function(t, e) {
            for (var i, n = t ? re.filter(t, this) : this, r = 0; null != (i = n[r]); r++) e || 1 !== i.nodeType || re.cleanData(m(i)),
            i.parentNode && (e && re.contains(i.ownerDocument, i) && w(m(i, "script")), i.parentNode.removeChild(i));
            return this
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) {
                for (1 === t.nodeType && re.cleanData(m(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
                t.options && re.nodeName(t, "select") && (t.options.length = 0)
            }
            return this
        },
        clone: function(t, e) {
            return t = null == t ? !1 : t,
            e = null == e ? t: e,
            this.map(function() {
                return re.clone(this, t, e)
            })
        },
        html: function(t) {
            return _e(this,
            function(t) {
                var e = this[0] || {},
                i = 0,
                n = this.length;
                if (void 0 === t) return 1 === e.nodeType ? e.innerHTML.replace(Oe, "") : void 0;
                if (! ("string" != typeof t || qe.test(t) || !ie.htmlSerialize && Re.test(t) || !ie.leadingWhitespace && He.test(t) || Ge[(ze.exec(t) || ["", ""])[1].toLowerCase()])) {
                    t = t.replace(Be, "<$1></$2>");
                    try {
                        for (; n > i; i++) e = this[i] || {},
                        1 === e.nodeType && (re.cleanData(m(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch(r) {}
                }
                e && this.empty().append(t)
            },
            null, t, arguments.length)
        },
        replaceWith: function() {
            var t = arguments[0];
            return this.domManip(arguments,
            function(e) {
                t = this.parentNode,
                re.cleanData(m(this)),
                t && t.replaceChild(e, this)
            }),
            t && (t.length || t.nodeType) ? this: this.remove()
        },
        detach: function(t) {
            return this.remove(t, !0)
        },
        domManip: function(t, e) {
            t = K.apply([], t);
            var i, n, r, o, s, a, l = 0,
            h = this.length,
            c = this,
            u = h - 1,
            d = t[0],
            p = re.isFunction(d);
            if (p || h > 1 && "string" == typeof d && !ie.checkClone && Ye.test(d)) return this.each(function(i) {
                var n = c.eq(i);
                p && (t[0] = d.call(this, i, n.html())),
                n.domManip(t, e)
            });
            if (h && (a = re.buildFragment(t, this[0].ownerDocument, !1, this), i = a.firstChild, 1 === a.childNodes.length && (a = i), i)) {
                for (o = re.map(m(a, "script"), b), r = o.length; h > l; l++) n = a,
                l !== u && (n = re.clone(n, !0, !0), r && re.merge(o, m(n, "script"))),
                e.call(this[l], n, l);
                if (r) for (s = o[o.length - 1].ownerDocument, re.map(o, x), l = 0; r > l; l++) n = o[l],
                Xe.test(n.type || "") && !re._data(n, "globalEval") && re.contains(s, n) && (n.src ? re._evalUrl && re._evalUrl(n.src) : re.globalEval((n.text || n.textContent || n.innerHTML || "").replace(Ue, "")));
                a = i = null
            }
            return this
        }
    }),
    re.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    },
    function(t, e) {
        re.fn[t] = function(t) {
            for (var i, n = 0,
            r = [], o = re(t), s = o.length - 1; s >= n; n++) i = n === s ? this: this.clone(!0),
            re(o[n])[e](i),
            Q.apply(r, i.get());
            return this.pushStack(r)
        }
    });
    var Ze, Je = {}; !
    function() {
        var t;
        ie.shrinkWrapBlocks = function() {
            if (null != t) return t;
            t = !1;
            var e, i, n;
            return i = fe.getElementsByTagName("body")[0],
            i && i.style ? (e = fe.createElement("div"), n = fe.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(e), typeof e.style.zoom !== Se && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(fe.createElement("div")).style.width = "5px", t = 3 !== e.offsetWidth), i.removeChild(n), t) : void 0
        }
    } ();
    var ti, ei, ii = /^margin/,
    ni = new RegExp("^(" + De + ")(?!px)[a-z%]+$", "i"),
    ri = /^(top|right|bottom|left)$/;
    t.getComputedStyle ? (ti = function(e) {
        return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : t.getComputedStyle(e, null)
    },
    ei = function(t, e, i) {
        var n, r, o, s, a = t.style;
        return i = i || ti(t),
        s = i ? i.getPropertyValue(e) || i[e] : void 0,
        i && ("" !== s || re.contains(t.ownerDocument, t) || (s = re.style(t, e)), ni.test(s) && ii.test(e) && (n = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = i.width, a.width = n, a.minWidth = r, a.maxWidth = o)),
        void 0 === s ? s: s + ""
    }) : fe.documentElement.currentStyle && (ti = function(t) {
        return t.currentStyle
    },
    ei = function(t, e, i) {
        var n, r, o, s, a = t.style;
        return i = i || ti(t),
        s = i ? i[e] : void 0,
        null == s && a && a[e] && (s = a[e]),
        ni.test(s) && !ri.test(e) && (n = a.left, r = t.runtimeStyle, o = r && r.left, o && (r.left = t.currentStyle.left), a.left = "fontSize" === e ? "1em": s, s = a.pixelLeft + "px", a.left = n, o && (r.left = o)),
        void 0 === s ? s: s + "" || "auto"
    }),
    function() {
        function e() {
            var e, i, n, r;
            i = fe.getElementsByTagName("body")[0],
            i && i.style && (e = fe.createElement("div"), n = fe.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(e), e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o = s = !1, l = !0, t.getComputedStyle && (o = "1%" !== (t.getComputedStyle(e, null) || {}).top, s = "4px" === (t.getComputedStyle(e, null) || {
                width: "4px"
            }).width, r = e.appendChild(fe.createElement("div")), r.style.cssText = e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", r.style.marginRight = r.style.width = "0", e.style.width = "1px", l = !parseFloat((t.getComputedStyle(r, null) || {}).marginRight), e.removeChild(r)), e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", r = e.getElementsByTagName("td"), r[0].style.cssText = "margin:0;border:0;padding:0;display:none", a = 0 === r[0].offsetHeight, a && (r[0].style.display = "", r[1].style.display = "none", a = 0 === r[0].offsetHeight), i.removeChild(n))
        }
        var i, n, r, o, s, a, l;
        i = fe.createElement("div"),
        i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        r = i.getElementsByTagName("a")[0],
        n = r && r.style,
        n && (n.cssText = "float:left;opacity:.5", ie.opacity = "0.5" === n.opacity, ie.cssFloat = !!n.cssFloat, i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", ie.clearCloneStyle = "content-box" === i.style.backgroundClip, ie.boxSizing = "" === n.boxSizing || "" === n.MozBoxSizing || "" === n.WebkitBoxSizing, re.extend(ie, {
            reliableHiddenOffsets: function() {
                return null == a && e(),
                a
            },
            boxSizingReliable: function() {
                return null == s && e(),
                s
            },
            pixelPosition: function() {
                return null == o && e(),
                o
            },
            reliableMarginRight: function() {
                return null == l && e(),
                l
            }
        }))
    } (),
    re.swap = function(t, e, i, n) {
        var r, o, s = {};
        for (o in e) s[o] = t.style[o],
        t.style[o] = e[o];
        r = i.apply(t, n || []);
        for (o in e) t.style[o] = s[o];
        return r
    };
    var oi = /alpha\([^)]*\)/i,
    si = /opacity\s*=\s*([^)]*)/,
    ai = /^(none|table(?!-c[ea]).+)/,
    li = new RegExp("^(" + De + ")(.*)$", "i"),
    hi = new RegExp("^([+-])=(" + De + ")", "i"),
    ci = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    },
    ui = {
        letterSpacing: "0",
        fontWeight: "400"
    },
    di = ["Webkit", "O", "Moz", "ms"];
    re.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var i = ei(t, "opacity");
                        return "" === i ? "1": i
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": ie.cssFloat ? "cssFloat": "styleFloat"
        },
        style: function(t, e, i, n) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var r, o, s, a = re.camelCase(e),
                l = t.style;
                if (e = re.cssProps[a] || (re.cssProps[a] = A(l, a)), s = re.cssHooks[e] || re.cssHooks[a], void 0 === i) return s && "get" in s && void 0 !== (r = s.get(t, !1, n)) ? r: l[e];
                if (o = typeof i, "string" === o && (r = hi.exec(i)) && (i = (r[1] + 1) * r[2] + parseFloat(re.css(t, e)), o = "number"), null != i && i === i && ("number" !== o || re.cssNumber[a] || (i += "px"), ie.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(s && "set" in s && void 0 === (i = s.set(t, i, n))))) try {
                    l[e] = i
                } catch(h) {}
            }
        },
        css: function(t, e, i, n) {
            var r, o, s, a = re.camelCase(e);
            return e = re.cssProps[a] || (re.cssProps[a] = A(t.style, a)),
            s = re.cssHooks[e] || re.cssHooks[a],
            s && "get" in s && (o = s.get(t, !0, i)),
            void 0 === o && (o = ei(t, e, n)),
            "normal" === o && e in ui && (o = ui[e]),
            "" === i || i ? (r = parseFloat(o), i === !0 || re.isNumeric(r) ? r || 0 : o) : o
        }
    }),
    re.each(["height", "width"],
    function(t, e) {
        re.cssHooks[e] = {
            get: function(t, i, n) {
                return i ? ai.test(re.css(t, "display")) && 0 === t.offsetWidth ? re.swap(t, ci,
                function() {
                    return E(t, e, n)
                }) : E(t, e, n) : void 0
            },
            set: function(t, i, n) {
                var r = n && ti(t);
                return _(t, i, n ? L(t, e, n, ie.boxSizing && "border-box" === re.css(t, "boxSizing", !1, r), r) : 0)
            }
        }
    }),
    ie.opacity || (re.cssHooks.opacity = {
        get: function(t, e) {
            return si.test((e && t.currentStyle ? t.currentStyle.filter: t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "": e ? "1": ""
        },
        set: function(t, e) {
            var i = t.style,
            n = t.currentStyle,
            r = re.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")": "",
            o = n && n.filter || i.filter || "";
            i.zoom = 1,
            (e >= 1 || "" === e) && "" === re.trim(o.replace(oi, "")) && i.removeAttribute && (i.removeAttribute("filter"), "" === e || n && !n.filter) || (i.filter = oi.test(o) ? o.replace(oi, r) : o + " " + r)
        }
    }),
    re.cssHooks.marginRight = D(ie.reliableMarginRight,
    function(t, e) {
        return e ? re.swap(t, {
            display: "inline-block"
        },
        ei, [t, "marginRight"]) : void 0
    }),
    re.each({
        margin: "",
        padding: "",
        border: "Width"
    },
    function(t, e) {
        re.cssHooks[t + e] = {
            expand: function(i) {
                for (var n = 0,
                r = {},
                o = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++) r[t + Ae[n] + e] = o[n] || o[n - 2] || o[0];
                return r
            }
        },
        ii.test(t) || (re.cssHooks[t + e].set = _)
    }),
    re.fn.extend({
        css: function(t, e) {
            return _e(this,
            function(t, e, i) {
                var n, r, o = {},
                s = 0;
                if (re.isArray(e)) {
                    for (n = ti(t), r = e.length; r > s; s++) o[e[s]] = re.css(t, e[s], !1, n);
                    return o
                }
                return void 0 !== i ? re.style(t, e, i) : re.css(t, e)
            },
            t, e, arguments.length > 1)
        },
        show: function() {
            return P(this, !0)
        },
        hide: function() {
            return P(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                Pe(this) ? re(this).show() : re(this).hide()
            })
        }
    }),
    re.Tween = M,
    M.prototype = {
        constructor: M,
        init: function(t, e, i, n, r, o) {
            this.elem = t,
            this.prop = i,
            this.easing = r || "swing",
            this.options = e,
            this.start = this.now = this.cur(),
            this.end = n,
            this.unit = o || (re.cssNumber[i] ? "": "px")
        },
        cur: function() {
            var t = M.propHooks[this.prop];
            return t && t.get ? t.get(this) : M.propHooks._default.get(this)
        },
        run: function(t) {
            var e, i = M.propHooks[this.prop];
            return this.pos = e = this.options.duration ? re.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t,
            this.now = (this.end - this.start) * e + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            i && i.set ? i.set(this) : M.propHooks._default.set(this),
            this
        }
    },
    M.prototype.init.prototype = M.prototype,
    M.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = re.css(t.elem, t.prop, ""), e && "auto" !== e ? e: 0) : t.elem[t.prop]
            },
            set: function(t) {
                re.fx.step[t.prop] ? re.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[re.cssProps[t.prop]] || re.cssHooks[t.prop]) ? re.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
            }
        }
    },
    M.propHooks.scrollTop = M.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    },
    re.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return.5 - Math.cos(t * Math.PI) / 2
        }
    },
    re.fx = M.prototype.init,
    re.fx.step = {};
    var pi, fi, gi = /^(?:toggle|show|hide)$/,
    mi = new RegExp("^(?:([+-])=|)(" + De + ")([a-z%]*)$", "i"),
    vi = /queueHooks$/,
    yi = [$],
    bi = {
        "*": [function(t, e) {
            var i = this.createTween(t, e),
            n = i.cur(),
            r = mi.exec(e),
            o = r && r[3] || (re.cssNumber[t] ? "": "px"),
            s = (re.cssNumber[t] || "px" !== o && +n) && mi.exec(re.css(i.elem, t)),
            a = 1,
            l = 20;
            if (s && s[3] !== o) {
                o = o || s[3],
                r = r || [],
                s = +n || 1;
                do a = a || ".5",
                s /= a,
                re.style(i.elem, t, s + o);
                while (a !== (a = i.cur() / n) && 1 !== a && --l)
            }
            return r && (s = i.start = +s || +n || 0, i.unit = o, i.end = r[1] ? s + (r[1] + 1) * r[2] : +r[2]),
            i
        }]
    };
    re.Animation = re.extend(R, {
        tweener: function(t, e) {
            re.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
            for (var i, n = 0,
            r = t.length; r > n; n++) i = t[n],
            bi[i] = bi[i] || [],
            bi[i].unshift(e)
        },
        prefilter: function(t, e) {
            e ? yi.unshift(t) : yi.push(t)
        }
    }),
    re.speed = function(t, e, i) {
        var n = t && "object" == typeof t ? re.extend({},
        t) : {
            complete: i || !i && e || re.isFunction(t) && t,
            duration: t,
            easing: i && e || e && !re.isFunction(e) && e
        };
        return n.duration = re.fx.off ? 0 : "number" == typeof n.duration ? n.duration: n.duration in re.fx.speeds ? re.fx.speeds[n.duration] : re.fx.speeds._default,
        (null == n.queue || n.queue === !0) && (n.queue = "fx"),
        n.old = n.complete,
        n.complete = function() {
            re.isFunction(n.old) && n.old.call(this),
            n.queue && re.dequeue(this, n.queue)
        },
        n
    },
    re.fn.extend({
        fadeTo: function(t, e, i, n) {
            return this.filter(Pe).css("opacity", 0).show().end().animate({
                opacity: e
            },
            t, i, n)
        },
        animate: function(t, e, i, n) {
            var r = re.isEmptyObject(t),
            o = re.speed(e, i, n),
            s = function() {
                var e = R(this, re.extend({},
                t), o); (r || re._data(this, "finish")) && e.stop(!0)
            };
            return s.finish = s,
            r || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
        },
        stop: function(t, e, i) {
            var n = function(t) {
                var e = t.stop;
                delete t.stop,
                e(i)
            };
            return "string" != typeof t && (i = e, e = t, t = void 0),
            e && t !== !1 && this.queue(t || "fx", []),
            this.each(function() {
                var e = !0,
                r = null != t && t + "queueHooks",
                o = re.timers,
                s = re._data(this);
                if (r) s[r] && s[r].stop && n(s[r]);
                else for (r in s) s[r] && s[r].stop && vi.test(r) && n(s[r]);
                for (r = o.length; r--;) o[r].elem !== this || null != t && o[r].queue !== t || (o[r].anim.stop(i), e = !1, o.splice(r, 1)); (e || !i) && re.dequeue(this, t)
            })
        },
        finish: function(t) {
            return t !== !1 && (t = t || "fx"),
            this.each(function() {
                var e, i = re._data(this),
                n = i[t + "queue"],
                r = i[t + "queueHooks"],
                o = re.timers,
                s = n ? n.length: 0;
                for (i.finish = !0, re.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                for (e = 0; s > e; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete i.finish
            })
        }
    }),
    re.each(["toggle", "show", "hide"],
    function(t, e) {
        var i = re.fn[e];
        re.fn[e] = function(t, n, r) {
            return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(N(e, !0), t, n, r)
        }
    }),
    re.each({
        slideDown: N("show"),
        slideUp: N("hide"),
        slideToggle: N("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    },
    function(t, e) {
        re.fn[t] = function(t, i, n) {
            return this.animate(e, t, i, n)
        }
    }),
    re.timers = [],
    re.fx.tick = function() {
        var t, e = re.timers,
        i = 0;
        for (pi = re.now(); i < e.length; i++) t = e[i],
        t() || e[i] !== t || e.splice(i--, 1);
        e.length || re.fx.stop(),
        pi = void 0
    },
    re.fx.timer = function(t) {
        re.timers.push(t),
        t() ? re.fx.start() : re.timers.pop()
    },
    re.fx.interval = 13,
    re.fx.start = function() {
        fi || (fi = setInterval(re.fx.tick, re.fx.interval))
    },
    re.fx.stop = function() {
        clearInterval(fi),
        fi = null
    },
    re.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    re.fn.delay = function(t, e) {
        return t = re.fx ? re.fx.speeds[t] || t: t,
        e = e || "fx",
        this.queue(e,
        function(e, i) {
            var n = setTimeout(e, t);
            i.stop = function() {
                clearTimeout(n)
            }
        })
    },
    function() {
        var t, e, i, n, r;
        e = fe.createElement("div"),
        e.setAttribute("className", "t"),
        e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        n = e.getElementsByTagName("a")[0],
        i = fe.createElement("select"),
        r = i.appendChild(fe.createElement("option")),
        t = e.getElementsByTagName("input")[0],
        n.style.cssText = "top:1px",
        ie.getSetAttribute = "t" !== e.className,
        ie.style = /top/.test(n.getAttribute("style")),
        ie.hrefNormalized = "/a" === n.getAttribute("href"),
        ie.checkOn = !!t.value,
        ie.optSelected = r.selected,
        ie.enctype = !!fe.createElement("form").enctype,
        i.disabled = !0,
        ie.optDisabled = !r.disabled,
        t = fe.createElement("input"),
        t.setAttribute("value", ""),
        ie.input = "" === t.getAttribute("value"),
        t.value = "t",
        t.setAttribute("type", "radio"),
        ie.radioValue = "t" === t.value
    } ();
    var xi = /\r/g;
    re.fn.extend({
        val: function(t) {
            var e, i, n, r = this[0]; {
                if (arguments.length) return n = re.isFunction(t),
                this.each(function(i) {
                    var r;
                    1 === this.nodeType && (r = n ? t.call(this, i, re(this).val()) : t, null == r ? r = "": "number" == typeof r ? r += "": re.isArray(r) && (r = re.map(r,
                    function(t) {
                        return null == t ? "": t + ""
                    })), e = re.valHooks[this.type] || re.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
                });
                if (r) return e = re.valHooks[r.type] || re.valHooks[r.nodeName.toLowerCase()],
                e && "get" in e && void 0 !== (i = e.get(r, "value")) ? i: (i = r.value, "string" == typeof i ? i.replace(xi, "") : null == i ? "": i)
            }
        }
    }),
    re.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = re.find.attr(t, "value");
                    return null != e ? e: re.trim(re.text(t))
                }
            },
            select: {
                get: function(t) {
                    for (var e, i, n = t.options,
                    r = t.selectedIndex,
                    o = "select-one" === t.type || 0 > r,
                    s = o ? null: [], a = o ? r + 1 : n.length, l = 0 > r ? a: o ? r: 0; a > l; l++) if (i = n[l], !(!i.selected && l !== r || (ie.optDisabled ? i.disabled: null !== i.getAttribute("disabled")) || i.parentNode.disabled && re.nodeName(i.parentNode, "optgroup"))) {
                        if (e = re(i).val(), o) return e;
                        s.push(e)
                    }
                    return s
                },
                set: function(t, e) {
                    for (var i, n, r = t.options,
                    o = re.makeArray(e), s = r.length; s--;) if (n = r[s], re.inArray(re.valHooks.option.get(n), o) >= 0) try {
                        n.selected = i = !0
                    } catch(a) {
                        n.scrollHeight
                    } else n.selected = !1;
                    return i || (t.selectedIndex = -1),
                    r
                }
            }
        }
    }),
    re.each(["radio", "checkbox"],
    function() {
        re.valHooks[this] = {
            set: function(t, e) {
                return re.isArray(e) ? t.checked = re.inArray(re(t).val(), e) >= 0 : void 0
            }
        },
        ie.checkOn || (re.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on": t.value
        })
    });
    var wi, ki, Si = re.expr.attrHandle,
    Ci = /^(?:checked|selected)$/i,
    Ti = ie.getSetAttribute,
    Di = ie.input;
    re.fn.extend({
        attr: function(t, e) {
            return _e(this, re.attr, t, e, arguments.length > 1)
        },
        removeAttr: function(t) {
            return this.each(function() {
                re.removeAttr(this, t)
            })
        }
    }),
    re.extend({
        attr: function(t, e, i) {
            var n, r, o = t.nodeType;
            if (t && 3 !== o && 8 !== o && 2 !== o) return typeof t.getAttribute === Se ? re.prop(t, e, i) : (1 === o && re.isXMLDoc(t) || (e = e.toLowerCase(), n = re.attrHooks[e] || (re.expr.match.bool.test(e) ? ki: wi)), void 0 === i ? n && "get" in n && null !== (r = n.get(t, e)) ? r: (r = re.find.attr(t, e), null == r ? void 0 : r) : null !== i ? n && "set" in n && void 0 !== (r = n.set(t, i, e)) ? r: (t.setAttribute(e, i + ""), i) : void re.removeAttr(t, e))
        },
        removeAttr: function(t, e) {
            var i, n, r = 0,
            o = e && e.match(be);
            if (o && 1 === t.nodeType) for (; i = o[r++];) n = re.propFix[i] || i,
            re.expr.match.bool.test(i) ? Di && Ti || !Ci.test(i) ? t[n] = !1 : t[re.camelCase("default-" + i)] = t[n] = !1 : re.attr(t, i, ""),
            t.removeAttribute(Ti ? i: n)
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!ie.radioValue && "radio" === e && re.nodeName(t, "input")) {
                        var i = t.value;
                        return t.setAttribute("type", e),
                        i && (t.value = i),
                        e
                    }
                }
            }
        }
    }),
    ki = {
        set: function(t, e, i) {
            return e === !1 ? re.removeAttr(t, i) : Di && Ti || !Ci.test(i) ? t.setAttribute(!Ti && re.propFix[i] || i, i) : t[re.camelCase("default-" + i)] = t[i] = !0,
            i
        }
    },
    re.each(re.expr.match.bool.source.match(/\w+/g),
    function(t, e) {
        var i = Si[e] || re.find.attr;
        Si[e] = Di && Ti || !Ci.test(e) ?
        function(t, e, n) {
            var r, o;
            return n || (o = Si[e], Si[e] = r, r = null != i(t, e, n) ? e.toLowerCase() : null, Si[e] = o),
            r
        }: function(t, e, i) {
            return i ? void 0 : t[re.camelCase("default-" + e)] ? e.toLowerCase() : null
        }
    }),
    Di && Ti || (re.attrHooks.value = {
        set: function(t, e, i) {
            return re.nodeName(t, "input") ? void(t.defaultValue = e) : wi && wi.set(t, e, i)
        }
    }),
    Ti || (wi = {
        set: function(t, e, i) {
            var n = t.getAttributeNode(i);
            return n || t.setAttributeNode(n = t.ownerDocument.createAttribute(i)),
            n.value = e += "",
            "value" === i || e === t.getAttribute(i) ? e: void 0
        }
    },
    Si.id = Si.name = Si.coords = function(t, e, i) {
        var n;
        return i ? void 0 : (n = t.getAttributeNode(e)) && "" !== n.value ? n.value: null
    },
    re.valHooks.button = {
        get: function(t, e) {
            var i = t.getAttributeNode(e);
            return i && i.specified ? i.value: void 0
        },
        set: wi.set
    },
    re.attrHooks.contenteditable = {
        set: function(t, e, i) {
            wi.set(t, "" === e ? !1 : e, i)
        }
    },
    re.each(["width", "height"],
    function(t, e) {
        re.attrHooks[e] = {
            set: function(t, i) {
                return "" === i ? (t.setAttribute(e, "auto"), i) : void 0
            }
        }
    })),
    ie.style || (re.attrHooks.style = {
        get: function(t) {
            return t.style.cssText || void 0
        },
        set: function(t, e) {
            return t.style.cssText = e + ""
        }
    });
    var Ai = /^(?:input|select|textarea|button|object)$/i,
    Pi = /^(?:a|area)$/i;
    re.fn.extend({
        prop: function(t, e) {
            return _e(this, re.prop, t, e, arguments.length > 1)
        },
        removeProp: function(t) {
            return t = re.propFix[t] || t,
            this.each(function() {
                try {
                    this[t] = void 0,
                    delete this[t]
                } catch(e) {}
            })
        }
    }),
    re.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(t, e, i) {
            var n, r, o, s = t.nodeType;
            if (t && 3 !== s && 8 !== s && 2 !== s) return o = 1 !== s || !re.isXMLDoc(t),
            o && (e = re.propFix[e] || e, r = re.propHooks[e]),
            void 0 !== i ? r && "set" in r && void 0 !== (n = r.set(t, i, e)) ? n: t[e] = i: r && "get" in r && null !== (n = r.get(t, e)) ? n: t[e]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = re.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : Ai.test(t.nodeName) || Pi.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        }
    }),
    ie.hrefNormalized || re.each(["href", "src"],
    function(t, e) {
        re.propHooks[e] = {
            get: function(t) {
                return t.getAttribute(e, 4)
            }
        }
    }),
    ie.optSelected || (re.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex),
            null
        }
    }),
    re.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"],
    function() {
        re.propFix[this.toLowerCase()] = this
    }),
    ie.enctype || (re.propFix.enctype = "encoding");
    var _i = /[\t\r\n\f]/g;
    re.fn.extend({
        addClass: function(t) {
            var e, i, n, r, o, s, a = 0,
            l = this.length,
            h = "string" == typeof t && t;
            if (re.isFunction(t)) return this.each(function(e) {
                re(this).addClass(t.call(this, e, this.className))
            });
            if (h) for (e = (t || "").match(be) || []; l > a; a++) if (i = this[a], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(_i, " ") : " ")) {
                for (o = 0; r = e[o++];) n.indexOf(" " + r + " ") < 0 && (n += r + " ");
                s = re.trim(n),
                i.className !== s && (i.className = s)
            }
            return this
        },
        removeClass: function(t) {
            var e, i, n, r, o, s, a = 0,
            l = this.length,
            h = 0 === arguments.length || "string" == typeof t && t;
            if (re.isFunction(t)) return this.each(function(e) {
                re(this).removeClass(t.call(this, e, this.className))
            });
            if (h) for (e = (t || "").match(be) || []; l > a; a++) if (i = this[a], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(_i, " ") : "")) {
                for (o = 0; r = e[o++];) for (; n.indexOf(" " + r + " ") >= 0;) n = n.replace(" " + r + " ", " ");
                s = t ? re.trim(n) : "",
                i.className !== s && (i.className = s)
            }
            return this
        },
        toggleClass: function(t, e) {
            var i = typeof t;
            return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : this.each(re.isFunction(t) ?
            function(i) {
                re(this).toggleClass(t.call(this, i, this.className, e), e)
            }: function() {
                if ("string" === i) for (var e, n = 0,
                r = re(this), o = t.match(be) || []; e = o[n++];) r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                else(i === Se || "boolean" === i) && (this.className && re._data(this, "__className__", this.className), this.className = this.className || t === !1 ? "": re._data(this, "__className__") || "")
            })
        },
        hasClass: function(t) {
            for (var e = " " + t + " ",
            i = 0,
            n = this.length; n > i; i++) if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(_i, " ").indexOf(e) >= 0) return ! 0;
            return ! 1
        }
    }),
    re.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
    function(t, e) {
        re.fn[e] = function(t, i) {
            return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
        }
    }),
    re.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        },
        bind: function(t, e, i) {
            return this.on(t, null, e, i)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, i, n) {
            return this.on(e, t, i, n)
        },
        undelegate: function(t, e, i) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
        }
    });
    var Li = re.now(),
    Ei = /\?/,
    Mi = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    re.parseJSON = function(e) {
        if (t.JSON && t.JSON.parse) return t.JSON.parse(e + "");
        var i, n = null,
        r = re.trim(e + "");
        return r && !re.trim(r.replace(Mi,
        function(t, e, r, o) {
            return i && e && (n = 0),
            0 === n ? t: (i = r || e, n += !o - !r, "")
        })) ? Function("return " + r)() : re.error("Invalid JSON: " + e)
    },
    re.parseXML = function(e) {
        var i, n;
        if (!e || "string" != typeof e) return null;
        try {
            t.DOMParser ? (n = new DOMParser, i = n.parseFromString(e, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(e))
        } catch(r) {
            i = void 0
        }
        return i && i.documentElement && !i.getElementsByTagName("parsererror").length || re.error("Invalid XML: " + e),
        i
    };
    var Fi, Ni, Ii = /#.*$/,
    $i = /([?&])_=[^&]*/,
    Oi = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    Ri = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Hi = /^(?:GET|HEAD)$/,
    Bi = /^\/\//,
    zi = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    ji = {},
    Wi = {},
    qi = "*/".concat("*");
    try {
        Ni = location.href
    } catch(Yi) {
        Ni = fe.createElement("a"),
        Ni.href = "",
        Ni = Ni.href
    }
    Fi = zi.exec(Ni.toLowerCase()) || [],
    re.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ni,
            type: "GET",
            isLocal: Ri.test(Fi[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": qi,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": re.parseJSON,
                "text xml": re.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? z(z(t, re.ajaxSettings), e) : z(re.ajaxSettings, t)
        },
        ajaxPrefilter: H(ji),
        ajaxTransport: H(Wi),
        ajax: function(t, e) {
            function i(t, e, i, n) {
                var r, c, v, y, x, k = e;
                2 !== b && (b = 2, a && clearTimeout(a), h = void 0, s = n || "", w.readyState = t > 0 ? 4 : 0, r = t >= 200 && 300 > t || 304 === t, i && (y = j(u, w, i)), y = W(u, y, w, r), r ? (u.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (re.lastModified[o] = x), x = w.getResponseHeader("etag"), x && (re.etag[o] = x)), 204 === t || "HEAD" === u.type ? k = "nocontent": 304 === t ? k = "notmodified": (k = y.state, c = y.data, v = y.error, r = !v)) : (v = k, (t || !k) && (k = "error", 0 > t && (t = 0))), w.status = t, w.statusText = (e || k) + "", r ? f.resolveWith(d, [c, k, w]) : f.rejectWith(d, [w, k, v]), w.statusCode(m), m = void 0, l && p.trigger(r ? "ajaxSuccess": "ajaxError", [w, u, r ? c: v]), g.fireWith(d, [w, k]), l && (p.trigger("ajaxComplete", [w, u]), --re.active || re.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (e = t, t = void 0),
            e = e || {};
            var n, r, o, s, a, l, h, c, u = re.ajaxSetup({},
            e),
            d = u.context || u,
            p = u.context && (d.nodeType || d.jquery) ? re(d) : re.event,
            f = re.Deferred(),
            g = re.Callbacks("once memory"),
            m = u.statusCode || {},
            v = {},
            y = {},
            b = 0,
            x = "canceled",
            w = {
                readyState: 0,
                getResponseHeader: function(t) {
                    var e;
                    if (2 === b) {
                        if (!c) for (c = {}; e = Oi.exec(s);) c[e[1].toLowerCase()] = e[2];
                        e = c[t.toLowerCase()]
                    }
                    return null == e ? null: e
                },
                getAllResponseHeaders: function() {
                    return 2 === b ? s: null
                },
                setRequestHeader: function(t, e) {
                    var i = t.toLowerCase();
                    return b || (t = y[i] = y[i] || t, v[t] = e),
                    this
                },
                overrideMimeType: function(t) {
                    return b || (u.mimeType = t),
                    this
                },
                statusCode: function(t) {
                    var e;
                    if (t) if (2 > b) for (e in t) m[e] = [m[e], t[e]];
                    else w.always(t[w.status]);
                    return this
                },
                abort: function(t) {
                    var e = t || x;
                    return h && h.abort(e),
                    i(0, e),
                    this
                }
            };
            if (f.promise(w).complete = g.add, w.success = w.done, w.error = w.fail, u.url = ((t || u.url || Ni) + "").replace(Ii, "").replace(Bi, Fi[1] + "//"), u.type = e.method || e.type || u.method || u.type, u.dataTypes = re.trim(u.dataType || "*").toLowerCase().match(be) || [""], null == u.crossDomain && (n = zi.exec(u.url.toLowerCase()), u.crossDomain = !(!n || n[1] === Fi[1] && n[2] === Fi[2] && (n[3] || ("http:" === n[1] ? "80": "443")) === (Fi[3] || ("http:" === Fi[1] ? "80": "443")))), u.data && u.processData && "string" != typeof u.data && (u.data = re.param(u.data, u.traditional)), B(ji, u, e, w), 2 === b) return w;
            l = re.event && u.global,
            l && 0 === re.active++&&re.event.trigger("ajaxStart"),
            u.type = u.type.toUpperCase(),
            u.hasContent = !Hi.test(u.type),
            o = u.url,
            u.hasContent || (u.data && (o = u.url += (Ei.test(o) ? "&": "?") + u.data, delete u.data), u.cache === !1 && (u.url = $i.test(o) ? o.replace($i, "$1_=" + Li++) : o + (Ei.test(o) ? "&": "?") + "_=" + Li++)),
            u.ifModified && (re.lastModified[o] && w.setRequestHeader("If-Modified-Since", re.lastModified[o]), re.etag[o] && w.setRequestHeader("If-None-Match", re.etag[o])),
            (u.data && u.hasContent && u.contentType !== !1 || e.contentType) && w.setRequestHeader("Content-Type", u.contentType),
            w.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + qi + "; q=0.01": "") : u.accepts["*"]);
            for (r in u.headers) w.setRequestHeader(r, u.headers[r]);
            if (u.beforeSend && (u.beforeSend.call(d, w, u) === !1 || 2 === b)) return w.abort();
            x = "abort";
            for (r in {
                success: 1,
                error: 1,
                complete: 1
            }) w[r](u[r]);
            if (h = B(Wi, u, e, w)) {
                w.readyState = 1,
                l && p.trigger("ajaxSend", [w, u]),
                u.async && u.timeout > 0 && (a = setTimeout(function() {
                    w.abort("timeout")
                },
                u.timeout));
                try {
                    b = 1,
                    h.send(v, i)
                } catch(k) {
                    if (! (2 > b)) throw k;
                    i( - 1, k)
                }
            } else i( - 1, "No Transport");
            return w
        },
        getJSON: function(t, e, i) {
            return re.get(t, e, i, "json")
        },
        getScript: function(t, e) {
            return re.get(t, void 0, e, "script")
        }
    }),
    re.each(["get", "post"],
    function(t, e) {
        re[e] = function(t, i, n, r) {
            return re.isFunction(i) && (r = r || n, n = i, i = void 0),
            re.ajax({
                url: t,
                type: e,
                dataType: r,
                data: i,
                success: n
            })
        }
    }),
    re._evalUrl = function(t) {
        return re.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    },
    re.fn.extend({
        wrapAll: function(t) {
            if (re.isFunction(t)) return this.each(function(e) {
                re(this).wrapAll(t.call(this, e))
            });
            if (this[0]) {
                var e = re(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]),
                e.map(function() {
                    for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
                    return t
                }).append(this)
            }
            return this
        },
        wrapInner: function(t) {
            return this.each(re.isFunction(t) ?
            function(e) {
                re(this).wrapInner(t.call(this, e))
            }: function() {
                var e = re(this),
                i = e.contents();
                i.length ? i.wrapAll(t) : e.append(t)
            })
        },
        wrap: function(t) {
            var e = re.isFunction(t);
            return this.each(function(i) {
                re(this).wrapAll(e ? t.call(this, i) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                re.nodeName(this, "body") || re(this).replaceWith(this.childNodes)
            }).end()
        }
    }),
    re.expr.filters.hidden = function(t) {
        return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !ie.reliableHiddenOffsets() && "none" === (t.style && t.style.display || re.css(t, "display"))
    },
    re.expr.filters.visible = function(t) {
        return ! re.expr.filters.hidden(t)
    };
    var Xi = /%20/g,
    Vi = /\[\]$/,
    Ui = /\r?\n/g,
    Gi = /^(?:submit|button|image|reset|file)$/i,
    Ki = /^(?:input|select|textarea|keygen)/i;
    re.param = function(t, e) {
        var i, n = [],
        r = function(t, e) {
            e = re.isFunction(e) ? e() : null == e ? "": e,
            n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
        };
        if (void 0 === e && (e = re.ajaxSettings && re.ajaxSettings.traditional), re.isArray(t) || t.jquery && !re.isPlainObject(t)) re.each(t,
        function() {
            r(this.name, this.value)
        });
        else for (i in t) q(i, t[i], e, r);
        return n.join("&").replace(Xi, "+")
    },
    re.fn.extend({
        serialize: function() {
            return re.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = re.prop(this, "elements");
                return t ? re.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !re(this).is(":disabled") && Ki.test(this.nodeName) && !Gi.test(t) && (this.checked || !Le.test(t))
            }).map(function(t, e) {
                var i = re(this).val();
                return null == i ? null: re.isArray(i) ? re.map(i,
                function(t) {
                    return {
                        name: e.name,
                        value: t.replace(Ui, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: i.replace(Ui, "\r\n")
                }
            }).get()
        }
    }),
    re.ajaxSettings.xhr = void 0 !== t.ActiveXObject ?
    function() {
        return ! this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Y() || X()
    }: Y;
    var Qi = 0,
    Zi = {},
    Ji = re.ajaxSettings.xhr();
    t.attachEvent && t.attachEvent("onunload",
    function() {
        for (var t in Zi) Zi[t](void 0, !0)
    }),
    ie.cors = !!Ji && "withCredentials" in Ji,
    Ji = ie.ajax = !!Ji,
    Ji && re.ajaxTransport(function(t) {
        if (!t.crossDomain || ie.cors) {
            var e;
            return {
                send: function(i, n) {
                    var r, o = t.xhr(),
                    s = ++Qi;
                    if (o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (r in t.xhrFields) o[r] = t.xhrFields[r];
                    t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType),
                    t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    for (r in i) void 0 !== i[r] && o.setRequestHeader(r, i[r] + "");
                    o.send(t.hasContent && t.data || null),
                    e = function(i, r) {
                        var a, l, h;
                        if (e && (r || 4 === o.readyState)) if (delete Zi[s], e = void 0, o.onreadystatechange = re.noop, r) 4 !== o.readyState && o.abort();
                        else {
                            h = {},
                            a = o.status,
                            "string" == typeof o.responseText && (h.text = o.responseText);
                            try {
                                l = o.statusText
                            } catch(c) {
                                l = ""
                            }
                            a || !t.isLocal || t.crossDomain ? 1223 === a && (a = 204) : a = h.text ? 200 : 404
                        }
                        h && n(a, l, h, o.getAllResponseHeaders())
                    },
                    t.async ? 4 === o.readyState ? setTimeout(e) : o.onreadystatechange = Zi[s] = e: e()
                },
                abort: function() {
                    e && e(void 0, !0)
                }
            }
        }
    }),
    re.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(t) {
                return re.globalEval(t),
                t
            }
        }
    }),
    re.ajaxPrefilter("script",
    function(t) {
        void 0 === t.cache && (t.cache = !1),
        t.crossDomain && (t.type = "GET", t.global = !1)
    }),
    re.ajaxTransport("script",
    function(t) {
        if (t.crossDomain) {
            var e, i = fe.head || re("head")[0] || fe.documentElement;
            return {
                send: function(n, r) {
                    e = fe.createElement("script"),
                    e.async = !0,
                    t.scriptCharset && (e.charset = t.scriptCharset),
                    e.src = t.url,
                    e.onload = e.onreadystatechange = function(t, i) { (i || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, i || r(200, "success"))
                    },
                    i.insertBefore(e, i.firstChild)
                },
                abort: function() {
                    e && e.onload(void 0, !0)
                }
            }
        }
    });
    var tn = [],
    en = /(=)\?(?=&|$)|\?\?/;
    re.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = tn.pop() || re.expando + "_" + Li++;
            return this[t] = !0,
            t
        }
    }),
    re.ajaxPrefilter("json jsonp",
    function(e, i, n) {
        var r, o, s, a = e.jsonp !== !1 && (en.test(e.url) ? "url": "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && en.test(e.data) && "data");
        return a || "jsonp" === e.dataTypes[0] ? (r = e.jsonpCallback = re.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(en, "$1" + r) : e.jsonp !== !1 && (e.url += (Ei.test(e.url) ? "&": "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
            return s || re.error(r + " was not called"),
            s[0]
        },
        e.dataTypes[0] = "json", o = t[r], t[r] = function() {
            s = arguments
        },
        n.always(function() {
            t[r] = o,
            e[r] && (e.jsonpCallback = i.jsonpCallback, tn.push(r)),
            s && re.isFunction(o) && o(s[0]),
            s = o = void 0
        }), "script") : void 0
    }),
    re.parseHTML = function(t, e, i) {
        if (!t || "string" != typeof t) return null;
        "boolean" == typeof e && (i = e, e = !1),
        e = e || fe;
        var n = ue.exec(t),
        r = !i && [];
        return n ? [e.createElement(n[1])] : (n = re.buildFragment([t], e, r), r && r.length && re(r).remove(), re.merge([], n.childNodes))
    };
    var nn = re.fn.load;
    re.fn.load = function(t, e, i) {
        if ("string" != typeof t && nn) return nn.apply(this, arguments);
        var n, r, o, s = this,
        a = t.indexOf(" ");
        return a >= 0 && (n = re.trim(t.slice(a, t.length)), t = t.slice(0, a)),
        re.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (o = "POST"),
        s.length > 0 && re.ajax({
            url: t,
            type: o,
            dataType: "html",
            data: e
        }).done(function(t) {
            r = arguments,
            s.html(n ? re("<div>").append(re.parseHTML(t)).find(n) : t)
        }).complete(i &&
        function(t, e) {
            s.each(i, r || [t.responseText, e, t])
        }),
        this
    },
    re.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"],
    function(t, e) {
        re.fn[e] = function(t) {
            return this.on(e, t)
        }
    }),
    re.expr.filters.animated = function(t) {
        return re.grep(re.timers,
        function(e) {
            return t === e.elem
        }).length
    };
    var rn = t.document.documentElement;
    re.offset = {
        setOffset: function(t, e, i) {
            var n, r, o, s, a, l, h, c = re.css(t, "position"),
            u = re(t),
            d = {};
            "static" === c && (t.style.position = "relative"),
            a = u.offset(),
            o = re.css(t, "top"),
            l = re.css(t, "left"),
            h = ("absolute" === c || "fixed" === c) && re.inArray("auto", [o, l]) > -1,
            h ? (n = u.position(), s = n.top, r = n.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0),
            re.isFunction(e) && (e = e.call(t, i, a)),
            null != e.top && (d.top = e.top - a.top + s),
            null != e.left && (d.left = e.left - a.left + r),
            "using" in e ? e.using.call(t, d) : u.css(d)
        }
    },
    re.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this: this.each(function(e) {
                re.offset.setOffset(this, t, e)
            });
            var e, i, n = {
                top: 0,
                left: 0
            },
            r = this[0],
            o = r && r.ownerDocument;
            if (o) return e = o.documentElement,
            re.contains(e, r) ? (typeof r.getBoundingClientRect !== Se && (n = r.getBoundingClientRect()), i = V(o), {
                top: n.top + (i.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                left: n.left + (i.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
            }) : n
        },
        position: function() {
            if (this[0]) {
                var t, e, i = {
                    top: 0,
                    left: 0
                },
                n = this[0];
                return "fixed" === re.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), re.nodeName(t[0], "html") || (i = t.offset()), i.top += re.css(t[0], "borderTopWidth", !0), i.left += re.css(t[0], "borderLeftWidth", !0)),
                {
                    top: e.top - i.top - re.css(n, "marginTop", !0),
                    left: e.left - i.left - re.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent || rn; t && !re.nodeName(t, "html") && "static" === re.css(t, "position");) t = t.offsetParent;
                return t || rn
            })
        }
    }),
    re.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    },
    function(t, e) {
        var i = /Y/.test(e);
        re.fn[t] = function(n) {
            return _e(this,
            function(t, n, r) {
                var o = V(t);
                return void 0 === r ? o ? e in o ? o[e] : o.document.documentElement[n] : t[n] : void(o ? o.scrollTo(i ? re(o).scrollLeft() : r, i ? r: re(o).scrollTop()) : t[n] = r)
            },
            t, n, arguments.length, null)
        }
    }),
    re.each(["top", "left"],
    function(t, e) {
        re.cssHooks[e] = D(ie.pixelPosition,
        function(t, i) {
            return i ? (i = ei(t, e), ni.test(i) ? re(t).position()[e] + "px": i) : void 0
        })
    }),
    re.each({
        Height: "height",
        Width: "width"
    },
    function(t, e) {
        re.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        },
        function(i, n) {
            re.fn[n] = function(n, r) {
                var o = arguments.length && (i || "boolean" != typeof n),
                s = i || (n === !0 || r === !0 ? "margin": "border");
                return _e(this,
                function(e, i, n) {
                    var r;
                    return re.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === n ? re.css(e, i, s) : re.style(e, i, n, s)
                },
                e, o ? n: void 0, o, null)
            }
        })
    }),
    re.fn.size = function() {
        return this.length
    },
    re.fn.andSelf = re.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [],
    function() {
        return re
    });
    var on = t.jQuery,
    sn = t.$;
    return re.noConflict = function(e) {
        return t.$ === re && (t.$ = sn),
        e && t.jQuery === re && (t.jQuery = on),
        re
    },
    typeof e === Se && (t.jQuery = t.$ = re),
    re
}),
function(t, e) {
    t.rails !== e && t.error("jquery-ujs has already been loaded!");
    var i, n = t(document);
    t.rails = i = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with], a[data-disable]",
        buttonClickSelector: "button[data-remote]:not(form button), button[data-confirm]:not(form button)",
        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
        disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
        enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
        requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
        fileInputSelector: "input[type=file]",
        linkDisableSelector: "a[data-disable-with], a[data-disable]",
        buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
        CSRFProtection: function(e) {
            var i = t('meta[name="csrf-token"]').attr("content");
            i && e.setRequestHeader("X-CSRF-Token", i)
        },
        refreshCSRFTokens: function() {
            var e = t("meta[name=csrf-token]").attr("content"),
            i = t("meta[name=csrf-param]").attr("content");
            t('form input[name="' + i + '"]').val(e)
        },
        fire: function(e, i, n) {
            var r = t.Event(i);
            return e.trigger(r, n),
            r.result !== !1
        },
        confirm: function(t) {
            return confirm(t)
        },
        ajax: function(e) {
            return t.ajax(e)
        },
        href: function(t) {
            return t.attr("href")
        },
        handleRemote: function(n) {
            var r, o, s, a, l, h, c, u;
            if (i.fire(n, "ajax:before")) {
                if (a = n.data("cross-domain"), l = a === e ? null: a, h = n.data("with-credentials") || null, c = n.data("type") || t.ajaxSettings && t.ajaxSettings.dataType, n.is("form")) {
                    r = n.attr("method"),
                    o = n.attr("action"),
                    s = n.serializeArray();
                    var d = n.data("ujs:submit-button");
                    d && (s.push(d), n.data("ujs:submit-button", null))
                } else n.is(i.inputChangeSelector) ? (r = n.data("method"), o = n.data("url"), s = n.serialize(), n.data("params") && (s = s + "&" + n.data("params"))) : n.is(i.buttonClickSelector) ? (r = n.data("method") || "get", o = n.data("url"), s = n.serialize(), n.data("params") && (s = s + "&" + n.data("params"))) : (r = n.data("method"), o = i.href(n), s = n.data("params") || null);
                return u = {
                    type: r || "GET",
                    data: s,
                    dataType: c,
                    beforeSend: function(t, r) {
                        return r.dataType === e && t.setRequestHeader("accept", "*/*;q=0.5, " + r.accepts.script),
                        i.fire(n, "ajax:beforeSend", [t, r]) ? void n.trigger("ajax:send", t) : !1
                    },
                    success: function(t, e, i) {
                        n.trigger("ajax:success", [t, e, i])
                    },
                    complete: function(t, e) {
                        n.trigger("ajax:complete", [t, e])
                    },
                    error: function(t, e, i) {
                        n.trigger("ajax:error", [t, e, i])
                    },
                    crossDomain: l
                },
                h && (u.xhrFields = {
                    withCredentials: h
                }),
                o && (u.url = o),
                i.ajax(u)
            }
            return ! 1
        },
        handleMethod: function(n) {
            var r = i.href(n),
            o = n.data("method"),
            s = n.attr("target"),
            a = t("meta[name=csrf-token]").attr("content"),
            l = t("meta[name=csrf-param]").attr("content"),
            h = t('<form method="post" action="' + r + '"></form>'),
            c = '<input name="_method" value="' + o + '" type="hidden" />';
            l !== e && a !== e && (c += '<input name="' + l + '" value="' + a + '" type="hidden" />'),
            s && h.attr("target", s),
            h.hide().append(c).appendTo("body"),
            h.submit()
        },
        formElements: function(e, i) {
            return e.is("form") ? t(e[0].elements).filter(i) : e.find(i)
        },
        disableFormElements: function(e) {
            i.formElements(e, i.disableSelector).each(function() {
                i.disableFormElement(t(this))
            })
        },
        disableFormElement: function(t) {
            var i, n;
            i = t.is("button") ? "html": "val",
            n = t.data("disable-with"),
            t.data("ujs:enable-with", t[i]()),
            n !== e && t[i](n),
            t.prop("disabled", !0)
        },
        enableFormElements: function(e) {
            i.formElements(e, i.enableSelector).each(function() {
                i.enableFormElement(t(this))
            })
        },
        enableFormElement: function(t) {
            var e = t.is("button") ? "html": "val";
            t.data("ujs:enable-with") && t[e](t.data("ujs:enable-with")),
            t.prop("disabled", !1)
        },
        allowAction: function(t) {
            var e, n = t.data("confirm"),
            r = !1;
            return n ? (i.fire(t, "confirm") && (r = i.confirm(n), e = i.fire(t, "confirm:complete", [r])), r && e) : !0
        },
        blankInputs: function(e, i, n) {
            var r, o, s = t(),
            a = i || "input,textarea",
            l = e.find(a);
            return l.each(function() {
                if (r = t(this), o = r.is("input[type=checkbox],input[type=radio]") ? r.is(":checked") : r.val(), !o == !n) {
                    if (r.is("input[type=radio]") && l.filter('input[type=radio]:checked[name="' + r.attr("name") + '"]').length) return ! 0;
                    s = s.add(r)
                }
            }),
            s.length ? s: !1
        },
        nonBlankInputs: function(t, e) {
            return i.blankInputs(t, e, !0)
        },
        stopEverything: function(e) {
            return t(e.target).trigger("ujs:everythingStopped"),
            e.stopImmediatePropagation(),
            !1
        },
        disableElement: function(t) {
            var n = t.data("disable-with");
            t.data("ujs:enable-with", t.html()),
            n !== e && t.html(n),
            t.bind("click.railsDisable",
            function(t) {
                return i.stopEverything(t)
            })
        },
        enableElement: function(t) {
            t.data("ujs:enable-with") !== e && (t.html(t.data("ujs:enable-with")), t.removeData("ujs:enable-with")),
            t.unbind("click.railsDisable")
        }
    },
    i.fire(n, "rails:attachBindings") && (t.ajaxPrefilter(function(t, e, n) {
        t.crossDomain || i.CSRFProtection(n)
    }), t(window).on("pageshow.rails",
    function() {
        t(t.rails.enableSelector).each(function() {
            var e = t(this);
            e.data("ujs:enable-with") && t.rails.enableFormElement(e)
        }),
        t(t.rails.linkDisableSelector).each(function() {
            var e = t(this);
            e.data("ujs:enable-with") && t.rails.enableElement(e)
        })
    }), n.delegate(i.linkDisableSelector, "ajax:complete",
    function() {
        i.enableElement(t(this))
    }), n.delegate(i.buttonDisableSelector, "ajax:complete",
    function() {
        i.enableFormElement(t(this))
    }), n.delegate(i.linkClickSelector, "click.rails",
    function(n) {
        var r = t(this),
        o = r.data("method"),
        s = r.data("params"),
        a = n.metaKey || n.ctrlKey;
        if (!i.allowAction(r)) return i.stopEverything(n);
        if (!a && r.is(i.linkDisableSelector) && i.disableElement(r), r.data("remote") !== e) {
            if (a && (!o || "GET" === o) && !s) return ! 0;
            var l = i.handleRemote(r);
            return l === !1 ? i.enableElement(r) : l.fail(function() {
                i.enableElement(r)
            }),
            !1
        }
        return o ? (i.handleMethod(r), !1) : void 0
    }), n.delegate(i.buttonClickSelector, "click.rails",
    function(e) {
        var n = t(this);
        if (!i.allowAction(n)) return i.stopEverything(e);
        n.is(i.buttonDisableSelector) && i.disableFormElement(n);
        var r = i.handleRemote(n);
        return r === !1 ? i.enableFormElement(n) : r.fail(function() {
            i.enableFormElement(n)
        }),
        !1
    }), n.delegate(i.inputChangeSelector, "change.rails",
    function(e) {
        var n = t(this);
        return i.allowAction(n) ? (i.handleRemote(n), !1) : i.stopEverything(e)
    }), n.delegate(i.formSubmitSelector, "submit.rails",
    function(n) {
        var r, o, s = t(this),
        a = s.data("remote") !== e;
        if (!i.allowAction(s)) return i.stopEverything(n);
        if (s.attr("novalidate") == e && (r = i.blankInputs(s, i.requiredInputSelector), r && i.fire(s, "ajax:aborted:required", [r]))) return i.stopEverything(n);
        if (a) {
            if (o = i.nonBlankInputs(s, i.fileInputSelector)) {
                setTimeout(function() {
                    i.disableFormElements(s)
                },
                13);
                var l = i.fire(s, "ajax:aborted:file", [o]);
                return l || setTimeout(function() {
                    i.enableFormElements(s)
                },
                13),
                l
            }
            return i.handleRemote(s),
            !1
        }
        setTimeout(function() {
            i.disableFormElements(s)
        },
        13)
    }), n.delegate(i.formInputClickSelector, "click.rails",
    function(e) {
        var n = t(this);
        if (!i.allowAction(n)) return i.stopEverything(e);
        var r = n.attr("name"),
        o = r ? {
            name: r,
            value: n.val()
        }: null;
        n.closest("form").data("ujs:submit-button", o)
    }), n.delegate(i.formSubmitSelector, "ajax:send.rails",
    function(e) {
        this == e.target && i.disableFormElements(t(this))
    }), n.delegate(i.formSubmitSelector, "ajax:complete.rails",
    function(e) {
        this == e.target && i.enableFormElements(t(this))
    }), t(function() {
        i.refreshCSRFTokens()
    }))
} (jQuery),
function(t) {
    var e = {
        isMsie: function() {
            return /(msie|trident)/i.test(navigator.userAgent) ? navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2] : !1
        },
        isBlankString: function(t) {
            return ! t || /^\s*$/.test(t)
        },
        escapeRegExChars: function(t) {
            return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
        },
        isString: function(t) {
            return "string" == typeof t
        },
        isNumber: function(t) {
            return "number" == typeof t
        },
        isArray: t.isArray,
        isFunction: t.isFunction,
        isObject: t.isPlainObject,
        isUndefined: function(t) {
            return "undefined" == typeof t
        },
        bind: t.proxy,
        each: function(e, i) {
            function n(t, e) {
                return i(e, t)
            }
            t.each(e, n)
        },
        map: t.map,
        filter: t.grep,
        every: function(e, i) {
            var n = !0;
            return e ? (t.each(e,
            function(t, r) {
                return (n = i.call(null, r, t, e)) ? void 0 : !1
            }), !!n) : n
        },
        some: function(e, i) {
            var n = !1;
            return e ? (t.each(e,
            function(t, r) {
                return (n = i.call(null, r, t, e)) ? !1 : void 0
            }), !!n) : n
        },
        mixin: t.extend,
        getUniqueId: function() {
            var t = 0;
            return function() {
                return t++
            }
        } (),
        templatify: function(e) {
            function i() {
                return String(e)
            }
            return t.isFunction(e) ? e: i
        },
        defer: function(t) {
            setTimeout(t, 0)
        },
        debounce: function(t, e, i) {
            var n, r;
            return function() {
                var o, s, a = this,
                l = arguments;
                return o = function() {
                    n = null,
                    i || (r = t.apply(a, l))
                },
                s = i && !n,
                clearTimeout(n),
                n = setTimeout(o, e),
                s && (r = t.apply(a, l)),
                r
            }
        },
        throttle: function(t, e) {
            var i, n, r, o, s, a;
            return s = 0,
            a = function() {
                s = new Date,
                r = null,
                o = t.apply(i, n)
            },
            function() {
                var l = new Date,
                h = e - (l - s);
                return i = this,
                n = arguments,
                0 >= h ? (clearTimeout(r), r = null, s = l, o = t.apply(i, n)) : r || (r = setTimeout(a, h)),
                o
            }
        },
        noop: function() {}
    },
    i = "0.10.2",
    n = function() {
        function t(t) {
            return t.split(/\s+/)
        }
        function e(t) {
            return t.split(/\W+/)
        }
        function i(t) {
            return function(e) {
                return function(i) {
                    return t(i[e])
                }
            }
        }
        return {
            nonword: e,
            whitespace: t,
            obj: {
                nonword: i(e),
                whitespace: i(t)
            }
        }
    } (),
    r = function() {
        function t(t) {
            this.maxSize = t || 100,
            this.size = 0,
            this.hash = {},
            this.list = new i
        }
        function i() {
            this.head = this.tail = null
        }
        function n(t, e) {
            this.key = t,
            this.val = e,
            this.prev = this.next = null
        }
        return e.mixin(t.prototype, {
            set: function(t, e) {
                var i, r = this.list.tail;
                this.size >= this.maxSize && (this.list.remove(r), delete this.hash[r.key]),
                (i = this.hash[t]) ? (i.val = e, this.list.moveToFront(i)) : (i = new n(t, e), this.list.add(i), this.hash[t] = i, this.size++)
            },
            get: function(t) {
                var e = this.hash[t];
                return e ? (this.list.moveToFront(e), e.val) : void 0
            }
        }),
        e.mixin(i.prototype, {
            add: function(t) {
                this.head && (t.next = this.head, this.head.prev = t),
                this.head = t,
                this.tail = this.tail || t
            },
            remove: function(t) {
                t.prev ? t.prev.next = t.next: this.head = t.next,
                t.next ? t.next.prev = t.prev: this.tail = t.prev
            },
            moveToFront: function(t) {
                this.remove(t),
                this.add(t)
            }
        }),
        t
    } (),
    o = function() {
        function t(t) {
            this.prefix = ["__", t, "__"].join(""),
            this.ttlKey = "__ttl__",
            this.keyMatcher = new RegExp("^" + this.prefix)
        }
        function i() {
            return (new Date).getTime()
        }
        function n(t) {
            return JSON.stringify(e.isUndefined(t) ? null: t)
        }
        function r(t) {
            return JSON.parse(t)
        }
        var o, s;
        try {
            o = window.localStorage,
            o.setItem("~~~", "!"),
            o.removeItem("~~~")
        } catch(a) {
            o = null
        }
        return s = o && window.JSON ? {
            _prefix: function(t) {
                return this.prefix + t
            },
            _ttlKey: function(t) {
                return this._prefix(t) + this.ttlKey
            },
            get: function(t) {
                return this.isExpired(t) && this.remove(t),
                r(o.getItem(this._prefix(t)))
            },
            set: function(t, r, s) {
                return e.isNumber(s) ? o.setItem(this._ttlKey(t), n(i() + s)) : o.removeItem(this._ttlKey(t)),
                o.setItem(this._prefix(t), n(r))
            },
            remove: function(t) {
                return o.removeItem(this._ttlKey(t)),
                o.removeItem(this._prefix(t)),
                this
            },
            clear: function() {
                var t, e, i = [],
                n = o.length;
                for (t = 0; n > t; t++)(e = o.key(t)).match(this.keyMatcher) && i.push(e.replace(this.keyMatcher, ""));
                for (t = i.length; t--;) this.remove(i[t]);
                return this
            },
            isExpired: function(t) {
                var n = r(o.getItem(this._ttlKey(t)));
                return e.isNumber(n) && i() > n ? !0 : !1
            }
        }: {
            get: e.noop,
            set: e.noop,
            remove: e.noop,
            clear: e.noop,
            isExpired: e.noop
        },
        e.mixin(t.prototype, s),
        t
    } (),
    s = function() {
        function i(e) {
            e = e || {},
            this._send = e.transport ? n(e.transport) : t.ajax,
            this._get = e.rateLimiter ? e.rateLimiter(this._get) : this._get
        }
        function n(i) {
            return function(n, r) {
                function o(t) {
                    e.defer(function() {
                        a.resolve(t)
                    })
                }
                function s(t) {
                    e.defer(function() {
                        a.reject(t)
                    })
                }
                var a = t.Deferred();
                return i(n, r, o, s),
                a
            }
        }
        var o = 0,
        s = {},
        a = 6,
        l = new r(10);
        return i.setMaxPendingRequests = function(t) {
            a = t
        },
        i.resetCache = function() {
            l = new r(10)
        },
        e.mixin(i.prototype, {
            _get: function(t, e, i) {
                function n(e) {
                    i && i(null, e),
                    l.set(t, e)
                }
                function r() {
                    i && i(!0)
                }
                function h() {
                    o--,
                    delete s[t],
                    u.onDeckRequestArgs && (u._get.apply(u, u.onDeckRequestArgs), u.onDeckRequestArgs = null)
                }
                var c, u = this; (c = s[t]) ? c.done(n).fail(r) : a > o ? (o++, s[t] = this._send(t, e).done(n).fail(r).always(h)) : this.onDeckRequestArgs = [].slice.call(arguments, 0)
            },
            get: function(t, i, n) {
                var r;
                return e.isFunction(i) && (n = i, i = {}),
                (r = l.get(t)) ? e.defer(function() {
                    n && n(null, r)
                }) : this._get(t, i, n),
                !!r
            }
        }),
        i
    } (),
    a = function() {
        function i(e) {
            e = e || {},
            e.datumTokenizer && e.queryTokenizer || t.error("datumTokenizer and queryTokenizer are both required"),
            this.datumTokenizer = e.datumTokenizer,
            this.queryTokenizer = e.queryTokenizer,
            this.reset()
        }
        function n(t) {
            return t = e.filter(t,
            function(t) {
                return !! t
            }),
            t = e.map(t,
            function(t) {
                return t.toLowerCase()
            })
        }
        function r() {
            return {
                ids: [],
                children: {}
            }
        }
        function o(t) {
            for (var e = {},
            i = [], n = 0; n < t.length; n++) e[t[n]] || (e[t[n]] = !0, i.push(t[n]));
            return i
        }
        function s(t, e) {
            function i(t, e) {
                return t - e
            }
            var n = 0,
            r = 0,
            o = [];
            for (t = t.sort(i), e = e.sort(i); n < t.length && r < e.length;) t[n] < e[r] ? n++:t[n] > e[r] ? r++:(o.push(t[n]), n++, r++);
            return o
        }
        return e.mixin(i.prototype, {
            bootstrap: function(t) {
                this.datums = t.datums,
                this.trie = t.trie
            },
            add: function(t) {
                var i = this;
                t = e.isArray(t) ? t: [t],
                e.each(t,
                function(t) {
                    var o, s;
                    o = i.datums.push(t) - 1,
                    s = n(i.datumTokenizer(t)),
                    e.each(s,
                    function(t) {
                        var e, n, s;
                        for (e = i.trie, n = t.split(""); s = n.shift();) e = e.children[s] || (e.children[s] = r()),
                        e.ids.push(o)
                    })
                })
            },
            get: function(t) {
                var i, r, a = this;
                return i = n(this.queryTokenizer(t)),
                e.each(i,
                function(t) {
                    var e, i, n, o;
                    if (r && 0 === r.length) return ! 1;
                    for (e = a.trie, i = t.split(""); e && (n = i.shift());) e = e.children[n];
                    return e && 0 === i.length ? (o = e.ids.slice(0), void(r = r ? s(r, o) : o)) : (r = [], !1)
                }),
                r ? e.map(o(r),
                function(t) {
                    return a.datums[t]
                }) : []
            },
            reset: function() {
                this.datums = [],
                this.trie = r()
            },
            serialize: function() {
                return {
                    datums: this.datums,
                    trie: this.trie
                }
            }
        }),
        i
    } (),
    l = function() {
        function n(t) {
            return t.local || null
        }
        function r(n) {
            var r, o;
            return o = {
                url: null,
                thumbprint: "",
                ttl: 864e5,
                filter: null,
                ajax: {}
            },
            (r = n.prefetch || null) && (r = e.isString(r) ? {
                url: r
            }: r, r = e.mixin(o, r), r.thumbprint = i + r.thumbprint, r.ajax.type = r.ajax.type || "GET", r.ajax.dataType = r.ajax.dataType || "json", !r.url && t.error("prefetch requires url to be set")),
            r
        }
        function o(i) {
            function n(t) {
                return function(i) {
                    return e.debounce(i, t)
                }
            }
            function r(t) {
                return function(i) {
                    return e.throttle(i, t)
                }
            }
            var o, s;
            return s = {
                url: null,
                wildcard: "%QUERY",
                replace: null,
                rateLimitBy: "debounce",
                rateLimitWait: 300,
                send: null,
                filter: null,
                ajax: {}
            },
            (o = i.remote || null) && (o = e.isString(o) ? {
                url: o
            }: o, o = e.mixin(s, o), o.rateLimiter = /^throttle$/i.test(o.rateLimitBy) ? r(o.rateLimitWait) : n(o.rateLimitWait), o.ajax.type = o.ajax.type || "GET", o.ajax.dataType = o.ajax.dataType || "json", delete o.rateLimitBy, delete o.rateLimitWait, !o.url && t.error("remote requires url to be set")),
            o
        }
        return {
            local: n,
            prefetch: r,
            remote: o
        }
    } (); !
    function(i) {
        function r(e) {
            e && (e.local || e.prefetch || e.remote) || t.error("one of local, prefetch, or remote is required"),
            this.limit = e.limit || 5,
            this.sorter = h(e.sorter),
            this.dupDetector = e.dupDetector || c,
            this.local = l.local(e),
            this.prefetch = l.prefetch(e),
            this.remote = l.remote(e),
            this.cacheKey = this.prefetch ? this.prefetch.cacheKey || this.prefetch.url: null,
            this.index = new a({
                datumTokenizer: e.datumTokenizer,
                queryTokenizer: e.queryTokenizer
            }),
            this.storage = this.cacheKey ? new o(this.cacheKey) : null
        }
        function h(t) {
            function i(e) {
                return e.sort(t)
            }
            function n(t) {
                return t
            }
            return e.isFunction(t) ? i: n
        }
        function c() {
            return ! 1
        }
        var u, d;
        return u = i.Bloodhound,
        d = {
            data: "data",
            protocol: "protocol",
            thumbprint: "thumbprint"
        },
        i.Bloodhound = r,
        r.noConflict = function() {
            return i.Bloodhound = u,
            r
        },
        r.tokenizers = n,
        e.mixin(r.prototype, {
            _loadPrefetch: function(e) {
                function i(t) {
                    o.clear(),
                    o.add(e.filter ? e.filter(t) : t),
                    o._saveToStorage(o.index.serialize(), e.thumbprint, e.ttl)
                }
                var n, r, o = this;
                return (n = this._readFromStorage(e.thumbprint)) ? (this.index.bootstrap(n), r = t.Deferred().resolve()) : r = t.ajax(e.url, e.ajax).done(i),
                r
            },
            _getFromRemote: function(t, e) {
                function i(t, i) {
                    e(t ? [] : o.remote.filter ? o.remote.filter(i) : i)
                }
                var n, r, o = this;
                return t = t || "",
                r = encodeURIComponent(t),
                n = this.remote.replace ? this.remote.replace(this.remote.url, t) : this.remote.url.replace(this.remote.wildcard, r),
                this.transport.get(n, this.remote.ajax, i)
            },
            _saveToStorage: function(t, e, i) {
                this.storage && (this.storage.set(d.data, t, i), this.storage.set(d.protocol, location.protocol, i), this.storage.set(d.thumbprint, e, i))
            },
            _readFromStorage: function(t) {
                var e, i = {};
                return this.storage && (i.data = this.storage.get(d.data), i.protocol = this.storage.get(d.protocol), i.thumbprint = this.storage.get(d.thumbprint)),
                e = i.thumbprint !== t || i.protocol !== location.protocol,
                i.data && !e ? i.data: null
            },
            _initialize: function() {
                function i() {
                    r.add(e.isFunction(o) ? o() : o)
                }
                var n, r = this,
                o = this.local;
                return n = this.prefetch ? this._loadPrefetch(this.prefetch) : t.Deferred().resolve(),
                o && n.done(i),
                this.transport = this.remote ? new s(this.remote) : null,
                this.initPromise = n.promise()
            },
            initialize: function(t) {
                return ! this.initPromise || t ? this._initialize() : this.initPromise
            },
            add: function(t) {
                this.index.add(t)
            },
            get: function(t, i) {
                function n(t) {
                    var n = o.slice(0);
                    e.each(t,
                    function(t) {
                        var i;
                        return i = e.some(n,
                        function(e) {
                            return r.dupDetector(t, e)
                        }),
                        !i && n.push(t),
                        n.length < r.limit
                    }),
                    i && i(r.sorter(n))
                }
                var r = this,
                o = [],
                s = !1;
                o = this.index.get(t),
                o = this.sorter(o).slice(0, this.limit),
                o.length < this.limit && this.transport && (s = this._getFromRemote(t, n)),
                s || (o.length > 0 || !this.transport) && i && i(o)
            },
            clear: function() {
                this.index.reset()
            },
            clearPrefetchCache: function() {
                this.storage && this.storage.clear()
            },
            clearRemoteCache: function() {
                this.transport && s.resetCache()
            },
            ttAdapter: function() {
                return e.bind(this.get, this)
            }
        }),
        r
    } (this);
    var h = {
        wrapper: '<span class="twitter-typeahead"></span>',
        dropdown: '<span class="tt-dropdown-menu"></span>',
        dataset: '<div class="tt-dataset-%CLASS%"></div>',
        suggestions: '<span class="tt-suggestions"></span>',
        suggestion: '<div class="tt-suggestion"></div>'
    },
    c = {
        wrapper: {
            position: "relative",
            display: "inline-block"
        },
        hint: {
            position: "absolute",
            top: "0",
            left: "0",
            borderColor: "transparent",
            boxShadow: "none"
        },
        input: {
            position: "relative",
            verticalAlign: "top",
            backgroundColor: "transparent"
        },
        inputWithNoHint: {
            position: "relative",
            verticalAlign: "top"
        },
        dropdown: {
            position: "absolute",
            top: "100%",
            left: "0",
            zIndex: "100",
            display: "none"
        },
        suggestions: {
            display: "block"
        },
        suggestion: {
            whiteSpace: "nowrap",
            cursor: "pointer"
        },
        suggestionChild: {
            whiteSpace: "normal"
        },
        ltr: {
            left: "0",
            right: "auto"
        },
        rtl: {
            left: "auto",
            right: " 0"
        }
    };
    e.isMsie() && e.mixin(c.input, {
        backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"
    }),
    e.isMsie() && e.isMsie() <= 7 && e.mixin(c.input, {
        marginTop: "-1px"
    });
    var u = function() {
        function i(e) {
            e && e.el || t.error("EventBus initialized without el"),
            this.$el = t(e.el)
        }
        var n = "typeahead:";
        return e.mixin(i.prototype, {
            trigger: function(t) {
                var e = [].slice.call(arguments, 1);
                this.$el.trigger(n + t, e)
            }
        }),
        i
    } (),
    d = function() {
        function t(t, e, i, n) {
            var r;
            if (!i) return this;
            for (e = e.split(l), i = n ? a(i, n) : i, this._callbacks = this._callbacks || {}; r = e.shift();) this._callbacks[r] = this._callbacks[r] || {
                sync: [],
                async: []
            },
            this._callbacks[r][t].push(i);
            return this
        }
        function e(e, i, n) {
            return t.call(this, "async", e, i, n)
        }
        function i(e, i, n) {
            return t.call(this, "sync", e, i, n)
        }
        function n(t) {
            var e;
            if (!this._callbacks) return this;
            for (t = t.split(l); e = t.shift();) delete this._callbacks[e];
            return this
        }
        function r(t) {
            var e, i, n, r, s;
            if (!this._callbacks) return this;
            for (t = t.split(l), n = [].slice.call(arguments, 1); (e = t.shift()) && (i = this._callbacks[e]);) r = o(i.sync, this, [e].concat(n)),
            s = o(i.async, this, [e].concat(n)),
            r() && h(s);
            return this
        }
        function o(t, e, i) {
            function n() {
                for (var n, r = 0; ! n && r < t.length; r += 1) n = t[r].apply(e, i) === !1;
                return ! n
            }
            return n
        }
        function s() {
            var t;
            return t = window.setImmediate ?
            function(t) {
                setImmediate(function() {
                    t()
                })
            }: function(t) {
                setTimeout(function() {
                    t()
                },
                0)
            }
        }
        function a(t, e) {
            return t.bind ? t.bind(e) : function() {
                t.apply(e, [].slice.call(arguments, 0))
            }
        }
        var l = /\s+/,
        h = s();
        return {
            onSync: i,
            onAsync: e,
            off: n,
            trigger: r
        }
    } (),
    p = function(t) {
        function i(t, i, n) {
            for (var r, o = [], s = 0; s < t.length; s++) o.push(e.escapeRegExChars(t[s]));
            return r = n ? "\\b(" + o.join("|") + ")\\b": "(" + o.join("|") + ")",
            i ? new RegExp(r) : new RegExp(r, "i")
        }
        var n = {
            node: null,
            pattern: null,
            tagName: "strong",
            className: null,
            wordsOnly: !1,
            caseSensitive: !1
        };
        return function(r) {
            function o(e) {
                var i, n;
                return (i = a.exec(e.data)) && (wrapperNode = t.createElement(r.tagName), r.className && (wrapperNode.className = r.className), n = e.splitText(i.index), n.splitText(i[0].length), wrapperNode.appendChild(n.cloneNode(!0)), e.parentNode.replaceChild(wrapperNode, n)),
                !!i
            }
            function s(t, e) {
                for (var i, n = 3,
                r = 0; r < t.childNodes.length; r++) i = t.childNodes[r],
                i.nodeType === n ? r += e(i) ? 1 : 0 : s(i, e)
            }
            var a;
            r = e.mixin({},
            n, r),
            r.node && r.pattern && (r.pattern = e.isArray(r.pattern) ? r.pattern: [r.pattern], a = i(r.pattern, r.caseSensitive, r.wordsOnly), s(r.node, o))
        }
    } (window.document),
    f = function() {
        function i(i) {
            var r, o, a, l, h = this;
            i = i || {},
            i.input || t.error("input is missing"),
            r = e.bind(this._onBlur, this),
            o = e.bind(this._onFocus, this),
            a = e.bind(this._onKeydown, this),
            l = e.bind(this._onInput, this),
            this.$hint = t(i.hint),
            this.$input = t(i.input).on("blur.tt", r).on("focus.tt", o).on("keydown.tt", a),
            0 === this.$hint.length && (this.setHint = this.getHint = this.clearHint = this.clearHintIfInvalid = e.noop),
            e.isMsie() ? this.$input.on("keydown.tt keypress.tt cut.tt paste.tt",
            function(t) {
                s[t.which || t.keyCode] || e.defer(e.bind(h._onInput, h, t))
            }) : this.$input.on("input.tt", l),
            this.query = this.$input.val(),
            this.$overflowHelper = n(this.$input)
        }
        function n(e) {
            return t('<pre aria-hidden="true"></pre>').css({
                position: "absolute",
                visibility: "hidden",
                whiteSpace: "pre",
                fontFamily: e.css("font-family"),
                fontSize: e.css("font-size"),
                fontStyle: e.css("font-style"),
                fontVariant: e.css("font-variant"),
                fontWeight: e.css("font-weight"),
                wordSpacing: e.css("word-spacing"),
                letterSpacing: e.css("letter-spacing"),
                textIndent: e.css("text-indent"),
                textRendering: e.css("text-rendering"),
                textTransform: e.css("text-transform")
            }).insertAfter(e)
        }
        function r(t, e) {
            return i.normalizeQuery(t) === i.normalizeQuery(e)
        }
        function o(t) {
            return t.altKey || t.ctrlKey || t.metaKey || t.shiftKey
        }
        var s;
        return s = {
            9 : "tab",
            27 : "esc",
            37 : "left",
            39 : "right",
            13 : "enter",
            38 : "up",
            40 : "down"
        },
        i.normalizeQuery = function(t) {
            return (t || "").replace(/^\s*/g, "").replace(/\s{2,}/g, " ")
        },
        e.mixin(i.prototype, d, {
            _onBlur: function() {
                this.resetInputValue(),
                this.trigger("blurred")
            },
            _onFocus: function() {
                this.trigger("focused")
            },
            _onKeydown: function(t) {
                var e = s[t.which || t.keyCode];
                this._managePreventDefault(e, t),
                e && this._shouldTrigger(e, t) && this.trigger(e + "Keyed", t)
            },
            _onInput: function() {
                this._checkInputValue()
            },
            _managePreventDefault: function(t, e) {
                var i, n, r;
                switch (t) {
                case "tab":
                    n = this.getHint(),
                    r = this.getInputValue(),
                    i = n && n !== r && !o(e);
                    break;
                case "up":
                case "down":
                    i = !o(e);
                    break;
                default:
                    i = !1
                }
                i && e.preventDefault()
            },
            _shouldTrigger: function(t, e) {
                var i;
                switch (t) {
                case "tab":
                    i = !o(e);
                    break;
                default:
                    i = !0
                }
                return i
            },
            _checkInputValue: function() {
                var t, e, i;
                t = this.getInputValue(),
                e = r(t, this.query),
                i = e ? this.query.length !== t.length: !1,
                e ? i && this.trigger("whitespaceChanged", this.query) : this.trigger("queryChanged", this.query = t)
            },
            focus: function() {
                this.$input.focus()
            },
            blur: function() {
                this.$input.blur()
            },
            getQuery: function() {
                return this.query
            },
            setQuery: function(t) {
                this.query = t
            },
            getInputValue: function() {
                return this.$input.val()
            },
            setInputValue: function(t, e) {
                this.$input.val(t),
                e ? this.clearHint() : this._checkInputValue()
            },
            resetInputValue: function() {
                this.setInputValue(this.query, !0)
            },
            getHint: function() {
                return this.$hint.val()
            },
            setHint: function(t) {
                this.$hint.val(t)
            },
            clearHint: function() {
                this.setHint("")
            },
            clearHintIfInvalid: function() {
                var t, e, i, n;
                t = this.getInputValue(),
                e = this.getHint(),
                i = t !== e && 0 === e.indexOf(t),
                n = "" !== t && i && !this.hasOverflow(),
                !n && this.clearHint()
            },
            getLanguageDirection: function() {
                return (this.$input.css("direction") || "ltr").toLowerCase()
            },
            hasOverflow: function() {
                var t = this.$input.width() - 2;
                return this.$overflowHelper.text(this.getInputValue()),
                this.$overflowHelper.width() >= t
            },
            isCursorAtEnd: function() {
                var t, i, n;
                return t = this.$input.val().length,
                i = this.$input[0].selectionStart,
                e.isNumber(i) ? i === t: document.selection ? (n = document.selection.createRange(), n.moveStart("character", -t), t === n.text.length) : !0
            },
            destroy: function() {
                this.$hint.off(".tt"),
                this.$input.off(".tt"),
                this.$hint = this.$input = this.$overflowHelper = null
            }
        }),
        i
    } (),
    g = function() {
        function i(i) {
            i = i || {},
            i.templates = i.templates || {},
            i.source || t.error("missing source"),
            i.name && !o(i.name) && t.error("invalid dataset name: " + i.name),
            this.query = null,
            this.highlight = !!i.highlight,
            this.name = i.name || e.getUniqueId(),
            this.source = i.source,
            this.displayFn = n(i.display || i.displayKey),
            this.templates = r(i.templates, this.displayFn),
            this.$el = t(h.dataset.replace("%CLASS%", this.name))
        }
        function n(t) {
            function i(e) {
                return e[t]
            }
            return t = t || "value",
            e.isFunction(t) ? t: i
        }
        function r(t, i) {
            function n(t) {
                return "<p>" + i(t) + "</p>"
            }
            return {
                empty: t.empty && e.templatify(t.empty),
                header: t.header && e.templatify(t.header),
                footer: t.footer && e.templatify(t.footer),
                suggestion: t.suggestion || n
            }
        }
        function o(t) {
            return /^[_a-zA-Z0-9-]+$/.test(t)
        }
        var s = "ttDataset",
        a = "ttValue",
        l = "ttDatum";
        return i.extractDatasetName = function(e) {
            return t(e).data(s)
        },
        i.extractValue = function(e) {
            return t(e).data(a)
        },
        i.extractDatum = function(e) {
            return t(e).data(l)
        },
        e.mixin(i.prototype, d, {
            _render: function(i, n) {
                function r() {
                    return g.templates.empty({
                        query: i,
                        isEmpty: !0
                    })
                }
                function o() {
                    function r(e) {
                        var i;
                        return i = t(h.suggestion).append(g.templates.suggestion(e)).data(s, g.name).data(a, g.displayFn(e)).data(l, e),
                        i.children().each(function() {
                            t(this).css(c.suggestionChild)
                        }),
                        i
                    }
                    var o, u;
                    return o = t(h.suggestions).css(c.suggestions),
                    u = e.map(n, r),
                    o.append.apply(o, u),
                    g.highlight && p({
                        node: o[0],
                        pattern: i
                    }),
                    o
                }
                function u() {
                    return g.templates.header({
                        query: i,
                        isEmpty: !f
                    })
                }
                function d() {
                    return g.templates.footer({
                        query: i,
                        isEmpty: !f
                    })
                }
                if (this.$el) {
                    var f, g = this;
                    this.$el.empty(),
                    f = n && n.length,
                    !f && this.templates.empty ? this.$el.html(r()).prepend(g.templates.header ? u() : null).append(g.templates.footer ? d() : null) : f && this.$el.html(o()).prepend(g.templates.header ? u() : null).append(g.templates.footer ? d() : null),
                    this.trigger("rendered")
                }
            },
            getRoot: function() {
                return this.$el
            },
            update: function(t) {
                function e(e) {
                    i.canceled || t !== i.query || i._render(t, e)
                }
                var i = this;
                this.query = t,
                this.canceled = !1,
                this.source(t, e)
            },
            cancel: function() {
                this.canceled = !0
            },
            clear: function() {
                this.cancel(),
                this.$el.empty(),
                this.trigger("rendered")
            },
            isEmpty: function() {
                return this.$el.is(":empty")
            },
            destroy: function() {
                this.$el = null
            }
        }),
        i
    } (),
    m = function() {
        function i(i) {
            var r, o, s, a = this;
            i = i || {},
            i.menu || t.error("menu is required"),
            this.isOpen = !1,
            this.isEmpty = !0,
            this.datasets = e.map(i.datasets, n),
            r = e.bind(this._onSuggestionClick, this),
            o = e.bind(this._onSuggestionMouseEnter, this),
            s = e.bind(this._onSuggestionMouseLeave, this),
            this.$menu = t(i.menu).on("click.tt", ".tt-suggestion", r).on("mouseenter.tt", ".tt-suggestion", o).on("mouseleave.tt", ".tt-suggestion", s),
            e.each(this.datasets,
            function(t) {
                a.$menu.append(t.getRoot()),
                t.onSync("rendered", a._onRendered, a)
            })
        }
        function n(t) {
            return new g(t)
        }
        return e.mixin(i.prototype, d, {
            _onSuggestionClick: function(e) {
                this.trigger("suggestionClicked", t(e.currentTarget))
            },
            _onSuggestionMouseEnter: function(e) {
                this._removeCursor(),
                this._setCursor(t(e.currentTarget), !0)
            },
            _onSuggestionMouseLeave: function() {
                this._removeCursor()
            },
            _onRendered: function() {
                function t(t) {
                    return t.isEmpty()
                }
                this.isEmpty = e.every(this.datasets, t),
                this.isEmpty ? this._hide() : this.isOpen && this._show(),
                this.trigger("datasetRendered")
            },
            _hide: function() {
                this.$menu.hide()
            },
            _show: function() {
                this.$menu.css("display", "block")
            },
            _getSuggestions: function() {
                return this.$menu.find(".tt-suggestion")
            },
            _getCursor: function() {
                return this.$menu.find(".tt-cursor").first()
            },
            _setCursor: function(t, e) {
                t.first().addClass("tt-cursor"),
                !e && this.trigger("cursorMoved")
            },
            _removeCursor: function() {
                this._getCursor().removeClass("tt-cursor")
            },
            _moveCursor: function(t) {
                var e, i, n, r;
                if (this.isOpen) {
                    if (i = this._getCursor(), e = this._getSuggestions(), this._removeCursor(), n = e.index(i) + t, n = (n + 1) % (e.length + 1) - 1, -1 === n) return void this.trigger("cursorRemoved"); - 1 > n && (n = e.length - 1),
                    this._setCursor(r = e.eq(n)),
                    this._ensureVisible(r)
                }
            },
            _ensureVisible: function(t) {
                var e, i, n, r;
                e = t.position().top,
                i = e + t.outerHeight(!0),
                n = this.$menu.scrollTop(),
                r = this.$menu.height() + parseInt(this.$menu.css("paddingTop"), 10) + parseInt(this.$menu.css("paddingBottom"), 10),
                0 > e ? this.$menu.scrollTop(n + e) : i > r && this.$menu.scrollTop(n + (i - r))
            },
            close: function() {
                this.isOpen && (this.isOpen = !1, this._removeCursor(), this._hide(), this.trigger("closed"))
            },
            open: function() {
                this.isOpen || (this.isOpen = !0, !this.isEmpty && this._show(), this.trigger("opened"))
            },
            setLanguageDirection: function(t) {
                this.$menu.css("ltr" === t ? c.ltr: c.rtl)
            },
            moveCursorUp: function() {
                this._moveCursor( - 1)
            },
            moveCursorDown: function() {
                this._moveCursor(1)
            },
            getDatumForSuggestion: function(t) {
                var e = null;
                return t.length && (e = {
                    raw: g.extractDatum(t),
                    value: g.extractValue(t),
                    datasetName: g.extractDatasetName(t)
                }),
                e
            },
            getDatumForCursor: function() {
                return this.getDatumForSuggestion(this._getCursor().first())
            },
            getDatumForTopSuggestion: function() {
                return this.getDatumForSuggestion(this._getSuggestions().first())
            },
            update: function(t) {
                function i(e) {
                    e.update(t)
                }
                e.each(this.datasets, i)
            },
            empty: function() {
                function t(t) {
                    t.clear()
                }
                e.each(this.datasets, t),
                this.isEmpty = !0
            },
            isVisible: function() {
                return this.isOpen && !this.isEmpty
            },
            destroy: function() {
                function t(t) {
                    t.destroy()
                }
                this.$menu.off(".tt"),
                this.$menu = null,
                e.each(this.datasets, t)
            }
        }),
        i
    } (),
    v = function() {
        function i(i) {
            var r, o, s;
            i = i || {},
            i.input || t.error("missing input"),
            this.isActivated = !1,
            this.autoselect = !!i.autoselect,
            this.minLength = e.isNumber(i.minLength) ? i.minLength: 1,
            this.$node = n(i.input, i.withHint),
            r = this.$node.find(".tt-dropdown-menu"),
            o = this.$node.find(".tt-input"),
            s = this.$node.find(".tt-hint"),
            o.on("blur.tt",
            function(t) {
                var i, n, s;
                i = document.activeElement,
                n = r.is(i),
                s = r.has(i).length > 0,
                e.isMsie() && (n || s) && (t.preventDefault(), t.stopImmediatePropagation(), e.defer(function() {
                    o.focus()
                }))
            }),
            r.on("mousedown.tt",
            function(t) {
                t.preventDefault()
            }),
            this.eventBus = i.eventBus || new u({
                el: o
            }),
            this.dropdown = new m({
                menu: r,
                datasets: i.datasets
            }).onSync("suggestionClicked", this._onSuggestionClicked, this).onSync("cursorMoved", this._onCursorMoved, this).onSync("cursorRemoved", this._onCursorRemoved, this).onSync("opened", this._onOpened, this).onSync("closed", this._onClosed, this).onAsync("datasetRendered", this._onDatasetRendered, this),
            this.input = new f({
                input: o,
                hint: s
            }).onSync("focused", this._onFocused, this).onSync("blurred", this._onBlurred, this).onSync("enterKeyed", this._onEnterKeyed, this).onSync("tabKeyed", this._onTabKeyed, this).onSync("escKeyed", this._onEscKeyed, this).onSync("upKeyed", this._onUpKeyed, this).onSync("downKeyed", this._onDownKeyed, this).onSync("leftKeyed", this._onLeftKeyed, this).onSync("rightKeyed", this._onRightKeyed, this).onSync("queryChanged", this._onQueryChanged, this).onSync("whitespaceChanged", this._onWhitespaceChanged, this),
            this._setLanguageDirection()
        }
        function n(e, i) {
            var n, o, a, l;
            n = t(e),
            o = t(h.wrapper).css(c.wrapper),
            a = t(h.dropdown).css(c.dropdown),
            l = n.clone().css(c.hint).css(r(n)),
            l.val("").removeData().addClass("tt-hint").removeAttr("id name placeholder").prop("disabled", !0).attr({
                autocomplete: "off",
                spellcheck: "false"
            }),
            n.data(s, {
                dir: n.attr("dir"),
                autocomplete: n.attr("autocomplete"),
                spellcheck: n.attr("spellcheck"),
                style: n.attr("style")
            }),
            n.addClass("tt-input").attr({
                autocomplete: "off",
                spellcheck: !1
            }).css(i ? c.input: c.inputWithNoHint);
            try { ! n.attr("dir") && n.attr("dir", "auto")
            } catch(u) {}
            return n.wrap(o).parent().prepend(i ? l: null).append(a)
        }
        function r(t) {
            return {
                backgroundAttachment: t.css("background-attachment"),
                backgroundClip: t.css("background-clip"),
                backgroundColor: t.css("background-color"),
                backgroundImage: t.css("background-image"),
                backgroundOrigin: t.css("background-origin"),
                backgroundPosition: t.css("background-position"),
                backgroundRepeat: t.css("background-repeat"),
                backgroundSize: t.css("background-size")
            }
        }
        function o(t) {
            var i = t.find(".tt-input");
            e.each(i.data(s),
            function(t, n) {
                e.isUndefined(t) ? i.removeAttr(n) : i.attr(n, t)
            }),
            i.detach().removeData(s).removeClass("tt-input").insertAfter(t),
            t.remove()
        }
        var s = "ttAttrs";
        return e.mixin(i.prototype, {
            _onSuggestionClicked: function(t, e) {
                var i; (i = this.dropdown.getDatumForSuggestion(e)) && this._select(i)
            },
            _onCursorMoved: function() {
                var t = this.dropdown.getDatumForCursor();
                this.input.setInputValue(t.value, !0),
                this.eventBus.trigger("cursorchanged", t.raw, t.datasetName)
            },
            _onCursorRemoved: function() {
                this.input.resetInputValue(),
                this._updateHint()
            },
            _onDatasetRendered: function() {
                this._updateHint()
            },
            _onOpened: function() {
                this._updateHint(),
                this.eventBus.trigger("opened")
            },
            _onClosed: function() {
                this.input.clearHint(),
                this.eventBus.trigger("closed")
            },
            _onFocused: function() {
                this.isActivated = !0,
                this.dropdown.open()
            },
            _onBlurred: function() {
                this.isActivated = !1,
                this.dropdown.empty(),
                this.dropdown.close()
            },
            _onEnterKeyed: function(t, e) {
                var i, n;
                i = this.dropdown.getDatumForCursor(),
                n = this.dropdown.getDatumForTopSuggestion(),
                i ? (this._select(i), e.preventDefault()) : this.autoselect && n && (this._select(n), e.preventDefault())
            },
            _onTabKeyed: function(t, e) {
                var i; (i = this.dropdown.getDatumForCursor()) ? (this._select(i), e.preventDefault()) : this._autocomplete(!0)
            },
            _onEscKeyed: function() {
                this.dropdown.close(),
                this.input.resetInputValue()
            },
            _onUpKeyed: function() {
                var t = this.input.getQuery();
                this.dropdown.isEmpty && t.length >= this.minLength ? this.dropdown.update(t) : this.dropdown.moveCursorUp(),
                this.dropdown.open()
            },
            _onDownKeyed: function() {
                var t = this.input.getQuery();
                this.dropdown.isEmpty && t.length >= this.minLength ? this.dropdown.update(t) : this.dropdown.moveCursorDown(),
                this.dropdown.open()
            },
            _onLeftKeyed: function() {
                "rtl" === this.dir && this._autocomplete()
            },
            _onRightKeyed: function() {
                "ltr" === this.dir && this._autocomplete()
            },
            _onQueryChanged: function(t, e) {
                this.input.clearHintIfInvalid(),
                e.length >= this.minLength ? this.dropdown.update(e) : this.dropdown.empty(),
                this.dropdown.open(),
                this._setLanguageDirection()
            },
            _onWhitespaceChanged: function() {
                this._updateHint(),
                this.dropdown.open()
            },
            _setLanguageDirection: function() {
                var t;
                this.dir !== (t = this.input.getLanguageDirection()) && (this.dir = t, this.$node.css("direction", t), this.dropdown.setLanguageDirection(t))
            },
            _updateHint: function() {
                var t, i, n, r, o, s;
                t = this.dropdown.getDatumForTopSuggestion(),
                t && this.dropdown.isVisible() && !this.input.hasOverflow() ? (i = this.input.getInputValue(), n = f.normalizeQuery(i), r = e.escapeRegExChars(n), o = new RegExp("^(?:" + r + ")(.+$)", "i"), s = o.exec(t.value), s ? this.input.setHint(i + s[1]) : this.input.clearHint()) : this.input.clearHint()
            },
            _autocomplete: function(t) {
                var e, i, n, r;
                e = this.input.getHint(),
                i = this.input.getQuery(),
                n = t || this.input.isCursorAtEnd(),
                e && i !== e && n && (r = this.dropdown.getDatumForTopSuggestion(), r && this.input.setInputValue(r.value), this.eventBus.trigger("autocompleted", r.raw, r.datasetName))
            },
            _select: function(t) {
                this.input.setQuery(t.value),
                this.input.setInputValue(t.value, !0),
                this._setLanguageDirection(),
                this.eventBus.trigger("selected", t.raw, t.datasetName),
                this.dropdown.close(),
                e.defer(e.bind(this.dropdown.empty, this.dropdown))
            },
            open: function() {
                this.dropdown.open()
            },
            close: function() {
                this.dropdown.close()
            },
            setVal: function(t) {
                this.isActivated ? this.input.setInputValue(t) : (this.input.setQuery(t), this.input.setInputValue(t, !0)),
                this._setLanguageDirection()
            },
            getVal: function() {
                return this.input.getQuery()
            },
            destroy: function() {
                this.input.destroy(),
                this.dropdown.destroy(),
                o(this.$node),
                this.$node = null
            }
        }),
        i
    } (); !
    function() {
        var i, n, r;
        i = t.fn.typeahead,
        n = "ttTypeahead",
        r = {
            initialize: function(i, r) {
                function o() {
                    var o, s, a = t(this);
                    e.each(r,
                    function(t) {
                        t.highlight = !!i.highlight
                    }),
                    s = new v({
                        input: a,
                        eventBus: o = new u({
                            el: a
                        }),
                        withHint: e.isUndefined(i.hint) ? !0 : !!i.hint,
                        minLength: i.minLength,
                        autoselect: i.autoselect,
                        datasets: r
                    }),
                    a.data(n, s)
                }
                return r = e.isArray(r) ? r: [].slice.call(arguments, 1),
                i = i || {},
                this.each(o)
            },
            open: function() {
                function e() {
                    var e, i = t(this); (e = i.data(n)) && e.open()
                }
                return this.each(e)
            },
            close: function() {
                function e() {
                    var e, i = t(this); (e = i.data(n)) && e.close()
                }
                return this.each(e)
            },
            val: function(e) {
                function i() {
                    var i, r = t(this); (i = r.data(n)) && i.setVal(e)
                }
                function r(t) {
                    var e, i;
                    return (e = t.data(n)) && (i = e.getVal()),
                    i
                }
                return arguments.length ? this.each(i) : r(this.first())
            },
            destroy: function() {
                function e() {
                    var e, i = t(this); (e = i.data(n)) && (e.destroy(), i.removeData(n))
                }
                return this.each(e)
            }
        },
        t.fn.typeahead = function(t) {
            return r[t] ? r[t].apply(this, [].slice.call(arguments, 1)) : r.initialize.apply(this, arguments)
        },
        t.fn.typeahead.noConflict = function() {
            return t.fn.typeahead = i,
            this
        }
    } ()
} (window.jQuery),
this.Handlebars = function() {
    var t = function() {
        "use strict";
        function t(t) {
            this.string = t
        }
        var e;
        return t.prototype.toString = function() {
            return "" + this.string
        },
        e = t
    } (),
    e = function(t) {
        "use strict";
        function e(t) {
            return l[t] || "&amp;"
        }
        function i(t) {
            for (var e = 1; e < arguments.length; e++) for (var i in arguments[e]) Object.prototype.hasOwnProperty.call(arguments[e], i) && (t[i] = arguments[e][i]);
            return t
        }
        function n(t) {
            return t instanceof a ? t.toString() : t || 0 === t ? (t = "" + t, c.test(t) ? t.replace(h, e) : t) : ""
        }
        function r(t) {
            return t || 0 === t ? p(t) && 0 === t.length ? !0 : !1 : !0
        }
        function o(t, e) {
            return (t ? t + ".": "") + e
        }
        var s = {},
        a = t,
        l = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;"
        },
        h = /[&<>"'`]/g,
        c = /[&<>"'`]/;
        s.extend = i;
        var u = Object.prototype.toString;
        s.toString = u;
        var d = function(t) {
            return "function" == typeof t
        };
        d(/x/) && (d = function(t) {
            return "function" == typeof t && "[object Function]" === u.call(t)
        });
        var d;
        s.isFunction = d;
        var p = Array.isArray ||
        function(t) {
            return t && "object" == typeof t ? "[object Array]" === u.call(t) : !1
        };
        return s.isArray = p,
        s.escapeExpression = n,
        s.isEmpty = r,
        s.appendContextPath = o,
        s
    } (t),
    i = function() {
        "use strict";
        function t(t, e) {
            var n;
            e && e.firstLine && (n = e.firstLine, t += " - " + n + ":" + e.firstColumn);
            for (var r = Error.prototype.constructor.call(this, t), o = 0; o < i.length; o++) this[i[o]] = r[i[o]];
            n && (this.lineNumber = n, this.column = e.firstColumn)
        }
        var e, i = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];
        return t.prototype = new Error,
        e = t
    } (),
    n = function(t, e) {
        "use strict";
        function i(t, e) {
            this.helpers = t || {},
            this.partials = e || {},
            n(this)
        }
        function n(t) {
            t.registerHelper("helperMissing",
            function() {
                if (1 === arguments.length) return void 0;
                throw new a("Missing helper: '" + arguments[arguments.length - 1].name + "'")
            }),
            t.registerHelper("blockHelperMissing",
            function(e, i) {
                var n = i.inverse ||
                function() {},
                r = i.fn;
                if (d(e) && (e = e.call(this)), e === !0) return r(this);
                if (e === !1 || null == e) return n(this);
                if (u(e)) return e.length > 0 ? (i.ids && (i.ids = [i.name]), t.helpers.each(e, i)) : n(this);
                if (i.data && i.ids) {
                    var o = m(i.data);
                    o.contextPath = s.appendContextPath(i.data.contextPath, i.name),
                    i = {
                        data: o
                    }
                }
                return r(e, i)
            }),
            t.registerHelper("each",
            function(t, e) {
                e || (e = t, t = this);
                var i, n, r = e.fn,
                o = e.inverse,
                a = 0,
                l = "";
                if (e.data && e.ids && (n = s.appendContextPath(e.data.contextPath, e.ids[0]) + "."), d(t) && (t = t.call(this)), e.data && (i = m(e.data)), t && "object" == typeof t) if (u(t)) for (var h = t.length; h > a; a++) i && (i.index = a, i.first = 0 === a, i.last = a === t.length - 1, n && (i.contextPath = n + a)),
                l += r(t[a], {
                    data: i
                });
                else for (var c in t) t.hasOwnProperty(c) && (i && (i.key = c, i.index = a, i.first = 0 === a, n && (i.contextPath = n + c)), l += r(t[c], {
                    data: i
                }), a++);
                return 0 === a && (l = o(this)),
                l
            }),
            t.registerHelper("if",
            function(t, e) {
                return d(t) && (t = t.call(this)),
                !e.hash.includeZero && !t || s.isEmpty(t) ? e.inverse(this) : e.fn(this)
            }),
            t.registerHelper("unless",
            function(e, i) {
                return t.helpers["if"].call(this, e, {
                    fn: i.inverse,
                    inverse: i.fn,
                    hash: i.hash
                })
            }),
            t.registerHelper("with",
            function(t, e) {
                d(t) && (t = t.call(this));
                var i = e.fn;
                if (!s.isEmpty(t)) {
                    if (e.data && e.ids) {
                        var n = m(e.data);
                        n.contextPath = s.appendContextPath(e.data.contextPath, e.ids[0]),
                        e = {
                            data: n
                        }
                    }
                    return i(t, e)
                }
            }),
            t.registerHelper("log",
            function(e, i) {
                var n = i.data && null != i.data.level ? parseInt(i.data.level, 10) : 1;
                t.log(n, e)
            }),
            t.registerHelper("lookup",
            function(t, e) {
                return t && t[e]
            })
        }
        function r(t, e) {
            g.log(t, e)
        }
        var o = {},
        s = t,
        a = e,
        l = "2.0.0-alpha.4";
        o.VERSION = l;
        var h = 5;
        o.COMPILER_REVISION = h;
        var c = {
            1 : "<= 1.0.rc.2",
            2 : "== 1.0.0-rc.3",
            3 : "== 1.0.0-rc.4",
            4 : "== 1.x.x",
            5 : ">= 2.0.0"
        };
        o.REVISION_CHANGES = c;
        var u = s.isArray,
        d = s.isFunction,
        p = s.toString,
        f = "[object Object]";
        o.HandlebarsEnvironment = i,
        i.prototype = {
            constructor: i,
            logger: g,
            log: r,
            registerHelper: function(t, e, i) {
                if (p.call(t) === f) {
                    if (i || e) throw new a("Arg not supported with multiple helpers");
                    s.extend(this.helpers, t)
                } else i && (e.not = i),
                this.helpers[t] = e
            },
            unregisterHelper: function(t) {
                delete this.helpers[t]
            },
            registerPartial: function(t, e) {
                p.call(t) === f ? s.extend(this.partials, t) : this.partials[t] = e
            },
            unregisterPartial: function(t) {
                delete this.partials[t]
            }
        };
        var g = {
            methodMap: {
                0 : "debug",
                1 : "info",
                2 : "warn",
                3 : "error"
            },
            DEBUG: 0,
            INFO: 1,
            WARN: 2,
            ERROR: 3,
            level: 3,
            log: function(t, e) {
                if (g.level <= t) {
                    var i = g.methodMap[t];
                    "undefined" != typeof console && console[i] && console[i].call(console, e)
                }
            }
        };
        o.logger = g,
        o.log = r;
        var m = function(t) {
            var e = s.extend({},
            t);
            return e._parent = t,
            e
        };
        return o.createFrame = m,
        o
    } (e, i),
    r = function(t, e, i) {
        "use strict";
        function n(t) {
            var e = t && t[0] || 1,
            i = p;
            if (e !== i) {
                if (i > e) {
                    var n = f[i],
                    r = f[e];
                    throw new d("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + n + ") or downgrade your runtime to an older version (" + r + ").")
                }
                throw new d("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + t[1] + ").")
            }
        }
        function r(t, e) {
            if (!e) throw new d("No environment passed to template");
            e.VM.checkRevision(t.compiler);
            var i = function(t, i, n, r, o, s, a) {
                r && (n = u.extend({},
                n, r));
                var l = e.VM.invokePartial.call(this, t, i, n, o, s, a);
                if (null != l) return l;
                if (e.compile) {
                    var h = {
                        helpers: o,
                        partials: s,
                        data: a
                    };
                    return s[i] = e.compile(t, {
                        data: void 0 !== a
                    },
                    e),
                    s[i](n, h)
                }
                throw new d("The partial " + i + " could not be compiled when running in runtime-only mode")
            },
            n = {
                escapeExpression: u.escapeExpression,
                invokePartial: i,
                fn: function(e) {
                    return t[e]
                },
                programs: [],
                program: function(t, e) {
                    var i = this.programs[t],
                    n = this.fn(t);
                    return e ? i = s(this, t, n, e) : i || (i = this.programs[t] = s(this, t, n)),
                    i
                },
                programWithDepth: e.VM.programWithDepth,
                data: function(t, e) {
                    for (; t && e--;) t = t._parent;
                    return t
                },
                merge: function(t, e) {
                    var i = t || e;
                    return t && e && t !== e && (i = u.extend({},
                    e, t)),
                    i
                },
                noop: e.VM.noop,
                compilerInfo: t.compiler
            },
            r = function(e, i) {
                i = i || {};
                var o = i.data;
                return r._setup(i),
                !i.partial && t.useData && (o = h(e, o)),
                t.main.call(n, e, n.helpers, n.partials, o)
            };
            return r._setup = function(i) {
                i.partial ? (n.helpers = i.helpers, n.partials = i.partials) : (n.helpers = n.merge(i.helpers, e.helpers), t.usePartial && (n.partials = n.merge(i.partials, e.partials)))
            },
            r._child = function(t) {
                return n.programWithDepth(t)
            },
            r
        }
        function o(t, e) {
            var i = Array.prototype.slice.call(arguments, 2),
            n = this,
            r = n.fn(t),
            o = function(t, o) {
                return o = o || {},
                r.apply(n, [t, n.helpers, n.partials, o.data || e].concat(i))
            };
            return o.program = t,
            o.depth = i.length,
            o
        }
        function s(t, e, i, n) {
            var r = function(e, r) {
                return r = r || {},
                i.call(t, e, t.helpers, t.partials, r.data || n)
            };
            return r.program = e,
            r.depth = 0,
            r
        }
        function a(t, e, i, n, r, o) {
            var s = {
                partial: !0,
                helpers: n,
                partials: r,
                data: o
            };
            if (void 0 === t) throw new d("The partial " + e + " could not be found");
            return t instanceof Function ? t(i, s) : void 0
        }
        function l() {
            return ""
        }
        function h(t, e) {
            return e && "root" in e || (e = e ? g(e) : {},
            e.root = t),
            e
        }
        var c = {},
        u = t,
        d = e,
        p = i.COMPILER_REVISION,
        f = i.REVISION_CHANGES,
        g = i.createFrame;
        return c.checkRevision = n,
        c.template = r,
        c.programWithDepth = o,
        c.program = s,
        c.invokePartial = a,
        c.noop = l,
        c
    } (e, i, n),
    o = function(t, e, i, n, r) {
        "use strict";
        var o, s = t,
        a = e,
        l = i,
        h = n,
        c = r,
        u = function() {
            var t = new s.HandlebarsEnvironment;
            return h.extend(t, s),
            t.SafeString = a,
            t.Exception = l,
            t.Utils = h,
            t.VM = c,
            t.template = function(e) {
                return c.template(e, t)
            },
            t
        },
        d = u();
        return d.create = u,
        o = d
    } (n, t, i, e, r),
    s = function(t) {
        "use strict";
        function e(t) {
            t = t || {},
            this.firstLine = t.first_line,
            this.firstColumn = t.first_column,
            this.lastColumn = t.last_column,
            this.lastLine = t.last_line
        }
        var i, n = t,
        r = {
            ProgramNode: function(t, i, n, o) {
                var s, a;
                3 === arguments.length ? (o = n, n = null) : 2 === arguments.length && (o = i, i = null),
                e.call(this, o),
                this.type = "program",
                this.statements = t,
                this.strip = {},
                n ? (a = n[0], a ? (s = {
                    first_line: a.firstLine,
                    last_line: a.lastLine,
                    last_column: a.lastColumn,
                    first_column: a.firstColumn
                },
                this.inverse = new r.ProgramNode(n, i, s)) : this.inverse = new r.ProgramNode(n, i), this.strip.right = i.left) : i && (this.strip.left = i.right)
            },
            MustacheNode: function(t, i, n, o, s) {
                if (e.call(this, s), this.type = "mustache", this.strip = o, null != n && n.charAt) {
                    var a = n.charAt(3) || n.charAt(2);
                    this.escaped = "{" !== a && "&" !== a
                } else this.escaped = !!n;
                this.sexpr = t instanceof r.SexprNode ? t: new r.SexprNode(t, i),
                this.sexpr.isRoot = !0,
                this.id = this.sexpr.id,
                this.params = this.sexpr.params,
                this.hash = this.sexpr.hash,
                this.eligibleHelper = this.sexpr.eligibleHelper,
                this.isHelper = this.sexpr.isHelper
            },
            SexprNode: function(t, i, n) {
                e.call(this, n),
                this.type = "sexpr",
                this.hash = i;
                var r = this.id = t[0],
                o = this.params = t.slice(1);
                this.isHelper = !(!o.length && !i),
                this.eligibleHelper = this.isHelper || r.isSimple
            },
            PartialNode: function(t, i, n, r, o) {
                e.call(this, o),
                this.type = "partial",
                this.partialName = t,
                this.context = i,
                this.hash = n,
                this.strip = r
            },
            BlockNode: function(t, i, r, o, s) {
                if (e.call(this, s), t.sexpr.id.original !== o.path.original) throw new n(t.sexpr.id.original + " doesn't match " + o.path.original, this);
                this.type = "block",
                this.mustache = t,
                this.program = i,
                this.inverse = r,
                this.strip = {
                    left: t.strip.left,
                    right: o.strip.right
                },
                (i || r).strip.left = t.strip.right,
                (r || i).strip.right = o.strip.left,
                r && !i && (this.isInverse = !0)
            },
            RawBlockNode: function(t, i, o, s) {
                if (e.call(this, s), t.sexpr.id.original !== o) throw new n(t.sexpr.id.original + " doesn't match " + o, this);
                i = new r.ContentNode(i, s),
                this.type = "block",
                this.mustache = t,
                this.program = new r.ProgramNode([i], s)
            },
            ContentNode: function(t, i) {
                e.call(this, i),
                this.type = "content",
                this.string = t
            },
            HashNode: function(t, i) {
                e.call(this, i),
                this.type = "hash",
                this.pairs = t
            },
            IdNode: function(t, i) {
                e.call(this, i),
                this.type = "ID";
                for (var r = "",
                o = [], s = 0, a = "", l = 0, h = t.length; h > l; l++) {
                    var c = t[l].part;
                    if (r += (t[l].separator || "") + c, ".." === c || "." === c || "this" === c) {
                        if (o.length > 0) throw new n("Invalid path: " + r, this);
                        ".." === c ? (s++, a += "../") : this.isScoped = !0
                    } else o.push(c)
                }
                this.original = r,
                this.parts = o,
                this.string = o.join("."),
                this.depth = s,
                this.idName = a + this.string,
                this.isSimple = 1 === t.length && !this.isScoped && 0 === s,
                this.stringModeValue = this.string
            },
            PartialNameNode: function(t, i) {
                e.call(this, i),
                this.type = "PARTIAL_NAME",
                this.name = t.original
            },
            DataNode: function(t, i) {
                e.call(this, i),
                this.type = "DATA",
                this.id = t,
                this.stringModeValue = t.stringModeValue,
                this.idName = "@" + t.stringModeValue
            },
            StringNode: function(t, i) {
                e.call(this, i),
                this.type = "STRING",
                this.original = this.string = this.stringModeValue = t
            },
            NumberNode: function(t, i) {
                e.call(this, i),
                this.type = "NUMBER",
                this.original = this.number = t,
                this.stringModeValue = Number(t)
            },
            BooleanNode: function(t, i) {
                e.call(this, i),
                this.type = "BOOLEAN",
                this.bool = t,
                this.stringModeValue = "true" === t
            },
            CommentNode: function(t, i) {
                e.call(this, i),
                this.type = "comment",
                this.comment = t
            }
        };
        return i = r
    } (i),
    a = function() {
        "use strict";
        var t, e = function() {
            function t(t, e) {
                return {
                    left: "~" === t.charAt(2),
                    right: "~" === e.charAt(0) || "~" === e.charAt(1)
                }
            }
            function e() {
                this.yy = {}
            }
            var i = {
                trace: function() {},
                yy: {},
                symbols_: {
                    error: 2,
                    root: 3,
                    statements: 4,
                    EOF: 5,
                    program: 6,
                    simpleInverse: 7,
                    statement: 8,
                    openRawBlock: 9,
                    CONTENT: 10,
                    END_RAW_BLOCK: 11,
                    openInverse: 12,
                    closeBlock: 13,
                    openBlock: 14,
                    mustache: 15,
                    partial: 16,
                    COMMENT: 17,
                    OPEN_RAW_BLOCK: 18,
                    sexpr: 19,
                    CLOSE_RAW_BLOCK: 20,
                    OPEN_BLOCK: 21,
                    CLOSE: 22,
                    OPEN_INVERSE: 23,
                    OPEN_ENDBLOCK: 24,
                    path: 25,
                    OPEN: 26,
                    OPEN_UNESCAPED: 27,
                    CLOSE_UNESCAPED: 28,
                    OPEN_PARTIAL: 29,
                    partialName: 30,
                    param: 31,
                    partial_option0: 32,
                    partial_option1: 33,
                    sexpr_repetition0: 34,
                    sexpr_option0: 35,
                    dataName: 36,
                    STRING: 37,
                    NUMBER: 38,
                    BOOLEAN: 39,
                    OPEN_SEXPR: 40,
                    CLOSE_SEXPR: 41,
                    hash: 42,
                    hash_repetition_plus0: 43,
                    hashSegment: 44,
                    ID: 45,
                    EQUALS: 46,
                    DATA: 47,
                    pathSegments: 48,
                    SEP: 49,
                    $accept: 0,
                    $end: 1
                },
                terminals_: {
                    2 : "error",
                    5 : "EOF",
                    10 : "CONTENT",
                    11 : "END_RAW_BLOCK",
                    17 : "COMMENT",
                    18 : "OPEN_RAW_BLOCK",
                    20 : "CLOSE_RAW_BLOCK",
                    21 : "OPEN_BLOCK",
                    22 : "CLOSE",
                    23 : "OPEN_INVERSE",
                    24 : "OPEN_ENDBLOCK",
                    26 : "OPEN",
                    27 : "OPEN_UNESCAPED",
                    28 : "CLOSE_UNESCAPED",
                    29 : "OPEN_PARTIAL",
                    37 : "STRING",
                    38 : "NUMBER",
                    39 : "BOOLEAN",
                    40 : "OPEN_SEXPR",
                    41 : "CLOSE_SEXPR",
                    45 : "ID",
                    46 : "EQUALS",
                    47 : "DATA",
                    49 : "SEP"
                },
                productions_: [0, [3, 2], [3, 1], [6, 2], [6, 3], [6, 2], [6, 1], [6, 1], [6, 0], [4, 1], [4, 2], [8, 3], [8, 3], [8, 3], [8, 1], [8, 1], [8, 1], [8, 1], [9, 3], [14, 3], [12, 3], [13, 3], [15, 3], [15, 3], [16, 5], [16, 4], [7, 2], [19, 3], [19, 1], [31, 1], [31, 1], [31, 1], [31, 1], [31, 1], [31, 3], [42, 1], [44, 3], [30, 1], [30, 1], [30, 1], [36, 2], [25, 1], [48, 3], [48, 1], [32, 0], [32, 1], [33, 0], [33, 1], [34, 0], [34, 2], [35, 0], [35, 1], [43, 1], [43, 2]],
                performAction: function(e, i, n, r, o, s) {
                    var a = s.length - 1;
                    switch (o) {
                    case 1:
                        return new r.ProgramNode(s[a - 1], this._$);
                    case 2:
                        return new r.ProgramNode([], this._$);
                    case 3:
                        this.$ = new r.ProgramNode([], s[a - 1], s[a], this._$);
                        break;
                    case 4:
                        this.$ = new r.ProgramNode(s[a - 2], s[a - 1], s[a], this._$);
                        break;
                    case 5:
                        this.$ = new r.ProgramNode(s[a - 1], s[a], [], this._$);
                        break;
                    case 6:
                        this.$ = new r.ProgramNode(s[a], this._$);
                        break;
                    case 7:
                        this.$ = new r.ProgramNode([], this._$);
                        break;
                    case 8:
                        this.$ = new r.ProgramNode([], this._$);
                        break;
                    case 9:
                        this.$ = [s[a]];
                        break;
                    case 10:
                        s[a - 1].push(s[a]),
                        this.$ = s[a - 1];
                        break;
                    case 11:
                        this.$ = new r.RawBlockNode(s[a - 2], s[a - 1], s[a], this._$);
                        break;
                    case 12:
                        this.$ = new r.BlockNode(s[a - 2], s[a - 1].inverse, s[a - 1], s[a], this._$);
                        break;
                    case 13:
                        this.$ = new r.BlockNode(s[a - 2], s[a - 1], s[a - 1].inverse, s[a], this._$);
                        break;
                    case 14:
                        this.$ = s[a];
                        break;
                    case 15:
                        this.$ = s[a];
                        break;
                    case 16:
                        this.$ = new r.ContentNode(s[a], this._$);
                        break;
                    case 17:
                        this.$ = new r.CommentNode(s[a], this._$);
                        break;
                    case 18:
                        this.$ = new r.MustacheNode(s[a - 1], null, "", "", this._$);
                        break;
                    case 19:
                        this.$ = new r.MustacheNode(s[a - 1], null, s[a - 2], t(s[a - 2], s[a]), this._$);
                        break;
                    case 20:
                        this.$ = new r.MustacheNode(s[a - 1], null, s[a - 2], t(s[a - 2], s[a]), this._$);
                        break;
                    case 21:
                        this.$ = {
                            path: s[a - 1],
                            strip: t(s[a - 2], s[a])
                        };
                        break;
                    case 22:
                        this.$ = new r.MustacheNode(s[a - 1], null, s[a - 2], t(s[a - 2], s[a]), this._$);
                        break;
                    case 23:
                        this.$ = new r.MustacheNode(s[a - 1], null, s[a - 2], t(s[a - 2], s[a]), this._$);
                        break;
                    case 24:
                        this.$ = new r.PartialNode(s[a - 3], s[a - 2], s[a - 1], t(s[a - 4], s[a]), this._$);
                        break;
                    case 25:
                        this.$ = new r.PartialNode(s[a - 2], void 0, s[a - 1], t(s[a - 3], s[a]), this._$);
                        break;
                    case 26:
                        this.$ = t(s[a - 1], s[a]);
                        break;
                    case 27:
                        this.$ = new r.SexprNode([s[a - 2]].concat(s[a - 1]), s[a], this._$);
                        break;
                    case 28:
                        this.$ = new r.SexprNode([s[a]], null, this._$);
                        break;
                    case 29:
                        this.$ = s[a];
                        break;
                    case 30:
                        this.$ = new r.StringNode(s[a], this._$);
                        break;
                    case 31:
                        this.$ = new r.NumberNode(s[a], this._$);
                        break;
                    case 32:
                        this.$ = new r.BooleanNode(s[a], this._$);
                        break;
                    case 33:
                        this.$ = s[a];
                        break;
                    case 34:
                        s[a - 1].isHelper = !0,
                        this.$ = s[a - 1];
                        break;
                    case 35:
                        this.$ = new r.HashNode(s[a], this._$);
                        break;
                    case 36:
                        this.$ = [s[a - 2], s[a]];
                        break;
                    case 37:
                        this.$ = new r.PartialNameNode(s[a], this._$);
                        break;
                    case 38:
                        this.$ = new r.PartialNameNode(new r.StringNode(s[a], this._$), this._$);
                        break;
                    case 39:
                        this.$ = new r.PartialNameNode(new r.NumberNode(s[a], this._$));
                        break;
                    case 40:
                        this.$ = new r.DataNode(s[a], this._$);
                        break;
                    case 41:
                        this.$ = new r.IdNode(s[a], this._$);
                        break;
                    case 42:
                        s[a - 2].push({
                            part: s[a],
                            separator: s[a - 1]
                        }),
                        this.$ = s[a - 2];
                        break;
                    case 43:
                        this.$ = [{
                            part: s[a]
                        }];
                        break;
                    case 48:
                        this.$ = [];
                        break;
                    case 49:
                        s[a - 1].push(s[a]);
                        break;
                    case 52:
                        this.$ = [s[a]];
                        break;
                    case 53:
                        s[a - 1].push(s[a])
                    }
                },
                table: [{
                    3 : 1,
                    4 : 2,
                    5 : [1, 3],
                    8 : 4,
                    9 : 5,
                    10 : [1, 10],
                    12 : 6,
                    14 : 7,
                    15 : 8,
                    16 : 9,
                    17 : [1, 11],
                    18 : [1, 12],
                    21 : [1, 14],
                    23 : [1, 13],
                    26 : [1, 15],
                    27 : [1, 16],
                    29 : [1, 17]
                },
                {
                    1 : [3]
                },
                {
                    5 : [1, 18],
                    8 : 19,
                    9 : 5,
                    10 : [1, 10],
                    12 : 6,
                    14 : 7,
                    15 : 8,
                    16 : 9,
                    17 : [1, 11],
                    18 : [1, 12],
                    21 : [1, 14],
                    23 : [1, 13],
                    26 : [1, 15],
                    27 : [1, 16],
                    29 : [1, 17]
                },
                {
                    1 : [2, 2]
                },
                {
                    5 : [2, 9],
                    10 : [2, 9],
                    17 : [2, 9],
                    18 : [2, 9],
                    21 : [2, 9],
                    23 : [2, 9],
                    24 : [2, 9],
                    26 : [2, 9],
                    27 : [2, 9],
                    29 : [2, 9]
                },
                {
                    10 : [1, 20]
                },
                {
                    4 : 23,
                    6 : 21,
                    7 : 22,
                    8 : 4,
                    9 : 5,
                    10 : [1, 10],
                    12 : 6,
                    14 : 7,
                    15 : 8,
                    16 : 9,
                    17 : [1, 11],
                    18 : [1, 12],
                    21 : [1, 14],
                    23 : [1, 24],
                    24 : [2, 8],
                    26 : [1, 15],
                    27 : [1, 16],
                    29 : [1, 17]
                },
                {
                    4 : 23,
                    6 : 25,
                    7 : 22,
                    8 : 4,
                    9 : 5,
                    10 : [1, 10],
                    12 : 6,
                    14 : 7,
                    15 : 8,
                    16 : 9,
                    17 : [1, 11],
                    18 : [1, 12],
                    21 : [1, 14],
                    23 : [1, 24],
                    24 : [2, 8],
                    26 : [1, 15],
                    27 : [1, 16],
                    29 : [1, 17]
                },
                {
                    5 : [2, 14],
                    10 : [2, 14],
                    17 : [2, 14],
                    18 : [2, 14],
                    21 : [2, 14],
                    23 : [2, 14],
                    24 : [2, 14],
                    26 : [2, 14],
                    27 : [2, 14],
                    29 : [2, 14]
                },
                {
                    5 : [2, 15],
                    10 : [2, 15],
                    17 : [2, 15],
                    18 : [2, 15],
                    21 : [2, 15],
                    23 : [2, 15],
                    24 : [2, 15],
                    26 : [2, 15],
                    27 : [2, 15],
                    29 : [2, 15]
                },
                {
                    5 : [2, 16],
                    10 : [2, 16],
                    17 : [2, 16],
                    18 : [2, 16],
                    21 : [2, 16],
                    23 : [2, 16],
                    24 : [2, 16],
                    26 : [2, 16],
                    27 : [2, 16],
                    29 : [2, 16]
                },
                {
                    5 : [2, 17],
                    10 : [2, 17],
                    17 : [2, 17],
                    18 : [2, 17],
                    21 : [2, 17],
                    23 : [2, 17],
                    24 : [2, 17],
                    26 : [2, 17],
                    27 : [2, 17],
                    29 : [2, 17]
                },
                {
                    19 : 26,
                    25 : 27,
                    36 : 28,
                    45 : [1, 31],
                    47 : [1, 30],
                    48 : 29
                },
                {
                    19 : 32,
                    25 : 27,
                    36 : 28,
                    45 : [1, 31],
                    47 : [1, 30],
                    48 : 29
                },
                {
                    19 : 33,
                    25 : 27,
                    36 : 28,
                    45 : [1, 31],
                    47 : [1, 30],
                    48 : 29
                },
                {
                    19 : 34,
                    25 : 27,
                    36 : 28,
                    45 : [1, 31],
                    47 : [1, 30],
                    48 : 29
                },
                {
                    19 : 35,
                    25 : 27,
                    36 : 28,
                    45 : [1, 31],
                    47 : [1, 30],
                    48 : 29
                },
                {
                    25 : 37,
                    30 : 36,
                    37 : [1, 38],
                    38 : [1, 39],
                    45 : [1, 31],
                    48 : 29
                },
                {
                    1 : [2, 1]
                },
                {
                    5 : [2, 10],
                    10 : [2, 10],
                    17 : [2, 10],
                    18 : [2, 10],
                    21 : [2, 10],
                    23 : [2, 10],
                    24 : [2, 10],
                    26 : [2, 10],
                    27 : [2, 10],
                    29 : [2, 10]
                },
                {
                    11 : [1, 40]
                },
                {
                    13 : 41,
                    24 : [1, 42]
                },
                {
                    4 : 43,
                    8 : 4,
                    9 : 5,
                    10 : [1, 10],
                    12 : 6,
                    14 : 7,
                    15 : 8,
                    16 : 9,
                    17 : [1, 11],
                    18 : [1, 12],
                    21 : [1, 14],
                    23 : [1, 13],
                    24 : [2, 7],
                    26 : [1, 15],
                    27 : [1, 16],
                    29 : [1, 17]
                },
                {
                    7 : 44,
                    8 : 19,
                    9 : 5,
                    10 : [1, 10],
                    12 : 6,
                    14 : 7,
                    15 : 8,
                    16 : 9,
                    17 : [1, 11],
                    18 : [1, 12],
                    21 : [1, 14],
                    23 : [1, 24],
                    24 : [2, 6],
                    26 : [1, 15],
                    27 : [1, 16],
                    29 : [1, 17]
                },
                {
                    19 : 32,
                    22 : [1, 45],
                    25 : 27,
                    36 : 28,
                    45 : [1, 31],
                    47 : [1, 30],
                    48 : 29
                },
                {
                    13 : 46,
                    24 : [1, 42]
                },
                {
                    20 : [1, 47]
                },
                {
                    20 : [2, 48],
                    22 : [2, 48],
                    28 : [2, 48],
                    34 : 48,
                    37 : [2, 48],
                    38 : [2, 48],
                    39 : [2, 48],
                    40 : [2, 48],
                    41 : [2, 48],
                    45 : [2, 48],
                    47 : [2, 48]
                },
                {
                    20 : [2, 28],
                    22 : [2, 28],
                    28 : [2, 28],
                    41 : [2, 28]
                },
                {
                    20 : [2, 41],
                    22 : [2, 41],
                    28 : [2, 41],
                    37 : [2, 41],
                    38 : [2, 41],
                    39 : [2, 41],
                    40 : [2, 41],
                    41 : [2, 41],
                    45 : [2, 41],
                    47 : [2, 41],
                    49 : [1, 49]
                },
                {
                    25 : 50,
                    45 : [1, 31],
                    48 : 29
                },
                {
                    20 : [2, 43],
                    22 : [2, 43],
                    28 : [2, 43],
                    37 : [2, 43],
                    38 : [2, 43],
                    39 : [2, 43],
                    40 : [2, 43],
                    41 : [2, 43],
                    45 : [2, 43],
                    47 : [2, 43],
                    49 : [2, 43]
                },
                {
                    22 : [1, 51]
                },
                {
                    22 : [1, 52]
                },
                {
                    22 : [1, 53]
                },
                {
                    28 : [1, 54]
                },
                {
                    22 : [2, 46],
                    25 : 57,
                    31 : 55,
                    33 : 56,
                    36 : 61,
                    37 : [1, 58],
                    38 : [1, 59],
                    39 : [1, 60],
                    40 : [1, 62],
                    42 : 63,
                    43 : 64,
                    44 : 66,
                    45 : [1, 65],
                    47 : [1, 30],
                    48 : 29
                },
                {
                    22 : [2, 37],
                    37 : [2, 37],
                    38 : [2, 37],
                    39 : [2, 37],
                    40 : [2, 37],
                    45 : [2, 37],
                    47 : [2, 37]
                },
                {
                    22 : [2, 38],
                    37 : [2, 38],
                    38 : [2, 38],
                    39 : [2, 38],
                    40 : [2, 38],
                    45 : [2, 38],
                    47 : [2, 38]
                },
                {
                    22 : [2, 39],
                    37 : [2, 39],
                    38 : [2, 39],
                    39 : [2, 39],
                    40 : [2, 39],
                    45 : [2, 39],
                    47 : [2, 39]
                },
                {
                    5 : [2, 11],
                    10 : [2, 11],
                    17 : [2, 11],
                    18 : [2, 11],
                    21 : [2, 11],
                    23 : [2, 11],
                    24 : [2, 11],
                    26 : [2, 11],
                    27 : [2, 11],
                    29 : [2, 11]
                },
                {
                    5 : [2, 12],
                    10 : [2, 12],
                    17 : [2, 12],
                    18 : [2, 12],
                    21 : [2, 12],
                    23 : [2, 12],
                    24 : [2, 12],
                    26 : [2, 12],
                    27 : [2, 12],
                    29 : [2, 12]
                },
                {
                    25 : 67,
                    45 : [1, 31],
                    48 : 29
                },
                {
                    8 : 19,
                    9 : 5,
                    10 : [1, 10],
                    12 : 6,
                    14 : 7,
                    15 : 8,
                    16 : 9,
                    17 : [1, 11],
                    18 : [1, 12],
                    21 : [1, 14],
                    23 : [1, 13],
                    24 : [2, 3],
                    26 : [1, 15],
                    27 : [1, 16],
                    29 : [1, 17]
                },
                {
                    4 : 68,
                    8 : 4,
                    9 : 5,
                    10 : [1, 10],
                    12 : 6,
                    14 : 7,
                    15 : 8,
                    16 : 9,
                    17 : [1, 11],
                    18 : [1, 12],
                    21 : [1, 14],
                    23 : [1, 13],
                    24 : [2, 5],
                    26 : [1, 15],
                    27 : [1, 16],
                    29 : [1, 17]
                },
                {
                    10 : [2, 26],
                    17 : [2, 26],
                    18 : [2, 26],
                    21 : [2, 26],
                    23 : [2, 26],
                    24 : [2, 26],
                    26 : [2, 26],
                    27 : [2, 26],
                    29 : [2, 26]
                },
                {
                    5 : [2, 13],
                    10 : [2, 13],
                    17 : [2, 13],
                    18 : [2, 13],
                    21 : [2, 13],
                    23 : [2, 13],
                    24 : [2, 13],
                    26 : [2, 13],
                    27 : [2, 13],
                    29 : [2, 13]
                },
                {
                    10 : [2, 18]
                },
                {
                    20 : [2, 50],
                    22 : [2, 50],
                    25 : 57,
                    28 : [2, 50],
                    31 : 70,
                    35 : 69,
                    36 : 61,
                    37 : [1, 58],
                    38 : [1, 59],
                    39 : [1, 60],
                    40 : [1, 62],
                    41 : [2, 50],
                    42 : 71,
                    43 : 64,
                    44 : 66,
                    45 : [1, 65],
                    47 : [1, 30],
                    48 : 29
                },
                {
                    45 : [1, 72]
                },
                {
                    20 : [2, 40],
                    22 : [2, 40],
                    28 : [2, 40],
                    37 : [2, 40],
                    38 : [2, 40],
                    39 : [2, 40],
                    40 : [2, 40],
                    41 : [2, 40],
                    45 : [2, 40],
                    47 : [2, 40]
                },
                {
                    10 : [2, 20],
                    17 : [2, 20],
                    18 : [2, 20],
                    21 : [2, 20],
                    23 : [2, 20],
                    24 : [2, 20],
                    26 : [2, 20],
                    27 : [2, 20],
                    29 : [2, 20]
                },
                {
                    10 : [2, 19],
                    17 : [2, 19],
                    18 : [2, 19],
                    21 : [2, 19],
                    23 : [2, 19],
                    24 : [2, 19],
                    26 : [2, 19],
                    27 : [2, 19],
                    29 : [2, 19]
                },
                {
                    5 : [2, 22],
                    10 : [2, 22],
                    17 : [2, 22],
                    18 : [2, 22],
                    21 : [2, 22],
                    23 : [2, 22],
                    24 : [2, 22],
                    26 : [2, 22],
                    27 : [2, 22],
                    29 : [2, 22]
                },
                {
                    5 : [2, 23],
                    10 : [2, 23],
                    17 : [2, 23],
                    18 : [2, 23],
                    21 : [2, 23],
                    23 : [2, 23],
                    24 : [2, 23],
                    26 : [2, 23],
                    27 : [2, 23],
                    29 : [2, 23]
                },
                {
                    22 : [2, 44],
                    32 : 73,
                    42 : 74,
                    43 : 64,
                    44 : 66,
                    45 : [1, 75]
                },
                {
                    22 : [1, 76]
                },
                {
                    20 : [2, 29],
                    22 : [2, 29],
                    28 : [2, 29],
                    37 : [2, 29],
                    38 : [2, 29],
                    39 : [2, 29],
                    40 : [2, 29],
                    41 : [2, 29],
                    45 : [2, 29],
                    47 : [2, 29]
                },
                {
                    20 : [2, 30],
                    22 : [2, 30],
                    28 : [2, 30],
                    37 : [2, 30],
                    38 : [2, 30],
                    39 : [2, 30],
                    40 : [2, 30],
                    41 : [2, 30],
                    45 : [2, 30],
                    47 : [2, 30]
                },
                {
                    20 : [2, 31],
                    22 : [2, 31],
                    28 : [2, 31],
                    37 : [2, 31],
                    38 : [2, 31],
                    39 : [2, 31],
                    40 : [2, 31],
                    41 : [2, 31],
                    45 : [2, 31],
                    47 : [2, 31]
                },
                {
                    20 : [2, 32],
                    22 : [2, 32],
                    28 : [2, 32],
                    37 : [2, 32],
                    38 : [2, 32],
                    39 : [2, 32],
                    40 : [2, 32],
                    41 : [2, 32],
                    45 : [2, 32],
                    47 : [2, 32]
                },
                {
                    20 : [2, 33],
                    22 : [2, 33],
                    28 : [2, 33],
                    37 : [2, 33],
                    38 : [2, 33],
                    39 : [2, 33],
                    40 : [2, 33],
                    41 : [2, 33],
                    45 : [2, 33],
                    47 : [2, 33]
                },
                {
                    19 : 77,
                    25 : 27,
                    36 : 28,
                    45 : [1, 31],
                    47 : [1, 30],
                    48 : 29
                },
                {
                    22 : [2, 47]
                },
                {
                    20 : [2, 35],
                    22 : [2, 35],
                    28 : [2, 35],
                    41 : [2, 35],
                    44 : 78,
                    45 : [1, 75]
                },
                {
                    20 : [2, 43],
                    22 : [2, 43],
                    28 : [2, 43],
                    37 : [2, 43],
                    38 : [2, 43],
                    39 : [2, 43],
                    40 : [2, 43],
                    41 : [2, 43],
                    45 : [2, 43],
                    46 : [1, 79],
                    47 : [2, 43],
                    49 : [2, 43]
                },
                {
                    20 : [2, 52],
                    22 : [2, 52],
                    28 : [2, 52],
                    41 : [2, 52],
                    45 : [2, 52]
                },
                {
                    22 : [1, 80]
                },
                {
                    8 : 19,
                    9 : 5,
                    10 : [1, 10],
                    12 : 6,
                    14 : 7,
                    15 : 8,
                    16 : 9,
                    17 : [1, 11],
                    18 : [1, 12],
                    21 : [1, 14],
                    23 : [1, 13],
                    24 : [2, 4],
                    26 : [1, 15],
                    27 : [1, 16],
                    29 : [1, 17]
                },
                {
                    20 : [2, 27],
                    22 : [2, 27],
                    28 : [2, 27],
                    41 : [2, 27]
                },
                {
                    20 : [2, 49],
                    22 : [2, 49],
                    28 : [2, 49],
                    37 : [2, 49],
                    38 : [2, 49],
                    39 : [2, 49],
                    40 : [2, 49],
                    41 : [2, 49],
                    45 : [2, 49],
                    47 : [2, 49]
                },
                {
                    20 : [2, 51],
                    22 : [2, 51],
                    28 : [2, 51],
                    41 : [2, 51]
                },
                {
                    20 : [2, 42],
                    22 : [2, 42],
                    28 : [2, 42],
                    37 : [2, 42],
                    38 : [2, 42],
                    39 : [2, 42],
                    40 : [2, 42],
                    41 : [2, 42],
                    45 : [2, 42],
                    47 : [2, 42],
                    49 : [2, 42]
                },
                {
                    22 : [1, 81]
                },
                {
                    22 : [2, 45]
                },
                {
                    46 : [1, 79]
                },
                {
                    5 : [2, 25],
                    10 : [2, 25],
                    17 : [2, 25],
                    18 : [2, 25],
                    21 : [2, 25],
                    23 : [2, 25],
                    24 : [2, 25],
                    26 : [2, 25],
                    27 : [2, 25],
                    29 : [2, 25]
                },
                {
                    41 : [1, 82]
                },
                {
                    20 : [2, 53],
                    22 : [2, 53],
                    28 : [2, 53],
                    41 : [2, 53],
                    45 : [2, 53]
                },
                {
                    25 : 57,
                    31 : 83,
                    36 : 61,
                    37 : [1, 58],
                    38 : [1, 59],
                    39 : [1, 60],
                    40 : [1, 62],
                    45 : [1, 31],
                    47 : [1, 30],
                    48 : 29
                },
                {
                    5 : [2, 21],
                    10 : [2, 21],
                    17 : [2, 21],
                    18 : [2, 21],
                    21 : [2, 21],
                    23 : [2, 21],
                    24 : [2, 21],
                    26 : [2, 21],
                    27 : [2, 21],
                    29 : [2, 21]
                },
                {
                    5 : [2, 24],
                    10 : [2, 24],
                    17 : [2, 24],
                    18 : [2, 24],
                    21 : [2, 24],
                    23 : [2, 24],
                    24 : [2, 24],
                    26 : [2, 24],
                    27 : [2, 24],
                    29 : [2, 24]
                },
                {
                    20 : [2, 34],
                    22 : [2, 34],
                    28 : [2, 34],
                    37 : [2, 34],
                    38 : [2, 34],
                    39 : [2, 34],
                    40 : [2, 34],
                    41 : [2, 34],
                    45 : [2, 34],
                    47 : [2, 34]
                },
                {
                    20 : [2, 36],
                    22 : [2, 36],
                    28 : [2, 36],
                    41 : [2, 36],
                    45 : [2, 36]
                }],
                defaultActions: {
                    3 : [2, 2],
                    18 : [2, 1],
                    47 : [2, 18],
                    63 : [2, 47],
                    74 : [2, 45]
                },
                parseError: function(t) {
                    throw new Error(t)
                },
                parse: function(t) {
                    function e() {
                        var t;
                        return t = i.lexer.lex() || 1,
                        "number" != typeof t && (t = i.symbols_[t] || t),
                        t
                    }
                    var i = this,
                    n = [0],
                    r = [null],
                    o = [],
                    s = this.table,
                    a = "",
                    l = 0,
                    h = 0,
                    c = 0;
                    this.lexer.setInput(t),
                    this.lexer.yy = this.yy,
                    this.yy.lexer = this.lexer,
                    this.yy.parser = this,
                    "undefined" == typeof this.lexer.yylloc && (this.lexer.yylloc = {});
                    var u = this.lexer.yylloc;
                    o.push(u);
                    var d = this.lexer.options && this.lexer.options.ranges;
                    "function" == typeof this.yy.parseError && (this.parseError = this.yy.parseError);
                    for (var p, f, g, m, v, y, b, x, w, k = {};;) {
                        if (g = n[n.length - 1], this.defaultActions[g] ? m = this.defaultActions[g] : ((null === p || "undefined" == typeof p) && (p = e()), m = s[g] && s[g][p]), "undefined" == typeof m || !m.length || !m[0]) {
                            var S = "";
                            if (!c) {
                                w = [];
                                for (y in s[g]) this.terminals_[y] && y > 2 && w.push("'" + this.terminals_[y] + "'");
                                S = this.lexer.showPosition ? "Parse error on line " + (l + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + w.join(", ") + ", got '" + (this.terminals_[p] || p) + "'": "Parse error on line " + (l + 1) + ": Unexpected " + (1 == p ? "end of input": "'" + (this.terminals_[p] || p) + "'"),
                                this.parseError(S, {
                                    text: this.lexer.match,
                                    token: this.terminals_[p] || p,
                                    line: this.lexer.yylineno,
                                    loc: u,
                                    expected: w
                                })
                            }
                        }
                        if (m[0] instanceof Array && m.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + g + ", token: " + p);
                        switch (m[0]) {
                        case 1:
                            n.push(p),
                            r.push(this.lexer.yytext),
                            o.push(this.lexer.yylloc),
                            n.push(m[1]),
                            p = null,
                            f ? (p = f, f = null) : (h = this.lexer.yyleng, a = this.lexer.yytext, l = this.lexer.yylineno, u = this.lexer.yylloc, c > 0 && c--);
                            break;
                        case 2:
                            if (b = this.productions_[m[1]][1], k.$ = r[r.length - b], k._$ = {
                                first_line: o[o.length - (b || 1)].first_line,
                                last_line: o[o.length - 1].last_line,
                                first_column: o[o.length - (b || 1)].first_column,
                                last_column: o[o.length - 1].last_column
                            },
                            d && (k._$.range = [o[o.length - (b || 1)].range[0], o[o.length - 1].range[1]]), v = this.performAction.call(k, a, h, l, this.yy, m[1], r, o), "undefined" != typeof v) return v;
                            b && (n = n.slice(0, -1 * b * 2), r = r.slice(0, -1 * b), o = o.slice(0, -1 * b)),
                            n.push(this.productions_[m[1]][0]),
                            r.push(k.$),
                            o.push(k._$),
                            x = s[n[n.length - 2]][n[n.length - 1]],
                            n.push(x);
                            break;
                        case 3:
                            return ! 0
                        }
                    }
                    return ! 0
                }
            },
            n = function() {
                var t = {
                    EOF: 1,
                    parseError: function(t, e) {
                        if (!this.yy.parser) throw new Error(t);
                        this.yy.parser.parseError(t, e)
                    },
                    setInput: function(t) {
                        return this._input = t,
                        this._more = this._less = this.done = !1,
                        this.yylineno = this.yyleng = 0,
                        this.yytext = this.matched = this.match = "",
                        this.conditionStack = ["INITIAL"],
                        this.yylloc = {
                            first_line: 1,
                            first_column: 0,
                            last_line: 1,
                            last_column: 0
                        },
                        this.options.ranges && (this.yylloc.range = [0, 0]),
                        this.offset = 0,
                        this
                    },
                    input: function() {
                        var t = this._input[0];
                        this.yytext += t,
                        this.yyleng++,
                        this.offset++,
                        this.match += t,
                        this.matched += t;
                        var e = t.match(/(?:\r\n?|\n).*/g);
                        return e ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++,
                        this.options.ranges && this.yylloc.range[1]++,
                        this._input = this._input.slice(1),
                        t
                    },
                    unput: function(t) {
                        var e = t.length,
                        i = t.split(/(?:\r\n?|\n)/g);
                        this._input = t + this._input,
                        this.yytext = this.yytext.substr(0, this.yytext.length - e - 1),
                        this.offset -= e;
                        var n = this.match.split(/(?:\r\n?|\n)/g);
                        this.match = this.match.substr(0, this.match.length - 1),
                        this.matched = this.matched.substr(0, this.matched.length - 1),
                        i.length - 1 && (this.yylineno -= i.length - 1);
                        var r = this.yylloc.range;
                        return this.yylloc = {
                            first_line: this.yylloc.first_line,
                            last_line: this.yylineno + 1,
                            first_column: this.yylloc.first_column,
                            last_column: i ? (i.length === n.length ? this.yylloc.first_column: 0) + n[n.length - i.length].length - i[0].length: this.yylloc.first_column - e
                        },
                        this.options.ranges && (this.yylloc.range = [r[0], r[0] + this.yyleng - e]),
                        this
                    },
                    more: function() {
                        return this._more = !0,
                        this
                    },
                    less: function(t) {
                        this.unput(this.match.slice(t))
                    },
                    pastInput: function() {
                        var t = this.matched.substr(0, this.matched.length - this.match.length);
                        return (t.length > 20 ? "...": "") + t.substr( - 20).replace(/\n/g, "")
                    },
                    upcomingInput: function() {
                        var t = this.match;
                        return t.length < 20 && (t += this._input.substr(0, 20 - t.length)),
                        (t.substr(0, 20) + (t.length > 20 ? "...": "")).replace(/\n/g, "")
                    },
                    showPosition: function() {
                        var t = this.pastInput(),
                        e = new Array(t.length + 1).join("-");
                        return t + this.upcomingInput() + "\n" + e + "^"
                    },
                    next: function() {
                        if (this.done) return this.EOF;
                        this._input || (this.done = !0);
                        var t, e, i, n, r;
                        this._more || (this.yytext = "", this.match = "");
                        for (var o = this._currentRules(), s = 0; s < o.length && (i = this._input.match(this.rules[o[s]]), !i || e && !(i[0].length > e[0].length) || (e = i, n = s, this.options.flex)); s++);
                        return e ? (r = e[0].match(/(?:\r\n?|\n).*/g), r && (this.yylineno += r.length), this.yylloc = {
                            first_line: this.yylloc.last_line,
                            last_line: this.yylineno + 1,
                            first_column: this.yylloc.last_column,
                            last_column: r ? r[r.length - 1].length - r[r.length - 1].match(/\r?\n?/)[0].length: this.yylloc.last_column + e[0].length
                        },
                        this.yytext += e[0], this.match += e[0], this.matches = e, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._input = this._input.slice(e[0].length), this.matched += e[0], t = this.performAction.call(this, this.yy, this, o[n], this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), t ? t: void 0) : "" === this._input ? this.EOF: this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
                            text: "",
                            token: null,
                            line: this.yylineno
                        })
                    },
                    lex: function() {
                        var t = this.next();
                        return "undefined" != typeof t ? t: this.lex()
                    },
                    begin: function(t) {
                        this.conditionStack.push(t)
                    },
                    popState: function() {
                        return this.conditionStack.pop()
                    },
                    _currentRules: function() {
                        return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules
                    },
                    topState: function() {
                        return this.conditionStack[this.conditionStack.length - 2]
                    },
                    pushState: function(t) {
                        this.begin(t)
                    }
                };
                return t.options = {},
                t.performAction = function(t, e, i, n) {
                    function r(t, i) {
                        return e.yytext = e.yytext.substr(t, e.yyleng - i)
                    }
                    switch (i) {
                    case 0:
                        if ("\\\\" === e.yytext.slice( - 2) ? (r(0, 1), this.begin("mu")) : "\\" === e.yytext.slice( - 1) ? (r(0, 1), this.begin("emu")) : this.begin("mu"), e.yytext) return 10;
                        break;
                    case 1:
                        return 10;
                    case 2:
                        return this.popState(),
                        10;
                    case 3:
                        return e.yytext = e.yytext.substr(5, e.yyleng - 9),
                        this.popState(),
                        11;
                    case 4:
                        return 10;
                    case 5:
                        return r(0, 4),
                        this.popState(),
                        17;
                    case 6:
                        return 40;
                    case 7:
                        return 41;
                    case 8:
                        return 18;
                    case 9:
                        return this.popState(),
                        this.begin("raw"),
                        20;
                    case 10:
                        return e.yytext = e.yytext.substr(4, e.yyleng - 8),
                        this.popState(),
                        "RAW_BLOCK";
                    case 11:
                        return 29;
                    case 12:
                        return 21;
                    case 13:
                        return 24;
                    case 14:
                        return 23;
                    case 15:
                        return 23;
                    case 16:
                        return 27;
                    case 17:
                        return 26;
                    case 18:
                        this.popState(),
                        this.begin("com");
                        break;
                    case 19:
                        return r(3, 5),
                        this.popState(),
                        17;
                    case 20:
                        return 26;
                    case 21:
                        return 46;
                    case 22:
                        return 45;
                    case 23:
                        return 45;
                    case 24:
                        return 49;
                    case 25:
                        break;
                    case 26:
                        return this.popState(),
                        28;
                    case 27:
                        return this.popState(),
                        22;
                    case 28:
                        return e.yytext = r(1, 2).replace(/\\"/g, '"'),
                        37;
                    case 29:
                        return e.yytext = r(1, 2).replace(/\\'/g, "'"),
                        37;
                    case 30:
                        return 47;
                    case 31:
                        return 39;
                    case 32:
                        return 39;
                    case 33:
                        return 38;
                    case 34:
                        return 45;
                    case 35:
                        return e.yytext = r(1, 2),
                        45;
                    case 36:
                        return "INVALID";
                    case 37:
                        return 5
                    }
                },
                t.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/, /^(?:[^\x00]*?(?=(\{\{\{\{\/)))/, /^(?:[\s\S]*?--\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{\{\{)/, /^(?:\}\}\}\})/, /^(?:\{\{\{\{[^\x00]*\}\}\}\})/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{!--)/, /^(?:\{\{![\s\S]*?\}\})/, /^(?:\{\{(~)?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)]))))/, /^(?:\[[^\]]*\])/, /^(?:.)/, /^(?:$)/],
                t.conditions = {
                    mu: {
                        rules: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37],
                        inclusive: !1
                    },
                    emu: {
                        rules: [2],
                        inclusive: !1
                    },
                    com: {
                        rules: [5],
                        inclusive: !1
                    },
                    raw: {
                        rules: [3, 4],
                        inclusive: !1
                    },
                    INITIAL: {
                        rules: [0, 1, 37],
                        inclusive: !0
                    }
                },
                t
            } ();
            return i.lexer = n,
            e.prototype = i,
            i.Parser = e,
            new e
        } ();
        return t = e
    } (),
    l = function(t, e) {
        "use strict";
        function i(t) {
            return t.constructor === o.ProgramNode ? t: (r.yy = o, r.parse(t))
        }
        var n = {},
        r = t,
        o = e;
        return n.parser = r,
        n.parse = i,
        n
    } (a, s),
    h = function(t) {
        "use strict";
        function e() {}
        function i(t, e, i) {
            if (null == t || "string" != typeof t && t.constructor !== i.AST.ProgramNode) throw new o("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + t);
            e = e || {},
            "data" in e || (e.data = !0);
            var n = i.parse(t),
            r = (new i.Compiler).compile(n, e);
            return (new i.JavaScriptCompiler).compile(r, e)
        }
        function n(t, e, i) {
            function n() {
                var n = i.parse(t),
                r = (new i.Compiler).compile(n, e),
                o = (new i.JavaScriptCompiler).compile(r, e, void 0, !0);
                return i.template(o)
            }
            if (null == t || "string" != typeof t && t.constructor !== i.AST.ProgramNode) throw new o("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + t);
            e = e || {},
            "data" in e || (e.data = !0);
            var r, s = function(t, e) {
                return r || (r = n()),
                r.call(this, t, e)
            };
            return s._setup = function(t) {
                return r || (r = n()),
                r._setup(t)
            },
            s._child = function(t) {
                return r || (r = n()),
                r._child(t)
            },
            s
        }
        var r = {},
        o = t;
        return r.Compiler = e,
        e.prototype = {
            compiler: e,
            disassemble: function() {
                for (var t, e, i, n = this.opcodes,
                r = [], o = 0, s = n.length; s > o; o++) if (t = n[o], "DECLARE" === t.opcode) r.push("DECLARE " + t.name + "=" + t.value);
                else {
                    e = [];
                    for (var a = 0; a < t.args.length; a++) i = t.args[a],
                    "string" == typeof i && (i = '"' + i.replace("\n", "\\n") + '"'),
                    e.push(i);
                    r.push(t.opcode + " " + e.join(" "))
                }
                return r.join("\n")
            },
            equals: function(t) {
                var e = this.opcodes.length;
                if (t.opcodes.length !== e) return ! 1;
                for (var i = 0; e > i; i++) {
                    var n = this.opcodes[i],
                    r = t.opcodes[i];
                    if (n.opcode !== r.opcode || n.args.length !== r.args.length) return ! 1;
                    for (var o = 0; o < n.args.length; o++) if (n.args[o] !== r.args[o]) return ! 1
                }
                if (e = this.children.length, t.children.length !== e) return ! 1;
                for (i = 0; e > i; i++) if (!this.children[i].equals(t.children[i])) return ! 1;
                return ! 0
            },
            guid: 0,
            compile: function(t, e) {
                this.opcodes = [],
                this.children = [],
                this.depths = {
                    list: []
                },
                this.options = e,
                this.stringParams = e.stringParams,
                this.trackIds = e.trackIds;
                var i = this.options.knownHelpers;
                if (this.options.knownHelpers = {
                    helperMissing: !0,
                    blockHelperMissing: !0,
                    each: !0,
                    "if": !0,
                    unless: !0,
                    "with": !0,
                    log: !0,
                    lookup: !0
                },
                i) for (var n in i) this.options.knownHelpers[n] = i[n];
                return this.accept(t)
            },
            accept: function(t) {
                var e, i = t.strip || {};
                return i.left && this.opcode("strip"),
                e = this[t.type](t),
                i.right && this.opcode("strip"),
                e
            },
            program: function(t) {
                for (var e = t.statements,
                i = 0,
                n = e.length; n > i; i++) this.accept(e[i]);
                return this.isSimple = 1 === n,
                this.depths.list = this.depths.list.sort(function(t, e) {
                    return t - e
                }),
                this
            },
            compileProgram: function(t) {
                var e, i = (new this.compiler).compile(t, this.options),
                n = this.guid++;
                this.usePartial = this.usePartial || i.usePartial,
                this.children[n] = i;
                for (var r = 0,
                o = i.depths.list.length; o > r; r++) e = i.depths.list[r],
                2 > e || this.addDepth(e - 1);
                return n
            },
            block: function(t) {
                var e = t.mustache,
                i = t.program,
                n = t.inverse;
                i && (i = this.compileProgram(i)),
                n && (n = this.compileProgram(n));
                var r = e.sexpr,
                o = this.classifySexpr(r);
                "helper" === o ? this.helperSexpr(r, i, n) : "simple" === o ? (this.simpleSexpr(r), this.opcode("pushProgram", i), this.opcode("pushProgram", n), this.opcode("emptyHash"), this.opcode("blockValue", r.id.original)) : (this.ambiguousSexpr(r, i, n), this.opcode("pushProgram", i), this.opcode("pushProgram", n), this.opcode("emptyHash"), this.opcode("ambiguousBlockValue")),
                this.opcode("append")
            },
            hash: function(t) {
                var e, i, n = t.pairs;
                for (this.opcode("pushHash"), e = 0, i = n.length; i > e; e++) this.pushParam(n[e][1]);
                for (; e--;) this.opcode("assignToHash", n[e][0]);
                this.opcode("popHash")
            },
            partial: function(t) {
                var e = t.partialName;
                this.usePartial = !0,
                t.hash ? this.accept(t.hash) : this.opcode("push", "undefined"),
                t.context ? this.accept(t.context) : this.opcode("push", "depth0"),
                this.opcode("invokePartial", e.name),
                this.opcode("append")
            },
            content: function(t) {
                this.opcode("appendContent", t.string)
            },
            mustache: function(t) {
                this.sexpr(t.sexpr),
                this.opcode(t.escaped && !this.options.noEscape ? "appendEscaped": "append")
            },
            ambiguousSexpr: function(t, e, i) {
                var n = t.id,
                r = n.parts[0],
                o = null != e || null != i;
                this.opcode("getContext", n.depth),
                this.opcode("pushProgram", e),
                this.opcode("pushProgram", i),
                this.opcode("invokeAmbiguous", r, o)
            },
            simpleSexpr: function(t) {
                var e = t.id;
                "DATA" === e.type ? this.DATA(e) : e.parts.length ? this.ID(e) : (this.addDepth(e.depth), this.opcode("getContext", e.depth), this.opcode("pushContext")),
                this.opcode("resolvePossibleLambda")
            },
            helperSexpr: function(t, e, i) {
                var n = this.setupFullMustacheParams(t, e, i),
                r = t.id,
                s = r.parts[0];
                if (this.options.knownHelpers[s]) this.opcode("invokeKnownHelper", n.length, s);
                else {
                    if (this.options.knownHelpersOnly) throw new o("You specified knownHelpersOnly, but used the unknown helper " + s, t);
                    this.ID(r),
                    this.opcode("invokeHelper", n.length, r.original, t.isRoot)
                }
            },
            sexpr: function(t) {
                var e = this.classifySexpr(t);
                "simple" === e ? this.simpleSexpr(t) : "helper" === e ? this.helperSexpr(t) : this.ambiguousSexpr(t)
            },
            ID: function(t) {
                this.addDepth(t.depth),
                this.opcode("getContext", t.depth);
                var e = t.parts[0];
                e ? this.opcode("lookupOnContext", t.parts[0]) : this.opcode("pushContext");
                for (var i = 1,
                n = t.parts.length; n > i; i++) this.opcode("lookup", t.parts[i])
            },
            DATA: function(t) {
                this.options.data = !0,
                this.opcode("lookupData", t.id.depth);
                for (var e = t.id.parts,
                i = 0,
                n = e.length; n > i; i++) this.opcode("lookup", e[i])
            },
            STRING: function(t) {
                this.opcode("pushString", t.string)
            },
            NUMBER: function(t) {
                this.opcode("pushLiteral", t.number)
            },
            BOOLEAN: function(t) {
                this.opcode("pushLiteral", t.bool)
            },
            comment: function() {},
            opcode: function(t) {
                this.opcodes.push({
                    opcode: t,
                    args: [].slice.call(arguments, 1)
                })
            },
            declare: function(t, e) {
                this.opcodes.push({
                    opcode: "DECLARE",
                    name: t,
                    value: e
                })
            },
            addDepth: function(t) {
                0 !== t && (this.depths[t] || (this.depths[t] = !0, this.depths.list.push(t)))
            },
            classifySexpr: function(t) {
                var e = t.isHelper,
                i = t.eligibleHelper,
                n = this.options;
                if (i && !e) {
                    var r = t.id.parts[0];
                    n.knownHelpers[r] ? e = !0 : n.knownHelpersOnly && (i = !1)
                }
                return e ? "helper": i ? "ambiguous": "simple"
            },
            pushParams: function(t) {
                for (var e = 0,
                i = t.length; i > e; e++) this.pushParam(t[e])
            },
            pushParam: function(t) {
                this.stringParams ? (t.depth && this.addDepth(t.depth), this.opcode("getContext", t.depth || 0), this.opcode("pushStringParam", t.stringModeValue, t.type), "sexpr" === t.type && this.sexpr(t)) : (this.trackIds && this.opcode("pushId", t.type, t.idName || t.stringModeValue), this.accept(t))
            },
            setupFullMustacheParams: function(t, e, i) {
                var n = t.params;
                return this.pushParams(n),
                this.opcode("pushProgram", e),
                this.opcode("pushProgram", i),
                t.hash ? this.hash(t.hash) : this.opcode("emptyHash"),
                n
            }
        },
        r.precompile = i,
        r.compile = n,
        r
    } (i),
    c = function(t, e) {
        "use strict";
        function i(t) {
            this.value = t
        }
        function n() {}
        var r, o = t.COMPILER_REVISION,
        s = t.REVISION_CHANGES,
        a = t.log,
        l = e;
        n.prototype = {
            nameLookup: function(t, e) {
                var i, r;
                return 0 === t.indexOf("depth") && (i = !0),
                r = n.isValidJavaScriptVariableName(e) ? t + "." + e: t + "['" + e + "']",
                i ? "(" + t + " && " + r + ")": r
            },
            compilerInfo: function() {
                var t = o,
                e = s[t];
                return [t, e]
            },
            appendToBuffer: function(t) {
                return this.environment.isSimple ? "return " + t + ";": {
                    appendToBuffer: !0,
                    content: t,
                    toString: function() {
                        return "buffer += " + t + ";"
                    }
                }
            },
            initializeBuffer: function() {
                return this.quotedString("")
            },
            namespace: "Handlebars",
            compile: function(t, e, i, n) {
                this.environment = t,
                this.options = e || {},
                this.stringParams = this.options.stringParams,
                this.trackIds = this.options.trackIds,
                this.precompile = !n,
                a("debug", this.environment.disassemble() + "\n\n"),
                this.name = this.environment.name,
                this.isChild = !!i,
                this.context = i || {
                    programs: [],
                    environments: []
                },
                this.preamble(),
                this.stackSlot = 0,
                this.stackVars = [],
                this.aliases = {},
                this.registers = {
                    list: []
                },
                this.hashes = [],
                this.compileStack = [],
                this.inlineStack = [],
                this.compileChildren(t, e);
                var r, o, s, h = t.opcodes;
                for (o = 0, s = h.length; s > o; o++) r = h[o],
                "DECLARE" === r.opcode ? this[r.name] = r.value: this[r.opcode].apply(this, r.args),
                r.opcode !== this.stripNext && (this.stripNext = !1);
                if (this.pushSource(""), this.stackSlot || this.inlineStack.length || this.compileStack.length) throw new l("Compile completed with content left on stack");
                var c = this.createFunctionContext(n);
                if (this.isChild) return c;
                var u = {
                    compiler: this.compilerInfo(),
                    main: c
                },
                d = this.context.programs;
                for (o = 0, s = d.length; s > o; o++) d[o] && (u[o] = d[o]);
                return this.environment.usePartial && (u.usePartial = !0),
                this.options.data && (u.useData = !0),
                n || (u.compiler = JSON.stringify(u.compiler), u = this.objectLiteral(u)),
                u
            },
            preamble: function() {
                this.lastContext = 0,
                this.source = []
            },
            createFunctionContext: function(t) {
                var e = "",
                i = this.stackVars.concat(this.registers.list);
                i.length > 0 && (e += ", " + i.join(", "));
                for (var n in this.aliases) this.aliases.hasOwnProperty(n) && (e += ", " + n + "=" + this.aliases[n]);
                for (var r = ["depth0", "helpers", "partials", "data"], o = 0, s = this.environment.depths.list.length; s > o; o++) r.push("depth" + this.environment.depths.list[o]);
                var a = this.mergeSource(e);
                return t ? (r.push(a), Function.apply(this, r)) : "function(" + r.join(",") + ") {\n  " + a + "}"
            },
            mergeSource: function(t) {
                for (var e, i, n = "",
                r = !this.forceBuffer,
                o = 0,
                s = this.source.length; s > o; o++) {
                    var a = this.source[o];
                    a.appendToBuffer ? e = e ? e + "\n    + " + a.content: a.content: (e && (n ? n += "buffer += " + e + ";\n  ": (i = !0, n = e + ";\n  "), e = void 0), n += a + "\n  ", this.environment.isSimple || (r = !1))
                }
                return r ? (e || !n) && (n += "return " + (e || '""') + ";\n") : (t += ", buffer = " + (i ? "": this.initializeBuffer()), n += e ? "return buffer + " + e + ";\n": "return buffer;\n"),
                t && (n = "var " + t.substring(2) + (i ? "": ";\n  ") + n),
                n
            },
            blockValue: function(t) {
                this.aliases.blockHelperMissing = "helpers.blockHelperMissing";
                var e = ["depth0"];
                this.setupParams(t, 0, e),
                this.replaceStack(function(t) {
                    return e.splice(1, 0, t),
                    "blockHelperMissing.call(" + e.join(", ") + ")"
                })
            },
            ambiguousBlockValue: function() {
                this.aliases.blockHelperMissing = "helpers.blockHelperMissing";
                var t = ["depth0"];
                this.setupParams("", 0, t, !0),
                this.flushInline();
                var e = this.topStack();
                t.splice(1, 0, e),
                this.pushSource("if (!" + this.lastHelper + ") { " + e + " = blockHelperMissing.call(" + t.join(", ") + "); }")
            },
            appendContent: function(t) {
                this.pendingContent && (t = this.pendingContent + t),
                this.stripNext && (t = t.replace(/^\s+/, "")),
                this.pendingContent = t
            },
            strip: function() {
                this.pendingContent && (this.pendingContent = this.pendingContent.replace(/\s+$/, "")),
                this.stripNext = "strip"
            },
            append: function() {
                this.flushInline();
                var t = this.popStack();
                this.pushSource("if(" + t + " || " + t + " === 0) { " + this.appendToBuffer(t) + " }"),
                this.environment.isSimple && this.pushSource("else { " + this.appendToBuffer("''") + " }")
            },
            appendEscaped: function() {
                this.aliases.escapeExpression = "this.escapeExpression",
                this.pushSource(this.appendToBuffer("escapeExpression(" + this.popStack() + ")"))
            },
            getContext: function(t) {
                this.lastContext !== t && (this.lastContext = t)
            },
            lookupOnContext: function(t) {
                this.push(this.nameLookup("depth" + this.lastContext, t, "context"))
            },
            pushContext: function() {
                this.pushStackLiteral("depth" + this.lastContext)
            },
            resolvePossibleLambda: function() {
                this.aliases.functionType = '"function"',
                this.replaceStack(function(t) {
                    return "typeof " + t + " === functionType ? " + t + ".apply(depth0) : " + t
                })
            },
            lookup: function(t) {
                this.replaceStack(function(e) {
                    return e + " == null || " + e + " === false ? " + e + " : " + this.nameLookup(e, t, "context")
                })
            },
            lookupData: function(t) {
                this.pushStackLiteral(t ? "this.data(data, " + t + ")": "data")
            },
            pushStringParam: function(t, e) {
                this.pushStackLiteral("depth" + this.lastContext),
                this.pushString(e),
                "sexpr" !== e && ("string" == typeof t ? this.pushString(t) : this.pushStackLiteral(t))
            },
            emptyHash: function() {
                this.pushStackLiteral("{}"),
                this.trackIds && this.push("{}"),
                this.stringParams && (this.push("{}"), this.push("{}"))
            },
            pushHash: function() {
                this.hash && this.hashes.push(this.hash),
                this.hash = {
                    values: [],
                    types: [],
                    contexts: [],
                    ids: []
                }
            },
            popHash: function() {
                var t = this.hash;
                this.hash = this.hashes.pop(),
                this.trackIds && this.push("{" + t.ids.join(",") + "}"),
                this.stringParams && (this.push("{" + t.contexts.join(",") + "}"), this.push("{" + t.types.join(",") + "}")),
                this.push("{\n    " + t.values.join(",\n    ") + "\n  }")
            },
            pushString: function(t) {
                this.pushStackLiteral(this.quotedString(t))
            },
            push: function(t) {
                return this.inlineStack.push(t),
                t
            },
            pushLiteral: function(t) {
                this.pushStackLiteral(t)
            },
            pushProgram: function(t) {
                this.pushStackLiteral(null != t ? this.programExpression(t) : null)
            },
            invokeHelper: function(t, e, i) {
                this.aliases.helperMissing = "helpers.helperMissing",
                this.useRegister("helper");
                var n = this.popStack(),
                r = this.setupHelper(t, e),
                o = "helper = " + r.name + " || " + n + " || helperMissing";
                r.paramsInit && (o += "," + r.paramsInit),
                this.push("(" + o + ",helper.call(" + r.callParams + "))"),
                i || this.flushInline()
            },
            invokeKnownHelper: function(t, e) {
                var i = this.setupHelper(t, e);
                this.push(i.name + ".call(" + i.callParams + ")")
            },
            invokeAmbiguous: function(t, e) {
                this.aliases.functionType = '"function"',
                this.useRegister("helper"),
                this.emptyHash();
                var i = this.setupHelper(0, t, e),
                n = this.lastHelper = this.nameLookup("helpers", t, "helper"),
                r = this.nameLookup("depth" + this.lastContext, t, "context");
                this.push("((helper = " + n + " || " + r + (i.paramsInit ? "),(" + i.paramsInit: "") + "),(typeof helper === functionType ? helper.call(" + i.callParams + ") : helper))")
            },
            invokePartial: function(t) {
                var e = [this.nameLookup("partials", t, "partial"), "'" + t + "'", this.popStack(), this.popStack(), "helpers", "partials"];
                this.options.data && e.push("data"),
                this.push("this.invokePartial(" + e.join(", ") + ")")
            },
            assignToHash: function(t) {
                var e, i, n, r = this.popStack();
                this.trackIds && (n = this.popStack()),
                this.stringParams && (i = this.popStack(), e = this.popStack());
                var o = this.hash;
                e && o.contexts.push("'" + t + "': " + e),
                i && o.types.push("'" + t + "': " + i),
                n && o.ids.push("'" + t + "': " + n),
                o.values.push("'" + t + "': (" + r + ")")
            },
            pushId: function(t, e) {
                "ID" === t || "DATA" === t ? this.pushString(e) : this.pushStackLiteral("sexpr" === t ? "true": "null")
            },
            compiler: n,
            compileChildren: function(t, e) {
                for (var i, n, r = t.children,
                o = 0,
                s = r.length; s > o; o++) {
                    i = r[o],
                    n = new this.compiler;
                    var a = this.matchExistingProgram(i);
                    null == a ? (this.context.programs.push(""), a = this.context.programs.length, i.index = a, i.name = "program" + a, this.context.programs[a] = n.compile(i, e, this.context, !this.precompile), this.context.environments[a] = i) : (i.index = a, i.name = "program" + a)
                }
            },
            matchExistingProgram: function(t) {
                for (var e = 0,
                i = this.context.environments.length; i > e; e++) {
                    var n = this.context.environments[e];
                    if (n && n.equals(t)) return e
                }
            },
            programExpression: function(t) {
                if (null == t) return "this.noop";
                for (var e, i = this.environment.children[t], n = i.depths.list, r = [i.index, "data"], o = 0, s = n.length; s > o; o++) e = n[o],
                r.push("depth" + (e - 1));
                return (0 === n.length ? "this.program(": "this.programWithDepth(") + r.join(", ") + ")"
            },
            register: function(t, e) {
                this.useRegister(t),
                this.pushSource(t + " = " + e + ";")
            },
            useRegister: function(t) {
                this.registers[t] || (this.registers[t] = !0, this.registers.list.push(t))
            },
            pushStackLiteral: function(t) {
                return this.push(new i(t))
            },
            pushSource: function(t) {
                this.pendingContent && (this.source.push(this.appendToBuffer(this.quotedString(this.pendingContent))), this.pendingContent = void 0),
                t && this.source.push(t)
            },
            pushStack: function(t) {
                this.flushInline();
                var e = this.incrStack();
                return t && this.pushSource(e + " = " + t + ";"),
                this.compileStack.push(e),
                e
            },
            replaceStack: function(t) {
                var e, n, r, o = "",
                s = this.isInline();
                if (s) {
                    var a = this.popStack(!0);
                    if (a instanceof i) e = a.value,
                    r = !0;
                    else {
                        n = !this.stackSlot;
                        var l = n ? this.incrStack() : this.topStackName();
                        o = "(" + this.push(l) + " = " + a + "),",
                        e = this.topStack()
                    }
                } else e = this.topStack();
                var h = t.call(this, e);
                return s ? (r || this.popStack(), n && this.stackSlot--, this.push("(" + o + h + ")")) : (/^stack/.test(e) || (e = this.nextStack()), this.pushSource(e + " = (" + o + h + ");")),
                e
            },
            nextStack: function() {
                return this.pushStack()
            },
            incrStack: function() {
                return this.stackSlot++,
                this.stackSlot > this.stackVars.length && this.stackVars.push("stack" + this.stackSlot),
                this.topStackName()
            },
            topStackName: function() {
                return "stack" + this.stackSlot
            },
            flushInline: function() {
                var t = this.inlineStack;
                if (t.length) {
                    this.inlineStack = [];
                    for (var e = 0,
                    n = t.length; n > e; e++) {
                        var r = t[e];
                        r instanceof i ? this.compileStack.push(r) : this.pushStack(r)
                    }
                }
            },
            isInline: function() {
                return this.inlineStack.length
            },
            popStack: function(t) {
                var e = this.isInline(),
                n = (e ? this.inlineStack: this.compileStack).pop();
                if (!t && n instanceof i) return n.value;
                if (!e) {
                    if (!this.stackSlot) throw new l("Invalid stack pop");
                    this.stackSlot--
                }
                return n
            },
            topStack: function(t) {
                var e = this.isInline() ? this.inlineStack: this.compileStack,
                n = e[e.length - 1];
                return ! t && n instanceof i ? n.value: n
            },
            quotedString: function(t) {
                return '"' + t.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") + '"'
            },
            objectLiteral: function(t) {
                var e = [];
                for (var i in t) t.hasOwnProperty(i) && e.push(this.quotedString(i) + ":" + t[i]);
                return "{" + e.join(",") + "}"
            },
            setupHelper: function(t, e, i) {
                var n = [],
                r = this.setupParams(e, t, n, i),
                o = this.nameLookup("helpers", e, "helper");
                return {
                    params: n,
                    paramsInit: r,
                    name: o,
                    callParams: ["depth0"].concat(n).join(", ")
                }
            },
            setupOptions: function(t, e, i) {
                var n, r, o, s = {},
                a = [],
                l = [],
                h = [];
                s.name = this.quotedString(t),
                s.hash = this.popStack(),
                this.trackIds && (s.hashIds = this.popStack()),
                this.stringParams && (s.hashTypes = this.popStack(), s.hashContexts = this.popStack()),
                r = this.popStack(),
                o = this.popStack(),
                (o || r) && (o || (o = "this.noop"), r || (r = "this.noop"), s.fn = o, s.inverse = r);
                for (var c = e; c--;) n = this.popStack(),
                i[c] = n,
                this.trackIds && (h[c] = this.popStack()),
                this.stringParams && (l[c] = this.popStack(), a[c] = this.popStack());
                return this.trackIds && (s.ids = "[" + h.join(",") + "]"),
                this.stringParams && (s.types = "[" + l.join(",") + "]", s.contexts = "[" + a.join(",") + "]"),
                this.options.data && (s.data = "data"),
                s
            },
            setupParams: function(t, e, i, n) {
                var r = this.objectLiteral(this.setupOptions(t, e, i));
                return n ? (this.useRegister("options"), i.push("options"), "options=" + r) : (i.push(r), "")
            }
        };
        for (var h = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield".split(" "), c = n.RESERVED_WORDS = {},
        u = 0, d = h.length; d > u; u++) c[h[u]] = !0;
        return n.isValidJavaScriptVariableName = function(t) {
            return ! n.RESERVED_WORDS[t] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(t)
        },
        r = n
    } (n, i),
    u = function(t, e, i, n, r) {
        "use strict";
        var o, s = t,
        a = e,
        l = i.parser,
        h = i.parse,
        c = n.Compiler,
        u = n.compile,
        d = n.precompile,
        p = r,
        f = s.create,
        g = function() {
            var t = f();
            return t.compile = function(e, i) {
                return u(e, i, t)
            },
            t.precompile = function(e, i) {
                return d(e, i, t)
            },
            t.AST = a,
            t.Compiler = c,
            t.JavaScriptCompiler = p,
            t.Parser = l,
            t.parse = h,
            t
        };
        return s = g(),
        s.create = g,
        o = s
    } (o, s, l, h, c);
    return u
} (),
function() {
    function t(t, e) {
        var i;
        t || (t = {});
        for (i in e) t[i] = e[i];
        return t
    }
    function e() {
        var t, e, i = arguments,
        n = {},
        r = function(t, e) {
            var i, n;
            "object" != typeof t && (t = {});
            for (n in e) e.hasOwnProperty(n) && (i = e[n], t[n] = i && "object" == typeof i && "[object Array]" !== Object.prototype.toString.call(i) && "renderTo" !== n && "number" != typeof i.nodeType ? r(t[n] || {},
            i) : e[n]);
            return t
        };
        for (i[0] === !0 && (n = i[1], i = Array.prototype.slice.call(i, 2)), e = i.length, t = 0; e > t; t++) n = r(n, i[t]);
        return n
    }
    function i(t, e) {
        return parseInt(t, e || 10)
    }
    function n(t) {
        return "string" == typeof t
    }
    function r(t) {
        return t && "object" == typeof t
    }
    function o(t) {
        return "[object Array]" === Object.prototype.toString.call(t)
    }
    function s(t) {
        return "number" == typeof t
    }
    function a(t) {
        return pe.log(t) / pe.LN10
    }
    function l(t) {
        return pe.pow(10, t)
    }
    function h(t, e) {
        for (var i = t.length; i--;) if (t[i] === e) {
            t.splice(i, 1);
            break
        }
    }
    function c(t) {
        return t !== H && null !== t
    }
    function u(t, e, i) {
        var o, s;
        if (n(e)) c(i) ? t.setAttribute(e, i) : t && t.getAttribute && (s = t.getAttribute(e));
        else if (c(e) && r(e)) for (o in e) t.setAttribute(o, e[o]);
        return s
    }
    function d(t) {
        return o(t) ? t: [t]
    }
    function p() {
        var t, e, i = arguments,
        n = i.length;
        for (t = 0; n > t; t++) if (e = i[t], e !== H && null !== e) return e
    }
    function f(e, i) {
        De && !Me && i && i.opacity !== H && (i.filter = "alpha(opacity=" + 100 * i.opacity + ")"),
        t(e.style, i)
    }
    function g(e, i, n, r, o) {
        var s = ue.createElement(e);
        return i && t(s, i),
        o && f(s, {
            padding: 0,
            border: Ge,
            margin: 0
        }),
        n && f(s, n),
        r && r.appendChild(s),
        s
    }
    function m(e, i) {
        var n = function() {
            return H
        };
        return n.prototype = new e,
        t(n.prototype, i),
        n
    }
    function v(t, e, n, r) {
        var o = ce.numberFormat,
        s = W.lang,
        a = +t || 0,
        l = -1 === e ? (a.toString().split(".")[1] || "").length: isNaN(e = be(e)) ? 2 : e,
        h = void 0 === n ? s.decimalPoint: n,
        c = void 0 === r ? s.thousandsSep: r,
        u = 0 > a ? "-": "",
        d = String(i(a = be(a).toFixed(l))),
        p = d.length > 3 ? d.length % 3 : 0;
        return o !== v ? o(t, e, n, r) : u + (p ? d.substr(0, p) + c: "") + d.substr(p).replace(/(\d{3})(?=\d)/g, "$1" + c) + (l ? h + be(a - d).toFixed(l).slice(2) : "")
    }
    function y(t, e) {
        return new Array((e || 2) + 1 - String(t).length).join(0) + t
    }
    function b(t, e, i) {
        var n = t[e];
        t[e] = function() {
            var t = Array.prototype.slice.call(arguments);
            return t.unshift(n),
            i.apply(this, t)
        }
    }
    function x(t, e) {
        var i, n = /f$/,
        r = /\.([0-9])/,
        o = W.lang;
        return n.test(t) ? (i = t.match(r), i = i ? i[1] : -1, null !== e && (e = v(e, i, o.decimalPoint, t.indexOf(",") > -1 ? o.thousandsSep: ""))) : e = q(t, e),
        e
    }
    function w(t, e) {
        for (var i, n, r, o, s, a, l, h = "{",
        c = !1,
        u = []; - 1 !== (l = t.indexOf(h));) {
            if (i = t.slice(0, l), c) {
                for (n = i.split(":"), r = n.shift().split("."), s = r.length, a = e, o = 0; s > o; o++) a = a[r[o]];
                n.length && (a = x(n.join(":"), a)),
                u.push(a)
            } else u.push(i);
            t = t.slice(l + 1),
            c = !c,
            h = c ? "}": "{"
        }
        return u.push(t),
        u.join("")
    }
    function k(t) {
        return pe.pow(10, ge(pe.log(t) / pe.LN10))
    }
    function S(t, e, i, n) {
        var r, o;
        for (i = p(i, 1), r = t / i, e || (e = [1, 2, 2.5, 5, 10], n === !1 && (1 === i ? e = [1, 2, 5, 10] : .1 >= i && (e = [1 / i]))), o = 0; o < e.length && (t = e[o], !(r <= (e[o] + (e[o + 1] || e[o])) / 2)); o++);
        return t *= i
    }
    function C(t, e) {
        var i, n, r = t.length;
        for (n = 0; r > n; n++) t[n].ss_i = n;
        for (t.sort(function(t, n) {
            return i = e(t, n),
            0 === i ? t.ss_i - n.ss_i: i
        }), n = 0; r > n; n++) delete t[n].ss_i
    }
    function T(t) {
        for (var e = t.length,
        i = t[0]; e--;) t[e] < i && (i = t[e]);
        return i
    }
    function D(t) {
        for (var e = t.length,
        i = t[0]; e--;) t[e] > i && (i = t[e]);
        return i
    }
    function A(t, e) {
        var i;
        for (i in t) t[i] && t[i] !== e && t[i].destroy && t[i].destroy(),
        delete t[i]
    }
    function P(t) {
        j || (j = g(je)),
        t && j.appendChild(t),
        j.innerHTML = ""
    }
    function _(t) {
        return parseFloat(t.toPrecision(14))
    }
    function L(t, e) {
        Y = p(t, e.animation)
    }
    function E() {
        var t = W.global.useUTC,
        e = t ? "getUTC": "get",
        i = t ? "setUTC": "set";
        K = W.global.Date || window.Date,
        Z = 6e4 * (t && W.global.timezoneOffset || 0),
        Q = t ? K.UTC: function(t, e, i, n, r, o) {
            return new K(t, e, p(i, 1), p(n, 0), p(r, 0), p(o, 0)).getTime()
        },
        J = e + "Minutes",
        te = e + "Hours",
        ee = e + "Day",
        ie = e + "Date",
        ne = e + "Month",
        re = e + "FullYear",
        oe = i + "Minutes",
        se = i + "Hours",
        ae = i + "Date",
        le = i + "Month",
        he = i + "FullYear"
    }
    function M(t) {
        return W = e(!0, W, t),
        E(),
        W
    }
    function F() {
        return W
    }
    function N() {}
    function I(t, e, i, n) {
        this.axis = t,
        this.pos = e,
        this.type = i || "",
        this.isNew = !0,
        i || n || this.addLabel()
    }
    function $() {
        this.init.apply(this, arguments)
    }
    function O() {
        this.init.apply(this, arguments)
    }
    function R(t, e, i, n, r) {
        var o = t.chart.inverted;
        this.axis = t,
        this.isNegative = i,
        this.options = e,
        this.x = n,
        this.total = null,
        this.points = {},
        this.stack = r,
        this.alignOptions = {
            align: e.align || (o ? i ? "left": "right": "center"),
            verticalAlign: e.verticalAlign || (o ? "middle": i ? "bottom": "top"),
            y: p(e.y, o ? 4 : i ? 14 : -6),
            x: p(e.x, o ? i ? -6 : 6 : 0)
        },
        this.textAlign = e.textAlign || (o ? i ? "right": "left": "center")
    }
    var H, B, z, j, W, q, Y, X, V, U, G, K, Q, Z, J, te, ee, ie, ne, re, oe, se, ae, le, he, ce, ue = document,
    de = window,
    pe = Math,
    fe = pe.round,
    ge = pe.floor,
    me = pe.ceil,
    ve = pe.max,
    ye = pe.min,
    be = pe.abs,
    xe = pe.cos,
    we = pe.sin,
    ke = pe.PI,
    Se = 2 * ke / 360,
    Ce = navigator.userAgent,
    Te = de.opera,
    De = /msie/i.test(Ce) && !Te,
    Ae = 8 === ue.documentMode,
    Pe = /AppleWebKit/.test(Ce),
    _e = /Firefox/.test(Ce),
    Le = /(Mobile|Android|Windows Phone)/.test(Ce),
    Ee = "http://www.w3.org/2000/svg",
    Me = !!ue.createElementNS && !!ue.createElementNS(Ee, "svg").createSVGRect,
    Fe = _e && parseInt(Ce.split("Firefox/")[1], 10) < 4,
    Ne = !Me && !De && !!ue.createElement("canvas").getContext,
    Ie = {},
    $e = 0,
    Oe = function() {
        return H
    },
    Re = [],
    He = 0,
    Be = "Highcharts",
    ze = "4.0.4",
    je = "div",
    We = "absolute",
    qe = "relative",
    Ye = "hidden",
    Xe = "highcharts-",
    Ve = "visible",
    Ue = "px",
    Ge = "none",
    Ke = "M",
    Qe = "L",
    Ze = /^[0-9]+$/,
    Je = "",
    ti = "hover",
    ei = "select",
    ii = "stroke-width",
    ni = {};
    de.Highcharts ? U(16, !0) : ce = de.Highcharts = {},
    q = function(e, i, n) {
        if (!c(i) || isNaN(i)) return "Invalid date";
        e = p(e, "%Y-%m-%d %H:%M:%S");
        var r, o = new K(i - Z),
        s = o[te](),
        a = o[ee](),
        l = o[ie](),
        h = o[ne](),
        u = o[re](),
        d = W.lang,
        f = d.weekdays,
        g = t({
            a: f[a].substr(0, 3),
            A: f[a],
            d: y(l),
            e: l,
            b: d.shortMonths[h],
            B: d.months[h],
            m: y(h + 1),
            y: u.toString().substr(2, 2),
            Y: u,
            H: y(s),
            I: y(s % 12 || 12),
            l: s % 12 || 12,
            M: y(o[J]()),
            p: 12 > s ? "AM": "PM",
            P: 12 > s ? "am": "pm",
            S: y(o.getSeconds()),
            L: y(fe(i % 1e3), 3)
        },
        ce.dateFormats);
        for (r in g) for (; - 1 !== e.indexOf("%" + r);) e = e.replace("%" + r, "function" == typeof g[r] ? g[r](i) : g[r]);
        return n ? e.substr(0, 1).toUpperCase() + e.substr(1) : e
    },
    U = function(t, e) {
        var i = "Highcharts error #" + t + ": www.highcharts.com/errors/" + t;
        if (e) throw i;
        de.console && console.log(i)
    },
    V = {
        millisecond: 1,
        second: 1e3,
        minute: 6e4,
        hour: 36e5,
        day: 864e5,
        week: 6048e5,
        month: 26784e5,
        year: 31556952e3
    },
    X = {
        init: function(t, e, i) {
            e = e || "";
            var n, r, o, s, a, l = t.shift,
            h = e.indexOf("C") > -1,
            c = h ? 7 : 3,
            u = e.split(" "),
            d = [].concat(i),
            p = function(t) {
                for (o = t.length; o--;) t[o] === Ke && t.splice(o + 1, 0, t[o + 1], t[o + 2], t[o + 1], t[o + 2])
            };
            if (h && (p(u), p(d)), t.isArea && (s = u.splice(u.length - 6, 6), a = d.splice(d.length - 6, 6)), l <= d.length / c && u.length === d.length) for (; l--;) d = [].concat(d).splice(0, c).concat(d);
            if (t.shift = 0, u.length) for (n = d.length; u.length < n;) r = [].concat(u).splice(u.length - c, c),
            h && (r[c - 6] = r[c - 2], r[c - 5] = r[c - 1]),
            u = u.concat(r);
            return s && (u = u.concat(s), d = d.concat(a)),
            [u, d]
        },
        step: function(t, e, i, n) {
            var r, o = [],
            s = t.length;
            if (1 === i) o = n;
            else if (s === e.length && 1 > i) for (; s--;) r = parseFloat(t[s]),
            o[s] = isNaN(r) ? t[s] : i * parseFloat(e[s] - r) + r;
            else o = e;
            return o
        }
    },
    function(e) {
        de.HighchartsAdapter = de.HighchartsAdapter || e && {
            init: function(t) {
                var i = e.fx;
                e.extend(e.easing, {
                    easeOutQuad: function(t, e, i, n, r) {
                        return - n * (e /= r) * (e - 2) + i
                    }
                }),
                e.each(["cur", "_default", "width", "height", "opacity"],
                function(t, n) {
                    var r, o = i.step;
                    "cur" === n ? o = i.prototype: "_default" === n && e.Tween && (o = e.Tween.propHooks[n], n = "set"),
                    r = o[n],
                    r && (o[n] = function(e) {
                        var i;
                        return e = t ? e: this,
                        "align" !== e.prop ? (i = e.elem, i.attr ? i.attr(e.prop, "cur" === n ? H: e.now) : r.apply(this, arguments)) : void 0
                    })
                }),
                b(e.cssHooks.opacity, "get",
                function(t, e, i) {
                    return e.attr ? e.opacity || 0 : t.call(this, e, i)
                }),
                this.addAnimSetter("d",
                function(e) {
                    var i, n = e.elem;
                    e.started || (i = t.init(n, n.d, n.toD), e.start = i[0], e.end = i[1], e.started = !0),
                    n.attr("d", t.step(e.start, e.end, e.pos, n.toD))
                }),
                this.each = Array.prototype.forEach ?
                function(t, e) {
                    return Array.prototype.forEach.call(t, e)
                }: function(t, e) {
                    var i, n = t.length;
                    for (i = 0; n > i; i++) if (e.call(t[i], t[i], i, t) === !1) return i
                },
                e.fn.highcharts = function() {
                    var t, e, i, r = "Chart",
                    o = arguments;
                    return this[0] && (n(o[0]) && (r = o[0], o = Array.prototype.slice.call(o, 1)), t = o[0], t !== H && (t.chart = t.chart || {},
                    t.chart.renderTo = this[0], i = new ce[r](t, o[1]), e = this), t === H && (e = Re[u(this[0], "data-highcharts-chart")])),
                    e
                }
            },
            addAnimSetter: function(t, i) {
                e.Tween ? e.Tween.propHooks[t] = {
                    set: i
                }: e.fx.step[t] = i
            },
            getScript: e.getScript,
            inArray: e.inArray,
            adapterRun: function(t, i) {
                return e(t)[i]()
            },
            grep: e.grep,
            map: function(t, e) {
                for (var i = [], n = 0, r = t.length; r > n; n++) i[n] = e.call(t[n], t[n], n, t);
                return i
            },
            offset: function(t) {
                return e(t).offset()
            },
            addEvent: function(t, i, n) {
                e(t).bind(i, n)
            },
            removeEvent: function(t, i, n) {
                var r = ue.removeEventListener ? "removeEventListener": "detachEvent";
                ue[r] && t && !t[r] && (t[r] = function() {}),
                e(t).unbind(i, n)
            },
            fireEvent: function(i, n, r, o) {
                var s, a = e.Event(n),
                l = "detached" + n; ! De && r && (delete r.layerX, delete r.layerY, delete r.returnValue),
                t(a, r),
                i[n] && (i[l] = i[n], i[n] = null),
                e.each(["preventDefault", "stopPropagation"],
                function(t, e) {
                    var i = a[e];
                    a[e] = function() {
                        try {
                            i.call(a)
                        } catch(t) {
                            "preventDefault" === e && (s = !0)
                        }
                    }
                }),
                e(i).trigger(a),
                i[l] && (i[n] = i[l], i[l] = null),
                !o || a.isDefaultPrevented() || s || o(a)
            },
            washMouseEvent: function(t) {
                var e = t.originalEvent || t;
                return e.pageX === H && (e.pageX = t.pageX, e.pageY = t.pageY),
                e
            },
            animate: function(t, i, n) {
                var r = e(t);
                t.style || (t.style = {}),
                i.d && (t.toD = i.d, i.d = 1),
                r.stop(),
                i.opacity !== H && t.attr && (i.opacity += "px"),
                t.hasAnim = 1,
                r.animate(i, n)
            },
            stop: function(t) {
                t.hasAnim && e(t).stop()
            }
        }
    } (de.jQuery);
    var ri = de.HighchartsAdapter,
    oi = ri || {};
    ri && ri.init.call(ri, X);
    var si = oi.adapterRun,
    ai = oi.getScript,
    li = oi.inArray,
    hi = oi.each,
    ci = oi.grep,
    ui = oi.offset,
    di = oi.map,
    pi = oi.addEvent,
    fi = oi.removeEvent,
    gi = oi.fireEvent,
    mi = oi.washMouseEvent,
    vi = oi.animate,
    yi = oi.stop,
    bi = {
        enabled: !0,
        x: 0,
        y: 15,
        style: {
            color: "#606060",
            cursor: "default",
            fontSize: "11px"
        }
    };
    W = {
        colors: ["#7cb5ec", "#434348", "#90ed7d", "#f7a35c", "#8085e9", "#f15c80", "#e4d354", "#8085e8", "#8d4653", "#91e8e1"],
        symbols: ["circle", "diamond", "square", "triangle", "triangle-down"],
        lang: {
            loading: "Loading...",
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            decimalPoint: ".",
            numericSymbols: ["k", "M", "G", "T", "P", "E"],
            resetZoom: "Reset zoom",
            resetZoomTitle: "Reset zoom level 1:1",
            thousandsSep: ","
        },
        global: {
            useUTC: !0,
            canvasToolsURL: "http://code.highcharts.com/4.0.4/modules/canvas-tools.js",
            VMLRadialGradientURL: "http://code.highcharts.com/4.0.4/gfx/vml-radial-gradient.png"
        },
        chart: {
            borderColor: "#4572A7",
            borderRadius: 0,
            defaultSeriesType: "line",
            ignoreHiddenSeries: !0,
            spacing: [10, 10, 15, 10],
            backgroundColor: "#FFFFFF",
            plotBorderColor: "#C0C0C0",
            resetZoomButton: {
                theme: {
                    zIndex: 20
                },
                position: {
                    align: "right",
                    x: -10,
                    y: 10
                }
            }
        },
        title: {
            text: "Chart title",
            align: "center",
            margin: 15,
            style: {
                color: "#333333",
                fontSize: "18px"
            }
        },
        subtitle: {
            text: "",
            align: "center",
            style: {
                color: "#555555"
            }
        },
        plotOptions: {
            line: {
                allowPointSelect: !1,
                showCheckbox: !1,
                animation: {
                    duration: 1e3
                },
                events: {},
                lineWidth: 2,
                marker: {
                    lineWidth: 0,
                    radius: 4,
                    lineColor: "#FFFFFF",
                    states: {
                        hover: {
                            enabled: !0,
                            lineWidthPlus: 1,
                            radiusPlus: 2
                        },
                        select: {
                            fillColor: "#FFFFFF",
                            lineColor: "#000000",
                            lineWidth: 2
                        }
                    }
                },
                point: {
                    events: {}
                },
                dataLabels: e(bi, {
                    align: "center",
                    enabled: !1,
                    formatter: function() {
                        return null === this.y ? "": v(this.y, -1)
                    },
                    verticalAlign: "bottom",
                    y: 0
                }),
                cropThreshold: 300,
                pointRange: 0,
                states: {
                    hover: {
                        lineWidthPlus: 1,
                        marker: {},
                        halo: {
                            size: 10,
                            opacity: .25
                        }
                    },
                    select: {
                        marker: {}
                    }
                },
                stickyTracking: !0,
                turboThreshold: 1e3
            }
        },
        labels: {
            style: {
                position: We,
                color: "#3E576F"
            }
        },
        legend: {
            enabled: !0,
            align: "center",
            layout: "horizontal",
            labelFormatter: function() {
                return this.name
            },
            borderColor: "#909090",
            borderRadius: 0,
            navigation: {
                activeColor: "#274b6d",
                inactiveColor: "#CCC"
            },
            shadow: !1,
            itemStyle: {
                color: "#333333",
                fontSize: "12px",
                fontWeight: "bold"
            },
            itemHoverStyle: {
                color: "#000"
            },
            itemHiddenStyle: {
                color: "#CCC"
            },
            itemCheckboxStyle: {
                position: We,
                width: "13px",
                height: "13px"
            },
            symbolPadding: 5,
            verticalAlign: "bottom",
            x: 0,
            y: 0,
            title: {
                style: {
                    fontWeight: "bold"
                }
            }
        },
        loading: {
            labelStyle: {
                fontWeight: "bold",
                position: qe,
                top: "45%"
            },
            style: {
                position: We,
                backgroundColor: "white",
                opacity: .5,
                textAlign: "center"
            }
        },
        tooltip: {
            enabled: !0,
            animation: Me,
            backgroundColor: "rgba(249, 249, 249, .85)",
            borderWidth: 1,
            borderRadius: 3,
            dateTimeLabelFormats: {
                millisecond: "%A, %b %e, %H:%M:%S.%L",
                second: "%A, %b %e, %H:%M:%S",
                minute: "%A, %b %e, %H:%M",
                hour: "%A, %b %e, %H:%M",
                day: "%A, %b %e, %Y",
                week: "Week from %A, %b %e, %Y",
                month: "%B %Y",
                year: "%Y"
            },
            headerFormat: '<span style="font-size: 10px">{point.key}</span><br/>',
            pointFormat: '<span style="color:{series.color}">\u25cf</span> {series.name}: <b>{point.y}</b><br/>',
            shadow: !0,
            snap: Le ? 25 : 10,
            style: {
                color: "#333333",
                cursor: "default",
                fontSize: "12px",
                padding: "8px",
                whiteSpace: "nowrap"
            }
        },
        credits: {
            enabled: !0,
            text: "Highcharts.com",
            href: "http://www.highcharts.com",
            position: {
                align: "right",
                x: -10,
                verticalAlign: "bottom",
                y: -5
            },
            style: {
                cursor: "pointer",
                color: "#909090",
                fontSize: "9px"
            }
        }
    };
    var xi = W.plotOptions,
    wi = xi.line;
    E();
    var ki = /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,
    Si = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/,
    Ci = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,
    Ti = function(t) {
        function n(t) {
            t && t.stops ? h = di(t.stops,
            function(t) {
                return Ti(t[1])
            }) : (l = ki.exec(t), l ? c = [i(l[1]), i(l[2]), i(l[3]), parseFloat(l[4], 10)] : (l = Si.exec(t), l ? c = [i(l[1], 16), i(l[2], 16), i(l[3], 16), 1] : (l = Ci.exec(t), l && (c = [i(l[1]), i(l[2]), i(l[3]), 1]))))
        }
        function r(i) {
            var n;
            return h ? (n = e(t), n.stops = [].concat(n.stops), hi(h,
            function(t, e) {
                n.stops[e] = [n.stops[e][0], t.get(i)]
            })) : n = c && !isNaN(c[0]) ? "rgb" === i ? "rgb(" + c[0] + "," + c[1] + "," + c[2] + ")": "a" === i ? c[3] : "rgba(" + c.join(",") + ")": t,
            n
        }
        function o(t) {
            if (h) hi(h,
            function(e) {
                e.brighten(t)
            });
            else if (s(t) && 0 !== t) {
                var e;
                for (e = 0; 3 > e; e++) c[e] += i(255 * t),
                c[e] < 0 && (c[e] = 0),
                c[e] > 255 && (c[e] = 255)
            }
            return this
        }
        function a(t) {
            return c[3] = t,
            this
        }
        var l, h, c = [];
        return n(t),
        {
            get: r,
            brighten: o,
            rgba: c,
            setOpacity: a
        }
    };
    N.prototype = {
        opacity: 1,
        textProps: ["fontSize", "fontWeight", "fontFamily", "color", "lineHeight", "width", "textDecoration", "textShadow", "HcTextStroke"],
        init: function(t, e) {
            var i = this;
            i.element = "span" === e ? g(e) : ue.createElementNS(Ee, e),
            i.renderer = t
        },
        animate: function(t, i, n) {
            var r = p(i, Y, !0);
            return yi(this),
            r ? (r = e(r, {}), n && (r.complete = n), vi(this, t, r)) : (this.attr(t), n && n()),
            this
        },
        colorGradient: function(t, i, n) {
            var r, s, a, l, h, u, d, p, f, g, m, v = this.renderer,
            y = [];
            if (t.linearGradient ? s = "linearGradient": t.radialGradient && (s = "radialGradient"), s) {
                a = t[s],
                l = v.gradients,
                u = t.stops,
                f = n.radialReference,
                o(a) && (t[s] = a = {
                    x1: a[0],
                    y1: a[1],
                    x2: a[2],
                    y2: a[3],
                    gradientUnits: "userSpaceOnUse"
                }),
                "radialGradient" === s && f && !c(a.gradientUnits) && (a = e(a, {
                    cx: f[0] - f[2] / 2 + a.cx * f[2],
                    cy: f[1] - f[2] / 2 + a.cy * f[2],
                    r: a.r * f[2],
                    gradientUnits: "userSpaceOnUse"
                }));
                for (g in a)"id" !== g && y.push(g, a[g]);
                for (g in u) y.push(u[g]);
                y = y.join(","),
                l[y] ? m = l[y].attr("id") : (a.id = m = Xe + $e++, l[y] = h = v.createElement(s).attr(a).add(v.defs), h.stops = [], hi(u,
                function(t) {
                    var e;
                    0 === t[1].indexOf("rgba") ? (r = Ti(t[1]), d = r.get("rgb"), p = r.get("a")) : (d = t[1], p = 1),
                    e = v.createElement("stop").attr({
                        offset: t[0],
                        "stop-color": d,
                        "stop-opacity": p
                    }).add(h),
                    h.stops.push(e)
                })),
                n.setAttribute(i, "url(" + v.url + "#" + m + ")")
            }
        },
        attr: function(t, e) {
            var i, n, r, o, s = this.element,
            a = this;
            if ("string" == typeof t && e !== H && (i = t, t = {},
            t[i] = e), "string" == typeof t) a = (this[t + "Getter"] || this._defaultGetter).call(this, t, s);
            else {
                for (i in t) n = t[i],
                o = !1,
                this.symbolName && /^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)/.test(i) && (r || (this.symbolAttr(t), r = !0), o = !0),
                !this.rotation || "x" !== i && "y" !== i || (this.doTransform = !0),
                o || (this[i + "Setter"] || this._defaultSetter).call(this, n, i, s),
                this.shadows && /^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(i) && this.updateShadows(i, n);
                this.doTransform && (this.updateTransform(), this.doTransform = !1)
            }
            return a
        },
        updateShadows: function(t, e) {
            for (var i = this.shadows,
            n = i.length; n--;) i[n].setAttribute(t, "height" === t ? ve(e - (i[n].cutHeight || 0), 0) : "d" === t ? this.d: e)
        },
        addClass: function(t) {
            var e = this.element,
            i = u(e, "class") || "";
            return - 1 === i.indexOf(t) && u(e, "class", i + " " + t),
            this
        },
        symbolAttr: function(t) {
            var e = this;
            hi(["x", "y", "r", "start", "end", "width", "height", "innerR", "anchorX", "anchorY"],
            function(i) {
                e[i] = p(t[i], e[i])
            }),
            e.attr({
                d: e.renderer.symbols[e.symbolName](e.x, e.y, e.width, e.height, e)
            })
        },
        clip: function(t) {
            return this.attr("clip-path", t ? "url(" + this.renderer.url + "#" + t.id + ")": Ge)
        },
        crisp: function(t) {
            var e, i, n = this,
            r = {},
            o = t.strokeWidth || n.strokeWidth || 0;
            i = fe(o) % 2 / 2,
            t.x = ge(t.x || n.x || 0) + i,
            t.y = ge(t.y || n.y || 0) + i,
            t.width = ge((t.width || n.width || 0) - 2 * i),
            t.height = ge((t.height || n.height || 0) - 2 * i),
            t.strokeWidth = o;
            for (e in t) n[e] !== t[e] && (n[e] = r[e] = t[e]);
            return r
        },
        css: function(e) {
            var n, r, o, s = this,
            a = s.styles,
            l = {},
            h = s.element,
            c = "",
            d = !a;
            if (e && e.color && (e.fill = e.color), a) for (r in e) e[r] !== a[r] && (l[r] = e[r], d = !0);
            if (d) {
                if (n = s.textWidth = e && e.width && "text" === h.nodeName.toLowerCase() && i(e.width), a && (e = t(a, l)), s.styles = e, n && (Ne || !Me && s.renderer.forExport) && delete e.width, De && !Me) f(s.element, e);
                else {
                    o = function(t, e) {
                        return "-" + e.toLowerCase()
                    };
                    for (r in e) c += r.replace(/([A-Z])/g, o) + ":" + e[r] + ";";
                    u(h, "style", c)
                }
                n && s.added && s.renderer.buildText(s)
            }
            return s
        },
        on: function(t, e) {
            var i = this,
            n = i.element;
            return z && "click" === t ? (n.ontouchstart = function(t) {
                i.touchEventFired = K.now(),
                t.preventDefault(),
                e.call(n, t)
            },
            n.onclick = function(t) { ( - 1 === Ce.indexOf("Android") || K.now() - (i.touchEventFired || 0) > 1100) && e.call(n, t)
            }) : n["on" + t] = e,
            this
        },
        setRadialReference: function(t) {
            return this.element.radialReference = t,
            this
        },
        translate: function(t, e) {
            return this.attr({
                translateX: t,
                translateY: e
            })
        },
        invert: function() {
            var t = this;
            return t.inverted = !0,
            t.updateTransform(),
            t
        },
        updateTransform: function() {
            var t, e = this,
            i = e.translateX || 0,
            n = e.translateY || 0,
            r = e.scaleX,
            o = e.scaleY,
            s = e.inverted,
            a = e.rotation,
            l = e.element;
            s && (i += e.attr("width"), n += e.attr("height")),
            t = ["translate(" + i + "," + n + ")"],
            s ? t.push("rotate(90) scale(-1,1)") : a && t.push("rotate(" + a + " " + (l.getAttribute("x") || 0) + " " + (l.getAttribute("y") || 0) + ")"),
            (c(r) || c(o)) && t.push("scale(" + p(r, 1) + " " + p(o, 1) + ")"),
            t.length && l.setAttribute("transform", t.join(" "))
        },
        toFront: function() {
            var t = this.element;
            return t.parentNode.appendChild(t),
            this
        },
        align: function(t, e, i) {
            var r, o, s, a, l, c = {},
            u = this.renderer,
            d = u.alignedObjects;
            return t ? (this.alignOptions = t, this.alignByTranslate = e, (!i || n(i)) && (this.alignTo = l = i || "renderer", h(d, this), d.push(this), i = null)) : (t = this.alignOptions, e = this.alignByTranslate, l = this.alignTo),
            i = p(i, u[l], u),
            r = t.align,
            o = t.verticalAlign,
            s = (i.x || 0) + (t.x || 0),
            a = (i.y || 0) + (t.y || 0),
            ("right" === r || "center" === r) && (s += (i.width - (t.width || 0)) / {
                right: 1,
                center: 2
            } [r]),
            c[e ? "translateX": "x"] = fe(s),
            ("bottom" === o || "middle" === o) && (a += (i.height - (t.height || 0)) / ({
                bottom: 1,
                middle: 2
            } [o] || 1)),
            c[e ? "translateY": "y"] = fe(a),
            this[this.placed ? "animate": "attr"](c),
            this.placed = !0,
            this.alignAttr = c,
            this
        },
        getBBox: function() {
            var e, i, n, r = this,
            o = r.bBox,
            s = r.renderer,
            a = r.rotation,
            l = r.element,
            h = r.styles,
            c = a * Se,
            u = r.textStr;
            if (("" === u || Ze.test(u)) && (n = "num." + u.toString().length + (h ? "|" + h.fontSize + "|" + h.fontFamily: "")), n && (o = s.cache[n]), !o) {
                if (l.namespaceURI === Ee || s.forExport) {
                    try {
                        o = l.getBBox ? t({},
                        l.getBBox()) : {
                            width: l.offsetWidth,
                            height: l.offsetHeight
                        }
                    } catch(d) {} (!o || o.width < 0) && (o = {
                        width: 0,
                        height: 0
                    })
                } else o = r.htmlGetBBox();
                s.isSVG && (e = o.width, i = o.height, De && h && "11px" === h.fontSize && "16.9" === i.toPrecision(3) && (o.height = i = 14), a && (o.width = be(i * we(c)) + be(e * xe(c)), o.height = be(i * xe(c)) + be(e * we(c)))),
                r.bBox = o,
                n && (s.cache[n] = o)
            }
            return o
        },
        show: function(t) {
            return t && this.element.namespaceURI === Ee ? this.element.removeAttribute("visibility") : this.attr({
                visibility: t ? "inherit": Ve
            }),
            this
        },
        hide: function() {
            return this.attr({
                visibility: Ye
            })
        },
        fadeOut: function(t) {
            var e = this;
            e.animate({
                opacity: 0
            },
            {
                duration: t || 150,
                complete: function() {
                    e.attr({
                        y: -9999
                    })
                }
            })
        },
        add: function(t) {
            var e, n, r, o, s, a = this.renderer,
            l = t || a,
            h = l.element || a.box,
            d = this.element,
            p = this.zIndex;
            if (t && (this.parentGroup = t), this.parentInverted = t && t.inverted, void 0 !== this.textStr && a.buildText(this), p && (l.handleZ = !0, p = i(p)), l.handleZ) for (e = h.childNodes, o = 0; o < e.length; o++) if (n = e[o], r = u(n, "zIndex"), n !== d && (i(r) > p || !c(p) && c(r))) {
                h.insertBefore(d, n),
                s = !0;
                break
            }
            return s || h.appendChild(d),
            this.added = !0,
            this.onAdd && this.onAdd(),
            this
        },
        safeRemoveChild: function(t) {
            var e = t.parentNode;
            e && e.removeChild(t)
        },
        destroy: function() {
            var t, e, i, n = this,
            r = n.element || {},
            o = n.shadows,
            s = n.renderer.isSVG && "SPAN" === r.nodeName && n.parentGroup;
            if (r.onclick = r.onmouseout = r.onmouseover = r.onmousemove = r.point = null, yi(n), n.clipPath && (n.clipPath = n.clipPath.destroy()), n.stops) {
                for (i = 0; i < n.stops.length; i++) n.stops[i] = n.stops[i].destroy();
                n.stops = null
            }
            for (n.safeRemoveChild(r), o && hi(o,
            function(t) {
                n.safeRemoveChild(t)
            }); s && s.div && 0 === s.div.childNodes.length;) t = s.parentGroup,
            n.safeRemoveChild(s.div),
            delete s.div,
            s = t;
            n.alignTo && h(n.renderer.alignedObjects, n);
            for (e in n) delete n[e];
            return null
        },
        shadow: function(t, e, i) {
            var n, r, o, s, a, l, h = [],
            c = this.element;
            if (t) {
                for (s = p(t.width, 3), a = (t.opacity || .15) / s, l = this.parentInverted ? "(-1,-1)": "(" + p(t.offsetX, 1) + ", " + p(t.offsetY, 1) + ")", n = 1; s >= n; n++) r = c.cloneNode(0),
                o = 2 * s + 1 - 2 * n,
                u(r, {
                    isShadow: "true",
                    stroke: t.color || "black",
                    "stroke-opacity": a * n,
                    "stroke-width": o,
                    transform: "translate" + l,
                    fill: Ge
                }),
                i && (u(r, "height", ve(u(r, "height") - o, 0)), r.cutHeight = o),
                e ? e.element.appendChild(r) : c.parentNode.insertBefore(r, c),
                h.push(r);
                this.shadows = h
            }
            return this
        },
        xGetter: function(t) {
            return "circle" === this.element.nodeName && (t = {
                x: "cx",
                y: "cy"
            } [t] || t),
            this._defaultGetter(t)
        },
        _defaultGetter: function(t) {
            var e = p(this[t], this.element ? this.element.getAttribute(t) : null, 0);
            return /^[\-0-9\.]+$/.test(e) && (e = parseFloat(e)),
            e
        },
        dSetter: function(t, e, i) {
            t && t.join && (t = t.join(" ")),
            /(NaN| {2}|^$)/.test(t) && (t = "M 0 0"),
            i.setAttribute(e, t),
            this[e] = t
        },
        dashstyleSetter: function(t) {
            var e;
            if (t = t && t.toLowerCase()) {
                for (t = t.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(","), e = t.length; e--;) t[e] = i(t[e]) * this["stroke-width"];
                t = t.join(",").replace("NaN", "none"),
                this.element.setAttribute("stroke-dasharray", t)
            }
        },
        alignSetter: function(t) {
            this.element.setAttribute("text-anchor", {
                left: "start",
                center: "middle",
                right: "end"
            } [t])
        },
        opacitySetter: function(t, e, i) {
            this[e] = t,
            i.setAttribute(e, t)
        },
        titleSetter: function(t) {
            var e = this.element.getElementsByTagName("title")[0];
            e || (e = ue.createElementNS(Ee, "title"), this.element.appendChild(e)),
            e.textContent = p(t, "").replace(/<[^>]*>/g, "")
        },
        textSetter: function(t) {
            t !== this.textStr && (delete this.bBox, this.textStr = t, this.added && this.renderer.buildText(this))
        },
        fillSetter: function(t, e, i) {
            "string" == typeof t ? i.setAttribute(e, t) : t && this.colorGradient(t, e, i)
        },
        zIndexSetter: function(t, e, i) {
            i.setAttribute(e, t),
            this[e] = t
        },
        _defaultSetter: function(t, e, i) {
            i.setAttribute(e, t)
        }
    },
    N.prototype.yGetter = N.prototype.xGetter,
    N.prototype.translateXSetter = N.prototype.translateYSetter = N.prototype.rotationSetter = N.prototype.verticalAlignSetter = N.prototype.scaleXSetter = N.prototype.scaleYSetter = function(t, e) {
        this[e] = t,
        this.doTransform = !0
    },
    N.prototype["stroke-widthSetter"] = N.prototype.strokeSetter = function(t, e, i) {
        this[e] = t,
        this.stroke && this["stroke-width"] ? (this.strokeWidth = this["stroke-width"], N.prototype.fillSetter.call(this, this.stroke, "stroke", i), i.setAttribute("stroke-width", this["stroke-width"]), this.hasStroke = !0) : "stroke-width" === e && 0 === t && this.hasStroke && (i.removeAttribute("stroke"), this.hasStroke = !1)
    };
    var Di = function() {
        this.init.apply(this, arguments)
    };
    Di.prototype = {
        Element: N,
        init: function(t, e, i, n, r) {
            var o, s, a, l = this,
            h = location;
            o = l.createElement("svg").attr({
                version: "1.1"
            }).css(this.getStyle(n)),
            s = o.element,
            t.appendChild(s),
            -1 === t.innerHTML.indexOf("xmlns") && u(s, "xmlns", Ee),
            l.isSVG = !0,
            l.box = s,
            l.boxWrapper = o,
            l.alignedObjects = [],
            l.url = (_e || Pe) && ue.getElementsByTagName("base").length ? h.href.replace(/#.*?$/, "").replace(/([\('\)])/g, "\\$1").replace(/ /g, "%20") : "",
            a = this.createElement("desc").add(),
            a.element.appendChild(ue.createTextNode("Created with " + Be + " " + ze)),
            l.defs = this.createElement("defs").add(),
            l.forExport = r,
            l.gradients = {},
            l.cache = {},
            l.setSize(e, i, !1);
            var c, d;
            _e && t.getBoundingClientRect && (l.subPixelFix = c = function() {
                f(t, {
                    left: 0,
                    top: 0
                }),
                d = t.getBoundingClientRect(),
                f(t, {
                    left: me(d.left) - d.left + Ue,
                    top: me(d.top) - d.top + Ue
                })
            },
            c(), pi(de, "resize", c))
        },
        getStyle: function(e) {
            return this.style = t({
                fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',
                fontSize: "12px"
            },
            e)
        },
        isHidden: function() {
            return ! this.boxWrapper.getBBox().width
        },
        destroy: function() {
            var t = this,
            e = t.defs;
            return t.box = null,
            t.boxWrapper = t.boxWrapper.destroy(),
            A(t.gradients || {}),
            t.gradients = null,
            e && (t.defs = e.destroy()),
            t.subPixelFix && fi(de, "resize", t.subPixelFix),
            t.alignedObjects = null,
            null
        },
        createElement: function(t) {
            var e = new this.Element;
            return e.init(this, t),
            e
        },
        draw: function() {},
        buildText: function(t) {
            for (var e, n, r, o = t.element,
            s = this,
            a = s.forExport,
            l = p(t.textStr, "").toString(), h = -1 !== l.indexOf("<"), c = o.childNodes, d = u(o, "x"), g = t.styles, m = t.textWidth, v = g && g.lineHeight, y = g && g.HcTextStroke, b = c.length, x = function(t) {
                return v ? i(v) : s.fontMetrics(/(px|em)$/.test(t && t.style.fontSize) ? t.style.fontSize: g && g.fontSize || s.style.fontSize || 12, t).h
            }; b--;) o.removeChild(c[b]);
            return h || y || -1 !== l.indexOf(" ") ? (n = /<.*style="([^"]+)".*>/, r = /<.*href="(http[^"]+)".*>/, m && !t.added && this.box.appendChild(o), e = h ? l.replace(/<(b|strong)>/g, '<span style="font-weight:bold">').replace(/<(i|em)>/g, '<span style="font-style:italic">').replace(/<a/g, "<span").replace(/<\/(b|strong|i|em|a)>/g, "</span>").split(/<br.*?>/g) : [l], "" === e[e.length - 1] && e.pop(), hi(e,
            function(e, i) {
                var l, h = 0;
                e = e.replace(/<span/g, "|||<span").replace(/<\/span>/g, "</span>|||"),
                l = e.split("|||"),
                hi(l,
                function(e) {
                    if ("" !== e || 1 === l.length) {
                        var c, p = {},
                        v = ue.createElementNS(Ee, "tspan");
                        if (n.test(e) && (c = e.match(n)[1].replace(/(;| |^)color([ :])/, "$1fill$2"), u(v, "style", c)), r.test(e) && !a && (u(v, "onclick", 'location.href="' + e.match(r)[1] + '"'), f(v, {
                            cursor: "pointer"
                        })), e = (e.replace(/<(.|\n)*?>/g, "") || " ").replace(/&lt;/g, "<").replace(/&gt;/g, ">"), " " !== e) {
                            if (v.appendChild(ue.createTextNode(e)), h ? p.dx = 0 : i && null !== d && (p.x = d), u(v, p), o.appendChild(v), !h && i && (!Me && a && f(v, {
                                display: "block"
                            }), u(v, "dy", x(v))), m) for (var y, b, w, k = e.replace(/([^\^])-/g, "$1- ").split(" "), S = l.length > 1 || k.length > 1 && "nowrap" !== g.whiteSpace, C = g.HcHeight, T = [], D = x(v), A = 1; S && (k.length || T.length);) delete t.bBox,
                            w = t.getBBox(),
                            b = w.width,
                            !Me && s.forExport && (b = s.measureSpanWidth(v.firstChild.data, t.styles)),
                            y = b > m,
                            y && 1 !== k.length ? (v.removeChild(v.firstChild), T.unshift(k.pop())) : (k = T, T = [], k.length && (A++, C && A * D > C ? (k = ["..."], t.attr("title", t.textStr)) : (v = ue.createElementNS(Ee, "tspan"), u(v, {
                                dy: D,
                                x: d
                            }), c && u(v, "style", c), o.appendChild(v))), b > m && (m = b)),
                            k.length && v.appendChild(ue.createTextNode(k.join(" ").replace(/- /g, "-")));
                            h++
                        }
                    }
                })
            }), void 0) : void o.appendChild(ue.createTextNode(l))
        },
        button: function(i, n, r, o, s, a, l, h, c) {
            var u, d, p, f, g, m, v = this.label(i, n, r, c, null, null, null, null, "button"),
            y = 0,
            b = {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 1
            };
            return s = e({
                "stroke-width": 1,
                stroke: "#CCCCCC",
                fill: {
                    linearGradient: b,
                    stops: [[0, "#FEFEFE"], [1, "#F6F6F6"]]
                },
                r: 2,
                padding: 5,
                style: {
                    color: "black"
                }
            },
            s),
            p = s.style,
            delete s.style,
            a = e(s, {
                stroke: "#68A",
                fill: {
                    linearGradient: b,
                    stops: [[0, "#FFF"], [1, "#ACF"]]
                }
            },
            a),
            f = a.style,
            delete a.style,
            l = e(s, {
                stroke: "#68A",
                fill: {
                    linearGradient: b,
                    stops: [[0, "#9BD"], [1, "#CDF"]]
                }
            },
            l),
            g = l.style,
            delete l.style,
            h = e(s, {
                style: {
                    color: "#CCC"
                }
            },
            h),
            m = h.style,
            delete h.style,
            pi(v.element, De ? "mouseover": "mouseenter",
            function() {
                3 !== y && v.attr(a).css(f)
            }),
            pi(v.element, De ? "mouseout": "mouseleave",
            function() {
                3 !== y && (u = [s, a, l][y], d = [p, f, g][y], v.attr(u).css(d))
            }),
            v.setState = function(t) {
                v.state = y = t,
                t ? 2 === t ? v.attr(l).css(g) : 3 === t && v.attr(h).css(m) : v.attr(s).css(p)
            },
            v.on("click",
            function() {
                3 !== y && o.call(v)
            }).attr(s).css(t({
                cursor: "default"
            },
            p))
        },
        crispLine: function(t, e) {
            return t[1] === t[4] && (t[1] = t[4] = fe(t[1]) - e % 2 / 2),
            t[2] === t[5] && (t[2] = t[5] = fe(t[2]) + e % 2 / 2),
            t
        },
        path: function(e) {
            var i = {
                fill: Ge
            };
            return o(e) ? i.d = e: r(e) && t(i, e),
            this.createElement("path").attr(i)
        },
        circle: function(t, e, i) {
            var n = r(t) ? t: {
                x: t,
                y: e,
                r: i
            },
            o = this.createElement("circle");
            return o.xSetter = function(t) {
                this.element.setAttribute("cx", t)
            },
            o.ySetter = function(t) {
                this.element.setAttribute("cy", t)
            },
            o.attr(n)
        },
        arc: function(t, e, i, n, o, s) {
            var a;
            return r(t) && (e = t.y, i = t.r, n = t.innerR, o = t.start, s = t.end, t = t.x),
            a = this.symbol("arc", t || 0, e || 0, i || 0, i || 0, {
                innerR: n || 0,
                start: o || 0,
                end: s || 0
            }),
            a.r = i,
            a
        },
        rect: function(t, e, i, n, o, s) {
            o = r(t) ? t.r: o;
            var a = this.createElement("rect"),
            l = r(t) ? t: t === H ? {}: {
                x: t,
                y: e,
                width: ve(i, 0),
                height: ve(n, 0)
            };
            return s !== H && (l.strokeWidth = s, l = a.crisp(l)),
            o && (l.r = o),
            a.rSetter = function(t) {
                u(this.element, {
                    rx: t,
                    ry: t
                })
            },
            a.attr(l)
        },
        setSize: function(t, e, i) {
            var n = this,
            r = n.alignedObjects,
            o = r.length;
            for (n.width = t, n.height = e, n.boxWrapper[p(i, !0) ? "animate": "attr"]({
                width: t,
                height: e
            }); o--;) r[o].align()
        },
        g: function(t) {
            var e = this.createElement("g");
            return c(t) ? e.attr({
                "class": Xe + t
            }) : e
        },
        image: function(e, i, n, r, o) {
            var s, a = {
                preserveAspectRatio: Ge
            };
            return arguments.length > 1 && t(a, {
                x: i,
                y: n,
                width: r,
                height: o
            }),
            s = this.createElement("image").attr(a),
            s.element.setAttributeNS ? s.element.setAttributeNS("http://www.w3.org/1999/xlink", "href", e) : s.element.setAttribute("hc-svg-href", e),
            s
        },
        symbol: function(e, i, n, r, o, s) {
            var a, l, h, c, u, d = this.symbols[e],
            p = d && d(fe(i), fe(n), r, o, s),
            f = /^url\((.*?)\)$/;
            return p ? (a = this.path(p), t(a, {
                symbolName: e,
                x: i,
                y: n,
                width: r,
                height: o
            }), s && t(a, s)) : f.test(e) && (u = function(t, e) {
                t.element && (t.attr({
                    width: e[0],
                    height: e[1]
                }), t.alignByTranslate || t.translate(fe((r - e[0]) / 2), fe((o - e[1]) / 2)))
            },
            h = e.match(f)[1], c = Ie[h] || s && s.width && s.height && [s.width, s.height], a = this.image(h).attr({
                x: i,
                y: n
            }), a.isImg = !0, c ? u(a, c) : (a.attr({
                width: 0,
                height: 0
            }), l = g("img", {
                onload: function() {
                    u(a, Ie[h] = [this.width, this.height])
                },
                src: h
            }))),
            a
        },
        symbols: {
            circle: function(t, e, i, n) {
                var r = .166 * i;
                return [Ke, t + i / 2, e, "C", t + i + r, e, t + i + r, e + n, t + i / 2, e + n, "C", t - r, e + n, t - r, e, t + i / 2, e, "Z"]
            },
            square: function(t, e, i, n) {
                return [Ke, t, e, Qe, t + i, e, t + i, e + n, t, e + n, "Z"]
            },
            triangle: function(t, e, i, n) {
                return [Ke, t + i / 2, e, Qe, t + i, e + n, t, e + n, "Z"]
            },
            "triangle-down": function(t, e, i, n) {
                return [Ke, t, e, Qe, t + i, e, t + i / 2, e + n, "Z"]
            },
            diamond: function(t, e, i, n) {
                return [Ke, t + i / 2, e, Qe, t + i, e + n / 2, t + i / 2, e + n, t, e + n / 2, "Z"]
            },
            arc: function(t, e, i, n, r) {
                var o = r.start,
                s = r.r || i || n,
                a = r.end - .001,
                l = r.innerR,
                h = r.open,
                c = xe(o),
                u = we(o),
                d = xe(a),
                p = we(a),
                f = r.end - o < ke ? 0 : 1;
                return [Ke, t + s * c, e + s * u, "A", s, s, 0, f, 1, t + s * d, e + s * p, h ? Ke: Qe, t + l * d, e + l * p, "A", l, l, 0, f, 0, t + l * c, e + l * u, h ? "": "Z"]
            },
            callout: function(t, e, i, n, r) {
                var o, s = 6,
                a = 6,
                l = ye(r && r.r || 0, i, n),
                h = l + a,
                c = r && r.anchorX,
                u = r && r.anchorY,
                d = fe(r.strokeWidth || 0) % 2 / 2;
                return t += d,
                e += d,
                o = ["M", t + l, e, "L", t + i - l, e, "C", t + i, e, t + i, e, t + i, e + l, "L", t + i, e + n - l, "C", t + i, e + n, t + i, e + n, t + i - l, e + n, "L", t + l, e + n, "C", t, e + n, t, e + n, t, e + n - l, "L", t, e + l, "C", t, e, t, e, t + l, e],
                c && c > i && u > e + h && e + n - h > u ? o.splice(13, 3, "L", t + i, u - a, t + i + s, u, t + i, u + a, t + i, e + n - l) : c && 0 > c && u > e + h && e + n - h > u ? o.splice(33, 3, "L", t, u + a, t - s, u, t, u - a, t, e + l) : u && u > n && c > t + h && t + i - h > c ? o.splice(23, 3, "L", c + a, e + n, c, e + n + s, c - a, e + n, t + l, e + n) : u && 0 > u && c > t + h && t + i - h > c && o.splice(3, 3, "L", c - a, e, c, e - s, c + a, e, i - l, e),
                o
            }
        },
        clipRect: function(t, e, i, n) {
            var r, o = Xe + $e++,
            s = this.createElement("clipPath").attr({
                id: o
            }).add(this.defs);
            return r = this.rect(t, e, i, n, 0).add(s),
            r.id = o,
            r.clipPath = s,
            r
        },
        text: function(t, e, i, n) {
            var r, o = this,
            s = Ne || !Me && o.forExport,
            a = {};
            return n && !o.forExport ? o.html(t, e, i) : (a.x = Math.round(e || 0), i && (a.y = Math.round(i)), (t || 0 === t) && (a.text = t), r = o.createElement("text").attr(a), s && r.css({
                position: We
            }), n || (r.xSetter = function(t, e, i) {
                var n, r, o = i.getElementsByTagName("tspan"),
                s = i.getAttribute(e);
                for (r = 0; r < o.length; r++) n = o[r],
                n.getAttribute(e) === s && n.setAttribute(e, t);
                i.setAttribute(e, t)
            }), r)
        },
        fontMetrics: function(t, e) {
            t = t || this.style.fontSize,
            e && de.getComputedStyle && (e = e.element || e, t = de.getComputedStyle(e, "").fontSize),
            t = /px/.test(t) ? i(t) : /em/.test(t) ? 12 * parseFloat(t) : 12;
            var n = 24 > t ? t + 4 : fe(1.2 * t),
            r = fe(.8 * n);
            return {
                h: n,
                b: r,
                f: t
            }
        },
        label: function(i, n, r, o, s, a, l, h, u) {
            function d() {
                var e, i, n = T.element.style;
                m = (void 0 === v || void 0 === y || C.styles.textAlign) && T.textStr && T.getBBox(),
                C.width = (v || m.width || 0) + 2 * A + P,
                C.height = (y || m.height || 0) + 2 * A,
                w = A + S.fontMetrics(n && n.fontSize, T).b,
                k && (g || (e = fe( - D * A), i = h ? -w: 0, C.box = g = o ? S.symbol(o, e, i, C.width, C.height, L) : S.rect(e, i, C.width, C.height, 0, L[ii]), g.attr("fill", Ge).add(C)), g.isImg || g.attr(t({
                    width: fe(C.width),
                    height: fe(C.height)
                },
                L)), L = null)
            }
            function p() {
                var t, e = C.styles,
                i = e && e.textAlign,
                n = P + A * (1 - D);
                t = h ? 0 : w,
                c(v) && m && ("center" === i || "right" === i) && (n += {
                    center: .5,
                    right: 1
                } [i] * (v - m.width)),
                (n !== T.x || t !== T.y) && (T.attr("x", n), t !== H && T.attr("y", t)),
                T.x = n,
                T.y = t
            }
            function f(t, e) {
                g ? g.attr(t, e) : L[t] = e
            }
            var g, m, v, y, b, x, w, k, S = this,
            C = S.g(u),
            T = S.text("", 0, 0, l).attr({
                zIndex: 1
            }),
            D = 0,
            A = 3,
            P = 0,
            _ = 0,
            L = {};
            C.onAdd = function() {
                T.add(C),
                C.attr({
                    text: i || 0 === i ? i: "",
                    x: n,
                    y: r
                }),
                g && c(s) && C.attr({
                    anchorX: s,
                    anchorY: a
                })
            },
            C.widthSetter = function(t) {
                v = t
            },
            C.heightSetter = function(t) {
                y = t
            },
            C.paddingSetter = function(t) {
                c(t) && t !== A && (A = t, p())
            },
            C.paddingLeftSetter = function(t) {
                c(t) && t !== P && (P = t, p())
            },
            C.alignSetter = function(t) {
                D = {
                    left: 0,
                    center: .5,
                    right: 1
                } [t]
            },
            C.textSetter = function(t) {
                t !== H && T.textSetter(t),
                d(),
                p()
            },
            C["stroke-widthSetter"] = function(t, e) {
                t && (k = !0),
                _ = t % 2 / 2,
                f(e, t)
            },
            C.strokeSetter = C.fillSetter = C.rSetter = function(t, e) {
                "fill" === e && t && (k = !0),
                f(e, t)
            },
            C.anchorXSetter = function(t, e) {
                s = t,
                f(e, t + _ - b)
            },
            C.anchorYSetter = function(t, e) {
                a = t,
                f(e, t - x)
            },
            C.xSetter = function(t) {
                C.x = t,
                D && (t -= D * ((v || m.width) + A)),
                b = fe(t),
                C.attr("translateX", b)
            },
            C.ySetter = function(t) {
                x = C.y = fe(t),
                C.attr("translateY", x)
            };
            var E = C.css;
            return t(C, {
                css: function(t) {
                    if (t) {
                        var i = {};
                        t = e(t),
                        hi(C.textProps,
                        function(e) {
                            t[e] !== H && (i[e] = t[e], delete t[e])
                        }),
                        T.css(i)
                    }
                    return E.call(C, t)
                },
                getBBox: function() {
                    return {
                        width: m.width + 2 * A,
                        height: m.height + 2 * A,
                        x: m.x - A,
                        y: m.y - A
                    }
                },
                shadow: function(t) {
                    return g && g.shadow(t),
                    C
                },
                destroy: function() {
                    fi(C.element, "mouseenter"),
                    fi(C.element, "mouseleave"),
                    T && (T = T.destroy()),
                    g && (g = g.destroy()),
                    N.prototype.destroy.call(C),
                    C = S = d = p = f = null
                }
            })
        }
    },
    B = Di,
    t(N.prototype, {
        htmlCss: function(e) {
            var i = this,
            n = i.element,
            r = e && "SPAN" === n.tagName && e.width;
            return r && (delete e.width, i.textWidth = r, i.updateTransform()),
            i.styles = t(i.styles, e),
            f(i.element, e),
            i
        },
        htmlGetBBox: function() {
            var t = this,
            e = t.element,
            i = t.bBox;
            return i || ("text" === e.nodeName && (e.style.position = We), i = t.bBox = {
                x: e.offsetLeft,
                y: e.offsetTop,
                width: e.offsetWidth,
                height: e.offsetHeight
            }),
            i
        },
        htmlUpdateTransform: function() {
            if (!this.added) return void(this.alignOnAdd = !0);
            var t = this,
            e = t.renderer,
            n = t.element,
            r = t.translateX || 0,
            o = t.translateY || 0,
            s = t.x || 0,
            a = t.y || 0,
            l = t.textAlign || "left",
            h = {
                left: 0,
                center: .5,
                right: 1
            } [l],
            u = t.shadows;
            if (f(n, {
                marginLeft: r,
                marginTop: o
            }), u && hi(u,
            function(t) {
                f(t, {
                    marginLeft: r + 1,
                    marginTop: o + 1
                })
            }), t.inverted && hi(n.childNodes,
            function(t) {
                e.invertChild(t, n)
            }), "SPAN" === n.tagName) {
                var d, g, m = t.rotation,
                v = i(t.textWidth),
                y = [m, l, n.innerHTML, t.textWidth].join(",");
                y !== t.cTT && (g = e.fontMetrics(n.style.fontSize).b, c(m) && t.setSpanRotation(m, h, g), d = p(t.elemWidth, n.offsetWidth), d > v && /[ \-]/.test(n.textContent || n.innerText) && (f(n, {
                    width: v + Ue,
                    display: "block",
                    whiteSpace: "normal"
                }), d = v), t.getSpanCorrection(d, g, h, m, l)),
                f(n, {
                    left: s + (t.xCorr || 0) + Ue,
                    top: a + (t.yCorr || 0) + Ue
                }),
                Pe && (g = n.offsetHeight),
                t.cTT = y
            }
        },
        setSpanRotation: function(t, e, i) {
            var n = {},
            r = De ? "-ms-transform": Pe ? "-webkit-transform": _e ? "MozTransform": Te ? "-o-transform": "";
            n[r] = n.transform = "rotate(" + t + "deg)",
            n[r + (_e ? "Origin": "-origin")] = n.transformOrigin = 100 * e + "% " + i + "px",
            f(this.element, n)
        },
        getSpanCorrection: function(t, e, i) {
            this.xCorr = -t * i,
            this.yCorr = -e
        }
    }),
    t(Di.prototype, {
        html: function(e, i, n) {
            var r = this.createElement("span"),
            o = r.element,
            s = r.renderer;
            return r.textSetter = function(t) {
                t !== o.innerHTML && delete this.bBox,
                o.innerHTML = this.textStr = t
            },
            r.xSetter = r.ySetter = r.alignSetter = r.rotationSetter = function(t, e) {
                "align" === e && (e = "textAlign"),
                r[e] = t,
                r.htmlUpdateTransform()
            },
            r.attr({
                text: e,
                x: fe(i),
                y: fe(n)
            }).css({
                position: We,
                whiteSpace: "nowrap",
                fontFamily: this.style.fontFamily,
                fontSize: this.style.fontSize
            }),
            r.css = r.htmlCss,
            s.isSVG && (r.add = function(e) {
                var i, n, a = s.box.parentNode,
                l = [];
                if (this.parentGroup = e, e) {
                    if (i = e.div, !i) {
                        for (n = e; n;) l.push(n),
                        n = n.parentGroup;
                        hi(l.reverse(),
                        function(e) {
                            var n;
                            i = e.div = e.div || g(je, {
                                className: u(e.element, "class")
                            },
                            {
                                position: We,
                                left: (e.translateX || 0) + Ue,
                                top: (e.translateY || 0) + Ue
                            },
                            i || a),
                            n = i.style,
                            t(e, {
                                translateXSetter: function(t, i) {
                                    n.left = t + Ue,
                                    e[i] = t,
                                    e.doTransform = !0
                                },
                                translateYSetter: function(t, i) {
                                    n.top = t + Ue,
                                    e[i] = t,
                                    e.doTransform = !0
                                },
                                visibilitySetter: function(t, e) {
                                    n[e] = t
                                }
                            })
                        })
                    }
                } else i = a;
                return i.appendChild(o),
                r.added = !0,
                r.alignOnAdd && r.htmlUpdateTransform(),
                r
            }),
            r
        }
    });
    var Ai, Pi;
    if (!Me && !Ne) {
        Pi = {
            init: function(t, e) {
                var i = this,
                n = ["<", e, ' filled="f" stroked="f"'],
                r = ["position: ", We, ";"],
                o = e === je; ("shape" === e || o) && r.push("left:0;top:0;width:1px;height:1px;"),
                r.push("visibility: ", o ? Ye: Ve),
                n.push(' style="', r.join(""), '"/>'),
                e && (n = o || "span" === e || "img" === e ? n.join("") : t.prepVML(n), i.element = g(n)),
                i.renderer = t
            },
            add: function(t) {
                var e = this,
                i = e.renderer,
                n = e.element,
                r = i.box,
                o = t && t.inverted,
                s = t ? t.element || t: r;
                return o && i.invertChild(n, s),
                s.appendChild(n),
                e.added = !0,
                e.alignOnAdd && !e.deferUpdateTransform && e.updateTransform(),
                e.onAdd && e.onAdd(),
                e
            },
            updateTransform: N.prototype.htmlUpdateTransform,
            setSpanRotation: function() {
                var t = this.rotation,
                e = xe(t * Se),
                i = we(t * Se);
                f(this.element, {
                    filter: t ? ["progid:DXImageTransform.Microsoft.Matrix(M11=", e, ", M12=", -i, ", M21=", i, ", M22=", e, ", sizingMethod='auto expand')"].join("") : Ge
                })
            },
            getSpanCorrection: function(t, e, i, n, r) {
                var o, s = n ? xe(n * Se) : 1,
                a = n ? we(n * Se) : 0,
                l = p(this.elemHeight, this.element.offsetHeight),
                h = r && "left" !== r;
                this.xCorr = 0 > s && -t,
                this.yCorr = 0 > a && -l,
                o = 0 > s * a,
                this.xCorr += a * e * (o ? 1 - i: i),
                this.yCorr -= s * e * (n ? o ? i: 1 - i: 1),
                h && (this.xCorr -= t * i * (0 > s ? -1 : 1), n && (this.yCorr -= l * i * (0 > a ? -1 : 1)), f(this.element, {
                    textAlign: r
                }))
            },
            pathToVML: function(t) {
                for (var e = t.length,
                i = []; e--;) s(t[e]) ? i[e] = fe(10 * t[e]) - 5 : "Z" === t[e] ? i[e] = "x": (i[e] = t[e], !t.isArc || "wa" !== t[e] && "at" !== t[e] || (i[e + 5] === i[e + 7] && (i[e + 7] += t[e + 7] > t[e + 5] ? 1 : -1), i[e + 6] === i[e + 8] && (i[e + 8] += t[e + 8] > t[e + 6] ? 1 : -1)));
                return i.join(" ") || "x"
            },
            clip: function(t) {
                var e, i, n = this;
                return t ? (e = t.members, h(e, n), e.push(n), n.destroyClip = function() {
                    h(e, n)
                },
                i = t.getCSS(n)) : (n.destroyClip && n.destroyClip(), i = {
                    clip: Ae ? "inherit": "rect(auto)"
                }),
                n.css(i)
            },
            css: N.prototype.htmlCss,
            safeRemoveChild: function(t) {
                t.parentNode && P(t)
            },
            destroy: function() {
                return this.destroyClip && this.destroyClip(),
                N.prototype.destroy.apply(this)
            },
            on: function(t, e) {
                return this.element["on" + t] = function() {
                    var t = de.event;
                    t.target = t.srcElement,
                    e(t)
                },
                this
            },
            cutOffPath: function(t, e) {
                var n;
                return t = t.split(/[ ,]/),
                n = t.length,
                (9 === n || 11 === n) && (t[n - 4] = t[n - 2] = i(t[n - 2]) - 10 * e),
                t.join(" ")
            },
            shadow: function(t, e, n) {
                var r, o, s, a, l, h, c, u = [],
                d = this.element,
                f = this.renderer,
                m = d.style,
                v = d.path;
                if (v && "string" != typeof v.value && (v = "x"), l = v, t) {
                    for (h = p(t.width, 3), c = (t.opacity || .15) / h, r = 1; 3 >= r; r++) a = 2 * h + 1 - 2 * r,
                    n && (l = this.cutOffPath(v.value, a + .5)),
                    s = ['<shape isShadow="true" strokeweight="', a, '" filled="false" path="', l, '" coordsize="10 10" style="', d.style.cssText, '" />'],
                    o = g(f.prepVML(s), null, {
                        left: i(m.left) + p(t.offsetX, 1),
                        top: i(m.top) + p(t.offsetY, 1)
                    }),
                    n && (o.cutOff = a + 1),
                    s = ['<stroke color="', t.color || "black", '" opacity="', c * r, '"/>'],
                    g(f.prepVML(s), null, null, o),
                    e ? e.element.appendChild(o) : d.parentNode.insertBefore(o, d),
                    u.push(o);
                    this.shadows = u
                }
                return this
            },
            updateShadows: Oe,
            setAttr: function(t, e) {
                Ae ? this.element[t] = e: this.element.setAttribute(t, e)
            },
            classSetter: function(t) {
                this.element.className = t
            },
            dashstyleSetter: function(t, e, i) {
                var n = i.getElementsByTagName("stroke")[0] || g(this.renderer.prepVML(["<stroke/>"]), null, null, i);
                n[e] = t || "solid",
                this[e] = t
            },
            dSetter: function(t, e, i) {
                var n, r = this.shadows;
                if (t = t || [], this.d = t.join && t.join(" "), i.path = t = this.pathToVML(t), r) for (n = r.length; n--;) r[n].path = r[n].cutOff ? this.cutOffPath(t, r[n].cutOff) : t;
                this.setAttr(e, t)
            },
            fillSetter: function(t, e, i) {
                var n = i.nodeName;
                "SPAN" === n ? i.style.color = t: "IMG" !== n && (i.filled = t !== Ge, this.setAttr("fillcolor", this.renderer.color(t, i, e, this)))
            },
            opacitySetter: Oe,
            rotationSetter: function(t, e, i) {
                var n = i.style;
                this[e] = n[e] = t,
                n.left = -fe(we(t * Se) + 1) + Ue,
                n.top = fe(xe(t * Se)) + Ue
            },
            strokeSetter: function(t, e, i) {
                this.setAttr("strokecolor", this.renderer.color(t, i, e))
            },
            "stroke-widthSetter": function(t, e, i) {
                i.stroked = !!t,
                this[e] = t,
                s(t) && (t += Ue),
                this.setAttr("strokeweight", t)
            },
            titleSetter: function(t, e) {
                this.setAttr(e, t)
            },
            visibilitySetter: function(t, e, i) {
                "inherit" === t && (t = Ve),
                this.shadows && hi(this.shadows,
                function(i) {
                    i.style[e] = t
                }),
                "DIV" === i.nodeName && (t = t === Ye ? "-999em": 0, Ae || (i.style[e] = t ? Ve: Ye), e = "top"),
                i.style[e] = t
            },
            xSetter: function(t, e, i) {
                this[e] = t,
                "x" === e ? e = "left": "y" === e && (e = "top"),
                this.updateClipping ? (this[e] = t, this.updateClipping()) : i.style[e] = t
            },
            zIndexSetter: function(t, e, i) {
                i.style[e] = t
            }
        },
        ce.VMLElement = Pi = m(N, Pi),
        Pi.prototype.ySetter = Pi.prototype.widthSetter = Pi.prototype.heightSetter = Pi.prototype.xSetter;
        var _i = {
            Element: Pi,
            isIE8: Ce.indexOf("MSIE 8.0") > -1,
            init: function(e, i, n, r) {
                var o, s, a, l = this;
                if (l.alignedObjects = [], o = l.createElement(je).css(t(this.getStyle(r), {
                    position: qe
                })), s = o.element, e.appendChild(o.element), l.isVML = !0, l.box = s, l.boxWrapper = o, l.cache = {},
                l.setSize(i, n, !1), !ue.namespaces.hcv) {
                    ue.namespaces.add("hcv", "urn:schemas-microsoft-com:vml"),
                    a = "hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } ";
                    try {
                        ue.createStyleSheet().cssText = a
                    } catch(h) {
                        ue.styleSheets[0].cssText += a
                    }
                }
            },
            isHidden: function() {
                return ! this.box.offsetWidth
            },
            clipRect: function(e, i, n, o) {
                var s = this.createElement(),
                a = r(e);
                return t(s, {
                    members: [],
                    left: (a ? e.x: e) + 1,
                    top: (a ? e.y: i) + 1,
                    width: (a ? e.width: n) - 1,
                    height: (a ? e.height: o) - 1,
                    getCSS: function(e) {
                        var i = e.element,
                        n = i.nodeName,
                        r = "shape" === n,
                        o = e.inverted,
                        s = this,
                        a = s.top - (r ? i.offsetTop: 0),
                        l = s.left,
                        h = l + s.width,
                        c = a + s.height,
                        u = {
                            clip: "rect(" + fe(o ? l: a) + "px," + fe(o ? c: h) + "px," + fe(o ? h: c) + "px," + fe(o ? a: l) + "px)"
                        };
                        return ! o && Ae && "DIV" === n && t(u, {
                            width: h + Ue,
                            height: c + Ue
                        }),
                        u
                    },
                    updateClipping: function() {
                        hi(s.members,
                        function(t) {
                            t.element && t.css(s.getCSS(t))
                        })
                    }
                })
            },
            color: function(t, e, i, n) {
                var r, o, s, a = this,
                l = /^rgba/,
                h = Ge;
                if (t && t.linearGradient ? s = "gradient": t && t.radialGradient && (s = "pattern"), s) {
                    var c, u, d, p, f, m, v, y, b, x, w, k, S = t.linearGradient || t.radialGradient,
                    C = "",
                    T = t.stops,
                    D = [],
                    A = function() {
                        o = ['<fill colors="' + D.join(",") + '" opacity="', y, '" o:opacity2="', v, '" type="', s, '" ', C, 'focus="100%" method="any" />'],
                        g(a.prepVML(o), null, null, e)
                    };
                    if (w = T[0], k = T[T.length - 1], w[0] > 0 && T.unshift([0, w[1]]), k[0] < 1 && T.push([1, k[1]]), hi(T,
                    function(t, e) {
                        l.test(t[1]) ? (r = Ti(t[1]), c = r.get("rgb"), u = r.get("a")) : (c = t[1], u = 1),
                        D.push(100 * t[0] + "% " + c),
                        e ? (y = u, b = c) : (v = u, x = c)
                    }), "fill" === i) if ("gradient" === s) d = S.x1 || S[0] || 0,
                    p = S.y1 || S[1] || 0,
                    f = S.x2 || S[2] || 0,
                    m = S.y2 || S[3] || 0,
                    C = 'angle="' + (90 - 180 * pe.atan((m - p) / (f - d)) / ke) + '"',
                    A();
                    else {
                        var P, _ = S.r,
                        L = 2 * _,
                        E = 2 * _,
                        M = S.cx,
                        F = S.cy,
                        N = e.radialReference,
                        I = function() {
                            N && (P = n.getBBox(), M += (N[0] - P.x) / P.width - .5, F += (N[1] - P.y) / P.height - .5, L *= N[2] / P.width, E *= N[2] / P.height),
                            C = 'src="' + W.global.VMLRadialGradientURL + '" size="' + L + "," + E + '" origin="0.5,0.5" position="' + M + "," + F + '" color2="' + x + '" ',
                            A()
                        };
                        n.added ? I() : n.onAdd = I,
                        h = b
                    } else h = c
                } else if (l.test(t) && "IMG" !== e.tagName) r = Ti(t),
                o = ["<", i, ' opacity="', r.get("a"), '"/>'],
                g(this.prepVML(o), null, null, e),
                h = r.get("rgb");
                else {
                    var $ = e.getElementsByTagName(i);
                    $.length && ($[0].opacity = 1, $[0].type = "solid"),
                    h = t
                }
                return h
            },
            prepVML: function(t) {
                var e = "display:inline-block;behavior:url(#default#VML);",
                i = this.isIE8;
                return t = t.join(""),
                i ? (t = t.replace("/>", ' xmlns="urn:schemas-microsoft-com:vml" />'), t = -1 === t.indexOf('style="') ? t.replace("/>", ' style="' + e + '" />') : t.replace('style="', 'style="' + e)) : t = t.replace("<", "<hcv:"),
                t
            },
            text: Di.prototype.html,
            path: function(e) {
                var i = {
                    coordsize: "10 10"
                };
                return o(e) ? i.d = e: r(e) && t(i, e),
                this.createElement("shape").attr(i)
            },
            circle: function(t, e, i) {
                var n = this.symbol("circle");
                return r(t) && (i = t.r, e = t.y, t = t.x),
                n.isCircle = !0,
                n.r = i,
                n.attr({
                    x: t,
                    y: e
                })
            },
            g: function(t) {
                var e, i;
                return t && (i = {
                    className: Xe + t,
                    "class": Xe + t
                }),
                e = this.createElement(je).attr(i)
            },
            image: function(t, e, i, n, r) {
                var o = this.createElement("img").attr({
                    src: t
                });
                return arguments.length > 1 && o.attr({
                    x: e,
                    y: i,
                    width: n,
                    height: r
                }),
                o
            },
            createElement: function(t) {
                return "rect" === t ? this.symbol(t) : Di.prototype.createElement.call(this, t)
            },
            invertChild: function(t, e) {
                var n = this,
                r = e.style,
                o = "IMG" === t.tagName && t.style;
                f(t, {
                    flip: "x",
                    left: i(r.width) - (o ? i(o.top) : 1),
                    top: i(r.height) - (o ? i(o.left) : 1),
                    rotation: -90
                }),
                hi(t.childNodes,
                function(e) {
                    n.invertChild(e, t)
                })
            },
            symbols: {
                arc: function(t, e, i, n, r) {
                    var o, s = r.start,
                    a = r.end,
                    l = r.r || i || n,
                    h = r.innerR,
                    c = xe(s),
                    u = we(s),
                    d = xe(a),
                    p = we(a);
                    return a - s === 0 ? ["x"] : (o = ["wa", t - l, e - l, t + l, e + l, t + l * c, e + l * u, t + l * d, e + l * p], r.open && !h && o.push("e", Ke, t, e), o.push("at", t - h, e - h, t + h, e + h, t + h * d, e + h * p, t + h * c, e + h * u, "x", "e"), o.isArc = !0, o)
                },
                circle: function(t, e, i, n, r) {
                    return r && (i = n = 2 * r.r),
                    r && r.isCircle && (t -= i / 2, e -= n / 2),
                    ["wa", t, e, t + i, e + n, t + i, e + n / 2, t + i, e + n / 2, "e"]
                },
                rect: function(t, e, i, n, r) {
                    return Di.prototype.symbols[c(r) && r.r ? "callout": "square"].call(0, t, e, i, n, r)
                }
            }
        };
        ce.VMLRenderer = Ai = function() {
            this.init.apply(this, arguments)
        },
        Ai.prototype = e(Di.prototype, _i),
        B = Ai
    }
    Di.prototype.measureSpanWidth = function(t, e) {
        var i, n = ue.createElement("span"),
        r = ue.createTextNode(t);
        return n.appendChild(r),
        f(n, e),
        this.box.appendChild(n),
        i = n.offsetWidth,
        P(n),
        i
    };
    var Li, Ei;
    Ne && (ce.CanVGRenderer = Li = function() {
        Ee = "http://www.w3.org/1999/xhtml"
    },
    Li.prototype.symbols = {},
    Ei = function() {
        function t() {
            var t, i = e.length;
            for (t = 0; i > t; t++) e[t]();
            e = []
        }
        var e = [];
        return {
            push: function(i, n) {
                0 === e.length && ai(n, t),
                e.push(i)
            }
        }
    } (), B = Li),
    I.prototype = {
        addLabel: function() {
            var e, i, n, r, o = this,
            a = o.axis,
            h = a.options,
            u = a.chart,
            d = a.horiz,
            f = a.categories,
            g = a.names,
            m = o.pos,
            v = h.labels,
            y = v.rotation,
            b = a.tickPositions,
            x = d && f && !v.step && !v.staggerLines && !v.rotation && u.plotWidth / b.length || !d && (u.margin[3] || .33 * u.chartWidth),
            w = m === b[0],
            k = m === b[b.length - 1],
            S = f ? p(f[m], g[m], m) : m,
            C = o.label,
            T = b.info;
            a.isDatetimeAxis && T && (r = h.dateTimeLabelFormats[T.higherRanks[m] || T.unitName]),
            o.isFirst = w,
            o.isLast = k,
            e = a.labelFormatter.call({
                axis: a,
                chart: u,
                isFirst: w,
                isLast: k,
                dateTimeLabelFormat: r,
                value: a.isLog ? _(l(S)) : S
            }),
            i = x && {
                width: ve(1, fe(x - 2 * (v.padding || 10))) + Ue
            },
            c(C) ? C && C.attr({
                text: e
            }).css(i) : (n = {
                align: a.labelAlign
            },
            s(y) && (n.rotation = y), x && v.ellipsis && (i.HcHeight = a.len / b.length), o.label = C = c(e) && v.enabled ? u.renderer.text(e, 0, 0, v.useHTML).attr(n).css(t(i, v.style)).add(a.labelGroup) : null, a.tickBaseline = u.renderer.fontMetrics(v.style.fontSize, C).b, y && 2 === a.side && (a.tickBaseline *= xe(y * Se))),
            o.yOffset = C ? p(v.y, a.tickBaseline + (2 === a.side ? 8 : -(C.getBBox().height / 2))) : 0
        },
        getLabelSize: function() {
            var t = this.label,
            e = this.axis;
            return t ? t.getBBox()[e.horiz ? "height": "width"] : 0
        },
        getLabelSides: function() {
            var t = this.label.getBBox(),
            e = this.axis,
            i = e.horiz,
            n = e.options,
            r = n.labels,
            o = i ? t.width: t.height,
            s = i ? r.x - o * {
                left: 0,
                center: .5,
                right: 1
            } [e.labelAlign] : 0,
            a = i ? o + s: o;
            return [s, a]
        },
        handleOverflow: function(t, e) {
            var i, n, r, o, s, a = !0,
            l = this.axis,
            h = this.isFirst,
            c = this.isLast,
            u = l.horiz,
            d = u ? e.x: e.y,
            p = l.reversed,
            f = l.tickPositions,
            g = this.getLabelSides(),
            m = g[0],
            v = g[1],
            y = this.label.line,
            b = y || 0,
            x = l.labelEdge,
            w = l.justifyLabels && (h || c);
            if (x[b] === H || d + m > x[b] ? x[b] = d + v: w || (a = !1), w) {
                s = l.justifyToPlot,
                i = s ? l.pos: 0,
                n = s ? i + l.len: l.chart.chartWidth;
                do t += h ? 1 : -1,
                r = l.ticks[f[t]];
                while (f[t] && (!r || !r.label || r.label.line !== y));
                o = r && r.label.xy && r.label.xy.x + r.getLabelSides()[h ? 0 : 1],
                h && !p || c && p ? i > d + m && (d = i - m, r && d + v > o && (a = !1)) : d + v > n && (d = n - v, r && o > d + m && (a = !1)),
                e.x = d
            }
            return a
        },
        getPosition: function(t, e, i, n) {
            var r = this.axis,
            o = r.chart,
            s = n && o.oldChartHeight || o.chartHeight;
            return {
                x: t ? r.translate(e + i, null, null, n) + r.transB: r.left + r.offset + (r.opposite ? (n && o.oldChartWidth || o.chartWidth) - r.right - r.left: 0),
                y: t ? s - r.bottom + r.offset - (r.opposite ? r.height: 0) : s - r.translate(e + i, null, null, n) - r.transB
            }
        },
        getLabelPosition: function(t, e, i, n, r, o, s, a) {
            var l = this.axis,
            h = l.transA,
            c = l.reversed,
            u = l.staggerLines;
            return t = t + r.x - (o && n ? o * h * (c ? -1 : 1) : 0),
            e = e + this.yOffset - (o && !n ? o * h * (c ? 1 : -1) : 0),
            u && (i.line = s / (a || 1) % u, e += i.line * (l.labelOffset / u)),
            {
                x: t,
                y: e
            }
        },
        getMarkPath: function(t, e, i, n, r, o) {
            return o.crispLine([Ke, t, e, Qe, t + (r ? 0 : -i), e + (r ? i: 0)], n)
        },
        render: function(t, e, i) {
            var n, r, o, s = this,
            a = s.axis,
            l = a.options,
            h = a.chart,
            c = h.renderer,
            u = a.horiz,
            d = s.type,
            f = s.label,
            g = s.pos,
            m = l.labels,
            v = s.gridLine,
            y = d ? d + "Grid": "grid",
            b = d ? d + "Tick": "tick",
            x = l[y + "LineWidth"],
            w = l[y + "LineColor"],
            k = l[y + "LineDashStyle"],
            S = l[b + "Length"],
            C = l[b + "Width"] || 0,
            T = l[b + "Color"],
            D = l[b + "Position"],
            A = s.mark,
            P = m.step,
            _ = !0,
            L = a.tickmarkOffset,
            E = s.getPosition(u, g, L, e),
            M = E.x,
            F = E.y,
            N = u && M === a.pos + a.len || !u && F === a.pos ? -1 : 1;
            i = p(i, 1),
            this.isActive = !0,
            x && (n = a.getPlotLinePath(g + L, x * N, e, !0), v === H && (o = {
                stroke: w,
                "stroke-width": x
            },
            k && (o.dashstyle = k), d || (o.zIndex = 1), e && (o.opacity = 0), s.gridLine = v = x ? c.path(n).attr(o).add(a.gridGroup) : null), !e && v && n && v[s.isNew ? "attr": "animate"]({
                d: n,
                opacity: i
            })),
            C && S && ("inside" === D && (S = -S), a.opposite && (S = -S), r = s.getMarkPath(M, F, S, C * N, u, c), A ? A.animate({
                d: r,
                opacity: i
            }) : s.mark = c.path(r).attr({
                stroke: T,
                "stroke-width": C,
                opacity: i
            }).add(a.axisGroup)),
            f && !isNaN(M) && (f.xy = E = s.getLabelPosition(M, F, f, u, m, L, t, P), s.isFirst && !s.isLast && !p(l.showFirstLabel, 1) || s.isLast && !s.isFirst && !p(l.showLastLabel, 1) ? _ = !1 : a.isRadial || m.step || m.rotation || e || 0 === i || (_ = s.handleOverflow(t, E)), P && t % P && (_ = !1), _ && !isNaN(E.y) ? (E.opacity = i, f[s.isNew ? "attr": "animate"](E), s.isNew = !1) : f.attr("y", -9999))
        },
        destroy: function() {
            A(this, this.axis)
        }
    },
    ce.PlotLineOrBand = function(t, e) {
        this.axis = t,
        e && (this.options = e, this.id = e.id)
    },
    ce.PlotLineOrBand.prototype = {
        render: function() {
            var t, i, n, r, o, s, l = this,
            h = l.axis,
            u = h.horiz,
            d = (h.pointRange || 0) / 2,
            p = l.options,
            f = p.label,
            g = l.label,
            m = p.width,
            v = p.to,
            y = p.from,
            b = c(y) && c(v),
            x = p.value,
            w = p.dashStyle,
            k = l.svgElem,
            S = [],
            C = p.color,
            A = p.zIndex,
            P = p.events,
            _ = {},
            L = h.chart.renderer;
            if (h.isLog && (y = a(y), v = a(v), x = a(x)), m) S = h.getPlotLinePath(x, m),
            _ = {
                stroke: C,
                "stroke-width": m
            },
            w && (_.dashstyle = w);
            else {
                if (!b) return;
                y = ve(y, h.min - d),
                v = ye(v, h.max + d),
                S = h.getPlotBandPath(y, v, p),
                C && (_.fill = C),
                p.borderWidth && (_.stroke = p.borderColor, _["stroke-width"] = p.borderWidth)
            }
            if (c(A) && (_.zIndex = A), k) S ? k.animate({
                d: S
            },
            null, k.onGetPath) : (k.hide(), k.onGetPath = function() {
                k.show()
            },
            g && (l.label = g = g.destroy()));
            else if (S && S.length && (l.svgElem = k = L.path(S).attr(_).add(), P)) {
                t = function(t) {
                    k.on(t,
                    function(e) {
                        P[t].apply(l, [e])
                    })
                };
                for (i in P) t(i)
            }
            return f && c(f.text) && S && S.length && h.width > 0 && h.height > 0 ? (f = e({
                align: u && b && "center",
                x: u ? !b && 4 : 10,
                verticalAlign: !u && b && "middle",
                y: u ? b ? 16 : 10 : b ? 6 : -4,
                rotation: u && !b && 90
            },
            f), g || (_ = {
                align: f.textAlign || f.align,
                rotation: f.rotation
            },
            c(A) && (_.zIndex = A), l.label = g = L.text(f.text, 0, 0, f.useHTML).attr(_).css(f.style).add()), n = [S[1], S[4], b ? S[6] : S[1]], r = [S[2], S[5], b ? S[7] : S[2]], o = T(n), s = T(r), g.align(f, !1, {
                x: o,
                y: s,
                width: D(n) - o,
                height: D(r) - s
            }), g.show()) : g && g.hide(),
            l
        },
        destroy: function() {
            h(this.axis.plotLinesAndBands, this),
            delete this.axis,
            A(this)
        }
    },
    G = {
        getPlotBandPath: function(t, e) {
            var i = this.getPlotLinePath(e),
            n = this.getPlotLinePath(t);
            return n && i ? n.push(i[4], i[5], i[1], i[2]) : n = null,
            n
        },
        addPlotBand: function(t) {
            return this.addPlotBandOrLine(t, "plotBands")
        },
        addPlotLine: function(t) {
            return this.addPlotBandOrLine(t, "plotLines")
        },
        addPlotBandOrLine: function(t, e) {
            var i = new ce.PlotLineOrBand(this, t).render(),
            n = this.userOptions;
            return i && (e && (n[e] = n[e] || [], n[e].push(t)), this.plotLinesAndBands.push(i)),
            i
        },
        removePlotBandOrLine: function(t) {
            for (var e = this.plotLinesAndBands,
            i = this.options,
            n = this.userOptions,
            r = e.length; r--;) e[r].id === t && e[r].destroy();
            hi([i.plotLines || [], n.plotLines || [], i.plotBands || [], n.plotBands || []],
            function(e) {
                for (r = e.length; r--;) e[r].id === t && h(e, e[r])
            })
        }
    },
    $.prototype = {
        defaultOptions: {
            dateTimeLabelFormats: {
                millisecond: "%H:%M:%S.%L",
                second: "%H:%M:%S",
                minute: "%H:%M",
                hour: "%H:%M",
                day: "%e. %b",
                week: "%e. %b",
                month: "%b '%y",
                year: "%Y"
            },
            endOnTick: !1,
            gridLineColor: "#C0C0C0",
            labels: bi,
            lineColor: "#C0D0E0",
            lineWidth: 1,
            minPadding: .01,
            maxPadding: .01,
            minorGridLineColor: "#E0E0E0",
            minorGridLineWidth: 1,
            minorTickColor: "#A0A0A0",
            minorTickLength: 2,
            minorTickPosition: "outside",
            startOfWeek: 1,
            startOnTick: !1,
            tickColor: "#C0D0E0",
            tickLength: 10,
            tickmarkPlacement: "between",
            tickPixelInterval: 100,
            tickPosition: "outside",
            tickWidth: 1,
            title: {
                align: "middle",
                style: {
                    color: "#707070"
                }
            },
            type: "linear"
        },
        defaultYAxisOptions: {
            endOnTick: !0,
            gridLineWidth: 1,
            tickPixelInterval: 72,
            showLastLabel: !0,
            labels: {
                x: -8,
                y: 3
            },
            lineWidth: 0,
            maxPadding: .05,
            minPadding: .05,
            startOnTick: !0,
            tickWidth: 0,
            title: {
                rotation: 270,
                text: "Values"
            },
            stackLabels: {
                enabled: !1,
                formatter: function() {
                    return v(this.total, -1)
                },
                style: bi.style
            }
        },
        defaultLeftAxisOptions: {
            labels: {
                x: -15,
                y: null
            },
            title: {
                rotation: 270
            }
        },
        defaultRightAxisOptions: {
            labels: {
                x: 15,
                y: null
            },
            title: {
                rotation: 90
            }
        },
        defaultBottomAxisOptions: {
            labels: {
                x: 0,
                y: null
            },
            title: {
                rotation: 0
            }
        },
        defaultTopAxisOptions: {
            labels: {
                x: 0,
                y: -15
            },
            title: {
                rotation: 0
            }
        },
        init: function(t, e) {
            var i = e.isX,
            n = this;
            n.horiz = t.inverted ? !i: i,
            n.isXAxis = i,
            n.coll = i ? "xAxis": "yAxis",
            n.opposite = e.opposite,
            n.side = e.side || (n.horiz ? n.opposite ? 0 : 2 : n.opposite ? 1 : 3),
            n.setOptions(e);
            var r = this.options,
            o = r.type,
            s = "datetime" === o;
            n.labelFormatter = r.labels.formatter || n.defaultLabelFormatter,
            n.userOptions = e,
            n.minPixelPadding = 0,
            n.chart = t,
            n.reversed = r.reversed,
            n.zoomEnabled = r.zoomEnabled !== !1,
            n.categories = r.categories || "category" === o,
            n.names = [],
            n.isLog = "logarithmic" === o,
            n.isDatetimeAxis = s,
            n.isLinked = c(r.linkedTo),
            n.tickmarkOffset = n.categories && "between" === r.tickmarkPlacement && 1 === p(r.tickInterval, 1) ? .5 : 0,
            n.ticks = {},
            n.labelEdge = [],
            n.minorTicks = {},
            n.plotLinesAndBands = [],
            n.alternateBands = {},
            n.len = 0,
            n.minRange = n.userMinRange = r.minRange || r.maxZoom,
            n.range = r.range,
            n.offset = r.offset || 0,
            n.stacks = {},
            n.oldStacks = {},
            n.max = null,
            n.min = null,
            n.crosshair = p(r.crosshair, d(t.options.tooltip.crosshairs)[i ? 0 : 1], !1);
            var h, u = n.options.events; - 1 === li(n, t.axes) && (i && !this.isColorAxis ? t.axes.splice(t.xAxis.length, 0, n) : t.axes.push(n), t[n.coll].push(n)),
            n.series = n.series || [],
            t.inverted && i && n.reversed === H && (n.reversed = !0),
            n.removePlotBand = n.removePlotBandOrLine,
            n.removePlotLine = n.removePlotBandOrLine;
            for (h in u) pi(n, h, u[h]);
            n.isLog && (n.val2lin = a, n.lin2val = l)
        },
        setOptions: function(t) {
            this.options = e(this.defaultOptions, this.isXAxis ? {}: this.defaultYAxisOptions, [this.defaultTopAxisOptions, this.defaultRightAxisOptions, this.defaultBottomAxisOptions, this.defaultLeftAxisOptions][this.side], e(W[this.coll], t))
        },
        defaultLabelFormatter: function() {
            var t, e, i = this.axis,
            n = this.value,
            r = i.categories,
            o = this.dateTimeLabelFormat,
            s = W.lang.numericSymbols,
            a = s && s.length,
            l = i.options.labels.format,
            h = i.isLog ? n: i.tickInterval;
            if (l) e = w(l, this);
            else if (r) e = n;
            else if (o) e = q(o, n);
            else if (a && h >= 1e3) for (; a--&&e === H;) t = Math.pow(1e3, a + 1),
            h >= t && null !== s[a] && (e = v(n / t, -1) + s[a]);
            return e === H && (e = be(n) >= 1e4 ? v(n, 0) : v(n, -1, H, "")),
            e
        },
        getSeriesExtremes: function() {
            var t = this,
            e = t.chart;
            t.hasVisibleSeries = !1,
            t.dataMin = t.dataMax = t.ignoreMinPadding = t.ignoreMaxPadding = null,
            t.buildStacks && t.buildStacks(),
            hi(t.series,
            function(i) {
                if (i.visible || !e.options.chart.ignoreHiddenSeries) {
                    var n, r, o, s = i.options,
                    a = s.threshold;
                    t.hasVisibleSeries = !0,
                    t.isLog && 0 >= a && (a = null),
                    t.isXAxis ? (n = i.xData, n.length && (t.dataMin = ye(p(t.dataMin, n[0]), T(n)), t.dataMax = ve(p(t.dataMax, n[0]), D(n)))) : (i.getExtremes(), o = i.dataMax, r = i.dataMin, c(r) && c(o) && (t.dataMin = ye(p(t.dataMin, r), r), t.dataMax = ve(p(t.dataMax, o), o)), c(a) && (t.dataMin >= a ? (t.dataMin = a, t.ignoreMinPadding = !0) : t.dataMax < a && (t.dataMax = a, t.ignoreMaxPadding = !0)))
                }
            })
        },
        translate: function(t, e, i, n, r, o) {
            var a, l = this,
            h = 1,
            c = 0,
            u = n ? l.oldTransA: l.transA,
            d = n ? l.oldMin: l.min,
            p = l.minPixelPadding,
            f = (l.options.ordinal || l.isLog && r) && l.lin2val;
            return u || (u = l.transA),
            i && (h *= -1, c = l.len),
            l.reversed && (h *= -1, c -= h * (l.sector || l.len)),
            e ? (t = t * h + c, t -= p, a = t / u + d, f && (a = l.lin2val(a))) : (f && (t = l.val2lin(t)), "between" === o && (o = .5), a = h * (t - d) * u + c + h * p + (s(o) ? u * o * l.pointRange: 0)),
            a
        },
        toPixels: function(t, e) {
            return this.translate(t, !1, !this.horiz, null, !0) + (e ? 0 : this.pos)
        },
        toValue: function(t, e) {
            return this.translate(t - (e ? 0 : this.pos), !0, !this.horiz, null, !0)
        },
        getPlotLinePath: function(t, e, i, n, r) {
            var o, s, a, l, h, c = this,
            u = c.chart,
            d = c.left,
            f = c.top,
            g = i && u.oldChartHeight || u.chartHeight,
            m = i && u.oldChartWidth || u.chartWidth,
            v = c.transB;
            return r = p(r, c.translate(t, null, null, i)),
            o = a = fe(r + v),
            s = l = fe(g - r - v),
            isNaN(r) ? h = !0 : c.horiz ? (s = f, l = g - c.bottom, (d > o || o > d + c.width) && (h = !0)) : (o = d, a = m - c.right, (f > s || s > f + c.height) && (h = !0)),
            h && !n ? null: u.renderer.crispLine([Ke, o, s, Qe, a, l], e || 1)
        },
        getLinearTickPositions: function(t, e, i) {
            var n, r, o = _(ge(e / t) * t),
            a = _(me(i / t) * t),
            l = [];
            if (e === i && s(e)) return [e];
            for (n = o; a >= n && (l.push(n), n = _(n + t), n !== r);) r = n;
            return l
        },
        getMinorTickPositions: function() {
            var t, e, i, n = this,
            r = n.options,
            o = n.tickPositions,
            s = n.minorTickInterval,
            a = [];
            if (n.isLog) for (i = o.length, e = 1; i > e; e++) a = a.concat(n.getLogTickPositions(s, o[e - 1], o[e], !0));
            else if (n.isDatetimeAxis && "auto" === r.minorTickInterval) a = a.concat(n.getTimeTicks(n.normalizeTimeTickInterval(s), n.min, n.max, r.startOfWeek)),
            a[0] < n.min && a.shift();
            else for (t = n.min + (o[0] - n.min) % s; t <= n.max; t += s) a.push(t);
            return a
        },
        adjustForMinRange: function() {
            var t, e, i, n, r, o, s, a, l = this,
            h = l.options,
            u = l.min,
            d = l.max,
            f = l.dataMax - l.dataMin >= l.minRange;
            if (l.isXAxis && l.minRange === H && !l.isLog && (c(h.min) || c(h.max) ? l.minRange = null: (hi(l.series,
            function(t) {
                for (r = t.xData, o = t.xIncrement ? 1 : r.length - 1, i = o; i > 0; i--) n = r[i] - r[i - 1],
                (e === H || e > n) && (e = n)
            }), l.minRange = ye(5 * e, l.dataMax - l.dataMin))), d - u < l.minRange) {
                var g = l.minRange;
                t = (g - d + u) / 2,
                s = [u - t, p(h.min, u - t)],
                f && (s[2] = l.dataMin),
                u = D(s),
                a = [u + g, p(h.max, u + g)],
                f && (a[2] = l.dataMax),
                d = T(a),
                g > d - u && (s[0] = d - g, s[1] = p(h.min, d - g), u = D(s))
            }
            l.min = u,
            l.max = d
        },
        setAxisTranslation: function(t) {
            var e, i, r = this,
            o = r.max - r.min,
            s = r.axisPointRange || 0,
            a = 0,
            l = 0,
            h = r.linkedParent,
            u = !!r.categories,
            d = r.transA; (r.isXAxis || u || s) && (h ? (a = h.minPointOffset, l = h.pointRangePadding) : hi(r.series,
            function(t) {
                var i = u ? 1 : r.isXAxis ? t.pointRange: r.axisPointRange || 0,
                h = t.options.pointPlacement,
                d = t.closestPointRange;
                i > o && (i = 0),
                s = ve(s, i),
                a = ve(a, n(h) ? 0 : i / 2),
                l = ve(l, "on" === h ? 0 : i),
                !t.noSharedTooltip && c(d) && (e = c(e) ? ye(e, d) : d)
            }), i = r.ordinalSlope && e ? r.ordinalSlope / e: 1, r.minPointOffset = a *= i, r.pointRangePadding = l *= i, r.pointRange = ye(s, o), r.closestPointRange = e),
            t && (r.oldTransA = d),
            r.translationSlope = r.transA = d = r.len / (o + l || 1),
            r.transB = r.horiz ? r.left: r.bottom,
            r.minPixelPadding = d * a
        },
        setTickPositions: function(t) {
            var e, i, n, r, o = this,
            l = o.chart,
            h = o.options,
            u = h.startOnTick,
            d = h.endOnTick,
            f = o.isLog,
            g = o.isDatetimeAxis,
            m = o.isXAxis,
            v = o.isLinked,
            y = o.options.tickPositioner,
            b = h.maxPadding,
            x = h.minPadding,
            w = h.tickInterval,
            C = h.minTickInterval,
            T = h.tickPixelInterval,
            D = o.categories;
            if (v ? (o.linkedParent = l[o.coll][h.linkedTo], i = o.linkedParent.getExtremes(), o.min = p(i.min, i.dataMin), o.max = p(i.max, i.dataMax), h.type !== o.linkedParent.options.type && U(11, 1)) : (o.min = p(o.userMin, h.min, o.dataMin), o.max = p(o.userMax, h.max, o.dataMax)), f && (!t && ye(o.min, p(o.dataMin, o.min)) <= 0 && U(10, 1), o.min = _(a(o.min)), o.max = _(a(o.max))), o.range && c(o.max) && (o.userMin = o.min = ve(o.min, o.max - o.range), o.userMax = o.max, o.range = null), o.beforePadding && o.beforePadding(), o.adjustForMinRange(), D || o.axisPointRange || o.usePercentage || v || !c(o.min) || !c(o.max) || (e = o.max - o.min, e && (c(h.min) || c(o.userMin) || !x || !(o.dataMin < 0) && o.ignoreMinPadding || (o.min -= e * x), c(h.max) || c(o.userMax) || !b || !(o.dataMax > 0) && o.ignoreMaxPadding || (o.max += e * b))), s(h.floor) && (o.min = ve(o.min, h.floor)), s(h.ceiling) && (o.max = ye(o.max, h.ceiling)), o.min === o.max || void 0 === o.min || void 0 === o.max ? o.tickInterval = 1 : v && !w && T === o.linkedParent.options.tickPixelInterval ? o.tickInterval = o.linkedParent.tickInterval: (o.tickInterval = p(w, D ? 1 : (o.max - o.min) * T / ve(o.len, T)), !c(w) && o.len < T && !this.isRadial && !this.isLog && !D && u && d && (r = !0, o.tickInterval /= 4)), m && !t && hi(o.series,
            function(t) {
                t.processData(o.min !== o.oldMin || o.max !== o.oldMax)
            }), o.setAxisTranslation(!0), o.beforeSetTickPositions && o.beforeSetTickPositions(), o.postProcessTickInterval && (o.tickInterval = o.postProcessTickInterval(o.tickInterval)), o.pointRange && (o.tickInterval = ve(o.pointRange, o.tickInterval)), !w && o.tickInterval < C && (o.tickInterval = C), g || f || w || (o.tickInterval = S(o.tickInterval, null, k(o.tickInterval), p(h.allowDecimals, !(o.tickInterval > 1 && o.tickInterval < 5 && o.max > 1e3 && o.max < 9999)))), o.minorTickInterval = "auto" === h.minorTickInterval && o.tickInterval ? o.tickInterval / 5 : h.minorTickInterval, o.tickPositions = n = h.tickPositions ? [].concat(h.tickPositions) : y && y.apply(o, [o.min, o.max]), n || (!o.ordinalPositions && (o.max - o.min) / o.tickInterval > ve(2 * o.len, 200) && U(19, !0), n = g ? o.getTimeTicks(o.normalizeTimeTickInterval(o.tickInterval, h.units), o.min, o.max, h.startOfWeek, o.ordinalPositions, o.closestPointRange, !0) : f ? o.getLogTickPositions(o.tickInterval, o.min, o.max) : o.getLinearTickPositions(o.tickInterval, o.min, o.max), r && n.splice(1, n.length - 2), o.tickPositions = n), !v) {
                var A, P = n[0],
                L = n[n.length - 1],
                E = o.minPointOffset || 0;
                u ? o.min = P: o.min - E > P && n.shift(),
                d ? o.max = L: o.max + E < L && n.pop(),
                0 === n.length && c(P) && n.push((L + P) / 2),
                1 === n.length && (A = be(o.max) > 1e13 ? 1 : .001, o.min -= A, o.max += A)
            }
        },
        setMaxTicks: function() {
            var t = this.chart,
            e = t.maxTicks || {},
            i = this.tickPositions,
            n = this._maxTicksKey = [this.coll, this.pos, this.len].join("-"); ! this.isLinked && !this.isDatetimeAxis && i && i.length > (e[n] || 0) && this.options.alignTicks !== !1 && (e[n] = i.length),
            t.maxTicks = e
        },
        adjustTickAmount: function() {
            var t = this,
            e = t.chart,
            i = t._maxTicksKey,
            n = t.tickPositions,
            r = e.maxTicks;
            if (r && r[i] && !t.isDatetimeAxis && !t.categories && !t.isLinked && t.options.alignTicks !== !1 && this.min !== H) {
                var o, s = t.tickAmount,
                a = n.length;
                if (t.tickAmount = o = r[i], o > a) {
                    for (; n.length < o;) n.push(_(n[n.length - 1] + t.tickInterval));
                    t.transA *= (a - 1) / (o - 1),
                    t.max = n[n.length - 1]
                }
                c(s) && o !== s && (t.isDirty = !0)
            }
        },
        setScale: function() {
            var t, e, i, n, r = this,
            o = r.stacks;
            if (r.oldMin = r.min, r.oldMax = r.max, r.oldAxisLength = r.len, r.setAxisSize(), n = r.len !== r.oldAxisLength, hi(r.series,
            function(t) { (t.isDirtyData || t.isDirty || t.xAxis.isDirty) && (i = !0)
            }), n || i || r.isLinked || r.forceRedraw || r.userMin !== r.oldUserMin || r.userMax !== r.oldUserMax) {
                if (!r.isXAxis) for (t in o) for (e in o[t]) o[t][e].total = null,
                o[t][e].cum = 0;
                r.forceRedraw = !1,
                r.getSeriesExtremes(),
                r.setTickPositions(),
                r.oldUserMin = r.userMin,
                r.oldUserMax = r.userMax,
                r.isDirty || (r.isDirty = n || r.min !== r.oldMin || r.max !== r.oldMax)
            } else if (!r.isXAxis) {
                r.oldStacks && (o = r.stacks = r.oldStacks);
                for (t in o) for (e in o[t]) o[t][e].cum = o[t][e].total
            }
            r.setMaxTicks()
        },
        setExtremes: function(e, i, n, r, o) {
            var s = this,
            a = s.chart;
            n = p(n, !0),
            o = t(o, {
                min: e,
                max: i
            }),
            gi(s, "setExtremes", o,
            function() {
                s.userMin = e,
                s.userMax = i,
                s.eventArgs = o,
                s.isDirtyExtremes = !0,
                n && a.redraw(r)
            })
        },
        zoom: function(t, e) {
            var i = this.dataMin,
            n = this.dataMax,
            r = this.options;
            return this.allowZoomOutside || (c(i) && t <= ye(i, p(r.min, i)) && (t = H), c(n) && e >= ve(n, p(r.max, n)) && (e = H)),
            this.displayBtn = t !== H || e !== H,
            this.setExtremes(t, e, !1, H, {
                trigger: "zoom"
            }),
            !0
        },
        setAxisSize: function() {
            var t = this.chart,
            e = this.options,
            i = e.offsetLeft || 0,
            n = e.offsetRight || 0,
            r = this.horiz,
            o = p(e.width, t.plotWidth - i + n),
            s = p(e.height, t.plotHeight),
            a = p(e.top, t.plotTop),
            l = p(e.left, t.plotLeft + i),
            h = /%$/;
            h.test(s) && (s = parseInt(s, 10) / 100 * t.plotHeight),
            h.test(a) && (a = parseInt(a, 10) / 100 * t.plotHeight + t.plotTop),
            this.left = l,
            this.top = a,
            this.width = o,
            this.height = s,
            this.bottom = t.chartHeight - s - a,
            this.right = t.chartWidth - o - l,
            this.len = ve(r ? o: s, 0),
            this.pos = r ? l: a
        },
        getExtremes: function() {
            var t = this,
            e = t.isLog;
            return {
                min: e ? _(l(t.min)) : t.min,
                max: e ? _(l(t.max)) : t.max,
                dataMin: t.dataMin,
                dataMax: t.dataMax,
                userMin: t.userMin,
                userMax: t.userMax
            }
        },
        getThreshold: function(t) {
            var e = this,
            i = e.isLog,
            n = i ? l(e.min) : e.min,
            r = i ? l(e.max) : e.max;
            return n > t || null === t ? t = n: t > r && (t = r),
            e.translate(t, 0, 1, 0, 1)
        },
        autoLabelAlign: function(t) {
            var e, i = (p(t, 0) - 90 * this.side + 720) % 360;
            return e = i > 15 && 165 > i ? "right": i > 195 && 345 > i ? "left": "center"
        },
        getOffset: function() {
            var t, e, i, n, r, o, s, a, l, h, u, d, f, g, m, v = this,
            y = v.chart,
            b = y.renderer,
            x = v.options,
            w = v.tickPositions,
            k = v.ticks,
            S = v.horiz,
            C = v.side,
            T = y.inverted ? [1, 0, 3, 2][C] : C,
            D = 0,
            A = 0,
            P = x.title,
            _ = x.labels,
            L = 0,
            E = y.axisOffset,
            M = y.clipOffset,
            F = [ - 1, 1, 1, -1][C],
            N = 1,
            $ = p(_.maxStaggerLines, 5);
            if (v.hasData = t = v.hasVisibleSeries || c(v.min) && c(v.max) && !!w, v.showAxis = e = t || p(x.showEmpty, !0), v.staggerLines = v.horiz && _.staggerLines, v.axisGroup || (v.gridGroup = b.g("grid").attr({
                zIndex: x.gridZIndex || 1
            }).add(), v.axisGroup = b.g("axis").attr({
                zIndex: x.zIndex || 2
            }).add(), v.labelGroup = b.g("axis-labels").attr({
                zIndex: _.zIndex || 7
            }).addClass(Xe + v.coll.toLowerCase() + "-labels").add()), t || v.isLinked) {
                if (v.labelAlign = p(_.align || v.autoLabelAlign(_.rotation)), hi(w,
                function(t) {
                    k[t] ? k[t].addLabel() : k[t] = new I(v, t)
                }), v.horiz && !v.staggerLines && $ && !_.rotation) {
                    for (s = v.reversed ? [].concat(w).reverse() : w; $ > N;) {
                        for (a = [], l = !1, o = 0; o < s.length; o++) h = s[o],
                        u = k[h].label && k[h].label.getBBox(),
                        f = u ? u.width: 0,
                        g = o % N,
                        f && (d = v.translate(h), a[g] !== H && d < a[g] && (l = !0), a[g] = d + f);
                        if (!l) break;
                        N++
                    }
                    N > 1 && (v.staggerLines = N)
                }
                hi(w,
                function(t) { (0 === C || 2 === C || {
                        1 : "left",
                        3 : "right"
                    } [C] === v.labelAlign) && (L = ve(k[t].getLabelSize(), L))
                }),
                v.staggerLines && (L *= v.staggerLines, v.labelOffset = L)
            } else for (r in k) k[r].destroy(),
            delete k[r];
            P && P.text && P.enabled !== !1 && (v.axisTitle || (v.axisTitle = b.text(P.text, 0, 0, P.useHTML).attr({
                zIndex: 7,
                rotation: P.rotation || 0,
                align: P.textAlign || {
                    low: "left",
                    middle: "center",
                    high: "right"
                } [P.align]
            }).addClass(Xe + this.coll.toLowerCase() + "-title").css(P.style).add(v.axisGroup), v.axisTitle.isNew = !0), e && (D = v.axisTitle.getBBox()[S ? "height": "width"], i = P.offset, A = c(i) ? 0 : p(P.margin, S ? 5 : 10)), v.axisTitle[e ? "show": "hide"]()),
            v.offset = F * p(x.offset, E[C]),
            m = 2 === C ? v.tickBaseline: 0,
            n = L + A + (L && F * (S ? p(_.y, v.tickBaseline + 8) : _.x) - m),
            v.axisTitleMargin = p(i, n),
            E[C] = ve(E[C], v.axisTitleMargin + D + F * v.offset, n),
            M[T] = ve(M[T], 2 * ge(x.lineWidth / 2))
        },
        getLinePath: function(t) {
            var e = this.chart,
            i = this.opposite,
            n = this.offset,
            r = this.horiz,
            o = this.left + (i ? this.width: 0) + n,
            s = e.chartHeight - this.bottom - (i ? this.height: 0) + n;
            return i && (t *= -1),
            e.renderer.crispLine([Ke, r ? this.left: o, r ? s: this.top, Qe, r ? e.chartWidth - this.right: o, r ? s: e.chartHeight - this.bottom], t)
        },
        getTitlePosition: function() {
            var t = this.horiz,
            e = this.left,
            n = this.top,
            r = this.len,
            o = this.options.title,
            s = t ? e: n,
            a = this.opposite,
            l = this.offset,
            h = i(o.style.fontSize || 12),
            c = {
                low: s + (t ? 0 : r),
                middle: s + r / 2,
                high: s + (t ? r: 0)
            } [o.align],
            u = (t ? n + this.height: e) + (t ? 1 : -1) * (a ? -1 : 1) * this.axisTitleMargin + (2 === this.side ? h: 0);
            return {
                x: t ? c: u + (a ? this.width: 0) + l + (o.x || 0),
                y: t ? u - (a ? this.height: 0) + l: c + (o.y || 0)
            }
        },
        render: function() {
            var t, e, i, n, r = this,
            o = r.horiz,
            s = r.reversed,
            a = r.chart,
            h = a.renderer,
            u = r.options,
            d = r.isLog,
            p = r.isLinked,
            f = r.tickPositions,
            g = r.axisTitle,
            m = r.ticks,
            v = r.minorTicks,
            y = r.alternateBands,
            b = u.stackLabels,
            x = u.alternateGridColor,
            w = r.tickmarkOffset,
            k = u.lineWidth,
            S = a.hasRendered,
            C = S && c(r.oldMin) && !isNaN(r.oldMin),
            T = r.hasData,
            D = r.showAxis,
            A = u.labels.overflow,
            P = r.justifyLabels = o && A !== !1;
            r.labelEdge.length = 0,
            r.justifyToPlot = "justify" === A,
            hi([m, v, y],
            function(t) {
                var e;
                for (e in t) t[e].isActive = !1
            }),
            (T || p) && (r.minorTickInterval && !r.categories && hi(r.getMinorTickPositions(),
            function(t) {
                v[t] || (v[t] = new I(r, t, "minor")),
                C && v[t].isNew && v[t].render(null, !0),
                v[t].render(null, !1, 1)
            }), f.length && (t = f.slice(), (o && s || !o && !s) && t.reverse(), P && (t = t.slice(1).concat([t[0]])), hi(t,
            function(e, i) {
                P && (i = i === t.length - 1 ? 0 : i + 1),
                (!p || e >= r.min && e <= r.max) && (m[e] || (m[e] = new I(r, e)), C && m[e].isNew && m[e].render(i, !0, .1), m[e].render(i))
            }), w && 0 === r.min && (m[ - 1] || (m[ - 1] = new I(r, -1, null, !0)), m[ - 1].render( - 1))), x && hi(f,
            function(t, e) {
                e % 2 === 0 && t < r.max && (y[t] || (y[t] = new ce.PlotLineOrBand(r)), i = t + w, n = f[e + 1] !== H ? f[e + 1] + w: r.max, y[t].options = {
                    from: d ? l(i) : i,
                    to: d ? l(n) : n,
                    color: x
                },
                y[t].render(), y[t].isActive = !0)
            }), r._addedPlotLB || (hi((u.plotLines || []).concat(u.plotBands || []),
            function(t) {
                r.addPlotBandOrLine(t)
            }), r._addedPlotLB = !0)),
            hi([m, v, y],
            function(t) {
                var e, i, n = [],
                r = Y ? Y.duration || 500 : 0,
                o = function() {
                    for (i = n.length; i--;) t[n[i]] && !t[n[i]].isActive && (t[n[i]].destroy(), delete t[n[i]])
                };
                for (e in t) t[e].isActive || (t[e].render(e, !1, 0), t[e].isActive = !1, n.push(e));
                t !== y && a.hasRendered && r ? r && setTimeout(o, r) : o()
            }),
            k && (e = r.getLinePath(k), r.axisLine ? r.axisLine.animate({
                d: e
            }) : r.axisLine = h.path(e).attr({
                stroke: u.lineColor,
                "stroke-width": k,
                zIndex: 7
            }).add(r.axisGroup), r.axisLine[D ? "show": "hide"]()),
            g && D && (g[g.isNew ? "attr": "animate"](r.getTitlePosition()), g.isNew = !1),
            b && b.enabled && r.renderStackTotals(),
            r.isDirty = !1
        },
        redraw: function() {
            this.render(),
            hi(this.plotLinesAndBands,
            function(t) {
                t.render()
            }),
            hi(this.series,
            function(t) {
                t.isDirty = !0
            })
        },
        destroy: function(t) {
            var e, i, n = this,
            r = n.stacks,
            o = n.plotLinesAndBands;
            t || fi(n);
            for (e in r) A(r[e]),
            r[e] = null;
            for (hi([n.ticks, n.minorTicks, n.alternateBands],
            function(t) {
                A(t)
            }), i = o.length; i--;) o[i].destroy();
            hi(["stackTotalGroup", "axisLine", "axisTitle", "axisGroup", "cross", "gridGroup", "labelGroup"],
            function(t) {
                n[t] && (n[t] = n[t].destroy())
            }),
            this.cross && this.cross.destroy()
        },
        drawCrosshair: function(t, e) {
            if (this.crosshair) {
                if ((c(e) || !p(this.crosshair.snap, !0)) === !1) return void this.hideCrosshair();
                var i, n, r = this.crosshair,
                o = r.animation;
                if (p(r.snap, !0) ? c(e) && (n = this.chart.inverted != this.horiz ? e.plotX: this.len - e.plotY) : n = this.horiz ? t.chartX - this.pos: this.len - t.chartY + this.pos, i = this.isRadial ? this.getPlotLinePath(this.isXAxis ? e.x: p(e.stackY, e.y)) : this.getPlotLinePath(null, null, null, null, n), null === i) return void this.hideCrosshair();
                if (this.cross) this.cross.attr({
                    visibility: Ve
                })[o ? "animate": "attr"]({
                    d: i
                },
                o);
                else {
                    var s = {
                        "stroke-width": r.width || 1,
                        stroke: r.color || "#C0C0C0",
                        zIndex: r.zIndex || 2
                    };
                    r.dashStyle && (s.dashstyle = r.dashStyle),
                    this.cross = this.chart.renderer.path(i).attr(s).add()
                }
            }
        },
        hideCrosshair: function() {
            this.cross && this.cross.hide()
        }
    },
    t($.prototype, G),
    $.prototype.getTimeTicks = function(e, i, n, r) {
        var o, s, a = [],
        l = {},
        h = W.global.useUTC,
        u = new K(i - Z),
        d = e.unitRange,
        f = e.count;
        if (c(i)) {
            d >= V.second && (u.setMilliseconds(0), u.setSeconds(d >= V.minute ? 0 : f * ge(u.getSeconds() / f))),
            d >= V.minute && u[oe](d >= V.hour ? 0 : f * ge(u[J]() / f)),
            d >= V.hour && u[se](d >= V.day ? 0 : f * ge(u[te]() / f)),
            d >= V.day && u[ae](d >= V.month ? 1 : f * ge(u[ie]() / f)),
            d >= V.month && (u[le](d >= V.year ? 0 : f * ge(u[ne]() / f)), s = u[re]()),
            d >= V.year && (s -= s % f, u[he](s)),
            d === V.week && u[ae](u[ie]() - u[ee]() + p(r, 1)),
            o = 1,
            Z && (u = new K(u.getTime() + Z)),
            s = u[re]();
            for (var g = u.getTime(), m = u[ne](), v = u[ie](), y = (V.day + (h ? Z: 60 * u.getTimezoneOffset() * 1e3)) % V.day; n > g;) a.push(g),
            d === V.year ? g = Q(s + o * f, 0) : d === V.month ? g = Q(s, m + o * f) : h || d !== V.day && d !== V.week ? g += d * f: g = Q(s, m, v + o * f * (d === V.day ? 1 : 7)),
            o++;
            a.push(g),
            hi(ci(a,
            function(t) {
                return d <= V.hour && t % V.day === y
            }),
            function(t) {
                l[t] = "day"
            })
        }
        return a.info = t(e, {
            higherRanks: l,
            totalRange: d * f
        }),
        a
    },
    $.prototype.normalizeTimeTickInterval = function(t, e) {
        var i, n, r = e || [["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]], ["second", [1, 2, 5, 10, 15, 30]], ["minute", [1, 2, 5, 10, 15, 30]], ["hour", [1, 2, 3, 4, 6, 8, 12]], ["day", [1, 2]], ["week", [1, 2]], ["month", [1, 2, 3, 4, 6]], ["year", null]],
        o = r[r.length - 1],
        s = V[o[0]],
        a = o[1];
        for (n = 0; n < r.length; n++) if (o = r[n], s = V[o[0]], a = o[1], r[n + 1]) {
            var l = (s * a[a.length - 1] + V[r[n + 1][0]]) / 2;
            if (l >= t) break
        }
        return s === V.year && 5 * s > t && (a = [1, 2, 5]),
        i = S(t / s, a, "year" === o[0] ? ve(k(t / s), 1) : 1),
        {
            unitRange: s,
            count: i,
            unitName: o[0]
        }
    },
    $.prototype.getLogTickPositions = function(t, e, i, n) {
        var r = this,
        o = r.options,
        s = r.len,
        h = [];
        if (n || (r._minorAutoInterval = null), t >= .5) t = fe(t),
        h = r.getLinearTickPositions(t, e, i);
        else if (t >= .08) {
            var c, u, d, f, g, m, v, y = ge(e);
            for (c = t > .3 ? [1, 2, 4] : t > .15 ? [1, 2, 4, 6, 8] : [1, 2, 3, 4, 5, 6, 7, 8, 9], u = y; i + 1 > u && !v; u++) for (f = c.length, d = 0; f > d && !v; d++) g = a(l(u) * c[d]),
            g > e && (!n || i >= m) && m !== H && h.push(m),
            m > i && (v = !0),
            m = g
        } else {
            var b = l(e),
            x = l(i),
            w = o[n ? "minorTickInterval": "tickInterval"],
            C = "auto" === w ? null: w,
            T = o.tickPixelInterval / (n ? 5 : 1),
            D = n ? s / r.tickPositions.length: s;
            t = p(C, r._minorAutoInterval, (x - b) * T / (D || 1)),
            t = S(t, null, k(t)),
            h = di(r.getLinearTickPositions(t, b, x), a),
            n || (r._minorAutoInterval = t / 5)
        }
        return n || (r.tickInterval = t),
        h
    };
    var Mi = ce.Tooltip = function() {
        this.init.apply(this, arguments)
    };
    Mi.prototype = {
        init: function(t, e) {
            var n = e.borderWidth,
            r = e.style,
            o = i(r.padding);
            this.chart = t,
            this.options = e,
            this.crosshairs = [],
            this.now = {
                x: 0,
                y: 0
            },
            this.isHidden = !0,
            this.label = t.renderer.label("", 0, 0, e.shape || "callout", null, null, e.useHTML, null, "tooltip").attr({
                padding: o,
                fill: e.backgroundColor,
                "stroke-width": n,
                r: e.borderRadius,
                zIndex: 8
            }).css(r).css({
                padding: 0
            }).add().attr({
                y: -9999
            }),
            Ne || this.label.shadow(e.shadow),
            this.shared = e.shared
        },
        destroy: function() {
            this.label && (this.label = this.label.destroy()),
            clearTimeout(this.hideTimer),
            clearTimeout(this.tooltipTimeout)
        },
        move: function(e, i, n, r) {
            var o = this,
            s = o.now,
            a = o.options.animation !== !1 && !o.isHidden && (be(e - s.x) > 1 || be(i - s.y) > 1),
            l = o.followPointer || o.len > 1;
            t(s, {
                x: a ? (2 * s.x + e) / 3 : e,
                y: a ? (s.y + i) / 2 : i,
                anchorX: l ? H: a ? (2 * s.anchorX + n) / 3 : n,
                anchorY: l ? H: a ? (s.anchorY + r) / 2 : r
            }),
            o.label.attr(s),
            a && (clearTimeout(this.tooltipTimeout), this.tooltipTimeout = setTimeout(function() {
                o && o.move(e, i, n, r)
            },
            32))
        },
        hide: function(t) {
            var e, i = this;
            clearTimeout(this.hideTimer),
            this.isHidden || (e = this.chart.hoverPoints, this.hideTimer = setTimeout(function() {
                i.label.fadeOut(),
                i.isHidden = !0
            },
            p(t, this.options.hideDelay, 500)), e && hi(e,
            function(t) {
                t.setState()
            }), this.chart.hoverPoints = null)
        },
        getAnchor: function(t, e) {
            var i, n, r = this.chart,
            o = r.inverted,
            s = r.plotTop,
            a = 0,
            l = 0;
            return t = d(t),
            i = t[0].tooltipPos,
            this.followPointer && e && (e.chartX === H && (e = r.pointer.normalize(e)), i = [e.chartX - r.plotLeft, e.chartY - s]),
            i || (hi(t,
            function(t) {
                n = t.series.yAxis,
                a += t.plotX,
                l += (t.plotLow ? (t.plotLow + t.plotHigh) / 2 : t.plotY) + (!o && n ? n.top - s: 0)
            }), a /= t.length, l /= t.length, i = [o ? r.plotWidth - l: a, this.shared && !o && t.length > 1 && e ? e.chartY - s: o ? r.plotHeight - a: l]),
            di(i, fe)
        },
        getPosition: function(t, e, i) {
            var n, r = this.chart,
            o = this.distance,
            s = {},
            a = ["y", r.chartHeight, e, i.plotY + r.plotTop],
            l = ["x", r.chartWidth, t, i.plotX + r.plotLeft],
            h = i.ttBelow || r.inverted && !i.negative || !r.inverted && i.negative,
            c = function(t, e, i, n) {
                var r = n - o > i,
                a = e > n + o + i,
                l = n - o - i,
                c = n + o;
                if (h && a) s[t] = c;
                else if (!h && r) s[t] = l;
                else if (r) s[t] = l;
                else {
                    if (!a) return ! 1;
                    s[t] = c
                }
            },
            u = function(t, e, i, n) {
                return o > n || n > e - o ? !1 : void(s[t] = i / 2 > n ? 1 : n > e - i / 2 ? e - i - 2 : n - i / 2)
            },
            d = function(t) {
                var e = a;
                a = l,
                l = e,
                n = t
            },
            p = function() {
                c.apply(0, a) !== !1 ? u.apply(0, l) !== !1 || n || (d(!0), p()) : n ? s.x = s.y = 0 : (d(!0), p())
            };
            return (r.inverted || this.len > 1) && d(),
            p(),
            s
        },
        defaultFormatter: function(t) {
            var e, i = this.points || d(this),
            n = i[0].series;
            return e = [t.tooltipHeaderFormatter(i[0])],
            hi(i,
            function(t) {
                n = t.series,
                e.push(n.tooltipFormatter && n.tooltipFormatter(t) || t.point.tooltipFormatter(n.tooltipOptions.pointFormat))
            }),
            e.push(t.options.footerFormat || ""),
            e.join("")
        },
        refresh: function(t, e) {
            var i, n, r, o, s, a, l = this,
            h = l.chart,
            c = l.label,
            u = l.options,
            f = {},
            g = [],
            m = u.formatter || l.defaultFormatter,
            v = h.hoverPoints,
            y = l.shared;
            clearTimeout(this.hideTimer),
            l.followPointer = d(t)[0].series.tooltipOptions.followPointer,
            r = l.getAnchor(t, e),
            i = r[0],
            n = r[1],
            !y || t.series && t.series.noSharedTooltip ? f = t.getLabelConfig() : (h.hoverPoints = t, v && hi(v,
            function(t) {
                t.setState()
            }), hi(t,
            function(t) {
                t.setState(ti),
                g.push(t.getLabelConfig())
            }), f = {
                x: t[0].category,
                y: t[0].y
            },
            f.points = g, this.len = g.length, t = t[0]),
            o = m.call(f, l),
            a = t.series,
            this.distance = p(a.tooltipOptions.distance, 16),
            o === !1 ? this.hide() : (l.isHidden && (yi(c), c.attr("opacity", 1).show()), c.attr({
                text: o
            }), s = u.borderColor || t.color || a.color || "#606060", c.attr({
                stroke: s
            }), l.updatePosition({
                plotX: i,
                plotY: n,
                negative: t.negative,
                ttBelow: t.ttBelow
            }), this.isHidden = !1),
            gi(h, "tooltipRefresh", {
                text: o,
                x: i + h.plotLeft,
                y: n + h.plotTop,
                borderColor: s
            })
        },
        updatePosition: function(t) {
            var e = this.chart,
            i = this.label,
            n = (this.options.positioner || this.getPosition).call(this, i.width, i.height, t);
            this.move(fe(n.x), fe(n.y), t.plotX + e.plotLeft, t.plotY + e.plotTop)
        },
        tooltipHeaderFormatter: function(t) {
            var e, i = t.series,
            n = i.tooltipOptions,
            r = n.dateTimeLabelFormats,
            o = n.xDateFormat,
            a = i.xAxis,
            l = a && "datetime" === a.options.type && s(t.key),
            h = n.headerFormat,
            c = a && a.closestPointRange;
            if (l && !o) {
                if (c) {
                    for (e in V) if (V[e] >= c || V[e] <= V.day && t.key % V[e] > 0) {
                        o = r[e];
                        break
                    }
                } else o = r.day;
                o = o || r.year
            }
            return l && o && (h = h.replace("{point.key}", "{point.key:" + o + "}")),
            w(h, {
                point: t,
                series: i
            })
        }
    };
    var Fi;
    z = ue.documentElement.ontouchstart !== H;
    var Ni = ce.Pointer = function(t, e) {
        this.init(t, e)
    };
    if (Ni.prototype = {
        init: function(t, e) {
            var i, n, r = e.chart,
            o = r.events,
            s = Ne ? "": r.zoomType,
            a = t.inverted;
            this.options = e,
            this.chart = t,
            this.zoomX = i = /x/.test(s),
            this.zoomY = n = /y/.test(s),
            this.zoomHor = i && !a || n && a,
            this.zoomVert = n && !a || i && a,
            this.hasZoom = i || n,
            this.runChartClick = o && !!o.click,
            this.pinchDown = [],
            this.lastValidTouch = {},
            ce.Tooltip && e.tooltip.enabled && (t.tooltip = new Mi(t, e.tooltip), this.followTouchMove = e.tooltip.followTouchMove),
            this.setDOMEvents()
        },
        normalize: function(e, i) {
            var n, r, o;
            return e = e || window.event,
            e = mi(e),
            e.target || (e.target = e.srcElement),
            o = e.touches ? e.touches.length ? e.touches.item(0) : e.changedTouches[0] : e,
            i || (this.chartPosition = i = ui(this.chart.container)),
            o.pageX === H ? (n = ve(e.x, e.clientX - i.left), r = e.y) : (n = o.pageX - i.left, r = o.pageY - i.top),
            t(e, {
                chartX: fe(n),
                chartY: fe(r)
            })
        },
        getCoordinates: function(t) {
            var e = {
                xAxis: [],
                yAxis: []
            };
            return hi(this.chart.axes,
            function(i) {
                e[i.isXAxis ? "xAxis": "yAxis"].push({
                    axis: i,
                    value: i.toValue(t[i.horiz ? "chartX": "chartY"])
                })
            }),
            e
        },
        getIndex: function(t) {
            var e = this.chart;
            return e.inverted ? e.plotHeight + e.plotTop - t.chartY: t.chartX - e.plotLeft
        },
        runPointActions: function(t) {
            var e, i, n, r, o, s, a = this,
            l = a.chart,
            h = l.series,
            c = l.tooltip,
            u = l.hoverPoint,
            d = l.hoverSeries,
            f = l.chartWidth,
            g = a.getIndex(t);
            if (c && a.options.tooltip.shared && (!d || !d.noSharedTooltip)) {
                for (n = [], r = h.length, o = 0; r > o; o++) h[o].visible && h[o].options.enableMouseTracking !== !1 && !h[o].noSharedTooltip && h[o].singularTooltips !== !0 && h[o].tooltipPoints.length && (i = h[o].tooltipPoints[g], i && i.series && (i._dist = be(g - i.clientX), f = ye(f, i._dist), n.push(i)));
                for (r = n.length; r--;) n[r]._dist > f && n.splice(r, 1);
                n.length && n[0].clientX !== a.hoverX && (c.refresh(n, t), a.hoverX = n[0].clientX)
            }
            e = d && d.tooltipOptions.followPointer,
            d && d.tracker && !e ? (i = d.tooltipPoints[g], i && i !== u && i.onMouseOver(t)) : c && e && !c.isHidden && (s = c.getAnchor([{}], t), c.updatePosition({
                plotX: s[0],
                plotY: s[1]
            })),
            c && !a._onDocumentMouseMove && (a._onDocumentMouseMove = function(t) {
                Re[Fi] && Re[Fi].pointer.onDocumentMouseMove(t)
            },
            pi(ue, "mousemove", a._onDocumentMouseMove)),
            hi(l.axes,
            function(e) {
                e.drawCrosshair(t, p(i, u))
            })
        },
        reset: function(t, e) {
            var i = this,
            n = i.chart,
            r = n.hoverSeries,
            o = n.hoverPoint,
            s = n.tooltip,
            a = s && s.shared ? n.hoverPoints: o;
            t = t && s && a,
            t && d(a)[0].plotX === H && (t = !1),
            t ? (s.refresh(a), o && o.setState(o.state, !0)) : (o && o.onMouseOut(), r && r.onMouseOut(), s && s.hide(e), i._onDocumentMouseMove && (fi(ue, "mousemove", i._onDocumentMouseMove), i._onDocumentMouseMove = null), hi(n.axes,
            function(t) {
                t.hideCrosshair()
            }), i.hoverX = null)
        },
        scaleGroups: function(t, e) {
            var i, n = this.chart;
            hi(n.series,
            function(r) {
                i = t || r.getPlotBox(),
                r.xAxis && r.xAxis.zoomEnabled && (r.group.attr(i), r.markerGroup && (r.markerGroup.attr(i), r.markerGroup.clip(e ? n.clipRect: null)), r.dataLabelsGroup && r.dataLabelsGroup.attr(i))
            }),
            n.clipRect.attr(e || n.clipBox)
        },
        dragStart: function(t) {
            var e = this.chart;
            e.mouseIsDown = t.type,
            e.cancelClick = !1,
            e.mouseDownX = this.mouseDownX = t.chartX,
            e.mouseDownY = this.mouseDownY = t.chartY
        },
        drag: function(t) {
            var e, i, n = this.chart,
            r = n.options.chart,
            o = t.chartX,
            s = t.chartY,
            a = this.zoomHor,
            l = this.zoomVert,
            h = n.plotLeft,
            c = n.plotTop,
            u = n.plotWidth,
            d = n.plotHeight,
            p = this.mouseDownX,
            f = this.mouseDownY,
            g = r.panKey && t[r.panKey + "Key"];
            h > o ? o = h: o > h + u && (o = h + u),
            c > s ? s = c: s > c + d && (s = c + d),
            this.hasDragged = Math.sqrt(Math.pow(p - o, 2) + Math.pow(f - s, 2)),
            this.hasDragged > 10 && (e = n.isInsidePlot(p - h, f - c), n.hasCartesianSeries && (this.zoomX || this.zoomY) && e && !g && (this.selectionMarker || (this.selectionMarker = n.renderer.rect(h, c, a ? 1 : u, l ? 1 : d, 0).attr({
                fill: r.selectionMarkerFill || "rgba(69,114,167,0.25)",
                zIndex: 7
            }).add())), this.selectionMarker && a && (i = o - p, this.selectionMarker.attr({
                width: be(i),
                x: (i > 0 ? 0 : i) + p
            })), this.selectionMarker && l && (i = s - f, this.selectionMarker.attr({
                height: be(i),
                y: (i > 0 ? 0 : i) + f
            })), e && !this.selectionMarker && r.panning && n.pan(t, r.panning))
        },
        drop: function(e) {
            var i = this.chart,
            n = this.hasPinched;
            if (this.selectionMarker) {
                var r, o = {
                    xAxis: [],
                    yAxis: [],
                    originalEvent: e.originalEvent || e
                },
                s = this.selectionMarker,
                a = s.attr ? s.attr("x") : s.x,
                l = s.attr ? s.attr("y") : s.y,
                h = s.attr ? s.attr("width") : s.width,
                c = s.attr ? s.attr("height") : s.height; (this.hasDragged || n) && (hi(i.axes,
                function(t) {
                    if (t.zoomEnabled) {
                        var i = t.horiz,
                        n = "touchend" === e.type ? t.minPixelPadding: 0,
                        s = t.toValue((i ? a: l) + n),
                        u = t.toValue((i ? a + h: l + c) - n);
                        isNaN(s) || isNaN(u) || (o[t.coll].push({
                            axis: t,
                            min: ye(s, u),
                            max: ve(s, u)
                        }), r = !0)
                    }
                }), r && gi(i, "selection", o,
                function(e) {
                    i.zoom(t(e, n ? {
                        animation: !1
                    }: null))
                })),
                this.selectionMarker = this.selectionMarker.destroy(),
                n && this.scaleGroups()
            }
            i && (f(i.container, {
                cursor: i._cursor
            }), i.cancelClick = this.hasDragged > 10, i.mouseIsDown = this.hasDragged = this.hasPinched = !1, this.pinchDown = [])
        },
        onContainerMouseDown: function(t) {
            t = this.normalize(t),
            t.preventDefault && t.preventDefault(),
            this.dragStart(t)
        },
        onDocumentMouseUp: function(t) {
            Re[Fi] && Re[Fi].pointer.drop(t)
        },
        onDocumentMouseMove: function(t) {
            var e = this.chart,
            i = this.chartPosition,
            n = e.hoverSeries;
            t = this.normalize(t, i),
            i && n && !this.inClass(t.target, "highcharts-tracker") && !e.isInsidePlot(t.chartX - e.plotLeft, t.chartY - e.plotTop) && this.reset()
        },
        onContainerMouseLeave: function() {
            var t = Re[Fi];
            t && (t.pointer.reset(), t.pointer.chartPosition = null)
        },
        onContainerMouseMove: function(t) {
            var e = this.chart;
            Fi = e.index,
            t = this.normalize(t),
            t.returnValue = !1,
            "mousedown" === e.mouseIsDown && this.drag(t),
            !this.inClass(t.target, "highcharts-tracker") && !e.isInsidePlot(t.chartX - e.plotLeft, t.chartY - e.plotTop) || e.openMenu || this.runPointActions(t)
        },
        inClass: function(t, e) {
            for (var i; t;) {
                if (i = u(t, "class")) {
                    if ( - 1 !== i.indexOf(e)) return ! 0;
                    if ( - 1 !== i.indexOf(Xe + "container")) return ! 1
                }
                t = t.parentNode
            }
        },
        onTrackerMouseOut: function(t) {
            var e = this.chart.hoverSeries,
            i = t.relatedTarget || t.toElement,
            n = i && i.point && i.point.series; ! e || e.options.stickyTracking || this.inClass(i, Xe + "tooltip") || n === e || e.onMouseOut()
        },
        onContainerClick: function(e) {
            var i = this.chart,
            n = i.hoverPoint,
            r = i.plotLeft,
            o = i.plotTop;
            e = this.normalize(e),
            e.cancelBubble = !0,
            i.cancelClick || (n && this.inClass(e.target, Xe + "tracker") ? (gi(n.series, "click", t(e, {
                point: n
            })), i.hoverPoint && n.firePointEvent("click", e)) : (t(e, this.getCoordinates(e)), i.isInsidePlot(e.chartX - r, e.chartY - o) && gi(i, "click", e)))
        },
        setDOMEvents: function() {
            var t = this,
            e = t.chart.container;
            e.onmousedown = function(e) {
                t.onContainerMouseDown(e)
            },
            e.onmousemove = function(e) {
                t.onContainerMouseMove(e)
            },
            e.onclick = function(e) {
                t.onContainerClick(e)
            },
            pi(e, "mouseleave", t.onContainerMouseLeave),
            1 === He && pi(ue, "mouseup", t.onDocumentMouseUp),
            z && (e.ontouchstart = function(e) {
                t.onContainerTouchStart(e)
            },
            e.ontouchmove = function(e) {
                t.onContainerTouchMove(e)
            },
            1 === He && pi(ue, "touchend", t.onDocumentTouchEnd))
        },
        destroy: function() {
            var t;
            fi(this.chart.container, "mouseleave", this.onContainerMouseLeave),
            He || (fi(ue, "mouseup", this.onDocumentMouseUp), fi(ue, "touchend", this.onDocumentTouchEnd)),
            clearInterval(this.tooltipTimeout);
            for (t in this) this[t] = null
        }
    },
    t(ce.Pointer.prototype, {
        pinchTranslate: function(t, e, i, n, r, o) { (this.zoomHor || this.pinchHor) && this.pinchTranslateDirection(!0, t, e, i, n, r, o),
            (this.zoomVert || this.pinchVert) && this.pinchTranslateDirection(!1, t, e, i, n, r, o)
        },
        pinchTranslateDirection: function(t, e, i, n, r, o, s, a) {
            var l, h, c, u, d, p, f = this.chart,
            g = t ? "x": "y",
            m = t ? "X": "Y",
            v = "chart" + m,
            y = t ? "width": "height",
            b = f["plot" + (t ? "Left": "Top")],
            x = a || 1,
            w = f.inverted,
            k = f.bounds[t ? "h": "v"],
            S = 1 === e.length,
            C = e[0][v],
            T = i[0][v],
            D = !S && e[1][v],
            A = !S && i[1][v],
            P = function() { ! S && be(C - D) > 20 && (x = a || be(T - A) / be(C - D)),
                c = (b - T) / x + C,
                l = f["plot" + (t ? "Width": "Height")] / x
            };
            P(),
            h = c,
            h < k.min ? (h = k.min, u = !0) : h + l > k.max && (h = k.max - l, u = !0),
            u ? (T -= .8 * (T - s[g][0]), S || (A -= .8 * (A - s[g][1])), P()) : s[g] = [T, A],
            w || (o[g] = c - b, o[y] = l),
            p = w ? t ? "scaleY": "scaleX": "scale" + m,
            d = w ? 1 / x: x,
            r[y] = l,
            r[g] = h,
            n[p] = x,
            n["translate" + m] = d * b + (T - d * C)
        },
        pinch: function(e) {
            var i = this,
            n = i.chart,
            r = i.pinchDown,
            o = i.followTouchMove,
            s = e.touches,
            a = s.length,
            l = i.lastValidTouch,
            h = i.hasZoom,
            c = i.selectionMarker,
            u = {},
            d = 1 === a && (i.inClass(e.target, Xe + "tracker") && n.runTrackerClick || i.runChartClick),
            f = {}; ! h && !o || d || e.preventDefault(),
            di(s,
            function(t) {
                return i.normalize(t)
            }),
            "touchstart" === e.type ? (hi(s,
            function(t, e) {
                r[e] = {
                    chartX: t.chartX,
                    chartY: t.chartY
                }
            }), l.x = [r[0].chartX, r[1] && r[1].chartX], l.y = [r[0].chartY, r[1] && r[1].chartY], hi(n.axes,
            function(t) {
                if (t.zoomEnabled) {
                    var e = n.bounds[t.horiz ? "h": "v"],
                    i = t.minPixelPadding,
                    r = t.toPixels(p(t.options.min, t.dataMin)),
                    o = t.toPixels(p(t.options.max, t.dataMax)),
                    s = ye(r, o),
                    a = ve(r, o);
                    e.min = ye(t.pos, s - i),
                    e.max = ve(t.pos + t.len, a + i)
                }
            }), i.res = !0) : r.length && (c || (i.selectionMarker = c = t({
                destroy: Oe
            },
            n.plotBox)), i.pinchTranslate(r, s, u, c, f, l), i.hasPinched = h, i.scaleGroups(u, f), !h && o && 1 === a ? this.runPointActions(i.normalize(e)) : i.res && (i.res = !1, this.reset(!1, 0)))
        },
        onContainerTouchStart: function(t) {
            var e = this.chart;
            Fi = e.index,
            1 === t.touches.length ? (t = this.normalize(t), e.isInsidePlot(t.chartX - e.plotLeft, t.chartY - e.plotTop) ? (this.runPointActions(t), this.pinch(t)) : this.reset()) : 2 === t.touches.length && this.pinch(t)
        },
        onContainerTouchMove: function(t) { (1 === t.touches.length || 2 === t.touches.length) && this.pinch(t)
        },
        onDocumentTouchEnd: function(t) {
            Re[Fi] && Re[Fi].pointer.drop(t)
        }
    }), de.PointerEvent || de.MSPointerEvent) {
        var Ii = {},
        $i = !!de.PointerEvent,
        Oi = function() {
            var t, e = [];
            e.item = function(t) {
                return this[t]
            };
            for (t in Ii) Ii.hasOwnProperty(t) && e.push({
                pageX: Ii[t].pageX,
                pageY: Ii[t].pageY,
                target: Ii[t].target
            });
            return e
        },
        Ri = function(t, e, i, n) {
            var r;
            t = t.originalEvent || t,
            "touch" !== t.pointerType && t.pointerType !== t.MSPOINTER_TYPE_TOUCH || !Re[Fi] || (n(t), r = Re[Fi].pointer, r[e]({
                type: i,
                target: t.currentTarget,
                preventDefault: Oe,
                touches: Oi()
            }))
        };
        t(Ni.prototype, {
            onContainerPointerDown: function(t) {
                Ri(t, "onContainerTouchStart", "touchstart",
                function(t) {
                    Ii[t.pointerId] = {
                        pageX: t.pageX,
                        pageY: t.pageY,
                        target: t.currentTarget
                    }
                })
            },
            onContainerPointerMove: function(t) {
                Ri(t, "onContainerTouchMove", "touchmove",
                function(t) {
                    Ii[t.pointerId] = {
                        pageX: t.pageX,
                        pageY: t.pageY
                    },
                    Ii[t.pointerId].target || (Ii[t.pointerId].target = t.currentTarget)
                })
            },
            onDocumentPointerUp: function(t) {
                Ri(t, "onContainerTouchEnd", "touchend",
                function(t) {
                    delete Ii[t.pointerId]
                })
            },
            batchMSEvents: function(t) {
                t(this.chart.container, $i ? "pointerdown": "MSPointerDown", this.onContainerPointerDown),
                t(this.chart.container, $i ? "pointermove": "MSPointerMove", this.onContainerPointerMove),
                t(ue, $i ? "pointerup": "MSPointerUp", this.onDocumentPointerUp)
            }
        }),
        b(Ni.prototype, "init",
        function(t, e, i) {
            t.call(this, e, i),
            (this.hasZoom || this.followTouchMove) && f(e.container, {
                "-ms-touch-action": Ge,
                "touch-action": Ge
            })
        }),
        b(Ni.prototype, "setDOMEvents",
        function(t) {
            t.apply(this),
            (this.hasZoom || this.followTouchMove) && this.batchMSEvents(pi)
        }),
        b(Ni.prototype, "destroy",
        function(t) {
            this.batchMSEvents(fi),
            t.call(this)
        })
    }
    var Hi = ce.Legend = function(t, e) {
        this.init(t, e)
    };
    Hi.prototype = {
        init: function(t, i) {
            var n = this,
            r = i.itemStyle,
            o = p(i.padding, 8),
            s = i.itemMarginTop || 0;
            this.options = i,
            i.enabled && (n.itemStyle = r, n.itemHiddenStyle = e(r, i.itemHiddenStyle), n.itemMarginTop = s, n.padding = o, n.initialItemX = o, n.initialItemY = o - 5, n.maxItemWidth = 0, n.chart = t, n.itemHeight = 0, n.lastLineHeight = 0, n.symbolWidth = p(i.symbolWidth, 16), n.pages = [], n.render(), pi(n.chart, "endResize",
            function() {
                n.positionCheckboxes()
            }))
        },
        colorizeItem: function(t, e) {
            var i, n, r = this,
            o = r.options,
            s = t.legendItem,
            a = t.legendLine,
            l = t.legendSymbol,
            h = r.itemHiddenStyle.color,
            c = e ? o.itemStyle.color: h,
            u = e ? t.legendColor || t.color || "#CCC": h,
            d = t.options && t.options.marker,
            p = {
                fill: u
            };
            if (s && s.css({
                fill: c,
                color: c
            }), a && a.attr({
                stroke: u
            }), l) {
                if (d && l.isMarker) {
                    p.stroke = u,
                    d = t.convertAttribs(d);
                    for (i in d) n = d[i],
                    n !== H && (p[i] = n)
                }
                l.attr(p)
            }
        },
        positionItem: function(t) {
            var e = this,
            i = e.options,
            n = i.symbolPadding,
            r = !i.rtl,
            o = t._legendItemPos,
            s = o[0],
            a = o[1],
            l = t.checkbox;
            t.legendGroup && t.legendGroup.translate(r ? s: e.legendWidth - s - 2 * n - 4, a),
            l && (l.x = s, l.y = a)
        },
        destroyItem: function(t) {
            var e = t.checkbox;
            hi(["legendItem", "legendLine", "legendSymbol", "legendGroup"],
            function(e) {
                t[e] && (t[e] = t[e].destroy())
            }),
            e && P(t.checkbox)
        },
        destroy: function() {
            var t = this,
            e = t.group,
            i = t.box;
            i && (t.box = i.destroy()),
            e && (t.group = e.destroy())
        },
        positionCheckboxes: function(t) {
            var e, i = this.group.alignAttr,
            n = this.clipHeight || this.legendHeight;
            i && (e = i.translateY, hi(this.allItems,
            function(r) {
                var o, s = r.checkbox;
                s && (o = e + s.y + (t || 0) + 3, f(s, {
                    left: i.translateX + r.checkboxOffset + s.x - 20 + Ue,
                    top: o + Ue,
                    display: o > e - 6 && e + n - 6 > o ? "": Ge
                }))
            }))
        },
        renderTitle: function() {
            var t, e = this.options,
            i = this.padding,
            n = e.title,
            r = 0;
            n.text && (this.title || (this.title = this.chart.renderer.label(n.text, i - 3, i - 4, null, null, null, null, null, "legend-title").attr({
                zIndex: 1
            }).css(n.style).add(this.group)), t = this.title.getBBox(), r = t.height, this.offsetWidth = t.width, this.contentGroup.attr({
                translateY: r
            })),
            this.titleHeight = r
        },
        renderItem: function(t) {
            var i, n, r, o = this,
            s = o.chart,
            a = s.renderer,
            l = o.options,
            h = "horizontal" === l.layout,
            c = o.symbolWidth,
            u = l.symbolPadding,
            d = o.itemStyle,
            f = o.itemHiddenStyle,
            g = o.padding,
            m = h ? p(l.itemDistance, 20) : 0,
            v = !l.rtl,
            y = l.width,
            b = l.itemMarginBottom || 0,
            x = o.itemMarginTop,
            k = o.initialItemX,
            S = t.legendItem,
            C = t.series && t.series.drawLegendSymbol ? t.series: t,
            T = C.options,
            D = o.createCheckboxForItem && T && T.showCheckbox,
            A = l.useHTML;
            S || (t.legendGroup = a.g("legend-item").attr({
                zIndex: 1
            }).add(o.scrollGroup), t.legendItem = S = a.text(l.labelFormat ? w(l.labelFormat, t) : l.labelFormatter.call(t), v ? c + u: -u, o.baseline || 0, A).css(e(t.visible ? d: f)).attr({
                align: v ? "left": "right",
                zIndex: 2
            }).add(t.legendGroup), o.baseline || (o.baseline = a.fontMetrics(d.fontSize, S).f + 3 + x, S.attr("y", o.baseline)), C.drawLegendSymbol(o, t), o.setItemEvents && o.setItemEvents(t, S, A, d, f), o.colorizeItem(t, t.visible), D && o.createCheckboxForItem(t)),
            n = S.getBBox(),
            r = t.checkboxOffset = l.itemWidth || t.legendItemWidth || c + u + n.width + m + (D ? 20 : 0),
            o.itemHeight = i = fe(t.legendItemHeight || n.height),
            h && o.itemX - k + r > (y || s.chartWidth - 2 * g - k - l.x) && (o.itemX = k, o.itemY += x + o.lastLineHeight + b, o.lastLineHeight = 0),
            o.maxItemWidth = ve(o.maxItemWidth, r),
            o.lastItemY = x + o.itemY + b,
            o.lastLineHeight = ve(i, o.lastLineHeight),
            t._legendItemPos = [o.itemX, o.itemY],
            h ? o.itemX += r: (o.itemY += x + i + b, o.lastLineHeight = i),
            o.offsetWidth = y || ve((h ? o.itemX - k - m: r) + g, o.offsetWidth)
        },
        getAllItems: function() {
            var t = [];
            return hi(this.chart.series,
            function(e) {
                var i = e.options;
                p(i.showInLegend, c(i.linkedTo) ? !1 : H, !0) && (t = t.concat(e.legendItems || ("point" === i.legendType ? e.data: e)))
            }),
            t
        },
        render: function() {
            var e, i, n, r, o = this,
            s = o.chart,
            a = s.renderer,
            l = o.group,
            h = o.box,
            c = o.options,
            u = o.padding,
            d = c.borderWidth,
            p = c.backgroundColor;
            o.itemX = o.initialItemX,
            o.itemY = o.initialItemY,
            o.offsetWidth = 0,
            o.lastItemY = 0,
            l || (o.group = l = a.g("legend").attr({
                zIndex: 7
            }).add(), o.contentGroup = a.g().attr({
                zIndex: 1
            }).add(l), o.scrollGroup = a.g().add(o.contentGroup)),
            o.renderTitle(),
            e = o.getAllItems(),
            C(e,
            function(t, e) {
                return (t.options && t.options.legendIndex || 0) - (e.options && e.options.legendIndex || 0)
            }),
            c.reversed && e.reverse(),
            o.allItems = e,
            o.display = i = !!e.length,
            hi(e,
            function(t) {
                o.renderItem(t)
            }),
            n = c.width || o.offsetWidth,
            r = o.lastItemY + o.lastLineHeight + o.titleHeight,
            r = o.handleOverflow(r),
            (d || p) && (n += u, r += u, h ? n > 0 && r > 0 && (h[h.isNew ? "attr": "animate"](h.crisp({
                width: n,
                height: r
            })), h.isNew = !1) : (o.box = h = a.rect(0, 0, n, r, c.borderRadius, d || 0).attr({
                stroke: c.borderColor,
                "stroke-width": d || 0,
                fill: p || Ge
            }).add(l).shadow(c.shadow), h.isNew = !0), h[i ? "show": "hide"]()),
            o.legendWidth = n,
            o.legendHeight = r,
            hi(e,
            function(t) {
                o.positionItem(t)
            }),
            i && l.align(t({
                width: n,
                height: r
            },
            c), !0, "spacingBox"),
            s.isResizing || this.positionCheckboxes()
        },
        handleOverflow: function(t) {
            var e, i, n = this,
            r = this.chart,
            o = r.renderer,
            s = this.options,
            a = s.y,
            l = "top" === s.verticalAlign,
            h = r.spacingBox.height + (l ? -a: a) - this.padding,
            c = s.maxHeight,
            u = this.clipRect,
            d = s.navigation,
            f = p(d.animation, !0),
            g = d.arrowSize || 12,
            m = this.nav,
            v = this.pages,
            y = this.allItems;
            return "horizontal" === s.layout && (h /= 2),
            c && (h = ye(h, c)),
            v.length = 0,
            t > h && !s.useHTML ? (this.clipHeight = e = ve(h - 20 - this.titleHeight - this.padding, 0), this.currentPage = p(this.currentPage, 1), this.fullHeight = t, hi(y,
            function(t, n) {
                var r = t._legendItemPos[1],
                o = fe(t.legendItem.getBBox().height),
                s = v.length; (!s || r - v[s - 1] > e && (i || r) !== v[s - 1]) && (v.push(i || r), s++),
                n === y.length - 1 && r + o - v[s - 1] > e && v.push(r),
                r !== i && (i = r)
            }), u || (u = n.clipRect = o.clipRect(0, this.padding, 9999, 0), n.contentGroup.clip(u)), u.attr({
                height: e
            }), m || (this.nav = m = o.g().attr({
                zIndex: 1
            }).add(this.group), this.up = o.symbol("triangle", 0, 0, g, g).on("click",
            function() {
                n.scroll( - 1, f)
            }).add(m), this.pager = o.text("", 15, 10).css(d.style).add(m), this.down = o.symbol("triangle-down", 0, 0, g, g).on("click",
            function() {
                n.scroll(1, f)
            }).add(m)), n.scroll(0), t = h) : m && (u.attr({
                height: r.chartHeight
            }), m.hide(), this.scrollGroup.attr({
                translateY: 1
            }), this.clipHeight = 0),
            t
        },
        scroll: function(t, e) {
            var i, n = this.pages,
            r = n.length,
            o = this.currentPage + t,
            s = this.clipHeight,
            a = this.options.navigation,
            l = a.activeColor,
            h = a.inactiveColor,
            c = this.pager,
            u = this.padding;
            o > r && (o = r),
            o > 0 && (e !== H && L(e, this.chart), this.nav.attr({
                translateX: u,
                translateY: s + this.padding + 7 + this.titleHeight,
                visibility: Ve
            }), this.up.attr({
                fill: 1 === o ? h: l
            }).css({
                cursor: 1 === o ? "default": "pointer"
            }), c.attr({
                text: o + "/" + r
            }), this.down.attr({
                x: 18 + this.pager.getBBox().width,
                fill: o === r ? h: l
            }).css({
                cursor: o === r ? "default": "pointer"
            }), i = -n[o - 1] + this.initialItemY, this.scrollGroup.animate({
                translateY: i
            }), this.currentPage = o, this.positionCheckboxes(i))
        }
    };
    var Bi = ce.LegendSymbolMixin = {
        drawRectangle: function(t, e) {
            var i = t.options.symbolHeight || 12;
            e.legendSymbol = this.chart.renderer.rect(0, t.baseline - 5 - i / 2, t.symbolWidth, i, t.options.symbolRadius || 0).attr({
                zIndex: 3
            }).add(e.legendGroup)
        },
        drawLineMarker: function(t) {
            var e, i, n, r = this.options,
            o = r.marker,
            s = t.options,
            a = t.symbolWidth,
            l = this.chart.renderer,
            h = this.legendGroup,
            c = t.baseline - fe(.3 * l.fontMetrics(s.itemStyle.fontSize, this.legendItem).b);
            r.lineWidth && (n = {
                "stroke-width": r.lineWidth
            },
            r.dashStyle && (n.dashstyle = r.dashStyle), this.legendLine = l.path([Ke, 0, c, Qe, a, c]).attr(n).add(h)),
            o && o.enabled !== !1 && (e = o.radius, this.legendSymbol = i = l.symbol(this.symbol, a / 2 - e, c - e, 2 * e, 2 * e).add(h), i.isMarker = !0)
        }
    }; (/Trident\/7\.0/.test(Ce) || _e) && b(Hi.prototype, "positionItem",
    function(t, e) {
        var i = this,
        n = function() {
            e._legendItemPos && t.call(i, e)
        };
        n(),
        setTimeout(n)
    }),
    O.prototype = {
        init: function(t, i) {
            var n, r = t.series;
            t.series = null,
            n = e(W, t),
            n.series = t.series = r,
            this.userOptions = t;
            var o = n.chart;
            this.margin = this.splashArray("margin", o),
            this.spacing = this.splashArray("spacing", o);
            var s = o.events;
            this.bounds = {
                h: {},
                v: {}
            },
            this.callback = i,
            this.isResizing = 0,
            this.options = n,
            this.axes = [],
            this.series = [],
            this.hasCartesianSeries = o.showAxes;
            var a, l = this;
            if (l.index = Re.length, Re.push(l), He++, o.reflow !== !1 && pi(l, "load",
            function() {
                l.initReflow()
            }), s) for (a in s) pi(l, a, s[a]);
            l.xAxis = [],
            l.yAxis = [],
            l.animation = Ne ? !1 : p(o.animation, !0),
            l.pointCount = l.colorCounter = l.symbolCounter = 0,
            l.firstRender()
        },
        initSeries: function(t) {
            var e, i = this,
            n = i.options.chart,
            r = t.type || n.type || n.defaultSeriesType,
            o = ni[r];
            return o || U(17, !0),
            e = new o,
            e.init(this, t),
            e
        },
        isInsidePlot: function(t, e, i) {
            var n = i ? e: t,
            r = i ? t: e;
            return n >= 0 && n <= this.plotWidth && r >= 0 && r <= this.plotHeight
        },
        adjustTickAmounts: function() {
            this.options.chart.alignTicks !== !1 && hi(this.axes,
            function(t) {
                t.adjustTickAmount()
            }),
            this.maxTicks = null
        },
        redraw: function(e) {
            var i, n, r, o = this,
            s = o.axes,
            a = o.series,
            l = o.pointer,
            h = o.legend,
            c = o.isDirtyLegend,
            u = o.hasCartesianSeries,
            d = o.isDirtyBox,
            p = a.length,
            f = p,
            g = o.renderer,
            m = g.isHidden(),
            v = [];
            for (L(e, o), m && o.cloneRenderTo(), o.layOutTitles(); f--;) if (r = a[f], r.options.stacking && (i = !0, r.isDirty)) {
                n = !0;
                break
            }
            if (n) for (f = p; f--;) r = a[f],
            r.options.stacking && (r.isDirty = !0);
            hi(a,
            function(t) {
                t.isDirty && "point" === t.options.legendType && (c = !0)
            }),
            c && h.options.enabled && (h.render(), o.isDirtyLegend = !1),
            i && o.getStacks(),
            u && (o.isResizing || (o.maxTicks = null, hi(s,
            function(t) {
                t.setScale()
            })), o.adjustTickAmounts()),
            o.getMargins(),
            u && (hi(s,
            function(t) {
                t.isDirty && (d = !0)
            }), hi(s,
            function(e) {
                e.isDirtyExtremes && (e.isDirtyExtremes = !1, v.push(function() {
                    gi(e, "afterSetExtremes", t(e.eventArgs, e.getExtremes())),
                    delete e.eventArgs
                })),
                (d || i) && e.redraw()
            })),
            d && o.drawChartBox(),
            hi(a,
            function(t) {
                t.isDirty && t.visible && (!t.isCartesian || t.xAxis) && t.redraw()
            }),
            l && l.reset(!0),
            g.draw(),
            gi(o, "redraw"),
            m && o.cloneRenderTo(!0),
            hi(v,
            function(t) {
                t.call()
            })
        },
        get: function(t) {
            var e, i, n, r = this,
            o = r.axes,
            s = r.series;
            for (e = 0; e < o.length; e++) if (o[e].options.id === t) return o[e];
            for (e = 0; e < s.length; e++) if (s[e].options.id === t) return s[e];
            for (e = 0; e < s.length; e++) for (n = s[e].points || [], i = 0; i < n.length; i++) if (n[i].id === t) return n[i];
            return null
        },
        getAxes: function() {
            var t, e, i = this,
            n = this.options,
            r = n.xAxis = d(n.xAxis || {}),
            o = n.yAxis = d(n.yAxis || {});
            hi(r,
            function(t, e) {
                t.index = e,
                t.isX = !0
            }),
            hi(o,
            function(t, e) {
                t.index = e
            }),
            t = r.concat(o),
            hi(t,
            function(t) {
                e = new $(i, t)
            }),
            i.adjustTickAmounts()
        },
        getSelectedPoints: function() {
            var t = [];
            return hi(this.series,
            function(e) {
                t = t.concat(ci(e.points || [],
                function(t) {
                    return t.selected
                }))
            }),
            t
        },
        getSelectedSeries: function() {
            return ci(this.series,
            function(t) {
                return t.selected
            })
        },
        getStacks: function() {
            var t = this;
            hi(t.yAxis,
            function(t) {
                t.stacks && t.hasVisibleSeries && (t.oldStacks = t.stacks)
            }),
            hi(t.series,
            function(e) { ! e.options.stacking || e.visible !== !0 && t.options.chart.ignoreHiddenSeries !== !1 || (e.stackKey = e.type + p(e.options.stack, ""))
            })
        },
        setTitle: function(t, i, n) {
            var r, o, s = this,
            a = s.options;
            r = a.title = e(a.title, t),
            o = a.subtitle = e(a.subtitle, i),
            hi([["title", t, r], ["subtitle", i, o]],
            function(t) {
                var e = t[0],
                i = s[e],
                n = t[1],
                r = t[2];
                i && n && (s[e] = i = i.destroy()),
                r && r.text && !i && (s[e] = s.renderer.text(r.text, 0, 0, r.useHTML).attr({
                    align: r.align,
                    "class": Xe + e,
                    zIndex: r.zIndex || 4
                }).css(r.style).add())
            }),
            s.layOutTitles(n)
        },
        layOutTitles: function(e) {
            var i, n = 0,
            r = this.title,
            o = this.subtitle,
            s = this.options,
            a = s.title,
            l = s.subtitle,
            h = this.renderer,
            c = this.spacingBox.width - 44;
            r && (r.css({
                width: (a.width || c) + Ue
            }).align(t({
                y: h.fontMetrics(a.style.fontSize, r).b - 3
            },
            a), !1, "spacingBox"), a.floating || a.verticalAlign || (n = r.getBBox().height)),
            o && (o.css({
                width: (l.width || c) + Ue
            }).align(t({
                y: n + (a.margin - 13) + h.fontMetrics(a.style.fontSize, o).b
            },
            l), !1, "spacingBox"), l.floating || l.verticalAlign || (n = me(n + o.getBBox().height))),
            i = this.titleOffset !== n,
            this.titleOffset = n,
            !this.isDirtyBox && i && (this.isDirtyBox = i, this.hasRendered && p(e, !0) && this.isDirtyBox && this.redraw())
        },
        getChartSize: function() {
            var t = this,
            e = t.options.chart,
            i = e.width,
            n = e.height,
            r = t.renderToClone || t.renderTo;
            c(i) || (t.containerWidth = si(r, "width")),
            c(n) || (t.containerHeight = si(r, "height")),
            t.chartWidth = ve(0, i || t.containerWidth || 600),
            t.chartHeight = ve(0, p(n, t.containerHeight > 19 ? t.containerHeight: 400))
        },
        cloneRenderTo: function(t) {
            var e = this.renderToClone,
            i = this.container;
            t ? e && (this.renderTo.appendChild(i), P(e), delete this.renderToClone) : (i && i.parentNode === this.renderTo && this.renderTo.removeChild(i), this.renderToClone = e = this.renderTo.cloneNode(0), f(e, {
                position: We,
                top: "-9999px",
                display: "block"
            }), e.style.setProperty && e.style.setProperty("display", "block", "important"), ue.body.appendChild(e), i && e.appendChild(i))
        },
        getContainer: function() {
            var e, r, o, s, a, l, h = this,
            c = h.options.chart,
            d = "data-highcharts-chart";
            h.renderTo = s = c.renderTo,
            l = Xe + $e++,
            n(s) && (h.renderTo = s = ue.getElementById(s)),
            s || U(13, !0),
            a = i(u(s, d)),
            !isNaN(a) && Re[a] && Re[a].hasRendered && Re[a].destroy(),
            u(s, d, h.index),
            s.innerHTML = "",
            c.skipClone || s.offsetWidth || h.cloneRenderTo(),
            h.getChartSize(),
            r = h.chartWidth,
            o = h.chartHeight,
            h.container = e = g(je, {
                className: Xe + "container" + (c.className ? " " + c.className: ""),
                id: l
            },
            t({
                position: qe,
                overflow: Ye,
                width: r + Ue,
                height: o + Ue,
                textAlign: "left",
                lineHeight: "normal",
                zIndex: 0,
                "-webkit-tap-highlight-color": "rgba(0,0,0,0)"
            },
            c.style), h.renderToClone || s),
            h._cursor = e.style.cursor,
            h.renderer = c.forExport ? new Di(e, r, o, c.style, !0) : new B(e, r, o, c.style),
            Ne && h.renderer.create(h, e, r, o)
        },
        getMargins: function() {
            var t, e = this,
            i = e.spacing,
            n = e.legend,
            r = e.margin,
            o = e.options.legend,
            s = p(o.margin, 20),
            a = o.x,
            l = o.y,
            h = o.align,
            u = o.verticalAlign,
            d = e.titleOffset;
            e.resetMargins(),
            t = e.axisOffset,
            d && !c(r[0]) && (e.plotTop = ve(e.plotTop, d + e.options.title.margin + i[0])),
            n.display && !o.floating && ("right" === h ? c(r[1]) || (e.marginRight = ve(e.marginRight, n.legendWidth - a + s + i[1])) : "left" === h ? c(r[3]) || (e.plotLeft = ve(e.plotLeft, n.legendWidth + a + s + i[3])) : "top" === u ? c(r[0]) || (e.plotTop = ve(e.plotTop, n.legendHeight + l + s + i[0])) : "bottom" === u && (c(r[2]) || (e.marginBottom = ve(e.marginBottom, n.legendHeight - l + s + i[2])))),
            e.extraBottomMargin && (e.marginBottom += e.extraBottomMargin),
            e.extraTopMargin && (e.plotTop += e.extraTopMargin),
            e.hasCartesianSeries && hi(e.axes,
            function(t) {
                t.getOffset()
            }),
            c(r[3]) || (e.plotLeft += t[3]),
            c(r[0]) || (e.plotTop += t[0]),
            c(r[2]) || (e.marginBottom += t[2]),
            c(r[1]) || (e.marginRight += t[1]),
            e.setChartSize()
        },
        reflow: function(t) {
            var e = this,
            i = e.options.chart,
            n = e.renderTo,
            r = i.width || si(n, "width"),
            o = i.height || si(n, "height"),
            s = t ? t.target: de,
            a = function() {
                e.container && (e.setSize(r, o, !1), e.hasUserSize = null)
            };
            e.hasUserSize || !r || !o || s !== de && s !== ue || ((r !== e.containerWidth || o !== e.containerHeight) && (clearTimeout(e.reflowTimeout), t ? e.reflowTimeout = setTimeout(a, 100) : a()), e.containerWidth = r, e.containerHeight = o)
        },
        initReflow: function() {
            var t = this,
            e = function(e) {
                t.reflow(e)
            };
            pi(de, "resize", e),
            pi(t, "destroy",
            function() {
                fi(de, "resize", e)
            })
        },
        setSize: function(t, e, i) {
            var n, r, o, s = this;
            s.isResizing += 1,
            o = function() {
                s && gi(s, "endResize", null,
                function() {
                    s.isResizing -= 1
                })
            },
            L(i, s),
            s.oldChartHeight = s.chartHeight,
            s.oldChartWidth = s.chartWidth,
            c(t) && (s.chartWidth = n = ve(0, fe(t)), s.hasUserSize = !!n),
            c(e) && (s.chartHeight = r = ve(0, fe(e))),
            (Y ? vi: f)(s.container, {
                width: n + Ue,
                height: r + Ue
            },
            Y),
            s.setChartSize(!0),
            s.renderer.setSize(n, r, i),
            s.maxTicks = null,
            hi(s.axes,
            function(t) {
                t.isDirty = !0,
                t.setScale()
            }),
            hi(s.series,
            function(t) {
                t.isDirty = !0
            }),
            s.isDirtyLegend = !0,
            s.isDirtyBox = !0,
            s.layOutTitles(),
            s.getMargins(),
            s.redraw(i),
            s.oldChartHeight = null,
            gi(s, "resize"),
            Y === !1 ? o() : setTimeout(o, Y && Y.duration || 500)
        },
        setChartSize: function(t) {
            var e, i, n, r, o, s, a, l = this,
            h = l.inverted,
            c = l.renderer,
            u = l.chartWidth,
            d = l.chartHeight,
            p = l.options.chart,
            f = l.spacing,
            g = l.clipOffset;
            l.plotLeft = n = fe(l.plotLeft),
            l.plotTop = r = fe(l.plotTop),
            l.plotWidth = o = ve(0, fe(u - n - l.marginRight)),
            l.plotHeight = s = ve(0, fe(d - r - l.marginBottom)),
            l.plotSizeX = h ? s: o,
            l.plotSizeY = h ? o: s,
            l.plotBorderWidth = p.plotBorderWidth || 0,
            l.spacingBox = c.spacingBox = {
                x: f[3],
                y: f[0],
                width: u - f[3] - f[1],
                height: d - f[0] - f[2]
            },
            l.plotBox = c.plotBox = {
                x: n,
                y: r,
                width: o,
                height: s
            },
            a = 2 * ge(l.plotBorderWidth / 2),
            e = me(ve(a, g[3]) / 2),
            i = me(ve(a, g[0]) / 2),
            l.clipBox = {
                x: e,
                y: i,
                width: ge(l.plotSizeX - ve(a, g[1]) / 2 - e),
                height: ve(0, ge(l.plotSizeY - ve(a, g[2]) / 2 - i))
            },
            t || hi(l.axes,
            function(t) {
                t.setAxisSize(),
                t.setAxisTranslation()
            })
        },
        resetMargins: function() {
            var t = this,
            e = t.spacing,
            i = t.margin;
            t.plotTop = p(i[0], e[0]),
            t.marginRight = p(i[1], e[1]),
            t.marginBottom = p(i[2], e[2]),
            t.plotLeft = p(i[3], e[3]),
            t.axisOffset = [0, 0, 0, 0],
            t.clipOffset = [0, 0, 0, 0]
        },
        drawChartBox: function() {
            var t, e, i = this,
            n = i.options.chart,
            r = i.renderer,
            o = i.chartWidth,
            s = i.chartHeight,
            a = i.chartBackground,
            l = i.plotBackground,
            h = i.plotBorder,
            c = i.plotBGImage,
            u = n.borderWidth || 0,
            d = n.backgroundColor,
            p = n.plotBackgroundColor,
            f = n.plotBackgroundImage,
            g = n.plotBorderWidth || 0,
            m = i.plotLeft,
            v = i.plotTop,
            y = i.plotWidth,
            b = i.plotHeight,
            x = i.plotBox,
            w = i.clipRect,
            k = i.clipBox;
            t = u + (n.shadow ? 8 : 0),
            (u || d) && (a ? a.animate(a.crisp({
                width: o - t,
                height: s - t
            })) : (e = {
                fill: d || Ge
            },
            u && (e.stroke = n.borderColor, e["stroke-width"] = u), i.chartBackground = r.rect(t / 2, t / 2, o - t, s - t, n.borderRadius, u).attr(e).addClass(Xe + "background").add().shadow(n.shadow))),
            p && (l ? l.animate(x) : i.plotBackground = r.rect(m, v, y, b, 0).attr({
                fill: p
            }).add().shadow(n.plotShadow)),
            f && (c ? c.animate(x) : i.plotBGImage = r.image(f, m, v, y, b).add()),
            w ? w.animate({
                width: k.width,
                height: k.height
            }) : i.clipRect = r.clipRect(k),
            g && (h ? h.animate(h.crisp({
                x: m,
                y: v,
                width: y,
                height: b,
                strokeWidth: -g
            })) : i.plotBorder = r.rect(m, v, y, b, 0, -g).attr({
                stroke: n.plotBorderColor,
                "stroke-width": g,
                fill: Ge,
                zIndex: 1
            }).add()),
            i.isDirtyBox = !1
        },
        propFromSeries: function() {
            var t, e, i, n = this,
            r = n.options.chart,
            o = n.options.series;
            hi(["inverted", "angular", "polar"],
            function(s) {
                for (t = ni[r.type || r.defaultSeriesType], i = n[s] || r[s] || t && t.prototype[s], e = o && o.length; ! i && e--;) t = ni[o[e].type],
                t && t.prototype[s] && (i = !0);
                n[s] = i
            })
        },
        linkSeries: function() {
            var t = this,
            e = t.series;
            hi(e,
            function(t) {
                t.linkedSeries.length = 0
            }),
            hi(e,
            function(e) {
                var i = e.options.linkedTo;
                n(i) && (i = ":previous" === i ? t.series[e.index - 1] : t.get(i), i && (i.linkedSeries.push(e), e.linkedParent = i))
            })
        },
        renderSeries: function() {
            hi(this.series,
            function(t) {
                t.translate(),
                t.setTooltipPoints && t.setTooltipPoints(),
                t.render()
            })
        },
        renderLabels: function() {
            var e = this,
            n = e.options.labels;
            n.items && hi(n.items,
            function(r) {
                var o = t(n.style, r.style),
                s = i(o.left) + e.plotLeft,
                a = i(o.top) + e.plotTop + 12;
                delete o.left,
                delete o.top,
                e.renderer.text(r.html, s, a).attr({
                    zIndex: 2
                }).css(o).add()
            })
        },
        render: function() {
            var t = this,
            e = t.axes,
            i = t.renderer,
            n = t.options;
            t.setTitle(),
            t.legend = new Hi(t, n.legend),
            t.getStacks(),
            hi(e,
            function(t) {
                t.setScale()
            }),
            t.getMargins(),
            t.maxTicks = null,
            hi(e,
            function(t) {
                t.setTickPositions(!0),
                t.setMaxTicks()
            }),
            t.adjustTickAmounts(),
            t.getMargins(),
            t.drawChartBox(),
            t.hasCartesianSeries && hi(e,
            function(t) {
                t.render()
            }),
            t.seriesGroup || (t.seriesGroup = i.g("series-group").attr({
                zIndex: 3
            }).add()),
            t.renderSeries(),
            t.renderLabels(),
            t.showCredits(n.credits),
            t.hasRendered = !0
        },
        showCredits: function(t) {
            t.enabled && !this.credits && (this.credits = this.renderer.text(t.text, 0, 0).on("click",
            function() {
                t.href && (location.href = t.href)
            }).attr({
                align: t.position.align,
                zIndex: 8
            }).css(t.style).add().align(t.position))
        },
        destroy: function() {
            var t, e = this,
            i = e.axes,
            n = e.series,
            r = e.container,
            o = r && r.parentNode;
            for (gi(e, "destroy"), Re[e.index] = H, He--, e.renderTo.removeAttribute("data-highcharts-chart"), fi(e), t = i.length; t--;) i[t] = i[t].destroy();
            for (t = n.length; t--;) n[t] = n[t].destroy();
            hi(["title", "subtitle", "chartBackground", "plotBackground", "plotBGImage", "plotBorder", "seriesGroup", "clipRect", "credits", "pointer", "scroller", "rangeSelector", "legend", "resetZoomButton", "tooltip", "renderer"],
            function(t) {
                var i = e[t];
                i && i.destroy && (e[t] = i.destroy())
            }),
            r && (r.innerHTML = "", fi(r), o && P(r));
            for (t in e) delete e[t]
        },
        isReadyToRender: function() {
            var t = this;
            return ! Me && de == de.top && "complete" !== ue.readyState || Ne && !de.canvg ? (Ne ? Ei.push(function() {
                t.firstRender()
            },
            t.options.global.canvasToolsURL) : ue.attachEvent("onreadystatechange",
            function() {
                ue.detachEvent("onreadystatechange", t.firstRender),
                "complete" === ue.readyState && t.firstRender()
            }), !1) : !0
        },
        firstRender: function() {
            var t = this,
            e = t.options,
            i = t.callback;
            t.isReadyToRender() && (t.getContainer(), gi(t, "init"), t.resetMargins(), t.setChartSize(), t.propFromSeries(), t.getAxes(), hi(e.series || [],
            function(e) {
                t.initSeries(e)
            }), t.linkSeries(), gi(t, "beforeRender"), ce.Pointer && (t.pointer = new Ni(t, e)), t.render(), t.renderer.draw(), i && i.apply(t, [t]), hi(t.callbacks,
            function(e) {
                e.apply(t, [t])
            }), t.cloneRenderTo(!0), gi(t, "load"))
        },
        splashArray: function(t, e) {
            var i = e[t],
            n = r(i) ? i: [i, i, i, i];
            return [p(e[t + "Top"], n[0]), p(e[t + "Right"], n[1]), p(e[t + "Bottom"], n[2]), p(e[t + "Left"], n[3])]
        }
    },
    O.prototype.callbacks = [];
    var zi = ce.CenteredSeriesMixin = {
        getCenter: function() {
            var t, e, n = this.options,
            r = this.chart,
            o = 2 * (n.slicedOffset || 0),
            s = r.plotWidth - 2 * o,
            a = r.plotHeight - 2 * o,
            l = n.center,
            h = [p(l[0], "50%"), p(l[1], "50%"), n.size || "100%", n.innerSize || 0],
            c = ye(s, a);
            return di(h,
            function(n, r) {
                return e = /%$/.test(n),
                t = 2 > r || 2 === r && e,
                (e ? [s, a, c, c][r] * i(n) / 100 : n) + (t ? o: 0)
            })
        }
    },
    ji = function() {};
    ji.prototype = {
        init: function(t, e, i) {
            var n, r = this;
            return r.series = t,
            r.applyOptions(e, i),
            r.pointAttr = {},
            t.options.colorByPoint && (n = t.options.colors || t.chart.options.colors, r.color = r.color || n[t.colorCounter++], t.colorCounter === n.length && (t.colorCounter = 0)),
            t.chart.pointCount++,
            r
        },
        applyOptions: function(e, i) {
            var n = this,
            r = n.series,
            o = r.options.pointValKey || r.pointValKey;
            return e = ji.prototype.optionsToObject.call(this, e),
            t(n, e),
            n.options = n.options ? t(n.options, e) : e,
            o && (n.y = n[o]),
            n.x === H && r && (n.x = i === H ? r.autoIncrement() : i),
            n
        },
        optionsToObject: function(t) {
            var e, i = {},
            n = this.series,
            r = n.pointArrayMap || ["y"],
            s = r.length,
            a = 0,
            l = 0;
            if ("number" == typeof t || null === t) i[r[0]] = t;
            else if (o(t)) for (t.length > s && (e = typeof t[0], "string" === e ? i.name = t[0] : "number" === e && (i.x = t[0]), a++); s > l;) i[r[l++]] = t[a++];
            else "object" == typeof t && (i = t, t.dataLabels && (n._hasPointLabels = !0), t.marker && (n._hasPointMarkers = !0));
            return i
        },
        destroy: function() {
            var t, e = this,
            i = e.series,
            n = i.chart,
            r = n.hoverPoints;
            n.pointCount--,
            r && (e.setState(), h(r, e), r.length || (n.hoverPoints = null)),
            e === n.hoverPoint && e.onMouseOut(),
            (e.graphic || e.dataLabel) && (fi(e), e.destroyElements()),
            e.legendItem && n.legend.destroyItem(e);
            for (t in e) e[t] = null
        },
        destroyElements: function() {
            for (var t, e = this,
            i = ["graphic", "dataLabel", "dataLabelUpper", "group", "connector", "shadowGroup"], n = 6; n--;) t = i[n],
            e[t] && (e[t] = e[t].destroy())
        },
        getLabelConfig: function() {
            var t = this;
            return {
                x: t.category,
                y: t.y,
                key: t.name || t.category,
                series: t.series,
                point: t,
                percentage: t.percentage,
                total: t.total || t.stackTotal
            }
        },
        tooltipFormatter: function(t) {
            var e = this.series,
            i = e.tooltipOptions,
            n = p(i.valueDecimals, ""),
            r = i.valuePrefix || "",
            o = i.valueSuffix || "";
            return hi(e.pointArrayMap || ["y"],
            function(e) {
                e = "{point." + e,
                (r || o) && (t = t.replace(e + "}", r + e + "}" + o)),
                t = t.replace(e + "}", e + ":,." + n + "f}")
            }),
            w(t, {
                point: this,
                series: this.series
            })
        },
        firePointEvent: function(t, e, i) {
            var n = this,
            r = this.series,
            o = r.options; (o.point.events[t] || n.options && n.options.events && n.options.events[t]) && this.importEvents(),
            "click" === t && o.allowPointSelect && (i = function(t) {
                n.select(null, t.ctrlKey || t.metaKey || t.shiftKey)
            }),
            gi(this, t, e, i)
        }
    };
    var Wi = function() {};
    Wi.prototype = {
        isCartesian: !0,
        type: "line",
        pointClass: ji,
        sorted: !0,
        requireSorting: !0,
        pointAttrToOptions: {
            stroke: "lineColor",
            "stroke-width": "lineWidth",
            fill: "fillColor",
            r: "radius"
        },
        axisTypes: ["xAxis", "yAxis"],
        colorCounter: 0,
        parallelArrays: ["x", "y"],
        init: function(e, i) {
            var n, r, o = this,
            s = e.series,
            a = function(t, e) {
                return p(t.options.index, t._i) - p(e.options.index, e._i)
            };
            o.chart = e,
            o.options = i = o.setOptions(i),
            o.linkedSeries = [],
            o.bindAxes(),
            t(o, {
                name: i.name,
                state: Je,
                pointAttr: {},
                visible: i.visible !== !1,
                selected: i.selected === !0
            }),
            Ne && (i.animation = !1),
            r = i.events;
            for (n in r) pi(o, n, r[n]); (r && r.click || i.point && i.point.events && i.point.events.click || i.allowPointSelect) && (e.runTrackerClick = !0),
            o.getColor(),
            o.getSymbol(),
            hi(o.parallelArrays,
            function(t) {
                o[t + "Data"] = []
            }),
            o.setData(i.data, !1),
            o.isCartesian && (e.hasCartesianSeries = !0),
            s.push(o),
            o._i = s.length - 1,
            C(s, a),
            this.yAxis && C(this.yAxis.series, a),
            hi(s,
            function(t, e) {
                t.index = e,
                t.name = t.name || "Series " + (e + 1)
            })
        },
        bindAxes: function() {
            var t, e = this,
            i = e.options,
            n = e.chart;
            hi(e.axisTypes || [],
            function(r) {
                hi(n[r],
                function(n) {
                    t = n.options,
                    (i[r] === t.index || i[r] !== H && i[r] === t.id || i[r] === H && 0 === t.index) && (n.series.push(e), e[r] = n, n.isDirty = !0)
                }),
                e[r] || e.optionalAxis === r || U(18, !0)
            })
        },
        updateParallelArrays: function(t, e) {
            var i = t.series,
            n = arguments,
            r = "number" == typeof e ?
            function(n) {
                var r = "y" === n && i.toYData ? i.toYData(t) : t[n];
                i[n + "Data"][e] = r
            }: function(t) {
                Array.prototype[e].apply(i[t + "Data"], Array.prototype.slice.call(n, 2))
            };
            hi(i.parallelArrays, r)
        },
        autoIncrement: function() {
            var t = this,
            e = t.options,
            i = t.xIncrement;
            return i = p(i, e.pointStart, 0),
            t.pointInterval = p(t.pointInterval, e.pointInterval, 1),
            t.xIncrement = i + t.pointInterval,
            i
        },
        getSegments: function() {
            var t, e = this,
            i = -1,
            n = [],
            r = e.points,
            o = r.length;
            if (o) if (e.options.connectNulls) {
                for (t = o; t--;) null === r[t].y && r.splice(t, 1);
                r.length && (n = [r])
            } else hi(r,
            function(t, e) {
                null === t.y ? (e > i + 1 && n.push(r.slice(i + 1, e)), i = e) : e === o - 1 && n.push(r.slice(i + 1, e + 1))
            });
            e.segments = n
        },
        setOptions: function(t) {
            var i, n = this.chart,
            r = n.options,
            o = r.plotOptions,
            s = n.userOptions || {},
            a = s.plotOptions || {},
            l = o[this.type];
            return this.userOptions = t,
            i = e(l, o.series, t),
            this.tooltipOptions = e(W.tooltip, W.plotOptions[this.type].tooltip, s.tooltip, a.series && a.series.tooltip, a[this.type] && a[this.type].tooltip, t.tooltip),
            null === l.marker && delete i.marker,
            i
        },
        getCyclic: function(t, e, i) {
            var n, r = this.userOptions,
            o = "_" + t + "Index",
            s = t + "Counter";
            e || (c(r[o]) ? n = r[o] : (r[o] = n = this.chart[s] % i.length, this.chart[s] += 1), e = i[n]),
            this[t] = e
        },
        getColor: function() {
            this.options.colorByPoint || this.getCyclic("color", this.options.color || xi[this.type].color, this.chart.options.colors)
        },
        getSymbol: function() {
            var t = this.options.marker;
            this.getCyclic("symbol", t.symbol, this.chart.options.symbols),
            /^url/.test(this.symbol) && (t.radius = 0)
        },
        drawLegendSymbol: Bi.drawLineMarker,
        setData: function(t, e, i, r) {
            var a, l, h, c = this,
            u = c.points,
            d = u && u.length || 0,
            f = c.options,
            g = c.chart,
            m = null,
            v = c.xAxis,
            y = v && !!v.categories,
            b = c.tooltipPoints,
            x = f.turboThreshold,
            w = this.xData,
            k = this.yData,
            S = c.pointArrayMap,
            C = S && S.length;
            if (t = t || [], a = t.length, e = p(e, !0), r === !1 || !a || d !== a || c.cropped || c.hasGroupedData) {
                if (c.xIncrement = null, c.pointRange = y ? 1 : f.pointRange, c.colorCounter = 0, hi(this.parallelArrays,
                function(t) {
                    c[t + "Data"].length = 0
                }), x && a > x) {
                    for (l = 0; null === m && a > l;) m = t[l],
                    l++;
                    if (s(m)) {
                        var T = p(f.pointStart, 0),
                        D = p(f.pointInterval, 1);
                        for (l = 0; a > l; l++) w[l] = T,
                        k[l] = t[l],
                        T += D;
                        c.xIncrement = T
                    } else if (o(m)) if (C) for (l = 0; a > l; l++) h = t[l],
                    w[l] = h[0],
                    k[l] = h.slice(1, C + 1);
                    else for (l = 0; a > l; l++) h = t[l],
                    w[l] = h[0],
                    k[l] = h[1];
                    else U(12)
                } else for (l = 0; a > l; l++) t[l] !== H && (h = {
                    series: c
                },
                c.pointClass.prototype.applyOptions.apply(h, [t[l]]), c.updateParallelArrays(h, l), y && h.name && (v.names[h.x] = h.name));
                for (n(k[0]) && U(14, !0), c.data = [], c.options.data = t, l = d; l--;) u[l] && u[l].destroy && u[l].destroy();
                b && (b.length = 0),
                v && (v.minRange = v.userMinRange),
                c.isDirty = c.isDirtyData = g.isDirtyBox = !0,
                i = !1
            } else hi(t,
            function(t, e) {
                u[e].update(t, !1, null, !1)
            });
            e && g.redraw(i)
        },
        processData: function(t) {
            var e, i, n, r, o, s, a, l, h = this,
            c = h.xData,
            u = h.yData,
            d = c.length,
            p = 0,
            f = h.xAxis,
            g = h.options,
            m = g.cropThreshold,
            v = 0,
            y = h.isCartesian;
            if (y && !h.isDirty && !f.isDirty && !h.yAxis.isDirty && !t) return ! 1;
            for (f && (s = f.getExtremes(), a = s.min, l = s.max), y && h.sorted && (!m || d > m || h.forceCrop) && (c[d - 1] < a || c[0] > l ? (c = [], u = []) : (c[0] < a || c[d - 1] > l) && (e = this.cropData(h.xData, h.yData, a, l), c = e.xData, u = e.yData, p = e.start, i = !0, v = c.length)), o = c.length - 1; o >= 0; o--) n = c[o] - c[o - 1],
            !i && c[o] > a && c[o] < l && v++,
            n > 0 && (r === H || r > n) ? r = n: 0 > n && h.requireSorting && U(15);
            h.cropped = i,
            h.cropStart = p,
            h.processedXData = c,
            h.processedYData = u,
            h.activePointCount = v,
            null === g.pointRange && (h.pointRange = r || 1),
            h.closestPointRange = r
        },
        cropData: function(t, e, i, n) {
            var r, o = t.length,
            s = 0,
            a = o,
            l = p(this.cropShoulder, 1);
            for (r = 0; o > r; r++) if (t[r] >= i) {
                s = ve(0, r - l);
                break
            }
            for (; o > r; r++) if (t[r] > n) {
                a = r + l;
                break
            }
            return {
                xData: t.slice(s, a),
                yData: e.slice(s, a),
                start: s,
                end: a
            }
        },
        generatePoints: function() {
            var t, e, i, n, r = this,
            o = r.options,
            s = o.data,
            a = r.data,
            l = r.processedXData,
            h = r.processedYData,
            c = r.pointClass,
            u = l.length,
            p = r.cropStart || 0,
            f = r.hasGroupedData,
            g = [];
            if (!a && !f) {
                var m = [];
                m.length = s.length,
                a = r.data = m
            }
            for (n = 0; u > n; n++) e = p + n,
            f ? g[n] = (new c).init(r, [l[n]].concat(d(h[n]))) : (a[e] ? i = a[e] : s[e] !== H && (a[e] = i = (new c).init(r, s[e], l[n])), g[n] = i),
            g[n].index = e;
            if (a && (u !== (t = a.length) || f)) for (n = 0; t > n; n++) n !== p || f || (n += u),
            a[n] && (a[n].destroyElements(), a[n].plotX = H);
            r.data = a,
            r.points = g
        },
        getExtremes: function(t) {
            var e, i, n, r, o, s, a, l, h, c = this.xAxis,
            u = this.yAxis,
            d = this.processedXData,
            f = [],
            g = 0,
            m = c.getExtremes(),
            v = m.min,
            y = m.max;
            for (t = t || this.stackedYData || this.processedYData, e = t.length, l = 0; e > l; l++) if (s = d[l], a = t[l], i = null !== a && a !== H && (!u.isLog || a.length || a > 0), n = this.getExtremesFromAll || this.cropped || (d[l + 1] || s) >= v && (d[l - 1] || s) <= y, i && n) if (h = a.length) for (; h--;) null !== a[h] && (f[g++] = a[h]);
            else f[g++] = a;
            this.dataMin = p(r, T(f)),
            this.dataMax = p(o, D(f))
        },
        translate: function() {
            this.processedXData || this.processData(),
            this.generatePoints();
            var t, e = this,
            i = e.options,
            n = i.stacking,
            r = e.xAxis,
            o = r.categories,
            a = e.yAxis,
            l = e.points,
            h = l.length,
            u = !!e.modifyValue,
            d = i.pointPlacement,
            f = "between" === d || s(d),
            g = i.threshold;
            for (t = 0; h > t; t++) {
                var m, v, y = l[t],
                b = y.x,
                x = y.y,
                w = y.low,
                k = n && a.stacks[(e.negStacks && g > x ? "-": "") + e.stackKey];
                a.isLog && 0 >= x && (y.y = x = null, U(10)),
                y.plotX = r.translate(b, 0, 0, 0, 1, d, "flags" === this.type),
                n && e.visible && k && k[b] && (m = k[b], v = m.points[e.index + "," + t], w = v[0], x = v[1], 0 === w && (w = p(g, a.min)), a.isLog && 0 >= w && (w = null), y.total = y.stackTotal = m.total, y.percentage = m.total && y.y / m.total * 100, y.stackY = x, m.setOffset(e.pointXOffset || 0, e.barW || 0)),
                y.yBottom = c(w) ? a.translate(w, 0, 1, 0, 1) : null,
                u && (x = e.modifyValue(x, y)),
                y.plotY = "number" == typeof x && 1 / 0 !== x ? a.translate(x, 0, 1, 0, 1) : H,
                y.clientX = f ? r.translate(b, 0, 0, 0, 1) : y.plotX,
                y.negative = y.y < (g || 0),
                y.category = o && o[y.x] !== H ? o[y.x] : y.x
            }
            e.getSegments()
        },
        animate: function(e) {
            var i, n, o, s = this,
            a = s.chart,
            l = a.renderer,
            h = s.options.animation,
            c = s.clipBox || a.clipBox,
            u = a.inverted;
            h && !r(h) && (h = xi[s.type].animation),
            o = ["_sharedClip", h.duration, h.easing, c.height].join(","),
            e ? (i = a[o], n = a[o + "m"], i || (a[o] = i = l.clipRect(t(c, {
                width: 0
            })), a[o + "m"] = n = l.clipRect( - 99, u ? -a.plotLeft: -a.plotTop, 99, u ? a.chartWidth: a.chartHeight)), s.group.clip(i), s.markerGroup.clip(n), s.sharedClipKey = o) : (i = a[o], i && i.animate({
                width: a.plotSizeX
            },
            h), a[o + "m"] && a[o + "m"].animate({
                width: a.plotSizeX + 99
            },
            h), s.animate = null)
        },
        afterAnimate: function() {
            var t = this.chart,
            e = this.sharedClipKey,
            i = this.group,
            n = this.clipBox;
            i && this.options.clip !== !1 && (e && n || i.clip(n ? t.renderer.clipRect(n) : t.clipRect), this.markerGroup.clip()),
            gi(this, "afterAnimate"),
            setTimeout(function() {
                e && t[e] && (n || (t[e] = t[e].destroy()), t[e + "m"] && (t[e + "m"] = t[e + "m"].destroy()))
            },
            100)
        },
        drawPoints: function() {
            var e, i, n, r, o, s, a, l, h, c, u, d, f, g = this,
            m = g.points,
            v = g.chart,
            y = g.options,
            b = y.marker,
            x = g.pointAttr[""],
            w = g.markerGroup,
            k = p(b.enabled, !g.requireSorting || g.activePointCount < .5 * g.xAxis.len / b.radius);
            if (b.enabled !== !1 || g._hasPointMarkers) for (r = m.length; r--;) o = m[r],
            i = ge(o.plotX),
            n = o.plotY,
            h = o.graphic,
            c = o.marker || {},
            u = !!o.marker,
            d = k && c.enabled === H || c.enabled,
            f = v.isInsidePlot(fe(i), n, v.inverted),
            d && n !== H && !isNaN(n) && null !== o.y ? (e = o.pointAttr[o.selected ? ei: Je] || x, s = e.r, a = p(c.symbol, g.symbol), l = 0 === a.indexOf("url"), h ? h[f ? "show": "hide"](!0).animate(t({
                x: i - s,
                y: n - s
            },
            h.symbolName ? {
                width: 2 * s,
                height: 2 * s
            }: {})) : f && (s > 0 || l) && (o.graphic = h = v.renderer.symbol(a, i - s, n - s, 2 * s, 2 * s, u ? c: b).attr(e).add(w))) : h && (o.graphic = h.destroy())
        },
        convertAttribs: function(t, e, i, n) {
            var r, o, s = this.pointAttrToOptions,
            a = {};
            t = t || {},
            e = e || {},
            i = i || {},
            n = n || {};
            for (r in s) o = s[r],
            a[r] = p(t[o], e[r], i[r], n[r]);
            return a
        },
        getAttribs: function() {
            var e, i, n, r, o, s, a = this,
            l = a.options,
            h = xi[a.type].marker ? l.marker: l,
            u = h.states,
            d = u[ti],
            p = a.color,
            f = {
                stroke: p,
                fill: p
            },
            g = a.points || [],
            m = [],
            v = a.pointAttrToOptions,
            y = a.hasPointSpecificOptions,
            b = l.negativeColor,
            x = h.lineColor,
            w = h.fillColor,
            k = l.turboThreshold;
            if (l.marker ? (d.radius = d.radius || h.radius + d.radiusPlus, d.lineWidth = d.lineWidth || h.lineWidth + d.lineWidthPlus) : d.color = d.color || Ti(d.color || p).brighten(d.brightness).get(), m[Je] = a.convertAttribs(h, f), hi([ti, ei],
            function(t) {
                m[t] = a.convertAttribs(u[t], m[Je])
            }), a.pointAttr = m, i = g.length, !k || k > i || y) for (; i--;) {
                if (n = g[i], h = n.options && n.options.marker || n.options, h && h.enabled === !1 && (h.radius = 0), n.negative && b && (n.color = n.fillColor = b), y = l.colorByPoint || n.color, n.options) for (s in v) c(h[v[s]]) && (y = !0);
                y ? (h = h || {},
                r = [], u = h.states || {},
                e = u[ti] = u[ti] || {},
                l.marker || (e.color = e.color || !n.options.color && d.color || Ti(n.color).brighten(e.brightness || d.brightness).get()), o = {
                    color: n.color
                },
                w || (o.fillColor = n.color), x || (o.lineColor = n.color), r[Je] = a.convertAttribs(t(o, h), m[Je]), r[ti] = a.convertAttribs(u[ti], m[ti], r[Je]), r[ei] = a.convertAttribs(u[ei], m[ei], r[Je])) : r = m,
                n.pointAttr = r
            }
        },
        destroy: function() {
            var t, e, i, n, r, o = this,
            s = o.chart,
            a = /AppleWebKit\/533/.test(Ce),
            l = o.data || [];
            for (gi(o, "destroy"), fi(o), hi(o.axisTypes || [],
            function(t) {
                r = o[t],
                r && (h(r.series, o), r.isDirty = r.forceRedraw = !0)
            }), o.legendItem && o.chart.legend.destroyItem(o), e = l.length; e--;) i = l[e],
            i && i.destroy && i.destroy();
            o.points = null,
            clearTimeout(o.animationTimeout),
            hi(["area", "graph", "dataLabelsGroup", "group", "markerGroup", "tracker", "graphNeg", "areaNeg", "posClip", "negClip"],
            function(e) {
                o[e] && (t = a && "group" === e ? "hide": "destroy", o[e][t]())
            }),
            s.hoverSeries === o && (s.hoverSeries = null),
            h(s.series, o);
            for (n in o) delete o[n]
        },
        getSegmentPath: function(t) {
            var e = this,
            i = [],
            n = e.options.step;
            return hi(t,
            function(r, o) {
                var s, a = r.plotX,
                l = r.plotY;
                e.getPointSpline ? i.push.apply(i, e.getPointSpline(t, r, o)) : (i.push(o ? Qe: Ke), n && o && (s = t[o - 1], "right" === n ? i.push(s.plotX, l) : "center" === n ? i.push((s.plotX + a) / 2, s.plotY, (s.plotX + a) / 2, l) : i.push(a, s.plotY)), i.push(r.plotX, r.plotY))
            }),
            i
        },
        getGraphPath: function() {
            var t, e = this,
            i = [],
            n = [];
            return hi(e.segments,
            function(r) {
                t = e.getSegmentPath(r),
                r.length > 1 ? i = i.concat(t) : n.push(r[0])
            }),
            e.singlePoints = n,
            e.graphPath = i,
            i
        },
        drawGraph: function() {
            var t = this,
            e = this.options,
            i = [["graph", e.lineColor || this.color]],
            n = e.lineWidth,
            r = e.dashStyle,
            o = "square" !== e.linecap,
            s = this.getGraphPath(),
            a = e.negativeColor;
            a && i.push(["graphNeg", a]),
            hi(i,
            function(i, a) {
                var l, h = i[0],
                c = t[h];
                c ? (yi(c), c.animate({
                    d: s
                })) : n && s.length && (l = {
                    stroke: i[1],
                    "stroke-width": n,
                    fill: Ge,
                    zIndex: 1
                },
                r ? l.dashstyle = r: o && (l["stroke-linecap"] = l["stroke-linejoin"] = "round"), t[h] = t.chart.renderer.path(s).attr(l).add(t.group).shadow(!a && e.shadow))
            })
        },
        clipNeg: function() {
            var t, e, i, n, r, o = this.options,
            s = this.chart,
            a = s.renderer,
            l = o.negativeColor || o.negativeFillColor,
            h = this.graph,
            c = this.area,
            u = this.posClip,
            d = this.negClip,
            p = s.chartWidth,
            f = s.chartHeight,
            g = ve(p, f),
            m = this.yAxis;
            l && (h || c) && (t = fe(m.toPixels(o.threshold || 0, !0)), 0 > t && (g -= t), n = {
                x: 0,
                y: 0,
                width: g,
                height: t
            },
            r = {
                x: 0,
                y: t,
                width: g,
                height: g
            },
            s.inverted && (n.height = r.y = s.plotWidth - t, a.isVML && (n = {
                x: s.plotWidth - t - s.plotLeft,
                y: 0,
                width: p,
                height: f
            },
            r = {
                x: t + s.plotLeft - p,
                y: 0,
                width: s.plotLeft + t,
                height: p
            })), m.reversed ? (e = r, i = n) : (e = n, i = r), u ? (u.animate(e), d.animate(i)) : (this.posClip = u = a.clipRect(e), this.negClip = d = a.clipRect(i), h && this.graphNeg && (h.clip(u), this.graphNeg.clip(d)), c && (c.clip(u), this.areaNeg.clip(d))))
        },
        invertGroups: function() {
            function t() {
                var t = {
                    width: e.yAxis.len,
                    height: e.xAxis.len
                };
                hi(["group", "markerGroup"],
                function(i) {
                    e[i] && e[i].attr(t).invert()
                })
            }
            var e = this,
            i = e.chart;
            e.xAxis && (pi(i, "resize", t), pi(e, "destroy",
            function() {
                fi(i, "resize", t)
            }), t(), e.invertGroups = t)
        },
        plotGroup: function(t, e, i, n, r) {
            var o = this[t],
            s = !o;
            return s && (this[t] = o = this.chart.renderer.g(e).attr({
                visibility: i,
                zIndex: n || .1
            }).add(r)),
            o[s ? "attr": "animate"](this.getPlotBox()),
            o
        },
        getPlotBox: function() {
            var t = this.chart,
            e = this.xAxis,
            i = this.yAxis;
            return t.inverted && (e = i, i = this.xAxis),
            {
                translateX: e ? e.left: t.plotLeft,
                translateY: i ? i.top: t.plotTop,
                scaleX: 1,
                scaleY: 1
            }
        },
        render: function() {
            var t, e = this,
            i = e.chart,
            n = e.options,
            r = n.animation,
            o = r && !!e.animate && i.renderer.isSVG && p(r.duration, 500) || 0,
            s = e.visible ? Ve: Ye,
            a = n.zIndex,
            l = e.hasRendered,
            h = i.seriesGroup;
            t = e.plotGroup("group", "series", s, a, h),
            e.markerGroup = e.plotGroup("markerGroup", "markers", s, a, h),
            o && e.animate(!0),
            e.getAttribs(),
            t.inverted = e.isCartesian ? i.inverted: !1,
            e.drawGraph && (e.drawGraph(), e.clipNeg()),
            hi(e.points,
            function(t) {
                t.redraw && t.redraw()
            }),
            e.drawDataLabels && e.drawDataLabels(),
            e.visible && e.drawPoints(),
            e.drawTracker && e.options.enableMouseTracking !== !1 && e.drawTracker(),
            i.inverted && e.invertGroups(),
            n.clip === !1 || e.sharedClipKey || l || t.clip(i.clipRect),
            o && e.animate(),
            l || (o ? e.animationTimeout = setTimeout(function() {
                e.afterAnimate()
            },
            o) : e.afterAnimate()),
            e.isDirty = e.isDirtyData = !1,
            e.hasRendered = !0
        },
        redraw: function() {
            var t = this,
            e = t.chart,
            i = t.isDirtyData,
            n = t.group,
            r = t.xAxis,
            o = t.yAxis;
            n && (e.inverted && n.attr({
                width: e.plotWidth,
                height: e.plotHeight
            }), n.animate({
                translateX: p(r && r.left, e.plotLeft),
                translateY: p(o && o.top, e.plotTop)
            })),
            t.translate(),
            t.setTooltipPoints && t.setTooltipPoints(!0),
            t.render(),
            i && gi(t, "updatedData")
        }
    },
    R.prototype = {
        destroy: function() {
            A(this, this.axis)
        },
        render: function(t) {
            var e = this.options,
            i = e.format,
            n = i ? w(i, this) : e.formatter.call(this);
            this.label ? this.label.attr({
                text: n,
                visibility: Ye
            }) : this.label = this.axis.chart.renderer.text(n, null, null, e.useHTML).css(e.style).attr({
                align: this.textAlign,
                rotation: e.rotation,
                visibility: Ye
            }).add(t)
        },
        setOffset: function(t, e) {
            var i, n = this,
            r = n.axis,
            o = r.chart,
            s = o.inverted,
            a = this.isNegative,
            l = r.translate(r.usePercentage ? 100 : this.total, 0, 0, 0, 1),
            h = r.translate(0),
            c = be(l - h),
            u = o.xAxis[0].translate(this.x) + t,
            d = o.plotHeight,
            p = {
                x: s ? a ? l: l - c: u,
                y: s ? d - u - e: a ? d - l - c: d - l,
                width: s ? c: e,
                height: s ? e: c
            },
            f = this.label;
            f && (f.align(this.alignOptions, null, p), i = f.alignAttr, f[this.options.crop === !1 || o.isInsidePlot(i.x, i.y) ? "show": "hide"](!0))
        }
    },
    $.prototype.buildStacks = function() {
        var t = this.series,
        e = p(this.options.reversedStacks, !0),
        i = t.length;
        if (!this.isXAxis) {
            for (this.usePercentage = !1; i--;) t[e ? i: t.length - i - 1].setStackedPoints();
            if (this.usePercentage) for (i = 0; i < t.length; i++) t[i].setPercentStacks()
        }
    },
    $.prototype.renderStackTotals = function() {
        var t, e, i, n = this,
        r = n.chart,
        o = r.renderer,
        s = n.stacks,
        a = n.stackTotalGroup;
        a || (n.stackTotalGroup = a = o.g("stack-labels").attr({
            visibility: Ve,
            zIndex: 6
        }).add()),
        a.translate(r.plotLeft, r.plotTop);
        for (t in s) {
            e = s[t];
            for (i in e) e[i].render(a)
        }
    },
    Wi.prototype.setStackedPoints = function() {
        if (this.options.stacking && (this.visible === !0 || this.chart.options.chart.ignoreHiddenSeries === !1)) {
            var t, e, i, n, r, o, s, a, l = this,
            h = l.processedXData,
            c = l.processedYData,
            u = [],
            d = c.length,
            p = l.options,
            f = p.threshold,
            g = p.stack,
            m = p.stacking,
            v = l.stackKey,
            y = "-" + v,
            b = l.negStacks,
            x = l.yAxis,
            w = x.stacks,
            k = x.oldStacks;
            for (o = 0; d > o; o++) s = h[o],
            a = c[o],
            r = l.index + "," + o,
            t = b && f > a,
            n = t ? y: v,
            w[n] || (w[n] = {}),
            w[n][s] || (k[n] && k[n][s] ? (w[n][s] = k[n][s], w[n][s].total = null) : w[n][s] = new R(x, x.options.stackLabels, t, s, g)),
            e = w[n][s],
            e.points[r] = [e.cum || 0],
            "percent" === m ? (i = t ? v: y, b && w[i] && w[i][s] ? (i = w[i][s], e.total = i.total = ve(i.total, e.total) + be(a) || 0) : e.total = _(e.total + (be(a) || 0))) : e.total = _(e.total + (a || 0)),
            e.cum = (e.cum || 0) + (a || 0),
            e.points[r].push(e.cum),
            u[o] = e.cum;
            "percent" === m && (x.usePercentage = !0),
            this.stackedYData = u,
            x.oldStacks = {}
        }
    },
    Wi.prototype.setPercentStacks = function() {
        var t = this,
        e = t.stackKey,
        i = t.yAxis.stacks,
        n = t.processedXData;
        hi([e, "-" + e],
        function(e) {
            for (var r, o, s, a, l = n.length; l--;) r = n[l],
            o = i[e] && i[e][r],
            s = o && o.points[t.index + "," + l],
            s && (a = o.total ? 100 / o.total: 0, s[0] = _(s[0] * a), s[1] = _(s[1] * a), t.stackedYData[l] = s[1])
        })
    },
    t(O.prototype, {
        addSeries: function(t, e, i) {
            var n, r = this;
            return t && (e = p(e, !0), gi(r, "addSeries", {
                options: t
            },
            function() {
                n = r.initSeries(t),
                r.isDirtyLegend = !0,
                r.linkSeries(),
                e && r.redraw(i)
            })),
            n
        },
        addAxis: function(t, i, n, r) {
            var o, s = i ? "xAxis": "yAxis",
            a = this.options;
            o = new $(this, e(t, {
                index: this[s].length,
                isX: i
            })),
            a[s] = d(a[s] || {}),
            a[s].push(t),
            p(n, !0) && this.redraw(r)
        },
        showLoading: function(e) {
            var i = this,
            n = i.options,
            r = i.loadingDiv,
            o = n.loading,
            s = function() {
                r && f(r, {
                    left: i.plotLeft + Ue,
                    top: i.plotTop + Ue,
                    width: i.plotWidth + Ue,
                    height: i.plotHeight + Ue
                })
            };
            r || (i.loadingDiv = r = g(je, {
                className: Xe + "loading"
            },
            t(o.style, {
                zIndex: 10,
                display: Ge
            }), i.container), i.loadingSpan = g("span", null, o.labelStyle, r), pi(i, "redraw", s)),
            i.loadingSpan.innerHTML = e || n.lang.loading,
            i.loadingShown || (f(r, {
                opacity: 0,
                display: ""
            }), vi(r, {
                opacity: o.style.opacity
            },
            {
                duration: o.showDuration || 0
            }), i.loadingShown = !0),
            s()
        },
        hideLoading: function() {
            var t = this.options,
            e = this.loadingDiv;
            e && vi(e, {
                opacity: 0
            },
            {
                duration: t.loading.hideDuration || 100,
                complete: function() {
                    f(e, {
                        display: Ge
                    })
                }
            }),
            this.loadingShown = !1
        }
    }),
    t(ji.prototype, {
        update: function(t, e, i, n) {
            function s() {
                l.applyOptions(t),
                r(t) && !o(t) && (l.redraw = function() {
                    c && (t && t.marker && t.marker.symbol ? l.graphic = c.destroy() : c.attr(l.pointAttr[l.state || ""])),
                    t && t.dataLabels && l.dataLabel && (l.dataLabel = l.dataLabel.destroy()),
                    l.redraw = null
                }),
                a = l.index,
                h.updateParallelArrays(l, a),
                d.data[a] = l.options,
                h.isDirty = h.isDirtyData = !0,
                !h.fixedBox && h.hasCartesianSeries && (u.isDirtyBox = !0),
                "point" === d.legendType && u.legend.destroyItem(l),
                e && u.redraw(i)
            }
            var a, l = this,
            h = l.series,
            c = l.graphic,
            u = h.chart,
            d = h.options;
            e = p(e, !0),
            n === !1 ? s() : l.firePointEvent("update", {
                options: t
            },
            s)
        },
        remove: function(t, e) {
            var i, n = this,
            r = n.series,
            o = r.points,
            s = r.chart,
            a = r.data;
            L(e, s),
            t = p(t, !0),
            n.firePointEvent("remove", null,
            function() {
                i = li(n, a),
                a.length === o.length && o.splice(i, 1),
                a.splice(i, 1),
                r.options.data.splice(i, 1),
                r.updateParallelArrays(n, "splice", i, 1),
                n.destroy(),
                r.isDirty = !0,
                r.isDirtyData = !0,
                t && s.redraw()
            })
        }
    }),
    t(Wi.prototype, {
        addPoint: function(t, e, i, n) {
            var r, o, s, a, l = this,
            h = l.options,
            c = l.data,
            u = l.graph,
            d = l.area,
            f = l.chart,
            g = l.xAxis && l.xAxis.names,
            m = u && u.shift || 0,
            v = h.data,
            y = l.xData;
            if (L(n, f), i && hi([u, d, l.graphNeg, l.areaNeg],
            function(t) {
                t && (t.shift = m + 1)
            }), d && (d.isArea = !0), e = p(e, !0), r = {
                series: l
            },
            l.pointClass.prototype.applyOptions.apply(r, [t]), s = r.x, a = y.length, l.requireSorting && s < y[a - 1]) for (o = !0; a && y[a - 1] > s;) a--;
            l.updateParallelArrays(r, "splice", a, 0, 0),
            l.updateParallelArrays(r, a),
            g && r.name && (g[s] = r.name),
            v.splice(a, 0, t),
            o && (l.data.splice(a, 0, null), l.processData()),
            "point" === h.legendType && l.generatePoints(),
            i && (c[0] && c[0].remove ? c[0].remove(!1) : (c.shift(), l.updateParallelArrays(r, "shift"), v.shift())),
            l.isDirty = !0,
            l.isDirtyData = !0,
            e && (l.getAttribs(), f.redraw())
        },
        remove: function(t, e) {
            var i = this,
            n = i.chart;
            t = p(t, !0),
            i.isRemoving || (i.isRemoving = !0, gi(i, "remove", null,
            function() {
                i.destroy(),
                n.isDirtyLegend = n.isDirtyBox = !0,
                n.linkSeries(),
                t && n.redraw(e)
            })),
            i.isRemoving = !1
        },
        update: function(i, n) {
            var r, o = this,
            s = this.chart,
            a = this.userOptions,
            l = this.type,
            h = ni[l].prototype,
            c = ["group", "markerGroup", "dataLabelsGroup"];
            hi(c,
            function(t) {
                c[t] = o[t],
                delete o[t]
            }),
            i = e(a, {
                animation: !1,
                index: this.index,
                pointStart: this.xData[0]
            },
            {
                data: this.options.data
            },
            i),
            this.remove(!1);
            for (r in h) h.hasOwnProperty(r) && (this[r] = H);
            t(this, ni[i.type || l].prototype),
            hi(c,
            function(t) {
                o[t] = c[t]
            }),
            this.init(s, i),
            s.linkSeries(),
            p(n, !0) && s.redraw(!1)
        }
    }),
    t($.prototype, {
        update: function(i, n) {
            var r = this.chart;
            i = r.options[this.coll][this.options.index] = e(this.userOptions, i),
            this.destroy(!0),
            this._addedPlotLB = H,
            this.init(r, t(i, {
                events: H
            })),
            r.isDirtyBox = !0,
            p(n, !0) && r.redraw()
        },
        remove: function(t) {
            for (var e = this.chart,
            i = this.coll,
            n = this.series,
            r = n.length; r--;) n[r] && n[r].remove(!1);
            h(e.axes, this),
            h(e[i], this),
            e.options[i].splice(this.options.index, 1),
            hi(e[i],
            function(t, e) {
                t.options.index = e
            }),
            this.destroy(),
            e.isDirtyBox = !0,
            p(t, !0) && e.redraw()
        },
        setTitle: function(t, e) {
            this.update({
                title: t
            },
            e)
        },
        setCategories: function(t, e) {
            this.update({
                categories: t
            },
            e)
        }
    });
    var qi = m(Wi);
    ni.line = qi,
    xi.area = e(wi, {
        threshold: 0
    });
    var Yi = m(Wi, {
        type: "area",
        getSegments: function() {
            var t, e, i, n, r = this,
            o = [],
            s = [],
            a = [],
            l = this.xAxis,
            h = this.yAxis,
            c = h.stacks[this.stackKey],
            u = {},
            d = this.points,
            p = this.options.connectNulls;
            if (this.options.stacking && !this.cropped) {
                for (i = 0; i < d.length; i++) u[d[i].x] = d[i];
                for (n in c) null !== c[n].total && a.push( + n);
                a.sort(function(t, e) {
                    return t - e
                }),
                hi(a,
                function(n) {
                    var o, a = 0;
                    if (!p || u[n] && null !== u[n].y) if (u[n]) s.push(u[n]);
                    else {
                        for (i = r.index; i <= h.series.length; i++) if (o = c[n].points[i + "," + n]) {
                            a = o[1];
                            break
                        }
                        t = l.translate(n),
                        e = h.toPixels(a, !0),
                        s.push({
                            y: null,
                            plotX: t,
                            clientX: t,
                            plotY: e,
                            yBottom: e,
                            onMouseOver: Oe
                        })
                    }
                }),
                s.length && o.push(s)
            } else Wi.prototype.getSegments.call(this),
            o = this.segments;
            this.segments = o
        },
        getSegmentPath: function(t) {
            var e, i, n = Wi.prototype.getSegmentPath.call(this, t),
            r = [].concat(n),
            o = this.options,
            s = n.length,
            a = this.yAxis.getThreshold(o.threshold);
            if (3 === s && r.push(Qe, n[1], n[2]), o.stacking && !this.closedStacks) for (e = t.length - 1; e >= 0; e--) i = p(t[e].yBottom, a),
            e < t.length - 1 && o.step && r.push(t[e + 1].plotX, i),
            r.push(t[e].plotX, i);
            else this.closeSegment(r, t, a);
            return this.areaPath = this.areaPath.concat(r),
            n
        },
        closeSegment: function(t, e, i) {
            t.push(Qe, e[e.length - 1].plotX, i, Qe, e[0].plotX, i)
        },
        drawGraph: function() {
            this.areaPath = [],
            Wi.prototype.drawGraph.apply(this);
            var t = this,
            e = this.areaPath,
            i = this.options,
            n = i.negativeColor,
            r = i.negativeFillColor,
            o = [["area", this.color, i.fillColor]]; (n || r) && o.push(["areaNeg", n, r]),
            hi(o,
            function(n) {
                var r = n[0],
                o = t[r];
                o ? o.animate({
                    d: e
                }) : t[r] = t.chart.renderer.path(e).attr({
                    fill: p(n[2], Ti(n[1]).setOpacity(p(i.fillOpacity, .75)).get()),
                    zIndex: 0
                }).add(t.group)
            })
        },
        drawLegendSymbol: Bi.drawRectangle
    });
    ni.area = Yi,
    xi.spline = e(wi);
    var Xi = m(Wi, {
        type: "spline",
        getPointSpline: function(t, e, i) {
            var n, r, o, s, a, l = 1.5,
            h = l + 1,
            c = e.plotX,
            u = e.plotY,
            d = t[i - 1],
            p = t[i + 1];
            if (d && p) {
                var f, g = d.plotX,
                m = d.plotY,
                v = p.plotX,
                y = p.plotY;
                n = (l * c + g) / h,
                r = (l * u + m) / h,
                o = (l * c + v) / h,
                s = (l * u + y) / h,
                f = (s - r) * (o - c) / (o - n) + u - s,
                r += f,
                s += f,
                r > m && r > u ? (r = ve(m, u), s = 2 * u - r) : m > r && u > r && (r = ye(m, u), s = 2 * u - r),
                s > y && s > u ? (s = ve(y, u), r = 2 * u - s) : y > s && u > s && (s = ye(y, u), r = 2 * u - s),
                e.rightContX = o,
                e.rightContY = s
            }
            return i ? (a = ["C", d.rightContX || d.plotX, d.rightContY || d.plotY, n || c, r || u, c, u], d.rightContX = d.rightContY = null) : a = [Ke, c, u],
            a
        }
    });
    ni.spline = Xi,
    xi.areaspline = e(xi.area);
    var Vi = Yi.prototype,
    Ui = m(Xi, {
        type: "areaspline",
        closedStacks: !0,
        getSegmentPath: Vi.getSegmentPath,
        closeSegment: Vi.closeSegment,
        drawGraph: Vi.drawGraph,
        drawLegendSymbol: Bi.drawRectangle
    });
    ni.areaspline = Ui,
    xi.column = e(wi, {
        borderColor: "#FFFFFF",
        borderRadius: 0,
        groupPadding: .2,
        marker: null,
        pointPadding: .1,
        minPointLength: 0,
        cropThreshold: 50,
        pointRange: null,
        states: {
            hover: {
                brightness: .1,
                shadow: !1,
                halo: !1
            },
            select: {
                color: "#C0C0C0",
                borderColor: "#000000",
                shadow: !1
            }
        },
        dataLabels: {
            align: null,
            verticalAlign: null,
            y: null
        },
        stickyTracking: !1,
        tooltip: {
            distance: 6
        },
        threshold: 0
    });
    var Gi = m(Wi, {
        type: "column",
        pointAttrToOptions: {
            stroke: "borderColor",
            fill: "color",
            r: "borderRadius"
        },
        cropShoulder: 0,
        trackerGroups: ["group", "dataLabelsGroup"],
        negStacks: !0,
        init: function() {
            Wi.prototype.init.apply(this, arguments);
            var t = this,
            e = t.chart;
            e.hasRendered && hi(e.series,
            function(e) {
                e.type === t.type && (e.isDirty = !0)
            })
        },
        getColumnMetrics: function() {
            var t, e, i = this,
            n = i.options,
            r = i.xAxis,
            o = i.yAxis,
            s = r.reversed,
            a = {},
            l = 0;
            n.grouping === !1 ? l = 1 : hi(i.chart.series,
            function(n) {
                var r = n.options,
                s = n.yAxis;
                n.type === i.type && n.visible && o.len === s.len && o.pos === s.pos && (r.stacking ? (t = n.stackKey, a[t] === H && (a[t] = l++), e = a[t]) : r.grouping !== !1 && (e = l++), n.columnIndex = e)
            });
            var h = ye(be(r.transA) * (r.ordinalSlope || n.pointRange || r.closestPointRange || r.tickInterval || 1), r.len),
            u = h * n.groupPadding,
            d = h - 2 * u,
            f = d / l,
            g = n.pointWidth,
            m = c(g) ? (f - g) / 2 : f * n.pointPadding,
            v = p(g, f - 2 * m),
            y = (s ? l - (i.columnIndex || 0) : i.columnIndex) || 0,
            b = m + (u + y * f - h / 2) * (s ? -1 : 1);
            return i.columnMetrics = {
                width: v,
                offset: b
            }
        },
        translate: function() {
            var t = this,
            e = t.chart,
            i = t.options,
            n = t.borderWidth = p(i.borderWidth, t.activePointCount > .5 * t.xAxis.len ? 0 : 1),
            r = t.yAxis,
            o = i.threshold,
            s = t.translatedThreshold = r.getThreshold(o),
            a = p(i.minPointLength, 5),
            l = t.getColumnMetrics(),
            h = l.width,
            c = t.barW = ve(h, 1 + 2 * n),
            u = t.pointXOffset = l.offset,
            d = -(n % 2 ? .5 : 0),
            f = n % 2 ? .5 : 1;
            e.renderer.isVML && e.inverted && (f += 1),
            i.pointPadding && (c = me(c)),
            Wi.prototype.translate.apply(t),
            hi(t.points,
            function(i) {
                var n, o, l, g = p(i.yBottom, s),
                m = ye(ve( - 999 - g, i.plotY), r.len + 999 + g),
                v = i.plotX + u,
                y = c,
                b = ye(m, g),
                x = ve(m, g) - b;
                be(x) < a && a && (x = a, b = fe(be(b - s) > a ? g - a: s - (r.translate(i.y, 0, 1, 0, 1) <= s ? a: 0))),
                i.barX = v,
                i.pointWidth = h,
                i.tooltipPos = e.inverted ? [r.len - m, t.xAxis.len - v - y / 2] : [v + y / 2, m + r.pos - e.plotTop],
                n = fe(v + y) + d,
                v = fe(v) + d,
                y = n - v,
                l = be(b) < .5,
                o = fe(b + x) + f,
                b = fe(b) + f,
                x = o - b,
                l && (b -= 1, x += 1),
                i.shapeType = "rect",
                i.shapeArgs = {
                    x: v,
                    y: b,
                    width: y,
                    height: x
                }
            })
        },
        getSymbol: Oe,
        drawLegendSymbol: Bi.drawRectangle,
        drawGraph: Oe,
        drawPoints: function() {
            var t, i, n = this,
            r = this.chart,
            o = n.options,
            s = r.renderer,
            a = o.animationLimit || 250;
            hi(n.points,
            function(l) {
                var h, u = l.plotY,
                d = l.graphic;
                u === H || isNaN(u) || null === l.y ? d && (l.graphic = d.destroy()) : (t = l.shapeArgs, h = c(n.borderWidth) ? {
                    "stroke-width": n.borderWidth
                }: {},
                i = l.pointAttr[l.selected ? ei: Je] || n.pointAttr[Je], d ? (yi(d), d.attr(h)[r.pointCount < a ? "animate": "attr"](e(t))) : l.graphic = d = s[l.shapeType](t).attr(i).attr(h).add(n.group).shadow(o.shadow, null, o.stacking && !o.borderRadius))
            })
        },
        animate: function(t) {
            var e, i = this,
            n = this.yAxis,
            r = i.options,
            o = this.chart.inverted,
            s = {};
            Me && (t ? (s.scaleY = .001, e = ye(n.pos + n.len, ve(n.pos, n.toPixels(r.threshold))), o ? s.translateX = e - n.len: s.translateY = e, i.group.attr(s)) : (s.scaleY = 1, s[o ? "translateX": "translateY"] = n.pos, i.group.animate(s, i.options.animation), i.animate = null))
        },
        remove: function() {
            var t = this,
            e = t.chart;
            e.hasRendered && hi(e.series,
            function(e) {
                e.type === t.type && (e.isDirty = !0)
            }),
            Wi.prototype.remove.apply(t, arguments)
        }
    });
    ni.column = Gi,
    xi.bar = e(xi.column);
    var Ki = m(Gi, {
        type: "bar",
        inverted: !0
    });
    ni.bar = Ki,
    xi.scatter = e(wi, {
        lineWidth: 0,
        tooltip: {
            headerFormat: '<span style="color:{series.color}">\u25cf</span> <span style="font-size: 10px;"> {series.name}</span><br/>',
            pointFormat: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"
        },
        stickyTracking: !1
    });
    var Qi = m(Wi, {
        type: "scatter",
        sorted: !1,
        requireSorting: !1,
        noSharedTooltip: !0,
        trackerGroups: ["markerGroup", "dataLabelsGroup"],
        takeOrdinalPosition: !1,
        singularTooltips: !0,
        drawGraph: function() {
            this.options.lineWidth && Wi.prototype.drawGraph.call(this)
        }
    });
    ni.scatter = Qi,
    xi.pie = e(wi, {
        borderColor: "#FFFFFF",
        borderWidth: 1,
        center: [null, null],
        clip: !1,
        colorByPoint: !0,
        dataLabels: {
            distance: 30,
            enabled: !0,
            formatter: function() {
                return this.point.name
            }
        },
        ignoreHiddenPoint: !0,
        legendType: "point",
        marker: null,
        size: null,
        showInLegend: !1,
        slicedOffset: 10,
        states: {
            hover: {
                brightness: .1,
                shadow: !1
            }
        },
        stickyTracking: !1,
        tooltip: {
            followPointer: !0
        }
    });
    var Zi = m(ji, {
        init: function() {
            ji.prototype.init.apply(this, arguments);
            var e, i = this;
            return i.y < 0 && (i.y = null),
            t(i, {
                visible: i.visible !== !1,
                name: p(i.name, "Slice")
            }),
            e = function(t) {
                i.slice("select" === t.type)
            },
            pi(i, "select", e),
            pi(i, "unselect", e),
            i
        },
        setVisible: function(t) {
            var e = this,
            i = e.series,
            n = i.chart;
            e.visible = e.options.visible = t = t === H ? !e.visible: t,
            i.options.data[li(e, i.data)] = e.options,
            hi(["graphic", "dataLabel", "connector", "shadowGroup"],
            function(i) {
                e[i] && e[i][t ? "show": "hide"](!0)
            }),
            e.legendItem && n.legend.colorizeItem(e, t),
            !i.isDirty && i.options.ignoreHiddenPoint && (i.isDirty = !0, n.redraw())
        },
        slice: function(t, e, i) {
            var n, r = this,
            o = r.series,
            s = o.chart;
            L(i, s),
            e = p(e, !0),
            r.sliced = r.options.sliced = t = c(t) ? t: !r.sliced,
            o.options.data[li(r, o.data)] = r.options,
            n = t ? r.slicedTranslation: {
                translateX: 0,
                translateY: 0
            },
            r.graphic.animate(n),
            r.shadowGroup && r.shadowGroup.animate(n)
        },
        haloPath: function(t) {
            var e = this.shapeArgs,
            i = this.series.chart;
            return this.sliced || !this.visible ? [] : this.series.chart.renderer.symbols.arc(i.plotLeft + e.x, i.plotTop + e.y, e.r + t, e.r + t, {
                innerR: this.shapeArgs.r,
                start: e.start,
                end: e.end
            })
        }
    }),
    Ji = {
        type: "pie",
        isCartesian: !1,
        pointClass: Zi,
        requireSorting: !1,
        noSharedTooltip: !0,
        trackerGroups: ["group", "dataLabelsGroup"],
        axisTypes: [],
        pointAttrToOptions: {
            stroke: "borderColor",
            "stroke-width": "borderWidth",
            fill: "color"
        },
        singularTooltips: !0,
        getColor: Oe,
        animate: function(t) {
            var e = this,
            i = e.points,
            n = e.startAngleRad;
            t || (hi(i,
            function(t) {
                var i = t.graphic,
                r = t.shapeArgs;
                i && (i.attr({
                    r: e.center[3] / 2,
                    start: n,
                    end: n
                }), i.animate({
                    r: r.r,
                    start: r.start,
                    end: r.end
                },
                e.options.animation))
            }), e.animate = null)
        },
        setData: function(t, e, i, n) {
            Wi.prototype.setData.call(this, t, !1, i, n),
            this.processData(),
            this.generatePoints(),
            p(e, !0) && this.chart.redraw(i)
        },
        generatePoints: function() {
            var t, e, i, n, r = 0,
            o = this.options.ignoreHiddenPoint;
            for (Wi.prototype.generatePoints.call(this), e = this.points, i = e.length, t = 0; i > t; t++) n = e[t],
            r += o && !n.visible ? 0 : n.y;
            for (this.total = r, t = 0; i > t; t++) n = e[t],
            n.percentage = r > 0 ? n.y / r * 100 : 0,
            n.total = r
        },
        translate: function(t) {
            this.generatePoints();
            var e, i, n, r, o, s, a, l = this,
            h = 0,
            c = 1e3,
            u = l.options,
            d = u.slicedOffset,
            f = d + u.borderWidth,
            g = u.startAngle || 0,
            m = l.startAngleRad = ke / 180 * (g - 90),
            v = l.endAngleRad = ke / 180 * (p(u.endAngle, g + 360) - 90),
            y = v - m,
            b = l.points,
            x = u.dataLabels.distance,
            w = u.ignoreHiddenPoint,
            k = b.length;
            for (t || (l.center = t = l.getCenter()), l.getX = function(e, i) {
                return n = pe.asin(ye((e - t[1]) / (t[2] / 2 + x), 1)),
                t[0] + (i ? -1 : 1) * xe(n) * (t[2] / 2 + x)
            },
            s = 0; k > s; s++) a = b[s],
            e = m + h * y,
            (!w || a.visible) && (h += a.percentage / 100),
            i = m + h * y,
            a.shapeType = "arc",
            a.shapeArgs = {
                x: t[0],
                y: t[1],
                r: t[2] / 2,
                innerR: t[3] / 2,
                start: fe(e * c) / c,
                end: fe(i * c) / c
            },
            n = (i + e) / 2,
            n > 1.5 * ke ? n -= 2 * ke: -ke / 2 > n && (n += 2 * ke),
            a.slicedTranslation = {
                translateX: fe(xe(n) * d),
                translateY: fe(we(n) * d)
            },
            r = xe(n) * t[2] / 2,
            o = we(n) * t[2] / 2,
            a.tooltipPos = [t[0] + .7 * r, t[1] + .7 * o],
            a.half = -ke / 2 > n || n > ke / 2 ? 1 : 0,
            a.angle = n,
            f = ye(f, x / 2),
            a.labelPos = [t[0] + r + xe(n) * x, t[1] + o + we(n) * x, t[0] + r + xe(n) * f, t[1] + o + we(n) * f, t[0] + r, t[1] + o, 0 > x ? "center": a.half ? "right": "left", n]
        },
        drawGraph: null,
        drawPoints: function() {
            var e, i, n, r, o = this,
            s = o.chart,
            a = s.renderer,
            l = o.options.shadow;
            l && !o.shadowGroup && (o.shadowGroup = a.g("shadow").add(o.group)),
            hi(o.points,
            function(s) {
                i = s.graphic,
                r = s.shapeArgs,
                n = s.shadowGroup,
                l && !n && (n = s.shadowGroup = a.g("shadow").add(o.shadowGroup)),
                e = s.sliced ? s.slicedTranslation: {
                    translateX: 0,
                    translateY: 0
                },
                n && n.attr(e),
                i ? i.animate(t(r, e)) : s.graphic = i = a[s.shapeType](r).setRadialReference(o.center).attr(s.pointAttr[s.selected ? ei: Je]).attr({
                    "stroke-linejoin": "round"
                }).attr(e).add(o.group).shadow(l, n),
                void 0 !== s.visible && s.setVisible(s.visible)
            })
        },
        sortByAngle: function(t, e) {
            t.sort(function(t, i) {
                return void 0 !== t.angle && (i.angle - t.angle) * e
            })
        },
        drawLegendSymbol: Bi.drawRectangle,
        getCenter: zi.getCenter,
        getSymbol: Oe
    };
    Ji = m(Wi, Ji),
    ni.pie = Ji,
    Wi.prototype.drawDataLabels = function() {
        var i, n, r, o, s = this,
        a = s.options,
        l = a.cursor,
        h = a.dataLabels,
        u = s.points,
        d = s.hasRendered || 0; (h.enabled || s._hasPointLabels) && (s.dlProcessOptions && s.dlProcessOptions(h), o = s.plotGroup("dataLabelsGroup", "data-labels", h.defer ? Ye: Ve, h.zIndex || 6), p(h.defer, !0) && (o.attr({
            opacity: +d
        }), d || pi(s, "afterAnimate",
        function() {
            s.visible && o.show(),
            o[a.animation ? "animate": "attr"]({
                opacity: 1
            },
            {
                duration: 200
            })
        })), n = h, hi(u,
        function(a) {
            var u, d, f, g, m, v = a.dataLabel,
            y = a.connector,
            b = !0;
            if (i = a.options && a.options.dataLabels, u = p(i && i.enabled, n.enabled), v && !u) a.dataLabel = v.destroy();
            else if (u) {
                if (h = e(n, i), m = h.rotation, d = a.getLabelConfig(), r = h.format ? w(h.format, d) : h.formatter.call(d, h), h.style.color = p(h.color, h.style.color, s.color, "black"), v) c(r) ? (v.attr({
                    text: r
                }), b = !1) : (a.dataLabel = v = v.destroy(), y && (a.connector = y.destroy()));
                else if (c(r)) {
                    f = {
                        fill: h.backgroundColor,
                        stroke: h.borderColor,
                        "stroke-width": h.borderWidth,
                        r: h.borderRadius || 0,
                        rotation: m,
                        padding: h.padding,
                        zIndex: 1
                    };
                    for (g in f) f[g] === H && delete f[g];
                    v = a.dataLabel = s.chart.renderer[m ? "text": "label"](r, 0, -999, null, null, null, h.useHTML).attr(f).css(t(h.style, l && {
                        cursor: l
                    })).add(o).shadow(h.shadow)
                }
                v && s.alignDataLabel(a, v, h, null, b)
            }
        }))
    },
    Wi.prototype.alignDataLabel = function(e, i, n, r, o) {
        var s, a = this.chart,
        l = a.inverted,
        h = p(e.plotX, -999),
        c = p(e.plotY, -999),
        u = i.getBBox(),
        d = this.visible && (e.series.forceDL || a.isInsidePlot(h, fe(c), l) || r && a.isInsidePlot(h, l ? r.x + 1 : r.y + r.height - 1, l));
        d && (r = t({
            x: l ? a.plotWidth - c: h,
            y: fe(l ? a.plotHeight - h: c),
            width: 0,
            height: 0
        },
        r), t(n, {
            width: u.width,
            height: u.height
        }), n.rotation ? i[o ? "attr": "animate"]({
            x: r.x + n.x + r.width / 2,
            y: r.y + n.y + r.height / 2
        }).attr({
            align: n.align
        }) : (i.align(n, null, r), s = i.alignAttr, "justify" === p(n.overflow, "justify") ? this.justifyDataLabel(i, n, s, u, r, o) : p(n.crop, !0) && (d = a.isInsidePlot(s.x, s.y) && a.isInsidePlot(s.x + u.width, s.y + u.height)))),
        d || (i.attr({
            y: -999
        }), i.placed = !1)
    },
    Wi.prototype.justifyDataLabel = function(t, e, i, n, r, o) {
        var s, a, l = this.chart,
        h = e.align,
        c = e.verticalAlign;
        s = i.x,
        0 > s && ("right" === h ? e.align = "left": e.x = -s, a = !0),
        s = i.x + n.width,
        s > l.plotWidth && ("left" === h ? e.align = "right": e.x = l.plotWidth - s, a = !0),
        s = i.y,
        0 > s && ("bottom" === c ? e.verticalAlign = "top": e.y = -s, a = !0),
        s = i.y + n.height,
        s > l.plotHeight && ("top" === c ? e.verticalAlign = "bottom": e.y = l.plotHeight - s, a = !0),
        a && (t.placed = !o, t.align(e, null, r))
    },
    ni.pie && (ni.pie.prototype.drawDataLabels = function() {
        var t, e, i, n, r, o, s, a, l, h, c, u, d, f = this,
        g = f.data,
        m = f.chart,
        v = f.options.dataLabels,
        y = p(v.connectorPadding, 10),
        b = p(v.connectorWidth, 1),
        x = m.plotWidth,
        w = m.plotHeight,
        k = p(v.softConnector, !0),
        S = v.distance,
        C = f.center,
        T = C[2] / 2,
        A = C[1],
        P = S > 0,
        _ = [[], []],
        L = [0, 0, 0, 0],
        E = function(t, e) {
            return e.y - t.y
        };
        if (f.visible && (v.enabled || f._hasPointLabels)) {
            for (Wi.prototype.drawDataLabels.apply(f), hi(g,
            function(t) {
                t.dataLabel && t.visible && _[t.half].push(t)
            }), u = 2; u--;) {
                var M, F, N, I, $ = [],
                O = [],
                R = _[u],
                H = R.length;
                if (H) {
                    for (f.sortByAngle(R, u - .5), d = s = 0; ! s && R[d];) s = R[d] && R[d].dataLabel && (R[d].dataLabel.getBBox().height || 21),
                    d++;
                    if (S > 0) {
                        for (N = ye(A + T + S, m.plotHeight), F = ve(0, A - T - S); N >= F; F += s) $.push(F);
                        if (M = $.length, H > M) {
                            for (c = [].concat(R), c.sort(E), d = H; d--;) c[d].rank = d;
                            for (d = H; d--;) R[d].rank >= M && R.splice(d, 1);
                            H = R.length
                        }
                        for (d = 0; H > d; d++) {
                            t = R[d],
                            o = t.labelPos;
                            var B, z, j = 9999;
                            for (z = 0; M > z; z++) B = be($[z] - o[1]),
                            j > B && (j = B, I = z);
                            if (d > I && null !== $[d]) I = d;
                            else if (H - d + I > M && null !== $[d]) for (I = M - H + d; null === $[I];) I++;
                            else for (; null === $[I];) I++;
                            O.push({
                                i: I,
                                y: $[I]
                            }),
                            $[I] = null
                        }
                        O.sort(E)
                    }
                    for (d = 0; H > d; d++) {
                        var W, q;
                        t = R[d],
                        o = t.labelPos,
                        n = t.dataLabel,
                        h = t.visible === !1 ? Ye: Ve,
                        q = o[1],
                        S > 0 ? (W = O.pop(), I = W.i, l = W.y, (q > l && null !== $[I + 1] || l > q && null !== $[I - 1]) && (l = ye(ve(0, q), m.plotHeight))) : l = q,
                        a = v.justify ? C[0] + (u ? -1 : 1) * (T + S) : f.getX(l === A - T - S || l === A + T + S ? q: l, u),
                        n._attr = {
                            visibility: h,
                            align: o[6]
                        },
                        n._pos = {
                            x: a + v.x + ({
                                left: y,
                                right: -y
                            } [o[6]] || 0),
                            y: l + v.y - 10
                        },
                        n.connX = a,
                        n.connY = l,
                        null === this.options.size && (r = n.width, y > a - r ? L[3] = ve(fe(r - a + y), L[3]) : a + r > x - y && (L[1] = ve(fe(a + r - x + y), L[1])), 0 > l - s / 2 ? L[0] = ve(fe( - l + s / 2), L[0]) : l + s / 2 > w && (L[2] = ve(fe(l + s / 2 - w), L[2])))
                    }
                }
            } (0 === D(L) || this.verifyDataLabelOverflow(L)) && (this.placeDataLabels(), P && b && hi(this.points,
            function(t) {
                e = t.connector,
                o = t.labelPos,
                n = t.dataLabel,
                n && n._pos ? (h = n._attr.visibility, a = n.connX, l = n.connY, i = k ? [Ke, a + ("left" === o[6] ? 5 : -5), l, "C", a, l, 2 * o[2] - o[4], 2 * o[3] - o[5], o[2], o[3], Qe, o[4], o[5]] : [Ke, a + ("left" === o[6] ? 5 : -5), l, Qe, o[2], o[3], Qe, o[4], o[5]], e ? (e.animate({
                    d: i
                }), e.attr("visibility", h)) : t.connector = e = f.chart.renderer.path(i).attr({
                    "stroke-width": b,
                    stroke: v.connectorColor || t.color || "#606060",
                    visibility: h
                }).add(f.dataLabelsGroup)) : e && (t.connector = e.destroy())
            }))
        }
    },
    ni.pie.prototype.placeDataLabels = function() {
        hi(this.points,
        function(t) {
            var e, i = t.dataLabel;
            i && (e = i._pos, e ? (i.attr(i._attr), i[i.moved ? "animate": "attr"](e), i.moved = !0) : i && i.attr({
                y: -999
            }))
        })
    },
    ni.pie.prototype.alignDataLabel = Oe, ni.pie.prototype.verifyDataLabelOverflow = function(t) {
        var e, i = this.center,
        n = this.options,
        r = n.center,
        o = n.minSize || 80,
        s = o;
        return null !== r[0] ? s = ve(i[2] - ve(t[1], t[3]), o) : (s = ve(i[2] - t[1] - t[3], o), i[0] += (t[3] - t[1]) / 2),
        null !== r[1] ? s = ve(ye(s, i[2] - ve(t[0], t[2])), o) : (s = ve(ye(s, i[2] - t[0] - t[2]), o), i[1] += (t[0] - t[2]) / 2),
        s < i[2] ? (i[2] = s, this.translate(i), hi(this.points,
        function(t) {
            t.dataLabel && (t.dataLabel._pos = null)
        }), this.drawDataLabels && this.drawDataLabels()) : e = !0,
        e
    }),
    ni.column && (ni.column.prototype.alignDataLabel = function(t, i, n, r, o) {
        var s = this.chart,
        a = s.inverted,
        l = t.dlBox || t.shapeArgs,
        h = t.below || t.plotY > p(this.translatedThreshold, s.plotSizeY),
        c = p(n.inside, !!this.options.stacking);
        l && (r = e(l), a && (r = {
            x: s.plotWidth - r.y - r.height,
            y: s.plotHeight - r.x - r.width,
            width: r.height,
            height: r.width
        }), c || (a ? (r.x += h ? 0 : r.width, r.width = 0) : (r.y += h ? r.height: 0, r.height = 0))),
        n.align = p(n.align, !a || c ? "center": h ? "right": "left"),
        n.verticalAlign = p(n.verticalAlign, a || c ? "middle": h ? "top": "bottom"),
        Wi.prototype.alignDataLabel.call(this, t, i, n, r, o)
    });
    var tn = ce.TrackerMixin = {
        drawTrackerPoint: function() {
            var t = this,
            e = t.chart,
            i = e.pointer,
            n = t.options.cursor,
            r = n && {
                cursor: n
            },
            o = function(i) {
                var n, r = i.target;
                for (e.hoverSeries !== t && t.onMouseOver(); r && !n;) n = r.point,
                r = r.parentNode;
                n !== H && n !== e.hoverPoint && n.onMouseOver(i)
            };
            hi(t.points,
            function(t) {
                t.graphic && (t.graphic.element.point = t),
                t.dataLabel && (t.dataLabel.element.point = t)
            }),
            t._hasTracking || (hi(t.trackerGroups,
            function(e) {
                t[e] && (t[e].addClass(Xe + "tracker").on("mouseover", o).on("mouseout",
                function(t) {
                    i.onTrackerMouseOut(t)
                }).css(r), z && t[e].on("touchstart", o))
            }), t._hasTracking = !0)
        },
        drawTrackerGraph: function() {
            var t, e, i = this,
            n = i.options,
            r = n.trackByArea,
            o = [].concat(r ? i.areaPath: i.graphPath),
            s = o.length,
            a = i.chart,
            l = a.pointer,
            h = a.renderer,
            c = a.options.tooltip.snap,
            u = i.tracker,
            d = n.cursor,
            p = d && {
                cursor: d
            },
            f = i.singlePoints,
            g = function() {
                a.hoverSeries !== i && i.onMouseOver()
            },
            m = "rgba(192,192,192," + (Me ? 1e-4: .002) + ")";
            if (s && !r) for (e = s + 1; e--;) o[e] === Ke && o.splice(e + 1, 0, o[e + 1] - c, o[e + 2], Qe),
            (e && o[e] === Ke || e === s) && o.splice(e, 0, Qe, o[e - 2] + c, o[e - 1]);
            for (e = 0; e < f.length; e++) t = f[e],
            o.push(Ke, t.plotX - c, t.plotY, Qe, t.plotX + c, t.plotY);
            u ? u.attr({
                d: o
            }) : (i.tracker = h.path(o).attr({
                "stroke-linejoin": "round",
                visibility: i.visible ? Ve: Ye,
                stroke: m,
                fill: r ? m: Ge,
                "stroke-width": n.lineWidth + (r ? 0 : 2 * c),
                zIndex: 2
            }).add(i.group), hi([i.tracker, i.markerGroup],
            function(t) {
                t.addClass(Xe + "tracker").on("mouseover", g).on("mouseout",
                function(t) {
                    l.onTrackerMouseOut(t)
                }).css(p),
                z && t.on("touchstart", g)
            }))
        }
    };
    ni.column && (Gi.prototype.drawTracker = tn.drawTrackerPoint),
    ni.pie && (ni.pie.prototype.drawTracker = tn.drawTrackerPoint),
    ni.scatter && (Qi.prototype.drawTracker = tn.drawTrackerPoint),
    t(Hi.prototype, {
        setItemEvents: function(t, e, i, n, r) {
            var o = this; (i ? e: t.legendGroup).on("mouseover",
            function() {
                t.setState(ti),
                e.css(o.options.itemHoverStyle)
            }).on("mouseout",
            function() {
                e.css(t.visible ? n: r),
                t.setState()
            }).on("click",
            function(e) {
                var i = "legendItemClick",
                n = function() {
                    t.setVisible()
                };
                e = {
                    browserEvent: e
                },
                t.firePointEvent ? t.firePointEvent(i, e, n) : gi(t, i, e, n)
            })
        },
        createCheckboxForItem: function(t) {
            var e = this;
            t.checkbox = g("input", {
                type: "checkbox",
                checked: t.selected,
                defaultChecked: t.selected
            },
            e.options.itemCheckboxStyle, e.chart.container),
            pi(t.checkbox, "click",
            function(e) {
                var i = e.target;
                gi(t, "checkboxClick", {
                    checked: i.checked
                },
                function() {
                    t.select()
                })
            })
        }
    }),
    W.legend.itemStyle.cursor = "pointer",
    t(O.prototype, {
        showResetZoom: function() {
            var t = this,
            e = W.lang,
            i = t.options.chart.resetZoomButton,
            n = i.theme,
            r = n.states,
            o = "chart" === i.relativeTo ? null: "plotBox";
            this.resetZoomButton = t.renderer.button(e.resetZoom, null, null,
            function() {
                t.zoomOut()
            },
            n, r && r.hover).attr({
                align: i.position.align,
                title: e.resetZoomTitle
            }).add().align(i.position, !1, o)
        },
        zoomOut: function() {
            var t = this;
            gi(t, "selection", {
                resetSelection: !0
            },
            function() {
                t.zoom()
            })
        },
        zoom: function(t) {
            var e, i, n = this,
            o = n.pointer,
            s = !1; ! t || t.resetSelection ? hi(n.axes,
            function(t) {
                e = t.zoom()
            }) : hi(t.xAxis.concat(t.yAxis),
            function(t) {
                var i = t.axis,
                n = i.isXAxis; (o[n ? "zoomX": "zoomY"] || o[n ? "pinchX": "pinchY"]) && (e = i.zoom(t.min, t.max), i.displayBtn && (s = !0))
            }),
            i = n.resetZoomButton,
            s && !i ? n.showResetZoom() : !s && r(i) && (n.resetZoomButton = i.destroy()),
            e && n.redraw(p(n.options.chart.animation, t && t.animation, n.pointCount < 100))
        },
        pan: function(t, e) {
            var i, n = this,
            r = n.hoverPoints;
            r && hi(r,
            function(t) {
                t.setState()
            }),
            hi("xy" === e ? [1, 0] : [1],
            function(e) {
                var r = t[e ? "chartX": "chartY"],
                o = n[e ? "xAxis": "yAxis"][0],
                s = n[e ? "mouseDownX": "mouseDownY"],
                a = (o.pointRange || 0) / 2,
                l = o.getExtremes(),
                h = o.toValue(s - r, !0) + a,
                c = o.toValue(s + n[e ? "plotWidth": "plotHeight"] - r, !0) - a;
                o.series.length && h > ye(l.dataMin, l.min) && c < ve(l.dataMax, l.max) && (o.setExtremes(h, c, !1, !1, {
                    trigger: "pan"
                }), i = !0),
                n[e ? "mouseDownX": "mouseDownY"] = r
            }),
            i && n.redraw(!1),
            f(n.container, {
                cursor: "move"
            })
        }
    }),
    t(ji.prototype, {
        select: function(t, e) {
            var i = this,
            n = i.series,
            r = n.chart;
            t = p(t, !i.selected),
            i.firePointEvent(t ? "select": "unselect", {
                accumulate: e
            },
            function() {
                i.selected = i.options.selected = t,
                n.options.data[li(i, n.data)] = i.options,
                i.setState(t && ei),
                e || hi(r.getSelectedPoints(),
                function(t) {
                    t.selected && t !== i && (t.selected = t.options.selected = !1, n.options.data[li(t, n.data)] = t.options, t.setState(Je), t.firePointEvent("unselect"))
                })
            })
        },
        onMouseOver: function(t) {
            var e = this,
            i = e.series,
            n = i.chart,
            r = n.tooltip,
            o = n.hoverPoint;
            o && o !== e && o.onMouseOut(),
            e.firePointEvent("mouseOver"),
            !r || r.shared && !i.noSharedTooltip || r.refresh(e, t),
            e.setState(ti),
            n.hoverPoint = e
        },
        onMouseOut: function() {
            var t = this.series.chart,
            e = t.hoverPoints;
            this.firePointEvent("mouseOut"),
            e && -1 !== li(this, e) || (this.setState(), t.hoverPoint = null)
        },
        importEvents: function() {
            if (!this.hasImportedEvents) {
                var t, i = this,
                n = e(i.series.options.point, i.options),
                r = n.events;
                i.events = r;
                for (t in r) pi(i, t, r[t]);
                this.hasImportedEvents = !0
            }
        },
        setState: function(i, n) {
            var r, o, s, a, l = this,
            h = l.plotX,
            c = l.plotY,
            u = l.series,
            d = u.options.states,
            p = xi[u.type].marker && u.options.marker,
            f = p && !p.enabled,
            g = p && p.states[i],
            m = g && g.enabled === !1,
            v = u.stateMarkerGraphic,
            y = l.marker || {},
            b = u.chart,
            x = u.halo;
            i = i || Je,
            a = l.pointAttr[i] || u.pointAttr[i],
            i === l.state && !n || l.selected && i !== ei || d[i] && d[i].enabled === !1 || i && (m || f && g.enabled === !1) || i && y.states && y.states[i] && y.states[i].enabled === !1 || (l.graphic ? (r = p && l.graphic.symbolName && a.r, l.graphic.attr(e(a, r ? {
                x: h - r,
                y: c - r,
                width: 2 * r,
                height: 2 * r
            }: {})), v && v.hide()) : (i && g && (r = g.radius, s = y.symbol || u.symbol, v && v.currentSymbol !== s && (v = v.destroy()), v ? v[n ? "animate": "attr"]({
                x: h - r,
                y: c - r
            }) : s && (u.stateMarkerGraphic = v = b.renderer.symbol(s, h - r, c - r, 2 * r, 2 * r).attr(a).add(u.markerGroup), v.currentSymbol = s)), v && v[i && b.isInsidePlot(h, c, b.inverted) ? "show": "hide"]()), o = d[i] && d[i].halo, o && o.size ? (x || (u.halo = x = b.renderer.path().add(u.seriesGroup)), x.attr(t({
                fill: Ti(l.color || u.color).setOpacity(o.opacity).get()
            },
            o.attributes))[n ? "animate": "attr"]({
                d: l.haloPath(o.size)
            })) : x && x.attr({
                d: []
            }), l.state = i)
        },
        haloPath: function(t) {
            var e = this.series,
            i = e.chart,
            n = e.getPlotBox(),
            r = i.inverted;
            return i.renderer.symbols.circle(n.translateX + (r ? e.yAxis.len - this.plotY: this.plotX) - t, n.translateY + (r ? e.xAxis.len - this.plotX: this.plotY) - t, 2 * t, 2 * t)
        }
    }),
    t(Wi.prototype, {
        onMouseOver: function() {
            var t = this,
            e = t.chart,
            i = e.hoverSeries;
            i && i !== t && i.onMouseOut(),
            t.options.events.mouseOver && gi(t, "mouseOver"),
            t.setState(ti),
            e.hoverSeries = t
        },
        onMouseOut: function() {
            var t = this,
            e = t.options,
            i = t.chart,
            n = i.tooltip,
            r = i.hoverPoint;
            r && r.onMouseOut(),
            t && e.events.mouseOut && gi(t, "mouseOut"),
            !n || e.stickyTracking || n.shared && !t.noSharedTooltip || n.hide(),
            t.setState(),
            i.hoverSeries = null
        },
        setState: function(t) {
            var e, i = this,
            n = i.options,
            r = i.graph,
            o = i.graphNeg,
            s = n.states,
            a = n.lineWidth;
            if (t = t || Je, i.state !== t) {
                if (i.state = t, s[t] && s[t].enabled === !1) return;
                t && (a = s[t].lineWidth || a + (s[t].lineWidthPlus || 0)),
                r && !r.dashstyle && (e = {
                    "stroke-width": a
                },
                r.attr(e), o && o.attr(e))
            }
        },
        setVisible: function(t, e) {
            var i, n = this,
            r = n.chart,
            o = n.legendItem,
            s = r.options.chart.ignoreHiddenSeries,
            a = n.visible;
            n.visible = t = n.userOptions.visible = t === H ? !a: t,
            i = t ? "show": "hide",
            hi(["group", "dataLabelsGroup", "markerGroup", "tracker"],
            function(t) {
                n[t] && n[t][i]()
            }),
            r.hoverSeries === n && n.onMouseOut(),
            o && r.legend.colorizeItem(n, t),
            n.isDirty = !0,
            n.options.stacking && hi(r.series,
            function(t) {
                t.options.stacking && t.visible && (t.isDirty = !0)
            }),
            hi(n.linkedSeries,
            function(e) {
                e.setVisible(t, !1)
            }),
            s && (r.isDirtyBox = !0),
            e !== !1 && r.redraw(),
            gi(n, i)
        },
        setTooltipPoints: function(t) {
            var e, i, n, r, o, s, a, l = this,
            h = [],
            c = l.xAxis,
            u = c && c.getExtremes(),
            d = c ? c.tooltipLen || c.len: l.chart.plotSizeX,
            p = [];
            if (l.options.enableMouseTracking !== !1 && !l.singularTooltips) {
                for (t && (l.tooltipPoints = null), hi(l.segments || l.points,
                function(t) {
                    h = h.concat(t)
                }), c && c.reversed && (h = h.reverse()), l.orderTooltipPoints && l.orderTooltipPoints(h), e = h.length, a = 0; e > a; a++) if (r = h[a], o = r.x, o >= u.min && o <= u.max) for (s = h[a + 1], i = n === H ? 0 : n + 1, n = h[a + 1] ? ye(ve(0, ge((r.clientX + (s ? s.wrappedClientX || s.clientX: d)) / 2)), d) : d; i >= 0 && n >= i;) p[i++] = r;
                l.tooltipPoints = p
            }
        },
        show: function() {
            this.setVisible(!0)
        },
        hide: function() {
            this.setVisible(!1)
        },
        select: function(t) {
            var e = this;
            e.selected = t = t === H ? !e.selected: t,
            e.checkbox && (e.checkbox.checked = t),
            gi(e, t ? "select": "unselect")
        },
        drawTracker: tn.drawTrackerGraph
    }),
    t(ce, {
        Axis: $,
        Chart: O,
        Color: Ti,
        Point: ji,
        Tick: I,
        Renderer: B,
        Series: Wi,
        SVGElement: N,
        SVGRenderer: Di,
        arrayMin: T,
        arrayMax: D,
        charts: Re,
        dateFormat: q,
        format: w,
        pathAnim: X,
        getOptions: F,
        hasBidiBug: Fe,
        isTouchDevice: Le,
        numberFormat: v,
        seriesTypes: ni,
        setOptions: M,
        addEvent: pi,
        removeEvent: fi,
        createElement: g,
        discardElement: P,
        css: f,
        each: hi,
        extend: t,
        map: di,
        merge: e,
        pick: p,
        splat: d,
        extendClass: m,
        pInt: i,
        wrap: b,
        svg: Me,
        canvas: Ne,
        vml: !Me && !Ne,
        product: Be,
        version: ze
    })
} (),
function(t, e) {
    function i(t, e, i) {
        this.init.call(this, t, e, i)
    }
    var n = t.arrayMin,
    r = t.arrayMax,
    o = t.each,
    s = t.extend,
    a = t.merge,
    l = t.map,
    h = t.pick,
    c = t.pInt,
    u = t.getOptions().plotOptions,
    d = t.seriesTypes,
    p = t.extendClass,
    f = t.splat,
    g = t.wrap,
    m = t.Axis,
    v = t.Tick,
    y = t.Point,
    b = t.Pointer,
    x = t.CenteredSeriesMixin,
    w = t.TrackerMixin,
    k = t.Series,
    S = Math,
    C = S.round,
    T = S.floor,
    D = S.max,
    A = t.Color,
    P = function() {};
    s(i.prototype, {
        init: function(t, e, i) {
            var n, r = this,
            s = r.defaultOptions;
            r.chart = e,
            e.angular && (s.background = {}),
            r.options = t = a(s, t),
            n = t.background,
            n && o([].concat(f(n)).reverse(),
            function(t) {
                var e = t.backgroundColor;
                t = a(r.defaultBackgroundOptions, t),
                e && (t.backgroundColor = e),
                t.color = t.backgroundColor,
                i.options.plotBands.unshift(t)
            })
        },
        defaultOptions: {
            center: ["50%", "50%"],
            size: "85%",
            startAngle: 0
        },
        defaultBackgroundOptions: {
            shape: "circle",
            borderWidth: 1,
            borderColor: "silver",
            backgroundColor: {
                linearGradient: {
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 1
                },
                stops: [[0, "#FFF"], [1, "#DDD"]]
            },
            from: -Number.MAX_VALUE,
            innerRadius: 0,
            to: Number.MAX_VALUE,
            outerRadius: "105%"
        }
    });
    var _ = m.prototype,
    L = v.prototype,
    E = {
        getOffset: P,
        redraw: function() {
            this.isDirty = !1
        },
        render: function() {
            this.isDirty = !1
        },
        setScale: P,
        setCategories: P,
        setTitle: P
    },
    M = {
        isRadial: !0,
        defaultRadialGaugeOptions: {
            labels: {
                align: "center",
                x: 0,
                y: null
            },
            minorGridLineWidth: 0,
            minorTickInterval: "auto",
            minorTickLength: 10,
            minorTickPosition: "inside",
            minorTickWidth: 1,
            tickLength: 10,
            tickPosition: "inside",
            tickWidth: 2,
            title: {
                rotation: 0
            },
            zIndex: 2
        },
        defaultRadialXOptions: {
            gridLineWidth: 1,
            labels: {
                align: null,
                distance: 15,
                x: 0,
                y: null
            },
            maxPadding: 0,
            minPadding: 0,
            showLastLabel: !1,
            tickLength: 0
        },
        defaultRadialYOptions: {
            gridLineInterpolation: "circle",
            labels: {
                align: "right",
                x: -3,
                y: -2
            },
            showLastLabel: !1,
            title: {
                x: 4,
                text: null,
                rotation: 90
            }
        },
        setOptions: function(t) {
            var e = this.options = a(this.defaultOptions, this.defaultRadialOptions, t);
            e.plotBands || (e.plotBands = [])
        },
        getOffset: function() {
            _.getOffset.call(this),
            this.chart.axisOffset[this.side] = 0,
            this.center = this.pane.center = x.getCenter.call(this.pane)
        },
        getLinePath: function(t, e) {
            var i = this.center;
            return e = h(e, i[2] / 2 - this.offset),
            this.chart.renderer.symbols.arc(this.left + i[0], this.top + i[1], e, e, {
                start: this.startAngleRad,
                end: this.endAngleRad,
                open: !0,
                innerR: 0
            })
        },
        setAxisTranslation: function() {
            _.setAxisTranslation.call(this),
            this.center && (this.transA = this.isCircular ? (this.endAngleRad - this.startAngleRad) / (this.max - this.min || 1) : this.center[2] / 2 / (this.max - this.min || 1), this.minPixelPadding = this.isXAxis ? this.transA * this.minPointOffset: 0)
        },
        beforeSetTickPositions: function() {
            this.autoConnect && (this.max += this.categories && 1 || this.pointRange || this.closestPointRange || 0)
        },
        setAxisSize: function() {
            _.setAxisSize.call(this),
            this.isRadial && (this.center = this.pane.center = t.CenteredSeriesMixin.getCenter.call(this.pane), this.isCircular && (this.sector = this.endAngleRad - this.startAngleRad), this.len = this.width = this.height = this.center[2] * h(this.sector, 1) / 2)
        },
        getPosition: function(t, e) {
            return this.postTranslate(this.isCircular ? this.translate(t) : 0, h(this.isCircular ? e: this.translate(t), this.center[2] / 2) - this.offset)
        },
        postTranslate: function(t, e) {
            var i = this.chart,
            n = this.center;
            return t = this.startAngleRad + t,
            {
                x: i.plotLeft + n[0] + Math.cos(t) * e,
                y: i.plotTop + n[1] + Math.sin(t) * e
            }
        },
        getPlotBandPath: function(t, e, i) {
            var n, r, o, s, a = this.center,
            u = this.startAngleRad,
            d = a[2] / 2,
            p = [h(i.outerRadius, "100%"), i.innerRadius, h(i.thickness, 10)],
            f = /%$/,
            g = this.isCircular;
            return "polygon" === this.options.gridLineInterpolation ? s = this.getPlotLinePath(t).concat(this.getPlotLinePath(e, !0)) : (g || (p[0] = this.translate(t), p[1] = this.translate(e)), p = l(p,
            function(t) {
                return f.test(t) && (t = c(t, 10) * d / 100),
                t
            }), "circle" !== i.shape && g ? (n = u + this.translate(t), r = u + this.translate(e)) : (n = -Math.PI / 2, r = 1.5 * Math.PI, o = !0), s = this.chart.renderer.symbols.arc(this.left + a[0], this.top + a[1], p[0], p[0], {
                start: n,
                end: r,
                innerR: h(p[1], p[0] - p[2]),
                open: o
            })),
            s
        },
        getPlotLinePath: function(t, e) {
            var i, n, r, s, a = this,
            l = a.center,
            h = a.chart,
            c = a.getPosition(t);
            return a.isCircular ? s = ["M", l[0] + h.plotLeft, l[1] + h.plotTop, "L", c.x, c.y] : "circle" === a.options.gridLineInterpolation ? (t = a.translate(t), t && (s = a.getLinePath(0, t))) : (o(h.xAxis,
            function(t) {
                t.pane === a.pane && (i = t)
            }), s = [], t = a.translate(t), r = i.tickPositions, i.autoConnect && (r = r.concat([r[0]])), e && (r = [].concat(r).reverse()), o(r,
            function(e, r) {
                n = i.getPosition(e, t),
                s.push(r ? "L": "M", n.x, n.y)
            })),
            s
        },
        getTitlePosition: function() {
            var t = this.center,
            e = this.chart,
            i = this.options.title;
            return {
                x: e.plotLeft + t[0] + (i.x || 0),
                y: e.plotTop + t[1] - {
                    high: .5,
                    middle: .25,
                    low: 0
                } [i.align] * t[2] + (i.y || 0)
            }
        }
    };
    g(_, "init",
    function(t, n, r) {
        var o, l, c, u, d, p, g = this,
        m = n.angular,
        v = n.polar,
        y = r.isX,
        b = m && y,
        x = n.options,
        w = r.pane || 0;
        m ? (s(this, b ? E: M), o = !y, o && (this.defaultRadialOptions = this.defaultRadialGaugeOptions)) : v && (s(this, M), o = y, this.defaultRadialOptions = y ? this.defaultRadialXOptions: a(this.defaultYAxisOptions, this.defaultRadialYOptions)),
        t.call(this, n, r),
        b || !m && !v || (u = this.options, n.panes || (n.panes = []), this.pane = d = n.panes[w] = n.panes[w] || new i(f(x.pane)[w], n, g), p = d.options, n.inverted = !1, x.chart.zoomType = null, this.startAngleRad = l = (p.startAngle - 90) * Math.PI / 180, this.endAngleRad = c = (h(p.endAngle, p.startAngle + 360) - 90) * Math.PI / 180, this.offset = u.offset || 0, this.isCircular = o, o && r.max === e && c - l === 2 * Math.PI && (this.autoConnect = !0))
    }),
    g(L, "getPosition",
    function(t, e, i, n, r) {
        var o = this.axis;
        return o.getPosition ? o.getPosition(i) : t.call(this, e, i, n, r)
    }),
    g(L, "getLabelPosition",
    function(t, e, i, n, r, o, s, a, l) {
        var c, u = this.axis,
        d = o.y,
        p = o.align,
        f = (u.translate(this.pos) + u.startAngleRad + Math.PI / 2) / Math.PI * 180 % 360;
        return u.isRadial ? (c = u.getPosition(this.pos, u.center[2] / 2 + h(o.distance, -25)), "auto" === o.rotation ? n.attr({
            rotation: f
        }) : null === d && (d = u.chart.renderer.fontMetrics(n.styles.fontSize).b - n.getBBox().height / 2), null === p && (p = u.isCircular ? f > 20 && 160 > f ? "left": f > 200 && 340 > f ? "right": "center": "center", n.attr({
            align: p
        })), c.x += o.x, c.y += d) : c = t.call(this, e, i, n, r, o, s, a, l),
        c
    }),
    g(L, "getMarkPath",
    function(t, e, i, n, r, o, s) {
        var a, l, h = this.axis;
        return h.isRadial ? (a = h.getPosition(this.pos, h.center[2] / 2 + n), l = ["M", e, i, "L", a.x, a.y]) : l = t.call(this, e, i, n, r, o, s),
        l
    }),
    u.arearange = a(u.area, {
        lineWidth: 1,
        marker: null,
        threshold: null,
        tooltip: {
            pointFormat: '<span style="color:{series.color}">\u25cf</span> {series.name}: <b>{point.low}</b> - <b>{point.high}</b><br/>'
        },
        trackByArea: !0,
        dataLabels: {
            align: null,
            verticalAlign: null,
            xLow: 0,
            xHigh: 0,
            yLow: 0,
            yHigh: 0
        },
        states: {
            hover: {
                halo: !1
            }
        }
    }),
    d.arearange = p(d.area, {
        type: "arearange",
        pointArrayMap: ["low", "high"],
        toYData: function(t) {
            return [t.low, t.high]
        },
        pointValKey: "low",
        getSegments: function() {
            var t = this;
            o(t.points,
            function(e) {
                t.options.connectNulls || null !== e.low && null !== e.high ? null === e.low && null !== e.high && (e.y = e.high) : e.y = null
            }),
            k.prototype.getSegments.call(this)
        },
        translate: function() {
            var t = this,
            e = t.yAxis;
            d.area.prototype.translate.apply(t),
            o(t.points,
            function(t) {
                var i = t.low,
                n = t.high,
                r = t.plotY;
                null === n && null === i ? t.y = null: null === i ? (t.plotLow = t.plotY = null, t.plotHigh = e.translate(n, 0, 1, 0, 1)) : null === n ? (t.plotLow = r, t.plotHigh = null) : (t.plotLow = r, t.plotHigh = e.translate(n, 0, 1, 0, 1))
            })
        },
        getSegmentPath: function(t) {
            var e, i, n, r, o, s = [],
            a = t.length,
            l = k.prototype.getSegmentPath,
            h = this.options,
            c = h.step;
            for (e = HighchartsAdapter.grep(t,
            function(t) {
                return null !== t.plotLow
            }); a--;) i = t[a],
            null !== i.plotHigh && s.push({
                plotX: i.plotX,
                plotY: i.plotHigh
            });
            return r = l.call(this, e),
            c && (c === !0 && (c = "left"), h.step = {
                left: "right",
                center: "center",
                right: "left"
            } [c]),
            o = l.call(this, s),
            h.step = c,
            n = [].concat(r, o),
            o[0] = "L",
            this.areaPath = this.areaPath.concat(r, o),
            n
        },
        drawDataLabels: function() {
            var t, e, i = this.data,
            n = i.length,
            r = [],
            o = k.prototype,
            s = this.options.dataLabels,
            a = s.align,
            l = this.chart.inverted;
            if (s.enabled || this._hasPointLabels) {
                for (t = n; t--;) e = i[t],
                e.y = e.high,
                e._plotY = e.plotY,
                e.plotY = e.plotHigh,
                r[t] = e.dataLabel,
                e.dataLabel = e.dataLabelUpper,
                e.below = !1,
                l ? (a || (s.align = "left"), s.x = s.xHigh) : s.y = s.yHigh;
                for (o.drawDataLabels && o.drawDataLabels.apply(this, arguments), t = n; t--;) e = i[t],
                e.dataLabelUpper = e.dataLabel,
                e.dataLabel = r[t],
                e.y = e.low,
                e.plotY = e._plotY,
                e.below = !0,
                l ? (a || (s.align = "right"), s.x = s.xLow) : s.y = s.yLow;
                o.drawDataLabels && o.drawDataLabels.apply(this, arguments)
            }
            s.align = a
        },
        alignDataLabel: function() {
            d.column.prototype.alignDataLabel.apply(this, arguments)
        },
        getSymbol: P,
        drawPoints: P
    }),
    u.areasplinerange = a(u.arearange),
    d.areasplinerange = p(d.arearange, {
        type: "areasplinerange",
        getPointSpline: d.spline.prototype.getPointSpline
    }),
    function() {
        var t = d.column.prototype;
        u.columnrange = a(u.column, u.arearange, {
            lineWidth: 1,
            pointRange: null
        }),
        d.columnrange = p(d.arearange, {
            type: "columnrange",
            translate: function() {
                var e, i = this,
                n = i.yAxis;
                t.translate.apply(i),
                o(i.points,
                function(t) {
                    var r, o, s, a = t.shapeArgs,
                    l = i.options.minPointLength;
                    t.tooltipPos = null,
                    t.plotHigh = e = n.translate(t.high, 0, 1, 0, 1),
                    t.plotLow = t.plotY,
                    s = e,
                    o = t.plotY - e,
                    l > o && (r = l - o, o += r, s -= r / 2),
                    a.height = o,
                    a.y = s
                })
            },
            trackerGroups: ["group", "dataLabelsGroup"],
            drawGraph: P,
            pointAttrToOptions: t.pointAttrToOptions,
            drawPoints: t.drawPoints,
            drawTracker: t.drawTracker,
            animate: t.animate,
            getColumnMetrics: t.getColumnMetrics
        })
    } (),
    u.gauge = a(u.line, {
        dataLabels: {
            enabled: !0,
            defer: !1,
            y: 15,
            borderWidth: 1,
            borderColor: "silver",
            borderRadius: 3,
            crop: !1,
            style: {
                fontWeight: "bold"
            },
            verticalAlign: "top",
            zIndex: 2
        },
        dial: {},
        pivot: {},
        tooltip: {
            headerFormat: ""
        },
        showInLegend: !1
    });
    var F = p(y, {
        setState: function(t) {
            this.state = t
        }
    }),
    N = {
        type: "gauge",
        pointClass: F,
        angular: !0,
        drawGraph: P,
        fixedBox: !0,
        forceDL: !0,
        trackerGroups: ["group", "dataLabelsGroup"],
        translate: function() {
            var t = this,
            e = t.yAxis,
            i = t.options,
            n = e.center;
            t.generatePoints(),
            o(t.points,
            function(t) {
                var r = a(i.dial, t.dial),
                o = c(h(r.radius, 80)) * n[2] / 200,
                s = c(h(r.baseLength, 70)) * o / 100,
                l = c(h(r.rearLength, 10)) * o / 100,
                u = r.baseWidth || 3,
                d = r.topWidth || 1,
                p = i.overshoot,
                f = e.startAngleRad + e.translate(t.y, null, null, null, !0);
                p && "number" == typeof p ? (p = p / 180 * Math.PI, f = Math.max(e.startAngleRad - p, Math.min(e.endAngleRad + p, f))) : i.wrap === !1 && (f = Math.max(e.startAngleRad, Math.min(e.endAngleRad, f))),
                f = 180 * f / Math.PI,
                t.shapeType = "path",
                t.shapeArgs = {
                    d: r.path || ["M", -l, -u / 2, "L", s, -u / 2, o, -d / 2, o, d / 2, s, u / 2, -l, u / 2, "z"],
                    translateX: n[0],
                    translateY: n[1],
                    rotation: f
                },
                t.plotX = n[0],
                t.plotY = n[1]
            })
        },
        drawPoints: function() {
            var t = this,
            e = t.yAxis.center,
            i = t.pivot,
            n = t.options,
            r = n.pivot,
            s = t.chart.renderer;
            o(t.points,
            function(e) {
                var i = e.graphic,
                r = e.shapeArgs,
                o = r.d,
                l = a(n.dial, e.dial);
                i ? (i.animate(r), r.d = o) : e.graphic = s[e.shapeType](r).attr({
                    stroke: l.borderColor || "none",
                    "stroke-width": l.borderWidth || 0,
                    fill: l.backgroundColor || "black",
                    rotation: r.rotation
                }).add(t.group)
            }),
            i ? i.animate({
                translateX: e[0],
                translateY: e[1]
            }) : t.pivot = s.circle(0, 0, h(r.radius, 5)).attr({
                "stroke-width": r.borderWidth || 0,
                stroke: r.borderColor || "silver",
                fill: r.backgroundColor || "black"
            }).translate(e[0], e[1]).add(t.group)
        },
        animate: function(t) {
            var e = this;
            t || (o(e.points,
            function(t) {
                var i = t.graphic;
                i && (i.attr({
                    rotation: 180 * e.yAxis.startAngleRad / Math.PI
                }), i.animate({
                    rotation: t.shapeArgs.rotation
                },
                e.options.animation))
            }), e.animate = null)
        },
        render: function() {
            this.group = this.plotGroup("group", "series", this.visible ? "visible": "hidden", this.options.zIndex, this.chart.seriesGroup),
            k.prototype.render.call(this),
            this.group.clip(this.chart.clipRect)
        },
        setData: function(t, e) {
            k.prototype.setData.call(this, t, !1),
            this.processData(),
            this.generatePoints(),
            h(e, !0) && this.chart.redraw()
        },
        drawTracker: w && w.drawTrackerPoint
    };
    d.gauge = p(d.line, N),
    u.boxplot = a(u.column, {
        fillColor: "#FFFFFF",
        lineWidth: 1,
        medianWidth: 2,
        states: {
            hover: {
                brightness: -.3
            }
        },
        threshold: null,
        tooltip: {
            pointFormat: '<span style="color:{series.color}">\u25cf</span> <b> {series.name}</b><br/>Maximum: {point.high}<br/>Upper quartile: {point.q3}<br/>Median: {point.median}<br/>Lower quartile: {point.q1}<br/>Minimum: {point.low}<br/>'
        },
        whiskerLength: "50%",
        whiskerWidth: 2
    }),
    d.boxplot = p(d.column, {
        type: "boxplot",
        pointArrayMap: ["low", "q1", "median", "q3", "high"],
        toYData: function(t) {
            return [t.low, t.q1, t.median, t.q3, t.high]
        },
        pointValKey: "high",
        pointAttrToOptions: {
            fill: "fillColor",
            stroke: "color",
            "stroke-width": "lineWidth"
        },
        drawDataLabels: P,
        translate: function() {
            var t = this,
            e = t.yAxis,
            i = t.pointArrayMap;
            d.column.prototype.translate.apply(t),
            o(t.points,
            function(t) {
                o(i,
                function(i) {
                    null !== t[i] && (t[i + "Plot"] = e.translate(t[i], 0, 1, 0, 1))
                })
            })
        },
        drawPoints: function() {
            var t, i, n, r, s, a, l, c, u, d, p, f, g, m, v, y, b, x, w, k, S, D, A = this,
            P = A.points,
            _ = A.options,
            L = A.chart,
            E = L.renderer,
            M = A.doQuartiles !== !1,
            F = parseInt(A.options.whiskerLength, 10) / 100;
            o(P,
            function(o) {
                u = o.graphic,
                S = o.shapeArgs,
                p = {},
                m = {},
                y = {},
                D = o.color || A.color,
                o.plotY !== e && (t = o.pointAttr[o.selected ? "selected": ""], b = S.width, x = T(S.x), w = x + b, k = C(b / 2), i = T(M ? o.q1Plot: o.lowPlot), n = T(M ? o.q3Plot: o.lowPlot), r = T(o.highPlot), s = T(o.lowPlot), p.stroke = o.stemColor || _.stemColor || D, p["stroke-width"] = h(o.stemWidth, _.stemWidth, _.lineWidth), p.dashstyle = o.stemDashStyle || _.stemDashStyle, m.stroke = o.whiskerColor || _.whiskerColor || D, m["stroke-width"] = h(o.whiskerWidth, _.whiskerWidth, _.lineWidth), y.stroke = o.medianColor || _.medianColor || D, y["stroke-width"] = h(o.medianWidth, _.medianWidth, _.lineWidth), y["stroke-linecap"] = "round", l = p["stroke-width"] % 2 / 2, c = x + k + l, d = ["M", c, n, "L", c, r, "M", c, i, "L", c, s], M && (l = t["stroke-width"] % 2 / 2, c = T(c) + l, i = T(i) + l, n = T(n) + l, x += l, w += l, f = ["M", x, n, "L", x, i, "L", w, i, "L", w, n, "L", x, n, "z"]), F && (l = m["stroke-width"] % 2 / 2, r += l, s += l, g = ["M", c - k * F, r, "L", c + k * F, r, "M", c - k * F, s, "L", c + k * F, s]), l = y["stroke-width"] % 2 / 2, a = C(o.medianPlot) + l, v = ["M", x, a, "L", w, a], u ? (o.stem.animate({
                    d: d
                }), F && o.whiskers.animate({
                    d: g
                }), M && o.box.animate({
                    d: f
                }), o.medianShape.animate({
                    d: v
                })) : (o.graphic = u = E.g().add(A.group), o.stem = E.path(d).attr(p).add(u), F && (o.whiskers = E.path(g).attr(m).add(u)), M && (o.box = E.path(f).attr(t).add(u)), o.medianShape = E.path(v).attr(y).add(u)))
            })
        }
    }),
    u.errorbar = a(u.boxplot, {
        color: "#000000",
        grouping: !1,
        linkedTo: ":previous",
        tooltip: {
            pointFormat: '<span style="color:{series.color}">\u25cf</span> {series.name}: <b>{point.low}</b> - <b>{point.high}</b><br/>'
        },
        whiskerWidth: null
    }),
    d.errorbar = p(d.boxplot, {
        type: "errorbar",
        pointArrayMap: ["low", "high"],
        toYData: function(t) {
            return [t.low, t.high]
        },
        pointValKey: "high",
        doQuartiles: !1,
        drawDataLabels: d.arearange ? d.arearange.prototype.drawDataLabels: P,
        getColumnMetrics: function() {
            return this.linkedParent && this.linkedParent.columnMetrics || d.column.prototype.getColumnMetrics.call(this)
        }
    }),
    u.waterfall = a(u.column, {
        lineWidth: 1,
        lineColor: "#333",
        dashStyle: "dot",
        borderColor: "#333",
        states: {
            hover: {
                lineWidthPlus: 0
            }
        }
    }),
    d.waterfall = p(d.column, {
        type: "waterfall",
        upColorProp: "fill",
        pointArrayMap: ["low", "y"],
        pointValKey: "y",
        init: function(t, e) {
            e.stacking = !0,
            d.column.prototype.init.call(this, t, e)
        },
        translate: function() {
            var t, e, i, n, r, o, s, a, l, h, c, u = this,
            p = u.options,
            f = u.yAxis,
            g = p.threshold;
            for (d.column.prototype.translate.apply(this), a = l = g, i = u.points, e = 0, t = i.length; t > e; e++) n = i[e],
            r = n.shapeArgs,
            o = u.getStack(e),
            h = o.points[u.index + "," + e],
            isNaN(n.y) && (n.y = u.yData[e]),
            s = D(a, a + n.y) + h[0],
            r.y = f.translate(s, 0, 1),
            n.isSum ? (r.y = f.translate(h[1], 0, 1), r.height = f.translate(h[0], 0, 1) - r.y) : n.isIntermediateSum ? (r.y = f.translate(h[1], 0, 1), r.height = f.translate(l, 0, 1) - r.y, l = h[1]) : a += o.total,
            r.height < 0 && (r.y += r.height, r.height *= -1),
            n.plotY = r.y = C(r.y) - u.borderWidth % 2 / 2,
            r.height = D(C(r.height), .001),
            n.yBottom = r.y + r.height,
            c = n.plotY + (n.negative ? r.height: 0),
            u.chart.inverted ? n.tooltipPos[0] = f.len - c: n.tooltipPos[1] = c
        },
        processData: function(t) {
            var e, i, n, r, o, s, a, l = this,
            h = l.options,
            c = l.yData,
            u = l.points,
            d = c.length,
            p = h.threshold || 0;
            for (n = i = r = o = p, a = 0; d > a; a++) s = c[a],
            e = u && u[a] ? u[a] : {},
            "sum" === s || e.isSum ? c[a] = n: "intermediateSum" === s || e.isIntermediateSum ? c[a] = i: (n += s, i += s),
            r = Math.min(n, r),
            o = Math.max(n, o);
            k.prototype.processData.call(this, t),
            l.dataMin = r,
            l.dataMax = o
        },
        toYData: function(t) {
            return t.isSum ? 0 === t.x ? null: "sum": t.isIntermediateSum ? 0 === t.x ? null: "intermediateSum": t.y
        },
        getAttribs: function() {
            d.column.prototype.getAttribs.apply(this, arguments);
            var e = this,
            i = e.options,
            n = i.states,
            r = i.upColor || e.color,
            s = t.Color(r).brighten(.1).get(),
            l = a(e.pointAttr),
            h = e.upColorProp;
            l[""][h] = r,
            l.hover[h] = n.hover.upColor || s,
            l.select[h] = n.select.upColor || r,
            o(e.points,
            function(t) {
                t.y > 0 && !t.color && (t.pointAttr = l, t.color = r)
            })
        },
        getGraphPath: function() {
            var t, e, i, n, r = this.data,
            o = r.length,
            s = this.options.lineWidth + this.borderWidth,
            a = C(s) % 2 / 2,
            l = [],
            h = "M",
            c = "L";
            for (i = 1; o > i; i++) e = r[i].shapeArgs,
            t = r[i - 1].shapeArgs,
            n = [h, t.x + t.width, t.y + a, c, e.x, t.y + a],
            r[i - 1].y < 0 && (n[2] += t.height, n[5] += t.height),
            l = l.concat(n);
            return l
        },
        getExtremes: P,
        getStack: function(t) {
            var e = this.yAxis,
            i = e.stacks,
            n = this.stackKey;
            return this.processedYData[t] < this.options.threshold && (n = "-" + n),
            i[n][t]
        },
        drawGraph: k.prototype.drawGraph
    }),
    u.bubble = a(u.scatter, {
        dataLabels: {
            formatter: function() {
                return this.point.z
            },
            inside: !0,
            style: {
                color: "white",
                textShadow: "0px 0px 3px black"
            },
            verticalAlign: "middle"
        },
        marker: {
            lineColor: null,
            lineWidth: 1
        },
        minSize: 8,
        maxSize: "20%",
        states: {
            hover: {
                halo: {
                    size: 5
                }
            }
        },
        tooltip: {
            pointFormat: "({point.x}, {point.y}), Size: {point.z}"
        },
        turboThreshold: 0,
        zThreshold: 0
    });
    var I = p(y, {
        haloPath: function() {
            return y.prototype.haloPath.call(this, this.shapeArgs.r + this.series.options.states.hover.halo.size)
        }
    });
    d.bubble = p(d.scatter, {
        type: "bubble",
        pointClass: I,
        pointArrayMap: ["y", "z"],
        parallelArrays: ["x", "y", "z"],
        trackerGroups: ["group", "dataLabelsGroup"],
        bubblePadding: !0,
        pointAttrToOptions: {
            stroke: "lineColor",
            "stroke-width": "lineWidth",
            fill: "fillColor"
        },
        applyOpacity: function(t) {
            var e = this.options.marker,
            i = h(e.fillOpacity, .5);
            return t = t || e.fillColor || this.color,
            1 !== i && (t = A(t).setOpacity(i).get("rgba")),
            t
        },
        convertAttribs: function() {
            var t = k.prototype.convertAttribs.apply(this, arguments);
            return t.fill = this.applyOpacity(t.fill),
            t
        },
        getRadii: function(t, e, i, n) {
            var r, o, s, a, l = this.zData,
            h = [],
            c = "width" !== this.options.sizeBy;
            for (o = 0, r = l.length; r > o; o++) a = e - t,
            s = a > 0 ? (l[o] - t) / (e - t) : .5,
            c && s >= 0 && (s = Math.sqrt(s)),
            h.push(S.ceil(i + s * (n - i)) / 2);
            this.radii = h
        },
        animate: function(t) {
            var e = this.options.animation;
            t || (o(this.points,
            function(t) {
                var i = t.graphic,
                n = t.shapeArgs;
                i && n && (i.attr("r", 1), i.animate({
                    r: n.r
                },
                e))
            }), this.animate = null)
        },
        translate: function() {
            var t, i, n, r = this.data,
            o = this.radii;
            for (d.scatter.prototype.translate.call(this), t = r.length; t--;) i = r[t],
            n = o ? o[t] : 0,
            i.negative = i.z < (this.options.zThreshold || 0),
            n >= this.minPxSize / 2 ? (i.shapeType = "circle", i.shapeArgs = {
                x: i.plotX,
                y: i.plotY,
                r: n
            },
            i.dlBox = {
                x: i.plotX - n,
                y: i.plotY - n,
                width: 2 * n,
                height: 2 * n
            }) : i.shapeArgs = i.plotY = i.dlBox = e
        },
        drawLegendSymbol: function(t, e) {
            var i = c(t.itemStyle.fontSize) / 2;
            e.legendSymbol = this.chart.renderer.circle(i, t.baseline - i, i).attr({
                zIndex: 3
            }).add(e.legendGroup),
            e.legendSymbol.isMarker = !0
        },
        drawPoints: d.column.prototype.drawPoints,
        alignDataLabel: d.column.prototype.alignDataLabel
    }),
    m.prototype.beforePadding = function() {
        var t = this,
        i = this.len,
        s = this.chart,
        a = 0,
        l = i,
        u = this.isXAxis,
        d = u ? "xData": "yData",
        p = this.min,
        f = {},
        g = S.min(s.plotWidth, s.plotHeight),
        m = Number.MAX_VALUE,
        v = -Number.MAX_VALUE,
        y = this.max - p,
        b = i / y,
        x = [];
        this.tickPositions && (o(this.series,
        function(e) {
            var i, a = e.options; ! e.bubblePadding || !e.visible && s.options.chart.ignoreHiddenSeries || (t.allowZoomOutside = !0, x.push(e), u && (o(["minSize", "maxSize"],
            function(t) {
                var e = a[t],
                i = /%$/.test(e);
                e = c(e),
                f[t] = i ? g * e / 100 : e
            }), e.minPxSize = f.minSize, i = e.zData, i.length && (m = h(a.zMin, S.min(m, S.max(n(i), a.displayNegative === !1 ? a.zThreshold: -Number.MAX_VALUE))), v = h(a.zMax, S.max(v, r(i))))))
        }), o(x,
        function(t) {
            var e, i = t[d],
            n = i.length;
            if (u && t.getRadii(m, v, f.minSize, f.maxSize), y > 0) for (; n--;)"number" == typeof i[n] && (e = t.radii[n], a = Math.min((i[n] - p) * b - e, a), l = Math.max((i[n] - p) * b + e, l))
        }), x.length && y > 0 && h(this.options.min, this.userMin) === e && h(this.options.max, this.userMax) === e && (l -= i, b *= (i + a - l) / i, this.min += a / b, this.max += l / b))
    },
    function() {
        function t(t, e, i) {
            t.call(this, e, i),
            this.chart.polar && (this.closeSegment = function(t) {
                var e = this.xAxis.center;
                t.push("L", e[0], e[1])
            },
            this.closedStacks = !0)
        }
        function e(t, e) {
            var i, n = this.chart,
            r = this.options.animation,
            o = this.group,
            s = this.markerGroup,
            a = this.xAxis.center,
            l = n.plotLeft,
            h = n.plotTop;
            n.polar ? n.renderer.isSVG && (r === !0 && (r = {}), e ? (i = {
                translateX: a[0] + l,
                translateY: a[1] + h,
                scaleX: .001,
                scaleY: .001
            },
            o.attr(i), s && s.attr(i)) : (i = {
                translateX: l,
                translateY: h,
                scaleX: 1,
                scaleY: 1
            },
            o.animate(i, r), s && s.animate(i, r), this.animate = null)) : t.call(this, e)
        }
        var i, n = k.prototype,
        r = b.prototype;
        n.toXY = function(t) {
            var e, i, n = this.chart,
            r = t.plotX,
            o = t.plotY;
            t.rectPlotX = r,
            t.rectPlotY = o,
            i = (r / Math.PI * 180 + this.xAxis.pane.options.startAngle) % 360,
            0 > i && (i += 360),
            t.clientX = i,
            e = this.xAxis.postTranslate(t.plotX, this.yAxis.len - o),
            t.plotX = t.polarPlotX = e.x - n.plotLeft,
            t.plotY = t.polarPlotY = e.y - n.plotTop
        },
        n.orderTooltipPoints = function(t) {
            this.chart.polar && (t.sort(function(t, e) {
                return t.clientX - e.clientX
            }), t[0] && (t[0].wrappedClientX = t[0].clientX + 360, t.push(t[0])))
        },
        d.area && g(d.area.prototype, "init", t),
        d.areaspline && g(d.areaspline.prototype, "init", t),
        d.spline && g(d.spline.prototype, "getPointSpline",
        function(t, e, i, n) {
            var r, o, s, a, l, h, c, u, d, p, f, g, m, v, y, b, x, w, k = 1.5,
            S = k + 1;
            return this.chart.polar ? (o = i.plotX, s = i.plotY, a = e[n - 1], l = e[n + 1], this.connectEnds && (a || (a = e[e.length - 2]), l || (l = e[1])), a && l && (h = a.plotX, c = a.plotY, u = l.plotX, d = l.plotY, p = (k * o + h) / S, f = (k * s + c) / S, g = (k * o + u) / S, m = (k * s + d) / S, v = Math.sqrt(Math.pow(p - o, 2) + Math.pow(f - s, 2)), y = Math.sqrt(Math.pow(g - o, 2) + Math.pow(m - s, 2)), b = Math.atan2(f - s, p - o), x = Math.atan2(m - s, g - o), w = Math.PI / 2 + (b + x) / 2, Math.abs(b - w) > Math.PI / 2 && (w -= Math.PI), p = o + Math.cos(w) * v, f = s + Math.sin(w) * v, g = o + Math.cos(Math.PI + w) * y, m = s + Math.sin(Math.PI + w) * y, i.rightContX = g, i.rightContY = m), n ? (r = ["C", a.rightContX || a.plotX, a.rightContY || a.plotY, p || o, f || s, o, s], a.rightContX = a.rightContY = null) : r = ["M", o, s]) : r = t.call(this, e, i, n),
            r
        }),
        g(n, "translate",
        function(t) {
            if (t.call(this), this.chart.polar && !this.preventPostTranslate) for (var e = this.points,
            i = e.length; i--;) this.toXY(e[i])
        }),
        g(n, "getSegmentPath",
        function(t, e) {
            var i = this.points;
            return this.chart.polar && this.options.connectEnds !== !1 && e[e.length - 1] === i[i.length - 1] && null !== i[0].y && (this.connectEnds = !0, e = [].concat(e, [i[0]])),
            t.call(this, e)
        }),
        g(n, "animate", e),
        g(n, "setTooltipPoints",
        function(t, e) {
            return this.chart.polar && s(this.xAxis, {
                tooltipLen: 360
            }),
            t.call(this, e)
        }),
        d.column && (i = d.column.prototype, g(i, "animate", e), g(i, "translate",
        function(t) {
            var e, i, n, r, o = this.xAxis,
            s = this.yAxis.len,
            a = o.center,
            l = o.startAngleRad,
            c = this.chart.renderer;
            if (this.preventPostTranslate = !0, t.call(this), o.isRadial) for (i = this.points, r = i.length; r--;) n = i[r],
            e = n.barX + l,
            n.shapeType = "path",
            n.shapeArgs = {
                d: c.symbols.arc(a[0], a[1], s - n.plotY, null, {
                    start: e,
                    end: e + n.pointWidth,
                    innerR: s - h(n.yBottom, s)
                })
            },
            this.toXY(n),
            n.tooltipPos = [n.plotX, n.plotY],
            n.ttBelow = n.plotY > a[1]
        }), g(i, "alignDataLabel",
        function(t, e, i, r, o, s) {
            if (this.chart.polar) {
                var a, l, h = e.rectPlotX / Math.PI * 180;
                null === r.align && (a = h > 20 && 160 > h ? "left": h > 200 && 340 > h ? "right": "center", r.align = a),
                null === r.verticalAlign && (l = 45 > h || h > 315 ? "bottom": h > 135 && 225 > h ? "top": "middle", r.verticalAlign = l),
                n.alignDataLabel.call(this, e, i, r, o, s)
            } else t.call(this, e, i, r, o, s)
        })),
        g(r, "getIndex",
        function(t, e) {
            var i, n, r, o, s = this.chart;
            return s.polar ? (n = s.xAxis[0].center, r = e.chartX - n[0] - s.plotLeft, o = e.chartY - n[1] - s.plotTop, i = 180 - Math.round(Math.atan2(r, o) / Math.PI * 180)) : i = t.call(this, e),
            i
        }),
        g(r, "getCoordinates",
        function(t, e) {
            var i = this.chart,
            n = {
                xAxis: [],
                yAxis: []
            };
            return i.polar ? o(i.axes,
            function(t) {
                var r = t.isXAxis,
                o = t.center,
                s = e.chartX - o[0] - i.plotLeft,
                a = e.chartY - o[1] - i.plotTop;
                n[r ? "xAxis": "yAxis"].push({
                    axis: t,
                    value: t.translate(r ? Math.PI - Math.atan2(s, a) : Math.sqrt(Math.pow(s, 2) + Math.pow(a, 2)), !0)
                })
            }) : n = t.call(this, e),
            n
        })
    } ()
} (Highcharts),
function($) {
    $.extend({
        metadata: {
            defaults: {
                type: "class",
                name: "metadata",
                cre: /({.*})/,
                single: "metadata"
            },
            setType: function(t, e) {
                this.defaults.type = t,
                this.defaults.name = e
            },
            get: function(elem, opts) {
                var settings = $.extend({},
                this.defaults, opts);
                settings.single.length || (settings.single = "metadata");
                var data = $.data(elem, settings.single);
                if (data) return data;
                if (data = "{}", "class" == settings.type) {
                    var m = settings.cre.exec(elem.className);
                    m && (data = m[1])
                } else if ("elem" == settings.type) {
                    if (!elem.getElementsByTagName) return void 0;
                    var e = elem.getElementsByTagName(settings.name);
                    e.length && (data = $.trim(e[0].innerHTML))
                } else if (void 0 != elem.getAttribute) {
                    var attr = elem.getAttribute(settings.name);
                    attr && (data = attr)
                }
                return data.indexOf("{") < 0 && (data = "{" + data + "}"),
                data = eval("(" + data + ")"),
                $.data(elem, settings.single, data),
                data
            }
        }
    }),
    $.fn.metadata = function(t) {
        return $.metadata.get(this[0], t)
    }
} (jQuery),
function(t) {
    t.extend(t.fn, {
        validate: function(e) {
            if (!this.length) return void(e && e.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
            var i = t.data(this[0], "validator");
            return i ? i: (this.attr("novalidate", "novalidate"), i = new t.validator(e, this[0]), t.data(this[0], "validator", i), i.settings.onsubmit && (this.validateDelegate(":submit", "click",
            function(e) {
                i.settings.submitHandler && (i.submitButton = e.target),
                t(e.target).hasClass("cancel") && (i.cancelSubmit = !0),
                void 0 !== t(e.target).attr("formnovalidate") && (i.cancelSubmit = !0)
            }), this.submit(function(e) {
                function n() {
                    var n;
                    return i.settings.submitHandler ? (i.submitButton && (n = t("<input type='hidden'/>").attr("name", i.submitButton.name).val(t(i.submitButton).val()).appendTo(i.currentForm)), i.settings.submitHandler.call(i, i.currentForm, e), i.submitButton && n.remove(), !1) : !0
                }
                return i.settings.debug && e.preventDefault(),
                i.cancelSubmit ? (i.cancelSubmit = !1, n()) : i.form() ? i.pendingRequest ? (i.formSubmitted = !0, !1) : n() : (i.focusInvalid(), !1)
            })), i)
        },
        valid: function() {
            if (t(this[0]).is("form")) return this.validate().form();
            var e = !0,
            i = t(this[0].form).validate();
            return this.each(function() {
                e = e && i.element(this)
            }),
            e
        },
        removeAttrs: function(e) {
            var i = {},
            n = this;
            return t.each(e.split(/\s/),
            function(t, e) {
                i[e] = n.attr(e),
                n.removeAttr(e)
            }),
            i
        },
        rules: function(e, i) {
            var n = this[0];
            if (e) {
                var r = t.data(n.form, "validator").settings,
                o = r.rules,
                s = t.validator.staticRules(n);
                switch (e) {
                case "add":
                    t.extend(s, t.validator.normalizeRule(i)),
                    delete s.messages,
                    o[n.name] = s,
                    i.messages && (r.messages[n.name] = t.extend(r.messages[n.name], i.messages));
                    break;
                case "remove":
                    if (!i) return delete o[n.name],
                    s;
                    var a = {};
                    return t.each(i.split(/\s/),
                    function(t, e) {
                        a[e] = s[e],
                        delete s[e]
                    }),
                    a
                }
            }
            var l = t.validator.normalizeRules(t.extend({},
            t.validator.classRules(n), t.validator.attributeRules(n), t.validator.dataRules(n), t.validator.staticRules(n)), n);
            if (l.required) {
                var h = l.required;
                delete l.required,
                l = t.extend({
                    required: h
                },
                l)
            }
            return l
        }
    }),
    t.extend(t.expr[":"], {
        blank: function(e) {
            return ! t.trim("" + t(e).val())
        },
        filled: function(e) {
            return !! t.trim("" + t(e).val())
        },
        unchecked: function(e) {
            return ! t(e).prop("checked")
        }
    }),
    t.validator = function(e, i) {
        this.settings = t.extend(!0, {},
        t.validator.defaults, e),
        this.currentForm = i,
        this.init()
    },
    t.validator.format = function(e, i) {
        return 1 === arguments.length ?
        function() {
            var i = t.makeArray(arguments);
            return i.unshift(e),
            t.validator.format.apply(this, i)
        }: (arguments.length > 2 && i.constructor !== Array && (i = t.makeArray(arguments).slice(1)), i.constructor !== Array && (i = [i]), t.each(i,
        function(t, i) {
            e = e.replace(new RegExp("\\{" + t + "\\}", "g"),
            function() {
                return i
            })
        }), e)
    },
    t.extend(t.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "label",
            focusInvalid: !0,
            errorContainer: t([]),
            errorLabelContainer: t([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function(t) {
                this.lastActive = t,
                this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, t, this.settings.errorClass, this.settings.validClass), this.addWrapper(this.errorsFor(t)).hide())
            },
            onfocusout: function(t) {
                this.checkable(t) || !(t.name in this.submitted) && this.optional(t) || this.element(t)
            },
            onkeyup: function(t, e) { (9 !== e.which || "" !== this.elementValue(t)) && (t.name in this.submitted || t === this.lastElement) && this.element(t)
            },
            onclick: function(t) {
                t.name in this.submitted ? this.element(t) : t.parentNode.name in this.submitted && this.element(t.parentNode)
            },
            highlight: function(e, i, n) {
                "radio" === e.type ? this.findByName(e.name).addClass(i).removeClass(n) : t(e).addClass(i).removeClass(n)
            },
            unhighlight: function(e, i, n) {
                "radio" === e.type ? this.findByName(e.name).removeClass(i).addClass(n) : t(e).removeClass(i).addClass(n)
            }
        },
        setDefaults: function(e) {
            t.extend(t.validator.defaults, e)
        },
        messages: {
            required: "\u5fc5\u9009\u5b57\u6bb5",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            creditcard: "Please enter a valid credit card number.",
            equalTo: "Please enter the same value again.",
            maxlength: t.validator.format("Please enter no more than {0} characters."),
            minlength: t.validator.format("Please enter at least {0} characters."),
            rangelength: t.validator.format("Please enter a value between {0} and {1} characters long."),
            range: t.validator.format("Please enter a value between {0} and {1}."),
            max: t.validator.format("Please enter a value less than or equal to {0}."),
            min: t.validator.format("Please enter a value greater than or equal to {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                function e(e) {
                    var i = t.data(this[0].form, "validator"),
                    n = "on" + e.type.replace(/^validate/, "");
                    i.settings[n] && i.settings[n].call(i, this[0], e)
                }
                this.labelContainer = t(this.settings.errorLabelContainer),
                this.errorContext = this.labelContainer.length && this.labelContainer || t(this.currentForm),
                this.containers = t(this.settings.errorContainer).add(this.settings.errorLabelContainer),
                this.submitted = {},
                this.valueCache = {},
                this.pendingRequest = 0,
                this.pending = {},
                this.invalid = {},
                this.reset();
                var i = this.groups = {};
                t.each(this.settings.groups,
                function(e, n) {
                    "string" == typeof n && (n = n.split(/\s/)),
                    t.each(n,
                    function(t, n) {
                        i[n] = e
                    })
                });
                var n = this.settings.rules;
                t.each(n,
                function(e, i) {
                    n[e] = t.validator.normalizeRule(i)
                }),
                t(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", e).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", e),
                this.settings.invalidHandler && t(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
            },
            form: function() {
                return this.checkForm(),
                t.extend(this.submitted, this.errorMap),
                this.invalid = t.extend({},
                this.errorMap),
                this.valid() || t(this.currentForm).triggerHandler("invalid-form", [this]),
                this.showErrors(),
                this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var t = 0,
                e = this.currentElements = this.elements(); e[t]; t++) this.check(e[t]);
                return this.valid()
            },
            element: function(e) {
                e = this.validationTargetFor(this.clean(e)),
                this.lastElement = e,
                this.prepareElement(e),
                this.currentElements = t(e);
                var i = this.check(e) !== !1;
                return i ? delete this.invalid[e.name] : this.invalid[e.name] = !0,
                this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)),
                this.showErrors(),
                i
            },
            showErrors: function(e) {
                if (e) {
                    t.extend(this.errorMap, e),
                    this.errorList = [];
                    for (var i in e) this.errorList.push({
                        message: e[i],
                        element: this.findByName(i)[0]
                    });
                    this.successList = t.grep(this.successList,
                    function(t) {
                        return ! (t.name in e)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                t.fn.resetForm && t(this.currentForm).resetForm(),
                this.submitted = {},
                this.lastElement = null,
                this.prepareForm(),
                this.hideErrors(),
                this.elements().removeClass(this.settings.errorClass).removeData("previousValue")
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(t) {
                var e = 0;
                for (var i in t) e++;
                return e
            },
            hideErrors: function() {
                this.addWrapper(this.toHide).hide()
            },
            valid: function() {
                return 0 === this.size()
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid) try {
                    t(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                } catch(e) {}
            },
            findLastActive: function() {
                var e = this.lastActive;
                return e && 1 === t.grep(this.errorList,
                function(t) {
                    return t.element.name === e.name
                }).length && e
            },
            elements: function() {
                var e = this,
                i = {};
                return t(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function() {
                    return ! this.name && e.settings.debug && window.console && console.error("%o has no name assigned", this),
                    this.name in i || !e.objectLength(t(this).rules()) ? !1 : (i[this.name] = !0, !0)
                })
            },
            clean: function(e) {
                return t(e)[0]
            },
            errors: function() {
                var e = this.settings.errorClass.replace(" ", ".");
                return t(this.settings.errorElement + "." + e, this.errorContext)
            },
            reset: function() {
                this.successList = [],
                this.errorList = [],
                this.errorMap = {},
                this.toShow = t([]),
                this.toHide = t([]),
                this.currentElements = t([])
            },
            prepareForm: function() {
                this.reset(),
                this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(t) {
                this.reset(),
                this.toHide = this.errorsFor(t)
            },
            elementValue: function(e) {
                var i = t(e).attr("type"),
                n = t(e).val();
                return "radio" === i || "checkbox" === i ? t("input[name='" + t(e).attr("name") + "']:checked").val() : "string" == typeof n ? n.replace(/\r/g, "") : n
            },
            check: function(e) {
                e = this.validationTargetFor(this.clean(e));
                var i, n = t(e).rules(),
                r = !1,
                o = this.elementValue(e);
                for (var s in n) {
                    var a = {
                        method: s,
                        parameters: n[s]
                    };
                    try {
                        if (i = t.validator.methods[s].call(this, o, e, a.parameters), "dependency-mismatch" === i) {
                            r = !0;
                            continue
                        }
                        if (r = !1, "pending" === i) return void(this.toHide = this.toHide.not(this.errorsFor(e)));
                        if (!i) return this.formatAndAdd(e, a),
                        !1
                    } catch(l) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + e.id + ", check the '" + a.method + "' method.", l),
                        l
                    }
                }
                return r ? void 0 : (this.objectLength(n) && this.successList.push(e), !0)
            },
            customDataMessage: function(e, i) {
                return t(e).data("msg-" + i.toLowerCase()) || e.attributes && t(e).attr("data-msg-" + i.toLowerCase())
            },
            customMessage: function(t, e) {
                var i = this.settings.messages[t];
                return i && (i.constructor === String ? i: i[e])
            },
            findDefined: function() {
                for (var t = 0; t < arguments.length; t++) if (void 0 !== arguments[t]) return arguments[t];
                return void 0
            },
            defaultMessage: function(e, i) {
                return this.findDefined(this.customMessage(e.name, i), this.customDataMessage(e, i), !this.settings.ignoreTitle && e.title || void 0, t.validator.messages[i], "<strong>Warning: No message defined for " + e.name + "</strong>")
            },
            formatAndAdd: function(e, i) {
                var n = this.defaultMessage(e, i.method),
                r = /\$?\{(\d+)\}/g;
                "function" == typeof n ? n = n.call(this, i.parameters, e) : r.test(n) && (n = t.validator.format(n.replace(r, "{$1}"), i.parameters)),
                this.errorList.push({
                    message: n,
                    element: e
                }),
                this.errorMap[e.name] = n,
                this.submitted[e.name] = n
            },
            addWrapper: function(t) {
                return this.settings.wrapper && (t = t.add(t.parent(this.settings.wrapper))),
                t
            },
            defaultShowErrors: function() {
                var t, e;
                for (t = 0; this.errorList[t]; t++) {
                    var i = this.errorList[t];
                    this.settings.highlight && this.settings.highlight.call(this, i.element, this.settings.errorClass, this.settings.validClass),
                    this.showLabel(i.element, i.message)
                }
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success) for (t = 0; this.successList[t]; t++) this.showLabel(this.successList[t]);
                if (this.settings.unhighlight) for (t = 0, e = this.validElements(); e[t]; t++) this.settings.unhighlight.call(this, e[t], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow),
                this.hideErrors(),
                this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return t(this.errorList).map(function() {
                    return this.element
                })
            },
            showLabel: function(e, i) {
                var n = this.errorsFor(e);
                n.length ? (n.removeClass(this.settings.validClass).addClass(this.settings.errorClass), n.html(i)) : (n = t("<" + this.settings.errorElement + ">").attr("for", this.idOrName(e)).addClass(this.settings.errorClass).html(i || ""), this.settings.wrapper && (n = n.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.append(n).length || (this.settings.errorPlacement ? this.settings.errorPlacement(n, t(e)) : n.insertAfter(e))),
                !i && this.settings.success && (n.text(""), "string" == typeof this.settings.success ? n.addClass(this.settings.success) : this.settings.success(n, e)),
                this.toShow = this.toShow.add(n)
            },
            errorsFor: function(e) {
                var i = this.idOrName(e);
                return this.errors().filter(function() {
                    return t(this).attr("for") === i
                })
            },
            idOrName: function(t) {
                return this.groups[t.name] || (this.checkable(t) ? t.name: t.id || t.name)
            },
            validationTargetFor: function(t) {
                return this.checkable(t) && (t = this.findByName(t.name).not(this.settings.ignore)[0]),
                t
            },
            checkable: function(t) {
                return /radio|checkbox/i.test(t.type)
            },
            findByName: function(e) {
                return t(this.currentForm).find("[name='" + e + "']")
            },
            getLength: function(e, i) {
                switch (i.nodeName.toLowerCase()) {
                case "select":
                    return t("option:selected", i).length;
                case "input":
                    if (this.checkable(i)) return this.findByName(i.name).filter(":checked").length
                }
                return e.length
            },
            depend: function(t, e) {
                return this.dependTypes[typeof t] ? this.dependTypes[typeof t](t, e) : !0
            },
            dependTypes: {
                "boolean": function(t) {
                    return t
                },
                string: function(e, i) {
                    return !! t(e, i.form).length
                },
                "function": function(t, e) {
                    return t(e)
                }
            },
            optional: function(e) {
                var i = this.elementValue(e);
                return ! t.validator.methods.required.call(this, i, e) && "dependency-mismatch"
            },
            startRequest: function(t) {
                this.pending[t.name] || (this.pendingRequest++, this.pending[t.name] = !0)
            },
            stopRequest: function(e, i) {
                this.pendingRequest--,
                this.pendingRequest < 0 && (this.pendingRequest = 0),
                delete this.pending[e.name],
                i && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (t(this.currentForm).submit(), this.formSubmitted = !1) : !i && 0 === this.pendingRequest && this.formSubmitted && (t(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
            },
            previousValue: function(e) {
                return t.data(e, "previousValue") || t.data(e, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(e, "remote")
                })
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function(e, i) {
            e.constructor === String ? this.classRuleSettings[e] = i: t.extend(this.classRuleSettings, e)
        },
        classRules: function(e) {
            var i = {},
            n = t(e).attr("class");
            return n && t.each(n.split(" "),
            function() {
                this in t.validator.classRuleSettings && t.extend(i, t.validator.classRuleSettings[this])
            }),
            i
        },
        attributeRules: function(e) {
            var i = {},
            n = t(e),
            r = n[0].getAttribute("type");
            for (var o in t.validator.methods) {
                var s;
                "required" === o ? (s = n.get(0).getAttribute(o), "" === s && (s = !0), s = !!s) : s = n.attr(o),
                /min|max/.test(o) && (null === r || /number|range|text/.test(r)) && (s = Number(s)),
                s ? i[o] = s: r === o && "range" !== r && (i[o] = !0)
            }
            return i.maxlength && /-1|2147483647|524288/.test(i.maxlength) && delete i.maxlength,
            i
        },
        dataRules: function(e) {
            var i, n, r = {},
            o = t(e);
            for (i in t.validator.methods) n = o.data("rule-" + i.toLowerCase()),
            void 0 !== n && (r[i] = n);
            return r
        },
        staticRules: function(e) {
            var i = {},
            n = t.data(e.form, "validator");
            return n.settings.rules && (i = t.validator.normalizeRule(n.settings.rules[e.name]) || {}),
            i
        },
        normalizeRules: function(e, i) {
            return t.each(e,
            function(n, r) {
                if (r === !1) return void delete e[n];
                if (r.param || r.depends) {
                    var o = !0;
                    switch (typeof r.depends) {
                    case "string":
                        o = !!t(r.depends, i.form).length;
                        break;
                    case "function":
                        o = r.depends.call(i, i)
                    }
                    o ? e[n] = void 0 !== r.param ? r.param: !0 : delete e[n]
                }
            }),
            t.each(e,
            function(n, r) {
                e[n] = t.isFunction(r) ? r(i) : r
            }),
            t.each(["minlength", "maxlength"],
            function() {
                e[this] && (e[this] = Number(e[this]))
            }),
            t.each(["rangelength", "range"],
            function() {
                var i;
                e[this] && (t.isArray(e[this]) ? e[this] = [Number(e[this][0]), Number(e[this][1])] : "string" == typeof e[this] && (i = e[this].split(/[\s,]+/), e[this] = [Number(i[0]), Number(i[1])]))
            }),
            t.validator.autoCreateRanges && (e.min && e.max && (e.range = [e.min, e.max], delete e.min, delete e.max), e.minlength && e.maxlength && (e.rangelength = [e.minlength, e.maxlength], delete e.minlength, delete e.maxlength)),
            e
        },
        normalizeRule: function(e) {
            if ("string" == typeof e) {
                var i = {};
                t.each(e.split(/\s/),
                function() {
                    i[this] = !0
                }),
                e = i
            }
            return e
        },
        addMethod: function(e, i, n) {
            t.validator.methods[e] = i,
            t.validator.messages[e] = void 0 !== n ? n: t.validator.messages[e],
            i.length < 3 && t.validator.addClassRules(e, t.validator.normalizeRule(e))
        },
        methods: {
            required: function(e, i, n) {
                if (!this.depend(n, i)) return "dependency-mismatch";
                if ("select" === i.nodeName.toLowerCase()) {
                    var r = t(i).val();
                    return r && r.length > 0
                }
                return this.checkable(i) ? this.getLength(e, i) > 0 : t.trim(e).length > 0
            },
            email: function(t, e) {
                return this.optional(e) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(t)
            },
            url: function(t, e) {
                return this.optional(e) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(t)
            },
            date: function(t, e) {
                return this.optional(e) || !/Invalid|NaN/.test(new Date(t).toString())
            },
            dateISO: function(t, e) {
                return this.optional(e) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(t)
            },
            number: function(t, e) {
                return this.optional(e) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)
            },
            digits: function(t, e) {
                return this.optional(e) || /^\d+$/.test(t)
            },
            creditcard: function(t, e) {
                if (this.optional(e)) return "dependency-mismatch";
                if (/[^0-9 \-]+/.test(t)) return ! 1;
                var i = 0,
                n = 0,
                r = !1;
                t = t.replace(/\D/g, "");
                for (var o = t.length - 1; o >= 0; o--) {
                    var s = t.charAt(o);
                    n = parseInt(s, 10),
                    r && (n *= 2) > 9 && (n -= 9),
                    i += n,
                    r = !r
                }
                return i % 10 === 0
            },
            minlength: function(e, i, n) {
                var r = t.isArray(e) ? e.length: this.getLength(t.trim(e), i);
                return this.optional(i) || r >= n
            },
            maxlength: function(e, i, n) {
                var r = t.isArray(e) ? e.length: this.getLength(t.trim(e), i);
                return this.optional(i) || n >= r
            },
            rangelength: function(e, i, n) {
                var r = t.isArray(e) ? e.length: this.getLength(t.trim(e), i);
                return this.optional(i) || r >= n[0] && r <= n[1]
            },
            min: function(t, e, i) {
                return this.optional(e) || t >= i
            },
            max: function(t, e, i) {
                return this.optional(e) || i >= t
            },
            range: function(t, e, i) {
                return this.optional(e) || t >= i[0] && t <= i[1]
            },
            equalTo: function(e, i, n) {
                var r = t(n);
                return this.settings.onfocusout && r.unbind(".validate-equalTo").bind("blur.validate-equalTo",
                function() {
                    t(i).valid()
                }),
                e === r.val()
            },
            remote: function(e, i, n) {
                if (this.optional(i)) return "dependency-mismatch";
                var r = this.previousValue(i);
                if (this.settings.messages[i.name] || (this.settings.messages[i.name] = {}), r.originalMessage = this.settings.messages[i.name].remote, this.settings.messages[i.name].remote = r.message, n = "string" == typeof n && {
                    url: n
                } || n, r.old === e) return r.valid;
                r.old = e;
                var o = this;
                this.startRequest(i);
                var s = {};
                return s[i.name] = e,
                t.ajax(t.extend(!0, {
                    url: n,
                    mode: "abort",
                    port: "validate" + i.name,
                    dataType: "json",
                    data: s,
                    success: function(n) {
                        o.settings.messages[i.name].remote = r.originalMessage;
                        var s = n === !0 || "true" === n;
                        if (s) {
                            var a = o.formSubmitted;
                            o.prepareElement(i),
                            o.formSubmitted = a,
                            o.successList.push(i),
                            delete o.invalid[i.name],
                            o.showErrors()
                        } else {
                            var l = {},
                            h = n || o.defaultMessage(i, "remote");
                            l[i.name] = r.message = t.isFunction(h) ? h(e) : h,
                            o.invalid[i.name] = !0,
                            o.showErrors(l)
                        }
                        r.valid = s,
                        o.stopRequest(i, s)
                    }
                },
                n)),
                "pending"
            }
        }
    }),
    t.format = t.validator.format
} (jQuery),
function(t) {
    var e = {};
    if (t.ajaxPrefilter) t.ajaxPrefilter(function(t, i, n) {
        var r = t.port;
        "abort" === t.mode && (e[r] && e[r].abort(), e[r] = n)
    });
    else {
        var i = t.ajax;
        t.ajax = function(n) {
            var r = ("mode" in n ? n: t.ajaxSettings).mode,
            o = ("port" in n ? n: t.ajaxSettings).port;
            return "abort" === r ? (e[o] && e[o].abort(), e[o] = i.apply(this, arguments), e[o]) : i.apply(this, arguments)
        }
    }
} (jQuery),
function(t) {
    t.extend(t.fn, {
        validateDelegate: function(e, i, n) {
            return this.bind(i,
            function(i) {
                var r = t(i.target);
                return r.is(e) ? n.apply(r, arguments) : void 0
            })
        }
    })
} (jQuery),
function(t, e) {
    function i() {
        return new Date(Date.UTC.apply(Date, arguments))
    }
    function n() {
        var t = new Date;
        return i(t.getFullYear(), t.getMonth(), t.getDate())
    }
    function r(t) {
        return function() {
            return this[t].apply(this, arguments)
        }
    }
    function o(e, i) {
        function n(t, e) {
            return e.toLowerCase()
        }
        var r, o = t(e).data(),
        s = {},
        a = new RegExp("^" + i.toLowerCase() + "([A-Z])");
        i = new RegExp("^" + i.toLowerCase());
        for (var l in o) i.test(l) && (r = l.replace(a, n), s[r] = o[l]);
        return s
    }
    function s(e) {
        var i = {};
        if (f[e] || (e = e.split("-")[0], f[e])) {
            var n = f[e];
            return t.each(p,
            function(t, e) {
                e in n && (i[e] = n[e])
            }),
            i
        }
    }
    var a = t(window),
    l = function() {
        var e = {
            get: function(t) {
                return this.slice(t)[0]
            },
            contains: function(t) {
                for (var e = t && t.valueOf(), i = 0, n = this.length; n > i; i++) if (this[i].valueOf() === e) return i;
                return - 1
            },
            remove: function(t) {
                this.splice(t, 1)
            },
            replace: function(e) {
                e && (t.isArray(e) || (e = [e]), this.clear(), this.push.apply(this, e))
            },
            clear: function() {
                this.splice(0)
            },
            copy: function() {
                var t = new l;
                return t.replace(this),
                t
            }
        };
        return function() {
            var i = [];
            return i.push.apply(i, arguments),
            t.extend(i, e),
            i
        }
    } (),
    h = function(e, i) {
        this.dates = new l,
        this.viewDate = n(),
        this.focusDate = null,
        this._process_options(i),
        this.element = t(e),
        this.isInline = !1,
        this.isInput = this.element.is("input"),
        this.component = this.element.is(".date") ? this.element.find(".add-on, .input-group-addon, .btn") : !1,
        this.hasInput = this.component && this.element.find("input").length,
        this.component && 0 === this.component.length && (this.component = !1),
        this.picker = t(g.template),
        this._buildEvents(),
        this._attachEvents(),
        this.isInline ? this.picker.addClass("datepicker-inline").appendTo(this.element) : this.picker.addClass("datepicker-dropdown dropdown-menu"),
        this.o.rtl && this.picker.addClass("datepicker-rtl"),
        this.viewMode = this.o.startView,
        this.o.calendarWeeks && this.picker.find("tfoot th.today").attr("colspan",
        function(t, e) {
            return parseInt(e) + 1
        }),
        this._allow_update = !1,
        this.setStartDate(this._o.startDate),
        this.setEndDate(this._o.endDate),
        this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled),
        this.fillDow(),
        this.fillMonths(),
        this._allow_update = !0,
        this.update(),
        this.showMode(),
        this.isInline && this.show()
    };
    h.prototype = {
        constructor: h,
        _process_options: function(e) {
            this._o = t.extend({},
            this._o, e);
            var i = this.o = t.extend({},
            this._o),
            n = i.language;
            switch (f[n] || (n = n.split("-")[0], f[n] || (n = d.language)), i.language = n, i.startView) {
            case 2:
            case "decade":
                i.startView = 2;
                break;
            case 1:
            case "year":
                i.startView = 1;
                break;
            default:
                i.startView = 0
            }
            switch (i.minViewMode) {
            case 1:
            case "months":
                i.minViewMode = 1;
                break;
            case 2:
            case "years":
                i.minViewMode = 2;
                break;
            default:
                i.minViewMode = 0
            }
            i.startView = Math.max(i.startView, i.minViewMode),
            i.multidate !== !0 && (i.multidate = Number(i.multidate) || !1, i.multidate = i.multidate !== !1 ? Math.max(0, i.multidate) : 1),
            i.multidateSeparator = String(i.multidateSeparator),
            i.weekStart %= 7,
            i.weekEnd = (i.weekStart + 6) % 7;
            var r = g.parseFormat(i.format);
            i.startDate !== -1 / 0 && (i.startDate = i.startDate ? i.startDate instanceof Date ? this._local_to_utc(this._zero_time(i.startDate)) : g.parseDate(i.startDate, r, i.language) : -1 / 0),
            1 / 0 !== i.endDate && (i.endDate = i.endDate ? i.endDate instanceof Date ? this._local_to_utc(this._zero_time(i.endDate)) : g.parseDate(i.endDate, r, i.language) : 1 / 0),
            i.daysOfWeekDisabled = i.daysOfWeekDisabled || [],
            t.isArray(i.daysOfWeekDisabled) || (i.daysOfWeekDisabled = i.daysOfWeekDisabled.split(/[,\s]*/)),
            i.daysOfWeekDisabled = t.map(i.daysOfWeekDisabled,
            function(t) {
                return parseInt(t, 10)
            });
            var o = String(i.orientation).toLowerCase().split(/\s+/g),
            s = i.orientation.toLowerCase();
            if (o = t.grep(o,
            function(t) {
                return /^auto|left|right|top|bottom$/.test(t)
            }), i.orientation = {
                x: "auto",
                y: "auto"
            },
            s && "auto" !== s) if (1 === o.length) switch (o[0]) {
            case "top":
            case "bottom":
                i.orientation.y = o[0];
                break;
            case "left":
            case "right":
                i.orientation.x = o[0]
            } else s = t.grep(o,
            function(t) {
                return /^left|right$/.test(t)
            }),
            i.orientation.x = s[0] || "auto",
            s = t.grep(o,
            function(t) {
                return /^top|bottom$/.test(t)
            }),
            i.orientation.y = s[0] || "auto";
            else;
        },
        _events: [],
        _secondaryEvents: [],
        _applyEvents: function(t) {
            for (var i, n, r, o = 0; o < t.length; o++) i = t[o][0],
            2 === t[o].length ? (n = e, r = t[o][1]) : 3 === t[o].length && (n = t[o][1], r = t[o][2]),
            i.on(r, n)
        },
        _unapplyEvents: function(t) {
            for (var i, n, r, o = 0; o < t.length; o++) i = t[o][0],
            2 === t[o].length ? (r = e, n = t[o][1]) : 3 === t[o].length && (r = t[o][1], n = t[o][2]),
            i.off(n, r)
        },
        _buildEvents: function() {
            this.isInput ? this._events = [[this.element, {
                focus: t.proxy(this.show, this),
                keyup: t.proxy(function(e) { - 1 === t.inArray(e.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) && this.update()
                },
                this),
                keydown: t.proxy(this.keydown, this)
            }]] : this.component && this.hasInput ? this._events = [[this.element.find("input"), {
                focus: t.proxy(this.show, this),
                keyup: t.proxy(function(e) { - 1 === t.inArray(e.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) && this.update()
                },
                this),
                keydown: t.proxy(this.keydown, this)
            }], [this.component, {
                click: t.proxy(this.show, this)
            }]] : this.element.is("div") ? this.isInline = !0 : this._events = [[this.element, {
                click: t.proxy(this.show, this)
            }]],
            this._events.push([this.element, "*", {
                blur: t.proxy(function(t) {
                    this._focused_from = t.target
                },
                this)
            }], [this.element, {
                blur: t.proxy(function(t) {
                    this._focused_from = t.target
                },
                this)
            }]),
            this._secondaryEvents = [[this.picker, {
                click: t.proxy(this.click, this)
            }], [t(window), {
                resize: t.proxy(this.place, this)
            }], [t(document), {
                "mousedown touchstart": t.proxy(function(t) {
                    this.element.is(t.target) || this.element.find(t.target).length || this.picker.is(t.target) || this.picker.find(t.target).length || this.hide()
                },
                this)
            }]]
        },
        _attachEvents: function() {
            this._detachEvents(),
            this._applyEvents(this._events)
        },
        _detachEvents: function() {
            this._unapplyEvents(this._events)
        },
        _attachSecondaryEvents: function() {
            this._detachSecondaryEvents(),
            this._applyEvents(this._secondaryEvents)
        },
        _detachSecondaryEvents: function() {
            this._unapplyEvents(this._secondaryEvents)
        },
        _trigger: function(e, i) {
            var n = i || this.dates.get( - 1),
            r = this._utc_to_local(n);
            this.element.trigger({
                type: e,
                date: r,
                dates: t.map(this.dates, this._utc_to_local),
                format: t.proxy(function(t, e) {
                    0 === arguments.length ? (t = this.dates.length - 1, e = this.o.format) : "string" == typeof t && (e = t, t = this.dates.length - 1),
                    e = e || this.o.format;
                    var i = this.dates.get(t);
                    return g.formatDate(i, e, this.o.language)
                },
                this)
            })
        },
        show: function() {
            this.isInline || this.picker.appendTo("body"),
            this.picker.show(),
            this.place(),
            this._attachSecondaryEvents(),
            this._trigger("show")
        },
        hide: function() {
            this.isInline || this.picker.is(":visible") && (this.focusDate = null, this.picker.hide().detach(), this._detachSecondaryEvents(), this.viewMode = this.o.startView, this.showMode(), this.o.forceParse && (this.isInput && this.element.val() || this.hasInput && this.element.find("input").val()) && this.setValue(), this._trigger("hide"))
        },
        remove: function() {
            this.hide(),
            this._detachEvents(),
            this._detachSecondaryEvents(),
            this.picker.remove(),
            delete this.element.data().datepicker,
            this.isInput || delete this.element.data().date
        },
        _utc_to_local: function(t) {
            return t && new Date(t.getTime() + 6e4 * t.getTimezoneOffset())
        },
        _local_to_utc: function(t) {
            return t && new Date(t.getTime() - 6e4 * t.getTimezoneOffset())
        },
        _zero_time: function(t) {
            return t && new Date(t.getFullYear(), t.getMonth(), t.getDate())
        },
        _zero_utc_time: function(t) {
            return t && new Date(Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()))
        },
        getDates: function() {
            return t.map(this.dates, this._utc_to_local)
        },
        getUTCDates: function() {
            return t.map(this.dates,
            function(t) {
                return new Date(t)
            })
        },
        getDate: function() {
            return this._utc_to_local(this.getUTCDate())
        },
        getUTCDate: function() {
            return new Date(this.dates.get( - 1))
        },
        setDates: function() {
            var e = t.isArray(arguments[0]) ? arguments[0] : arguments;
            this.update.apply(this, e),
            this._trigger("changeDate"),
            this.setValue()
        },
        setUTCDates: function() {
            var e = t.isArray(arguments[0]) ? arguments[0] : arguments;
            this.update.apply(this, t.map(e, this._utc_to_local)),
            this._trigger("changeDate"),
            this.setValue()
        },
        setDate: r("setDates"),
        setUTCDate: r("setUTCDates"),
        setValue: function() {
            var t = this.getFormattedDate();
            this.isInput ? this.element.val(t).change() : this.component && this.element.find("input").val(t).change()
        },
        getFormattedDate: function(i) {
            i === e && (i = this.o.format);
            var n = this.o.language;
            return t.map(this.dates,
            function(t) {
                return g.formatDate(t, i, n)
            }).join(this.o.multidateSeparator)
        },
        setStartDate: function(t) {
            this._process_options({
                startDate: t
            }),
            this.update(),
            this.updateNavArrows()
        },
        setEndDate: function(t) {
            this._process_options({
                endDate: t
            }),
            this.update(),
            this.updateNavArrows()
        },
        setDaysOfWeekDisabled: function(t) {
            this._process_options({
                daysOfWeekDisabled: t
            }),
            this.update(),
            this.updateNavArrows()
        },
        place: function() {
            if (!this.isInline) {
                var e = this.picker.outerWidth(),
                i = this.picker.outerHeight(),
                n = 10,
                r = a.width(),
                o = a.height(),
                s = a.scrollTop(),
                l = parseInt(this.element.parents().filter(function() {
                    return "auto" !== t(this).css("z-index")
                }).first().css("z-index")) + 10,
                h = this.component ? this.component.parent().offset() : this.element.offset(),
                c = this.component ? this.component.outerHeight(!0) : this.element.outerHeight(!1),
                u = this.component ? this.component.outerWidth(!0) : this.element.outerWidth(!1),
                d = h.left,
                p = h.top;
                this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"),
                "auto" !== this.o.orientation.x ? (this.picker.addClass("datepicker-orient-" + this.o.orientation.x), "right" === this.o.orientation.x && (d -= e - u)) : (this.picker.addClass("datepicker-orient-left"), h.left < 0 ? d -= h.left - n: h.left + e > r && (d = r - e - n));
                var f, g, m = this.o.orientation.y;
                "auto" === m && (f = -s + h.top - i, g = s + o - (h.top + c + i), m = Math.max(f, g) === g ? "top": "bottom"),
                this.picker.addClass("datepicker-orient-" + m),
                "top" === m ? p += c: p -= i + parseInt(this.picker.css("padding-top")),
                this.picker.css({
                    top: p,
                    left: d,
                    zIndex: l
                })
            }
        },
        _allow_update: !0,
        update: function() {
            if (this._allow_update) {
                var e = this.dates.copy(),
                i = [],
                n = !1;
                arguments.length ? (t.each(arguments, t.proxy(function(t, e) {
                    e instanceof Date && (e = this._local_to_utc(e)),
                    i.push(e)
                },
                this)), n = !0) : (i = this.isInput ? this.element.val() : this.element.data("date") || this.element.find("input").val(), i = i && this.o.multidate ? i.split(this.o.multidateSeparator) : [i], delete this.element.data().date),
                i = t.map(i, t.proxy(function(t) {
                    return g.parseDate(t, this.o.format, this.o.language)
                },
                this)),
                i = t.grep(i, t.proxy(function(t) {
                    return t < this.o.startDate || t > this.o.endDate || !t
                },
                this), !0),
                this.dates.replace(i),
                this.dates.length ? this.viewDate = new Date(this.dates.get( - 1)) : this.viewDate < this.o.startDate ? this.viewDate = new Date(this.o.startDate) : this.viewDate > this.o.endDate && (this.viewDate = new Date(this.o.endDate)),
                n ? this.setValue() : i.length && String(e) !== String(this.dates) && this._trigger("changeDate"),
                !this.dates.length && e.length && this._trigger("clearDate"),
                this.fill()
            }
        },
        fillDow: function() {
            var t = this.o.weekStart,
            e = "<tr>";
            if (this.o.calendarWeeks) {
                var i = '<th class="cw">&nbsp;</th>';
                e += i,
                this.picker.find(".datepicker-days thead tr:first-child").prepend(i)
            }
            for (; t < this.o.weekStart + 7;) e += '<th class="dow">' + f[this.o.language].daysMin[t++%7] + "</th>";
            e += "</tr>",
            this.picker.find(".datepicker-days thead").append(e)
        },
        fillMonths: function() {
            for (var t = "",
            e = 0; 12 > e;) t += '<span class="month">' + f[this.o.language].monthsShort[e++] + "</span>";
            this.picker.find(".datepicker-months td").html(t)
        },
        setRange: function(e) {
            e && e.length ? this.range = t.map(e,
            function(t) {
                return t.valueOf()
            }) : delete this.range,
            this.fill()
        },
        getClassNames: function(e) {
            var i = [],
            n = this.viewDate.getUTCFullYear(),
            r = this.viewDate.getUTCMonth(),
            o = new Date;
            return e.getUTCFullYear() < n || e.getUTCFullYear() === n && e.getUTCMonth() < r ? i.push("old") : (e.getUTCFullYear() > n || e.getUTCFullYear() === n && e.getUTCMonth() > r) && i.push("new"),
            this.focusDate && e.valueOf() === this.focusDate.valueOf() && i.push("focused"),
            this.o.todayHighlight && e.getUTCFullYear() === o.getFullYear() && e.getUTCMonth() === o.getMonth() && e.getUTCDate() === o.getDate() && i.push("today"),
            -1 !== this.dates.contains(e) && i.push("active"),
            (e.valueOf() < this.o.startDate || e.valueOf() > this.o.endDate || -1 !== t.inArray(e.getUTCDay(), this.o.daysOfWeekDisabled)) && i.push("disabled"),
            this.range && (e > this.range[0] && e < this.range[this.range.length - 1] && i.push("range"), -1 !== t.inArray(e.valueOf(), this.range) && i.push("selected")),
            i
        },
        fill: function() {
            var n, r = new Date(this.viewDate),
            o = r.getUTCFullYear(),
            s = r.getUTCMonth(),
            a = this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCFullYear() : -1 / 0,
            l = this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCMonth() : -1 / 0,
            h = 1 / 0 !== this.o.endDate ? this.o.endDate.getUTCFullYear() : 1 / 0,
            c = 1 / 0 !== this.o.endDate ? this.o.endDate.getUTCMonth() : 1 / 0,
            u = f[this.o.language].today || f.en.today || "",
            d = f[this.o.language].clear || f.en.clear || "";
            this.picker.find(".datepicker-days thead th.datepicker-switch").text(f[this.o.language].months[s] + " " + o),
            this.picker.find("tfoot th.today").text(u).toggle(this.o.todayBtn !== !1),
            this.picker.find("tfoot th.clear").text(d).toggle(this.o.clearBtn !== !1),
            this.updateNavArrows(),
            this.fillMonths();
            var p = i(o, s - 1, 28),
            m = g.getDaysInMonth(p.getUTCFullYear(), p.getUTCMonth());
            p.setUTCDate(m),
            p.setUTCDate(m - (p.getUTCDay() - this.o.weekStart + 7) % 7);
            var v = new Date(p);
            v.setUTCDate(v.getUTCDate() + 42),
            v = v.valueOf();
            for (var y, b = []; p.valueOf() < v;) {
                if (p.getUTCDay() === this.o.weekStart && (b.push("<tr>"), this.o.calendarWeeks)) {
                    var x = new Date( + p + (this.o.weekStart - p.getUTCDay() - 7) % 7 * 864e5),
                    w = new Date(Number(x) + (11 - x.getUTCDay()) % 7 * 864e5),
                    k = new Date(Number(k = i(w.getUTCFullYear(), 0, 1)) + (11 - k.getUTCDay()) % 7 * 864e5),
                    S = (w - k) / 864e5 / 7 + 1;
                    b.push('<td class="cw">' + S + "</td>")
                }
                if (y = this.getClassNames(p), y.push("day"), this.o.beforeShowDay !== t.noop) {
                    var C = this.o.beforeShowDay(this._utc_to_local(p));
                    C === e ? C = {}: "boolean" == typeof C ? C = {
                        enabled: C
                    }: "string" == typeof C && (C = {
                        classes: C
                    }),
                    C.enabled === !1 && y.push("disabled"),
                    C.classes && (y = y.concat(C.classes.split(/\s+/))),
                    C.tooltip && (n = C.tooltip)
                }
                y = t.unique(y),
                b.push('<td class="' + y.join(" ") + '"' + (n ? ' title="' + n + '"': "") + ">" + p.getUTCDate() + "</td>"),
                p.getUTCDay() === this.o.weekEnd && b.push("</tr>"),
                p.setUTCDate(p.getUTCDate() + 1)
            }
            this.picker.find(".datepicker-days tbody").empty().append(b.join(""));
            var T = this.picker.find(".datepicker-months").find("th:eq(1)").text(o).end().find("span").removeClass("active");
            t.each(this.dates,
            function(t, e) {
                e.getUTCFullYear() === o && T.eq(e.getUTCMonth()).addClass("active")
            }),
            (a > o || o > h) && T.addClass("disabled"),
            o === a && T.slice(0, l).addClass("disabled"),
            o === h && T.slice(c + 1).addClass("disabled"),
            b = "",
            o = 10 * parseInt(o / 10, 10);
            var D = this.picker.find(".datepicker-years").find("th:eq(1)").text(o + "-" + (o + 9)).end().find("td");
            o -= 1;
            for (var A, P = t.map(this.dates,
            function(t) {
                return t.getUTCFullYear()
            }), _ = -1; 11 > _; _++) A = ["year"],
            -1 === _ ? A.push("old") : 10 === _ && A.push("new"),
            -1 !== t.inArray(o, P) && A.push("active"),
            (a > o || o > h) && A.push("disabled"),
            b += '<span class="' + A.join(" ") + '">' + o + "</span>",
            o += 1;
            D.html(b)
        },
        updateNavArrows: function() {
            if (this._allow_update) {
                var t = new Date(this.viewDate),
                e = t.getUTCFullYear(),
                i = t.getUTCMonth();
                switch (this.viewMode) {
                case 0:
                    this.picker.find(".prev").css(this.o.startDate !== -1 / 0 && e <= this.o.startDate.getUTCFullYear() && i <= this.o.startDate.getUTCMonth() ? {
                        visibility: "hidden"
                    }: {
                        visibility: "visible"
                    }),
                    this.picker.find(".next").css(1 / 0 !== this.o.endDate && e >= this.o.endDate.getUTCFullYear() && i >= this.o.endDate.getUTCMonth() ? {
                        visibility: "hidden"
                    }: {
                        visibility: "visible"
                    });
                    break;
                case 1:
                case 2:
                    this.picker.find(".prev").css(this.o.startDate !== -1 / 0 && e <= this.o.startDate.getUTCFullYear() ? {
                        visibility: "hidden"
                    }: {
                        visibility: "visible"
                    }),
                    this.picker.find(".next").css(1 / 0 !== this.o.endDate && e >= this.o.endDate.getUTCFullYear() ? {
                        visibility: "hidden"
                    }: {
                        visibility: "visible"
                    })
                }
            }
        },
        click: function(e) {
            e.preventDefault();
            var n, r, o, s = t(e.target).closest("span, td, th");
            if (1 === s.length) switch (s[0].nodeName.toLowerCase()) {
            case "th":
                switch (s[0].className) {
                case "datepicker-switch":
                    this.showMode(1);
                    break;
                case "prev":
                case "next":
                    var a = g.modes[this.viewMode].navStep * ("prev" === s[0].className ? -1 : 1);
                    switch (this.viewMode) {
                    case 0:
                        this.viewDate = this.moveMonth(this.viewDate, a),
                        this._trigger("changeMonth", this.viewDate);
                        break;
                    case 1:
                    case 2:
                        this.viewDate = this.moveYear(this.viewDate, a),
                        1 === this.viewMode && this._trigger("changeYear", this.viewDate)
                    }
                    this.fill();
                    break;
                case "today":
                    var l = new Date;
                    l = i(l.getFullYear(), l.getMonth(), l.getDate(), 0, 0, 0),
                    this.showMode( - 2);
                    var h = "linked" === this.o.todayBtn ? null: "view";
                    this._setDate(l, h);
                    break;
                case "clear":
                    var c;
                    this.isInput ? c = this.element: this.component && (c = this.element.find("input")),
                    c && c.val("").change(),
                    this.update(),
                    this._trigger("changeDate"),
                    this.o.autoclose && this.hide()
                }
                break;
            case "span":
                s.is(".disabled") || (this.viewDate.setUTCDate(1), s.is(".month") ? (o = 1, r = s.parent().find("span").index(s), n = this.viewDate.getUTCFullYear(), this.viewDate.setUTCMonth(r), this._trigger("changeMonth", this.viewDate), 1 === this.o.minViewMode && this._setDate(i(n, r, o))) : (o = 1, r = 0, n = parseInt(s.text(), 10) || 0, this.viewDate.setUTCFullYear(n), this._trigger("changeYear", this.viewDate), 2 === this.o.minViewMode && this._setDate(i(n, r, o))), this.showMode( - 1), this.fill());
                break;
            case "td":
                s.is(".day") && !s.is(".disabled") && (o = parseInt(s.text(), 10) || 1, n = this.viewDate.getUTCFullYear(), r = this.viewDate.getUTCMonth(), s.is(".old") ? 0 === r ? (r = 11, n -= 1) : r -= 1 : s.is(".new") && (11 === r ? (r = 0, n += 1) : r += 1), this._setDate(i(n, r, o)))
            }
            this.picker.is(":visible") && this._focused_from && t(this._focused_from).focus(),
            delete this._focused_from
        },
        _toggle_multidate: function(t) {
            var e = this.dates.contains(t);
            if (t ? -1 !== e ? this.dates.remove(e) : this.dates.push(t) : this.dates.clear(), "number" == typeof this.o.multidate) for (; this.dates.length > this.o.multidate;) this.dates.remove(0)
        },
        _setDate: function(t, e) {
            e && "date" !== e || this._toggle_multidate(t && new Date(t)),
            e && "view" !== e || (this.viewDate = t && new Date(t)),
            this.fill(),
            this.setValue(),
            this._trigger("changeDate");
            var i;
            this.isInput ? i = this.element: this.component && (i = this.element.find("input")),
            i && i.change(),
            !this.o.autoclose || e && "date" !== e || this.hide()
        },
        moveMonth: function(t, i) {
            if (!t) return e;
            if (!i) return t;
            var n, r, o = new Date(t.valueOf()),
            s = o.getUTCDate(),
            a = o.getUTCMonth(),
            l = Math.abs(i);
            if (i = i > 0 ? 1 : -1, 1 === l) r = -1 === i ?
            function() {
                return o.getUTCMonth() === a
            }: function() {
                return o.getUTCMonth() !== n
            },
            n = a + i,
            o.setUTCMonth(n),
            (0 > n || n > 11) && (n = (n + 12) % 12);
            else {
                for (var h = 0; l > h; h++) o = this.moveMonth(o, i);
                n = o.getUTCMonth(),
                o.setUTCDate(s),
                r = function() {
                    return n !== o.getUTCMonth()
                }
            }
            for (; r();) o.setUTCDate(--s),
            o.setUTCMonth(n);
            return o
        },
        moveYear: function(t, e) {
            return this.moveMonth(t, 12 * e)
        },
        dateWithinRange: function(t) {
            return t >= this.o.startDate && t <= this.o.endDate
        },
        keydown: function(t) {
            if (this.picker.is(":not(:visible)")) return void(27 === t.keyCode && this.show());
            var e, i, r, o = !1,
            s = this.focusDate || this.viewDate;
            switch (t.keyCode) {
            case 27:
                this.focusDate ? (this.focusDate = null, this.viewDate = this.dates.get( - 1) || this.viewDate, this.fill()) : this.hide(),
                t.preventDefault();
                break;
            case 37:
            case 39:
                if (!this.o.keyboardNavigation) break;
                e = 37 === t.keyCode ? -1 : 1,
                t.ctrlKey ? (i = this.moveYear(this.dates.get( - 1) || n(), e), r = this.moveYear(s, e), this._trigger("changeYear", this.viewDate)) : t.shiftKey ? (i = this.moveMonth(this.dates.get( - 1) || n(), e), r = this.moveMonth(s, e), this._trigger("changeMonth", this.viewDate)) : (i = new Date(this.dates.get( - 1) || n()), i.setUTCDate(i.getUTCDate() + e), r = new Date(s), r.setUTCDate(s.getUTCDate() + e)),
                this.dateWithinRange(i) && (this.focusDate = this.viewDate = r, this.setValue(), this.fill(), t.preventDefault());
                break;
            case 38:
            case 40:
                if (!this.o.keyboardNavigation) break;
                e = 38 === t.keyCode ? -1 : 1,
                t.ctrlKey ? (i = this.moveYear(this.dates.get( - 1) || n(), e), r = this.moveYear(s, e), this._trigger("changeYear", this.viewDate)) : t.shiftKey ? (i = this.moveMonth(this.dates.get( - 1) || n(), e), r = this.moveMonth(s, e), this._trigger("changeMonth", this.viewDate)) : (i = new Date(this.dates.get( - 1) || n()), i.setUTCDate(i.getUTCDate() + 7 * e), r = new Date(s), r.setUTCDate(s.getUTCDate() + 7 * e)),
                this.dateWithinRange(i) && (this.focusDate = this.viewDate = r, this.setValue(), this.fill(), t.preventDefault());
                break;
            case 32:
                break;
            case 13:
                s = this.focusDate || this.dates.get( - 1) || this.viewDate,
                this._toggle_multidate(s),
                o = !0,
                this.focusDate = null,
                this.viewDate = this.dates.get( - 1) || this.viewDate,
                this.setValue(),
                this.fill(),
                this.picker.is(":visible") && (t.preventDefault(), this.o.autoclose && this.hide());
                break;
            case 9:
                this.focusDate = null,
                this.viewDate = this.dates.get( - 1) || this.viewDate,
                this.fill(),
                this.hide()
            }
            if (o) {
                this._trigger(this.dates.length ? "changeDate": "clearDate");
                var a;
                this.isInput ? a = this.element: this.component && (a = this.element.find("input")),
                a && a.change()
            }
        },
        showMode: function(t) {
            t && (this.viewMode = Math.max(this.o.minViewMode, Math.min(2, this.viewMode + t))),
            this.picker.find(">div").hide().filter(".datepicker-" + g.modes[this.viewMode].clsName).css("display", "block"),
            this.updateNavArrows()
        }
    };
    var c = function(e, i) {
        this.element = t(e),
        this.inputs = t.map(i.inputs,
        function(t) {
            return t.jquery ? t[0] : t
        }),
        delete i.inputs,
        t(this.inputs).datepicker(i).bind("changeDate", t.proxy(this.dateUpdated, this)),
        this.pickers = t.map(this.inputs,
        function(e) {
            return t(e).data("datepicker")
        }),
        this.updateDates()
    };
    c.prototype = {
        updateDates: function() {
            this.dates = t.map(this.pickers,
            function(t) {
                return t.getUTCDate()
            }),
            this.updateRanges()
        },
        updateRanges: function() {
            var e = t.map(this.dates,
            function(t) {
                return t.valueOf()
            });
            t.each(this.pickers,
            function(t, i) {
                i.setRange(e)
            })
        },
        dateUpdated: function(e) {
            if (!this.updating) {
                this.updating = !0;
                var i = t(e.target).data("datepicker"),
                n = i.getUTCDate(),
                r = t.inArray(e.target, this.inputs),
                o = this.inputs.length;
                if ( - 1 !== r) {
                    if (t.each(this.pickers,
                    function(t, e) {
                        e.getUTCDate() || e.setUTCDate(n)
                    }), n < this.dates[r]) for (; r >= 0 && n < this.dates[r];) this.pickers[r--].setUTCDate(n);
                    else if (n > this.dates[r]) for (; o > r && n > this.dates[r];) this.pickers[r++].setUTCDate(n);
                    this.updateDates(),
                    delete this.updating
                }
            }
        },
        remove: function() {
            t.map(this.pickers,
            function(t) {
                t.remove()
            }),
            delete this.element.data().datepicker
        }
    };
    var u = t.fn.datepicker;
    t.fn.datepicker = function(i) {
        var n = Array.apply(null, arguments);
        n.shift();
        var r;
        return this.each(function() {
            var a = t(this),
            l = a.data("datepicker"),
            u = "object" == typeof i && i;
            if (!l) {
                var p = o(this, "date"),
                f = t.extend({},
                d, p, u),
                g = s(f.language),
                m = t.extend({},
                d, g, p, u);
                if (a.is(".input-daterange") || m.inputs) {
                    var v = {
                        inputs: m.inputs || a.find("input").toArray()
                    };
                    a.data("datepicker", l = new c(this, t.extend(m, v)))
                } else a.data("datepicker", l = new h(this, m))
            }
            return "string" == typeof i && "function" == typeof l[i] && (r = l[i].apply(l, n), r !== e) ? !1 : void 0
        }),
        r !== e ? r: this
    };
    var d = t.fn.datepicker.defaults = {
        autoclose: !1,
        beforeShowDay: t.noop,
        calendarWeeks: !1,
        clearBtn: !1,
        daysOfWeekDisabled: [],
        endDate: 1 / 0,
        forceParse: !0,
        format: "mm/dd/yyyy",
        keyboardNavigation: !0,
        language: "cn",
        minViewMode: 0,
        multidate: !1,
        multidateSeparator: ",",
        orientation: "auto",
        rtl: !1,
        startDate: -1 / 0,
        startView: 0,
        todayBtn: !1,
        todayHighlight: !1,
        weekStart: 0
    },
    p = t.fn.datepicker.locale_opts = ["format", "rtl", "weekStart"];
    t.fn.datepicker.Constructor = h;
    var f = t.fn.datepicker.dates = {
        en: {
            days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            today: "Today",
            clear: "Clear"
        },
        cn: {
            days: ["\u5468\u65e5", "\u5468\u4e00", "\u5468\u4e8c", "\u5468\u4e09", "\u5468\u56db", "\u5468\u4e94", "\u5468\u516d", "\u5468\u65e5"],
            daysShort: ["\u65e5", "\u4e00", "\u4e8c", "\u4e09", "\u56db", "\u4e94", "\u516d", "\u4e03"],
            daysMin: ["\u65e5", "\u4e00", "\u4e8c", "\u4e09", "\u56db", "\u4e94", "\u516d", "\u4e03"],
            months: ["\u4e00\u6708", "\u4e8c\u6708", "\u4e09\u6708", "\u56db\u6708", "\u4e94\u6708", "\u516d\u6708", "\u4e03\u6708", "\u516b\u6708", "\u4e5d\u6708", "\u5341\u6708", "\u5341\u4e00\u6708", "\u5341\u4e8c\u6708"],
            monthsShort: ["\u4e00\u6708", "\u4e8c\u6708", "\u4e09\u6708", "\u56db\u6708", "\u4e94\u6708", "\u516d\u6708", "\u4e03\u6708", "\u516b\u6708", "\u4e5d\u6708", "\u5341\u6708", "\u5341\u4e00\u6708", "\u5341\u4e8c\u6708"],
            today: "\u4eca\u5929",
            clear: "\u6e05\u9664"
        }
    },
    g = {
        modes: [{
            clsName: "days",
            navFnc: "Month",
            navStep: 1
        },
        {
            clsName: "months",
            navFnc: "FullYear",
            navStep: 1
        },
        {
            clsName: "years",
            navFnc: "FullYear",
            navStep: 10
        }],
        isLeapYear: function(t) {
            return t % 4 === 0 && t % 100 !== 0 || t % 400 === 0
        },
        getDaysInMonth: function(t, e) {
            return [31, g.isLeapYear(t) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][e]
        },
        validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
        nonpunctuation: /[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,
        parseFormat: function(t) {
            var e = t.replace(this.validParts, "\x00").split("\x00"),
            i = t.match(this.validParts);
            if (!e || !e.length || !i || 0 === i.length) throw new Error("Invalid date format.");
            return {
                separators: e,
                parts: i
            }
        },
        parseDate: function(n, r, o) {
            function s() {
                var t = this.slice(0, d[c].length),
                e = d[c].slice(0, t.length);
                return t === e
            }
            if (!n) return e;
            if (n instanceof Date) return n;
            "string" == typeof r && (r = g.parseFormat(r));
            var a, l, c, u = /([\-+]\d+)([dmwy])/,
            d = n.match(/([\-+]\d+)([dmwy])/g);
            if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(n)) {
                for (n = new Date, c = 0; c < d.length; c++) switch (a = u.exec(d[c]), l = parseInt(a[1]), a[2]) {
                case "d":
                    n.setUTCDate(n.getUTCDate() + l);
                    break;
                case "m":
                    n = h.prototype.moveMonth.call(h.prototype, n, l);
                    break;
                case "w":
                    n.setUTCDate(n.getUTCDate() + 7 * l);
                    break;
                case "y":
                    n = h.prototype.moveYear.call(h.prototype, n, l)
                }
                return i(n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate(), 0, 0, 0)
            }
            d = n && n.match(this.nonpunctuation) || [],
            n = new Date;
            var p, m, v = {},
            y = ["yyyy", "yy", "M", "MM", "m", "mm", "d", "dd"],
            b = {
                yyyy: function(t, e) {
                    return t.setUTCFullYear(e)
                },
                yy: function(t, e) {
                    return t.setUTCFullYear(2e3 + e)
                },
                m: function(t, e) {
                    if (isNaN(t)) return t;
                    for (e -= 1; 0 > e;) e += 12;
                    for (e %= 12, t.setUTCMonth(e); t.getUTCMonth() !== e;) t.setUTCDate(t.getUTCDate() - 1);
                    return t
                },
                d: function(t, e) {
                    return t.setUTCDate(e)
                }
            };
            b.M = b.MM = b.mm = b.m,
            b.dd = b.d,
            n = i(n.getFullYear(), n.getMonth(), n.getDate(), 0, 0, 0);
            var x = r.parts.slice();
            if (d.length !== x.length && (x = t(x).filter(function(e, i) {
                return - 1 !== t.inArray(i, y)
            }).toArray()), d.length === x.length) {
                var w;
                for (c = 0, w = x.length; w > c; c++) {
                    if (p = parseInt(d[c], 10), a = x[c], isNaN(p)) switch (a) {
                    case "MM":
                        m = t(f[o].months).filter(s),
                        p = t.inArray(m[0], f[o].months) + 1;
                        break;
                    case "M":
                        m = t(f[o].monthsShort).filter(s),
                        p = t.inArray(m[0], f[o].monthsShort) + 1
                    }
                    v[a] = p
                }
                var k, S;
                for (c = 0; c < y.length; c++) S = y[c],
                S in v && !isNaN(v[S]) && (k = new Date(n), b[S](k, v[S]), isNaN(k) || (n = k))
            }
            return n
        },
        formatDate: function(e, i, n) {
            if (!e) return "";
            "string" == typeof i && (i = g.parseFormat(i));
            var r = {
                d: e.getUTCDate(),
                D: f[n].daysShort[e.getUTCDay()],
                DD: f[n].days[e.getUTCDay()],
                m: e.getUTCMonth() + 1,
                M: f[n].monthsShort[e.getUTCMonth()],
                MM: f[n].months[e.getUTCMonth()],
                yy: e.getUTCFullYear().toString().substring(2),
                yyyy: e.getUTCFullYear()
            };
            r.dd = (r.d < 10 ? "0": "") + r.d,
            r.mm = (r.m < 10 ? "0": "") + r.m,
            e = [];
            for (var o = t.extend([], i.separators), s = 0, a = i.parts.length; a >= s; s++) o.length && e.push(o.shift()),
            e.push(r[i.parts[s]]);
            return e.join("")
        },
        headTemplate: '<thead><tr><th class="prev">&laquo;</th><th colspan="5" class="datepicker-switch"></th><th class="next">&raquo;</th></tr></thead>',
        contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
        footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'
    };
    g.template = '<div class="datepicker"><div class="datepicker-days"><table class=" table-condensed">' + g.headTemplate + "<tbody></tbody>" + g.footTemplate + '</table></div><div class="datepicker-months"><table class="table-condensed">' + g.headTemplate + g.contTemplate + g.footTemplate + '</table></div><div class="datepicker-years"><table class="table-condensed">' + g.headTemplate + g.contTemplate + g.footTemplate + "</table></div></div>",
    t.fn.datepicker.DPGlobal = g,
    t.fn.datepicker.noConflict = function() {
        return t.fn.datepicker = u,
        this
    },
    t(document).on("focus.datepicker.data-api click.datepicker.data-api", '[data-provide="datepicker"]',
    function(e) {
        var i = t(this);
        i.data("datepicker") || (e.preventDefault(), i.datepicker("show"))
    }),
    t(function() {
        t('[data-provide="datepicker-inline"]').datepicker()
    })
} (window.jQuery),
+
function(t) {
    "use strict";
    function e(e, n) {
        return this.each(function() {
            var r = t(this),
            o = r.data("bs.modal"),
            s = t.extend({},
            i.DEFAULTS, r.data(), "object" == typeof e && e);
            o || r.data("bs.modal", o = new i(this, s)),
            "string" == typeof e ? o[e](n) : s.show && o.show(n)
        })
    }
    var i = function(e, i) {
        this.options = i,
        this.$body = t(document.body),
        this.$element = t(e),
        this.$backdrop = this.isShown = null,
        this.scrollbarWidth = 0,
        this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        },
        this))
    };
    i.VERSION = "3.2.0",
    i.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    },
    i.prototype.toggle = function(t) {
        return this.isShown ? this.hide() : this.show(t)
    },
    i.prototype.show = function(e) {
        var i = this,
        n = t.Event("show.bs.modal", {
            relatedTarget: e
        });
        this.$element.trigger(n),
        this.isShown || n.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.$body.addClass("modal-open"), this.setScrollbar(), this.escape(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.backdrop(function() {
            var n = t.support.transition && i.$element.hasClass("fade");
            i.$element.parent().length || i.$element.appendTo(i.$body),
            i.$element.show().scrollTop(0),
            n && i.$element[0].offsetWidth,
            i.$element.addClass("in").attr("aria-hidden", !1),
            i.enforceFocus();
            var r = t.Event("shown.bs.modal", {
                relatedTarget: e
            });
            n ? i.$element.find(".modal-dialog").one("bsTransitionEnd",
            function() {
                i.$element.trigger("focus").trigger(r)
            }).emulateTransitionEnd(300) : i.$element.trigger("focus").trigger(r)
        }))
    },
    i.prototype.hide = function(e) {
        e && e.preventDefault(),
        e = t.Event("hide.bs.modal"),
        this.$element.trigger(e),
        this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.$body.removeClass("modal-open"), this.resetScrollbar(), this.escape(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
    },
    i.prototype.enforceFocus = function() {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
            this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        },
        this))
    },
    i.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", t.proxy(function(t) {
            27 == t.which && this.hide()
        },
        this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
    },
    i.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(),
        this.backdrop(function() {
            t.$element.trigger("hidden.bs.modal")
        })
    },
    i.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(),
        this.$backdrop = null
    },
    i.prototype.backdrop = function(e) {
        var i = this,
        n = this.$element.hasClass("fade") ? "fade": "";
        if (this.isShown && this.options.backdrop) {
            var r = t.support.transition && n;
            if (this.$backdrop = t('<div class="modal-backdrop ' + n + '" />').appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
            },
            this)), r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            r ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(150) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var o = function() {
                i.removeBackdrop(),
                e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", o).emulateTransitionEnd(150) : o()
        } else e && e()
    },
    i.prototype.checkScrollbar = function() {
        document.body.clientWidth >= window.innerWidth || (this.scrollbarWidth = this.scrollbarWidth || this.measureScrollbar())
    },
    i.prototype.setScrollbar = function() {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.scrollbarWidth && this.$body.css("padding-right", t + this.scrollbarWidth)
    },
    i.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", "")
    },
    i.prototype.measureScrollbar = function() {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure",
        this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t),
        e
    };
    var n = t.fn.modal;
    t.fn.modal = e,
    t.fn.modal.Constructor = i,
    t.fn.modal.noConflict = function() {
        return t.fn.modal = n,
        this
    },
    t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]',
    function(i) {
        var n = t(this),
        r = n.attr("href"),
        o = t(n.attr("data-target") || r && r.replace(/.*(?=#[^\s]+$)/, "")),
        s = o.data("bs.modal") ? "toggle": t.extend({
            remote: !/#/.test(r) && r
        },
        o.data(), n.data());
        n.is("a") && i.preventDefault(),
        o.one("show.bs.modal",
        function(t) {
            t.isDefaultPrevented() || o.one("hidden.bs.modal",
            function() {
                n.is(":visible") && n.trigger("focus")
            })
        }),
        e.call(o, s, this)
    })
} (jQuery),
+
function(t) {
    "use strict";
    function e(e) {
        return this.each(function() {
            var n = t(this),
            r = n.data("bs.tooltip"),
            o = "object" == typeof e && e; (r || "destroy" != e) && (r || n.data("bs.tooltip", r = new i(this, o)), "string" == typeof e && r[e]())
        })
    }
    var i = function(t, e) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null,
        this.init("tooltip", t, e)
    };
    i.VERSION = "3.2.0",
    i.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    },
    i.prototype.init = function(e, i, n) {
        this.enabled = !0,
        this.type = e,
        this.$element = t(i),
        this.options = this.getOptions(n),
        this.$viewport = this.options.viewport && t(this.options.viewport.selector || this.options.viewport);
        for (var r = this.options.trigger.split(" "), o = r.length; o--;) {
            var s = r[o];
            if ("click" == s) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != s) {
                var a = "hover" == s ? "mouseenter": "focusin",
                l = "hover" == s ? "mouseleave": "focusout";
                this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)),
                this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({},
        this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    },
    i.prototype.getDefaults = function() {
        return i.DEFAULTS
    },
    i.prototype.getOptions = function(e) {
        return e = t.extend({},
        this.getDefaults(), this.$element.data(), e),
        e.delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }),
        e
    },
    i.prototype.getDelegateOptions = function() {
        var e = {},
        i = this.getDefaults();
        return this._options && t.each(this._options,
        function(t, n) {
            i[t] != n && (e[t] = n)
        }),
        e
    },
    i.prototype.enter = function(e) {
        var i = e instanceof this.constructor ? e: t(e.currentTarget).data("bs." + this.type);
        return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)),
        clearTimeout(i.timeout),
        i.hoverState = "in",
        i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function() {
            "in" == i.hoverState && i.show()
        },
        i.options.delay.show)) : i.show()
    },
    i.prototype.leave = function(e) {
        var i = e instanceof this.constructor ? e: t(e.currentTarget).data("bs." + this.type);
        return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)),
        clearTimeout(i.timeout),
        i.hoverState = "out",
        i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function() {
            "out" == i.hoverState && i.hide()
        },
        i.options.delay.hide)) : i.hide()
    },
    i.prototype.show = function() {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var i = t.contains(document.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !i) return;
            var n = this,
            r = this.tip(),
            o = this.getUID(this.type);
            this.setContent(),
            r.attr("id", o),
            this.$element.attr("aria-describedby", o),
            this.options.animation && r.addClass("fade");
            var s = "function" == typeof this.options.placement ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement,
            a = /\s?auto?\s?/i,
            l = a.test(s);
            l && (s = s.replace(a, "") || "top"),
            r.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(s).data("bs." + this.type, this),
            this.$element.attr("class").contains("td-tooltip")?r.appendTo(this.$element):
            (this.options.container == true? r.appendTo(this.options.container) : r.insertAfter(this.$element));
            var h = this.getPosition(),
            c = r[0].offsetWidth,
            u = r[0].offsetHeight;
            if (l) {
                var d = s,
                p = this.$element.parent(),
                f = this.getPosition(p);
                s = "bottom" == s && h.top + h.height + u - f.scroll > f.height ? "top": "top" == s && h.top - f.scroll - u < 0 ? "bottom": "right" == s && h.right + c > f.width ? "left": "left" == s && h.left - c < f.left ? "right": s,
                r.removeClass(d).addClass(s)
            }
            var g = this.getCalculatedOffset(s, h, c, u);
            this.applyPlacement(g, s);
            var m = function() {
                n.$element.trigger("shown.bs." + n.type),
                n.hoverState = null
            };
            t.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", m).emulateTransitionEnd(150) : m()
        }
    },
    i.prototype.applyPlacement = function(e, i) {
        var n = this.tip(),
        r = n[0].offsetWidth,
        o = n[0].offsetHeight,
        s = parseInt(n.css("margin-top"), 10),
        a = parseInt(n.css("margin-left"), 10);
        isNaN(s) && (s = 0),
        isNaN(a) && (a = 0),
        e.top = e.top + s,
        e.left = e.left + a,
        t.offset.setOffset(n[0], t.extend({
            using: function(t) {
                n.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        },
        e), 0),
        n.addClass("in");
        var l = n[0].offsetWidth,
        h = n[0].offsetHeight;
        "top" == i && h != o && (e.top = e.top + o - h);
        var c = this.getViewportAdjustedDelta(i, e, l, h);
        c.left ? e.left += c.left: e.top += c.top;
        var u = c.left ? 2 * c.left - r + l: 2 * c.top - o + h,
        d = c.left ? "left": "top",
        p = c.left ? "offsetWidth": "offsetHeight";
        n.offset(e),
        this.replaceArrow(u, n[0][p], d)
    },
    i.prototype.replaceArrow = function(t, e, i) {
        this.arrow().css(i, t ? 50 * (1 - t / e) + "%": "")
    },
    i.prototype.setContent = function() {
        var t = this.tip(),
        e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html": "text"](e),
        t.removeClass("fade in top bottom left right")
    },
    i.prototype.hide = function() {
        function e() {
            "in" != i.hoverState && n.detach(),
            i.$element.trigger("hidden.bs." + i.type)
        }
        var i = this,
        n = this.tip(),
        r = t.Event("hide.bs." + this.type);
        return this.$element.removeAttr("aria-describedby"),
        this.$element.trigger(r),
        r.isDefaultPrevented() ? void 0 : (n.removeClass("in"), t.support.transition && this.$tip.hasClass("fade") ? n.one("bsTransitionEnd", e).emulateTransitionEnd(150) : e(), this.hoverState = null, this)
    },
    i.prototype.fixTitle = function() {
        var t = this.$element; (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    },
    i.prototype.hasContent = function() {
        return this.getTitle()
    },
    i.prototype.getPosition = function(e) {
        e = e || this.$element;
        var i = e[0],
        n = "BODY" == i.tagName;
        return t.extend({},
        "function" == typeof i.getBoundingClientRect ? i.getBoundingClientRect() : null, {
            scroll: n ? document.documentElement.scrollTop || document.body.scrollTop: e.scrollTop(),
            width: n ? t(window).width() : e.outerWidth(),
            height: n ? t(window).height() : e.outerHeight()
        },
        n ? {
            top: 0,
            left: 0
        }: e.offset())
    },
    i.prototype.getCalculatedOffset = function(t, e, i, n) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - i / 2
        }: "top" == t ? {
            top: e.top - n,
            left: e.left + e.width / 2 - i / 2
        }: "left" == t ? {
            top: e.top + e.height / 2 - n / 2,
            left: e.left - i
        }: {
            top: e.top + e.height / 2 - n / 2,
            left: e.left + e.width
        }
    },
    i.prototype.getViewportAdjustedDelta = function(t, e, i, n) {
        var r = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return r;
        var o = this.options.viewport && this.options.viewport.padding || 0,
        s = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var a = e.top - o - s.scroll,
            l = e.top + o - s.scroll + n;
            a < s.top ? r.top = s.top - a: l > s.top + s.height && (r.top = s.top + s.height - l)
        } else {
            var h = e.left - o,
            c = e.left + o + i;
            h < s.left ? r.left = s.left - h: c > s.width && (r.left = s.left + s.width - c)
        }
        return r
    },
    i.prototype.getTitle = function() {
        var t, e = this.$element,
        i = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof i.title ? i.title.call(e[0]) : i.title)
    },
    i.prototype.getUID = function(t) {
        do t += ~~ (1e6 * Math.random());
        while (document.getElementById(t));
        return t
    },
    i.prototype.tip = function() {
        return this.$tip = this.$tip || t(this.options.template)
    },
    i.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    },
    i.prototype.validate = function() {
        this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
    },
    i.prototype.enable = function() {
        this.enabled = !0
    },
    i.prototype.disable = function() {
        this.enabled = !1
    },
    i.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    },
    i.prototype.toggle = function(e) {
        var i = this;
        e && (i = t(e.currentTarget).data("bs." + this.type), i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))),
        i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
    },
    i.prototype.destroy = function() {
        clearTimeout(this.timeout),
        this.hide().$element.off("." + this.type).removeData("bs." + this.type)
    };
    var n = t.fn.tooltip;
    t.fn.tooltip = e,
    t.fn.tooltip.Constructor = i,
    t.fn.tooltip.noConflict = function() {
        return t.fn.tooltip = n,
        this
    }
} (jQuery),
function(t, e, i) {
    function n(t) {
        var e = {},
        n = /^jQuery\d+$/;
        return i.each(t.attributes,
        function(t, i) {
            i.specified && !n.test(i.name) && (e[i.name] = i.value)
        }),
        e
    }
    function r(t, e) {
        var n = this,
        r = i(n);
        if (n.value == r.attr("placeholder") && r.hasClass("placeholder")) if (r.data("placeholder-password")) {
            if (r = r.hide().next().show().attr("id", r.removeAttr("id").data("placeholder-id")), t === !0) return r[0].value = e;
            r.focus()
        } else n.value = "",
        r.removeClass("placeholder"),
        n == s() && n.select()
    }
    function o() {
        var t, e = this,
        o = i(e),
        s = this.id;
        if ("" == e.value) {
            if ("password" == e.type) {
                if (!o.data("placeholder-textinput")) {
                    try {
                        t = o.clone().attr({
                            type: "text"
                        })
                    } catch(a) {
                        t = i("<input>").attr(i.extend(n(this), {
                            type: "text"
                        }))
                    }
                    t.removeAttr("name").data({
                        "placeholder-password": o,
                        "placeholder-id": s
                    }).bind("focus.placeholder", r),
                    o.data({
                        "placeholder-textinput": t,
                        "placeholder-id": s
                    }).before(t)
                }
                o = o.removeAttr("id").hide().prev().attr("id", s).show()
            }
            o.addClass("placeholder"),
            o[0].value = o.attr("placeholder")
        } else o.removeClass("placeholder")
    }
    function s() {
        try {
            return e.activeElement
        } catch(t) {}
    }
    var a, l, h = "[object OperaMini]" == Object.prototype.toString.call(t.operamini),
    c = "placeholder" in e.createElement("input") && !h,
    u = "placeholder" in e.createElement("textarea") && !h,
    d = i.fn,
    p = i.valHooks,
    f = i.propHooks;
    c && u ? (l = d.placeholder = function() {
        return this
    },
    l.input = l.textarea = !0) : (l = d.placeholder = function() {
        var t = this;
        return t.filter((c ? "textarea": ":input") + "[placeholder]").not(".placeholder").bind({
            "focus.placeholder": r,
            "blur.placeholder": o
        }).data("placeholder-enabled", !0).trigger("blur.placeholder"),
        t
    },
    l.input = c, l.textarea = u, a = {
        get: function(t) {
            var e = i(t),
            n = e.data("placeholder-password");
            return n ? n[0].value: e.data("placeholder-enabled") && e.hasClass("placeholder") ? "": t.value
        },
        set: function(t, e) {
            var n = i(t),
            a = n.data("placeholder-password");
            return a ? a[0].value = e: n.data("placeholder-enabled") ? ("" == e ? (t.value = e, t != s() && o.call(t)) : n.hasClass("placeholder") ? r.call(t, !0, e) || (t.value = e) : t.value = e, n) : t.value = e
        }
    },
    c || (p.input = a, f.value = a), u || (p.textarea = a, f.value = a), i(function() {
        i(e).delegate("form", "submit.placeholder",
        function() {
            var t = i(".placeholder", this).each(r);
            setTimeout(function() {
                t.each(o)
            },
            10)
        })
    }), i(t).bind("beforeunload.placeholder",
    function() {
        i(".placeholder").each(function() {
            this.value = ""
        })
    }))
} (this, document, jQuery),
$(function() {
    $.fn.extend({
        alertModal: function(t) {
            var e = '<div class="modal-dialog" id="alertContainer">                <div class="modal-content">                  <div class="modal-header">                    <button type="button" class="close call_back" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>                    <h4 class="modal-title">#Heading#</h4>                  </div>                  <div class="modal-body" style="text-align:center;">                    #Body#                  </div>                  <div class="modal-footer" style="text-align: center;">                    <input type="button" class="bule_button call_back" id="alertBtn" value="#alertValue#">                  </div>                </div>              </div>            </div>',
            i = {
                heading: "Please confirm",
                body: "Body contents",
                alertValue: "alertValue",
                callback: null,
                async: !0
            },
            t = $.extend(i, t);
            e = e.replace("#Heading#", t.heading).replace("#Body#", t.body).replace("#alertValue#", t.alertValue);
            var n = $("#alertContainer");
            n && n.remove(),
            $("body").append(e),
            n = $("#alertContainer"),
            n.modal("show").css({
                "padding-top": function() {
                    return ($("html").height() - $(this).height()) / 2
                }
            }),
            $("body").on("click", "#alertContainer .call_back",
            function() {
                t.async ? (null != t.callback && t.callback(), n.modal("hide")) : (n.modal("hide"), null != t.callback && t.callback())
            })
        }
    })
});
var vcity = {
    11 : "\u5317\u4eac",
    12 : "\u5929\u6d25",
    13 : "\u6cb3\u5317",
    14 : "\u5c71\u897f",
    15 : "\u5185\u8499\u53e4",
    21 : "\u8fbd\u5b81",
    22 : "\u5409\u6797",
    23 : "\u9ed1\u9f99\u6c5f",
    31 : "\u4e0a\u6d77",
    32 : "\u6c5f\u82cf",
    33 : "\u6d59\u6c5f",
    34 : "\u5b89\u5fbd",
    35 : "\u798f\u5efa",
    36 : "\u6c5f\u897f",
    37 : "\u5c71\u4e1c",
    41 : "\u6cb3\u5357",
    42 : "\u6e56\u5317",
    43 : "\u6e56\u5357",
    44 : "\u5e7f\u4e1c",
    45 : "\u5e7f\u897f",
    46 : "\u6d77\u5357",
    50 : "\u91cd\u5e86",
    51 : "\u56db\u5ddd",
    52 : "\u8d35\u5dde",
    53 : "\u4e91\u5357",
    54 : "\u897f\u85cf",
    61 : "\u9655\u897f",
    62 : "\u7518\u8083",
    63 : "\u9752\u6d77",
    64 : "\u5b81\u590f",
    65 : "\u65b0\u7586",
    71 : "\u53f0\u6e7e",
    81 : "\u9999\u6e2f",
    82 : "\u6fb3\u95e8",
    91 : "\u56fd\u5916"
};
checkCard = function(t) {
    return "" === t ? !1 : isCardNo(t) === !1 ? !1 : checkProvince(t) === !1 ? !1 : checkBirthday(t) === !1 ? !1 : checkParity(t) === !1 ? !1 : !0
},
isCardNo = function(t) {
    var e = /(^\d{15}$)|(^\d{17}(\d|X)$)/;
    return e.test(t) === !1 ? !1 : !0
},
checkProvince = function(t) {
    var e = t.substr(0, 2);
    return void 0 == vcity[e] ? !1 : !0
},
checkBirthday = function(t) {
    var e = t.length;
    if ("15" == e) {
        var i = /^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/,
        n = t.match(i),
        r = n[2],
        o = n[3],
        s = n[4],
        a = new Date("19" + r + "/" + o + "/" + s);
        return verifyBirthday("19" + r, o, s, a)
    }
    if ("18" == e) {
        var l = /^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/,
        n = t.match(l),
        r = n[2],
        o = n[3],
        s = n[4],
        a = new Date(r + "/" + o + "/" + s);
        return verifyBirthday(r, o, s, a)
    }
    return ! 1
},
verifyBirthday = function(t, e, i, n) {
    var r = new Date,
    o = r.getFullYear();
    if (n.getFullYear() == t && n.getMonth() + 1 == e && n.getDate() == i) {
        var s = o - t;
        return s >= 3 && 100 >= s ? !0 : !1
    }
    return ! 1
},
checkParity = function(t) {
    t = changeFivteenToEighteen(t);
    var e = t.length;
    if ("18" == e) {
        var i, n, r = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2),
        o = new Array("1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"),
        s = 0;
        for (i = 0; 17 > i; i++) s += t.substr(i, 1) * r[i];
        return n = o[s % 11],
        n == t.substr(17, 1) ? !0 : !1
    }
    return ! 1
},
changeFivteenToEighteen = function(t) {
    if ("15" == t.length) {
        var e, i = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2),
        n = new Array("1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"),
        r = 0;
        for (t = t.substr(0, 6) + "19" + t.substr(6, t.length - 6), e = 0; 17 > e; e++) r += t.substr(e, 1) * i[e];
        return t += n[r % 11]
    }
    return t
},
$(".merchants").on("click",
function() {
    $(".personals_menu_sub").hide()
}),
$(".personals").on("click",
function() {
    $(".merchants_menu_sub").hide()
}),
$("#merchant_btn").on("click",
function() {
    $.ajax({
        type: "get",
        url: "/console/merchant.js"
    })
}),
$("#personal_btn").on("click",
function() {
    $.ajax({
        type: "get",
        url: "/console/personal.js"
    })
}),
jQuery.validator.addMethod("user_name",
function(t, e) {
    var i = this.elementValue(e),
    n = this.elementValue(document.getElementById("mid"));
    return void 0 != n || $.validator.methods.required.call(this, i, e)
},
"\u6301\u5361\u4eba\u59d3\u540d\u4e0d\u80fd\u4e3a\u7a7a\uff01"),
jQuery.validator.addMethod("id_card",
function(t, e) {
    return this.optional(e) || checkCard(t)
},
"\u8eab\u4efd\u8bc1\u8f93\u5165\u6709\u8bef\uff01"),
jQuery.validator.addMethod("mid",
function(t, e) {
    return this.optional(e) || !/[@]/.test(t)
},
"\u4e0d\u652f\u6301\u8131\u654f\u94f6\u8054\u5546\u6237\u7f16\u53f7\uff01"),
jQuery.validator.addMethod("card",
function(t, e) {
    return this.optional(e) || !/[@]/.test(t)
},
"\u4e0d\u652f\u6301\u8131\u654f\u94f6\u884c\u5361\u53f7\uff01"),
jQuery.validator.addMethod("mobile",
function(t, e) {
    return this.optional(e) || /\d{11}/.test(t)
},
"\u624b\u673a\u53f7\u7801\u8f93\u5165\u6709\u8bef\uff01"),
jQuery.validator.addMethod("corp_name",
function(t, e) {
    var i = !1,
    t = this.elementValue(e),
    n = "/reports/merchants/query",
    r = {
        q: t
    };
    return $.ajax({
        type: "GET",
        url: n,
        data: r,
        contentType: "application/json",
        async: !1,
        success: function(e) {
            console.log(e);
            for (var n in e) if (n.name == t) {
                i = !0;
                break
            }
        }
    }),
    i
},
"\u94f6\u8054\u5546\u6237\u540d\u79f0\u4e0d\u5b58\u5728\uff01"),
jQuery.validator.addMethod("commerce-checkbox",
function() {
    return arr = $(".commerce-checkbox:checked").val(),
    void 0 != arr
},
"\u4e8c\u8005\u81f3\u5c11\u9009\u5176\u4e00"),
$(document).on("click", ".print_button",
function() {
    $("#back_top").hide(),
    window.print()
}),
$(".menu").click(function() {
    $(this).next().toggle()
}),
$("#queryForm").validate({
    errorPlacement: function(t, e) {
        t.appendTo(e.closest("tr").find("td").eq(2))
    }
}),
$("#queryForm").on("submit",
function(t) {
    return $("#queryForm").validate().form() ? ($("#queryForm input").attr("readonly", !0), $(".loading").val("\u9875\u9762\u6b63\u5728\u52a0\u8f7d\u4e2d \u8bf7\u7a0d\u5019..."), $(".loading").attr("disabled", !0), void 0) : (t && t.preventDefault ? t.preventDefault() : window.event.returnValue = !1, !1)
}),
$(".menu_btn").on("click",
function() {
    $(".menu_btn").css("font-weight", "normal"),
    $(this).css("font-weight", "bold")
}),
$("body").on("change", "#query_type",
function() {
    $("#error_msg").hide();
    var t = $("#query_type").val();
    "1" == t ? ($("#merchant_name_span").hide(), $("#mid_span").show(), $("#mid_tr").show(), $("#merchant_name").removeClass("required"), $("#mid").addClass("required"), $("#posId_tr").show()) : ($("#mid_span").hide(), $("#merchant_name_span").show(), $("#merchant_name").addClass("required"), $("#mid").removeClass("required"), $("#mid_tr").hide(), $("#posId_tr").hide())
}),
$("body").on("change", "#report_query_type",
function() {
    var t = $("#report_query_type").val();
    "1" == t ? ($("#merchant_name_span").hide(), $("#mid_span").show(), $("#merchant_name").removeClass("required"), $("#mid").addClass("required")) : ($("#mid_span").hide(), $("#merchant_name_span").show(), $("#merchant_name").addClass("required"), $("#mid").removeClass("required"))
}),
$("body").on("change", "#commerce_query_type",
function() {
    var t = $("#commerce_query_type").val();
    "1" == t ? ($("#commerce_name_tr").show(), $("#mid_tr").hide()) : "0" == t && ($("#commerce_name_tr").hide(), $("#mid_tr").show())
}),
$("body").on("click", "#bill_verify_btn",
function(t) {
    if ($("#queryForm").validate().form()) {
        $("#queryForm input").attr("readonly", !0),
        $("#bill_verify_btn").val("\u6570\u636e\u6b63\u5728\u52a0\u8f7d\u4e2d \u8bf7\u7a0d\u5019"),
        $("#bill_verify_btn").attr("disabled", !0);
        var e = $(t.target),
        i = e.data("category"),
        n = "personals" == i ? {
            name: $.trim($("#username").val()),
            card: $.trim($("#card").val()),
            begin_at: $.trim($("#begin_date").val()),
            end_at: $.trim($("#end_date").val())
        }: {
            query_type: $.trim($("#query_type").val()),
            name: $.trim($("#merchant_name").val()),
            mid: $.trim($("#mid").val()),
            begin_at: $.trim($("#begin_date").val()),
            end_at: $.trim($("#end_date").val())
        },
        r = "/" + i + "/bills/bill_verify";
        bill_verify(e, i, r, n)
    }
}),
$("#verifyBtn").on("click",
function() {
    if ($("#queryForm").validate().form()) {
        var t = $(this),
        e = "/reports/personals/verify_bank_card",
        i = {
            heading: "\u7cfb\u7edf\u63d0\u793a",
            body: "\u672a\u77e5\u9a8c\u8bc1\uff0c\u8be5\u5361\u6682\u65f6\u4e0d\u80fd\u786e\u5b9a\u4e3a\u6301\u5361\u4eba\u6240\u6709\uff0c\u8bf7\u4e0d\u8981\u518d\u6b21\u9a8c\u8bc1\uff01",
            alertValue: "\u67e5\u8be2\u8be5\u5361",
            callback: function() {
                $("#queryForm").submit()
            }
        },
        n = {
            user_name: $.trim($("#user_name").val()),
            bank_card: $.trim($("#bank_card").val())
        };
        $.ajax({
            type: "GET",
            url: e,
            data: n,
            contentType: "application/json",
            success: function(e) {
                i.body = "undefined" == typeof e.error_msg ? "1" == e.stat ? "\u9a8c\u8bc1\u6210\u529f\uff0c\u8be5\u5361\u4e3a\u6301\u5361\u4eba\u6240\u6709\uff01": "2" == e.stat ? "\u9a8c\u8bc1\u5931\u8d25\uff0c\u8be5\u5361\u4e0d\u4e3a\u6301\u5361\u4eba\u6240\u6709\uff01\u8bf7\u6838\u5bf9\u4fe1\u606f\u540e\u518d\u8fdb\u884c\u9a8c\u8bc1\uff01": "\u672a\u77e5\u9a8c\u8bc1\uff0c\u8be5\u5361\u6682\u65f6\u4e0d\u80fd\u786e\u5b9a\u4e3a\u6301\u5361\u4eba\u6240\u6709\uff0c\u8bf7\u4e0d\u8981\u518d\u6b21\u9a8c\u8bc1\uff01": e.error_msg,
                t.alertModal(i)
            },
            error: function() {
                t.alertModal(i)
            }
        })
    }
}),
$("body").on("click", "#search_btn",
function() {
    var t = $("#search_btn").data("category"),
    e = $("#search_btn").data("type"),
    i = "/" + t + "/" + e + "/search.js",
    n = $.trim($("#type").val());
    "\u9a8c\u771f\u4f2a" == n ? n = "verify_bill": "bills" == e && "\u67e5\u8be2" == n ? n = "bill": "bills" == e && "" == n ? n = "bill,verify_bill": (null == n || "" == n) && (n = e.substr(0, e.length - 1));
    var r = {
        code: $.trim($("#query_code").val()),
        created_at_begin: $.trim($("#created_at_begin").val()),
        created_at_end: $.trim($("#created_at_end").val()),
        query_user_name: $.trim($("#query_user_name").val()),
        name: $.trim($("#query_username").val()),
        card: $.trim($("#query_card").val()),
        mid: $.trim($("#query_mid").val()),
        type: n
    };
    $.ajax({
        type: "get",
        url: i,
        data: r
    })
}),
$("#associatedBtn").on("click",
function() {
    if ($("#queryForm").validate().form()) {
        var t = $(this),
        e = "/reports/personals/associate_card",
        i = {
            bankCard: $("#bank_card").val().trim()
        },
        n = {
            heading: "\u7cfb\u7edf\u63d0\u793a",
            body: "\u6682\u672a\u627e\u5230\u8be5\u6301\u5361\u4eba\u7684\u5176\u4ed6\u5361\u53f7\uff0c\u8bf7\u786e\u8ba4\u4fe1\u606f\u51c6\u786e\u540e\uff0c\u518d\u8fdb\u884c\u67e5\u8be2!",
            alertValue: "\u67e5\u8be2\u8be5\u5361",
            callback: function() {
                $("#queryForm").trigger("submit")
            }
        };
        $.ajax({
            type: "GET",
            url: e,
            data: i,
            contentType: "application/json",
            success: function(e) {
                if ("undefined" == typeof e.error_msg && 0 != e.length) {
                    var r, o = JSON.parse(e),
                    s = $.inArray(i.bankCard, o);
                    s >= 0 && o.slice(s, 1),
                    shortArray = short_str(o),
                    r = shortArray.join(","),
                    n.body = "" == r ? "\u6682\u672a\u627e\u5230\u8be5\u6301\u5361\u4eba\u7684\u5176\u4ed6\u5361\u53f7\uff0c\u8bf7\u786e\u8ba4\u4fe1\u606f\u51c6\u786e\u540e\uff0c\u518d\u8fdb\u884c\u67e5\u8be2": "\u8be5\u6301\u5361\u4eba\u5bf9\u5e94\u7684\u5176\u4ed6\u5361\u53f7\u4e3a\uff1a<br/>" + r,
                    n.callback = function() {
                        $("#associated_bank_card").val(o.join(",")),
                        $("#queryForm").submit(),
                        $("#associated_bank_card").val("")
                    }
                }
                t.alertModal(n)
            },
            error: function() {
                t.alertModal(n)
            }
        })
    }
}),
$("body").on("click", ".report_summary a",
function(t) {
    t && t.preventDefault ? t.preventDefault() : window.event.returnValue = !1,
    $("html,body").animate({
        scrollTop: $($(this).attr("href")).offset().top - 100
    },
    1e3)
}),
$("body").on("click", ".bill-detail-btn",
function(t) {
    var e = $(t.target);
    $(".bill-list").hide(),
    $(".header_" + e.data("id")).show(),
    $("#bill_list_" + e.data("id")).show()
}),
$("body").on("click", ".query_history_bill_btn",
function(t) {
    var e = $(t.target),
    i = {
        id: e.data("id")
    },
    n = e.data("category");
    url = "/" + n + "/bills/query_history_bill.js",
    $.ajax({
        type: "post",
        data: i,
        url: url
    })
}),
$("body").on("click", ".query_history_report_btn",
function(t) {
    var e = $(t.target),
    i = {
        id: e.data("id")
    },
    n = e.data("category");
    url = "/" + n + "/reports/query_history_report.js",
    $.ajax({
        type: "post",
        data: i,
        url: url
    })
}),
$("body").on("click", ".verify_button",
function(t) {
    var e = $(t.target),
    i = {
        id: e.data("id")
    },
    n = e.data("category");
    url = "/" + n + "/bills/verify_data",
    bill_verify(e, n, url, i)
});