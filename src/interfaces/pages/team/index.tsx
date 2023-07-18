import { CommentsI } from "@/anatomic/molecules/TeamItemCard/CommentSlider";

export interface TeamInterface {
    id?: number;
    name: string;
    avatar?: any;
    position: string;
    comments?: CommentsI[];
    technology?: Technology[];
    experience: { position: string; year: number };
    rate: number;
    upworkLink?: string;
    rateImage: string;
}

export interface Technology {
    text: string;
    short: string;
    id: number;
    techIcon: any;
}
