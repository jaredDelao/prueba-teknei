(window.webpackJsonp = window.webpackJsonp || []).push([
  [9],
  {
    Tsnu: function (e, s, t) {
      'use strict';
      t.r(s),
        t.d(s, 'startFocusVisible', function () {
          return c;
        });
      const o = 'ion-focused',
        n = ['Tab', 'ArrowDown', 'Space', 'Escape', ' ', 'Shift', 'Enter', 'ArrowLeft', 'ArrowRight', 'ArrowUp'],
        c = () => {
          let e = [],
            s = !0;
          const t = document,
            c = (s) => {
              e.forEach((e) => e.classList.remove(o)), s.forEach((e) => e.classList.add(o)), (e = s);
            },
            i = () => {
              (s = !1), c([]);
            };
          t.addEventListener('keydown', (e) => {
            (s = n.includes(e.key)), s || c([]);
          }),
            t.addEventListener('focusin', (e) => {
              if (s && e.composedPath) {
                const s = e.composedPath().filter((e) => !!e.classList && e.classList.contains('ion-focusable'));
                c(s);
              }
            }),
            t.addEventListener('focusout', () => {
              t.activeElement === t.body && c([]);
            }),
            t.addEventListener('touchstart', i),
            t.addEventListener('mousedown', i);
        };
    },
  },
]);
