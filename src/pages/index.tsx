import { FlexColumn } from "@/anatomic/atoms/Flex";
import { Adaptive } from "@/anatomic/molecules/Adaptive";
import { Banner } from "@/anatomic/molecules/Banner";

const Home = () => {
    return (
        <>
            <FlexColumn alignItems="center" w="100%" h="calc(100vh - 100px)">
                <Banner />
            </FlexColumn>
            <Adaptive></Adaptive>
        </>
    );
};

export default Home;
