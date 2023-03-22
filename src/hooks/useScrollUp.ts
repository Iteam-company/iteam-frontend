import { useEffect, useState } from "react";

interface Arguments {
    useCase?: "default" | "button";
    onScroll?: () => void;
}

const useScrollUp = ({ useCase = "default", onScroll }: Arguments) => {
    const [scroll, setScroll] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const scrollListener = () => {
            setScroll({ x: window.scrollX, y: window.scrollY });
            onScroll && onScroll();
        };
        window.addEventListener("scroll", scrollListener);
        return () => window.removeEventListener("scroll", scrollListener);
    }, []);

    if (typeof window !== "undefined" && !onScroll) {
        const onScrollTop = (behavior?: ScrollBehavior, y = 0) =>
            window.scrollTo({ top: y, behavior: behavior || "smooth" });
        if (useCase === "button") {
            return { onScrollTop, scroll };
        }

        onScrollTop();
    }
    return { onScrollTop: () => {}, scroll };
};
export default useScrollUp;
