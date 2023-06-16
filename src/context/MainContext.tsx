import client from "@/axios";
import { Pages, useStrapiData } from "@/hooks/useStrapiData";
import { log } from "console";
import { useIsomorphicLayoutEffect } from "framer-motion";
import { GetServerSideProps } from "next";
import React, { createContext, Dispatch, FC, useEffect, useState } from "react";

interface MainContextData {
    window?: Window | null;
    data: any
}

const getData = async (
    pages: Array<Pages>,
) => {
    try { 
        console.log(pages, "!!!!pages");
        // const { data } = await client.get(`${page}?populate=deep`);
    } catch (err) {
        console.log(err);
    } 
};

export const MainContext = createContext<MainContextData>({
    window: typeof window !== "undefined" ? window : null,
    data: {}
});

interface Props {
    children?: React.ReactNode
}

export const MainContextProvider: FC<Props> = ({children}) => {

    const [data, setData] = useState<any>({});
    const [isWindowExists, setIsWindowExists] = useState<boolean>();

    useIsomorphicLayoutEffect(() => {
        setIsWindowExists(typeof window !== "undefined");
        console.log("!!!", isWindowExists);
    }, [])

    console.log("!!!!!");


console.log(Object.values(Pages), "!!!!")

    return <MainContext.Provider value={{window: typeof window !== "undefined" ? window : null, data}}>
        {isWindowExists? children : <h1>Loading</h1>}
    </MainContext.Provider>
}

export const getServerSideProps: GetServerSideProps<{
    data: any
  }> = async () => {
    const pagesList = Object.values(Pages);
    const data = await getData(pagesList);
 
    return { props: { data } }
  }