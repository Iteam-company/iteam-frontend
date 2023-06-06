import { FlexColumn } from "@/anatomic/atoms/Flex";
import { Banner } from "@/anatomic/molecules/Banner";
import BgImage1 from "@/assets/bgImage/home/back.svg";
import BgImage2 from "@/assets/bgImage/home/bgImage2.svg";
import bgMain from "@/assets/bgImage/home/bgMain.svg";
import { BgImage } from "@/anatomic/atoms/BgImage";
import { HowWeWork } from "@/anatomic/organisms/HowWeWork";
import { OurCoreValues } from "@/anatomic/organisms/OurCoreValues";
import { BookingForm } from "@/anatomic/organisms/BookingForm";
import { Pages, useStrapiData } from "@/hooks/useStrapiData";
import { ExploreWithIteam } from "@/anatomic/organisms/ExploreWithIteam/ExploreWithIteam";
import { Adaptive } from "@/anatomic/molecules/Adaptive";
import { AdaptContainer } from "@/anatomic/atoms/Container/Container";
import { useWindowSize } from "@/hooks/useWindowSize";
import { AddaptFoIbg, AddaptTextMain } from "@/anatomic/atoms/Addapt/addapt";
import Image from "next/image";

const Home = () => {
    const [data, isLoading] = useStrapiData(Pages.homepage);
    const size = useWindowSize();

    const widthSize =
        size.width! < 992 ? "calc(50vh - 100px)" : "calc(100vh - 100px)";
    const widthBg = size.width! > 992 || size.width! < 1160 ? 640 : 840;

    if (!data) return null;

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
                style={{ overflow: "hidden", position: "relative" }}
            >
                <AddaptFoIbg style={{ position: "absolute" }}>
                    <Image src={bgMain} alt="bg" />
                </AddaptFoIbg>
                <AdaptContainer
                    w="90%"
                    style={{ position: "relative" }}
                    h="visible"
                >
                    <BgImage
                        src={BgImage1}
                        maxWidth={720}
                        right={size.width! > 1800 ? -28 : -20}
                        bottom={size.width! > 1800 ? -20 : -38}
                        mobileRight={-24}
                        mobileTop={14}
                        priority
                    />
                    <FlexColumn h={widthSize} w="90%" justifyContent="center">
                        <AddaptTextMain>
                            <Banner main={data?.main} />
                        </AddaptTextMain>
                    </FlexColumn>
                </AdaptContainer>
                <HowWeWork howWeWork={data?.howWeWork} />
            </FlexColumn>

            <FlexColumn
                w="100%"
                style={{
                    background:
                        "linear-gradient(180deg, #170A2C 53.12%, #9F93BE 100%)",
                }}
            >
                <ExploreWithIteam data={data?.exploreWithIteam} />
            </FlexColumn>
            <OurCoreValues coreValue={data?.coreValues} />
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
