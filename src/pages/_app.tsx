import { Layout } from "@/anatomic/molecules/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { useLayoutEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function App({ Component, pageProps }: AppProps) {
    // useLayoutEffect(() => {
    //     gsap.registerPlugin(ScrollTrigger);
    // }, []);

    return (
        <AnimatePresence mode="wait" initial={false}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </AnimatePresence>
    );
}
