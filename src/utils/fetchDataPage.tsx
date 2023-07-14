import client from "../axios";
import { Pages } from "@/hooks/useStrapiData";

export const fetchDataPage = async <T,>(page: Pages | string): Promise<T> => {
    const { data } = await client.get(`${page}?populate=deep`);

    return data.data.attributes;
};
