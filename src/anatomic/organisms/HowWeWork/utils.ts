interface HowWeWorkI {
    title: string;
    explanationWork: ExplanationWorkI[];
}
interface ExplanationWorkI {
    step: string;
    title: string;
    text: string;
}
export interface PropsI {
    howWeWork: HowWeWorkI | null;
}
export interface HomeInterface {
    step: string;
    title: string;
    text: string;
}
