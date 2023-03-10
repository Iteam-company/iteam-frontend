import { NextApiRequest, NextApiResponse } from "next/types";
import ProjectSkyIcon from "@/assets/projects/sky.jpg";
import ProjectLabIcon from "@/assets/projects/lab.jpg";
import MegaBetIcon from "@/assets/projects/magaBet.jpg";
import MedIcon from "@/assets/projects/med.jpg";
import BrokersIcon from "@/assets/projects/brokers.jpg";
import MedicalIcon from "@/assets/projects/medical.png";
import SurveyplusIcon from "@/assets/projects/Surveyplus.jpg";
import LiteSiteIcon from "@/assets/projects/litesite.png";
import PicturesEditorIcon from "@/assets/projects/picturesEditor.jpg";
import NorderIcon from "@/assets/projects/norder.jpeg";
import { StaticImageData } from "next/image";

export interface ProjectItemInterface {
    id: number;
    title: string;
    description: string;
    location: string;
    budget: string;
    solution: SolutionInterface[];
    result: ResultInterface;
    tech: Technologies[];
    color: string;
    img: StaticImageData;
}

export interface Technologies {
    icon: "react" | "ts" | "js" | "angular";
    name: string;
}

export interface SolutionInterface {
    title: string;
    text: string[];
    BgColor: string;
    textColor: string;
}

export interface ResultInterface {
    title: string;
    text: string[];
}

