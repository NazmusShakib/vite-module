/// <reference types="@/shims-vue" />
declare const routes: ({
    path: string;
    name: string;
    meta: {
        requireAuth: boolean;
    };
    component: import("vue").DefineComponent<{}, {}, {}, import("vue").ComponentComputedOptions, import("vue").ComponentMethodOptions, import("vue/types/v3-component-options").ComponentOptionsMixin, import("vue/types/v3-component-options").ComponentOptionsMixin, {}, string, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
} | {
    path: string;
    name: string;
    meta: {
        requireAuth: boolean;
    };
    component: () => Promise<typeof import("*.vue")>;
})[];
export default routes;
