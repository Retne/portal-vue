import { PropType, FunctionalComponent, ComponentInternalInstance, VNode } from 'vue';
export declare const PortalTargetContent: FunctionalComponent;
declare const _default: import("vue").DefineComponent<{
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    name: {
        type: StringConstructor;
        required: true;
    };
    slotProps: {
        type: ObjectConstructor;
        default: () => {};
    };
    __parent: {
        type: PropType<ComponentInternalInstance>;
    };
}, () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> | undefined, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    multiple: boolean;
    name: string;
    slotProps: Record<string, any>;
} & {
    __parent?: ComponentInternalInstance | undefined;
}>, {
    multiple: boolean;
    slotProps: Record<string, any>;
}>;
export default _default;