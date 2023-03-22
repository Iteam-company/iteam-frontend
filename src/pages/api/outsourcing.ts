import { NextApiRequest, NextApiResponse } from "next";

export interface OutsourcingInterface {
    services: string[];
    approach: NumbersInterface[];
    process: ProcessInterface[];
}

export interface NumbersInterface {
    id?: number;
    title: string;
    text: string;
}
export interface ProcessInterface {
    id?: number;
    title: string;
    text: string;
}

const OUTSOURCING = {
    services: [
        "Custom software development",
        "Mobile app development",
        "Web development",
        "Quality assurance and testing",
        "Maintenance and support",
    ],
    numbers: [
        { id: 1, title: "6", text: "Years of experience in IT" },
        { id: 2, title: "30%", text: "Shorter time-to-market delivery" },
        { id: 3, title: "50+", text: "Successfully completed projects" },
    ],
    process: [
        {
            id: 0,
            title: "Requirements",
            text: "Our outsource web development company gathers requirements that describe the business needs of your project. We decompose the specification into small tasks to estimate the scope precisely and prepare a strict delivery plan for your approval.",
        },
        {
            id: 1,
            title: "Design",
            text: "At this stage, you will get two prototypes. The first one is wireframes that allow visualizing project functionality and user flow. The next step is to create an interactive UI prototype that looks almost like the real product.",
        },
        {
            id: 2,
            title: "Development",
            text: "There are no two similar projects. We always develop a personal approach to each project we take. Our practices like Continuous integration, code reviews, and pair programming let the team combine speed and agility with a focus on quality.",
        },
        {
            id: 3,
            title: "Testing",
            text: "Software development can`t do without quality assurance. Each project we deliver is precisely tested either manually or automatically. Quality assurance is one of our main values since it`s the basis of our client`s reputation.",
        },
        {
            id: 4,
            title: "Delivery",
            text: "Software development can`t do without quality assurance. Each project we deliver is precisely tested either manually or automatically. Quality assurance is one of our main values since it`s the basis of our client`s reputation.",
        },
    ],
};

export default function (_: NextApiRequest, res: NextApiResponse) {
    return res.status(200).send(OUTSOURCING);
}
