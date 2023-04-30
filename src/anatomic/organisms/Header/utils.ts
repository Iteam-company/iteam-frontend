import { OptionsI } from "@/anatomic/atoms/Dropdown/Dropdown";

export interface PropsI {
    data: any[];
}
export interface HeaderLinksI {
    title: string;
    options: OptionsI[];
    href: string;
    id: string;
}
export interface HeaderI {
    activeRoute: string;
    data: HeaderLinksI[];
}
