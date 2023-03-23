import { Layout } from "@/anatomic/molecules/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { useLayoutEffect } from "react";
import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export default function App({ Component, pageProps }: AppProps) {
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    }, []);

    return (
        <AnimatePresence mode="wait" initial={false}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </AnimatePresence>
    );
}
