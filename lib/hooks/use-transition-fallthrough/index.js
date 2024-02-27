'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

const AFTER_APPEAR = "afterAppear";
const AFTER_ENTER = "afterEnter";
const AFTER_LEAVE = "afterLeave";
const APPEAR = "appear";
const APPEAR_CANCELLED = "appearCancelled";
const BEFORE_ENTER = "beforeEnter";
const BEFORE_LEAVE = "beforeLeave";
const ENTER = "enter";
const ENTER_CANCELLED = "enterCancelled";
const LEAVE = "leave";
const LEAVE_CANCELLED = "leaveCancelled";
const useTransitionFallthroughEmits = [
  AFTER_APPEAR,
  AFTER_ENTER,
  AFTER_LEAVE,
  APPEAR,
  APPEAR_CANCELLED,
  BEFORE_ENTER,
  BEFORE_LEAVE,
  ENTER,
  ENTER_CANCELLED,
  LEAVE,
  LEAVE_CANCELLED
];
const useTransitionFallthrough = () => {
  const { emit } = vue.getCurrentInstance();
  return {
    onAfterAppear: () => {
      emit(AFTER_APPEAR);
    },
    onAfterEnter: () => {
      emit(AFTER_ENTER);
    },
    onAfterLeave: () => {
      emit(AFTER_LEAVE);
    },
    onAppearCancelled: () => {
      emit(APPEAR_CANCELLED);
    },
    onBeforeEnter: () => {
      emit(BEFORE_ENTER);
    },
    onBeforeLeave: () => {
      emit(BEFORE_LEAVE);
    },
    onEnter: () => {
      emit(ENTER);
    },
    onEnterCancelled: () => {
      emit(ENTER_CANCELLED);
    },
    onLeave: () => {
      emit(LEAVE);
    },
    onLeaveCancelled: () => {
      emit(LEAVE_CANCELLED);
    }
  };
};

exports.useTransitionFallthrough = useTransitionFallthrough;
exports.useTransitionFallthroughEmits = useTransitionFallthroughEmits;
//# sourceMappingURL=index.js.map
