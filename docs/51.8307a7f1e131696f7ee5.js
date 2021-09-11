(window.webpackJsonp = window.webpackJsonp || []).push([
  [51],
  {
    U7LX: function (t, e, i) {
      'use strict';
      i.r(e),
        i.d(e, 'ion_textarea', function () {
          return l;
        });
      var a = i('wEJo'),
        n = i('E/Mt'),
        o = i('1vRN'),
        r = i('74mu');
      const l = class {
        constructor(t) {
          Object(a.o)(this, t),
            (this.ionChange = Object(a.g)(this, 'ionChange', 7)),
            (this.ionInput = Object(a.g)(this, 'ionInput', 7)),
            (this.ionStyle = Object(a.g)(this, 'ionStyle', 7)),
            (this.ionBlur = Object(a.g)(this, 'ionBlur', 7)),
            (this.ionFocus = Object(a.g)(this, 'ionFocus', 7)),
            (this.inputId = 'ion-textarea-' + d++),
            (this.didBlurAfterEdit = !1),
            (this.inheritedAttributes = {}),
            (this.fireFocusEvents = !0),
            (this.hasFocus = !1),
            (this.autocapitalize = 'none'),
            (this.autofocus = !1),
            (this.clearOnEdit = !1),
            (this.debounce = 0),
            (this.disabled = !1),
            (this.name = this.inputId),
            (this.readonly = !1),
            (this.required = !1),
            (this.spellcheck = !1),
            (this.autoGrow = !1),
            (this.value = ''),
            (this.onInput = (t) => {
              this.nativeInput && (this.value = this.nativeInput.value), this.emitStyle(), this.ionInput.emit(t);
            }),
            (this.onFocus = (t) => {
              (this.hasFocus = !0), this.focusChange(), this.fireFocusEvents && this.ionFocus.emit(t);
            }),
            (this.onBlur = (t) => {
              (this.hasFocus = !1), this.focusChange(), this.fireFocusEvents && this.ionBlur.emit(t);
            }),
            (this.onKeyDown = () => {
              this.checkClearOnEdit();
            });
        }
        debounceChanged() {
          this.ionChange = Object(o.f)(this.ionChange, this.debounce);
        }
        disabledChanged() {
          this.emitStyle();
        }
        valueChanged() {
          const t = this.nativeInput,
            e = this.getValue();
          t && t.value !== e && (t.value = e), this.runAutoGrow(), this.emitStyle(), this.ionChange.emit({ value: e });
        }
        connectedCallback() {
          this.emitStyle(),
            this.debounceChanged(),
            document.dispatchEvent(new CustomEvent('ionInputDidLoad', { detail: this.el }));
        }
        disconnectedCallback() {
          document.dispatchEvent(new CustomEvent('ionInputDidUnload', { detail: this.el }));
        }
        componentWillLoad() {
          this.inheritedAttributes = Object(o.i)(this.el, ['title']);
        }
        componentDidLoad() {
          Object(o.q)(() => this.runAutoGrow());
        }
        runAutoGrow() {
          const t = this.nativeInput;
          t &&
            this.autoGrow &&
            Object(a.h)(() => {
              (t.style.height = 'auto'),
                (t.style.height = t.scrollHeight + 'px'),
                this.textareaWrapper && (this.textareaWrapper.style.height = t.scrollHeight + 'px');
            });
        }
        async setFocus() {
          this.nativeInput && this.nativeInput.focus();
        }
        async setBlur() {
          this.nativeInput && this.nativeInput.blur();
        }
        getInputElement() {
          return Promise.resolve(this.nativeInput);
        }
        emitStyle() {
          this.ionStyle.emit({
            interactive: !0,
            textarea: !0,
            input: !0,
            'interactive-disabled': this.disabled,
            'has-placeholder': null != this.placeholder,
            'has-value': this.hasValue(),
            'has-focus': this.hasFocus,
          });
        }
        checkClearOnEdit() {
          this.clearOnEdit &&
            (this.didBlurAfterEdit && this.hasValue() && (this.value = ''), (this.didBlurAfterEdit = !1));
        }
        focusChange() {
          this.clearOnEdit && !this.hasFocus && this.hasValue() && (this.didBlurAfterEdit = !0), this.emitStyle();
        }
        hasValue() {
          return '' !== this.getValue();
        }
        getValue() {
          return this.value || '';
        }
        render() {
          const t = Object(n.b)(this),
            e = this.getValue(),
            i = this.inputId + '-lbl',
            l = Object(o.h)(this.el);
          return (
            l && (l.id = i),
            Object(a.j)(
              a.c,
              { 'aria-disabled': this.disabled ? 'true' : null, class: Object(r.a)(this.color, { [t]: !0 }) },
              Object(a.j)(
                'div',
                { class: 'textarea-wrapper', ref: (t) => (this.textareaWrapper = t) },
                Object(a.j)(
                  'textarea',
                  Object.assign(
                    {
                      class: 'native-textarea',
                      'aria-labelledby': l ? i : null,
                      ref: (t) => (this.nativeInput = t),
                      autoCapitalize: this.autocapitalize,
                      autoFocus: this.autofocus,
                      enterKeyHint: this.enterkeyhint,
                      inputMode: this.inputmode,
                      disabled: this.disabled,
                      maxLength: this.maxlength,
                      minLength: this.minlength,
                      name: this.name,
                      placeholder: this.placeholder || '',
                      readOnly: this.readonly,
                      required: this.required,
                      spellcheck: this.spellcheck,
                      cols: this.cols,
                      rows: this.rows,
                      wrap: this.wrap,
                      onInput: this.onInput,
                      onBlur: this.onBlur,
                      onFocus: this.onFocus,
                      onKeyDown: this.onKeyDown,
                    },
                    this.inheritedAttributes
                  ),
                  e
                )
              )
            )
          );
        }
        get el() {
          return Object(a.k)(this);
        }
        static get watchers() {
          return { debounce: ['debounceChanged'], disabled: ['disabledChanged'], value: ['valueChanged'] };
        }
      };
      let d = 0;
      l.style = {
        ios: '.sc-ion-textarea-ios-h{--background:initial;--color:initial;--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:.5;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;--border-radius:0;display:block;position:relative;-ms-flex:1;flex:1;width:100%;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);white-space:pre-wrap;z-index:2;-webkit-box-sizing:border-box;box-sizing:border-box}.ion-color.sc-ion-textarea-ios-h{background:initial}.ion-color.sc-ion-textarea-ios-h{color:var(--ion-color-base)}ion-item.sc-ion-textarea-ios-h,ion-item .sc-ion-textarea-ios-h{-ms-flex-item-align:baseline;align-self:baseline}ion-item.sc-ion-textarea-ios-h:not(.item-label),ion-item:not(.item-label) .sc-ion-textarea-ios-h{--padding-start:0}.textarea-wrapper.sc-ion-textarea-ios{min-width:inherit;max-width:inherit;min-height:inherit;max-height:inherit}.native-textarea.sc-ion-textarea-ios{border-radius:var(--border-radius);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;width:100%;max-width:100%;max-height:100%;border:0;outline:none;background:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;resize:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.native-textarea.sc-ion-textarea-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.native-textarea.sc-ion-textarea-ios::-webkit-input-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-ios::-moz-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-ios:-ms-input-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-ios::-ms-input-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-ios::placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea[disabled].sc-ion-textarea-ios{opacity:0.4}.cloned-input.sc-ion-textarea-ios{left:0;top:0;position:absolute;pointer-events:none}[dir=rtl].sc-ion-textarea-ios .cloned-input.sc-ion-textarea-ios,[dir=rtl].sc-ion-textarea-ios-h .cloned-input.sc-ion-textarea-ios,[dir=rtl] .sc-ion-textarea-ios-h .cloned-input.sc-ion-textarea-ios{left:unset;right:unset;right:0}.item-label-floating.item-has-placeholder.sc-ion-textarea-ios-h:not(.item-has-value),.item-label-floating.item-has-placeholder:not(.item-has-value) .sc-ion-textarea-ios-h{opacity:0}.item-label-floating.item-has-placeholder.sc-ion-textarea-ios-h:not(.item-has-value).item-has-focus,.item-label-floating.item-has-placeholder:not(.item-has-value).item-has-focus .sc-ion-textarea-ios-h{-webkit-transition:opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1);transition:opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1);opacity:1}.sc-ion-textarea-ios-h{--padding-top:10px;--padding-end:10px;--padding-bottom:10px;--padding-start:0;font-size:inherit}.item-label-stacked.sc-ion-textarea-ios-h,.item-label-stacked .sc-ion-textarea-ios-h,.item-label-floating.sc-ion-textarea-ios-h,.item-label-floating .sc-ion-textarea-ios-h{--padding-top:8px;--padding-bottom:8px;--padding-start:0px}',
        md: '.sc-ion-textarea-md-h{--background:initial;--color:initial;--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:.5;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;--border-radius:0;display:block;position:relative;-ms-flex:1;flex:1;width:100%;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);white-space:pre-wrap;z-index:2;-webkit-box-sizing:border-box;box-sizing:border-box}.ion-color.sc-ion-textarea-md-h{background:initial}.ion-color.sc-ion-textarea-md-h{color:var(--ion-color-base)}ion-item.sc-ion-textarea-md-h,ion-item .sc-ion-textarea-md-h{-ms-flex-item-align:baseline;align-self:baseline}ion-item.sc-ion-textarea-md-h:not(.item-label),ion-item:not(.item-label) .sc-ion-textarea-md-h{--padding-start:0}.textarea-wrapper.sc-ion-textarea-md{min-width:inherit;max-width:inherit;min-height:inherit;max-height:inherit}.native-textarea.sc-ion-textarea-md{border-radius:var(--border-radius);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;width:100%;max-width:100%;max-height:100%;border:0;outline:none;background:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;resize:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.native-textarea.sc-ion-textarea-md{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.native-textarea.sc-ion-textarea-md::-webkit-input-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-md::-moz-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-md:-ms-input-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-md::-ms-input-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-md::placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea[disabled].sc-ion-textarea-md{opacity:0.4}.cloned-input.sc-ion-textarea-md{left:0;top:0;position:absolute;pointer-events:none}[dir=rtl].sc-ion-textarea-md .cloned-input.sc-ion-textarea-md,[dir=rtl].sc-ion-textarea-md-h .cloned-input.sc-ion-textarea-md,[dir=rtl] .sc-ion-textarea-md-h .cloned-input.sc-ion-textarea-md{left:unset;right:unset;right:0}.item-label-floating.item-has-placeholder.sc-ion-textarea-md-h:not(.item-has-value),.item-label-floating.item-has-placeholder:not(.item-has-value) .sc-ion-textarea-md-h{opacity:0}.item-label-floating.item-has-placeholder.sc-ion-textarea-md-h:not(.item-has-value).item-has-focus,.item-label-floating.item-has-placeholder:not(.item-has-value).item-has-focus .sc-ion-textarea-md-h{-webkit-transition:opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1);transition:opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1);opacity:1}.sc-ion-textarea-md-h{--padding-top:10px;--padding-end:0;--padding-bottom:11px;--padding-start:8px;margin-left:0;margin-right:0;margin-top:8px;margin-bottom:0;font-size:inherit}.item-label-stacked.sc-ion-textarea-md-h,.item-label-stacked .sc-ion-textarea-md-h,.item-label-floating.sc-ion-textarea-md-h,.item-label-floating .sc-ion-textarea-md-h{--padding-top:8px;--padding-bottom:8px;--padding-start:0}',
      };
    },
  },
]);
