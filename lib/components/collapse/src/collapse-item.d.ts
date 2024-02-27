import type { ExtractPropTypes } from 'vue';
import type { CollapseActiveName } from './collapse';
import type CollapseItem from './collapse-item.vue';
export declare const collapseItemProps: {
    readonly title: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly name: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => CollapseActiveName & {}) | (() => CollapseActiveName) | ((new (...args: any[]) => CollapseActiveName & {}) | (() => CollapseActiveName))[], unknown, unknown, () => number, boolean>;
    readonly disabled: BooleanConstructor;
};
export declare type CollapseItemProps = ExtractPropTypes<typeof collapseItemProps>;
export declare type CollapseItemInstance = InstanceType<typeof CollapseItem>;
