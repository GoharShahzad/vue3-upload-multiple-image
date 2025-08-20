/**
* @vue/shared v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Be(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const K = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, Et = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], Y = () => {
}, Rr = () => !1, kt = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), hn = (e) => e.startsWith("onUpdate:"), X = Object.assign, fo = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Fr = Object.prototype.hasOwnProperty, j = (e, t) => Fr.call(e, t), T = Array.isArray, it = (e) => Dn(e) === "[object Map]", Ns = (e) => Dn(e) === "[object Set]", $ = (e) => typeof e == "function", q = (e) => typeof e == "string", tt = (e) => typeof e == "symbol", B = (e) => e !== null && typeof e == "object", uo = (e) => (B(e) || $(e)) && $(e.then) && $(e.catch), ys = Object.prototype.toString, Dn = (e) => ys.call(e), ao = (e) => Dn(e).slice(8, -1), Os = (e) => Dn(e) === "[object Object]", po = (e) => q(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, At = /* @__PURE__ */ Be(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), jr = /* @__PURE__ */ Be(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), wn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Hr = /-(\w)/g, ie = wn(
  (e) => e.replace(Hr, (t, n) => n ? n.toUpperCase() : "")
), Lr = /\B([A-Z])/g, Qe = wn(
  (e) => e.replace(Lr, "-$1").toLowerCase()
), pt = wn((e) => e.charAt(0).toUpperCase() + e.slice(1)), st = wn(
  (e) => e ? `on${pt(e)}` : ""
), lt = (e, t) => !Object.is(e, t), Vt = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Ht = (e, t, n, o = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: o,
    value: n
  });
}, Ur = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let jo;
const qt = () => jo || (jo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ho(e) {
  if (T(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], s = q(o) ? kr(o) : ho(o);
      if (s)
        for (const r in s)
          t[r] = s[r];
    }
    return t;
  } else if (q(e) || B(e))
    return e;
}
const Kr = /;(?![^(]*\))/g, Br = /:([^]+)/, Wr = /\/\*[^]*?\*\//g;
function kr(e) {
  const t = {};
  return e.replace(Wr, "").split(Kr).forEach((n) => {
    if (n) {
      const o = n.split(Br);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function go(e) {
  let t = "";
  if (q(e))
    t = e;
  else if (T(e))
    for (let n = 0; n < e.length; n++) {
      const o = go(e[n]);
      o && (t += o + " ");
    }
  else if (B(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const qr = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", Gr = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", Jr = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", Yr = /* @__PURE__ */ Be(qr), zr = /* @__PURE__ */ Be(Gr), Xr = /* @__PURE__ */ Be(Jr), Zr = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Qr = /* @__PURE__ */ Be(Zr);
function xs(e) {
  return !!e || e === "";
}
const Ds = (e) => !!(e && e.__v_isRef === !0), nn = (e) => q(e) ? e : e == null ? "" : T(e) || B(e) && (e.toString === ys || !$(e.toString)) ? Ds(e) ? nn(e.value) : JSON.stringify(e, ws, 2) : String(e), ws = (e, t) => Ds(t) ? ws(e, t.value) : it(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [o, s], r) => (n[jn(o, r) + " =>"] = s, n),
    {}
  )
} : Ns(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => jn(n))
} : tt(t) ? jn(t) : B(t) && !T(t) && !Os(t) ? String(t) : t, jn = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    tt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Re(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let pe;
class ei {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = pe, !t && pe && (this.index = (pe.scopes || (pe.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = pe;
      try {
        return pe = this, t();
      } finally {
        pe = n;
      }
    } else process.env.NODE_ENV !== "production" && Re("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = pe, pe = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (pe = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, o;
      for (n = 0, o = this.effects.length; n < o; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, o = this.cleanups.length; n < o; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, o = this.scopes.length; n < o; n++)
          this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const s = this.parent.scopes.pop();
        s && s !== this && (this.parent.scopes[this.index] = s, s.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function ti() {
  return pe;
}
let H;
const Hn = /* @__PURE__ */ new WeakSet();
class Vs {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, pe && pe.active && pe.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Hn.has(this) && (Hn.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Cs(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Ho(this), Ts(this);
    const t = H, n = Oe;
    H = this, Oe = !0;
    try {
      return this.fn();
    } finally {
      process.env.NODE_ENV !== "production" && H !== this && Re(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), $s(this), H = t, Oe = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        vo(t);
      this.deps = this.depsTail = void 0, Ho(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Hn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Yn(this) && this.run();
  }
  get dirty() {
    return Yn(this);
  }
}
let Ss = 0, Mt, Pt;
function Cs(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Pt, Pt = e;
    return;
  }
  e.next = Mt, Mt = e;
}
function mo() {
  Ss++;
}
function _o() {
  if (--Ss > 0)
    return;
  if (Pt) {
    let t = Pt;
    for (Pt = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Mt; ) {
    let t = Mt;
    for (Mt = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (o) {
          e || (e = o);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function Ts(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function $s(e) {
  let t, n = e.depsTail, o = n;
  for (; o; ) {
    const s = o.prevDep;
    o.version === -1 ? (o === n && (n = s), vo(o), ni(o)) : t = o, o.dep.activeLink = o.prevActiveLink, o.prevActiveLink = void 0, o = s;
  }
  e.deps = t, e.depsTail = n;
}
function Yn(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Is(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Is(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Lt) || (e.globalVersion = Lt, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Yn(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = H, o = Oe;
  H = e, Oe = !0;
  try {
    Ts(e);
    const s = e.fn(e._value);
    (t.version === 0 || lt(s, e._value)) && (e.flags |= 128, e._value = s, t.version++);
  } catch (s) {
    throw t.version++, s;
  } finally {
    H = n, Oe = o, $s(e), e.flags &= -3;
  }
}
function vo(e, t = !1) {
  const { dep: n, prevSub: o, nextSub: s } = e;
  if (o && (o.nextSub = s, e.prevSub = void 0), s && (s.prevSub = o, e.nextSub = void 0), process.env.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = s), n.subs === e && (n.subs = o, !o && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      vo(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function ni(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Oe = !0;
const As = [];
function De() {
  As.push(Oe), Oe = !1;
}
function we() {
  const e = As.pop();
  Oe = e === void 0 ? !0 : e;
}
function Ho(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = H;
    H = void 0;
    try {
      t();
    } finally {
      H = n;
    }
  }
}
let Lt = 0;
class oi {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Ms {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, process.env.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!H || !Oe || H === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== H)
      n = this.activeLink = new oi(H, this), H.deps ? (n.prevDep = H.depsTail, H.depsTail.nextDep = n, H.depsTail = n) : H.deps = H.depsTail = n, Ps(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const o = n.nextDep;
      o.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = o), n.prevDep = H.depsTail, n.nextDep = void 0, H.depsTail.nextDep = n, H.depsTail = n, H.deps === n && (H.deps = o);
    }
    return process.env.NODE_ENV !== "production" && H.onTrack && H.onTrack(
      X(
        {
          effect: H
        },
        t
      )
    ), n;
  }
  trigger(t) {
    this.version++, Lt++, this.notify(t);
  }
  notify(t) {
    mo();
    try {
      if (process.env.NODE_ENV !== "production")
        for (let n = this.subsHead; n; n = n.nextSub)
          n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
            X(
              {
                effect: n.sub
              },
              t
            )
          );
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      _o();
    }
  }
}
function Ps(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let o = t.deps; o; o = o.nextDep)
        Ps(o);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), process.env.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const zn = /* @__PURE__ */ new WeakMap(), ct = Symbol(
  process.env.NODE_ENV !== "production" ? "Object iterate" : ""
), Xn = Symbol(
  process.env.NODE_ENV !== "production" ? "Map keys iterate" : ""
), Ut = Symbol(
  process.env.NODE_ENV !== "production" ? "Array iterate" : ""
);
function J(e, t, n) {
  if (Oe && H) {
    let o = zn.get(e);
    o || zn.set(e, o = /* @__PURE__ */ new Map());
    let s = o.get(n);
    s || (o.set(n, s = new Ms()), s.map = o, s.key = n), process.env.NODE_ENV !== "production" ? s.track({
      target: e,
      type: t,
      key: n
    }) : s.track();
  }
}
function Ae(e, t, n, o, s, r) {
  const i = zn.get(e);
  if (!i) {
    Lt++;
    return;
  }
  const l = (u) => {
    u && (process.env.NODE_ENV !== "production" ? u.trigger({
      target: e,
      type: t,
      key: n,
      newValue: o,
      oldValue: s,
      oldTarget: r
    }) : u.trigger());
  };
  if (mo(), t === "clear")
    i.forEach(l);
  else {
    const u = T(e), d = u && po(n);
    if (u && n === "length") {
      const p = Number(o);
      i.forEach((a, g) => {
        (g === "length" || g === Ut || !tt(g) && g >= p) && l(a);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && l(i.get(n)), d && l(i.get(Ut)), t) {
        case "add":
          u ? d && l(i.get("length")) : (l(i.get(ct)), it(e) && l(i.get(Xn)));
          break;
        case "delete":
          u || (l(i.get(ct)), it(e) && l(i.get(Xn)));
          break;
        case "set":
          it(e) && l(i.get(ct));
          break;
      }
  }
  _o();
}
function gt(e) {
  const t = M(e);
  return t === e ? t : (J(t, "iterate", Ut), he(e) ? t : t.map(se));
}
function Vn(e) {
  return J(e = M(e), "iterate", Ut), e;
}
const si = {
  __proto__: null,
  [Symbol.iterator]() {
    return Ln(this, Symbol.iterator, se);
  },
  concat(...e) {
    return gt(this).concat(
      ...e.map((t) => T(t) ? gt(t) : t)
    );
  },
  entries() {
    return Ln(this, "entries", (e) => (e[1] = se(e[1]), e));
  },
  every(e, t) {
    return He(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return He(this, "filter", e, t, (n) => n.map(se), arguments);
  },
  find(e, t) {
    return He(this, "find", e, t, se, arguments);
  },
  findIndex(e, t) {
    return He(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return He(this, "findLast", e, t, se, arguments);
  },
  findLastIndex(e, t) {
    return He(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return He(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Un(this, "includes", e);
  },
  indexOf(...e) {
    return Un(this, "indexOf", e);
  },
  join(e) {
    return gt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return Un(this, "lastIndexOf", e);
  },
  map(e, t) {
    return He(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return St(this, "pop");
  },
  push(...e) {
    return St(this, "push", e);
  },
  reduce(e, ...t) {
    return Lo(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Lo(this, "reduceRight", e, t);
  },
  shift() {
    return St(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return He(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return St(this, "splice", e);
  },
  toReversed() {
    return gt(this).toReversed();
  },
  toSorted(e) {
    return gt(this).toSorted(e);
  },
  toSpliced(...e) {
    return gt(this).toSpliced(...e);
  },
  unshift(...e) {
    return St(this, "unshift", e);
  },
  values() {
    return Ln(this, "values", se);
  }
};
function Ln(e, t, n) {
  const o = Vn(e), s = o[t]();
  return o !== e && !he(e) && (s._next = s.next, s.next = () => {
    const r = s._next();
    return r.value && (r.value = n(r.value)), r;
  }), s;
}
const ri = Array.prototype;
function He(e, t, n, o, s, r) {
  const i = Vn(e), l = i !== e && !he(e), u = i[t];
  if (u !== ri[t]) {
    const a = u.apply(e, r);
    return l ? se(a) : a;
  }
  let d = n;
  i !== e && (l ? d = function(a, g) {
    return n.call(this, se(a), g, e);
  } : n.length > 2 && (d = function(a, g) {
    return n.call(this, a, g, e);
  }));
  const p = u.call(i, d, o);
  return l && s ? s(p) : p;
}
function Lo(e, t, n, o) {
  const s = Vn(e);
  let r = n;
  return s !== e && (he(e) ? n.length > 3 && (r = function(i, l, u) {
    return n.call(this, i, l, u, e);
  }) : r = function(i, l, u) {
    return n.call(this, i, se(l), u, e);
  }), s[t](r, ...o);
}
function Un(e, t, n) {
  const o = M(e);
  J(o, "iterate", Ut);
  const s = o[t](...n);
  return (s === -1 || s === !1) && gn(n[0]) ? (n[0] = M(n[0]), o[t](...n)) : s;
}
function St(e, t, n = []) {
  De(), mo();
  const o = M(e)[t].apply(e, n);
  return _o(), we(), o;
}
const ii = /* @__PURE__ */ Be("__proto__,__v_isRef,__isVue"), Rs = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(tt)
);
function li(e) {
  tt(e) || (e = String(e));
  const t = M(this);
  return J(t, "has", e), t.hasOwnProperty(e);
}
class Fs {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, o) {
    if (n === "__v_skip") return t.__v_skip;
    const s = this._isReadonly, r = this._isShallow;
    if (n === "__v_isReactive")
      return !s;
    if (n === "__v_isReadonly")
      return s;
    if (n === "__v_isShallow")
      return r;
    if (n === "__v_raw")
      return o === (s ? r ? Bs : Ks : r ? Us : Ls).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
    const i = T(t);
    if (!s) {
      let u;
      if (i && (u = si[n]))
        return u;
      if (n === "hasOwnProperty")
        return li;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      z(t) ? t : o
    );
    return (tt(n) ? Rs.has(n) : ii(n)) || (s || J(t, "get", n), r) ? l : z(l) ? i && po(n) ? l : l.value : B(l) ? s ? Ws(l) : Eo(l) : l;
  }
}
class js extends Fs {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, o, s) {
    let r = t[n];
    if (!this._isShallow) {
      const u = Ke(r);
      if (!he(o) && !Ke(o) && (r = M(r), o = M(o)), !T(t) && z(r) && !z(o))
        return u ? !1 : (r.value = o, !0);
    }
    const i = T(t) && po(n) ? Number(n) < t.length : j(t, n), l = Reflect.set(
      t,
      n,
      o,
      z(t) ? t : s
    );
    return t === M(s) && (i ? lt(o, r) && Ae(t, "set", n, o, r) : Ae(t, "add", n, o)), l;
  }
  deleteProperty(t, n) {
    const o = j(t, n), s = t[n], r = Reflect.deleteProperty(t, n);
    return r && o && Ae(t, "delete", n, void 0, s), r;
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return (!tt(n) || !Rs.has(n)) && J(t, "has", n), o;
  }
  ownKeys(t) {
    return J(
      t,
      "iterate",
      T(t) ? "length" : ct
    ), Reflect.ownKeys(t);
  }
}
class Hs extends Fs {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return process.env.NODE_ENV !== "production" && Re(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return process.env.NODE_ENV !== "production" && Re(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const ci = /* @__PURE__ */ new js(), fi = /* @__PURE__ */ new Hs(), ui = /* @__PURE__ */ new js(!0), ai = /* @__PURE__ */ new Hs(!0), Zn = (e) => e, Qt = (e) => Reflect.getPrototypeOf(e);
function pi(e, t, n) {
  return function(...o) {
    const s = this.__v_raw, r = M(s), i = it(r), l = e === "entries" || e === Symbol.iterator && i, u = e === "keys" && i, d = s[e](...o), p = n ? Zn : t ? mn : se;
    return !t && J(
      r,
      "iterate",
      u ? Xn : ct
    ), {
      // iterator protocol
      next() {
        const { value: a, done: g } = d.next();
        return g ? { value: a, done: g } : {
          value: l ? [p(a[0]), p(a[1])] : p(a),
          done: g
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function en(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      Re(
        `${pt(e)} operation ${n}failed: target is readonly.`,
        M(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function di(e, t) {
  const n = {
    get(s) {
      const r = this.__v_raw, i = M(r), l = M(s);
      e || (lt(s, l) && J(i, "get", s), J(i, "get", l));
      const { has: u } = Qt(i), d = t ? Zn : e ? mn : se;
      if (u.call(i, s))
        return d(r.get(s));
      if (u.call(i, l))
        return d(r.get(l));
      r !== i && r.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return !e && J(M(s), "iterate", ct), Reflect.get(s, "size", s);
    },
    has(s) {
      const r = this.__v_raw, i = M(r), l = M(s);
      return e || (lt(s, l) && J(i, "has", s), J(i, "has", l)), s === l ? r.has(s) : r.has(s) || r.has(l);
    },
    forEach(s, r) {
      const i = this, l = i.__v_raw, u = M(l), d = t ? Zn : e ? mn : se;
      return !e && J(u, "iterate", ct), l.forEach((p, a) => s.call(r, d(p), d(a), i));
    }
  };
  return X(
    n,
    e ? {
      add: en("add"),
      set: en("set"),
      delete: en("delete"),
      clear: en("clear")
    } : {
      add(s) {
        !t && !he(s) && !Ke(s) && (s = M(s));
        const r = M(this);
        return Qt(r).has.call(r, s) || (r.add(s), Ae(r, "add", s, s)), this;
      },
      set(s, r) {
        !t && !he(r) && !Ke(r) && (r = M(r));
        const i = M(this), { has: l, get: u } = Qt(i);
        let d = l.call(i, s);
        d ? process.env.NODE_ENV !== "production" && Uo(i, l, s) : (s = M(s), d = l.call(i, s));
        const p = u.call(i, s);
        return i.set(s, r), d ? lt(r, p) && Ae(i, "set", s, r, p) : Ae(i, "add", s, r), this;
      },
      delete(s) {
        const r = M(this), { has: i, get: l } = Qt(r);
        let u = i.call(r, s);
        u ? process.env.NODE_ENV !== "production" && Uo(r, i, s) : (s = M(s), u = i.call(r, s));
        const d = l ? l.call(r, s) : void 0, p = r.delete(s);
        return u && Ae(r, "delete", s, void 0, d), p;
      },
      clear() {
        const s = M(this), r = s.size !== 0, i = process.env.NODE_ENV !== "production" ? it(s) ? new Map(s) : new Set(s) : void 0, l = s.clear();
        return r && Ae(
          s,
          "clear",
          void 0,
          void 0,
          i
        ), l;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((s) => {
    n[s] = pi(s, e, t);
  }), n;
}
function Sn(e, t) {
  const n = di(e, t);
  return (o, s, r) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? o : Reflect.get(
    j(n, s) && s in o ? n : o,
    s,
    r
  );
}
const hi = {
  get: /* @__PURE__ */ Sn(!1, !1)
}, gi = {
  get: /* @__PURE__ */ Sn(!1, !0)
}, mi = {
  get: /* @__PURE__ */ Sn(!0, !1)
}, _i = {
  get: /* @__PURE__ */ Sn(!0, !0)
};
function Uo(e, t, n) {
  const o = M(n);
  if (o !== n && t.call(e, o)) {
    const s = ao(e);
    Re(
      `Reactive ${s} contains both the raw and reactive versions of the same object${s === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Ls = /* @__PURE__ */ new WeakMap(), Us = /* @__PURE__ */ new WeakMap(), Ks = /* @__PURE__ */ new WeakMap(), Bs = /* @__PURE__ */ new WeakMap();
function vi(e) {
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
      return 0;
  }
}
function Ei(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : vi(ao(e));
}
function Eo(e) {
  return Ke(e) ? e : Cn(
    e,
    !1,
    ci,
    hi,
    Ls
  );
}
function bi(e) {
  return Cn(
    e,
    !1,
    ui,
    gi,
    Us
  );
}
function Ws(e) {
  return Cn(
    e,
    !0,
    fi,
    mi,
    Ks
  );
}
function Me(e) {
  return Cn(
    e,
    !0,
    ai,
    _i,
    Bs
  );
}
function Cn(e, t, n, o, s) {
  if (!B(e))
    return process.env.NODE_ENV !== "production" && Re(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = Ei(e);
  if (r === 0)
    return e;
  const i = s.get(e);
  if (i)
    return i;
  const l = new Proxy(
    e,
    r === 2 ? o : n
  );
  return s.set(e, l), l;
}
function ft(e) {
  return Ke(e) ? ft(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Ke(e) {
  return !!(e && e.__v_isReadonly);
}
function he(e) {
  return !!(e && e.__v_isShallow);
}
function gn(e) {
  return e ? !!e.__v_raw : !1;
}
function M(e) {
  const t = e && e.__v_raw;
  return t ? M(t) : e;
}
function Ni(e) {
  return !j(e, "__v_skip") && Object.isExtensible(e) && Ht(e, "__v_skip", !0), e;
}
const se = (e) => B(e) ? Eo(e) : e, mn = (e) => B(e) ? Ws(e) : e;
function z(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function yi(e) {
  return z(e) ? e.value : e;
}
const Oi = {
  get: (e, t, n) => t === "__v_raw" ? e : yi(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const s = e[t];
    return z(s) && !z(n) ? (s.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function ks(e) {
  return ft(e) ? e : new Proxy(e, Oi);
}
class xi {
  constructor(t, n, o) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Ms(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Lt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = o;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    H !== this)
      return Cs(this, !0), !0;
    process.env.NODE_ENV;
  }
  get value() {
    const t = process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return Is(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : process.env.NODE_ENV !== "production" && Re("Write operation failed: computed value is readonly");
  }
}
function Di(e, t, n = !1) {
  let o, s;
  $(e) ? o = e : (o = e.get, s = e.set);
  const r = new xi(o, s, n);
  return process.env.NODE_ENV, r;
}
const tn = {}, _n = /* @__PURE__ */ new WeakMap();
let rt;
function wi(e, t = !1, n = rt) {
  if (n) {
    let o = _n.get(n);
    o || _n.set(n, o = []), o.push(e);
  } else process.env.NODE_ENV !== "production" && !t && Re(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function Vi(e, t, n = K) {
  const { immediate: o, deep: s, once: r, scheduler: i, augmentJob: l, call: u } = n, d = (C) => {
    (n.onWarn || Re)(
      "Invalid watch source: ",
      C,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, p = (C) => s ? C : he(C) || s === !1 || s === 0 ? ze(C, 1) : ze(C);
  let a, g, D, V, A = !1, ee = !1;
  if (z(e) ? (g = () => e.value, A = he(e)) : ft(e) ? (g = () => p(e), A = !0) : T(e) ? (ee = !0, A = e.some((C) => ft(C) || he(C)), g = () => e.map((C) => {
    if (z(C))
      return C.value;
    if (ft(C))
      return p(C);
    if ($(C))
      return u ? u(C, 2) : C();
    process.env.NODE_ENV !== "production" && d(C);
  })) : $(e) ? t ? g = u ? () => u(e, 2) : e : g = () => {
    if (D) {
      De();
      try {
        D();
      } finally {
        we();
      }
    }
    const C = rt;
    rt = a;
    try {
      return u ? u(e, 3, [V]) : e(V);
    } finally {
      rt = C;
    }
  } : (g = Y, process.env.NODE_ENV !== "production" && d(e)), t && s) {
    const C = g, Z = s === !0 ? 1 / 0 : s;
    g = () => ze(C(), Z);
  }
  const W = ti(), G = () => {
    a.stop(), W && W.active && fo(W.effects, a);
  };
  if (r && t) {
    const C = t;
    t = (...Z) => {
      C(...Z), G();
    };
  }
  let L = ee ? new Array(e.length).fill(tn) : tn;
  const ge = (C) => {
    if (!(!(a.flags & 1) || !a.dirty && !C))
      if (t) {
        const Z = a.run();
        if (s || A || (ee ? Z.some((ve, te) => lt(ve, L[te])) : lt(Z, L))) {
          D && D();
          const ve = rt;
          rt = a;
          try {
            const te = [
              Z,
              // pass undefined as the old value when it's changed for the first time
              L === tn ? void 0 : ee && L[0] === tn ? [] : L,
              V
            ];
            L = Z, u ? u(t, 3, te) : (
              // @ts-expect-error
              t(...te)
            );
          } finally {
            rt = ve;
          }
        }
      } else
        a.run();
  };
  return l && l(ge), a = new Vs(g), a.scheduler = i ? () => i(ge, !1) : ge, V = (C) => wi(C, !1, a), D = a.onStop = () => {
    const C = _n.get(a);
    if (C) {
      if (u)
        u(C, 4);
      else
        for (const Z of C) Z();
      _n.delete(a);
    }
  }, process.env.NODE_ENV !== "production" && (a.onTrack = n.onTrack, a.onTrigger = n.onTrigger), t ? o ? ge(!0) : L = a.run() : i ? i(ge.bind(null, !0), !0) : a.run(), G.pause = a.pause.bind(a), G.resume = a.resume.bind(a), G.stop = G, G;
}
function ze(e, t = 1 / 0, n) {
  if (t <= 0 || !B(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, z(e))
    ze(e.value, t, n);
  else if (T(e))
    for (let o = 0; o < e.length; o++)
      ze(e[o], t, n);
  else if (Ns(e) || it(e))
    e.forEach((o) => {
      ze(o, t, n);
    });
  else if (Os(e)) {
    for (const o in e)
      ze(e[o], t, n);
    for (const o of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, o) && ze(e[o], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const ut = [];
function on(e) {
  ut.push(e);
}
function sn() {
  ut.pop();
}
let Kn = !1;
function y(e, ...t) {
  if (Kn) return;
  Kn = !0, De();
  const n = ut.length ? ut[ut.length - 1].component : null, o = n && n.appContext.config.warnHandler, s = Si();
  if (o)
    yt(
      o,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((r) => {
          var i, l;
          return (l = (i = r.toString) == null ? void 0 : i.call(r)) != null ? l : JSON.stringify(r);
        }).join(""),
        n && n.proxy,
        s.map(
          ({ vnode: r }) => `at <${Mn(n, r.type)}>`
        ).join(`
`),
        s
      ]
    );
  else {
    const r = [`[Vue warn]: ${e}`, ...t];
    s.length && r.push(`
`, ...Ci(s)), console.warn(...r);
  }
  we(), Kn = !1;
}
function Si() {
  let e = ut[ut.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const o = e.component && e.component.parent;
    e = o && o.vnode;
  }
  return t;
}
function Ci(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...Ti(n));
  }), t;
}
function Ti({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, s = ` at <${Mn(
    e.component,
    e.type,
    o
  )}`, r = ">" + n;
  return e.props ? [s, ...$i(e.props), r] : [s + r];
}
function $i(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...qs(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function qs(e, t, n) {
  return q(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : z(t) ? (t = qs(e, M(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : $(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = M(t), n ? t : [`${e}=`, t]);
}
const bo = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush",
  15: "component update",
  16: "app unmount cleanup function"
};
function yt(e, t, n, o) {
  try {
    return o ? e(...o) : e();
  } catch (s) {
    Gt(s, t, n);
  }
}
function Fe(e, t, n, o) {
  if ($(e)) {
    const s = yt(e, t, n, o);
    return s && uo(s) && s.catch((r) => {
      Gt(r, t, n);
    }), s;
  }
  if (T(e)) {
    const s = [];
    for (let r = 0; r < e.length; r++)
      s.push(Fe(e[r], t, n, o));
    return s;
  } else process.env.NODE_ENV !== "production" && y(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function Gt(e, t, n, o = !0) {
  const s = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: i } = t && t.appContext.config || K;
  if (t) {
    let l = t.parent;
    const u = t.proxy, d = process.env.NODE_ENV !== "production" ? bo[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const p = l.ec;
      if (p) {
        for (let a = 0; a < p.length; a++)
          if (p[a](e, u, d) === !1)
            return;
      }
      l = l.parent;
    }
    if (r) {
      De(), yt(r, null, 10, [
        e,
        u,
        d
      ]), we();
      return;
    }
  }
  Ii(e, n, s, o, i);
}
function Ii(e, t, n, o = !0, s = !1) {
  if (process.env.NODE_ENV !== "production") {
    const r = bo[t];
    if (n && on(n), y(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && sn(), o)
      throw e;
    console.error(e);
  } else {
    if (s)
      throw e;
    console.error(e);
  }
}
const re = [];
let Ie = -1;
const bt = [];
let Je = null, vt = 0;
const Gs = /* @__PURE__ */ Promise.resolve();
let vn = null;
const Ai = 100;
function Mi(e) {
  const t = vn || Gs;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Pi(e) {
  let t = Ie + 1, n = re.length;
  for (; t < n; ) {
    const o = t + n >>> 1, s = re[o], r = Kt(s);
    r < e || r === e && s.flags & 2 ? t = o + 1 : n = o;
  }
  return t;
}
function Tn(e) {
  if (!(e.flags & 1)) {
    const t = Kt(e), n = re[re.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Kt(n) ? re.push(e) : re.splice(Pi(t), 0, e), e.flags |= 1, Js();
  }
}
function Js() {
  vn || (vn = Gs.then(Xs));
}
function Ys(e) {
  T(e) ? bt.push(...e) : Je && e.id === -1 ? Je.splice(vt + 1, 0, e) : e.flags & 1 || (bt.push(e), e.flags |= 1), Js();
}
function Ko(e, t, n = Ie + 1) {
  for (process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < re.length; n++) {
    const o = re[n];
    if (o && o.flags & 2) {
      if (e && o.id !== e.uid || process.env.NODE_ENV !== "production" && No(t, o))
        continue;
      re.splice(n, 1), n--, o.flags & 4 && (o.flags &= -2), o(), o.flags & 4 || (o.flags &= -2);
    }
  }
}
function zs(e) {
  if (bt.length) {
    const t = [...new Set(bt)].sort(
      (n, o) => Kt(n) - Kt(o)
    );
    if (bt.length = 0, Je) {
      Je.push(...t);
      return;
    }
    for (Je = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), vt = 0; vt < Je.length; vt++) {
      const n = Je[vt];
      process.env.NODE_ENV !== "production" && No(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    Je = null, vt = 0;
  }
}
const Kt = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Xs(e) {
  process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = process.env.NODE_ENV !== "production" ? (n) => No(e, n) : Y;
  try {
    for (Ie = 0; Ie < re.length; Ie++) {
      const n = re[Ie];
      if (n && !(n.flags & 8)) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), yt(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; Ie < re.length; Ie++) {
      const n = re[Ie];
      n && (n.flags &= -2);
    }
    Ie = -1, re.length = 0, zs(e), vn = null, (re.length || bt.length) && Xs(e);
  }
}
function No(e, t) {
  const n = e.get(t) || 0;
  if (n > Ai) {
    const o = t.i, s = o && Io(o.type);
    return Gt(
      `Maximum recursive updates exceeded${s ? ` in component <${s}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let Pe = !1;
const rn = /* @__PURE__ */ new Map();
process.env.NODE_ENV !== "production" && (qt().__VUE_HMR_RUNTIME__ = {
  createRecord: Bn(Zs),
  rerender: Bn(ji),
  reload: Bn(Hi)
});
const dt = /* @__PURE__ */ new Map();
function Ri(e) {
  const t = e.type.__hmrId;
  let n = dt.get(t);
  n || (Zs(t, e.type), n = dt.get(t)), n.instances.add(e);
}
function Fi(e) {
  dt.get(e.type.__hmrId).instances.delete(e);
}
function Zs(e, t) {
  return dt.has(e) ? !1 : (dt.set(e, {
    initialDef: En(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function En(e) {
  return Tr(e) ? e.__vccOpts : e;
}
function ji(e, t) {
  const n = dt.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, En(o.type).render = t), o.renderCache = [], Pe = !0, o.update(), Pe = !1;
  }));
}
function Hi(e, t) {
  const n = dt.get(e);
  if (!n) return;
  t = En(t), Bo(n.initialDef, t);
  const o = [...n.instances];
  for (let s = 0; s < o.length; s++) {
    const r = o[s], i = En(r.type);
    let l = rn.get(i);
    l || (i !== n.initialDef && Bo(i, t), rn.set(i, l = /* @__PURE__ */ new Set())), l.add(r), r.appContext.propsCache.delete(r.type), r.appContext.emitsCache.delete(r.type), r.appContext.optionsCache.delete(r.type), r.ceReload ? (l.add(r), r.ceReload(t.styles), l.delete(r)) : r.parent ? Tn(() => {
      Pe = !0, r.parent.update(), Pe = !1, l.delete(r);
    }) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), r.root.ce && r !== r.root && r.root.ce._removeChildStyle(i);
  }
  Ys(() => {
    rn.clear();
  });
}
function Bo(e, t) {
  X(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Bn(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (o) {
      console.error(o), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let ye, $t = [], Qn = !1;
function Jt(e, ...t) {
  ye ? ye.emit(e, ...t) : Qn || $t.push({ event: e, args: t });
}
function yo(e, t) {
  var n, o;
  ye = e, ye ? (ye.enabled = !0, $t.forEach(({ event: s, args: r }) => ye.emit(s, ...r)), $t = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((o = (n = window.navigator) == null ? void 0 : n.userAgent) != null && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    yo(r, t);
  }), setTimeout(() => {
    ye || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Qn = !0, $t = []);
  }, 3e3)) : (Qn = !0, $t = []);
}
function Li(e, t) {
  Jt("app:init", e, t, {
    Fragment: be,
    Text: Yt,
    Comment: xe,
    Static: fn
  });
}
function Ui(e) {
  Jt("app:unmount", e);
}
const Ki = /* @__PURE__ */ Oo(
  "component:added"
  /* COMPONENT_ADDED */
), Qs = /* @__PURE__ */ Oo(
  "component:updated"
  /* COMPONENT_UPDATED */
), Bi = /* @__PURE__ */ Oo(
  "component:removed"
  /* COMPONENT_REMOVED */
), Wi = (e) => {
  ye && typeof ye.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !ye.cleanupBuffer(e) && Bi(e);
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Oo(e) {
  return (t) => {
    Jt(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const ki = /* @__PURE__ */ er(
  "perf:start"
  /* PERFORMANCE_START */
), qi = /* @__PURE__ */ er(
  "perf:end"
  /* PERFORMANCE_END */
);
function er(e) {
  return (t, n, o) => {
    Jt(e, t.appContext.app, t.uid, t, n, o);
  };
}
function Gi(e, t, n) {
  Jt(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let de = null, tr = null;
function bn(e) {
  const t = de;
  return de = e, tr = e && e.type.__scopeId || null, t;
}
function Ji(e, t = de, n) {
  if (!t || e._n)
    return e;
  const o = (...s) => {
    o._d && ns(-1);
    const r = bn(t);
    let i;
    try {
      i = e(...s);
    } finally {
      bn(r), o._d && ns(1);
    }
    return process.env.NODE_ENV !== "production" && Qs(t), i;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
function nr(e) {
  jr(e) && y("Do not use built-in directive ids as custom directive id: " + e);
}
function nt(e, t, n, o) {
  const s = e.dirs, r = t && t.dirs;
  for (let i = 0; i < s.length; i++) {
    const l = s[i];
    r && (l.oldValue = r[i].value);
    let u = l.dir[o];
    u && (De(), Fe(u, n, 8, [
      e.el,
      l,
      e,
      t
    ]), we());
  }
}
const Yi = Symbol("_vte"), zi = (e) => e.__isTeleport;
function xo(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, xo(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function or(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Xi = /* @__PURE__ */ new WeakSet();
function Rt(e, t, n, o, s = !1) {
  if (T(e)) {
    e.forEach(
      (V, A) => Rt(
        V,
        t && (T(t) ? t[A] : t),
        n,
        o,
        s
      )
    );
    return;
  }
  if (Ft(o) && !s) {
    o.shapeFlag & 512 && o.type.__asyncResolved && o.component.subTree.component && Rt(e, t, n, o.component.subTree);
    return;
  }
  const r = o.shapeFlag & 4 ? $o(o.component) : o.el, i = s ? null : r, { i: l, r: u } = e;
  if (process.env.NODE_ENV !== "production" && !l) {
    y(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const d = t && t.r, p = l.refs === K ? l.refs = {} : l.refs, a = l.setupState, g = M(a), D = a === K ? () => !1 : (V) => process.env.NODE_ENV !== "production" && (j(g, V) && !z(g[V]) && y(
    `Template ref "${V}" used on a non-ref value. It will not work in the production build.`
  ), Xi.has(g[V])) ? !1 : j(g, V);
  if (d != null && d !== u && (q(d) ? (p[d] = null, D(d) && (a[d] = null)) : z(d) && (d.value = null)), $(u))
    yt(u, l, 12, [i, p]);
  else {
    const V = q(u), A = z(u);
    if (V || A) {
      const ee = () => {
        if (e.f) {
          const W = V ? D(u) ? a[u] : p[u] : u.value;
          s ? T(W) && fo(W, r) : T(W) ? W.includes(r) || W.push(r) : V ? (p[u] = [r], D(u) && (a[u] = p[u])) : (u.value = [r], e.k && (p[e.k] = u.value));
        } else V ? (p[u] = i, D(u) && (a[u] = i)) : A ? (u.value = i, e.k && (p[e.k] = i)) : process.env.NODE_ENV !== "production" && y("Invalid template ref type:", u, `(${typeof u})`);
      };
      i ? (ee.id = -1, me(ee, n)) : ee();
    } else process.env.NODE_ENV !== "production" && y("Invalid template ref type:", u, `(${typeof u})`);
  }
}
qt().requestIdleCallback;
qt().cancelIdleCallback;
const Ft = (e) => !!e.type.__asyncLoader, Do = (e) => e.type.__isKeepAlive;
function Zi(e, t) {
  sr(e, "a", t);
}
function Qi(e, t) {
  sr(e, "da", t);
}
function sr(e, t, n = Q) {
  const o = e.__wdc || (e.__wdc = () => {
    let s = n;
    for (; s; ) {
      if (s.isDeactivated)
        return;
      s = s.parent;
    }
    return e();
  });
  if ($n(t, o, n), n) {
    let s = n.parent;
    for (; s && s.parent; )
      Do(s.parent.vnode) && el(o, t, n, s), s = s.parent;
  }
}
function el(e, t, n, o) {
  const s = $n(
    t,
    e,
    o,
    !0
    /* prepend */
  );
  rr(() => {
    fo(o[t], s);
  }, n);
}
function $n(e, t, n = Q, o = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...i) => {
      De();
      const l = zt(n), u = Fe(t, n, e, i);
      return l(), we(), u;
    });
    return o ? s.unshift(r) : s.push(r), r;
  } else if (process.env.NODE_ENV !== "production") {
    const s = st(bo[e].replace(/ hook$/, ""));
    y(
      `${s} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const We = (e) => (t, n = Q) => {
  (!Wt || e === "sp") && $n(e, (...o) => t(...o), n);
}, tl = We("bm"), nl = We("m"), ol = We(
  "bu"
), sl = We("u"), rl = We(
  "bum"
), rr = We("um"), il = We(
  "sp"
), ll = We("rtg"), cl = We("rtc");
function fl(e, t = Q) {
  $n("ec", e, t);
}
const ul = "components";
function al(e, t) {
  return dl(ul, e, !0, t) || e;
}
const pl = Symbol.for("v-ndc");
function dl(e, t, n = !0, o = !1) {
  const s = de || Q;
  if (s) {
    const r = s.type;
    {
      const l = Io(
        r,
        !1
      );
      if (l && (l === t || l === ie(t) || l === pt(ie(t))))
        return r;
    }
    const i = (
      // local registration
      // check instance[type] first which is resolved for options API
      Wo(s[e] || r[e], t) || // global registration
      Wo(s.appContext[e], t)
    );
    return !i && o ? r : (process.env.NODE_ENV !== "production" && n && !i && y(`Failed to resolve ${e.slice(0, -1)}: ${t}
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`), i);
  } else process.env.NODE_ENV !== "production" && y(
    `resolve${pt(e.slice(0, -1))} can only be used in render() or setup().`
  );
}
function Wo(e, t) {
  return e && (e[t] || e[ie(t)] || e[pt(ie(t))]);
}
function hl(e, t, n, o) {
  let s;
  const r = n, i = T(e);
  if (i || q(e)) {
    const l = i && ft(e);
    let u = !1, d = !1;
    l && (u = !he(e), d = Ke(e), e = Vn(e)), s = new Array(e.length);
    for (let p = 0, a = e.length; p < a; p++)
      s[p] = t(
        u ? d ? mn(se(e[p])) : se(e[p]) : e[p],
        p,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    process.env.NODE_ENV !== "production" && !Number.isInteger(e) && y(`The v-for range expect an integer value but got ${e}.`), s = new Array(e);
    for (let l = 0; l < e; l++)
      s[l] = t(l + 1, l, void 0, r);
  } else if (B(e))
    if (e[Symbol.iterator])
      s = Array.from(
        e,
        (l, u) => t(l, u, void 0, r)
      );
    else {
      const l = Object.keys(e);
      s = new Array(l.length);
      for (let u = 0, d = l.length; u < d; u++) {
        const p = l[u];
        s[u] = t(e[p], p, u, r);
      }
    }
  else
    s = [];
  return s;
}
const eo = (e) => e ? Sr(e) ? $o(e) : eo(e.parent) : null, at = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ X(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? Me(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? Me(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? Me(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? Me(e.refs) : e.refs,
    $parent: (e) => eo(e.parent),
    $root: (e) => eo(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => cr(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Tn(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Mi.bind(e.proxy)),
    $watch: (e) => Gl.bind(e)
  })
), wo = (e) => e === "_" || e === "$", Wn = (e, t) => e !== K && !e.__isScriptSetup && j(e, t), ir = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: o, data: s, props: r, accessCache: i, type: l, appContext: u } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let d;
    if (t[0] !== "$") {
      const D = i[t];
      if (D !== void 0)
        switch (D) {
          case 1:
            return o[t];
          case 2:
            return s[t];
          case 4:
            return n[t];
          case 3:
            return r[t];
        }
      else {
        if (Wn(o, t))
          return i[t] = 1, o[t];
        if (s !== K && j(s, t))
          return i[t] = 2, s[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (d = e.propsOptions[0]) && j(d, t)
        )
          return i[t] = 3, r[t];
        if (n !== K && j(n, t))
          return i[t] = 4, n[t];
        to && (i[t] = 0);
      }
    }
    const p = at[t];
    let a, g;
    if (p)
      return t === "$attrs" ? (J(e.attrs, "get", ""), process.env.NODE_ENV !== "production" && On()) : process.env.NODE_ENV !== "production" && t === "$slots" && J(e, "get", t), p(e);
    if (
      // css module (injected by vue-loader)
      (a = l.__cssModules) && (a = a[t])
    )
      return a;
    if (n !== K && j(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      g = u.config.globalProperties, j(g, t)
    )
      return g[t];
    process.env.NODE_ENV !== "production" && de && (!q(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (s !== K && wo(t[0]) && j(s, t) ? y(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === de && y(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: s, ctx: r } = e;
    return Wn(s, t) ? (s[t] = n, !0) : process.env.NODE_ENV !== "production" && s.__isScriptSetup && j(s, t) ? (y(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== K && j(o, t) ? (o[t] = n, !0) : j(e.props, t) ? (process.env.NODE_ENV !== "production" && y(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && y(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(r, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: s, propsOptions: r }
  }, i) {
    let l;
    return !!n[i] || e !== K && j(e, i) || Wn(t, i) || (l = r[0]) && j(l, i) || j(o, i) || j(at, i) || j(s.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : j(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (ir.ownKeys = (e) => (y(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function gl(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(at).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => at[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: Y
    });
  }), t;
}
function ml(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((o) => {
    Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[o],
      set: Y
    });
  });
}
function _l(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(M(n)).forEach((o) => {
    if (!n.__isScriptSetup) {
      if (wo(o[0])) {
        y(
          `setup() return property ${JSON.stringify(
            o
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, o, {
        enumerable: !0,
        configurable: !0,
        get: () => n[o],
        set: Y
      });
    }
  });
}
function ko(e) {
  return T(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function vl() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? y(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let to = !0;
function El(e) {
  const t = cr(e), n = e.proxy, o = e.ctx;
  to = !1, t.beforeCreate && qo(t.beforeCreate, e, "bc");
  const {
    // state
    data: s,
    computed: r,
    methods: i,
    watch: l,
    provide: u,
    inject: d,
    // lifecycle
    created: p,
    beforeMount: a,
    mounted: g,
    beforeUpdate: D,
    updated: V,
    activated: A,
    deactivated: ee,
    beforeDestroy: W,
    beforeUnmount: G,
    destroyed: L,
    unmounted: ge,
    render: C,
    renderTracked: Z,
    renderTriggered: ve,
    errorCaptured: te,
    serverPrefetch: le,
    // public API
    expose: je,
    inheritAttrs: ke,
    // assets
    components: Ee,
    directives: Xt,
    filters: Ao
  } = t, qe = process.env.NODE_ENV !== "production" ? vl() : null;
  if (process.env.NODE_ENV !== "production") {
    const [R] = e.propsOptions;
    if (R)
      for (const P in R)
        qe("Props", P);
  }
  if (d && bl(d, o, qe), i)
    for (const R in i) {
      const P = i[R];
      $(P) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(o, R, {
        value: P.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[R] = P.bind(n), process.env.NODE_ENV !== "production" && qe("Methods", R)) : process.env.NODE_ENV !== "production" && y(
        `Method "${R}" has type "${typeof P}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (s) {
    process.env.NODE_ENV !== "production" && !$(s) && y(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const R = s.call(n, n);
    if (process.env.NODE_ENV !== "production" && uo(R) && y(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !B(R))
      process.env.NODE_ENV !== "production" && y("data() should return an object.");
    else if (e.data = Eo(R), process.env.NODE_ENV !== "production")
      for (const P in R)
        qe("Data", P), wo(P[0]) || Object.defineProperty(o, P, {
          configurable: !0,
          enumerable: !0,
          get: () => R[P],
          set: Y
        });
  }
  if (to = !0, r)
    for (const R in r) {
      const P = r[R], Ve = $(P) ? P.bind(n, n) : $(P.get) ? P.get.bind(n, n) : Y;
      process.env.NODE_ENV !== "production" && Ve === Y && y(`Computed property "${R}" has no getter.`);
      const Pn = !$(P) && $(P.set) ? P.set.bind(n) : process.env.NODE_ENV !== "production" ? () => {
        y(
          `Write operation failed: computed property "${R}" is readonly.`
        );
      } : Y, Ot = vc({
        get: Ve,
        set: Pn
      });
      Object.defineProperty(o, R, {
        enumerable: !0,
        configurable: !0,
        get: () => Ot.value,
        set: (ht) => Ot.value = ht
      }), process.env.NODE_ENV !== "production" && qe("Computed", R);
    }
  if (l)
    for (const R in l)
      lr(l[R], o, n, R);
  if (u) {
    const R = $(u) ? u.call(n) : u;
    Reflect.ownKeys(R).forEach((P) => {
      wl(P, R[P]);
    });
  }
  p && qo(p, e, "c");
  function ce(R, P) {
    T(P) ? P.forEach((Ve) => R(Ve.bind(n))) : P && R(P.bind(n));
  }
  if (ce(tl, a), ce(nl, g), ce(ol, D), ce(sl, V), ce(Zi, A), ce(Qi, ee), ce(fl, te), ce(cl, Z), ce(ll, ve), ce(rl, G), ce(rr, ge), ce(il, le), T(je))
    if (je.length) {
      const R = e.exposed || (e.exposed = {});
      je.forEach((P) => {
        Object.defineProperty(R, P, {
          get: () => n[P],
          set: (Ve) => n[P] = Ve,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  C && e.render === Y && (e.render = C), ke != null && (e.inheritAttrs = ke), Ee && (e.components = Ee), Xt && (e.directives = Xt), le && or(e);
}
function bl(e, t, n = Y) {
  T(e) && (e = no(e));
  for (const o in e) {
    const s = e[o];
    let r;
    B(s) ? "default" in s ? r = ln(
      s.from || o,
      s.default,
      !0
    ) : r = ln(s.from || o) : r = ln(s), z(r) ? Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (i) => r.value = i
    }) : t[o] = r, process.env.NODE_ENV !== "production" && n("Inject", o);
  }
}
function qo(e, t, n) {
  Fe(
    T(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function lr(e, t, n, o) {
  let s = o.includes(".") ? br(n, o) : () => n[o];
  if (q(e)) {
    const r = t[e];
    $(r) ? qn(s, r) : process.env.NODE_ENV !== "production" && y(`Invalid watch handler specified by key "${e}"`, r);
  } else if ($(e))
    qn(s, e.bind(n));
  else if (B(e))
    if (T(e))
      e.forEach((r) => lr(r, t, n, o));
    else {
      const r = $(e.handler) ? e.handler.bind(n) : t[e.handler];
      $(r) ? qn(s, r, e) : process.env.NODE_ENV !== "production" && y(`Invalid watch handler specified by key "${e.handler}"`, r);
    }
  else process.env.NODE_ENV !== "production" && y(`Invalid watch option: "${o}"`, e);
}
function cr(e) {
  const t = e.type, { mixins: n, extends: o } = t, {
    mixins: s,
    optionsCache: r,
    config: { optionMergeStrategies: i }
  } = e.appContext, l = r.get(t);
  let u;
  return l ? u = l : !s.length && !n && !o ? u = t : (u = {}, s.length && s.forEach(
    (d) => Nn(u, d, i, !0)
  ), Nn(u, t, i)), B(t) && r.set(t, u), u;
}
function Nn(e, t, n, o = !1) {
  const { mixins: s, extends: r } = t;
  r && Nn(e, r, n, !0), s && s.forEach(
    (i) => Nn(e, i, n, !0)
  );
  for (const i in t)
    if (o && i === "expose")
      process.env.NODE_ENV !== "production" && y(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = Nl[i] || n && n[i];
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const Nl = {
  data: Go,
  props: Jo,
  emits: Jo,
  // objects
  methods: It,
  computed: It,
  // lifecycle
  beforeCreate: oe,
  created: oe,
  beforeMount: oe,
  mounted: oe,
  beforeUpdate: oe,
  updated: oe,
  beforeDestroy: oe,
  beforeUnmount: oe,
  destroyed: oe,
  unmounted: oe,
  activated: oe,
  deactivated: oe,
  errorCaptured: oe,
  serverPrefetch: oe,
  // assets
  components: It,
  directives: It,
  // watch
  watch: Ol,
  // provide / inject
  provide: Go,
  inject: yl
};
function Go(e, t) {
  return t ? e ? function() {
    return X(
      $(e) ? e.call(this, this) : e,
      $(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function yl(e, t) {
  return It(no(e), no(t));
}
function no(e) {
  if (T(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function oe(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function It(e, t) {
  return e ? X(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Jo(e, t) {
  return e ? T(e) && T(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : X(
    /* @__PURE__ */ Object.create(null),
    ko(e),
    ko(t ?? {})
  ) : t;
}
function Ol(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = X(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = oe(e[o], t[o]);
  return n;
}
function fr() {
  return {
    app: null,
    config: {
      isNativeTag: Rr,
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
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let xl = 0;
function Dl(e, t) {
  return function(o, s = null) {
    $(o) || (o = X({}, o)), s != null && !B(s) && (process.env.NODE_ENV !== "production" && y("root props passed to app.mount() must be an object."), s = null);
    const r = fr(), i = /* @__PURE__ */ new WeakSet(), l = [];
    let u = !1;
    const d = r.app = {
      _uid: xl++,
      _component: o,
      _props: s,
      _container: null,
      _context: r,
      _instance: null,
      version: is,
      get config() {
        return r.config;
      },
      set config(p) {
        process.env.NODE_ENV !== "production" && y(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(p, ...a) {
        return i.has(p) ? process.env.NODE_ENV !== "production" && y("Plugin has already been applied to target app.") : p && $(p.install) ? (i.add(p), p.install(d, ...a)) : $(p) ? (i.add(p), p(d, ...a)) : process.env.NODE_ENV !== "production" && y(
          'A plugin must either be a function or an object with an "install" function.'
        ), d;
      },
      mixin(p) {
        return r.mixins.includes(p) ? process.env.NODE_ENV !== "production" && y(
          "Mixin has already been applied to target app" + (p.name ? `: ${p.name}` : "")
        ) : r.mixins.push(p), d;
      },
      component(p, a) {
        return process.env.NODE_ENV !== "production" && lo(p, r.config), a ? (process.env.NODE_ENV !== "production" && r.components[p] && y(`Component "${p}" has already been registered in target app.`), r.components[p] = a, d) : r.components[p];
      },
      directive(p, a) {
        return process.env.NODE_ENV !== "production" && nr(p), a ? (process.env.NODE_ENV !== "production" && r.directives[p] && y(`Directive "${p}" has already been registered in target app.`), r.directives[p] = a, d) : r.directives[p];
      },
      mount(p, a, g) {
        if (u)
          process.env.NODE_ENV !== "production" && y(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          process.env.NODE_ENV !== "production" && p.__vue_app__ && y(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const D = d._ceVNode || Ze(o, s);
          return D.appContext = r, g === !0 ? g = "svg" : g === !1 && (g = void 0), process.env.NODE_ENV !== "production" && (r.reload = () => {
            const V = et(D);
            V.el = null, e(V, p, g);
          }), e(D, p, g), u = !0, d._container = p, p.__vue_app__ = d, process.env.NODE_ENV !== "production" && (d._instance = D.component, Li(d, is)), $o(D.component);
        }
      },
      onUnmount(p) {
        process.env.NODE_ENV !== "production" && typeof p != "function" && y(
          `Expected function as first argument to app.onUnmount(), but got ${typeof p}`
        ), l.push(p);
      },
      unmount() {
        u ? (Fe(
          l,
          d._instance,
          16
        ), e(null, d._container), process.env.NODE_ENV !== "production" && (d._instance = null, Ui(d)), delete d._container.__vue_app__) : process.env.NODE_ENV !== "production" && y("Cannot unmount an app that is not mounted.");
      },
      provide(p, a) {
        return process.env.NODE_ENV !== "production" && p in r.provides && (j(r.provides, p) ? y(
          `App already provides property with key "${String(p)}". It will be overwritten with the new value.`
        ) : y(
          `App already provides property with key "${String(p)}" inherited from its parent element. It will be overwritten with the new value.`
        )), r.provides[p] = a, d;
      },
      runWithContext(p) {
        const a = Nt;
        Nt = d;
        try {
          return p();
        } finally {
          Nt = a;
        }
      }
    };
    return d;
  };
}
let Nt = null;
function wl(e, t) {
  if (!Q)
    process.env.NODE_ENV !== "production" && y("provide() can only be used inside setup().");
  else {
    let n = Q.provides;
    const o = Q.parent && Q.parent.provides;
    o === n && (n = Q.provides = Object.create(o)), n[e] = t;
  }
}
function ln(e, t, n = !1) {
  const o = Vr();
  if (o || Nt) {
    let s = Nt ? Nt._context.provides : o ? o.parent == null || o.ce ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : void 0;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && $(t) ? t.call(o && o.proxy) : t;
    process.env.NODE_ENV !== "production" && y(`injection "${String(e)}" not found.`);
  } else process.env.NODE_ENV !== "production" && y("inject() can only be used inside setup() or functional components.");
}
const ur = {}, ar = () => Object.create(ur), pr = (e) => Object.getPrototypeOf(e) === ur;
function Vl(e, t, n, o = !1) {
  const s = {}, r = ar();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), dr(e, t, s, r);
  for (const i in e.propsOptions[0])
    i in s || (s[i] = void 0);
  process.env.NODE_ENV !== "production" && gr(t || {}, s, e), n ? e.props = o ? s : bi(s) : e.type.props ? e.props = s : e.props = r, e.attrs = r;
}
function Sl(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function Cl(e, t, n, o) {
  const {
    props: s,
    attrs: r,
    vnode: { patchFlag: i }
  } = e, l = M(s), [u] = e.propsOptions;
  let d = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(process.env.NODE_ENV !== "production" && Sl(e)) && (o || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const p = e.vnode.dynamicProps;
      for (let a = 0; a < p.length; a++) {
        let g = p[a];
        if (In(e.emitsOptions, g))
          continue;
        const D = t[g];
        if (u)
          if (j(r, g))
            D !== r[g] && (r[g] = D, d = !0);
          else {
            const V = ie(g);
            s[V] = oo(
              u,
              l,
              V,
              D,
              e,
              !1
            );
          }
        else
          D !== r[g] && (r[g] = D, d = !0);
      }
    }
  } else {
    dr(e, t, s, r) && (d = !0);
    let p;
    for (const a in l)
      (!t || // for camelCase
      !j(t, a) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((p = Qe(a)) === a || !j(t, p))) && (u ? n && // for camelCase
      (n[a] !== void 0 || // for kebab-case
      n[p] !== void 0) && (s[a] = oo(
        u,
        l,
        a,
        void 0,
        e,
        !0
      )) : delete s[a]);
    if (r !== l)
      for (const a in r)
        (!t || !j(t, a)) && (delete r[a], d = !0);
  }
  d && Ae(e.attrs, "set", ""), process.env.NODE_ENV !== "production" && gr(t || {}, s, e);
}
function dr(e, t, n, o) {
  const [s, r] = e.propsOptions;
  let i = !1, l;
  if (t)
    for (let u in t) {
      if (At(u))
        continue;
      const d = t[u];
      let p;
      s && j(s, p = ie(u)) ? !r || !r.includes(p) ? n[p] = d : (l || (l = {}))[p] = d : In(e.emitsOptions, u) || (!(u in o) || d !== o[u]) && (o[u] = d, i = !0);
    }
  if (r) {
    const u = M(n), d = l || K;
    for (let p = 0; p < r.length; p++) {
      const a = r[p];
      n[a] = oo(
        s,
        u,
        a,
        d[a],
        e,
        !j(d, a)
      );
    }
  }
  return i;
}
function oo(e, t, n, o, s, r) {
  const i = e[n];
  if (i != null) {
    const l = j(i, "default");
    if (l && o === void 0) {
      const u = i.default;
      if (i.type !== Function && !i.skipFactory && $(u)) {
        const { propsDefaults: d } = s;
        if (n in d)
          o = d[n];
        else {
          const p = zt(s);
          o = d[n] = u.call(
            null,
            t
          ), p();
        }
      } else
        o = u;
      s.ce && s.ce._setProp(n, o);
    }
    i[
      0
      /* shouldCast */
    ] && (r && !l ? o = !1 : i[
      1
      /* shouldCastTrue */
    ] && (o === "" || o === Qe(n)) && (o = !0));
  }
  return o;
}
const Tl = /* @__PURE__ */ new WeakMap();
function hr(e, t, n = !1) {
  const o = n ? Tl : t.propsCache, s = o.get(e);
  if (s)
    return s;
  const r = e.props, i = {}, l = [];
  let u = !1;
  if (!$(e)) {
    const p = (a) => {
      u = !0;
      const [g, D] = hr(a, t, !0);
      X(i, g), D && l.push(...D);
    };
    !n && t.mixins.length && t.mixins.forEach(p), e.extends && p(e.extends), e.mixins && e.mixins.forEach(p);
  }
  if (!r && !u)
    return B(e) && o.set(e, Et), Et;
  if (T(r))
    for (let p = 0; p < r.length; p++) {
      process.env.NODE_ENV !== "production" && !q(r[p]) && y("props must be strings when using array syntax.", r[p]);
      const a = ie(r[p]);
      Yo(a) && (i[a] = K);
    }
  else if (r) {
    process.env.NODE_ENV !== "production" && !B(r) && y("invalid props options", r);
    for (const p in r) {
      const a = ie(p);
      if (Yo(a)) {
        const g = r[p], D = i[a] = T(g) || $(g) ? { type: g } : X({}, g), V = D.type;
        let A = !1, ee = !0;
        if (T(V))
          for (let W = 0; W < V.length; ++W) {
            const G = V[W], L = $(G) && G.name;
            if (L === "Boolean") {
              A = !0;
              break;
            } else L === "String" && (ee = !1);
          }
        else
          A = $(V) && V.name === "Boolean";
        D[
          0
          /* shouldCast */
        ] = A, D[
          1
          /* shouldCastTrue */
        ] = ee, (A || j(D, "default")) && l.push(a);
      }
    }
  }
  const d = [i, l];
  return B(e) && o.set(e, d), d;
}
function Yo(e) {
  return e[0] !== "$" && !At(e) ? !0 : (process.env.NODE_ENV !== "production" && y(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function $l(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function gr(e, t, n) {
  const o = M(t), s = n.propsOptions[0], r = Object.keys(e).map((i) => ie(i));
  for (const i in s) {
    let l = s[i];
    l != null && Il(
      i,
      o[i],
      l,
      process.env.NODE_ENV !== "production" ? Me(o) : o,
      !r.includes(i)
    );
  }
}
function Il(e, t, n, o, s) {
  const { type: r, required: i, validator: l, skipCheck: u } = n;
  if (i && s) {
    y('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !i)) {
    if (r != null && r !== !0 && !u) {
      let d = !1;
      const p = T(r) ? r : [r], a = [];
      for (let g = 0; g < p.length && !d; g++) {
        const { valid: D, expectedType: V } = Ml(t, p[g]);
        a.push(V || ""), d = D;
      }
      if (!d) {
        y(Pl(e, t, a));
        return;
      }
    }
    l && !l(t, o) && y('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const Al = /* @__PURE__ */ Be(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function Ml(e, t) {
  let n;
  const o = $l(t);
  if (o === "null")
    n = e === null;
  else if (Al(o)) {
    const s = typeof e;
    n = s === o.toLowerCase(), !n && s === "object" && (n = e instanceof t);
  } else o === "Object" ? n = B(e) : o === "Array" ? n = T(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function Pl(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(pt).join(" | ")}`;
  const s = n[0], r = ao(t), i = zo(t, s), l = zo(t, r);
  return n.length === 1 && Xo(s) && !Rl(s, r) && (o += ` with value ${i}`), o += `, got ${r} `, Xo(r) && (o += `with value ${l}.`), o;
}
function zo(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function Xo(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function Rl(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const Vo = (e) => e === "_" || e === "__" || e === "_ctx" || e === "$stable", So = (e) => T(e) ? e.map(Ne) : [Ne(e)], Fl = (e, t, n) => {
  if (t._n)
    return t;
  const o = Ji((...s) => (process.env.NODE_ENV !== "production" && Q && !(n === null && de) && !(n && n.root !== Q.root) && y(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), So(t(...s))), n);
  return o._c = !1, o;
}, mr = (e, t, n) => {
  const o = e._ctx;
  for (const s in e) {
    if (Vo(s)) continue;
    const r = e[s];
    if ($(r))
      t[s] = Fl(s, r, o);
    else if (r != null) {
      process.env.NODE_ENV !== "production" && y(
        `Non-function value encountered for slot "${s}". Prefer function slots for better performance.`
      );
      const i = So(r);
      t[s] = () => i;
    }
  }
}, _r = (e, t) => {
  process.env.NODE_ENV !== "production" && !Do(e.vnode) && y(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = So(t);
  e.slots.default = () => n;
}, so = (e, t, n) => {
  for (const o in t)
    (n || !Vo(o)) && (e[o] = t[o]);
}, jl = (e, t, n) => {
  const o = e.slots = ar();
  if (e.vnode.shapeFlag & 32) {
    const s = t.__;
    s && Ht(o, "__", s, !0);
    const r = t._;
    r ? (so(o, t, n), n && Ht(o, "_", r, !0)) : mr(t, o);
  } else t && _r(e, t);
}, Hl = (e, t, n) => {
  const { vnode: o, slots: s } = e;
  let r = !0, i = K;
  if (o.shapeFlag & 32) {
    const l = t._;
    l ? process.env.NODE_ENV !== "production" && Pe ? (so(s, t, n), Ae(e, "set", "$slots")) : n && l === 1 ? r = !1 : so(s, t, n) : (r = !t.$stable, mr(t, s)), i = t;
  } else t && (_r(e, t), i = { default: 1 });
  if (r)
    for (const l in s)
      !Vo(l) && i[l] == null && delete s[l];
};
let Ct, Xe;
function mt(e, t) {
  e.appContext.config.performance && yn() && Xe.mark(`vue-${t}-${e.uid}`), process.env.NODE_ENV !== "production" && ki(e, t, yn() ? Xe.now() : Date.now());
}
function _t(e, t) {
  if (e.appContext.config.performance && yn()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end";
    Xe.mark(o), Xe.measure(
      `<${Mn(e, e.type)}> ${t}`,
      n,
      o
    ), Xe.clearMarks(n), Xe.clearMarks(o);
  }
  process.env.NODE_ENV !== "production" && qi(e, t, yn() ? Xe.now() : Date.now());
}
function yn() {
  return Ct !== void 0 || (typeof window < "u" && window.performance ? (Ct = !0, Xe = window.performance) : Ct = !1), Ct;
}
function Ll() {
  const e = [];
  if (process.env.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const me = ec;
function Ul(e) {
  return Kl(e);
}
function Kl(e, t) {
  Ll();
  const n = qt();
  n.__VUE__ = !0, process.env.NODE_ENV !== "production" && yo(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: o,
    remove: s,
    patchProp: r,
    createElement: i,
    createText: l,
    createComment: u,
    setText: d,
    setElementText: p,
    parentNode: a,
    nextSibling: g,
    setScopeId: D = Y,
    insertStaticContent: V
  } = e, A = (c, f, h, v = null, m = null, _ = null, O = void 0, N = null, b = process.env.NODE_ENV !== "production" && Pe ? !1 : !!f.dynamicChildren) => {
    if (c === f)
      return;
    c && !Tt(c, f) && (v = Zt(c), Ge(c, m, _, !0), c = null), f.patchFlag === -2 && (b = !1, f.dynamicChildren = null);
    const { type: E, ref: S, shapeFlag: x } = f;
    switch (E) {
      case Yt:
        ee(c, f, h, v);
        break;
      case xe:
        W(c, f, h, v);
        break;
      case fn:
        c == null ? G(f, h, v, O) : process.env.NODE_ENV !== "production" && L(c, f, h, O);
        break;
      case be:
        Xt(
          c,
          f,
          h,
          v,
          m,
          _,
          O,
          N,
          b
        );
        break;
      default:
        x & 1 ? Z(
          c,
          f,
          h,
          v,
          m,
          _,
          O,
          N,
          b
        ) : x & 6 ? Ao(
          c,
          f,
          h,
          v,
          m,
          _,
          O,
          N,
          b
        ) : x & 64 || x & 128 ? E.process(
          c,
          f,
          h,
          v,
          m,
          _,
          O,
          N,
          b,
          Dt
        ) : process.env.NODE_ENV !== "production" && y("Invalid VNode type:", E, `(${typeof E})`);
    }
    S != null && m ? Rt(S, c && c.ref, _, f || c, !f) : S == null && c && c.ref != null && Rt(c.ref, null, _, c, !0);
  }, ee = (c, f, h, v) => {
    if (c == null)
      o(
        f.el = l(f.children),
        h,
        v
      );
    else {
      const m = f.el = c.el;
      f.children !== c.children && d(m, f.children);
    }
  }, W = (c, f, h, v) => {
    c == null ? o(
      f.el = u(f.children || ""),
      h,
      v
    ) : f.el = c.el;
  }, G = (c, f, h, v) => {
    [c.el, c.anchor] = V(
      c.children,
      f,
      h,
      v,
      c.el,
      c.anchor
    );
  }, L = (c, f, h, v) => {
    if (f.children !== c.children) {
      const m = g(c.anchor);
      C(c), [f.el, f.anchor] = V(
        f.children,
        h,
        m,
        v
      );
    } else
      f.el = c.el, f.anchor = c.anchor;
  }, ge = ({ el: c, anchor: f }, h, v) => {
    let m;
    for (; c && c !== f; )
      m = g(c), o(c, h, v), c = m;
    o(f, h, v);
  }, C = ({ el: c, anchor: f }) => {
    let h;
    for (; c && c !== f; )
      h = g(c), s(c), c = h;
    s(f);
  }, Z = (c, f, h, v, m, _, O, N, b) => {
    f.type === "svg" ? O = "svg" : f.type === "math" && (O = "mathml"), c == null ? ve(
      f,
      h,
      v,
      m,
      _,
      O,
      N,
      b
    ) : je(
      c,
      f,
      m,
      _,
      O,
      N,
      b
    );
  }, ve = (c, f, h, v, m, _, O, N) => {
    let b, E;
    const { props: S, shapeFlag: x, transition: w, dirs: I } = c;
    if (b = c.el = i(
      c.type,
      _,
      S && S.is,
      S
    ), x & 8 ? p(b, c.children) : x & 16 && le(
      c.children,
      b,
      null,
      v,
      m,
      kn(c, _),
      O,
      N
    ), I && nt(c, null, v, "created"), te(b, c, c.scopeId, O, v), S) {
      for (const k in S)
        k !== "value" && !At(k) && r(b, k, null, S[k], _, v);
      "value" in S && r(b, "value", null, S.value, _), (E = S.onVnodeBeforeMount) && $e(E, v, c);
    }
    process.env.NODE_ENV !== "production" && (Ht(b, "__vnode", c, !0), Ht(b, "__vueParentComponent", v, !0)), I && nt(c, null, v, "beforeMount");
    const F = Bl(m, w);
    F && w.beforeEnter(b), o(b, f, h), ((E = S && S.onVnodeMounted) || F || I) && me(() => {
      E && $e(E, v, c), F && w.enter(b), I && nt(c, null, v, "mounted");
    }, m);
  }, te = (c, f, h, v, m) => {
    if (h && D(c, h), v)
      for (let _ = 0; _ < v.length; _++)
        D(c, v[_]);
    if (m) {
      let _ = m.subTree;
      if (process.env.NODE_ENV !== "production" && _.patchFlag > 0 && _.patchFlag & 2048 && (_ = Co(_.children) || _), f === _ || Or(_.type) && (_.ssContent === f || _.ssFallback === f)) {
        const O = m.vnode;
        te(
          c,
          O,
          O.scopeId,
          O.slotScopeIds,
          m.parent
        );
      }
    }
  }, le = (c, f, h, v, m, _, O, N, b = 0) => {
    for (let E = b; E < c.length; E++) {
      const S = c[E] = N ? Ye(c[E]) : Ne(c[E]);
      A(
        null,
        S,
        f,
        h,
        v,
        m,
        _,
        O,
        N
      );
    }
  }, je = (c, f, h, v, m, _, O) => {
    const N = f.el = c.el;
    process.env.NODE_ENV !== "production" && (N.__vnode = f);
    let { patchFlag: b, dynamicChildren: E, dirs: S } = f;
    b |= c.patchFlag & 16;
    const x = c.props || K, w = f.props || K;
    let I;
    if (h && ot(h, !1), (I = w.onVnodeBeforeUpdate) && $e(I, h, f, c), S && nt(f, c, h, "beforeUpdate"), h && ot(h, !0), process.env.NODE_ENV !== "production" && Pe && (b = 0, O = !1, E = null), (x.innerHTML && w.innerHTML == null || x.textContent && w.textContent == null) && p(N, ""), E ? (ke(
      c.dynamicChildren,
      E,
      N,
      h,
      v,
      kn(f, m),
      _
    ), process.env.NODE_ENV !== "production" && cn(c, f)) : O || Ve(
      c,
      f,
      N,
      null,
      h,
      v,
      kn(f, m),
      _,
      !1
    ), b > 0) {
      if (b & 16)
        Ee(N, x, w, h, m);
      else if (b & 2 && x.class !== w.class && r(N, "class", null, w.class, m), b & 4 && r(N, "style", x.style, w.style, m), b & 8) {
        const F = f.dynamicProps;
        for (let k = 0; k < F.length; k++) {
          const U = F[k], fe = x[U], ue = w[U];
          (ue !== fe || U === "value") && r(N, U, fe, ue, m, h);
        }
      }
      b & 1 && c.children !== f.children && p(N, f.children);
    } else !O && E == null && Ee(N, x, w, h, m);
    ((I = w.onVnodeUpdated) || S) && me(() => {
      I && $e(I, h, f, c), S && nt(f, c, h, "updated");
    }, v);
  }, ke = (c, f, h, v, m, _, O) => {
    for (let N = 0; N < f.length; N++) {
      const b = c[N], E = f[N], S = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        b.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (b.type === be || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Tt(b, E) || // - In the case of a component, it could contain anything.
        b.shapeFlag & 198) ? a(b.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          h
        )
      );
      A(
        b,
        E,
        S,
        null,
        v,
        m,
        _,
        O,
        !0
      );
    }
  }, Ee = (c, f, h, v, m) => {
    if (f !== h) {
      if (f !== K)
        for (const _ in f)
          !At(_) && !(_ in h) && r(
            c,
            _,
            f[_],
            null,
            m,
            v
          );
      for (const _ in h) {
        if (At(_)) continue;
        const O = h[_], N = f[_];
        O !== N && _ !== "value" && r(c, _, N, O, m, v);
      }
      "value" in h && r(c, "value", f.value, h.value, m);
    }
  }, Xt = (c, f, h, v, m, _, O, N, b) => {
    const E = f.el = c ? c.el : l(""), S = f.anchor = c ? c.anchor : l("");
    let { patchFlag: x, dynamicChildren: w, slotScopeIds: I } = f;
    process.env.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (Pe || x & 2048) && (x = 0, b = !1, w = null), I && (N = N ? N.concat(I) : I), c == null ? (o(E, h, v), o(S, h, v), le(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      f.children || [],
      h,
      S,
      m,
      _,
      O,
      N,
      b
    )) : x > 0 && x & 64 && w && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    c.dynamicChildren ? (ke(
      c.dynamicChildren,
      w,
      h,
      m,
      _,
      O,
      N
    ), process.env.NODE_ENV !== "production" ? cn(c, f) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (f.key != null || m && f === m.subTree) && cn(
        c,
        f,
        !0
        /* shallow */
      )
    )) : Ve(
      c,
      f,
      h,
      S,
      m,
      _,
      O,
      N,
      b
    );
  }, Ao = (c, f, h, v, m, _, O, N, b) => {
    f.slotScopeIds = N, c == null ? f.shapeFlag & 512 ? m.ctx.activate(
      f,
      h,
      v,
      O,
      b
    ) : qe(
      f,
      h,
      v,
      m,
      _,
      O,
      b
    ) : ce(c, f, b);
  }, qe = (c, f, h, v, m, _, O) => {
    const N = c.component = fc(
      c,
      v,
      m
    );
    if (process.env.NODE_ENV !== "production" && N.type.__hmrId && Ri(N), process.env.NODE_ENV !== "production" && (on(c), mt(N, "mount")), Do(c) && (N.ctx.renderer = Dt), process.env.NODE_ENV !== "production" && mt(N, "init"), ac(N, !1, O), process.env.NODE_ENV !== "production" && _t(N, "init"), process.env.NODE_ENV !== "production" && Pe && (c.el = null), N.asyncDep) {
      if (m && m.registerDep(N, R, O), !c.el) {
        const b = N.subTree = Ze(xe);
        W(null, b, f, h), c.placeholder = b.el;
      }
    } else
      R(
        N,
        c,
        f,
        h,
        m,
        _,
        O
      );
    process.env.NODE_ENV !== "production" && (sn(), _t(N, "mount"));
  }, ce = (c, f, h) => {
    const v = f.component = c.component;
    if (Zl(c, f, h))
      if (v.asyncDep && !v.asyncResolved) {
        process.env.NODE_ENV !== "production" && on(f), P(v, f, h), process.env.NODE_ENV !== "production" && sn();
        return;
      } else
        v.next = f, v.update();
    else
      f.el = c.el, v.vnode = f;
  }, R = (c, f, h, v, m, _, O) => {
    const N = () => {
      if (c.isMounted) {
        let { next: x, bu: w, u: I, parent: F, vnode: k } = c;
        {
          const Ce = vr(c);
          if (Ce) {
            x && (x.el = k.el, P(c, x, O)), Ce.asyncDep.then(() => {
              c.isUnmounted || N();
            });
            return;
          }
        }
        let U = x, fe;
        process.env.NODE_ENV !== "production" && on(x || c.vnode), ot(c, !1), x ? (x.el = k.el, P(c, x, O)) : x = k, w && Vt(w), (fe = x.props && x.props.onVnodeBeforeUpdate) && $e(fe, F, x, k), ot(c, !0), process.env.NODE_ENV !== "production" && mt(c, "render");
        const ue = Qo(c);
        process.env.NODE_ENV !== "production" && _t(c, "render");
        const Se = c.subTree;
        c.subTree = ue, process.env.NODE_ENV !== "production" && mt(c, "patch"), A(
          Se,
          ue,
          // parent may have changed if it's in a teleport
          a(Se.el),
          // anchor may have changed if it's in a fragment
          Zt(Se),
          c,
          m,
          _
        ), process.env.NODE_ENV !== "production" && _t(c, "patch"), x.el = ue.el, U === null && Ql(c, ue.el), I && me(I, m), (fe = x.props && x.props.onVnodeUpdated) && me(
          () => $e(fe, F, x, k),
          m
        ), process.env.NODE_ENV !== "production" && Qs(c), process.env.NODE_ENV !== "production" && sn();
      } else {
        let x;
        const { el: w, props: I } = f, { bm: F, m: k, parent: U, root: fe, type: ue } = c, Se = Ft(f);
        ot(c, !1), F && Vt(F), !Se && (x = I && I.onVnodeBeforeMount) && $e(x, U, f), ot(c, !0);
        {
          fe.ce && // @ts-expect-error _def is private
          fe.ce._def.shadowRoot !== !1 && fe.ce._injectChildStyle(ue), process.env.NODE_ENV !== "production" && mt(c, "render");
          const Ce = c.subTree = Qo(c);
          process.env.NODE_ENV !== "production" && _t(c, "render"), process.env.NODE_ENV !== "production" && mt(c, "patch"), A(
            null,
            Ce,
            h,
            v,
            c,
            m,
            _
          ), process.env.NODE_ENV !== "production" && _t(c, "patch"), f.el = Ce.el;
        }
        if (k && me(k, m), !Se && (x = I && I.onVnodeMounted)) {
          const Ce = f;
          me(
            () => $e(x, U, Ce),
            m
          );
        }
        (f.shapeFlag & 256 || U && Ft(U.vnode) && U.vnode.shapeFlag & 256) && c.a && me(c.a, m), c.isMounted = !0, process.env.NODE_ENV !== "production" && Ki(c), f = h = v = null;
      }
    };
    c.scope.on();
    const b = c.effect = new Vs(N);
    c.scope.off();
    const E = c.update = b.run.bind(b), S = c.job = b.runIfDirty.bind(b);
    S.i = c, S.id = c.uid, b.scheduler = () => Tn(S), ot(c, !0), process.env.NODE_ENV !== "production" && (b.onTrack = c.rtc ? (x) => Vt(c.rtc, x) : void 0, b.onTrigger = c.rtg ? (x) => Vt(c.rtg, x) : void 0), E();
  }, P = (c, f, h) => {
    f.component = c;
    const v = c.vnode.props;
    c.vnode = f, c.next = null, Cl(c, f.props, v, h), Hl(c, f.children, h), De(), Ko(c), we();
  }, Ve = (c, f, h, v, m, _, O, N, b = !1) => {
    const E = c && c.children, S = c ? c.shapeFlag : 0, x = f.children, { patchFlag: w, shapeFlag: I } = f;
    if (w > 0) {
      if (w & 128) {
        Ot(
          E,
          x,
          h,
          v,
          m,
          _,
          O,
          N,
          b
        );
        return;
      } else if (w & 256) {
        Pn(
          E,
          x,
          h,
          v,
          m,
          _,
          O,
          N,
          b
        );
        return;
      }
    }
    I & 8 ? (S & 16 && xt(E, m, _), x !== E && p(h, x)) : S & 16 ? I & 16 ? Ot(
      E,
      x,
      h,
      v,
      m,
      _,
      O,
      N,
      b
    ) : xt(E, m, _, !0) : (S & 8 && p(h, ""), I & 16 && le(
      x,
      h,
      v,
      m,
      _,
      O,
      N,
      b
    ));
  }, Pn = (c, f, h, v, m, _, O, N, b) => {
    c = c || Et, f = f || Et;
    const E = c.length, S = f.length, x = Math.min(E, S);
    let w;
    for (w = 0; w < x; w++) {
      const I = f[w] = b ? Ye(f[w]) : Ne(f[w]);
      A(
        c[w],
        I,
        h,
        null,
        m,
        _,
        O,
        N,
        b
      );
    }
    E > S ? xt(
      c,
      m,
      _,
      !0,
      !1,
      x
    ) : le(
      f,
      h,
      v,
      m,
      _,
      O,
      N,
      b,
      x
    );
  }, Ot = (c, f, h, v, m, _, O, N, b) => {
    let E = 0;
    const S = f.length;
    let x = c.length - 1, w = S - 1;
    for (; E <= x && E <= w; ) {
      const I = c[E], F = f[E] = b ? Ye(f[E]) : Ne(f[E]);
      if (Tt(I, F))
        A(
          I,
          F,
          h,
          null,
          m,
          _,
          O,
          N,
          b
        );
      else
        break;
      E++;
    }
    for (; E <= x && E <= w; ) {
      const I = c[x], F = f[w] = b ? Ye(f[w]) : Ne(f[w]);
      if (Tt(I, F))
        A(
          I,
          F,
          h,
          null,
          m,
          _,
          O,
          N,
          b
        );
      else
        break;
      x--, w--;
    }
    if (E > x) {
      if (E <= w) {
        const I = w + 1, F = I < S ? f[I].el : v;
        for (; E <= w; )
          A(
            null,
            f[E] = b ? Ye(f[E]) : Ne(f[E]),
            h,
            F,
            m,
            _,
            O,
            N,
            b
          ), E++;
      }
    } else if (E > w)
      for (; E <= x; )
        Ge(c[E], m, _, !0), E++;
    else {
      const I = E, F = E, k = /* @__PURE__ */ new Map();
      for (E = F; E <= w; E++) {
        const ne = f[E] = b ? Ye(f[E]) : Ne(f[E]);
        ne.key != null && (process.env.NODE_ENV !== "production" && k.has(ne.key) && y(
          "Duplicate keys found during update:",
          JSON.stringify(ne.key),
          "Make sure keys are unique."
        ), k.set(ne.key, E));
      }
      let U, fe = 0;
      const ue = w - F + 1;
      let Se = !1, Ce = 0;
      const wt = new Array(ue);
      for (E = 0; E < ue; E++) wt[E] = 0;
      for (E = I; E <= x; E++) {
        const ne = c[E];
        if (fe >= ue) {
          Ge(ne, m, _, !0);
          continue;
        }
        let Te;
        if (ne.key != null)
          Te = k.get(ne.key);
        else
          for (U = F; U <= w; U++)
            if (wt[U - F] === 0 && Tt(ne, f[U])) {
              Te = U;
              break;
            }
        Te === void 0 ? Ge(ne, m, _, !0) : (wt[Te - F] = E + 1, Te >= Ce ? Ce = Te : Se = !0, A(
          ne,
          f[Te],
          h,
          null,
          m,
          _,
          O,
          N,
          b
        ), fe++);
      }
      const Po = Se ? Wl(wt) : Et;
      for (U = Po.length - 1, E = ue - 1; E >= 0; E--) {
        const ne = F + E, Te = f[ne], Ro = f[ne + 1], Fo = ne + 1 < S ? (
          // #13559, fallback to el placeholder for unresolved async component
          Ro.el || Ro.placeholder
        ) : v;
        wt[E] === 0 ? A(
          null,
          Te,
          h,
          Fo,
          m,
          _,
          O,
          N,
          b
        ) : Se && (U < 0 || E !== Po[U] ? ht(Te, h, Fo, 2) : U--);
      }
    }
  }, ht = (c, f, h, v, m = null) => {
    const { el: _, type: O, transition: N, children: b, shapeFlag: E } = c;
    if (E & 6) {
      ht(c.component.subTree, f, h, v);
      return;
    }
    if (E & 128) {
      c.suspense.move(f, h, v);
      return;
    }
    if (E & 64) {
      O.move(c, f, h, Dt);
      return;
    }
    if (O === be) {
      o(_, f, h);
      for (let x = 0; x < b.length; x++)
        ht(b[x], f, h, v);
      o(c.anchor, f, h);
      return;
    }
    if (O === fn) {
      ge(c, f, h);
      return;
    }
    if (v !== 2 && E & 1 && N)
      if (v === 0)
        N.beforeEnter(_), o(_, f, h), me(() => N.enter(_), m);
      else {
        const { leave: x, delayLeave: w, afterLeave: I } = N, F = () => {
          c.ctx.isUnmounted ? s(_) : o(_, f, h);
        }, k = () => {
          x(_, () => {
            F(), I && I();
          });
        };
        w ? w(_, F, k) : k();
      }
    else
      o(_, f, h);
  }, Ge = (c, f, h, v = !1, m = !1) => {
    const {
      type: _,
      props: O,
      ref: N,
      children: b,
      dynamicChildren: E,
      shapeFlag: S,
      patchFlag: x,
      dirs: w,
      cacheIndex: I
    } = c;
    if (x === -2 && (m = !1), N != null && (De(), Rt(N, null, h, c, !0), we()), I != null && (f.renderCache[I] = void 0), S & 256) {
      f.ctx.deactivate(c);
      return;
    }
    const F = S & 1 && w, k = !Ft(c);
    let U;
    if (k && (U = O && O.onVnodeBeforeUnmount) && $e(U, f, c), S & 6)
      Pr(c.component, h, v);
    else {
      if (S & 128) {
        c.suspense.unmount(h, v);
        return;
      }
      F && nt(c, null, f, "beforeUnmount"), S & 64 ? c.type.remove(
        c,
        f,
        h,
        Dt,
        v
      ) : E && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !E.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (_ !== be || x > 0 && x & 64) ? xt(
        E,
        f,
        h,
        !1,
        !0
      ) : (_ === be && x & 384 || !m && S & 16) && xt(b, f, h), v && Rn(c);
    }
    (k && (U = O && O.onVnodeUnmounted) || F) && me(() => {
      U && $e(U, f, c), F && nt(c, null, f, "unmounted");
    }, h);
  }, Rn = (c) => {
    const { type: f, el: h, anchor: v, transition: m } = c;
    if (f === be) {
      process.env.NODE_ENV !== "production" && c.patchFlag > 0 && c.patchFlag & 2048 && m && !m.persisted ? c.children.forEach((O) => {
        O.type === xe ? s(O.el) : Rn(O);
      }) : Mr(h, v);
      return;
    }
    if (f === fn) {
      C(c);
      return;
    }
    const _ = () => {
      s(h), m && !m.persisted && m.afterLeave && m.afterLeave();
    };
    if (c.shapeFlag & 1 && m && !m.persisted) {
      const { leave: O, delayLeave: N } = m, b = () => O(h, _);
      N ? N(c.el, _, b) : b();
    } else
      _();
  }, Mr = (c, f) => {
    let h;
    for (; c !== f; )
      h = g(c), s(c), c = h;
    s(f);
  }, Pr = (c, f, h) => {
    process.env.NODE_ENV !== "production" && c.type.__hmrId && Fi(c);
    const {
      bum: v,
      scope: m,
      job: _,
      subTree: O,
      um: N,
      m: b,
      a: E,
      parent: S,
      slots: { __: x }
    } = c;
    Zo(b), Zo(E), v && Vt(v), S && T(x) && x.forEach((w) => {
      S.renderCache[w] = void 0;
    }), m.stop(), _ && (_.flags |= 8, Ge(O, c, f, h)), N && me(N, f), me(() => {
      c.isUnmounted = !0;
    }, f), f && f.pendingBranch && !f.isUnmounted && c.asyncDep && !c.asyncResolved && c.suspenseId === f.pendingId && (f.deps--, f.deps === 0 && f.resolve()), process.env.NODE_ENV !== "production" && Wi(c);
  }, xt = (c, f, h, v = !1, m = !1, _ = 0) => {
    for (let O = _; O < c.length; O++)
      Ge(c[O], f, h, v, m);
  }, Zt = (c) => {
    if (c.shapeFlag & 6)
      return Zt(c.component.subTree);
    if (c.shapeFlag & 128)
      return c.suspense.next();
    const f = g(c.anchor || c.el), h = f && f[Yi];
    return h ? g(h) : f;
  };
  let Fn = !1;
  const Mo = (c, f, h) => {
    c == null ? f._vnode && Ge(f._vnode, null, null, !0) : A(
      f._vnode || null,
      c,
      f,
      null,
      null,
      null,
      h
    ), f._vnode = c, Fn || (Fn = !0, Ko(), zs(), Fn = !1);
  }, Dt = {
    p: A,
    um: Ge,
    m: ht,
    r: Rn,
    mt: qe,
    mc: le,
    pc: Ve,
    pbc: ke,
    n: Zt,
    o: e
  };
  return {
    render: Mo,
    hydrate: void 0,
    createApp: Dl(Mo)
  };
}
function kn({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function ot({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Bl(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function cn(e, t, n = !1) {
  const o = e.children, s = t.children;
  if (T(o) && T(s))
    for (let r = 0; r < o.length; r++) {
      const i = o[r];
      let l = s[r];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = s[r] = Ye(s[r]), l.el = i.el), !n && l.patchFlag !== -2 && cn(i, l)), l.type === Yt && (l.el = i.el), l.type === xe && !l.el && (l.el = i.el), process.env.NODE_ENV !== "production" && l.el && (l.el.__vnode = l);
    }
}
function Wl(e) {
  const t = e.slice(), n = [0];
  let o, s, r, i, l;
  const u = e.length;
  for (o = 0; o < u; o++) {
    const d = e[o];
    if (d !== 0) {
      if (s = n[n.length - 1], e[s] < d) {
        t[o] = s, n.push(o);
        continue;
      }
      for (r = 0, i = n.length - 1; r < i; )
        l = r + i >> 1, e[n[l]] < d ? r = l + 1 : i = l;
      d < e[n[r]] && (r > 0 && (t[o] = n[r - 1]), n[r] = o);
    }
  }
  for (r = n.length, i = n[r - 1]; r-- > 0; )
    n[r] = i, i = t[i];
  return n;
}
function vr(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : vr(t);
}
function Zo(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const kl = Symbol.for("v-scx"), ql = () => {
  {
    const e = ln(kl);
    return e || process.env.NODE_ENV !== "production" && y(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function qn(e, t, n) {
  return process.env.NODE_ENV !== "production" && !$(t) && y(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), Er(e, t, n);
}
function Er(e, t, n = K) {
  const { immediate: o, deep: s, flush: r, once: i } = n;
  process.env.NODE_ENV !== "production" && !t && (o !== void 0 && y(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), s !== void 0 && y(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && y(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = X({}, n);
  process.env.NODE_ENV !== "production" && (l.onWarn = y);
  const u = t && o || !t && r !== "post";
  let d;
  if (Wt) {
    if (r === "sync") {
      const D = ql();
      d = D.__watcherHandles || (D.__watcherHandles = []);
    } else if (!u) {
      const D = () => {
      };
      return D.stop = Y, D.resume = Y, D.pause = Y, D;
    }
  }
  const p = Q;
  l.call = (D, V, A) => Fe(D, p, V, A);
  let a = !1;
  r === "post" ? l.scheduler = (D) => {
    me(D, p && p.suspense);
  } : r !== "sync" && (a = !0, l.scheduler = (D, V) => {
    V ? D() : Tn(D);
  }), l.augmentJob = (D) => {
    t && (D.flags |= 4), a && (D.flags |= 2, p && (D.id = p.uid, D.i = p));
  };
  const g = Vi(e, t, l);
  return Wt && (d ? d.push(g) : u && g()), g;
}
function Gl(e, t, n) {
  const o = this.proxy, s = q(e) ? e.includes(".") ? br(o, e) : () => o[e] : e.bind(o, o);
  let r;
  $(t) ? r = t : (r = t.handler, n = t);
  const i = zt(this), l = Er(s, r.bind(o), n);
  return i(), l;
}
function br(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let s = 0; s < n.length && o; s++)
      o = o[n[s]];
    return o;
  };
}
const Jl = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${ie(t)}Modifiers`] || e[`${Qe(t)}Modifiers`];
function Yl(e, t, ...n) {
  if (e.isUnmounted) return;
  const o = e.vnode.props || K;
  if (process.env.NODE_ENV !== "production") {
    const {
      emitsOptions: p,
      propsOptions: [a]
    } = e;
    if (p)
      if (!(t in p))
        (!a || !(st(ie(t)) in a)) && y(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${st(ie(t))}" prop.`
        );
      else {
        const g = p[t];
        $(g) && (g(...n) || y(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let s = n;
  const r = t.startsWith("update:"), i = r && Jl(o, t.slice(7));
  if (i && (i.trim && (s = n.map((p) => q(p) ? p.trim() : p)), i.number && (s = n.map(Ur))), process.env.NODE_ENV !== "production" && Gi(e, t, s), process.env.NODE_ENV !== "production") {
    const p = t.toLowerCase();
    p !== t && o[st(p)] && y(
      `Event "${p}" is emitted in component ${Mn(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Qe(
        t
      )}" instead of "${t}".`
    );
  }
  let l, u = o[l = st(t)] || // also try camelCase event handler (#2249)
  o[l = st(ie(t))];
  !u && r && (u = o[l = st(Qe(t))]), u && Fe(
    u,
    e,
    6,
    s
  );
  const d = o[l + "Once"];
  if (d) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, Fe(
      d,
      e,
      6,
      s
    );
  }
}
function Nr(e, t, n = !1) {
  const o = t.emitsCache, s = o.get(e);
  if (s !== void 0)
    return s;
  const r = e.emits;
  let i = {}, l = !1;
  if (!$(e)) {
    const u = (d) => {
      const p = Nr(d, t, !0);
      p && (l = !0, X(i, p));
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !r && !l ? (B(e) && o.set(e, null), null) : (T(r) ? r.forEach((u) => i[u] = null) : X(i, r), B(e) && o.set(e, i), i);
}
function In(e, t) {
  return !e || !kt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), j(e, t[0].toLowerCase() + t.slice(1)) || j(e, Qe(t)) || j(e, t));
}
let ro = !1;
function On() {
  ro = !0;
}
function Qo(e) {
  const {
    type: t,
    vnode: n,
    proxy: o,
    withProxy: s,
    propsOptions: [r],
    slots: i,
    attrs: l,
    emit: u,
    render: d,
    renderCache: p,
    props: a,
    data: g,
    setupState: D,
    ctx: V,
    inheritAttrs: A
  } = e, ee = bn(e);
  let W, G;
  process.env.NODE_ENV !== "production" && (ro = !1);
  try {
    if (n.shapeFlag & 4) {
      const C = s || o, Z = process.env.NODE_ENV !== "production" && D.__isScriptSetup ? new Proxy(C, {
        get(ve, te, le) {
          return y(
            `Property '${String(
              te
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(ve, te, le);
        }
      }) : C;
      W = Ne(
        d.call(
          Z,
          C,
          p,
          process.env.NODE_ENV !== "production" ? Me(a) : a,
          D,
          g,
          V
        )
      ), G = l;
    } else {
      const C = t;
      process.env.NODE_ENV !== "production" && l === a && On(), W = Ne(
        C.length > 1 ? C(
          process.env.NODE_ENV !== "production" ? Me(a) : a,
          process.env.NODE_ENV !== "production" ? {
            get attrs() {
              return On(), Me(l);
            },
            slots: i,
            emit: u
          } : { attrs: l, slots: i, emit: u }
        ) : C(
          process.env.NODE_ENV !== "production" ? Me(a) : a,
          null
        )
      ), G = t.props ? l : zl(l);
    }
  } catch (C) {
    jt.length = 0, Gt(C, e, 1), W = Ze(xe);
  }
  let L = W, ge;
  if (process.env.NODE_ENV !== "production" && W.patchFlag > 0 && W.patchFlag & 2048 && ([L, ge] = yr(W)), G && A !== !1) {
    const C = Object.keys(G), { shapeFlag: Z } = L;
    if (C.length) {
      if (Z & 7)
        r && C.some(hn) && (G = Xl(
          G,
          r
        )), L = et(L, G, !1, !0);
      else if (process.env.NODE_ENV !== "production" && !ro && L.type !== xe) {
        const ve = Object.keys(l), te = [], le = [];
        for (let je = 0, ke = ve.length; je < ke; je++) {
          const Ee = ve[je];
          kt(Ee) ? hn(Ee) || te.push(Ee[2].toLowerCase() + Ee.slice(3)) : le.push(Ee);
        }
        le.length && y(
          `Extraneous non-props attributes (${le.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), te.length && y(
          `Extraneous non-emits event listeners (${te.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (process.env.NODE_ENV !== "production" && !es(L) && y(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), L = et(L, null, !1, !0), L.dirs = L.dirs ? L.dirs.concat(n.dirs) : n.dirs), n.transition && (process.env.NODE_ENV !== "production" && !es(L) && y(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), xo(L, n.transition)), process.env.NODE_ENV !== "production" && ge ? ge(L) : W = L, bn(ee), W;
}
const yr = (e) => {
  const t = e.children, n = e.dynamicChildren, o = Co(t, !1);
  if (o) {
    if (process.env.NODE_ENV !== "production" && o.patchFlag > 0 && o.patchFlag & 2048)
      return yr(o);
  } else return [e, void 0];
  const s = t.indexOf(o), r = n ? n.indexOf(o) : -1, i = (l) => {
    t[s] = l, n && (r > -1 ? n[r] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [Ne(o), i];
};
function Co(e, t = !0) {
  let n;
  for (let o = 0; o < e.length; o++) {
    const s = e[o];
    if (An(s)) {
      if (s.type !== xe || s.children === "v-if") {
        if (n)
          return;
        if (n = s, process.env.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return Co(n.children);
      }
    } else
      return;
  }
  return n;
}
const zl = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || kt(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Xl = (e, t) => {
  const n = {};
  for (const o in e)
    (!hn(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, es = (e) => e.shapeFlag & 7 || e.type === xe;
function Zl(e, t, n) {
  const { props: o, children: s, component: r } = e, { props: i, children: l, patchFlag: u } = t, d = r.emitsOptions;
  if (process.env.NODE_ENV !== "production" && (s || l) && Pe || t.dirs || t.transition)
    return !0;
  if (n && u >= 0) {
    if (u & 1024)
      return !0;
    if (u & 16)
      return o ? ts(o, i, d) : !!i;
    if (u & 8) {
      const p = t.dynamicProps;
      for (let a = 0; a < p.length; a++) {
        const g = p[a];
        if (i[g] !== o[g] && !In(d, g))
          return !0;
      }
    }
  } else
    return (s || l) && (!l || !l.$stable) ? !0 : o === i ? !1 : o ? i ? ts(o, i, d) : !0 : !!i;
  return !1;
}
function ts(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let s = 0; s < o.length; s++) {
    const r = o[s];
    if (t[r] !== e[r] && !In(n, r))
      return !0;
  }
  return !1;
}
function Ql({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.el = e.el), o === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const Or = (e) => e.__isSuspense;
function ec(e, t) {
  t && t.pendingBranch ? T(e) ? t.effects.push(...e) : t.effects.push(e) : Ys(e);
}
const be = Symbol.for("v-fgt"), Yt = Symbol.for("v-txt"), xe = Symbol.for("v-cmt"), fn = Symbol.for("v-stc"), jt = [];
let _e = null;
function un(e = !1) {
  jt.push(_e = e ? null : []);
}
function tc() {
  jt.pop(), _e = jt[jt.length - 1] || null;
}
let Bt = 1;
function ns(e, t = !1) {
  Bt += e, e < 0 && _e && t && (_e.hasOnce = !0);
}
function nc(e) {
  return e.dynamicChildren = Bt > 0 ? _e || Et : null, tc(), Bt > 0 && _e && _e.push(e), e;
}
function an(e, t, n, o, s, r) {
  return nc(
    ae(
      e,
      t,
      n,
      o,
      s,
      r,
      !0
    )
  );
}
function An(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Tt(e, t) {
  if (process.env.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const n = rn.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const oc = (...e) => Dr(
  ...e
), xr = ({ key: e }) => e ?? null, pn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? q(e) || z(e) || $(e) ? { i: de, r: e, k: t, f: !!n } : e : null);
function ae(e, t = null, n = null, o = 0, s = null, r = e === be ? 0 : 1, i = !1, l = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && xr(t),
    ref: t && pn(t),
    scopeId: tr,
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
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: r,
    patchFlag: o,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: de
  };
  return l ? (To(u, n), r & 128 && e.normalize(u)) : n && (u.shapeFlag |= q(n) ? 8 : 16), process.env.NODE_ENV !== "production" && u.key !== u.key && y("VNode created with invalid key (NaN). VNode type:", u.type), Bt > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  _e && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && _e.push(u), u;
}
const Ze = process.env.NODE_ENV !== "production" ? oc : Dr;
function Dr(e, t = null, n = null, o = 0, s = null, r = !1) {
  if ((!e || e === pl) && (process.env.NODE_ENV !== "production" && !e && y(`Invalid vnode type when creating vnode: ${e}.`), e = xe), An(e)) {
    const l = et(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && To(l, n), Bt > 0 && !r && _e && (l.shapeFlag & 6 ? _e[_e.indexOf(e)] = l : _e.push(l)), l.patchFlag = -2, l;
  }
  if (Tr(e) && (e = e.__vccOpts), t) {
    t = sc(t);
    let { class: l, style: u } = t;
    l && !q(l) && (t.class = go(l)), B(u) && (gn(u) && !T(u) && (u = X({}, u)), t.style = ho(u));
  }
  const i = q(e) ? 1 : Or(e) ? 128 : zi(e) ? 64 : B(e) ? 4 : $(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && i & 4 && gn(e) && (e = M(e), y(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), ae(
    e,
    t,
    n,
    o,
    s,
    i,
    r,
    !0
  );
}
function sc(e) {
  return e ? gn(e) || pr(e) ? X({}, e) : e : null;
}
function et(e, t, n = !1, o = !1) {
  const { props: s, ref: r, patchFlag: i, children: l, transition: u } = e, d = t ? ic(s || {}, t) : s, p = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && xr(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? T(r) ? r.concat(pn(t)) : [r, pn(t)] : pn(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && i === -1 && T(l) ? l.map(wr) : l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== be ? i === -1 ? 16 : i | 16 : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: u,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && et(e.ssContent),
    ssFallback: e.ssFallback && et(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return u && o && xo(
    p,
    u.clone(p)
  ), p;
}
function wr(e) {
  const t = et(e);
  return T(e.children) && (t.children = e.children.map(wr)), t;
}
function rc(e = " ", t = 0) {
  return Ze(Yt, null, e, t);
}
function Ne(e) {
  return e == null || typeof e == "boolean" ? Ze(xe) : T(e) ? Ze(
    be,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : An(e) ? Ye(e) : Ze(Yt, null, String(e));
}
function Ye(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : et(e);
}
function To(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (T(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), To(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !pr(t) ? t._ctx = de : s === 3 && de && (de.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else $(t) ? (t = { default: t, _ctx: de }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [rc(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function ic(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const s in o)
      if (s === "class")
        t.class !== o.class && (t.class = go([t.class, o.class]));
      else if (s === "style")
        t.style = ho([t.style, o.style]);
      else if (kt(s)) {
        const r = t[s], i = o[s];
        i && r !== i && !(T(r) && r.includes(i)) && (t[s] = r ? [].concat(r, i) : i);
      } else s !== "" && (t[s] = o[s]);
  }
  return t;
}
function $e(e, t, n, o = null) {
  Fe(e, t, 7, [
    n,
    o
  ]);
}
const lc = fr();
let cc = 0;
function fc(e, t, n) {
  const o = e.type, s = (t ? t.appContext : e.appContext) || lc, r = {
    uid: cc++,
    vnode: e,
    type: o,
    parent: t,
    appContext: s,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new ei(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(s.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: hr(o, s),
    emitsOptions: Nr(o, s),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: K,
    // inheritAttrs
    inheritAttrs: o.inheritAttrs,
    // state
    ctx: K,
    data: K,
    props: K,
    attrs: K,
    slots: K,
    refs: K,
    setupState: K,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
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
  return process.env.NODE_ENV !== "production" ? r.ctx = gl(r) : r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = Yl.bind(null, r), e.ce && e.ce(r), r;
}
let Q = null;
const Vr = () => Q || de;
let xn, io;
{
  const e = qt(), t = (n, o) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(o), (r) => {
      s.length > 1 ? s.forEach((i) => i(r)) : s[0](r);
    };
  };
  xn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Q = n
  ), io = t(
    "__VUE_SSR_SETTERS__",
    (n) => Wt = n
  );
}
const zt = (e) => {
  const t = Q;
  return xn(e), e.scope.on(), () => {
    e.scope.off(), xn(t);
  };
}, os = () => {
  Q && Q.scope.off(), xn(null);
}, uc = /* @__PURE__ */ Be("slot,component");
function lo(e, { isNativeTag: t }) {
  (uc(e) || t(e)) && y(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function Sr(e) {
  return e.vnode.shapeFlag & 4;
}
let Wt = !1;
function ac(e, t = !1, n = !1) {
  t && io(t);
  const { props: o, children: s } = e.vnode, r = Sr(e);
  Vl(e, o, r, t), jl(e, s, n || t);
  const i = r ? pc(e, t) : void 0;
  return t && io(!1), i;
}
function pc(e, t) {
  var n;
  const o = e.type;
  if (process.env.NODE_ENV !== "production") {
    if (o.name && lo(o.name, e.appContext.config), o.components) {
      const r = Object.keys(o.components);
      for (let i = 0; i < r.length; i++)
        lo(r[i], e.appContext.config);
    }
    if (o.directives) {
      const r = Object.keys(o.directives);
      for (let i = 0; i < r.length; i++)
        nr(r[i]);
    }
    o.compilerOptions && dc() && y(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, ir), process.env.NODE_ENV !== "production" && ml(e);
  const { setup: s } = o;
  if (s) {
    De();
    const r = e.setupContext = s.length > 1 ? gc(e) : null, i = zt(e), l = yt(
      s,
      e,
      0,
      [
        process.env.NODE_ENV !== "production" ? Me(e.props) : e.props,
        r
      ]
    ), u = uo(l);
    if (we(), i(), (u || e.sp) && !Ft(e) && or(e), u) {
      if (l.then(os, os), t)
        return l.then((d) => {
          ss(e, d, t);
        }).catch((d) => {
          Gt(d, e, 0);
        });
      if (e.asyncDep = l, process.env.NODE_ENV !== "production" && !e.suspense) {
        const d = (n = o.name) != null ? n : "Anonymous";
        y(
          `Component <${d}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      ss(e, l, t);
  } else
    Cr(e, t);
}
function ss(e, t, n) {
  $(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : B(t) ? (process.env.NODE_ENV !== "production" && An(t) && y(
    "setup() should not return VNodes directly - return a render function instead."
  ), process.env.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = ks(t), process.env.NODE_ENV !== "production" && _l(e)) : process.env.NODE_ENV !== "production" && t !== void 0 && y(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), Cr(e, n);
}
const dc = () => !0;
function Cr(e, t, n) {
  const o = e.type;
  e.render || (e.render = o.render || Y);
  {
    const s = zt(e);
    De();
    try {
      El(e);
    } finally {
      we(), s();
    }
  }
  process.env.NODE_ENV !== "production" && !o.render && e.render === Y && !t && (o.template ? y(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : y("Component is missing template or render function: ", o));
}
const rs = process.env.NODE_ENV !== "production" ? {
  get(e, t) {
    return On(), J(e, "get", ""), e[t];
  },
  set() {
    return y("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return y("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return J(e, "get", ""), e[t];
  }
};
function hc(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return J(e, "get", "$slots"), t[n];
    }
  });
}
function gc(e) {
  const t = (n) => {
    if (process.env.NODE_ENV !== "production" && (e.exposed && y("expose() should be called only once per setup()."), n != null)) {
      let o = typeof n;
      o === "object" && (T(n) ? o = "array" : z(n) && (o = "ref")), o !== "object" && y(
        `expose() should be passed a plain object, received ${o}.`
      );
    }
    e.exposed = n || {};
  };
  if (process.env.NODE_ENV !== "production") {
    let n, o;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, rs));
      },
      get slots() {
        return o || (o = hc(e));
      },
      get emit() {
        return (s, ...r) => e.emit(s, ...r);
      },
      expose: t
    });
  } else
    return {
      attrs: new Proxy(e.attrs, rs),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function $o(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(ks(Ni(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in at)
        return at[n](e);
    },
    has(t, n) {
      return n in t || n in at;
    }
  })) : e.proxy;
}
const mc = /(?:^|[-_])(\w)/g, _c = (e) => e.replace(mc, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Io(e, t = !0) {
  return $(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Mn(e, t, n = !1) {
  let o = Io(t);
  if (!o && t.__file) {
    const s = t.__file.match(/([^/\\]+)\.\w+$/);
    s && (o = s[1]);
  }
  if (!o && e && e.parent) {
    const s = (r) => {
      for (const i in r)
        if (r[i] === t)
          return i;
    };
    o = s(
      e.components || e.parent.type.components
    ) || s(e.appContext.components);
  }
  return o ? _c(o) : n ? "App" : "Anonymous";
}
function Tr(e) {
  return $(e) && "__vccOpts" in e;
}
const vc = (e, t) => {
  const n = Di(e, t, Wt);
  if (process.env.NODE_ENV !== "production") {
    const o = Vr();
    o && o.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function Ec() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, o = { style: "color:#eb2f96" }, s = {
    __vue_custom_formatter: !0,
    header(a) {
      if (!B(a))
        return null;
      if (a.__isVue)
        return ["div", e, "VueInstance"];
      if (z(a)) {
        De();
        const g = a.value;
        return we(), [
          "div",
          {},
          ["span", e, p(a)],
          "<",
          l(g),
          ">"
        ];
      } else {
        if (ft(a))
          return [
            "div",
            {},
            ["span", e, he(a) ? "ShallowReactive" : "Reactive"],
            "<",
            l(a),
            `>${Ke(a) ? " (readonly)" : ""}`
          ];
        if (Ke(a))
          return [
            "div",
            {},
            ["span", e, he(a) ? "ShallowReadonly" : "Readonly"],
            "<",
            l(a),
            ">"
          ];
      }
      return null;
    },
    hasBody(a) {
      return a && a.__isVue;
    },
    body(a) {
      if (a && a.__isVue)
        return [
          "div",
          {},
          ...r(a.$)
        ];
    }
  };
  function r(a) {
    const g = [];
    a.type.props && a.props && g.push(i("props", M(a.props))), a.setupState !== K && g.push(i("setup", a.setupState)), a.data !== K && g.push(i("data", M(a.data)));
    const D = u(a, "computed");
    D && g.push(i("computed", D));
    const V = u(a, "inject");
    return V && g.push(i("injected", V)), g.push([
      "div",
      {},
      [
        "span",
        {
          style: o.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: a }]
    ]), g;
  }
  function i(a, g) {
    return g = X({}, g), Object.keys(g).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        a
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(g).map((D) => [
          "div",
          {},
          ["span", o, D + ": "],
          l(g[D], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(a, g = !0) {
    return typeof a == "number" ? ["span", t, a] : typeof a == "string" ? ["span", n, JSON.stringify(a)] : typeof a == "boolean" ? ["span", o, a] : B(a) ? ["object", { object: g ? M(a) : a }] : ["span", n, String(a)];
  }
  function u(a, g) {
    const D = a.type;
    if ($(D))
      return;
    const V = {};
    for (const A in a.ctx)
      d(D, A, g) && (V[A] = a.ctx[A]);
    return V;
  }
  function d(a, g, D) {
    const V = a[D];
    if (T(V) && V.includes(g) || B(V) && g in V || a.extends && d(a.extends, g, D) || a.mixins && a.mixins.some((A) => d(A, g, D)))
      return !0;
  }
  function p(a) {
    return he(a) ? "ShallowRef" : a.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(s) : window.devtoolsFormatters = [s];
}
const is = "3.5.18", Ue = process.env.NODE_ENV !== "production" ? y : Y;
process.env.NODE_ENV;
process.env.NODE_ENV;
/**
* @vue/runtime-dom v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let co;
const ls = typeof window < "u" && window.trustedTypes;
if (ls)
  try {
    co = /* @__PURE__ */ ls.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    process.env.NODE_ENV !== "production" && Ue(`Error creating trusted types policy: ${e}`);
  }
const $r = co ? (e) => co.createHTML(e) : (e) => e, bc = "http://www.w3.org/2000/svg", Nc = "http://www.w3.org/1998/Math/MathML", Le = typeof document < "u" ? document : null, cs = Le && /* @__PURE__ */ Le.createElement("template"), yc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const s = t === "svg" ? Le.createElementNS(bc, e) : t === "mathml" ? Le.createElementNS(Nc, e) : n ? Le.createElement(e, { is: n }) : Le.createElement(e);
    return e === "select" && o && o.multiple != null && s.setAttribute("multiple", o.multiple), s;
  },
  createText: (e) => Le.createTextNode(e),
  createComment: (e) => Le.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Le.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, o, s, r) {
    const i = n ? n.previousSibling : t.lastChild;
    if (s && (s === r || s.nextSibling))
      for (; t.insertBefore(s.cloneNode(!0), n), !(s === r || !(s = s.nextSibling)); )
        ;
    else {
      cs.innerHTML = $r(
        o === "svg" ? `<svg>${e}</svg>` : o === "mathml" ? `<math>${e}</math>` : e
      );
      const l = cs.content;
      if (o === "svg" || o === "mathml") {
        const u = l.firstChild;
        for (; u.firstChild; )
          l.appendChild(u.firstChild);
        l.removeChild(u);
      }
      t.insertBefore(l, n);
    }
    return [
      // first
      i ? i.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, Oc = Symbol("_vtc");
function xc(e, t, n) {
  const o = e[Oc];
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const fs = Symbol("_vod"), Dc = Symbol("_vsh");
process.env.NODE_ENV;
const wc = Symbol(process.env.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), Vc = /(^|;)\s*display\s*:/;
function Sc(e, t, n) {
  const o = e.style, s = q(n);
  let r = !1;
  if (n && !s) {
    if (t)
      if (q(t))
        for (const i of t.split(";")) {
          const l = i.slice(0, i.indexOf(":")).trim();
          n[l] == null && dn(o, l, "");
        }
      else
        for (const i in t)
          n[i] == null && dn(o, i, "");
    for (const i in n)
      i === "display" && (r = !0), dn(o, i, n[i]);
  } else if (s) {
    if (t !== n) {
      const i = o[wc];
      i && (n += ";" + i), o.cssText = n, r = Vc.test(n);
    }
  } else t && e.removeAttribute("style");
  fs in e && (e[fs] = r ? o.display : "", e[Dc] && (o.display = "none"));
}
const Cc = /[^\\];\s*$/, us = /\s*!important$/;
function dn(e, t, n) {
  if (T(n))
    n.forEach((o) => dn(e, t, o));
  else if (n == null && (n = ""), process.env.NODE_ENV !== "production" && Cc.test(n) && Ue(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = Tc(e, t);
    us.test(n) ? e.setProperty(
      Qe(o),
      n.replace(us, ""),
      "important"
    ) : e[o] = n;
  }
}
const as = ["Webkit", "Moz", "ms"], Gn = {};
function Tc(e, t) {
  const n = Gn[t];
  if (n)
    return n;
  let o = ie(t);
  if (o !== "filter" && o in e)
    return Gn[t] = o;
  o = pt(o);
  for (let s = 0; s < as.length; s++) {
    const r = as[s] + o;
    if (r in e)
      return Gn[t] = r;
  }
  return t;
}
const ps = "http://www.w3.org/1999/xlink";
function ds(e, t, n, o, s, r = Qr(t)) {
  o && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(ps, t.slice(6, t.length)) : e.setAttributeNS(ps, t, n) : n == null || r && !xs(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : tt(n) ? String(n) : n
  );
}
function hs(e, t, n, o, s) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? $r(n) : n);
    return;
  }
  const r = e.tagName;
  if (t === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    const l = r === "OPTION" ? e.getAttribute("value") || "" : e.value, u = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (l !== u || !("_value" in e)) && (e.value = u), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let i = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean" ? n = xs(n) : n == null && l === "string" ? (n = "", i = !0) : l === "number" && (n = 0, i = !0);
  }
  try {
    e[t] = n;
  } catch (l) {
    process.env.NODE_ENV !== "production" && !i && Ue(
      `Failed setting prop "${t}" on <${r.toLowerCase()}>: value ${n} is invalid.`,
      l
    );
  }
  i && e.removeAttribute(s || t);
}
function $c(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function Ic(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
const gs = Symbol("_vei");
function Ac(e, t, n, o, s = null) {
  const r = e[gs] || (e[gs] = {}), i = r[t];
  if (o && i)
    i.value = process.env.NODE_ENV !== "production" ? _s(o, t) : o;
  else {
    const [l, u] = Mc(t);
    if (o) {
      const d = r[t] = Fc(
        process.env.NODE_ENV !== "production" ? _s(o, t) : o,
        s
      );
      $c(e, l, d, u);
    } else i && (Ic(e, l, i, u), r[t] = void 0);
  }
}
const ms = /(?:Once|Passive|Capture)$/;
function Mc(e) {
  let t;
  if (ms.test(e)) {
    t = {};
    let o;
    for (; o = e.match(ms); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Qe(e.slice(2)), t];
}
let Jn = 0;
const Pc = /* @__PURE__ */ Promise.resolve(), Rc = () => Jn || (Pc.then(() => Jn = 0), Jn = Date.now());
function Fc(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    Fe(
      jc(o, n.value),
      t,
      5,
      [o]
    );
  };
  return n.value = e, n.attached = Rc(), n;
}
function _s(e, t) {
  return $(e) || T(e) ? e : (Ue(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), Y);
}
function jc(e, t) {
  if (T(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (o) => (s) => !s._stopped && o && o(s)
    );
  } else
    return t;
}
const vs = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Hc = (e, t, n, o, s, r) => {
  const i = s === "svg";
  t === "class" ? xc(e, o, i) : t === "style" ? Sc(e, n, o) : kt(t) ? hn(t) || Ac(e, t, n, o, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Lc(e, t, o, i)) ? (hs(e, t, o), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && ds(e, t, o, i, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !q(o)) ? hs(e, ie(t), o, r, t) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), ds(e, t, o, i));
};
function Lc(e, t, n, o) {
  if (o)
    return !!(t === "innerHTML" || t === "textContent" || t in e && vs(t) && $(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return vs(t) && q(n) ? !1 : t in e;
}
const Uc = ["ctrl", "shift", "alt", "meta"], Kc = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => Uc.some((n) => e[`${n}Key`] && !t.includes(n))
}, Es = (e, t) => {
  const n = e._withMods || (e._withMods = {}), o = t.join(".");
  return n[o] || (n[o] = (s, ...r) => {
    for (let i = 0; i < t.length; i++) {
      const l = Kc[t[i]];
      if (l && l(s, t)) return;
    }
    return e(s, ...r);
  });
}, Bc = /* @__PURE__ */ X({ patchProp: Hc }, yc);
let bs;
function Wc() {
  return bs || (bs = Ul(Bc));
}
const kc = (...e) => {
  const t = Wc().createApp(...e);
  process.env.NODE_ENV !== "production" && (Gc(t), Jc(t));
  const { mount: n } = t;
  return t.mount = (o) => {
    const s = Yc(o);
    if (!s) return;
    const r = t._component;
    !$(r) && !r.render && !r.template && (r.template = s.innerHTML), s.nodeType === 1 && (s.textContent = "");
    const i = n(s, !1, qc(s));
    return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), i;
  }, t;
};
function qc(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Gc(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => Yr(t) || zr(t) || Xr(t),
    writable: !1
  });
}
function Jc(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        Ue(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, o = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return Ue(o), n;
      },
      set() {
        Ue(o);
      }
    });
  }
}
function Yc(e) {
  if (q(e)) {
    const t = document.querySelector(e);
    return process.env.NODE_ENV !== "production" && !t && Ue(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return process.env.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && Ue(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
/**
* vue v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function zc() {
  Ec();
}
process.env.NODE_ENV !== "production" && zc();
const Ir = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, s] of t)
    n[o] = s;
  return n;
}, Xc = {
  name: "VueUploadMultipleImage",
  props: {
    modelValue: {
      type: Array,
      default: () => []
    },
    dragText: {
      type: String,
      default: "Drag & Drop Multiple Images"
    },
    dropText: {
      type: String,
      default: "(or) Drop Images Here"
    },
    browseText: {
      type: String,
      default: "Browse"
    },
    max: {
      type: Number,
      default: 10
    }
  },
  emits: [
    "update:modelValue",
    "upload-success",
    "before-remove",
    "edit-image",
    "data-change",
    "limit-exceeded"
  ],
  data() {
    return {
      files: []
    };
  },
  watch: {
    modelValue: {
      immediate: !0,
      handler(e) {
        this.files = e || [];
      }
    }
  },
  methods: {
    onFileChange(e) {
      const t = Array.from(e.target.files);
      if (this.files.length + t.length > this.max) {
        this.$emit("limit-exceeded", this.files.length + t.length - this.max);
        return;
      }
      t.forEach((n, o) => {
        const s = new FileReader();
        s.onload = (r) => {
          const i = { file: n, dataUrl: r.target.result };
          this.files.push(i), this.$emit("upload-success", i, o, this.files), this.syncFiles();
        }, s.readAsDataURL(n);
      }), e.target.value = "";
    },
    onDrop(e) {
      const t = Array.from(e.dataTransfer.files);
      if (this.files.length + t.length > this.max) {
        this.$emit("limit-exceeded", this.files.length + t.length - this.max);
        return;
      }
      t.forEach((n, o) => {
        const s = new FileReader();
        s.onload = (r) => {
          const i = { file: n, dataUrl: r.target.result };
          this.files.push(i), this.$emit("upload-success", i, o, this.files), this.syncFiles();
        }, s.readAsDataURL(n);
      });
    },
    beforeRemove(e) {
      this.$emit("before-remove", e, () => {
        this.files.splice(e, 1), this.syncFiles();
      }, this.files);
    },
    edit(e, t) {
      this.$emit("edit-image", e, t, this.files);
    },
    syncFiles() {
      this.$emit("update:modelValue", this.files), this.$emit("data-change", this.files);
    }
  }
}, Zc = { class: "vue-upload-multiple-image" }, Qc = { class: "upload-box" }, ef = { class: "upload-message" }, tf = { class: "image-list" }, nf = ["src"], of = { class: "image-actions" }, sf = ["onClick"], rf = ["onClick"];
function lf(e, t, n, o, s, r) {
  return un(), an("div", Zc, [
    ae("div", {
      class: "upload-container",
      onDragover: t[1] || (t[1] = Es(() => {
      }, ["prevent"])),
      onDrop: t[2] || (t[2] = Es((...i) => r.onDrop && r.onDrop(...i), ["prevent"]))
    }, [
      ae("div", Qc, [
        ae("input", {
          type: "file",
          multiple: "",
          accept: "image/*",
          ref: "fileInput",
          class: "upload-input",
          onChange: t[0] || (t[0] = (...i) => r.onFileChange && r.onFileChange(...i))
        }, null, 544),
        ae("div", ef, [
          ae("span", null, nn(n.dragText), 1),
          ae("span", null, nn(n.dropText), 1),
          ae("span", null, nn(n.browseText), 1)
        ])
      ])
    ], 32),
    ae("div", tf, [
      (un(!0), an(be, null, hl(s.files, (i, l) => (un(), an("div", {
        class: "image-item",
        key: l
      }, [
        ae("img", {
          class: "image-preview",
          src: i.dataUrl,
          alt: "preview"
        }, null, 8, nf),
        ae("div", of, [
          ae("button", {
            type: "button",
            class: "btn-edit",
            onClick: (u) => r.edit(i, l)
          }, " Edit ", 8, sf),
          ae("button", {
            type: "button",
            class: "btn-remove",
            onClick: (u) => r.beforeRemove(l)
          }, " Remove ", 8, rf)
        ])
      ]))), 128))
    ])
  ]);
}
const Ar = /* @__PURE__ */ Ir(Xc, [["render", lf], ["__scopeId", "data-v-631d8dc3"]]), cf = {
  name: "App",
  components: {
    VueUploadMultipleImage: Ar
  },
  methods: {
    uploadImageSuccess(e, t, n) {
      console.log("data", e, t, n);
    },
    beforeRemove(e, t, n) {
      console.log("index", e, n), confirm("remove image") && t();
    },
    editImage(e, t, n) {
      console.log("edit data", e, t, n);
    },
    dataChange(e) {
      console.log(e);
    },
    limitExceeded(e) {
      console.log(e);
    }
  }
}, ff = {
  id: "my-strictly-unique-vue-upload-multiple-image",
  class: "flex justify-center"
};
function uf(e, t, n, o, s, r) {
  const i = al("vue-upload-multiple-image");
  return un(), an("div", ff, [
    Ze(i, {
      onUploadSuccess: r.uploadImageSuccess,
      onBeforeRemove: r.beforeRemove,
      onEditImage: r.editImage,
      onDataChange: r.dataChange,
      onLimitExceeded: r.limitExceeded
    }, null, 8, ["onUploadSuccess", "onBeforeRemove", "onEditImage", "onDataChange", "onLimitExceeded"])
  ]);
}
const af = /* @__PURE__ */ Ir(cf, [["render", uf]]);
if (document.querySelector("#my-strictly-unique-vue-upload-multiple-image")) {
  const e = kc(af);
  e.component("VueUploadMultipleImage", Ar), e.mount("#my-strictly-unique-vue-upload-multiple-image");
}
export {
  Ar as default
};
