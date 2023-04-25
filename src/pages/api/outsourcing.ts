import { NextApiRequest, NextApiResponse } from "next";

export interface OutsourcingInterface {
    services: string[];
    approach: NumbersInterface[];
    process: ProcessInterface[];
}

export interface NumbersInterface {
    id?: number;
    title: number;
    subTitle?: string;
    text: string;
}
export interface ProcessInterface {
    step?: number;
    title: string;
    text: string;
}

export interface AppsInterface {
    step?: number;
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
        { id: 1, title: 6, text: "Years of experience in IT" },
        {
            id: 2,
            title: 30,
            subTitle: "%",
            text: "Shorter time-to-market delivery",
        },
        {
            id: 3,
            title: 50,
            subTitle: "+",
            text: "Successfully completed projects",
        },
    ],
    process: [
        {
            step: 1,
            title: "Requirements",
            text: "Our outsource web development company gathers requirements that describe the business needs of your project. We decompose the specification into small tasks to estimate the scope precisely and prepare a strict delivery plan for your approval.",
        },
        {
            step: 2,
            title: "Design",
            text: "At this stage, you will get two prototypes. The first one is wireframes that allow visualizing project functionality and user flow. The next step is to create an interactive UI prototype that looks almost like the real product.",
        },
        {
            step: 3,
            title: "Development",
            text: "There are no two similar projects. We always develop a personal approach to each project we take. Our practices like Continuous integration, code reviews, and pair programming let the team combine speed and agility with a focus on quality.",
        },
        {
            step: 4,
            title: "Testing",
            text: "Software development can`t do without quality assurance. Each project we deliver is precisely tested either manually or automatically. Quality assurance is one of our main values since it`s the basis of our client`s reputation.",
        },
        {
            step: 5,
            title: "Delivery",
            text: "Software development can`t do without quality assurance. Each project we deliver is precisely tested either manually or automatically. Quality assurance is one of our main values since it`s the basis of our client`s reputation.",
        },
    ],
    apps: [
        {
            title: "Progressive Web App",
            step: 1,
            text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        },
        {
            title: "Single page Application",
            step: 2,
            text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        },
        {
            title: "Progressive Web Apps",
            step: 3,
            text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        },
        {
            title: "Progressive Web Apps",
            step: 4,
            text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        },
        {
            title: "Progressive Web Apps",
            step: 5,
            text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        },
    ],
};

export default function (_: NextApiRequest, res: NextApiResponse) {
    return res.status(200).send(OUTSOURCING);
}
