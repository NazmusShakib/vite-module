export default _sfc_main;
declare namespace _sfc_main {
    const name: string;
    namespace metaInfo {
        const title: string;
    }
    function data(): {
        value: {
            avatar: string;
            account_type: string;
        };
        is_loading: boolean;
    };
    function mounted(): void;
    namespace methods {
        function userDetail(): void;
    }
}
