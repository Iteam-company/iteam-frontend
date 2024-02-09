import React, {
    FC,
    PropsWithChildren,
    Ref,
    RefObject,
    createContext,
    useCallback,
    useState,
} from "react";

export interface ScrollElementsContextDataInterface {
    elements: Record<string, RefObject<HTMLElement>>;
    addScrollableElement?: (id: string, ref: RefObject<HTMLElement>) => void;
}

export const ScrollElementsContext =
    createContext<ScrollElementsContextDataInterface>({
        elements: {},
    });

export const ScrollElementsContextProvider: FC<PropsWithChildren> = ({
    children,
}) => {
    const [elements, setElements] = useState<
        Record<string, RefObject<HTMLElement>>
    >({});

    const addScrollableElement = useCallback(
        (id: string, ref: RefObject<HTMLElement>) => {
            setElements((elements) => ({ ...elements, [id]: ref }));
        },
        [],
    );

    return (
        <ScrollElementsContext.Provider
            value={{ elements, addScrollableElement }}
        >
            {children}
        </ScrollElementsContext.Provider>
    );
};
