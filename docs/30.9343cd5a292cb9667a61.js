(window.webpackJsonp = window.webpackJsonp || []).push([
  [30],
  {
    cABk: function (i, n, t) {
      'use strict';
      t.r(n),
        t.d(n, 'ion_loading', function () {
          return m;
        });
      var e = t('wEJo'),
        o = t('E/Mt'),
        a = t('SOSK'),
        s = t('39oe'),
        r = t('74mu'),
        d = t('meiF');
      t('B4Jq'), t('1vRN');
      const l = (i) => {
          const n = Object(d.a)(),
            t = Object(d.a)(),
            e = Object(d.a)();
          return (
            t
              .addElement(i.querySelector('ion-backdrop'))
              .fromTo('opacity', 0.01, 'var(--backdrop-opacity)')
              .beforeStyles({ 'pointer-events': 'none' })
              .afterClearStyles(['pointer-events']),
            e.addElement(i.querySelector('.loading-wrapper')).keyframes([
              { offset: 0, opacity: 0.01, transform: 'scale(1.1)' },
              { offset: 1, opacity: 1, transform: 'scale(1)' },
            ]),
            n.addElement(i).easing('ease-in-out').duration(200).addAnimation([t, e])
          );
        },
        c = (i) => {
          const n = Object(d.a)(),
            t = Object(d.a)(),
            e = Object(d.a)();
          return (
            t.addElement(i.querySelector('ion-backdrop')).fromTo('opacity', 'var(--backdrop-opacity)', 0),
            e.addElement(i.querySelector('.loading-wrapper')).keyframes([
              { offset: 0, opacity: 0.99, transform: 'scale(1)' },
              { offset: 1, opacity: 0, transform: 'scale(0.9)' },
            ]),
            n.addElement(i).easing('ease-in-out').duration(200).addAnimation([t, e])
          );
        },
        p = (i) => {
          const n = Object(d.a)(),
            t = Object(d.a)(),
            e = Object(d.a)();
          return (
            t
              .addElement(i.querySelector('ion-backdrop'))
              .fromTo('opacity', 0.01, 'var(--backdrop-opacity)')
              .beforeStyles({ 'pointer-events': 'none' })
              .afterClearStyles(['pointer-events']),
            e.addElement(i.querySelector('.loading-wrapper')).keyframes([
              { offset: 0, opacity: 0.01, transform: 'scale(1.1)' },
              { offset: 1, opacity: 1, transform: 'scale(1)' },
            ]),
            n.addElement(i).easing('ease-in-out').duration(200).addAnimation([t, e])
          );
        },
        g = (i) => {
          const n = Object(d.a)(),
            t = Object(d.a)(),
            e = Object(d.a)();
          return (
            t.addElement(i.querySelector('ion-backdrop')).fromTo('opacity', 'var(--backdrop-opacity)', 0),
            e.addElement(i.querySelector('.loading-wrapper')).keyframes([
              { offset: 0, opacity: 0.99, transform: 'scale(1)' },
              { offset: 1, opacity: 0, transform: 'scale(0.9)' },
            ]),
            n.addElement(i).easing('ease-in-out').duration(200).addAnimation([t, e])
          );
        },
        m = class {
          constructor(i) {
            Object(e.o)(this, i),
              (this.didPresent = Object(e.g)(this, 'ionLoadingDidPresent', 7)),
              (this.willPresent = Object(e.g)(this, 'ionLoadingWillPresent', 7)),
              (this.willDismiss = Object(e.g)(this, 'ionLoadingWillDismiss', 7)),
              (this.didDismiss = Object(e.g)(this, 'ionLoadingDidDismiss', 7)),
              (this.presented = !1),
              (this.keyboardClose = !0),
              (this.duration = 0),
              (this.backdropDismiss = !1),
              (this.showBackdrop = !0),
              (this.translucent = !1),
              (this.animated = !0),
              (this.onBackdropTap = () => {
                this.dismiss(void 0, a.a);
              });
          }
          connectedCallback() {
            Object(a.f)(this.el);
          }
          componentWillLoad() {
            if (void 0 === this.spinner) {
              const i = Object(o.b)(this);
              this.spinner = o.c.get('loadingSpinner', o.c.get('spinner', 'ios' === i ? 'lines' : 'crescent'));
            }
          }
          async present() {
            await Object(a.e)(this, 'loadingEnter', l, p, void 0),
              this.duration > 0 && (this.durationTimeout = setTimeout(() => this.dismiss(), this.duration + 10));
          }
          dismiss(i, n) {
            return (
              this.durationTimeout && clearTimeout(this.durationTimeout), Object(a.g)(this, i, n, 'loadingLeave', c, g)
            );
          }
          onDidDismiss() {
            return Object(a.h)(this.el, 'ionLoadingDidDismiss');
          }
          onWillDismiss() {
            return Object(a.h)(this.el, 'ionLoadingWillDismiss');
          }
          render() {
            const { message: i, spinner: n } = this,
              t = Object(o.b)(this);
            return Object(e.j)(
              e.c,
              {
                onIonBackdropTap: this.onBackdropTap,
                tabindex: '-1',
                style: { zIndex: '' + (4e4 + this.overlayIndex) },
                class: Object.assign(Object.assign({}, Object(r.b)(this.cssClass)), {
                  [t]: !0,
                  'loading-translucent': this.translucent,
                }),
              },
              Object(e.j)('ion-backdrop', { visible: this.showBackdrop, tappable: this.backdropDismiss }),
              Object(e.j)('div', { tabindex: '0' }),
              Object(e.j)(
                'div',
                { class: 'loading-wrapper ion-overlay-wrapper', role: 'dialog' },
                n &&
                  Object(e.j)(
                    'div',
                    { class: 'loading-spinner' },
                    Object(e.j)('ion-spinner', { name: n, 'aria-hidden': 'true' })
                  ),
                i && Object(e.j)('div', { class: 'loading-content', innerHTML: Object(s.a)(i) })
              ),
              Object(e.j)('div', { tabindex: '0' })
            );
          }
          get el() {
            return Object(e.k)(this);
          }
        };
      m.style = {
        ios: '.sc-ion-loading-ios-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-ios-h{display:none}.loading-wrapper.sc-ion-loading-ios{display:-ms-flexbox;display:flex;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}.spinner-lines.sc-ion-loading-ios,.spinner-lines-small.sc-ion-loading-ios,.spinner-bubbles.sc-ion-loading-ios,.spinner-circles.sc-ion-loading-ios,.spinner-crescent.sc-ion-loading-ios,.spinner-dots.sc-ion-loading-ios{color:var(--spinner-color)}.sc-ion-loading-ios-h{--background:var(--ion-overlay-background-color, var(--ion-color-step-100, #f9f9f9));--max-width:270px;--max-height:90%;--spinner-color:var(--ion-color-step-600, #666666);--backdrop-opacity:var(--ion-backdrop-opacity, 0.3);color:var(--ion-text-color, #000);font-size:14px}.loading-wrapper.sc-ion-loading-ios{border-radius:8px;padding-left:34px;padding-right:34px;padding-top:24px;padding-bottom:24px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.loading-wrapper.sc-ion-loading-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:34px;padding-inline-start:34px;-webkit-padding-end:34px;padding-inline-end:34px}}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.loading-translucent.sc-ion-loading-ios-h .loading-wrapper.sc-ion-loading-ios{background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}.loading-content.sc-ion-loading-ios{font-weight:bold}.loading-spinner.sc-ion-loading-ios+.loading-content.sc-ion-loading-ios{margin-left:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.loading-spinner.sc-ion-loading-ios+.loading-content.sc-ion-loading-ios{margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}',
        md: '.sc-ion-loading-md-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-md-h{display:none}.loading-wrapper.sc-ion-loading-md{display:-ms-flexbox;display:flex;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}.spinner-lines.sc-ion-loading-md,.spinner-lines-small.sc-ion-loading-md,.spinner-bubbles.sc-ion-loading-md,.spinner-circles.sc-ion-loading-md,.spinner-crescent.sc-ion-loading-md,.spinner-dots.sc-ion-loading-md{color:var(--spinner-color)}.sc-ion-loading-md-h{--background:var(--ion-color-step-50, #f2f2f2);--max-width:280px;--max-height:90%;--spinner-color:var(--ion-color-primary, #3880ff);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32);color:var(--ion-color-step-850, #262626);font-size:14px}.loading-wrapper.sc-ion-loading-md{border-radius:2px;padding-left:24px;padding-right:24px;padding-top:24px;padding-bottom:24px;-webkit-box-shadow:0 16px 20px rgba(0, 0, 0, 0.4);box-shadow:0 16px 20px rgba(0, 0, 0, 0.4)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.loading-wrapper.sc-ion-loading-md{padding-left:unset;padding-right:unset;-webkit-padding-start:24px;padding-inline-start:24px;-webkit-padding-end:24px;padding-inline-end:24px}}.loading-spinner.sc-ion-loading-md+.loading-content.sc-ion-loading-md{margin-left:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.loading-spinner.sc-ion-loading-md+.loading-content.sc-ion-loading-md{margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}',
      };
    },
  },
]);
