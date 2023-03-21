import { NextApiRequest, NextApiResponse } from "next/types";
import Igor from "@/assets/icon/igor.png";

export interface TeamInterface {
    id?: number;
    name: string;
    avatar: any;
    position: string;
    comments?: string[];
    technology?: Technology[];
    experience: { position: string; year: number };
    rate: number;
}
export interface Technology {
    text: string;
    short: string;
    id: number;
}

const TEAM = [
    {
        id: 1,
        name: "Igor Sergienko",
        avatar: Igor,
        position: "Full stack Developer",
        comments: [
            "Igor is grate developer, he provided excellent job. Highly recommend him! Thank you!",
        ],
        technology: [
            { text: "JavaScript", short: "JS", id: 0 },
            { text: "TypeScript", short: "TS", id: 1 },
            { text: "Angular", short: "A", id: 2 },
            { text: "React", short: "R", id: 3 },
        ],
        experience: {
            position: "Mid-Senior Developer",
            year: "3",
        },
        rate: 25,
    },
    {
        id: 2,
        name: "Yurii Yurii",
        avatar: Igor,
        position: "Full stack",
        comments: [
            "Yurii is outstanding!",
            "Worked normal working days with a set schedule and was always reachable. Very dedicated!",
            "Grate work!",
        ],
        technology: [
            { text: "JavaScript", short: "JS", id: 0 },
            { text: "TypeScript", short: "TS", id: 1 },
            { text: "Angular", short: "A", id: 2 },
            { text: "React", short: "R", id: 3 },
        ],
        experience: {
            position: "Mid-Senior Developer",
            year: "4",
        },
        rate: 25,
    },
    {
        id: 3,
        name: "Andrii Andrii",
        avatar: Igor,
        position: "Full stack",
        comments: [
            "Andrii did a good job! Good communication skills, he was fast and efficient. Highly recommended.",
        ],
        technology: [
            { text: "JavaScript", short: "JS", id: 0 },
            { text: "TypeScript", short: "TS", id: 1 },
            { text: "Angular", short: "A", id: 2 },
            { text: "React", short: "R", id: 3 },
        ],
        experience: {
            position: "Mid-Senior Developer",
            year: "5",
        },
        rate: 25,
    },
    {
        id: 4,
        name: "Oleksii Oleksii",
        avatar: Igor,
        position: "Full stack",
        comments: [
            "Highly recommended Oleksii. He quick to review and assess the merits if various libraries, he can extend functionality where needed, and works quiet well with the rest of the team. I'm impressed with his hight quality code contribution and use a modern patterns.",
            "Oleksii, did just Great. He delivered on time and with Quality. Very professional and communicative. As soon as we have another project that matches his skill set he'll be for sure our 1st pick. Thanks a lot for your work and commitment.",
            "Thanks for your work!",
        ],
        technology: [
            { text: "JavaScript", short: "JS", id: 0 },
            { text: "TypeScript", short: "TS", id: 1 },
            { text: "Angular", short: "A", id: 2 },
            { text: "React", short: "R", id: 3 },
        ],
        experience: {
            position: "Mid-Senior Developer",
            year: "3",
        },
        rate: 25,
    },
    {
        id: 5,
        name: "Yaroslav Yaroslav",
        avatar: Igor,
        position: "Full stack",
        comments: [
            "Yaroslav is very attentive to work. He understand the needs of the project and is able to offer solutions. Always available if there are any questions arises. Work done in timely manner with high quality. Will hire him again for sure!",
        ],
        technology: [
            { text: "JavaScript", short: "JS", id: 0 },
            { text: "TypeScript", short: "TS", id: 1 },
            { text: "Angular", short: "A", id: 2 },
            { text: "React", short: "R", id: 3 },
        ],
        experience: {
            position: "Mid-Senior Developer",
            year: "1",
        },
        rate: 25,
    },
    {
        id: 6,
        name: "Igor Sergienko",
        avatar: Igor,
        position: "Full stack",
        comments: [""],
        technology: [
            { text: "JavaScript", short: "JS", id: 0 },
            { text: "TypeScript", short: "TS", id: 1 },
            { text: "Angular", short: "A", id: 2 },
            { text: "React", short: "R", id: 3 },
        ],
        experience: {
            position: "Mid-Senior Developer",
            year: "0",
        },
        rate: 25,
    },
    {
        id: 7,
        name: "Igor Sergienko",
        avatar: Igor,
        position: "Full stack",
        comments: [""],
        technology: [
            { text: "JavaScript", short: "JS", id: 0 },
            { text: "TypeScript", short: "TS", id: 1 },
            { text: "Angular", short: "A", id: 2 },
            { text: "React", short: "R", id: 3 },
        ],
        experience: {
            position: "Mid-Senior Developer",
            year: "4",
        },
        rate: 25,
    },
    {
        id: 8,
        name: "Igor Sergienko",
        avatar: Igor,
        position: "Full stack",
        comments: [""],
        technology: [
            { text: "JavaScript", short: "JS", id: 0 },
            { text: "TypeScript", short: "TS", id: 1 },
            { text: "Angular", short: "A", id: 2 },
            { text: "React", short: "R", id: 3 },
        ],
        experience: {
            position: "Mid-Senior Developer",
            year: "4",
        },
        rate: 25,
    },
];

export default function (_: NextApiRequest, res: NextApiResponse) {
    return res.status(200).send(TEAM);
}
