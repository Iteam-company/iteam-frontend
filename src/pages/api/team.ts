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

import AvatarIcon from "@/assets/team/avatar.jpeg";

import IgorComment1 from "@/assets/team/igor/comment_1.png";
import IgorComment2 from "@/assets/team/igor/comment_2.png";
import IgorComment3 from "@/assets/team/igor/comment_3.png";
import { StaticImageData } from "next/image";

export interface TeamInterface {
    name: string;
    avatar: StaticImageData;
    position: string;
    comments: StaticImageData[];
    technology: StaticImageData[];
}

const TEAM = [
    {
        name: "Vitaliy Kachan",
        avatar: AvatarIcon,
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
        name: "Igor Sergienko",
        avatar: AvatarIcon,
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
        name: "Igor Sergienko",
        avatar: AvatarIcon,
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
        name: "Igor Sergienko",
        avatar: AvatarIcon,
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
        name: "Igor Sergienko",
        avatar: AvatarIcon,
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
        name: "Igor Sergienko",
        avatar: AvatarIcon,
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
