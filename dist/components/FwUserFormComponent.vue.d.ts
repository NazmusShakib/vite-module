export default _sfc_main;
declare namespace _sfc_main {
    const name: string;
    namespace metaInfo {
        const title: string;
    }
    function data(): {
        list: never[];
        pre: {
            roles: never[];
            permissions: never[];
            organizations: never[];
            departments: never[];
            parents: never[];
        };
        params: string;
        value: {
            account_type: string;
            parent_id: string;
        };
        is_edit: boolean;
        temp_avatar: string;
        isSelectorLoading: boolean;
        is_loading: boolean;
    };
    function mounted(): void;
    namespace methods {
        function getData(): Promise<void>;
        function getUserDetail(id: any): Promise<any>;
        function handleSubmission(): void;
        function selectFile(event: any): void;
        function getParents(query: any): Promise<void>;
    }
}
