import { defineComponent, computed, ref, onMounted, watch, openBlock, createElementBlock, normalizeClass, unref, normalizeStyle, withModifiers, createElementVNode, withKeys, createBlock, withCtx, resolveDynamicComponent, createCommentVNode, toDisplayString, Fragment, createVNode } from 'vue';
import { useVModel, isBoolean } from '@vueuse/core';
import '../../../utils/index.mjs';
import { ElIcon } from '../../icon/index.mjs';
import { Loading } from '@element-plus/icons-vue';
import '../../../constants/index.mjs';
import '../../../hooks/index.mjs';
import { switchProps, switchEmits } from './switch.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import { useFormItem, useFormItemInputId } from '../../../hooks/use-form-item/index.mjs';
import { useSize, useDisabled } from '../../../hooks/use-common-props/index.mjs';
import { useNamespace } from '../../../hooks/use-namespace/index.mjs';
import { CHANGE_EVENT } from '../../../constants/event.mjs';
import { addUnit } from '../../../utils/dom/style.mjs';
import { rAF } from '../../../utils/raf.mjs';
import { debugWarn, throwError } from '../../../utils/error.mjs';

const _hoisted_1 = ["onClick"];
const _hoisted_2 = ["id", "aria-checked", "aria-disabled", "name", "true-value", "false-value", "disabled", "tabindex", "onKeydown"];
const _hoisted_3 = ["aria-hidden"];
const _hoisted_4 = ["aria-hidden"];
const _hoisted_5 = ["aria-hidden"];
const _hoisted_6 = ["aria-hidden"];
const COMPONENT_NAME = "ElSwitch";
const __default__ = defineComponent({
  name: COMPONENT_NAME
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: switchProps,
  emits: switchEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const { formItem } = useFormItem();
    const switchSize = useSize();
    const switchDisabled = useDisabled(computed(() => props.loading));
    const ns = useNamespace("switch");
    const { inputId } = useFormItemInputId(props, {
      formItemContext: formItem
    });
    const value = useVModel(props, "modelValue", emit);
    const checked = computed({
      get: () => value.value === props.activeValue,
      set: (checked2) => {
        const val = checked2 ? props.activeValue : props.inactiveValue;
        value.value = val;
        emit(CHANGE_EVENT, val);
      }
    });
    const input = ref();
    const core = ref();
    const switchKls = computed(() => [
      ns.b(),
      ns.m(switchSize.value),
      ns.is("disabled", switchDisabled.value),
      ns.is("checked", checked.value)
    ]);
    const coreStyle = computed(() => ({
      width: addUnit(props.width)
    }));
    const toggleSwitch = () => {
      checked.value = !checked.value;
      rAF(() => {
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
        debugWarn(COMPONENT_NAME, `some error occurred: ${e}`);
        return;
      }
      if (!isBoolean(shouldChange)) {
        throwError(COMPONENT_NAME, "beforeChange must return type `Promise<boolean>` or `boolean`");
      } else if (!shouldChange)
        return;
      toggleSwitch();
    };
    const styles = computed(() => {
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
    onMounted(() => {
      input.value.checked = checked.value;
    });
    watch(checked, (val) => {
      input.value.checked = val;
      if (props.validateEvent) {
        formItem == null ? void 0 : formItem.validate("change").catch((err) => debugWarn(err));
      }
    });
    watch(value, (value2) => {
      if (![props.activeValue, props.inactiveValue].includes(value2)) {
        checked.value = false;
      }
    }, { immediate: true });
    expose({
      focus,
      checked
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(switchKls)),
        style: normalizeStyle(unref(styles)),
        onClick: withModifiers(handleToggle, ["prevent"])
      }, [
        createElementVNode("input", {
          id: unref(inputId),
          ref_key: "input",
          ref: input,
          class: normalizeClass(unref(ns).e("input")),
          type: "checkbox",
          role: "switch",
          "aria-checked": unref(checked),
          "aria-disabled": unref(switchDisabled),
          name: _ctx.name,
          "true-value": _ctx.activeValue,
          "false-value": _ctx.inactiveValue,
          disabled: unref(switchDisabled),
          tabindex: _ctx.tabindex,
          onChange: toggleSwitch,
          onKeydown: withKeys(handleToggle, ["enter"])
        }, null, 42, _hoisted_2),
        !_ctx.inlinePrompt && (_ctx.inactiveIcon || _ctx.inactiveText) ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: normalizeClass([
            unref(ns).e("label"),
            unref(ns).em("label", "left"),
            unref(ns).is("active", !unref(checked))
          ])
        }, [
          _ctx.inactiveIcon ? (openBlock(), createBlock(unref(ElIcon), { key: 0 }, {
            default: withCtx(() => [
              (openBlock(), createBlock(resolveDynamicComponent(_ctx.inactiveIcon)))
            ]),
            _: 1
          })) : createCommentVNode("v-if", true),
          !_ctx.inactiveIcon && _ctx.inactiveText ? (openBlock(), createElementBlock("span", {
            key: 1,
            "aria-hidden": unref(checked)
          }, toDisplayString(_ctx.inactiveText), 9, _hoisted_3)) : createCommentVNode("v-if", true)
        ], 2)) : createCommentVNode("v-if", true),
        createElementVNode("span", {
          ref_key: "core",
          ref: core,
          class: normalizeClass(unref(ns).e("core")),
          style: normalizeStyle(unref(coreStyle))
        }, [
          _ctx.inlinePrompt ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(unref(ns).e("inner"))
          }, [
            _ctx.activeIcon || _ctx.inactiveIcon ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              _ctx.activeIcon ? (openBlock(), createBlock(unref(ElIcon), {
                key: 0,
                class: normalizeClass([unref(ns).is("icon"), unref(checked) ? unref(ns).is("show") : unref(ns).is("hide")])
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.activeIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : createCommentVNode("v-if", true),
              _ctx.inactiveIcon ? (openBlock(), createBlock(unref(ElIcon), {
                key: 1,
                class: normalizeClass([unref(ns).is("icon"), !unref(checked) ? unref(ns).is("show") : unref(ns).is("hide")])
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.inactiveIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : createCommentVNode("v-if", true)
            ], 64)) : _ctx.activeText || _ctx.inactiveIcon ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              _ctx.activeText ? (openBlock(), createElementBlock("span", {
                key: 0,
                class: normalizeClass([unref(ns).is("text"), unref(checked) ? unref(ns).is("show") : unref(ns).is("hide")]),
                "aria-hidden": !unref(checked)
              }, toDisplayString(_ctx.activeText.substring(0, 3)), 11, _hoisted_4)) : createCommentVNode("v-if", true),
              _ctx.inactiveText ? (openBlock(), createElementBlock("span", {
                key: 1,
                class: normalizeClass([unref(ns).is("text"), !unref(checked) ? unref(ns).is("show") : unref(ns).is("hide")]),
                "aria-hidden": unref(checked)
              }, toDisplayString(_ctx.inactiveText.substring(0, 3)), 11, _hoisted_5)) : createCommentVNode("v-if", true)
            ], 64)) : createCommentVNode("v-if", true)
          ], 2)) : createCommentVNode("v-if", true),
          createElementVNode("div", {
            class: normalizeClass(unref(ns).e("action"))
          }, [
            _ctx.loading ? (openBlock(), createBlock(unref(ElIcon), {
              key: 0,
              class: normalizeClass(unref(ns).is("loading"))
            }, {
              default: withCtx(() => [
                createVNode(unref(Loading))
              ]),
              _: 1
            }, 8, ["class"])) : createCommentVNode("v-if", true)
          ], 2)
        ], 6),
        !_ctx.inlinePrompt && (_ctx.activeIcon || _ctx.activeText) ? (openBlock(), createElementBlock("span", {
          key: 1,
          class: normalizeClass([
            unref(ns).e("label"),
            unref(ns).em("label", "right"),
            unref(ns).is("active", unref(checked))
          ])
        }, [
          _ctx.activeIcon ? (openBlock(), createBlock(unref(ElIcon), { key: 0 }, {
            default: withCtx(() => [
              (openBlock(), createBlock(resolveDynamicComponent(_ctx.activeIcon)))
            ]),
            _: 1
          })) : createCommentVNode("v-if", true),
          !_ctx.activeIcon && _ctx.activeText ? (openBlock(), createElementBlock("span", {
            key: 1,
            "aria-hidden": !unref(checked)
          }, toDisplayString(_ctx.activeText), 9, _hoisted_6)) : createCommentVNode("v-if", true)
        ], 2)) : createCommentVNode("v-if", true)
      ], 14, _hoisted_1);
    };
  }
});
var Switch = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/Users/sunzsh/Documents/personal/githubs/element-plus/packages/components/switch/src/switch.vue"]]);

export { Switch as default };
//# sourceMappingURL=switch2.mjs.map
