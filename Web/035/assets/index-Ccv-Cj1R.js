console.log(1);
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
        s(i);
    new MutationObserver(i=>{
        for (const r of i)
            if (r.type === "childList")
                for (const o of r.addedNodes)
                    o.tagName === "LINK" && o.rel === "modulepreload" && s(o)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(i) {
        const r = {};
        return i.integrity && (r.integrity = i.integrity),
        i.referrerPolicy && (r.referrerPolicy = i.referrerPolicy),
        i.crossOrigin === "use-credentials" ? r.credentials = "include" : i.crossOrigin === "anonymous" ? r.credentials = "omit" : r.credentials = "same-origin",
        r
    }
    function s(i) {
        if (i.ep)
            return;
        i.ep = !0;
        const r = n(i);
        fetch(i.href, r)
    }
}
)();
/**
* @vue/shared v3.4.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function vn(e, t) {
    const n = new Set(e.split(","));
    return t ? s=>n.has(s.toLowerCase()) : s=>n.has(s)
}
const V = {}
  , qe = []
  , le = ()=>{}
  , yi = ()=>!1
  , Lt = e=>e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97)
  , En = e=>e.startsWith("onUpdate:")
  , X = Object.assign
  , Cn = (e,t)=>{
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
  , wi = Object.prototype.hasOwnProperty
  , R = (e,t)=>wi.call(e, t)
  , I = Array.isArray
  , Ge = e=>Ft(e) === "[object Map]"
  , Ts = e=>Ft(e) === "[object Set]"
  , A = e=>typeof e == "function"
  , G = e=>typeof e == "string"
  , Qe = e=>typeof e == "symbol"
  , W = e=>e !== null && typeof e == "object"
  , Os = e=>(W(e) || A(e)) && A(e.then) && A(e.catch)
  , Ps = Object.prototype.toString
  , Ft = e=>Ps.call(e)
  , vi = e=>Ft(e).slice(8, -1)
  , Is = e=>Ft(e) === "[object Object]"
  , Sn = e=>G(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e
  , rt = vn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted")
  , Nt = e=>{
    const t = Object.create(null);
    return n=>t[n] || (t[n] = e(n))
}
  , Ei = /-(\w)/g
  , Xe = Nt(e=>e.replace(Ei, (t,n)=>n ? n.toUpperCase() : ""))
  , Ci = /\B([A-Z])/g
  , et = Nt(e=>e.replace(Ci, "-$1").toLowerCase())
  , As = Nt(e=>e.charAt(0).toUpperCase() + e.slice(1))
  , Yt = Nt(e=>e ? `on${As(e)}` : "")
  , Be = (e,t)=>!Object.is(e, t)
  , Xt = (e,t)=>{
    for (let n = 0; n < e.length; n++)
        e[n](t)
}
  , It = (e,t,n)=>{
    Object.defineProperty(e, t, {
        configurable: !0,
        enumerable: !1,
        value: n
    })
}
  , Si = e=>{
    const t = parseFloat(e);
    return isNaN(t) ? e : t
}
;
let Jn;
const Ms = ()=>Jn || (Jn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Tn(e) {
    if (I(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) {
            const s = e[n]
              , i = G(s) ? Ii(s) : Tn(s);
            if (i)
                for (const r in i)
                    t[r] = i[r]
        }
        return t
    } else if (G(e) || W(e))
        return e
}
const Ti = /;(?![^(]*\))/g
  , Oi = /:([^]+)/
  , Pi = /\/\*[^]*?\*\//g;
function Ii(e) {
    const t = {};
    return e.replace(Pi, "").split(Ti).forEach(n=>{
        if (n) {
            const s = n.split(Oi);
            s.length > 1 && (t[s[0].trim()] = s[1].trim())
        }
    }
    ),
    t
}
function On(e) {
    let t = "";
    if (G(e))
        t = e;
    else if (I(e))
        for (let n = 0; n < e.length; n++) {
            const s = On(e[n]);
            s && (t += s + " ")
        }
    else if (W(e))
        for (const n in e)
            e[n] && (t += n + " ");
    return t.trim()
}
const Ai = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly"
  , Mi = vn(Ai);
function Rs(e) {
    return !!e || e === ""
}
const xt = e=>G(e) ? e : e == null ? "" : I(e) || W(e) && (e.toString === Ps || !A(e.toString)) ? JSON.stringify(e, Ls, 2) : String(e)
  , Ls = (e,t)=>t && t.__v_isRef ? Ls(e, t.value) : Ge(t) ? {
    [`Map(${t.size})`]: [...t.entries()].reduce((n,[s,i],r)=>(n[Zt(s, r) + " =>"] = i,
    n), {})
} : Ts(t) ? {
    [`Set(${t.size})`]: [...t.values()].map(n=>Zt(n))
} : Qe(t) ? Zt(t) : W(t) && !I(t) && !Is(t) ? String(t) : t
  , Zt = (e,t="")=>{
    var n;
    return Qe(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
}
;
/**
* @vue/reactivity v3.4.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let fe;
class Ri {
    constructor(t=!1) {
        this.detached = t,
        this._active = !0,
        this.effects = [],
        this.cleanups = [],
        this.parent = fe,
        !t && fe && (this.index = (fe.scopes || (fe.scopes = [])).push(this) - 1)
    }
    get active() {
        return this._active
    }
    run(t) {
        if (this._active) {
            const n = fe;
            try {
                return fe = this,
                t()
            } finally {
                fe = n
            }
        }
    }
    on() {
        fe = this
    }
    off() {
        fe = this.parent
    }
    stop(t) {
        if (this._active) {
            let n, s;
            for (n = 0,
            s = this.effects.length; n < s; n++)
                this.effects[n].stop();
            for (n = 0,
            s = this.cleanups.length; n < s; n++)
                this.cleanups[n]();
            if (this.scopes)
                for (n = 0,
                s = this.scopes.length; n < s; n++)
                    this.scopes[n].stop(!0);
            if (!this.detached && this.parent && !t) {
                const i = this.parent.scopes.pop();
                i && i !== this && (this.parent.scopes[this.index] = i,
                i.index = this.index)
            }
            this.parent = void 0,
            this._active = !1
        }
    }
}
function Li(e, t=fe) {
    t && t.active && t.effects.push(e)
}
function Fi() {
    return fe
}
let He;
class Pn {
    constructor(t, n, s, i) {
        this.fn = t,
        this.trigger = n,
        this.scheduler = s,
        this.active = !0,
        this.deps = [],
        this._dirtyLevel = 4,
        this._trackId = 0,
        this._runnings = 0,
        this._shouldSchedule = !1,
        this._depsLength = 0,
        Li(this, i)
    }
    get dirty() {
        if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
            this._dirtyLevel = 1,
            Ve();
            for (let t = 0; t < this._depsLength; t++) {
                const n = this.deps[t];
                if (n.computed && (Ni(n.computed),
                this._dirtyLevel >= 4))
                    break
            }
            this._dirtyLevel === 1 && (this._dirtyLevel = 0),
            Ke()
        }
        return this._dirtyLevel >= 4
    }
    set dirty(t) {
        this._dirtyLevel = t ? 4 : 0
    }
    run() {
        if (this._dirtyLevel = 0,
        !this.active)
            return this.fn();
        let t = Ie
          , n = He;
        try {
            return Ie = !0,
            He = this,
            this._runnings++,
            Yn(this),
            this.fn()
        } finally {
            Xn(this),
            this._runnings--,
            He = n,
            Ie = t
        }
    }
    stop() {
        var t;
        this.active && (Yn(this),
        Xn(this),
        (t = this.onStop) == null || t.call(this),
        this.active = !1)
    }
}
function Ni(e) {
    return e.value
}
function Yn(e) {
    e._trackId++,
    e._depsLength = 0
}
function Xn(e) {
    if (e.deps.length > e._depsLength) {
        for (let t = e._depsLength; t < e.deps.length; t++)
            Fs(e.deps[t], e);
        e.deps.length = e._depsLength
    }
}
function Fs(e, t) {
    const n = e.get(t);
    n !== void 0 && t._trackId !== n && (e.delete(t),
    e.size === 0 && e.cleanup())
}
let Ie = !0
  , fn = 0;
const Ns = [];
function Ve() {
    Ns.push(Ie),
    Ie = !1
}
function Ke() {
    const e = Ns.pop();
    Ie = e === void 0 ? !0 : e
}
function In() {
    fn++
}
function An() {
    for (fn--; !fn && un.length; )
        un.shift()()
}
function $s(e, t, n) {
    if (t.get(e) !== e._trackId) {
        t.set(e, e._trackId);
        const s = e.deps[e._depsLength];
        s !== t ? (s && Fs(s, e),
        e.deps[e._depsLength++] = t) : e._depsLength++
    }
}
const un = [];
function js(e, t, n) {
    In();
    for (const s of e.keys()) {
        let i;
        s._dirtyLevel < t && (i ?? (i = e.get(s) === s._trackId)) && (s._shouldSchedule || (s._shouldSchedule = s._dirtyLevel === 0),
        s._dirtyLevel = t),
        s._shouldSchedule && (i ?? (i = e.get(s) === s._trackId)) && (s.trigger(),
        (!s._runnings || s.allowRecurse) && s._dirtyLevel !== 2 && (s._shouldSchedule = !1,
        s.scheduler && un.push(s.scheduler)))
    }
    An()
}
const Hs = (e,t)=>{
    const n = new Map;
    return n.cleanup = e,
    n.computed = t,
    n
}
  , an = new WeakMap
  , Ue = Symbol("")
  , dn = Symbol("");
function ne(e, t, n) {
    if (Ie && He) {
        let s = an.get(e);
        s || an.set(e, s = new Map);
        let i = s.get(n);
        i || s.set(n, i = Hs(()=>s.delete(n))),
        $s(He, i)
    }
}
function we(e, t, n, s, i, r) {
    const o = an.get(e);
    if (!o)
        return;
    let c = [];
    if (t === "clear")
        c = [...o.values()];
    else if (n === "length" && I(e)) {
        const u = Number(s);
        o.forEach((d,h)=>{
            (h === "length" || !Qe(h) && h >= u) && c.push(d)
        }
        )
    } else
        switch (n !== void 0 && c.push(o.get(n)),
        t) {
        case "add":
            I(e) ? Sn(n) && c.push(o.get("length")) : (c.push(o.get(Ue)),
            Ge(e) && c.push(o.get(dn)));
            break;
        case "delete":
            I(e) || (c.push(o.get(Ue)),
            Ge(e) && c.push(o.get(dn)));
            break;
        case "set":
            Ge(e) && c.push(o.get(Ue));
            break
        }
    In();
    for (const u of c)
        u && js(u, 4);
    An()
}
const $i = vn("__proto__,__v_isRef,__isVue")
  , Us = new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e !== "arguments" && e !== "caller").map(e=>Symbol[e]).filter(Qe))
  , Zn = ji();
function ji() {
    const e = {};
    return ["includes", "indexOf", "lastIndexOf"].forEach(t=>{
        e[t] = function(...n) {
            const s = N(this);
            for (let r = 0, o = this.length; r < o; r++)
                ne(s, "get", r + "");
            const i = s[t](...n);
            return i === -1 || i === !1 ? s[t](...n.map(N)) : i
        }
    }
    ),
    ["push", "pop", "shift", "unshift", "splice"].forEach(t=>{
        e[t] = function(...n) {
            Ve(),
            In();
            const s = N(this)[t].apply(this, n);
            return An(),
            Ke(),
            s
        }
    }
    ),
    e
}
function Hi(e) {
    const t = N(this);
    return ne(t, "has", e),
    t.hasOwnProperty(e)
}
class Bs {
    constructor(t=!1, n=!1) {
        this._isReadonly = t,
        this._shallow = n
    }
    get(t, n, s) {
        const i = this._isReadonly
          , r = this._shallow;
        if (n === "__v_isReactive")
            return !i;
        if (n === "__v_isReadonly")
            return i;
        if (n === "__v_isShallow")
            return r;
        if (n === "__v_raw")
            return s === (i ? r ? Xi : Ws : r ? Ds : Ks).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
        const o = I(t);
        if (!i) {
            if (o && R(Zn, n))
                return Reflect.get(Zn, n, s);
            if (n === "hasOwnProperty")
                return Hi
        }
        const c = Reflect.get(t, n, s);
        return (Qe(n) ? Us.has(n) : $i(n)) || (i || ne(t, "get", n),
        r) ? c : re(c) ? o && Sn(n) ? c : c.value : W(c) ? i ? ks(c) : jt(c) : c
    }
}
class Vs extends Bs {
    constructor(t=!1) {
        super(!1, t)
    }
    set(t, n, s, i) {
        let r = t[n];
        if (!this._shallow) {
            const u = ft(r);
            if (!hn(s) && !ft(s) && (r = N(r),
            s = N(s)),
            !I(t) && re(r) && !re(s))
                return u ? !1 : (r.value = s,
                !0)
        }
        const o = I(t) && Sn(n) ? Number(n) < t.length : R(t, n)
          , c = Reflect.set(t, n, s, i);
        return t === N(i) && (o ? Be(s, r) && we(t, "set", n, s) : we(t, "add", n, s)),
        c
    }
    deleteProperty(t, n) {
        const s = R(t, n);
        t[n];
        const i = Reflect.deleteProperty(t, n);
        return i && s && we(t, "delete", n, void 0),
        i
    }
    has(t, n) {
        const s = Reflect.has(t, n);
        return (!Qe(n) || !Us.has(n)) && ne(t, "has", n),
        s
    }
    ownKeys(t) {
        return ne(t, "iterate", I(t) ? "length" : Ue),
        Reflect.ownKeys(t)
    }
}
class Ui extends Bs {
    constructor(t=!1) {
        super(!0, t)
    }
    set(t, n) {
        return !0
    }
    deleteProperty(t, n) {
        return !0
    }
}
const Bi = new Vs
  , Vi = new Ui
  , Ki = new Vs(!0)
  , Mn = e=>e
  , $t = e=>Reflect.getPrototypeOf(e);
function yt(e, t, n=!1, s=!1) {
    e = e.__v_raw;
    const i = N(e)
      , r = N(t);
    n || (Be(t, r) && ne(i, "get", t),
    ne(i, "get", r));
    const {has: o} = $t(i)
      , c = s ? Mn : n ? Nn : Fn;
    if (o.call(i, t))
        return c(e.get(t));
    if (o.call(i, r))
        return c(e.get(r));
    e !== i && e.get(t)
}
function wt(e, t=!1) {
    const n = this.__v_raw
      , s = N(n)
      , i = N(e);
    return t || (Be(e, i) && ne(s, "has", e),
    ne(s, "has", i)),
    e === i ? n.has(e) : n.has(e) || n.has(i)
}
function vt(e, t=!1) {
    return e = e.__v_raw,
    !t && ne(N(e), "iterate", Ue),
    Reflect.get(e, "size", e)
}
function Qn(e) {
    e = N(e);
    const t = N(this);
    return $t(t).has.call(t, e) || (t.add(e),
    we(t, "add", e, e)),
    this
}
function es(e, t) {
    t = N(t);
    const n = N(this)
      , {has: s, get: i} = $t(n);
    let r = s.call(n, e);
    r || (e = N(e),
    r = s.call(n, e));
    const o = i.call(n, e);
    return n.set(e, t),
    r ? Be(t, o) && we(n, "set", e, t) : we(n, "add", e, t),
    this
}
function ts(e) {
    const t = N(this)
      , {has: n, get: s} = $t(t);
    let i = n.call(t, e);
    i || (e = N(e),
    i = n.call(t, e)),
    s && s.call(t, e);
    const r = t.delete(e);
    return i && we(t, "delete", e, void 0),
    r
}
function ns() {
    const e = N(this)
      , t = e.size !== 0
      , n = e.clear();
    return t && we(e, "clear", void 0, void 0),
    n
}
function Et(e, t) {
    return function(s, i) {
        const r = this
          , o = r.__v_raw
          , c = N(o)
          , u = t ? Mn : e ? Nn : Fn;
        return !e && ne(c, "iterate", Ue),
        o.forEach((d,h)=>s.call(i, u(d), u(h), r))
    }
}
function Ct(e, t, n) {
    return function(...s) {
        const i = this.__v_raw
          , r = N(i)
          , o = Ge(r)
          , c = e === "entries" || e === Symbol.iterator && o
          , u = e === "keys" && o
          , d = i[e](...s)
          , h = n ? Mn : t ? Nn : Fn;
        return !t && ne(r, "iterate", u ? dn : Ue),
        {
            next() {
                const {value: y, done: E} = d.next();
                return E ? {
                    value: y,
                    done: E
                } : {
                    value: c ? [h(y[0]), h(y[1])] : h(y),
                    done: E
                }
            },
            [Symbol.iterator]() {
                return this
            }
        }
    }
}
function Ee(e) {
    return function(...t) {
        return e === "delete" ? !1 : e === "clear" ? void 0 : this
    }
}
function Di() {
    const e = {
        get(r) {
            return yt(this, r)
        },
        get size() {
            return vt(this)
        },
        has: wt,
        add: Qn,
        set: es,
        delete: ts,
        clear: ns,
        forEach: Et(!1, !1)
    }
      , t = {
        get(r) {
            return yt(this, r, !1, !0)
        },
        get size() {
            return vt(this)
        },
        has: wt,
        add: Qn,
        set: es,
        delete: ts,
        clear: ns,
        forEach: Et(!1, !0)
    }
      , n = {
        get(r) {
            return yt(this, r, !0)
        },
        get size() {
            return vt(this, !0)
        },
        has(r) {
            return wt.call(this, r, !0)
        },
        add: Ee("add"),
        set: Ee("set"),
        delete: Ee("delete"),
        clear: Ee("clear"),
        forEach: Et(!0, !1)
    }
      , s = {
        get(r) {
            return yt(this, r, !0, !0)
        },
        get size() {
            return vt(this, !0)
        },
        has(r) {
            return wt.call(this, r, !0)
        },
        add: Ee("add"),
        set: Ee("set"),
        delete: Ee("delete"),
        clear: Ee("clear"),
        forEach: Et(!0, !0)
    };
    return ["keys", "values", "entries", Symbol.iterator].forEach(r=>{
        e[r] = Ct(r, !1, !1),
        n[r] = Ct(r, !0, !1),
        t[r] = Ct(r, !1, !0),
        s[r] = Ct(r, !0, !0)
    }
    ),
    [e, n, t, s]
}
const [Wi,ki,zi,qi] = Di();
function Rn(e, t) {
    const n = t ? e ? qi : zi : e ? ki : Wi;
    return (s,i,r)=>i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? s : Reflect.get(R(n, i) && i in s ? n : s, i, r)
}
const Gi = {
    get: Rn(!1, !1)
}
  , Ji = {
    get: Rn(!1, !0)
}
  , Yi = {
    get: Rn(!0, !1)
}
  , Ks = new WeakMap
  , Ds = new WeakMap
  , Ws = new WeakMap
  , Xi = new WeakMap;
function Zi(e) {
    switch (e) {
    case "Object":
    case "Array":
        return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
        return 2;
    default:
        return 0
    }
}
function Qi(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : Zi(vi(e))
}
function jt(e) {
    return ft(e) ? e : Ln(e, !1, Bi, Gi, Ks)
}
function er(e) {
    return Ln(e, !1, Ki, Ji, Ds)
}
function ks(e) {
    return Ln(e, !0, Vi, Yi, Ws)
}
function Ln(e, t, n, s, i) {
    if (!W(e) || e.__v_raw && !(t && e.__v_isReactive))
        return e;
    const r = i.get(e);
    if (r)
        return r;
    const o = Qi(e);
    if (o === 0)
        return e;
    const c = new Proxy(e,o === 2 ? s : n);
    return i.set(e, c),
    c
}
function Je(e) {
    return ft(e) ? Je(e.__v_raw) : !!(e && e.__v_isReactive)
}
function ft(e) {
    return !!(e && e.__v_isReadonly)
}
function hn(e) {
    return !!(e && e.__v_isShallow)
}
function zs(e) {
    return Je(e) || ft(e)
}
function N(e) {
    const t = e && e.__v_raw;
    return t ? N(t) : e
}
function qs(e) {
    return Object.isExtensible(e) && It(e, "__v_skip", !0),
    e
}
const Fn = e=>W(e) ? jt(e) : e
  , Nn = e=>W(e) ? ks(e) : e;
class Gs {
    constructor(t, n, s, i) {
        this._setter = n,
        this.dep = void 0,
        this.__v_isRef = !0,
        this.__v_isReadonly = !1,
        this.effect = new Pn(()=>t(this._value),()=>Qt(this, this.effect._dirtyLevel === 2 ? 2 : 3)),
        this.effect.computed = this,
        this.effect.active = this._cacheable = !i,
        this.__v_isReadonly = s
    }
    get value() {
        const t = N(this);
        return (!t._cacheable || t.effect.dirty) && Be(t._value, t._value = t.effect.run()) && Qt(t, 4),
        nr(t),
        t.effect._dirtyLevel >= 2 && Qt(t, 2),
        t._value
    }
    set value(t) {
        this._setter(t)
    }
    get _dirty() {
        return this.effect.dirty
    }
    set _dirty(t) {
        this.effect.dirty = t
    }
}
function tr(e, t, n=!1) {
    let s, i;
    const r = A(e);
    return r ? (s = e,
    i = le) : (s = e.get,
    i = e.set),
    new Gs(s,i,r || !i,n)
}
function nr(e) {
    var t;
    Ie && He && (e = N(e),
    $s(He, (t = e.dep) != null ? t : e.dep = Hs(()=>e.dep = void 0, e instanceof Gs ? e : void 0)))
}
function Qt(e, t=4, n) {
    e = N(e);
    const s = e.dep;
    s && js(s, t)
}
function re(e) {
    return !!(e && e.__v_isRef === !0)
}
function sr(e) {
    return re(e) ? e.value : e
}
const ir = {
    get: (e,t,n)=>sr(Reflect.get(e, t, n)),
    set: (e,t,n,s)=>{
        const i = e[t];
        return re(i) && !re(n) ? (i.value = n,
        !0) : Reflect.set(e, t, n, s)
    }
};
function Js(e) {
    return Je(e) ? e : new Proxy(e,ir)
}
/**
* @vue/runtime-core v3.4.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Ae(e, t, n, s) {
    try {
        return s ? e(...s) : e()
    } catch (i) {
        Ht(i, t, n)
    }
}
function ae(e, t, n, s) {
    if (A(e)) {
        const r = Ae(e, t, n, s);
        return r && Os(r) && r.catch(o=>{
            Ht(o, t, n)
        }
        ),
        r
    }
    const i = [];
    for (let r = 0; r < e.length; r++)
        i.push(ae(e[r], t, n, s));
    return i
}
function Ht(e, t, n, s=!0) {
    const i = t ? t.vnode : null;
    if (t) {
        let r = t.parent;
        const o = t.proxy
          , c = `https://vuejs.org/error-reference/#runtime-${n}`;
        for (; r; ) {
            const d = r.ec;
            if (d) {
                for (let h = 0; h < d.length; h++)
                    if (d[h](e, o, c) === !1)
                        return
            }
            r = r.parent
        }
        const u = t.appContext.config.errorHandler;
        if (u) {
            Ae(u, null, 10, [e, o, c]);
            return
        }
    }
    rr(e, n, i, s)
}
function rr(e, t, n, s=!0) {
    console.error(e)
}
let ut = !1
  , pn = !1;
const Y = [];
let _e = 0;
const Ye = [];
let Te = null
  , je = 0;
const Ys = Promise.resolve();
let $n = null;
function or(e) {
    const t = $n || Ys;
    return e ? t.then(this ? e.bind(this) : e) : t
}
function lr(e) {
    let t = _e + 1
      , n = Y.length;
    for (; t < n; ) {
        const s = t + n >>> 1
          , i = Y[s]
          , r = at(i);
        r < e || r === e && i.pre ? t = s + 1 : n = s
    }
    return t
}
function jn(e) {
    (!Y.length || !Y.includes(e, ut && e.allowRecurse ? _e + 1 : _e)) && (e.id == null ? Y.push(e) : Y.splice(lr(e.id), 0, e),
    Xs())
}
function Xs() {
    !ut && !pn && (pn = !0,
    $n = Ys.then(Qs))
}
function cr(e) {
    const t = Y.indexOf(e);
    t > _e && Y.splice(t, 1)
}
function fr(e) {
    I(e) ? Ye.push(...e) : (!Te || !Te.includes(e, e.allowRecurse ? je + 1 : je)) && Ye.push(e),
    Xs()
}
function ss(e, t, n=ut ? _e + 1 : 0) {
    for (; n < Y.length; n++) {
        const s = Y[n];
        if (s && s.pre) {
            if (e && s.id !== e.uid)
                continue;
            Y.splice(n, 1),
            n--,
            s()
        }
    }
}
function Zs(e) {
    if (Ye.length) {
        const t = [...new Set(Ye)].sort((n,s)=>at(n) - at(s));
        if (Ye.length = 0,
        Te) {
            Te.push(...t);
            return
        }
        for (Te = t,
        je = 0; je < Te.length; je++)
            Te[je]();
        Te = null,
        je = 0
    }
}
const at = e=>e.id == null ? 1 / 0 : e.id
  , ur = (e,t)=>{
    const n = at(e) - at(t);
    if (n === 0) {
        if (e.pre && !t.pre)
            return -1;
        if (t.pre && !e.pre)
            return 1
    }
    return n
}
;
function Qs(e) {
    pn = !1,
    ut = !0,
    Y.sort(ur);
    try {
        for (_e = 0; _e < Y.length; _e++) {
            const t = Y[_e];
            t && t.active !== !1 && Ae(t, null, 14)
        }
    } finally {
        _e = 0,
        Y.length = 0,
        Zs(),
        ut = !1,
        $n = null,
        (Y.length || Ye.length) && Qs()
    }
}
function ar(e, t, ...n) {
    if (e.isUnmounted)
        return;
    const s = e.vnode.props || V;
    let i = n;
    const r = t.startsWith("update:")
      , o = r && t.slice(7);
    if (o && o in s) {
        const h = `${o === "modelValue" ? "model" : o}Modifiers`
          , {number: y, trim: E} = s[h] || V;
        E && (i = n.map(T=>G(T) ? T.trim() : T)),
        y && (i = n.map(Si))
    }
    let c, u = s[c = Yt(t)] || s[c = Yt(Xe(t))];
    !u && r && (u = s[c = Yt(et(t))]),
    u && ae(u, e, 6, i);
    const d = s[c + "Once"];
    if (d) {
        if (!e.emitted)
            e.emitted = {};
        else if (e.emitted[c])
            return;
        e.emitted[c] = !0,
        ae(d, e, 6, i)
    }
}
function ei(e, t, n=!1) {
    const s = t.emitsCache
      , i = s.get(e);
    if (i !== void 0)
        return i;
    const r = e.emits;
    let o = {}
      , c = !1;
    if (!A(e)) {
        const u = d=>{
            const h = ei(d, t, !0);
            h && (c = !0,
            X(o, h))
        }
        ;
        !n && t.mixins.length && t.mixins.forEach(u),
        e.extends && u(e.extends),
        e.mixins && e.mixins.forEach(u)
    }
    return !r && !c ? (W(e) && s.set(e, null),
    null) : (I(r) ? r.forEach(u=>o[u] = null) : X(o, r),
    W(e) && s.set(e, o),
    o)
}
function Ut(e, t) {
    return !e || !Lt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""),
    R(e, t[0].toLowerCase() + t.slice(1)) || R(e, et(t)) || R(e, t))
}
let be = null
  , Bt = null;
function At(e) {
    const t = be;
    return be = e,
    Bt = e && e.type.__scopeId || null,
    t
}
function dr(e) {
    Bt = e
}
function hr() {
    Bt = null
}
function pr(e, t=be, n) {
    if (!t || e._n)
        return e;
    const s = (...i)=>{
        s._d && hs(-1);
        const r = At(t);
        let o;
        try {
            o = e(...i)
        } finally {
            At(r),
            s._d && hs(1)
        }
        return o
    }
    ;
    return s._n = !0,
    s._c = !0,
    s._d = !0,
    s
}
function en(e) {
    const {type: t, vnode: n, proxy: s, withProxy: i, props: r, propsOptions: [o], slots: c, attrs: u, emit: d, render: h, renderCache: y, data: E, setupState: T, ctx: K, inheritAttrs: L} = e;
    let k, H;
    const q = At(e);
    try {
        if (n.shapeFlag & 4) {
            const z = i || s
              , oe = z;
            k = me(h.call(oe, z, y, r, T, E, K)),
            H = u
        } else {
            const z = t;
            k = me(z.length > 1 ? z(r, {
                attrs: u,
                slots: c,
                emit: d
            }) : z(r, null)),
            H = t.props ? u : gr(u)
        }
    } catch (z) {
        ct.length = 0,
        Ht(z, e, 1),
        k = Me(dt)
    }
    let $ = k;
    if (H && L !== !1) {
        const z = Object.keys(H)
          , {shapeFlag: oe} = $;
        z.length && oe & 7 && (o && z.some(En) && (H = mr(H, o)),
        $ = Ze($, H))
    }
    return n.dirs && ($ = Ze($),
    $.dirs = $.dirs ? $.dirs.concat(n.dirs) : n.dirs),
    n.transition && ($.transition = n.transition),
    k = $,
    At(q),
    k
}
const gr = e=>{
    let t;
    for (const n in e)
        (n === "class" || n === "style" || Lt(n)) && ((t || (t = {}))[n] = e[n]);
    return t
}
  , mr = (e,t)=>{
    const n = {};
    for (const s in e)
        (!En(s) || !(s.slice(9)in t)) && (n[s] = e[s]);
    return n
}
;
function _r(e, t, n) {
    const {props: s, children: i, component: r} = e
      , {props: o, children: c, patchFlag: u} = t
      , d = r.emitsOptions;
    if (t.dirs || t.transition)
        return !0;
    if (n && u >= 0) {
        if (u & 1024)
            return !0;
        if (u & 16)
            return s ? is(s, o, d) : !!o;
        if (u & 8) {
            const h = t.dynamicProps;
            for (let y = 0; y < h.length; y++) {
                const E = h[y];
                if (o[E] !== s[E] && !Ut(d, E))
                    return !0
            }
        }
    } else
        return (i || c) && (!c || !c.$stable) ? !0 : s === o ? !1 : s ? o ? is(s, o, d) : !0 : !!o;
    return !1
}
function is(e, t, n) {
    const s = Object.keys(t);
    if (s.length !== Object.keys(e).length)
        return !0;
    for (let i = 0; i < s.length; i++) {
        const r = s[i];
        if (t[r] !== e[r] && !Ut(n, r))
            return !0
    }
    return !1
}
function br({vnode: e, parent: t}, n) {
    for (; t; ) {
        const s = t.subTree;
        if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el),
        s === e)
            (e = t.vnode).el = n,
            t = t.parent;
        else
            break
    }
}
const xr = Symbol.for("v-ndc")
  , yr = e=>e.__isSuspense;
function wr(e, t) {
    t && t.pendingBranch ? I(e) ? t.effects.push(...e) : t.effects.push(e) : fr(e)
}
const vr = Symbol.for("v-scx")
  , Er = ()=>Ot(vr)
  , St = {};
function tn(e, t, n) {
    return ti(e, t, n)
}
function ti(e, t, {immediate: n, deep: s, flush: i, once: r, onTrack: o, onTrigger: c}=V) {
    if (t && r) {
        const F = t;
        t = (...xe)=>{
            F(...xe),
            oe()
        }
    }
    const u = ee
      , d = F=>s === !0 ? F : ze(F, s === !1 ? 1 : void 0);
    let h, y = !1, E = !1;
    if (re(e) ? (h = ()=>e.value,
    y = hn(e)) : Je(e) ? (h = ()=>d(e),
    y = !0) : I(e) ? (E = !0,
    y = e.some(F=>Je(F) || hn(F)),
    h = ()=>e.map(F=>{
        if (re(F))
            return F.value;
        if (Je(F))
            return d(F);
        if (A(F))
            return Ae(F, u, 2)
    }
    )) : A(e) ? t ? h = ()=>Ae(e, u, 2) : h = ()=>(T && T(),
    ae(e, u, 3, [K])) : h = le,
    t && s) {
        const F = h;
        h = ()=>ze(F())
    }
    let T, K = F=>{
        T = $.onStop = ()=>{
            Ae(F, u, 4),
            T = $.onStop = void 0
        }
    }
    , L;
    if (Wt)
        if (K = le,
        t ? n && ae(t, u, 3, [h(), E ? [] : void 0, K]) : h(),
        i === "sync") {
            const F = Er();
            L = F.__watcherHandles || (F.__watcherHandles = [])
        } else
            return le;
    let k = E ? new Array(e.length).fill(St) : St;
    const H = ()=>{
        if (!(!$.active || !$.dirty))
            if (t) {
                const F = $.run();
                (s || y || (E ? F.some((xe,de)=>Be(xe, k[de])) : Be(F, k))) && (T && T(),
                ae(t, u, 3, [F, k === St ? void 0 : E && k[0] === St ? [] : k, K]),
                k = F)
            } else
                $.run()
    }
    ;
    H.allowRecurse = !!t;
    let q;
    i === "sync" ? q = H : i === "post" ? q = ()=>te(H, u && u.suspense) : (H.pre = !0,
    u && (H.id = u.uid),
    q = ()=>jn(H));
    const $ = new Pn(h,le,q)
      , z = Fi()
      , oe = ()=>{
        $.stop(),
        z && Cn(z.effects, $)
    }
    ;
    return t ? n ? H() : k = $.run() : i === "post" ? te($.run.bind($), u && u.suspense) : $.run(),
    L && L.push(oe),
    oe
}
function Cr(e, t, n) {
    const s = this.proxy
      , i = G(e) ? e.includes(".") ? ni(s, e) : ()=>s[e] : e.bind(s, s);
    let r;
    A(t) ? r = t : (r = t.handler,
    n = t);
    const o = pt(this)
      , c = ti(i, r.bind(s), n);
    return o(),
    c
}
function ni(e, t) {
    const n = t.split(".");
    return ()=>{
        let s = e;
        for (let i = 0; i < n.length && s; i++)
            s = s[n[i]];
        return s
    }
}
function ze(e, t, n=0, s) {
    if (!W(e) || e.__v_skip)
        return e;
    if (t && t > 0) {
        if (n >= t)
            return e;
        n++
    }
    if (s = s || new Set,
    s.has(e))
        return e;
    if (s.add(e),
    re(e))
        ze(e.value, t, n, s);
    else if (I(e))
        for (let i = 0; i < e.length; i++)
            ze(e[i], t, n, s);
    else if (Ts(e) || Ge(e))
        e.forEach(i=>{
            ze(i, t, n, s)
        }
        );
    else if (Is(e))
        for (const i in e)
            ze(e[i], t, n, s);
    return e
}
function Ne(e, t, n, s) {
    const i = e.dirs
      , r = t && t.dirs;
    for (let o = 0; o < i.length; o++) {
        const c = i[o];
        r && (c.oldValue = r[o].value);
        let u = c.dir[s];
        u && (Ve(),
        ae(u, n, 8, [e.el, c, e, t]),
        Ke())
    }
}
const Tt = e=>!!e.type.__asyncLoader
  , si = e=>e.type.__isKeepAlive;
function Sr(e, t) {
    ii(e, "a", t)
}
function Tr(e, t) {
    ii(e, "da", t)
}
function ii(e, t, n=ee) {
    const s = e.__wdc || (e.__wdc = ()=>{
        let i = n;
        for (; i; ) {
            if (i.isDeactivated)
                return;
            i = i.parent
        }
        return e()
    }
    );
    if (Vt(t, s, n),
    n) {
        let i = n.parent;
        for (; i && i.parent; )
            si(i.parent.vnode) && Or(s, t, n, i),
            i = i.parent
    }
}
function Or(e, t, n, s) {
    const i = Vt(t, e, s, !0);
    ri(()=>{
        Cn(s[t], i)
    }
    , n)
}
function Vt(e, t, n=ee, s=!1) {
    if (n) {
        const i = n[e] || (n[e] = [])
          , r = t.__weh || (t.__weh = (...o)=>{
            if (n.isUnmounted)
                return;
            Ve();
            const c = pt(n)
              , u = ae(t, n, e, o);
            return c(),
            Ke(),
            u
        }
        );
        return s ? i.unshift(r) : i.push(r),
        r
    }
}
const ve = e=>(t,n=ee)=>(!Wt || e === "sp") && Vt(e, (...s)=>t(...s), n)
  , Pr = ve("bm")
  , Hn = ve("m")
  , Ir = ve("bu")
  , Ar = ve("u")
  , Mr = ve("bum")
  , ri = ve("um")
  , Rr = ve("sp")
  , Lr = ve("rtg")
  , Fr = ve("rtc");
function Nr(e, t=ee) {
    Vt("ec", e, t)
}
function nn(e, t, n, s) {
    let i;
    const r = n && n[s];
    if (I(e) || G(e)) {
        i = new Array(e.length);
        for (let o = 0, c = e.length; o < c; o++)
            i[o] = t(e[o], o, void 0, r && r[o])
    } else if (typeof e == "number") {
        i = new Array(e);
        for (let o = 0; o < e; o++)
            i[o] = t(o + 1, o, void 0, r && r[o])
    } else if (W(e))
        if (e[Symbol.iterator])
            i = Array.from(e, (o,c)=>t(o, c, void 0, r && r[c]));
        else {
            const o = Object.keys(e);
            i = new Array(o.length);
            for (let c = 0, u = o.length; c < u; c++) {
                const d = o[c];
                i[c] = t(e[d], d, c, r && r[c])
            }
        }
    else
        i = [];
    return n && (n[s] = i),
    i
}
const gn = e=>e ? mi(e) ? Kn(e) || e.proxy : gn(e.parent) : null
  , ot = X(Object.create(null), {
    $: e=>e,
    $el: e=>e.vnode.el,
    $data: e=>e.data,
    $props: e=>e.props,
    $attrs: e=>e.attrs,
    $slots: e=>e.slots,
    $refs: e=>e.refs,
    $parent: e=>gn(e.parent),
    $root: e=>gn(e.root),
    $emit: e=>e.emit,
    $options: e=>Un(e),
    $forceUpdate: e=>e.f || (e.f = ()=>{
        e.effect.dirty = !0,
        jn(e.update)
    }
    ),
    $nextTick: e=>e.n || (e.n = or.bind(e.proxy)),
    $watch: e=>Cr.bind(e)
})
  , sn = (e,t)=>e !== V && !e.__isScriptSetup && R(e, t)
  , $r = {
    get({_: e}, t) {
        const {ctx: n, setupState: s, data: i, props: r, accessCache: o, type: c, appContext: u} = e;
        let d;
        if (t[0] !== "$") {
            const T = o[t];
            if (T !== void 0)
                switch (T) {
                case 1:
                    return s[t];
                case 2:
                    return i[t];
                case 4:
                    return n[t];
                case 3:
                    return r[t]
                }
            else {
                if (sn(s, t))
                    return o[t] = 1,
                    s[t];
                if (i !== V && R(i, t))
                    return o[t] = 2,
                    i[t];
                if ((d = e.propsOptions[0]) && R(d, t))
                    return o[t] = 3,
                    r[t];
                if (n !== V && R(n, t))
                    return o[t] = 4,
                    n[t];
                mn && (o[t] = 0)
            }
        }
        const h = ot[t];
        let y, E;
        if (h)
            return t === "$attrs" && ne(e, "get", t),
            h(e);
        if ((y = c.__cssModules) && (y = y[t]))
            return y;
        if (n !== V && R(n, t))
            return o[t] = 4,
            n[t];
        if (E = u.config.globalProperties,
        R(E, t))
            return E[t]
    },
    set({_: e}, t, n) {
        const {data: s, setupState: i, ctx: r} = e;
        return sn(i, t) ? (i[t] = n,
        !0) : s !== V && R(s, t) ? (s[t] = n,
        !0) : R(e.props, t) || t[0] === "$" && t.slice(1)in e ? !1 : (r[t] = n,
        !0)
    },
    has({_: {data: e, setupState: t, accessCache: n, ctx: s, appContext: i, propsOptions: r}}, o) {
        let c;
        return !!n[o] || e !== V && R(e, o) || sn(t, o) || (c = r[0]) && R(c, o) || R(s, o) || R(ot, o) || R(i.config.globalProperties, o)
    },
    defineProperty(e, t, n) {
        return n.get != null ? e._.accessCache[t] = 0 : R(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
    }
};
function rs(e) {
    return I(e) ? e.reduce((t,n)=>(t[n] = null,
    t), {}) : e
}
let mn = !0;
function jr(e) {
    const t = Un(e)
      , n = e.proxy
      , s = e.ctx;
    mn = !1,
    t.beforeCreate && os(t.beforeCreate, e, "bc");
    const {data: i, computed: r, methods: o, watch: c, provide: u, inject: d, created: h, beforeMount: y, mounted: E, beforeUpdate: T, updated: K, activated: L, deactivated: k, beforeDestroy: H, beforeUnmount: q, destroyed: $, unmounted: z, render: oe, renderTracked: F, renderTriggered: xe, errorCaptured: de, serverPrefetch: kt, expose: Re, inheritAttrs: tt, components: gt, directives: mt, filters: zt} = t;
    if (d && Hr(d, s, null),
    o)
        for (const D in o) {
            const U = o[D];
            A(U) && (s[D] = U.bind(n))
        }
    if (i) {
        const D = i.call(n, n);
        W(D) && (e.data = jt(D))
    }
    if (mn = !0,
    r)
        for (const D in r) {
            const U = r[D]
              , Le = A(U) ? U.bind(n, n) : A(U.get) ? U.get.bind(n, n) : le
              , _t = !A(U) && A(U.set) ? U.set.bind(n) : le
              , Fe = _o({
                get: Le,
                set: _t
            });
            Object.defineProperty(s, D, {
                enumerable: !0,
                configurable: !0,
                get: ()=>Fe.value,
                set: he=>Fe.value = he
            })
        }
    if (c)
        for (const D in c)
            oi(c[D], s, n, D);
    if (u) {
        const D = A(u) ? u.call(n) : u;
        Reflect.ownKeys(D).forEach(U=>{
            Wr(U, D[U])
        }
        )
    }
    h && os(h, e, "c");
    function Z(D, U) {
        I(U) ? U.forEach(Le=>D(Le.bind(n))) : U && D(U.bind(n))
    }
    if (Z(Pr, y),
    Z(Hn, E),
    Z(Ir, T),
    Z(Ar, K),
    Z(Sr, L),
    Z(Tr, k),
    Z(Nr, de),
    Z(Fr, F),
    Z(Lr, xe),
    Z(Mr, q),
    Z(ri, z),
    Z(Rr, kt),
    I(Re))
        if (Re.length) {
            const D = e.exposed || (e.exposed = {});
            Re.forEach(U=>{
                Object.defineProperty(D, U, {
                    get: ()=>n[U],
                    set: Le=>n[U] = Le
                })
            }
            )
        } else
            e.exposed || (e.exposed = {});
    oe && e.render === le && (e.render = oe),
    tt != null && (e.inheritAttrs = tt),
    gt && (e.components = gt),
    mt && (e.directives = mt)
}
function Hr(e, t, n=le) {
    I(e) && (e = _n(e));
    for (const s in e) {
        const i = e[s];
        let r;
        W(i) ? "default"in i ? r = Ot(i.from || s, i.default, !0) : r = Ot(i.from || s) : r = Ot(i),
        re(r) ? Object.defineProperty(t, s, {
            enumerable: !0,
            configurable: !0,
            get: ()=>r.value,
            set: o=>r.value = o
        }) : t[s] = r
    }
}
function os(e, t, n) {
    ae(I(e) ? e.map(s=>s.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function oi(e, t, n, s) {
    const i = s.includes(".") ? ni(n, s) : ()=>n[s];
    if (G(e)) {
        const r = t[e];
        A(r) && tn(i, r)
    } else if (A(e))
        tn(i, e.bind(n));
    else if (W(e))
        if (I(e))
            e.forEach(r=>oi(r, t, n, s));
        else {
            const r = A(e.handler) ? e.handler.bind(n) : t[e.handler];
            A(r) && tn(i, r, e)
        }
}
function Un(e) {
    const t = e.type
      , {mixins: n, extends: s} = t
      , {mixins: i, optionsCache: r, config: {optionMergeStrategies: o}} = e.appContext
      , c = r.get(t);
    let u;
    return c ? u = c : !i.length && !n && !s ? u = t : (u = {},
    i.length && i.forEach(d=>Mt(u, d, o, !0)),
    Mt(u, t, o)),
    W(t) && r.set(t, u),
    u
}
function Mt(e, t, n, s=!1) {
    const {mixins: i, extends: r} = t;
    r && Mt(e, r, n, !0),
    i && i.forEach(o=>Mt(e, o, n, !0));
    for (const o in t)
        if (!(s && o === "expose")) {
            const c = Ur[o] || n && n[o];
            e[o] = c ? c(e[o], t[o]) : t[o]
        }
    return e
}
const Ur = {
    data: ls,
    props: cs,
    emits: cs,
    methods: it,
    computed: it,
    beforeCreate: Q,
    created: Q,
    beforeMount: Q,
    mounted: Q,
    beforeUpdate: Q,
    updated: Q,
    beforeDestroy: Q,
    beforeUnmount: Q,
    destroyed: Q,
    unmounted: Q,
    activated: Q,
    deactivated: Q,
    errorCaptured: Q,
    serverPrefetch: Q,
    components: it,
    directives: it,
    watch: Vr,
    provide: ls,
    inject: Br
};
function ls(e, t) {
    return t ? e ? function() {
        return X(A(e) ? e.call(this, this) : e, A(t) ? t.call(this, this) : t)
    }
    : t : e
}
function Br(e, t) {
    return it(_n(e), _n(t))
}
function _n(e) {
    if (I(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++)
            t[e[n]] = e[n];
        return t
    }
    return e
}
function Q(e, t) {
    return e ? [...new Set([].concat(e, t))] : t
}
function it(e, t) {
    return e ? X(Object.create(null), e, t) : t
}
function cs(e, t) {
    return e ? I(e) && I(t) ? [...new Set([...e, ...t])] : X(Object.create(null), rs(e), rs(t ?? {})) : t
}
function Vr(e, t) {
    if (!e)
        return t;
    if (!t)
        return e;
    const n = X(Object.create(null), e);
    for (const s in t)
        n[s] = Q(e[s], t[s]);
    return n
}
function li() {
    return {
        app: null,
        config: {
            isNativeTag: yi,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap,
        propsCache: new WeakMap,
        emitsCache: new WeakMap
    }
}
let Kr = 0;
function Dr(e, t) {
    return function(s, i=null) {
        A(s) || (s = X({}, s)),
        i != null && !W(i) && (i = null);
        const r = li()
          , o = new WeakSet;
        let c = !1;
        const u = r.app = {
            _uid: Kr++,
            _component: s,
            _props: i,
            _container: null,
            _context: r,
            _instance: null,
            version: bo,
            get config() {
                return r.config
            },
            set config(d) {},
            use(d, ...h) {
                return o.has(d) || (d && A(d.install) ? (o.add(d),
                d.install(u, ...h)) : A(d) && (o.add(d),
                d(u, ...h))),
                u
            },
            mixin(d) {
                return r.mixins.includes(d) || r.mixins.push(d),
                u
            },
            component(d, h) {
                return h ? (r.components[d] = h,
                u) : r.components[d]
            },
            directive(d, h) {
                return h ? (r.directives[d] = h,
                u) : r.directives[d]
            },
            mount(d, h, y) {
                if (!c) {
                    const E = Me(s, i);
                    return E.appContext = r,
                    y === !0 ? y = "svg" : y === !1 && (y = void 0),
                    h && t ? t(E, d) : e(E, d, y),
                    c = !0,
                    u._container = d,
                    d.__vue_app__ = u,
                    Kn(E.component) || E.component.proxy
                }
            },
            unmount() {
                c && (e(null, u._container),
                delete u._container.__vue_app__)
            },
            provide(d, h) {
                return r.provides[d] = h,
                u
            },
            runWithContext(d) {
                const h = lt;
                lt = u;
                try {
                    return d()
                } finally {
                    lt = h
                }
            }
        };
        return u
    }
}
let lt = null;
function Wr(e, t) {
    if (ee) {
        let n = ee.provides;
        const s = ee.parent && ee.parent.provides;
        s === n && (n = ee.provides = Object.create(s)),
        n[e] = t
    }
}
function Ot(e, t, n=!1) {
    const s = ee || be;
    if (s || lt) {
        const i = s ? s.parent == null ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : lt._context.provides;
        if (i && e in i)
            return i[e];
        if (arguments.length > 1)
            return n && A(t) ? t.call(s && s.proxy) : t
    }
}
function kr(e, t, n, s=!1) {
    const i = {}
      , r = {};
    It(r, Dt, 1),
    e.propsDefaults = Object.create(null),
    ci(e, t, i, r);
    for (const o in e.propsOptions[0])
        o in i || (i[o] = void 0);
    n ? e.props = s ? i : er(i) : e.type.props ? e.props = i : e.props = r,
    e.attrs = r
}
function zr(e, t, n, s) {
    const {props: i, attrs: r, vnode: {patchFlag: o}} = e
      , c = N(i)
      , [u] = e.propsOptions;
    let d = !1;
    if ((s || o > 0) && !(o & 16)) {
        if (o & 8) {
            const h = e.vnode.dynamicProps;
            for (let y = 0; y < h.length; y++) {
                let E = h[y];
                if (Ut(e.emitsOptions, E))
                    continue;
                const T = t[E];
                if (u)
                    if (R(r, E))
                        T !== r[E] && (r[E] = T,
                        d = !0);
                    else {
                        const K = Xe(E);
                        i[K] = bn(u, c, K, T, e, !1)
                    }
                else
                    T !== r[E] && (r[E] = T,
                    d = !0)
            }
        }
    } else {
        ci(e, t, i, r) && (d = !0);
        let h;
        for (const y in c)
            (!t || !R(t, y) && ((h = et(y)) === y || !R(t, h))) && (u ? n && (n[y] !== void 0 || n[h] !== void 0) && (i[y] = bn(u, c, y, void 0, e, !0)) : delete i[y]);
        if (r !== c)
            for (const y in r)
                (!t || !R(t, y)) && (delete r[y],
                d = !0)
    }
    d && we(e, "set", "$attrs")
}
function ci(e, t, n, s) {
    const [i,r] = e.propsOptions;
    let o = !1, c;
    if (t)
        for (let u in t) {
            if (rt(u))
                continue;
            const d = t[u];
            let h;
            i && R(i, h = Xe(u)) ? !r || !r.includes(h) ? n[h] = d : (c || (c = {}))[h] = d : Ut(e.emitsOptions, u) || (!(u in s) || d !== s[u]) && (s[u] = d,
            o = !0)
        }
    if (r) {
        const u = N(n)
          , d = c || V;
        for (let h = 0; h < r.length; h++) {
            const y = r[h];
            n[y] = bn(i, u, y, d[y], e, !R(d, y))
        }
    }
    return o
}
function bn(e, t, n, s, i, r) {
    const o = e[n];
    if (o != null) {
        const c = R(o, "default");
        if (c && s === void 0) {
            const u = o.default;
            if (o.type !== Function && !o.skipFactory && A(u)) {
                const {propsDefaults: d} = i;
                if (n in d)
                    s = d[n];
                else {
                    const h = pt(i);
                    s = d[n] = u.call(null, t),
                    h()
                }
            } else
                s = u
        }
        o[0] && (r && !c ? s = !1 : o[1] && (s === "" || s === et(n)) && (s = !0))
    }
    return s
}
function fi(e, t, n=!1) {
    const s = t.propsCache
      , i = s.get(e);
    if (i)
        return i;
    const r = e.props
      , o = {}
      , c = [];
    let u = !1;
    if (!A(e)) {
        const h = y=>{
            u = !0;
            const [E,T] = fi(y, t, !0);
            X(o, E),
            T && c.push(...T)
        }
        ;
        !n && t.mixins.length && t.mixins.forEach(h),
        e.extends && h(e.extends),
        e.mixins && e.mixins.forEach(h)
    }
    if (!r && !u)
        return W(e) && s.set(e, qe),
        qe;
    if (I(r))
        for (let h = 0; h < r.length; h++) {
            const y = Xe(r[h]);
            fs(y) && (o[y] = V)
        }
    else if (r)
        for (const h in r) {
            const y = Xe(h);
            if (fs(y)) {
                const E = r[h]
                  , T = o[y] = I(E) || A(E) ? {
                    type: E
                } : X({}, E);
                if (T) {
                    const K = ds(Boolean, T.type)
                      , L = ds(String, T.type);
                    T[0] = K > -1,
                    T[1] = L < 0 || K < L,
                    (K > -1 || R(T, "default")) && c.push(y)
                }
            }
        }
    const d = [o, c];
    return W(e) && s.set(e, d),
    d
}
function fs(e) {
    return e[0] !== "$" && !rt(e)
}
function us(e) {
    return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || ""
}
function as(e, t) {
    return us(e) === us(t)
}
function ds(e, t) {
    return I(t) ? t.findIndex(n=>as(n, e)) : A(t) && as(t, e) ? 0 : -1
}
const ui = e=>e[0] === "_" || e === "$stable"
  , Bn = e=>I(e) ? e.map(me) : [me(e)]
  , qr = (e,t,n)=>{
    if (t._n)
        return t;
    const s = pr((...i)=>Bn(t(...i)), n);
    return s._c = !1,
    s
}
  , ai = (e,t,n)=>{
    const s = e._ctx;
    for (const i in e) {
        if (ui(i))
            continue;
        const r = e[i];
        if (A(r))
            t[i] = qr(i, r, s);
        else if (r != null) {
            const o = Bn(r);
            t[i] = ()=>o
        }
    }
}
  , di = (e,t)=>{
    const n = Bn(t);
    e.slots.default = ()=>n
}
  , Gr = (e,t)=>{
    if (e.vnode.shapeFlag & 32) {
        const n = t._;
        n ? (e.slots = N(t),
        It(t, "_", n)) : ai(t, e.slots = {})
    } else
        e.slots = {},
        t && di(e, t);
    It(e.slots, Dt, 1)
}
  , Jr = (e,t,n)=>{
    const {vnode: s, slots: i} = e;
    let r = !0
      , o = V;
    if (s.shapeFlag & 32) {
        const c = t._;
        c ? n && c === 1 ? r = !1 : (X(i, t),
        !n && c === 1 && delete i._) : (r = !t.$stable,
        ai(t, i)),
        o = t
    } else
        t && (di(e, t),
        o = {
            default: 1
        });
    if (r)
        for (const c in i)
            !ui(c) && o[c] == null && delete i[c]
}
;
function xn(e, t, n, s, i=!1) {
    if (I(e)) {
        e.forEach((E,T)=>xn(E, t && (I(t) ? t[T] : t), n, s, i));
        return
    }
    if (Tt(s) && !i)
        return;
    const r = s.shapeFlag & 4 ? Kn(s.component) || s.component.proxy : s.el
      , o = i ? null : r
      , {i: c, r: u} = e
      , d = t && t.r
      , h = c.refs === V ? c.refs = {} : c.refs
      , y = c.setupState;
    if (d != null && d !== u && (G(d) ? (h[d] = null,
    R(y, d) && (y[d] = null)) : re(d) && (d.value = null)),
    A(u))
        Ae(u, c, 12, [o, h]);
    else {
        const E = G(u)
          , T = re(u);
        if (E || T) {
            const K = ()=>{
                if (e.f) {
                    const L = E ? R(y, u) ? y[u] : h[u] : u.value;
                    i ? I(L) && Cn(L, r) : I(L) ? L.includes(r) || L.push(r) : E ? (h[u] = [r],
                    R(y, u) && (y[u] = h[u])) : (u.value = [r],
                    e.k && (h[e.k] = u.value))
                } else
                    E ? (h[u] = o,
                    R(y, u) && (y[u] = o)) : T && (u.value = o,
                    e.k && (h[e.k] = o))
            }
            ;
            o ? (K.id = -1,
            te(K, n)) : K()
        }
    }
}
const te = wr;
function Yr(e) {
    return Xr(e)
}
function Xr(e, t) {
    const n = Ms();
    n.__VUE__ = !0;
    const {insert: s, remove: i, patchProp: r, createElement: o, createText: c, createComment: u, setText: d, setElementText: h, parentNode: y, nextSibling: E, setScopeId: T=le, insertStaticContent: K} = e
      , L = (l,f,a,p=null,g=null,b=null,w=void 0,_=null,x=!!f.dynamicChildren)=>{
        if (l === f)
            return;
        l && !st(l, f) && (p = bt(l),
        he(l, g, b, !0),
        l = null),
        f.patchFlag === -2 && (x = !1,
        f.dynamicChildren = null);
        const {type: m, ref: v, shapeFlag: S} = f;
        switch (m) {
        case Kt:
            k(l, f, a, p);
            break;
        case dt:
            H(l, f, a, p);
            break;
        case on:
            l == null && q(f, a, p, w);
            break;
        case ie:
            gt(l, f, a, p, g, b, w, _, x);
            break;
        default:
            S & 1 ? oe(l, f, a, p, g, b, w, _, x) : S & 6 ? mt(l, f, a, p, g, b, w, _, x) : (S & 64 || S & 128) && m.process(l, f, a, p, g, b, w, _, x, We)
        }
        v != null && g && xn(v, l && l.ref, b, f || l, !f)
    }
      , k = (l,f,a,p)=>{
        if (l == null)
            s(f.el = c(f.children), a, p);
        else {
            const g = f.el = l.el;
            f.children !== l.children && d(g, f.children)
        }
    }
      , H = (l,f,a,p)=>{
        l == null ? s(f.el = u(f.children || ""), a, p) : f.el = l.el
    }
      , q = (l,f,a,p)=>{
        [l.el,l.anchor] = K(l.children, f, a, p, l.el, l.anchor)
    }
      , $ = ({el: l, anchor: f},a,p)=>{
        let g;
        for (; l && l !== f; )
            g = E(l),
            s(l, a, p),
            l = g;
        s(f, a, p)
    }
      , z = ({el: l, anchor: f})=>{
        let a;
        for (; l && l !== f; )
            a = E(l),
            i(l),
            l = a;
        i(f)
    }
      , oe = (l,f,a,p,g,b,w,_,x)=>{
        f.type === "svg" ? w = "svg" : f.type === "math" && (w = "mathml"),
        l == null ? F(f, a, p, g, b, w, _, x) : kt(l, f, g, b, w, _, x)
    }
      , F = (l,f,a,p,g,b,w,_)=>{
        let x, m;
        const {props: v, shapeFlag: S, transition: C, dirs: P} = l;
        if (x = l.el = o(l.type, b, v && v.is, v),
        S & 8 ? h(x, l.children) : S & 16 && de(l.children, x, null, p, g, rn(l, b), w, _),
        P && Ne(l, null, p, "created"),
        xe(x, l, l.scopeId, w, p),
        v) {
            for (const j in v)
                j !== "value" && !rt(j) && r(x, j, null, v[j], b, l.children, p, g, ye);
            "value"in v && r(x, "value", null, v.value, b),
            (m = v.onVnodeBeforeMount) && ge(m, p, l)
        }
        P && Ne(l, null, p, "beforeMount");
        const M = Zr(g, C);
        M && C.beforeEnter(x),
        s(x, f, a),
        ((m = v && v.onVnodeMounted) || M || P) && te(()=>{
            m && ge(m, p, l),
            M && C.enter(x),
            P && Ne(l, null, p, "mounted")
        }
        , g)
    }
      , xe = (l,f,a,p,g)=>{
        if (a && T(l, a),
        p)
            for (let b = 0; b < p.length; b++)
                T(l, p[b]);
        if (g) {
            let b = g.subTree;
            if (f === b) {
                const w = g.vnode;
                xe(l, w, w.scopeId, w.slotScopeIds, g.parent)
            }
        }
    }
      , de = (l,f,a,p,g,b,w,_,x=0)=>{
        for (let m = x; m < l.length; m++) {
            const v = l[m] = _ ? Oe(l[m]) : me(l[m]);
            L(null, v, f, a, p, g, b, w, _)
        }
    }
      , kt = (l,f,a,p,g,b,w)=>{
        const _ = f.el = l.el;
        let {patchFlag: x, dynamicChildren: m, dirs: v} = f;
        x |= l.patchFlag & 16;
        const S = l.props || V
          , C = f.props || V;
        let P;
        if (a && $e(a, !1),
        (P = C.onVnodeBeforeUpdate) && ge(P, a, f, l),
        v && Ne(f, l, a, "beforeUpdate"),
        a && $e(a, !0),
        m ? Re(l.dynamicChildren, m, _, a, p, rn(f, g), b) : w || U(l, f, _, null, a, p, rn(f, g), b, !1),
        x > 0) {
            if (x & 16)
                tt(_, f, S, C, a, p, g);
            else if (x & 2 && S.class !== C.class && r(_, "class", null, C.class, g),
            x & 4 && r(_, "style", S.style, C.style, g),
            x & 8) {
                const M = f.dynamicProps;
                for (let j = 0; j < M.length; j++) {
                    const B = M[j]
                      , J = S[B]
                      , ce = C[B];
                    (ce !== J || B === "value") && r(_, B, J, ce, g, l.children, a, p, ye)
                }
            }
            x & 1 && l.children !== f.children && h(_, f.children)
        } else
            !w && m == null && tt(_, f, S, C, a, p, g);
        ((P = C.onVnodeUpdated) || v) && te(()=>{
            P && ge(P, a, f, l),
            v && Ne(f, l, a, "updated")
        }
        , p)
    }
      , Re = (l,f,a,p,g,b,w)=>{
        for (let _ = 0; _ < f.length; _++) {
            const x = l[_]
              , m = f[_]
              , v = x.el && (x.type === ie || !st(x, m) || x.shapeFlag & 70) ? y(x.el) : a;
            L(x, m, v, null, p, g, b, w, !0)
        }
    }
      , tt = (l,f,a,p,g,b,w)=>{
        if (a !== p) {
            if (a !== V)
                for (const _ in a)
                    !rt(_) && !(_ in p) && r(l, _, a[_], null, w, f.children, g, b, ye);
            for (const _ in p) {
                if (rt(_))
                    continue;
                const x = p[_]
                  , m = a[_];
                x !== m && _ !== "value" && r(l, _, m, x, w, f.children, g, b, ye)
            }
            "value"in p && r(l, "value", a.value, p.value, w)
        }
    }
      , gt = (l,f,a,p,g,b,w,_,x)=>{
        const m = f.el = l ? l.el : c("")
          , v = f.anchor = l ? l.anchor : c("");
        let {patchFlag: S, dynamicChildren: C, slotScopeIds: P} = f;
        P && (_ = _ ? _.concat(P) : P),
        l == null ? (s(m, a, p),
        s(v, a, p),
        de(f.children || [], a, v, g, b, w, _, x)) : S > 0 && S & 64 && C && l.dynamicChildren ? (Re(l.dynamicChildren, C, a, g, b, w, _),
        (f.key != null || g && f === g.subTree) && hi(l, f, !0)) : U(l, f, a, v, g, b, w, _, x)
    }
      , mt = (l,f,a,p,g,b,w,_,x)=>{
        f.slotScopeIds = _,
        l == null ? f.shapeFlag & 512 ? g.ctx.activate(f, a, p, w, x) : zt(f, a, p, g, b, w, x) : Dn(l, f, x)
    }
      , zt = (l,f,a,p,g,b,w)=>{
        const _ = l.component = uo(l, p, g);
        if (si(l) && (_.ctx.renderer = We),
        ao(_),
        _.asyncDep) {
            if (g && g.registerDep(_, Z),
            !l.el) {
                const x = _.subTree = Me(dt);
                H(null, x, f, a)
            }
        } else
            Z(_, l, f, a, g, b, w)
    }
      , Dn = (l,f,a)=>{
        const p = f.component = l.component;
        if (_r(l, f, a))
            if (p.asyncDep && !p.asyncResolved) {
                D(p, f, a);
                return
            } else
                p.next = f,
                cr(p.update),
                p.effect.dirty = !0,
                p.update();
        else
            f.el = l.el,
            p.vnode = f
    }
      , Z = (l,f,a,p,g,b,w)=>{
        const _ = ()=>{
            if (l.isMounted) {
                let {next: v, bu: S, u: C, parent: P, vnode: M} = l;
                {
                    const ke = pi(l);
                    if (ke) {
                        v && (v.el = M.el,
                        D(l, v, w)),
                        ke.asyncDep.then(()=>{
                            l.isUnmounted || _()
                        }
                        );
                        return
                    }
                }
                let j = v, B;
                $e(l, !1),
                v ? (v.el = M.el,
                D(l, v, w)) : v = M,
                S && Xt(S),
                (B = v.props && v.props.onVnodeBeforeUpdate) && ge(B, P, v, M),
                $e(l, !0);
                const J = en(l)
                  , ce = l.subTree;
                l.subTree = J,
                L(ce, J, y(ce.el), bt(ce), l, g, b),
                v.el = J.el,
                j === null && br(l, J.el),
                C && te(C, g),
                (B = v.props && v.props.onVnodeUpdated) && te(()=>ge(B, P, v, M), g)
            } else {
                let v;
                const {el: S, props: C} = f
                  , {bm: P, m: M, parent: j} = l
                  , B = Tt(f);
                if ($e(l, !1),
                P && Xt(P),
                !B && (v = C && C.onVnodeBeforeMount) && ge(v, j, f),
                $e(l, !0),
                S && Jt) {
                    const J = ()=>{
                        l.subTree = en(l),
                        Jt(S, l.subTree, l, g, null)
                    }
                    ;
                    B ? f.type.__asyncLoader().then(()=>!l.isUnmounted && J()) : J()
                } else {
                    const J = l.subTree = en(l);
                    L(null, J, a, p, l, g, b),
                    f.el = J.el
                }
                if (M && te(M, g),
                !B && (v = C && C.onVnodeMounted)) {
                    const J = f;
                    te(()=>ge(v, j, J), g)
                }
                (f.shapeFlag & 256 || j && Tt(j.vnode) && j.vnode.shapeFlag & 256) && l.a && te(l.a, g),
                l.isMounted = !0,
                f = a = p = null
            }
        }
          , x = l.effect = new Pn(_,le,()=>jn(m),l.scope)
          , m = l.update = ()=>{
            x.dirty && x.run()
        }
        ;
        m.id = l.uid,
        $e(l, !0),
        m()
    }
      , D = (l,f,a)=>{
        f.component = l;
        const p = l.vnode.props;
        l.vnode = f,
        l.next = null,
        zr(l, f.props, p, a),
        Jr(l, f.children, a),
        Ve(),
        ss(l),
        Ke()
    }
      , U = (l,f,a,p,g,b,w,_,x=!1)=>{
        const m = l && l.children
          , v = l ? l.shapeFlag : 0
          , S = f.children
          , {patchFlag: C, shapeFlag: P} = f;
        if (C > 0) {
            if (C & 128) {
                _t(m, S, a, p, g, b, w, _, x);
                return
            } else if (C & 256) {
                Le(m, S, a, p, g, b, w, _, x);
                return
            }
        }
        P & 8 ? (v & 16 && ye(m, g, b),
        S !== m && h(a, S)) : v & 16 ? P & 16 ? _t(m, S, a, p, g, b, w, _, x) : ye(m, g, b, !0) : (v & 8 && h(a, ""),
        P & 16 && de(S, a, p, g, b, w, _, x))
    }
      , Le = (l,f,a,p,g,b,w,_,x)=>{
        l = l || qe,
        f = f || qe;
        const m = l.length
          , v = f.length
          , S = Math.min(m, v);
        let C;
        for (C = 0; C < S; C++) {
            const P = f[C] = x ? Oe(f[C]) : me(f[C]);
            L(l[C], P, a, null, g, b, w, _, x)
        }
        m > v ? ye(l, g, b, !0, !1, S) : de(f, a, p, g, b, w, _, x, S)
    }
      , _t = (l,f,a,p,g,b,w,_,x)=>{
        let m = 0;
        const v = f.length;
        let S = l.length - 1
          , C = v - 1;
        for (; m <= S && m <= C; ) {
            const P = l[m]
              , M = f[m] = x ? Oe(f[m]) : me(f[m]);
            if (st(P, M))
                L(P, M, a, null, g, b, w, _, x);
            else
                break;
            m++
        }
        for (; m <= S && m <= C; ) {
            const P = l[S]
              , M = f[C] = x ? Oe(f[C]) : me(f[C]);
            if (st(P, M))
                L(P, M, a, null, g, b, w, _, x);
            else
                break;
            S--,
            C--
        }
        if (m > S) {
            if (m <= C) {
                const P = C + 1
                  , M = P < v ? f[P].el : p;
                for (; m <= C; )
                    L(null, f[m] = x ? Oe(f[m]) : me(f[m]), a, M, g, b, w, _, x),
                    m++
            }
        } else if (m > C)
            for (; m <= S; )
                he(l[m], g, b, !0),
                m++;
        else {
            const P = m
              , M = m
              , j = new Map;
            for (m = M; m <= C; m++) {
                const se = f[m] = x ? Oe(f[m]) : me(f[m]);
                se.key != null && j.set(se.key, m)
            }
            let B, J = 0;
            const ce = C - M + 1;
            let ke = !1
              , zn = 0;
            const nt = new Array(ce);
            for (m = 0; m < ce; m++)
                nt[m] = 0;
            for (m = P; m <= S; m++) {
                const se = l[m];
                if (J >= ce) {
                    he(se, g, b, !0);
                    continue
                }
                let pe;
                if (se.key != null)
                    pe = j.get(se.key);
                else
                    for (B = M; B <= C; B++)
                        if (nt[B - M] === 0 && st(se, f[B])) {
                            pe = B;
                            break
                        }
                pe === void 0 ? he(se, g, b, !0) : (nt[pe - M] = m + 1,
                pe >= zn ? zn = pe : ke = !0,
                L(se, f[pe], a, null, g, b, w, _, x),
                J++)
            }
            const qn = ke ? Qr(nt) : qe;
            for (B = qn.length - 1,
            m = ce - 1; m >= 0; m--) {
                const se = M + m
                  , pe = f[se]
                  , Gn = se + 1 < v ? f[se + 1].el : p;
                nt[m] === 0 ? L(null, pe, a, Gn, g, b, w, _, x) : ke && (B < 0 || m !== qn[B] ? Fe(pe, a, Gn, 2) : B--)
            }
        }
    }
      , Fe = (l,f,a,p,g=null)=>{
        const {el: b, type: w, transition: _, children: x, shapeFlag: m} = l;
        if (m & 6) {
            Fe(l.component.subTree, f, a, p);
            return
        }
        if (m & 128) {
            l.suspense.move(f, a, p);
            return
        }
        if (m & 64) {
            w.move(l, f, a, We);
            return
        }
        if (w === ie) {
            s(b, f, a);
            for (let S = 0; S < x.length; S++)
                Fe(x[S], f, a, p);
            s(l.anchor, f, a);
            return
        }
        if (w === on) {
            $(l, f, a);
            return
        }
        if (p !== 2 && m & 1 && _)
            if (p === 0)
                _.beforeEnter(b),
                s(b, f, a),
                te(()=>_.enter(b), g);
            else {
                const {leave: S, delayLeave: C, afterLeave: P} = _
                  , M = ()=>s(b, f, a)
                  , j = ()=>{
                    S(b, ()=>{
                        M(),
                        P && P()
                    }
                    )
                }
                ;
                C ? C(b, M, j) : j()
            }
        else
            s(b, f, a)
    }
      , he = (l,f,a,p=!1,g=!1)=>{
        const {type: b, props: w, ref: _, children: x, dynamicChildren: m, shapeFlag: v, patchFlag: S, dirs: C} = l;
        if (_ != null && xn(_, null, a, l, !0),
        v & 256) {
            f.ctx.deactivate(l);
            return
        }
        const P = v & 1 && C
          , M = !Tt(l);
        let j;
        if (M && (j = w && w.onVnodeBeforeUnmount) && ge(j, f, l),
        v & 6)
            xi(l.component, a, p);
        else {
            if (v & 128) {
                l.suspense.unmount(a, p);
                return
            }
            P && Ne(l, null, f, "beforeUnmount"),
            v & 64 ? l.type.remove(l, f, a, g, We, p) : m && (b !== ie || S > 0 && S & 64) ? ye(m, f, a, !1, !0) : (b === ie && S & 384 || !g && v & 16) && ye(x, f, a),
            p && Wn(l)
        }
        (M && (j = w && w.onVnodeUnmounted) || P) && te(()=>{
            j && ge(j, f, l),
            P && Ne(l, null, f, "unmounted")
        }
        , a)
    }
      , Wn = l=>{
        const {type: f, el: a, anchor: p, transition: g} = l;
        if (f === ie) {
            bi(a, p);
            return
        }
        if (f === on) {
            z(l);
            return
        }
        const b = ()=>{
            i(a),
            g && !g.persisted && g.afterLeave && g.afterLeave()
        }
        ;
        if (l.shapeFlag & 1 && g && !g.persisted) {
            const {leave: w, delayLeave: _} = g
              , x = ()=>w(a, b);
            _ ? _(l.el, b, x) : x()
        } else
            b()
    }
      , bi = (l,f)=>{
        let a;
        for (; l !== f; )
            a = E(l),
            i(l),
            l = a;
        i(f)
    }
      , xi = (l,f,a)=>{
        const {bum: p, scope: g, update: b, subTree: w, um: _} = l;
        p && Xt(p),
        g.stop(),
        b && (b.active = !1,
        he(w, l, f, a)),
        _ && te(_, f),
        te(()=>{
            l.isUnmounted = !0
        }
        , f),
        f && f.pendingBranch && !f.isUnmounted && l.asyncDep && !l.asyncResolved && l.suspenseId === f.pendingId && (f.deps--,
        f.deps === 0 && f.resolve())
    }
      , ye = (l,f,a,p=!1,g=!1,b=0)=>{
        for (let w = b; w < l.length; w++)
            he(l[w], f, a, p, g)
    }
      , bt = l=>l.shapeFlag & 6 ? bt(l.component.subTree) : l.shapeFlag & 128 ? l.suspense.next() : E(l.anchor || l.el);
    let qt = !1;
    const kn = (l,f,a)=>{
        l == null ? f._vnode && he(f._vnode, null, null, !0) : L(f._vnode || null, l, f, null, null, null, a),
        qt || (qt = !0,
        ss(),
        Zs(),
        qt = !1),
        f._vnode = l
    }
      , We = {
        p: L,
        um: he,
        m: Fe,
        r: Wn,
        mt: zt,
        mc: de,
        pc: U,
        pbc: Re,
        n: bt,
        o: e
    };
    let Gt, Jt;
    return t && ([Gt,Jt] = t(We)),
    {
        render: kn,
        hydrate: Gt,
        createApp: Dr(kn, Gt)
    }
}
function rn({type: e, props: t}, n) {
    return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n
}
function $e({effect: e, update: t}, n) {
    e.allowRecurse = t.allowRecurse = n
}
function Zr(e, t) {
    return (!e || e && !e.pendingBranch) && t && !t.persisted
}
function hi(e, t, n=!1) {
    const s = e.children
      , i = t.children;
    if (I(s) && I(i))
        for (let r = 0; r < s.length; r++) {
            const o = s[r];
            let c = i[r];
            c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = i[r] = Oe(i[r]),
            c.el = o.el),
            n || hi(o, c)),
            c.type === Kt && (c.el = o.el)
        }
}
function Qr(e) {
    const t = e.slice()
      , n = [0];
    let s, i, r, o, c;
    const u = e.length;
    for (s = 0; s < u; s++) {
        const d = e[s];
        if (d !== 0) {
            if (i = n[n.length - 1],
            e[i] < d) {
                t[s] = i,
                n.push(s);
                continue
            }
            for (r = 0,
            o = n.length - 1; r < o; )
                c = r + o >> 1,
                e[n[c]] < d ? r = c + 1 : o = c;
            d < e[n[r]] && (r > 0 && (t[s] = n[r - 1]),
            n[r] = s)
        }
    }
    for (r = n.length,
    o = n[r - 1]; r-- > 0; )
        n[r] = o,
        o = t[o];
    return n
}
function pi(e) {
    const t = e.subTree.component;
    if (t)
        return t.asyncDep && !t.asyncResolved ? t : pi(t)
}
const eo = e=>e.__isTeleport
  , ie = Symbol.for("v-fgt")
  , Kt = Symbol.for("v-txt")
  , dt = Symbol.for("v-cmt")
  , on = Symbol.for("v-stc")
  , ct = [];
let ue = null;
function Ce(e=!1) {
    ct.push(ue = e ? null : [])
}
function to() {
    ct.pop(),
    ue = ct[ct.length - 1] || null
}
let ht = 1;
function hs(e) {
    ht += e
}
function no(e) {
    return e.dynamicChildren = ht > 0 ? ue || qe : null,
    to(),
    ht > 0 && ue && ue.push(e),
    e
}
function Se(e, t, n, s, i, r) {
    return no(O(e, t, n, s, i, r, !0))
}
function so(e) {
    return e ? e.__v_isVNode === !0 : !1
}
function st(e, t) {
    return e.type === t.type && e.key === t.key
}
const Dt = "__vInternal"
  , gi = ({key: e})=>e ?? null
  , Pt = ({ref: e, ref_key: t, ref_for: n})=>(typeof e == "number" && (e = "" + e),
e != null ? G(e) || re(e) || A(e) ? {
    i: be,
    r: e,
    k: t,
    f: !!n
} : e : null);
function O(e, t=null, n=null, s=0, i=null, r=e === ie ? 0 : 1, o=!1, c=!1) {
    const u = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && gi(t),
        ref: t && Pt(t),
        scopeId: Bt,
        slotScopeIds: null,
        children: n,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: r,
        patchFlag: s,
        dynamicProps: i,
        dynamicChildren: null,
        appContext: null,
        ctx: be
    };
    return c ? (Vn(u, n),
    r & 128 && e.normalize(u)) : n && (u.shapeFlag |= G(n) ? 8 : 16),
    ht > 0 && !o && ue && (u.patchFlag > 0 || r & 6) && u.patchFlag !== 32 && ue.push(u),
    u
}
const Me = io;
function io(e, t=null, n=null, s=0, i=null, r=!1) {
    if ((!e || e === xr) && (e = dt),
    so(e)) {
        const c = Ze(e, t, !0);
        return n && Vn(c, n),
        ht > 0 && !r && ue && (c.shapeFlag & 6 ? ue[ue.indexOf(e)] = c : ue.push(c)),
        c.patchFlag |= -2,
        c
    }
    if (mo(e) && (e = e.__vccOpts),
    t) {
        t = ro(t);
        let {class: c, style: u} = t;
        c && !G(c) && (t.class = On(c)),
        W(u) && (zs(u) && !I(u) && (u = X({}, u)),
        t.style = Tn(u))
    }
    const o = G(e) ? 1 : yr(e) ? 128 : eo(e) ? 64 : W(e) ? 4 : A(e) ? 2 : 0;
    return O(e, t, n, s, i, o, r, !0)
}
function ro(e) {
    return e ? zs(e) || Dt in e ? X({}, e) : e : null
}
function Ze(e, t, n=!1) {
    const {props: s, ref: i, patchFlag: r, children: o} = e
      , c = t ? lo(s || {}, t) : s;
    return {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e.type,
        props: c,
        key: c && gi(c),
        ref: t && t.ref ? n && i ? I(i) ? i.concat(Pt(t)) : [i, Pt(t)] : Pt(t) : i,
        scopeId: e.scopeId,
        slotScopeIds: e.slotScopeIds,
        children: o,
        target: e.target,
        targetAnchor: e.targetAnchor,
        staticCount: e.staticCount,
        shapeFlag: e.shapeFlag,
        patchFlag: t && e.type !== ie ? r === -1 ? 16 : r | 16 : r,
        dynamicProps: e.dynamicProps,
        dynamicChildren: e.dynamicChildren,
        appContext: e.appContext,
        dirs: e.dirs,
        transition: e.transition,
        component: e.component,
        suspense: e.suspense,
        ssContent: e.ssContent && Ze(e.ssContent),
        ssFallback: e.ssFallback && Ze(e.ssFallback),
        el: e.el,
        anchor: e.anchor,
        ctx: e.ctx,
        ce: e.ce
    }
}
function oo(e=" ", t=0) {
    return Me(Kt, null, e, t)
}
function me(e) {
    return e == null || typeof e == "boolean" ? Me(dt) : I(e) ? Me(ie, null, e.slice()) : typeof e == "object" ? Oe(e) : Me(Kt, null, String(e))
}
function Oe(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ze(e)
}
function Vn(e, t) {
    let n = 0;
    const {shapeFlag: s} = e;
    if (t == null)
        t = null;
    else if (I(t))
        n = 16;
    else if (typeof t == "object")
        if (s & 65) {
            const i = t.default;
            i && (i._c && (i._d = !1),
            Vn(e, i()),
            i._c && (i._d = !0));
            return
        } else {
            n = 32;
            const i = t._;
            !i && !(Dt in t) ? t._ctx = be : i === 3 && be && (be.slots._ === 1 ? t._ = 1 : (t._ = 2,
            e.patchFlag |= 1024))
        }
    else
        A(t) ? (t = {
            default: t,
            _ctx: be
        },
        n = 32) : (t = String(t),
        s & 64 ? (n = 16,
        t = [oo(t)]) : n = 8);
    e.children = t,
    e.shapeFlag |= n
}
function lo(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
        const s = e[n];
        for (const i in s)
            if (i === "class")
                t.class !== s.class && (t.class = On([t.class, s.class]));
            else if (i === "style")
                t.style = Tn([t.style, s.style]);
            else if (Lt(i)) {
                const r = t[i]
                  , o = s[i];
                o && r !== o && !(I(r) && r.includes(o)) && (t[i] = r ? [].concat(r, o) : o)
            } else
                i !== "" && (t[i] = s[i])
    }
    return t
}
function ge(e, t, n, s=null) {
    ae(e, t, 7, [n, s])
}
const co = li();
let fo = 0;
function uo(e, t, n) {
    const s = e.type
      , i = (t ? t.appContext : e.appContext) || co
      , r = {
        uid: fo++,
        vnode: e,
        type: s,
        parent: t,
        appContext: i,
        root: null,
        next: null,
        subTree: null,
        effect: null,
        update: null,
        scope: new Ri(!0),
        render: null,
        proxy: null,
        exposed: null,
        exposeProxy: null,
        withProxy: null,
        provides: t ? t.provides : Object.create(i.provides),
        accessCache: null,
        renderCache: [],
        components: null,
        directives: null,
        propsOptions: fi(s, i),
        emitsOptions: ei(s, i),
        emit: null,
        emitted: null,
        propsDefaults: V,
        inheritAttrs: s.inheritAttrs,
        ctx: V,
        data: V,
        props: V,
        attrs: V,
        slots: V,
        refs: V,
        setupState: V,
        setupContext: null,
        attrsProxy: null,
        slotsProxy: null,
        suspense: n,
        suspenseId: n ? n.pendingId : 0,
        asyncDep: null,
        asyncResolved: !1,
        isMounted: !1,
        isUnmounted: !1,
        isDeactivated: !1,
        bc: null,
        c: null,
        bm: null,
        m: null,
        bu: null,
        u: null,
        um: null,
        bum: null,
        da: null,
        a: null,
        rtg: null,
        rtc: null,
        ec: null,
        sp: null
    };
    return r.ctx = {
        _: r
    },
    r.root = t ? t.root : r,
    r.emit = ar.bind(null, r),
    e.ce && e.ce(r),
    r
}
let ee = null, Rt, yn;
{
    const e = Ms()
      , t = (n,s)=>{
        let i;
        return (i = e[n]) || (i = e[n] = []),
        i.push(s),
        r=>{
            i.length > 1 ? i.forEach(o=>o(r)) : i[0](r)
        }
    }
    ;
    Rt = t("__VUE_INSTANCE_SETTERS__", n=>ee = n),
    yn = t("__VUE_SSR_SETTERS__", n=>Wt = n)
}
const pt = e=>{
    const t = ee;
    return Rt(e),
    e.scope.on(),
    ()=>{
        e.scope.off(),
        Rt(t)
    }
}
  , ps = ()=>{
    ee && ee.scope.off(),
    Rt(null)
}
;
function mi(e) {
    return e.vnode.shapeFlag & 4
}
let Wt = !1;
function ao(e, t=!1) {
    t && yn(t);
    const {props: n, children: s} = e.vnode
      , i = mi(e);
    kr(e, n, i, t),
    Gr(e, s);
    const r = i ? ho(e, t) : void 0;
    return t && yn(!1),
    r
}
function ho(e, t) {
    const n = e.type;
    e.accessCache = Object.create(null),
    e.proxy = qs(new Proxy(e.ctx,$r));
    const {setup: s} = n;
    if (s) {
        const i = e.setupContext = s.length > 1 ? go(e) : null
          , r = pt(e);
        Ve();
        const o = Ae(s, e, 0, [e.props, i]);
        if (Ke(),
        r(),
        Os(o)) {
            if (o.then(ps, ps),
            t)
                return o.then(c=>{
                    gs(e, c, t)
                }
                ).catch(c=>{
                    Ht(c, e, 0)
                }
                );
            e.asyncDep = o
        } else
            gs(e, o, t)
    } else
        _i(e, t)
}
function gs(e, t, n) {
    A(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : W(t) && (e.setupState = Js(t)),
    _i(e, n)
}
let ms;
function _i(e, t, n) {
    const s = e.type;
    if (!e.render) {
        if (!t && ms && !s.render) {
            const i = s.template || Un(e).template;
            if (i) {
                const {isCustomElement: r, compilerOptions: o} = e.appContext.config
                  , {delimiters: c, compilerOptions: u} = s
                  , d = X(X({
                    isCustomElement: r,
                    delimiters: c
                }, o), u);
                s.render = ms(i, d)
            }
        }
        e.render = s.render || le
    }
    {
        const i = pt(e);
        Ve();
        try {
            jr(e)
        } finally {
            Ke(),
            i()
        }
    }
}
function po(e) {
    return e.attrsProxy || (e.attrsProxy = new Proxy(e.attrs,{
        get(t, n) {
            return ne(e, "get", "$attrs"),
            t[n]
        }
    }))
}
function go(e) {
    const t = n=>{
        e.exposed = n || {}
    }
    ;
    return {
        get attrs() {
            return po(e)
        },
        slots: e.slots,
        emit: e.emit,
        expose: t
    }
}
function Kn(e) {
    if (e.exposed)
        return e.exposeProxy || (e.exposeProxy = new Proxy(Js(qs(e.exposed)),{
            get(t, n) {
                if (n in t)
                    return t[n];
                if (n in ot)
                    return ot[n](e)
            },
            has(t, n) {
                return n in t || n in ot
            }
        }))
}
function mo(e) {
    return A(e) && "__vccOpts"in e
}
const _o = (e,t)=>tr(e, t, Wt)
  , bo = "3.4.19";
/**
* @vue/runtime-dom v3.4.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const xo = "http://www.w3.org/2000/svg"
  , yo = "http://www.w3.org/1998/Math/MathML"
  , Pe = typeof document < "u" ? document : null
  , _s = Pe && Pe.createElement("template")
  , wo = {
    insert: (e,t,n)=>{
        t.insertBefore(e, n || null)
    }
    ,
    remove: e=>{
        const t = e.parentNode;
        t && t.removeChild(e)
    }
    ,
    createElement: (e,t,n,s)=>{
        const i = t === "svg" ? Pe.createElementNS(xo, e) : t === "mathml" ? Pe.createElementNS(yo, e) : Pe.createElement(e, n ? {
            is: n
        } : void 0);
        return e === "select" && s && s.multiple != null && i.setAttribute("multiple", s.multiple),
        i
    }
    ,
    createText: e=>Pe.createTextNode(e),
    createComment: e=>Pe.createComment(e),
    setText: (e,t)=>{
        e.nodeValue = t
    }
    ,
    setElementText: (e,t)=>{
        e.textContent = t
    }
    ,
    parentNode: e=>e.parentNode,
    nextSibling: e=>e.nextSibling,
    querySelector: e=>Pe.querySelector(e),
    setScopeId(e, t) {
        e.setAttribute(t, "")
    },
    insertStaticContent(e, t, n, s, i, r) {
        const o = n ? n.previousSibling : t.lastChild;
        if (i && (i === r || i.nextSibling))
            for (; t.insertBefore(i.cloneNode(!0), n),
            !(i === r || !(i = i.nextSibling)); )
                ;
        else {
            _s.innerHTML = s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e;
            const c = _s.content;
            if (s === "svg" || s === "mathml") {
                const u = c.firstChild;
                for (; u.firstChild; )
                    c.appendChild(u.firstChild);
                c.removeChild(u)
            }
            t.insertBefore(c, n)
        }
        return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
    }
}
  , vo = Symbol("_vtc");
function Eo(e, t, n) {
    const s = e[vo];
    s && (t = (t ? [t, ...s] : [...s]).join(" ")),
    t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t
}
const bs = Symbol("_vod")
  , Co = Symbol("")
  , So = /(^|;)\s*display\s*:/;
function To(e, t, n) {
    const s = e.style
      , i = G(n)
      , r = s.display;
    let o = !1;
    if (n && !i) {
        if (t && !G(t))
            for (const c in t)
                n[c] == null && wn(s, c, "");
        for (const c in n)
            c === "display" && (o = !0),
            wn(s, c, n[c])
    } else if (i) {
        if (t !== n) {
            const c = s[Co];
            c && (n += ";" + c),
            s.cssText = n,
            o = So.test(n)
        }
    } else
        t && e.removeAttribute("style");
    bs in e && (e[bs] = o ? s.display : "",
    s.display = r)
}
const xs = /\s*!important$/;
function wn(e, t, n) {
    if (I(n))
        n.forEach(s=>wn(e, t, s));
    else if (n == null && (n = ""),
    t.startsWith("--"))
        e.setProperty(t, n);
    else {
        const s = Oo(e, t);
        xs.test(n) ? e.setProperty(et(s), n.replace(xs, ""), "important") : e[s] = n
    }
}
const ys = ["Webkit", "Moz", "ms"]
  , ln = {};
function Oo(e, t) {
    const n = ln[t];
    if (n)
        return n;
    let s = Xe(t);
    if (s !== "filter" && s in e)
        return ln[t] = s;
    s = As(s);
    for (let i = 0; i < ys.length; i++) {
        const r = ys[i] + s;
        if (r in e)
            return ln[t] = r
    }
    return t
}
const ws = "http://www.w3.org/1999/xlink";
function Po(e, t, n, s, i) {
    if (s && t.startsWith("xlink:"))
        n == null ? e.removeAttributeNS(ws, t.slice(6, t.length)) : e.setAttributeNS(ws, t, n);
    else {
        const r = Mi(t);
        n == null || r && !Rs(n) ? e.removeAttribute(t) : e.setAttribute(t, r ? "" : n)
    }
}
function Io(e, t, n, s, i, r, o) {
    if (t === "innerHTML" || t === "textContent") {
        s && o(s, i, r),
        e[t] = n ?? "";
        return
    }
    const c = e.tagName;
    if (t === "value" && c !== "PROGRESS" && !c.includes("-")) {
        e._value = n;
        const d = c === "OPTION" ? e.getAttribute("value") : e.value
          , h = n ?? "";
        d !== h && (e.value = h),
        n == null && e.removeAttribute(t);
        return
    }
    let u = !1;
    if (n === "" || n == null) {
        const d = typeof e[t];
        d === "boolean" ? n = Rs(n) : n == null && d === "string" ? (n = "",
        u = !0) : d === "number" && (n = 0,
        u = !0)
    }
    try {
        e[t] = n
    } catch {}
    u && e.removeAttribute(t)
}
function Ao(e, t, n, s) {
    e.addEventListener(t, n, s)
}
function Mo(e, t, n, s) {
    e.removeEventListener(t, n, s)
}
const vs = Symbol("_vei");
function Ro(e, t, n, s, i=null) {
    const r = e[vs] || (e[vs] = {})
      , o = r[t];
    if (s && o)
        o.value = s;
    else {
        const [c,u] = Lo(t);
        if (s) {
            const d = r[t] = $o(s, i);
            Ao(e, c, d, u)
        } else
            o && (Mo(e, c, o, u),
            r[t] = void 0)
    }
}
const Es = /(?:Once|Passive|Capture)$/;
function Lo(e) {
    let t;
    if (Es.test(e)) {
        t = {};
        let s;
        for (; s = e.match(Es); )
            e = e.slice(0, e.length - s[0].length),
            t[s[0].toLowerCase()] = !0
    }
    return [e[2] === ":" ? e.slice(3) : et(e.slice(2)), t]
}
let cn = 0;
const Fo = Promise.resolve()
  , No = ()=>cn || (Fo.then(()=>cn = 0),
cn = Date.now());
function $o(e, t) {
    const n = s=>{
        if (!s._vts)
            s._vts = Date.now();
        else if (s._vts <= n.attached)
            return;
        ae(jo(s, n.value), t, 5, [s])
    }
    ;
    return n.value = e,
    n.attached = No(),
    n
}
function jo(e, t) {
    if (I(t)) {
        const n = e.stopImmediatePropagation;
        return e.stopImmediatePropagation = ()=>{
            n.call(e),
            e._stopped = !0
        }
        ,
        t.map(s=>i=>!i._stopped && s && s(i))
    } else
        return t
}
const Cs = e=>e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123
  , Ho = (e,t,n,s,i,r,o,c,u)=>{
    const d = i === "svg";
    t === "class" ? Eo(e, s, d) : t === "style" ? To(e, n, s) : Lt(t) ? En(t) || Ro(e, t, n, s, o) : (t[0] === "." ? (t = t.slice(1),
    !0) : t[0] === "^" ? (t = t.slice(1),
    !1) : Uo(e, t, s, d)) ? Io(e, t, s, r, o, c, u) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s),
    Po(e, t, s, d))
}
;
function Uo(e, t, n, s) {
    if (s)
        return !!(t === "innerHTML" || t === "textContent" || t in e && Cs(t) && A(n));
    if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
        return !1;
    if (t === "width" || t === "height") {
        const i = e.tagName;
        if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
            return !1
    }
    return Cs(t) && G(n) ? !1 : t in e
}
const Bo = X({
    patchProp: Ho
}, wo);
let Ss;
function Vo() {
    return Ss || (Ss = Yr(Bo))
}
const Ko = (...e)=>{
    const t = Vo().createApp(...e)
      , {mount: n} = t;
    return t.mount = s=>{
        const i = Wo(s);
        if (!i)
            return;
        const r = t._component;
        !A(r) && !r.render && !r.template && (r.template = i.innerHTML),
        i.innerHTML = "";
        const o = n(i, !1, Do(i));
        return i instanceof Element && (i.removeAttribute("v-cloak"),
        i.setAttribute("data-v-app", "")),
        o
    }
    ,
    t
}
;
function Do(e) {
    if (e instanceof SVGElement)
        return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement)
        return "mathml"
}
function Wo(e) {
    return G(e) ? document.querySelector(e) : e
}
const ko = "/assets/avatar-D_ALwFho.webp"
  , zo = {
    "h-130vh": ""
}
  , qo = O("canvas", {
    id: "trails",
    "wh-full": ""
}, null, -1)
  , Go = [qo]
  , Jo = {
    __name: "StarTrails",
    setup(e) {
        return Hn(()=>{
            const t = document.createElement("canvas")
              , n = document.getElementById("trails");
            let s, i;
            n.width = t.width = s = n.offsetWidth,
            n.height = t.height = i = n.offsetHeight;
            const r = Math.max(s, i);
            t.width = r * 2.6,
            t.height = r * 2.6;
            const o = n.getContext("2d")
              , c = t.getContext("2d");
            o.fillStyle = "rgba(0,0,0,1)",
            o.fillRect(0, 0, s, i);
            function u(H, q) {
                return H + Math.round(Math.random() * (q - H))
            }
            function d() {
                const H = u(120, 255)
                  , q = u(120, 255)
                  , $ = u(120, 255)
                  , z = u(30, 100) / 100;
                return `rgba(${H},${q},${$},${z})`
            }
            const h = [];
            function y() {
                return {
                    x: u(-t.width, t.width),
                    y: u(-t.height, t.height),
                    size: 1.2,
                    color: d()
                }
            }
            function E() {
                let H = h.length;
                for (; H--; ) {
                    const q = h[H];
                    c.beginPath(),
                    c.arc(q.x, q.y, q.size, 0, Math.PI * 2, !0),
                    c.fillStyle = q.color,
                    c.closePath(),
                    c.fill()
                }
            }
            let T = 0;
            function K() {
                o.drawImage(t, -t.width / 2, -t.height / 2),
                T++,
                T > 200 && T % 8 === 0 && (o.fillStyle = "rgba(0,0,0,.04)",
                o.fillRect(-(r * 3), -(r * 3), r * 6, r * 6)),
                o.rotate(.025 * Math.PI / 180)
            }
            let L = 18e3;
            for (; L--; )
                h.push(y());
            E(),
            s < i ? o.translate(s, i) : o.translate(s, 0);
            function k() {
                window.requestAnimationFrame(k),
                K()
            }
            k(),
            window.addEventListener("resize", ()=>{
                s = n.offsetWidth,
                i = n.offsetHeight,
                n.width = s,
                n.height = i,
                o.fillStyle = "rgba(0,0,0,1)",
                o.fillRect(0, 0, s, i)
            }
            )
        }
        ),
        (t,n)=>(Ce(),
        Se("div", zo, Go))
    }
}
  , Yo = (e,t)=>{
    const n = e.__vccOpts || e;
    for (const [s,i] of t)
        n[s] = i;
    return n
}
  , De = e=>(dr("data-v-7db2bf9b"),
e = e(),
hr(),
e)
  , Xo = {
    absolute: "",
    fixed: "",
    "bottom-4": "",
    "left-4": "",
    "z-20": ""
}
  , Zo = ["href"]
  , Qo = {
    "bg-transparent": "",
    absolute: "",
    "w-full": "",
    "top-75vh": "",
    "z-10": ""
}
  , el = {
    "ml-15vw": "",
    absolute: ""
}
  , tl = ["innerHTML"]
  , nl = De(()=>O("div", {
    flex: "",
    "items-center": ""
}, [O("div", {
    "mr-4": "",
    flex: "",
    "gap-2": ""
}, [O("div", {
    "bg-red": "",
    "rounded-full": "",
    "h-3": "",
    "w-3": ""
}), O("div", {
    "bg-yellow": "",
    "rounded-full": "",
    "h-3": "",
    "w-3": ""
}), O("div", {
    "bg-green": "",
    "rounded-full": "",
    "h-3": "",
    "w-3": ""
})]), O("div", {
    "text-4": "",
    "text-white": "",
    "tracking-widest": ""
}, " 麦兜麦兜祝您今天快乐 ")], -1))
  , sl = {
    "mx-9vw": "",
    "mt-90": ""
}
  , il = De(()=>O("div", {
    "text-bold": "",
    "mb-4": "",
    "ml-10": "",
    "text-8": "",
    "text-white": ""
}, " About Me ", -1))
  , rl = De(()=>O("div", {
    "mx-10": "",
    "mb-10": "",
    flex: "",
    "justify-between": ""
}, [O("div", {
    class: "text-white/80"
}, [O("p", {
    "leading-10": ""
}, " 嗨，你好，我是麦兜同学。 "), O("p", {
    "leading-10": ""
}, " 热爱摄影、读书、旅行等一切有意思的生活。 "), O("p", {
    "leading-10": ""
}, ""), O("p", {
    "leading-10": ""
}, " 我们正在让这个世界变得更加美好，通过代码的重复使用和延展构建完美体系。 "), O("p", {
    "leading-10": ""
}, " We're making the world a better place. Through constructing elegant hierarchies for maximum code reuse and extensibility. ")]), O("img", {
    hidden: "",
    "rounded-full": "",
    "h-25": "",
    "w-25": "",
    transition: "",
    "md:block": "",
    "hover:-translate-y--2": "",
    src: ko,
    alt: "avatar"
})], -1))
  , ol = De(()=>O("div", {
    "text-bold": "",
    "mb-2": "",
    "ml-10": "",
    "text-8": "",
    "text-white": ""
}, " ", -1))
  , ll = {
    "mb-10": "",
    flex: "",
    "flex-wrap": "",
    "justify-between": ""
}
  , cl = ["href"]
  , fl = {
    class: "bg-white/5 hover:bg-white/10",
    "p-2": "",
    "rounded-lg": "",
    "shadow-md": "",
    "flex-col": "",
    transition: "",
    "backdrop-blur-3xl": "",
    "backdrop-opacity-60": "",
    "hover:backdrop-opacity-100": "",
    "hover:-translate-y-2": ""
}
  , ul = {
    "text-bold": "",
    "opacity-75": "",
    "text-white": ""
}
  , al = {
    "mt-1": "",
    "opacity-50": "",
    "text-3": "",
    "text-white": ""
}
  , dl = De(()=>O("div", {
    "text-bold": "",
    "mb-2": "",
    "ml-10": "",
    "text-8": "",
    "text-white": ""
}, " ", -1))
  , hl = {
    flex: "",
    "flex-wrap": "",
    "justify-between": ""
}
  , pl = ["href"]
  , gl = ["innerHTML"]
  , ml = {
    "text-bold": "",
    "opacity-75": "",
    "text-white": ""
}
  , _l = De(()=>O("footer", {
    "mb-5": ""
}, [O("div", {
    class: "text-white/60",
    "mt-50": "",
    "f-c-c": ""
}, [O("i", {
    "i-ant-design-environment-outlined": "",
    "mr-1": ""
}), O("p", null, "路虽远行则将至，事虽难做则必成"), O("i", {
    "i-ant-design-environment-outlined": "",
    "ml-1": ""
})]), O("div", {
    class: "text-white/60",
    "mt-2": "",
    "f-c-c": "",
    "gap-4": ""
}, [O("div", null, ""), O("div", null, "© 2024 麦兜同学")])], -1))
  , bl = {
    id: "background",
    absolute: "",
    "wh-full": "",
    "left-0": "",
    "top-0": "",
    "z-0": ""
}
  , xl = De(()=>O("div", {
    "to-black-500": "",
    absolute: "",
    "h-80vh": "",
    "w-full": "",
    "bottom--30vh": "",
    "left-0": "",
    "from-black": "",
    "bg-gradient-to-t": ""
}, null, -1))
  , yl = {
    __name: "App",
    setup(e) {
        const t = jt({
            titleList: ["热爱……", "敬畏之心！", "赞美之心！", "我很好奇！", "你好，请多指教", "*舒缓的现代音乐*", "希望能成为有趣的人", "相信美好的事情即将发生", "平凡的日常正奇迹的发生着", "你所热爱的<br/>就是你的生活", "给时光以生命<br/>给岁月以文明", "路虽远行则将至<br/>事虽难做则必成", "一望无际的迷雾中<br/>有人在寻找光明", "当你在凝视着网页的时候<br/>网页也正在凝视着你"],
            navLinks: [],
            myProjects: [],
            socialLinks: []
        });
        return Hn(()=>{
            window.addEventListener("scroll", ()=>{
                const n = document.getElementById("background");
                window.scrollY > .7 * window.innerHeight ? n.classList.add("fixed") : n.classList.remove("fixed")
            }
            )
        }
        ),
        (n,s)=>(Ce(),
        Se(ie, null, [O("nav", Xo, [(Ce(!0),
        Se(ie, null, nn(t.navLinks, (i,r)=>(Ce(),
        Se("div", {
            key: r,
            "my-6": "",
            "text-3": "",
            "text-white": "",
            wv: ""
        }, [O("a", {
            href: i.link,
            "opacity-75": "",
            "text-white": "",
            "tracking-widest": "",
            "hover:opacity-100": ""
        }, xt(i.name), 9, Zo)]))), 128))]), O("main", Qo, [O("section", el, [O("div", {
            "text-10": "",
            "text-white": "",
            "font-bold": "",
            "tracking-widest": "",
            innerHTML: t.titleList[Math.floor(Math.random() * t.titleList.length)]
        }, null, 8, tl), nl]), O("section", sl, [il, rl, ol, O("div", ll, [(Ce(!0),
        Se(ie, null, nn(t.myProjects, (i,r)=>(Ce(),
        Se("div", {
            key: r,
            "mx-10": "",
            "my-4": "",
            class: "basis-3/4 md:basis-1/6"
        }, [O("a", {
            href: i.link
        }, [O("div", fl, [O("div", ul, xt(i.name), 1), O("div", al, xt(i.description), 1)])], 8, cl)]))), 128))]), dl, O("div", hl, [(Ce(!0),
        Se(ie, null, nn(t.socialLinks, (i,r)=>(Ce(),
        Se("div", {
            key: r,
            "mx-10": "",
            "my-4": "",
            class: "basis-1/6"
        }, [O("a", {
            class: "bg-white/5 hover:bg-white/10",
            "p-2": "",
            "rounded-lg": "",
            "shadow-md": "",
            "flex-col": "",
            "justify-between": "",
            "items-center": "",
            transition: "",
            "backdrop-blur-3xl": "",
            "backdrop-opacity-60": "",
            "hover:backdrop-opacity-100": "",
            "hover:-translate-y-2": "",
            href: i.link
        }, [O("div", {
            "mb-1": "",
            "text-white": "",
            "f-c-c": "",
            innerHTML: i.icon
        }, null, 8, gl), O("div", ml, xt(i.label), 1)], 8, pl)]))), 128))])]), _l]), O("div", bl, [xl, Me(Jo, {
            "pb-45vh": "",
            "bg-black": ""
        })])], 64))
    }
}
  , wl = Yo(yl, [["__scopeId", "data-v-7db2bf9b"]])
  , vl = Ko(wl);
vl.mount("#app");
