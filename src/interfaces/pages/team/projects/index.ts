export interface ProjectsInterface {
    id?: number;
    title: string;
    description: string;
    location: string;
    budget: string;
    technology: Technologies[];
    color: string;
    projectImg: any;
    img?: any;
    index: number;
    projectUrl?: string;
}

export interface Technologies {
    icon: "react" | "ts" | "js" | "angular";
    name: string;
    techIcon: any;
}
