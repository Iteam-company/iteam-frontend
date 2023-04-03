import { NextApiRequest, NextApiResponse } from "next";

export interface HomeInterface {
    step: string;
    title: string;
    text: string;
}

const DATA = [
    {
        step: "01",
        title: "Strategic Analysis",
        text: "Lorem Ipsum has been the industry's standard dummy text",
    },
    {
        step: "02",
        title: "Planning & Design",
        text: "Lorem Ipsum has been the industry's standard dummy text",
    },
    {
        step: "03",
        title: "Solution Delivery",
        text: "Lorem Ipsum has been the industry's standard dummy text",
    },
    {
        step: "04",
        title: "Managing & Innovating",
        text: "Lorem Ipsum has been the industry's standard dummy text",
    },
];

export default function (_: NextApiRequest, res: NextApiResponse) {
    return res.status(200).send(DATA);
}
