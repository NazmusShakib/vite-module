declare const _default: {
    getAllOrganizations: () => Promise<unknown>;
    getProfile: () => Promise<unknown>;
    getCustomPermissionLists: () => Promise<unknown>;
    getCustomPermission: (url: any) => Promise<unknown>;
    getDepartment: () => Promise<unknown>;
    getPermissions: () => Promise<unknown>;
    getRoles: () => Promise<unknown>;
    buildUrl(url: string, parameters: any, mark?: boolean): string;
    getAllUsers(query?: null): Promise<unknown>;
};
export default _default;
