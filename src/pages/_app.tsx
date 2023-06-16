import { Layout } from "@/anatomic/molecules/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomLayoutEffect";
import { LogoAnimation } from "@/anatomic/atoms/LogoAnimation";
import { MainContextProvider } from "@/context/MainContext";

export default function App({ Component, pageProps }: AppProps) {
    useIsomorphicLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    }, []);

    return (
        <AnimatePresence mode="wait" initial={false}>
            <MainContextProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </MainContextProvider>
        </AnimatePresence>
    );
}
