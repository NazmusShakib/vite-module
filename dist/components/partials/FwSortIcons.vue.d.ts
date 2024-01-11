export default _sfc_main;
declare namespace _sfc_main {
    const name: string;
    namespace props {
        const _sort: StringConstructor;
    }
    function data(): {
        sortDefault: boolean;
        sortUp: boolean;
        sortDown: boolean;
        _sort_type: string;
    };
    function mounted(): void;
    namespace methods {
        function sortAction(_sort?: null): void;
        function showIcon(): void;
    }
}
