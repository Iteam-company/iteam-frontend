import FacebookIcon from "@/assets/social_media/fb.svg";
import InstagramIcon from "@/assets/social_media/ig.svg";
import TwitterIcon from "@/assets/social_media/twitter.svg";
import LinkedinIcon from "@/assets/social_media/linkedin.svg";

export const NAV_LINKS = [
    {
        title: "Compamy",
        options: [
            { option: "Home", href: "/" },
            { option: "Team", href: "/team" },
            { option: "Contact us", href: "/contact_us" },
        ],
        id: 0,
    },
    {
        title: "Services",
        options: [
            { option: "Outsourcing", href: "/outsourcing" },
            { option: "Outstaffing", href: "/outstaffing" },
        ],
        id: 1,
    },
    { title: "Development", href: "/development", id: 2 },
];

export const SOCIAL_MEDIA = [
    { href: "https://www.facebook.com/", icon: FacebookIcon, id: 0 },
    { href: "https://www.facebook.com/", icon: InstagramIcon, id: 1 },
    { href: "https://www.facebook.com/", icon: TwitterIcon, id: 2 },
    { href: "https://www.facebook.com/", icon: LinkedinIcon, id: 3 },
];

export const TITLES = {
    office: "Office",
    socil_media: "Social Media",
};
