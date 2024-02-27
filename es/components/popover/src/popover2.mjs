import '../../../utils/index.mjs';
import '../../tooltip/index.mjs';
import '../../dropdown/index.mjs';
import { buildProps } from '../../../utils/vue/props/runtime.mjs';
import { useTooltipTriggerProps, useTooltipContentProps } from '../../tooltip/src/tooltip2.mjs';
import { dropdownProps } from '../../dropdown/src/dropdown.mjs';
import { isBoolean } from '@vueuse/core';

const popoverProps = buildProps({
  trigger: useTooltipTriggerProps.trigger,
  placement: dropdownProps.placement,
  disabled: useTooltipTriggerProps.disabled,
  visible: useTooltipContentProps.visible,
  transition: useTooltipContentProps.transition,
  popperOptions: dropdownProps.popperOptions,
  tabindex: dropdownProps.tabindex,
  content: useTooltipContentProps.content,
  popperStyle: useTooltipContentProps.popperStyle,
  popperClass: useTooltipContentProps.popperClass,
  enterable: {
    ...useTooltipContentProps.enterable,
    default: true
  },
  effect: {
    ...useTooltipContentProps.effect,
    default: "light"
  },
  teleported: useTooltipContentProps.teleported,
  title: String,
  width: {
    type: [String, Number],
    default: 150
  },
  offset: {
    type: Number,
    default: void 0
  },
  showAfter: {
    type: Number,
    default: 0
  },
  hideAfter: {
    type: Number,
    default: 200
  },
  autoClose: {
    type: Number,
    default: 0
  },
  showArrow: {
    type: Boolean,
    default: true
  },
  persistent: {
    type: Boolean,
    default: true
  },
  "onUpdate:visible": {
    type: Function
  }
});
const popoverEmits = {
  "update:visible": (value) => isBoolean(value),
  beforeEnter: () => true,
  beforeLeave: () => true,
  afterEnter: () => true,
  afterLeave: () => true
};

export { popoverEmits, popoverProps };
//# sourceMappingURL=popover2.mjs.map
