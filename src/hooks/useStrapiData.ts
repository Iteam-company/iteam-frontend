import client from "@/axios";
import { useCallback, useEffect, useState } from "react";

export enum Pages {
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

export const useStrapiData = (page: Pages | string) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [data, setData] = useState<any>();

    const getData = useCallback(async () => {
        try {
            setIsLoading(true);
            const { data } = await client.get(
                `${process.env.REACT_APP_STRAPI_URL}${page}?populate=deep`,
            );
            setData(data.data.attributes);
        } catch (err) {
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    }, [page]);

    useEffect(() => {
        getData();
    }, [page]);
    return [data, isLoading];
};
