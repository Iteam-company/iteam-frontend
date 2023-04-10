import { NextApiRequest, NextApiResponse } from "next";

export interface HomeInterface {
    step: string;
    title: string;
    text: string;
}
export interface CoreValueInterface {
    id: number;
    letter: string;
    title: string;
    text: string;
}

const DATA = {
    data: [
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
    ],

    info: [
        {
            id: 0,
            letter: "i",
            title: "Innovation",
            text: "Embracing new and creative ideas to provide innovative solutions to our clients.",
        },
        {
            id: 1,
            letter: "T",
            title: "Teamwork",
            text: "Fostering a collaborative environment where teamwork and mutual respect are key to achieving success.",
        },
        {
            id: 2,
            letter: "e",
            title: "Excellence",
            text: "Striving for excellence in everything we do, delivering high-quality products and services to our clients.",
        },
        {
            id: 3,
            letter: "a",
            title: "Adaptability",
            text: "Being adaptable to change and willing to embrace new technologies and methodologies to stay ahead of the curve.",
        },
        {
            id: 4,
            letter: "m",
            title: "Mindfulness",
            text: "Practicing mindfulness in our work, being present, and paying attention to details to ensure the best outcomes for our clients.",
        },
    ],
};

export default function (_: NextApiRequest, res: NextApiResponse) {
    return res.status(200).send(DATA);
}
