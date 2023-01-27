import React, { FC } from "react";
import { useRouter } from "next/router";
import { Dropdown } from "@/anatomic/atoms/Dropdown";
import { FlexRow } from "@/anatomic/atoms/Flex";

const OPTIONS1 = [
    { option: "Web", href: "/" },
    { option: "Mobile", href: "/la" },
    { option: "TV Apps", href: "/lal" },
    { option: "Machine learning & AI", href: "/lala" },
    { option: "Mobile", href: "/lall" },
    { option: "TV Apps", href: "/laaa" },
];
const OPTIONS = [
    { option: "Web", href: "/be" },
    { option: "Mobile", href: "/bwe" },
    { option: "TV Apps", href: "/bed" },
    { option: "Machine learning & AI", href: "/bde" },
    { option: "Mobile", href: "/bwwe" },
    { option: "TV Apps", href: "/bfe" },
];

export const Header: FC = () => {
    const activeRoute = useRouter().asPath;

    return (
        <FlexRow>
            <Dropdown
                title="development"
                activeRoute={activeRoute}
                options={OPTIONS1}
            />
            <Dropdown
                title="development2"
                activeRoute={activeRoute}
                options={OPTIONS}
            />
        </FlexRow>
    );
};
