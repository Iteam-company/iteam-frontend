import { NextApiRequest, NextApiResponse } from "next";

export interface OutstaffingInterface {
    approach: ApproachInterface[];
    benefits: BenefitsInterface[];
}

export interface ApproachInterface {
    step: number;
    title: string;
    text: string;
    progress: number;
    color: string;
}
export interface BenefitsInterface {
    id?: number;
    title: string;
    text: string;
}

const OUTSTAFFING = {
    approach: [
        {
            step: 1,
            title: "RECRUITING",
            text: "We select candidates according to your ideal candidate profile. They complete a test task and pass interviews. We make an offer approved by you.",
            progress: 0,
            color: "#5F12AC",
        },
        {
            step: 2,
            title: "ONBOARDING",
            text: "We help with setting up the environments, configuring essential settings/processes (daily stand-ups, reporting, time tracking, etc).",
            progress: 33,
            color: "#500F92",
        },
        {
            step: 3,
            title: "ONGOING WORK",
            text: "We focus on the motivation and staff retention of your team; make sure all contractual obligations are met; and are available to speak with you on any needs.",
            progress: 66,
            color: "#460E7E",
        },
        {
            step: 4,
            title: "PROBLEM SOLVED",
            text: "We focus on the motivation and staff retention of your team; make sure all contractual obligations are met; and are available to speak with you on any needs.",
            progress: 99,
            color: "#3A104B",
        },
    ],
    benefits: [
        {
            id: 0,
            title: "Access To Talent",
            text: "If your country is facing a talent shortage, the dedicated development team is a perfect solution for you. With over 200K+ software developers in Ukraine, the hiring process is fast and easy so you can augment your team without spending months on recruiting.",
        },
        {
            id: 1,
            title: "Access To Talent",
            text: "If your country is facing a talent shortage, the dedicated development team is a perfect solution for you. With over 200K+ software developers in Ukraine, the hiring process is fast and easy so you can augment your team without spending months on recruiting.",
        },
    ],
};

export default function (_: NextApiRequest, res: NextApiResponse) {
    return res.status(200).send(OUTSTAFFING);
}
