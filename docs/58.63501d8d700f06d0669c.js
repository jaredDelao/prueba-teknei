(window.webpackJsonp = window.webpackJsonp || []).push([
  [58],
  {
    PduG: function (e, t, s) {
      'use strict';
      function i(e) {
        return null !== e && 'object' == typeof e && 'constructor' in e && e.constructor === Object;
      }
      function a(e, t) {
        void 0 === e && (e = {}),
          void 0 === t && (t = {}),
          Object.keys(t).forEach(function (s) {
            void 0 === e[s] ? (e[s] = t[s]) : i(t[s]) && i(e[s]) && Object.keys(t[s]).length > 0 && a(e[s], t[s]);
          });
      }
      s.r(t),
        s.d(t, 'Swiper', function () {
          return O;
        });
      var n = 'undefined' != typeof document ? document : {},
        r = {
          body: {},
          addEventListener: function () {},
          removeEventListener: function () {},
          activeElement: { blur: function () {}, nodeName: '' },
          querySelector: function () {
            return null;
          },
          querySelectorAll: function () {
            return [];
          },
          getElementById: function () {
            return null;
          },
          createEvent: function () {
            return { initEvent: function () {} };
          },
          createElement: function () {
            return {
              children: [],
              childNodes: [],
              style: {},
              setAttribute: function () {},
              getElementsByTagName: function () {
                return [];
              },
            };
          },
          createElementNS: function () {
            return {};
          },
          importNode: function () {
            return null;
          },
          location: { hash: '', host: '', hostname: '', href: '', origin: '', pathname: '', protocol: '', search: '' },
        };
      a(n, r);
      var o = 'undefined' != typeof window ? window : {};
      a(o, {
        document: r,
        navigator: { userAgent: '' },
        location: { hash: '', host: '', hostname: '', href: '', origin: '', pathname: '', protocol: '', search: '' },
        history: { replaceState: function () {}, pushState: function () {}, go: function () {}, back: function () {} },
        CustomEvent: function () {
          return this;
        },
        addEventListener: function () {},
        removeEventListener: function () {},
        getComputedStyle: function () {
          return {
            getPropertyValue: function () {
              return '';
            },
          };
        },
        Image: function () {},
        Date: function () {},
        screen: {},
        setTimeout: function () {},
        clearTimeout: function () {},
        matchMedia: function () {
          return {};
        },
      });
      class l {
        constructor(e) {
          const t = this;
          for (let s = 0; s < e.length; s += 1) t[s] = e[s];
          return (t.length = e.length), this;
        }
      }
      function d(e, t) {
        const s = [];
        let i = 0;
        if (e && !t && e instanceof l) return e;
        if (e)
          if ('string' == typeof e) {
            let a, r;
            const o = e.trim();
            if (o.indexOf('<') >= 0 && o.indexOf('>') >= 0) {
              let e = 'div';
              for (
                0 === o.indexOf('<li') && (e = 'ul'),
                  0 === o.indexOf('<tr') && (e = 'tbody'),
                  (0 !== o.indexOf('<td') && 0 !== o.indexOf('<th')) || (e = 'tr'),
                  0 === o.indexOf('<tbody') && (e = 'table'),
                  0 === o.indexOf('<option') && (e = 'select'),
                  r = n.createElement(e),
                  r.innerHTML = o,
                  i = 0;
                i < r.childNodes.length;
                i += 1
              )
                s.push(r.childNodes[i]);
            } else
              for (
                a =
                  t || '#' !== e[0] || e.match(/[ .<>:~]/)
                    ? (t || n).querySelectorAll(e.trim())
                    : [n.getElementById(e.trim().split('#')[1])],
                  i = 0;
                i < a.length;
                i += 1
              )
                a[i] && s.push(a[i]);
          } else if (e.nodeType || e === o || e === n) s.push(e);
          else if (e.length > 0 && e[0].nodeType) for (i = 0; i < e.length; i += 1) s.push(e[i]);
        return new l(s);
      }
      function c(e) {
        const t = [];
        for (let s = 0; s < e.length; s += 1) -1 === t.indexOf(e[s]) && t.push(e[s]);
        return t;
      }
      (d.fn = l.prototype), (d.Class = l), (d.Dom7 = l);
      const p = {
        addClass: function (e) {
          if (void 0 === e) return this;
          const t = e.split(' ');
          for (let s = 0; s < t.length; s += 1)
            for (let e = 0; e < this.length; e += 1)
              void 0 !== this[e] && void 0 !== this[e].classList && this[e].classList.add(t[s]);
          return this;
        },
        removeClass: function (e) {
          const t = e.split(' ');
          for (let s = 0; s < t.length; s += 1)
            for (let e = 0; e < this.length; e += 1)
              void 0 !== this[e] && void 0 !== this[e].classList && this[e].classList.remove(t[s]);
          return this;
        },
        hasClass: function (e) {
          return !!this[0] && this[0].classList.contains(e);
        },
        toggleClass: function (e) {
          const t = e.split(' ');
          for (let s = 0; s < t.length; s += 1)
            for (let e = 0; e < this.length; e += 1)
              void 0 !== this[e] && void 0 !== this[e].classList && this[e].classList.toggle(t[s]);
          return this;
        },
        attr: function (e, t) {
          if (1 === arguments.length && 'string' == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
          for (let s = 0; s < this.length; s += 1)
            if (2 === arguments.length) this[s].setAttribute(e, t);
            else for (const t in e) (this[s][t] = e[t]), this[s].setAttribute(t, e[t]);
          return this;
        },
        removeAttr: function (e) {
          for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
          return this;
        },
        data: function (e, t) {
          let s;
          if (void 0 !== t) {
            for (let i = 0; i < this.length; i += 1)
              (s = this[i]),
                s.dom7ElementDataStorage || (s.dom7ElementDataStorage = {}),
                (s.dom7ElementDataStorage[e] = t);
            return this;
          }
          if (((s = this[0]), s))
            return s.dom7ElementDataStorage && e in s.dom7ElementDataStorage
              ? s.dom7ElementDataStorage[e]
              : s.getAttribute('data-' + e) || void 0;
        },
        transform: function (e) {
          for (let t = 0; t < this.length; t += 1) {
            const s = this[t].style;
            (s.webkitTransform = e), (s.transform = e);
          }
          return this;
        },
        transition: function (e) {
          'string' != typeof e && (e += 'ms');
          for (let t = 0; t < this.length; t += 1) {
            const s = this[t].style;
            (s.webkitTransitionDuration = e), (s.transitionDuration = e);
          }
          return this;
        },
        on: function (...e) {
          let [t, s, i, a] = e;
          function n(e) {
            const t = e.target;
            if (!t) return;
            const a = e.target.dom7EventData || [];
            if ((a.indexOf(e) < 0 && a.unshift(e), d(t).is(s))) i.apply(t, a);
            else {
              const e = d(t).parents();
              for (let t = 0; t < e.length; t += 1) d(e[t]).is(s) && i.apply(e[t], a);
            }
          }
          function r(e) {
            const t = (e && e.target && e.target.dom7EventData) || [];
            t.indexOf(e) < 0 && t.unshift(e), i.apply(this, t);
          }
          'function' == typeof e[1] && (([t, i, a] = e), (s = void 0)), a || (a = !1);
          const o = t.split(' ');
          let l;
          for (let d = 0; d < this.length; d += 1) {
            const e = this[d];
            if (s)
              for (l = 0; l < o.length; l += 1) {
                const t = o[l];
                e.dom7LiveListeners || (e.dom7LiveListeners = {}),
                  e.dom7LiveListeners[t] || (e.dom7LiveListeners[t] = []),
                  e.dom7LiveListeners[t].push({ listener: i, proxyListener: n }),
                  e.addEventListener(t, n, a);
              }
            else
              for (l = 0; l < o.length; l += 1) {
                const t = o[l];
                e.dom7Listeners || (e.dom7Listeners = {}),
                  e.dom7Listeners[t] || (e.dom7Listeners[t] = []),
                  e.dom7Listeners[t].push({ listener: i, proxyListener: r }),
                  e.addEventListener(t, r, a);
              }
          }
          return this;
        },
        off: function (...e) {
          let [t, s, i, a] = e;
          'function' == typeof e[1] && (([t, i, a] = e), (s = void 0)), a || (a = !1);
          const n = t.split(' ');
          for (let r = 0; r < n.length; r += 1) {
            const e = n[r];
            for (let t = 0; t < this.length; t += 1) {
              const n = this[t];
              let r;
              if (
                (!s && n.dom7Listeners
                  ? (r = n.dom7Listeners[e])
                  : s && n.dom7LiveListeners && (r = n.dom7LiveListeners[e]),
                r && r.length)
              )
                for (let t = r.length - 1; t >= 0; t -= 1) {
                  const s = r[t];
                  (i && s.listener === i) || (i && s.listener && s.listener.dom7proxy && s.listener.dom7proxy === i)
                    ? (n.removeEventListener(e, s.proxyListener, a), r.splice(t, 1))
                    : i || (n.removeEventListener(e, s.proxyListener, a), r.splice(t, 1));
                }
            }
          }
          return this;
        },
        trigger: function (...e) {
          const t = e[0].split(' '),
            s = e[1];
          for (let a = 0; a < t.length; a += 1) {
            const r = t[a];
            for (let t = 0; t < this.length; t += 1) {
              const a = this[t];
              let l;
              try {
                l = new o.CustomEvent(r, { detail: s, bubbles: !0, cancelable: !0 });
              } catch (i) {
                (l = n.createEvent('Event')), l.initEvent(r, !0, !0), (l.detail = s);
              }
              (a.dom7EventData = e.filter((e, t) => t > 0)),
                a.dispatchEvent(l),
                (a.dom7EventData = []),
                delete a.dom7EventData;
            }
          }
          return this;
        },
        transitionEnd: function (e) {
          const t = ['webkitTransitionEnd', 'transitionend'],
            s = this;
          let i;
          function a(n) {
            if (n.target === this) for (e.call(this, n), i = 0; i < t.length; i += 1) s.off(t[i], a);
          }
          if (e) for (i = 0; i < t.length; i += 1) s.on(t[i], a);
          return this;
        },
        outerWidth: function (e) {
          if (this.length > 0) {
            if (e) {
              const e = this.styles();
              return (
                this[0].offsetWidth +
                parseFloat(e.getPropertyValue('margin-right')) +
                parseFloat(e.getPropertyValue('margin-left'))
              );
            }
            return this[0].offsetWidth;
          }
          return null;
        },
        outerHeight: function (e) {
          if (this.length > 0) {
            if (e) {
              const e = this.styles();
              return (
                this[0].offsetHeight +
                parseFloat(e.getPropertyValue('margin-top')) +
                parseFloat(e.getPropertyValue('margin-bottom'))
              );
            }
            return this[0].offsetHeight;
          }
          return null;
        },
        offset: function () {
          if (this.length > 0) {
            const e = this[0],
              t = e.getBoundingClientRect(),
              s = n.body;
            return {
              top: t.top + (e === o ? o.scrollY : e.scrollTop) - (e.clientTop || s.clientTop || 0),
              left: t.left + (e === o ? o.scrollX : e.scrollLeft) - (e.clientLeft || s.clientLeft || 0),
            };
          }
          return null;
        },
        css: function (e, t) {
          let s;
          if (1 === arguments.length) {
            if ('string' != typeof e) {
              for (s = 0; s < this.length; s += 1) for (let t in e) this[s].style[t] = e[t];
              return this;
            }
            if (this[0]) return o.getComputedStyle(this[0], null).getPropertyValue(e);
          }
          if (2 === arguments.length && 'string' == typeof e) {
            for (s = 0; s < this.length; s += 1) this[s].style[e] = t;
            return this;
          }
          return this;
        },
        each: function (e) {
          if (!e) return this;
          for (let t = 0; t < this.length; t += 1) if (!1 === e.call(this[t], t, this[t])) return this;
          return this;
        },
        html: function (e) {
          if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
          for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
          return this;
        },
        text: function (e) {
          if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
          for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
          return this;
        },
        is: function (e) {
          const t = this[0];
          let s, i;
          if (!t || void 0 === e) return !1;
          if ('string' == typeof e) {
            if (t.matches) return t.matches(e);
            if (t.webkitMatchesSelector) return t.webkitMatchesSelector(e);
            if (t.msMatchesSelector) return t.msMatchesSelector(e);
            for (s = d(e), i = 0; i < s.length; i += 1) if (s[i] === t) return !0;
            return !1;
          }
          if (e === n) return t === n;
          if (e === o) return t === o;
          if (e.nodeType || e instanceof l) {
            for (s = e.nodeType ? [e] : e, i = 0; i < s.length; i += 1) if (s[i] === t) return !0;
            return !1;
          }
          return !1;
        },
        index: function () {
          let e,
            t = this[0];
          if (t) {
            for (e = 0; null !== (t = t.previousSibling); ) 1 === t.nodeType && (e += 1);
            return e;
          }
        },
        eq: function (e) {
          if (void 0 === e) return this;
          const t = this.length;
          let s;
          return e > t - 1 ? new l([]) : e < 0 ? ((s = t + e), new l(s < 0 ? [] : [this[s]])) : new l([this[e]]);
        },
        append: function (...e) {
          let t;
          for (let s = 0; s < e.length; s += 1) {
            t = e[s];
            for (let e = 0; e < this.length; e += 1)
              if ('string' == typeof t) {
                const s = n.createElement('div');
                for (s.innerHTML = t; s.firstChild; ) this[e].appendChild(s.firstChild);
              } else if (t instanceof l) for (let s = 0; s < t.length; s += 1) this[e].appendChild(t[s]);
              else this[e].appendChild(t);
          }
          return this;
        },
        prepend: function (e) {
          let t, s;
          for (t = 0; t < this.length; t += 1)
            if ('string' == typeof e) {
              const i = n.createElement('div');
              for (i.innerHTML = e, s = i.childNodes.length - 1; s >= 0; s -= 1)
                this[t].insertBefore(i.childNodes[s], this[t].childNodes[0]);
            } else if (e instanceof l)
              for (s = 0; s < e.length; s += 1) this[t].insertBefore(e[s], this[t].childNodes[0]);
            else this[t].insertBefore(e, this[t].childNodes[0]);
          return this;
        },
        next: function (e) {
          return this.length > 0
            ? e
              ? this[0].nextElementSibling && d(this[0].nextElementSibling).is(e)
                ? new l([this[0].nextElementSibling])
                : new l([])
              : new l(this[0].nextElementSibling ? [this[0].nextElementSibling] : [])
            : new l([]);
        },
        nextAll: function (e) {
          const t = [];
          let s = this[0];
          if (!s) return new l([]);
          for (; s.nextElementSibling; ) {
            const i = s.nextElementSibling;
            e ? d(i).is(e) && t.push(i) : t.push(i), (s = i);
          }
          return new l(t);
        },
        prev: function (e) {
          if (this.length > 0) {
            const t = this[0];
            return e
              ? t.previousElementSibling && d(t.previousElementSibling).is(e)
                ? new l([t.previousElementSibling])
                : new l([])
              : new l(t.previousElementSibling ? [t.previousElementSibling] : []);
          }
          return new l([]);
        },
        prevAll: function (e) {
          const t = [];
          let s = this[0];
          if (!s) return new l([]);
          for (; s.previousElementSibling; ) {
            const i = s.previousElementSibling;
            e ? d(i).is(e) && t.push(i) : t.push(i), (s = i);
          }
          return new l(t);
        },
        parent: function (e) {
          const t = [];
          for (let s = 0; s < this.length; s += 1)
            null !== this[s].parentNode &&
              (e ? d(this[s].parentNode).is(e) && t.push(this[s].parentNode) : t.push(this[s].parentNode));
          return d(c(t));
        },
        parents: function (e) {
          const t = [];
          for (let s = 0; s < this.length; s += 1) {
            let i = this[s].parentNode;
            for (; i; ) e ? d(i).is(e) && t.push(i) : t.push(i), (i = i.parentNode);
          }
          return d(c(t));
        },
        closest: function (e) {
          let t = this;
          return void 0 === e ? new l([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
        },
        find: function (e) {
          const t = [];
          for (let s = 0; s < this.length; s += 1) {
            const i = this[s].querySelectorAll(e);
            for (let e = 0; e < i.length; e += 1) t.push(i[e]);
          }
          return new l(t);
        },
        children: function (e) {
          const t = [];
          for (let s = 0; s < this.length; s += 1) {
            const i = this[s].childNodes;
            for (let s = 0; s < i.length; s += 1)
              e ? 1 === i[s].nodeType && d(i[s]).is(e) && t.push(i[s]) : 1 === i[s].nodeType && t.push(i[s]);
          }
          return new l(c(t));
        },
        filter: function (e) {
          const t = [],
            s = this;
          for (let i = 0; i < s.length; i += 1) e.call(s[i], i, s[i]) && t.push(s[i]);
          return new l(t);
        },
        remove: function () {
          for (let e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
          return this;
        },
        add: function (...e) {
          const t = this;
          let s, i;
          for (s = 0; s < e.length; s += 1) {
            const a = d(e[s]);
            for (i = 0; i < a.length; i += 1) (t[t.length] = a[i]), (t.length += 1);
          }
          return t;
        },
        styles: function () {
          return this[0] ? o.getComputedStyle(this[0], null) : {};
        },
      };
      Object.keys(p).forEach((e) => {
        d.fn[e] = d.fn[e] || p[e];
      });
      const u = {
          deleteProps(e) {
            const t = e;
            Object.keys(t).forEach((e) => {
              try {
                t[e] = null;
              } catch (s) {}
              try {
                delete t[e];
              } catch (s) {}
            });
          },
          nextTick: (e, t = 0) => setTimeout(e, t),
          now: () => Date.now(),
          getTranslate(e, t = 'x') {
            let s, i, a;
            const n = o.getComputedStyle(e, null);
            return (
              o.WebKitCSSMatrix
                ? ((i = n.transform || n.webkitTransform),
                  i.split(',').length > 6 &&
                    (i = i
                      .split(', ')
                      .map((e) => e.replace(',', '.'))
                      .join(', ')),
                  (a = new o.WebKitCSSMatrix('none' === i ? '' : i)))
                : ((a =
                    n.MozTransform ||
                    n.OTransform ||
                    n.MsTransform ||
                    n.msTransform ||
                    n.transform ||
                    n.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,')),
                  (s = a.toString().split(','))),
              'x' === t && (i = o.WebKitCSSMatrix ? a.m41 : 16 === s.length ? parseFloat(s[12]) : parseFloat(s[4])),
              'y' === t && (i = o.WebKitCSSMatrix ? a.m42 : 16 === s.length ? parseFloat(s[13]) : parseFloat(s[5])),
              i || 0
            );
          },
          parseUrlQuery(e) {
            const t = {};
            let s,
              i,
              a,
              n,
              r = e || o.location.href;
            if ('string' == typeof r && r.length)
              for (
                r = r.indexOf('?') > -1 ? r.replace(/\S*\?/, '') : '',
                  i = r.split('&').filter((e) => '' !== e),
                  n = i.length,
                  s = 0;
                s < n;
                s += 1
              )
                (a = i[s].replace(/#\S+/g, '').split('=')),
                  (t[decodeURIComponent(a[0])] = void 0 === a[1] ? void 0 : decodeURIComponent(a[1]) || '');
            return t;
          },
          isObject: (e) => 'object' == typeof e && null !== e && e.constructor && e.constructor === Object,
          extend(...e) {
            const t = Object(e[0]),
              s = ['__proto__', 'constructor', 'prototype'];
            for (let i = 1; i < e.length; i += 1) {
              const a = e[i];
              if (null != a) {
                const e = Object.keys(Object(a)).filter((e) => s.indexOf(e) < 0);
                for (let s = 0, i = e.length; s < i; s += 1) {
                  const i = e[s],
                    n = Object.getOwnPropertyDescriptor(a, i);
                  void 0 !== n &&
                    n.enumerable &&
                    (u.isObject(t[i]) && u.isObject(a[i])
                      ? u.extend(t[i], a[i])
                      : !u.isObject(t[i]) && u.isObject(a[i])
                      ? ((t[i] = {}), u.extend(t[i], a[i]))
                      : (t[i] = a[i]));
                }
              }
            }
            return t;
          },
        },
        h = {
          touch: !!('ontouchstart' in o || (o.DocumentTouch && n instanceof o.DocumentTouch)),
          pointerEvents: !!o.PointerEvent && 'maxTouchPoints' in o.navigator && o.navigator.maxTouchPoints >= 0,
          observer: 'MutationObserver' in o || 'WebkitMutationObserver' in o,
          passiveListener: (function () {
            let e = !1;
            try {
              const t = Object.defineProperty({}, 'passive', {
                get() {
                  e = !0;
                },
              });
              o.addEventListener('testPassiveListener', null, t);
            } catch (t) {}
            return e;
          })(),
          gestures: 'ongesturestart' in o,
        };
      class m {
        constructor(e = {}) {
          const t = this;
          (t.params = e),
            (t.eventsListeners = {}),
            t.params &&
              t.params.on &&
              Object.keys(t.params.on).forEach((e) => {
                t.on(e, t.params.on[e]);
              });
        }
        on(e, t, s) {
          const i = this;
          if ('function' != typeof t) return i;
          const a = s ? 'unshift' : 'push';
          return (
            e.split(' ').forEach((e) => {
              i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][a](t);
            }),
            i
          );
        }
        once(e, t, s) {
          const i = this;
          if ('function' != typeof t) return i;
          function a(...s) {
            i.off(e, a), a.f7proxy && delete a.f7proxy, t.apply(i, s);
          }
          return (a.f7proxy = t), i.on(e, a, s);
        }
        off(e, t) {
          const s = this;
          return s.eventsListeners
            ? (e.split(' ').forEach((e) => {
                void 0 === t
                  ? (s.eventsListeners[e] = [])
                  : s.eventsListeners[e] &&
                    s.eventsListeners[e].length &&
                    s.eventsListeners[e].forEach((i, a) => {
                      (i === t || (i.f7proxy && i.f7proxy === t)) && s.eventsListeners[e].splice(a, 1);
                    });
              }),
              s)
            : s;
        }
        emit(...e) {
          const t = this;
          if (!t.eventsListeners) return t;
          let s, i, a;
          return (
            'string' == typeof e[0] || Array.isArray(e[0])
              ? ((s = e[0]), (i = e.slice(1, e.length)), (a = t))
              : ((s = e[0].events), (i = e[0].data), (a = e[0].context || t)),
            (Array.isArray(s) ? s : s.split(' ')).forEach((e) => {
              if (t.eventsListeners && t.eventsListeners[e]) {
                const s = [];
                t.eventsListeners[e].forEach((e) => {
                  s.push(e);
                }),
                  s.forEach((e) => {
                    e.apply(a, i);
                  });
              }
            }),
            t
          );
        }
        useModulesParams(e) {
          const t = this;
          t.modules &&
            Object.keys(t.modules).forEach((s) => {
              const i = t.modules[s];
              i.params && u.extend(e, i.params);
            });
        }
        useModules(e = {}) {
          const t = this;
          t.modules &&
            Object.keys(t.modules).forEach((s) => {
              const i = t.modules[s],
                a = e[s] || {};
              i.instance &&
                Object.keys(i.instance).forEach((e) => {
                  const s = i.instance[e];
                  t[e] = 'function' == typeof s ? s.bind(t) : s;
                }),
                i.on &&
                  t.on &&
                  Object.keys(i.on).forEach((e) => {
                    t.on(e, i.on[e]);
                  }),
                i.create && i.create.bind(t)(a);
            });
        }
        static set components(e) {
          this.use && this.use(e);
        }
        static installModule(e, ...t) {
          const s = this;
          s.prototype.modules || (s.prototype.modules = {});
          const i = e.name || `${Object.keys(s.prototype.modules).length}_${u.now()}`;
          return (
            (s.prototype.modules[i] = e),
            e.proto &&
              Object.keys(e.proto).forEach((t) => {
                s.prototype[t] = e.proto[t];
              }),
            e.static &&
              Object.keys(e.static).forEach((t) => {
                s[t] = e.static[t];
              }),
            e.install && e.install.apply(s, t),
            s
          );
        }
        static use(e, ...t) {
          const s = this;
          return Array.isArray(e) ? (e.forEach((e) => s.installModule(e)), s) : s.installModule(e, ...t);
        }
      }
      var g = {
          updateSize: function () {
            const e = this;
            let t, s;
            const i = e.$el;
            (t = void 0 !== e.params.width ? e.params.width : i[0].clientWidth),
              (s = void 0 !== e.params.height ? e.params.height : i[0].clientHeight),
              (0 === t && e.isHorizontal()) ||
                (0 === s && e.isVertical()) ||
                ((t = t - parseInt(i.css('padding-left'), 10) - parseInt(i.css('padding-right'), 10)),
                (s = s - parseInt(i.css('padding-top'), 10) - parseInt(i.css('padding-bottom'), 10)),
                u.extend(e, { width: t, height: s, size: e.isHorizontal() ? t : s }));
          },
          updateSlides: function () {
            const e = this,
              t = e.params,
              { $wrapperEl: s, size: i, rtlTranslate: a, wrongRTL: n } = e,
              r = e.virtual && t.virtual.enabled,
              l = r ? e.virtual.slides.length : e.slides.length,
              d = s.children('.' + e.params.slideClass),
              c = r ? e.virtual.slides.length : d.length;
            let p = [];
            const h = [],
              m = [];
            function g(e) {
              return !t.cssMode || e !== d.length - 1;
            }
            let f = t.slidesOffsetBefore;
            'function' == typeof f && (f = t.slidesOffsetBefore.call(e));
            let v = t.slidesOffsetAfter;
            'function' == typeof v && (v = t.slidesOffsetAfter.call(e));
            const b = e.snapGrid.length,
              w = e.snapGrid.length;
            let T,
              E,
              y = t.spaceBetween,
              S = -f,
              x = 0,
              C = 0;
            if (void 0 === i) return;
            'string' == typeof y && y.indexOf('%') >= 0 && (y = (parseFloat(y.replace('%', '')) / 100) * i),
              (e.virtualSize = -y),
              d.css(a ? { marginLeft: '', marginTop: '' } : { marginRight: '', marginBottom: '' }),
              t.slidesPerColumn > 1 &&
                ((T =
                  Math.floor(c / t.slidesPerColumn) === c / e.params.slidesPerColumn
                    ? c
                    : Math.ceil(c / t.slidesPerColumn) * t.slidesPerColumn),
                'auto' !== t.slidesPerView &&
                  'row' === t.slidesPerColumnFill &&
                  (T = Math.max(T, t.slidesPerView * t.slidesPerColumn)));
            const M = t.slidesPerColumn,
              $ = T / M,
              P = Math.floor(c / t.slidesPerColumn);
            for (let u = 0; u < c; u += 1) {
              E = 0;
              const s = d.eq(u);
              if (t.slidesPerColumn > 1) {
                let i, a, n;
                if ('row' === t.slidesPerColumnFill && t.slidesPerGroup > 1) {
                  const e = Math.floor(u / (t.slidesPerGroup * t.slidesPerColumn)),
                    r = u - t.slidesPerColumn * t.slidesPerGroup * e,
                    o =
                      0 === e
                        ? t.slidesPerGroup
                        : Math.min(Math.ceil((c - e * M * t.slidesPerGroup) / M), t.slidesPerGroup);
                  (n = Math.floor(r / o)),
                    (a = r - n * o + e * t.slidesPerGroup),
                    (i = a + (n * T) / M),
                    s.css({
                      '-webkit-box-ordinal-group': i,
                      '-moz-box-ordinal-group': i,
                      '-ms-flex-order': i,
                      '-webkit-order': i,
                      order: i,
                    });
                } else
                  'column' === t.slidesPerColumnFill
                    ? ((a = Math.floor(u / M)),
                      (n = u - a * M),
                      (a > P || (a === P && n === M - 1)) && ((n += 1), n >= M && ((n = 0), (a += 1))))
                    : ((n = Math.floor(u / $)), (a = u - n * $));
                s.css(
                  'margin-' + (e.isHorizontal() ? 'top' : 'left'),
                  0 !== n && t.spaceBetween && t.spaceBetween + 'px'
                );
              }
              if ('none' !== s.css('display')) {
                if ('auto' === t.slidesPerView) {
                  const i = o.getComputedStyle(s[0], null),
                    a = s[0].style.transform,
                    n = s[0].style.webkitTransform;
                  if (
                    (a && (s[0].style.transform = 'none'), n && (s[0].style.webkitTransform = 'none'), t.roundLengths)
                  )
                    E = e.isHorizontal() ? s.outerWidth(!0) : s.outerHeight(!0);
                  else if (e.isHorizontal()) {
                    const e = parseFloat(i.getPropertyValue('width')),
                      t = parseFloat(i.getPropertyValue('padding-left')),
                      s = parseFloat(i.getPropertyValue('padding-right')),
                      a = parseFloat(i.getPropertyValue('margin-left')),
                      n = parseFloat(i.getPropertyValue('margin-right')),
                      r = i.getPropertyValue('box-sizing');
                    E = r && 'border-box' === r ? e + a + n : e + t + s + a + n;
                  } else {
                    const e = parseFloat(i.getPropertyValue('height')),
                      t = parseFloat(i.getPropertyValue('padding-top')),
                      s = parseFloat(i.getPropertyValue('padding-bottom')),
                      a = parseFloat(i.getPropertyValue('margin-top')),
                      n = parseFloat(i.getPropertyValue('margin-bottom')),
                      r = i.getPropertyValue('box-sizing');
                    E = r && 'border-box' === r ? e + a + n : e + t + s + a + n;
                  }
                  a && (s[0].style.transform = a),
                    n && (s[0].style.webkitTransform = n),
                    t.roundLengths && (E = Math.floor(E));
                } else
                  (E = (i - (t.slidesPerView - 1) * y) / t.slidesPerView),
                    t.roundLengths && (E = Math.floor(E)),
                    d[u] && (e.isHorizontal() ? (d[u].style.width = E + 'px') : (d[u].style.height = E + 'px'));
                d[u] && (d[u].swiperSlideSize = E),
                  m.push(E),
                  t.centeredSlides
                    ? ((S = S + E / 2 + x / 2 + y),
                      0 === x && 0 !== u && (S = S - i / 2 - y),
                      0 === u && (S = S - i / 2 - y),
                      Math.abs(S) < 0.001 && (S = 0),
                      t.roundLengths && (S = Math.floor(S)),
                      C % t.slidesPerGroup == 0 && p.push(S),
                      h.push(S))
                    : (t.roundLengths && (S = Math.floor(S)),
                      (C - Math.min(e.params.slidesPerGroupSkip, C)) % e.params.slidesPerGroup == 0 && p.push(S),
                      h.push(S),
                      (S = S + E + y)),
                  (e.virtualSize += E + y),
                  (x = E),
                  (C += 1);
              }
            }
            let k;
            if (
              ((e.virtualSize = Math.max(e.virtualSize, i) + v),
              a &&
                n &&
                ('slide' === t.effect || 'coverflow' === t.effect) &&
                s.css({ width: e.virtualSize + t.spaceBetween + 'px' }),
              t.setWrapperSize &&
                (e.isHorizontal()
                  ? s.css({ width: e.virtualSize + t.spaceBetween + 'px' })
                  : s.css({ height: e.virtualSize + t.spaceBetween + 'px' })),
              t.slidesPerColumn > 1 &&
                ((e.virtualSize = (E + t.spaceBetween) * T),
                (e.virtualSize = Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween),
                e.isHorizontal()
                  ? s.css({ width: e.virtualSize + t.spaceBetween + 'px' })
                  : s.css({ height: e.virtualSize + t.spaceBetween + 'px' }),
                t.centeredSlides))
            ) {
              k = [];
              for (let s = 0; s < p.length; s += 1) {
                let i = p[s];
                t.roundLengths && (i = Math.floor(i)), p[s] < e.virtualSize + p[0] && k.push(i);
              }
              p = k;
            }
            if (!t.centeredSlides) {
              k = [];
              for (let s = 0; s < p.length; s += 1) {
                let a = p[s];
                t.roundLengths && (a = Math.floor(a)), p[s] <= e.virtualSize - i && k.push(a);
              }
              (p = k), Math.floor(e.virtualSize - i) - Math.floor(p[p.length - 1]) > 1 && p.push(e.virtualSize - i);
            }
            if (
              (0 === p.length && (p = [0]),
              0 !== t.spaceBetween &&
                (e.isHorizontal()
                  ? a
                    ? d.filter(g).css({ marginLeft: y + 'px' })
                    : d.filter(g).css({ marginRight: y + 'px' })
                  : d.filter(g).css({ marginBottom: y + 'px' })),
              t.centeredSlides && t.centeredSlidesBounds)
            ) {
              let e = 0;
              m.forEach((s) => {
                e += s + (t.spaceBetween ? t.spaceBetween : 0);
              }),
                (e -= t.spaceBetween);
              const s = e - i;
              p = p.map((e) => (e < 0 ? -f : e > s ? s + v : e));
            }
            if (t.centerInsufficientSlides) {
              let e = 0;
              if (
                (m.forEach((s) => {
                  e += s + (t.spaceBetween ? t.spaceBetween : 0);
                }),
                (e -= t.spaceBetween),
                e < i)
              ) {
                const t = (i - e) / 2;
                p.forEach((e, s) => {
                  p[s] = e - t;
                }),
                  h.forEach((e, s) => {
                    h[s] = e + t;
                  });
              }
            }
            u.extend(e, { slides: d, snapGrid: p, slidesGrid: h, slidesSizesGrid: m }),
              c !== l && e.emit('slidesLengthChange'),
              p.length !== b && (e.params.watchOverflow && e.checkOverflow(), e.emit('snapGridLengthChange')),
              h.length !== w && e.emit('slidesGridLengthChange'),
              (t.watchSlidesProgress || t.watchSlidesVisibility) && e.updateSlidesOffset();
          },
          updateAutoHeight: function (e) {
            const t = this,
              s = [];
            let i,
              a = 0;
            if (
              ('number' == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed),
              'auto' !== t.params.slidesPerView && t.params.slidesPerView > 1)
            )
              if (t.params.centeredSlides)
                t.visibleSlides.each((e, t) => {
                  s.push(t);
                });
              else
                for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
                  const e = t.activeIndex + i;
                  if (e > t.slides.length) break;
                  s.push(t.slides.eq(e)[0]);
                }
            else s.push(t.slides.eq(t.activeIndex)[0]);
            for (i = 0; i < s.length; i += 1)
              if (void 0 !== s[i]) {
                const e = s[i].offsetHeight;
                a = e > a ? e : a;
              }
            a && t.$wrapperEl.css('height', a + 'px');
          },
          updateSlidesOffset: function () {
            const e = this,
              t = e.slides;
            for (let s = 0; s < t.length; s += 1)
              t[s].swiperSlideOffset = e.isHorizontal() ? t[s].offsetLeft : t[s].offsetTop;
          },
          updateSlidesProgress: function (e = (this && this.translate) || 0) {
            const t = this,
              s = t.params,
              { slides: i, rtlTranslate: a } = t;
            if (0 === i.length) return;
            void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
            let n = -e;
            a && (n = e), i.removeClass(s.slideVisibleClass), (t.visibleSlidesIndexes = []), (t.visibleSlides = []);
            for (let r = 0; r < i.length; r += 1) {
              const e = i[r],
                o =
                  (n + (s.centeredSlides ? t.minTranslate() : 0) - e.swiperSlideOffset) /
                  (e.swiperSlideSize + s.spaceBetween);
              if (s.watchSlidesVisibility || (s.centeredSlides && s.autoHeight)) {
                const a = -(n - e.swiperSlideOffset),
                  o = a + t.slidesSizesGrid[r];
                ((a >= 0 && a < t.size - 1) || (o > 1 && o <= t.size) || (a <= 0 && o >= t.size)) &&
                  (t.visibleSlides.push(e), t.visibleSlidesIndexes.push(r), i.eq(r).addClass(s.slideVisibleClass));
              }
              e.progress = a ? -o : o;
            }
            t.visibleSlides = d(t.visibleSlides);
          },
          updateProgress: function (e) {
            const t = this;
            if (void 0 === e) {
              const s = t.rtlTranslate ? -1 : 1;
              e = (t && t.translate && t.translate * s) || 0;
            }
            const s = t.params,
              i = t.maxTranslate() - t.minTranslate();
            let { progress: a, isBeginning: n, isEnd: r } = t;
            const o = n,
              l = r;
            0 === i ? ((a = 0), (n = !0), (r = !0)) : ((a = (e - t.minTranslate()) / i), (n = a <= 0), (r = a >= 1)),
              u.extend(t, { progress: a, isBeginning: n, isEnd: r }),
              (s.watchSlidesProgress || s.watchSlidesVisibility || (s.centeredSlides && s.autoHeight)) &&
                t.updateSlidesProgress(e),
              n && !o && t.emit('reachBeginning toEdge'),
              r && !l && t.emit('reachEnd toEdge'),
              ((o && !n) || (l && !r)) && t.emit('fromEdge'),
              t.emit('progress', a);
          },
          updateSlidesClasses: function () {
            const e = this,
              { slides: t, params: s, $wrapperEl: i, activeIndex: a, realIndex: n } = e,
              r = e.virtual && s.virtual.enabled;
            let o;
            t.removeClass(
              `${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`
            ),
              (o = r ? e.$wrapperEl.find(`.${s.slideClass}[data-swiper-slide-index="${a}"]`) : t.eq(a)),
              o.addClass(s.slideActiveClass),
              s.loop &&
                (o.hasClass(s.slideDuplicateClass)
                  ? i
                      .children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${n}"]`)
                      .addClass(s.slideDuplicateActiveClass)
                  : i
                      .children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${n}"]`)
                      .addClass(s.slideDuplicateActiveClass));
            let l = o
              .nextAll('.' + s.slideClass)
              .eq(0)
              .addClass(s.slideNextClass);
            s.loop && 0 === l.length && ((l = t.eq(0)), l.addClass(s.slideNextClass));
            let d = o
              .prevAll('.' + s.slideClass)
              .eq(0)
              .addClass(s.slidePrevClass);
            s.loop && 0 === d.length && ((d = t.eq(-1)), d.addClass(s.slidePrevClass)),
              s.loop &&
                (l.hasClass(s.slideDuplicateClass)
                  ? i
                      .children(
                        `.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${l.attr(
                          'data-swiper-slide-index'
                        )}"]`
                      )
                      .addClass(s.slideDuplicateNextClass)
                  : i
                      .children(
                        `.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${l.attr(
                          'data-swiper-slide-index'
                        )}"]`
                      )
                      .addClass(s.slideDuplicateNextClass),
                d.hasClass(s.slideDuplicateClass)
                  ? i
                      .children(
                        `.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${d.attr(
                          'data-swiper-slide-index'
                        )}"]`
                      )
                      .addClass(s.slideDuplicatePrevClass)
                  : i
                      .children(
                        `.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${d.attr(
                          'data-swiper-slide-index'
                        )}"]`
                      )
                      .addClass(s.slideDuplicatePrevClass));
          },
          updateActiveIndex: function (e) {
            const t = this,
              s = t.rtlTranslate ? t.translate : -t.translate,
              { slidesGrid: i, snapGrid: a, params: n, activeIndex: r, realIndex: o, snapIndex: l } = t;
            let d,
              c = e;
            if (void 0 === c) {
              for (let e = 0; e < i.length; e += 1)
                void 0 !== i[e + 1]
                  ? s >= i[e] && s < i[e + 1] - (i[e + 1] - i[e]) / 2
                    ? (c = e)
                    : s >= i[e] && s < i[e + 1] && (c = e + 1)
                  : s >= i[e] && (c = e);
              n.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0);
            }
            if (a.indexOf(s) >= 0) d = a.indexOf(s);
            else {
              const e = Math.min(n.slidesPerGroupSkip, c);
              d = e + Math.floor((c - e) / n.slidesPerGroup);
            }
            if ((d >= a.length && (d = a.length - 1), c === r))
              return void (d !== l && ((t.snapIndex = d), t.emit('snapIndexChange')));
            const p = parseInt(t.slides.eq(c).attr('data-swiper-slide-index') || c, 10);
            u.extend(t, { snapIndex: d, realIndex: p, previousIndex: r, activeIndex: c }),
              t.emit('activeIndexChange'),
              t.emit('snapIndexChange'),
              o !== p && t.emit('realIndexChange'),
              (t.initialized || t.params.runCallbacksOnInit) && t.emit('slideChange');
          },
          updateClickedSlide: function (e) {
            const t = this,
              s = t.params,
              i = d(e.target).closest('.' + s.slideClass)[0];
            let a = !1;
            if (i) for (let n = 0; n < t.slides.length; n += 1) t.slides[n] === i && (a = !0);
            if (!i || !a) return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
            (t.clickedSlide = i),
              (t.clickedIndex =
                t.virtual && t.params.virtual.enabled
                  ? parseInt(d(i).attr('data-swiper-slide-index'), 10)
                  : d(i).index()),
              s.slideToClickedSlide &&
                void 0 !== t.clickedIndex &&
                t.clickedIndex !== t.activeIndex &&
                t.slideToClickedSlide();
          },
        },
        f = {
          getTranslate: function (e = this.isHorizontal() ? 'x' : 'y') {
            const { params: t, rtlTranslate: s, translate: i, $wrapperEl: a } = this;
            if (t.virtualTranslate) return s ? -i : i;
            if (t.cssMode) return i;
            let n = u.getTranslate(a[0], e);
            return s && (n = -n), n || 0;
          },
          setTranslate: function (e, t) {
            const s = this,
              { rtlTranslate: i, params: a, $wrapperEl: n, wrapperEl: r, progress: o } = s;
            let l,
              d = 0,
              c = 0;
            s.isHorizontal() ? (d = i ? -e : e) : (c = e),
              a.roundLengths && ((d = Math.floor(d)), (c = Math.floor(c))),
              a.cssMode
                ? (r[s.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = s.isHorizontal() ? -d : -c)
                : a.virtualTranslate || n.transform(`translate3d(${d}px, ${c}px, 0px)`),
              (s.previousTranslate = s.translate),
              (s.translate = s.isHorizontal() ? d : c);
            const p = s.maxTranslate() - s.minTranslate();
            (l = 0 === p ? 0 : (e - s.minTranslate()) / p),
              l !== o && s.updateProgress(e),
              s.emit('setTranslate', s.translate, t);
          },
          minTranslate: function () {
            return -this.snapGrid[0];
          },
          maxTranslate: function () {
            return -this.snapGrid[this.snapGrid.length - 1];
          },
          translateTo: function (e = 0, t = this.params.speed, s = !0, i = !0, a) {
            const n = this,
              { params: r, wrapperEl: o } = n;
            if (n.animating && r.preventInteractionOnTransition) return !1;
            const l = n.minTranslate(),
              d = n.maxTranslate();
            let c;
            if (((c = i && e > l ? l : i && e < d ? d : e), n.updateProgress(c), r.cssMode)) {
              const e = n.isHorizontal();
              return (
                0 === t
                  ? (o[e ? 'scrollLeft' : 'scrollTop'] = -c)
                  : o.scrollTo
                  ? o.scrollTo({ [e ? 'left' : 'top']: -c, behavior: 'smooth' })
                  : (o[e ? 'scrollLeft' : 'scrollTop'] = -c),
                !0
              );
            }
            return (
              0 === t
                ? (n.setTransition(0),
                  n.setTranslate(c),
                  s && (n.emit('beforeTransitionStart', t, a), n.emit('transitionEnd')))
                : (n.setTransition(t),
                  n.setTranslate(c),
                  s && (n.emit('beforeTransitionStart', t, a), n.emit('transitionStart')),
                  n.animating ||
                    ((n.animating = !0),
                    n.onTranslateToWrapperTransitionEnd ||
                      (n.onTranslateToWrapperTransitionEnd = function (e) {
                        n &&
                          !n.destroyed &&
                          e.target === this &&
                          (n.$wrapperEl[0].removeEventListener('transitionend', n.onTranslateToWrapperTransitionEnd),
                          n.$wrapperEl[0].removeEventListener(
                            'webkitTransitionEnd',
                            n.onTranslateToWrapperTransitionEnd
                          ),
                          (n.onTranslateToWrapperTransitionEnd = null),
                          delete n.onTranslateToWrapperTransitionEnd,
                          s && n.emit('transitionEnd'));
                      }),
                    n.$wrapperEl[0].addEventListener('transitionend', n.onTranslateToWrapperTransitionEnd),
                    n.$wrapperEl[0].addEventListener('webkitTransitionEnd', n.onTranslateToWrapperTransitionEnd))),
              !0
            );
          },
        },
        v = {
          slideTo: function (e = 0, t = this.params.speed, s = !0, i) {
            const a = this;
            let n = e;
            n < 0 && (n = 0);
            const {
              params: r,
              snapGrid: o,
              slidesGrid: l,
              previousIndex: d,
              activeIndex: c,
              rtlTranslate: p,
              wrapperEl: u,
            } = a;
            if (a.animating && r.preventInteractionOnTransition) return !1;
            const h = Math.min(a.params.slidesPerGroupSkip, n);
            let m = h + Math.floor((n - h) / a.params.slidesPerGroup);
            m >= o.length && (m = o.length - 1),
              (c || r.initialSlide || 0) === (d || 0) && s && a.emit('beforeSlideChangeStart');
            const g = -o[m];
            if ((a.updateProgress(g), r.normalizeSlideIndex))
              for (let v = 0; v < l.length; v += 1) -Math.floor(100 * g) >= Math.floor(100 * l[v]) && (n = v);
            if (a.initialized && n !== c) {
              if (!a.allowSlideNext && g < a.translate && g < a.minTranslate()) return !1;
              if (!a.allowSlidePrev && g > a.translate && g > a.maxTranslate() && (c || 0) !== n) return !1;
            }
            let f;
            if (
              ((f = n > c ? 'next' : n < c ? 'prev' : 'reset'), (p && -g === a.translate) || (!p && g === a.translate))
            )
              return (
                a.updateActiveIndex(n),
                r.autoHeight && a.updateAutoHeight(),
                a.updateSlidesClasses(),
                'slide' !== r.effect && a.setTranslate(g),
                'reset' !== f && (a.transitionStart(s, f), a.transitionEnd(s, f)),
                !1
              );
            if (r.cssMode) {
              const e = a.isHorizontal();
              let s = -g;
              return (
                p && (s = u.scrollWidth - u.offsetWidth - s),
                0 === t
                  ? (u[e ? 'scrollLeft' : 'scrollTop'] = s)
                  : u.scrollTo
                  ? u.scrollTo({ [e ? 'left' : 'top']: s, behavior: 'smooth' })
                  : (u[e ? 'scrollLeft' : 'scrollTop'] = s),
                !0
              );
            }
            return (
              0 === t
                ? (a.setTransition(0),
                  a.setTranslate(g),
                  a.updateActiveIndex(n),
                  a.updateSlidesClasses(),
                  a.emit('beforeTransitionStart', t, i),
                  a.transitionStart(s, f),
                  a.transitionEnd(s, f))
                : (a.setTransition(t),
                  a.setTranslate(g),
                  a.updateActiveIndex(n),
                  a.updateSlidesClasses(),
                  a.emit('beforeTransitionStart', t, i),
                  a.transitionStart(s, f),
                  a.animating ||
                    ((a.animating = !0),
                    a.onSlideToWrapperTransitionEnd ||
                      (a.onSlideToWrapperTransitionEnd = function (e) {
                        a &&
                          !a.destroyed &&
                          e.target === this &&
                          (a.$wrapperEl[0].removeEventListener('transitionend', a.onSlideToWrapperTransitionEnd),
                          a.$wrapperEl[0].removeEventListener('webkitTransitionEnd', a.onSlideToWrapperTransitionEnd),
                          (a.onSlideToWrapperTransitionEnd = null),
                          delete a.onSlideToWrapperTransitionEnd,
                          a.transitionEnd(s, f));
                      }),
                    a.$wrapperEl[0].addEventListener('transitionend', a.onSlideToWrapperTransitionEnd),
                    a.$wrapperEl[0].addEventListener('webkitTransitionEnd', a.onSlideToWrapperTransitionEnd))),
              !0
            );
          },
          slideToLoop: function (e = 0, t = this.params.speed, s = !0, i) {
            const a = this;
            let n = e;
            return a.params.loop && (n += a.loopedSlides), a.slideTo(n, t, s, i);
          },
          slideNext: function (e = this.params.speed, t = !0, s) {
            const i = this,
              { params: a, animating: n } = i,
              r = i.activeIndex < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup;
            if (a.loop) {
              if (n) return !1;
              i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
            }
            return i.slideTo(i.activeIndex + r, e, t, s);
          },
          slidePrev: function (e = this.params.speed, t = !0, s) {
            const i = this,
              { params: a, animating: n, snapGrid: r, slidesGrid: o, rtlTranslate: l } = i;
            if (a.loop) {
              if (n) return !1;
              i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
            }
            function d(e) {
              return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
            }
            const c = d(l ? i.translate : -i.translate),
              p = r.map((e) => d(e));
            o.map((e) => d(e)), p.indexOf(c);
            let u,
              h = r[p.indexOf(c) - 1];
            return (
              void 0 === h &&
                a.cssMode &&
                r.forEach((e) => {
                  !h && c >= e && (h = e);
                }),
              void 0 !== h && ((u = o.indexOf(h)), u < 0 && (u = i.activeIndex - 1)),
              i.slideTo(u, e, t, s)
            );
          },
          slideReset: function (e = this.params.speed, t = !0, s) {
            return this.slideTo(this.activeIndex, e, t, s);
          },
          slideToClosest: function (e = this.params.speed, t = !0, s, i = 0.5) {
            const a = this;
            let n = a.activeIndex;
            const r = Math.min(a.params.slidesPerGroupSkip, n),
              o = r + Math.floor((n - r) / a.params.slidesPerGroup),
              l = a.rtlTranslate ? a.translate : -a.translate;
            if (l >= a.snapGrid[o]) {
              const e = a.snapGrid[o];
              l - e > (a.snapGrid[o + 1] - e) * i && (n += a.params.slidesPerGroup);
            } else {
              const e = a.snapGrid[o - 1];
              l - e <= (a.snapGrid[o] - e) * i && (n -= a.params.slidesPerGroup);
            }
            return (n = Math.max(n, 0)), (n = Math.min(n, a.slidesGrid.length - 1)), a.slideTo(n, e, t, s);
          },
          slideToClickedSlide: function () {
            const e = this,
              { params: t, $wrapperEl: s } = e,
              i = 'auto' === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
            let a,
              n = e.clickedIndex;
            if (t.loop) {
              if (e.animating) return;
              (a = parseInt(d(e.clickedSlide).attr('data-swiper-slide-index'), 10)),
                t.centeredSlides
                  ? n < e.loopedSlides - i / 2 || n > e.slides.length - e.loopedSlides + i / 2
                    ? (e.loopFix(),
                      (n = s
                        .children(`.${t.slideClass}[data-swiper-slide-index="${a}"]:not(.${t.slideDuplicateClass})`)
                        .eq(0)
                        .index()),
                      u.nextTick(() => {
                        e.slideTo(n);
                      }))
                    : e.slideTo(n)
                  : n > e.slides.length - i
                  ? (e.loopFix(),
                    (n = s
                      .children(`.${t.slideClass}[data-swiper-slide-index="${a}"]:not(.${t.slideDuplicateClass})`)
                      .eq(0)
                      .index()),
                    u.nextTick(() => {
                      e.slideTo(n);
                    }))
                  : e.slideTo(n);
            } else e.slideTo(n);
          },
        },
        b = {
          loopCreate: function () {
            const e = this,
              { params: t, $wrapperEl: s } = e;
            s.children(`.${t.slideClass}.${t.slideDuplicateClass}`).remove();
            let i = s.children('.' + t.slideClass);
            if (t.loopFillGroupWithBlank) {
              const e = t.slidesPerGroup - (i.length % t.slidesPerGroup);
              if (e !== t.slidesPerGroup) {
                for (let i = 0; i < e; i += 1) {
                  const e = d(n.createElement('div')).addClass(`${t.slideClass} ${t.slideBlankClass}`);
                  s.append(e);
                }
                i = s.children('.' + t.slideClass);
              }
            }
            'auto' !== t.slidesPerView || t.loopedSlides || (t.loopedSlides = i.length),
              (e.loopedSlides = Math.ceil(parseFloat(t.loopedSlides || t.slidesPerView, 10))),
              (e.loopedSlides += t.loopAdditionalSlides),
              e.loopedSlides > i.length && (e.loopedSlides = i.length);
            const a = [],
              r = [];
            i.each((t, s) => {
              const n = d(s);
              t < e.loopedSlides && r.push(s),
                t < i.length && t >= i.length - e.loopedSlides && a.push(s),
                n.attr('data-swiper-slide-index', t);
            });
            for (let n = 0; n < r.length; n += 1) s.append(d(r[n].cloneNode(!0)).addClass(t.slideDuplicateClass));
            for (let n = a.length - 1; n >= 0; n -= 1) s.prepend(d(a[n].cloneNode(!0)).addClass(t.slideDuplicateClass));
          },
          loopFix: function () {
            const e = this;
            e.emit('beforeLoopFix');
            const {
              activeIndex: t,
              slides: s,
              loopedSlides: i,
              allowSlidePrev: a,
              allowSlideNext: n,
              snapGrid: r,
              rtlTranslate: o,
            } = e;
            let l;
            (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
            const d = -r[t] - e.getTranslate();
            t < i
              ? ((l = s.length - 3 * i + t),
                (l += i),
                e.slideTo(l, 0, !1, !0) && 0 !== d && e.setTranslate((o ? -e.translate : e.translate) - d))
              : t >= s.length - i &&
                ((l = -s.length + t + i),
                (l += i),
                e.slideTo(l, 0, !1, !0) && 0 !== d && e.setTranslate((o ? -e.translate : e.translate) - d)),
              (e.allowSlidePrev = a),
              (e.allowSlideNext = n),
              e.emit('loopFix');
          },
          loopDestroy: function () {
            const { $wrapperEl: e, params: t, slides: s } = this;
            e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(),
              s.removeAttr('data-swiper-slide-index');
          },
        },
        w = {
          setGrabCursor: function (e) {
            const t = this;
            if (h.touch || !t.params.simulateTouch || (t.params.watchOverflow && t.isLocked) || t.params.cssMode)
              return;
            const s = t.el;
            (s.style.cursor = 'move'),
              (s.style.cursor = e ? '-webkit-grabbing' : '-webkit-grab'),
              (s.style.cursor = e ? '-moz-grabbin' : '-moz-grab'),
              (s.style.cursor = e ? 'grabbing' : 'grab');
          },
          unsetGrabCursor: function () {
            const e = this;
            h.touch || (e.params.watchOverflow && e.isLocked) || e.params.cssMode || (e.el.style.cursor = '');
          },
        },
        T = {
          appendSlide: function (e) {
            const t = this,
              { $wrapperEl: s, params: i } = t;
            if ((i.loop && t.loopDestroy(), 'object' == typeof e && 'length' in e))
              for (let a = 0; a < e.length; a += 1) e[a] && s.append(e[a]);
            else s.append(e);
            i.loop && t.loopCreate(), (i.observer && h.observer) || t.update();
          },
          prependSlide: function (e) {
            const t = this,
              { params: s, $wrapperEl: i, activeIndex: a } = t;
            s.loop && t.loopDestroy();
            let n = a + 1;
            if ('object' == typeof e && 'length' in e) {
              for (let t = 0; t < e.length; t += 1) e[t] && i.prepend(e[t]);
              n = a + e.length;
            } else i.prepend(e);
            s.loop && t.loopCreate(), (s.observer && h.observer) || t.update(), t.slideTo(n, 0, !1);
          },
          addSlide: function (e, t) {
            const s = this,
              { $wrapperEl: i, params: a, activeIndex: n } = s;
            let r = n;
            a.loop && ((r -= s.loopedSlides), s.loopDestroy(), (s.slides = i.children('.' + a.slideClass)));
            const o = s.slides.length;
            if (e <= 0) return void s.prependSlide(t);
            if (e >= o) return void s.appendSlide(t);
            let l = r > e ? r + 1 : r;
            const d = [];
            for (let c = o - 1; c >= e; c -= 1) {
              const e = s.slides.eq(c);
              e.remove(), d.unshift(e);
            }
            if ('object' == typeof t && 'length' in t) {
              for (let e = 0; e < t.length; e += 1) t[e] && i.append(t[e]);
              l = r > e ? r + t.length : r;
            } else i.append(t);
            for (let c = 0; c < d.length; c += 1) i.append(d[c]);
            a.loop && s.loopCreate(),
              (a.observer && h.observer) || s.update(),
              s.slideTo(a.loop ? l + s.loopedSlides : l, 0, !1);
          },
          removeSlide: function (e) {
            const t = this,
              { params: s, $wrapperEl: i, activeIndex: a } = t;
            let n = a;
            s.loop && ((n -= t.loopedSlides), t.loopDestroy(), (t.slides = i.children('.' + s.slideClass)));
            let r,
              o = n;
            if ('object' == typeof e && 'length' in e) {
              for (let s = 0; s < e.length; s += 1)
                (r = e[s]), t.slides[r] && t.slides.eq(r).remove(), r < o && (o -= 1);
              o = Math.max(o, 0);
            } else (r = e), t.slides[r] && t.slides.eq(r).remove(), r < o && (o -= 1), (o = Math.max(o, 0));
            s.loop && t.loopCreate(),
              (s.observer && h.observer) || t.update(),
              t.slideTo(s.loop ? o + t.loopedSlides : o, 0, !1);
          },
          removeAllSlides: function () {
            const e = this,
              t = [];
            for (let s = 0; s < e.slides.length; s += 1) t.push(s);
            e.removeSlide(t);
          },
        };
      const E = (function () {
        const e = o.navigator.platform,
          t = o.navigator.userAgent,
          s = {
            ios: !1,
            android: !1,
            androidChrome: !1,
            desktop: !1,
            iphone: !1,
            ipod: !1,
            ipad: !1,
            edge: !1,
            ie: !1,
            firefox: !1,
            macos: !1,
            windows: !1,
            cordova: !(!o.cordova && !o.phonegap),
            phonegap: !(!o.cordova && !o.phonegap),
            electron: !1,
          },
          i = o.screen.width,
          a = o.screen.height,
          n = t.match(/(Android);?[\s\/]+([\d.]+)?/);
        let r = t.match(/(iPad).*OS\s([\d_]+)/);
        const l = t.match(/(iPod)(.*OS\s([\d_]+))?/),
          d = !r && t.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
          c = t.indexOf('MSIE ') >= 0 || t.indexOf('Trident/') >= 0,
          p = t.indexOf('Edge/') >= 0,
          u = t.indexOf('Gecko/') >= 0 && t.indexOf('Firefox/') >= 0,
          m = 'Win32' === e,
          g = t.toLowerCase().indexOf('electron') >= 0;
        let f = 'MacIntel' === e;
        return (
          !r &&
            f &&
            h.touch &&
            ((1024 === i && 1366 === a) ||
              (834 === i && 1194 === a) ||
              (834 === i && 1112 === a) ||
              (768 === i && 1024 === a)) &&
            ((r = t.match(/(Version)\/([\d.]+)/)), (f = !1)),
          (s.ie = c),
          (s.edge = p),
          (s.firefox = u),
          n &&
            !m &&
            ((s.os = 'android'),
            (s.osVersion = n[2]),
            (s.android = !0),
            (s.androidChrome = t.toLowerCase().indexOf('chrome') >= 0)),
          (r || d || l) && ((s.os = 'ios'), (s.ios = !0)),
          d && !l && ((s.osVersion = d[2].replace(/_/g, '.')), (s.iphone = !0)),
          r && ((s.osVersion = r[2].replace(/_/g, '.')), (s.ipad = !0)),
          l && ((s.osVersion = l[3] ? l[3].replace(/_/g, '.') : null), (s.ipod = !0)),
          s.ios &&
            s.osVersion &&
            t.indexOf('Version/') >= 0 &&
            '10' === s.osVersion.split('.')[0] &&
            (s.osVersion = t.toLowerCase().split('version/')[1].split(' ')[0]),
          (s.webView =
            !(!(d || r || l) || (!t.match(/.*AppleWebKit(?!.*Safari)/i) && !o.navigator.standalone)) ||
            (o.matchMedia && o.matchMedia('(display-mode: standalone)').matches)),
          (s.webview = s.webView),
          (s.standalone = s.webView),
          (s.desktop = !(s.ios || s.android) || g),
          s.desktop &&
            ((s.electron = g),
            (s.macos = f),
            (s.windows = m),
            s.macos && (s.os = 'macos'),
            s.windows && (s.os = 'windows')),
          (s.pixelRatio = o.devicePixelRatio || 1),
          s
        );
      })();
      function y(e) {
        const t = this,
          s = t.touchEventsData,
          { params: i, touches: a } = t;
        if (t.animating && i.preventInteractionOnTransition) return;
        let r = e;
        r.originalEvent && (r = r.originalEvent);
        const l = d(r.target);
        if ('wrapper' === i.touchEventsTarget && !l.closest(t.wrapperEl).length) return;
        if (((s.isTouchEvent = 'touchstart' === r.type), !s.isTouchEvent && 'which' in r && 3 === r.which)) return;
        if (!s.isTouchEvent && 'button' in r && r.button > 0) return;
        if (s.isTouched && s.isMoved) return;
        if (i.noSwiping && l.closest(i.noSwipingSelector ? i.noSwipingSelector : '.' + i.noSwipingClass)[0])
          return void (t.allowClick = !0);
        if (i.swipeHandler && !l.closest(i.swipeHandler)[0]) return;
        (a.currentX = 'touchstart' === r.type ? r.targetTouches[0].pageX : r.pageX),
          (a.currentY = 'touchstart' === r.type ? r.targetTouches[0].pageY : r.pageY);
        const c = a.currentX,
          p = a.currentY,
          h = i.edgeSwipeThreshold || i.iOSEdgeSwipeThreshold;
        if ((!i.edgeSwipeDetection && !i.iOSEdgeSwipeDetection) || !(c <= h || c >= o.screen.width - h)) {
          if (
            (u.extend(s, {
              isTouched: !0,
              isMoved: !1,
              allowTouchCallbacks: !0,
              isScrolling: void 0,
              startMoving: void 0,
            }),
            (a.startX = c),
            (a.startY = p),
            (s.touchStartTime = u.now()),
            (t.allowClick = !0),
            t.updateSize(),
            (t.swipeDirection = void 0),
            i.threshold > 0 && (s.allowThresholdMove = !1),
            'touchstart' !== r.type)
          ) {
            let e = !0;
            l.is(s.formElements) && (e = !1),
              n.activeElement &&
                d(n.activeElement).is(s.formElements) &&
                n.activeElement !== l[0] &&
                n.activeElement.blur();
            const a = e && t.allowTouchMove && i.touchStartPreventDefault;
            (i.touchStartForcePreventDefault || a) && r.preventDefault();
          }
          t.emit('touchStart', r);
        }
      }
      function S(e) {
        const t = this,
          s = t.touchEventsData,
          { params: i, touches: a, rtlTranslate: r } = t;
        let o = e;
        if ((o.originalEvent && (o = o.originalEvent), !s.isTouched))
          return void (s.startMoving && s.isScrolling && t.emit('touchMoveOpposite', o));
        if (s.isTouchEvent && 'touchmove' !== o.type) return;
        const l = 'touchmove' === o.type && o.targetTouches && (o.targetTouches[0] || o.changedTouches[0]),
          c = 'touchmove' === o.type ? l.pageX : o.pageX,
          p = 'touchmove' === o.type ? l.pageY : o.pageY;
        if (o.preventedByNestedSwiper) return (a.startX = c), void (a.startY = p);
        if (!t.allowTouchMove)
          return (
            (t.allowClick = !1),
            void (
              s.isTouched &&
              (u.extend(a, { startX: c, startY: p, currentX: c, currentY: p }), (s.touchStartTime = u.now()))
            )
          );
        if (s.isTouchEvent && i.touchReleaseOnEdges && !i.loop)
          if (t.isVertical()) {
            if ((p < a.startY && t.translate <= t.maxTranslate()) || (p > a.startY && t.translate >= t.minTranslate()))
              return (s.isTouched = !1), void (s.isMoved = !1);
          } else if (
            (c < a.startX && t.translate <= t.maxTranslate()) ||
            (c > a.startX && t.translate >= t.minTranslate())
          )
            return;
        if (s.isTouchEvent && n.activeElement && o.target === n.activeElement && d(o.target).is(s.formElements))
          return (s.isMoved = !0), void (t.allowClick = !1);
        if ((s.allowTouchCallbacks && t.emit('touchMove', o), o.targetTouches && o.targetTouches.length > 1)) return;
        (a.currentX = c), (a.currentY = p);
        const h = a.currentX - a.startX,
          m = a.currentY - a.startY;
        if (t.params.threshold && Math.sqrt(h ** 2 + m ** 2) < t.params.threshold) return;
        if (void 0 === s.isScrolling) {
          let e;
          (t.isHorizontal() && a.currentY === a.startY) || (t.isVertical() && a.currentX === a.startX)
            ? (s.isScrolling = !1)
            : h * h + m * m >= 25 &&
              ((e = (180 * Math.atan2(Math.abs(m), Math.abs(h))) / Math.PI),
              (s.isScrolling = t.isHorizontal() ? e > i.touchAngle : 90 - e > i.touchAngle));
        }
        if (
          (s.isScrolling && t.emit('touchMoveOpposite', o),
          void 0 === s.startMoving && ((a.currentX === a.startX && a.currentY === a.startY) || (s.startMoving = !0)),
          s.isScrolling)
        )
          return void (s.isTouched = !1);
        if (!s.startMoving) return;
        (t.allowClick = !1),
          !i.cssMode && o.cancelable && o.preventDefault(),
          i.touchMoveStopPropagation && !i.nested && o.stopPropagation(),
          s.isMoved ||
            (i.loop && t.loopFix(),
            (s.startTranslate = t.getTranslate()),
            t.setTransition(0),
            t.animating && t.$wrapperEl.trigger('webkitTransitionEnd transitionend'),
            (s.allowMomentumBounce = !1),
            !i.grabCursor || (!0 !== t.allowSlideNext && !0 !== t.allowSlidePrev) || t.setGrabCursor(!0),
            t.emit('sliderFirstMove', o)),
          t.emit('sliderMove', o),
          (s.isMoved = !0);
        let g = t.isHorizontal() ? h : m;
        (a.diff = g),
          (g *= i.touchRatio),
          r && (g = -g),
          (t.swipeDirection = g > 0 ? 'prev' : 'next'),
          (s.currentTranslate = g + s.startTranslate);
        let f = !0,
          v = i.resistanceRatio;
        if (
          (i.touchReleaseOnEdges && (v = 0),
          g > 0 && s.currentTranslate > t.minTranslate()
            ? ((f = !1),
              i.resistance &&
                (s.currentTranslate = t.minTranslate() - 1 + (-t.minTranslate() + s.startTranslate + g) ** v))
            : g < 0 &&
              s.currentTranslate < t.maxTranslate() &&
              ((f = !1),
              i.resistance &&
                (s.currentTranslate = t.maxTranslate() + 1 - (t.maxTranslate() - s.startTranslate - g) ** v)),
          f && (o.preventedByNestedSwiper = !0),
          !t.allowSlideNext &&
            'next' === t.swipeDirection &&
            s.currentTranslate < s.startTranslate &&
            (s.currentTranslate = s.startTranslate),
          !t.allowSlidePrev &&
            'prev' === t.swipeDirection &&
            s.currentTranslate > s.startTranslate &&
            (s.currentTranslate = s.startTranslate),
          i.threshold > 0)
        ) {
          if (!(Math.abs(g) > i.threshold || s.allowThresholdMove)) return void (s.currentTranslate = s.startTranslate);
          if (!s.allowThresholdMove)
            return (
              (s.allowThresholdMove = !0),
              (a.startX = a.currentX),
              (a.startY = a.currentY),
              (s.currentTranslate = s.startTranslate),
              void (a.diff = t.isHorizontal() ? a.currentX - a.startX : a.currentY - a.startY)
            );
        }
        i.followFinger &&
          !i.cssMode &&
          ((i.freeMode || i.watchSlidesProgress || i.watchSlidesVisibility) &&
            (t.updateActiveIndex(), t.updateSlidesClasses()),
          i.freeMode &&
            (0 === s.velocities.length &&
              s.velocities.push({ position: a[t.isHorizontal() ? 'startX' : 'startY'], time: s.touchStartTime }),
            s.velocities.push({ position: a[t.isHorizontal() ? 'currentX' : 'currentY'], time: u.now() })),
          t.updateProgress(s.currentTranslate),
          t.setTranslate(s.currentTranslate));
      }
      function x(e) {
        const t = this,
          s = t.touchEventsData,
          { params: i, touches: a, rtlTranslate: n, $wrapperEl: r, slidesGrid: o, snapGrid: l } = t;
        let d = e;
        if (
          (d.originalEvent && (d = d.originalEvent),
          s.allowTouchCallbacks && t.emit('touchEnd', d),
          (s.allowTouchCallbacks = !1),
          !s.isTouched)
        )
          return s.isMoved && i.grabCursor && t.setGrabCursor(!1), (s.isMoved = !1), void (s.startMoving = !1);
        i.grabCursor &&
          s.isMoved &&
          s.isTouched &&
          (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
          t.setGrabCursor(!1);
        const c = u.now(),
          p = c - s.touchStartTime;
        if (
          (t.allowClick &&
            (t.updateClickedSlide(d),
            t.emit('tap click', d),
            p < 300 && c - s.lastClickTime < 300 && t.emit('doubleTap doubleClick', d)),
          (s.lastClickTime = u.now()),
          u.nextTick(() => {
            t.destroyed || (t.allowClick = !0);
          }),
          !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === a.diff || s.currentTranslate === s.startTranslate)
        )
          return (s.isTouched = !1), (s.isMoved = !1), void (s.startMoving = !1);
        let h;
        if (
          ((s.isTouched = !1),
          (s.isMoved = !1),
          (s.startMoving = !1),
          (h = i.followFinger ? (n ? t.translate : -t.translate) : -s.currentTranslate),
          i.cssMode)
        )
          return;
        if (i.freeMode) {
          if (h < -t.minTranslate()) return void t.slideTo(t.activeIndex);
          if (h > -t.maxTranslate())
            return void t.slideTo(t.slides.length < l.length ? l.length - 1 : t.slides.length - 1);
          if (i.freeModeMomentum) {
            if (s.velocities.length > 1) {
              const e = s.velocities.pop(),
                a = s.velocities.pop(),
                n = e.time - a.time;
              (t.velocity = (e.position - a.position) / n),
                (t.velocity /= 2),
                Math.abs(t.velocity) < i.freeModeMinimumVelocity && (t.velocity = 0),
                (n > 150 || u.now() - e.time > 300) && (t.velocity = 0);
            } else t.velocity = 0;
            (t.velocity *= i.freeModeMomentumVelocityRatio), (s.velocities.length = 0);
            let e = 1e3 * i.freeModeMomentumRatio,
              a = t.translate + t.velocity * e;
            n && (a = -a);
            let o,
              d = !1;
            const c = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;
            let p;
            if (a < t.maxTranslate())
              i.freeModeMomentumBounce
                ? (a + t.maxTranslate() < -c && (a = t.maxTranslate() - c),
                  (o = t.maxTranslate()),
                  (d = !0),
                  (s.allowMomentumBounce = !0))
                : (a = t.maxTranslate()),
                i.loop && i.centeredSlides && (p = !0);
            else if (a > t.minTranslate())
              i.freeModeMomentumBounce
                ? (a - t.minTranslate() > c && (a = t.minTranslate() + c),
                  (o = t.minTranslate()),
                  (d = !0),
                  (s.allowMomentumBounce = !0))
                : (a = t.minTranslate()),
                i.loop && i.centeredSlides && (p = !0);
            else if (i.freeModeSticky) {
              let e;
              for (let t = 0; t < l.length; t += 1)
                if (l[t] > -a) {
                  e = t;
                  break;
                }
              (a = Math.abs(l[e] - a) < Math.abs(l[e - 1] - a) || 'next' === t.swipeDirection ? l[e] : l[e - 1]),
                (a = -a);
            }
            if (
              (p &&
                t.once('transitionEnd', () => {
                  t.loopFix();
                }),
              0 !== t.velocity)
            ) {
              if (
                ((e = n ? Math.abs((-a - t.translate) / t.velocity) : Math.abs((a - t.translate) / t.velocity)),
                i.freeModeSticky)
              ) {
                const s = Math.abs((n ? -a : a) - t.translate),
                  r = t.slidesSizesGrid[t.activeIndex];
                e = s < r ? i.speed : s < 2 * r ? 1.5 * i.speed : 2.5 * i.speed;
              }
            } else if (i.freeModeSticky) return void t.slideToClosest();
            i.freeModeMomentumBounce && d
              ? (t.updateProgress(o),
                t.setTransition(e),
                t.setTranslate(a),
                t.transitionStart(!0, t.swipeDirection),
                (t.animating = !0),
                r.transitionEnd(() => {
                  t &&
                    !t.destroyed &&
                    s.allowMomentumBounce &&
                    (t.emit('momentumBounce'),
                    t.setTransition(i.speed),
                    setTimeout(() => {
                      t.setTranslate(o),
                        r.transitionEnd(() => {
                          t && !t.destroyed && t.transitionEnd();
                        });
                    }, 0));
                }))
              : t.velocity
              ? (t.updateProgress(a),
                t.setTransition(e),
                t.setTranslate(a),
                t.transitionStart(!0, t.swipeDirection),
                t.animating ||
                  ((t.animating = !0),
                  r.transitionEnd(() => {
                    t && !t.destroyed && t.transitionEnd();
                  })))
              : t.updateProgress(a),
              t.updateActiveIndex(),
              t.updateSlidesClasses();
          } else if (i.freeModeSticky) return void t.slideToClosest();
          return void (
            (!i.freeModeMomentum || p >= i.longSwipesMs) &&
            (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
          );
        }
        let m = 0,
          g = t.slidesSizesGrid[0];
        for (let u = 0; u < o.length; u += u < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup) {
          const e = u < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
          void 0 !== o[u + e]
            ? h >= o[u] && h < o[u + e] && ((m = u), (g = o[u + e] - o[u]))
            : h >= o[u] && ((m = u), (g = o[o.length - 1] - o[o.length - 2]));
        }
        const f = (h - o[m]) / g,
          v = m < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
        if (p > i.longSwipesMs) {
          if (!i.longSwipes) return void t.slideTo(t.activeIndex);
          'next' === t.swipeDirection && t.slideTo(f >= i.longSwipesRatio ? m + v : m),
            'prev' === t.swipeDirection && t.slideTo(f > 1 - i.longSwipesRatio ? m + v : m);
        } else {
          if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
          !t.navigation || (d.target !== t.navigation.nextEl && d.target !== t.navigation.prevEl)
            ? ('next' === t.swipeDirection && t.slideTo(m + v), 'prev' === t.swipeDirection && t.slideTo(m))
            : t.slideTo(d.target === t.navigation.nextEl ? m + v : m);
        }
      }
      function C() {
        const e = this,
          { params: t, el: s } = e;
        if (s && 0 === s.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        const { allowSlideNext: i, allowSlidePrev: a, snapGrid: n } = e;
        (e.allowSlideNext = !0),
          (e.allowSlidePrev = !0),
          e.updateSize(),
          e.updateSlides(),
          e.updateSlidesClasses(),
          e.slideTo(
            ('auto' === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides
              ? e.slides.length - 1
              : e.activeIndex,
            0,
            !1,
            !0
          ),
          e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(),
          (e.allowSlidePrev = a),
          (e.allowSlideNext = i),
          e.params.watchOverflow && n !== e.snapGrid && e.checkOverflow();
      }
      function M(e) {
        const t = this;
        t.allowClick ||
          (t.params.preventClicks && e.preventDefault(),
          t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation()));
      }
      function $() {
        const e = this,
          { wrapperEl: t, rtlTranslate: s } = e;
        let i;
        (e.previousTranslate = e.translate),
          (e.translate = e.isHorizontal()
            ? s
              ? t.scrollWidth - t.offsetWidth - t.scrollLeft
              : -t.scrollLeft
            : -t.scrollTop),
          -0 === e.translate && (e.translate = 0),
          e.updateActiveIndex(),
          e.updateSlidesClasses();
        const a = e.maxTranslate() - e.minTranslate();
        (i = 0 === a ? 0 : (e.translate - e.minTranslate()) / a),
          i !== e.progress && e.updateProgress(s ? -e.translate : e.translate),
          e.emit('setTranslate', e.translate, !1);
      }
      let P = !1;
      function k() {}
      var z = {
        init: !0,
        direction: 'horizontal',
        touchEventsTarget: 'container',
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        preventInteractionOnTransition: !1,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        freeMode: !1,
        freeModeMomentum: !0,
        freeModeMomentumRatio: 1,
        freeModeMomentumBounce: !0,
        freeModeMomentumBounceRatio: 1,
        freeModeMomentumVelocityRatio: 1,
        freeModeSticky: !1,
        freeModeMinimumVelocity: 0.02,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: 'slide',
        breakpoints: void 0,
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerColumnFill: 'column',
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !1,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: 0.85,
        watchSlidesProgress: !1,
        watchSlidesVisibility: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: 'swiper-no-swiping',
        noSwipingSelector: null,
        passiveListeners: !0,
        containerModifierClass: 'swiper-container-',
        slideClass: 'swiper-slide',
        slideBlankClass: 'swiper-slide-invisible-blank',
        slideActiveClass: 'swiper-slide-active',
        slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
        slideVisibleClass: 'swiper-slide-visible',
        slideDuplicateClass: 'swiper-slide-duplicate',
        slideNextClass: 'swiper-slide-next',
        slideDuplicateNextClass: 'swiper-slide-duplicate-next',
        slidePrevClass: 'swiper-slide-prev',
        slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
        wrapperClass: 'swiper-wrapper',
        runCallbacksOnInit: !0,
      };
      const L = {
          update: g,
          translate: f,
          transition: {
            setTransition: function (e, t) {
              const s = this;
              s.params.cssMode || s.$wrapperEl.transition(e), s.emit('setTransition', e, t);
            },
            transitionStart: function (e = !0, t) {
              const s = this,
                { activeIndex: i, params: a, previousIndex: n } = s;
              if (a.cssMode) return;
              a.autoHeight && s.updateAutoHeight();
              let r = t;
              if ((r || (r = i > n ? 'next' : i < n ? 'prev' : 'reset'), s.emit('transitionStart'), e && i !== n)) {
                if ('reset' === r) return void s.emit('slideResetTransitionStart');
                s.emit('slideChangeTransitionStart'),
                  s.emit('next' === r ? 'slideNextTransitionStart' : 'slidePrevTransitionStart');
              }
            },
            transitionEnd: function (e = !0, t) {
              const s = this,
                { activeIndex: i, previousIndex: a, params: n } = s;
              if (((s.animating = !1), n.cssMode)) return;
              s.setTransition(0);
              let r = t;
              if ((r || (r = i > a ? 'next' : i < a ? 'prev' : 'reset'), s.emit('transitionEnd'), e && i !== a)) {
                if ('reset' === r) return void s.emit('slideResetTransitionEnd');
                s.emit('slideChangeTransitionEnd'),
                  s.emit('next' === r ? 'slideNextTransitionEnd' : 'slidePrevTransitionEnd');
              }
            },
          },
          slide: v,
          loop: b,
          grabCursor: w,
          manipulation: T,
          events: {
            attachEvents: function () {
              const e = this,
                { params: t, touchEvents: s, el: i, wrapperEl: a } = e;
              (e.onTouchStart = y.bind(e)),
                (e.onTouchMove = S.bind(e)),
                (e.onTouchEnd = x.bind(e)),
                t.cssMode && (e.onScroll = $.bind(e)),
                (e.onClick = M.bind(e));
              const r = !!t.nested;
              if (!h.touch && h.pointerEvents)
                i.addEventListener(s.start, e.onTouchStart, !1),
                  n.addEventListener(s.move, e.onTouchMove, r),
                  n.addEventListener(s.end, e.onTouchEnd, !1);
              else {
                if (h.touch) {
                  const a = !('touchstart' !== s.start || !h.passiveListener || !t.passiveListeners) && {
                    passive: !0,
                    capture: !1,
                  };
                  i.addEventListener(s.start, e.onTouchStart, a),
                    i.addEventListener(s.move, e.onTouchMove, h.passiveListener ? { passive: !1, capture: r } : r),
                    i.addEventListener(s.end, e.onTouchEnd, a),
                    s.cancel && i.addEventListener(s.cancel, e.onTouchEnd, a),
                    P || (n.addEventListener('touchstart', k), (P = !0));
                }
                ((t.simulateTouch && !E.ios && !E.android) || (t.simulateTouch && !h.touch && E.ios)) &&
                  (i.addEventListener('mousedown', e.onTouchStart, !1),
                  n.addEventListener('mousemove', e.onTouchMove, r),
                  n.addEventListener('mouseup', e.onTouchEnd, !1));
              }
              (t.preventClicks || t.preventClicksPropagation) && i.addEventListener('click', e.onClick, !0),
                t.cssMode && a.addEventListener('scroll', e.onScroll),
                e.on(
                  t.updateOnWindowResize
                    ? E.ios || E.android
                      ? 'resize orientationchange observerUpdate'
                      : 'resize observerUpdate'
                    : 'observerUpdate',
                  C,
                  !0
                );
            },
            detachEvents: function () {
              const e = this,
                { params: t, touchEvents: s, el: i, wrapperEl: a } = e,
                r = !!t.nested;
              if (!h.touch && h.pointerEvents)
                i.removeEventListener(s.start, e.onTouchStart, !1),
                  n.removeEventListener(s.move, e.onTouchMove, r),
                  n.removeEventListener(s.end, e.onTouchEnd, !1);
              else {
                if (h.touch) {
                  const a = !('onTouchStart' !== s.start || !h.passiveListener || !t.passiveListeners) && {
                    passive: !0,
                    capture: !1,
                  };
                  i.removeEventListener(s.start, e.onTouchStart, a),
                    i.removeEventListener(s.move, e.onTouchMove, r),
                    i.removeEventListener(s.end, e.onTouchEnd, a),
                    s.cancel && i.removeEventListener(s.cancel, e.onTouchEnd, a);
                }
                ((t.simulateTouch && !E.ios && !E.android) || (t.simulateTouch && !h.touch && E.ios)) &&
                  (i.removeEventListener('mousedown', e.onTouchStart, !1),
                  n.removeEventListener('mousemove', e.onTouchMove, r),
                  n.removeEventListener('mouseup', e.onTouchEnd, !1));
              }
              (t.preventClicks || t.preventClicksPropagation) && i.removeEventListener('click', e.onClick, !0),
                t.cssMode && a.removeEventListener('scroll', e.onScroll),
                e.off(E.ios || E.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', C);
            },
          },
          breakpoints: {
            setBreakpoint: function () {
              const e = this,
                { activeIndex: t, initialized: s, loopedSlides: i = 0, params: a, $el: n } = e,
                r = a.breakpoints;
              if (!r || (r && 0 === Object.keys(r).length)) return;
              const o = e.getBreakpoint(r);
              if (o && e.currentBreakpoint !== o) {
                const l = o in r ? r[o] : void 0;
                l &&
                  ['slidesPerView', 'spaceBetween', 'slidesPerGroup', 'slidesPerGroupSkip', 'slidesPerColumn'].forEach(
                    (e) => {
                      const t = l[e];
                      void 0 !== t &&
                        (l[e] =
                          'slidesPerView' !== e || ('AUTO' !== t && 'auto' !== t)
                            ? 'slidesPerView' === e
                              ? parseFloat(t)
                              : parseInt(t, 10)
                            : 'auto');
                    }
                  );
                const d = l || e.originalParams,
                  c = a.slidesPerColumn > 1,
                  p = d.slidesPerColumn > 1;
                c && !p
                  ? n.removeClass(`${a.containerModifierClass}multirow ${a.containerModifierClass}multirow-column`)
                  : !c &&
                    p &&
                    (n.addClass(a.containerModifierClass + 'multirow'),
                    'column' === d.slidesPerColumnFill && n.addClass(a.containerModifierClass + 'multirow-column'));
                const h = d.direction && d.direction !== a.direction,
                  m = a.loop && (d.slidesPerView !== a.slidesPerView || h);
                h && s && e.changeDirection(),
                  u.extend(e.params, d),
                  u.extend(e, {
                    allowTouchMove: e.params.allowTouchMove,
                    allowSlideNext: e.params.allowSlideNext,
                    allowSlidePrev: e.params.allowSlidePrev,
                  }),
                  (e.currentBreakpoint = o),
                  m &&
                    s &&
                    (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - i + e.loopedSlides, 0, !1)),
                  e.emit('breakpoint', d);
              }
            },
            getBreakpoint: function (e) {
              if (!e) return;
              let t = !1;
              const s = Object.keys(e).map((e) => {
                if ('string' == typeof e && 0 === e.indexOf('@')) {
                  const t = parseFloat(e.substr(1));
                  return { value: o.innerHeight * t, point: e };
                }
                return { value: e, point: e };
              });
              s.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
              for (let i = 0; i < s.length; i += 1) {
                const { point: e, value: a } = s[i];
                a <= o.innerWidth && (t = e);
              }
              return t || 'max';
            },
          },
          checkOverflow: {
            checkOverflow: function () {
              const e = this,
                t = e.params,
                s = e.isLocked,
                i =
                  e.slides.length > 0 &&
                  t.slidesOffsetBefore +
                    t.spaceBetween * (e.slides.length - 1) +
                    e.slides[0].offsetWidth * e.slides.length;
              (e.isLocked = t.slidesOffsetBefore && t.slidesOffsetAfter && i ? i <= e.size : 1 === e.snapGrid.length),
                (e.allowSlideNext = !e.isLocked),
                (e.allowSlidePrev = !e.isLocked),
                s !== e.isLocked && e.emit(e.isLocked ? 'lock' : 'unlock'),
                s && s !== e.isLocked && ((e.isEnd = !1), e.navigation.update());
            },
          },
          classes: {
            addClasses: function () {
              const { classNames: e, params: t, rtl: s, $el: i } = this,
                a = [];
              a.push('initialized'),
                a.push(t.direction),
                t.freeMode && a.push('free-mode'),
                t.autoHeight && a.push('autoheight'),
                s && a.push('rtl'),
                t.slidesPerColumn > 1 &&
                  (a.push('multirow'), 'column' === t.slidesPerColumnFill && a.push('multirow-column')),
                E.android && a.push('android'),
                E.ios && a.push('ios'),
                t.cssMode && a.push('css-mode'),
                a.forEach((s) => {
                  e.push(t.containerModifierClass + s);
                }),
                i.addClass(e.join(' '));
            },
            removeClasses: function () {
              const { $el: e, classNames: t } = this;
              e.removeClass(t.join(' '));
            },
          },
          images: {
            loadImage: function (e, t, s, i, a, n) {
              let r;
              function l() {
                n && n();
              }
              d(e).parent('picture')[0] || (e.complete && a)
                ? l()
                : t
                ? ((r = new o.Image()),
                  (r.onload = l),
                  (r.onerror = l),
                  i && (r.sizes = i),
                  s && (r.srcset = s),
                  t && (r.src = t))
                : l();
            },
            preloadImages: function () {
              const e = this;
              function t() {
                null != e &&
                  e &&
                  !e.destroyed &&
                  (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                  e.imagesLoaded === e.imagesToLoad.length &&
                    (e.params.updateOnImagesReady && e.update(), e.emit('imagesReady')));
              }
              e.imagesToLoad = e.$el.find('img');
              for (let s = 0; s < e.imagesToLoad.length; s += 1) {
                const i = e.imagesToLoad[s];
                e.loadImage(
                  i,
                  i.currentSrc || i.getAttribute('src'),
                  i.srcset || i.getAttribute('srcset'),
                  i.sizes || i.getAttribute('sizes'),
                  !0,
                  t
                );
              }
            },
          },
        },
        D = {};
      class O extends m {
        constructor(...e) {
          let t, s;
          1 === e.length && e[0].constructor && e[0].constructor === Object ? (s = e[0]) : ([t, s] = e),
            s || (s = {}),
            (s = u.extend({}, s)),
            t && !s.el && (s.el = t),
            super(s),
            Object.keys(L).forEach((e) => {
              Object.keys(L[e]).forEach((t) => {
                O.prototype[t] || (O.prototype[t] = L[e][t]);
              });
            });
          const i = this;
          void 0 === i.modules && (i.modules = {}),
            Object.keys(i.modules).forEach((e) => {
              const t = i.modules[e];
              if (t.params) {
                const e = Object.keys(t.params)[0],
                  i = t.params[e];
                if ('object' != typeof i || null === i) return;
                if (!(e in s) || !('enabled' in i)) return;
                !0 === s[e] && (s[e] = { enabled: !0 }),
                  'object' != typeof s[e] || 'enabled' in s[e] || (s[e].enabled = !0),
                  s[e] || (s[e] = { enabled: !1 });
              }
            });
          const a = u.extend({}, z);
          i.useModulesParams(a),
            (i.params = u.extend({}, a, D, s)),
            (i.originalParams = u.extend({}, i.params)),
            (i.passedParams = u.extend({}, s)),
            (i.$ = d);
          const n = d(i.params.el);
          if (((t = n[0]), !t)) return;
          if (n.length > 1) {
            const e = [];
            return (
              n.each((t, i) => {
                const a = u.extend({}, s, { el: i });
                e.push(new O(a));
              }),
              e
            );
          }
          let r;
          return (
            (t.swiper = i),
            n.data('swiper', i),
            t && t.shadowRoot && t.shadowRoot.querySelector
              ? ((r = d(t.shadowRoot.querySelector('.' + i.params.wrapperClass))), (r.children = (e) => n.children(e)))
              : (r = n.children('.' + i.params.wrapperClass)),
            u.extend(i, {
              $el: n,
              el: t,
              $wrapperEl: r,
              wrapperEl: r[0],
              classNames: [],
              slides: d(),
              slidesGrid: [],
              snapGrid: [],
              slidesSizesGrid: [],
              isHorizontal: () => 'horizontal' === i.params.direction,
              isVertical: () => 'vertical' === i.params.direction,
              rtl: 'rtl' === t.dir.toLowerCase() || 'rtl' === n.css('direction'),
              rtlTranslate:
                'horizontal' === i.params.direction && ('rtl' === t.dir.toLowerCase() || 'rtl' === n.css('direction')),
              wrongRTL: '-webkit-box' === r.css('display'),
              activeIndex: 0,
              realIndex: 0,
              isBeginning: !0,
              isEnd: !1,
              translate: 0,
              previousTranslate: 0,
              progress: 0,
              velocity: 0,
              animating: !1,
              allowSlideNext: i.params.allowSlideNext,
              allowSlidePrev: i.params.allowSlidePrev,
              touchEvents: (function () {
                const e = ['touchstart', 'touchmove', 'touchend', 'touchcancel'];
                let t = ['mousedown', 'mousemove', 'mouseup'];
                return (
                  h.pointerEvents && (t = ['pointerdown', 'pointermove', 'pointerup']),
                  (i.touchEventsTouch = { start: e[0], move: e[1], end: e[2], cancel: e[3] }),
                  (i.touchEventsDesktop = { start: t[0], move: t[1], end: t[2] }),
                  h.touch || !i.params.simulateTouch ? i.touchEventsTouch : i.touchEventsDesktop
                );
              })(),
              touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                formElements: 'input, select, option, textarea, button, video, label',
                lastClickTime: u.now(),
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                isTouchEvent: void 0,
                startMoving: void 0,
              },
              allowClick: !0,
              allowTouchMove: i.params.allowTouchMove,
              touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
              imagesToLoad: [],
              imagesLoaded: 0,
            }),
            i.useModules(),
            i.params.init && i.init(),
            i
          );
        }
        slidesPerViewDynamic() {
          const { params: e, slides: t, slidesGrid: s, size: i, activeIndex: a } = this;
          let n = 1;
          if (e.centeredSlides) {
            let e,
              s = t[a].swiperSlideSize;
            for (let r = a + 1; r < t.length; r += 1)
              t[r] && !e && ((s += t[r].swiperSlideSize), (n += 1), s > i && (e = !0));
            for (let r = a - 1; r >= 0; r -= 1)
              t[r] && !e && ((s += t[r].swiperSlideSize), (n += 1), s > i && (e = !0));
          } else for (let r = a + 1; r < t.length; r += 1) s[r] - s[a] < i && (n += 1);
          return n;
        }
        update() {
          const e = this;
          if (!e || e.destroyed) return;
          const { snapGrid: t, params: s } = e;
          function i() {
            const t = Math.min(
              Math.max(e.rtlTranslate ? -1 * e.translate : e.translate, e.maxTranslate()),
              e.minTranslate()
            );
            e.setTranslate(t), e.updateActiveIndex(), e.updateSlidesClasses();
          }
          let a;
          s.breakpoints && e.setBreakpoint(),
            e.updateSize(),
            e.updateSlides(),
            e.updateProgress(),
            e.updateSlidesClasses(),
            e.params.freeMode
              ? (i(), e.params.autoHeight && e.updateAutoHeight())
              : ((a = e.slideTo(
                  ('auto' === e.params.slidesPerView || e.params.slidesPerView > 1) &&
                    e.isEnd &&
                    !e.params.centeredSlides
                    ? e.slides.length - 1
                    : e.activeIndex,
                  0,
                  !1,
                  !0
                )),
                a || i()),
            s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
            e.emit('update');
        }
        changeDirection(e, t = !0) {
          const s = this,
            i = s.params.direction;
          return (
            e || (e = 'horizontal' === i ? 'vertical' : 'horizontal'),
            e === i ||
              ('horizontal' !== e && 'vertical' !== e) ||
              (s.$el
                .removeClass(`${s.params.containerModifierClass}${i}`)
                .addClass(`${s.params.containerModifierClass}${e}`),
              (s.params.direction = e),
              s.slides.each((t, s) => {
                'vertical' === e ? (s.style.width = '') : (s.style.height = '');
              }),
              s.emit('changeDirection'),
              t && s.update()),
            s
          );
        }
        init() {
          const e = this;
          e.initialized ||
            (e.emit('beforeInit'),
            e.params.breakpoints && e.setBreakpoint(),
            e.addClasses(),
            e.params.loop && e.loopCreate(),
            e.updateSize(),
            e.updateSlides(),
            e.params.watchOverflow && e.checkOverflow(),
            e.params.grabCursor && e.setGrabCursor(),
            e.params.preloadImages && e.preloadImages(),
            e.slideTo(
              e.params.loop ? e.params.initialSlide + e.loopedSlides : e.params.initialSlide,
              0,
              e.params.runCallbacksOnInit
            ),
            e.attachEvents(),
            (e.initialized = !0),
            e.emit('init'));
        }
        destroy(e = !0, t = !0) {
          const s = this,
            { params: i, $el: a, $wrapperEl: n, slides: r } = s;
          return (
            void 0 === s.params ||
              s.destroyed ||
              (s.emit('beforeDestroy'),
              (s.initialized = !1),
              s.detachEvents(),
              i.loop && s.loopDestroy(),
              t &&
                (s.removeClasses(),
                a.removeAttr('style'),
                n.removeAttr('style'),
                r &&
                  r.length &&
                  r
                    .removeClass(
                      [i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass].join(' ')
                    )
                    .removeAttr('style')
                    .removeAttr('data-swiper-slide-index')),
              s.emit('destroy'),
              Object.keys(s.eventsListeners).forEach((e) => {
                s.off(e);
              }),
              !1 !== e && ((s.$el[0].swiper = null), s.$el.data('swiper', null), u.deleteProps(s)),
              (s.destroyed = !0)),
            null
          );
        }
        static extendDefaults(e) {
          u.extend(D, e);
        }
        static get extendedDefaults() {
          return D;
        }
        static get defaults() {
          return z;
        }
        static get Class() {
          return m;
        }
        static get $() {
          return d;
        }
      }
      var I = { name: 'device', proto: { device: E }, static: { device: E } },
        G = { name: 'support', proto: { support: h }, static: { support: h } };
      const B = {
        isEdge: !!o.navigator.userAgent.match(/Edge/g),
        isSafari: (function () {
          const e = o.navigator.userAgent.toLowerCase();
          return e.indexOf('safari') >= 0 && e.indexOf('chrome') < 0 && e.indexOf('android') < 0;
        })(),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(o.navigator.userAgent),
      };
      var A = { name: 'browser', proto: { browser: B }, static: { browser: B } },
        X = {
          name: 'resize',
          create() {
            const e = this;
            u.extend(e, {
              resize: {
                resizeHandler() {
                  e && !e.destroyed && e.initialized && (e.emit('beforeResize'), e.emit('resize'));
                },
                orientationChangeHandler() {
                  e && !e.destroyed && e.initialized && e.emit('orientationchange');
                },
              },
            });
          },
          on: {
            init() {
              o.addEventListener('resize', this.resize.resizeHandler),
                o.addEventListener('orientationchange', this.resize.orientationChangeHandler);
            },
            destroy() {
              o.removeEventListener('resize', this.resize.resizeHandler),
                o.removeEventListener('orientationchange', this.resize.orientationChangeHandler);
            },
          },
        };
      const Y = {
        func: o.MutationObserver || o.WebkitMutationObserver,
        attach(e, t = {}) {
          const s = this,
            i = new (0, Y.func)((e) => {
              if (1 === e.length) return void s.emit('observerUpdate', e[0]);
              const t = function () {
                s.emit('observerUpdate', e[0]);
              };
              o.requestAnimationFrame ? o.requestAnimationFrame(t) : o.setTimeout(t, 0);
            });
          i.observe(e, {
            attributes: void 0 === t.attributes || t.attributes,
            childList: void 0 === t.childList || t.childList,
            characterData: void 0 === t.characterData || t.characterData,
          }),
            s.observer.observers.push(i);
        },
        init() {
          const e = this;
          if (h.observer && e.params.observer) {
            if (e.params.observeParents) {
              const t = e.$el.parents();
              for (let s = 0; s < t.length; s += 1) e.observer.attach(t[s]);
            }
            e.observer.attach(e.$el[0], { childList: e.params.observeSlideChildren }),
              e.observer.attach(e.$wrapperEl[0], { attributes: !1 });
          }
        },
        destroy() {
          this.observer.observers.forEach((e) => {
            e.disconnect();
          }),
            (this.observer.observers = []);
        },
      };
      var H = {
        name: 'observer',
        params: { observer: !1, observeParents: !1, observeSlideChildren: !1 },
        create() {
          const e = this;
          u.extend(e, {
            observer: { init: Y.init.bind(e), attach: Y.attach.bind(e), destroy: Y.destroy.bind(e), observers: [] },
          });
        },
        on: {
          init() {
            this.observer.init();
          },
          destroy() {
            this.observer.destroy();
          },
        },
      };
      const V = {
        handle(e) {
          const t = this,
            { rtlTranslate: s } = t;
          let i = e;
          i.originalEvent && (i = i.originalEvent);
          const a = i.keyCode || i.charCode;
          if (!t.allowSlideNext && ((t.isHorizontal() && 39 === a) || (t.isVertical() && 40 === a) || 34 === a))
            return !1;
          if (!t.allowSlidePrev && ((t.isHorizontal() && 37 === a) || (t.isVertical() && 38 === a) || 33 === a))
            return !1;
          if (
            !(
              i.shiftKey ||
              i.altKey ||
              i.ctrlKey ||
              i.metaKey ||
              (n.activeElement &&
                n.activeElement.nodeName &&
                ('input' === n.activeElement.nodeName.toLowerCase() ||
                  'textarea' === n.activeElement.nodeName.toLowerCase()))
            )
          ) {
            if (
              t.params.keyboard.onlyInViewport &&
              (33 === a || 34 === a || 37 === a || 39 === a || 38 === a || 40 === a)
            ) {
              let e = !1;
              if (
                t.$el.parents('.' + t.params.slideClass).length > 0 &&
                0 === t.$el.parents('.' + t.params.slideActiveClass).length
              )
                return;
              const i = o.innerWidth,
                a = o.innerHeight,
                n = t.$el.offset();
              s && (n.left -= t.$el[0].scrollLeft);
              const r = [
                [n.left, n.top],
                [n.left + t.width, n.top],
                [n.left, n.top + t.height],
                [n.left + t.width, n.top + t.height],
              ];
              for (let t = 0; t < r.length; t += 1) {
                const s = r[t];
                s[0] >= 0 && s[0] <= i && s[1] >= 0 && s[1] <= a && (e = !0);
              }
              if (!e) return;
            }
            t.isHorizontal()
              ? ((33 !== a && 34 !== a && 37 !== a && 39 !== a) ||
                  (i.preventDefault ? i.preventDefault() : (i.returnValue = !1)),
                (((34 !== a && 39 !== a) || s) && ((33 !== a && 37 !== a) || !s)) || t.slideNext(),
                (((33 !== a && 37 !== a) || s) && ((34 !== a && 39 !== a) || !s)) || t.slidePrev())
              : ((33 !== a && 34 !== a && 38 !== a && 40 !== a) ||
                  (i.preventDefault ? i.preventDefault() : (i.returnValue = !1)),
                (34 !== a && 40 !== a) || t.slideNext(),
                (33 !== a && 38 !== a) || t.slidePrev()),
              t.emit('keyPress', a);
          }
        },
        enable() {
          const e = this;
          e.keyboard.enabled || (d(n).on('keydown', e.keyboard.handle), (e.keyboard.enabled = !0));
        },
        disable() {
          const e = this;
          e.keyboard.enabled && (d(n).off('keydown', e.keyboard.handle), (e.keyboard.enabled = !1));
        },
      };
      var W = {
        name: 'keyboard',
        params: { keyboard: { enabled: !1, onlyInViewport: !0 } },
        create() {
          const e = this;
          u.extend(e, {
            keyboard: { enabled: !1, enable: V.enable.bind(e), disable: V.disable.bind(e), handle: V.handle.bind(e) },
          });
        },
        on: {
          init() {
            this.params.keyboard.enabled && this.keyboard.enable();
          },
          destroy() {
            this.keyboard.enabled && this.keyboard.disable();
          },
        },
      };
      const N = {
          lastScrollTime: u.now(),
          lastEventBeforeSnap: void 0,
          recentWheelEvents: [],
          event: () =>
            o.navigator.userAgent.indexOf('firefox') > -1
              ? 'DOMMouseScroll'
              : (function () {
                  const e = 'onwheel';
                  let t = e in n;
                  if (!t) {
                    const s = n.createElement('div');
                    s.setAttribute(e, 'return;'), (t = 'function' == typeof s.onwheel);
                  }
                  return (
                    !t &&
                      n.implementation &&
                      n.implementation.hasFeature &&
                      !0 !== n.implementation.hasFeature('', '') &&
                      (t = n.implementation.hasFeature('Events.wheel', '3.0')),
                    t
                  );
                })()
              ? 'wheel'
              : 'mousewheel',
          normalize(e) {
            let t = 0,
              s = 0,
              i = 0,
              a = 0;
            return (
              'detail' in e && (s = e.detail),
              'wheelDelta' in e && (s = -e.wheelDelta / 120),
              'wheelDeltaY' in e && (s = -e.wheelDeltaY / 120),
              'wheelDeltaX' in e && (t = -e.wheelDeltaX / 120),
              'axis' in e && e.axis === e.HORIZONTAL_AXIS && ((t = s), (s = 0)),
              (i = 10 * t),
              (a = 10 * s),
              'deltaY' in e && (a = e.deltaY),
              'deltaX' in e && (i = e.deltaX),
              e.shiftKey && !i && ((i = a), (a = 0)),
              (i || a) && e.deltaMode && (1 === e.deltaMode ? ((i *= 40), (a *= 40)) : ((i *= 800), (a *= 800))),
              i && !t && (t = i < 1 ? -1 : 1),
              a && !s && (s = a < 1 ? -1 : 1),
              { spinX: t, spinY: s, pixelX: i, pixelY: a }
            );
          },
          handleMouseEnter() {
            this.mouseEntered = !0;
          },
          handleMouseLeave() {
            this.mouseEntered = !1;
          },
          handle(e) {
            let t = e;
            const s = this,
              i = s.params.mousewheel;
            s.params.cssMode && t.preventDefault();
            let a = s.$el;
            if (
              ('container' !== s.params.mousewheel.eventsTarged && (a = d(s.params.mousewheel.eventsTarged)),
              !s.mouseEntered && !a[0].contains(t.target) && !i.releaseOnEdges)
            )
              return !0;
            t.originalEvent && (t = t.originalEvent);
            let n = 0;
            const r = s.rtlTranslate ? -1 : 1,
              o = N.normalize(t);
            if (i.forceToAxis)
              if (s.isHorizontal()) {
                if (!(Math.abs(o.pixelX) > Math.abs(o.pixelY))) return !0;
                n = o.pixelX * r;
              } else {
                if (!(Math.abs(o.pixelY) > Math.abs(o.pixelX))) return !0;
                n = o.pixelY;
              }
            else n = Math.abs(o.pixelX) > Math.abs(o.pixelY) ? -o.pixelX * r : -o.pixelY;
            if (0 === n) return !0;
            if ((i.invert && (n = -n), s.params.freeMode)) {
              const e = { time: u.now(), delta: Math.abs(n), direction: Math.sign(n) },
                { lastEventBeforeSnap: a } = s.mousewheel,
                r = a && e.time < a.time + 500 && e.delta <= a.delta && e.direction === a.direction;
              if (!r) {
                (s.mousewheel.lastEventBeforeSnap = void 0), s.params.loop && s.loopFix();
                let a = s.getTranslate() + n * i.sensitivity;
                const o = s.isBeginning,
                  l = s.isEnd;
                if (
                  (a >= s.minTranslate() && (a = s.minTranslate()),
                  a <= s.maxTranslate() && (a = s.maxTranslate()),
                  s.setTransition(0),
                  s.setTranslate(a),
                  s.updateProgress(),
                  s.updateActiveIndex(),
                  s.updateSlidesClasses(),
                  ((!o && s.isBeginning) || (!l && s.isEnd)) && s.updateSlidesClasses(),
                  s.params.freeModeSticky)
                ) {
                  clearTimeout(s.mousewheel.timeout), (s.mousewheel.timeout = void 0);
                  const t = s.mousewheel.recentWheelEvents;
                  t.length >= 15 && t.shift();
                  const i = t.length ? t[t.length - 1] : void 0,
                    a = t[0];
                  if ((t.push(e), i && (e.delta > i.delta || e.direction !== i.direction))) t.splice(0);
                  else if (t.length >= 15 && e.time - a.time < 500 && a.delta - e.delta >= 1 && e.delta <= 6) {
                    const i = n > 0 ? 0.8 : 0.2;
                    (s.mousewheel.lastEventBeforeSnap = e),
                      t.splice(0),
                      (s.mousewheel.timeout = u.nextTick(() => {
                        s.slideToClosest(s.params.speed, !0, void 0, i);
                      }, 0));
                  }
                  s.mousewheel.timeout ||
                    (s.mousewheel.timeout = u.nextTick(() => {
                      (s.mousewheel.lastEventBeforeSnap = e),
                        t.splice(0),
                        s.slideToClosest(s.params.speed, !0, void 0, 0.5);
                    }, 500));
                }
                if (
                  (r || s.emit('scroll', t),
                  s.params.autoplay && s.params.autoplayDisableOnInteraction && s.autoplay.stop(),
                  a === s.minTranslate() || a === s.maxTranslate())
                )
                  return !0;
              }
            } else {
              const t = { time: u.now(), delta: Math.abs(n), direction: Math.sign(n), raw: e },
                i = s.mousewheel.recentWheelEvents;
              i.length >= 2 && i.shift();
              const a = i.length ? i[i.length - 1] : void 0;
              if (
                (i.push(t),
                a
                  ? (t.direction !== a.direction || t.delta > a.delta || t.time > a.time + 150) &&
                    s.mousewheel.animateSlider(t)
                  : s.mousewheel.animateSlider(t),
                s.mousewheel.releaseScroll(t))
              )
                return !0;
            }
            return t.preventDefault ? t.preventDefault() : (t.returnValue = !1), !1;
          },
          animateSlider(e) {
            const t = this;
            return (
              (e.delta >= 6 && u.now() - t.mousewheel.lastScrollTime < 60) ||
              (e.direction < 0
                ? (t.isEnd && !t.params.loop) || t.animating || (t.slideNext(), t.emit('scroll', e.raw))
                : (t.isBeginning && !t.params.loop) || t.animating || (t.slidePrev(), t.emit('scroll', e.raw)),
              (t.mousewheel.lastScrollTime = new o.Date().getTime()),
              !1)
            );
          },
          releaseScroll(e) {
            const t = this,
              s = t.params.mousewheel;
            if (e.direction < 0) {
              if (t.isEnd && !t.params.loop && s.releaseOnEdges) return !0;
            } else if (t.isBeginning && !t.params.loop && s.releaseOnEdges) return !0;
            return !1;
          },
          enable() {
            const e = this,
              t = N.event();
            if (e.params.cssMode) return e.wrapperEl.removeEventListener(t, e.mousewheel.handle), !0;
            if (!t) return !1;
            if (e.mousewheel.enabled) return !1;
            let s = e.$el;
            return (
              'container' !== e.params.mousewheel.eventsTarged && (s = d(e.params.mousewheel.eventsTarged)),
              s.on('mouseenter', e.mousewheel.handleMouseEnter),
              s.on('mouseleave', e.mousewheel.handleMouseLeave),
              s.on(t, e.mousewheel.handle),
              (e.mousewheel.enabled = !0),
              !0
            );
          },
          disable() {
            const e = this,
              t = N.event();
            if (e.params.cssMode) return e.wrapperEl.addEventListener(t, e.mousewheel.handle), !0;
            if (!t) return !1;
            if (!e.mousewheel.enabled) return !1;
            let s = e.$el;
            return (
              'container' !== e.params.mousewheel.eventsTarged && (s = d(e.params.mousewheel.eventsTarged)),
              s.off(t, e.mousewheel.handle),
              (e.mousewheel.enabled = !1),
              !0
            );
          },
        },
        F = {
          update() {
            const e = this,
              t = e.rtl,
              s = e.params.pagination;
            if (!s.el || !e.pagination.el || !e.pagination.$el || 0 === e.pagination.$el.length) return;
            const i = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
              a = e.pagination.$el;
            let n;
            const r = e.params.loop ? Math.ceil((i - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
            if (
              (e.params.loop
                ? ((n = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup)),
                  n > i - 1 - 2 * e.loopedSlides && (n -= i - 2 * e.loopedSlides),
                  n > r - 1 && (n -= r),
                  n < 0 && 'bullets' !== e.params.paginationType && (n = r + n))
                : (n = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0),
              'bullets' === s.type && e.pagination.bullets && e.pagination.bullets.length > 0)
            ) {
              const i = e.pagination.bullets;
              let r, o, l;
              if (
                (s.dynamicBullets &&
                  ((e.pagination.bulletSize = i.eq(0)[e.isHorizontal() ? 'outerWidth' : 'outerHeight'](!0)),
                  a.css(
                    e.isHorizontal() ? 'width' : 'height',
                    e.pagination.bulletSize * (s.dynamicMainBullets + 4) + 'px'
                  ),
                  s.dynamicMainBullets > 1 &&
                    void 0 !== e.previousIndex &&
                    ((e.pagination.dynamicBulletIndex += n - e.previousIndex),
                    e.pagination.dynamicBulletIndex > s.dynamicMainBullets - 1
                      ? (e.pagination.dynamicBulletIndex = s.dynamicMainBullets - 1)
                      : e.pagination.dynamicBulletIndex < 0 && (e.pagination.dynamicBulletIndex = 0)),
                  (r = n - e.pagination.dynamicBulletIndex),
                  (o = r + (Math.min(i.length, s.dynamicMainBullets) - 1)),
                  (l = (o + r) / 2)),
                i.removeClass(
                  `${s.bulletActiveClass} ${s.bulletActiveClass}-next ${s.bulletActiveClass}-next-next ${s.bulletActiveClass}-prev ${s.bulletActiveClass}-prev-prev ${s.bulletActiveClass}-main`
                ),
                a.length > 1)
              )
                i.each((e, t) => {
                  const i = d(t),
                    a = i.index();
                  a === n && i.addClass(s.bulletActiveClass),
                    s.dynamicBullets &&
                      (a >= r && a <= o && i.addClass(s.bulletActiveClass + '-main'),
                      a === r &&
                        i
                          .prev()
                          .addClass(s.bulletActiveClass + '-prev')
                          .prev()
                          .addClass(s.bulletActiveClass + '-prev-prev'),
                      a === o &&
                        i
                          .next()
                          .addClass(s.bulletActiveClass + '-next')
                          .next()
                          .addClass(s.bulletActiveClass + '-next-next'));
                });
              else {
                const t = i.eq(n),
                  a = t.index();
                if ((t.addClass(s.bulletActiveClass), s.dynamicBullets)) {
                  const t = i.eq(r),
                    n = i.eq(o);
                  for (let e = r; e <= o; e += 1) i.eq(e).addClass(s.bulletActiveClass + '-main');
                  if (e.params.loop)
                    if (a >= i.length - s.dynamicMainBullets) {
                      for (let e = s.dynamicMainBullets; e >= 0; e -= 1)
                        i.eq(i.length - e).addClass(s.bulletActiveClass + '-main');
                      i.eq(i.length - s.dynamicMainBullets - 1).addClass(s.bulletActiveClass + '-prev');
                    } else
                      t
                        .prev()
                        .addClass(s.bulletActiveClass + '-prev')
                        .prev()
                        .addClass(s.bulletActiveClass + '-prev-prev'),
                        n
                          .next()
                          .addClass(s.bulletActiveClass + '-next')
                          .next()
                          .addClass(s.bulletActiveClass + '-next-next');
                  else
                    t
                      .prev()
                      .addClass(s.bulletActiveClass + '-prev')
                      .prev()
                      .addClass(s.bulletActiveClass + '-prev-prev'),
                      n
                        .next()
                        .addClass(s.bulletActiveClass + '-next')
                        .next()
                        .addClass(s.bulletActiveClass + '-next-next');
                }
              }
              if (s.dynamicBullets) {
                const a = Math.min(i.length, s.dynamicMainBullets + 4),
                  n = (e.pagination.bulletSize * a - e.pagination.bulletSize) / 2 - l * e.pagination.bulletSize,
                  r = t ? 'right' : 'left';
                i.css(e.isHorizontal() ? r : 'top', n + 'px');
              }
            }
            if (
              ('fraction' === s.type &&
                (a.find('.' + s.currentClass).text(s.formatFractionCurrent(n + 1)),
                a.find('.' + s.totalClass).text(s.formatFractionTotal(r))),
              'progressbar' === s.type)
            ) {
              let t;
              t = s.progressbarOpposite
                ? e.isHorizontal()
                  ? 'vertical'
                  : 'horizontal'
                : e.isHorizontal()
                ? 'horizontal'
                : 'vertical';
              const i = (n + 1) / r;
              let o = 1,
                l = 1;
              'horizontal' === t ? (o = i) : (l = i),
                a
                  .find('.' + s.progressbarFillClass)
                  .transform(`translate3d(0,0,0) scaleX(${o}) scaleY(${l})`)
                  .transition(e.params.speed);
            }
            'custom' === s.type && s.renderCustom
              ? (a.html(s.renderCustom(e, n + 1, r)), e.emit('paginationRender', e, a[0]))
              : e.emit('paginationUpdate', e, a[0]),
              a[e.params.watchOverflow && e.isLocked ? 'addClass' : 'removeClass'](s.lockClass);
          },
          render() {
            const e = this,
              t = e.params.pagination;
            if (!t.el || !e.pagination.el || !e.pagination.$el || 0 === e.pagination.$el.length) return;
            const s = e.pagination.$el;
            let i = '';
            if ('bullets' === t.type) {
              const a = e.params.loop
                ? Math.ceil(
                    ((e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length) -
                      2 * e.loopedSlides) /
                      e.params.slidesPerGroup
                  )
                : e.snapGrid.length;
              for (let s = 0; s < a; s += 1)
                i += t.renderBullet
                  ? t.renderBullet.call(e, s, t.bulletClass)
                  : `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`;
              s.html(i), (e.pagination.bullets = s.find('.' + t.bulletClass));
            }
            'fraction' === t.type &&
              ((i = t.renderFraction
                ? t.renderFraction.call(e, t.currentClass, t.totalClass)
                : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),
              s.html(i)),
              'progressbar' === t.type &&
                ((i = t.renderProgressbar
                  ? t.renderProgressbar.call(e, t.progressbarFillClass)
                  : `<span class="${t.progressbarFillClass}"></span>`),
                s.html(i)),
              'custom' !== t.type && e.emit('paginationRender', e.pagination.$el[0]);
          },
          init() {
            const e = this,
              t = e.params.pagination;
            if (!t.el) return;
            let s = d(t.el);
            0 !== s.length &&
              (e.params.uniqueNavElements &&
                'string' == typeof t.el &&
                s.length > 1 &&
                1 === e.$el.find(t.el).length &&
                (s = e.$el.find(t.el)),
              'bullets' === t.type && t.clickable && s.addClass(t.clickableClass),
              s.addClass(t.modifierClass + t.type),
              'bullets' === t.type &&
                t.dynamicBullets &&
                (s.addClass(`${t.modifierClass}${t.type}-dynamic`),
                (e.pagination.dynamicBulletIndex = 0),
                t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
              'progressbar' === t.type && t.progressbarOpposite && s.addClass(t.progressbarOppositeClass),
              t.clickable &&
                s.on('click', '.' + t.bulletClass, function (t) {
                  t.preventDefault();
                  let s = d(this).index() * e.params.slidesPerGroup;
                  e.params.loop && (s += e.loopedSlides), e.slideTo(s);
                }),
              u.extend(e.pagination, { $el: s, el: s[0] }));
          },
          destroy() {
            const e = this,
              t = e.params.pagination;
            if (!t.el || !e.pagination.el || !e.pagination.$el || 0 === e.pagination.$el.length) return;
            const s = e.pagination.$el;
            s.removeClass(t.hiddenClass),
              s.removeClass(t.modifierClass + t.type),
              e.pagination.bullets && e.pagination.bullets.removeClass(t.bulletActiveClass),
              t.clickable && s.off('click', '.' + t.bulletClass);
          },
        };
      var R = {
        name: 'pagination',
        params: {
          pagination: {
            el: null,
            bulletElement: 'span',
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: 'bullets',
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: (e) => e,
            formatFractionTotal: (e) => e,
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active',
            modifierClass: 'swiper-pagination-',
            currentClass: 'swiper-pagination-current',
            totalClass: 'swiper-pagination-total',
            hiddenClass: 'swiper-pagination-hidden',
            progressbarFillClass: 'swiper-pagination-progressbar-fill',
            progressbarOppositeClass: 'swiper-pagination-progressbar-opposite',
            clickableClass: 'swiper-pagination-clickable',
            lockClass: 'swiper-pagination-lock',
          },
        },
        create() {
          const e = this;
          u.extend(e, {
            pagination: {
              init: F.init.bind(e),
              render: F.render.bind(e),
              update: F.update.bind(e),
              destroy: F.destroy.bind(e),
              dynamicBulletIndex: 0,
            },
          });
        },
        on: {
          init() {
            const e = this;
            e.pagination.init(), e.pagination.render(), e.pagination.update();
          },
          activeIndexChange() {
            const e = this;
            (e.params.loop || void 0 === e.snapIndex) && e.pagination.update();
          },
          snapIndexChange() {
            this.params.loop || this.pagination.update();
          },
          slidesLengthChange() {
            const e = this;
            e.params.loop && (e.pagination.render(), e.pagination.update());
          },
          snapGridLengthChange() {
            const e = this;
            e.params.loop || (e.pagination.render(), e.pagination.update());
          },
          destroy() {
            this.pagination.destroy();
          },
          click(e) {
            const t = this;
            if (
              t.params.pagination.el &&
              t.params.pagination.hideOnClick &&
              t.pagination.$el.length > 0 &&
              !d(e.target).hasClass(t.params.pagination.bulletClass)
            ) {
              const e = t.pagination.$el.hasClass(t.params.pagination.hiddenClass);
              t.emit(!0 === e ? 'paginationShow' : 'paginationHide', t),
                t.pagination.$el.toggleClass(t.params.pagination.hiddenClass);
            }
          },
        },
      };
      const j = {
        setTranslate() {
          const e = this;
          if (!e.params.scrollbar.el || !e.scrollbar.el) return;
          const { scrollbar: t, rtlTranslate: s, progress: i } = e,
            { dragSize: a, trackSize: n, $dragEl: r, $el: o } = t,
            l = e.params.scrollbar;
          let d = a,
            c = (n - a) * i;
          s
            ? ((c = -c), c > 0 ? ((d = a - c), (c = 0)) : -c + a > n && (d = n + c))
            : c < 0
            ? ((d = a + c), (c = 0))
            : c + a > n && (d = n - c),
            e.isHorizontal()
              ? (r.transform(`translate3d(${c}px, 0, 0)`), (r[0].style.width = d + 'px'))
              : (r.transform(`translate3d(0px, ${c}px, 0)`), (r[0].style.height = d + 'px')),
            l.hide &&
              (clearTimeout(e.scrollbar.timeout),
              (o[0].style.opacity = 1),
              (e.scrollbar.timeout = setTimeout(() => {
                (o[0].style.opacity = 0), o.transition(400);
              }, 1e3)));
        },
        setTransition(e) {
          const t = this;
          t.params.scrollbar.el && t.scrollbar.el && t.scrollbar.$dragEl.transition(e);
        },
        updateSize() {
          const e = this;
          if (!e.params.scrollbar.el || !e.scrollbar.el) return;
          const { scrollbar: t } = e,
            { $dragEl: s, $el: i } = t;
          (s[0].style.width = ''), (s[0].style.height = '');
          const a = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
            n = e.size / e.virtualSize,
            r = n * (a / e.size);
          let o;
          (o = 'auto' === e.params.scrollbar.dragSize ? a * n : parseInt(e.params.scrollbar.dragSize, 10)),
            e.isHorizontal() ? (s[0].style.width = o + 'px') : (s[0].style.height = o + 'px'),
            (i[0].style.display = n >= 1 ? 'none' : ''),
            e.params.scrollbar.hide && (i[0].style.opacity = 0),
            u.extend(t, { trackSize: a, divider: n, moveDivider: r, dragSize: o }),
            t.$el[e.params.watchOverflow && e.isLocked ? 'addClass' : 'removeClass'](e.params.scrollbar.lockClass);
        },
        getPointerPosition(e) {
          return this.isHorizontal()
            ? 'touchstart' === e.type || 'touchmove' === e.type
              ? e.targetTouches[0].clientX
              : e.clientX
            : 'touchstart' === e.type || 'touchmove' === e.type
            ? e.targetTouches[0].clientY
            : e.clientY;
        },
        setDragPosition(e) {
          const t = this,
            { scrollbar: s, rtlTranslate: i } = t,
            { $el: a, dragSize: n, trackSize: r, dragStartPos: o } = s;
          let l;
          (l =
            (s.getPointerPosition(e) - a.offset()[t.isHorizontal() ? 'left' : 'top'] - (null !== o ? o : n / 2)) /
            (r - n)),
            (l = Math.max(Math.min(l, 1), 0)),
            i && (l = 1 - l);
          const d = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * l;
          t.updateProgress(d), t.setTranslate(d), t.updateActiveIndex(), t.updateSlidesClasses();
        },
        onDragStart(e) {
          const t = this,
            s = t.params.scrollbar,
            { scrollbar: i, $wrapperEl: a } = t,
            { $el: n, $dragEl: r } = i;
          (t.scrollbar.isTouched = !0),
            (t.scrollbar.dragStartPos =
              e.target === r[0] || e.target === r
                ? i.getPointerPosition(e) - e.target.getBoundingClientRect()[t.isHorizontal() ? 'left' : 'top']
                : null),
            e.preventDefault(),
            e.stopPropagation(),
            a.transition(100),
            r.transition(100),
            i.setDragPosition(e),
            clearTimeout(t.scrollbar.dragTimeout),
            n.transition(0),
            s.hide && n.css('opacity', 1),
            t.params.cssMode && t.$wrapperEl.css('scroll-snap-type', 'none'),
            t.emit('scrollbarDragStart', e);
        },
        onDragMove(e) {
          const t = this,
            { scrollbar: s, $wrapperEl: i } = t,
            { $el: a, $dragEl: n } = s;
          t.scrollbar.isTouched &&
            (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
            s.setDragPosition(e),
            i.transition(0),
            a.transition(0),
            n.transition(0),
            t.emit('scrollbarDragMove', e));
        },
        onDragEnd(e) {
          const t = this,
            s = t.params.scrollbar,
            { scrollbar: i, $wrapperEl: a } = t,
            { $el: n } = i;
          t.scrollbar.isTouched &&
            ((t.scrollbar.isTouched = !1),
            t.params.cssMode && (t.$wrapperEl.css('scroll-snap-type', ''), a.transition('')),
            s.hide &&
              (clearTimeout(t.scrollbar.dragTimeout),
              (t.scrollbar.dragTimeout = u.nextTick(() => {
                n.css('opacity', 0), n.transition(400);
              }, 1e3))),
            t.emit('scrollbarDragEnd', e),
            s.snapOnRelease && t.slideToClosest());
        },
        enableDraggable() {
          const e = this;
          if (!e.params.scrollbar.el) return;
          const { scrollbar: t, touchEventsTouch: s, touchEventsDesktop: i, params: a } = e,
            r = t.$el[0],
            o = !(!h.passiveListener || !a.passiveListeners) && { passive: !1, capture: !1 },
            l = !(!h.passiveListener || !a.passiveListeners) && { passive: !0, capture: !1 };
          h.touch
            ? (r.addEventListener(s.start, e.scrollbar.onDragStart, o),
              r.addEventListener(s.move, e.scrollbar.onDragMove, o),
              r.addEventListener(s.end, e.scrollbar.onDragEnd, l))
            : (r.addEventListener(i.start, e.scrollbar.onDragStart, o),
              n.addEventListener(i.move, e.scrollbar.onDragMove, o),
              n.addEventListener(i.end, e.scrollbar.onDragEnd, l));
        },
        disableDraggable() {
          const e = this;
          if (!e.params.scrollbar.el) return;
          const { scrollbar: t, touchEventsTouch: s, touchEventsDesktop: i, params: a } = e,
            r = t.$el[0],
            o = !(!h.passiveListener || !a.passiveListeners) && { passive: !1, capture: !1 },
            l = !(!h.passiveListener || !a.passiveListeners) && { passive: !0, capture: !1 };
          h.touch
            ? (r.removeEventListener(s.start, e.scrollbar.onDragStart, o),
              r.removeEventListener(s.move, e.scrollbar.onDragMove, o),
              r.removeEventListener(s.end, e.scrollbar.onDragEnd, l))
            : (r.removeEventListener(i.start, e.scrollbar.onDragStart, o),
              n.removeEventListener(i.move, e.scrollbar.onDragMove, o),
              n.removeEventListener(i.end, e.scrollbar.onDragEnd, l));
        },
        init() {
          const e = this;
          if (!e.params.scrollbar.el) return;
          const { scrollbar: t, $el: s } = e,
            i = e.params.scrollbar;
          let a = d(i.el);
          e.params.uniqueNavElements &&
            'string' == typeof i.el &&
            a.length > 1 &&
            1 === s.find(i.el).length &&
            (a = s.find(i.el));
          let n = a.find('.' + e.params.scrollbar.dragClass);
          0 === n.length && ((n = d(`<div class="${e.params.scrollbar.dragClass}"></div>`)), a.append(n)),
            u.extend(t, { $el: a, el: a[0], $dragEl: n, dragEl: n[0] }),
            i.draggable && t.enableDraggable();
        },
        destroy() {
          this.scrollbar.disableDraggable();
        },
      };
      var q = {
        name: 'scrollbar',
        params: {
          scrollbar: {
            el: null,
            dragSize: 'auto',
            hide: !1,
            draggable: !1,
            snapOnRelease: !0,
            lockClass: 'swiper-scrollbar-lock',
            dragClass: 'swiper-scrollbar-drag',
          },
        },
        create() {
          const e = this;
          u.extend(e, {
            scrollbar: {
              init: j.init.bind(e),
              destroy: j.destroy.bind(e),
              updateSize: j.updateSize.bind(e),
              setTranslate: j.setTranslate.bind(e),
              setTransition: j.setTransition.bind(e),
              enableDraggable: j.enableDraggable.bind(e),
              disableDraggable: j.disableDraggable.bind(e),
              setDragPosition: j.setDragPosition.bind(e),
              getPointerPosition: j.getPointerPosition.bind(e),
              onDragStart: j.onDragStart.bind(e),
              onDragMove: j.onDragMove.bind(e),
              onDragEnd: j.onDragEnd.bind(e),
              isTouched: !1,
              timeout: null,
              dragTimeout: null,
            },
          });
        },
        on: {
          init() {
            const e = this;
            e.scrollbar.init(), e.scrollbar.updateSize(), e.scrollbar.setTranslate();
          },
          update() {
            this.scrollbar.updateSize();
          },
          resize() {
            this.scrollbar.updateSize();
          },
          observerUpdate() {
            this.scrollbar.updateSize();
          },
          setTranslate() {
            this.scrollbar.setTranslate();
          },
          setTransition(e) {
            this.scrollbar.setTransition(e);
          },
          destroy() {
            this.scrollbar.destroy();
          },
        },
      };
      const U = {
        getDistanceBetweenTouches: (e) =>
          e.targetTouches.length < 2
            ? 1
            : Math.sqrt(
                (e.targetTouches[1].pageX - e.targetTouches[0].pageX) ** 2 +
                  (e.targetTouches[1].pageY - e.targetTouches[0].pageY) ** 2
              ),
        onGestureStart(e) {
          const t = this,
            s = t.params.zoom,
            i = t.zoom,
            { gesture: a } = i;
          if (((i.fakeGestureTouched = !1), (i.fakeGestureMoved = !1), !h.gestures)) {
            if ('touchstart' !== e.type || ('touchstart' === e.type && e.targetTouches.length < 2)) return;
            (i.fakeGestureTouched = !0), (a.scaleStart = U.getDistanceBetweenTouches(e));
          }
          (a.$slideEl && a.$slideEl.length) ||
          ((a.$slideEl = d(e.target).closest('.' + t.params.slideClass)),
          0 === a.$slideEl.length && (a.$slideEl = t.slides.eq(t.activeIndex)),
          (a.$imageEl = a.$slideEl.find('img, svg, canvas, picture, .swiper-zoom-target')),
          (a.$imageWrapEl = a.$imageEl.parent('.' + s.containerClass)),
          (a.maxRatio = a.$imageWrapEl.attr('data-swiper-zoom') || s.maxRatio),
          0 !== a.$imageWrapEl.length)
            ? (a.$imageEl && a.$imageEl.transition(0), (t.zoom.isScaling = !0))
            : (a.$imageEl = void 0);
        },
        onGestureChange(e) {
          const t = this.params.zoom,
            s = this.zoom,
            { gesture: i } = s;
          if (!h.gestures) {
            if ('touchmove' !== e.type || ('touchmove' === e.type && e.targetTouches.length < 2)) return;
            (s.fakeGestureMoved = !0), (i.scaleMove = U.getDistanceBetweenTouches(e));
          }
          i.$imageEl &&
            0 !== i.$imageEl.length &&
            ((s.scale = h.gestures ? e.scale * s.currentScale : (i.scaleMove / i.scaleStart) * s.currentScale),
            s.scale > i.maxRatio && (s.scale = i.maxRatio - 1 + (s.scale - i.maxRatio + 1) ** 0.5),
            s.scale < t.minRatio && (s.scale = t.minRatio + 1 - (t.minRatio - s.scale + 1) ** 0.5),
            i.$imageEl.transform(`translate3d(0,0,0) scale(${s.scale})`));
        },
        onGestureEnd(e) {
          const t = this,
            s = t.params.zoom,
            i = t.zoom,
            { gesture: a } = i;
          if (!h.gestures) {
            if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
            if ('touchend' !== e.type || ('touchend' === e.type && e.changedTouches.length < 2 && !E.android)) return;
            (i.fakeGestureTouched = !1), (i.fakeGestureMoved = !1);
          }
          a.$imageEl &&
            0 !== a.$imageEl.length &&
            ((i.scale = Math.max(Math.min(i.scale, a.maxRatio), s.minRatio)),
            a.$imageEl.transition(t.params.speed).transform(`translate3d(0,0,0) scale(${i.scale})`),
            (i.currentScale = i.scale),
            (i.isScaling = !1),
            1 === i.scale && (a.$slideEl = void 0));
        },
        onTouchStart(e) {
          const t = this.zoom,
            { gesture: s, image: i } = t;
          s.$imageEl &&
            0 !== s.$imageEl.length &&
            (i.isTouched ||
              (E.android && e.cancelable && e.preventDefault(),
              (i.isTouched = !0),
              (i.touchesStart.x = 'touchstart' === e.type ? e.targetTouches[0].pageX : e.pageX),
              (i.touchesStart.y = 'touchstart' === e.type ? e.targetTouches[0].pageY : e.pageY)));
        },
        onTouchMove(e) {
          const t = this,
            s = t.zoom,
            { gesture: i, image: a, velocity: n } = s;
          if (!i.$imageEl || 0 === i.$imageEl.length) return;
          if (((t.allowClick = !1), !a.isTouched || !i.$slideEl)) return;
          a.isMoved ||
            ((a.width = i.$imageEl[0].offsetWidth),
            (a.height = i.$imageEl[0].offsetHeight),
            (a.startX = u.getTranslate(i.$imageWrapEl[0], 'x') || 0),
            (a.startY = u.getTranslate(i.$imageWrapEl[0], 'y') || 0),
            (i.slideWidth = i.$slideEl[0].offsetWidth),
            (i.slideHeight = i.$slideEl[0].offsetHeight),
            i.$imageWrapEl.transition(0),
            t.rtl && ((a.startX = -a.startX), (a.startY = -a.startY)));
          const r = a.width * s.scale,
            o = a.height * s.scale;
          if (!(r < i.slideWidth && o < i.slideHeight)) {
            if (
              ((a.minX = Math.min(i.slideWidth / 2 - r / 2, 0)),
              (a.maxX = -a.minX),
              (a.minY = Math.min(i.slideHeight / 2 - o / 2, 0)),
              (a.maxY = -a.minY),
              (a.touchesCurrent.x = 'touchmove' === e.type ? e.targetTouches[0].pageX : e.pageX),
              (a.touchesCurrent.y = 'touchmove' === e.type ? e.targetTouches[0].pageY : e.pageY),
              !a.isMoved && !s.isScaling)
            ) {
              if (
                t.isHorizontal() &&
                ((Math.floor(a.minX) === Math.floor(a.startX) && a.touchesCurrent.x < a.touchesStart.x) ||
                  (Math.floor(a.maxX) === Math.floor(a.startX) && a.touchesCurrent.x > a.touchesStart.x))
              )
                return void (a.isTouched = !1);
              if (
                !t.isHorizontal() &&
                ((Math.floor(a.minY) === Math.floor(a.startY) && a.touchesCurrent.y < a.touchesStart.y) ||
                  (Math.floor(a.maxY) === Math.floor(a.startY) && a.touchesCurrent.y > a.touchesStart.y))
              )
                return void (a.isTouched = !1);
            }
            e.cancelable && e.preventDefault(),
              e.stopPropagation(),
              (a.isMoved = !0),
              (a.currentX = a.touchesCurrent.x - a.touchesStart.x + a.startX),
              (a.currentY = a.touchesCurrent.y - a.touchesStart.y + a.startY),
              a.currentX < a.minX && (a.currentX = a.minX + 1 - (a.minX - a.currentX + 1) ** 0.8),
              a.currentX > a.maxX && (a.currentX = a.maxX - 1 + (a.currentX - a.maxX + 1) ** 0.8),
              a.currentY < a.minY && (a.currentY = a.minY + 1 - (a.minY - a.currentY + 1) ** 0.8),
              a.currentY > a.maxY && (a.currentY = a.maxY - 1 + (a.currentY - a.maxY + 1) ** 0.8),
              n.prevPositionX || (n.prevPositionX = a.touchesCurrent.x),
              n.prevPositionY || (n.prevPositionY = a.touchesCurrent.y),
              n.prevTime || (n.prevTime = Date.now()),
              (n.x = (a.touchesCurrent.x - n.prevPositionX) / (Date.now() - n.prevTime) / 2),
              (n.y = (a.touchesCurrent.y - n.prevPositionY) / (Date.now() - n.prevTime) / 2),
              Math.abs(a.touchesCurrent.x - n.prevPositionX) < 2 && (n.x = 0),
              Math.abs(a.touchesCurrent.y - n.prevPositionY) < 2 && (n.y = 0),
              (n.prevPositionX = a.touchesCurrent.x),
              (n.prevPositionY = a.touchesCurrent.y),
              (n.prevTime = Date.now()),
              i.$imageWrapEl.transform(`translate3d(${a.currentX}px, ${a.currentY}px,0)`);
          }
        },
        onTouchEnd() {
          const e = this.zoom,
            { gesture: t, image: s, velocity: i } = e;
          if (!t.$imageEl || 0 === t.$imageEl.length) return;
          if (!s.isTouched || !s.isMoved) return (s.isTouched = !1), void (s.isMoved = !1);
          (s.isTouched = !1), (s.isMoved = !1);
          let a = 300,
            n = 300;
          const r = s.currentX + i.x * a,
            o = s.currentY + i.y * n;
          0 !== i.x && (a = Math.abs((r - s.currentX) / i.x)), 0 !== i.y && (n = Math.abs((o - s.currentY) / i.y));
          const l = Math.max(a, n);
          (s.currentX = r), (s.currentY = o);
          const d = s.height * e.scale;
          (s.minX = Math.min(t.slideWidth / 2 - (s.width * e.scale) / 2, 0)),
            (s.maxX = -s.minX),
            (s.minY = Math.min(t.slideHeight / 2 - d / 2, 0)),
            (s.maxY = -s.minY),
            (s.currentX = Math.max(Math.min(s.currentX, s.maxX), s.minX)),
            (s.currentY = Math.max(Math.min(s.currentY, s.maxY), s.minY)),
            t.$imageWrapEl.transition(l).transform(`translate3d(${s.currentX}px, ${s.currentY}px,0)`);
        },
        onTransitionEnd() {
          const e = this,
            t = e.zoom,
            { gesture: s } = t;
          s.$slideEl &&
            e.previousIndex !== e.activeIndex &&
            (s.$imageEl && s.$imageEl.transform('translate3d(0,0,0) scale(1)'),
            s.$imageWrapEl && s.$imageWrapEl.transform('translate3d(0,0,0)'),
            (t.scale = 1),
            (t.currentScale = 1),
            (s.$slideEl = void 0),
            (s.$imageEl = void 0),
            (s.$imageWrapEl = void 0));
        },
        toggle(e) {
          const t = this.zoom;
          t.scale && 1 !== t.scale ? t.out() : t.in(e);
        },
        in(e) {
          const t = this,
            s = t.zoom,
            i = t.params.zoom,
            { gesture: a, image: n } = s;
          if (
            (a.$slideEl ||
              ((a.$slideEl =
                t.params.virtual && t.params.virtual.enabled && t.virtual
                  ? t.$wrapperEl.children('.' + t.params.slideActiveClass)
                  : t.slides.eq(t.activeIndex)),
              (a.$imageEl = a.$slideEl.find('img, svg, canvas, picture, .swiper-zoom-target')),
              (a.$imageWrapEl = a.$imageEl.parent('.' + i.containerClass))),
            !a.$imageEl || 0 === a.$imageEl.length)
          )
            return;
          let r, o, l, d, c, p, u, h, m, g, f, v, b, w, T, E, y, S;
          a.$slideEl.addClass('' + i.zoomedSlideClass),
            void 0 === n.touchesStart.x && e
              ? ((r = 'touchend' === e.type ? e.changedTouches[0].pageX : e.pageX),
                (o = 'touchend' === e.type ? e.changedTouches[0].pageY : e.pageY))
              : ((r = n.touchesStart.x), (o = n.touchesStart.y)),
            (s.scale = a.$imageWrapEl.attr('data-swiper-zoom') || i.maxRatio),
            (s.currentScale = a.$imageWrapEl.attr('data-swiper-zoom') || i.maxRatio),
            e
              ? ((y = a.$slideEl[0].offsetWidth),
                (S = a.$slideEl[0].offsetHeight),
                (l = a.$slideEl.offset().left),
                (d = a.$slideEl.offset().top),
                (c = l + y / 2 - r),
                (p = d + S / 2 - o),
                (m = a.$imageEl[0].offsetWidth),
                (g = a.$imageEl[0].offsetHeight),
                (f = m * s.scale),
                (v = g * s.scale),
                (b = Math.min(y / 2 - f / 2, 0)),
                (w = Math.min(S / 2 - v / 2, 0)),
                (T = -b),
                (E = -w),
                (u = c * s.scale),
                (h = p * s.scale),
                u < b && (u = b),
                u > T && (u = T),
                h < w && (h = w),
                h > E && (h = E))
              : ((u = 0), (h = 0)),
            a.$imageWrapEl.transition(300).transform(`translate3d(${u}px, ${h}px,0)`),
            a.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${s.scale})`);
        },
        out() {
          const e = this,
            t = e.zoom,
            s = e.params.zoom,
            { gesture: i } = t;
          i.$slideEl ||
            ((i.$slideEl =
              e.params.virtual && e.params.virtual.enabled && e.virtual
                ? e.$wrapperEl.children('.' + e.params.slideActiveClass)
                : e.slides.eq(e.activeIndex)),
            (i.$imageEl = i.$slideEl.find('img, svg, canvas, picture, .swiper-zoom-target')),
            (i.$imageWrapEl = i.$imageEl.parent('.' + s.containerClass))),
            i.$imageEl &&
              0 !== i.$imageEl.length &&
              ((t.scale = 1),
              (t.currentScale = 1),
              i.$imageWrapEl.transition(300).transform('translate3d(0,0,0)'),
              i.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)'),
              i.$slideEl.removeClass('' + s.zoomedSlideClass),
              (i.$slideEl = void 0));
        },
        enable() {
          const e = this,
            t = e.zoom;
          if (t.enabled) return;
          t.enabled = !0;
          const s = !('touchstart' !== e.touchEvents.start || !h.passiveListener || !e.params.passiveListeners) && {
              passive: !0,
              capture: !1,
            },
            i = !h.passiveListener || { passive: !1, capture: !0 },
            a = '.' + e.params.slideClass;
          h.gestures
            ? (e.$wrapperEl.on('gesturestart', a, t.onGestureStart, s),
              e.$wrapperEl.on('gesturechange', a, t.onGestureChange, s),
              e.$wrapperEl.on('gestureend', a, t.onGestureEnd, s))
            : 'touchstart' === e.touchEvents.start &&
              (e.$wrapperEl.on(e.touchEvents.start, a, t.onGestureStart, s),
              e.$wrapperEl.on(e.touchEvents.move, a, t.onGestureChange, i),
              e.$wrapperEl.on(e.touchEvents.end, a, t.onGestureEnd, s),
              e.touchEvents.cancel && e.$wrapperEl.on(e.touchEvents.cancel, a, t.onGestureEnd, s)),
            e.$wrapperEl.on(e.touchEvents.move, '.' + e.params.zoom.containerClass, t.onTouchMove, i);
        },
        disable() {
          const e = this,
            t = e.zoom;
          if (!t.enabled) return;
          e.zoom.enabled = !1;
          const s = !('touchstart' !== e.touchEvents.start || !h.passiveListener || !e.params.passiveListeners) && {
              passive: !0,
              capture: !1,
            },
            i = !h.passiveListener || { passive: !1, capture: !0 },
            a = '.' + e.params.slideClass;
          h.gestures
            ? (e.$wrapperEl.off('gesturestart', a, t.onGestureStart, s),
              e.$wrapperEl.off('gesturechange', a, t.onGestureChange, s),
              e.$wrapperEl.off('gestureend', a, t.onGestureEnd, s))
            : 'touchstart' === e.touchEvents.start &&
              (e.$wrapperEl.off(e.touchEvents.start, a, t.onGestureStart, s),
              e.$wrapperEl.off(e.touchEvents.move, a, t.onGestureChange, i),
              e.$wrapperEl.off(e.touchEvents.end, a, t.onGestureEnd, s),
              e.touchEvents.cancel && e.$wrapperEl.off(e.touchEvents.cancel, a, t.onGestureEnd, s)),
            e.$wrapperEl.off(e.touchEvents.move, '.' + e.params.zoom.containerClass, t.onTouchMove, i);
        },
      };
      var _ = {
        name: 'zoom',
        params: {
          zoom: {
            enabled: !1,
            maxRatio: 3,
            minRatio: 1,
            toggle: !0,
            containerClass: 'swiper-zoom-container',
            zoomedSlideClass: 'swiper-slide-zoomed',
          },
        },
        create() {
          const e = this,
            t = {
              enabled: !1,
              scale: 1,
              currentScale: 1,
              isScaling: !1,
              gesture: {
                $slideEl: void 0,
                slideWidth: void 0,
                slideHeight: void 0,
                $imageEl: void 0,
                $imageWrapEl: void 0,
                maxRatio: 3,
              },
              image: {
                isTouched: void 0,
                isMoved: void 0,
                currentX: void 0,
                currentY: void 0,
                minX: void 0,
                minY: void 0,
                maxX: void 0,
                maxY: void 0,
                width: void 0,
                height: void 0,
                startX: void 0,
                startY: void 0,
                touchesStart: {},
                touchesCurrent: {},
              },
              velocity: { x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0 },
            };
          'onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out'
            .split(' ')
            .forEach((s) => {
              t[s] = U[s].bind(e);
            }),
            u.extend(e, { zoom: t });
          let s = 1;
          Object.defineProperty(e.zoom, 'scale', {
            get: () => s,
            set(t) {
              s !== t &&
                e.emit(
                  'zoomChange',
                  t,
                  e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0,
                  e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0
                ),
                (s = t);
            },
          });
        },
        on: {
          init() {
            this.params.zoom.enabled && this.zoom.enable();
          },
          destroy() {
            this.zoom.disable();
          },
          touchStart(e) {
            this.zoom.enabled && this.zoom.onTouchStart(e);
          },
          touchEnd(e) {
            this.zoom.enabled && this.zoom.onTouchEnd(e);
          },
          doubleTap(e) {
            const t = this;
            t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && t.zoom.toggle(e);
          },
          transitionEnd() {
            const e = this;
            e.zoom.enabled && e.params.zoom.enabled && e.zoom.onTransitionEnd();
          },
          slideChange() {
            const e = this;
            e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && e.zoom.onTransitionEnd();
          },
        },
      };
      const K = {
        run() {
          const e = this,
            t = e.slides.eq(e.activeIndex);
          let s = e.params.autoplay.delay;
          t.attr('data-swiper-autoplay') && (s = t.attr('data-swiper-autoplay') || e.params.autoplay.delay),
            clearTimeout(e.autoplay.timeout),
            (e.autoplay.timeout = u.nextTick(() => {
              e.params.autoplay.reverseDirection
                ? e.params.loop
                  ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit('autoplay'))
                  : e.isBeginning
                  ? e.params.autoplay.stopOnLastSlide
                    ? e.autoplay.stop()
                    : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit('autoplay'))
                  : (e.slidePrev(e.params.speed, !0, !0), e.emit('autoplay'))
                : e.params.loop
                ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit('autoplay'))
                : e.isEnd
                ? e.params.autoplay.stopOnLastSlide
                  ? e.autoplay.stop()
                  : (e.slideTo(0, e.params.speed, !0, !0), e.emit('autoplay'))
                : (e.slideNext(e.params.speed, !0, !0), e.emit('autoplay')),
                e.params.cssMode && e.autoplay.running && e.autoplay.run();
            }, s));
        },
        start() {
          const e = this;
          return (
            void 0 === e.autoplay.timeout &&
            !e.autoplay.running &&
            ((e.autoplay.running = !0), e.emit('autoplayStart'), e.autoplay.run(), !0)
          );
        },
        stop() {
          const e = this;
          return (
            !!e.autoplay.running &&
            void 0 !== e.autoplay.timeout &&
            (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout), (e.autoplay.timeout = void 0)),
            (e.autoplay.running = !1),
            e.emit('autoplayStop'),
            !0)
          );
        },
        pause(e) {
          const t = this;
          t.autoplay.running &&
            (t.autoplay.paused ||
              (t.autoplay.timeout && clearTimeout(t.autoplay.timeout),
              (t.autoplay.paused = !0),
              0 !== e && t.params.autoplay.waitForTransition
                ? (t.$wrapperEl[0].addEventListener('transitionend', t.autoplay.onTransitionEnd),
                  t.$wrapperEl[0].addEventListener('webkitTransitionEnd', t.autoplay.onTransitionEnd))
                : ((t.autoplay.paused = !1), t.autoplay.run())));
        },
      };
      var J = {
        name: 'autoplay',
        params: {
          autoplay: {
            enabled: !1,
            delay: 3e3,
            waitForTransition: !0,
            disableOnInteraction: !0,
            stopOnLastSlide: !1,
            reverseDirection: !1,
          },
        },
        create() {
          const e = this;
          u.extend(e, {
            autoplay: {
              running: !1,
              paused: !1,
              run: K.run.bind(e),
              start: K.start.bind(e),
              stop: K.stop.bind(e),
              pause: K.pause.bind(e),
              onVisibilityChange() {
                'hidden' === document.visibilityState && e.autoplay.running && e.autoplay.pause(),
                  'visible' === document.visibilityState &&
                    e.autoplay.paused &&
                    (e.autoplay.run(), (e.autoplay.paused = !1));
              },
              onTransitionEnd(t) {
                e &&
                  !e.destroyed &&
                  e.$wrapperEl &&
                  t.target === this &&
                  (e.$wrapperEl[0].removeEventListener('transitionend', e.autoplay.onTransitionEnd),
                  e.$wrapperEl[0].removeEventListener('webkitTransitionEnd', e.autoplay.onTransitionEnd),
                  (e.autoplay.paused = !1),
                  e.autoplay.running ? e.autoplay.run() : e.autoplay.stop());
              },
            },
          });
        },
        on: {
          init() {
            const e = this;
            e.params.autoplay.enabled &&
              (e.autoplay.start(), document.addEventListener('visibilitychange', e.autoplay.onVisibilityChange));
          },
          beforeTransitionStart(e, t) {
            const s = this;
            s.autoplay.running &&
              (t || !s.params.autoplay.disableOnInteraction ? s.autoplay.pause(e) : s.autoplay.stop());
          },
          sliderFirstMove() {
            const e = this;
            e.autoplay.running && (e.params.autoplay.disableOnInteraction ? e.autoplay.stop() : e.autoplay.pause());
          },
          touchEnd() {
            const e = this;
            e.params.cssMode && e.autoplay.paused && !e.params.autoplay.disableOnInteraction && e.autoplay.run();
          },
          destroy() {
            const e = this;
            e.autoplay.running && e.autoplay.stop(),
              document.removeEventListener('visibilitychange', e.autoplay.onVisibilityChange);
          },
        },
      };
      const Q = [I, G, A, X, H];
      void 0 === O.use && ((O.use = O.Class.use), (O.installModule = O.Class.installModule)),
        O.use(Q),
        O.use([R, q, J, W, _]);
    },
  },
]);
