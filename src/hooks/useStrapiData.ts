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

export const useStrapiData = (page?: Pages | string, depen?: any) => {
    const [data, setData] = useState<any>();
    const [isAnimate, setIsAnimate] = useState(false);

    const getData = useCallback(async () => {
        try {
            setIsAnimate(true);

            const { data } = await client.get(`${page}?populate=deep`);
            setData(data.data.attributes);

            return;
        } catch (err) {
            console.log(err);
        } finally {
            setIsAnimate(false);
        }
    }, [page, depen]);

    useEffect(() => {
        getData();
    }, [depen]);

    return [data, isAnimate];
};
