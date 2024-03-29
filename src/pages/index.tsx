import { FlexColumn, FlexForIos } from "@/anatomic/atoms/Flex";
import Head from "next/head";
import { Banner } from "@/anatomic/molecules/Banner";
import BgImage1 from "@/assets/bgImage/home/homeBg.svg";
import BgImage2 from "@/assets/bgImage/home/bgImage2.webp";
import bgMain from "@/assets/bgImage/home/bgMain.svg";
import { BgImage } from "@/anatomic/atoms/BgImage";
import { HowWeWork } from "@/anatomic/organisms/HowWeWork";
import { OurCoreValues } from "@/anatomic/organisms/OurCoreValues";
import { BookingForm } from "@/anatomic/organisms/BookingForm";
import { Pages } from "@/hooks/useStrapiData";
import { AdaptContainer } from "@/anatomic/atoms/Container/Container";
import { useWindowSize } from "@/hooks/useWindowSize";
import { AddaptFoIbg, AddaptTextMain } from "@/anatomic/atoms/Addapt/addapt";
import Image from "next/image";
import Script from "next/script";
import { ExploreWithIteam } from "@/anatomic/organisms/ExploreWithIteam";
import { GetServerSideProps, InferGetServerSidePropsType } from "next/types";
import { fetchDataPage } from "@/utils/fetchDataPage";

const Home = ({
    data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const size = useWindowSize();

    let widthSize;

    if (size.width! < 992 && size.height! > 630) {
        widthSize = "calc(54vh - 100px)";
    } else if (size.width! < 992 && size.height! < 630) {
        widthSize = "calc(80vh - 100px)";
    } else {
        widthSize = "calc(100vh - 100px)";
    }

    if (!data) {
        return null;
    }

    return (
        <>
            <Head>
                <title>iTeam</title>
            </Head>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.REACT_APP_GOOGLE_ANALYTICS}`}
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.REACT_APP_GOOGLE_ANALYTICS}');
                `}
            </Script>

            <FlexColumn
                alignItems="center"
                w="100%"
                h="100%"
                style={{ overflow: "hidden", position: "relative" }}
            >
                <FlexColumn
                    alignItems="center"
                    w="100%"
                    h="100%"
                    position="relative"
                >
                    <AddaptFoIbg style={{ position: "absolute" }}>
                        <Image
                            src={bgMain}
                            alt="mobile_bg"
                            priority={true}
                            quality={100}
                        />
                    </AddaptFoIbg>
                    <AdaptContainer w="90%" h="visible">
                        <BgImage
                            src={data.main.bgMain.data[0].attributes.url}
                            maxWidth={size.width! < 1200 ? 700 : 820}
                            width={820}
                            right={size.width! > 1800 ? -14 : -20}
                            bottom={34}
                            mobileRight={-24}
                            mobileTop={14}
                            height={400}
                            priority={true}
                            imageUrl={BgImage1.src}
                        />

                        <FlexColumn
                            h={widthSize}
                            w="90%"
                            justifyContent="center"
                        >
                            <AddaptTextMain>
                                <Banner main={data?.main} />
                            </AddaptTextMain>
                        </FlexColumn>
                    </AdaptContainer>
                    <HowWeWork howWeWork={data?.howWeWork} />
                </FlexColumn>

                <FlexForIos
                    w="100%"
                    style={{
                        background:
                            "-moz-linear-gradient(180deg, #170A2C 53.12%, #9F93BE 100%)",
                    }}
                >
                    <ExploreWithIteam data={data?.exploreWithIteam} />
                </FlexForIos>
                <OurCoreValues coreValue={data?.coreValues} />
                <FlexColumn
                    w="100%"
                    h="100%"
                    position="relative"
                    p={size.width! < 800 ? "12% 0 100px " : "0 0 100px"}
                >
                    <BookingForm />

                    <BgImage
                        src={BgImage2}
                        maxWidth={740}
                        right={-5}
                        mobileRight={-10}
                        mobileTop={35}
                        priority={true}
                        quality={60}
                    />
                </FlexColumn>
            </FlexColumn>
        </>
    );
};

export const getServerSideProps: GetServerSideProps<{
    data: any;
}> = async () => {
    const data = await fetchDataPage<any>(Pages.homepage);

    return { props: { data } };
};

export default Home;
