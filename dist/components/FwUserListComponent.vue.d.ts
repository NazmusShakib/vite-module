export default _sfc_main;
declare namespace _sfc_main {
    const name: string;
    namespace metaInfo {
        const title: string;
    }
    const components: undefined;
    function data(): {
        list: {
            total: number;
            per_page: number;
            from: number;
            to: number;
        };
        order_by: string;
        show_filter: boolean;
        roles: {};
        filter: {
            username: string;
            name: string;
            mobile_no: string;
            email: string;
            role: string;
            created_at: string;
        };
        pre: never[];
        is_loading: boolean;
        has_permission: boolean;
    };
    const watch: {
        '$route.query'(): void;
    };
    function mounted(): void;
    function created(): void;
    namespace methods {
        function init(): void;
        function getRoles(): void;
        function getUsers(): void;
        function getOrganization(): Promise<void>;
        function deleteUser(id: any, index: any): void;
        function setFilters(): Promise<void>;
        function resetFilter(): void;
        function exportFile(): void;
    }
}
