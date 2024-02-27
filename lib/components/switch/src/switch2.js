'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var core = require('@vueuse/core');
require('../../../utils/index.js');
var index$3 = require('../../icon/index.js');
var iconsVue = require('@element-plus/icons-vue');
require('../../../constants/index.js');
require('../../../hooks/index.js');
var _switch = require('./switch.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var index = require('../../../hooks/use-form-item/index.js');
var index$1 = require('../../../hooks/use-common-props/index.js');
var index$2 = require('../../../hooks/use-namespace/index.js');
var event = require('../../../constants/event.js');
var style = require('../../../utils/dom/style.js');
var raf = require('../../../utils/raf.js');
var error = require('../../../utils/error.js');

const _hoisted_1 = ["onClick"];
const _hoisted_2 = ["id", "aria-checked", "aria-disabled", "name", "true-value", "false-value", "disabled", "tabindex", "onKeydown"];
const _hoisted_3 = ["aria-hidden"];
const _hoisted_4 = ["aria-hidden"];
const _hoisted_5 = ["aria-hidden"];
const _hoisted_6 = ["aria-hidden"];
const COMPONENT_NAME = "ElSwitch";
const __default__ = vue.defineComponent({
  name: COMPONENT_NAME
});
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: _switch.switchProps,
  emits: _switch.switchEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const { formItem } = index.useFormItem();
    const switchSize = index$1.useSize();
    const switchDisabled = index$1.useDisabled(vue.computed(() => props.loading));
    const ns = index$2.useNamespace("switch");
    const { inputId } = index.useFormItemInputId(props, {
      formItemContext: formItem
    });
    const value = core.useVModel(props, "modelValue", emit);
    const checked = vue.computed({
      get: () => value.value === props.activeValue,
      set: (checked2) => {
        const val = checked2 ? props.activeValue : props.inactiveValue;
        value.value = val;
        emit(event.CHANGE_EVENT, val);
      }
    });
    const input = vue.ref();
    const core$1 = vue.ref();
    const switchKls = vue.computed(() => [
      ns.b(),
      ns.m(switchSize.value),
      ns.is("disabled", switchDisabled.value),
      ns.is("checked", checked.value)
    ]);
    const coreStyle = vue.computed(() => ({
      width: style.addUnit(props.width)
    }));
    const toggleSwitch = () => {
      checked.value = !checked.value;
      raf.rAF(() => {
        input.value.checked = checked.value;
      });
    };
    const handleToggle = async () => {
      if (switchDisabled.value)
        return;
      const { beforeChange } = props;
      if (!beforeChange) {
        toggleSwitch();
        return;
      }
      let shouldChange;
      try {
        shouldChange = await beforeChange();
      } catch (e) {
        error.debugWarn(COMPONENT_NAME, `some error occurred: ${e}`);
        return;
      }
      if (!core.isBoolean(shouldChange)) {
        error.throwError(COMPONENT_NAME, "beforeChange must return type `Promise<boolean>` or `boolean`");
      } else if (!shouldChange)
        return;
      toggleSwitch();
    };
    const styles = vue.computed(() => {
      return ns.cssVarBlock({
        ...props.activeColor ? { "on-color": props.activeColor } : null,
        ...props.inactiveColor ? { "off-color": props.inactiveColor } : null,
        ...props.borderColor ? { "border-color": props.borderColor } : null
      });
    });
    const focus = () => {
      var _a, _b;
      (_b = (_a = input.value) == null ? void 0 : _a.focus) == null ? void 0 : _b.call(_a);
    };
    vue.onMounted(() => {
      input.value.checked = checked.value;
    });
    vue.watch(checked, (val) => {
      input.value.checked = val;
      if (props.validateEvent) {
        formItem == null ? void 0 : formItem.validate("change").catch((err) => error.debugWarn(err));
      }
    });
    vue.watch(value, (value2) => {
      if (![props.activeValue, props.inactiveValue].includes(value2)) {
        checked.value = false;
      }
    }, { immediate: true });
    expose({
      focus,
      checked
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass(vue.unref(switchKls)),
        style: vue.normalizeStyle(vue.unref(styles)),
        onClick: vue.withModifiers(handleToggle, ["prevent"])
      }, [
        vue.createElementVNode("input", {
          id: vue.unref(inputId),
          ref_key: "input",
          ref: input,
          class: vue.normalizeClass(vue.unref(ns).e("input")),
          type: "checkbox",
          role: "switch",
          "aria-checked": vue.unref(checked),
          "aria-disabled": vue.unref(switchDisabled),
          name: _ctx.name,
          "true-value": _ctx.activeValue,
          "false-value": _ctx.inactiveValue,
          disabled: vue.unref(switchDisabled),
          tabindex: _ctx.tabindex,
          onChange: toggleSwitch,
          onKeydown: vue.withKeys(handleToggle, ["enter"])
        }, null, 42, _hoisted_2),
        !_ctx.inlinePrompt && (_ctx.inactiveIcon || _ctx.inactiveText) ? (vue.openBlock(), vue.createElementBlock("span", {
          key: 0,
          class: vue.normalizeClass([
            vue.unref(ns).e("label"),
            vue.unref(ns).em("label", "left"),
            vue.unref(ns).is("active", !vue.unref(checked))
          ])
        }, [
          _ctx.inactiveIcon ? (vue.openBlock(), vue.createBlock(vue.unref(index$3.ElIcon), { key: 0 }, {
            default: vue.withCtx(() => [
              (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.inactiveIcon)))
            ]),
            _: 1
          })) : vue.createCommentVNode("v-if", true),
          !_ctx.inactiveIcon && _ctx.inactiveText ? (vue.openBlock(), vue.createElementBlock("span", {
            key: 1,
            "aria-hidden": vue.unref(checked)
          }, vue.toDisplayString(_ctx.inactiveText), 9, _hoisted_3)) : vue.createCommentVNode("v-if", true)
        ], 2)) : vue.createCommentVNode("v-if", true),
        vue.createElementVNode("span", {
          ref_key: "core",
          ref: core$1,
          class: vue.normalizeClass(vue.unref(ns).e("core")),
          style: vue.normalizeStyle(vue.unref(coreStyle))
        }, [
          _ctx.inlinePrompt ? (vue.openBlock(), vue.createElementBlock("div", {
            key: 0,
            class: vue.normalizeClass(vue.unref(ns).e("inner"))
          }, [
            _ctx.activeIcon || _ctx.inactiveIcon ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
              _ctx.activeIcon ? (vue.openBlock(), vue.createBlock(vue.unref(index$3.ElIcon), {
                key: 0,
                class: vue.normalizeClass([vue.unref(ns).is("icon"), vue.unref(checked) ? vue.unref(ns).is("show") : vue.unref(ns).is("hide")])
              }, {
                default: vue.withCtx(() => [
                  (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.activeIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : vue.createCommentVNode("v-if", true),
              _ctx.inactiveIcon ? (vue.openBlock(), vue.createBlock(vue.unref(index$3.ElIcon), {
                key: 1,
                class: vue.normalizeClass([vue.unref(ns).is("icon"), !vue.unref(checked) ? vue.unref(ns).is("show") : vue.unref(ns).is("hide")])
              }, {
                default: vue.withCtx(() => [
                  (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.inactiveIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : vue.createCommentVNode("v-if", true)
            ], 64)) : _ctx.activeText || _ctx.inactiveIcon ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
              _ctx.activeText ? (vue.openBlock(), vue.createElementBlock("span", {
                key: 0,
                class: vue.normalizeClass([vue.unref(ns).is("text"), vue.unref(checked) ? vue.unref(ns).is("show") : vue.unref(ns).is("hide")]),
                "aria-hidden": !vue.unref(checked)
              }, vue.toDisplayString(_ctx.activeText.substring(0, 3)), 11, _hoisted_4)) : vue.createCommentVNode("v-if", true),
              _ctx.inactiveText ? (vue.openBlock(), vue.createElementBlock("span", {
                key: 1,
                class: vue.normalizeClass([vue.unref(ns).is("text"), !vue.unref(checked) ? vue.unref(ns).is("show") : vue.unref(ns).is("hide")]),
                "aria-hidden": vue.unref(checked)
              }, vue.toDisplayString(_ctx.inactiveText.substring(0, 3)), 11, _hoisted_5)) : vue.createCommentVNode("v-if", true)
            ], 64)) : vue.createCommentVNode("v-if", true)
          ], 2)) : vue.createCommentVNode("v-if", true),
          vue.createElementVNode("div", {
            class: vue.normalizeClass(vue.unref(ns).e("action"))
          }, [
            _ctx.loading ? (vue.openBlock(), vue.createBlock(vue.unref(index$3.ElIcon), {
              key: 0,
              class: vue.normalizeClass(vue.unref(ns).is("loading"))
            }, {
              default: vue.withCtx(() => [
                vue.createVNode(vue.unref(iconsVue.Loading))
              ]),
              _: 1
            }, 8, ["class"])) : vue.createCommentVNode("v-if", true)
          ], 2)
        ], 6),
        !_ctx.inlinePrompt && (_ctx.activeIcon || _ctx.activeText) ? (vue.openBlock(), vue.createElementBlock("span", {
          key: 1,
          class: vue.normalizeClass([
            vue.unref(ns).e("label"),
            vue.unref(ns).em("label", "right"),
            vue.unref(ns).is("active", vue.unref(checked))
          ])
        }, [
          _ctx.activeIcon ? (vue.openBlock(), vue.createBlock(vue.unref(index$3.ElIcon), { key: 0 }, {
            default: vue.withCtx(() => [
              (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.activeIcon)))
            ]),
            _: 1
          })) : vue.createCommentVNode("v-if", true),
          !_ctx.activeIcon && _ctx.activeText ? (vue.openBlock(), vue.createElementBlock("span", {
            key: 1,
            "aria-hidden": !vue.unref(checked)
          }, vue.toDisplayString(_ctx.activeText), 9, _hoisted_6)) : vue.createCommentVNode("v-if", true)
        ], 2)) : vue.createCommentVNode("v-if", true)
      ], 14, _hoisted_1);
    };
  }
});
var Switch = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["__file", "/Users/sunzsh/Documents/personal/githubs/element-plus/packages/components/switch/src/switch.vue"]]);

exports["default"] = Switch;
//# sourceMappingURL=switch2.js.map
