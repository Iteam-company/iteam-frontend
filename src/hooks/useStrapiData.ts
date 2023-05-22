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

    const loginData = {
        email: 'iteam.comp.org@gmail.com',
        password: 'anonim0510A',
    };

    const getData = useCallback(async () => {
        try {
            setIsLoading(true);
        //     const login = await client.get('https://strapi-iteam-co-rwew.onrender.com/admin/auth/login', {
        //         headers: {
        //             Authorization: 'Bearer 75fba360a3768c9f35dfd44fcf9b5cba9369e61630a7ea85c147c735261e61b404488e4b59a1e7047ccbabd5ae75ab1c1389a1eda54284e116346f87e594b2f140aded7a5516cc722f4c0b53b7ea3130a4713a72c3ce9fcfd58af61850282747d4830018543260949e528818d76d36b1674a022578d78f37924f5b6e143610f4'
        //         }
        //     });
        //   console.log(login.config.headers.Authorization);
    
            const { data } = await client.get(
                `${process.env.REACT_APP_STRAPI_URL}${page}?populate=deep`
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
