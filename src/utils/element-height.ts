import { MutableRefObject, ReactNode } from "react";

export const getElementMaxHeight = (param: MutableRefObject<any>) => {
    let maxHeight = 0;
    if (param.current) {
        const children = Array.from(param.current.childNodes);
        children.forEach((child: any) => {
            const childHeight = child.clientHeight;
            if (childHeight > maxHeight) {
                maxHeight = childHeight;
            }
        });
    }

    return `${maxHeight}px` || 100;
};