const DATA = {
    "0": {
        id: 0,
        title: "Landing for LabK19",
        description:
            "Performing layouts using Adobe Xd templates, more than 20 pages with custom logic (forms, calendars, ect.)",
        location: "Berlin",
        budget: "Budget",
        solution: [
            {
                title: "Technologies",
                text: [
                    "fbsdcfisdhao",
                    "dcadhcjadw",
                    "hfunxecgfe",
                    "euwcnfagfbl",
                    "bflueagf,aje",
                ],
                BgColor:
                    "linear-gradient(91.64deg, #30323F 46.55%, #95E0E3 85.03%);",
                textColor: "#FFFFFF",
            },
            {
                title: "Methodology",
                text: [
                    "fbsdcfisdhao",
                    "dcadhcjadw",
                    "hfunxecgfe",
                    "euwcnfagfbl",
                    "bflueagf,aje",
                ],
                BgColor:
                    "linear-gradient(90deg, rgba(149,224,227,1) 0%, rgba(149,224,227,0.25) 50%, rgba(149,224,227,1) 100%);",
                textColor: "#1D1C1F",
            },
            {
                title: "Time",
                text: [
                    "fbsdcfisdhao",
                    "dcadhcjadw",
                    "hfunxecgfe",
                    "euwcnfagfbl",
                    "bflueagf,aje",
                ],
                BgColor:
                    " linear-gradient(91.64deg, #95E0E3 11.52%, #696973 57.9%);",
                textColor: "#FFFFFF",
            },
        ],
        result: {
            title: "Key achievements",
            text: [
                "Xfive launched an MVP version of the product after six months of close collaboration with Olera",
                "The initial goal was to get a score of 3.6 in the user testing for the MARS (Mobile Application Rating Scale). The MVP eventually got a score of 4.5!",
                "This helped Olera secure the second installment of a $2.3M grant from the National Institute on Aging, which falls under the National Institute of Health (NIH).",
            ],
        },
        tech: [
            {
                icon: "react",
                name: "React",
            },
            {
                icon: "ts",
                name: "TypeScript",
            },
            {
                icon: "js",
                name: "JavaScript",
            },
        ],
        color: "144deg, #30323F, #95E0E3, #696973",
        img: ProjectLabIcon,
    },

    "1": {
        id: 1,
        title: "Skytraders",
        description:
            "Social crypto market project which has both crypto market functionality and social platform functionality, which means user can follow other traders and follow their steps for making crypto.",
        location: "Location",
        budget: "Budget",
        solution: [
            {
                title: "Technologies",
                text: [
                    "fbsdcfisdhao",
                    "dcadhcjadw",
                    "hfunxecgfe",
                    "euwcnfagfbl",
                    "bflueagf,aje",
                ],
                BgColor:
                    "linear-gradient(91.64deg,#17263B 46.55%, #18BDFF 85.03%);",
                textColor: "#FFFFFF",
            },
            {
                title: "Methodology",
                text: [
                    "fbsdcfisdhao",
                    "dcadhcjadw",
                    "hfunxecgfe",
                    "euwcnfagfbl",
                    "bflueagf,aje",
                ],
                BgColor:
                    "linear-gradient(90deg, rgba(24,189,255,1) 0%, rgba(24,189,255,0.25) 50%, rgba(24,189,255,1) 100%)",
                textColor: "#1D1C1F",
            },
            {
                title: "Time",
                text: [
                    "fbsdcfisdhao",
                    "dcadhcjadw",
                    "hfunxecgfe",
                    "euwcnfagfbl",
                    "bflueagf,aje",
                ],
                BgColor:
                    "linear-gradient(91.64deg, #18BDFF 11.52%, #17263B 57.9%);",
                textColor: "#FFFFFF",
            },
        ],
        result: {
            title: "Key achievements",
            text: [
                "Xfive launched an MVP version of the product after six months of close collaboration with Olera",
                "The initial goal was to get a score of 3.6 in the user testing for the MARS (Mobile Application Rating Scale). The MVP eventually got a score of 4.5!",
                "This helped Olera secure the second installment of a $2.3M grant from the National Institute on Aging, which falls under the National Institute of Health (NIH).",
            ],
        },
        tech: [
            {
                icon: "angular",
                name: "Angular",
            },
            {
                icon: "ts",
                name: "TypeScript",
            },
            {
                icon: "js",
                name: "JavaScript",
            },
        ],
        color: "144deg, #17263B, #18BDFF, #2B3B54",
        img: ProjectSkyIcon,
    },

    "2": {
        id: 2,
        title: "Surveyplus",
        description:
            "Appointment booking project that has several forms to help user to book appointment for different purposes.",
        location: "Location",
        budget: "Budget",
        solution: [
            {
                title: "Technologies",
                text: [
                    "fbsdcfisdhao",
                    "dcadhcjadw",
                    "hfunxecgfe",
                    "euwcnfagfbl",
                    "bflueagf,aje",
                ],
                BgColor:
                    "linear-gradient(91.64deg, #FFA712 46.55%,#ECD9AE 85.03%);",
                textColor: "#FFFFFF",
            },
            {
                title: "Methodology",
                text: [
                    "fbsdcfisdhao",
                    "dcadhcjadw",
                    "hfunxecgfe",
                    "euwcnfagfbl",
                    "bflueagf,aje",
                ],
                BgColor:
                    "linear-gradient(90deg, rgba(236,217,174,1) 0%, rgba(236,217,174,0.25) 50%, rgba(236,217,174,1) 100%);",
                textColor: "#1D1C1F",
            },
            {
                title: "Time",
                text: [
                    "fbsdcfisdhao",
                    "dcadhcjadw",
                    "hfunxecgfe",
                    "euwcnfagfbl",
                    "bflueagf,aje",
                ],

                BgColor:
                    "linear-gradient(91.64deg, #ECD9AE 11.52%, #FFA712 57.9%);",
                textColor: "#FFFFFF",
            },
        ],
        result: {
            title: "Key achievements",
            text: [
                "Xfive launched an MVP version of the product after six months of close collaboration with Olera",
                "The initial goal was to get a score of 3.6 in the user testing for the MARS (Mobile Application Rating Scale). The MVP eventually got a score of 4.5!",
                "This helped Olera secure the second installment of a $2.3M grant from the National Institute on Aging, which falls under the National Institute of Health (NIH).",
            ],
        },
        tech: [
            {
                icon: "angular",
                name: "Angular",
            },
            {
                icon: "ts",
                name: "TypeScript",
            },
            {
                icon: "js",
                name: "JavaScript",
            },
        ],
        color: "144deg, #FFA712, #ECD9AE, #EBB25B",
        img: SurveyplusIcon,
    },
    "3": {
        id: 3,
        title: "Litesite.com",
        description:
            "Business management tool for communication with clients based on MERN stack technology.",
        location: "Location",
        budget: "Budget",
        solution: [
            {
                title: "Technologies",
                text: [
                    "fbsdcfisdhao",
                    "dcadhcjadw",
                    "hfunxecgfe",
                    "euwcnfagfbl",
                    "bflueagf,aje",
                ],
                BgColor:
                    "linear-gradient(91.64deg, #8237BA 46.55%, #F1286F 85.03%);",
                textColor: "#FFFFFF",
            },
            {
                title: "Methodology",
                text: [
                    "fbsdcfisdhao",
                    "dcadhcjadw",
                    "hfunxecgfe",
                    "euwcnfagfbl",
                    "bflueagf,aje",
                ],
                BgColor:
                    "linear-gradient(90deg, rgba(241,40,111,1) 0%, rgba(241,40,111,0.45) 50%, rgba(241,40,111,1) 100%);",
                textColor: "#1D1C1F",
            },
            {
                title: "Time",
                text: [
                    "fbsdcfisdhao",
                    "dcadhcjadw",
                    "hfunxecgfe",
                    "euwcnfagfbl",
                    "bflueagf,aje",
                ],
                BgColor:
                    " linear-gradient(91.64deg, #F1286F 11.52%, #FF4FCF 57.9%);",
                textColor: "#FFFFFF",
            },
        ],
        result: {
            title: "Key achievements",
            text: [
                "Xfive launched an MVP version of the product after six months of close collaboration with Olera",
                "The initial goal was to get a score of 3.6 in the user testing for the MARS (Mobile Application Rating Scale). The MVP eventually got a score of 4.5!",
                "This helped Olera secure the second installment of a $2.3M grant from the National Institute on Aging, which falls under the National Institute of Health (NIH).",
            ],
        },
        tech: [
            {
                icon: "react",
                name: "React",
            },
            {
                icon: "ts",
                name: "TypeScript",
            },
            {
                icon: "js",
                name: "JavaScript",
            },
        ],
        color: "144deg,#8237BA, #F1286F, #FF4FCF",
        img: LiteSiteIcon,
    },
    "4": {
        id: 4,
        title: "MegaBet",
        description: "Developed responsive app, created new features.",
        location: "Location",
        budget: "Budget",
        solution: [
            {
                title: "Technologies",
                text: [
                    "fbsdcfisdhao",
                    "dcadhcjadw",
                    "hfunxecgfe",
                    "euwcnfagfbl",
                    "bflueagf,aje",
                ],
                color: "144deg,#121212, #588542, #1F261E",

                BgColor:
                    "linear-gradient(91.64deg, #121212 46.55%, #588542 85.03%);",
                textColor: "#FFFFFF",
            },
            {
                title: "Methodology",
                text: [
                    "fbsdcfisdhao",
                    "dcadhcjadw",
                    "hfunxecgfe",
                    "euwcnfagfbl",
                    "bflueagf,aje",
                ],
                BgColor:
                    "linear-gradient(90deg, rgba(88,133,66,1) 0%, rgba(88,133,66,0.5) 55%, rgba(88,133,66,1) 100%)",
                textColor: "#1D1C1F",
            },
            {
                title: "Time",
                text: [
                    "fbsdcfisdhao",
                    "dcadhcjadw",
                    "hfunxecgfe",
                    "euwcnfagfbl",
                    "bflueagf,aje",
                ],
                BgColor:
                    "linear-gradient(91.64deg, #588542 11.52%, #1F261E 57.9%);",
                textColor: "#FFFFFF",
            },
        ],
        result: {
            title: "Key achievements",
            text: [
                "Xfive launched an MVP version of the product after six months of close collaboration with Olera",
                "The initial goal was to get a score of 3.6 in the user testing for the MARS (Mobile Application Rating Scale). The MVP eventually got a score of 4.5!",
                "This helped Olera secure the second installment of a $2.3M grant from the National Institute on Aging, which falls under the National Institute of Health (NIH).",
            ],
        },
        tech: [
            {
                icon: "react",
                name: "React",
            },
            {
                icon: "ts",
                name: "TypeScript",
            },
            {
                icon: "js",
                name: "JavaScript",
            },
        ],
        color: "144deg,#121212, #588542, #1F261E",
        img: MegaBetIcon,
    },
    "5": {
        id: 5,
        title: "Pictures editor",
        description:
            "Pictures editor is a platform for measuring objects in uploaded images, results were saving to the Google photos, and presented in thw gallery. There were no back end in the project, instead Google functions were used. It's an Angular SPA.",
        location: "Location",
        budget: "Budget",
        solution: [
            {
                title: "Technologies",
                text: [
                    "fbsdcfisdhao",
                    "dcadhcjadw",
                    "hfunxecgfe",
                    "euwcnfagfbl",
                    "bflueagf,aje",
                ],
                BgColor:
                    "linear-gradient(91.64deg,#6B38B1 46.55%, #5836B1 85.03%);",
                textColor: "#FFFFFF",
            },
            {
                title: "Methodology",
                text: [
                    "fbsdcfisdhao",
                    "dcadhcjadw",
                    "hfunxecgfe",
                    "euwcnfagfbl",
                    "bflueagf,aje",
                ],
                BgColor:
                    "linear-gradient(90deg, rgba(88,54,177,1) 0%, rgba(88,54,177,0.75) 55%, rgba(88,54,177,1) 100%)",
                textColor: "#FFFFFF",
            },
            {
                title: "Time",
                text: [
                    "fbsdcfisdhao",
                    "dcadhcjadw",
                    "hfunxecgfe",
                    "euwcnfagfbl",
                    "bflueagf,aje",
                ],
                BgColor:
                    "linear-gradient(91.64deg, #5836B1 11.52%, #363DB2 57.9%);",
                textColor: "#FFFFFF",
            },
        ],
        result: {
            title: "Key achievements",
            text: [
                "Xfive launched an MVP version of the product after six months of close collaboration with Olera",
                "The initial goal was to get a score of 3.6 in the user testing for the MARS (Mobile Application Rating Scale). The MVP eventually got a score of 4.5!",
                "This helped Olera secure the second installment of a $2.3M grant from the National Institute on Aging, which falls under the National Institute of Health (NIH).",
            ],
        },
        tech: [
            {
                icon: "angular",
                name: "Angular",
            },
            {
                icon: "ts",
                name: "TypeScript",
            },
            {
                icon: "js",
                name: "JavaScript",
            },
        ],
        color: "144deg,#6B38B1, #5836B1, #363DB2",
        img: PicturesEditorIcon,
    },
    "6": {
        id: 6,
        title: "Platform for medicine consultations",
        description:
            "Platform for medicine consultations. As a user of the app you have ability to buy a consultations from different doctors, contact them via built-in chat, and even have a video call.",
        location: "Location",
        budget: "Budget",
        solution: [
            {
                title: "Technologies",
                text: [
                    "fbsdcfisdhao",
                    "dcadhcjadw",
                    "hfunxecgfe",
                    "euwcnfagfbl",
                    "bflueagf,aje",
                ],
                BgColor:
                    "linear-gradient(91.64deg, #345077 46.55%, #56BBC7 85.03%)",
                textColor: "#FFFFFF",
            },
            {
                title: "Methodology",
                text: [
                    "fbsdcfisdhao",
                    "dcadhcjadw",
                    "hfunxecgfe",
                    "euwcnfagfbl",
                    "bflueagf,aje",
                ],
                BgColor:
                    "linear-gradient(90deg, rgba(86,187,199,1) 0%, rgba(86,187,199,0.75) 55%, rgba(86,187,199,1) 100%)",
                textColor: "#FFFFFF",
            },
            {
                title: "Time",
                text: [
                    "fbsdcfisdhao",
                    "dcadhcjadw",
                    "hfunxecgfe",
                    "euwcnfagfbl",
                    "bflueagf,aje",
                ],
                BgColor:
                    "linear-gradient(91.64deg, #56BBC7 40.52%, #CFBFBF 77.9%)",
                textColor: "#FFFFFF",
            },
        ],
        result: {
            title: "Key achievements",
            text: [
                "Xfive launched an MVP version of the product after six months of close collaboration with Olera",
                "The initial goal was to get a score of 3.6 in the user testing for the MARS (Mobile Application Rating Scale). The MVP eventually got a score of 4.5!",
                "This helped Olera secure the second installment of a $2.3M grant from the National Institute on Aging, which falls under the National Institute of Health (NIH).",
            ],
        },
        tech: [
            {
                icon: "angular",
                name: "Angular",
            },
            {
                icon: "ts",
                name: "TypeScript",
            },
            {
                icon: "js",
                name: "JavaScript",
            },
        ],
        color: "144deg,#345077, #56BBC7, #CFBFBF",
        img: MedIcon,
    },
    "7": {
        id: 7,
        title: "System for forex brokers",
        description:
            "System for forex brokers, that presents different financial reports.",
        location: "Location",
        budget: "Budget",
        solution: [
            {
                title: "Technologies",
                text: [
                    "fbsdcfisdhao",
                    "dcadhcjadw",
                    "hfunxecgfe",
                    "euwcnfagfbl",
                    "bflueagf,aje",
                ],
                color: "144deg,#6891ED, #80A0E9, #E3E3E3",

                BgColor:
                    "linear-gradient(91.64deg, #6891ED 46.55%, #E3E3E3 85.03%);",
                textColor: "#FFFFFF",
            },
            {
                title: "Methodology",
                text: [
                    "fbsdcfisdhao",
                    "dcadhcjadw",
                    "hfunxecgfe",
                    "euwcnfagfbl",
                    "bflueagf,aje",
                ],
                BgColor:
                    "linear-gradient(90deg, rgba(227,227,227,1) 0%, rgba(227,227,227,0.5) 50%, rgba(227,227,227,1) 100%)",
                textColor: "#1D1C1F",
            },
            {
                title: "Time",
                text: [
                    "fbsdcfisdhao",
                    "dcadhcjadw",
                    "hfunxecgfe",
                    "euwcnfagfbl",
                    "bflueagf,aje",
                ],
                BgColor:
                    "linear-gradient(91.64deg, #E3E3E3 11.52%, #6891ED 57.9%)",
                textColor: "#FFFFFF",
            },
        ],
        result: {
            title: "Key achievements",
            text: [
                "Xfive launched an MVP version of the product after six months of close collaboration with Olera",
                "The initial goal was to get a score of 3.6 in the user testing for the MARS (Mobile Application Rating Scale). The MVP eventually got a score of 4.5!",
                "This helped Olera secure the second installment of a $2.3M grant from the National Institute on Aging, which falls under the National Institute of Health (NIH).",
            ],
        },
        tech: [
            {
                icon: "angular",
                name: "Angular",
            },
            {
                icon: "ts",
                name: "TypeScript",
            },
            {
                icon: "js",
                name: "JavaScript",
            },
        ],
        color: "144deg,#6891ED, #80A0E9, #E3E3E3",
        img: BrokersIcon,
    },
    "8": {
        id: 8,
        title: "Web application for managing the expenses",
        description:
            "This is an application for managing the expenses of your own business. The main idea is to collect all the financial activity of your business in one place.",
        location: "Location",
        budget: "Budget",
        solution: [
            {
                title: "Technologies",
                text: [
                    "fbsdcfisdhao",
                    "dcadhcjadw",
                    "hfunxecgfe",
                    "euwcnfagfbl",
                    "bflueagf,aje",
                ],
                BgColor:
                    "linear-gradient(91.64deg, #263544 46.55%, #F5F5F5 85.03%);",
                textColor: "#FFFFFF",
            },
            {
                title: "Methodology",
                text: [
                    "fbsdcfisdhao",
                    "dcadhcjadw",
                    "hfunxecgfe",
                    "euwcnfagfbl",
                    "bflueagf,aje",
                ],
                BgColor:
                    "linear-gradient(90deg, rgba(245,245,245,1) 0%, rgba(245,245,245,1) 50%, rgba(245,245,245,0.5) 100%)",
                textColor: "#1D1C1F",
            },
            {
                title: "Time",
                text: [
                    "fbsdcfisdhao",
                    "dcadhcjadw",
                    "hfunxecgfe",
                    "euwcnfagfbl",
                    "bflueagf,aje",
                ],
                BgColor:
                    "linear-gradient(91.64deg, #F5F5F5 11.52%,  #3FA0FD 57.9%);",
                textColor: "#FFFFFF",
            },
        ],
        result: {
            title: "Key achievements",
            text: [
                "Xfive launched an MVP version of the product after six months of close collaboration with Olera",
                "The initial goal was to get a score of 3.6 in the user testing for the MARS (Mobile Application Rating Scale). The MVP eventually got a score of 4.5!",
                "This helped Olera secure the second installment of a $2.3M grant from the National Institute on Aging, which falls under the National Institute of Health (NIH).",
            ],
        },
        tech: [
            {
                icon: "angular",
                name: "Angular",
            },
            {
                icon: "ts",
                name: "TypeScript",
            },
            {
                icon: "js",
                name: "JavaScript",
            },
        ],
        color: "144deg,#263544, #3FA0FD, #F5F5F5",
        img: NorderIcon,
    },

    "9": {
        id: 9,
        title: "Web application for medical personnel",
        description:
            "The main idea: to track the amount and frequency of taking medications by patients. It is possible to add new patients, manage the medication schedule, review the quantitative statistics of the consumption of medicinal products. ",
        location: "Location",
        budget: "Budget",
        solution: [
            {
                title: "Technologies",
                text: [
                    "fbsdcfisdhao",
                    "dcadhcjadw",
                    "hfunxecgfe",
                    "euwcnfagfbl",
                    "bflueagf,aje",
                ],
                BgColor:
                    "linear-gradient(91.64deg, #041B44 46.55%, #C9D7E0 85.03%);",
                textColor: "#FFFFFF",
            },
            {
                title: "Methodology",
                text: [
                    "fbsdcfisdhao",
                    "dcadhcjadw",
                    "hfunxecgfe",
                    "euwcnfagfbl",
                    "bflueagf,aje",
                ],
                BgColor:
                    "linear-gradient(90deg, rgba(201,215,224,1) 0%, rgba(201,215,224,1) 50%, rgba(201,215,224,0.5) 100%)",
                textColor: "#1D1C1F",
            },
            {
                title: "Time",
                text: [
                    "fbsdcfisdhao",
                    "dcadhcjadw",
                    "hfunxecgfe",
                    "euwcnfagfbl",
                    "bflueagf,aje",
                ],
                BgColor:
                    "linear-gradient(91.64deg, #C9D7E0 11.52%, #233D63 57.9%);",
                textColor: "#FFFFFF",
            },
        ],
        result: {
            title: "Key achievements",
            text: [
                "Xfive launched an MVP version of the product after six months of close collaboration with Olera",
                "The initial goal was to get a score of 3.6 in the user testing for the MARS (Mobile Application Rating Scale). The MVP eventually got a score of 4.5!",
                "This helped Olera secure the second installment of a $2.3M grant from the National Institute on Aging, which falls under the National Institute of Health (NIH).",
            ],
        },
        tech: [
            {
                icon: "angular",
                name: "Angular",
            },
            {
                icon: "ts",
                name: "TypeScript",
            },
            {
                icon: "js",
                name: "JavaScript",
            },
        ],
        color: "144deg,#041B44, #233D63, #C9D7E0",
        img: MedicalIcon,
    },
};

export default function (req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;
    return res.status(200).send(DATA[id as keyof typeof DATA]);
}
