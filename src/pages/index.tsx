import { FlexColumn } from "@/anatomic/atoms/Flex";
import { Banner } from "@/anatomic/molecules/Banner";
import BgImage1 from "@/assets/bgImage/home/bgImage1.svg";
import BgImage2 from "@/assets/bgImage/home/bgImage2.svg";
import { BgImage } from "@/anatomic/atoms/BgImage";
import { HowWeWork } from "@/anatomic/organisms/HowWeWork";
import client from "@/axios";
import { useState, useCallback, useEffect } from "react";
import { CoreValueInterface, HomeInterface } from "./api/home";
import { OurCoreValues } from "@/anatomic/organisms/OurCoreValues";
import { BookingForm } from "@/anatomic/organisms/BookingForm";

export interface HowWeWorkInterface {
    title: string;
    explanationWork: ExplanationWork[];
}
interface ExplanationWork {
    step: string;
    title: string;
    text: string;
}

const Home = () => {
    const [howWeWork, setHowWeWork] = useState<HowWeWorkInterface[]>([]);
    const [info, setInfo] = useState<CoreValueInterface[]>([]);

    const getData = useCallback(async () => {
        try {
            // const { data } = await client.get("/api/home");
            const { data } = await client.get(
                "http://localhost:1337/api/homepage?populate=deep",
            );
            console.log(data.data.attributes.howWeWork);

            setHowWeWork(data.data.attributes.howWeWork);
            // setInfo(data.info);
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
            style={{ overflow: "hidden" }}
        >
            <FlexColumn
                alignItems="center"
                w="100%"
                h="100%"
                position="relative"
                style={{ overflow: "hidden" }}
            >
                <BgImage
                    src={BgImage1}
                    maxWidth={740}
                    right={-10}
                    mobileRight={-30}
                    mobileTop={24}
                    priority
                />
                <FlexColumn
                    h="calc(100vh - 100px)"
                    w="90%"
                    justifyContent="center"
                >
                    <Banner />
                </FlexColumn>

                <HowWeWork howWeWork={howWeWork} />
            </FlexColumn>

            <OurCoreValues info={info} />

            <FlexColumn w="100%" h="100%" position="relative" p="0 0 100px">
                <BookingForm />
                <BgImage
                    src={BgImage2}
                    maxWidth={740}
                    right={-5}
                    mobileRight={-10}
                    mobileTop={35}
                    loading="lazy"
                />
            </FlexColumn>
        </FlexColumn>
    );
};

export default Home;
