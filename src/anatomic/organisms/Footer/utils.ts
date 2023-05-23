import { OptionsI } from "@/anatomic/atoms/Dropdown/Dropdown";

export interface PropsI {
    data: LinkDataI[];
    title: { office: string; socil_media: string };
    socialMedia: SocialMediaI[];
    footerText: {
        rights: string;
        companyInfo: CompanyInfoI[];
    };
}
export interface LinkDataI {
    title: string;
    options: OptionsI[];
    id: number;
}

export interface SocialMediaI {
    href: string;
    icon: any;
    id: string;
}
export interface CompanyInfoI {
    title: string;
    value: string;
}
