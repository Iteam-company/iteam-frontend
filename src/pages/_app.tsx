import { Layout } from "@/anatomic/molecules/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <AnimatePresence mode="wait" initial={false}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </AnimatePresence>
    );
}
