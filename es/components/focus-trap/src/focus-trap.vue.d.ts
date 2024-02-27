import type { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    loop: BooleanConstructor;
    trapped: BooleanConstructor;
    focusTrapEl: PropType<HTMLElement>;
    focusStartEl: {
        type: PropType<HTMLElement | "first" | "container">;
        default: string;
    };
}, {
    onKeydown: (e: KeyboardEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("focusin" | "focusout" | "focusAfterTrapped" | "focusAfterReleased" | "focusoutPrevented" | "releaseRequested")[], "focusin" | "focusout" | "focusAfterTrapped" | "focusAfterReleased" | "focusoutPrevented" | "releaseRequested", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    loop: BooleanConstructor;
    trapped: BooleanConstructor;
    focusTrapEl: PropType<HTMLElement>;
    focusStartEl: {
        type: PropType<HTMLElement | "first" | "container">;
        default: string;
    };
}>> & {
    onFocusin?: ((...args: any[]) => any) | undefined;
    onFocusout?: ((...args: any[]) => any) | undefined;
    onFocusAfterTrapped?: ((...args: any[]) => any) | undefined;
    onFocusAfterReleased?: ((...args: any[]) => any) | undefined;
    onFocusoutPrevented?: ((...args: any[]) => any) | undefined;
    onReleaseRequested?: ((...args: any[]) => any) | undefined;
}, {
    loop: boolean;
    trapped: boolean;
    focusStartEl: HTMLElement | "first" | "container";
}>;
export default _default;
