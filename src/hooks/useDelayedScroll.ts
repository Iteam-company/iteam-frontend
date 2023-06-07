import { useRouter } from "next/router";
import { useEffect } from "react";

const routes = ["/team", "/projects"];
let timers: NodeJS.Timeout[] = [];

export const useDelayedScroll = (delay: number, fraction: number | null = 1) => {
    const { asPath } = useRouter();

    useEffect(() => {
        const isRouteIncludesAnimations = routes.includes(asPath);

        const timer = setTimeout(() => {
            window.scrollY === 0 &&
                isRouteIncludesAnimations &&
                scrollTo(fraction ? { top: 400, behavior: "smooth" } : { top: window.innerHeight , behavior: "smooth" });
        }, delay);

        timers.push(timer);

        const clearTimeouts = () => {
            timers.forEach((t) => clearTimeout(t));
            timers = timers.filter((t) => false);
        };

        const clearOnScroll = () => clearTimeouts();
        window.addEventListener("scroll", clearOnScroll);
        !isRouteIncludesAnimations && clearTimeouts();

        return removeEventListener("scroll", clearOnScroll);
    }, [asPath]);
};
