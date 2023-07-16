import client from "@/axios";
import { Router } from "next/router";
import {
    useCallback,
    useEffect,
    useLayoutEffect,
    useMemo,
    useState,
} from "react";

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

export const useStrapiData = (page?: Pages | string) => {
    const [data, setData] = useState<any>();
    const [isAnimate, setIsAnimate] = useState(false);

    const getData = useCallback(
        async (initialPage = page) => {
            try {
                setIsAnimate(true);

                const { data } = await client.get(
                    `${initialPage || page}?populate=deep`,
                );

                initialPage === page && setData(data.data.attributes);

                console.log(data.data.attributes, "DATA!!!");
                return data.data.attributes;
            } catch (err) {
                console.log(err);
            } finally {
                setIsAnimate(false);
            }
        },
        [page],
    );

    useEffect(() => {
        getData();
    }, []);

    return [data, isAnimate, setData, getData];
};
