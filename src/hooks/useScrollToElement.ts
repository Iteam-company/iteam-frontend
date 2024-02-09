import { ScrollElementsContext } from "@/contexts/ScrollElementsContext";
import { RefObject, useContext } from "react";

const useScrollToElement = (
    id: string,
    options: ScrollIntoViewOptions = { block: "center", behavior: "smooth" },
) => {
    const { elements } = useContext(ScrollElementsContext);

    return () => {
        const elementRef: RefObject<HTMLElement> =
            elements[id as keyof typeof elements];

        elementRef?.current?.scrollIntoView(options);
    };
};

export default useScrollToElement;
