import { FlexColumn } from "@/anatomic/atoms/Flex";
import { LogoAnimation } from "@/anatomic/atoms/LogoAnimation";
import { Banner } from "@/anatomic/molecules/Banner";
import BgImage1 from "@/assets/bgImage/home/bgImage1.svg";
import { BgImage } from "@/anatomic/atoms/BgImage";
import { HowWeWork } from "@/anatomic/organisms/HowWeWork";
import client from "@/axios";
import { useState, useCallback, useEffect } from "react";
import { HomeInterface } from "./api/home";

const Home = () => {
    const [data, setData] = useState<HomeInterface[]>([]);

    const getData = useCallback(async () => {
        try {
            const { data } = await client.get("/api/home");
            setData(data);
        } catch (err) {
            console.log(err);
        }
    }, []);

    useEffect(() => {
        getData();
    }, []);

    return (
        <FlexColumn
            alignItems="center"
            w="100%"
            h="100%"
            style={{ overflowX: "hidden" }}
        >
            <LogoAnimation />
            <FlexColumn
                alignItems="center"
                w="100%"
                h="100%"
                position="relative"
                style={{ overflow: "hidden" }}
            >
                <BgImage top={-50} right={-250} src={BgImage1.src} />
                <FlexColumn h="90vh" w="80%" justifyContent="center">
                    <Banner />
                </FlexColumn>
            </FlexColumn>

            <HowWeWork data={data} />
        </FlexColumn>
    );
};

export default Home;
