import type SkeletonItem from './skeleton-item.vue';
import type { ExtractPropTypes } from 'vue';
export declare const skeletonItemProps: {
    readonly variant: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "text" | "button" | "circle" | "image" | "caption" | "h1" | "h3" | "p" | "rect", unknown, "text", boolean>;
};
export declare type SkeletonItemProps = ExtractPropTypes<typeof skeletonItemProps>;
export declare type SkeletonItemInstance = InstanceType<typeof SkeletonItem>;
