import { useEffect } from "react";

export const useDelayedScroll = (delay: number = 2000) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            window.scrollY === 0 &&
                scrollTo({ top: window.innerHeight, behavior: "smooth" });
        }, delay);

        const clearOnScroll = () => clearTimeout(timer);
        window.addEventListener("scroll", clearOnScroll);
        return removeEventListener("scroll", clearOnScroll);
    }, []);
};
