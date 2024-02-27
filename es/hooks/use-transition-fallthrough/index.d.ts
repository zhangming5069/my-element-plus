export declare const useTransitionFallthroughEmits: readonly ["afterAppear", "afterEnter", "afterLeave", "appear", "appearCancelled", "beforeEnter", "beforeLeave", "enter", "enterCancelled", "leave", "leaveCancelled"];
/**
 * NOTE:
 * This is only a delegator for delegating transition callbacks.
 * Use this at your need.
 */
/**
 * Simple usage
 *
 * In your setups:
 *
 * setup() {
 *   const fallthroughMethods = useTransitionFallthrough()
 *   return fallthrough
 * }
 *
 * In your template:
 *
 * <template>
 *  <transition name="whatever" v-bind="fallthrough">
 *    <slot />
 *  </transition>
 * </template>
 *
 */
export declare const useTransitionFallthrough: () => {
    onAfterAppear: () => void;
    onAfterEnter: () => void;
    onAfterLeave: () => void;
    onAppearCancelled: () => void;
    onBeforeEnter: () => void;
    onBeforeLeave: () => void;
    onEnter: () => void;
    onEnterCancelled: () => void;
    onLeave: () => void;
    onLeaveCancelled: () => void;
};
