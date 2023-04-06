import { NextApiRequest, NextApiResponse } from "next/types";
import AngularIcon from "@/assets/icon/angular.png";
import JavascriptIcon from "@/assets/icon/javascript.png";
import TypescriptIcon from "@/assets/icon/typescript.png";
import ReduxIcon from "@/assets/icon/redux.png";
import ReactIcon from "@/assets/icon/react.png";
import NestIcon from "@/assets/icon/nest-js.svg";
import NodeIcon from "@/assets/icon/node-js.png";
import MongoIcon from "@/assets/icon/mongo.png";
import PostgressIcon from "@/assets/icon/postgress.png";
import MobXIcon from "@/assets/icon/mobx.png";
import RxJsIcon from "@/assets/icon/rxjs.png";
import ExpressjsIcon from "@/assets/icon/expressjs.png";
import FirebaseIcon from "@/assets/icon/firebase.png";

import { StaticImageData } from "next/image";

export interface DevelopmentInterface {
    title: string;
    info: InfoInterface[];
}
export interface InfoInterface {
    title: string;
    description: string;
    icon: StaticImageData;
    href: string;
}

const INFO = [
    {
        title: "Front-End",
        info: [
            {
                title: "Javascript",
                description: "The core technologies of the World Wide Web",
                icon: JavascriptIcon,
                href: "https://www.javascript.com/",
            },
            {
                title: "Typescript",
                description: "JavaScript with syntax for types",
                icon: TypescriptIcon,
                href: "https://www.typescriptlang.org/",
            },
            {
                title: "Angular",
                description: "The modern web developer's platform",
                icon: AngularIcon,
                href: "https://angular.io/",
            },
            {
                title: "React",
                description:
                    "A JavaScript library for building user interfaces",
                icon: ReactIcon,
                href: "https://reactjs.org/",
            },
            {
                title: "Redux",
                description: "A Predictable State Container for JS Apps",
                icon: ReduxIcon,
                href: "https://redux.js.org/",
            },
            {
                title: "MobX",
                description: "Simple, scalable state management",
                icon: MobXIcon,
                href: "https://mobx.js.org/",
            },
            {
                title: "RxJS",
                description: "Reactive Extensions Library for JavaScript",
                icon: RxJsIcon,
                href: "https://rxjs.dev/",
            },
        ],
    },
    {
        title: "Back-End",
        info: [
            {
                title: "Nest.js",
                description: "Framework for scalable enterprise applications.",
                icon: NestIcon,
                href: "https://nestjs.com/",
            },
            {
                title: "Node.js",
                description: "Javascript library for server-side applications",
                icon: NodeIcon,
                href: "https://nodejs.org/en/",
            },
            {
                title: "Express",
                description: "Web framework for Node.js",
                icon: ExpressjsIcon,
                href: "https://expressjs.com/",
            },
        ],
    },
    {
        title: "Database",
        info: [
            {
                title: "PostgreSQL",
                description: "Object-relational database database",
                icon: PostgressIcon,
                href: "https://www.postgresql.org/",
            },
            {
                title: "MongoDB",
                description: "Document-oriented database program",
                icon: MongoIcon,
                href: "https://www.mongodb.com/cloud/atlas/lp/try2-de?utm_source=google&utm_campaign=gs_emea_germany_search_core_brand_atlas_desktop&utm_term=mongodb&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=12212624524&adgroup=115749704783&gclid=Cj0KCQiA47GNBhDrARIsAKfZ2rC9I0_UaytqmqRuy2o-9yAcgyhnirhtMvNJFvUJzBmbNv1sKOtWhbgaAo0CEALw_wcB/",
            },
            {
                title: "Firebase",
                description: "Firebase is a Backend-as-a-Service (Baas)",
                icon: FirebaseIcon,
                href: "https://firebase.google.com/",
            },
        ],
    },
];

export default function (_: NextApiRequest, res: NextApiResponse) {
    return res.status(200).send(INFO);
}
