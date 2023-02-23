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

import IgorComment1 from "@/assets/team/igor/comment_1.png";
import IgorComment2 from "@/assets/team/igor/comment_2.png";
import IgorComment3 from "@/assets/team/igor/comment_3.png";
import { StaticImageData } from "next/image";
import Igor from "@/assets/icon/igor.png";

export interface TeamInterface {
    id?: number;
    name: string;
    avatar: any;
    position: string;
    comments?: StaticImageData[];
    technology?: StaticImageData[];
    period?: string;
}

const TEAM = [
    {
        id: 1,
        period: "2019",
        name: "Vitaliy Kachan",
        avatar: Igor,
        position: "Full stack",
        comments: [IgorComment1, IgorComment2, IgorComment3],
        technology: [
            AngularIcon,
            JavascriptIcon,
            TypescriptIcon,
            ReduxIcon,
            NodeIcon,
            MongoIcon,
            PostgressIcon,
            RxJsIcon,
        ],
    },
    {
        id: 2,
        name: "Igor Sergienko",
        avatar: Igor,
        position: "Full stack",
        comments: [
            IgorComment1,
            IgorComment2,
            IgorComment3,
            IgorComment1,
            IgorComment2,
            IgorComment3,
        ],
        technology: [
            JavascriptIcon,
            TypescriptIcon,
            ReduxIcon,
            ReactIcon,
            NestIcon,
            NodeIcon,
            MongoIcon,
            PostgressIcon,
            MobXIcon,
            RxJsIcon,
            ExpressjsIcon,
            FirebaseIcon,
        ],
    },
    {
        id: 3,
        name: "Igor Sergienko",
        avatar: Igor,
        position: "Full stack",
        comments: [IgorComment1, IgorComment2, IgorComment3],
        technology: [
            JavascriptIcon,
            TypescriptIcon,
            ReduxIcon,
            ReactIcon,
            NestIcon,
            NodeIcon,
            MongoIcon,
            PostgressIcon,
            MobXIcon,
            RxJsIcon,
            ExpressjsIcon,
            FirebaseIcon,
        ],
    },
    {
        id: 4,
        period: "2020",
        name: "Igor Sergienko",
        avatar: Igor,
        position: "Full stack",
        comments: [IgorComment1, IgorComment2, IgorComment3],
        technology: [
            JavascriptIcon,
            TypescriptIcon,
            ReduxIcon,
            ReactIcon,
            NestIcon,
            NodeIcon,
            MongoIcon,
            PostgressIcon,
            MobXIcon,
            RxJsIcon,
            ExpressjsIcon,
            FirebaseIcon,
        ],
    },
    {
        id: 5,
        name: "Igor Sergienko",
        avatar: Igor,
        position: "Full stack",
        comments: [IgorComment1, IgorComment2, IgorComment3],
        technology: [
            JavascriptIcon,
            TypescriptIcon,
            ReduxIcon,
            ReactIcon,
            NestIcon,
            NodeIcon,
            MongoIcon,
            PostgressIcon,
            MobXIcon,
            RxJsIcon,
            ExpressjsIcon,
            FirebaseIcon,
        ],
    },
    {
        id: 6,
        period: "2021",
        name: "Igor Sergienko",
        avatar: Igor,
        position: "Full stack",
        comments: [IgorComment1, IgorComment2, IgorComment3],
        technology: [
            JavascriptIcon,
            TypescriptIcon,
            ReduxIcon,
            ReactIcon,
            NestIcon,
            NodeIcon,
            MongoIcon,
            PostgressIcon,
            MobXIcon,
            RxJsIcon,
            ExpressjsIcon,
            FirebaseIcon,
        ],
    },
    {
        id: 7,
        period: "2021",
        name: "Igor Sergienko",
        avatar: Igor,
        position: "Full stack",
        comments: [IgorComment1, IgorComment2, IgorComment3],
        technology: [
            JavascriptIcon,
            TypescriptIcon,
            ReduxIcon,
            ReactIcon,
            NestIcon,
            NodeIcon,
            MongoIcon,
            PostgressIcon,
            MobXIcon,
            RxJsIcon,
            ExpressjsIcon,
            FirebaseIcon,
        ],
    },
    {
        id: 8,
        period: "2021",
        name: "Igor Sergienko",
        avatar: Igor,
        position: "Full stack",
        comments: [IgorComment1, IgorComment2, IgorComment3],
        technology: [
            JavascriptIcon,
            TypescriptIcon,
            ReduxIcon,
            ReactIcon,
            NestIcon,
            NodeIcon,
            MongoIcon,
            PostgressIcon,
            MobXIcon,
            RxJsIcon,
            ExpressjsIcon,
            FirebaseIcon,
        ],
    },
    {
        id: 9,
        period: "2021",
        name: "Igor Sergienko",
        avatar: Igor,
        position: "Full stack",
        comments: [IgorComment1, IgorComment2, IgorComment3],
        technology: [
            JavascriptIcon,
            TypescriptIcon,
            ReduxIcon,
            ReactIcon,
            NestIcon,
            NodeIcon,
            MongoIcon,
            PostgressIcon,
            MobXIcon,
            RxJsIcon,
            ExpressjsIcon,
            FirebaseIcon,
        ],
    },
    {
        id: 10,
        period: "2021",
        name: "Igor Sergienko",
        avatar: Igor,
        position: "Full stack",
        comments: [IgorComment1, IgorComment2, IgorComment3],
        technology: [
            JavascriptIcon,
            TypescriptIcon,
            ReduxIcon,
            ReactIcon,
            NestIcon,
            NodeIcon,
            MongoIcon,
            PostgressIcon,
            MobXIcon,
            RxJsIcon,
            ExpressjsIcon,
            FirebaseIcon,
        ],
    },
];

export default function (_: NextApiRequest, res: NextApiResponse) {
    return res.status(200).send(TEAM);
}
