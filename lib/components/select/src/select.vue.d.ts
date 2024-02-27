import { nextTick } from 'vue';
import type { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    name: StringConstructor;
    id: StringConstructor;
    modelValue: {
        type: (BooleanConstructor | ObjectConstructor | StringConstructor | NumberConstructor | ArrayConstructor)[];
        default: undefined;
    };
    autocomplete: {
        type: StringConstructor;
        default: string;
    };
    automaticDropdown: BooleanConstructor;
    size: {
        type: PropType<"" | "default" | "small" | "large">;
        validator: (val: string) => val is "" | "default" | "small" | "large";
    };
    effect: {
        type: PropType<string>;
        default: string;
    };
    disabled: BooleanConstructor;
    clearable: BooleanConstructor;
    filterable: BooleanConstructor;
    allowCreate: BooleanConstructor;
    loading: BooleanConstructor;
    popperClass: {
        type: StringConstructor;
        default: string;
    };
    remote: BooleanConstructor;
    loadingText: StringConstructor;
    noMatchText: StringConstructor;
    noDataText: StringConstructor;
    remoteMethod: FunctionConstructor;
    filterMethod: FunctionConstructor;
    multiple: BooleanConstructor;
    multipleLimit: {
        type: NumberConstructor;
        default: number;
    };
    placeholder: {
        type: StringConstructor;
    };
    defaultFirstOption: BooleanConstructor;
    reserveKeyword: {
        type: BooleanConstructor;
        default: boolean;
    };
    valueKey: {
        type: StringConstructor;
        default: string;
    };
    collapseTags: BooleanConstructor;
    collapseTagsTooltip: {
        type: BooleanConstructor;
        default: boolean;
    };
    teleported: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    persistent: {
        type: BooleanConstructor;
        default: boolean;
    };
    clearIcon: {
        type: PropType<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>;
        default: import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
    };
    fitInputWidth: {
        type: BooleanConstructor;
        default: boolean;
    };
    suffixIcon: {
        type: PropType<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>;
        default: import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
    };
    tagType: {
        default: string;
        type: PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "success" | "warning" | "info" | "danger", unknown>>;
        required: false;
        validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    validateEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    remoteShowSuffix: {
        type: BooleanConstructor;
        default: boolean;
    };
    suffixTransition: {
        type: BooleanConstructor;
        default: boolean;
    };
    placement: {
        type: StringConstructor;
        values: import("@popperjs/core").Placement[];
        default: string;
    };
}, {
    tagInMultiLine: import("vue").Ref<boolean>;
    prefixWidth: import("vue").Ref<number>;
    selectSize: import("vue").ComputedRef<"" | "default" | "small" | "large">;
    readonly: import("vue").ComputedRef<any>;
    handleResize: () => void;
    collapseTagSize: import("vue").ComputedRef<"default" | "small">;
    debouncedOnInputChange: import("lodash").DebouncedFunc<() => void>;
    debouncedQueryChange: import("lodash").DebouncedFunc<(e: any) => void>;
    deletePrevTag: (e: any) => void;
    deleteTag: (event: any, tag: any) => void;
    deleteSelected: (event: any) => void;
    handleOptionSelect: (option: any, byClick: any) => void;
    scrollToOption: (option: any) => void;
    inputWidth: import("vue").Ref<number>;
    selected: import("vue").Ref<any>;
    inputLength: import("vue").Ref<number>;
    filteredOptionsCount: import("vue").Ref<number>;
    visible: import("vue").Ref<boolean>;
    softFocus: import("vue").Ref<boolean>;
    selectedLabel: import("vue").Ref<string>;
    hoverIndex: import("vue").Ref<number>;
    query: import("vue").Ref<string>;
    inputHovering: import("vue").Ref<boolean>;
    currentPlaceholder: import("vue").Ref<string>;
    menuVisibleOnFocus: import("vue").Ref<boolean>;
    isOnComposition: import("vue").Ref<boolean>;
    isSilentBlur: import("vue").Ref<boolean>;
    options: import("vue").Ref<Map<any, any>>;
    resetInputHeight: () => void;
    managePlaceholder: () => void;
    showClose: import("vue").ComputedRef<any>;
    selectDisabled: import("vue").ComputedRef<any>;
    iconComponent: import("vue").ComputedRef<any>;
    iconReverse: import("vue").ComputedRef<string>;
    showNewOption: import("vue").ComputedRef<any>;
    emptyText: import("vue").ComputedRef<any>;
    toggleLastOptionHitState: (hit?: boolean | undefined) => any;
    resetInputState: (e: KeyboardEvent) => void;
    handleComposition: (event: any) => void;
    handleMenuEnter: () => void;
    handleFocus: (event: FocusEvent) => void;
    blur: () => void;
    handleBlur: (event: FocusEvent) => void;
    handleClearClick: (event: Event) => void;
    handleClose: () => void;
    handleKeydownEscape: (event: KeyboardEvent) => void;
    toggleMenu: () => void;
    selectOption: () => void;
    getValueKey: (item: any) => any;
    navigateOptions: (direction: any) => void;
    dropMenuVisible: import("vue").WritableComputedRef<boolean>;
    focus: () => void;
    reference: import("vue").Ref<import("vue").ComponentPublicInstance<{
        focus: () => void;
        blur: () => void;
        input: HTMLInputElement;
    }, {}, {}, {}, {}, {}, {
        focus: () => void;
        blur: () => void;
        input: HTMLInputElement;
    }, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null>;
    input: import("vue").Ref<HTMLInputElement | null>;
    tooltipRef: import("vue").Ref<({
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            disabled: boolean;
            trigger: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => ("click" | "contextmenu" | "focus" | "hover" | ("click" | "contextmenu" | "focus" | "hover")[]) & {}) | (() => "click" | "contextmenu" | "focus" | "hover" | ("click" | "contextmenu" | "focus" | "hover")[]) | ((new (...args: any[]) => ("click" | "contextmenu" | "focus" | "hover" | ("click" | "contextmenu" | "focus" | "hover")[]) & {}) | (() => "click" | "contextmenu" | "focus" | "hover" | ("click" | "contextmenu" | "focus" | "hover")[]))[], unknown, unknown>;
            placement: import("element-plus/es/utils").EpPropMergeType<StringConstructor, import("@popperjs/core").Placement, unknown>;
            showAfter: number;
            hideAfter: number;
            open: boolean;
            strategy: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "absolute" | "fixed", unknown>;
            offset: number;
            content: string;
            transition: string;
            effect: string;
            boundariesPadding: number;
            fallbackPlacements: import("@popperjs/core").Placement[];
            gpuAcceleration: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            popperOptions: Partial<import("@popperjs/core").Options>;
            enterable: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            focusOnShow: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            trapping: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            stopPopperMouseEvent: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            visible: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (boolean | null) & {}) | (() => boolean | null) | ((new (...args: any[]) => (boolean | null) & {}) | (() => boolean | null))[], unknown, unknown>;
            pure: boolean;
            virtualTriggering: boolean;
            appendTo: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | HTMLElement) & {}) | (() => string | HTMLElement) | ((new (...args: any[]) => (string | HTMLElement) & {}) | (() => string | HTMLElement))[], unknown, unknown>;
            rawContent: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            teleported: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            persistent: boolean;
            role: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "dialog" | "tree" | "grid" | "menu" | "listbox" | "tooltip", unknown>;
            arrowOffset: number;
            triggerKeys: string[];
            visibleArrow: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            showArrow: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            openDelay: {
                readonly type: PropType<number>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            visibleArrow: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
            hideAfter: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
            showArrow: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
            arrowOffset: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 5, boolean>;
            disabled: BooleanConstructor;
            trigger: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => ("click" | "contextmenu" | "focus" | "hover" | ("click" | "contextmenu" | "focus" | "hover")[]) & {}) | (() => "click" | "contextmenu" | "focus" | "hover" | ("click" | "contextmenu" | "focus" | "hover")[]) | ((new (...args: any[]) => ("click" | "contextmenu" | "focus" | "hover" | ("click" | "contextmenu" | "focus" | "hover")[]) & {}) | (() => "click" | "contextmenu" | "focus" | "hover" | ("click" | "contextmenu" | "focus" | "hover")[]))[], unknown, unknown, "hover", boolean>;
            triggerKeys: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | ((new (...args: any[]) => string[]) | (() => string[]))[], unknown, unknown, () => string[], boolean>;
            virtualRef: {
                readonly type: PropType<import("../../..").Measurable>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            virtualTriggering: BooleanConstructor;
            onMouseenter: FunctionConstructor;
            onMouseleave: FunctionConstructor;
            onClick: FunctionConstructor;
            onKeydown: FunctionConstructor;
            onFocus: FunctionConstructor;
            onBlur: FunctionConstructor;
            onContextmenu: FunctionConstructor;
            id: StringConstructor;
            open: BooleanConstructor;
            appendTo: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | HTMLElement) & {}) | (() => string | HTMLElement) | ((new (...args: any[]) => (string | HTMLElement) & {}) | (() => string | HTMLElement))[], unknown, unknown, string, boolean>;
            content: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
            rawContent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            persistent: BooleanConstructor;
            ariaLabel: StringConstructor;
            visible: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (boolean | null) & {}) | (() => boolean | null) | ((new (...args: any[]) => (boolean | null) & {}) | (() => boolean | null))[], unknown, unknown, null, boolean>;
            transition: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, `${string}-fade-in-linear`, boolean>;
            teleported: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            style: {
                readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            className: {
                readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | any)[])[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | any)[])[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            effect: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "dark", boolean>;
            enterable: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            pure: BooleanConstructor;
            focusOnShow: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            trapping: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            popperClass: {
                readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | any)[])[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | any)[])[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            popperStyle: {
                readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            referenceEl: {
                readonly type: PropType<HTMLElement>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            triggerTargetEl: {
                readonly type: PropType<HTMLElement>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            stopPopperMouseEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            zIndex: NumberConstructor;
            boundariesPadding: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
            fallbackPlacements: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("@popperjs/core").Placement[]) | (() => import("@popperjs/core").Placement[]) | ((new (...args: any[]) => import("@popperjs/core").Placement[]) | (() => import("@popperjs/core").Placement[]))[], unknown, unknown, undefined, boolean>;
            gpuAcceleration: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            offset: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
            placement: import("element-plus/es/utils").EpPropFinalized<StringConstructor, import("@popperjs/core").Placement, unknown, "bottom", boolean>;
            popperOptions: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => Partial<import("@popperjs/core").Options>) | (() => Partial<import("@popperjs/core").Options>) | ((new (...args: any[]) => Partial<import("@popperjs/core").Options>) | (() => Partial<import("@popperjs/core").Options>))[], unknown, unknown, () => {}, boolean>;
            strategy: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "absolute" | "fixed", unknown, "absolute", boolean>;
            showAfter: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
            "onUpdate:visible": {
                readonly type: PropType<(val: boolean) => void>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            role: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "dialog" | "tree" | "grid" | "menu" | "listbox" | "tooltip", unknown, "tooltip", boolean>;
        }>> & {
            onShow?: ((...args: any[]) => any) | undefined;
            onHide?: ((...args: any[]) => any) | undefined;
            onClose?: ((...args: any[]) => any) | undefined;
            onOpen?: ((...args: any[]) => any) | undefined;
            onBeforeShow?: ((...args: any[]) => any) | undefined;
            onBeforeHide?: ((...args: any[]) => any) | undefined;
            "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "disabled" | "trigger" | "placement" | "showAfter" | "hideAfter" | "open" | "strategy" | "offset" | "content" | "transition" | "effect" | "boundariesPadding" | "fallbackPlacements" | "gpuAcceleration" | "popperOptions" | "enterable" | "focusOnShow" | "trapping" | "stopPopperMouseEvent" | "visible" | "pure" | "virtualTriggering" | "appendTo" | "rawContent" | "teleported" | "persistent" | "role" | "arrowOffset" | "triggerKeys" | "visibleArrow" | "showArrow">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: "close" | "show" | "hide" | "open" | "update:visible" | "beforeShow" | "beforeHide", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            openDelay: {
                readonly type: PropType<number>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            visibleArrow: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
            hideAfter: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
            showArrow: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
            arrowOffset: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 5, boolean>;
            disabled: BooleanConstructor;
            trigger: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => ("click" | "contextmenu" | "focus" | "hover" | ("click" | "contextmenu" | "focus" | "hover")[]) & {}) | (() => "click" | "contextmenu" | "focus" | "hover" | ("click" | "contextmenu" | "focus" | "hover")[]) | ((new (...args: any[]) => ("click" | "contextmenu" | "focus" | "hover" | ("click" | "contextmenu" | "focus" | "hover")[]) & {}) | (() => "click" | "contextmenu" | "focus" | "hover" | ("click" | "contextmenu" | "focus" | "hover")[]))[], unknown, unknown, "hover", boolean>;
            triggerKeys: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | ((new (...args: any[]) => string[]) | (() => string[]))[], unknown, unknown, () => string[], boolean>;
            virtualRef: {
                readonly type: PropType<import("../../..").Measurable>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            virtualTriggering: BooleanConstructor;
            onMouseenter: FunctionConstructor;
            onMouseleave: FunctionConstructor;
            onClick: FunctionConstructor;
            onKeydown: FunctionConstructor;
            onFocus: FunctionConstructor;
            onBlur: FunctionConstructor;
            onContextmenu: FunctionConstructor;
            id: StringConstructor;
            open: BooleanConstructor;
            appendTo: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | HTMLElement) & {}) | (() => string | HTMLElement) | ((new (...args: any[]) => (string | HTMLElement) & {}) | (() => string | HTMLElement))[], unknown, unknown, string, boolean>;
            content: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
            rawContent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            persistent: BooleanConstructor;
            ariaLabel: StringConstructor;
            visible: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (boolean | null) & {}) | (() => boolean | null) | ((new (...args: any[]) => (boolean | null) & {}) | (() => boolean | null))[], unknown, unknown, null, boolean>;
            transition: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, `${string}-fade-in-linear`, boolean>;
            teleported: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            style: {
                readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            className: {
                readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | any)[])[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | any)[])[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            effect: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "dark", boolean>;
            enterable: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            pure: BooleanConstructor;
            focusOnShow: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            trapping: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            popperClass: {
                readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | any)[])[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | any)[])[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            popperStyle: {
                readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            referenceEl: {
                readonly type: PropType<HTMLElement>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            triggerTargetEl: {
                readonly type: PropType<HTMLElement>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            stopPopperMouseEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            zIndex: NumberConstructor;
            boundariesPadding: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
            fallbackPlacements: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("@popperjs/core").Placement[]) | (() => import("@popperjs/core").Placement[]) | ((new (...args: any[]) => import("@popperjs/core").Placement[]) | (() => import("@popperjs/core").Placement[]))[], unknown, unknown, undefined, boolean>;
            gpuAcceleration: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            offset: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
            placement: import("element-plus/es/utils").EpPropFinalized<StringConstructor, import("@popperjs/core").Placement, unknown, "bottom", boolean>;
            popperOptions: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => Partial<import("@popperjs/core").Options>) | (() => Partial<import("@popperjs/core").Options>) | ((new (...args: any[]) => Partial<import("@popperjs/core").Options>) | (() => Partial<import("@popperjs/core").Options>))[], unknown, unknown, () => {}, boolean>;
            strategy: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "absolute" | "fixed", unknown, "absolute", boolean>;
            showAfter: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
            "onUpdate:visible": {
                readonly type: PropType<(val: boolean) => void>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            role: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "dialog" | "tree" | "grid" | "menu" | "listbox" | "tooltip", unknown, "tooltip", boolean>;
        }>> & {
            onShow?: ((...args: any[]) => any) | undefined;
            onHide?: ((...args: any[]) => any) | undefined;
            onClose?: ((...args: any[]) => any) | undefined;
            onOpen?: ((...args: any[]) => any) | undefined;
            onBeforeShow?: ((...args: any[]) => any) | undefined;
            onBeforeHide?: ((...args: any[]) => any) | undefined;
            "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
        }, {
            compatShowAfter: import("vue").ComputedRef<number>;
            compatShowArrow: import("vue").ComputedRef<import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
            popperRef: import("vue").Ref<({
                $: import("vue").ComponentInternalInstance;
                $data: {};
                $props: Partial<{
                    readonly role: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "dialog" | "tree" | "grid" | "menu" | "listbox" | "tooltip", unknown>;
                }> & Omit<Readonly<import("vue").ExtractPropTypes<{
                    readonly role: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "dialog" | "tree" | "grid" | "menu" | "listbox" | "tooltip", unknown, "tooltip", boolean>;
                }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "role">;
                $attrs: {
                    [x: string]: unknown;
                };
                $refs: {
                    [x: string]: unknown;
                };
                $slots: Readonly<{
                    [name: string]: import("vue").Slot | undefined;
                }>;
                $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
                $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
                $emit: (event: string, ...args: any[]) => void;
                $el: any;
                $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                    readonly role: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "dialog" | "tree" | "grid" | "menu" | "listbox" | "tooltip", unknown, "tooltip", boolean>;
                }>>, {
                    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                        readonly role: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "dialog" | "tree" | "grid" | "menu" | "listbox" | "tooltip", unknown, "tooltip", boolean>;
                    }>> & {
                        [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                    }>>;
                    triggerRef: import("vue").Ref<HTMLElement | undefined>;
                    popperInstanceRef: import("vue").Ref<import("@popperjs/core").Instance | undefined>;
                    contentRef: import("vue").Ref<HTMLElement | undefined>;
                    referenceRef: import("vue").Ref<HTMLElement | undefined>;
                    role: import("vue").ComputedRef<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "dialog" | "tree" | "grid" | "menu" | "listbox" | "tooltip", unknown>>;
                    popperProvides: import("../../..").ElPopperInjectionContext;
                }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
                    readonly role: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "dialog" | "tree" | "grid" | "menu" | "listbox" | "tooltip", unknown>;
                }> & {
                    beforeCreate?: ((() => void) | (() => void)[]) | undefined;
                    created?: ((() => void) | (() => void)[]) | undefined;
                    beforeMount?: ((() => void) | (() => void)[]) | undefined;
                    mounted?: ((() => void) | (() => void)[]) | undefined;
                    beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
                    updated?: ((() => void) | (() => void)[]) | undefined;
                    activated?: ((() => void) | (() => void)[]) | undefined;
                    deactivated?: ((() => void) | (() => void)[]) | undefined;
                    beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
                    beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
                    destroyed?: ((() => void) | (() => void)[]) | undefined;
                    unmounted?: ((() => void) | (() => void)[]) | undefined;
                    renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
                    renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
                    errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
                };
                $forceUpdate: () => void;
                $nextTick: typeof nextTick;
                $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
            } & Readonly<import("vue").ExtractPropTypes<{
                readonly role: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "dialog" | "tree" | "grid" | "menu" | "listbox" | "tooltip", unknown, "tooltip", boolean>;
            }>> & import("vue").ShallowUnwrapRef<{
                props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                    readonly role: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "dialog" | "tree" | "grid" | "menu" | "listbox" | "tooltip", unknown, "tooltip", boolean>;
                }>> & {
                    [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                }>>;
                triggerRef: import("vue").Ref<HTMLElement | undefined>;
                popperInstanceRef: import("vue").Ref<import("@popperjs/core").Instance | undefined>;
                contentRef: import("vue").Ref<HTMLElement | undefined>;
                referenceRef: import("vue").Ref<HTMLElement | undefined>;
                role: import("vue").ComputedRef<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "dialog" | "tree" | "grid" | "menu" | "listbox" | "tooltip", unknown>>;
                popperProvides: import("../../..").ElPopperInjectionContext;
            }> & {} & import("vue").ComponentCustomProperties) | null>;
            contentRef: import("vue").Ref<({
                $: import("vue").ComponentInternalInstance;
                $data: {};
                $props: Partial<{
                    readonly placement: import("element-plus/es/utils").EpPropMergeType<StringConstructor, import("@popperjs/core").Placement, unknown>;
                    readonly showAfter: number;
                    readonly hideAfter: number;
                    readonly strategy: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "absolute" | "fixed", unknown>;
                    readonly offset: number;
                    readonly content: string;
                    readonly transition: string;
                    readonly effect: string;
                    readonly boundariesPadding: number;
                    readonly fallbackPlacements: import("@popperjs/core").Placement[];
                    readonly gpuAcceleration: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                    readonly popperOptions: Partial<import("@popperjs/core").Options>;
                    readonly enterable: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                    readonly focusOnShow: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                    readonly trapping: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                    readonly stopPopperMouseEvent: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                    readonly visible: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (boolean | null) & {}) | (() => boolean | null) | ((new (...args: any[]) => (boolean | null) & {}) | (() => boolean | null))[], unknown, unknown>;
                    readonly pure: boolean;
                    readonly virtualTriggering: boolean;
                    readonly appendTo: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | HTMLElement) & {}) | (() => string | HTMLElement) | ((new (...args: any[]) => (string | HTMLElement) & {}) | (() => string | HTMLElement))[], unknown, unknown>;
                    readonly rawContent: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                    readonly teleported: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                    readonly persistent: boolean;
                }> & Omit<Readonly<import("vue").ExtractPropTypes<{
                    readonly appendTo: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | HTMLElement) & {}) | (() => string | HTMLElement) | ((new (...args: any[]) => (string | HTMLElement) & {}) | (() => string | HTMLElement))[], unknown, unknown, string, boolean>;
                    readonly content: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
                    readonly rawContent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                    readonly persistent: BooleanConstructor;
                    readonly ariaLabel: StringConstructor;
                    readonly visible: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (boolean | null) & {}) | (() => boolean | null) | ((new (...args: any[]) => (boolean | null) & {}) | (() => boolean | null))[], unknown, unknown, null, boolean>;
                    readonly transition: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, `${string}-fade-in-linear`, boolean>;
                    readonly teleported: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly disabled: {
                        readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly id: StringConstructor;
                    readonly style: {
                        readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly className: {
                        readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | any)[])[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | any)[])[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly effect: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "dark", boolean>;
                    readonly enterable: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly pure: BooleanConstructor;
                    readonly focusOnShow: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                    readonly trapping: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                    readonly popperClass: {
                        readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | any)[])[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | any)[])[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly popperStyle: {
                        readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly referenceEl: {
                        readonly type: PropType<HTMLElement>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly triggerTargetEl: {
                        readonly type: PropType<HTMLElement>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly stopPopperMouseEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly virtualTriggering: BooleanConstructor;
                    readonly zIndex: NumberConstructor;
                    readonly boundariesPadding: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                    readonly fallbackPlacements: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("@popperjs/core").Placement[]) | (() => import("@popperjs/core").Placement[]) | ((new (...args: any[]) => import("@popperjs/core").Placement[]) | (() => import("@popperjs/core").Placement[]))[], unknown, unknown, undefined, boolean>;
                    readonly gpuAcceleration: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly offset: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
                    readonly placement: import("element-plus/es/utils").EpPropFinalized<StringConstructor, import("@popperjs/core").Placement, unknown, "bottom", boolean>;
                    readonly popperOptions: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => Partial<import("@popperjs/core").Options>) | (() => Partial<import("@popperjs/core").Options>) | ((new (...args: any[]) => Partial<import("@popperjs/core").Options>) | (() => Partial<import("@popperjs/core").Options>))[], unknown, unknown, () => {}, boolean>;
                    readonly strategy: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "absolute" | "fixed", unknown, "absolute", boolean>;
                    readonly showAfter: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                    readonly hideAfter: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 200, boolean>;
                }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "placement" | "showAfter" | "hideAfter" | "strategy" | "offset" | "content" | "transition" | "effect" | "boundariesPadding" | "fallbackPlacements" | "gpuAcceleration" | "popperOptions" | "enterable" | "focusOnShow" | "trapping" | "stopPopperMouseEvent" | "visible" | "pure" | "virtualTriggering" | "appendTo" | "rawContent" | "teleported" | "persistent">;
                $attrs: {
                    [x: string]: unknown;
                };
                $refs: {
                    [x: string]: unknown;
                };
                $slots: Readonly<{
                    [name: string]: import("vue").Slot | undefined;
                }>;
                $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
                $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
                $emit: (event: string, ...args: any[]) => void;
                $el: any;
                $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                    readonly appendTo: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | HTMLElement) & {}) | (() => string | HTMLElement) | ((new (...args: any[]) => (string | HTMLElement) & {}) | (() => string | HTMLElement))[], unknown, unknown, string, boolean>;
                    readonly content: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
                    readonly rawContent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                    readonly persistent: BooleanConstructor;
                    readonly ariaLabel: StringConstructor;
                    readonly visible: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (boolean | null) & {}) | (() => boolean | null) | ((new (...args: any[]) => (boolean | null) & {}) | (() => boolean | null))[], unknown, unknown, null, boolean>;
                    readonly transition: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, `${string}-fade-in-linear`, boolean>;
                    readonly teleported: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly disabled: {
                        readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly id: StringConstructor;
                    readonly style: {
                        readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly className: {
                        readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | any)[])[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | any)[])[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly effect: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "dark", boolean>;
                    readonly enterable: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly pure: BooleanConstructor;
                    readonly focusOnShow: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                    readonly trapping: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                    readonly popperClass: {
                        readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | any)[])[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | any)[])[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly popperStyle: {
                        readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly referenceEl: {
                        readonly type: PropType<HTMLElement>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly triggerTargetEl: {
                        readonly type: PropType<HTMLElement>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly stopPopperMouseEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly virtualTriggering: BooleanConstructor;
                    readonly zIndex: NumberConstructor;
                    readonly boundariesPadding: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                    readonly fallbackPlacements: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("@popperjs/core").Placement[]) | (() => import("@popperjs/core").Placement[]) | ((new (...args: any[]) => import("@popperjs/core").Placement[]) | (() => import("@popperjs/core").Placement[]))[], unknown, unknown, undefined, boolean>;
                    readonly gpuAcceleration: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly offset: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
                    readonly placement: import("element-plus/es/utils").EpPropFinalized<StringConstructor, import("@popperjs/core").Placement, unknown, "bottom", boolean>;
                    readonly popperOptions: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => Partial<import("@popperjs/core").Options>) | (() => Partial<import("@popperjs/core").Options>) | ((new (...args: any[]) => Partial<import("@popperjs/core").Options>) | (() => Partial<import("@popperjs/core").Options>))[], unknown, unknown, () => {}, boolean>;
                    readonly strategy: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "absolute" | "fixed", unknown, "absolute", boolean>;
                    readonly showAfter: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                    readonly hideAfter: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 200, boolean>;
                }>>, {
                    ariaHidden: import("vue").ComputedRef<boolean>;
                    entering: import("vue").Ref<boolean>;
                    leaving: import("vue").Ref<boolean>;
                    id: import("vue").Ref<string>;
                    intermediateOpen: import("vue").Ref<boolean>;
                    contentStyle: import("vue").ComputedRef<any>;
                    contentRef: import("vue").Ref<({
                        $: import("vue").ComponentInternalInstance;
                        $data: {};
                        $props: Partial<{
                            readonly placement: import("element-plus/es/utils").EpPropMergeType<StringConstructor, import("@popperjs/core").Placement, unknown>;
                            readonly strategy: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "absolute" | "fixed", unknown>;
                            readonly offset: number;
                            readonly effect: string;
                            readonly boundariesPadding: number;
                            readonly fallbackPlacements: import("@popperjs/core").Placement[];
                            readonly gpuAcceleration: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                            readonly popperOptions: Partial<import("@popperjs/core").Options>;
                            readonly enterable: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                            readonly focusOnShow: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                            readonly trapping: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                            readonly stopPopperMouseEvent: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                            readonly ariaLabel: string;
                            readonly visible: boolean;
                            readonly pure: boolean;
                            readonly virtualTriggering: boolean;
                        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
                            readonly id: StringConstructor;
                            readonly style: {
                                readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                                readonly required: false;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly className: {
                                readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | any)[])[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | any)[])[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                                readonly required: false;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly effect: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "dark", boolean>;
                            readonly visible: BooleanConstructor;
                            readonly enterable: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                            readonly pure: BooleanConstructor;
                            readonly focusOnShow: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                            readonly trapping: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                            readonly popperClass: {
                                readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | any)[])[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | any)[])[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                                readonly required: false;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly popperStyle: {
                                readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                                readonly required: false;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly referenceEl: {
                                readonly type: PropType<HTMLElement>;
                                readonly required: false;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly triggerTargetEl: {
                                readonly type: PropType<HTMLElement>;
                                readonly required: false;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly stopPopperMouseEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                            readonly ariaLabel: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                            readonly virtualTriggering: BooleanConstructor;
                            readonly zIndex: NumberConstructor;
                            readonly boundariesPadding: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                            readonly fallbackPlacements: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("@popperjs/core").Placement[]) | (() => import("@popperjs/core").Placement[]) | ((new (...args: any[]) => import("@popperjs/core").Placement[]) | (() => import("@popperjs/core").Placement[]))[], unknown, unknown, undefined, boolean>;
                            readonly gpuAcceleration: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                            readonly offset: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
                            readonly placement: import("element-plus/es/utils").EpPropFinalized<StringConstructor, import("@popperjs/core").Placement, unknown, "bottom", boolean>;
                            readonly popperOptions: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => Partial<import("@popperjs/core").Options>) | (() => Partial<import("@popperjs/core").Options>) | ((new (...args: any[]) => Partial<import("@popperjs/core").Options>) | (() => Partial<import("@popperjs/core").Options>))[], unknown, unknown, () => {}, boolean>;
                            readonly strategy: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "absolute" | "fixed", unknown, "absolute", boolean>;
                        }>> & {
                            [x: string & `on${string}`]: ((...args: any[]) => any) | undefined;
                        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "placement" | "strategy" | "offset" | "effect" | "boundariesPadding" | "fallbackPlacements" | "gpuAcceleration" | "popperOptions" | "enterable" | "focusOnShow" | "trapping" | "stopPopperMouseEvent" | "ariaLabel" | "visible" | "pure" | "virtualTriggering">;
                        $attrs: {
                            [x: string]: unknown;
                        };
                        $refs: {
                            [x: string]: unknown;
                        };
                        $slots: Readonly<{
                            [name: string]: import("vue").Slot | undefined;
                        }>;
                        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
                        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
                        $emit: (event: string, ...args: any[]) => void;
                        $el: any;
                        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                            readonly id: StringConstructor;
                            readonly style: {
                                readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                                readonly required: false;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly className: {
                                readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | any)[])[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | any)[])[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                                readonly required: false;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly effect: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "dark", boolean>;
                            readonly visible: BooleanConstructor;
                            readonly enterable: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                            readonly pure: BooleanConstructor;
                            readonly focusOnShow: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                            readonly trapping: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                            readonly popperClass: {
                                readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | any)[])[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | any)[])[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                                readonly required: false;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly popperStyle: {
                                readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                                readonly required: false;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly referenceEl: {
                                readonly type: PropType<HTMLElement>;
                                readonly required: false;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly triggerTargetEl: {
                                readonly type: PropType<HTMLElement>;
                                readonly required: false;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly stopPopperMouseEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                            readonly ariaLabel: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                            readonly virtualTriggering: BooleanConstructor;
                            readonly zIndex: NumberConstructor;
                            readonly boundariesPadding: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                            readonly fallbackPlacements: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("@popperjs/core").Placement[]) | (() => import("@popperjs/core").Placement[]) | ((new (...args: any[]) => import("@popperjs/core").Placement[]) | (() => import("@popperjs/core").Placement[]))[], unknown, unknown, undefined, boolean>;
                            readonly gpuAcceleration: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                            readonly offset: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
                            readonly placement: import("element-plus/es/utils").EpPropFinalized<StringConstructor, import("@popperjs/core").Placement, unknown, "bottom", boolean>;
                            readonly popperOptions: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => Partial<import("@popperjs/core").Options>) | (() => Partial<import("@popperjs/core").Options>) | ((new (...args: any[]) => Partial<import("@popperjs/core").Options>) | (() => Partial<import("@popperjs/core").Options>))[], unknown, unknown, () => {}, boolean>;
                            readonly strategy: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "absolute" | "fixed", unknown, "absolute", boolean>;
                        }>> & {
                            [x: string & `on${string}`]: ((...args: any[]) => any) | undefined;
                        }, {
                            emit: (event: string, ...args: any[]) => void;
                            props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                                readonly id: StringConstructor;
                                readonly style: {
                                    readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                                    readonly required: false;
                                    readonly validator: ((val: unknown) => boolean) | undefined;
                                    __epPropKey: true;
                                };
                                readonly className: {
                                    readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | any)[])[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | any)[])[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                                    readonly required: false;
                                    readonly validator: ((val: unknown) => boolean) | undefined;
                                    __epPropKey: true;
                                };
                                readonly effect: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "dark", boolean>;
                                readonly visible: BooleanConstructor;
                                readonly enterable: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                                readonly pure: BooleanConstructor;
                                readonly focusOnShow: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                                readonly trapping: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                                readonly popperClass: {
                                    readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | any)[])[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | (string | {
                                        [x: string]: boolean;
                                    } | any)[])[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                                    readonly required: false;
                                    readonly validator: ((val: unknown) => boolean) | undefined;
                                    __epPropKey: true;
                                };
                                readonly popperStyle: {
                                    readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                                    readonly required: false;
                                    readonly validator: ((val: unknown) => boolean) | undefined;
                                    __epPropKey: true;
                                };
                                readonly referenceEl: {
                                    readonly type: PropType<HTMLElement>;
                                    readonly required: false;
                                    readonly validator: ((val: unknown) => boolean) | undefined;
                                    __epPropKey: true;
                                };
                                readonly triggerTargetEl: {
                                    readonly type: PropType<HTMLElement>;
                                    readonly required: false;
                                    readonly validator: ((val: unknown) => boolean) | undefined;
                                    __epPropKey: true;
                                };
                                readonly stopPopperMouseEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                                readonly ariaLabel: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                                readonly virtualTriggering: BooleanConstructor;
                                readonly zIndex: NumberConstructor;
                                readonly boundariesPadding: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                                readonly fallbackPlacements: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("@popperjs/core").Placement[]) | (() => import("@popperjs/core").Placement[]) | ((new (...args: any[]) => import("@popperjs/core").Placement[]) | (() => import("@popperjs/core").Placement[]))[], unknown, unknown, undefined, boolean>;
                                readonly gpuAcceleration: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                                readonly offset: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
                                readonly placement: import("element-plus/es/utils").EpPropFinalized<StringConstructor, import("@popperjs/core").Placement, unknown, "bottom", boolean>;
                                readonly popperOptions: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => Partial<import("@popperjs/core").Options>) | (() => Partial<import("@popperjs/core").Options>) | ((new (...args: any[]) => Partial<import("@popperjs/core").Options>) | (() => Partial<import("@popperjs/core").Options>))[], unknown, unknown, () => {}, boolean>;
                                readonly strategy: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "absolute" | "fixed", unknown, "absolute", boolean>;
                            }>> & {
                                [x: string & `on${string}`]: ((...args: any[]) => any) | undefined;
                            }>>;
                            popperInstanceRef: import("vue").Ref<import("@popperjs/core").Instance | undefined>;
                            contentRef: import("vue").Ref<HTMLElement | undefined>;
                            triggerRef: import("vue").Ref<import("../../..").Measurable | undefined>;
                            role: import("vue").ComputedRef<string>;
                            formItemContext: import("../../..").FormItemContext | undefined;
                            nextZIndex: () => number;
                            ns: {
                                namespace: import("vue").Ref<string>;
                                b: (blockSuffix?: string) => string;
                                e: (element?: string | undefined) => string;
                                m: (modifier?: string | undefined) => string;
                                be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                                em: (element?: string | undefined, modifier?: string | undefined) => string;
                                bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                                bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                                is: {
                                    (name: string, state: boolean | undefined): string;
                                    (name: string): string;
                                };
                                cssVar: (object: Record<string, string>) => Record<string, string>;
                                cssVarName: (name: string) => string;
                                cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                                cssVarBlockName: (name: string) => string;
                            };
                            popperContentRef: import("vue").Ref<HTMLElement | undefined>;
                            focusStartRef: import("vue").Ref<string | HTMLElement>;
                            arrowRef: import("vue").Ref<HTMLElement | undefined>;
                            arrowOffset: import("vue").Ref<number | undefined>;
                            contentZIndex: import("vue").Ref<number>;
                            trapped: import("vue").Ref<boolean>;
                            triggerTargetAriaStopWatch: undefined;
                            computedReference: import("vue").ComputedRef<import("../../..").Measurable | undefined>;
                            contentStyle: import("vue").ComputedRef<any>;
                            contentClass: import("vue").ComputedRef<((string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | any)[])[])[])[])[])[])[])[])[])[])[]) | undefined)[]>;
                            ariaModal: import("vue").ComputedRef<string | undefined>;
                            createPopperInstance: ({ referenceEl, popperContentEl, arrowEl }: {
                                referenceEl: any;
                                popperContentEl: any;
                                arrowEl: any;
                            }) => import("@popperjs/core").Instance;
                            updatePopper: (shouldUpdateZIndex?: boolean) => void;
                            togglePopperAlive: () => void;
                            onFocusAfterTrapped: () => void;
                            onFocusAfterReleased: () => void;
                            onFocusInTrap: (event: FocusEvent) => void;
                            onFocusoutPrevented: () => void;
                            onReleaseRequested: () => void;
                            ElFocusTrap: import("vue").DefineComponent<{
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
                        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, {
                            readonly placement: import("element-plus/es/utils").EpPropMergeType<StringConstructor, import("@popperjs/core").Placement, unknown>;
                            readonly strategy: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "absolute" | "fixed", unknown>;
                            readonly offset: number;
                            readonly effect: string;
                            readonly boundariesPadding: number;
                            readonly fallbackPlacements: import("@popperjs/core").Placement[];
                            readonly gpuAcceleration: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                            readonly popperOptions: Partial<import("@popperjs/core").Options>;
                            readonly enterable: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                            readonly focusOnShow: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                            readonly trapping: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                            readonly stopPopperMouseEvent: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                            readonly ariaLabel: string;
                            readonly visible: boolean;
                            readonly pure: boolean;
                            readonly virtualTriggering: boolean;
                        }> & {
                            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
                            created?: ((() => void) | (() => void)[]) | undefined;
                            beforeMount?: ((() => void) | (() => void)[]) | undefined;
                            mounted?: ((() => void) | (() => void)[]) | undefined;
                            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
                            updated?: ((() => void) | (() => void)[]) | undefined;
                            activated?: ((() => void) | (() => void)[]) | undefined;
                            deactivated?: ((() => void) | (() => void)[]) | undefined;
                            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
                            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
                            destroyed?: ((() => void) | (() => void)[]) | undefined;
                            unmounted?: ((() => void) | (() => void)[]) | undefined;
                            renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
                            renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
                            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
                        };
                        $forceUpdate: () => void;
                        $nextTick: typeof nextTick;
                        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
                    } & Readonly<import("vue").ExtractPropTypes<{
                        readonly id: StringConstructor;
                        readonly style: {
                            readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly className: {
                            readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | any)[])[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | any)[])[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly effect: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "dark", boolean>;
                        readonly visible: BooleanConstructor;
                        readonly enterable: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                        readonly pure: BooleanConstructor;
                        readonly focusOnShow: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                        readonly trapping: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                        readonly popperClass: {
                            readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | any)[])[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | any)[])[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly popperStyle: {
                            readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly referenceEl: {
                            readonly type: PropType<HTMLElement>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly triggerTargetEl: {
                            readonly type: PropType<HTMLElement>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly stopPopperMouseEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                        readonly ariaLabel: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                        readonly virtualTriggering: BooleanConstructor;
                        readonly zIndex: NumberConstructor;
                        readonly boundariesPadding: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                        readonly fallbackPlacements: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("@popperjs/core").Placement[]) | (() => import("@popperjs/core").Placement[]) | ((new (...args: any[]) => import("@popperjs/core").Placement[]) | (() => import("@popperjs/core").Placement[]))[], unknown, unknown, undefined, boolean>;
                        readonly gpuAcceleration: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                        readonly offset: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
                        readonly placement: import("element-plus/es/utils").EpPropFinalized<StringConstructor, import("@popperjs/core").Placement, unknown, "bottom", boolean>;
                        readonly popperOptions: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => Partial<import("@popperjs/core").Options>) | (() => Partial<import("@popperjs/core").Options>) | ((new (...args: any[]) => Partial<import("@popperjs/core").Options>) | (() => Partial<import("@popperjs/core").Options>))[], unknown, unknown, () => {}, boolean>;
                        readonly strategy: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "absolute" | "fixed", unknown, "absolute", boolean>;
                    }>> & {
                        [x: string & `on${string}`]: ((...args: any[]) => any) | undefined;
                    } & import("vue").ShallowUnwrapRef<{
                        emit: (event: string, ...args: any[]) => void;
                        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                            readonly id: StringConstructor;
                            readonly style: {
                                readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                                readonly required: false;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly className: {
                                readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | any)[])[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | any)[])[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                                readonly required: false;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly effect: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "dark", boolean>;
                            readonly visible: BooleanConstructor;
                            readonly enterable: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                            readonly pure: BooleanConstructor;
                            readonly focusOnShow: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                            readonly trapping: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                            readonly popperClass: {
                                readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | any)[])[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | any)[])[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                                readonly required: false;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly popperStyle: {
                                readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                                readonly required: false;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly referenceEl: {
                                readonly type: PropType<HTMLElement>;
                                readonly required: false;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly triggerTargetEl: {
                                readonly type: PropType<HTMLElement>;
                                readonly required: false;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly stopPopperMouseEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                            readonly ariaLabel: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                            readonly virtualTriggering: BooleanConstructor;
                            readonly zIndex: NumberConstructor;
                            readonly boundariesPadding: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                            readonly fallbackPlacements: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("@popperjs/core").Placement[]) | (() => import("@popperjs/core").Placement[]) | ((new (...args: any[]) => import("@popperjs/core").Placement[]) | (() => import("@popperjs/core").Placement[]))[], unknown, unknown, undefined, boolean>;
                            readonly gpuAcceleration: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                            readonly offset: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
                            readonly placement: import("element-plus/es/utils").EpPropFinalized<StringConstructor, import("@popperjs/core").Placement, unknown, "bottom", boolean>;
                            readonly popperOptions: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => Partial<import("@popperjs/core").Options>) | (() => Partial<import("@popperjs/core").Options>) | ((new (...args: any[]) => Partial<import("@popperjs/core").Options>) | (() => Partial<import("@popperjs/core").Options>))[], unknown, unknown, () => {}, boolean>;
                            readonly strategy: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "absolute" | "fixed", unknown, "absolute", boolean>;
                        }>> & {
                            [x: string & `on${string}`]: ((...args: any[]) => any) | undefined;
                        }>>;
                        popperInstanceRef: import("vue").Ref<import("@popperjs/core").Instance | undefined>;
                        contentRef: import("vue").Ref<HTMLElement | undefined>;
                        triggerRef: import("vue").Ref<import("../../..").Measurable | undefined>;
                        role: import("vue").ComputedRef<string>;
                        formItemContext: import("../../..").FormItemContext | undefined;
                        nextZIndex: () => number;
                        ns: {
                            namespace: import("vue").Ref<string>;
                            b: (blockSuffix?: string) => string;
                            e: (element?: string | undefined) => string;
                            m: (modifier?: string | undefined) => string;
                            be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                            em: (element?: string | undefined, modifier?: string | undefined) => string;
                            bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                            bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                            is: {
                                (name: string, state: boolean | undefined): string;
                                (name: string): string;
                            };
                            cssVar: (object: Record<string, string>) => Record<string, string>;
                            cssVarName: (name: string) => string;
                            cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                            cssVarBlockName: (name: string) => string;
                        };
                        popperContentRef: import("vue").Ref<HTMLElement | undefined>;
                        focusStartRef: import("vue").Ref<string | HTMLElement>;
                        arrowRef: import("vue").Ref<HTMLElement | undefined>;
                        arrowOffset: import("vue").Ref<number | undefined>;
                        contentZIndex: import("vue").Ref<number>;
                        trapped: import("vue").Ref<boolean>;
                        triggerTargetAriaStopWatch: undefined;
                        computedReference: import("vue").ComputedRef<import("../../..").Measurable | undefined>;
                        contentStyle: import("vue").ComputedRef<any>;
                        contentClass: import("vue").ComputedRef<((string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | any)[])[])[])[])[])[])[])[])[])[])[]) | undefined)[]>;
                        ariaModal: import("vue").ComputedRef<string | undefined>;
                        createPopperInstance: ({ referenceEl, popperContentEl, arrowEl }: {
                            referenceEl: any;
                            popperContentEl: any;
                            arrowEl: any;
                        }) => import("@popperjs/core").Instance;
                        updatePopper: (shouldUpdateZIndex?: boolean) => void;
                        togglePopperAlive: () => void;
                        onFocusAfterTrapped: () => void;
                        onFocusAfterReleased: () => void;
                        onFocusInTrap: (event: FocusEvent) => void;
                        onFocusoutPrevented: () => void;
                        onReleaseRequested: () => void;
                        ElFocusTrap: import("vue").DefineComponent<{
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
                    }> & {} & import("vue").ComponentCustomProperties) | null>;
                    destroyed: import("vue").Ref<boolean>;
                    shouldRender: import("vue").ComputedRef<boolean>;
                    shouldShow: import("vue").ComputedRef<boolean>;
                    onClose: (e?: Event | undefined) => void;
                    open: import("vue").Ref<boolean>;
                    onAfterShow: () => void;
                    onBeforeEnter: () => void;
                    onBeforeLeave: () => void;
                    onContentEnter: (event: unknown) => void;
                    onContentLeave: (event: unknown) => void;
                    onTransitionLeave: () => void;
                    onBlur: () => void;
                }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
                    readonly placement: import("element-plus/es/utils").EpPropMergeType<StringConstructor, import("@popperjs/core").Placement, unknown>;
                    readonly showAfter: number;
                    readonly hideAfter: number;
                    readonly strategy: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "absolute" | "fixed", unknown>;
                    readonly offset: number;
                    readonly content: string;
                    readonly transition: string;
                    readonly effect: string;
                    readonly boundariesPadding: number;
                    readonly fallbackPlacements: import("@popperjs/core").Placement[];
                    readonly gpuAcceleration: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                    readonly popperOptions: Partial<import("@popperjs/core").Options>;
                    readonly enterable: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                    readonly focusOnShow: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                    readonly trapping: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                    readonly stopPopperMouseEvent: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                    readonly visible: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (boolean | null) & {}) | (() => boolean | null) | ((new (...args: any[]) => (boolean | null) & {}) | (() => boolean | null))[], unknown, unknown>;
                    readonly pure: boolean;
                    readonly virtualTriggering: boolean;
                    readonly appendTo: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | HTMLElement) & {}) | (() => string | HTMLElement) | ((new (...args: any[]) => (string | HTMLElement) & {}) | (() => string | HTMLElement))[], unknown, unknown>;
                    readonly rawContent: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                    readonly teleported: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                    readonly persistent: boolean;
                }> & {
                    beforeCreate?: ((() => void) | (() => void)[]) | undefined;
                    created?: ((() => void) | (() => void)[]) | undefined;
                    beforeMount?: ((() => void) | (() => void)[]) | undefined;
                    mounted?: ((() => void) | (() => void)[]) | undefined;
                    beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
                    updated?: ((() => void) | (() => void)[]) | undefined;
                    activated?: ((() => void) | (() => void)[]) | undefined;
                    deactivated?: ((() => void) | (() => void)[]) | undefined;
                    beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
                    beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
                    destroyed?: ((() => void) | (() => void)[]) | undefined;
                    unmounted?: ((() => void) | (() => void)[]) | undefined;
                    renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
                    renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
                    errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
                };
                $forceUpdate: () => void;
                $nextTick: typeof nextTick;
                $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
            } & Readonly<import("vue").ExtractPropTypes<{
                readonly appendTo: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | HTMLElement) & {}) | (() => string | HTMLElement) | ((new (...args: any[]) => (string | HTMLElement) & {}) | (() => string | HTMLElement))[], unknown, unknown, string, boolean>;
                readonly content: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
                readonly rawContent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly persistent: BooleanConstructor;
                readonly ariaLabel: StringConstructor;
                readonly visible: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (boolean | null) & {}) | (() => boolean | null) | ((new (...args: any[]) => (boolean | null) & {}) | (() => boolean | null))[], unknown, unknown, null, boolean>;
                readonly transition: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, `${string}-fade-in-linear`, boolean>;
                readonly teleported: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly disabled: {
                    readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly id: StringConstructor;
                readonly style: {
                    readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly className: {
                    readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | any)[])[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | any)[])[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly effect: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "dark", boolean>;
                readonly enterable: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly pure: BooleanConstructor;
                readonly focusOnShow: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly trapping: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly popperClass: {
                    readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | any)[])[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | any)[])[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly popperStyle: {
                    readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly referenceEl: {
                    readonly type: PropType<HTMLElement>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly triggerTargetEl: {
                    readonly type: PropType<HTMLElement>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly stopPopperMouseEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly virtualTriggering: BooleanConstructor;
                readonly zIndex: NumberConstructor;
                readonly boundariesPadding: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                readonly fallbackPlacements: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("@popperjs/core").Placement[]) | (() => import("@popperjs/core").Placement[]) | ((new (...args: any[]) => import("@popperjs/core").Placement[]) | (() => import("@popperjs/core").Placement[]))[], unknown, unknown, undefined, boolean>;
                readonly gpuAcceleration: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly offset: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
                readonly placement: import("element-plus/es/utils").EpPropFinalized<StringConstructor, import("@popperjs/core").Placement, unknown, "bottom", boolean>;
                readonly popperOptions: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => Partial<import("@popperjs/core").Options>) | (() => Partial<import("@popperjs/core").Options>) | ((new (...args: any[]) => Partial<import("@popperjs/core").Options>) | (() => Partial<import("@popperjs/core").Options>))[], unknown, unknown, () => {}, boolean>;
                readonly strategy: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "absolute" | "fixed", unknown, "absolute", boolean>;
                readonly showAfter: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                readonly hideAfter: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 200, boolean>;
            }>> & import("vue").ShallowUnwrapRef<{
                ariaHidden: import("vue").ComputedRef<boolean>;
                entering: import("vue").Ref<boolean>;
                leaving: import("vue").Ref<boolean>;
                id: import("vue").Ref<string>;
                intermediateOpen: import("vue").Ref<boolean>;
                contentStyle: import("vue").ComputedRef<any>;
                contentRef: import("vue").Ref<({
                    $: import("vue").ComponentInternalInstance;
                    $data: {};
                    $props: Partial<{
                        readonly placement: import("element-plus/es/utils").EpPropMergeType<StringConstructor, import("@popperjs/core").Placement, unknown>;
                        readonly strategy: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "absolute" | "fixed", unknown>;
                        readonly offset: number;
                        readonly effect: string;
                        readonly boundariesPadding: number;
                        readonly fallbackPlacements: import("@popperjs/core").Placement[];
                        readonly gpuAcceleration: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                        readonly popperOptions: Partial<import("@popperjs/core").Options>;
                        readonly enterable: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                        readonly focusOnShow: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                        readonly trapping: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                        readonly stopPopperMouseEvent: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                        readonly ariaLabel: string;
                        readonly visible: boolean;
                        readonly pure: boolean;
                        readonly virtualTriggering: boolean;
                    }> & Omit<Readonly<import("vue").ExtractPropTypes<{
                        readonly id: StringConstructor;
                        readonly style: {
                            readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly className: {
                            readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | any)[])[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | any)[])[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly effect: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "dark", boolean>;
                        readonly visible: BooleanConstructor;
                        readonly enterable: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                        readonly pure: BooleanConstructor;
                        readonly focusOnShow: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                        readonly trapping: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                        readonly popperClass: {
                            readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | any)[])[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | any)[])[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly popperStyle: {
                            readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly referenceEl: {
                            readonly type: PropType<HTMLElement>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly triggerTargetEl: {
                            readonly type: PropType<HTMLElement>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly stopPopperMouseEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                        readonly ariaLabel: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                        readonly virtualTriggering: BooleanConstructor;
                        readonly zIndex: NumberConstructor;
                        readonly boundariesPadding: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                        readonly fallbackPlacements: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("@popperjs/core").Placement[]) | (() => import("@popperjs/core").Placement[]) | ((new (...args: any[]) => import("@popperjs/core").Placement[]) | (() => import("@popperjs/core").Placement[]))[], unknown, unknown, undefined, boolean>;
                        readonly gpuAcceleration: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                        readonly offset: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
                        readonly placement: import("element-plus/es/utils").EpPropFinalized<StringConstructor, import("@popperjs/core").Placement, unknown, "bottom", boolean>;
                        readonly popperOptions: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => Partial<import("@popperjs/core").Options>) | (() => Partial<import("@popperjs/core").Options>) | ((new (...args: any[]) => Partial<import("@popperjs/core").Options>) | (() => Partial<import("@popperjs/core").Options>))[], unknown, unknown, () => {}, boolean>;
                        readonly strategy: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "absolute" | "fixed", unknown, "absolute", boolean>;
                    }>> & {
                        [x: string & `on${string}`]: ((...args: any[]) => any) | undefined;
                    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "placement" | "strategy" | "offset" | "effect" | "boundariesPadding" | "fallbackPlacements" | "gpuAcceleration" | "popperOptions" | "enterable" | "focusOnShow" | "trapping" | "stopPopperMouseEvent" | "ariaLabel" | "visible" | "pure" | "virtualTriggering">;
                    $attrs: {
                        [x: string]: unknown;
                    };
                    $refs: {
                        [x: string]: unknown;
                    };
                    $slots: Readonly<{
                        [name: string]: import("vue").Slot | undefined;
                    }>;
                    $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
                    $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
                    $emit: (event: string, ...args: any[]) => void;
                    $el: any;
                    $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                        readonly id: StringConstructor;
                        readonly style: {
                            readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly className: {
                            readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | any)[])[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | any)[])[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly effect: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "dark", boolean>;
                        readonly visible: BooleanConstructor;
                        readonly enterable: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                        readonly pure: BooleanConstructor;
                        readonly focusOnShow: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                        readonly trapping: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                        readonly popperClass: {
                            readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | any)[])[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | any)[])[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly popperStyle: {
                            readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly referenceEl: {
                            readonly type: PropType<HTMLElement>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly triggerTargetEl: {
                            readonly type: PropType<HTMLElement>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly stopPopperMouseEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                        readonly ariaLabel: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                        readonly virtualTriggering: BooleanConstructor;
                        readonly zIndex: NumberConstructor;
                        readonly boundariesPadding: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                        readonly fallbackPlacements: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("@popperjs/core").Placement[]) | (() => import("@popperjs/core").Placement[]) | ((new (...args: any[]) => import("@popperjs/core").Placement[]) | (() => import("@popperjs/core").Placement[]))[], unknown, unknown, undefined, boolean>;
                        readonly gpuAcceleration: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                        readonly offset: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
                        readonly placement: import("element-plus/es/utils").EpPropFinalized<StringConstructor, import("@popperjs/core").Placement, unknown, "bottom", boolean>;
                        readonly popperOptions: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => Partial<import("@popperjs/core").Options>) | (() => Partial<import("@popperjs/core").Options>) | ((new (...args: any[]) => Partial<import("@popperjs/core").Options>) | (() => Partial<import("@popperjs/core").Options>))[], unknown, unknown, () => {}, boolean>;
                        readonly strategy: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "absolute" | "fixed", unknown, "absolute", boolean>;
                    }>> & {
                        [x: string & `on${string}`]: ((...args: any[]) => any) | undefined;
                    }, {
                        emit: (event: string, ...args: any[]) => void;
                        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                            readonly id: StringConstructor;
                            readonly style: {
                                readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                                readonly required: false;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly className: {
                                readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | any)[])[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | any)[])[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                                readonly required: false;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly effect: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "dark", boolean>;
                            readonly visible: BooleanConstructor;
                            readonly enterable: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                            readonly pure: BooleanConstructor;
                            readonly focusOnShow: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                            readonly trapping: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                            readonly popperClass: {
                                readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | any)[])[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | any)[])[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                                readonly required: false;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly popperStyle: {
                                readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                                readonly required: false;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly referenceEl: {
                                readonly type: PropType<HTMLElement>;
                                readonly required: false;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly triggerTargetEl: {
                                readonly type: PropType<HTMLElement>;
                                readonly required: false;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly stopPopperMouseEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                            readonly ariaLabel: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                            readonly virtualTriggering: BooleanConstructor;
                            readonly zIndex: NumberConstructor;
                            readonly boundariesPadding: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                            readonly fallbackPlacements: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("@popperjs/core").Placement[]) | (() => import("@popperjs/core").Placement[]) | ((new (...args: any[]) => import("@popperjs/core").Placement[]) | (() => import("@popperjs/core").Placement[]))[], unknown, unknown, undefined, boolean>;
                            readonly gpuAcceleration: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                            readonly offset: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
                            readonly placement: import("element-plus/es/utils").EpPropFinalized<StringConstructor, import("@popperjs/core").Placement, unknown, "bottom", boolean>;
                            readonly popperOptions: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => Partial<import("@popperjs/core").Options>) | (() => Partial<import("@popperjs/core").Options>) | ((new (...args: any[]) => Partial<import("@popperjs/core").Options>) | (() => Partial<import("@popperjs/core").Options>))[], unknown, unknown, () => {}, boolean>;
                            readonly strategy: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "absolute" | "fixed", unknown, "absolute", boolean>;
                        }>> & {
                            [x: string & `on${string}`]: ((...args: any[]) => any) | undefined;
                        }>>;
                        popperInstanceRef: import("vue").Ref<import("@popperjs/core").Instance | undefined>;
                        contentRef: import("vue").Ref<HTMLElement | undefined>;
                        triggerRef: import("vue").Ref<import("../../..").Measurable | undefined>;
                        role: import("vue").ComputedRef<string>;
                        formItemContext: import("../../..").FormItemContext | undefined;
                        nextZIndex: () => number;
                        ns: {
                            namespace: import("vue").Ref<string>;
                            b: (blockSuffix?: string) => string;
                            e: (element?: string | undefined) => string;
                            m: (modifier?: string | undefined) => string;
                            be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                            em: (element?: string | undefined, modifier?: string | undefined) => string;
                            bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                            bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                            is: {
                                (name: string, state: boolean | undefined): string;
                                (name: string): string;
                            };
                            cssVar: (object: Record<string, string>) => Record<string, string>;
                            cssVarName: (name: string) => string;
                            cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                            cssVarBlockName: (name: string) => string;
                        };
                        popperContentRef: import("vue").Ref<HTMLElement | undefined>;
                        focusStartRef: import("vue").Ref<string | HTMLElement>;
                        arrowRef: import("vue").Ref<HTMLElement | undefined>;
                        arrowOffset: import("vue").Ref<number | undefined>;
                        contentZIndex: import("vue").Ref<number>;
                        trapped: import("vue").Ref<boolean>;
                        triggerTargetAriaStopWatch: undefined;
                        computedReference: import("vue").ComputedRef<import("../../..").Measurable | undefined>;
                        contentStyle: import("vue").ComputedRef<any>;
                        contentClass: import("vue").ComputedRef<((string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | any)[])[])[])[])[])[])[])[])[])[])[]) | undefined)[]>;
                        ariaModal: import("vue").ComputedRef<string | undefined>;
                        createPopperInstance: ({ referenceEl, popperContentEl, arrowEl }: {
                            referenceEl: any;
                            popperContentEl: any;
                            arrowEl: any;
                        }) => import("@popperjs/core").Instance;
                        updatePopper: (shouldUpdateZIndex?: boolean) => void;
                        togglePopperAlive: () => void;
                        onFocusAfterTrapped: () => void;
                        onFocusAfterReleased: () => void;
                        onFocusInTrap: (event: FocusEvent) => void;
                        onFocusoutPrevented: () => void;
                        onReleaseRequested: () => void;
                        ElFocusTrap: import("vue").DefineComponent<{
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
                    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, {
                        readonly placement: import("element-plus/es/utils").EpPropMergeType<StringConstructor, import("@popperjs/core").Placement, unknown>;
                        readonly strategy: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "absolute" | "fixed", unknown>;
                        readonly offset: number;
                        readonly effect: string;
                        readonly boundariesPadding: number;
                        readonly fallbackPlacements: import("@popperjs/core").Placement[];
                        readonly gpuAcceleration: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                        readonly popperOptions: Partial<import("@popperjs/core").Options>;
                        readonly enterable: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                        readonly focusOnShow: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                        readonly trapping: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                        readonly stopPopperMouseEvent: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                        readonly ariaLabel: string;
                        readonly visible: boolean;
                        readonly pure: boolean;
                        readonly virtualTriggering: boolean;
                    }> & {
                        beforeCreate?: ((() => void) | (() => void)[]) | undefined;
                        created?: ((() => void) | (() => void)[]) | undefined;
                        beforeMount?: ((() => void) | (() => void)[]) | undefined;
                        mounted?: ((() => void) | (() => void)[]) | undefined;
                        beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
                        updated?: ((() => void) | (() => void)[]) | undefined;
                        activated?: ((() => void) | (() => void)[]) | undefined;
                        deactivated?: ((() => void) | (() => void)[]) | undefined;
                        beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
                        beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
                        destroyed?: ((() => void) | (() => void)[]) | undefined;
                        unmounted?: ((() => void) | (() => void)[]) | undefined;
                        renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
                        renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
                        errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
                    };
                    $forceUpdate: () => void;
                    $nextTick: typeof nextTick;
                    $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
                } & Readonly<import("vue").ExtractPropTypes<{
                    readonly id: StringConstructor;
                    readonly style: {
                        readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly className: {
                        readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | any)[])[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | any)[])[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly effect: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "dark", boolean>;
                    readonly visible: BooleanConstructor;
                    readonly enterable: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly pure: BooleanConstructor;
                    readonly focusOnShow: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                    readonly trapping: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                    readonly popperClass: {
                        readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | any)[])[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | any)[])[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly popperStyle: {
                        readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly referenceEl: {
                        readonly type: PropType<HTMLElement>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly triggerTargetEl: {
                        readonly type: PropType<HTMLElement>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly stopPopperMouseEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly ariaLabel: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                    readonly virtualTriggering: BooleanConstructor;
                    readonly zIndex: NumberConstructor;
                    readonly boundariesPadding: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                    readonly fallbackPlacements: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("@popperjs/core").Placement[]) | (() => import("@popperjs/core").Placement[]) | ((new (...args: any[]) => import("@popperjs/core").Placement[]) | (() => import("@popperjs/core").Placement[]))[], unknown, unknown, undefined, boolean>;
                    readonly gpuAcceleration: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly offset: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
                    readonly placement: import("element-plus/es/utils").EpPropFinalized<StringConstructor, import("@popperjs/core").Placement, unknown, "bottom", boolean>;
                    readonly popperOptions: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => Partial<import("@popperjs/core").Options>) | (() => Partial<import("@popperjs/core").Options>) | ((new (...args: any[]) => Partial<import("@popperjs/core").Options>) | (() => Partial<import("@popperjs/core").Options>))[], unknown, unknown, () => {}, boolean>;
                    readonly strategy: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "absolute" | "fixed", unknown, "absolute", boolean>;
                }>> & {
                    [x: string & `on${string}`]: ((...args: any[]) => any) | undefined;
                } & import("vue").ShallowUnwrapRef<{
                    emit: (event: string, ...args: any[]) => void;
                    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                        readonly id: StringConstructor;
                        readonly style: {
                            readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly className: {
                            readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | any)[])[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | any)[])[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly effect: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "dark", boolean>;
                        readonly visible: BooleanConstructor;
                        readonly enterable: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                        readonly pure: BooleanConstructor;
                        readonly focusOnShow: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                        readonly trapping: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                        readonly popperClass: {
                            readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | any)[])[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | any)[])[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly popperStyle: {
                            readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly referenceEl: {
                            readonly type: PropType<HTMLElement>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly triggerTargetEl: {
                            readonly type: PropType<HTMLElement>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly stopPopperMouseEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                        readonly ariaLabel: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                        readonly virtualTriggering: BooleanConstructor;
                        readonly zIndex: NumberConstructor;
                        readonly boundariesPadding: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                        readonly fallbackPlacements: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("@popperjs/core").Placement[]) | (() => import("@popperjs/core").Placement[]) | ((new (...args: any[]) => import("@popperjs/core").Placement[]) | (() => import("@popperjs/core").Placement[]))[], unknown, unknown, undefined, boolean>;
                        readonly gpuAcceleration: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                        readonly offset: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
                        readonly placement: import("element-plus/es/utils").EpPropFinalized<StringConstructor, import("@popperjs/core").Placement, unknown, "bottom", boolean>;
                        readonly popperOptions: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => Partial<import("@popperjs/core").Options>) | (() => Partial<import("@popperjs/core").Options>) | ((new (...args: any[]) => Partial<import("@popperjs/core").Options>) | (() => Partial<import("@popperjs/core").Options>))[], unknown, unknown, () => {}, boolean>;
                        readonly strategy: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "absolute" | "fixed", unknown, "absolute", boolean>;
                    }>> & {
                        [x: string & `on${string}`]: ((...args: any[]) => any) | undefined;
                    }>>;
                    popperInstanceRef: import("vue").Ref<import("@popperjs/core").Instance | undefined>;
                    contentRef: import("vue").Ref<HTMLElement | undefined>;
                    triggerRef: import("vue").Ref<import("../../..").Measurable | undefined>;
                    role: import("vue").ComputedRef<string>;
                    formItemContext: import("../../..").FormItemContext | undefined;
                    nextZIndex: () => number;
                    ns: {
                        namespace: import("vue").Ref<string>;
                        b: (blockSuffix?: string) => string;
                        e: (element?: string | undefined) => string;
                        m: (modifier?: string | undefined) => string;
                        be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                        em: (element?: string | undefined, modifier?: string | undefined) => string;
                        bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                        bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                        is: {
                            (name: string, state: boolean | undefined): string;
                            (name: string): string;
                        };
                        cssVar: (object: Record<string, string>) => Record<string, string>;
                        cssVarName: (name: string) => string;
                        cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                        cssVarBlockName: (name: string) => string;
                    };
                    popperContentRef: import("vue").Ref<HTMLElement | undefined>;
                    focusStartRef: import("vue").Ref<string | HTMLElement>;
                    arrowRef: import("vue").Ref<HTMLElement | undefined>;
                    arrowOffset: import("vue").Ref<number | undefined>;
                    contentZIndex: import("vue").Ref<number>;
                    trapped: import("vue").Ref<boolean>;
                    triggerTargetAriaStopWatch: undefined;
                    computedReference: import("vue").ComputedRef<import("../../..").Measurable | undefined>;
                    contentStyle: import("vue").ComputedRef<any>;
                    contentClass: import("vue").ComputedRef<((string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | any)[])[])[])[])[])[])[])[])[])[])[]) | undefined)[]>;
                    ariaModal: import("vue").ComputedRef<string | undefined>;
                    createPopperInstance: ({ referenceEl, popperContentEl, arrowEl }: {
                        referenceEl: any;
                        popperContentEl: any;
                        arrowEl: any;
                    }) => import("@popperjs/core").Instance;
                    updatePopper: (shouldUpdateZIndex?: boolean) => void;
                    togglePopperAlive: () => void;
                    onFocusAfterTrapped: () => void;
                    onFocusAfterReleased: () => void;
                    onFocusInTrap: (event: FocusEvent) => void;
                    onFocusoutPrevented: () => void;
                    onReleaseRequested: () => void;
                    ElFocusTrap: import("vue").DefineComponent<{
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
                }> & {} & import("vue").ComponentCustomProperties) | null>;
                destroyed: import("vue").Ref<boolean>;
                shouldRender: import("vue").ComputedRef<boolean>;
                shouldShow: import("vue").ComputedRef<boolean>;
                onClose: (e?: Event | undefined) => void;
                open: import("vue").Ref<boolean>;
                onAfterShow: () => void;
                onBeforeEnter: () => void;
                onBeforeLeave: () => void;
                onContentEnter: (event: unknown) => void;
                onContentLeave: (event: unknown) => void;
                onTransitionLeave: () => void;
                onBlur: () => void;
            }> & {} & import("vue").ComponentCustomProperties) | null>;
            open: import("vue").Ref<boolean>;
            hide: (event?: Event | undefined) => void;
            isFocusInsideContent: () => boolean | undefined;
            updatePopper: () => void;
            onOpen: (event?: Event | undefined) => void;
            onClose: (event?: Event | undefined) => void;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("close" | "show" | "hide" | "open" | "update:visible" | "beforeShow" | "beforeHide")[], string, {
            disabled: boolean;
            trigger: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => ("click" | "contextmenu" | "focus" | "hover" | ("click" | "contextmenu" | "focus" | "hover")[]) & {}) | (() => "click" | "contextmenu" | "focus" | "hover" | ("click" | "contextmenu" | "focus" | "hover")[]) | ((new (...args: any[]) => ("click" | "contextmenu" | "focus" | "hover" | ("click" | "contextmenu" | "focus" | "hover")[]) & {}) | (() => "click" | "contextmenu" | "focus" | "hover" | ("click" | "contextmenu" | "focus" | "hover")[]))[], unknown, unknown>;
            placement: import("element-plus/es/utils").EpPropMergeType<StringConstructor, import("@popperjs/core").Placement, unknown>;
            showAfter: number;
            hideAfter: number;
            open: boolean;
            strategy: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "absolute" | "fixed", unknown>;
            offset: number;
            content: string;
            transition: string;
            effect: string;
            boundariesPadding: number;
            fallbackPlacements: import("@popperjs/core").Placement[];
            gpuAcceleration: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            popperOptions: Partial<import("@popperjs/core").Options>;
            enterable: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            focusOnShow: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            trapping: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            stopPopperMouseEvent: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            visible: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (boolean | null) & {}) | (() => boolean | null) | ((new (...args: any[]) => (boolean | null) & {}) | (() => boolean | null))[], unknown, unknown>;
            pure: boolean;
            virtualTriggering: boolean;
            appendTo: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | HTMLElement) & {}) | (() => string | HTMLElement) | ((new (...args: any[]) => (string | HTMLElement) & {}) | (() => string | HTMLElement))[], unknown, unknown>;
            rawContent: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            teleported: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            persistent: boolean;
            role: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "dialog" | "tree" | "grid" | "menu" | "listbox" | "tooltip", unknown>;
            arrowOffset: number;
            triggerKeys: string[];
            visibleArrow: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            showArrow: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof nextTick;
        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
        openDelay: {
            readonly type: PropType<number>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        visibleArrow: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
        hideAfter: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
        showArrow: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
        arrowOffset: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 5, boolean>;
        disabled: BooleanConstructor;
        trigger: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => ("click" | "contextmenu" | "focus" | "hover" | ("click" | "contextmenu" | "focus" | "hover")[]) & {}) | (() => "click" | "contextmenu" | "focus" | "hover" | ("click" | "contextmenu" | "focus" | "hover")[]) | ((new (...args: any[]) => ("click" | "contextmenu" | "focus" | "hover" | ("click" | "contextmenu" | "focus" | "hover")[]) & {}) | (() => "click" | "contextmenu" | "focus" | "hover" | ("click" | "contextmenu" | "focus" | "hover")[]))[], unknown, unknown, "hover", boolean>;
        triggerKeys: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | ((new (...args: any[]) => string[]) | (() => string[]))[], unknown, unknown, () => string[], boolean>;
        virtualRef: {
            readonly type: PropType<import("../../..").Measurable>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        virtualTriggering: BooleanConstructor;
        onMouseenter: FunctionConstructor;
        onMouseleave: FunctionConstructor;
        onClick: FunctionConstructor;
        onKeydown: FunctionConstructor;
        onFocus: FunctionConstructor;
        onBlur: FunctionConstructor;
        onContextmenu: FunctionConstructor;
        id: StringConstructor;
        open: BooleanConstructor;
        appendTo: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | HTMLElement) & {}) | (() => string | HTMLElement) | ((new (...args: any[]) => (string | HTMLElement) & {}) | (() => string | HTMLElement))[], unknown, unknown, string, boolean>;
        content: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
        rawContent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        persistent: BooleanConstructor;
        ariaLabel: StringConstructor;
        visible: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (boolean | null) & {}) | (() => boolean | null) | ((new (...args: any[]) => (boolean | null) & {}) | (() => boolean | null))[], unknown, unknown, null, boolean>;
        transition: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, `${string}-fade-in-linear`, boolean>;
        teleported: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        style: {
            readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        className: {
            readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | any)[])[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | any)[])[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        effect: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "dark", boolean>;
        enterable: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        pure: BooleanConstructor;
        focusOnShow: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        trapping: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        popperClass: {
            readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | any)[])[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | any)[])[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        popperStyle: {
            readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        referenceEl: {
            readonly type: PropType<HTMLElement>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        triggerTargetEl: {
            readonly type: PropType<HTMLElement>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        stopPopperMouseEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        zIndex: NumberConstructor;
        boundariesPadding: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
        fallbackPlacements: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("@popperjs/core").Placement[]) | (() => import("@popperjs/core").Placement[]) | ((new (...args: any[]) => import("@popperjs/core").Placement[]) | (() => import("@popperjs/core").Placement[]))[], unknown, unknown, undefined, boolean>;
        gpuAcceleration: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        offset: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
        placement: import("element-plus/es/utils").EpPropFinalized<StringConstructor, import("@popperjs/core").Placement, unknown, "bottom", boolean>;
        popperOptions: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => Partial<import("@popperjs/core").Options>) | (() => Partial<import("@popperjs/core").Options>) | ((new (...args: any[]) => Partial<import("@popperjs/core").Options>) | (() => Partial<import("@popperjs/core").Options>))[], unknown, unknown, () => {}, boolean>;
        strategy: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "absolute" | "fixed", unknown, "absolute", boolean>;
        showAfter: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
        "onUpdate:visible": {
            readonly type: PropType<(val: boolean) => void>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        role: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "dialog" | "tree" | "grid" | "menu" | "listbox" | "tooltip", unknown, "tooltip", boolean>;
    }>> & {
        onShow?: ((...args: any[]) => any) | undefined;
        onHide?: ((...args: any[]) => any) | undefined;
        onClose?: ((...args: any[]) => any) | undefined;
        onOpen?: ((...args: any[]) => any) | undefined;
        onBeforeShow?: ((...args: any[]) => any) | undefined;
        onBeforeHide?: ((...args: any[]) => any) | undefined;
        "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{
        compatShowAfter: import("vue").ComputedRef<number>;
        compatShowArrow: import("vue").ComputedRef<import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        popperRef: import("vue").Ref<({
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                readonly role: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "dialog" | "tree" | "grid" | "menu" | "listbox" | "tooltip", unknown>;
            }> & Omit<Readonly<import("vue").ExtractPropTypes<{
                readonly role: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "dialog" | "tree" | "grid" | "menu" | "listbox" | "tooltip", unknown, "tooltip", boolean>;
            }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "role">;
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            };
            $slots: Readonly<{
                [name: string]: import("vue").Slot | undefined;
            }>;
            $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
            $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
            $emit: (event: string, ...args: any[]) => void;
            $el: any;
            $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                readonly role: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "dialog" | "tree" | "grid" | "menu" | "listbox" | "tooltip", unknown, "tooltip", boolean>;
            }>>, {
                props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                    readonly role: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "dialog" | "tree" | "grid" | "menu" | "listbox" | "tooltip", unknown, "tooltip", boolean>;
                }>> & {
                    [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                }>>;
                triggerRef: import("vue").Ref<HTMLElement | undefined>;
                popperInstanceRef: import("vue").Ref<import("@popperjs/core").Instance | undefined>;
                contentRef: import("vue").Ref<HTMLElement | undefined>;
                referenceRef: import("vue").Ref<HTMLElement | undefined>;
                role: import("vue").ComputedRef<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "dialog" | "tree" | "grid" | "menu" | "listbox" | "tooltip", unknown>>;
                popperProvides: import("../../..").ElPopperInjectionContext;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
                readonly role: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "dialog" | "tree" | "grid" | "menu" | "listbox" | "tooltip", unknown>;
            }> & {
                beforeCreate?: ((() => void) | (() => void)[]) | undefined;
                created?: ((() => void) | (() => void)[]) | undefined;
                beforeMount?: ((() => void) | (() => void)[]) | undefined;
                mounted?: ((() => void) | (() => void)[]) | undefined;
                beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
                updated?: ((() => void) | (() => void)[]) | undefined;
                activated?: ((() => void) | (() => void)[]) | undefined;
                deactivated?: ((() => void) | (() => void)[]) | undefined;
                beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
                beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
                destroyed?: ((() => void) | (() => void)[]) | undefined;
                unmounted?: ((() => void) | (() => void)[]) | undefined;
                renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
                renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
                errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
            };
            $forceUpdate: () => void;
            $nextTick: typeof nextTick;
            $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
        } & Readonly<import("vue").ExtractPropTypes<{
            readonly role: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "dialog" | "tree" | "grid" | "menu" | "listbox" | "tooltip", unknown, "tooltip", boolean>;
        }>> & import("vue").ShallowUnwrapRef<{
            props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                readonly role: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "dialog" | "tree" | "grid" | "menu" | "listbox" | "tooltip", unknown, "tooltip", boolean>;
            }>> & {
                [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
            }>>;
            triggerRef: import("vue").Ref<HTMLElement | undefined>;
            popperInstanceRef: import("vue").Ref<import("@popperjs/core").Instance | undefined>;
            contentRef: import("vue").Ref<HTMLElement | undefined>;
            referenceRef: import("vue").Ref<HTMLElement | undefined>;
            role: import("vue").ComputedRef<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "dialog" | "tree" | "grid" | "menu" | "listbox" | "tooltip", unknown>>;
            popperProvides: import("../../..").ElPopperInjectionContext;
        }> & {} & import("vue").ComponentCustomProperties) | null>;
        contentRef: import("vue").Ref<({
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                readonly placement: import("element-plus/es/utils").EpPropMergeType<StringConstructor, import("@popperjs/core").Placement, unknown>;
                readonly showAfter: number;
                readonly hideAfter: number;
                readonly strategy: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "absolute" | "fixed", unknown>;
                readonly offset: number;
                readonly content: string;
                readonly transition: string;
                readonly effect: string;
                readonly boundariesPadding: number;
                readonly fallbackPlacements: import("@popperjs/core").Placement[];
                readonly gpuAcceleration: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly popperOptions: Partial<import("@popperjs/core").Options>;
                readonly enterable: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly focusOnShow: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly trapping: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly stopPopperMouseEvent: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly visible: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (boolean | null) & {}) | (() => boolean | null) | ((new (...args: any[]) => (boolean | null) & {}) | (() => boolean | null))[], unknown, unknown>;
                readonly pure: boolean;
                readonly virtualTriggering: boolean;
                readonly appendTo: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | HTMLElement) & {}) | (() => string | HTMLElement) | ((new (...args: any[]) => (string | HTMLElement) & {}) | (() => string | HTMLElement))[], unknown, unknown>;
                readonly rawContent: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly teleported: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly persistent: boolean;
            }> & Omit<Readonly<import("vue").ExtractPropTypes<{
                readonly appendTo: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | HTMLElement) & {}) | (() => string | HTMLElement) | ((new (...args: any[]) => (string | HTMLElement) & {}) | (() => string | HTMLElement))[], unknown, unknown, string, boolean>;
                readonly content: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
                readonly rawContent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly persistent: BooleanConstructor;
                readonly ariaLabel: StringConstructor;
                readonly visible: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (boolean | null) & {}) | (() => boolean | null) | ((new (...args: any[]) => (boolean | null) & {}) | (() => boolean | null))[], unknown, unknown, null, boolean>;
                readonly transition: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, `${string}-fade-in-linear`, boolean>;
                readonly teleported: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly disabled: {
                    readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly id: StringConstructor;
                readonly style: {
                    readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly className: {
                    readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | any)[])[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | any)[])[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly effect: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "dark", boolean>;
                readonly enterable: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly pure: BooleanConstructor;
                readonly focusOnShow: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly trapping: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly popperClass: {
                    readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | any)[])[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | any)[])[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly popperStyle: {
                    readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly referenceEl: {
                    readonly type: PropType<HTMLElement>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly triggerTargetEl: {
                    readonly type: PropType<HTMLElement>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly stopPopperMouseEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly virtualTriggering: BooleanConstructor;
                readonly zIndex: NumberConstructor;
                readonly boundariesPadding: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                readonly fallbackPlacements: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("@popperjs/core").Placement[]) | (() => import("@popperjs/core").Placement[]) | ((new (...args: any[]) => import("@popperjs/core").Placement[]) | (() => import("@popperjs/core").Placement[]))[], unknown, unknown, undefined, boolean>;
                readonly gpuAcceleration: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly offset: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
                readonly placement: import("element-plus/es/utils").EpPropFinalized<StringConstructor, import("@popperjs/core").Placement, unknown, "bottom", boolean>;
                readonly popperOptions: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => Partial<import("@popperjs/core").Options>) | (() => Partial<import("@popperjs/core").Options>) | ((new (...args: any[]) => Partial<import("@popperjs/core").Options>) | (() => Partial<import("@popperjs/core").Options>))[], unknown, unknown, () => {}, boolean>;
                readonly strategy: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "absolute" | "fixed", unknown, "absolute", boolean>;
                readonly showAfter: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                readonly hideAfter: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 200, boolean>;
            }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "placement" | "showAfter" | "hideAfter" | "strategy" | "offset" | "content" | "transition" | "effect" | "boundariesPadding" | "fallbackPlacements" | "gpuAcceleration" | "popperOptions" | "enterable" | "focusOnShow" | "trapping" | "stopPopperMouseEvent" | "visible" | "pure" | "virtualTriggering" | "appendTo" | "rawContent" | "teleported" | "persistent">;
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            };
            $slots: Readonly<{
                [name: string]: import("vue").Slot | undefined;
            }>;
            $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
            $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
            $emit: (event: string, ...args: any[]) => void;
            $el: any;
            $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                readonly appendTo: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | HTMLElement) & {}) | (() => string | HTMLElement) | ((new (...args: any[]) => (string | HTMLElement) & {}) | (() => string | HTMLElement))[], unknown, unknown, string, boolean>;
                readonly content: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
                readonly rawContent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly persistent: BooleanConstructor;
                readonly ariaLabel: StringConstructor;
                readonly visible: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (boolean | null) & {}) | (() => boolean | null) | ((new (...args: any[]) => (boolean | null) & {}) | (() => boolean | null))[], unknown, unknown, null, boolean>;
                readonly transition: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, `${string}-fade-in-linear`, boolean>;
                readonly teleported: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly disabled: {
                    readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly id: StringConstructor;
                readonly style: {
                    readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly className: {
                    readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | any)[])[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | any)[])[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly effect: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "dark", boolean>;
                readonly enterable: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly pure: BooleanConstructor;
                readonly focusOnShow: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly trapping: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly popperClass: {
                    readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | any)[])[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | any)[])[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly popperStyle: {
                    readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly referenceEl: {
                    readonly type: PropType<HTMLElement>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly triggerTargetEl: {
                    readonly type: PropType<HTMLElement>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly stopPopperMouseEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly virtualTriggering: BooleanConstructor;
                readonly zIndex: NumberConstructor;
                readonly boundariesPadding: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                readonly fallbackPlacements: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("@popperjs/core").Placement[]) | (() => import("@popperjs/core").Placement[]) | ((new (...args: any[]) => import("@popperjs/core").Placement[]) | (() => import("@popperjs/core").Placement[]))[], unknown, unknown, undefined, boolean>;
                readonly gpuAcceleration: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly offset: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
                readonly placement: import("element-plus/es/utils").EpPropFinalized<StringConstructor, import("@popperjs/core").Placement, unknown, "bottom", boolean>;
                readonly popperOptions: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => Partial<import("@popperjs/core").Options>) | (() => Partial<import("@popperjs/core").Options>) | ((new (...args: any[]) => Partial<import("@popperjs/core").Options>) | (() => Partial<import("@popperjs/core").Options>))[], unknown, unknown, () => {}, boolean>;
                readonly strategy: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "absolute" | "fixed", unknown, "absolute", boolean>;
                readonly showAfter: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                readonly hideAfter: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 200, boolean>;
            }>>, {
                ariaHidden: import("vue").ComputedRef<boolean>;
                entering: import("vue").Ref<boolean>;
                leaving: import("vue").Ref<boolean>;
                id: import("vue").Ref<string>;
                intermediateOpen: import("vue").Ref<boolean>;
                contentStyle: import("vue").ComputedRef<any>;
                contentRef: import("vue").Ref<({
                    $: import("vue").ComponentInternalInstance;
                    $data: {};
                    $props: Partial<{
                        readonly placement: import("element-plus/es/utils").EpPropMergeType<StringConstructor, import("@popperjs/core").Placement, unknown>;
                        readonly strategy: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "absolute" | "fixed", unknown>;
                        readonly offset: number;
                        readonly effect: string;
                        readonly boundariesPadding: number;
                        readonly fallbackPlacements: import("@popperjs/core").Placement[];
                        readonly gpuAcceleration: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                        readonly popperOptions: Partial<import("@popperjs/core").Options>;
                        readonly enterable: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                        readonly focusOnShow: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                        readonly trapping: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                        readonly stopPopperMouseEvent: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                        readonly ariaLabel: string;
                        readonly visible: boolean;
                        readonly pure: boolean;
                        readonly virtualTriggering: boolean;
                    }> & Omit<Readonly<import("vue").ExtractPropTypes<{
                        readonly id: StringConstructor;
                        readonly style: {
                            readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly className: {
                            readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | any)[])[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | any)[])[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly effect: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "dark", boolean>;
                        readonly visible: BooleanConstructor;
                        readonly enterable: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                        readonly pure: BooleanConstructor;
                        readonly focusOnShow: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                        readonly trapping: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                        readonly popperClass: {
                            readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | any)[])[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | any)[])[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly popperStyle: {
                            readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly referenceEl: {
                            readonly type: PropType<HTMLElement>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly triggerTargetEl: {
                            readonly type: PropType<HTMLElement>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly stopPopperMouseEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                        readonly ariaLabel: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                        readonly virtualTriggering: BooleanConstructor;
                        readonly zIndex: NumberConstructor;
                        readonly boundariesPadding: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                        readonly fallbackPlacements: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("@popperjs/core").Placement[]) | (() => import("@popperjs/core").Placement[]) | ((new (...args: any[]) => import("@popperjs/core").Placement[]) | (() => import("@popperjs/core").Placement[]))[], unknown, unknown, undefined, boolean>;
                        readonly gpuAcceleration: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                        readonly offset: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
                        readonly placement: import("element-plus/es/utils").EpPropFinalized<StringConstructor, import("@popperjs/core").Placement, unknown, "bottom", boolean>;
                        readonly popperOptions: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => Partial<import("@popperjs/core").Options>) | (() => Partial<import("@popperjs/core").Options>) | ((new (...args: any[]) => Partial<import("@popperjs/core").Options>) | (() => Partial<import("@popperjs/core").Options>))[], unknown, unknown, () => {}, boolean>;
                        readonly strategy: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "absolute" | "fixed", unknown, "absolute", boolean>;
                    }>> & {
                        [x: string & `on${string}`]: ((...args: any[]) => any) | undefined;
                    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "placement" | "strategy" | "offset" | "effect" | "boundariesPadding" | "fallbackPlacements" | "gpuAcceleration" | "popperOptions" | "enterable" | "focusOnShow" | "trapping" | "stopPopperMouseEvent" | "ariaLabel" | "visible" | "pure" | "virtualTriggering">;
                    $attrs: {
                        [x: string]: unknown;
                    };
                    $refs: {
                        [x: string]: unknown;
                    };
                    $slots: Readonly<{
                        [name: string]: import("vue").Slot | undefined;
                    }>;
                    $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
                    $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
                    $emit: (event: string, ...args: any[]) => void;
                    $el: any;
                    $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                        readonly id: StringConstructor;
                        readonly style: {
                            readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly className: {
                            readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | any)[])[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | any)[])[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly effect: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "dark", boolean>;
                        readonly visible: BooleanConstructor;
                        readonly enterable: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                        readonly pure: BooleanConstructor;
                        readonly focusOnShow: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                        readonly trapping: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                        readonly popperClass: {
                            readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | any)[])[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | any)[])[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly popperStyle: {
                            readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly referenceEl: {
                            readonly type: PropType<HTMLElement>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly triggerTargetEl: {
                            readonly type: PropType<HTMLElement>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly stopPopperMouseEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                        readonly ariaLabel: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                        readonly virtualTriggering: BooleanConstructor;
                        readonly zIndex: NumberConstructor;
                        readonly boundariesPadding: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                        readonly fallbackPlacements: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("@popperjs/core").Placement[]) | (() => import("@popperjs/core").Placement[]) | ((new (...args: any[]) => import("@popperjs/core").Placement[]) | (() => import("@popperjs/core").Placement[]))[], unknown, unknown, undefined, boolean>;
                        readonly gpuAcceleration: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                        readonly offset: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
                        readonly placement: import("element-plus/es/utils").EpPropFinalized<StringConstructor, import("@popperjs/core").Placement, unknown, "bottom", boolean>;
                        readonly popperOptions: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => Partial<import("@popperjs/core").Options>) | (() => Partial<import("@popperjs/core").Options>) | ((new (...args: any[]) => Partial<import("@popperjs/core").Options>) | (() => Partial<import("@popperjs/core").Options>))[], unknown, unknown, () => {}, boolean>;
                        readonly strategy: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "absolute" | "fixed", unknown, "absolute", boolean>;
                    }>> & {
                        [x: string & `on${string}`]: ((...args: any[]) => any) | undefined;
                    }, {
                        emit: (event: string, ...args: any[]) => void;
                        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                            readonly id: StringConstructor;
                            readonly style: {
                                readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                                readonly required: false;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly className: {
                                readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | any)[])[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | any)[])[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                                readonly required: false;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly effect: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "dark", boolean>;
                            readonly visible: BooleanConstructor;
                            readonly enterable: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                            readonly pure: BooleanConstructor;
                            readonly focusOnShow: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                            readonly trapping: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                            readonly popperClass: {
                                readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | any)[])[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | (string | {
                                    [x: string]: boolean;
                                } | any)[])[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                                readonly required: false;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly popperStyle: {
                                readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                                readonly required: false;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly referenceEl: {
                                readonly type: PropType<HTMLElement>;
                                readonly required: false;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly triggerTargetEl: {
                                readonly type: PropType<HTMLElement>;
                                readonly required: false;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly stopPopperMouseEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                            readonly ariaLabel: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                            readonly virtualTriggering: BooleanConstructor;
                            readonly zIndex: NumberConstructor;
                            readonly boundariesPadding: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                            readonly fallbackPlacements: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("@popperjs/core").Placement[]) | (() => import("@popperjs/core").Placement[]) | ((new (...args: any[]) => import("@popperjs/core").Placement[]) | (() => import("@popperjs/core").Placement[]))[], unknown, unknown, undefined, boolean>;
                            readonly gpuAcceleration: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                            readonly offset: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
                            readonly placement: import("element-plus/es/utils").EpPropFinalized<StringConstructor, import("@popperjs/core").Placement, unknown, "bottom", boolean>;
                            readonly popperOptions: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => Partial<import("@popperjs/core").Options>) | (() => Partial<import("@popperjs/core").Options>) | ((new (...args: any[]) => Partial<import("@popperjs/core").Options>) | (() => Partial<import("@popperjs/core").Options>))[], unknown, unknown, () => {}, boolean>;
                            readonly strategy: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "absolute" | "fixed", unknown, "absolute", boolean>;
                        }>> & {
                            [x: string & `on${string}`]: ((...args: any[]) => any) | undefined;
                        }>>;
                        popperInstanceRef: import("vue").Ref<import("@popperjs/core").Instance | undefined>;
                        contentRef: import("vue").Ref<HTMLElement | undefined>;
                        triggerRef: import("vue").Ref<import("../../..").Measurable | undefined>;
                        role: import("vue").ComputedRef<string>;
                        formItemContext: import("../../..").FormItemContext | undefined;
                        nextZIndex: () => number;
                        ns: {
                            namespace: import("vue").Ref<string>;
                            b: (blockSuffix?: string) => string;
                            e: (element?: string | undefined) => string;
                            m: (modifier?: string | undefined) => string;
                            be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                            em: (element?: string | undefined, modifier?: string | undefined) => string;
                            bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                            bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                            is: {
                                (name: string, state: boolean | undefined): string;
                                (name: string): string;
                            };
                            cssVar: (object: Record<string, string>) => Record<string, string>;
                            cssVarName: (name: string) => string;
                            cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                            cssVarBlockName: (name: string) => string;
                        };
                        popperContentRef: import("vue").Ref<HTMLElement | undefined>;
                        focusStartRef: import("vue").Ref<string | HTMLElement>;
                        arrowRef: import("vue").Ref<HTMLElement | undefined>;
                        arrowOffset: import("vue").Ref<number | undefined>;
                        contentZIndex: import("vue").Ref<number>;
                        trapped: import("vue").Ref<boolean>;
                        triggerTargetAriaStopWatch: undefined;
                        computedReference: import("vue").ComputedRef<import("../../..").Measurable | undefined>;
                        contentStyle: import("vue").ComputedRef<any>;
                        contentClass: import("vue").ComputedRef<((string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | any)[])[])[])[])[])[])[])[])[])[])[]) | undefined)[]>;
                        ariaModal: import("vue").ComputedRef<string | undefined>;
                        createPopperInstance: ({ referenceEl, popperContentEl, arrowEl }: {
                            referenceEl: any;
                            popperContentEl: any;
                            arrowEl: any;
                        }) => import("@popperjs/core").Instance;
                        updatePopper: (shouldUpdateZIndex?: boolean) => void;
                        togglePopperAlive: () => void;
                        onFocusAfterTrapped: () => void;
                        onFocusAfterReleased: () => void;
                        onFocusInTrap: (event: FocusEvent) => void;
                        onFocusoutPrevented: () => void;
                        onReleaseRequested: () => void;
                        ElFocusTrap: import("vue").DefineComponent<{
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
                    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, {
                        readonly placement: import("element-plus/es/utils").EpPropMergeType<StringConstructor, import("@popperjs/core").Placement, unknown>;
                        readonly strategy: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "absolute" | "fixed", unknown>;
                        readonly offset: number;
                        readonly effect: string;
                        readonly boundariesPadding: number;
                        readonly fallbackPlacements: import("@popperjs/core").Placement[];
                        readonly gpuAcceleration: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                        readonly popperOptions: Partial<import("@popperjs/core").Options>;
                        readonly enterable: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                        readonly focusOnShow: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                        readonly trapping: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                        readonly stopPopperMouseEvent: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                        readonly ariaLabel: string;
                        readonly visible: boolean;
                        readonly pure: boolean;
                        readonly virtualTriggering: boolean;
                    }> & {
                        beforeCreate?: ((() => void) | (() => void)[]) | undefined;
                        created?: ((() => void) | (() => void)[]) | undefined;
                        beforeMount?: ((() => void) | (() => void)[]) | undefined;
                        mounted?: ((() => void) | (() => void)[]) | undefined;
                        beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
                        updated?: ((() => void) | (() => void)[]) | undefined;
                        activated?: ((() => void) | (() => void)[]) | undefined;
                        deactivated?: ((() => void) | (() => void)[]) | undefined;
                        beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
                        beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
                        destroyed?: ((() => void) | (() => void)[]) | undefined;
                        unmounted?: ((() => void) | (() => void)[]) | undefined;
                        renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
                        renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
                        errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
                    };
                    $forceUpdate: () => void;
                    $nextTick: typeof nextTick;
                    $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
                } & Readonly<import("vue").ExtractPropTypes<{
                    readonly id: StringConstructor;
                    readonly style: {
                        readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly className: {
                        readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | any)[])[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | any)[])[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly effect: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "dark", boolean>;
                    readonly visible: BooleanConstructor;
                    readonly enterable: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly pure: BooleanConstructor;
                    readonly focusOnShow: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                    readonly trapping: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                    readonly popperClass: {
                        readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | any)[])[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | any)[])[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly popperStyle: {
                        readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly referenceEl: {
                        readonly type: PropType<HTMLElement>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly triggerTargetEl: {
                        readonly type: PropType<HTMLElement>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly stopPopperMouseEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly ariaLabel: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                    readonly virtualTriggering: BooleanConstructor;
                    readonly zIndex: NumberConstructor;
                    readonly boundariesPadding: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                    readonly fallbackPlacements: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("@popperjs/core").Placement[]) | (() => import("@popperjs/core").Placement[]) | ((new (...args: any[]) => import("@popperjs/core").Placement[]) | (() => import("@popperjs/core").Placement[]))[], unknown, unknown, undefined, boolean>;
                    readonly gpuAcceleration: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly offset: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
                    readonly placement: import("element-plus/es/utils").EpPropFinalized<StringConstructor, import("@popperjs/core").Placement, unknown, "bottom", boolean>;
                    readonly popperOptions: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => Partial<import("@popperjs/core").Options>) | (() => Partial<import("@popperjs/core").Options>) | ((new (...args: any[]) => Partial<import("@popperjs/core").Options>) | (() => Partial<import("@popperjs/core").Options>))[], unknown, unknown, () => {}, boolean>;
                    readonly strategy: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "absolute" | "fixed", unknown, "absolute", boolean>;
                }>> & {
                    [x: string & `on${string}`]: ((...args: any[]) => any) | undefined;
                } & import("vue").ShallowUnwrapRef<{
                    emit: (event: string, ...args: any[]) => void;
                    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                        readonly id: StringConstructor;
                        readonly style: {
                            readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly className: {
                            readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | any)[])[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | any)[])[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly effect: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "dark", boolean>;
                        readonly visible: BooleanConstructor;
                        readonly enterable: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                        readonly pure: BooleanConstructor;
                        readonly focusOnShow: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                        readonly trapping: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                        readonly popperClass: {
                            readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | any)[])[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | any)[])[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly popperStyle: {
                            readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly referenceEl: {
                            readonly type: PropType<HTMLElement>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly triggerTargetEl: {
                            readonly type: PropType<HTMLElement>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly stopPopperMouseEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                        readonly ariaLabel: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                        readonly virtualTriggering: BooleanConstructor;
                        readonly zIndex: NumberConstructor;
                        readonly boundariesPadding: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                        readonly fallbackPlacements: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("@popperjs/core").Placement[]) | (() => import("@popperjs/core").Placement[]) | ((new (...args: any[]) => import("@popperjs/core").Placement[]) | (() => import("@popperjs/core").Placement[]))[], unknown, unknown, undefined, boolean>;
                        readonly gpuAcceleration: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                        readonly offset: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
                        readonly placement: import("element-plus/es/utils").EpPropFinalized<StringConstructor, import("@popperjs/core").Placement, unknown, "bottom", boolean>;
                        readonly popperOptions: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => Partial<import("@popperjs/core").Options>) | (() => Partial<import("@popperjs/core").Options>) | ((new (...args: any[]) => Partial<import("@popperjs/core").Options>) | (() => Partial<import("@popperjs/core").Options>))[], unknown, unknown, () => {}, boolean>;
                        readonly strategy: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "absolute" | "fixed", unknown, "absolute", boolean>;
                    }>> & {
                        [x: string & `on${string}`]: ((...args: any[]) => any) | undefined;
                    }>>;
                    popperInstanceRef: import("vue").Ref<import("@popperjs/core").Instance | undefined>;
                    contentRef: import("vue").Ref<HTMLElement | undefined>;
                    triggerRef: import("vue").Ref<import("../../..").Measurable | undefined>;
                    role: import("vue").ComputedRef<string>;
                    formItemContext: import("../../..").FormItemContext | undefined;
                    nextZIndex: () => number;
                    ns: {
                        namespace: import("vue").Ref<string>;
                        b: (blockSuffix?: string) => string;
                        e: (element?: string | undefined) => string;
                        m: (modifier?: string | undefined) => string;
                        be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                        em: (element?: string | undefined, modifier?: string | undefined) => string;
                        bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                        bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                        is: {
                            (name: string, state: boolean | undefined): string;
                            (name: string): string;
                        };
                        cssVar: (object: Record<string, string>) => Record<string, string>;
                        cssVarName: (name: string) => string;
                        cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                        cssVarBlockName: (name: string) => string;
                    };
                    popperContentRef: import("vue").Ref<HTMLElement | undefined>;
                    focusStartRef: import("vue").Ref<string | HTMLElement>;
                    arrowRef: import("vue").Ref<HTMLElement | undefined>;
                    arrowOffset: import("vue").Ref<number | undefined>;
                    contentZIndex: import("vue").Ref<number>;
                    trapped: import("vue").Ref<boolean>;
                    triggerTargetAriaStopWatch: undefined;
                    computedReference: import("vue").ComputedRef<import("../../..").Measurable | undefined>;
                    contentStyle: import("vue").ComputedRef<any>;
                    contentClass: import("vue").ComputedRef<((string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | any)[])[])[])[])[])[])[])[])[])[])[]) | undefined)[]>;
                    ariaModal: import("vue").ComputedRef<string | undefined>;
                    createPopperInstance: ({ referenceEl, popperContentEl, arrowEl }: {
                        referenceEl: any;
                        popperContentEl: any;
                        arrowEl: any;
                    }) => import("@popperjs/core").Instance;
                    updatePopper: (shouldUpdateZIndex?: boolean) => void;
                    togglePopperAlive: () => void;
                    onFocusAfterTrapped: () => void;
                    onFocusAfterReleased: () => void;
                    onFocusInTrap: (event: FocusEvent) => void;
                    onFocusoutPrevented: () => void;
                    onReleaseRequested: () => void;
                    ElFocusTrap: import("vue").DefineComponent<{
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
                }> & {} & import("vue").ComponentCustomProperties) | null>;
                destroyed: import("vue").Ref<boolean>;
                shouldRender: import("vue").ComputedRef<boolean>;
                shouldShow: import("vue").ComputedRef<boolean>;
                onClose: (e?: Event | undefined) => void;
                open: import("vue").Ref<boolean>;
                onAfterShow: () => void;
                onBeforeEnter: () => void;
                onBeforeLeave: () => void;
                onContentEnter: (event: unknown) => void;
                onContentLeave: (event: unknown) => void;
                onTransitionLeave: () => void;
                onBlur: () => void;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
                readonly placement: import("element-plus/es/utils").EpPropMergeType<StringConstructor, import("@popperjs/core").Placement, unknown>;
                readonly showAfter: number;
                readonly hideAfter: number;
                readonly strategy: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "absolute" | "fixed", unknown>;
                readonly offset: number;
                readonly content: string;
                readonly transition: string;
                readonly effect: string;
                readonly boundariesPadding: number;
                readonly fallbackPlacements: import("@popperjs/core").Placement[];
                readonly gpuAcceleration: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly popperOptions: Partial<import("@popperjs/core").Options>;
                readonly enterable: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly focusOnShow: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly trapping: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly stopPopperMouseEvent: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly visible: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (boolean | null) & {}) | (() => boolean | null) | ((new (...args: any[]) => (boolean | null) & {}) | (() => boolean | null))[], unknown, unknown>;
                readonly pure: boolean;
                readonly virtualTriggering: boolean;
                readonly appendTo: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | HTMLElement) & {}) | (() => string | HTMLElement) | ((new (...args: any[]) => (string | HTMLElement) & {}) | (() => string | HTMLElement))[], unknown, unknown>;
                readonly rawContent: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly teleported: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly persistent: boolean;
            }> & {
                beforeCreate?: ((() => void) | (() => void)[]) | undefined;
                created?: ((() => void) | (() => void)[]) | undefined;
                beforeMount?: ((() => void) | (() => void)[]) | undefined;
                mounted?: ((() => void) | (() => void)[]) | undefined;
                beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
                updated?: ((() => void) | (() => void)[]) | undefined;
                activated?: ((() => void) | (() => void)[]) | undefined;
                deactivated?: ((() => void) | (() => void)[]) | undefined;
                beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
                beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
                destroyed?: ((() => void) | (() => void)[]) | undefined;
                unmounted?: ((() => void) | (() => void)[]) | undefined;
                renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
                renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
                errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
            };
            $forceUpdate: () => void;
            $nextTick: typeof nextTick;
            $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
        } & Readonly<import("vue").ExtractPropTypes<{
            readonly appendTo: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (string | HTMLElement) & {}) | (() => string | HTMLElement) | ((new (...args: any[]) => (string | HTMLElement) & {}) | (() => string | HTMLElement))[], unknown, unknown, string, boolean>;
            readonly content: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
            readonly rawContent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly persistent: BooleanConstructor;
            readonly ariaLabel: StringConstructor;
            readonly visible: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (boolean | null) & {}) | (() => boolean | null) | ((new (...args: any[]) => (boolean | null) & {}) | (() => boolean | null))[], unknown, unknown, null, boolean>;
            readonly transition: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, `${string}-fade-in-linear`, boolean>;
            readonly teleported: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            readonly disabled: {
                readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly id: StringConstructor;
            readonly style: {
                readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly className: {
                readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | any)[])[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | any)[])[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly effect: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "dark", boolean>;
            readonly enterable: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            readonly pure: BooleanConstructor;
            readonly focusOnShow: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly trapping: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly popperClass: {
                readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | any)[])[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | any)[])[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly popperStyle: {
                readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly referenceEl: {
                readonly type: PropType<HTMLElement>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly triggerTargetEl: {
                readonly type: PropType<HTMLElement>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly stopPopperMouseEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            readonly virtualTriggering: BooleanConstructor;
            readonly zIndex: NumberConstructor;
            readonly boundariesPadding: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
            readonly fallbackPlacements: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("@popperjs/core").Placement[]) | (() => import("@popperjs/core").Placement[]) | ((new (...args: any[]) => import("@popperjs/core").Placement[]) | (() => import("@popperjs/core").Placement[]))[], unknown, unknown, undefined, boolean>;
            readonly gpuAcceleration: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            readonly offset: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
            readonly placement: import("element-plus/es/utils").EpPropFinalized<StringConstructor, import("@popperjs/core").Placement, unknown, "bottom", boolean>;
            readonly popperOptions: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => Partial<import("@popperjs/core").Options>) | (() => Partial<import("@popperjs/core").Options>) | ((new (...args: any[]) => Partial<import("@popperjs/core").Options>) | (() => Partial<import("@popperjs/core").Options>))[], unknown, unknown, () => {}, boolean>;
            readonly strategy: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "absolute" | "fixed", unknown, "absolute", boolean>;
            readonly showAfter: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
            readonly hideAfter: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 200, boolean>;
        }>> & import("vue").ShallowUnwrapRef<{
            ariaHidden: import("vue").ComputedRef<boolean>;
            entering: import("vue").Ref<boolean>;
            leaving: import("vue").Ref<boolean>;
            id: import("vue").Ref<string>;
            intermediateOpen: import("vue").Ref<boolean>;
            contentStyle: import("vue").ComputedRef<any>;
            contentRef: import("vue").Ref<({
                $: import("vue").ComponentInternalInstance;
                $data: {};
                $props: Partial<{
                    readonly placement: import("element-plus/es/utils").EpPropMergeType<StringConstructor, import("@popperjs/core").Placement, unknown>;
                    readonly strategy: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "absolute" | "fixed", unknown>;
                    readonly offset: number;
                    readonly effect: string;
                    readonly boundariesPadding: number;
                    readonly fallbackPlacements: import("@popperjs/core").Placement[];
                    readonly gpuAcceleration: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                    readonly popperOptions: Partial<import("@popperjs/core").Options>;
                    readonly enterable: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                    readonly focusOnShow: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                    readonly trapping: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                    readonly stopPopperMouseEvent: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                    readonly ariaLabel: string;
                    readonly visible: boolean;
                    readonly pure: boolean;
                    readonly virtualTriggering: boolean;
                }> & Omit<Readonly<import("vue").ExtractPropTypes<{
                    readonly id: StringConstructor;
                    readonly style: {
                        readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly className: {
                        readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | any)[])[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | any)[])[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly effect: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "dark", boolean>;
                    readonly visible: BooleanConstructor;
                    readonly enterable: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly pure: BooleanConstructor;
                    readonly focusOnShow: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                    readonly trapping: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                    readonly popperClass: {
                        readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | any)[])[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | any)[])[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly popperStyle: {
                        readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly referenceEl: {
                        readonly type: PropType<HTMLElement>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly triggerTargetEl: {
                        readonly type: PropType<HTMLElement>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly stopPopperMouseEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly ariaLabel: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                    readonly virtualTriggering: BooleanConstructor;
                    readonly zIndex: NumberConstructor;
                    readonly boundariesPadding: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                    readonly fallbackPlacements: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("@popperjs/core").Placement[]) | (() => import("@popperjs/core").Placement[]) | ((new (...args: any[]) => import("@popperjs/core").Placement[]) | (() => import("@popperjs/core").Placement[]))[], unknown, unknown, undefined, boolean>;
                    readonly gpuAcceleration: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly offset: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
                    readonly placement: import("element-plus/es/utils").EpPropFinalized<StringConstructor, import("@popperjs/core").Placement, unknown, "bottom", boolean>;
                    readonly popperOptions: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => Partial<import("@popperjs/core").Options>) | (() => Partial<import("@popperjs/core").Options>) | ((new (...args: any[]) => Partial<import("@popperjs/core").Options>) | (() => Partial<import("@popperjs/core").Options>))[], unknown, unknown, () => {}, boolean>;
                    readonly strategy: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "absolute" | "fixed", unknown, "absolute", boolean>;
                }>> & {
                    [x: string & `on${string}`]: ((...args: any[]) => any) | undefined;
                } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "placement" | "strategy" | "offset" | "effect" | "boundariesPadding" | "fallbackPlacements" | "gpuAcceleration" | "popperOptions" | "enterable" | "focusOnShow" | "trapping" | "stopPopperMouseEvent" | "ariaLabel" | "visible" | "pure" | "virtualTriggering">;
                $attrs: {
                    [x: string]: unknown;
                };
                $refs: {
                    [x: string]: unknown;
                };
                $slots: Readonly<{
                    [name: string]: import("vue").Slot | undefined;
                }>;
                $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
                $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
                $emit: (event: string, ...args: any[]) => void;
                $el: any;
                $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                    readonly id: StringConstructor;
                    readonly style: {
                        readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly className: {
                        readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | any)[])[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | any)[])[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly effect: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "dark", boolean>;
                    readonly visible: BooleanConstructor;
                    readonly enterable: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly pure: BooleanConstructor;
                    readonly focusOnShow: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                    readonly trapping: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                    readonly popperClass: {
                        readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | any)[])[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | any)[])[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly popperStyle: {
                        readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly referenceEl: {
                        readonly type: PropType<HTMLElement>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly triggerTargetEl: {
                        readonly type: PropType<HTMLElement>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly stopPopperMouseEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly ariaLabel: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                    readonly virtualTriggering: BooleanConstructor;
                    readonly zIndex: NumberConstructor;
                    readonly boundariesPadding: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                    readonly fallbackPlacements: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("@popperjs/core").Placement[]) | (() => import("@popperjs/core").Placement[]) | ((new (...args: any[]) => import("@popperjs/core").Placement[]) | (() => import("@popperjs/core").Placement[]))[], unknown, unknown, undefined, boolean>;
                    readonly gpuAcceleration: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly offset: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
                    readonly placement: import("element-plus/es/utils").EpPropFinalized<StringConstructor, import("@popperjs/core").Placement, unknown, "bottom", boolean>;
                    readonly popperOptions: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => Partial<import("@popperjs/core").Options>) | (() => Partial<import("@popperjs/core").Options>) | ((new (...args: any[]) => Partial<import("@popperjs/core").Options>) | (() => Partial<import("@popperjs/core").Options>))[], unknown, unknown, () => {}, boolean>;
                    readonly strategy: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "absolute" | "fixed", unknown, "absolute", boolean>;
                }>> & {
                    [x: string & `on${string}`]: ((...args: any[]) => any) | undefined;
                }, {
                    emit: (event: string, ...args: any[]) => void;
                    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                        readonly id: StringConstructor;
                        readonly style: {
                            readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly className: {
                            readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | any)[])[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | any)[])[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly effect: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "dark", boolean>;
                        readonly visible: BooleanConstructor;
                        readonly enterable: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                        readonly pure: BooleanConstructor;
                        readonly focusOnShow: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                        readonly trapping: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                        readonly popperClass: {
                            readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | any)[])[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | (string | {
                                [x: string]: boolean;
                            } | any)[])[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly popperStyle: {
                            readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly referenceEl: {
                            readonly type: PropType<HTMLElement>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly triggerTargetEl: {
                            readonly type: PropType<HTMLElement>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly stopPopperMouseEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                        readonly ariaLabel: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                        readonly virtualTriggering: BooleanConstructor;
                        readonly zIndex: NumberConstructor;
                        readonly boundariesPadding: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                        readonly fallbackPlacements: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("@popperjs/core").Placement[]) | (() => import("@popperjs/core").Placement[]) | ((new (...args: any[]) => import("@popperjs/core").Placement[]) | (() => import("@popperjs/core").Placement[]))[], unknown, unknown, undefined, boolean>;
                        readonly gpuAcceleration: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                        readonly offset: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
                        readonly placement: import("element-plus/es/utils").EpPropFinalized<StringConstructor, import("@popperjs/core").Placement, unknown, "bottom", boolean>;
                        readonly popperOptions: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => Partial<import("@popperjs/core").Options>) | (() => Partial<import("@popperjs/core").Options>) | ((new (...args: any[]) => Partial<import("@popperjs/core").Options>) | (() => Partial<import("@popperjs/core").Options>))[], unknown, unknown, () => {}, boolean>;
                        readonly strategy: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "absolute" | "fixed", unknown, "absolute", boolean>;
                    }>> & {
                        [x: string & `on${string}`]: ((...args: any[]) => any) | undefined;
                    }>>;
                    popperInstanceRef: import("vue").Ref<import("@popperjs/core").Instance | undefined>;
                    contentRef: import("vue").Ref<HTMLElement | undefined>;
                    triggerRef: import("vue").Ref<import("../../..").Measurable | undefined>;
                    role: import("vue").ComputedRef<string>;
                    formItemContext: import("../../..").FormItemContext | undefined;
                    nextZIndex: () => number;
                    ns: {
                        namespace: import("vue").Ref<string>;
                        b: (blockSuffix?: string) => string;
                        e: (element?: string | undefined) => string;
                        m: (modifier?: string | undefined) => string;
                        be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                        em: (element?: string | undefined, modifier?: string | undefined) => string;
                        bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                        bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                        is: {
                            (name: string, state: boolean | undefined): string;
                            (name: string): string;
                        };
                        cssVar: (object: Record<string, string>) => Record<string, string>;
                        cssVarName: (name: string) => string;
                        cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                        cssVarBlockName: (name: string) => string;
                    };
                    popperContentRef: import("vue").Ref<HTMLElement | undefined>;
                    focusStartRef: import("vue").Ref<string | HTMLElement>;
                    arrowRef: import("vue").Ref<HTMLElement | undefined>;
                    arrowOffset: import("vue").Ref<number | undefined>;
                    contentZIndex: import("vue").Ref<number>;
                    trapped: import("vue").Ref<boolean>;
                    triggerTargetAriaStopWatch: undefined;
                    computedReference: import("vue").ComputedRef<import("../../..").Measurable | undefined>;
                    contentStyle: import("vue").ComputedRef<any>;
                    contentClass: import("vue").ComputedRef<((string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | any)[])[])[])[])[])[])[])[])[])[])[]) | undefined)[]>;
                    ariaModal: import("vue").ComputedRef<string | undefined>;
                    createPopperInstance: ({ referenceEl, popperContentEl, arrowEl }: {
                        referenceEl: any;
                        popperContentEl: any;
                        arrowEl: any;
                    }) => import("@popperjs/core").Instance;
                    updatePopper: (shouldUpdateZIndex?: boolean) => void;
                    togglePopperAlive: () => void;
                    onFocusAfterTrapped: () => void;
                    onFocusAfterReleased: () => void;
                    onFocusInTrap: (event: FocusEvent) => void;
                    onFocusoutPrevented: () => void;
                    onReleaseRequested: () => void;
                    ElFocusTrap: import("vue").DefineComponent<{
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
                }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, {
                    readonly placement: import("element-plus/es/utils").EpPropMergeType<StringConstructor, import("@popperjs/core").Placement, unknown>;
                    readonly strategy: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "absolute" | "fixed", unknown>;
                    readonly offset: number;
                    readonly effect: string;
                    readonly boundariesPadding: number;
                    readonly fallbackPlacements: import("@popperjs/core").Placement[];
                    readonly gpuAcceleration: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                    readonly popperOptions: Partial<import("@popperjs/core").Options>;
                    readonly enterable: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                    readonly focusOnShow: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                    readonly trapping: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                    readonly stopPopperMouseEvent: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                    readonly ariaLabel: string;
                    readonly visible: boolean;
                    readonly pure: boolean;
                    readonly virtualTriggering: boolean;
                }> & {
                    beforeCreate?: ((() => void) | (() => void)[]) | undefined;
                    created?: ((() => void) | (() => void)[]) | undefined;
                    beforeMount?: ((() => void) | (() => void)[]) | undefined;
                    mounted?: ((() => void) | (() => void)[]) | undefined;
                    beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
                    updated?: ((() => void) | (() => void)[]) | undefined;
                    activated?: ((() => void) | (() => void)[]) | undefined;
                    deactivated?: ((() => void) | (() => void)[]) | undefined;
                    beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
                    beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
                    destroyed?: ((() => void) | (() => void)[]) | undefined;
                    unmounted?: ((() => void) | (() => void)[]) | undefined;
                    renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
                    renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
                    errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
                };
                $forceUpdate: () => void;
                $nextTick: typeof nextTick;
                $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
            } & Readonly<import("vue").ExtractPropTypes<{
                readonly id: StringConstructor;
                readonly style: {
                    readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly className: {
                    readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | any)[])[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | any)[])[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly effect: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "dark", boolean>;
                readonly visible: BooleanConstructor;
                readonly enterable: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly pure: BooleanConstructor;
                readonly focusOnShow: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly trapping: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly popperClass: {
                    readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | any)[])[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | (string | {
                        [x: string]: boolean;
                    } | any)[])[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly popperStyle: {
                    readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly referenceEl: {
                    readonly type: PropType<HTMLElement>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly triggerTargetEl: {
                    readonly type: PropType<HTMLElement>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly stopPopperMouseEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly ariaLabel: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                readonly virtualTriggering: BooleanConstructor;
                readonly zIndex: NumberConstructor;
                readonly boundariesPadding: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                readonly fallbackPlacements: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("@popperjs/core").Placement[]) | (() => import("@popperjs/core").Placement[]) | ((new (...args: any[]) => import("@popperjs/core").Placement[]) | (() => import("@popperjs/core").Placement[]))[], unknown, unknown, undefined, boolean>;
                readonly gpuAcceleration: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly offset: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
                readonly placement: import("element-plus/es/utils").EpPropFinalized<StringConstructor, import("@popperjs/core").Placement, unknown, "bottom", boolean>;
                readonly popperOptions: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => Partial<import("@popperjs/core").Options>) | (() => Partial<import("@popperjs/core").Options>) | ((new (...args: any[]) => Partial<import("@popperjs/core").Options>) | (() => Partial<import("@popperjs/core").Options>))[], unknown, unknown, () => {}, boolean>;
                readonly strategy: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "absolute" | "fixed", unknown, "absolute", boolean>;
            }>> & {
                [x: string & `on${string}`]: ((...args: any[]) => any) | undefined;
            } & import("vue").ShallowUnwrapRef<{
                emit: (event: string, ...args: any[]) => void;
                props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                    readonly id: StringConstructor;
                    readonly style: {
                        readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly className: {
                        readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | any)[])[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | any)[])[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly effect: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "dark", boolean>;
                    readonly visible: BooleanConstructor;
                    readonly enterable: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly pure: BooleanConstructor;
                    readonly focusOnShow: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                    readonly trapping: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                    readonly popperClass: {
                        readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | any)[])[])[])[])[])[])[])[])[])[])[]) | ((new (...args: any[]) => (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | any)[])[])[])[])[])[])[])[])[])[])[]) & {}) | (() => string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | (string | {
                            [x: string]: boolean;
                        } | any)[])[])[])[])[])[])[])[])[])[])[]))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly popperStyle: {
                        readonly type: PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly referenceEl: {
                        readonly type: PropType<HTMLElement>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly triggerTargetEl: {
                        readonly type: PropType<HTMLElement>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly stopPopperMouseEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly ariaLabel: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
                    readonly virtualTriggering: BooleanConstructor;
                    readonly zIndex: NumberConstructor;
                    readonly boundariesPadding: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                    readonly fallbackPlacements: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("@popperjs/core").Placement[]) | (() => import("@popperjs/core").Placement[]) | ((new (...args: any[]) => import("@popperjs/core").Placement[]) | (() => import("@popperjs/core").Placement[]))[], unknown, unknown, undefined, boolean>;
                    readonly gpuAcceleration: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly offset: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 12, boolean>;
                    readonly placement: import("element-plus/es/utils").EpPropFinalized<StringConstructor, import("@popperjs/core").Placement, unknown, "bottom", boolean>;
                    readonly popperOptions: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => Partial<import("@popperjs/core").Options>) | (() => Partial<import("@popperjs/core").Options>) | ((new (...args: any[]) => Partial<import("@popperjs/core").Options>) | (() => Partial<import("@popperjs/core").Options>))[], unknown, unknown, () => {}, boolean>;
                    readonly strategy: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "absolute" | "fixed", unknown, "absolute", boolean>;
                }>> & {
                    [x: string & `on${string}`]: ((...args: any[]) => any) | undefined;
                }>>;
                popperInstanceRef: import("vue").Ref<import("@popperjs/core").Instance | undefined>;
                contentRef: import("vue").Ref<HTMLElement | undefined>;
                triggerRef: import("vue").Ref<import("../../..").Measurable | undefined>;
                role: import("vue").ComputedRef<string>;
                formItemContext: import("../../..").FormItemContext | undefined;
                nextZIndex: () => number;
                ns: {
                    namespace: import("vue").Ref<string>;
                    b: (blockSuffix?: string) => string;
                    e: (element?: string | undefined) => string;
                    m: (modifier?: string | undefined) => string;
                    be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                    em: (element?: string | undefined, modifier?: string | undefined) => string;
                    bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                    bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                    is: {
                        (name: string, state: boolean | undefined): string;
                        (name: string): string;
                    };
                    cssVar: (object: Record<string, string>) => Record<string, string>;
                    cssVarName: (name: string) => string;
                    cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                    cssVarBlockName: (name: string) => string;
                };
                popperContentRef: import("vue").Ref<HTMLElement | undefined>;
                focusStartRef: import("vue").Ref<string | HTMLElement>;
                arrowRef: import("vue").Ref<HTMLElement | undefined>;
                arrowOffset: import("vue").Ref<number | undefined>;
                contentZIndex: import("vue").Ref<number>;
                trapped: import("vue").Ref<boolean>;
                triggerTargetAriaStopWatch: undefined;
                computedReference: import("vue").ComputedRef<import("../../..").Measurable | undefined>;
                contentStyle: import("vue").ComputedRef<any>;
                contentClass: import("vue").ComputedRef<((string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | any)[])[])[])[])[])[])[])[])[])[])[]) | undefined)[]>;
                ariaModal: import("vue").ComputedRef<string | undefined>;
                createPopperInstance: ({ referenceEl, popperContentEl, arrowEl }: {
                    referenceEl: any;
                    popperContentEl: any;
                    arrowEl: any;
                }) => import("@popperjs/core").Instance;
                updatePopper: (shouldUpdateZIndex?: boolean) => void;
                togglePopperAlive: () => void;
                onFocusAfterTrapped: () => void;
                onFocusAfterReleased: () => void;
                onFocusInTrap: (event: FocusEvent) => void;
                onFocusoutPrevented: () => void;
                onReleaseRequested: () => void;
                ElFocusTrap: import("vue").DefineComponent<{
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
            }> & {} & import("vue").ComponentCustomProperties) | null>;
            destroyed: import("vue").Ref<boolean>;
            shouldRender: import("vue").ComputedRef<boolean>;
            shouldShow: import("vue").ComputedRef<boolean>;
            onClose: (e?: Event | undefined) => void;
            open: import("vue").Ref<boolean>;
            onAfterShow: () => void;
            onBeforeEnter: () => void;
            onBeforeLeave: () => void;
            onContentEnter: (event: unknown) => void;
            onContentLeave: (event: unknown) => void;
            onTransitionLeave: () => void;
            onBlur: () => void;
        }> & {} & import("vue").ComponentCustomProperties) | null>;
        open: import("vue").Ref<boolean>;
        hide: (event?: Event | undefined) => void;
        isFocusInsideContent: () => boolean | undefined;
        updatePopper: () => void;
        onOpen: (event?: Event | undefined) => void;
        onClose: (event?: Event | undefined) => void;
    }> & {} & import("vue").ComponentCustomProperties) | null>;
    popperPaneRef: import("vue").ComputedRef<HTMLElement | undefined>;
    tags: import("vue").Ref<HTMLElement | null>;
    selectWrapper: import("vue").Ref<HTMLElement | null>;
    scrollbar: import("vue").Ref<{
        handleScroll: () => void;
    } | null>;
    wrapperKls: import("vue").ComputedRef<string[]>;
    selectTagsStyle: import("vue").ComputedRef<{
        maxWidth: string;
        width: string;
    }>;
    nsSelect: {
        namespace: import("vue").Ref<string>;
        b: (blockSuffix?: string) => string;
        e: (element?: string | undefined) => string;
        m: (modifier?: string | undefined) => string;
        be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
        em: (element?: string | undefined, modifier?: string | undefined) => string;
        bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
        bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
        is: {
            (name: string, state: boolean | undefined): string;
            (name: string): string;
        };
        cssVar: (object: Record<string, string>) => Record<string, string>;
        cssVarName: (name: string) => string;
        cssVarBlock: (object: Record<string, string>) => Record<string, string>;
        cssVarBlockName: (name: string) => string;
    };
    tagTextStyle: import("vue").ComputedRef<{
        maxWidth: string;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change" | "blur" | "focus" | "clear" | "visibleChange" | "removeTag")[], "update:modelValue" | "change" | "blur" | "focus" | "clear" | "visibleChange" | "removeTag", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    name: StringConstructor;
    id: StringConstructor;
    modelValue: {
        type: (BooleanConstructor | ObjectConstructor | StringConstructor | NumberConstructor | ArrayConstructor)[];
        default: undefined;
    };
    autocomplete: {
        type: StringConstructor;
        default: string;
    };
    automaticDropdown: BooleanConstructor;
    size: {
        type: PropType<"" | "default" | "small" | "large">;
        validator: (val: string) => val is "" | "default" | "small" | "large";
    };
    effect: {
        type: PropType<string>;
        default: string;
    };
    disabled: BooleanConstructor;
    clearable: BooleanConstructor;
    filterable: BooleanConstructor;
    allowCreate: BooleanConstructor;
    loading: BooleanConstructor;
    popperClass: {
        type: StringConstructor;
        default: string;
    };
    remote: BooleanConstructor;
    loadingText: StringConstructor;
    noMatchText: StringConstructor;
    noDataText: StringConstructor;
    remoteMethod: FunctionConstructor;
    filterMethod: FunctionConstructor;
    multiple: BooleanConstructor;
    multipleLimit: {
        type: NumberConstructor;
        default: number;
    };
    placeholder: {
        type: StringConstructor;
    };
    defaultFirstOption: BooleanConstructor;
    reserveKeyword: {
        type: BooleanConstructor;
        default: boolean;
    };
    valueKey: {
        type: StringConstructor;
        default: string;
    };
    collapseTags: BooleanConstructor;
    collapseTagsTooltip: {
        type: BooleanConstructor;
        default: boolean;
    };
    teleported: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    persistent: {
        type: BooleanConstructor;
        default: boolean;
    };
    clearIcon: {
        type: PropType<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>;
        default: import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
    };
    fitInputWidth: {
        type: BooleanConstructor;
        default: boolean;
    };
    suffixIcon: {
        type: PropType<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>;
        default: import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
    };
    tagType: {
        default: string;
        type: PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "success" | "warning" | "info" | "danger", unknown>>;
        required: false;
        validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    validateEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    remoteShowSuffix: {
        type: BooleanConstructor;
        default: boolean;
    };
    suffixTransition: {
        type: BooleanConstructor;
        default: boolean;
    };
    placement: {
        type: StringConstructor;
        values: import("@popperjs/core").Placement[];
        default: string;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
    onClear?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
    onFocus?: ((...args: any[]) => any) | undefined;
    onVisibleChange?: ((...args: any[]) => any) | undefined;
    onRemoveTag?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    loading: boolean;
    modelValue: string | number | boolean | Record<string, any> | unknown[];
    validateEvent: boolean;
    placement: string;
    effect: string;
    valueKey: string;
    popperClass: string;
    teleported: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    persistent: boolean;
    fitInputWidth: boolean;
    autocomplete: string;
    clearable: boolean;
    suffixIcon: string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>;
    multiple: boolean;
    filterable: boolean;
    collapseTags: boolean;
    collapseTagsTooltip: boolean;
    tagType: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "success" | "warning" | "info" | "danger", unknown>;
    clearIcon: string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>;
    automaticDropdown: boolean;
    allowCreate: boolean;
    remote: boolean;
    multipleLimit: number;
    defaultFirstOption: boolean;
    reserveKeyword: boolean;
    remoteShowSuffix: boolean;
    suffixTransition: boolean;
}>;
export default _default;
