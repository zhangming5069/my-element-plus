'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../../utils/index.js');
require('../../../constants/index.js');
require('../../../hooks/index.js');
var runtime = require('../../../utils/vue/props/runtime.js');
var icon = require('../../../utils/vue/icon.js');
var index = require('../../../hooks/use-common-props/index.js');
var event = require('../../../constants/event.js');
var core = require('@vueuse/core');
var shared = require('@vue/shared');

const switchProps = runtime.buildProps({
  modelValue: {
    type: [Boolean, String, Number],
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  width: {
    type: [String, Number],
    default: ""
  },
  inlinePrompt: {
    type: Boolean,
    default: false
  },
  activeIcon: {
    type: icon.iconPropType
  },
  inactiveIcon: {
    type: icon.iconPropType
  },
  activeText: {
    type: String,
    default: ""
  },
  inactiveText: {
    type: String,
    default: ""
  },
  activeColor: {
    type: String,
    default: ""
  },
  inactiveColor: {
    type: String,
    default: ""
  },
  borderColor: {
    type: String,
    default: ""
  },
  activeValue: {
    type: [Boolean, String, Number],
    default: true
  },
  inactiveValue: {
    type: [Boolean, String, Number],
    default: false
  },
  name: {
    type: String,
    default: ""
  },
  validateEvent: {
    type: Boolean,
    default: true
  },
  id: String,
  loading: {
    type: Boolean,
    default: false
  },
  beforeChange: {
    type: runtime.definePropType(Function)
  },
  size: index.useSizeProp,
  tabindex: {
    type: [String, Number]
  }
});
const switchEmits = {
  [event.UPDATE_MODEL_EVENT]: (val) => core.isBoolean(val) || shared.isString(val) || core.isNumber(val),
  [event.CHANGE_EVENT]: (val) => core.isBoolean(val) || shared.isString(val) || core.isNumber(val)
};

exports.switchEmits = switchEmits;
exports.switchProps = switchProps;
//# sourceMappingURL=switch.js.map
