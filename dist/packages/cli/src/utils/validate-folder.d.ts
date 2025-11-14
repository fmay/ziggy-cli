export interface ValidFolder {
    valid: boolean;
    packageObj: PackageJSON;
}
export interface PackageJSON {
    name: string;
    sdkInterfaceVersion: number;
    [key: string]: unknown;
}
export declare function validateFolder(): boolean;
