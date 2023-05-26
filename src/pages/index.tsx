import { FlexColumn } from "@/anatomic/atoms/Flex";
import { Banner } from "@/anatomic/molecules/Banner";
import BgImage1 from "@/assets/bgImage/home/bgImage1.svg";
import BgImage2 from "@/assets/bgImage/home/bgImage2.svg";
import { BgImage } from "@/anatomic/atoms/BgImage";
import { HowWeWork } from "@/anatomic/organisms/HowWeWork";
import { OurCoreValues } from "@/anatomic/organisms/OurCoreValues";
import { BookingForm } from "@/anatomic/organisms/BookingForm";
import { Pages, useStrapiData } from "@/hooks/useStrapiData";
import { ExploreWithIteam } from "@/anatomic/organisms/ExploreWithIteam/ExploreWithIteam";
import { Adaptive } from "@/anatomic/molecules/Adaptive";
import { AdaptContainer } from "@/anatomic/atoms/Container/Container";

const Home = () => {
    const [data, isLoading] = useStrapiData(Pages.homepage);

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
                style={{ overflow: "hidden" }}
            >  <AdaptContainer w='90%'>
                <BgImage
                    src={BgImage1}
                    maxWidth={740}
                    right={-16}
                    mobileRight={-30}
                    mobileTop={24}
                    priority
                />
                <FlexColumn
                    h="calc(100vh - 100px)"
                    w="90%"
                    justifyContent="center"
                >
                    <Banner main={data?.main} />
                </FlexColumn>
              </AdaptContainer>
                <HowWeWork howWeWork={data?.howWeWork} />
            </FlexColumn>
            
            <FlexColumn w='100%' style={{background: 'linear-gradient(180deg, #170A2C 53.12%, #9F93BE 100%)'}}>
            <ExploreWithIteam  data={data?.exploreWithIteam}/>
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
