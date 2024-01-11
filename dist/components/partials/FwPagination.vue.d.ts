export default _sfc_main;
declare namespace _sfc_main {
    namespace props {
        namespace pagination {
            const type: ObjectConstructor;
            const required: boolean;
        }
        namespace offset {
            const type_1: NumberConstructor;
            export { type_1 as type };
            const _default: number;
            export { _default as default };
        }
    }
    namespace computed {
        function pagesNumber(): any;
    }
    namespace methods {
        function changePage(page: any): void;
    }
}
