import client from "@/axios";
import { Dispatch, useCallback, useEffect, useState } from "react";

export  enum Pages {
    homepage = "homepage",
    company = "company",
    portfolio = "portfolio",
    projectItemDetails = "project-item-details",
    outsourcing = "outsourcing",
    outstaffing = "outstaffing",
    development = "development",
    contactUs = "contact-us",
    headerFooter = "header-footer",
}

const getData = async (
    setIsLoading: Dispatch<boolean>,
    setData: Dispatch<any>,
    page: Pages | string,
) => {
    try {
        setIsLoading(true);
        const { data } = await client.get(`${page}?populate=deep`);
        setData(data.data.attributes);
    } catch (err) {
        console.log(err);
    } finally {
        setIsLoading(false);
    }
};

export const useStrapiData = (page: Pages | string): [any, boolean] => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [data, setData] = useState<any>();

    useEffect(() => {
        
        getData(setIsLoading, setData, page);
    }, [page]);



    return typeof window !== "undefined" ? [data, isLoading] : [null, true];
};  
