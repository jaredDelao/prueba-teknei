(window.webpackJsonp = window.webpackJsonp || []).push([
  [59],
  {
    cg4z: function (e, t, o) {
      'use strict';
      o.r(t),
        o.d(t, 'startTapClick', function () {
          return i;
        });
      var n = o('1vRN');
      const i = (e) => {
          let t,
            o,
            i,
            v,
            p = 10 * -u,
            f = 0;
          const L = e.getBoolean('animated', !0) && e.getBoolean('rippleEffect', !0),
            m = new WeakMap(),
            w = (e) => {
              (p = Object(n.o)(e)), b(e);
            },
            h = () => {
              clearTimeout(v), (v = void 0), o && (O(!1), (o = void 0));
            },
            E = (e) => {
              o || (void 0 !== t && null !== t.parentElement) || ((t = void 0), g(s(e), e));
            },
            b = (e) => {
              g(void 0, e);
            },
            g = (e, t) => {
              if (e && e === o) return;
              clearTimeout(v), (v = void 0);
              const { x: i, y: s } = Object(n.p)(t);
              if (o) {
                if (m.has(o)) throw new Error('internal error');
                o.classList.contains(r) || T(o, i, s), O(!0);
              }
              if (e) {
                const t = m.get(e);
                t && (clearTimeout(t), m.delete(e));
                const o = a(e) ? 0 : d;
                e.classList.remove(r),
                  (v = setTimeout(() => {
                    T(e, i, s), (v = void 0);
                  }, o));
              }
              o = e;
            },
            T = (e, t, o) => {
              (f = Date.now()), e.classList.add(r);
              const n = L && c(e);
              n && n.addRipple && (j(), (i = n.addRipple(t, o)));
            },
            j = () => {
              void 0 !== i && (i.then((e) => e()), (i = void 0));
            },
            O = (e) => {
              j();
              const t = o;
              if (!t) return;
              const n = l - Date.now() + f;
              if (e && n > 0 && !a(t)) {
                const e = setTimeout(() => {
                  t.classList.remove(r), m.delete(t);
                }, l);
                m.set(t, e);
              } else t.classList.remove(r);
            },
            R = document;
          R.addEventListener('ionScrollStart', (e) => {
            (t = e.target), h();
          }),
            R.addEventListener('ionScrollEnd', () => {
              t = void 0;
            }),
            R.addEventListener('ionGestureCaptured', h),
            R.addEventListener(
              'touchstart',
              (e) => {
                (p = Object(n.o)(e)), E(e);
              },
              !0
            ),
            R.addEventListener('touchcancel', w, !0),
            R.addEventListener('touchend', w, !0),
            R.addEventListener(
              'mousedown',
              (e) => {
                const t = Object(n.o)(e) - u;
                p < t && E(e);
              },
              !0
            ),
            R.addEventListener(
              'mouseup',
              (e) => {
                const t = Object(n.o)(e) - u;
                p < t && b(e);
              },
              !0
            );
        },
        s = (e) => {
          if (!e.composedPath) return e.target.closest('.ion-activatable');
          {
            const t = e.composedPath();
            for (let e = 0; e < t.length - 2; e++) {
              const o = t[e];
              if (o.classList && o.classList.contains('ion-activatable')) return o;
            }
          }
        },
        a = (e) => e.classList.contains('ion-activatable-instant'),
        c = (e) => {
          if (e.shadowRoot) {
            const t = e.shadowRoot.querySelector('ion-ripple-effect');
            if (t) return t;
          }
          return e.querySelector('ion-ripple-effect');
        },
        r = 'ion-activated',
        d = 200,
        l = 200,
        u = 2500;
    },
  },
]);
