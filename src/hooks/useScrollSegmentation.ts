import { Ref } from "react";

interface Arguments {
    elementRef: any;
    min?: number;
    max?: number;
    segmentWidth: number;
}

export const useScrollSegmentation = ({
    min,
    max,
    segmentWidth,
    elementRef,
}: Arguments) => {
    const scroll = (segment: number) => {
        elementRef!.current!.scroll({
            behavior: "smooth",
            top: segmentWidth * segment,
        });
    };

    return [scroll];
};
