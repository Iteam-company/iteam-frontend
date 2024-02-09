import { Layout } from "@/anatomic/molecules/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";

import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomLayoutEffect";
import { LogoAnimation } from "@/anatomic/atoms/LogoAnimation";
import Head from "next/head";
import { useEffect } from "react";
import { ResponsiveContextProvider } from "@/contexts/ResponsiveContext";
import { ScrollElementsContextProvider } from "@/contexts/ScrollElementsContext";

export default function App({ Component, pageProps }: AppProps) {
    useIsomorphicLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    }, []);

    return (
        <>
            <Head>
                <title>iTeam</title>
            </Head>
            <AnimatePresence mode="wait" initial={false}>
                <ResponsiveContextProvider>
                    <ScrollElementsContextProvider>
                        <Layout>{<Component {...pageProps} />}</Layout>
                    </ScrollElementsContextProvider>
                </ResponsiveContextProvider>
            </AnimatePresence>
        </>
    );
}
