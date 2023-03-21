import { TEXT_CONTENT } from "@/lib/lang";

export const NAV_LINKS = [
    { title: TEXT_CONTENT.header.home, href: "/", id: 0 },
    {
        title: TEXT_CONTENT.header.company.title,
        options: [{ option: TEXT_CONTENT.header.company.team, href: "/team" }],
        id: 1,
    },
    {
        title: TEXT_CONTENT.header.portfolio.title,
        options: [
            {
                option: TEXT_CONTENT.header.portfolio.projects,
                href: "/projects",
            },
        ],
        id: 2,
    },
    {
        title: TEXT_CONTENT.header.service.title,
        options: [
            {
                option: TEXT_CONTENT.header.service.outsourcing,
                href: "/outsourcing",
            },
            {
                option: TEXT_CONTENT.header.service.outstaffing,
                href: "/outstaffing",
            },
        ],
        id: 3,
    },
    { title: TEXT_CONTENT.header.development, href: "/development", id: 4 },
    { title: TEXT_CONTENT.header.contact_us, href: "/contact_us", id: 5 },
];
