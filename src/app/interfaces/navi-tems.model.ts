export interface NavItems {
    label: string;
    route?: string;
    children?: Array<NavItems>;
}