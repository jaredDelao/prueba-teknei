(window.webpackJsonp = window.webpackJsonp || []).push([
  [59],
  {
    '6nsN': function (t, n, e) {
      'use strict';
      e.r(n);
      var i = e('zIRd');
      (function () {
        var t,
          n =
            'function' == typeof Object.defineProperties
              ? Object.defineProperty
              : function (t, n, e) {
                  t != Array.prototype && t != Object.prototype && (t[n] = e.value);
                },
          e = (function (t) {
            t = [
              'object' == typeof window && window,
              'object' == typeof self && self,
              'object' == typeof global && global,
              t,
            ];
            for (var n = 0; n < t.length; ++n) {
              var e = t[n];
              if (e && e.Math == Math) return e;
            }
            return globalThis;
          })(this);
        function r(t) {
          var n = 0;
          return function () {
            return n < t.length ? { done: !1, value: t[n++] } : { done: !0 };
          };
        }
        function o(t) {
          var n = 'undefined' != typeof Symbol && Symbol.iterator && t[Symbol.iterator];
          return n ? n.call(t) : { next: r(t) };
        }
        !(function (t, i) {
          if (i) {
            var r = e;
            t = t.split('.');
            for (var o = 0; o < t.length - 1; o++) {
              var a = t[o];
              a in r || (r[a] = {}), (r = r[a]);
            }
            (i = i((o = r[(t = t[t.length - 1])]))) != o &&
              null != i &&
              n(r, t, { configurable: !0, writable: !0, value: i });
          }
        })('Promise', function (t) {
          function n(t) {
            (this.b = 0), (this.c = void 0), (this.a = []);
            var n = this.f();
            try {
              t(n.resolve, n.reject);
            } catch (e) {
              n.reject(e);
            }
          }
          function i() {
            this.a = null;
          }
          function r(t) {
            return t instanceof n
              ? t
              : new n(function (n) {
                  n(t);
                });
          }
          if (t) return t;
          i.prototype.b = function (t) {
            if (null == this.a) {
              this.a = [];
              var n = this;
              this.c(function () {
                n.g();
              });
            }
            this.a.push(t);
          };
          var a = e.setTimeout;
          (i.prototype.c = function (t) {
            a(t, 0);
          }),
            (i.prototype.g = function () {
              for (; this.a && this.a.length; ) {
                var t = this.a;
                this.a = [];
                for (var n = 0; n < t.length; ++n) {
                  var e = t[n];
                  t[n] = null;
                  try {
                    e();
                  } catch (i) {
                    this.f(i);
                  }
                }
              }
              this.a = null;
            }),
            (i.prototype.f = function (t) {
              this.c(function () {
                throw t;
              });
            }),
            (n.prototype.f = function () {
              function t(t) {
                return function (i) {
                  e || ((e = !0), t.call(n, i));
                };
              }
              var n = this,
                e = !1;
              return { resolve: t(this.m), reject: t(this.g) };
            }),
            (n.prototype.m = function (t) {
              if (t === this) this.g(new TypeError('A Promise cannot resolve to itself'));
              else if (t instanceof n) this.s(t);
              else {
                t: switch (typeof t) {
                  case 'object':
                    var e = null != t;
                    break t;
                  case 'function':
                    e = !0;
                    break t;
                  default:
                    e = !1;
                }
                e ? this.v(t) : this.h(t);
              }
            }),
            (n.prototype.v = function (t) {
              var n = void 0;
              try {
                n = t.then;
              } catch (e) {
                return void this.g(e);
              }
              'function' == typeof n ? this.u(n, t) : this.h(t);
            }),
            (n.prototype.g = function (t) {
              this.i(2, t);
            }),
            (n.prototype.h = function (t) {
              this.i(1, t);
            }),
            (n.prototype.i = function (t, n) {
              if (0 != this.b)
                throw Error('Cannot settle(' + t + ', ' + n + '): Promise already settled in state' + this.b);
              (this.b = t), (this.c = n), this.l();
            }),
            (n.prototype.l = function () {
              if (null != this.a) {
                for (var t = 0; t < this.a.length; ++t) s.b(this.a[t]);
                this.a = null;
              }
            });
          var s = new i();
          return (
            (n.prototype.s = function (t) {
              var n = this.f();
              t.Ra(n.resolve, n.reject);
            }),
            (n.prototype.u = function (t, n) {
              var e = this.f();
              try {
                t.call(n, e.resolve, e.reject);
              } catch (i) {
                e.reject(i);
              }
            }),
            (n.prototype.then = function (t, e) {
              function i(t, n) {
                return 'function' == typeof t
                  ? function (n) {
                      try {
                        r(t(n));
                      } catch (e) {
                        o(e);
                      }
                    }
                  : n;
              }
              var r,
                o,
                a = new n(function (t, n) {
                  (r = t), (o = n);
                });
              return this.Ra(i(t, r), i(e, o)), a;
            }),
            (n.prototype.catch = function (t) {
              return this.then(void 0, t);
            }),
            (n.prototype.Ra = function (t, n) {
              function e() {
                switch (i.b) {
                  case 1:
                    t(i.c);
                    break;
                  case 2:
                    n(i.c);
                    break;
                  default:
                    throw Error('Unexpected state: ' + i.b);
                }
              }
              var i = this;
              null == this.a ? s.b(e) : this.a.push(e);
            }),
            (n.resolve = r),
            (n.reject = function (t) {
              return new n(function (n, e) {
                e(t);
              });
            }),
            (n.race = function (t) {
              return new n(function (n, e) {
                for (var i = o(t), a = i.next(); !a.done; a = i.next()) r(a.value).Ra(n, e);
              });
            }),
            (n.all = function (t) {
              var e = o(t),
                i = e.next();
              return i.done
                ? r([])
                : new n(function (t, n) {
                    function o(n) {
                      return function (e) {
                        (a[n] = e), 0 == --s && t(a);
                      };
                    }
                    var a = [],
                      s = 0;
                    do {
                      a.push(void 0), s++, r(i.value).Ra(o(a.length - 1), n), (i = e.next());
                    } while (!i.done);
                  });
            }),
            n
          );
        });
        var a = a || {},
          s = this || self,
          u = /^[\w+/_-]+[=]{0,2}$/,
          c = null;
        function h(t) {
          return (t = t.querySelector && t.querySelector('script[nonce]')) &&
            (t = t.nonce || t.getAttribute('nonce')) &&
            u.test(t)
            ? t
            : '';
        }
        function l() {}
        function f(t) {
          var n = typeof t;
          return 'object' != n ? n : t ? (Array.isArray(t) ? 'array' : n) : 'null';
        }
        function d(t) {
          var n = f(t);
          return 'array' == n || ('object' == n && 'number' == typeof t.length);
        }
        function p(t) {
          return 'function' == f(t);
        }
        function v(t) {
          var n = typeof t;
          return ('object' == n && null != t) || 'function' == n;
        }
        function m(t) {
          return (Object.prototype.hasOwnProperty.call(t, g) && t[g]) || (t[g] = ++b);
        }
        var g = 'closure_uid_' + ((1e9 * Math.random()) >>> 0),
          b = 0;
        function y(t, n, e) {
          return t.call.apply(t.bind, arguments);
        }
        function w(t, n, e) {
          if (!t) throw Error();
          if (2 < arguments.length) {
            var i = Array.prototype.slice.call(arguments, 2);
            return function () {
              var e = Array.prototype.slice.call(arguments);
              return Array.prototype.unshift.apply(e, i), t.apply(n, e);
            };
          }
          return function () {
            return t.apply(n, arguments);
          };
        }
        function I(t, n, e) {
          return (I =
            Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf('native code') ? y : w).apply(
            null,
            arguments
          );
        }
        function T(t, n) {
          var e = Array.prototype.slice.call(arguments, 1);
          return function () {
            var n = e.slice();
            return n.push.apply(n, arguments), t.apply(this, n);
          };
        }
        var E = Date.now;
        function A(t, n) {
          function e() {}
          (e.prototype = n.prototype), (t.bb = n.prototype), (t.prototype = new e()), (t.prototype.constructor = t);
        }
        function k(t) {
          return t;
        }
        function S(t, n, e) {
          (this.code = O + t), (this.message = n || C[t] || ''), (this.a = e || null);
        }
        function N(t) {
          var n = t && t.code;
          return n ? new S(n.substring(O.length), t.message, t.serverResponse) : null;
        }
        A(S, Error),
          (S.prototype.w = function () {
            var t = { code: this.code, message: this.message };
            return this.a && (t.serverResponse = this.a), t;
          }),
          (S.prototype.toJSON = function () {
            return this.w();
          });
        var _,
          O = 'auth/',
          C = {
            'admin-restricted-operation': 'This operation is restricted to administrators only.',
            'argument-error': '',
            'app-not-authorized':
              "This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",
            'app-not-installed':
              'The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.',
            'captcha-check-failed':
              'The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.',
            'code-expired': 'The SMS code has expired. Please re-send the verification code to try again.',
            'cordova-not-ready': 'Cordova framework is not ready.',
            'cors-unsupported': 'This browser is not supported.',
            'credential-already-in-use': 'This credential is already associated with a different user account.',
            'custom-token-mismatch': 'The custom token corresponds to a different audience.',
            'requires-recent-login':
              'This operation is sensitive and requires recent authentication. Log in again before retrying this request.',
            'dynamic-link-not-activated':
              'Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.',
            'email-change-needs-verification': 'Multi-factor users must always have a verified email.',
            'email-already-in-use': 'The email address is already in use by another account.',
            'expired-action-code': 'The action code has expired. ',
            'cancelled-popup-request':
              'This operation has been cancelled due to another conflicting popup being opened.',
            'internal-error': 'An internal error has occurred.',
            'invalid-app-credential':
              'The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.',
            'invalid-app-id': 'The mobile app identifier is not registed for the current project.',
            'invalid-user-token':
              "This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",
            'invalid-auth-event': 'An internal error has occurred.',
            'invalid-verification-code':
              'The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.',
            'invalid-continue-uri': 'The continue URL provided in the request is invalid.',
            'invalid-cordova-configuration':
              'The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.',
            'invalid-custom-token': 'The custom token format is incorrect. Please check the documentation.',
            'invalid-dynamic-link-domain':
              'The provided dynamic link domain is not configured or authorized for the current project.',
            'invalid-email': 'The email address is badly formatted.',
            'invalid-api-key': 'Your API key is invalid, please check you have copied it correctly.',
            'invalid-cert-hash': 'The SHA-1 certificate hash provided is invalid.',
            'invalid-credential': 'The supplied auth credential is malformed or has expired.',
            'invalid-message-payload':
              'The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.',
            'invalid-multi-factor-session':
              'The request does not contain a valid proof of first factor successful sign-in.',
            'invalid-oauth-provider':
              'EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.',
            'invalid-oauth-client-id':
              'The OAuth client ID provided is either invalid or does not match the specified API key.',
            'unauthorized-domain':
              'This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.',
            'invalid-action-code':
              'The action code is invalid. This can happen if the code is malformed, expired, or has already been used.',
            'wrong-password': 'The password is invalid or the user does not have a password.',
            'invalid-persistence-type':
              'The specified persistence type is invalid. It can only be local, session or none.',
            'invalid-phone-number':
              'The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].',
            'invalid-provider-id': 'The specified provider ID is invalid.',
            'invalid-recipient-email':
              'The email corresponding to this action failed to send as the provided recipient email address is invalid.',
            'invalid-sender':
              'The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.',
            'invalid-verification-id': 'The verification ID used to create the phone auth credential is invalid.',
            'invalid-tenant-id': "The Auth instance's tenant ID is invalid.",
            'multi-factor-info-not-found': 'The user does not have a second factor matching the identifier provided.',
            'multi-factor-auth-required': 'Proof of ownership of a second factor is required to complete sign-in.',
            'missing-android-pkg-name':
              'An Android Package Name must be provided if the Android App is required to be installed.',
            'auth-domain-config-required':
              'Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.',
            'missing-app-credential':
              'The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.',
            'missing-verification-code': 'The phone auth credential was created with an empty SMS verification code.',
            'missing-continue-uri': 'A continue URL must be provided in the request.',
            'missing-iframe-start': 'An internal error has occurred.',
            'missing-ios-bundle-id': 'An iOS Bundle ID must be provided if an App Store ID is provided.',
            'missing-multi-factor-info': 'No second factor identifier is provided.',
            'missing-multi-factor-session': 'The request is missing proof of first factor successful sign-in.',
            'missing-or-invalid-nonce':
              'The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.',
            'missing-phone-number': 'To send verification codes, provide a phone number for the recipient.',
            'missing-verification-id': 'The phone auth credential was created with an empty verification ID.',
            'app-deleted': 'This instance of FirebaseApp has been deleted.',
            'account-exists-with-different-credential':
              'An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.',
            'network-request-failed':
              'A network error (such as timeout, interrupted connection or unreachable host) has occurred.',
            'no-auth-event': 'An internal error has occurred.',
            'no-such-provider': 'User was not linked to an account with the given provider.',
            'null-user':
              'A null user object was provided as the argument for an operation which requires a non-null user object.',
            'operation-not-allowed':
              'The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.',
            'operation-not-supported-in-this-environment':
              'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',
            'popup-blocked':
              'Unable to establish a connection with the popup. It may have been blocked by the browser.',
            'popup-closed-by-user': 'The popup has been closed by the user before finalizing the operation.',
            'provider-already-linked': 'User can only be linked to one identity for the given provider.',
            'quota-exceeded': "The project's quota for this operation has been exceeded.",
            'redirect-cancelled-by-user': 'The redirect operation has been cancelled by the user before finalizing.',
            'redirect-operation-pending': 'A redirect sign-in operation is already pending.',
            'rejected-credential': 'The request contains malformed or mismatching credentials.',
            'second-factor-already-in-use': 'The second factor is already enrolled on this account.',
            'maximum-second-factor-count-exceeded':
              'The maximum allowed number of second factors on a user has been exceeded.',
            'tenant-id-mismatch': "The provided tenant ID does not match the Auth instance's tenant ID",
            timeout: 'The operation has timed out.',
            'user-token-expired': "The user's credential is no longer valid. The user must sign in again.",
            'too-many-requests':
              'We have blocked all requests from this device due to unusual activity. Try again later.',
            'unauthorized-continue-uri':
              'The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.',
            'unsupported-first-factor':
              'Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.',
            'unsupported-persistence-type': 'The current environment does not support the specified persistence type.',
            'unsupported-tenant-operation': 'This operation is not supported in a multi-tenant context.',
            'unverified-email': 'The operation requires a verified email.',
            'user-cancelled': 'The user did not grant your application the permissions it requested.',
            'user-not-found':
              'There is no user record corresponding to this identifier. The user may have been deleted.',
            'user-disabled': 'The user account has been disabled by an administrator.',
            'user-mismatch': 'The supplied credentials do not correspond to the previously signed in user.',
            'user-signed-out': '',
            'weak-password': 'The password must be 6 characters long or more.',
            'web-storage-unsupported': 'This browser is not supported or 3rd party cookies and data may be disabled.',
          },
          R = {
            ld: {
              Ua: 'https://staging-identitytoolkit.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/',
              $a: 'https://staging-securetoken.sandbox.googleapis.com/v1/token',
              Xa: 'https://staging-identitytoolkit.sandbox.googleapis.com/v2/',
              id: 'b',
            },
            sd: {
              Ua: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/',
              $a: 'https://securetoken.googleapis.com/v1/token',
              Xa: 'https://identitytoolkit.googleapis.com/v2/',
              id: 'p',
            },
            ud: {
              Ua: 'https://staging-www.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/',
              $a: 'https://staging-securetoken.sandbox.googleapis.com/v1/token',
              Xa: 'https://staging-identitytoolkit.sandbox.googleapis.com/v2/',
              id: 's',
            },
            vd: {
              Ua: 'https://www-googleapis-test.sandbox.google.com/identitytoolkit/v3/relyingparty/',
              $a: 'https://test-securetoken.sandbox.googleapis.com/v1/token',
              Xa: 'https://test-identitytoolkit.sandbox.googleapis.com/v2/',
              id: 't',
            },
          };
        function P(t) {
          for (var n in R)
            if (R[n].id === t)
              return { firebaseEndpoint: (t = R[n]).Ua, secureTokenEndpoint: t.$a, identityPlatformEndpoint: t.Xa };
          return null;
        }
        function D(t) {
          if (!t) return !1;
          try {
            return !!t.$goog_Thenable;
          } catch (n) {
            return !1;
          }
        }
        function L(t) {
          if (Error.captureStackTrace) Error.captureStackTrace(this, L);
          else {
            var n = Error().stack;
            n && (this.stack = n);
          }
          t && (this.message = String(t));
        }
        function x(t, n) {
          for (var e = '', i = (t = t.split('%s')).length - 1, r = 0; r < i; r++)
            e += t[r] + (r < n.length ? n[r] : '%s');
          L.call(this, e + t[i]);
        }
        function M(t, n) {
          throw new x('Failure' + (t ? ': ' + t : ''), Array.prototype.slice.call(arguments, 1));
        }
        function j(t, n) {
          (this.c = t), (this.f = n), (this.b = 0), (this.a = null);
        }
        function U(t, n) {
          t.f(n), 100 > t.b && (t.b++, (n.next = t.a), (t.a = n));
        }
        function V() {
          this.b = this.a = null;
        }
        (_ = P('__EID__') ? '__EID__' : void 0),
          A(L, Error),
          (L.prototype.name = 'CustomError'),
          A(x, L),
          (x.prototype.name = 'AssertionError'),
          (j.prototype.get = function () {
            if (0 < this.b) {
              this.b--;
              var t = this.a;
              (this.a = t.next), (t.next = null);
            } else t = this.c();
            return t;
          });
        var F = new j(
          function () {
            return new q();
          },
          function (t) {
            t.reset();
          }
        );
        function K() {
          var t = yn,
            n = null;
          return t.a && ((n = t.a), (t.a = t.a.next), t.a || (t.b = null), (n.next = null)), n;
        }
        function q() {
          this.next = this.b = this.a = null;
        }
        (V.prototype.add = function (t, n) {
          var e = F.get();
          e.set(t, n), this.b ? (this.b.next = e) : (this.a = e), (this.b = e);
        }),
          (q.prototype.set = function (t, n) {
            (this.a = t), (this.b = n), (this.next = null);
          }),
          (q.prototype.reset = function () {
            this.next = this.b = this.a = null;
          });
        var H = Array.prototype.indexOf
            ? function (t, n) {
                return Array.prototype.indexOf.call(t, n, void 0);
              }
            : function (t, n) {
                if ('string' == typeof t) return 'string' != typeof n || 1 != n.length ? -1 : t.indexOf(n, 0);
                for (var e = 0; e < t.length; e++) if (e in t && t[e] === n) return e;
                return -1;
              },
          G = Array.prototype.forEach
            ? function (t, n, e) {
                Array.prototype.forEach.call(t, n, e);
              }
            : function (t, n, e) {
                for (var i = t.length, r = 'string' == typeof t ? t.split('') : t, o = 0; o < i; o++)
                  o in r && n.call(e, r[o], o, t);
              },
          B = Array.prototype.filter
            ? function (t, n) {
                return Array.prototype.filter.call(t, n, void 0);
              }
            : function (t, n) {
                for (var e = t.length, i = [], r = 0, o = 'string' == typeof t ? t.split('') : t, a = 0; a < e; a++)
                  if (a in o) {
                    var s = o[a];
                    n.call(void 0, s, a, t) && (i[r++] = s);
                  }
                return i;
              },
          W = Array.prototype.map
            ? function (t, n) {
                return Array.prototype.map.call(t, n, void 0);
              }
            : function (t, n) {
                for (var e = t.length, i = Array(e), r = 'string' == typeof t ? t.split('') : t, o = 0; o < e; o++)
                  o in r && (i[o] = n.call(void 0, r[o], o, t));
                return i;
              },
          X = Array.prototype.some
            ? function (t, n) {
                return Array.prototype.some.call(t, n, void 0);
              }
            : function (t, n) {
                for (var e = t.length, i = 'string' == typeof t ? t.split('') : t, r = 0; r < e; r++)
                  if (r in i && n.call(void 0, i[r], r, t)) return !0;
                return !1;
              };
        function J(t, n) {
          return 0 <= H(t, n);
        }
        function Y(t, n) {
          var e;
          return (e = 0 <= (n = H(t, n))) && Array.prototype.splice.call(t, n, 1), e;
        }
        function z(t, n) {
          !(function (t, n) {
            for (var e = 'string' == typeof t ? t.split('') : t, i = t.length - 1; 0 <= i; --i)
              i in e && n.call(void 0, e[i], i, t);
          })(t, function (e, i) {
            n.call(void 0, e, i, t) && Array.prototype.splice.call(t, i, 1);
          });
        }
        function $(t) {
          return Array.prototype.concat.apply([], arguments);
        }
        function Z(t) {
          var n = t.length;
          if (0 < n) {
            for (var e = Array(n), i = 0; i < n; i++) e[i] = t[i];
            return e;
          }
          return [];
        }
        var Q,
          tt = String.prototype.trim
            ? function (t) {
                return t.trim();
              }
            : function (t) {
                return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1];
              },
          nt = /&/g,
          et = /</g,
          it = />/g,
          rt = /"/g,
          ot = /'/g,
          at = /\x00/g,
          st = /[\x00&<>"']/;
        function ut(t, n) {
          return -1 != t.indexOf(n);
        }
        function ct(t, n) {
          return t < n ? -1 : t > n ? 1 : 0;
        }
        t: {
          var ht = s.navigator;
          if (ht) {
            var lt = ht.userAgent;
            if (lt) {
              Q = lt;
              break t;
            }
          }
          Q = '';
        }
        function ft(t) {
          return ut(Q, t);
        }
        function dt(t, n) {
          for (var e in t) n.call(void 0, t[e], e, t);
        }
        function pt(t) {
          for (var n in t) return !1;
          return !0;
        }
        function vt(t) {
          var n,
            e = {};
          for (n in t) e[n] = t[n];
          return e;
        }
        var mt = 'constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf'.split(
          ' '
        );
        function gt(t, n) {
          for (var e, i, r = 1; r < arguments.length; r++) {
            for (e in (i = arguments[r])) t[e] = i[e];
            for (var o = 0; o < mt.length; o++)
              (e = mt[o]), Object.prototype.hasOwnProperty.call(i, e) && (t[e] = i[e]);
          }
        }
        function bt(t, n) {
          t: {
            try {
              var e = t && t.ownerDocument,
                i = e && (e.defaultView || e.parentWindow);
              if ((i = i || s).Element && i.Location) {
                var r = i;
                break t;
              }
            } catch (a) {}
            r = null;
          }
          if (
            r &&
            void 0 !== r[n] &&
            (!t || (!(t instanceof r[n]) && (t instanceof r.Location || t instanceof r.Element)))
          ) {
            if (v(t))
              try {
                var o = t.constructor.displayName || t.constructor.name || Object.prototype.toString.call(t);
              } catch (a) {
                o = '<object could not be stringified>';
              }
            else o = void 0 === t ? 'undefined' : null === t ? 'null' : typeof t;
            M('Argument is not a %s (or a non-Element, non-Location mock); got: %s', n, o);
          }
        }
        function yt(t, n) {
          (this.a = (t === Et && n) || ''), (this.b = Tt);
        }
        function wt(t) {
          return t instanceof yt && t.constructor === yt && t.b === Tt
            ? t.a
            : (M("expected object of type Const, got '" + t + "'"), 'type_error:Const');
        }
        (yt.prototype.ta = !0),
          (yt.prototype.sa = function () {
            return this.a;
          }),
          (yt.prototype.toString = function () {
            return 'Const{' + this.a + '}';
          });
        var It,
          Tt = {},
          Et = {};
        function At() {
          if (void 0 === It) {
            var t = null,
              n = s.trustedTypes;
            if (n && n.createPolicy) {
              try {
                t = n.createPolicy('goog#html', { createHTML: k, createScript: k, createScriptURL: k });
              } catch (e) {
                s.console && s.console.error(e.message);
              }
              It = t;
            } else It = t;
          }
          return It;
        }
        function kt(t, n) {
          this.a = n === Ct ? t : '';
        }
        function St(t) {
          return t instanceof kt && t.constructor === kt
            ? t.a
            : (M("expected object of type TrustedResourceUrl, got '" + t + "' of type " + f(t)),
              'type_error:TrustedResourceUrl');
        }
        function Nt(t, n) {
          var e = wt(t);
          if (!Ot.test(e)) throw Error('Invalid TrustedResourceUrl format: ' + e);
          return (function (t) {
            var n = At();
            return new kt((t = n ? n.createScriptURL(t) : t), Ct);
          })(
            (t = e.replace(_t, function (t, i) {
              if (!Object.prototype.hasOwnProperty.call(n, i))
                throw Error(
                  'Found marker, "' +
                    i +
                    '", in format string, "' +
                    e +
                    '", but no valid label mapping found in args: ' +
                    JSON.stringify(n)
                );
              return (t = n[i]) instanceof yt ? wt(t) : encodeURIComponent(String(t));
            }))
          );
        }
        (kt.prototype.ta = !0),
          (kt.prototype.sa = function () {
            return this.a.toString();
          }),
          (kt.prototype.toString = function () {
            return 'TrustedResourceUrl{' + this.a + '}';
          });
        var _t = /%{(\w+)}/g,
          Ot = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,
          Ct = {};
        function Rt(t, n) {
          this.a = n === Ut ? t : '';
        }
        function Pt(t) {
          return t instanceof Rt && t.constructor === Rt
            ? t.a
            : (M("expected object of type SafeUrl, got '" + t + "' of type " + f(t)), 'type_error:SafeUrl');
        }
        (Rt.prototype.ta = !0),
          (Rt.prototype.sa = function () {
            return this.a.toString();
          }),
          (Rt.prototype.toString = function () {
            return 'SafeUrl{' + this.a + '}';
          });
        var Dt =
            /^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i,
          Lt = /^data:(.*);base64,[a-z0-9+\/]+=*$/i,
          xt = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
        function Mt(t) {
          if (t instanceof Rt) return t;
          if (((t = 'object' == typeof t && t.ta ? t.sa() : String(t)), xt.test(t))) t = new Rt(t, Ut);
          else {
            var n = (t = (t = String(t)).replace(/(%0A|%0D)/g, '')).match(Lt);
            t = n && Dt.test(n[1]) ? new Rt(t, Ut) : null;
          }
          return t;
        }
        function jt(t) {
          return t instanceof Rt
            ? t
            : ((t = 'object' == typeof t && t.ta ? t.sa() : String(t)),
              xt.test(t) || (t = 'about:invalid#zClosurez'),
              new Rt(t, Ut));
        }
        var Ut = {},
          Vt = new Rt('about:invalid#zClosurez', Ut);
        function Ft(t, n, e) {
          this.a = e === Kt ? t : '';
        }
        (Ft.prototype.ta = !0),
          (Ft.prototype.sa = function () {
            return this.a.toString();
          }),
          (Ft.prototype.toString = function () {
            return 'SafeHtml{' + this.a + '}';
          });
        var Kt = {};
        function qt(t, n, e, i) {
          return (
            (t = t instanceof Rt ? t : jt(t)),
            (n = n || s),
            (e = e instanceof yt ? wt(e) : e || ''),
            n.open(Pt(t), e, i, void 0)
          );
        }
        function Ht(t, n) {
          for (var e = t.split('%s'), i = '', r = Array.prototype.slice.call(arguments, 1); r.length && 1 < e.length; )
            i += e.shift() + r.shift();
          return i + e.join('%s');
        }
        function Gt(t) {
          return (
            st.test(t) &&
              (-1 != t.indexOf('&') && (t = t.replace(nt, '&amp;')),
              -1 != t.indexOf('<') && (t = t.replace(et, '&lt;')),
              -1 != t.indexOf('>') && (t = t.replace(it, '&gt;')),
              -1 != t.indexOf('"') && (t = t.replace(rt, '&quot;')),
              -1 != t.indexOf("'") && (t = t.replace(ot, '&#39;')),
              -1 != t.indexOf('\0') && (t = t.replace(at, '&#0;'))),
            t
          );
        }
        function Bt(t) {
          return Bt[' '](t), t;
        }
        Bt[' '] = l;
        var Wt,
          Xt,
          Jt = ft('Opera'),
          Yt = ft('Trident') || ft('MSIE'),
          zt = ft('Edge'),
          $t = zt || Yt,
          Zt =
            ft('Gecko') &&
            !(ut(Q.toLowerCase(), 'webkit') && !ft('Edge')) &&
            !(ft('Trident') || ft('MSIE')) &&
            !ft('Edge'),
          Qt = ut(Q.toLowerCase(), 'webkit') && !ft('Edge');
        function tn() {
          var t = s.document;
          return t ? t.documentMode : void 0;
        }
        t: {
          var nn = '',
            en =
              ((Xt = Q),
              Zt
                ? /rv:([^\);]+)(\)|;)/.exec(Xt)
                : zt
                ? /Edge\/([\d\.]+)/.exec(Xt)
                : Yt
                ? /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Xt)
                : Qt
                ? /WebKit\/(\S+)/.exec(Xt)
                : Jt
                ? /(?:Version)[ \/]?(\S+)/.exec(Xt)
                : void 0);
          if ((en && (nn = en ? en[1] : ''), Yt)) {
            var rn = tn();
            if (null != rn && rn > parseFloat(nn)) {
              Wt = String(rn);
              break t;
            }
          }
          Wt = nn;
        }
        var on = {};
        function an(t) {
          return (function (t, n) {
            var e = on;
            return Object.prototype.hasOwnProperty.call(e, t) ? e[t] : (e[t] = n());
          })(t, function () {
            for (
              var n = 0,
                e = tt(String(Wt)).split('.'),
                i = tt(String(t)).split('.'),
                r = Math.max(e.length, i.length),
                o = 0;
              0 == n && o < r;
              o++
            ) {
              var a = e[o] || '',
                s = i[o] || '';
              do {
                if (
                  ((a = /(\d*)(\D*)(.*)/.exec(a) || ['', '', '', '']),
                  (s = /(\d*)(\D*)(.*)/.exec(s) || ['', '', '', '']),
                  0 == a[0].length && 0 == s[0].length)
                )
                  break;
                (n =
                  ct(0 == a[1].length ? 0 : parseInt(a[1], 10), 0 == s[1].length ? 0 : parseInt(s[1], 10)) ||
                  ct(0 == a[2].length, 0 == s[2].length) ||
                  ct(a[2], s[2])),
                  (a = a[3]),
                  (s = s[3]);
              } while (0 == n);
            }
            return 0 <= n;
          });
        }
        var sn = (s.document && Yt && (tn() || parseInt(Wt, 10))) || void 0;
        try {
          new self.OffscreenCanvas(0, 0).getContext('2d');
        } catch (Xt) {}
        var un = !Yt || 9 <= Number(sn);
        function cn(t) {
          var n = document;
          return 'string' == typeof t ? n.getElementById(t) : t;
        }
        function hn(t, n) {
          dt(n, function (n, e) {
            n && 'object' == typeof n && n.ta && (n = n.sa()),
              'style' == e
                ? (t.style.cssText = n)
                : 'class' == e
                ? (t.className = n)
                : 'for' == e
                ? (t.htmlFor = n)
                : dn.hasOwnProperty(e)
                ? t.setAttribute(dn[e], n)
                : 0 == e.lastIndexOf('aria-', 0) || 0 == e.lastIndexOf('data-', 0)
                ? t.setAttribute(e, n)
                : (t[e] = n);
          });
        }
        var ln,
          fn,
          dn = {
            cellpadding: 'cellPadding',
            cellspacing: 'cellSpacing',
            colspan: 'colSpan',
            frameborder: 'frameBorder',
            height: 'height',
            maxlength: 'maxLength',
            nonce: 'nonce',
            role: 'role',
            rowspan: 'rowSpan',
            type: 'type',
            usemap: 'useMap',
            valign: 'vAlign',
            width: 'width',
          };
        function pn(t, n, e) {
          function i(e) {
            e && n.appendChild('string' == typeof e ? t.createTextNode(e) : e);
          }
          for (var r = 2; r < e.length; r++) {
            var o = e[r];
            if (!d(o) || (v(o) && 0 < o.nodeType)) i(o);
            else {
              t: {
                if (o && 'number' == typeof o.length) {
                  if (v(o)) {
                    var a = 'function' == typeof o.item || 'string' == typeof o.item;
                    break t;
                  }
                  if (p(o)) {
                    a = 'function' == typeof o.item;
                    break t;
                  }
                }
                a = !1;
              }
              G(a ? Z(o) : o, i);
            }
          }
        }
        function vn(t, n) {
          return (
            (n = String(n)), 'application/xhtml+xml' === t.contentType && (n = n.toLowerCase()), t.createElement(n)
          );
        }
        function mn(t) {
          s.setTimeout(function () {
            throw t;
          }, 0);
        }
        function gn(t, n) {
          fn ||
            (function () {
              if (s.Promise && s.Promise.resolve) {
                var t = s.Promise.resolve(void 0);
                fn = function () {
                  t.then(wn);
                };
              } else
                fn = function () {
                  var t = wn;
                  !p(s.setImmediate) ||
                  (s.Window && s.Window.prototype && !ft('Edge') && s.Window.prototype.setImmediate == s.setImmediate)
                    ? (ln ||
                        (ln = (function () {
                          var t = s.MessageChannel;
                          if (
                            (void 0 === t &&
                              'undefined' != typeof window &&
                              window.postMessage &&
                              window.addEventListener &&
                              !ft('Presto') &&
                              (t = function () {
                                var t = vn(document, 'IFRAME');
                                (t.style.display = 'none'), document.documentElement.appendChild(t);
                                var n = t.contentWindow;
                                (t = n.document).open(), t.close();
                                var e = 'callImmediate' + Math.random(),
                                  i =
                                    'file:' == n.location.protocol ? '*' : n.location.protocol + '//' + n.location.host;
                                (t = I(function (t) {
                                  ('*' != i && t.origin != i) || t.data != e || this.port1.onmessage();
                                }, this)),
                                  n.addEventListener('message', t, !1),
                                  (this.port1 = {}),
                                  (this.port2 = {
                                    postMessage: function () {
                                      n.postMessage(e, i);
                                    },
                                  });
                              }),
                            void 0 !== t && !ft('Trident') && !ft('MSIE'))
                          ) {
                            var n = new t(),
                              e = {},
                              i = e;
                            return (
                              (n.port1.onmessage = function () {
                                if (void 0 !== e.next) {
                                  var t = (e = e.next).Hb;
                                  (e.Hb = null), t();
                                }
                              }),
                              function (t) {
                                (i.next = { Hb: t }), (i = i.next), n.port2.postMessage(0);
                              }
                            );
                          }
                          return function (t) {
                            s.setTimeout(t, 0);
                          };
                        })()),
                      ln(t))
                    : s.setImmediate(t);
                };
            })(),
            bn || (fn(), (bn = !0)),
            yn.add(t, n);
        }
        var bn = !1,
          yn = new V();
        function wn() {
          for (var t; (t = K()); ) {
            try {
              t.a.call(t.b);
            } catch (n) {
              mn(n);
            }
            U(F, t);
          }
          bn = !1;
        }
        function In(t, n) {
          if (((this.a = Tn), (this.i = void 0), (this.f = this.b = this.c = null), (this.g = this.h = !1), t != l))
            try {
              var e = this;
              t.call(
                n,
                function (t) {
                  xn(e, En, t);
                },
                function (t) {
                  if (!(t instanceof qn))
                    try {
                      if (t instanceof Error) throw t;
                      throw Error('Promise rejected.');
                    } catch (n) {}
                  xn(e, An, t);
                }
              );
            } catch (i) {
              xn(this, An, i);
            }
        }
        var Tn = 0,
          En = 2,
          An = 3;
        function kn() {
          (this.next = this.f = this.b = this.g = this.a = null), (this.c = !1);
        }
        kn.prototype.reset = function () {
          (this.f = this.b = this.g = this.a = null), (this.c = !1);
        };
        var Sn = new j(
          function () {
            return new kn();
          },
          function (t) {
            t.reset();
          }
        );
        function Nn(t, n, e) {
          var i = Sn.get();
          return (i.g = t), (i.b = n), (i.f = e), i;
        }
        function _n(t) {
          if (t instanceof In) return t;
          var n = new In(l);
          return xn(n, En, t), n;
        }
        function On(t) {
          return new In(function (n, e) {
            e(t);
          });
        }
        function Cn(t, n, e) {
          Mn(t, n, e, null) || gn(T(n, t));
        }
        function Rn(t) {
          return new In(function (n) {
            var e = t.length,
              i = [];
            if (e)
              for (
                var r = function (t, r, o) {
                    e--, (i[t] = r ? { Qb: !0, value: o } : { Qb: !1, reason: o }), 0 == e && n(i);
                  },
                  o = 0;
                o < t.length;
                o++
              )
                Cn(t[o], T(r, o, !0), T(r, o, !1));
            else n(i);
          });
        }
        function Pn(t, n) {
          if (t.a == Tn)
            if (t.c) {
              var e = t.c;
              if (e.b) {
                for (
                  var i = 0, r = null, o = null, a = e.b;
                  a && (a.c || (i++, a.a == t && (r = a), !(r && 1 < i)));
                  a = a.next
                )
                  r || (o = a);
                r &&
                  (e.a == Tn && 1 == i
                    ? Pn(e, n)
                    : (o ? ((i = o).next == e.f && (e.f = i), (i.next = i.next.next)) : Un(e), Vn(e, r, An, n)));
              }
              t.c = null;
            } else xn(t, An, n);
        }
        function Dn(t, n) {
          t.b || (t.a != En && t.a != An) || jn(t), t.f ? (t.f.next = n) : (t.b = n), (t.f = n);
        }
        function Ln(t, n, e, i) {
          var r = Nn(null, null, null);
          return (
            (r.a = new In(function (t, o) {
              (r.g = n
                ? function (e) {
                    try {
                      var r = n.call(i, e);
                      t(r);
                    } catch (a) {
                      o(a);
                    }
                  }
                : t),
                (r.b = e
                  ? function (n) {
                      try {
                        var r = e.call(i, n);
                        void 0 === r && n instanceof qn ? o(n) : t(r);
                      } catch (a) {
                        o(a);
                      }
                    }
                  : o);
            })),
            (r.a.c = t),
            Dn(t, r),
            r.a
          );
        }
        function xn(t, n, e) {
          t.a == Tn &&
            (t === e && ((n = An), (e = new TypeError('Promise cannot resolve to itself'))),
            (t.a = 1),
            Mn(e, t.$c, t.ad, t) ||
              ((t.i = e),
              (t.a = n),
              (t.c = null),
              jn(t),
              n != An ||
                e instanceof qn ||
                (function (t, n) {
                  (t.g = !0),
                    gn(function () {
                      t.g && Kn.call(null, n);
                    });
                })(t, e)));
        }
        function Mn(t, n, e, i) {
          if (t instanceof In) return Dn(t, Nn(n || l, e || null, i)), !0;
          if (D(t)) return t.then(n, e, i), !0;
          if (v(t))
            try {
              var r = t.then;
              if (p(r))
                return (
                  (function (t, n, e, i, r) {
                    function o(t) {
                      a || ((a = !0), i.call(r, t));
                    }
                    var a = !1;
                    try {
                      n.call(
                        t,
                        function (t) {
                          a || ((a = !0), e.call(r, t));
                        },
                        o
                      );
                    } catch (s) {
                      o(s);
                    }
                  })(t, r, n, e, i),
                  !0
                );
            } catch (o) {
              return e.call(i, o), !0;
            }
          return !1;
        }
        function jn(t) {
          t.h || ((t.h = !0), gn(t.gc, t));
        }
        function Un(t) {
          var n = null;
          return t.b && ((t.b = (n = t.b).next), (n.next = null)), t.b || (t.f = null), n;
        }
        function Vn(t, n, e, i) {
          if (e == An && n.b && !n.c) for (; t && t.g; t = t.c) t.g = !1;
          if (n.a) (n.a.c = null), Fn(n, e, i);
          else
            try {
              n.c ? n.g.call(n.f) : Fn(n, e, i);
            } catch (r) {
              Kn.call(null, r);
            }
          U(Sn, n);
        }
        function Fn(t, n, e) {
          n == En ? t.g.call(t.f, e) : t.b && t.b.call(t.f, e);
        }
        (In.prototype.then = function (t, n, e) {
          return Ln(this, p(t) ? t : null, p(n) ? n : null, e);
        }),
          (In.prototype.$goog_Thenable = !0),
          ((t = In.prototype).oa = function (t, n) {
            return ((t = Nn(t, t, n)).c = !0), Dn(this, t), this;
          }),
          (t.o = function (t, n) {
            return Ln(this, null, t, n);
          }),
          (t.cancel = function (t) {
            if (this.a == Tn) {
              var n = new qn(t);
              gn(function () {
                Pn(this, n);
              }, this);
            }
          }),
          (t.$c = function (t) {
            (this.a = Tn), xn(this, En, t);
          }),
          (t.ad = function (t) {
            (this.a = Tn), xn(this, An, t);
          }),
          (t.gc = function () {
            for (var t; (t = Un(this)); ) Vn(this, t, this.a, this.i);
            this.h = !1;
          });
        var Kn = mn;
        function qn(t) {
          L.call(this, t);
        }
        function Hn() {
          0 != Gn && (Bn[m(this)] = this), (this.ya = this.ya), (this.pa = this.pa);
        }
        A(qn, L), (qn.prototype.name = 'cancel');
        var Gn = 0,
          Bn = {};
        function Wn(t) {
          if (!t.ya && ((t.ya = !0), t.Da(), 0 != Gn)) {
            var n = m(t);
            if (0 != Gn && t.pa && 0 < t.pa.length)
              throw Error(
                t +
                  " did not empty its onDisposeCallbacks queue. This probably means it overrode dispose() or disposeInternal() without calling the superclass' method."
              );
            delete Bn[n];
          }
        }
        (Hn.prototype.ya = !1),
          (Hn.prototype.Da = function () {
            if (this.pa) for (; this.pa.length; ) this.pa.shift()();
          });
        var Xn =
            Object.freeze ||
            function (t) {
              return t;
            },
          Jn = !Yt || 9 <= Number(sn),
          Yn = Yt && !an('9'),
          zn = (function () {
            if (!s.addEventListener || !Object.defineProperty) return !1;
            var t = !1,
              n = Object.defineProperty({}, 'passive', {
                get: function () {
                  t = !0;
                },
              });
            try {
              s.addEventListener('test', l, n), s.removeEventListener('test', l, n);
            } catch (e) {}
            return t;
          })();
        function $n(t, n) {
          (this.type = t), (this.b = this.target = n), (this.defaultPrevented = !1);
        }
        function Zn(t, n) {
          if (
            ($n.call(this, t ? t.type : ''),
            (this.relatedTarget = this.b = this.target = null),
            (this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0),
            (this.key = ''),
            (this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1),
            (this.pointerId = 0),
            (this.pointerType = ''),
            (this.a = null),
            t)
          ) {
            var e = (this.type = t.type),
              i = t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : null;
            if (((this.target = t.target || t.srcElement), (this.b = n), (n = t.relatedTarget))) {
              if (Zt) {
                t: {
                  try {
                    Bt(n.nodeName);
                    var r = !0;
                    break t;
                  } catch (o) {}
                  r = !1;
                }
                r || (n = null);
              }
            } else 'mouseover' == e ? (n = t.fromElement) : 'mouseout' == e && (n = t.toElement);
            (this.relatedTarget = n),
              i
                ? ((this.clientX = void 0 !== i.clientX ? i.clientX : i.pageX),
                  (this.clientY = void 0 !== i.clientY ? i.clientY : i.pageY),
                  (this.screenX = i.screenX || 0),
                  (this.screenY = i.screenY || 0))
                : ((this.clientX = void 0 !== t.clientX ? t.clientX : t.pageX),
                  (this.clientY = void 0 !== t.clientY ? t.clientY : t.pageY),
                  (this.screenX = t.screenX || 0),
                  (this.screenY = t.screenY || 0)),
              (this.button = t.button),
              (this.key = t.key || ''),
              (this.ctrlKey = t.ctrlKey),
              (this.altKey = t.altKey),
              (this.shiftKey = t.shiftKey),
              (this.metaKey = t.metaKey),
              (this.pointerId = t.pointerId || 0),
              (this.pointerType = 'string' == typeof t.pointerType ? t.pointerType : Qn[t.pointerType] || ''),
              (this.a = t),
              t.defaultPrevented && this.preventDefault();
          }
        }
        ($n.prototype.preventDefault = function () {
          this.defaultPrevented = !0;
        }),
          A(Zn, $n);
        var Qn = Xn({ 2: 'touch', 3: 'pen', 4: 'mouse' });
        (Zn.prototype.preventDefault = function () {
          Zn.bb.preventDefault.call(this);
          var t = this.a;
          if (t.preventDefault) t.preventDefault();
          else if (((t.returnValue = !1), Yn))
            try {
              (t.ctrlKey || (112 <= t.keyCode && 123 >= t.keyCode)) && (t.keyCode = -1);
            } catch (n) {}
        }),
          (Zn.prototype.g = function () {
            return this.a;
          });
        var te = 'closure_listenable_' + ((1e6 * Math.random()) | 0),
          ne = 0;
        function ee(t, n, e, i, r) {
          (this.listener = t),
            (this.proxy = null),
            (this.src = n),
            (this.type = e),
            (this.capture = !!i),
            (this.Wa = r),
            (this.key = ++ne),
            (this.wa = this.Qa = !1);
        }
        function ie(t) {
          (t.wa = !0), (t.listener = null), (t.proxy = null), (t.src = null), (t.Wa = null);
        }
        function re(t) {
          (this.src = t), (this.a = {}), (this.b = 0);
        }
        function oe(t, n) {
          var e = n.type;
          e in t.a && Y(t.a[e], n) && (ie(n), 0 == t.a[e].length && (delete t.a[e], t.b--));
        }
        function ae(t, n, e, i) {
          for (var r = 0; r < t.length; ++r) {
            var o = t[r];
            if (!o.wa && o.listener == n && o.capture == !!e && o.Wa == i) return r;
          }
          return -1;
        }
        re.prototype.add = function (t, n, e, i, r) {
          var o = t.toString();
          (t = this.a[o]) || ((t = this.a[o] = []), this.b++);
          var a = ae(t, n, i, r);
          return (
            -1 < a ? ((n = t[a]), e || (n.Qa = !1)) : (((n = new ee(n, this.src, o, !!i, r)).Qa = e), t.push(n)), n
          );
        };
        var se = 'closure_lm_' + ((1e6 * Math.random()) | 0),
          ue = {};
        function ce(t, n, e, i, r) {
          if (i && i.once) le(t, n, e, i, r);
          else if (Array.isArray(n)) for (var o = 0; o < n.length; o++) ce(t, n[o], e, i, r);
          else (e = we(e)), t && t[te] ? Te(t, n, e, v(i) ? !!i.capture : !!i, r) : he(t, n, e, !1, i, r);
        }
        function he(t, n, e, i, r, o) {
          if (!n) throw Error('Invalid event type');
          var a = v(r) ? !!r.capture : !!r,
            s = be(t);
          if ((s || (t[se] = s = new re(t)), !(e = s.add(n, e, i, a, o)).proxy))
            if (
              ((i = (function () {
                var t = ge,
                  n = Jn
                    ? function (e) {
                        return t.call(n.src, n.listener, e);
                      }
                    : function (e) {
                        if (!(e = t.call(n.src, n.listener, e))) return e;
                      };
                return n;
              })()),
              (e.proxy = i),
              (i.src = t),
              (i.listener = e),
              t.addEventListener)
            )
              zn || (r = a), void 0 === r && (r = !1), t.addEventListener(n.toString(), i, r);
            else if (t.attachEvent) t.attachEvent(pe(n.toString()), i);
            else {
              if (!t.addListener || !t.removeListener) throw Error('addEventListener and attachEvent are unavailable.');
              t.addListener(i);
            }
        }
        function le(t, n, e, i, r) {
          if (Array.isArray(n)) for (var o = 0; o < n.length; o++) le(t, n[o], e, i, r);
          else (e = we(e)), t && t[te] ? Ee(t, n, e, v(i) ? !!i.capture : !!i, r) : he(t, n, e, !0, i, r);
        }
        function fe(t, n, e, i, r) {
          if (Array.isArray(n)) for (var o = 0; o < n.length; o++) fe(t, n[o], e, i, r);
          else
            (i = v(i) ? !!i.capture : !!i),
              (e = we(e)),
              t && t[te]
                ? ((t = t.v),
                  (n = String(n).toString()) in t.a &&
                    -1 < (e = ae((o = t.a[n]), e, i, r)) &&
                    (ie(o[e]), Array.prototype.splice.call(o, e, 1), 0 == o.length && (delete t.a[n], t.b--)))
                : t &&
                  (t = be(t)) &&
                  ((n = t.a[n.toString()]), (t = -1), n && (t = ae(n, e, i, r)), (e = -1 < t ? n[t] : null) && de(e));
        }
        function de(t) {
          if ('number' != typeof t && t && !t.wa) {
            var n = t.src;
            if (n && n[te]) oe(n.v, t);
            else {
              var e = t.type,
                i = t.proxy;
              n.removeEventListener
                ? n.removeEventListener(e, i, t.capture)
                : n.detachEvent
                ? n.detachEvent(pe(e), i)
                : n.addListener && n.removeListener && n.removeListener(i),
                (e = be(n)) ? (oe(e, t), 0 == e.b && ((e.src = null), (n[se] = null))) : ie(t);
            }
          }
        }
        function pe(t) {
          return t in ue ? ue[t] : (ue[t] = 'on' + t);
        }
        function ve(t, n, e, i) {
          var r = !0;
          if ((t = be(t)) && (n = t.a[n.toString()]))
            for (n = n.concat(), t = 0; t < n.length; t++) {
              var o = n[t];
              o && o.capture == e && !o.wa && ((o = me(o, i)), (r = r && !1 !== o));
            }
          return r;
        }
        function me(t, n) {
          var e = t.listener,
            i = t.Wa || t.src;
          return t.Qa && de(t), e.call(i, n);
        }
        function ge(t, n) {
          if (t.wa) return !0;
          if (!Jn) {
            if (!n)
              t: {
                n = ['window', 'event'];
                for (var e = s, i = 0; i < n.length; i++)
                  if (null == (e = e[n[i]])) {
                    n = null;
                    break t;
                  }
                n = e;
              }
            if (((n = new Zn((i = n), this)), (e = !0), !(0 > i.keyCode || null != i.returnValue))) {
              t: {
                var r = !1;
                if (0 == i.keyCode)
                  try {
                    i.keyCode = -1;
                    break t;
                  } catch (a) {
                    r = !0;
                  }
                (r || null == i.returnValue) && (i.returnValue = !0);
              }
              for (i = [], r = n.b; r; r = r.parentNode) i.push(r);
              for (t = t.type, r = i.length - 1; 0 <= r; r--) {
                n.b = i[r];
                var o = ve(i[r], t, !0, n);
                e = e && o;
              }
              for (r = 0; r < i.length; r++) (n.b = i[r]), (o = ve(i[r], t, !1, n)), (e = e && o);
            }
            return e;
          }
          return me(t, new Zn(n, this));
        }
        function be(t) {
          return (t = t[se]) instanceof re ? t : null;
        }
        var ye = '__closure_events_fn_' + ((1e9 * Math.random()) >>> 0);
        function we(t) {
          return p(t)
            ? t
            : (t[ye] ||
                (t[ye] = function (n) {
                  return t.handleEvent(n);
                }),
              t[ye]);
        }
        function Ie() {
          Hn.call(this), (this.v = new re(this)), (this.bc = this), (this.hb = null);
        }
        function Te(t, n, e, i, r) {
          t.v.add(String(n), e, !1, i, r);
        }
        function Ee(t, n, e, i, r) {
          t.v.add(String(n), e, !0, i, r);
        }
        function Ae(t, n, e, i) {
          if (!(n = t.v.a[String(n)])) return !0;
          n = n.concat();
          for (var r = !0, o = 0; o < n.length; ++o) {
            var a = n[o];
            if (a && !a.wa && a.capture == e) {
              var s = a.listener,
                u = a.Wa || a.src;
              a.Qa && oe(t.v, a), (r = !1 !== s.call(u, i) && r);
            }
          }
          return r && !i.defaultPrevented;
        }
        function ke(t, n, e) {
          if (p(t)) e && (t = I(t, e));
          else {
            if (!t || 'function' != typeof t.handleEvent) throw Error('Invalid listener argument');
            t = I(t.handleEvent, t);
          }
          return 2147483647 < Number(n) ? -1 : s.setTimeout(t, n || 0);
        }
        function Se(t) {
          var n = null;
          return new In(function (e, i) {
            -1 ==
              (n = ke(function () {
                e(void 0);
              }, t)) && i(Error('Failed to schedule timer.'));
          }).o(function (t) {
            throw (s.clearTimeout(n), t);
          });
        }
        function Ne(t) {
          if (t.X && 'function' == typeof t.X) return t.X();
          if ('string' == typeof t) return t.split('');
          if (d(t)) {
            for (var n = [], e = t.length, i = 0; i < e; i++) n.push(t[i]);
            return n;
          }
          for (i in ((n = []), (e = 0), t)) n[e++] = t[i];
          return n;
        }
        function _e(t) {
          if (t.Y && 'function' == typeof t.Y) return t.Y();
          if (!t.X || 'function' != typeof t.X) {
            if (d(t) || 'string' == typeof t) {
              var n = [];
              t = t.length;
              for (var e = 0; e < t; e++) n.push(e);
              return n;
            }
            for (var i in ((n = []), (e = 0), t)) n[e++] = i;
            return n;
          }
        }
        function Oe(t, n) {
          (this.b = {}), (this.a = []), (this.c = 0);
          var e = arguments.length;
          if (1 < e) {
            if (e % 2) throw Error('Uneven number of arguments');
            for (var i = 0; i < e; i += 2) this.set(arguments[i], arguments[i + 1]);
          } else if (t)
            if (t instanceof Oe) for (e = t.Y(), i = 0; i < e.length; i++) this.set(e[i], t.get(e[i]));
            else for (i in t) this.set(i, t[i]);
        }
        function Ce(t) {
          if (t.c != t.a.length) {
            for (var n = 0, e = 0; n < t.a.length; ) {
              var i = t.a[n];
              Re(t.b, i) && (t.a[e++] = i), n++;
            }
            t.a.length = e;
          }
          if (t.c != t.a.length) {
            var r = {};
            for (e = n = 0; n < t.a.length; ) Re(r, (i = t.a[n])) || ((t.a[e++] = i), (r[i] = 1)), n++;
            t.a.length = e;
          }
        }
        function Re(t, n) {
          return Object.prototype.hasOwnProperty.call(t, n);
        }
        A(Ie, Hn),
          (Ie.prototype[te] = !0),
          (Ie.prototype.addEventListener = function (t, n, e, i) {
            ce(this, t, n, e, i);
          }),
          (Ie.prototype.removeEventListener = function (t, n, e, i) {
            fe(this, t, n, e, i);
          }),
          (Ie.prototype.dispatchEvent = function (t) {
            var n,
              e = this.hb;
            if (e) for (n = []; e; e = e.hb) n.push(e);
            e = this.bc;
            var i = t.type || t;
            if ('string' == typeof t) t = new $n(t, e);
            else if (t instanceof $n) t.target = t.target || e;
            else {
              var r = t;
              gt((t = new $n(i, e)), r);
            }
            if (((r = !0), n))
              for (var o = n.length - 1; 0 <= o; o--) {
                var a = (t.b = n[o]);
                r = Ae(a, i, !0, t) && r;
              }
            if (((r = Ae((a = t.b = e), i, !0, t) && r), (r = Ae(a, i, !1, t) && r), n))
              for (o = 0; o < n.length; o++) r = Ae((a = t.b = n[o]), i, !1, t) && r;
            return r;
          }),
          (Ie.prototype.Da = function () {
            if ((Ie.bb.Da.call(this), this.v)) {
              var t,
                n = this.v;
              for (t in n.a) {
                for (var e = n.a[t], i = 0; i < e.length; i++) ie(e[i]);
                delete n.a[t], n.b--;
              }
            }
            this.hb = null;
          }),
          ((t = Oe.prototype).X = function () {
            Ce(this);
            for (var t = [], n = 0; n < this.a.length; n++) t.push(this.b[this.a[n]]);
            return t;
          }),
          (t.Y = function () {
            return Ce(this), this.a.concat();
          }),
          (t.clear = function () {
            (this.b = {}), (this.c = this.a.length = 0);
          }),
          (t.get = function (t, n) {
            return Re(this.b, t) ? this.b[t] : n;
          }),
          (t.set = function (t, n) {
            Re(this.b, t) || (this.c++, this.a.push(t)), (this.b[t] = n);
          }),
          (t.forEach = function (t, n) {
            for (var e = this.Y(), i = 0; i < e.length; i++) {
              var r = e[i],
                o = this.get(r);
              t.call(n, o, r, this);
            }
          });
        var Pe =
          /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
        function De(t, n) {
          var e;
          (this.a = this.l = this.c = ''),
            (this.g = null),
            (this.h = this.f = ''),
            (this.i = !1),
            t instanceof De
              ? ((this.i = void 0 !== n ? n : t.i),
                Le(this, t.c),
                (this.l = t.l),
                (this.a = t.a),
                xe(this, t.g),
                (this.f = t.f),
                Me(this, ni(t.b)),
                (this.h = t.h))
              : t && (e = String(t).match(Pe))
              ? ((this.i = !!n),
                Le(this, e[1] || '', !0),
                (this.l = Ke(e[2] || '')),
                (this.a = Ke(e[3] || '', !0)),
                xe(this, e[4]),
                (this.f = Ke(e[5] || '', !0)),
                Me(this, e[6] || '', !0),
                (this.h = Ke(e[7] || '')))
              : ((this.i = !!n), (this.b = new Ye(null, this.i)));
        }
        function Le(t, n, e) {
          (t.c = e ? Ke(n, !0) : n), t.c && (t.c = t.c.replace(/:$/, ''));
        }
        function xe(t, n) {
          if (n) {
            if (((n = Number(n)), isNaN(n) || 0 > n)) throw Error('Bad port number ' + n);
            t.g = n;
          } else t.g = null;
        }
        function Me(t, n, e) {
          n instanceof Ye
            ? ((t.b = n),
              (function (t, n) {
                n &&
                  !t.f &&
                  (ze(t),
                  (t.c = null),
                  t.a.forEach(function (t, n) {
                    var e = n.toLowerCase();
                    n != e && (Ze(this, n), ti(this, e, t));
                  }, t)),
                  (t.f = n);
              })(t.b, t.i))
            : (e || (n = qe(n, Xe)), (t.b = new Ye(n, t.i)));
        }
        function je(t, n, e) {
          t.b.set(n, e);
        }
        function Ue(t, n) {
          return t.b.get(n);
        }
        function Ve(t) {
          return t instanceof De ? new De(t) : new De(t, void 0);
        }
        function Fe(t, n, e, i) {
          var r = new De(null, void 0);
          return t && Le(r, t), n && (r.a = n), e && xe(r, e), i && (r.f = i), r;
        }
        function Ke(t, n) {
          return t ? (n ? decodeURI(t.replace(/%25/g, '%2525')) : decodeURIComponent(t)) : '';
        }
        function qe(t, n, e) {
          return 'string' == typeof t
            ? ((t = encodeURI(t).replace(n, He)), e && (t = t.replace(/%25([0-9a-fA-F]{2})/g, '%$1')), t)
            : null;
        }
        function He(t) {
          return '%' + (((t = t.charCodeAt(0)) >> 4) & 15).toString(16) + (15 & t).toString(16);
        }
        (De.prototype.toString = function () {
          var t = [],
            n = this.c;
          n && t.push(qe(n, Ge, !0), ':');
          var e = this.a;
          return (
            (e || 'file' == n) &&
              (t.push('//'),
              (n = this.l) && t.push(qe(n, Ge, !0), '@'),
              t.push(encodeURIComponent(String(e)).replace(/%25([0-9a-fA-F]{2})/g, '%$1')),
              null != (e = this.g) && t.push(':', String(e))),
            (e = this.f) &&
              (this.a && '/' != e.charAt(0) && t.push('/'), t.push(qe(e, '/' == e.charAt(0) ? We : Be, !0))),
            (e = this.b.toString()) && t.push('?', e),
            (e = this.h) && t.push('#', qe(e, Je)),
            t.join('')
          );
        }),
          (De.prototype.resolve = function (t) {
            var n = new De(this),
              e = !!t.c;
            e ? Le(n, t.c) : (e = !!t.l), e ? (n.l = t.l) : (e = !!t.a), e ? (n.a = t.a) : (e = null != t.g);
            var i = t.f;
            if (e) xe(n, t.g);
            else if ((e = !!t.f)) {
              if ('/' != i.charAt(0))
                if (this.a && !this.f) i = '/' + i;
                else {
                  var r = n.f.lastIndexOf('/');
                  -1 != r && (i = n.f.substr(0, r + 1) + i);
                }
              if ('..' == (r = i) || '.' == r) i = '';
              else if (ut(r, './') || ut(r, '/.')) {
                (i = 0 == r.lastIndexOf('/', 0)), (r = r.split('/'));
                for (var o = [], a = 0; a < r.length; ) {
                  var s = r[a++];
                  '.' == s
                    ? i && a == r.length && o.push('')
                    : '..' == s
                    ? ((1 < o.length || (1 == o.length && '' != o[0])) && o.pop(), i && a == r.length && o.push(''))
                    : (o.push(s), (i = !0));
                }
                i = o.join('/');
              } else i = r;
            }
            return e ? (n.f = i) : (e = '' !== t.b.toString()), e ? Me(n, ni(t.b)) : (e = !!t.h), e && (n.h = t.h), n;
          });
        var Ge = /[#\/\?@]/g,
          Be = /[#\?:]/g,
          We = /[#\?]/g,
          Xe = /[#\?@]/g,
          Je = /#/g;
        function Ye(t, n) {
          (this.b = this.a = null), (this.c = t || null), (this.f = !!n);
        }
        function ze(t) {
          t.a ||
            ((t.a = new Oe()),
            (t.b = 0),
            t.c &&
              (function (t, n) {
                if (t) {
                  t = t.split('&');
                  for (var e = 0; e < t.length; e++) {
                    var i = t[e].indexOf('='),
                      r = null;
                    if (0 <= i) {
                      var o = t[e].substring(0, i);
                      r = t[e].substring(i + 1);
                    } else o = t[e];
                    n(o, r ? decodeURIComponent(r.replace(/\+/g, ' ')) : '');
                  }
                }
              })(t.c, function (n, e) {
                t.add(decodeURIComponent(n.replace(/\+/g, ' ')), e);
              }));
        }
        function $e(t) {
          var n = _e(t);
          if (void 0 === n) throw Error('Keys are undefined');
          var e = new Ye(null, void 0);
          t = Ne(t);
          for (var i = 0; i < n.length; i++) {
            var r = n[i],
              o = t[i];
            Array.isArray(o) ? ti(e, r, o) : e.add(r, o);
          }
          return e;
        }
        function Ze(t, n) {
          ze(t),
            (n = ei(t, n)),
            Re(t.a.b, n) &&
              ((t.c = null),
              (t.b -= t.a.get(n).length),
              Re((t = t.a).b, n) && (delete t.b[n], t.c--, t.a.length > 2 * t.c && Ce(t)));
        }
        function Qe(t, n) {
          return ze(t), (n = ei(t, n)), Re(t.a.b, n);
        }
        function ti(t, n, e) {
          Ze(t, n), 0 < e.length && ((t.c = null), t.a.set(ei(t, n), Z(e)), (t.b += e.length));
        }
        function ni(t) {
          var n = new Ye();
          return (n.c = t.c), t.a && ((n.a = new Oe(t.a)), (n.b = t.b)), n;
        }
        function ei(t, n) {
          return (n = String(n)), t.f && (n = n.toLowerCase()), n;
        }
        function ii(t) {
          var n = [];
          return oi(new ri(), t, n), n.join('');
        }
        function ri() {}
        function oi(t, n, e) {
          if (null == n) e.push('null');
          else {
            if ('object' == typeof n) {
              if (Array.isArray(n)) {
                var i = n;
                (n = i.length), e.push('[');
                for (var r = '', o = 0; o < n; o++) e.push(r), oi(t, i[o], e), (r = ',');
                return void e.push(']');
              }
              if (!(n instanceof String || n instanceof Number || n instanceof Boolean)) {
                for (i in (e.push('{'), (r = ''), n))
                  Object.prototype.hasOwnProperty.call(n, i) &&
                    'function' != typeof (o = n[i]) &&
                    (e.push(r), ui(i, e), e.push(':'), oi(t, o, e), (r = ','));
                return void e.push('}');
              }
              n = n.valueOf();
            }
            switch (typeof n) {
              case 'string':
                ui(n, e);
                break;
              case 'number':
                e.push(isFinite(n) && !isNaN(n) ? String(n) : 'null');
                break;
              case 'boolean':
                e.push(String(n));
                break;
              case 'function':
                e.push('null');
                break;
              default:
                throw Error('Unknown type: ' + typeof n);
            }
          }
        }
        ((t = Ye.prototype).add = function (t, n) {
          ze(this), (this.c = null), (t = ei(this, t));
          var e = this.a.get(t);
          return e || this.a.set(t, (e = [])), e.push(n), (this.b += 1), this;
        }),
          (t.clear = function () {
            (this.a = this.c = null), (this.b = 0);
          }),
          (t.forEach = function (t, n) {
            ze(this),
              this.a.forEach(function (e, i) {
                G(
                  e,
                  function (e) {
                    t.call(n, e, i, this);
                  },
                  this
                );
              }, this);
          }),
          (t.Y = function () {
            ze(this);
            for (var t = this.a.X(), n = this.a.Y(), e = [], i = 0; i < n.length; i++)
              for (var r = t[i], o = 0; o < r.length; o++) e.push(n[i]);
            return e;
          }),
          (t.X = function (t) {
            ze(this);
            var n = [];
            if ('string' == typeof t) Qe(this, t) && (n = $(n, this.a.get(ei(this, t))));
            else {
              t = this.a.X();
              for (var e = 0; e < t.length; e++) n = $(n, t[e]);
            }
            return n;
          }),
          (t.set = function (t, n) {
            return (
              ze(this),
              (this.c = null),
              Qe(this, (t = ei(this, t))) && (this.b -= this.a.get(t).length),
              this.a.set(t, [n]),
              (this.b += 1),
              this
            );
          }),
          (t.get = function (t, n) {
            return t && 0 < (t = this.X(t)).length ? String(t[0]) : n;
          }),
          (t.toString = function () {
            if (this.c) return this.c;
            if (!this.a) return '';
            for (var t = [], n = this.a.Y(), e = 0; e < n.length; e++) {
              var i = n[e],
                r = encodeURIComponent(String(i));
              i = this.X(i);
              for (var o = 0; o < i.length; o++) {
                var a = r;
                '' !== i[o] && (a += '=' + encodeURIComponent(String(i[o]))), t.push(a);
              }
            }
            return (this.c = t.join('&'));
          });
        var ai = {
            '"': '\\"',
            '\\': '\\\\',
            '/': '\\/',
            '\b': '\\b',
            '\f': '\\f',
            '\n': '\\n',
            '\r': '\\r',
            '\t': '\\t',
            '\v': '\\u000b',
          },
          si = /\uffff/.test('\uffff') ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g;
        function ui(t, n) {
          n.push(
            '"',
            t.replace(si, function (t) {
              var n = ai[t];
              return n || ((n = '\\u' + (65536 | t.charCodeAt(0)).toString(16).substr(1)), (ai[t] = n)), n;
            }),
            '"'
          );
        }
        function ci() {
          var t = Oi();
          return (Yt && !!sn && 11 == sn) || /Edge\/\d+/.test(t);
        }
        function hi() {
          return (s.window && s.window.location.href) || (self && self.location && self.location.href) || '';
        }
        function li(t, n) {
          n = n || s.window;
          var e = 'about:blank';
          t && (e = Pt(Mt(t) || Vt)), (n.location.href = e);
        }
        function fi(t, n) {
          var e,
            i = [];
          for (e in t)
            e in n
              ? typeof t[e] != typeof n[e]
                ? i.push(e)
                : 'object' == typeof t[e] && null != t[e] && null != n[e]
                ? 0 < fi(t[e], n[e]).length && i.push(e)
                : t[e] !== n[e] && i.push(e)
              : i.push(e);
          for (e in n) e in t || i.push(e);
          return i;
        }
        function di(t) {
          return !!(
            (t = (t || Oi()).toLowerCase()).match(/android/) ||
            t.match(/webos/) ||
            t.match(/iphone|ipad|ipod/) ||
            t.match(/blackberry/) ||
            t.match(/windows phone/) ||
            t.match(/iemobile/)
          );
        }
        function pi(t) {
          t = t || s.window;
          try {
            t.close();
          } catch (n) {}
        }
        function vi(t, n, e) {
          var i = Math.floor(1e9 * Math.random()).toString();
          (n = n || 500), (e = e || 600);
          var r = (window.screen.availHeight - e) / 2,
            o = (window.screen.availWidth - n) / 2;
          for (a in ((n = {
            width: n,
            height: e,
            top: 0 < r ? r : 0,
            left: 0 < o ? o : 0,
            location: !0,
            resizable: !0,
            statusbar: !0,
            toolbar: !1,
          }),
          (e = Oi().toLowerCase()),
          i && ((n.target = i), ut(e, 'crios/') && (n.target = '_blank')),
          Si(Oi()) == Ai && ((t = t || 'http://localhost'), (n.scrollbars = !0)),
          (e = t || ''),
          (t = n) || (t = {}),
          (i = window),
          (n = e instanceof Rt ? e : Mt(void 0 !== e.href ? e.href : String(e)) || Vt),
          (e = t.target || e.target),
          (r = []),
          t))
            switch (a) {
              case 'width':
              case 'height':
              case 'top':
              case 'left':
                r.push(a + '=' + t[a]);
                break;
              case 'target':
              case 'noopener':
              case 'noreferrer':
                break;
              default:
                r.push(a + '=' + (t[a] ? 1 : 0));
            }
          var a = r.join(',');
          if (
            (((ft('iPhone') && !ft('iPod') && !ft('iPad')) || ft('iPad') || ft('iPod')) &&
            i.navigator &&
            i.navigator.standalone &&
            e &&
            '_self' != e
              ? (bt((a = vn(document, 'A')), 'HTMLAnchorElement'),
                (n = n instanceof Rt ? n : jt(n)),
                (a.href = Pt(n)),
                a.setAttribute('target', e),
                t.noreferrer && a.setAttribute('rel', 'noreferrer'),
                (t = document.createEvent('MouseEvent')).initMouseEvent('click', !0, !0, i, 1),
                a.dispatchEvent(t),
                (a = {}))
              : t.noreferrer
              ? ((a = qt('', i, e, a)),
                (t = Pt(n)),
                a &&
                  ($t && ut(t, ';') && (t = "'" + t.replace(/'/g, '%27') + "'"),
                  (a.opener = null),
                  (t =
                    '<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url=' +
                    Gt(t) +
                    '">'),
                  (t = new Ft((t = (i = At()) ? i.createHTML(t) : t), null, Kt)),
                  (i = a.document)) &&
                  (i.write(
                    (function (t) {
                      return t instanceof Ft && t.constructor === Ft
                        ? t.a
                        : (M("expected object of type SafeHtml, got '" + t + "' of type " + f(t)),
                          'type_error:SafeHtml');
                    })(t)
                  ),
                  i.close()))
              : (a = qt(n, i, e, a)) && t.noopener && (a.opener = null),
            a)
          )
            try {
              a.focus();
            } catch (s) {}
          return a;
        }
        var mi = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
          gi = /^[^@]+@[^@]+$/;
        function bi() {
          var t = null;
          return new In(function (n) {
            'complete' == s.document.readyState
              ? n()
              : ((t = function () {
                  n();
                }),
                le(window, 'load', t));
          }).o(function (n) {
            throw (fe(window, 'load', t), n);
          });
        }
        function yi(t) {
          return (
            (t = t || Oi()),
            !(('file:' !== Li() && 'ionic:' !== Li()) || !t.toLowerCase().match(/iphone|ipad|ipod|android/))
          );
        }
        function wi() {
          var t = s.window;
          try {
            return !(!t || t == t.top);
          } catch (n) {
            return !1;
          }
        }
        function Ii() {
          return void 0 !== s.WorkerGlobalScope && 'function' == typeof s.importScripts;
        }
        function Ti() {
          return i.a.INTERNAL.hasOwnProperty('reactNative')
            ? 'ReactNative'
            : i.a.INTERNAL.hasOwnProperty('node')
            ? 'Node'
            : Ii()
            ? 'Worker'
            : 'Browser';
        }
        function Ei() {
          var t = Ti();
          return 'ReactNative' === t || 'Node' === t;
        }
        var Ai = 'Firefox',
          ki = 'Chrome';
        function Si(t) {
          var n = t.toLowerCase();
          return ut(n, 'opera/') || ut(n, 'opr/') || ut(n, 'opios/')
            ? 'Opera'
            : ut(n, 'iemobile')
            ? 'IEMobile'
            : ut(n, 'msie') || ut(n, 'trident/')
            ? 'IE'
            : ut(n, 'edge/')
            ? 'Edge'
            : ut(n, 'firefox/')
            ? Ai
            : ut(n, 'silk/')
            ? 'Silk'
            : ut(n, 'blackberry')
            ? 'Blackberry'
            : ut(n, 'webos')
            ? 'Webos'
            : !ut(n, 'safari/') || ut(n, 'chrome/') || ut(n, 'crios/') || ut(n, 'android')
            ? (!ut(n, 'chrome/') && !ut(n, 'crios/')) || ut(n, 'edge/')
              ? ut(n, 'android')
                ? 'Android'
                : (t = t.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/)) && 2 == t.length
                ? t[1]
                : 'Other'
              : ki
            : 'Safari';
        }
        var Ni = { md: 'FirebaseCore-web', od: 'FirebaseUI-web' };
        function _i(t, n) {
          n = n || [];
          var e,
            i = [],
            r = {};
          for (e in Ni) r[Ni[e]] = !0;
          for (e = 0; e < n.length; e++) void 0 !== r[n[e]] && (delete r[n[e]], i.push(n[e]));
          return (
            i.sort(),
            (n = i).length || (n = ['FirebaseCore-web']),
            'Browser' === (i = Ti()) ? (i = Si((r = Oi()))) : 'Worker' === i && (i = Si((r = Oi())) + '-' + i),
            i + '/JsCore/' + t + '/' + n.join(',')
          );
        }
        function Oi() {
          return (s.navigator && s.navigator.userAgent) || '';
        }
        function Ci(t, n) {
          (t = t.split('.')), (n = n || s);
          for (var e = 0; e < t.length && 'object' == typeof n && null != n; e++) n = n[t[e]];
          return e != t.length && (n = void 0), n;
        }
        function Ri() {
          try {
            var t = s.localStorage,
              n = Vi();
            if (t) return t.setItem(n, '1'), t.removeItem(n), !ci() || !!s.indexedDB;
          } catch (e) {
            return Ii() && !!s.indexedDB;
          }
          return !1;
        }
        function Pi() {
          return (Di() || 'chrome-extension:' === Li() || yi()) && !Ei() && Ri() && !Ii();
        }
        function Di() {
          return 'http:' === Li() || 'https:' === Li();
        }
        function Li() {
          return (s.location && s.location.protocol) || null;
        }
        function xi(t) {
          return !di((t = t || Oi())) && Si(t) != Ai;
        }
        function Mi(t) {
          return void 0 === t ? null : ii(t);
        }
        function ji(t) {
          var n,
            e = {};
          for (n in t) t.hasOwnProperty(n) && null != t[n] && (e[n] = t[n]);
          return e;
        }
        function Ui(t) {
          if (null !== t) return JSON.parse(t);
        }
        function Vi(t) {
          return t || Math.floor(1e9 * Math.random()).toString();
        }
        function Fi(t) {
          return 'Safari' != Si((t = t || Oi())) && !t.toLowerCase().match(/iphone|ipad|ipod/);
        }
        function Ki() {
          var t = s.___jsl;
          if (t && t.H)
            for (var n in t.H)
              if (((t.H[n].r = t.H[n].r || []), (t.H[n].L = t.H[n].L || []), (t.H[n].r = t.H[n].L.concat()), t.CP))
                for (var e = 0; e < t.CP.length; e++) t.CP[e] = null;
        }
        function qi(t, n) {
          if (t > n) throw Error('Short delay should be less than long delay!');
          (this.a = t), (this.c = n), (t = Oi()), (n = Ti()), (this.b = di(t) || 'ReactNative' === n);
        }
        function Hi() {
          var t = s.document;
          return !t || void 0 === t.visibilityState || 'visible' == t.visibilityState;
        }
        function Gi(t) {
          try {
            var n = new Date(parseInt(t, 10));
            if (!isNaN(n.getTime()) && !/[^0-9]/.test(t)) return n.toUTCString();
          } catch (e) {}
          return null;
        }
        function Bi() {
          return !(!Ci('fireauth.oauthhelper', s) && !Ci('fireauth.iframe', s));
        }
        qi.prototype.get = function () {
          var t = s.navigator;
          return !t ||
            'boolean' != typeof t.onLine ||
            (!Di() && 'chrome-extension:' !== Li() && void 0 === t.connection) ||
            t.onLine
            ? this.b
              ? this.c
              : this.a
            : Math.min(5e3, this.a);
        };
        var Wi,
          Xi = {};
        function Ji(t) {
          Xi[t] ||
            ((Xi[t] = !0), 'undefined' != typeof console && 'function' == typeof console.warn && console.warn(t));
        }
        try {
          var Yi = {};
          Object.defineProperty(Yi, 'abcd', { configurable: !0, enumerable: !0, value: 1 }),
            Object.defineProperty(Yi, 'abcd', { configurable: !0, enumerable: !0, value: 2 }),
            (Wi = 2 == Yi.abcd);
        } catch (Xt) {
          Wi = !1;
        }
        function zi(t, n, e) {
          Wi ? Object.defineProperty(t, n, { configurable: !0, enumerable: !0, value: e }) : (t[n] = e);
        }
        function $i(t, n) {
          if (n) for (var e in n) n.hasOwnProperty(e) && zi(t, e, n[e]);
        }
        function Zi(t) {
          var n = {};
          return $i(n, t), n;
        }
        function Qi(t) {
          var n = t;
          if ('object' == typeof t && null != t) for (var e in ((n = 'length' in t ? [] : {}), t)) zi(n, e, Qi(t[e]));
          return n;
        }
        function tr(t) {
          var n = t && (t[or] ? 'phone' : null);
          if (!(n && t && t[rr])) throw new S('internal-error', 'Internal assert: invalid MultiFactorInfo object');
          zi(this, 'uid', t[rr]), zi(this, 'displayName', t[er] || null);
          var e = null;
          t[ir] && (e = new Date(t[ir]).toUTCString()), zi(this, 'enrollmentTime', e), zi(this, 'factorId', n);
        }
        function nr(t) {
          try {
            var n = new ar(t);
          } catch (e) {
            n = null;
          }
          return n;
        }
        tr.prototype.w = function () {
          return {
            uid: this.uid,
            displayName: this.displayName,
            factorId: this.factorId,
            enrollmentTime: this.enrollmentTime,
          };
        };
        var er = 'displayName',
          ir = 'enrolledAt',
          rr = 'mfaEnrollmentId',
          or = 'phoneInfo';
        function ar(t) {
          tr.call(this, t), zi(this, 'phoneNumber', t[or]);
        }
        function sr(t) {
          var n = {},
            e = t[lr],
            i = t[dr],
            r = t[pr];
          if (((t = nr(t[fr])), !r || (r != cr && r != hr && !e) || (r == hr && !i) || (r == ur && !t)))
            throw Error('Invalid checkActionCode response!');
          r == hr
            ? ((n[mr] = e || null), (n[br] = e || null), (n[vr] = i))
            : ((n[mr] = i || null), (n[br] = i || null), (n[vr] = e || null)),
            (n[gr] = t || null),
            zi(this, wr, r),
            zi(this, yr, Qi(n));
        }
        A(ar, tr),
          (ar.prototype.w = function () {
            var t = ar.bb.w.call(this);
            return (t.phoneNumber = this.phoneNumber), t;
          });
        var ur = 'REVERT_SECOND_FACTOR_ADDITION',
          cr = 'EMAIL_SIGNIN',
          hr = 'VERIFY_AND_CHANGE_EMAIL',
          lr = 'email',
          fr = 'mfaInfo',
          dr = 'newEmail',
          pr = 'requestType',
          vr = 'email',
          mr = 'fromEmail',
          gr = 'multiFactorInfo',
          br = 'previousEmail',
          yr = 'data',
          wr = 'operation';
        function Ir(t) {
          var n = Ue((t = Ve(t)), Tr) || null,
            e = Ue(t, Er) || null,
            i = Ue(t, Sr) || null;
          if (((i = (i && _r[i]) || null), !n || !e || !i))
            throw new S('argument-error', Tr + ', ' + Er + 'and ' + Sr + ' are required in a valid action code URL.');
          $i(this, {
            apiKey: n,
            operation: i,
            code: e,
            continueUrl: Ue(t, Ar) || null,
            languageCode: Ue(t, kr) || null,
            tenantId: Ue(t, Nr) || null,
          });
        }
        var Tr = 'apiKey',
          Er = 'oobCode',
          Ar = 'continueUrl',
          kr = 'languageCode',
          Sr = 'mode',
          Nr = 'tenantId',
          _r = {
            recoverEmail: 'RECOVER_EMAIL',
            resetPassword: 'PASSWORD_RESET',
            revertSecondFactorAddition: ur,
            signIn: cr,
            verifyAndChangeEmail: hr,
            verifyEmail: 'VERIFY_EMAIL',
          };
        function Or(t) {
          try {
            return new Ir(t);
          } catch (n) {
            return null;
          }
        }
        function Cr(t) {
          var n = t[xr];
          if (void 0 === n) throw new S('missing-continue-uri');
          if ('string' != typeof n || ('string' == typeof n && !n.length)) throw new S('invalid-continue-uri');
          (this.h = n), (this.b = this.a = null), (this.g = !1);
          var e = t[Rr];
          if (e && 'object' == typeof e) {
            n = e[Ur];
            var i = e[Mr];
            if (((e = e[jr]), 'string' == typeof n && n.length)) {
              if (((this.a = n), void 0 !== i && 'boolean' != typeof i))
                throw new S('argument-error', Mr + ' property must be a boolean when specified.');
              if (((this.g = !!i), void 0 !== e && ('string' != typeof e || ('string' == typeof e && !e.length))))
                throw new S('argument-error', jr + ' property must be a non empty string when specified.');
              this.b = e || null;
            } else {
              if (void 0 !== n)
                throw new S('argument-error', Ur + ' property must be a non empty string when specified.');
              if (void 0 !== i || void 0 !== e) throw new S('missing-android-pkg-name');
            }
          } else if (void 0 !== e)
            throw new S('argument-error', Rr + ' property must be a non null object when specified.');
          if (((this.f = null), (n = t[Lr]) && 'object' == typeof n)) {
            if ('string' == typeof (n = n[Vr]) && n.length) this.f = n;
            else if (void 0 !== n)
              throw new S('argument-error', Vr + ' property must be a non empty string when specified.');
          } else if (void 0 !== n)
            throw new S('argument-error', Lr + ' property must be a non null object when specified.');
          if (void 0 !== (n = t[Dr]) && 'boolean' != typeof n)
            throw new S('argument-error', Dr + ' property must be a boolean when specified.');
          if (((this.c = !!n), void 0 !== (t = t[Pr]) && ('string' != typeof t || ('string' == typeof t && !t.length))))
            throw new S('argument-error', Pr + ' property must be a non empty string when specified.');
          this.i = t || null;
        }
        var Rr = 'android',
          Pr = 'dynamicLinkDomain',
          Dr = 'handleCodeInApp',
          Lr = 'iOS',
          xr = 'url',
          Mr = 'installApp',
          jr = 'minimumVersion',
          Ur = 'packageName',
          Vr = 'bundleId';
        function Fr(t) {
          var n = {};
          for (var e in ((n.continueUrl = t.h),
          (n.canHandleCodeInApp = t.c),
          (n.androidPackageName = t.a) && ((n.androidMinimumVersion = t.b), (n.androidInstallApp = t.g)),
          (n.iOSBundleId = t.f),
          (n.dynamicLinkDomain = t.i),
          n))
            null === n[e] && delete n[e];
          return n;
        }
        var Kr = null;
        function qr(t) {
          var n = Gr(t);
          if (!(n && n.sub && n.iss && n.aud && n.exp)) throw Error('Invalid JWT');
          (this.h = t),
            (this.a = n.exp),
            (this.i = n.sub),
            (t = Date.now() / 1e3),
            (this.g = n.iat || (t > this.a ? this.a : t)),
            (this.b = n.provider_id || (n.firebase && n.firebase.sign_in_provider) || null),
            (this.f = (n.firebase && n.firebase.tenant) || null),
            (this.c = !!n.is_anonymous || 'anonymous' == this.b);
        }
        function Hr(t) {
          try {
            return new qr(t);
          } catch (n) {
            return null;
          }
        }
        function Gr(t) {
          if (!t) return null;
          if (3 != (t = t.split('.')).length) return null;
          for (var n = (4 - ((t = t[1]).length % 4)) % 4, e = 0; e < n; e++) t += '.';
          try {
            var i = (function (t) {
              var n = [];
              return (
                (function (t, n) {
                  function e(n) {
                    for (; i < t.length; ) {
                      var e = t.charAt(i++),
                        r = Kr[e];
                      if (null != r) return r;
                      if (!/^[\s\xa0]*$/.test(e)) throw Error('Unknown base64 encoding at char: ' + e);
                    }
                    return n;
                  }
                  !(function () {
                    if (!Kr) {
                      Kr = {};
                      for (
                        var t = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split(''),
                          n = ['+/=', '+/', '-_=', '-_.', '-_'],
                          e = 0;
                        5 > e;
                        e++
                      )
                        for (var i = t.concat(n[e].split('')), r = 0; r < i.length; r++) {
                          var o = i[r];
                          void 0 === Kr[o] && (Kr[o] = r);
                        }
                    }
                  })();
                  for (var i = 0; ; ) {
                    var r = e(-1),
                      o = e(0),
                      a = e(64),
                      s = e(64);
                    if (64 === s && -1 === r) break;
                    n((r << 2) | (o >> 4)),
                      64 != a && (n(((o << 4) & 240) | (a >> 2)), 64 != s && n(((a << 6) & 192) | s));
                  }
                })(t, function (t) {
                  n.push(t);
                }),
                n
              );
            })(t);
            for (t = [], e = n = 0; n < i.length; ) {
              var r = i[n++];
              if (128 > r) t[e++] = String.fromCharCode(r);
              else if (191 < r && 224 > r) {
                var o = i[n++];
                t[e++] = String.fromCharCode(((31 & r) << 6) | (63 & o));
              } else if (239 < r && 365 > r) {
                o = i[n++];
                var a = i[n++],
                  s = (((7 & r) << 18) | ((63 & o) << 12) | ((63 & a) << 6) | (63 & i[n++])) - 65536;
                (t[e++] = String.fromCharCode(55296 + (s >> 10))), (t[e++] = String.fromCharCode(56320 + (1023 & s)));
              } else
                (o = i[n++]),
                  (a = i[n++]),
                  (t[e++] = String.fromCharCode(((15 & r) << 12) | ((63 & o) << 6) | (63 & a)));
            }
            return JSON.parse(t.join(''));
          } catch (u) {}
          return null;
        }
        (qr.prototype.T = function () {
          return this.f;
        }),
          (qr.prototype.l = function () {
            return this.c;
          }),
          (qr.prototype.toString = function () {
            return this.h;
          });
        var Br =
            'oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version'.split(
              ' '
            ),
          Wr = ['client_id', 'response_type', 'scope', 'redirect_uri', 'state'],
          Xr = {
            nd: { Ja: 'locale', va: 700, ua: 600, fa: 'facebook.com', Ya: Wr },
            pd: { Ja: null, va: 500, ua: 750, fa: 'github.com', Ya: Wr },
            qd: { Ja: 'hl', va: 515, ua: 680, fa: 'google.com', Ya: Wr },
            wd: { Ja: 'lang', va: 485, ua: 705, fa: 'twitter.com', Ya: Br },
            kd: { Ja: 'locale', va: 640, ua: 600, fa: 'apple.com', Ya: [] },
          };
        function Jr(t) {
          for (var n in Xr) if (Xr[n].fa == t) return Xr[n];
          return null;
        }
        function Yr(t) {
          var n = {};
          (n['facebook.com'] = to), (n['google.com'] = eo), (n['github.com'] = no), (n['twitter.com'] = io);
          var e = t && t[$r];
          try {
            if (e) return n[e] ? new n[e](t) : new Qr(t);
            if (void 0 !== t[zr]) return new Zr(t);
          } catch (i) {}
          return null;
        }
        var zr = 'idToken',
          $r = 'providerId';
        function Zr(t) {
          var n = t[$r];
          if (!n && t[zr]) {
            var e = Hr(t[zr]);
            e && e.b && (n = e.b);
          }
          if (!n) throw Error('Invalid additional user info!');
          ('anonymous' != n && 'custom' != n) || (n = null),
            (e = !1),
            void 0 !== t.isNewUser
              ? (e = !!t.isNewUser)
              : 'identitytoolkit#SignupNewUserResponse' === t.kind && (e = !0),
            zi(this, 'providerId', n),
            zi(this, 'isNewUser', e);
        }
        function Qr(t) {
          Zr.call(this, t), zi(this, 'profile', Qi((t = Ui(t.rawUserInfo || '{}')) || {}));
        }
        function to(t) {
          if ((Qr.call(this, t), 'facebook.com' != this.providerId)) throw Error('Invalid provider ID!');
        }
        function no(t) {
          if ((Qr.call(this, t), 'github.com' != this.providerId)) throw Error('Invalid provider ID!');
          zi(this, 'username', (this.profile && this.profile.login) || null);
        }
        function eo(t) {
          if ((Qr.call(this, t), 'google.com' != this.providerId)) throw Error('Invalid provider ID!');
        }
        function io(t) {
          if ((Qr.call(this, t), 'twitter.com' != this.providerId)) throw Error('Invalid provider ID!');
          zi(this, 'username', t.screenName || null);
        }
        function ro(t) {
          var n = Ve(t),
            e = Ue(n, 'link'),
            i = Ue(Ve(e), 'link');
          return (n = Ue(n, 'deep_link_id')), Ue(Ve(n), 'link') || n || i || e || t;
        }
        function oo(t, n) {
          if (!t && !n) throw new S('internal-error', 'Internal assert: no raw session string available');
          if (t && n) throw new S('internal-error', 'Internal assert: unable to determine the session type');
          (this.a = t || null), (this.b = n || null), (this.type = this.a ? ao : so);
        }
        A(Qr, Zr), A(to, Qr), A(no, Qr), A(eo, Qr), A(io, Qr);
        var ao = 'enroll',
          so = 'signin';
        function uo() {}
        function co(t, n) {
          return t
            .then(function (t) {
              if (t[za]) {
                var e = Hr(t[za]);
                if (!e || n != e.i) throw new S('user-mismatch');
                return t;
              }
              throw new S('user-mismatch');
            })
            .o(function (t) {
              throw t && t.code && t.code == O + 'user-not-found' ? new S('user-mismatch') : t;
            });
        }
        function ho(t, n) {
          if (!n) throw new S('internal-error', 'failed to construct a credential');
          (this.a = n), zi(this, 'providerId', t), zi(this, 'signInMethod', t);
        }
        function lo(t) {
          return { pendingToken: t.a, requestUri: 'http://localhost' };
        }
        function fo(t) {
          if (t && t.providerId && t.signInMethod && 0 == t.providerId.indexOf('saml.') && t.pendingToken)
            try {
              return new ho(t.providerId, t.pendingToken);
            } catch (n) {}
          return null;
        }
        function po(t, n, e) {
          if (((this.a = null), n.idToken || n.accessToken))
            n.idToken && zi(this, 'idToken', n.idToken),
              n.accessToken && zi(this, 'accessToken', n.accessToken),
              n.nonce && !n.pendingToken && zi(this, 'nonce', n.nonce),
              n.pendingToken && (this.a = n.pendingToken);
          else {
            if (!n.oauthToken || !n.oauthTokenSecret) throw new S('internal-error', 'failed to construct a credential');
            zi(this, 'accessToken', n.oauthToken), zi(this, 'secret', n.oauthTokenSecret);
          }
          zi(this, 'providerId', t), zi(this, 'signInMethod', e);
        }
        function vo(t) {
          var n = {};
          return (
            t.idToken && (n.id_token = t.idToken),
            t.accessToken && (n.access_token = t.accessToken),
            t.secret && (n.oauth_token_secret = t.secret),
            (n.providerId = t.providerId),
            t.nonce && !t.a && (n.nonce = t.nonce),
            (n = { postBody: $e(n).toString(), requestUri: 'http://localhost' }),
            t.a && (delete n.postBody, (n.pendingToken = t.a)),
            n
          );
        }
        function mo(t) {
          if (t && t.providerId && t.signInMethod) {
            var n = {
              idToken: t.oauthIdToken,
              accessToken: t.oauthTokenSecret ? null : t.oauthAccessToken,
              oauthTokenSecret: t.oauthTokenSecret,
              oauthToken: t.oauthTokenSecret && t.oauthAccessToken,
              nonce: t.nonce,
              pendingToken: t.pendingToken,
            };
            try {
              return new po(t.providerId, n, t.signInMethod);
            } catch (e) {}
          }
          return null;
        }
        function go(t, n) {
          (this.Qc = n || []),
            $i(this, { providerId: t, isOAuthProvider: !0 }),
            (this.Jb = {}),
            (this.qb = (Jr(t) || {}).Ja || null),
            (this.pb = null);
        }
        function bo(t) {
          if ('string' != typeof t || 0 != t.indexOf('saml.'))
            throw new S('argument-error', 'SAML provider IDs must be prefixed with "saml."');
          go.call(this, t, []);
        }
        function yo(t) {
          go.call(this, t, Wr), (this.a = []);
        }
        function wo() {
          yo.call(this, 'facebook.com');
        }
        function Io(t) {
          if (!t) throw new S('argument-error', 'credential failed: expected 1 argument (the OAuth access token).');
          var n = t;
          return v(t) && (n = t.accessToken), new wo().credential({ accessToken: n });
        }
        function To() {
          yo.call(this, 'github.com');
        }
        function Eo(t) {
          if (!t) throw new S('argument-error', 'credential failed: expected 1 argument (the OAuth access token).');
          var n = t;
          return v(t) && (n = t.accessToken), new To().credential({ accessToken: n });
        }
        function Ao() {
          yo.call(this, 'google.com'), this.Ca('profile');
        }
        function ko(t, n) {
          var e = t;
          return v(t) && ((e = t.idToken), (n = t.accessToken)), new Ao().credential({ idToken: e, accessToken: n });
        }
        function So() {
          go.call(this, 'twitter.com', Br);
        }
        function No(t, n) {
          var e = t;
          if ((v(e) || (e = { oauthToken: t, oauthTokenSecret: n }), !e.oauthToken || !e.oauthTokenSecret))
            throw new S(
              'argument-error',
              'credential failed: expected 2 arguments (the OAuth access token and secret).'
            );
          return new po('twitter.com', e, 'twitter.com');
        }
        function _o(t, n, e) {
          (this.a = t),
            (this.f = n),
            zi(this, 'providerId', 'password'),
            zi(
              this,
              'signInMethod',
              e === Co.EMAIL_LINK_SIGN_IN_METHOD ? Co.EMAIL_LINK_SIGN_IN_METHOD : Co.EMAIL_PASSWORD_SIGN_IN_METHOD
            );
        }
        function Oo(t) {
          return t && t.email && t.password ? new _o(t.email, t.password, t.signInMethod) : null;
        }
        function Co() {
          $i(this, { providerId: 'password', isOAuthProvider: !1 });
        }
        function Ro(t, n) {
          if (!(n = Po(n))) throw new S('argument-error', 'Invalid email link!');
          return new _o(t, n.code, Co.EMAIL_LINK_SIGN_IN_METHOD);
        }
        function Po(t) {
          return (t = Or((t = ro(t)))) && t.operation === cr ? t : null;
        }
        function Do(t) {
          if (!((t.fb && t.eb) || (t.La && t.ea))) throw new S('internal-error');
          (this.a = t), zi(this, 'providerId', 'phone'), (this.fa = 'phone'), zi(this, 'signInMethod', 'phone');
        }
        function Lo(t) {
          if (
            t &&
            'phone' === t.providerId &&
            ((t.verificationId && t.verificationCode) || (t.temporaryProof && t.phoneNumber))
          ) {
            var n = {};
            return (
              G(['verificationId', 'verificationCode', 'temporaryProof', 'phoneNumber'], function (e) {
                t[e] && (n[e] = t[e]);
              }),
              new Do(n)
            );
          }
          return null;
        }
        function xo(t) {
          return t.a.La && t.a.ea
            ? { temporaryProof: t.a.La, phoneNumber: t.a.ea }
            : { sessionInfo: t.a.fb, code: t.a.eb };
        }
        function Mo(t) {
          try {
            this.a = t || i.a.auth();
          } catch (n) {
            throw new S(
              'argument-error',
              'Either an instance of firebase.auth.Auth must be passed as an argument to the firebase.auth.PhoneAuthProvider constructor, or the default firebase App instance must be initialized via firebase.initializeApp().'
            );
          }
          $i(this, { providerId: 'phone', isOAuthProvider: !1 });
        }
        function jo(t, n) {
          if (!t) throw new S('missing-verification-id');
          if (!n) throw new S('missing-verification-code');
          return new Do({ fb: t, eb: n });
        }
        function Uo(t) {
          if (t.temporaryProof && t.phoneNumber) return new Do({ La: t.temporaryProof, ea: t.phoneNumber });
          var n = t && t.providerId;
          if (!n || 'password' === n) return null;
          var e = t && t.oauthAccessToken,
            i = t && t.oauthTokenSecret,
            r = t && t.nonce,
            o = t && t.oauthIdToken,
            a = t && t.pendingToken;
          try {
            switch (n) {
              case 'google.com':
                return ko(o, e);
              case 'facebook.com':
                return Io(e);
              case 'github.com':
                return Eo(e);
              case 'twitter.com':
                return No(e, i);
              default:
                return e || i || o || a
                  ? a
                    ? 0 == n.indexOf('saml.')
                      ? new ho(n, a)
                      : new po(n, { pendingToken: a, idToken: t.oauthIdToken, accessToken: t.oauthAccessToken }, n)
                    : new yo(n).credential({ idToken: o, accessToken: e, rawNonce: r })
                  : null;
            }
          } catch (s) {
            return null;
          }
        }
        function Vo(t) {
          if (!t.isOAuthProvider) throw new S('invalid-oauth-provider');
        }
        function Fo(t, n, e, i, r, o, a) {
          if (
            ((this.c = t),
            (this.b = n || null),
            (this.g = e || null),
            (this.f = i || null),
            (this.i = o || null),
            (this.h = a || null),
            (this.a = r || null),
            !this.g && !this.a)
          )
            throw new S('invalid-auth-event');
          if (this.g && this.a) throw new S('invalid-auth-event');
          if (this.g && !this.f) throw new S('invalid-auth-event');
        }
        function Ko(t) {
          return (t = t || {}).type
            ? new Fo(t.type, t.eventId, t.urlResponse, t.sessionId, t.error && N(t.error), t.postBody, t.tenantId)
            : null;
        }
        function qo() {
          (this.b = null), (this.a = []);
        }
        (oo.prototype.Ha = function () {
          return _n(this.a ? this.a : this.b);
        }),
          (oo.prototype.w = function () {
            return this.type == ao
              ? { multiFactorSession: { idToken: this.a } }
              : { multiFactorSession: { pendingCredential: this.b } };
          }),
          (uo.prototype.ka = function () {}),
          (uo.prototype.b = function () {}),
          (uo.prototype.c = function () {}),
          (uo.prototype.w = function () {}),
          (ho.prototype.ka = function (t) {
            return gs(t, lo(this));
          }),
          (ho.prototype.b = function (t, n) {
            var e = lo(this);
            return (e.idToken = n), bs(t, e);
          }),
          (ho.prototype.c = function (t, n) {
            return co(ys(t, lo(this)), n);
          }),
          (ho.prototype.w = function () {
            return { providerId: this.providerId, signInMethod: this.signInMethod, pendingToken: this.a };
          }),
          (po.prototype.ka = function (t) {
            return gs(t, vo(this));
          }),
          (po.prototype.b = function (t, n) {
            var e = vo(this);
            return (e.idToken = n), bs(t, e);
          }),
          (po.prototype.c = function (t, n) {
            return co(ys(t, vo(this)), n);
          }),
          (po.prototype.w = function () {
            var t = { providerId: this.providerId, signInMethod: this.signInMethod };
            return (
              this.idToken && (t.oauthIdToken = this.idToken),
              this.accessToken && (t.oauthAccessToken = this.accessToken),
              this.secret && (t.oauthTokenSecret = this.secret),
              this.nonce && (t.nonce = this.nonce),
              this.a && (t.pendingToken = this.a),
              t
            );
          }),
          (go.prototype.Ka = function (t) {
            return (this.Jb = vt(t)), this;
          }),
          A(bo, go),
          A(yo, go),
          (yo.prototype.Ca = function (t) {
            return J(this.a, t) || this.a.push(t), this;
          }),
          (yo.prototype.Rb = function () {
            return Z(this.a);
          }),
          (yo.prototype.credential = function (t, n) {
            var e;
            if (
              !(e = v(t)
                ? { idToken: t.idToken || null, accessToken: t.accessToken || null, nonce: t.rawNonce || null }
                : { idToken: t || null, accessToken: n || null }).idToken &&
              !e.accessToken
            )
              throw new S('argument-error', 'credential failed: must provide the ID token and/or the access token.');
            return new po(this.providerId, e, this.providerId);
          }),
          A(wo, yo),
          zi(wo, 'PROVIDER_ID', 'facebook.com'),
          zi(wo, 'FACEBOOK_SIGN_IN_METHOD', 'facebook.com'),
          A(To, yo),
          zi(To, 'PROVIDER_ID', 'github.com'),
          zi(To, 'GITHUB_SIGN_IN_METHOD', 'github.com'),
          A(Ao, yo),
          zi(Ao, 'PROVIDER_ID', 'google.com'),
          zi(Ao, 'GOOGLE_SIGN_IN_METHOD', 'google.com'),
          A(So, go),
          zi(So, 'PROVIDER_ID', 'twitter.com'),
          zi(So, 'TWITTER_SIGN_IN_METHOD', 'twitter.com'),
          (_o.prototype.ka = function (t) {
            return this.signInMethod == Co.EMAIL_LINK_SIGN_IN_METHOD
              ? tu(t, Ns, { email: this.a, oobCode: this.f })
              : tu(t, Ys, { email: this.a, password: this.f });
          }),
          (_o.prototype.b = function (t, n) {
            return this.signInMethod == Co.EMAIL_LINK_SIGN_IN_METHOD
              ? tu(t, _s, { idToken: n, email: this.a, oobCode: this.f })
              : tu(t, Ks, { idToken: n, email: this.a, password: this.f });
          }),
          (_o.prototype.c = function (t, n) {
            return co(this.ka(t), n);
          }),
          (_o.prototype.w = function () {
            return { email: this.a, password: this.f, signInMethod: this.signInMethod };
          }),
          $i(Co, { PROVIDER_ID: 'password' }),
          $i(Co, { EMAIL_LINK_SIGN_IN_METHOD: 'emailLink' }),
          $i(Co, { EMAIL_PASSWORD_SIGN_IN_METHOD: 'password' }),
          (Do.prototype.ka = function (t) {
            return t.gb(xo(this));
          }),
          (Do.prototype.b = function (t, n) {
            var e = xo(this);
            return (e.idToken = n), tu(t, $s, e);
          }),
          (Do.prototype.c = function (t, n) {
            var e = xo(this);
            return (e.operation = 'REAUTH'), co((t = tu(t, Zs, e)), n);
          }),
          (Do.prototype.w = function () {
            var t = { providerId: 'phone' };
            return (
              this.a.fb && (t.verificationId = this.a.fb),
              this.a.eb && (t.verificationCode = this.a.eb),
              this.a.La && (t.temporaryProof = this.a.La),
              this.a.ea && (t.phoneNumber = this.a.ea),
              t
            );
          }),
          (Mo.prototype.gb = function (t, n) {
            var e = this.a.a;
            return _n(n.verify()).then(function (i) {
              if ('string' != typeof i)
                throw new S(
                  'argument-error',
                  'An implementation of firebase.auth.ApplicationVerifier.prototype.verify() must return a firebase.Promise that resolves with a string.'
                );
              switch (n.type) {
                case 'recaptcha':
                  var r = v(t) ? t.session : null,
                    o = v(t) ? t.phoneNumber : t;
                  return (
                    r && r.type == ao
                      ? r.Ha().then(function (t) {
                          return (function (t, n) {
                            return tu(t, Hs, n).then(function (t) {
                              return t.phoneSessionInfo.sessionInfo;
                            });
                          })(e, { idToken: t, phoneEnrollmentInfo: { phoneNumber: o, recaptchaToken: i } });
                        })
                      : r && r.type == so
                      ? r.Ha().then(function (n) {
                          return (function (t, n) {
                            return tu(t, Gs, n).then(function (t) {
                              return t.phoneResponseInfo.sessionInfo;
                            });
                          })(e, {
                            mfaPendingCredential: n,
                            mfaEnrollmentId: (t.multiFactorHint && t.multiFactorHint.uid) || t.multiFactorUid,
                            phoneSignInInfo: { recaptchaToken: i },
                          });
                        })
                      : (function (t, n) {
                          return tu(t, Vs, n);
                        })(e, { phoneNumber: o, recaptchaToken: i })
                  ).then(
                    function (t) {
                      return 'function' == typeof n.reset && n.reset(), t;
                    },
                    function (t) {
                      throw ('function' == typeof n.reset && n.reset(), t);
                    }
                  );
                default:
                  throw new S(
                    'argument-error',
                    'Only firebase.auth.ApplicationVerifiers with type="recaptcha" are currently supported.'
                  );
              }
            });
          }),
          $i(Mo, { PROVIDER_ID: 'phone' }),
          $i(Mo, { PHONE_SIGN_IN_METHOD: 'phone' }),
          (Fo.prototype.getUid = function () {
            var t = [];
            return (
              t.push(this.c), this.b && t.push(this.b), this.f && t.push(this.f), this.h && t.push(this.h), t.join('-')
            );
          }),
          (Fo.prototype.T = function () {
            return this.h;
          }),
          (Fo.prototype.w = function () {
            return {
              type: this.c,
              eventId: this.b,
              urlResponse: this.g,
              sessionId: this.f,
              postBody: this.i,
              tenantId: this.h,
              error: this.a && this.a.w(),
            };
          });
        var Ho,
          Go = null;
        function Bo(t) {
          var n = 'unauthorized-domain',
            e = void 0,
            i = Ve(t);
          (t = i.a),
            'chrome-extension' == (i = i.c)
              ? (e = Ht(
                  'This chrome extension ID (chrome-extension://%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.',
                  t
                ))
              : 'http' == i || 'https' == i
              ? (e = Ht(
                  'This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.',
                  t
                ))
              : (n = 'operation-not-supported-in-this-environment'),
            S.call(this, n, e);
        }
        function Wo(t, n, e) {
          S.call(this, t, e),
            (t = n || {}).Kb && zi(this, 'email', t.Kb),
            t.ea && zi(this, 'phoneNumber', t.ea),
            t.credential && zi(this, 'credential', t.credential),
            t.$b && zi(this, 'tenantId', t.$b);
        }
        function Xo(t) {
          if (t.code) {
            var n = t.code || '';
            0 == n.indexOf(O) && (n = n.substring(O.length));
            var e = { credential: Uo(t), $b: t.tenantId };
            if (t.email) e.Kb = t.email;
            else if (t.phoneNumber) e.ea = t.phoneNumber;
            else if (!e.credential) return new S(n, t.message || void 0);
            return new Wo(n, e, t.message);
          }
          return null;
        }
        function Jo() {}
        function Yo() {}
        function zo(t) {
          if (!t.f && 'undefined' == typeof XMLHttpRequest && 'undefined' != typeof ActiveXObject) {
            for (
              var n = ['MSXML2.XMLHTTP.6.0', 'MSXML2.XMLHTTP.3.0', 'MSXML2.XMLHTTP', 'Microsoft.XMLHTTP'], e = 0;
              e < n.length;
              e++
            ) {
              var i = n[e];
              try {
                return new ActiveXObject(i), (t.f = i);
              } catch (r) {}
            }
            throw Error('Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed');
          }
          return t.f;
        }
        function $o() {}
        function Zo() {
          (this.a = new XDomainRequest()),
            (this.readyState = 0),
            (this.onreadystatechange = null),
            (this.responseType = this.responseText = this.response = ''),
            (this.status = -1),
            (this.statusText = ''),
            (this.a.onload = I(this.qc, this)),
            (this.a.onerror = I(this.Tb, this)),
            (this.a.onprogress = I(this.rc, this)),
            (this.a.ontimeout = I(this.vc, this));
        }
        function Qo(t, n) {
          (t.readyState = n), t.onreadystatechange && t.onreadystatechange();
        }
        function ta(t, n, e) {
          this.reset(t, n, e, void 0, void 0);
        }
        function na(t) {
          (this.f = t), (this.b = this.c = this.a = null);
        }
        function ea(t, n) {
          (this.name = t), (this.value = n);
        }
        A(Bo, S),
          A(Wo, S),
          (Wo.prototype.w = function () {
            var t = { code: this.code, message: this.message };
            this.email && (t.email = this.email),
              this.phoneNumber && (t.phoneNumber = this.phoneNumber),
              this.tenantId && (t.tenantId = this.tenantId);
            var n = this.credential && this.credential.w();
            return n && gt(t, n), t;
          }),
          (Wo.prototype.toJSON = function () {
            return this.w();
          }),
          (Jo.prototype.c = null),
          A(Yo, Jo),
          (Yo.prototype.a = function () {
            var t = zo(this);
            return t ? new ActiveXObject(t) : new XMLHttpRequest();
          }),
          (Yo.prototype.b = function () {
            var t = {};
            return zo(this) && ((t[0] = !0), (t[1] = !0)), t;
          }),
          (Ho = new Yo()),
          A($o, Jo),
          ($o.prototype.a = function () {
            var t = new XMLHttpRequest();
            if ('withCredentials' in t) return t;
            if ('undefined' != typeof XDomainRequest) return new Zo();
            throw Error('Unsupported browser');
          }),
          ($o.prototype.b = function () {
            return {};
          }),
          ((t = Zo.prototype).open = function (t, n, e) {
            if (null != e && !e) throw Error('Only async requests are supported.');
            this.a.open(t, n);
          }),
          (t.send = function (t) {
            if (t) {
              if ('string' != typeof t) throw Error('Only string data is supported');
              this.a.send(t);
            } else this.a.send();
          }),
          (t.abort = function () {
            this.a.abort();
          }),
          (t.setRequestHeader = function () {}),
          (t.getResponseHeader = function (t) {
            return 'content-type' == t.toLowerCase() ? this.a.contentType : '';
          }),
          (t.qc = function () {
            (this.status = 200), (this.response = this.responseText = this.a.responseText), Qo(this, 4);
          }),
          (t.Tb = function () {
            (this.status = 500), (this.response = this.responseText = ''), Qo(this, 4);
          }),
          (t.vc = function () {
            this.Tb();
          }),
          (t.rc = function () {
            (this.status = 200), Qo(this, 1);
          }),
          (t.getAllResponseHeaders = function () {
            return 'content-type: ' + this.a.contentType;
          }),
          (ta.prototype.a = null),
          (ta.prototype.reset = function (t, n, e, i, r) {
            i || E(), delete this.a;
          }),
          (ea.prototype.toString = function () {
            return this.name;
          });
        var ia = new ea('SEVERE', 1e3),
          ra = new ea('WARNING', 900),
          oa = new ea('CONFIG', 700),
          aa = new ea('FINE', 500);
        function sa(t) {
          return t.c ? t.c : t.a ? sa(t.a) : (M('Root logger has no level set.'), null);
        }
        na.prototype.log = function (t, n, e) {
          if (t.value >= sa(this).value)
            for (p(n) && (n = n()), t = new ta(t, String(n), this.f), e && (t.a = e), e = this; e; ) e = e.a;
        };
        var ua = {},
          ca = null;
        function ha(t) {
          var n;
          if ((ca || ((ca = new na('')), (ua[''] = ca), (ca.c = oa)), !(n = ua[t]))) {
            n = new na(t);
            var e = t.lastIndexOf('.'),
              i = t.substr(e + 1);
            (e = ha(t.substr(0, e))).b || (e.b = {}), (e.b[i] = n), (n.a = e), (ua[t] = n);
          }
          return n;
        }
        function la(t, n) {
          t && t.log(aa, n, void 0);
        }
        function fa(t) {
          this.f = t;
        }
        function da(t) {
          Ie.call(this),
            (this.u = t),
            (this.h = void 0),
            (this.readyState = pa),
            (this.status = 0),
            (this.responseType = this.responseText = this.response = this.statusText = ''),
            (this.onreadystatechange = null),
            (this.l = new Headers()),
            (this.b = null),
            (this.s = 'GET'),
            (this.f = ''),
            (this.a = !1),
            (this.i = ha('goog.net.FetchXmlHttp')),
            (this.m = this.c = this.g = null);
        }
        A(fa, Jo),
          (fa.prototype.a = function () {
            return new da(this.f);
          }),
          (fa.prototype.b = (function (t) {
            return function () {
              return t;
            };
          })({})),
          A(da, Ie);
        var pa = 0;
        function va(t) {
          t.c.read().then(t.pc.bind(t)).catch(t.Va.bind(t));
        }
        function ma(t) {
          (t.readyState = 4), (t.g = null), (t.c = null), (t.m = null), ga(t);
        }
        function ga(t) {
          t.onreadystatechange && t.onreadystatechange.call(t);
        }
        function ba(t) {
          Ie.call(this),
            (this.headers = new Oe()),
            (this.D = t || null),
            (this.c = !1),
            (this.C = this.a = null),
            (this.h = this.P = this.l = ''),
            (this.f = this.N = this.i = this.J = !1),
            (this.g = 0),
            (this.s = null),
            (this.m = ya),
            (this.u = this.S = !1);
        }
        ((t = da.prototype).open = function (t, n) {
          if (this.readyState != pa) throw (this.abort(), Error('Error reopening a connection'));
          (this.s = t), (this.f = n), (this.readyState = 1), ga(this);
        }),
          (t.send = function (t) {
            if (1 != this.readyState) throw (this.abort(), Error('need to call open() first. '));
            this.a = !0;
            var n = { headers: this.l, method: this.s, credentials: this.h, cache: void 0 };
            t && (n.body = t), this.u.fetch(new Request(this.f, n)).then(this.uc.bind(this), this.Va.bind(this));
          }),
          (t.abort = function () {
            (this.response = this.responseText = ''),
              (this.l = new Headers()),
              (this.status = 0),
              this.c && this.c.cancel('Request was aborted.'),
              1 <= this.readyState && this.a && 4 != this.readyState && ((this.a = !1), ma(this)),
              (this.readyState = pa);
          }),
          (t.uc = function (t) {
            this.a &&
              ((this.g = t),
              this.b ||
                ((this.status = this.g.status),
                (this.statusText = this.g.statusText),
                (this.b = t.headers),
                (this.readyState = 2),
                ga(this)),
              this.a &&
                ((this.readyState = 3),
                ga(this),
                this.a &&
                  ('arraybuffer' === this.responseType
                    ? t.arrayBuffer().then(this.sc.bind(this), this.Va.bind(this))
                    : void 0 !== s.ReadableStream && 'body' in t
                    ? ((this.response = this.responseText = ''),
                      (this.c = t.body.getReader()),
                      (this.m = new TextDecoder()),
                      va(this))
                    : t.text().then(this.tc.bind(this), this.Va.bind(this)))));
          }),
          (t.pc = function (t) {
            if (this.a) {
              var n = this.m.decode(t.value ? t.value : new Uint8Array(0), { stream: !t.done });
              n && (this.response = this.responseText += n),
                t.done ? ma(this) : ga(this),
                3 == this.readyState && va(this);
            }
          }),
          (t.tc = function (t) {
            this.a && ((this.response = this.responseText = t), ma(this));
          }),
          (t.sc = function (t) {
            this.a && ((this.response = t), ma(this));
          }),
          (t.Va = function (t) {
            var n = this.i;
            n && n.log(ra, 'Failed to fetch url ' + this.f, t instanceof Error ? t : Error(t)), this.a && ma(this);
          }),
          (t.setRequestHeader = function (t, n) {
            this.l.append(t, n);
          }),
          (t.getResponseHeader = function (t) {
            return this.b
              ? this.b.get(t.toLowerCase()) || ''
              : ((t = this.i) &&
                  t.log(
                    ra,
                    'Attempting to get response header but no headers have been received for url: ' + this.f,
                    void 0
                  ),
                '');
          }),
          (t.getAllResponseHeaders = function () {
            if (!this.b) {
              var t = this.i;
              return (
                t &&
                  t.log(
                    ra,
                    'Attempting to get all response headers but no headers have been received for url: ' + this.f,
                    void 0
                  ),
                ''
              );
            }
            t = [];
            for (var n = this.b.entries(), e = n.next(); !e.done; )
              t.push((e = e.value)[0] + ': ' + e[1]), (e = n.next());
            return t.join('\r\n');
          }),
          Object.defineProperty(da.prototype, 'withCredentials', {
            get: function () {
              return 'include' === this.h;
            },
            set: function (t) {
              this.h = t ? 'include' : 'same-origin';
            },
          }),
          A(ba, Ie);
        var ya = '';
        ba.prototype.b = ha('goog.net.XhrIo');
        var wa = /^https?$/i,
          Ia = ['POST', 'PUT'];
        function Ta(t) {
          return 'content-type' == t.toLowerCase();
        }
        function Ea(t, n) {
          (t.c = !1), t.a && ((t.f = !0), t.a.abort(), (t.f = !1)), (t.h = n), Aa(t), Sa(t);
        }
        function Aa(t) {
          t.J || ((t.J = !0), t.dispatchEvent('complete'), t.dispatchEvent('error'));
        }
        function ka(t) {
          if (t.c && void 0 !== a)
            if (t.C[1] && 4 == _a(t) && 2 == Oa(t)) la(t.b, Ca(t, 'Local request error detected and ignored'));
            else if (t.i && 4 == _a(t)) ke(t.Wb, 0, t);
            else if ((t.dispatchEvent('readystatechange'), 4 == _a(t))) {
              la(t.b, Ca(t, 'Request complete')), (t.c = !1);
              try {
                var n,
                  e = Oa(t);
                t: switch (e) {
                  case 200:
                  case 201:
                  case 202:
                  case 204:
                  case 206:
                  case 304:
                  case 1223:
                    var i = !0;
                    break t;
                  default:
                    i = !1;
                }
                if (!(n = i)) {
                  var r;
                  if ((r = 0 === e)) {
                    var o = String(t.l).match(Pe)[1] || null;
                    if (!o && s.self && s.self.location) {
                      var u = s.self.location.protocol;
                      o = u.substr(0, u.length - 1);
                    }
                    r = !wa.test(o ? o.toLowerCase() : '');
                  }
                  n = r;
                }
                if (n) t.dispatchEvent('complete'), t.dispatchEvent('success');
                else {
                  try {
                    var c = 2 < _a(t) ? t.a.statusText : '';
                  } catch (h) {
                    la(t.b, 'Can not get status: ' + h.message), (c = '');
                  }
                  (t.h = c + ' [' + Oa(t) + ']'), Aa(t);
                }
              } finally {
                Sa(t);
              }
            }
        }
        function Sa(t, n) {
          if (t.a) {
            Na(t);
            var e = t.a,
              i = t.C[0] ? l : null;
            (t.a = null), (t.C = null), n || t.dispatchEvent('ready');
            try {
              e.onreadystatechange = i;
            } catch (r) {
              (t = t.b) && t.log(ia, 'Problem encountered resetting onreadystatechange: ' + r.message, void 0);
            }
          }
        }
        function Na(t) {
          t.a && t.u && (t.a.ontimeout = null), t.s && (s.clearTimeout(t.s), (t.s = null));
        }
        function _a(t) {
          return t.a ? t.a.readyState : 0;
        }
        function Oa(t) {
          try {
            return 2 < _a(t) ? t.a.status : -1;
          } catch (n) {
            return -1;
          }
        }
        function Ca(t, n) {
          return n + ' [' + t.P + ' ' + t.l + ' ' + Oa(t) + ']';
        }
        function Ra(t) {
          var n = qa;
          (this.g = []),
            (this.u = n),
            (this.s = t || null),
            (this.f = this.a = !1),
            (this.c = void 0),
            (this.v = this.C = this.i = !1),
            (this.h = 0),
            (this.b = null),
            (this.l = 0);
        }
        function Pa(t, n, e) {
          (t.a = !0), (t.c = e), (t.f = !n), Ma(t);
        }
        function Da(t) {
          if (t.a) {
            if (!t.v) throw new ja(t);
            t.v = !1;
          }
        }
        function La(t, n, e, i) {
          t.g.push([n, e, i]), t.a && Ma(t);
        }
        function xa(t) {
          return X(t.g, function (t) {
            return p(t[1]);
          });
        }
        function Ma(t) {
          if (t.h && t.a && xa(t)) {
            var n = t.h,
              e = Fa[n];
            e && (s.clearTimeout(e.a), delete Fa[n]), (t.h = 0);
          }
          t.b && (t.b.l--, delete t.b), (n = t.c);
          for (var i = (e = !1); t.g.length && !t.i; ) {
            var r = t.g.shift(),
              o = r[0],
              a = r[1];
            if (((r = r[2]), (o = t.f ? a : o)))
              try {
                var u = o.call(r || t.s, n);
                void 0 !== u && ((t.f = t.f && (u == n || u instanceof Error)), (t.c = n = u)),
                  (D(n) || ('function' == typeof s.Promise && n instanceof s.Promise)) && ((i = !0), (t.i = !0));
              } catch (c) {
                (n = c), (t.f = !0), xa(t) || (e = !0);
              }
          }
          (t.c = n),
            i && ((u = I(t.m, t, !0)), (i = I(t.m, t, !1)), n instanceof Ra ? (La(n, u, i), (n.C = !0)) : n.then(u, i)),
            e && ((n = new Va(n)), (Fa[n.a] = n), (t.h = n.a));
        }
        function ja() {
          L.call(this);
        }
        function Ua() {
          L.call(this);
        }
        function Va(t) {
          (this.a = s.setTimeout(I(this.c, this), 0)), (this.b = t);
        }
        ((t = ba.prototype).Ma = function () {
          void 0 !== a &&
            this.a &&
            ((this.h = 'Timed out after ' + this.g + 'ms, aborting'),
            la(this.b, Ca(this, this.h)),
            this.dispatchEvent('timeout'),
            this.abort(8));
        }),
          (t.abort = function () {
            this.a &&
              this.c &&
              (la(this.b, Ca(this, 'Aborting')),
              (this.c = !1),
              (this.f = !0),
              this.a.abort(),
              (this.f = !1),
              this.dispatchEvent('complete'),
              this.dispatchEvent('abort'),
              Sa(this));
          }),
          (t.Da = function () {
            this.a && (this.c && ((this.c = !1), (this.f = !0), this.a.abort(), (this.f = !1)), Sa(this, !0)),
              ba.bb.Da.call(this);
          }),
          (t.Wb = function () {
            this.ya || (this.N || this.i || this.f ? ka(this) : this.Jc());
          }),
          (t.Jc = function () {
            ka(this);
          }),
          (t.getResponse = function () {
            try {
              if (!this.a) return null;
              if ('response' in this.a) return this.a.response;
              switch (this.m) {
                case ya:
                case 'text':
                  return this.a.responseText;
                case 'arraybuffer':
                  if ('mozResponseArrayBuffer' in this.a) return this.a.mozResponseArrayBuffer;
              }
              var t = this.b;
              return t && t.log(ia, 'Response type ' + this.m + ' is not supported on this browser', void 0), null;
            } catch (n) {
              return la(this.b, 'Can not get response: ' + n.message), null;
            }
          }),
          (Ra.prototype.cancel = function (t) {
            if (this.a) this.c instanceof Ra && this.c.cancel();
            else {
              if (this.b) {
                var n = this.b;
                delete this.b, t ? n.cancel(t) : (n.l--, 0 >= n.l && n.cancel());
              }
              this.u ? this.u.call(this.s, this) : (this.v = !0),
                this.a || ((t = new Ua(this)), Da(this), Pa(this, !1, t));
            }
          }),
          (Ra.prototype.m = function (t, n) {
            (this.i = !1), Pa(this, t, n);
          }),
          (Ra.prototype.then = function (t, n, e) {
            var i,
              r,
              o = new In(function (t, n) {
                (i = t), (r = n);
              });
            return (
              La(this, i, function (t) {
                t instanceof Ua ? o.cancel() : r(t);
              }),
              o.then(t, n, e)
            );
          }),
          (Ra.prototype.$goog_Thenable = !0),
          A(ja, L),
          (ja.prototype.message = 'Deferred has already fired'),
          (ja.prototype.name = 'AlreadyCalledError'),
          A(Ua, L),
          (Ua.prototype.message = 'Deferred was canceled'),
          (Ua.prototype.name = 'CanceledError'),
          (Va.prototype.c = function () {
            throw (delete Fa[this.a], this.b);
          });
        var Fa = {};
        function Ka(t) {
          var n = {},
            e = n.document || document,
            i = St(t).toString(),
            r = vn(document, 'SCRIPT'),
            o = { Xb: r, Ma: void 0 },
            a = new Ra(o),
            u = null,
            l = null != n.timeout ? n.timeout : 5e3;
          return (
            0 < l &&
              ((u = window.setTimeout(function () {
                Ha(r, !0);
                var t = new Wa(Ba, 'Timeout reached for loading script ' + i);
                Da(a), Pa(a, !1, t);
              }, l)),
              (o.Ma = u)),
            (r.onload = r.onreadystatechange =
              function () {
                (r.readyState && 'loaded' != r.readyState && 'complete' != r.readyState) ||
                  (Ha(r, n.xd || !1, u), Da(a), Pa(a, !0, null));
              }),
            (r.onerror = function () {
              Ha(r, !0, u);
              var t = new Wa(Ga, 'Error while loading script ' + i);
              Da(a), Pa(a, !1, t);
            }),
            gt((o = n.attributes || {}), { type: 'text/javascript', charset: 'UTF-8' }),
            hn(r, o),
            (function (t, n) {
              bt(t, 'HTMLScriptElement'),
                (t.src = St(n)),
                (n = t.ownerDocument && t.ownerDocument.defaultView) && n != s
                  ? (n = h(n.document))
                  : (null === c && (c = h(s.document)), (n = c)),
                n && t.setAttribute('nonce', n);
            })(r, t),
            (function (t) {
              var n;
              return (n = (t || document).getElementsByTagName('HEAD')) && 0 != n.length ? n[0] : t.documentElement;
            })(e).appendChild(r),
            a
          );
        }
        function qa() {
          if (this && this.Xb) {
            var t = this.Xb;
            t && 'SCRIPT' == t.tagName && Ha(t, !0, this.Ma);
          }
        }
        function Ha(t, n, e) {
          null != e && s.clearTimeout(e),
            (t.onload = l),
            (t.onerror = l),
            (t.onreadystatechange = l),
            n &&
              window.setTimeout(function () {
                t && t.parentNode && t.parentNode.removeChild(t);
              }, 0);
        }
        var Ga = 0,
          Ba = 1;
        function Wa(t, n) {
          var e = 'Jsloader error (code #' + t + ')';
          n && (e += ': ' + n), L.call(this, e), (this.code = t);
        }
        function Xa(t) {
          this.f = t;
        }
        function Ja(t, n, e) {
          if (
            ((this.c = t),
            (this.l = (t = n || {}).secureTokenEndpoint || 'https://securetoken.googleapis.com/v1/token'),
            (this.m = t.secureTokenTimeout || $a),
            (this.g = vt(t.secureTokenHeaders || Za)),
            (this.h = t.firebaseEndpoint || 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/'),
            (this.i = t.identityPlatformEndpoint || 'https://identitytoolkit.googleapis.com/v2/'),
            (this.v = t.firebaseTimeout || Qa),
            (this.a = vt(t.firebaseHeaders || ts)),
            e && ((this.a['X-Client-Version'] = e), (this.g['X-Client-Version'] = e)),
            (e = 'Node' == Ti()),
            !(e = s.XMLHttpRequest || (e && i.a.INTERNAL.node && i.a.INTERNAL.node.XMLHttpRequest)) && !Ii())
          )
            throw new S('internal-error', 'The XMLHttpRequest compatibility library was not found.');
          (this.f = void 0), (this.f = Ii() ? new fa(self) : Ei() ? new Xa(e) : new $o()), (this.b = null);
        }
        A(Wa, L),
          A(Xa, Jo),
          (Xa.prototype.a = function () {
            return new this.f();
          }),
          (Xa.prototype.b = function () {
            return {};
          });
        var Ya,
          za = 'idToken',
          $a = new qi(3e4, 6e4),
          Za = { 'Content-Type': 'application/x-www-form-urlencoded' },
          Qa = new qi(3e4, 6e4),
          ts = { 'Content-Type': 'application/json' };
        function ns(t, n) {
          n ? (t.a['X-Firebase-Locale'] = n) : delete t.a['X-Firebase-Locale'];
        }
        function es(t, n) {
          n &&
            ((t.l = is('https://securetoken.googleapis.com/v1/token', n)),
            (t.h = is('https://www.googleapis.com/identitytoolkit/v3/relyingparty/', n)),
            (t.i = is('https://identitytoolkit.googleapis.com/v2/', n)));
        }
        function is(t, n) {
          return (t = Ve(t)), (n = Ve(n.url)), (t.f = t.a + t.f), Le(t, n.c), (t.a = n.a), xe(t, n.g), t.toString();
        }
        function rs(t, n) {
          n
            ? ((t.a['X-Client-Version'] = n), (t.g['X-Client-Version'] = n))
            : (delete t.a['X-Client-Version'], delete t.g['X-Client-Version']);
        }
        function os(t, n, e, i, r, o, a) {
          (function () {
            var t = Oi();
            return !(
              ((t =
                Si(t) != ki ? null : (t = t.match(/\sChrome\/(\d+)/i)) && 2 == t.length ? parseInt(t[1], 10) : null) &&
                30 > t) ||
              (Yt && sn && !(9 < sn))
            );
          })() || Ii()
            ? (t = I(t.u, t))
            : (Ya ||
                (Ya = new In(function (t, n) {
                  !(function (t, n) {
                    ((window.gapi || {}).client || {}).request
                      ? t()
                      : ((s[ss] = function () {
                          ((window.gapi || {}).client || {}).request ? t() : n(Error('CORS_UNSUPPORTED'));
                        }),
                        (function (t, n) {
                          La(t, null, n, void 0);
                        })(Ka(Nt(as, { onload: ss })), function () {
                          n(Error('CORS_UNSUPPORTED'));
                        }));
                  })(t, n);
                })),
              (t = I(t.s, t))),
            t(n, e, i, r, o, a);
        }
        (Ja.prototype.T = function () {
          return this.b;
        }),
          (Ja.prototype.u = function (t, n, e, i, r, o) {
            if (Ii() && (void 0 === s.fetch || void 0 === s.Headers || void 0 === s.Request))
              throw new S(
                'operation-not-supported-in-this-environment',
                'fetch, Headers and Request native APIs or equivalent Polyfills must be available to support HTTP requests from a Worker environment.'
              );
            var a = new ba(this.f);
            if (o) {
              a.g = Math.max(0, o);
              var u = setTimeout(function () {
                a.dispatchEvent('timeout');
              }, o);
            }
            Te(a, 'complete', function () {
              u && clearTimeout(u);
              var t = null;
              try {
                t =
                  JSON.parse(
                    (function (t) {
                      try {
                        return t.a ? t.a.responseText : '';
                      } catch (n) {
                        return la(t.b, 'Can not get responseText: ' + n.message), '';
                      }
                    })(this)
                  ) || null;
              } catch (e) {
                t = null;
              }
              n && n(t);
            }),
              Ee(a, 'ready', function () {
                u && clearTimeout(u), Wn(this);
              }),
              Ee(a, 'timeout', function () {
                u && clearTimeout(u), Wn(this), n && n(null);
              }),
              (function (t, n, e, i, r) {
                if (t.a) throw Error('[goog.net.XhrIo] Object is active with another request=' + t.l + '; newUri=' + n);
                (e = e ? e.toUpperCase() : 'GET'),
                  (t.l = n),
                  (t.h = ''),
                  (t.P = e),
                  (t.J = !1),
                  (t.c = !0),
                  (t.a = t.D ? t.D.a() : Ho.a()),
                  (t.C = (function (t) {
                    return t.c || (t.c = t.b());
                  })(t.D ? t.D : Ho)),
                  (t.a.onreadystatechange = I(t.Wb, t));
                try {
                  la(t.b, Ca(t, 'Opening Xhr')), (t.N = !0), t.a.open(e, String(n), !0), (t.N = !1);
                } catch (a) {
                  return la(t.b, Ca(t, 'Error opening Xhr: ' + a.message)), void Ea(t, a);
                }
                n = i || '';
                var o = new Oe(t.headers);
                r &&
                  (function (t, n) {
                    if (t.forEach && 'function' == typeof t.forEach) t.forEach(n, void 0);
                    else if (d(t) || 'string' == typeof t) G(t, n, void 0);
                    else
                      for (var e = _e(t), i = Ne(t), r = i.length, o = 0; o < r; o++)
                        n.call(void 0, i[o], e && e[o], t);
                  })(r, function (t, n) {
                    o.set(n, t);
                  }),
                  (r = (function (t) {
                    t: {
                      for (var n = Ta, e = t.length, i = 'string' == typeof t ? t.split('') : t, r = 0; r < e; r++)
                        if (r in i && n.call(void 0, i[r], r, t)) {
                          n = r;
                          break t;
                        }
                      n = -1;
                    }
                    return 0 > n ? null : 'string' == typeof t ? t.charAt(n) : t[n];
                  })(o.Y())),
                  (i = s.FormData && n instanceof s.FormData),
                  !J(Ia, e) || r || i || o.set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8'),
                  o.forEach(function (t, n) {
                    this.a.setRequestHeader(n, t);
                  }, t),
                  t.m && (t.a.responseType = t.m),
                  'withCredentials' in t.a && t.a.withCredentials !== t.S && (t.a.withCredentials = t.S);
                try {
                  Na(t),
                    0 < t.g &&
                      ((t.u = (function (t) {
                        return Yt && an(9) && 'number' == typeof t.timeout && void 0 !== t.ontimeout;
                      })(t.a)),
                      la(t.b, Ca(t, 'Will abort after ' + t.g + 'ms if incomplete, xhr2 ' + t.u)),
                      t.u ? ((t.a.timeout = t.g), (t.a.ontimeout = I(t.Ma, t))) : (t.s = ke(t.Ma, t.g, t))),
                    la(t.b, Ca(t, 'Sending request')),
                    (t.i = !0),
                    t.a.send(n),
                    (t.i = !1);
                } catch (a) {
                  la(t.b, Ca(t, 'Send error: ' + a.message)), Ea(t, a);
                }
              })(a, t, e, i, r);
          });
        var as = new yt(Et, 'https://apis.google.com/js/client.js?onload=%{onload}'),
          ss = '__fcb' + Math.floor(1e6 * Math.random()).toString();
        function us(t) {
          if ('string' != typeof (t = t.email) || !gi.test(t)) throw new S('invalid-email');
        }
        function cs(t) {
          'email' in t && us(t);
        }
        function hs(t) {
          if (!t[za]) {
            if (t.mfaPendingCredential) throw new S('multi-factor-auth-required', null, vt(t));
            throw new S('internal-error');
          }
        }
        function ls(t) {
          if (t.phoneNumber || t.temporaryProof) {
            if (!t.phoneNumber || !t.temporaryProof) throw new S('internal-error');
          } else {
            if (!t.sessionInfo) throw new S('missing-verification-id');
            if (!t.code) throw new S('missing-verification-code');
          }
        }
        (Ja.prototype.s = function (t, n, e, i, r) {
          var o = this;
          Ya.then(function () {
            window.gapi.client.setApiKey(o.c);
            var a = window.gapi.auth.getToken();
            window.gapi.auth.setToken(null),
              window.gapi.client.request({
                path: t,
                method: e,
                body: i,
                headers: r,
                authType: 'none',
                callback: function (t) {
                  window.gapi.auth.setToken(a), n && n(t);
                },
              });
          }).o(function (t) {
            n && n({ error: { message: (t && t.message) || 'CORS_UNSUPPORTED' } });
          });
        }),
          (Ja.prototype.Ab = function () {
            return tu(this, qs, {});
          }),
          (Ja.prototype.Cb = function (t, n) {
            return tu(this, Fs, { idToken: t, email: n });
          }),
          (Ja.prototype.Db = function (t, n) {
            return tu(this, Ks, { idToken: t, password: n });
          });
        var fs = { displayName: 'DISPLAY_NAME', photoUrl: 'PHOTO_URL' };
        function ds(t) {
          if (!t.phoneVerificationInfo) throw new S('internal-error');
          if (!t.phoneVerificationInfo.sessionInfo) throw new S('missing-verification-id');
          if (!t.phoneVerificationInfo.code) throw new S('missing-verification-code');
        }
        function ps(t) {
          if (!t.requestUri || (!t.sessionId && !t.postBody && !t.pendingToken)) throw new S('internal-error');
        }
        function vs(t, n) {
          return (
            n.oauthIdToken &&
              n.providerId &&
              0 == n.providerId.indexOf('oidc.') &&
              !n.pendingToken &&
              (t.sessionId
                ? (n.nonce = t.sessionId)
                : t.postBody && Qe((t = new Ye(t.postBody)), 'nonce') && (n.nonce = t.get('nonce'))),
            n
          );
        }
        function ms(t) {
          var n = null;
          if (
            (t.needConfirmation
              ? ((t.code = 'account-exists-with-different-credential'), (n = Xo(t)))
              : 'FEDERATED_USER_ID_ALREADY_LINKED' == t.errorMessage
              ? ((t.code = 'credential-already-in-use'), (n = Xo(t)))
              : 'EMAIL_EXISTS' == t.errorMessage
              ? ((t.code = 'email-already-in-use'), (n = Xo(t)))
              : t.errorMessage && (n = nu(t.errorMessage)),
            n)
          )
            throw n;
          hs(t);
        }
        function gs(t, n) {
          return (n.returnIdpCredential = !0), tu(t, Bs, n);
        }
        function bs(t, n) {
          return (n.returnIdpCredential = !0), tu(t, Xs, n);
        }
        function ys(t, n) {
          return (n.returnIdpCredential = !0), (n.autoCreate = !1), tu(t, Ws, n);
        }
        function ws(t) {
          if (!t.oobCode) throw new S('invalid-action-code');
        }
        ((t = Ja.prototype).Eb = function (t, n) {
          var e = { idToken: t },
            i = [];
          return (
            dt(fs, function (t, r) {
              var o = n[r];
              null === o ? i.push(t) : r in n && (e[r] = o);
            }),
            i.length && (e.deleteAttribute = i),
            tu(this, Fs, e)
          );
        }),
          (t.wb = function (t, n) {
            return gt((t = { requestType: 'PASSWORD_RESET', email: t }), n), tu(this, xs, t);
          }),
          (t.xb = function (t, n) {
            return gt((t = { requestType: 'EMAIL_SIGNIN', email: t }), n), tu(this, Ps, t);
          }),
          (t.vb = function (t, n) {
            return gt((t = { requestType: 'VERIFY_EMAIL', idToken: t }), n), tu(this, Ds, t);
          }),
          (t.Fb = function (t, n, e) {
            return gt((t = { requestType: 'VERIFY_AND_CHANGE_EMAIL', idToken: t, newEmail: n }), e), tu(this, Ls, t);
          }),
          (t.gb = function (t) {
            return tu(this, zs, t);
          }),
          (t.ob = function (t, n) {
            return tu(this, Us, { oobCode: t, newPassword: n });
          }),
          (t.Sa = function (t) {
            return tu(this, Ts, { oobCode: t });
          }),
          (t.kb = function (t) {
            return tu(this, Is, { oobCode: t });
          });
        var Is = { endpoint: 'setAccountInfo', A: ws, Z: 'email', B: !0 },
          Ts = {
            endpoint: 'resetPassword',
            A: ws,
            G: function (t) {
              var n = t.requestType;
              if (!n || (!t.email && 'EMAIL_SIGNIN' != n && 'VERIFY_AND_CHANGE_EMAIL' != n))
                throw new S('internal-error');
            },
            B: !0,
          },
          Es = {
            endpoint: 'signupNewUser',
            A: function (t) {
              if ((us(t), !t.password)) throw new S('weak-password');
            },
            G: hs,
            V: !0,
            B: !0,
          },
          As = { endpoint: 'createAuthUri', B: !0 },
          ks = { endpoint: 'deleteAccount', O: ['idToken'] },
          Ss = {
            endpoint: 'setAccountInfo',
            O: ['idToken', 'deleteProvider'],
            A: function (t) {
              if (!Array.isArray(t.deleteProvider)) throw new S('internal-error');
            },
          },
          Ns = { endpoint: 'emailLinkSignin', O: ['email', 'oobCode'], A: us, G: hs, V: !0, B: !0 },
          _s = { endpoint: 'emailLinkSignin', O: ['idToken', 'email', 'oobCode'], A: us, G: hs, V: !0 },
          Os = {
            endpoint: 'accounts/mfaEnrollment:finalize',
            O: ['idToken', 'phoneVerificationInfo'],
            A: ds,
            G: hs,
            B: !0,
            Na: !0,
          },
          Cs = {
            endpoint: 'accounts/mfaSignIn:finalize',
            O: ['mfaPendingCredential', 'phoneVerificationInfo'],
            A: ds,
            G: hs,
            B: !0,
            Na: !0,
          },
          Rs = { endpoint: 'getAccountInfo' },
          Ps = {
            endpoint: 'getOobConfirmationCode',
            O: ['requestType'],
            A: function (t) {
              if ('EMAIL_SIGNIN' != t.requestType) throw new S('internal-error');
              us(t);
            },
            Z: 'email',
            B: !0,
          },
          Ds = {
            endpoint: 'getOobConfirmationCode',
            O: ['idToken', 'requestType'],
            A: function (t) {
              if ('VERIFY_EMAIL' != t.requestType) throw new S('internal-error');
            },
            Z: 'email',
            B: !0,
          },
          Ls = {
            endpoint: 'getOobConfirmationCode',
            O: ['idToken', 'newEmail', 'requestType'],
            A: function (t) {
              if ('VERIFY_AND_CHANGE_EMAIL' != t.requestType) throw new S('internal-error');
            },
            Z: 'email',
            B: !0,
          },
          xs = {
            endpoint: 'getOobConfirmationCode',
            O: ['requestType'],
            A: function (t) {
              if ('PASSWORD_RESET' != t.requestType) throw new S('internal-error');
              us(t);
            },
            Z: 'email',
            B: !0,
          },
          Ms = { mb: !0, endpoint: 'getProjectConfig', Vb: 'GET' },
          js = {
            mb: !0,
            endpoint: 'getRecaptchaParam',
            Vb: 'GET',
            G: function (t) {
              if (!t.recaptchaSiteKey) throw new S('internal-error');
            },
          },
          Us = { endpoint: 'resetPassword', A: ws, Z: 'email', B: !0 },
          Vs = { endpoint: 'sendVerificationCode', O: ['phoneNumber', 'recaptchaToken'], Z: 'sessionInfo', B: !0 },
          Fs = { endpoint: 'setAccountInfo', O: ['idToken'], A: cs, V: !0 },
          Ks = {
            endpoint: 'setAccountInfo',
            O: ['idToken'],
            A: function (t) {
              if ((cs(t), !t.password)) throw new S('weak-password');
            },
            G: hs,
            V: !0,
          },
          qs = { endpoint: 'signupNewUser', G: hs, V: !0, B: !0 },
          Hs = {
            endpoint: 'accounts/mfaEnrollment:start',
            O: ['idToken', 'phoneEnrollmentInfo'],
            A: function (t) {
              if (!t.phoneEnrollmentInfo) throw new S('internal-error');
              if (!t.phoneEnrollmentInfo.phoneNumber) throw new S('missing-phone-number');
              if (!t.phoneEnrollmentInfo.recaptchaToken) throw new S('missing-app-credential');
            },
            G: function (t) {
              if (!t.phoneSessionInfo || !t.phoneSessionInfo.sessionInfo) throw new S('internal-error');
            },
            B: !0,
            Na: !0,
          },
          Gs = {
            endpoint: 'accounts/mfaSignIn:start',
            O: ['mfaPendingCredential', 'mfaEnrollmentId', 'phoneSignInInfo'],
            A: function (t) {
              if (!t.phoneSignInInfo || !t.phoneSignInInfo.recaptchaToken) throw new S('missing-app-credential');
            },
            G: function (t) {
              if (!t.phoneResponseInfo || !t.phoneResponseInfo.sessionInfo) throw new S('internal-error');
            },
            B: !0,
            Na: !0,
          },
          Bs = { endpoint: 'verifyAssertion', A: ps, Za: vs, G: ms, V: !0, B: !0 },
          Ws = {
            endpoint: 'verifyAssertion',
            A: ps,
            Za: vs,
            G: function (t) {
              if (t.errorMessage && 'USER_NOT_FOUND' == t.errorMessage) throw new S('user-not-found');
              if (t.errorMessage) throw nu(t.errorMessage);
              hs(t);
            },
            V: !0,
            B: !0,
          },
          Xs = {
            endpoint: 'verifyAssertion',
            A: function (t) {
              if ((ps(t), !t.idToken)) throw new S('internal-error');
            },
            Za: vs,
            G: ms,
            V: !0,
          },
          Js = {
            endpoint: 'verifyCustomToken',
            A: function (t) {
              if (!t.token) throw new S('invalid-custom-token');
            },
            G: hs,
            V: !0,
            B: !0,
          },
          Ys = {
            endpoint: 'verifyPassword',
            A: function (t) {
              if ((us(t), !t.password)) throw new S('wrong-password');
            },
            G: hs,
            V: !0,
            B: !0,
          },
          zs = { endpoint: 'verifyPhoneNumber', A: ls, G: hs, B: !0 },
          $s = {
            endpoint: 'verifyPhoneNumber',
            A: function (t) {
              if (!t.idToken) throw new S('internal-error');
              ls(t);
            },
            G: function (t) {
              if (t.temporaryProof) throw ((t.code = 'credential-already-in-use'), Xo(t));
              hs(t);
            },
          },
          Zs = { Ib: { USER_NOT_FOUND: 'user-not-found' }, endpoint: 'verifyPhoneNumber', A: ls, G: hs, B: !0 },
          Qs = {
            endpoint: 'accounts/mfaEnrollment:withdraw',
            O: ['idToken', 'mfaEnrollmentId'],
            G: function (t) {
              if (!!t[za] ^ !!t.refreshToken) throw new S('internal-error');
            },
            B: !0,
            Na: !0,
          };
        function tu(t, n, e) {
          if (
            !(function (t, n) {
              if (!n || !n.length) return !0;
              if (!t) return !1;
              for (var e = 0; e < n.length; e++) {
                var i = t[n[e]];
                if (null == i || '' === i) return !1;
              }
              return !0;
            })(e, n.O)
          )
            return On(new S('internal-error'));
          var i,
            r = !!n.Na,
            o = n.Vb || 'POST';
          return _n(e)
            .then(n.A)
            .then(function () {
              return (
                n.V && (e.returnSecureToken = !0),
                n.B && t.b && void 0 === e.tenantId && (e.tenantId = t.b),
                (function (t, n, e, i, r, o, a) {
                  var s = Ve(n + e);
                  je(s, 'key', t.c), a && je(s, 'cb', Date.now().toString());
                  var u = 'GET' == i;
                  if (u) for (var c in r) r.hasOwnProperty(c) && je(s, c, r[c]);
                  return new In(function (n, e) {
                    os(
                      t,
                      s.toString(),
                      function (t) {
                        t ? (t.error ? e(eu(t, o || {})) : n(t)) : e(new S('network-request-failed'));
                      },
                      i,
                      u ? void 0 : ii(ji(r)),
                      t.a,
                      t.v.get()
                    );
                  });
                })(t, r ? t.i : t.h, n.endpoint, o, e, n.Ib, n.mb || !1)
              );
            })
            .then(function (t) {
              return (i = t), n.Za ? n.Za(e, i) : i;
            })
            .then(n.G)
            .then(function () {
              if (!n.Z) return i;
              if (!(n.Z in i)) throw new S('internal-error');
              return i[n.Z];
            });
        }
        function nu(t) {
          return eu({ error: { errors: [{ message: t }], code: 400, message: t } });
        }
        function eu(t, n) {
          var e = ((t.error && t.error.errors && t.error.errors[0]) || {}).reason || '',
            i = { keyInvalid: 'invalid-api-key', ipRefererBlocked: 'app-not-authorized' };
          if ((e = i[e] ? new S(i[e]) : null)) return e;
          for (var r in ((e = (t.error && t.error.message) || ''),
          gt(
            (i = {
              INVALID_CUSTOM_TOKEN: 'invalid-custom-token',
              CREDENTIAL_MISMATCH: 'custom-token-mismatch',
              MISSING_CUSTOM_TOKEN: 'internal-error',
              INVALID_IDENTIFIER: 'invalid-email',
              MISSING_CONTINUE_URI: 'internal-error',
              INVALID_EMAIL: 'invalid-email',
              INVALID_PASSWORD: 'wrong-password',
              USER_DISABLED: 'user-disabled',
              MISSING_PASSWORD: 'internal-error',
              EMAIL_EXISTS: 'email-already-in-use',
              PASSWORD_LOGIN_DISABLED: 'operation-not-allowed',
              INVALID_IDP_RESPONSE: 'invalid-credential',
              INVALID_PENDING_TOKEN: 'invalid-credential',
              FEDERATED_USER_ID_ALREADY_LINKED: 'credential-already-in-use',
              MISSING_OR_INVALID_NONCE: 'missing-or-invalid-nonce',
              INVALID_MESSAGE_PAYLOAD: 'invalid-message-payload',
              INVALID_RECIPIENT_EMAIL: 'invalid-recipient-email',
              INVALID_SENDER: 'invalid-sender',
              EMAIL_NOT_FOUND: 'user-not-found',
              RESET_PASSWORD_EXCEED_LIMIT: 'too-many-requests',
              EXPIRED_OOB_CODE: 'expired-action-code',
              INVALID_OOB_CODE: 'invalid-action-code',
              MISSING_OOB_CODE: 'internal-error',
              INVALID_PROVIDER_ID: 'invalid-provider-id',
              CREDENTIAL_TOO_OLD_LOGIN_AGAIN: 'requires-recent-login',
              INVALID_ID_TOKEN: 'invalid-user-token',
              TOKEN_EXPIRED: 'user-token-expired',
              USER_NOT_FOUND: 'user-token-expired',
              CORS_UNSUPPORTED: 'cors-unsupported',
              DYNAMIC_LINK_NOT_ACTIVATED: 'dynamic-link-not-activated',
              INVALID_APP_ID: 'invalid-app-id',
              TOO_MANY_ATTEMPTS_TRY_LATER: 'too-many-requests',
              WEAK_PASSWORD: 'weak-password',
              OPERATION_NOT_ALLOWED: 'operation-not-allowed',
              USER_CANCELLED: 'user-cancelled',
              CAPTCHA_CHECK_FAILED: 'captcha-check-failed',
              INVALID_APP_CREDENTIAL: 'invalid-app-credential',
              INVALID_CODE: 'invalid-verification-code',
              INVALID_PHONE_NUMBER: 'invalid-phone-number',
              INVALID_SESSION_INFO: 'invalid-verification-id',
              INVALID_TEMPORARY_PROOF: 'invalid-credential',
              MISSING_APP_CREDENTIAL: 'missing-app-credential',
              MISSING_CODE: 'missing-verification-code',
              MISSING_PHONE_NUMBER: 'missing-phone-number',
              MISSING_SESSION_INFO: 'missing-verification-id',
              QUOTA_EXCEEDED: 'quota-exceeded',
              SESSION_EXPIRED: 'code-expired',
              REJECTED_CREDENTIAL: 'rejected-credential',
              INVALID_CONTINUE_URI: 'invalid-continue-uri',
              MISSING_ANDROID_PACKAGE_NAME: 'missing-android-pkg-name',
              MISSING_IOS_BUNDLE_ID: 'missing-ios-bundle-id',
              UNAUTHORIZED_DOMAIN: 'unauthorized-continue-uri',
              INVALID_DYNAMIC_LINK_DOMAIN: 'invalid-dynamic-link-domain',
              INVALID_OAUTH_CLIENT_ID: 'invalid-oauth-client-id',
              INVALID_CERT_HASH: 'invalid-cert-hash',
              UNSUPPORTED_TENANT_OPERATION: 'unsupported-tenant-operation',
              INVALID_TENANT_ID: 'invalid-tenant-id',
              TENANT_ID_MISMATCH: 'tenant-id-mismatch',
              ADMIN_ONLY_OPERATION: 'admin-restricted-operation',
              INVALID_MFA_PENDING_CREDENTIAL: 'invalid-multi-factor-session',
              MFA_ENROLLMENT_NOT_FOUND: 'multi-factor-info-not-found',
              MISSING_MFA_PENDING_CREDENTIAL: 'missing-multi-factor-session',
              MISSING_MFA_ENROLLMENT_ID: 'missing-multi-factor-info',
              EMAIL_CHANGE_NEEDS_VERIFICATION: 'email-change-needs-verification',
              SECOND_FACTOR_EXISTS: 'second-factor-already-in-use',
              SECOND_FACTOR_LIMIT_EXCEEDED: 'maximum-second-factor-count-exceeded',
              UNSUPPORTED_FIRST_FACTOR: 'unsupported-first-factor',
              UNVERIFIED_EMAIL: 'unverified-email',
            }),
            n || {}
          ),
          (n = (n = e.match(/^[^\s]+\s*:\s*([\s\S]*)$/)) && 1 < n.length ? n[1] : void 0),
          i))
            if (0 === e.indexOf(r)) return new S(i[r], n);
          return !n && t && (n = Mi(t)), new S('internal-error', n);
        }
        function iu(t) {
          (this.b = t),
            (this.a = null),
            (this.sb = (function (t) {
              return (
                su ||
                (su = new In(function (t, n) {
                  function e() {
                    Ki(),
                      Ci('gapi.load')('gapi.iframes', {
                        callback: t,
                        ontimeout: function () {
                          Ki(), n(Error('Network Error'));
                        },
                        timeout: ou.get(),
                      });
                  }
                  if (Ci('gapi.iframes.Iframe')) t();
                  else if (Ci('gapi.load')) e();
                  else {
                    var i = '__iframefcb' + Math.floor(1e6 * Math.random()).toString();
                    (s[i] = function () {
                      Ci('gapi.load') ? e() : n(Error('Network Error'));
                    }),
                      _n(Ka((i = Nt(ru, { onload: i })))).o(function () {
                        n(Error('Network Error'));
                      });
                  }
                }).o(function (t) {
                  throw ((su = null), t);
                }))
              ).then(function () {
                return new In(function (n, e) {
                  Ci('gapi.iframes.getContext')().open(
                    {
                      where: document.body,
                      url: t.b,
                      messageHandlersFilter: Ci('gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER'),
                      attributes: { style: { position: 'absolute', top: '-100px', width: '1px', height: '1px' } },
                      dontclear: !0,
                    },
                    function (i) {
                      function r() {
                        clearTimeout(o), n();
                      }
                      (t.a = i), t.a.restyle({ setHideOnLeave: !1 });
                      var o = setTimeout(function () {
                        e(Error('Network Error'));
                      }, au.get());
                      i.ping(r).then(r, function () {
                        e(Error('Network Error'));
                      });
                    }
                  );
                });
              });
            })(this));
        }
        var ru = new yt(Et, 'https://apis.google.com/js/api.js?onload=%{onload}'),
          ou = new qi(3e4, 6e4),
          au = new qi(5e3, 15e3),
          su = null;
        function uu(t, n, e, i) {
          (this.l = t),
            (this.h = n),
            (this.i = e),
            (this.g = i),
            (this.f = null),
            (t = this.g
              ? Fe((t = Ve(this.g.url)).c, t.a, t.g, '/emulator/auth/iframe')
              : Fe('https', this.l, null, '/__/auth/iframe')),
            (this.a = t),
            je(this.a, 'apiKey', this.h),
            je(this.a, 'appName', this.i),
            (this.b = null),
            (this.c = []);
        }
        function cu(t, n, e, i, r, o) {
          (this.u = t),
            (this.s = n),
            (this.c = e),
            (this.m = i),
            (this.v = o),
            (this.i = this.g = this.l = null),
            (this.a = r),
            (this.h = this.f = null);
        }
        function hu(t) {
          try {
            return i.a.app(t).auth().Ga();
          } catch (n) {
            return [];
          }
        }
        function lu(t, n, e, i, r, o) {
          (this.s = t),
            (this.g = n),
            (this.b = e),
            (this.f = o),
            (this.c = i || null),
            (this.i = r || null),
            (this.l = this.u = this.C = null),
            (this.h = []),
            (this.m = this.a = null);
        }
        function fu(t) {
          var n = hi();
          return (function (t) {
            return tu(t, Ms, {}).then(function (t) {
              return t.authorizedDomains || [];
            });
          })(t).then(function (t) {
            t: {
              var e = Ve(n),
                i = e.c;
              e = e.a;
              for (var r = 0; r < t.length; r++) {
                var o = t[r],
                  a = e,
                  s = i;
                if (
                  (0 == o.indexOf('chrome-extension://')
                    ? (a = Ve(o).a == a && 'chrome-extension' == s)
                    : 'http' != s && 'https' != s
                    ? (a = !1)
                    : mi.test(o)
                    ? (a = a == o)
                    : ((o = o.split('.').join('\\.')), (a = new RegExp('^(.+\\.' + o + '|' + o + ')$', 'i').test(a))),
                  a)
                ) {
                  t = !0;
                  break t;
                }
              }
              t = !1;
            }
            if (!t) throw new Bo(hi());
          });
        }
        function du(t) {
          return (
            t.m ||
              (t.m = bi().then(function () {
                if (!t.u) {
                  var n = t.c,
                    e = t.i,
                    i = hu(t.b),
                    r = new uu(t.s, t.g, t.b, t.f);
                  (r.f = n), (r.b = e), (r.c = Z(i || [])), (t.u = r.toString());
                }
                (t.v = new iu(t.u)),
                  (function (t) {
                    if (!t.v) throw Error('IfcHandler must be initialized!');
                    !(function (t, n) {
                      t.sb.then(function () {
                        t.a.register('authEvent', n, Ci('gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER'));
                      });
                    })(t.v, function (n) {
                      var e = {};
                      if (n && n.authEvent) {
                        var i = !1;
                        for (n = Ko(n.authEvent), e = 0; e < t.h.length; e++) i = t.h[e](n) || i;
                        return ((e = {}).status = i ? 'ACK' : 'ERROR'), _n(e);
                      }
                      return (e.status = 'ERROR'), _n(e);
                    });
                  })(t);
              })),
            t.m
          );
        }
        function pu(t) {
          return (
            t.l || ((t.C = t.c ? _i(t.c, hu(t.b)) : null), (t.l = new Ja(t.g, P(t.i), t.C)), t.f && es(t.l, t.f)), t.l
          );
        }
        function vu(t, n, e, i, r, o, a, s, u, c, h, l) {
          return (
            ((t = new cu(t, n, e, i, r, l)).l = o),
            (t.g = a),
            (t.i = s),
            (t.b = vt(u || null)),
            (t.f = c),
            t.zb(h).toString()
          );
        }
        function mu(t) {
          if (((this.a = t || (i.a.INTERNAL.reactNative && i.a.INTERNAL.reactNative.AsyncStorage)), !this.a))
            throw new S('internal-error', 'The React Native compatibility library was not found.');
          this.type = 'asyncStorage';
        }
        function gu(t) {
          (this.b = t), (this.a = {}), (this.f = I(this.c, this));
        }
        (uu.prototype.toString = function () {
          return (
            this.f ? je(this.a, 'v', this.f) : Ze(this.a.b, 'v'),
            this.b ? je(this.a, 'eid', this.b) : Ze(this.a.b, 'eid'),
            this.c.length ? je(this.a, 'fw', this.c.join(',')) : Ze(this.a.b, 'fw'),
            this.a.toString()
          );
        }),
          (cu.prototype.zb = function (t) {
            return (this.h = t), this;
          }),
          (cu.prototype.toString = function () {
            if (this.v) {
              var t = Ve(this.v.url);
              t = Fe(t.c, t.a, t.g, '/emulator/auth/handler');
            } else t = Fe('https', this.u, null, '/__/auth/handler');
            if (
              (je(t, 'apiKey', this.s), je(t, 'appName', this.c), je(t, 'authType', this.m), this.a.isOAuthProvider)
            ) {
              var n = this.a;
              try {
                var e = i.a.app(this.c).auth().la();
              } catch (u) {
                e = null;
              }
              for (var r in ((n.pb = e), je(t, 'providerId', this.a.providerId), (n = ji((e = this.a).Jb))))
                n[r] = n[r].toString();
              (r = e.Qc), (n = vt(n));
              for (var o = 0; o < r.length; o++) {
                var a = r[o];
                a in n && delete n[a];
              }
              e.qb && e.pb && !n[e.qb] && (n[e.qb] = e.pb), pt(n) || je(t, 'customParameters', Mi(n));
            }
            if (
              ('function' == typeof this.a.Rb && (e = this.a.Rb()).length && je(t, 'scopes', e.join(',')),
              this.l ? je(t, 'redirectUrl', this.l) : Ze(t.b, 'redirectUrl'),
              this.g ? je(t, 'eventId', this.g) : Ze(t.b, 'eventId'),
              this.i ? je(t, 'v', this.i) : Ze(t.b, 'v'),
              this.b)
            )
              for (var s in this.b) this.b.hasOwnProperty(s) && !Ue(t, s) && je(t, s, this.b[s]);
            return (
              this.h ? je(t, 'tid', this.h) : Ze(t.b, 'tid'),
              this.f ? je(t, 'eid', this.f) : Ze(t.b, 'eid'),
              (s = hu(this.c)).length && je(t, 'fw', s.join(',')),
              t.toString()
            );
          }),
          ((t = lu.prototype).Pb = function (t, n, e) {
            var i = new S('popup-closed-by-user'),
              r = new S('web-storage-unsupported'),
              o = this,
              a = !1;
            return this.ma()
              .then(function () {
                (function (t) {
                  var n = { type: 'webStorageSupport' };
                  return du(t)
                    .then(function () {
                      return (function (t, n) {
                        return t.sb.then(function () {
                          return new In(function (e) {
                            t.a.send(n.type, n, e, Ci('gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER'));
                          });
                        });
                      })(t.v, n);
                    })
                    .then(function (t) {
                      if (t && t.length && void 0 !== t[0].webStorageSupport) return t[0].webStorageSupport;
                      throw Error();
                    });
                })(o).then(function (e) {
                  e || (t && pi(t), n(r), (a = !0));
                });
              })
              .o(function () {})
              .then(function () {
                if (!a)
                  return (function (t) {
                    return new In(function (n) {
                      return (function e() {
                        Se(2e3).then(function () {
                          if (t && !t.closed) return e();
                          n();
                        });
                      })();
                    });
                  })(t);
              })
              .then(function () {
                if (!a)
                  return Se(e).then(function () {
                    n(i);
                  });
              });
          }),
          (t.Yb = function () {
            var t = Oi();
            return !xi(t) && !Fi(t);
          }),
          (t.Ub = function () {
            return !1;
          }),
          (t.Nb = function (t, n, e, i, r, o, a, s) {
            if (!t) return On(new S('popup-blocked'));
            if (a && !xi())
              return (
                this.ma().o(function (n) {
                  pi(t), r(n);
                }),
                i(),
                _n()
              );
            this.a || (this.a = fu(pu(this)));
            var u = this;
            return this.a
              .then(function () {
                var n = u.ma().o(function (n) {
                  throw (pi(t), r(n), n);
                });
                return i(), n;
              })
              .then(function () {
                Vo(e), a || li(vu(u.s, u.g, u.b, n, e, null, o, u.c, void 0, u.i, s, u.f), t);
              })
              .o(function (t) {
                throw ('auth/network-request-failed' == t.code && (u.a = null), t);
              });
          }),
          (t.Ob = function (t, n, e, i) {
            this.a || (this.a = fu(pu(this)));
            var r = this;
            return this.a
              .then(function () {
                Vo(n), li(vu(r.s, r.g, r.b, t, n, hi(), e, r.c, void 0, r.i, i, r.f));
              })
              .o(function (t) {
                throw ('auth/network-request-failed' == t.code && (r.a = null), t);
              });
          }),
          (t.ma = function () {
            var t = this;
            return du(this)
              .then(function () {
                return t.v.sb;
              })
              .o(function () {
                throw ((t.a = null), new S('network-request-failed'));
              });
          }),
          (t.ac = function () {
            return !0;
          }),
          (t.Ea = function (t) {
            this.h.push(t);
          }),
          (t.Ta = function (t) {
            z(this.h, function (n) {
              return n == t;
            });
          }),
          ((t = mu.prototype).get = function (t) {
            return _n(this.a.getItem(t)).then(function (t) {
              return t && Ui(t);
            });
          }),
          (t.set = function (t, n) {
            return _n(this.a.setItem(t, Mi(n)));
          }),
          (t.U = function (t) {
            return _n(this.a.removeItem(t));
          }),
          (t.ca = function () {}),
          (t.ia = function () {});
        var bu,
          yu = [];
        function wu(t, n, e) {
          pt(t.a) && t.b.addEventListener('message', t.f), void 0 === t.a[n] && (t.a[n] = []), t.a[n].push(e);
        }
        function Iu(t) {
          this.a = t;
        }
        function Tu(t) {
          (this.c = t), (this.b = !1), (this.a = []);
        }
        function Eu(t, n, e, i) {
          var r,
            o,
            a,
            s,
            u = e || {},
            c = null;
          if (t.b) return On(Error('connection_unavailable'));
          var h = i ? 800 : 50,
            l = 'undefined' != typeof MessageChannel ? new MessageChannel() : null;
          return new In(function (e, i) {
            l
              ? ((r = Math.floor(Math.random() * Math.pow(10, 20)).toString()),
                l.port1.start(),
                (a = setTimeout(function () {
                  i(Error('unsupported_event'));
                }, h)),
                t.a.push(
                  (c = {
                    messageChannel: l,
                    onMessage: (o = function (t) {
                      t.data.eventId === r &&
                        ('ack' === t.data.status
                          ? (clearTimeout(a),
                            (s = setTimeout(function () {
                              i(Error('timeout'));
                            }, 3e3)))
                          : 'done' === t.data.status
                          ? (clearTimeout(s),
                            void 0 !== t.data.response ? e(t.data.response) : i(Error('unknown_error')))
                          : (clearTimeout(a), clearTimeout(s), i(Error('invalid_response'))));
                    }),
                  })
                ),
                l.port1.addEventListener('message', o),
                t.c.postMessage({ eventType: n, eventId: r, data: u }, [l.port2]))
              : i(Error('connection_unavailable'));
          })
            .then(function (n) {
              return Au(t, c), n;
            })
            .o(function (n) {
              throw (Au(t, c), n);
            });
        }
        function Au(t, n) {
          if (n) {
            var e = n.messageChannel;
            e && (e.port1.removeEventListener('message', n.onMessage), e.port1.close()),
              z(t.a, function (t) {
                return t == n;
              });
          }
        }
        function ku() {
          if (!Ou()) throw new S('web-storage-unsupported');
          (this.c = {}),
            (this.a = []),
            (this.b = 0),
            (this.m = s.indexedDB),
            (this.type = 'indexedDB'),
            (this.g = this.v = this.f = this.l = null),
            (this.s = !1),
            (this.h = null);
          var t = this;
          Ii() && self
            ? ((this.v = (function () {
                var t = Ii() ? self : null;
                if (
                  (G(yu, function (e) {
                    e.b == t && (n = e);
                  }),
                  !n)
                ) {
                  var n = new gu(t);
                  yu.push(n);
                }
                return n;
              })()),
              wu(this.v, 'keyChanged', function (n, e) {
                return Lu(t).then(function (n) {
                  return (
                    0 < n.length &&
                      G(t.a, function (t) {
                        t(n);
                      }),
                    { keyProcessed: J(n, e.key) }
                  );
                });
              }),
              wu(this.v, 'ping', function () {
                return _n(['keyChanged']);
              }))
            : (function () {
                var t = s.navigator;
                return t && t.serviceWorker
                  ? _n()
                      .then(function () {
                        return t.serviceWorker.ready;
                      })
                      .then(function (t) {
                        return t.active || null;
                      })
                      .o(function () {
                        return null;
                      })
                  : _n(null);
              })().then(function (n) {
                (t.h = n) &&
                  ((t.g = new Tu(new Iu(n))),
                  Eu(t.g, 'ping', null, !0)
                    .then(function (n) {
                      n[0].fulfilled && J(n[0].value, 'keyChanged') && (t.s = !0);
                    })
                    .o(function () {}));
              });
        }
        function Su(t) {
          return new In(function (n, e) {
            var i = t.m.open('firebaseLocalStorageDb', 1);
            (i.onerror = function (t) {
              try {
                t.preventDefault();
              } catch (n) {}
              e(Error(t.target.error));
            }),
              (i.onupgradeneeded = function (t) {
                t = t.target.result;
                try {
                  t.createObjectStore('firebaseLocalStorage', { keyPath: 'fbase_key' });
                } catch (n) {
                  e(n);
                }
              }),
              (i.onsuccess = function (i) {
                (i = i.target.result).objectStoreNames.contains('firebaseLocalStorage')
                  ? n(i)
                  : (function (t) {
                      return new In(function (n, e) {
                        var i = t.m.deleteDatabase('firebaseLocalStorageDb');
                        (i.onsuccess = function () {
                          n();
                        }),
                          (i.onerror = function (t) {
                            e(Error(t.target.error));
                          });
                      });
                    })(t)
                      .then(function () {
                        return Su(t);
                      })
                      .then(function (t) {
                        n(t);
                      })
                      .o(function (t) {
                        e(t);
                      });
              });
          });
        }
        function Nu(t) {
          return t.i || (t.i = Su(t)), t.i;
        }
        function _u(t, n) {
          var e = 0;
          return new In(function i(r, o) {
            Nu(t)
              .then(n)
              .then(r)
              .o(function (n) {
                if (!(3 < ++e))
                  return Nu(t)
                    .then(function (n) {
                      return n.close(), (t.i = void 0), i(r, o);
                    })
                    .o(function (t) {
                      o(t);
                    });
                o(n);
              });
          });
        }
        function Ou() {
          try {
            return !!s.indexedDB;
          } catch (Xt) {
            return !1;
          }
        }
        function Cu(t) {
          return t.objectStore('firebaseLocalStorage');
        }
        function Ru(t, n) {
          return t.transaction(['firebaseLocalStorage'], n ? 'readwrite' : 'readonly');
        }
        function Pu(t) {
          return new In(function (n, e) {
            (t.onsuccess = function (t) {
              t && t.target ? n(t.target.result) : n();
            }),
              (t.onerror = function (t) {
                e(t.target.error);
              });
          });
        }
        function Du(t, n) {
          return t.g &&
            t.h &&
            (function () {
              var t = s.navigator;
              return (t && t.serviceWorker && t.serviceWorker.controller) || null;
            })() === t.h
            ? Eu(t.g, 'keyChanged', { key: n }, t.s)
                .then(function () {})
                .o(function () {})
            : _n();
        }
        function Lu(t) {
          return Nu(t)
            .then(function (t) {
              var n = Cu(Ru(t, !1));
              return n.getAll
                ? Pu(n.getAll())
                : new In(function (t, e) {
                    var i = [],
                      r = n.openCursor();
                    (r.onsuccess = function (n) {
                      (n = n.target.result) ? (i.push(n.value), n.continue()) : t(i);
                    }),
                      (r.onerror = function (t) {
                        e(t.target.error);
                      });
                  });
            })
            .then(function (n) {
              var e = {},
                i = [];
              if (0 == t.b) {
                for (i = 0; i < n.length; i++) e[n[i].fbase_key] = n[i].value;
                (i = fi(t.c, e)), (t.c = e);
              }
              return i;
            });
        }
        function xu(t) {
          t.l && t.l.cancel('STOP_EVENT'), t.f && (clearTimeout(t.f), (t.f = null));
        }
        function Mu(t) {
          var n = this,
            e = null;
          (this.a = []),
            (this.type = 'indexedDB'),
            (this.c = t),
            (this.b = _n()
              .then(function () {
                if (Ou()) {
                  var t = Vi(),
                    i = '__sak' + t;
                  return (
                    bu || (bu = new ku()),
                    (e = bu)
                      .set(i, t)
                      .then(function () {
                        return e.get(i);
                      })
                      .then(function (n) {
                        if (n !== t) throw Error('indexedDB not supported!');
                        return e.U(i);
                      })
                      .then(function () {
                        return e;
                      })
                      .o(function () {
                        return n.c;
                      })
                  );
                }
                return n.c;
              })
              .then(function (t) {
                return (
                  (n.type = t.type),
                  t.ca(function (t) {
                    G(n.a, function (n) {
                      n(t);
                    });
                  }),
                  t
                );
              }));
        }
        function ju() {
          (this.a = {}), (this.type = 'inMemory');
        }
        function Uu() {
          if (
            !(function () {
              var t = 'Node' == Ti();
              if (!(t = Vu() || (t && i.a.INTERNAL.node && i.a.INTERNAL.node.localStorage))) return !1;
              try {
                return t.setItem('__sak', '1'), t.removeItem('__sak'), !0;
              } catch (n) {
                return !1;
              }
            })()
          ) {
            if ('Node' == Ti()) throw new S('internal-error', 'The LocalStorage compatibility library was not found.');
            throw new S('web-storage-unsupported');
          }
          (this.a = Vu() || i.a.INTERNAL.node.localStorage), (this.type = 'localStorage');
        }
        function Vu() {
          try {
            var t = s.localStorage,
              n = Vi();
            return t && (t.setItem(n, '1'), t.removeItem(n)), t;
          } catch (e) {
            return null;
          }
        }
        function Fu() {
          this.type = 'nullStorage';
        }
        function Ku() {
          if (
            !(function () {
              var t = 'Node' == Ti();
              if (!(t = qu() || (t && i.a.INTERNAL.node && i.a.INTERNAL.node.sessionStorage))) return !1;
              try {
                return t.setItem('__sak', '1'), t.removeItem('__sak'), !0;
              } catch (n) {
                return !1;
              }
            })()
          ) {
            if ('Node' == Ti())
              throw new S('internal-error', 'The SessionStorage compatibility library was not found.');
            throw new S('web-storage-unsupported');
          }
          (this.a = qu() || i.a.INTERNAL.node.sessionStorage), (this.type = 'sessionStorage');
        }
        function qu() {
          try {
            var t = s.sessionStorage,
              n = Vi();
            return t && (t.setItem(n, '1'), t.removeItem(n)), t;
          } catch (e) {
            return null;
          }
        }
        function Hu() {
          var t = {};
          (t.Browser = Wu), (t.Node = Xu), (t.ReactNative = Ju), (t.Worker = Yu), (this.a = t[Ti()]);
        }
        (gu.prototype.c = function (t) {
          var n = t.data.eventType,
            e = t.data.eventId,
            i = this.a[n];
          if (i && 0 < i.length) {
            t.ports[0].postMessage({ status: 'ack', eventId: e, eventType: n, response: null });
            var r = [];
            G(i, function (n) {
              r.push(
                _n().then(function () {
                  return n(t.origin, t.data.data);
                })
              );
            }),
              Rn(r).then(function (i) {
                var r = [];
                G(i, function (t) {
                  r.push({ fulfilled: t.Qb, value: t.value, reason: t.reason ? t.reason.message : void 0 });
                }),
                  G(r, function (t) {
                    for (var n in t) void 0 === t[n] && delete t[n];
                  }),
                  t.ports[0].postMessage({ status: 'done', eventId: e, eventType: n, response: r });
              });
          }
        }),
          (Iu.prototype.postMessage = function (t, n) {
            this.a.postMessage(t, n);
          }),
          (Tu.prototype.close = function () {
            for (; 0 < this.a.length; ) Au(this, this.a[0]);
            this.b = !0;
          }),
          ((t = ku.prototype).set = function (t, n) {
            var e = this,
              i = !1;
            return _u(this, function (n) {
              return Pu((n = Cu(Ru(n, !0))).get(t));
            })
              .then(function (r) {
                return _u(e, function (o) {
                  if (((o = Cu(Ru(o, !0))), r)) return (r.value = n), Pu(o.put(r));
                  e.b++, (i = !0);
                  var a = {};
                  return (a.fbase_key = t), (a.value = n), Pu(o.add(a));
                });
              })
              .then(function () {
                return (e.c[t] = n), Du(e, t);
              })
              .oa(function () {
                i && e.b--;
              });
          }),
          (t.get = function (t) {
            return _u(this, function (n) {
              return Pu(Cu(Ru(n, !1)).get(t));
            }).then(function (t) {
              return t && t.value;
            });
          }),
          (t.U = function (t) {
            var n = this,
              e = !1;
            return _u(this, function (i) {
              return (e = !0), n.b++, Pu(Cu(Ru(i, !0)).delete(t));
            })
              .then(function () {
                return delete n.c[t], Du(n, t);
              })
              .oa(function () {
                e && n.b--;
              });
          }),
          (t.ca = function (t) {
            0 == this.a.length &&
              (function (t) {
                xu(t),
                  (function n() {
                    t.f = setTimeout(function () {
                      t.l = Lu(t)
                        .then(function (n) {
                          0 < n.length &&
                            G(t.a, function (t) {
                              t(n);
                            });
                        })
                        .then(function () {
                          n();
                        })
                        .o(function (t) {
                          'STOP_EVENT' != t.message && n();
                        });
                    }, 800);
                  })();
              })(this),
              this.a.push(t);
          }),
          (t.ia = function (t) {
            z(this.a, function (n) {
              return n == t;
            }),
              0 == this.a.length && xu(this);
          }),
          ((t = Mu.prototype).get = function (t) {
            return this.b.then(function (n) {
              return n.get(t);
            });
          }),
          (t.set = function (t, n) {
            return this.b.then(function (e) {
              return e.set(t, n);
            });
          }),
          (t.U = function (t) {
            return this.b.then(function (n) {
              return n.U(t);
            });
          }),
          (t.ca = function (t) {
            this.a.push(t);
          }),
          (t.ia = function (t) {
            z(this.a, function (n) {
              return n == t;
            });
          }),
          ((t = ju.prototype).get = function (t) {
            return _n(this.a[t]);
          }),
          (t.set = function (t, n) {
            return (this.a[t] = n), _n();
          }),
          (t.U = function (t) {
            return delete this.a[t], _n();
          }),
          (t.ca = function () {}),
          (t.ia = function () {}),
          ((t = Uu.prototype).get = function (t) {
            var n = this;
            return _n().then(function () {
              return Ui(n.a.getItem(t));
            });
          }),
          (t.set = function (t, n) {
            var e = this;
            return _n().then(function () {
              var i = Mi(n);
              null === i ? e.U(t) : e.a.setItem(t, i);
            });
          }),
          (t.U = function (t) {
            var n = this;
            return _n().then(function () {
              n.a.removeItem(t);
            });
          }),
          (t.ca = function (t) {
            s.window && ce(s.window, 'storage', t);
          }),
          (t.ia = function (t) {
            s.window && fe(s.window, 'storage', t);
          }),
          ((t = Fu.prototype).get = function () {
            return _n(null);
          }),
          (t.set = function () {
            return _n();
          }),
          (t.U = function () {
            return _n();
          }),
          (t.ca = function () {}),
          (t.ia = function () {}),
          ((t = Ku.prototype).get = function (t) {
            var n = this;
            return _n().then(function () {
              return Ui(n.a.getItem(t));
            });
          }),
          (t.set = function (t, n) {
            var e = this;
            return _n().then(function () {
              var i = Mi(n);
              null === i ? e.U(t) : e.a.setItem(t, i);
            });
          }),
          (t.U = function (t) {
            var n = this;
            return _n().then(function () {
              n.a.removeItem(t);
            });
          }),
          (t.ca = function () {}),
          (t.ia = function () {});
        var Gu,
          Bu,
          Wu = { F: Uu, cb: Ku },
          Xu = { F: Uu, cb: Ku },
          Ju = { F: mu, cb: Fu },
          Yu = { F: Uu, cb: Fu },
          zu = { rd: 'local', NONE: 'none', td: 'session' };
        function $u() {
          var t = !(Fi(Oi()) || !wi()),
            n = xi(),
            e = Ri();
          (this.m = t), (this.h = n), (this.l = e), (this.a = {}), Gu || (Gu = new Hu()), (t = Gu);
          try {
            this.g = (!ci() && Bi()) || !s.indexedDB ? new t.a.F() : new Mu(Ii() ? new ju() : new t.a.F());
          } catch (i) {
            (this.g = new ju()), (this.h = !0);
          }
          try {
            this.i = new t.a.cb();
          } catch (i) {
            this.i = new ju();
          }
          (this.v = new ju()), (this.f = I(this.Zb, this)), (this.b = {});
        }
        function Zu() {
          return Bu || (Bu = new $u()), Bu;
        }
        function Qu(t, n) {
          switch (n) {
            case 'session':
              return t.i;
            case 'none':
              return t.v;
            default:
              return t.g;
          }
        }
        function tc(t, n) {
          return 'firebase:' + t.name + (n ? ':' + n : '');
        }
        function nc(t, n, e) {
          return (e = tc(n, e)), 'local' == n.F && (t.b[e] = null), Qu(t, n.F).U(e);
        }
        function ec(t) {
          t.c && (clearInterval(t.c), (t.c = null));
        }
        function ic(t) {
          (this.a = t), (this.b = Zu());
        }
        ((t = $u.prototype).get = function (t, n) {
          return Qu(this, t.F).get(tc(t, n));
        }),
          (t.set = function (t, n, e) {
            var i = tc(t, e),
              r = this,
              o = Qu(this, t.F);
            return o
              .set(i, n)
              .then(function () {
                return o.get(i);
              })
              .then(function (n) {
                'local' == t.F && (r.b[i] = n);
              });
          }),
          (t.addListener = function (t, n, e) {
            (t = tc(t, n)),
              this.l && (this.b[t] = s.localStorage.getItem(t)),
              pt(this.a) &&
                (Qu(this, 'local').ca(this.f),
                this.h ||
                  ((ci() || !Bi()) && s.indexedDB) ||
                  !this.l ||
                  (function (t) {
                    ec(t),
                      (t.c = setInterval(function () {
                        for (var n in t.a) {
                          var e = s.localStorage.getItem(n),
                            i = t.b[n];
                          e != i &&
                            ((t.b[n] = e),
                            (e = new Zn({ type: 'storage', key: n, target: window, oldValue: i, newValue: e, a: !0 })),
                            t.Zb(e));
                        }
                      }, 1e3));
                  })(this)),
              this.a[t] || (this.a[t] = []),
              this.a[t].push(e);
          }),
          (t.removeListener = function (t, n, e) {
            (t = tc(t, n)),
              this.a[t] &&
                (z(this.a[t], function (t) {
                  return t == e;
                }),
                0 == this.a[t].length && delete this.a[t]),
              pt(this.a) && (Qu(this, 'local').ia(this.f), ec(this));
          }),
          (t.Zb = function (t) {
            if (t && t.g) {
              var n = t.a.key;
              if (null == n)
                for (var e in this.a) {
                  var i = this.b[e];
                  void 0 === i && (i = null);
                  var r = s.localStorage.getItem(e);
                  r !== i && ((this.b[e] = r), this.nb(e));
                }
              else if (0 == n.indexOf('firebase:') && this.a[n]) {
                if ((void 0 !== t.a.a ? Qu(this, 'local').ia(this.f) : ec(this), this.m))
                  if (((e = s.localStorage.getItem(n)), (i = t.a.newValue) !== e))
                    null !== i ? s.localStorage.setItem(n, i) : s.localStorage.removeItem(n);
                  else if (this.b[n] === i && void 0 === t.a.a) return;
                var o = this;
                (e = function () {
                  (void 0 === t.a.a && o.b[n] === s.localStorage.getItem(n)) ||
                    ((o.b[n] = s.localStorage.getItem(n)), o.nb(n));
                }),
                  Yt && sn && 10 == sn && s.localStorage.getItem(n) !== t.a.newValue && t.a.newValue !== t.a.oldValue
                    ? setTimeout(e, 10)
                    : e();
              }
            } else G(t, I(this.nb, this));
          }),
          (t.nb = function (t) {
            this.a[t] &&
              G(this.a[t], function (t) {
                t();
              });
          });
        var rc,
          oc = { name: 'authEvent', F: 'local' };
        function ac() {
          this.a = Zu();
        }
        function sc(t, n) {
          (this.b = uc),
            (this.f = s.Uint8Array ? new Uint8Array(this.b) : Array(this.b)),
            (this.g = this.c = 0),
            (this.a = []),
            (this.i = t),
            (this.h = n),
            (this.l = s.Int32Array ? new Int32Array(64) : Array(64)),
            void 0 === rc && (rc = s.Int32Array ? new Int32Array(vc) : vc),
            this.reset();
        }
        A(sc, function () {
          this.b = -1;
        });
        for (var uc = 64, cc = uc - 1, hc = [], lc = 0; lc < cc; lc++) hc[lc] = 0;
        var fc = $(128, hc);
        function dc(t) {
          for (var n = t.f, e = t.l, i = 0, r = 0; r < n.length; )
            (e[i++] = (n[r] << 24) | (n[r + 1] << 16) | (n[r + 2] << 8) | n[r + 3]), (r = 4 * i);
          for (n = 16; 64 > n; n++) {
            var o =
                ((0 | e[n - 16]) + ((((r = 0 | e[n - 15]) >>> 7) | (r << 25)) ^ ((r >>> 18) | (r << 14)) ^ (r >>> 3))) |
                0,
              a =
                ((0 | e[n - 7]) + ((((i = 0 | e[n - 2]) >>> 17) | (i << 15)) ^ ((i >>> 19) | (i << 13)) ^ (i >>> 10))) |
                0;
            e[n] = (o + a) | 0;
          }
          (i = 0 | t.a[0]), (r = 0 | t.a[1]);
          var s = 0 | t.a[2],
            u = 0 | t.a[3],
            c = 0 | t.a[4],
            h = 0 | t.a[5],
            l = 0 | t.a[6];
          for (o = 0 | t.a[7], n = 0; 64 > n; n++) {
            var f =
              ((((i >>> 2) | (i << 30)) ^ ((i >>> 13) | (i << 19)) ^ ((i >>> 22) | (i << 10))) +
                ((i & r) ^ (i & s) ^ (r & s))) |
              0;
            (a =
              ((o = (o + (((c >>> 6) | (c << 26)) ^ ((c >>> 11) | (c << 21)) ^ ((c >>> 25) | (c << 7)))) | 0) +
                (((a = ((a = (c & h) ^ (~c & l)) + (0 | rc[n])) | 0) + (0 | e[n])) | 0)) |
              0),
              (o = l),
              (l = h),
              (h = c),
              (c = (u + a) | 0),
              (u = s),
              (s = r),
              (r = i),
              (i = (a + f) | 0);
          }
          (t.a[0] = (t.a[0] + i) | 0),
            (t.a[1] = (t.a[1] + r) | 0),
            (t.a[2] = (t.a[2] + s) | 0),
            (t.a[3] = (t.a[3] + u) | 0),
            (t.a[4] = (t.a[4] + c) | 0),
            (t.a[5] = (t.a[5] + h) | 0),
            (t.a[6] = (t.a[6] + l) | 0),
            (t.a[7] = (t.a[7] + o) | 0);
        }
        function pc(t, n, e) {
          void 0 === e && (e = n.length);
          var i = 0,
            r = t.c;
          if ('string' == typeof n) for (; i < e; ) (t.f[r++] = n.charCodeAt(i++)), r == t.b && (dc(t), (r = 0));
          else {
            if (!d(n)) throw Error('message must be string or array');
            for (; i < e; ) {
              var o = n[i++];
              if (!('number' == typeof o && 0 <= o && 255 >= o && o == (0 | o)))
                throw Error('message must be a byte array');
              (t.f[r++] = o), r == t.b && (dc(t), (r = 0));
            }
          }
          (t.c = r), (t.g += e);
        }
        sc.prototype.reset = function () {
          (this.g = this.c = 0), (this.a = s.Int32Array ? new Int32Array(this.h) : Z(this.h));
        };
        var vc = [
          1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080,
          310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774,
          264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808,
          3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291,
          1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817,
          3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218,
          1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479,
          3329325298,
        ];
        function mc() {
          sc.call(this, 8, gc);
        }
        A(mc, sc);
        var gc = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225];
        function bc(t, n, e, i, r, o) {
          (this.v = t),
            (this.i = n),
            (this.l = e),
            (this.m = i || null),
            (this.u = r || null),
            (this.s = o),
            (this.h = n + ':' + e),
            (this.C = new ac()),
            (this.g = new ic(this.h)),
            (this.f = null),
            (this.b = []),
            (this.a = this.c = null);
        }
        function yc(t) {
          return new S('invalid-cordova-configuration', t);
        }
        function wc(t, n) {
          for (var e = 0; e < t.b.length; e++)
            try {
              t.b[e](n);
            } catch (i) {}
        }
        function Ic(t) {
          return (
            t.f ||
              (t.f = t.ma().then(function () {
                return new In(function (n) {
                  t.Ea(function e(i) {
                    return n(i), t.Ta(e), !1;
                  }),
                    (function (t) {
                      function n(n) {
                        (i = !0),
                          r && r.cancel(),
                          Tc(t).then(function (i) {
                            var r = e;
                            if (i && n && n.url) {
                              var o = null;
                              -1 != (r = ro(n.url)).indexOf('/__/auth/callback') &&
                                (o = (o =
                                  'object' == typeof (o = Ui(Ue((o = Ve(r)), 'firebaseError') || null)) ? N(o) : null)
                                  ? new Fo(i.c, i.b, null, null, o, null, i.T())
                                  : new Fo(i.c, i.b, r, i.f, null, null, i.T())),
                                (r = o || e);
                            }
                            wc(t, r);
                          });
                      }
                      var e = new Fo('unknown', null, null, null, new S('no-auth-event')),
                        i = !1,
                        r = Se(500).then(function () {
                          return Tc(t).then(function () {
                            i || wc(t, e);
                          });
                        }),
                        o = s.handleOpenURL;
                      (s.handleOpenURL = function (t) {
                        if (
                          (0 == t.toLowerCase().indexOf(Ci('BuildInfo.packageName', s).toLowerCase() + '://') &&
                            n({ url: t }),
                          'function' == typeof o)
                        )
                          try {
                            o(t);
                          } catch (e) {
                            console.error(e);
                          }
                      }),
                        Go || (Go = new qo()),
                        (function (t) {
                          var n = Go;
                          n.a.push(t),
                            n.b ||
                              ((n.b = function (t) {
                                for (var e = 0; e < n.a.length; e++) n.a[e](t);
                              }),
                              'function' == typeof (t = Ci('universalLinks.subscribe', s)) && t(null, n.b));
                        })(n);
                    })(t);
                });
              })),
            t.f
          );
        }
        function Tc(t) {
          var n = null;
          return (function (t) {
            return t.b.get(oc, t.a).then(function (t) {
              return Ko(t);
            });
          })(t.g)
            .then(function (e) {
              return (n = e), nc((e = t.g).b, oc, e.a);
            })
            .then(function () {
              return n;
            });
        }
        function Ec(t) {
          (this.a = t), (this.b = Zu());
        }
        ((t = bc.prototype).ma = function () {
          return this.Ia
            ? this.Ia
            : (this.Ia = (
                yi(void 0)
                  ? bi().then(function () {
                      return new In(function (t, n) {
                        var e = s.document,
                          i = setTimeout(function () {
                            n(Error('Cordova framework is not ready.'));
                          }, 1e3);
                        e.addEventListener(
                          'deviceready',
                          function () {
                            clearTimeout(i), t();
                          },
                          !1
                        );
                      });
                    })
                  : On(Error('Cordova must run in an Android or iOS file scheme.'))
              ).then(
                function () {
                  if ('function' != typeof Ci('universalLinks.subscribe', s))
                    throw yc('cordova-universal-links-plugin-fix is not installed');
                  if (void 0 === Ci('BuildInfo.packageName', s)) throw yc('cordova-plugin-buildinfo is not installed');
                  if ('function' != typeof Ci('cordova.plugins.browsertab.openUrl', s))
                    throw yc('cordova-plugin-browsertab is not installed');
                  if ('function' != typeof Ci('cordova.InAppBrowser.open', s))
                    throw yc('cordova-plugin-inappbrowser is not installed');
                },
                function () {
                  throw new S('cordova-not-ready');
                }
              ));
        }),
          (t.Pb = function (t, n) {
            return n(new S('operation-not-supported-in-this-environment')), _n();
          }),
          (t.Nb = function () {
            return On(new S('operation-not-supported-in-this-environment'));
          }),
          (t.ac = function () {
            return !1;
          }),
          (t.Yb = function () {
            return !0;
          }),
          (t.Ub = function () {
            return !0;
          }),
          (t.Ob = function (t, n, e, i) {
            if (this.c) return On(new S('redirect-operation-pending'));
            var r = this,
              o = s.document,
              a = null,
              u = null,
              c = null,
              h = null;
            return (this.c = _n()
              .then(function () {
                return Vo(n), Ic(r);
              })
              .then(function () {
                return (function (t, n, e, i, r) {
                  var o = (function () {
                      for (var t = 20, n = []; 0 < t; )
                        n.push(
                          '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.charAt(
                            Math.floor(62 * Math.random())
                          )
                        ),
                          t--;
                      return n.join('');
                    })(),
                    a = new Fo(n, i, null, o, new S('no-auth-event'), null, r),
                    u = Ci('BuildInfo.packageName', s);
                  if ('string' != typeof u) throw new S('invalid-cordova-configuration');
                  var c = Ci('BuildInfo.displayName', s),
                    h = {};
                  if (
                    Oi()
                      .toLowerCase()
                      .match(/iphone|ipad|ipod/)
                  )
                    h.ibi = u;
                  else {
                    if (
                      !Oi()
                        .toLowerCase()
                        .match(/android/)
                    )
                      return On(new S('operation-not-supported-in-this-environment'));
                    h.apn = u;
                  }
                  c && (h.appDisplayName = c),
                    (o = (function (t) {
                      var n = new mc();
                      pc(n, t), (t = []);
                      var e = 8 * n.g;
                      pc(n, fc, 56 > n.c ? 56 - n.c : n.b - (n.c - 56));
                      for (var i = 63; 56 <= i; i--) (n.f[i] = 255 & e), (e /= 256);
                      for (dc(n), i = e = 0; i < n.i; i++)
                        for (var r = 24; 0 <= r; r -= 8) t[e++] = (n.a[i] >> r) & 255;
                      return (function (t) {
                        return W(t, function (t) {
                          return 1 < (t = t.toString(16)).length ? t : '0' + t;
                        }).join('');
                      })(t);
                    })(o)),
                    (h.sessionId = o);
                  var l = vu(t.v, t.i, t.l, n, e, null, i, t.m, h, t.u, r, t.s);
                  return t
                    .ma()
                    .then(function () {
                      var n = t.h;
                      return t.C.a.set(oc, a.w(), n);
                    })
                    .then(function () {
                      var n = Ci('cordova.plugins.browsertab.isAvailable', s);
                      if ('function' != typeof n) throw new S('invalid-cordova-configuration');
                      var e = null;
                      n(function (n) {
                        if (n) {
                          if ('function' != typeof (e = Ci('cordova.plugins.browsertab.openUrl', s)))
                            throw new S('invalid-cordova-configuration');
                          e(l);
                        } else {
                          if ('function' != typeof (e = Ci('cordova.InAppBrowser.open', s)))
                            throw new S('invalid-cordova-configuration');
                          (n = Oi()),
                            (t.a = e(
                              l,
                              n.match(/(iPad|iPhone|iPod).*OS 7_\d/i) || n.match(/(iPad|iPhone|iPod).*OS 8_\d/i)
                                ? '_blank'
                                : '_system',
                              'location=yes'
                            ));
                        }
                      });
                    });
                })(r, t, n, e, i);
              })
              .then(function () {
                return new In(function (t, n) {
                  (u = function () {
                    var n = Ci('cordova.plugins.browsertab.close', s);
                    return (
                      t(),
                      'function' == typeof n && n(),
                      r.a && 'function' == typeof r.a.close && (r.a.close(), (r.a = null)),
                      !1
                    );
                  }),
                    r.Ea(u),
                    (h = function () {
                      Hi() && c();
                    }),
                    o.addEventListener(
                      'resume',
                      (c = function () {
                        a ||
                          (a = Se(2e3).then(function () {
                            n(new S('redirect-cancelled-by-user'));
                          }));
                      }),
                      !1
                    ),
                    Oi()
                      .toLowerCase()
                      .match(/android/) || o.addEventListener('visibilitychange', h, !1);
                }).o(function (t) {
                  return Tc(r).then(function () {
                    throw t;
                  });
                });
              })
              .oa(function () {
                c && o.removeEventListener('resume', c, !1),
                  h && o.removeEventListener('visibilitychange', h, !1),
                  a && a.cancel(),
                  u && r.Ta(u),
                  (r.c = null);
              }));
          }),
          (t.Ea = function (t) {
            this.b.push(t),
              Ic(this).o(function (n) {
                'auth/invalid-cordova-configuration' === n.code &&
                  ((n = new Fo('unknown', null, null, null, new S('no-auth-event'))), t(n));
              });
          }),
          (t.Ta = function (t) {
            z(this.b, function (n) {
              return n == t;
            });
          });
        var Ac = { name: 'pendingRedirect', F: 'session' };
        function kc(t) {
          return nc(t.b, Ac, t.a);
        }
        function Sc(t, n, e, i) {
          (this.i = {}),
            (this.u = 0),
            (this.D = t),
            (this.v = n),
            (this.m = e),
            (this.J = i),
            (this.h = []),
            (this.f = !1),
            (this.l = I(this.s, this)),
            (this.b = new Kc()),
            (this.C = new Wc()),
            (this.g = new Ec(Vc(this.v, this.m))),
            (this.c = {}),
            (this.c.unknown = this.b),
            (this.c.signInViaRedirect = this.b),
            (this.c.linkViaRedirect = this.b),
            (this.c.reauthViaRedirect = this.b),
            (this.c.signInViaPopup = this.C),
            (this.c.linkViaPopup = this.C),
            (this.c.reauthViaPopup = this.C),
            (this.a = Nc(this.D, this.v, this.m, _, this.J));
        }
        function Nc(t, n, e, r, o) {
          var a = i.a.SDK_VERSION || null;
          return yi() ? new bc(t, n, e, a, r, o) : new lu(t, n, e, a, r, o);
        }
        function _c(t) {
          t.f || ((t.f = !0), t.a.Ea(t.l));
          var n = t.a;
          return t.a.ma().o(function (e) {
            throw (t.a == n && t.reset(), e);
          });
        }
        function Oc(t) {
          t.a.Yb() &&
            _c(t).o(function (n) {
              var e = new Fo('unknown', null, null, null, new S('operation-not-supported-in-this-environment'));
              xc(n) && t.s(e);
            }),
            t.a.Ub() || qc(t.b);
        }
        function Cc(t, n) {
          J(t.h, n) || t.h.push(n),
            t.f ||
              (function (t) {
                return t.b.get(Ac, t.a).then(function (t) {
                  return 'pending' == t;
                });
              })(t.g)
                .then(function (n) {
                  n
                    ? kc(t.g).then(function () {
                        _c(t).o(function (n) {
                          var e = new Fo(
                            'unknown',
                            null,
                            null,
                            null,
                            new S('operation-not-supported-in-this-environment')
                          );
                          xc(n) && t.s(e);
                        });
                      })
                    : Oc(t);
                })
                .o(function () {
                  Oc(t);
                });
        }
        function Rc(t, n) {
          z(t.h, function (t) {
            return t == n;
          });
        }
        (Sc.prototype.reset = function () {
          (this.f = !1), this.a.Ta(this.l), (this.a = Nc(this.D, this.v, this.m, null, this.J)), (this.i = {});
        }),
          (Sc.prototype.s = function (t) {
            if (!t) throw new S('invalid-auth-event');
            if (
              (6e5 <= Date.now() - this.u && ((this.i = {}), (this.u = 0)),
              t && t.getUid() && this.i.hasOwnProperty(t.getUid()))
            )
              return !1;
            for (var n = !1, e = 0; e < this.h.length; e++) {
              var i = this.h[e];
              if (i.Gb(t.c, t.b)) {
                (n = this.c[t.c]) &&
                  (n.h(t, i), t && (t.f || t.b) && ((this.i[t.getUid()] = !0), (this.u = Date.now()))),
                  (n = !0);
                break;
              }
            }
            return qc(this.b), n;
          });
        var Pc = new qi(2e3, 1e4),
          Dc = new qi(3e4, 6e4);
        function Lc(t, n, e, i, r, o, a) {
          return t.a.Nb(
            n,
            e,
            i,
            function () {
              t.f || ((t.f = !0), t.a.Ea(t.l));
            },
            function () {
              t.reset();
            },
            r,
            o,
            a
          );
        }
        function xc(t) {
          return !(!t || 'auth/cordova-not-ready' != t.code);
        }
        function Mc(t, n, e, i, r) {
          var o;
          return (function (t) {
            return t.b.set(Ac, 'pending', t.a);
          })(t.g).then(function () {
            return t.a
              .Ob(n, e, i, r)
              .o(function (n) {
                if (xc(n)) throw new S('operation-not-supported-in-this-environment');
                return (
                  (o = n),
                  kc(t.g).then(function () {
                    throw o;
                  })
                );
              })
              .then(function () {
                return t.a.ac()
                  ? new In(function () {})
                  : kc(t.g)
                      .then(function () {
                        return t.ra();
                      })
                      .then(function () {})
                      .o(function () {});
              });
          });
        }
        function jc(t, n, e, i, r) {
          return t.a.Pb(
            i,
            function (t) {
              n.na(e, null, t, r);
            },
            Pc.get()
          );
        }
        Sc.prototype.ra = function () {
          return this.b.ra();
        };
        var Uc = {};
        function Vc(t, n, e) {
          return (t = t + ':' + n), e && (t = t + ':' + e.url), t;
        }
        function Fc(t, n, e, i) {
          var r = Vc(n, e, i);
          return Uc[r] || (Uc[r] = new Sc(t, n, e, i)), Uc[r];
        }
        function Kc() {
          (this.b = null), (this.f = []), (this.c = []), (this.a = null), (this.i = this.g = !1);
        }
        function qc(t) {
          t.g || ((t.g = !0), Bc(t, !1, null, null));
        }
        function Hc(t) {
          t.g && !t.i && Bc(t, !1, null, null);
        }
        function Gc(t, n) {
          if (
            ((t.b = function () {
              return _n(n);
            }),
            t.f.length)
          )
            for (var e = 0; e < t.f.length; e++) t.f[e](n);
        }
        function Bc(t, n, e, i) {
          n
            ? i
              ? (function (t, n) {
                  if (
                    ((t.b = function () {
                      return On(n);
                    }),
                    t.c.length)
                  )
                    for (var e = 0; e < t.c.length; e++) t.c[e](n);
                })(t, i)
              : Gc(t, e)
            : Gc(t, { user: null }),
            (t.f = []),
            (t.c = []);
        }
        function Wc() {}
        function Xc() {
          (this.jb = !1),
            Object.defineProperty(this, 'appVerificationDisabled', {
              get: function () {
                return this.jb;
              },
              set: function (t) {
                this.jb = t;
              },
              enumerable: !1,
            });
        }
        function Jc(t, n) {
          (this.a = n), zi(this, 'verificationId', t);
        }
        function Yc(t, n, e, i) {
          return new Mo(t).gb(n, e).then(function (t) {
            return new Jc(t, i);
          });
        }
        function zc(t) {
          var n = Gr(t);
          if (!(n && n.exp && n.auth_time && n.iat))
            throw new S(
              'internal-error',
              'An internal error occurred. The token obtained by Firebase appears to be malformed. Please retry the operation.'
            );
          $i(this, {
            token: t,
            expirationTime: Gi(1e3 * n.exp),
            authTime: Gi(1e3 * n.auth_time),
            issuedAtTime: Gi(1e3 * n.iat),
            signInProvider: n.firebase && n.firebase.sign_in_provider ? n.firebase.sign_in_provider : null,
            signInSecondFactor:
              n.firebase && n.firebase.sign_in_second_factor ? n.firebase.sign_in_second_factor : null,
            claims: n,
          });
        }
        function $c(t, n, e) {
          var i = n && n[Qc];
          if (!i) throw new S('argument-error', 'Internal assert: Invalid MultiFactorResolver');
          (this.a = t), (this.f = vt(n)), (this.g = e), (this.c = new oo(null, i)), (this.b = []);
          var r = this;
          G(n[Zc] || [], function (t) {
            (t = nr(t)) && r.b.push(t);
          }),
            zi(this, 'auth', this.a),
            zi(this, 'session', this.c),
            zi(this, 'hints', this.b);
        }
        (Kc.prototype.reset = function () {
          (this.b = null), this.a && (this.a.cancel(), (this.a = null));
        }),
          (Kc.prototype.h = function (t, n) {
            if (t) {
              this.reset(), (this.g = !0);
              var e = t.c,
                i = t.b,
                r = t.a && 'auth/web-storage-unsupported' == t.a.code,
                o = t.a && 'auth/operation-not-supported-in-this-environment' == t.a.code;
              (this.i = !(!r && !o)),
                'unknown' != e || r || o
                  ? t.a
                    ? (Bc(this, !0, null, t.a), _n())
                    : n.Fa(e, i)
                    ? (function (t, n, e) {
                        e = e.Fa(n.c, n.b);
                        var i = n.g,
                          r = n.f,
                          o = n.i,
                          a = n.T(),
                          s = !!n.c.match(/Redirect$/);
                        e(i, r, a, o)
                          .then(function (n) {
                            Bc(t, s, n, null);
                          })
                          .o(function (n) {
                            Bc(t, s, null, n);
                          });
                      })(this, t, n)
                    : On(new S('invalid-auth-event'))
                  : (Bc(this, !1, null, null), _n());
            } else On(new S('invalid-auth-event'));
          }),
          (Kc.prototype.ra = function () {
            var t = this;
            return new In(function (n, e) {
              t.b
                ? t.b().then(n, e)
                : (t.f.push(n),
                  t.c.push(e),
                  (function (t) {
                    var n = new S('timeout');
                    t.a && t.a.cancel(),
                      (t.a = Se(Dc.get()).then(function () {
                        t.b || ((t.g = !0), Bc(t, !0, null, n));
                      }));
                  })(t));
            });
          }),
          (Wc.prototype.h = function (t, n) {
            if (t) {
              var e = t.c,
                i = t.b;
              t.a
                ? (n.na(t.c, null, t.a, t.b), _n())
                : n.Fa(e, i)
                ? (function (t, n) {
                    var e = t.b,
                      i = t.c;
                    n.Fa(i, e)(t.g, t.f, t.T(), t.i)
                      .then(function (t) {
                        n.na(i, t, null, e);
                      })
                      .o(function (t) {
                        n.na(i, null, t, e);
                      });
                  })(t, n)
                : On(new S('invalid-auth-event'));
            } else On(new S('invalid-auth-event'));
          }),
          (Jc.prototype.confirm = function (t) {
            return (t = jo(this.verificationId, t)), this.a(t);
          });
        var Zc = 'mfaInfo',
          Qc = 'mfaPendingCredential';
        function th(t, n, e, i) {
          S.call(this, 'multi-factor-auth-required', i, n), (this.b = new $c(t, n, e)), zi(this, 'resolver', this.b);
        }
        function nh(t, n, e) {
          if (t && v(t.serverResponse) && 'auth/multi-factor-auth-required' === t.code)
            try {
              return new th(n, t.serverResponse, e, t.message);
            } catch (i) {}
          return null;
        }
        function eh() {}
        function ih(t) {
          zi(this, 'factorId', t.fa), (this.a = t);
        }
        function rh(t) {
          if ((ih.call(this, t), this.a.fa != Mo.PROVIDER_ID))
            throw new S(
              'argument-error',
              'firebase.auth.PhoneMultiFactorAssertion requires a valid firebase.auth.PhoneAuthCredential'
            );
        }
        function oh(t, n) {
          for (var e in ($n.call(this, t), n)) this[e] = n[e];
        }
        function ah(t, n) {
          (this.a = t), (this.b = []), (this.c = I(this.yc, this)), ce(this.a, 'userReloaded', this.c);
          var e = [];
          n &&
            n.multiFactor &&
            n.multiFactor.enrolledFactors &&
            G(n.multiFactor.enrolledFactors, function (t) {
              var n = null,
                i = {};
              if (t) {
                t.uid && (i[rr] = t.uid),
                  t.displayName && (i[er] = t.displayName),
                  t.enrollmentTime && (i[ir] = new Date(t.enrollmentTime).toISOString()),
                  t.phoneNumber && (i[or] = t.phoneNumber);
                try {
                  n = new ar(i);
                } catch (r) {}
                t = n;
              } else t = null;
              t && e.push(t);
            }),
            sh(this, e);
        }
        function sh(t, n) {
          (t.b = n), zi(t, 'enrolledFactors', n);
        }
        function uh(t, n, e) {
          if (
            ((this.h = t),
            (this.i = n),
            (this.g = e),
            (this.c = 3e4),
            (this.f = 96e4),
            (this.b = null),
            (this.a = this.c),
            this.f < this.c)
          )
            throw Error('Proactive refresh lower bound greater than upper bound!');
        }
        function ch(t, n) {
          t.stop(),
            (t.b = Se(
              (function (t, n) {
                return n ? ((t.a = t.c), t.g()) : ((n = t.a), (t.a *= 2), t.a > t.f && (t.a = t.f), n);
              })(t, n)
            )
              .then(function () {
                return (function () {
                  var t = s.document,
                    n = null;
                  return Hi() || !t
                    ? _n()
                    : new In(function (e) {
                        (n = function () {
                          Hi() && (t.removeEventListener('visibilitychange', n, !1), e());
                        }),
                          t.addEventListener('visibilitychange', n, !1);
                      }).o(function (e) {
                        throw (t.removeEventListener('visibilitychange', n, !1), e);
                      });
                })();
              })
              .then(function () {
                return t.h();
              })
              .then(function () {
                ch(t, !0);
              })
              .o(function (n) {
                t.i(n) && ch(t, !1);
              }));
        }
        function hh(t) {
          (this.f = t), (this.b = this.a = null), (this.c = Date.now());
        }
        function lh(t, n) {
          void 0 === n && (n = t.b ? (n = t.b).a - n.g : 0), (t.c = Date.now() + 1e3 * n);
        }
        function fh(t, n) {
          (t.b = Hr(n[za] || '')), (t.a = n.refreshToken), lh(t, void 0 !== (n = n.expiresIn) ? Number(n) : void 0);
        }
        function dh(t, n) {
          (this.a = t || null),
            (this.b = n || null),
            $i(this, { lastSignInTime: Gi(n || null), creationTime: Gi(t || null) });
        }
        function ph(t, n, e, i, r, o) {
          $i(this, {
            uid: t,
            displayName: i || null,
            photoURL: r || null,
            email: e || null,
            phoneNumber: o || null,
            providerId: n,
          });
        }
        function vh(t, n, e) {
          (this.N = []), (this.l = t.apiKey), (this.m = t.appName), (this.s = t.authDomain || null);
          var r = i.a.SDK_VERSION ? _i(i.a.SDK_VERSION) : null;
          (this.a = new Ja(this.l, P(_), r)),
            (this.u = t.emulatorConfig || null) && es(this.a, this.u),
            (this.h = new hh(this.a)),
            Ah(this, n[za]),
            fh(this.h, n),
            zi(this, 'refreshToken', this.h.a),
            Nh(this, e || {}),
            Ie.call(this),
            (this.P = !1),
            this.s && Pi() && (this.b = Fc(this.s, this.l, this.m, this.u)),
            (this.W = []),
            (this.i = null),
            (this.D = (function (t) {
              return new uh(
                function () {
                  return t.I(!0);
                },
                function (t) {
                  return !(!t || 'auth/network-request-failed' != t.code);
                },
                function () {
                  var n = t.h.c - Date.now() - 3e5;
                  return 0 < n ? n : 0;
                }
              );
            })(this)),
            (this.ba = I(this.ib, this));
          var o = this;
          (this.za = null),
            (this.Pa = function (t) {
              o.xa(t.h);
            }),
            (this.qa = null),
            (this.Ba = function (t) {
              mh(o, t.c);
            }),
            (this.$ = null),
            (this.aa = []),
            (this.Oa = function (t) {
              yh(o, t.f);
            }),
            (this.ja = null),
            (this.S = new ah(this, e)),
            zi(this, 'multiFactor', this.S);
        }
        function mh(t, n) {
          (t.u = n), es(t.a, n), t.b && ((n = t.b), (t.b = Fc(t.s, t.l, t.m, t.u)), t.P && (Rc(n, t), Cc(t.b, t)));
        }
        function gh(t, n) {
          t.qa && fe(t.qa, 'languageCodeChanged', t.Pa), (t.qa = n) && ce(n, 'languageCodeChanged', t.Pa);
        }
        function bh(t, n) {
          t.$ && fe(t.$, 'emulatorConfigChanged', t.Ba), (t.$ = n) && ce(n, 'emulatorConfigChanged', t.Ba);
        }
        function yh(t, n) {
          (t.aa = n), rs(t.a, i.a.SDK_VERSION ? _i(i.a.SDK_VERSION, t.aa) : null);
        }
        function wh(t, n) {
          t.ja && fe(t.ja, 'frameworkChanged', t.Oa), (t.ja = n) && ce(n, 'frameworkChanged', t.Oa);
        }
        function Ih(t) {
          try {
            return i.a.app(t.m).auth();
          } catch (n) {
            throw new S(
              'internal-error',
              "No firebase.auth.Auth instance is available for the Firebase App '" + t.m + "'!"
            );
          }
        }
        function Th(t) {
          t.J || t.D.b || (t.D.start(), fe(t, 'tokenChanged', t.ba), ce(t, 'tokenChanged', t.ba));
        }
        function Eh(t) {
          fe(t, 'tokenChanged', t.ba), t.D.stop();
        }
        function Ah(t, n) {
          (t.Aa = n), zi(t, '_lat', n);
        }
        function kh(t) {
          for (var n = [], e = 0; e < t.W.length; e++) n.push(t.W[e](t));
          return Rn(n).then(function () {
            return t;
          });
        }
        function Sh(t) {
          t.b && !t.P && ((t.P = !0), Cc(t.b, t));
        }
        function Nh(t, n) {
          $i(t, {
            uid: n.uid,
            displayName: n.displayName || null,
            photoURL: n.photoURL || null,
            email: n.email || null,
            emailVerified: n.emailVerified || !1,
            phoneNumber: n.phoneNumber || null,
            isAnonymous: n.isAnonymous || !1,
            tenantId: n.tenantId || null,
            metadata: new dh(n.createdAt, n.lastLoginAt),
            providerData: [],
          }),
            (t.a.b = t.tenantId);
        }
        function _h() {}
        function Oh(t) {
          return _n().then(function () {
            if (t.J) throw new S('app-deleted');
          });
        }
        function Ch(t) {
          return W(t.providerData, function (t) {
            return t.providerId;
          });
        }
        function Rh(t, n) {
          n && (Ph(t, n.providerId), t.providerData.push(n));
        }
        function Ph(t, n) {
          z(t.providerData, function (t) {
            return t.providerId == n;
          });
        }
        function Dh(t, n, e) {
          ('uid' != n || e) && t.hasOwnProperty(n) && zi(t, n, e);
        }
        function Lh(t, n) {
          t != n &&
            ($i(t, {
              uid: n.uid,
              displayName: n.displayName,
              photoURL: n.photoURL,
              email: n.email,
              emailVerified: n.emailVerified,
              phoneNumber: n.phoneNumber,
              isAnonymous: n.isAnonymous,
              tenantId: n.tenantId,
              providerData: [],
            }),
            zi(
              t,
              'metadata',
              n.metadata
                ? (function (t) {
                    return new dh(t.a, t.b);
                  })(n.metadata)
                : new dh()
            ),
            G(n.providerData, function (n) {
              Rh(t, n);
            }),
            (function (t, n) {
              (t.b = n.b), (t.a = n.a), (t.c = n.c);
            })(t.h, n.h),
            zi(t, 'refreshToken', t.h.a),
            sh(t.S, n.S.b));
        }
        function xh(t) {
          return t.I().then(function (n) {
            var e = t.isAnonymous;
            return (function (t, n) {
              return tu(t.a, Rs, { idToken: n }).then(I(t.Kc, t));
            })(t, n).then(function () {
              return e || Dh(t, 'isAnonymous', !1), n;
            });
          });
        }
        function Mh(t, n) {
          n[za] &&
            t.Aa != n[za] &&
            (fh(t.h, n), t.dispatchEvent(new oh('tokenChanged')), Ah(t, n[za]), Dh(t, 'refreshToken', t.h.a));
        }
        function jh(t, n) {
          return xh(t).then(function () {
            if (J(Ch(t), n))
              return kh(t).then(function () {
                throw new S('provider-already-linked');
              });
          });
        }
        function Uh(t, n, e) {
          return Zi({ user: t, credential: Uo(n), additionalUserInfo: (n = Yr(n)), operationType: e });
        }
        function Vh(t, n) {
          return (
            Mh(t, n),
            t.reload().then(function () {
              return t;
            })
          );
        }
        function Fh(t, n, e, r, o) {
          if (!Pi()) return On(new S('operation-not-supported-in-this-environment'));
          if (t.i && !o) return On(t.i);
          var a = Jr(e.providerId),
            s = Vi(t.uid + ':::'),
            u = null;
          (!xi() || wi()) &&
            t.s &&
            e.isOAuthProvider &&
            (u = vu(t.s, t.l, t.m, n, e, null, s, i.a.SDK_VERSION || null, null, null, t.tenantId, t.u));
          var c = vi(u, a && a.va, a && a.ua);
          return (
            (r = r()
              .then(function () {
                if ((qh(t), !o)) return t.I().then(function () {});
              })
              .then(function () {
                return Lc(t.b, c, n, e, s, !!u, t.tenantId);
              })
              .then(function () {
                return new In(function (e, i) {
                  t.na(n, null, new S('cancelled-popup-request'), t.g || null),
                    (t.f = e),
                    (t.C = i),
                    (t.g = s),
                    (t.c = jc(t.b, t, n, c, s));
                });
              })
              .then(function (t) {
                return c && pi(c), t ? Zi(t) : null;
              })
              .o(function (t) {
                throw (c && pi(c), t);
              })),
            Hh(t, r, o)
          );
        }
        function Kh(t, n, e, i, r) {
          if (!Pi()) return On(new S('operation-not-supported-in-this-environment'));
          if (t.i && !r) return On(t.i);
          var o = null,
            a = Vi(t.uid + ':::');
          return (
            (i = i()
              .then(function () {
                if ((qh(t), !r)) return t.I().then(function () {});
              })
              .then(function () {
                return (t.ga = a), kh(t);
              })
              .then(function (n) {
                return t.ha && (n = (n = t.ha).b.set(Wh, t.w(), n.a)), n;
              })
              .then(function () {
                return Mc(t.b, n, e, a, t.tenantId);
              })
              .o(function (n) {
                if (((o = n), t.ha)) return Xh(t.ha);
                throw o;
              })
              .then(function () {
                if (o) throw o;
              })),
            Hh(t, i, r)
          );
        }
        function qh(t) {
          if (!t.b || !t.P) {
            if (t.b && !t.P) throw new S('internal-error');
            throw new S('auth-domain-config-required');
          }
        }
        function Hh(t, n, e) {
          var i = (function (t, n, e) {
            return t.i && !e
              ? (n.cancel(), On(t.i))
              : n.o(function (n) {
                  throw (
                    (!n ||
                      ('auth/user-disabled' != n.code && 'auth/user-token-expired' != n.code) ||
                      (t.i || t.dispatchEvent(new oh('userInvalidated')), (t.i = n)),
                    n)
                  );
                });
          })(t, n, e);
          return (
            t.N.push(i),
            i.oa(function () {
              Y(t.N, i);
            }),
            i.o(function (n) {
              var e = null;
              throw (n && 'auth/multi-factor-auth-required' === n.code && (e = nh(n.w(), Ih(t), I(t.jc, t))), e || n);
            })
          );
        }
        function Gh(t) {
          if (!t.apiKey) return null;
          var n = { apiKey: t.apiKey, authDomain: t.authDomain, appName: t.appName, emulatorConfig: t.emulatorConfig },
            e = {};
          if (!t.stsTokenManager || !t.stsTokenManager.accessToken) return null;
          (e[za] = t.stsTokenManager.accessToken), (e.refreshToken = t.stsTokenManager.refreshToken || null);
          var i = t.stsTokenManager.expirationTime;
          i && (e.expiresIn = (i - Date.now()) / 1e3);
          var r = new vh(n, e, t);
          return (
            t.providerData &&
              G(t.providerData, function (t) {
                t && Rh(r, Zi(t));
              }),
            t.redirectEventId && (r.ga = t.redirectEventId),
            r
          );
        }
        function Bh(t) {
          (this.a = t), (this.b = Zu());
        }
        ($c.prototype.Rc = function (t) {
          var n = this;
          return t.tb(this.a.a, this.c).then(function (t) {
            var e = vt(n.f);
            return delete e[Zc], delete e[Qc], gt(e, t), n.g(e);
          });
        }),
          A(th, S),
          (eh.prototype.tb = function (t, n, e) {
            return n.type == ao
              ? (function (t, n, e, i) {
                  return e.Ha().then(function (e) {
                    return (
                      (e = { idToken: e }),
                      void 0 !== i && (e.displayName = i),
                      gt(e, { phoneVerificationInfo: xo(t.a) }),
                      tu(n, Os, e)
                    );
                  });
                })(this, t, n, e)
              : (function (t, n, e) {
                  return e.Ha().then(function (e) {
                    return gt((e = { mfaPendingCredential: e }), { phoneVerificationInfo: xo(t.a) }), tu(n, Cs, e);
                  });
                })(this, t, n);
          }),
          A(ih, eh),
          A(rh, ih),
          A(oh, $n),
          ((t = ah.prototype).yc = function (t) {
            sh(
              this,
              (function (t) {
                var n = [];
                return (
                  G(t.mfaInfo || [], function (t) {
                    (t = nr(t)) && n.push(t);
                  }),
                  n
                );
              })(t.hd)
            );
          }),
          (t.Sb = function () {
            return this.a.I().then(function (t) {
              return new oo(t, null);
            });
          }),
          (t.fc = function (t, n) {
            var e = this,
              i = this.a.a;
            return this.Sb()
              .then(function (e) {
                return t.tb(i, e, n);
              })
              .then(function (t) {
                return Mh(e.a, t), e.a.reload();
              });
          }),
          (t.bd = function (t) {
            var n = this,
              e = 'string' == typeof t ? t : t.uid,
              i = this.a.a;
            return this.a
              .I()
              .then(function (t) {
                return tu(i, Qs, { idToken: t, mfaEnrollmentId: e });
              })
              .then(function (t) {
                var i = B(n.b, function (t) {
                  return t.uid != e;
                });
                return (
                  sh(n, i),
                  Mh(n.a, t),
                  n.a.reload().o(function (t) {
                    if ('auth/user-token-expired' != t.code) throw t;
                  })
                );
              });
          }),
          (t.w = function () {
            return {
              multiFactor: {
                enrolledFactors: W(this.b, function (t) {
                  return t.w();
                }),
              },
            };
          }),
          (uh.prototype.start = function () {
            (this.a = this.c), ch(this, !0);
          }),
          (uh.prototype.stop = function () {
            this.b && (this.b.cancel(), (this.b = null));
          }),
          (hh.prototype.w = function () {
            return {
              apiKey: this.f.c,
              refreshToken: this.a,
              accessToken: this.b && this.b.toString(),
              expirationTime: this.c,
            };
          }),
          (hh.prototype.getToken = function (t) {
            return (
              (t = !!t),
              this.b && !this.a
                ? On(new S('user-token-expired'))
                : t || !this.b || Date.now() > this.c - 3e4
                ? this.a
                  ? (function (t, n) {
                      return (function (t, n) {
                        return new In(function (e, i) {
                          ('refresh_token' == n.grant_type && n.refresh_token) ||
                          ('authorization_code' == n.grant_type && n.code)
                            ? os(
                                t,
                                t.l + '?key=' + encodeURIComponent(t.c),
                                function (t) {
                                  t
                                    ? t.error
                                      ? i(eu(t))
                                      : t.access_token && t.refresh_token
                                      ? e(t)
                                      : i(new S('internal-error'))
                                    : i(new S('network-request-failed'));
                                },
                                'POST',
                                $e(n).toString(),
                                t.g,
                                t.m.get()
                              )
                            : i(new S('internal-error'));
                        });
                      })(t.f, n)
                        .then(function (n) {
                          return (
                            (t.b = Hr(n.access_token)),
                            (t.a = n.refresh_token),
                            lh(t, n.expires_in),
                            { accessToken: t.b.toString(), refreshToken: t.a }
                          );
                        })
                        .o(function (n) {
                          throw ('auth/user-token-expired' == n.code && (t.a = null), n);
                        });
                    })(this, { grant_type: 'refresh_token', refresh_token: this.a })
                  : _n(null)
                : _n({ accessToken: this.b.toString(), refreshToken: this.a })
            );
          }),
          (dh.prototype.w = function () {
            return { lastLoginAt: this.b, createdAt: this.a };
          }),
          A(vh, Ie),
          (vh.prototype.xa = function (t) {
            (this.za = t), ns(this.a, t);
          }),
          (vh.prototype.la = function () {
            return this.za;
          }),
          (vh.prototype.Ga = function () {
            return Z(this.aa);
          }),
          (vh.prototype.ib = function () {
            this.D.b && (this.D.stop(), this.D.start());
          }),
          zi(vh.prototype, 'providerId', 'firebase'),
          ((t = vh.prototype).reload = function () {
            var t = this;
            return Hh(
              this,
              Oh(this).then(function () {
                return xh(t)
                  .then(function () {
                    return kh(t);
                  })
                  .then(_h);
              })
            );
          }),
          (t.oc = function (t) {
            return this.I(t).then(function (t) {
              return new zc(t);
            });
          }),
          (t.I = function (t) {
            var n = this;
            return Hh(
              this,
              Oh(this)
                .then(function () {
                  return n.h.getToken(t);
                })
                .then(function (t) {
                  if (!t) throw new S('internal-error');
                  return (
                    t.accessToken != n.Aa && (Ah(n, t.accessToken), n.dispatchEvent(new oh('tokenChanged'))),
                    Dh(n, 'refreshToken', t.refreshToken),
                    t.accessToken
                  );
                })
            );
          }),
          (t.Kc = function (t) {
            if (!(t = t.users) || !t.length) throw new S('internal-error');
            Nh(this, {
              uid: (t = t[0]).localId,
              displayName: t.displayName,
              photoURL: t.photoUrl,
              email: t.email,
              emailVerified: !!t.emailVerified,
              phoneNumber: t.phoneNumber,
              lastLoginAt: t.lastLoginAt,
              createdAt: t.createdAt,
              tenantId: t.tenantId,
            });
            for (
              var n = (function (t) {
                  return (t = t.providerUserInfo) && t.length
                    ? W(t, function (t) {
                        return new ph(t.rawId, t.providerId, t.email, t.displayName, t.photoUrl, t.phoneNumber);
                      })
                    : [];
                })(t),
                e = 0;
              e < n.length;
              e++
            )
              Rh(this, n[e]);
            Dh(
              this,
              'isAnonymous',
              !((this.email && t.passwordHash) || (this.providerData && this.providerData.length))
            ),
              this.dispatchEvent(new oh('userReloaded', { hd: t }));
          }),
          (t.Lc = function (t) {
            return (
              Ji(
                'firebase.User.prototype.reauthenticateAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.reauthenticateWithCredential instead.'
              ),
              this.ub(t)
            );
          }),
          (t.ub = function (t) {
            var n = this,
              e = null;
            return Hh(
              this,
              t
                .c(this.a, this.uid)
                .then(function (t) {
                  return Mh(n, t), (e = Uh(n, t, 'reauthenticate')), (n.i = null), n.reload();
                })
                .then(function () {
                  return e;
                }),
              !0
            );
          }),
          (t.Cc = function (t) {
            return (
              Ji(
                'firebase.User.prototype.linkAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.linkWithCredential instead.'
              ),
              this.rb(t)
            );
          }),
          (t.rb = function (t) {
            var n = this,
              e = null;
            return Hh(
              this,
              jh(this, t.providerId)
                .then(function () {
                  return n.I();
                })
                .then(function (e) {
                  return t.b(n.a, e);
                })
                .then(function (t) {
                  return (e = Uh(n, t, 'link')), Vh(n, t);
                })
                .then(function () {
                  return e;
                })
            );
          }),
          (t.Dc = function (t, n) {
            var e = this;
            return Hh(
              this,
              jh(this, 'phone').then(function () {
                return Yc(Ih(e), t, n, I(e.rb, e));
              })
            );
          }),
          (t.Mc = function (t, n) {
            var e = this;
            return Hh(
              this,
              _n().then(function () {
                return Yc(Ih(e), t, n, I(e.ub, e));
              }),
              !0
            );
          }),
          (t.Cb = function (t) {
            var n = this;
            return Hh(
              this,
              this.I()
                .then(function (e) {
                  return n.a.Cb(e, t);
                })
                .then(function (t) {
                  return Mh(n, t), n.reload();
                })
            );
          }),
          (t.ed = function (t) {
            var n = this;
            return Hh(
              this,
              this.I()
                .then(function (e) {
                  return t.b(n.a, e);
                })
                .then(function (t) {
                  return Mh(n, t), n.reload();
                })
            );
          }),
          (t.Db = function (t) {
            var n = this;
            return Hh(
              this,
              this.I()
                .then(function (e) {
                  return n.a.Db(e, t);
                })
                .then(function (t) {
                  return Mh(n, t), n.reload();
                })
            );
          }),
          (t.Eb = function (t) {
            if (void 0 === t.displayName && void 0 === t.photoURL) return Oh(this);
            var n = this;
            return Hh(
              this,
              this.I()
                .then(function (e) {
                  return n.a.Eb(e, { displayName: t.displayName, photoUrl: t.photoURL });
                })
                .then(function (t) {
                  return (
                    Mh(n, t),
                    Dh(n, 'displayName', t.displayName || null),
                    Dh(n, 'photoURL', t.photoUrl || null),
                    G(n.providerData, function (t) {
                      'password' === t.providerId &&
                        (zi(t, 'displayName', n.displayName), zi(t, 'photoURL', n.photoURL));
                    }),
                    kh(n)
                  );
                })
                .then(_h)
            );
          }),
          (t.cd = function (t) {
            var n = this;
            return Hh(
              this,
              xh(this).then(function (e) {
                return J(Ch(n), t)
                  ? (function (t, n, e) {
                      return tu(t, Ss, { idToken: n, deleteProvider: e });
                    })(n.a, e, [t]).then(function (t) {
                      var e = {};
                      return (
                        G(t.providerUserInfo || [], function (t) {
                          e[t.providerId] = !0;
                        }),
                        G(Ch(n), function (t) {
                          e[t] || Ph(n, t);
                        }),
                        e[Mo.PROVIDER_ID] || zi(n, 'phoneNumber', null),
                        kh(n)
                      );
                    })
                  : kh(n).then(function () {
                      throw new S('no-such-provider');
                    });
              })
            );
          }),
          (t.delete = function () {
            var t = this;
            return Hh(
              this,
              this.I()
                .then(function (n) {
                  return tu(t.a, ks, { idToken: n });
                })
                .then(function () {
                  t.dispatchEvent(new oh('userDeleted'));
                })
            ).then(function () {
              for (var n = 0; n < t.N.length; n++) t.N[n].cancel('app-deleted');
              gh(t, null),
                bh(t, null),
                wh(t, null),
                (t.N = []),
                (t.J = !0),
                Eh(t),
                zi(t, 'refreshToken', null),
                t.b && Rc(t.b, t);
            });
          }),
          (t.Gb = function (t, n) {
            return !!(
              ('linkViaPopup' == t && (this.g || null) == n && this.f) ||
              ('reauthViaPopup' == t && (this.g || null) == n && this.f) ||
              ('linkViaRedirect' == t && (this.ga || null) == n) ||
              ('reauthViaRedirect' == t && (this.ga || null) == n)
            );
          }),
          (t.na = function (t, n, e, i) {
            ('linkViaPopup' != t && 'reauthViaPopup' != t) ||
              i != (this.g || null) ||
              (e && this.C ? this.C(e) : n && !e && this.f && this.f(n),
              this.c && (this.c.cancel(), (this.c = null)),
              delete this.f,
              delete this.C);
          }),
          (t.Fa = function (t, n) {
            return 'linkViaPopup' == t && n == (this.g || null)
              ? I(this.Lb, this)
              : 'reauthViaPopup' == t && n == (this.g || null)
              ? I(this.Mb, this)
              : 'linkViaRedirect' == t && (this.ga || null) == n
              ? I(this.Lb, this)
              : 'reauthViaRedirect' == t && (this.ga || null) == n
              ? I(this.Mb, this)
              : null;
          }),
          (t.Ec = function (t) {
            var n = this;
            return Fh(
              this,
              'linkViaPopup',
              t,
              function () {
                return jh(n, t.providerId).then(function () {
                  return kh(n);
                });
              },
              !1
            );
          }),
          (t.Nc = function (t) {
            return Fh(
              this,
              'reauthViaPopup',
              t,
              function () {
                return _n();
              },
              !0
            );
          }),
          (t.Fc = function (t) {
            var n = this;
            return Kh(
              this,
              'linkViaRedirect',
              t,
              function () {
                return jh(n, t.providerId);
              },
              !1
            );
          }),
          (t.Oc = function (t) {
            return Kh(
              this,
              'reauthViaRedirect',
              t,
              function () {
                return _n();
              },
              !0
            );
          }),
          (t.Lb = function (t, n, e, i) {
            var r = this;
            this.c && (this.c.cancel(), (this.c = null));
            var o = null;
            return Hh(
              this,
              this.I()
                .then(function (e) {
                  return bs(r.a, { requestUri: t, postBody: i, sessionId: n, idToken: e });
                })
                .then(function (t) {
                  return (o = Uh(r, t, 'link')), Vh(r, t);
                })
                .then(function () {
                  return o;
                })
            );
          }),
          (t.Mb = function (t, n, e, i) {
            var r = this;
            this.c && (this.c.cancel(), (this.c = null));
            var o = null;
            return Hh(
              this,
              _n()
                .then(function () {
                  return co(ys(r.a, { requestUri: t, sessionId: n, postBody: i, tenantId: e }), r.uid);
                })
                .then(function (t) {
                  return (o = Uh(r, t, 'reauthenticate')), Mh(r, t), (r.i = null), r.reload();
                })
                .then(function () {
                  return o;
                }),
              !0
            );
          }),
          (t.vb = function (t) {
            var n = this,
              e = null;
            return Hh(
              this,
              this.I()
                .then(function (n) {
                  return (e = n), void 0 === t || pt(t) ? {} : Fr(new Cr(t));
                })
                .then(function (t) {
                  return n.a.vb(e, t);
                })
                .then(function (t) {
                  if (n.email != t) return n.reload();
                })
                .then(function () {})
            );
          }),
          (t.Fb = function (t, n) {
            var e = this,
              i = null;
            return Hh(
              this,
              this.I()
                .then(function (t) {
                  return (i = t), void 0 === n || pt(n) ? {} : Fr(new Cr(n));
                })
                .then(function (n) {
                  return e.a.Fb(i, t, n);
                })
                .then(function (t) {
                  if (e.email != t) return e.reload();
                })
                .then(function () {})
            );
          }),
          (t.jc = function (t) {
            var n = null,
              e = this;
            return Hh(
              this,
              (t = co(_n(t), e.uid)
                .then(function (t) {
                  return (n = Uh(e, t, 'reauthenticate')), Mh(e, t), (e.i = null), e.reload();
                })
                .then(function () {
                  return n;
                })),
              !0
            );
          }),
          (t.toJSON = function () {
            return this.w();
          }),
          (t.w = function () {
            var t = {
              uid: this.uid,
              displayName: this.displayName,
              photoURL: this.photoURL,
              email: this.email,
              emailVerified: this.emailVerified,
              phoneNumber: this.phoneNumber,
              isAnonymous: this.isAnonymous,
              tenantId: this.tenantId,
              providerData: [],
              apiKey: this.l,
              appName: this.m,
              authDomain: this.s,
              stsTokenManager: this.h.w(),
              redirectEventId: this.ga || null,
            };
            return (
              this.metadata && gt(t, this.metadata.w()),
              G(this.providerData, function (n) {
                t.providerData.push(
                  (function (t) {
                    var n,
                      e = {};
                    for (n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                    return e;
                  })(n)
                );
              }),
              gt(t, this.S.w()),
              t
            );
          });
        var Wh = { name: 'redirectUser', F: 'session' };
        function Xh(t) {
          return nc(t.b, Wh, t.a);
        }
        function Jh(t) {
          (this.a = t),
            (this.b = Zu()),
            (this.c = null),
            (this.f = (function (t) {
              var n = $h('local'),
                e = $h('session'),
                i = $h('none');
              return (function (t, n, e) {
                var i = tc(n, e),
                  r = Qu(t, n.F);
                return t.get(n, e).then(function (o) {
                  var a = null;
                  try {
                    a = Ui(s.localStorage.getItem(i));
                  } catch (u) {}
                  if (a && !o) return s.localStorage.removeItem(i), t.set(n, a, e);
                  a && o && 'localStorage' != r.type && s.localStorage.removeItem(i);
                });
              })(t.b, n, t.a)
                .then(function () {
                  return t.b.get(e, t.a);
                })
                .then(function (r) {
                  return r
                    ? e
                    : t.b.get(i, t.a).then(function (e) {
                        return e
                          ? i
                          : t.b.get(n, t.a).then(function (e) {
                              return e
                                ? n
                                : t.b.get(zh, t.a).then(function (t) {
                                    return t ? $h(t) : n;
                                  });
                            });
                      });
                })
                .then(function (n) {
                  return (t.c = n), Yh(t, n.F);
                })
                .o(function () {
                  t.c || (t.c = n);
                });
            })(this)),
            this.b.addListener($h('local'), this.a, I(this.g, this));
        }
        function Yh(t, n) {
          var e,
            i = [];
          for (e in zu) zu[e] !== n && i.push(nc(t.b, $h(zu[e]), t.a));
          return (
            i.push(nc(t.b, zh, t.a)),
            (function (t) {
              return new In(function (n, e) {
                var i = t.length,
                  r = [];
                if (i)
                  for (
                    var o = function (t, e) {
                        i--, (r[t] = e), 0 == i && n(r);
                      },
                      a = function (t) {
                        e(t);
                      },
                      s = 0;
                    s < t.length;
                    s++
                  )
                    Cn(t[s], T(o, s), a);
                else n(r);
              });
            })(i)
          );
        }
        Jh.prototype.g = function () {
          var t = this,
            n = $h('local');
          nl(this, function () {
            return _n()
              .then(function () {
                return t.c && 'local' != t.c.F ? t.b.get(n, t.a) : null;
              })
              .then(function (e) {
                if (e)
                  return Yh(t, 'local').then(function () {
                    t.c = n;
                  });
              });
          });
        };
        var zh = { name: 'persistence', F: 'session' };
        function $h(t) {
          return { name: 'authUser', F: t };
        }
        function Zh(t, n) {
          return nl(t, function () {
            return t.b.set(t.c, n.w(), t.a);
          });
        }
        function Qh(t) {
          return nl(t, function () {
            return nc(t.b, t.c, t.a);
          });
        }
        function tl(t, n, e) {
          return nl(t, function () {
            return t.b.get(t.c, t.a).then(function (t) {
              return t && n && (t.authDomain = n), t && e && (t.emulatorConfig = e), Gh(t || {});
            });
          });
        }
        function nl(t, n) {
          return (t.f = t.f.then(n, n)), t.f;
        }
        function el(t) {
          if (
            ((this.l = !1),
            zi(this, 'settings', new Xc()),
            zi(this, 'app', t),
            !hl(this).options || !hl(this).options.apiKey)
          )
            throw new S('invalid-api-key');
          (t = i.a.SDK_VERSION ? _i(i.a.SDK_VERSION) : null),
            (this.a = new Ja(hl(this).options && hl(this).options.apiKey, P(_), t)),
            (this.P = []),
            (this.s = []),
            (this.N = []),
            (this.Pa = i.a.INTERNAL.createSubscribe(I(this.zc, this))),
            (this.W = void 0),
            (this.ib = i.a.INTERNAL.createSubscribe(I(this.Ac, this))),
            ul(this, null),
            (this.i = new Jh(hl(this).options.apiKey + ':' + hl(this).name)),
            (this.D = new Bh(hl(this).options.apiKey + ':' + hl(this).name)),
            (this.$ = pl(
              this,
              (function (t) {
                var n = hl(t).options.authDomain,
                  e = (function (t) {
                    var n = (function (t, n) {
                      return t.b.get(Wh, t.a).then(function (t) {
                        return t && n && (t.authDomain = n), Gh(t || {});
                      });
                    })(t.D, hl(t).options.authDomain).then(function (n) {
                      return (t.m = n) && (n.ha = t.D), Xh(t.D);
                    });
                    return pl(t, n);
                  })(t)
                    .then(function () {
                      return tl(t.i, n, t.R);
                    })
                    .then(function (n) {
                      return n
                        ? ((n.ha = t.D),
                          t.m && (t.m.ga || null) == (n.ga || null)
                            ? n
                            : n
                                .reload()
                                .then(function () {
                                  return Zh(t.i, n).then(function () {
                                    return n;
                                  });
                                })
                                .o(function (e) {
                                  return 'auth/network-request-failed' == e.code ? n : Qh(t.i);
                                }))
                        : null;
                    })
                    .then(function (n) {
                      ul(t, n || null);
                    });
                return pl(t, e);
              })(this)
            )),
            (this.h = pl(
              this,
              (function (t) {
                return t.$.then(function () {
                  return sl(t);
                })
                  .o(function () {})
                  .then(function () {
                    if (!t.l) return t.ja();
                  })
                  .o(function () {})
                  .then(function () {
                    if (!t.l) {
                      t.ba = !0;
                      var n = t.i;
                      n.b.addListener($h('local'), n.a, t.ja);
                    }
                  });
              })(this)
            )),
            (this.ba = !1),
            (this.ja = I(this.Zc, this)),
            (this.Ba = I(this.da, this)),
            (this.qa = I(this.mc, this)),
            (this.za = I(this.wc, this)),
            (this.Aa = I(this.xc, this)),
            (this.b = null),
            (function (t) {
              var n = hl(t).options.authDomain,
                e = hl(t).options.apiKey;
              n &&
                Pi() &&
                (t.Oa = t.$.then(function () {
                  if (!t.l) {
                    if (((t.b = Fc(n, e, hl(t).name, t.R)), Cc(t.b, t), ll(t) && Sh(ll(t)), t.m)) {
                      Sh(t.m);
                      var i = t.m;
                      i.xa(t.la()), gh(i, t), yh((i = t.m), t.J), wh(i, t), mh((i = t.m), t.R), bh(i, t), (t.m = null);
                    }
                    return t.b;
                  }
                }));
            })(this),
            (this.INTERNAL = {}),
            (this.INTERNAL.delete = I(this.delete, this)),
            (this.INTERNAL.logFramework = I(this.Gc, this)),
            (this.u = 0),
            Ie.call(this),
            (function (t) {
              Object.defineProperty(t, 'lc', {
                get: function () {
                  return this.la();
                },
                set: function (t) {
                  this.xa(t);
                },
                enumerable: !1,
              }),
                (t.aa = null),
                Object.defineProperty(t, 'ti', {
                  get: function () {
                    return this.T();
                  },
                  set: function (t) {
                    this.zb(t);
                  },
                  enumerable: !1,
                }),
                (t.S = null),
                Object.defineProperty(t, 'emulatorConfig', {
                  get: function () {
                    if (this.R) {
                      var t = Ve(this.R.url);
                      t = Zi({ protocol: t.c, host: t.a, port: t.g, options: Zi({ disableWarnings: this.R.ec }) });
                    } else t = null;
                    return t;
                  },
                  enumerable: !1,
                });
            })(this),
            (this.J = []),
            (this.R = null);
        }
        function il(t) {
          $n.call(this, 'languageCodeChanged'), (this.h = t);
        }
        function rl(t) {
          $n.call(this, 'emulatorConfigChanged'), (this.c = t);
        }
        function ol(t) {
          $n.call(this, 'frameworkChanged'), (this.f = t);
        }
        function al(t) {
          return t.Oa || On(new S('auth-domain-config-required'));
        }
        function sl(t) {
          if (!Pi()) return On(new S('operation-not-supported-in-this-environment'));
          var n = al(t)
            .then(function () {
              return t.b.ra();
            })
            .then(function (t) {
              return t ? Zi(t) : null;
            });
          return pl(t, n);
        }
        function ul(t, n) {
          ll(t) &&
            ((function (t, n) {
              z(t.W, function (t) {
                return t == n;
              });
            })(ll(t), t.Ba),
            fe(ll(t), 'tokenChanged', t.qa),
            fe(ll(t), 'userDeleted', t.za),
            fe(ll(t), 'userInvalidated', t.Aa),
            Eh(ll(t))),
            n &&
              (n.W.push(t.Ba),
              ce(n, 'tokenChanged', t.qa),
              ce(n, 'userDeleted', t.za),
              ce(n, 'userInvalidated', t.Aa),
              0 < t.u && Th(n)),
            zi(t, 'currentUser', n),
            n && (n.xa(t.la()), gh(n, t), yh(n, t.J), wh(n, t), mh(n, t.R), bh(n, t));
        }
        function cl(t, n) {
          var e = null,
            i = null;
          return pl(
            t,
            n
              .then(
                function (n) {
                  return (
                    (e = Uo(n)),
                    (i = Yr(n)),
                    (function (t, n) {
                      var e = {};
                      return (
                        (e.apiKey = hl(t).options.apiKey),
                        (e.authDomain = hl(t).options.authDomain),
                        (e.appName = hl(t).name),
                        t.R && (e.emulatorConfig = t.R),
                        t.$.then(function () {
                          return (function (t, n, e, i) {
                            var r = new vh(t, n);
                            return (
                              e && (r.ha = e),
                              i && yh(r, i),
                              r.reload().then(function () {
                                return r;
                              })
                            );
                          })(e, n, t.D, t.Ga());
                        })
                          .then(function (n) {
                            return ll(t) && n.uid == ll(t).uid ? (Lh(ll(t), n), t.da(n)) : (ul(t, n), Sh(n), t.da(n));
                          })
                          .then(function () {
                            dl(t);
                          })
                      );
                    })(t, n)
                  );
                },
                function (n) {
                  var e = null;
                  throw (n && 'auth/multi-factor-auth-required' === n.code && (e = nh(n.w(), t, I(t.kc, t))), e || n);
                }
              )
              .then(function () {
                return Zi({ user: ll(t), credential: e, additionalUserInfo: i, operationType: 'signIn' });
              })
          );
        }
        function hl(t) {
          return t.app;
        }
        function ll(t) {
          return t.currentUser;
        }
        function fl(t) {
          return (ll(t) && ll(t)._lat) || null;
        }
        function dl(t) {
          if (t.ba) {
            for (var n = 0; n < t.s.length; n++) t.s[n] && t.s[n](fl(t));
            if (t.W !== t.getUid() && t.N.length)
              for (t.W = t.getUid(), n = 0; n < t.N.length; n++) t.N[n] && t.N[n](fl(t));
          }
        }
        function pl(t, n) {
          return (
            t.P.push(n),
            n.oa(function () {
              Y(t.P, n);
            }),
            n
          );
        }
        function vl() {}
        function ml() {
          (this.a = {}), (this.b = 1e12);
        }
        (Jh.prototype.yb = function (t) {
          var n = null,
            e = this;
          return (
            (function (t) {
              var n = new S('invalid-persistence-type'),
                e = new S('unsupported-persistence-type');
              t: {
                for (i in zu)
                  if (zu[i] == t) {
                    var i = !0;
                    break t;
                  }
                i = !1;
              }
              if (!i || 'string' != typeof t) throw n;
              switch (Ti()) {
                case 'ReactNative':
                  if ('session' === t) throw e;
                  break;
                case 'Node':
                  if ('none' !== t) throw e;
                  break;
                case 'Worker':
                  if ('session' === t || (!Ou() && 'none' !== t)) throw e;
                  break;
                default:
                  if (!Ri() && 'none' !== t) throw e;
              }
            })(t),
            nl(this, function () {
              return t != e.c.F
                ? e.b
                    .get(e.c, e.a)
                    .then(function (i) {
                      return (n = i), Yh(e, t);
                    })
                    .then(function () {
                      if (((e.c = $h(t)), n)) return e.b.set(e.c, n, e.a);
                    })
                : _n();
            })
          );
        }),
          A(el, Ie),
          A(il, $n),
          A(rl, $n),
          A(ol, $n),
          ((t = el.prototype).yb = function (t) {
            return pl(this, (t = this.i.yb(t)));
          }),
          (t.xa = function (t) {
            this.aa === t || this.l || ((this.aa = t), ns(this.a, this.aa), this.dispatchEvent(new il(this.la())));
          }),
          (t.la = function () {
            return this.aa;
          }),
          (t.fd = function () {
            var t = s.navigator;
            this.xa((t && ((t.languages && t.languages[0]) || t.language || t.userLanguage)) || null);
          }),
          (t.gd = function (t, n) {
            if (!this.R) {
              if (!/^https?:\/\//.test(t))
                throw new S('argument-error', 'Emulator URL must start with a valid scheme (http:// or https://).');
              (function (t) {
                'undefined' != typeof console &&
                  'function' == typeof console.info &&
                  console.info(
                    'WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.'
                  ),
                  s.document &&
                    !t &&
                    bi().then(function () {
                      var t = s.document.createElement('div');
                      (t.innerText = 'Running in emulator mode. Do not use with production credentials.'),
                        (t.style.position = 'fixed'),
                        (t.style.width = '100%'),
                        (t.style.backgroundColor = '#ffffff'),
                        (t.style.border = '.1em solid #000000'),
                        (t.style.color = '#b50000'),
                        (t.style.bottom = '0px'),
                        (t.style.left = '0px'),
                        (t.style.margin = '0px'),
                        (t.style.zIndex = 1e4),
                        (t.style.textAlign = 'center'),
                        t.classList.add('firebase-emulator-warning'),
                        s.document.body.appendChild(t);
                    });
              })((n = !!n && !!n.disableWarnings)),
                (this.R = { url: t, ec: n }),
                (this.settings.jb = !0),
                es(this.a, this.R),
                this.dispatchEvent(new rl(this.R));
            }
          }),
          (t.Gc = function (t) {
            this.J.push(t),
              rs(this.a, i.a.SDK_VERSION ? _i(i.a.SDK_VERSION, this.J) : null),
              this.dispatchEvent(new ol(this.J));
          }),
          (t.Ga = function () {
            return Z(this.J);
          }),
          (t.zb = function (t) {
            this.S === t || this.l || ((this.S = t), (this.a.b = this.S));
          }),
          (t.T = function () {
            return this.S;
          }),
          (t.toJSON = function () {
            return {
              apiKey: hl(this).options.apiKey,
              authDomain: hl(this).options.authDomain,
              appName: hl(this).name,
              currentUser: ll(this) && ll(this).w(),
            };
          }),
          (t.Gb = function (t, n) {
            switch (t) {
              case 'unknown':
              case 'signInViaRedirect':
                return !0;
              case 'signInViaPopup':
                return this.g == n && !!this.f;
              default:
                return !1;
            }
          }),
          (t.na = function (t, n, e, i) {
            'signInViaPopup' == t &&
              this.g == i &&
              (e && this.C ? this.C(e) : n && !e && this.f && this.f(n),
              this.c && (this.c.cancel(), (this.c = null)),
              delete this.f,
              delete this.C);
          }),
          (t.Fa = function (t, n) {
            return 'signInViaRedirect' == t || ('signInViaPopup' == t && this.g == n && this.f)
              ? I(this.ic, this)
              : null;
          }),
          (t.ic = function (t, n, e, i) {
            var r = this,
              o = { requestUri: t, postBody: i, sessionId: n, tenantId: e };
            return (
              this.c && (this.c.cancel(), (this.c = null)),
              r.$.then(function () {
                return cl(r, gs(r.a, o));
              })
            );
          }),
          (t.Xc = function (t) {
            if (!Pi()) return On(new S('operation-not-supported-in-this-environment'));
            var n = this,
              e = Jr(t.providerId),
              r = Vi(),
              o = null;
            (!xi() || wi()) &&
              hl(this).options.authDomain &&
              t.isOAuthProvider &&
              (o = vu(
                hl(this).options.authDomain,
                hl(this).options.apiKey,
                hl(this).name,
                'signInViaPopup',
                t,
                null,
                r,
                i.a.SDK_VERSION || null,
                null,
                null,
                this.T(),
                this.R
              ));
            var a = vi(o, e && e.va, e && e.ua);
            return pl(
              this,
              (e = al(this)
                .then(function (e) {
                  return Lc(e, a, 'signInViaPopup', t, r, !!o, n.T());
                })
                .then(function () {
                  return new In(function (t, e) {
                    n.na('signInViaPopup', null, new S('cancelled-popup-request'), n.g),
                      (n.f = t),
                      (n.C = e),
                      (n.g = r),
                      (n.c = jc(n.b, n, 'signInViaPopup', a, r));
                  });
                })
                .then(function (t) {
                  return a && pi(a), t ? Zi(t) : null;
                })
                .o(function (t) {
                  throw (a && pi(a), t);
                }))
            );
          }),
          (t.Yc = function (t) {
            if (!Pi()) return On(new S('operation-not-supported-in-this-environment'));
            var n = this;
            return pl(
              this,
              al(this)
                .then(function () {
                  return (function (t) {
                    return nl(t, function () {
                      return t.b.set(zh, t.c.F, t.a);
                    });
                  })(n.i);
                })
                .then(function () {
                  return Mc(n.b, 'signInViaRedirect', t, void 0, n.T());
                })
            );
          }),
          (t.ra = function () {
            var t = this;
            return sl(this)
              .then(function (n) {
                return t.b && Hc(t.b.b), n;
              })
              .o(function (n) {
                throw (t.b && Hc(t.b.b), n);
              });
          }),
          (t.dd = function (t) {
            if (!t) return On(new S('null-user'));
            if (this.S != t.tenantId) return On(new S('tenant-id-mismatch'));
            var n = this,
              e = {};
            (e.apiKey = hl(this).options.apiKey),
              (e.authDomain = hl(this).options.authDomain),
              (e.appName = hl(this).name);
            var i = (function (t, n, e, i) {
              var r = t.h,
                o = {};
              return (
                (o[za] = r.b && r.b.toString()),
                (o.refreshToken = r.a),
                (n = new vh(n || { apiKey: t.l, authDomain: t.s, appName: t.m }, o)),
                e && (n.ha = e),
                i && yh(n, i),
                Lh(n, t),
                n
              );
            })(t, e, n.D, n.Ga());
            return pl(
              this,
              this.h
                .then(function () {
                  if (hl(n).options.apiKey != t.l) return i.reload();
                })
                .then(function () {
                  return ll(n) && t.uid == ll(n).uid ? (Lh(ll(n), t), n.da(t)) : (ul(n, i), Sh(i), n.da(i));
                })
                .then(function () {
                  dl(n);
                })
            );
          }),
          (t.Bb = function () {
            var t = this;
            return pl(
              this,
              this.h.then(function () {
                return (
                  t.b && Hc(t.b.b),
                  ll(t)
                    ? (ul(t, null),
                      Qh(t.i).then(function () {
                        dl(t);
                      }))
                    : _n()
                );
              })
            );
          }),
          (t.Zc = function () {
            var t = this;
            return tl(this.i, hl(this).options.authDomain).then(function (n) {
              if (!t.l) {
                var e;
                if ((e = ll(t) && n)) {
                  e = ll(t).uid;
                  var i = n.uid;
                  e = null != e && '' !== e && null != i && '' !== i && e == i;
                }
                if (e) return Lh(ll(t), n), ll(t).I();
                (ll(t) || n) && (ul(t, n), n && (Sh(n), (n.ha = t.D)), t.b && Cc(t.b, t), dl(t));
              }
            });
          }),
          (t.da = function (t) {
            return Zh(this.i, t);
          }),
          (t.mc = function () {
            dl(this), this.da(ll(this));
          }),
          (t.wc = function () {
            this.Bb();
          }),
          (t.xc = function () {
            this.Bb();
          }),
          (t.kc = function (t) {
            var n = this;
            return this.h.then(function () {
              return cl(n, _n(t));
            });
          }),
          (t.zc = function (t) {
            var n = this;
            this.addAuthTokenListener(function () {
              t.next(ll(n));
            });
          }),
          (t.Ac = function (t) {
            var n = this;
            !(function (t, n) {
              t.N.push(n),
                pl(
                  t,
                  t.h.then(function () {
                    !t.l && J(t.N, n) && t.W !== t.getUid() && ((t.W = t.getUid()), n(fl(t)));
                  })
                );
            })(this, function () {
              t.next(ll(n));
            });
          }),
          (t.Ic = function (t, n, e) {
            var i = this;
            return (
              this.ba &&
                Promise.resolve().then(function () {
                  'function' == typeof t ? t(ll(i)) : 'function' == typeof t.next && t.next(ll(i));
                }),
              this.Pa(t, n, e)
            );
          }),
          (t.Hc = function (t, n, e) {
            var i = this;
            return (
              this.ba &&
                Promise.resolve().then(function () {
                  (i.W = i.getUid()), 'function' == typeof t ? t(ll(i)) : 'function' == typeof t.next && t.next(ll(i));
                }),
              this.ib(t, n, e)
            );
          }),
          (t.nc = function (t) {
            var n = this;
            return pl(
              this,
              this.h.then(function () {
                return ll(n)
                  ? ll(n)
                      .I(t)
                      .then(function (t) {
                        return { accessToken: t };
                      })
                  : null;
              })
            );
          }),
          (t.Tc = function (t) {
            var n = this;
            return this.h
              .then(function () {
                return cl(n, tu(n.a, Js, { token: t }));
              })
              .then(function (t) {
                var e = t.user;
                return Dh(e, 'isAnonymous', !1), n.da(e), t;
              });
          }),
          (t.Uc = function (t, n) {
            var e = this;
            return this.h.then(function () {
              return cl(e, tu(e.a, Ys, { email: t, password: n }));
            });
          }),
          (t.dc = function (t, n) {
            var e = this;
            return this.h.then(function () {
              return cl(e, tu(e.a, Es, { email: t, password: n }));
            });
          }),
          (t.ab = function (t) {
            var n = this;
            return this.h.then(function () {
              return cl(n, t.ka(n.a));
            });
          }),
          (t.Sc = function (t) {
            return (
              Ji(
                'firebase.auth.Auth.prototype.signInAndRetrieveDataWithCredential is deprecated. Please use firebase.auth.Auth.prototype.signInWithCredential instead.'
              ),
              this.ab(t)
            );
          }),
          (t.Ab = function () {
            var t = this;
            return this.h.then(function () {
              var n = ll(t);
              if (n && n.isAnonymous) {
                var e = Zi({ providerId: null, isNewUser: !1 });
                return Zi({ user: n, credential: null, additionalUserInfo: e, operationType: 'signIn' });
              }
              return cl(t, t.a.Ab()).then(function (n) {
                var e = n.user;
                return Dh(e, 'isAnonymous', !0), t.da(e), n;
              });
            });
          }),
          (t.getUid = function () {
            return (ll(this) && ll(this).uid) || null;
          }),
          (t.cc = function (t) {
            this.addAuthTokenListener(t), this.u++, 0 < this.u && ll(this) && Th(ll(this));
          }),
          (t.Pc = function (t) {
            var n = this;
            G(this.s, function (e) {
              e == t && n.u--;
            }),
              0 > this.u && (this.u = 0),
              0 == this.u && ll(this) && Eh(ll(this)),
              this.removeAuthTokenListener(t);
          }),
          (t.addAuthTokenListener = function (t) {
            var n = this;
            this.s.push(t),
              pl(
                this,
                this.h.then(function () {
                  n.l || (J(n.s, t) && t(fl(n)));
                })
              );
          }),
          (t.removeAuthTokenListener = function (t) {
            z(this.s, function (n) {
              return n == t;
            });
          }),
          (t.delete = function () {
            this.l = !0;
            for (var t = 0; t < this.P.length; t++) this.P[t].cancel('app-deleted');
            return (
              (this.P = []),
              this.i && (t = this.i).b.removeListener($h('local'), t.a, this.ja),
              this.b && (Rc(this.b, this), Hc(this.b.b)),
              Promise.resolve()
            );
          }),
          (t.hc = function (t) {
            return pl(
              this,
              (function (t, n) {
                return tu(t, As, { identifier: n, continueUri: Di() ? hi() : 'http://localhost' }).then(function (t) {
                  return t.signinMethods || [];
                });
              })(this.a, t)
            );
          }),
          (t.Bc = function (t) {
            return !!Po(t);
          }),
          (t.xb = function (t, n) {
            var e = this;
            return pl(
              this,
              _n()
                .then(function () {
                  var t = new Cr(n);
                  if (!t.c) throw new S('argument-error', Dr + ' must be true when sending sign in link to email');
                  return Fr(t);
                })
                .then(function (n) {
                  return e.a.xb(t, n);
                })
                .then(function () {})
            );
          }),
          (t.jd = function (t) {
            return this.Sa(t).then(function (t) {
              return t.data.email;
            });
          }),
          (t.ob = function (t, n) {
            return pl(
              this,
              this.a.ob(t, n).then(function () {})
            );
          }),
          (t.Sa = function (t) {
            return pl(
              this,
              this.a.Sa(t).then(function (t) {
                return new sr(t);
              })
            );
          }),
          (t.kb = function (t) {
            return pl(
              this,
              this.a.kb(t).then(function () {})
            );
          }),
          (t.wb = function (t, n) {
            var e = this;
            return pl(
              this,
              _n()
                .then(function () {
                  return void 0 === n || pt(n) ? {} : Fr(new Cr(n));
                })
                .then(function (n) {
                  return e.a.wb(t, n);
                })
                .then(function () {})
            );
          }),
          (t.Wc = function (t, n) {
            return pl(this, Yc(this, t, n, I(this.ab, this)));
          }),
          (t.Vc = function (t, n) {
            var e = this;
            return pl(
              this,
              _n().then(function () {
                var i = n || hi(),
                  r = Ro(t, i);
                if (!(i = Po(i))) throw new S('argument-error', 'Invalid email link!');
                if (i.tenantId !== e.T()) throw new S('tenant-id-mismatch');
                return e.ab(r);
              })
            );
          }),
          (vl.prototype.render = function () {}),
          (vl.prototype.reset = function () {}),
          (vl.prototype.getResponse = function () {}),
          (vl.prototype.execute = function () {});
        var gl = null;
        function bl(t, n) {
          return ((n = yl(n)) && t.a[n]) || null;
        }
        function yl(t) {
          return (t = void 0 === t ? 1e12 : t) ? t.toString() : null;
        }
        function wl(t, n) {
          (this.g = !1),
            (this.c = n),
            (this.a = this.b = null),
            (this.h = 'invisible' !== this.c.size),
            (this.f = cn(t));
          var e = this;
          (this.i = function () {
            e.execute();
          }),
            this.h ? this.execute() : ce(this.f, 'click', this.i);
        }
        function Il(t) {
          if (t.g) throw Error('reCAPTCHA mock was already deleted!');
        }
        function Tl() {}
        function El() {}
        (ml.prototype.render = function (t, n) {
          return (this.a[this.b.toString()] = new wl(t, n)), this.b++;
        }),
          (ml.prototype.reset = function (t) {
            var n = bl(this, t);
            (t = yl(t)), n && t && (n.delete(), delete this.a[t]);
          }),
          (ml.prototype.getResponse = function (t) {
            return (t = bl(this, t)) ? t.getResponse() : null;
          }),
          (ml.prototype.execute = function (t) {
            (t = bl(this, t)) && t.execute();
          }),
          (wl.prototype.getResponse = function () {
            return Il(this), this.b;
          }),
          (wl.prototype.execute = function () {
            Il(this);
            var t = this;
            this.a ||
              (this.a = setTimeout(function () {
                t.b = (function () {
                  for (var t = 50, n = []; 0 < t; )
                    n.push(
                      '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.charAt(
                        Math.floor(62 * Math.random())
                      )
                    ),
                      t--;
                  return n.join('');
                })();
                var n = t.c.callback,
                  e = t.c['expired-callback'];
                if (n)
                  try {
                    n(t.b);
                  } catch (i) {}
                t.a = setTimeout(function () {
                  if (((t.a = null), (t.b = null), e))
                    try {
                      e();
                    } catch (i) {}
                  t.h && t.execute();
                }, 6e4);
              }, 500));
          }),
          (wl.prototype.delete = function () {
            Il(this), (this.g = !0), clearTimeout(this.a), (this.a = null), fe(this.f, 'click', this.i);
          }),
          zi(Tl, 'FACTOR_ID', 'phone'),
          (El.prototype.g = function () {
            return gl || (gl = new ml()), _n(gl);
          }),
          (El.prototype.c = function () {});
        var Al = null;
        function kl() {
          (this.b = s.grecaptcha ? 1 / 0 : 0),
            (this.f = null),
            (this.a = '__rcb' + Math.floor(1e6 * Math.random()).toString());
        }
        var Sl = new yt(Et, 'https://www.google.com/recaptcha/api.js?onload=%{onload}&render=explicit&hl=%{hl}'),
          Nl = new qi(3e4, 6e4);
        (kl.prototype.g = function (t) {
          var n = this;
          return new In(function (e, i) {
            var r = setTimeout(function () {
              i(new S('network-request-failed'));
            }, Nl.get());
            !s.grecaptcha || (t !== n.f && !n.b)
              ? ((s[n.a] = function () {
                  if (s.grecaptcha) {
                    n.f = t;
                    var o = s.grecaptcha.render;
                    (s.grecaptcha.render = function (t, e) {
                      return (t = o(t, e)), n.b++, t;
                    }),
                      clearTimeout(r),
                      e(s.grecaptcha);
                  } else clearTimeout(r), i(new S('internal-error'));
                  delete s[n.a];
                }),
                _n(Ka(Nt(Sl, { onload: n.a, hl: t || '' }))).o(function () {
                  clearTimeout(r), i(new S('internal-error', 'Unable to load external reCAPTCHA dependencies!'));
                }))
              : (clearTimeout(r), e(s.grecaptcha));
          });
        }),
          (kl.prototype.c = function () {
            this.b--;
          });
        var _l = null;
        function Ol(t, n, e, i, r, o, a) {
          if (
            (zi(this, 'type', 'recaptcha'),
            (this.c = this.f = null),
            (this.J = !1),
            (this.v = n),
            (this.g = null),
            a ? (Al || (Al = new El()), (a = Al)) : (_l || (_l = new kl()), (a = _l)),
            (this.m = a),
            (this.a = e || { theme: 'light', type: 'image' }),
            (this.h = []),
            this.a[Pl])
          )
            throw new S(
              'argument-error',
              'sitekey should not be provided for reCAPTCHA as one is automatically provisioned for the current project.'
            );
          if (((this.i = 'invisible' === this.a[Dl]), !s.document))
            throw new S(
              'operation-not-supported-in-this-environment',
              'RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment with DOM support.'
            );
          if (!cn(n) || (!this.i && cn(n).hasChildNodes()))
            throw new S(
              'argument-error',
              'reCAPTCHA container is either not found or already contains inner elements!'
            );
          (this.s = new Ja(t, o || null, r || null)),
            (this.u =
              i ||
              function () {
                return null;
              });
          var u = this;
          this.l = [];
          var c = this.a[Cl];
          this.a[Cl] = function (t) {
            if ((Ll(u, t), 'function' == typeof c)) c(t);
            else if ('string' == typeof c) {
              var n = Ci(c, s);
              'function' == typeof n && n(t);
            }
          };
          var h = this.a[Rl];
          this.a[Rl] = function () {
            if ((Ll(u, null), 'function' == typeof h)) h();
            else if ('string' == typeof h) {
              var t = Ci(h, s);
              'function' == typeof t && t();
            }
          };
        }
        var Cl = 'callback',
          Rl = 'expired-callback',
          Pl = 'sitekey',
          Dl = 'size';
        function Ll(t, n) {
          for (var e = 0; e < t.l.length; e++)
            try {
              t.l[e](n);
            } catch (i) {}
        }
        function xl(t, n) {
          return (
            t.h.push(n),
            n.oa(function () {
              Y(t.h, n);
            }),
            n
          );
        }
        function Ml(t) {
          if (t.J) throw new S('internal-error', 'RecaptchaVerifier instance has been destroyed.');
        }
        function jl(t, n, e) {
          var r = !1;
          try {
            this.b = e || i.a.app();
          } catch (s) {
            throw new S('argument-error', 'No firebase.app.App instance is currently initialized.');
          }
          if (!this.b.options || !this.b.options.apiKey) throw new S('invalid-api-key');
          e = this.b.options.apiKey;
          var o = this,
            a = null;
          try {
            a = this.b.auth().Ga();
          } catch (s) {}
          try {
            r = this.b.auth().settings.appVerificationDisabledForTesting;
          } catch (s) {}
          (a = i.a.SDK_VERSION ? _i(i.a.SDK_VERSION, a) : null),
            Ol.call(
              this,
              e,
              t,
              n,
              function () {
                try {
                  var t = o.b.auth().la();
                } catch (n) {
                  t = null;
                }
                return t;
              },
              a,
              P(_),
              r
            );
        }
        function Ul(t, n, e, i) {
          t: {
            e = Array.prototype.slice.call(e);
            for (var r = 0, o = !1, a = 0; a < n.length; a++)
              if (n[a].optional) o = !0;
              else {
                if (o)
                  throw new S(
                    'internal-error',
                    'Argument validator encountered a required argument after an optional argument.'
                  );
                r++;
              }
            if (((o = n.length), e.length < r || o < e.length))
              i =
                'Expected ' +
                (r == o ? (1 == r ? '1 argument' : r + ' arguments') : r + '-' + o + ' arguments') +
                ' but got ' +
                e.length +
                '.';
            else {
              for (r = 0; r < e.length; r++)
                if (((o = n[r].optional && void 0 === e[r]), !n[r].M(e[r]) && !o)) {
                  if (((n = n[r]), 0 > r || r >= Vl.length))
                    throw new S('internal-error', 'Argument validator received an unsupported number of arguments.');
                  (e = Vl[r]),
                    (i = (i ? '' : e + ' argument ') + (n.name ? '"' + n.name + '" ' : '') + 'must be ' + n.K + '.');
                  break t;
                }
              i = null;
            }
          }
          if (i) throw new S('argument-error', t + ' failed: ' + i);
        }
        ((t = Ol.prototype).Ia = function () {
          var t = this;
          return this.f
            ? this.f
            : (this.f = xl(
                this,
                _n()
                  .then(function () {
                    if (Di() && !Ii()) return bi();
                    throw new S(
                      'operation-not-supported-in-this-environment',
                      'RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment.'
                    );
                  })
                  .then(function () {
                    return t.m.g(t.u());
                  })
                  .then(function (n) {
                    return (t.g = n), tu(t.s, js, {});
                  })
                  .then(function (n) {
                    t.a[Pl] = n.recaptchaSiteKey;
                  })
                  .o(function (n) {
                    throw ((t.f = null), n);
                  })
              ));
        }),
          (t.render = function () {
            Ml(this);
            var t = this;
            return xl(
              this,
              this.Ia().then(function () {
                if (null === t.c) {
                  var n = t.v;
                  if (!t.i) {
                    var e = cn(n);
                    (n = (function (t, n, e) {
                      var i = arguments,
                        r = document,
                        o = String(i[0]),
                        a = i[1];
                      if (!un && a && (a.name || a.type)) {
                        if (((o = ['<', o]), a.name && o.push(' name="', Gt(a.name), '"'), a.type)) {
                          o.push(' type="', Gt(a.type), '"');
                          var s = {};
                          gt(s, a), delete s.type, (a = s);
                        }
                        o.push('>'), (o = o.join(''));
                      }
                      return (
                        (o = vn(r, o)),
                        a &&
                          ('string' == typeof a
                            ? (o.className = a)
                            : Array.isArray(a)
                            ? (o.className = a.join(' '))
                            : hn(o, a)),
                        2 < i.length && pn(r, o, i),
                        o
                      );
                    })('DIV')),
                      e.appendChild(n);
                  }
                  t.c = t.g.render(n, t.a);
                }
                return t.c;
              })
            );
          }),
          (t.verify = function () {
            Ml(this);
            var t = this;
            return xl(
              this,
              this.render().then(function (n) {
                return new In(function (e) {
                  var i = t.g.getResponse(n);
                  if (i) e(i);
                  else {
                    var r = function (n) {
                      n &&
                        ((function (t, n) {
                          z(t.l, function (t) {
                            return t == n;
                          });
                        })(t, r),
                        e(n));
                    };
                    t.l.push(r), t.i && t.g.execute(t.c);
                  }
                });
              })
            );
          }),
          (t.reset = function () {
            Ml(this), null !== this.c && this.g.reset(this.c);
          }),
          (t.clear = function () {
            Ml(this), (this.J = !0), this.m.c();
            for (var t = 0; t < this.h.length; t++) this.h[t].cancel('RecaptchaVerifier instance has been destroyed.');
            if (!this.i) {
              t = cn(this.v);
              for (var n; (n = t.firstChild); ) t.removeChild(n);
            }
          }),
          A(jl, Ol);
        var Vl = 'First Second Third Fourth Fifth Sixth Seventh Eighth Ninth'.split(' ');
        function Fl(t, n) {
          return {
            name: t || '',
            K: 'a valid string',
            optional: !!n,
            M: function (t) {
              return 'string' == typeof t;
            },
          };
        }
        function Kl(t, n) {
          return {
            name: t || '',
            K: 'a boolean',
            optional: !!n,
            M: function (t) {
              return 'boolean' == typeof t;
            },
          };
        }
        function ql(t, n) {
          return { name: t || '', K: 'a valid object', optional: !!n, M: v };
        }
        function Hl(t, n) {
          return {
            name: t || '',
            K: 'a function',
            optional: !!n,
            M: function (t) {
              return 'function' == typeof t;
            },
          };
        }
        function Gl(t, n) {
          return {
            name: t || '',
            K: 'null',
            optional: !!n,
            M: function (t) {
              return null === t;
            },
          };
        }
        function Bl(t) {
          return {
            name: t ? t + 'Credential' : 'credential',
            K: t ? 'a valid ' + t + ' credential' : 'a valid credential',
            optional: !1,
            M: function (n) {
              return !!n && !(!n.ka || (t && n.providerId !== t));
            },
          };
        }
        function Wl(t, n) {
          return v(t) && 'string' == typeof t.type && t.type === n && 'function' == typeof t.Ha;
        }
        function Xl(t) {
          return v(t) && 'string' == typeof t.uid;
        }
        function Jl(t, n, e, i) {
          return {
            name: e || '',
            K: t.K + ' or ' + n.K,
            optional: !!i,
            M: function (e) {
              return t.M(e) || n.M(e);
            },
          };
        }
        function Yl(t, n) {
          for (var e in n) {
            var i = n[e].name;
            t[i] = Zl(i, t[e], n[e].j);
          }
        }
        function zl(t, n) {
          for (var e in n) {
            var i = n[e].name;
            i !== e &&
              Object.defineProperty(t, i, {
                get: T(function (t) {
                  return this[t];
                }, e),
                set: T(
                  function (t, n, e, i) {
                    Ul(t, [e], [i], !0), (this[n] = i);
                  },
                  i,
                  e,
                  n[e].lb
                ),
                enumerable: !0,
              });
          }
        }
        function $l(t, n, e, i) {
          t[n] = Zl(n, e, i);
        }
        function Zl(t, n, e) {
          function i() {
            var t = Array.prototype.slice.call(arguments);
            return Ul(o, e, t), n.apply(this, t);
          }
          if (!e) return n;
          var r,
            o = (function (t) {
              return (t = t.split('.'))[t.length - 1];
            })(t);
          for (r in n) i[r] = n[r];
          for (r in n.prototype) i.prototype[r] = n.prototype[r];
          return i;
        }
        Yl(el.prototype, {
          kb: { name: 'applyActionCode', j: [Fl('code')] },
          Sa: { name: 'checkActionCode', j: [Fl('code')] },
          ob: { name: 'confirmPasswordReset', j: [Fl('code'), Fl('newPassword')] },
          dc: { name: 'createUserWithEmailAndPassword', j: [Fl('email'), Fl('password')] },
          hc: { name: 'fetchSignInMethodsForEmail', j: [Fl('email')] },
          ra: { name: 'getRedirectResult', j: [] },
          Bc: { name: 'isSignInWithEmailLink', j: [Fl('emailLink')] },
          Hc: {
            name: 'onAuthStateChanged',
            j: [Jl(ql(), Hl(), 'nextOrObserver'), Hl('opt_error', !0), Hl('opt_completed', !0)],
          },
          Ic: {
            name: 'onIdTokenChanged',
            j: [Jl(ql(), Hl(), 'nextOrObserver'), Hl('opt_error', !0), Hl('opt_completed', !0)],
          },
          wb: {
            name: 'sendPasswordResetEmail',
            j: [Fl('email'), Jl(ql('opt_actionCodeSettings', !0), Gl(null, !0), 'opt_actionCodeSettings', !0)],
          },
          xb: { name: 'sendSignInLinkToEmail', j: [Fl('email'), ql('actionCodeSettings')] },
          yb: { name: 'setPersistence', j: [Fl('persistence')] },
          Sc: { name: 'signInAndRetrieveDataWithCredential', j: [Bl()] },
          Ab: { name: 'signInAnonymously', j: [] },
          ab: { name: 'signInWithCredential', j: [Bl()] },
          Tc: { name: 'signInWithCustomToken', j: [Fl('token')] },
          Uc: { name: 'signInWithEmailAndPassword', j: [Fl('email'), Fl('password')] },
          Vc: { name: 'signInWithEmailLink', j: [Fl('email'), Fl('emailLink', !0)] },
          Wc: {
            name: 'signInWithPhoneNumber',
            j: [
              Fl('phoneNumber'),
              {
                name: 'applicationVerifier',
                K: 'an implementation of firebase.auth.ApplicationVerifier',
                optional: !1,
                M: function (t) {
                  return !(!t || 'string' != typeof t.type || 'function' != typeof t.verify);
                },
              },
            ],
          },
          Xc: {
            name: 'signInWithPopup',
            j: [
              {
                name: 'authProvider',
                K: 'a valid Auth provider',
                optional: !1,
                M: function (t) {
                  return !!(t && t.providerId && t.hasOwnProperty && t.hasOwnProperty('isOAuthProvider'));
                },
              },
            ],
          },
          Yc: {
            name: 'signInWithRedirect',
            j: [
              {
                name: 'authProvider',
                K: 'a valid Auth provider',
                optional: !1,
                M: function (t) {
                  return !!(t && t.providerId && t.hasOwnProperty && t.hasOwnProperty('isOAuthProvider'));
                },
              },
            ],
          },
          dd: {
            name: 'updateCurrentUser',
            j: [
              Jl(
                {
                  name: 'user',
                  K: 'an instance of Firebase User',
                  optional: !1,
                  M: function (t) {
                    return !!(t && t instanceof vh);
                  },
                },
                Gl(),
                'user'
              ),
            ],
          },
          Bb: { name: 'signOut', j: [] },
          toJSON: { name: 'toJSON', j: [Fl(null, !0)] },
          fd: { name: 'useDeviceLanguage', j: [] },
          gd: { name: 'useEmulator', j: [Fl('url'), ql('options', !0)] },
          jd: { name: 'verifyPasswordResetCode', j: [Fl('code')] },
        }),
          zl(el.prototype, {
            lc: { name: 'languageCode', lb: Jl(Fl(), Gl(), 'languageCode') },
            ti: { name: 'tenantId', lb: Jl(Fl(), Gl(), 'tenantId') },
          }),
          ((el.Persistence = zu).LOCAL = 'local'),
          (el.Persistence.SESSION = 'session'),
          (el.Persistence.NONE = 'none'),
          Yl(vh.prototype, {
            delete: { name: 'delete', j: [] },
            oc: { name: 'getIdTokenResult', j: [Kl('opt_forceRefresh', !0)] },
            I: { name: 'getIdToken', j: [Kl('opt_forceRefresh', !0)] },
            Cc: { name: 'linkAndRetrieveDataWithCredential', j: [Bl()] },
            rb: { name: 'linkWithCredential', j: [Bl()] },
            Dc: {
              name: 'linkWithPhoneNumber',
              j: [
                Fl('phoneNumber'),
                {
                  name: 'applicationVerifier',
                  K: 'an implementation of firebase.auth.ApplicationVerifier',
                  optional: !1,
                  M: function (t) {
                    return !(!t || 'string' != typeof t.type || 'function' != typeof t.verify);
                  },
                },
              ],
            },
            Ec: {
              name: 'linkWithPopup',
              j: [
                {
                  name: 'authProvider',
                  K: 'a valid Auth provider',
                  optional: !1,
                  M: function (t) {
                    return !!(t && t.providerId && t.hasOwnProperty && t.hasOwnProperty('isOAuthProvider'));
                  },
                },
              ],
            },
            Fc: {
              name: 'linkWithRedirect',
              j: [
                {
                  name: 'authProvider',
                  K: 'a valid Auth provider',
                  optional: !1,
                  M: function (t) {
                    return !!(t && t.providerId && t.hasOwnProperty && t.hasOwnProperty('isOAuthProvider'));
                  },
                },
              ],
            },
            Lc: { name: 'reauthenticateAndRetrieveDataWithCredential', j: [Bl()] },
            ub: { name: 'reauthenticateWithCredential', j: [Bl()] },
            Mc: {
              name: 'reauthenticateWithPhoneNumber',
              j: [
                Fl('phoneNumber'),
                {
                  name: 'applicationVerifier',
                  K: 'an implementation of firebase.auth.ApplicationVerifier',
                  optional: !1,
                  M: function (t) {
                    return !(!t || 'string' != typeof t.type || 'function' != typeof t.verify);
                  },
                },
              ],
            },
            Nc: {
              name: 'reauthenticateWithPopup',
              j: [
                {
                  name: 'authProvider',
                  K: 'a valid Auth provider',
                  optional: !1,
                  M: function (t) {
                    return !!(t && t.providerId && t.hasOwnProperty && t.hasOwnProperty('isOAuthProvider'));
                  },
                },
              ],
            },
            Oc: {
              name: 'reauthenticateWithRedirect',
              j: [
                {
                  name: 'authProvider',
                  K: 'a valid Auth provider',
                  optional: !1,
                  M: function (t) {
                    return !!(t && t.providerId && t.hasOwnProperty && t.hasOwnProperty('isOAuthProvider'));
                  },
                },
              ],
            },
            reload: { name: 'reload', j: [] },
            vb: {
              name: 'sendEmailVerification',
              j: [Jl(ql('opt_actionCodeSettings', !0), Gl(null, !0), 'opt_actionCodeSettings', !0)],
            },
            toJSON: { name: 'toJSON', j: [Fl(null, !0)] },
            cd: { name: 'unlink', j: [Fl('provider')] },
            Cb: { name: 'updateEmail', j: [Fl('email')] },
            Db: { name: 'updatePassword', j: [Fl('password')] },
            ed: { name: 'updatePhoneNumber', j: [Bl('phone')] },
            Eb: { name: 'updateProfile', j: [ql('profile')] },
            Fb: {
              name: 'verifyBeforeUpdateEmail',
              j: [Fl('email'), Jl(ql('opt_actionCodeSettings', !0), Gl(null, !0), 'opt_actionCodeSettings', !0)],
            },
          }),
          Yl(ml.prototype, {
            execute: { name: 'execute' },
            render: { name: 'render' },
            reset: { name: 'reset' },
            getResponse: { name: 'getResponse' },
          }),
          Yl(vl.prototype, {
            execute: { name: 'execute' },
            render: { name: 'render' },
            reset: { name: 'reset' },
            getResponse: { name: 'getResponse' },
          }),
          Yl(In.prototype, { oa: { name: 'finally' }, o: { name: 'catch' }, then: { name: 'then' } }),
          zl(Xc.prototype, {
            appVerificationDisabled: {
              name: 'appVerificationDisabledForTesting',
              lb: Kl('appVerificationDisabledForTesting'),
            },
          }),
          Yl(Jc.prototype, { confirm: { name: 'confirm', j: [Fl('verificationCode')] } }),
          $l(
            uo,
            'fromJSON',
            function (t) {
              t = 'string' == typeof t ? JSON.parse(t) : t;
              for (var n, e = [mo, Oo, Lo, fo], i = 0; i < e.length; i++) if ((n = e[i](t))) return n;
              return null;
            },
            [Jl(Fl(), ql(), 'json')]
          ),
          $l(
            Co,
            'credential',
            function (t, n) {
              return new _o(t, n);
            },
            [Fl('email'), Fl('password')]
          ),
          Yl(_o.prototype, { w: { name: 'toJSON', j: [Fl(null, !0)] } }),
          Yl(wo.prototype, {
            Ca: { name: 'addScope', j: [Fl('scope')] },
            Ka: { name: 'setCustomParameters', j: [ql('customOAuthParameters')] },
          }),
          $l(wo, 'credential', Io, [Jl(Fl(), ql(), 'token')]),
          $l(Co, 'credentialWithLink', Ro, [Fl('email'), Fl('emailLink')]),
          Yl(To.prototype, {
            Ca: { name: 'addScope', j: [Fl('scope')] },
            Ka: { name: 'setCustomParameters', j: [ql('customOAuthParameters')] },
          }),
          $l(To, 'credential', Eo, [Jl(Fl(), ql(), 'token')]),
          Yl(Ao.prototype, {
            Ca: { name: 'addScope', j: [Fl('scope')] },
            Ka: { name: 'setCustomParameters', j: [ql('customOAuthParameters')] },
          }),
          $l(Ao, 'credential', ko, [Jl(Fl(), Jl(ql(), Gl()), 'idToken'), Jl(Fl(), Gl(), 'accessToken', !0)]),
          Yl(So.prototype, { Ka: { name: 'setCustomParameters', j: [ql('customOAuthParameters')] } }),
          $l(So, 'credential', No, [Jl(Fl(), ql(), 'token'), Fl('secret', !0)]),
          Yl(yo.prototype, {
            Ca: { name: 'addScope', j: [Fl('scope')] },
            credential: {
              name: 'credential',
              j: [Jl(Fl(), Jl(ql(), Gl()), 'optionsOrIdToken'), Jl(Fl(), Gl(), 'accessToken', !0)],
            },
            Ka: { name: 'setCustomParameters', j: [ql('customOAuthParameters')] },
          }),
          Yl(po.prototype, { w: { name: 'toJSON', j: [Fl(null, !0)] } }),
          Yl(ho.prototype, { w: { name: 'toJSON', j: [Fl(null, !0)] } }),
          $l(Mo, 'credential', jo, [Fl('verificationId'), Fl('verificationCode')]),
          Yl(Mo.prototype, {
            gb: {
              name: 'verifyPhoneNumber',
              j: [
                Jl(
                  Fl(),
                  {
                    name: 'phoneInfoOptions',
                    K: 'valid phone info options',
                    optional: !1,
                    M: function (t) {
                      return (
                        !!t &&
                        (t.session && t.phoneNumber
                          ? Wl(t.session, ao) && 'string' == typeof t.phoneNumber
                          : t.session && t.multiFactorHint
                          ? Wl(t.session, so) && Xl(t.multiFactorHint)
                          : t.session && t.multiFactorUid
                          ? Wl(t.session, so) && 'string' == typeof t.multiFactorUid
                          : !!t.phoneNumber && 'string' == typeof t.phoneNumber)
                      );
                    },
                  },
                  'phoneInfoOptions'
                ),
                {
                  name: 'applicationVerifier',
                  K: 'an implementation of firebase.auth.ApplicationVerifier',
                  optional: !1,
                  M: function (t) {
                    return !(!t || 'string' != typeof t.type || 'function' != typeof t.verify);
                  },
                },
              ],
            },
          }),
          Yl(Do.prototype, { w: { name: 'toJSON', j: [Fl(null, !0)] } }),
          Yl(S.prototype, { toJSON: { name: 'toJSON', j: [Fl(null, !0)] } }),
          Yl(Wo.prototype, { toJSON: { name: 'toJSON', j: [Fl(null, !0)] } }),
          Yl(Bo.prototype, { toJSON: { name: 'toJSON', j: [Fl(null, !0)] } }),
          Yl(th.prototype, { toJSON: { name: 'toJSON', j: [Fl(null, !0)] } }),
          Yl($c.prototype, {
            Rc: {
              name: 'resolveSignIn',
              j: [
                {
                  name: 'multiFactorAssertion',
                  K: 'a valid multiFactorAssertion',
                  optional: !1,
                  M: function (t) {
                    return !!t && !!t.tb;
                  },
                },
              ],
            },
          }),
          Yl(ah.prototype, {
            Sb: { name: 'getSession', j: [] },
            fc: {
              name: 'enroll',
              j: [
                {
                  name: 'multiFactorAssertion',
                  K: 'a valid multiFactorAssertion',
                  optional: !1,
                  M: function (t) {
                    return !!t && !!t.tb;
                  },
                },
                Fl('displayName', !0),
              ],
            },
            bd: {
              name: 'unenroll',
              j: [
                Jl(
                  { name: 'multiFactorInfo', K: 'a valid multiFactorInfo', optional: !1, M: Xl },
                  Fl(),
                  'multiFactorInfoIdentifier'
                ),
              ],
            },
          }),
          Yl(jl.prototype, {
            clear: { name: 'clear', j: [] },
            render: { name: 'render', j: [] },
            verify: { name: 'verify', j: [] },
          }),
          $l(Ir, 'parseLink', Or, [Fl('link')]),
          $l(
            Tl,
            'assertion',
            function (t) {
              return new rh(t);
            },
            [Bl('phone')]
          ),
          (function () {
            if (void 0 === i.a || !i.a.INTERNAL || !i.a.INTERNAL.registerComponent)
              throw Error(
                'Cannot find the firebase namespace; be sure to include firebase-app.js before this library.'
              );
            var t = {
              ActionCodeInfo: {
                Operation: {
                  EMAIL_SIGNIN: cr,
                  PASSWORD_RESET: 'PASSWORD_RESET',
                  RECOVER_EMAIL: 'RECOVER_EMAIL',
                  REVERT_SECOND_FACTOR_ADDITION: ur,
                  VERIFY_AND_CHANGE_EMAIL: hr,
                  VERIFY_EMAIL: 'VERIFY_EMAIL',
                },
              },
              Auth: el,
              AuthCredential: uo,
              Error: S,
            };
            $l(t, 'EmailAuthProvider', Co, []),
              $l(t, 'FacebookAuthProvider', wo, []),
              $l(t, 'GithubAuthProvider', To, []),
              $l(t, 'GoogleAuthProvider', Ao, []),
              $l(t, 'TwitterAuthProvider', So, []),
              $l(t, 'OAuthProvider', yo, [Fl('providerId')]),
              $l(t, 'SAMLAuthProvider', bo, [Fl('providerId')]),
              $l(t, 'PhoneAuthProvider', Mo, [
                {
                  name: 'auth',
                  K: 'an instance of Firebase Auth',
                  optional: !0,
                  M: function (t) {
                    return !!(t && t instanceof el);
                  },
                },
              ]),
              $l(t, 'RecaptchaVerifier', jl, [
                Jl(
                  Fl(),
                  {
                    name: '',
                    K: 'an HTML element',
                    optional: !1,
                    M: function (t) {
                      return !!(t && t instanceof Element);
                    },
                  },
                  'recaptchaContainer'
                ),
                ql('recaptchaParameters', !0),
                {
                  name: 'app',
                  K: 'an instance of Firebase App',
                  optional: !0,
                  M: function (t) {
                    return !!(t && t instanceof i.a.app.App);
                  },
                },
              ]),
              $l(t, 'ActionCodeURL', Ir, []),
              $l(t, 'PhoneMultiFactorGenerator', Tl, []),
              i.a.INTERNAL.registerComponent({
                name: 'auth',
                instanceFactory: function (t) {
                  return new el((t = t.getProvider('app').getImmediate()));
                },
                multipleInstances: !1,
                serviceProps: t,
                instantiationMode: 'LAZY',
                type: 'PUBLIC',
                onInstanceCreated: function (t) {
                  t.getProvider('auth-internal').initialize();
                },
              }),
              i.a.INTERNAL.registerComponent({
                name: 'auth-internal',
                instanceFactory: function (t) {
                  return {
                    getUid: I((t = t.getProvider('auth').getImmediate()).getUid, t),
                    getToken: I(t.nc, t),
                    addAuthTokenListener: I(t.cc, t),
                    removeAuthTokenListener: I(t.Pc, t),
                  };
                },
                multipleInstances: !1,
                instantiationMode: 'LAZY',
                type: 'PRIVATE',
              }),
              i.a.registerVersion('@firebase/auth', '0.16.8'),
              i.a.INTERNAL.extendNamespace({ User: vh });
          })();
      }.apply(
        'undefined' != typeof global
          ? global
          : 'undefined' != typeof self
          ? self
          : 'undefined' != typeof window
          ? window
          : {}
      ));
    },
  },
]);
