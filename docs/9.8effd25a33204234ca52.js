(window.webpackJsonp = window.webpackJsonp || []).push([
  [9],
  {
    FQ1g: function (n, t, c) {
      'use strict';
      c.r(t),
        c.d(t, 'AboutModule', function () {
          return q;
        });
      var o = c('ofXK'),
        e = c('sYmb'),
        b = c('TEn/'),
        r = c('tyNb'),
        i = c('4u49'),
        s = c('AytR'),
        a = c('fXoL');
      const u = [
        {
          path: '',
          component: (() => {
            class n {
              constructor() {
                this.version = s.a.version;
              }
              ngOnInit() {}
            }
            return (
              (n.ɵfac = function (t) {
                return new (t || n)();
              }),
              (n.ɵcmp = a.Hb({
                type: n,
                selectors: [['app-about']],
                decls: 34,
                vars: 1,
                consts: [
                  ['color', 'primary'],
                  ['slot', 'start'],
                  ['translate', ''],
                  [1, 'ion-text-center'],
                  ['name', 'code'],
                ],
                template: function (n, t) {
                  1 & n &&
                    (a.Sb(0, 'ion-header'),
                    a.qc(1, '\n  '),
                    a.Sb(2, 'ion-toolbar', 0),
                    a.qc(3, '\n    '),
                    a.Sb(4, 'ion-buttons', 1),
                    a.qc(5, '\n      '),
                    a.Ob(6, 'ion-menu-button'),
                    a.qc(7, '\n    '),
                    a.Rb(),
                    a.qc(8, '\n    '),
                    a.Sb(9, 'ion-title'),
                    a.Sb(10, 'span', 2),
                    a.qc(11, 'About'),
                    a.Rb(),
                    a.Rb(),
                    a.qc(12, '\n  '),
                    a.Rb(),
                    a.qc(13, '\n'),
                    a.Rb(),
                    a.qc(14, '\n'),
                    a.Sb(15, 'ion-content'),
                    a.qc(16, '\n  '),
                    a.Sb(17, 'ion-card', 3),
                    a.qc(18, '\n    '),
                    a.Sb(19, 'ion-card-content'),
                    a.qc(20, '\n      '),
                    a.Sb(21, 'ion-card-title', 2),
                    a.qc(22, 'APP_NAME'),
                    a.Rb(),
                    a.qc(23, '\n      '),
                    a.Sb(24, 'p'),
                    a.Ob(25, 'ion-icon', 4),
                    a.qc(26, ' '),
                    a.Sb(27, 'span', 2),
                    a.qc(28, 'Version'),
                    a.Rb(),
                    a.qc(29),
                    a.Rb(),
                    a.qc(30, '\n    '),
                    a.Rb(),
                    a.qc(31, '\n  '),
                    a.Rb(),
                    a.qc(32, '\n'),
                    a.Rb(),
                    a.qc(33, '\n')),
                    2 & n && (a.Db(29), a.sc(' ', t.version, ''));
                },
                directives: [b.n, b.H, b.f, b.u, b.G, e.a, b.l, b.g, b.h, b.i, b.o],
                styles: [''],
              })),
              n
            );
          })(),
          data: { title: Object(i.a)('About') },
        },
      ];
      let p = (() => {
          class n {}
          return (
            (n.ɵfac = function (t) {
              return new (t || n)();
            }),
            (n.ɵmod = a.Lb({ type: n })),
            (n.ɵinj = a.Kb({ providers: [], imports: [[r.j.forChild(u)], r.j] })),
            n
          );
        })(),
        q = (() => {
          class n {}
          return (
            (n.ɵfac = function (t) {
              return new (t || n)();
            }),
            (n.ɵmod = a.Lb({ type: n })),
            (n.ɵinj = a.Kb({ imports: [[o.c, e.b, b.I, p]] })),
            n
          );
        })();
    },
  },
]);
