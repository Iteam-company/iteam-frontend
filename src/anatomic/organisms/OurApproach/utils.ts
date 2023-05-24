export interface ApproachInterface {
    step: number;
    title: string;
    text: string;
    progress: number;
    color: string;
}
export interface PropsI {
    approaches: ApproachInterface[];
    title: string;
}
