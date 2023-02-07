import { FlexColumn } from "@/anatomic/atoms/Flex";
import { Text } from "@/anatomic/atoms/Text";
import { TEXT_SIZES, TEXT_TYPES } from "@/anatomic/atoms/Text/util";
import { Adaptive } from "@/anatomic/molecules/Adaptive";

const Home = () => {
    return (
        <Adaptive>
            <FlexColumn>
                {/* <Grid
                mobileColumnsCount="1"
                tabletColumnsCount="2"
                desktopColumnsCount="7"
                desktopGridGap="10px"
            >
                <GridItem>
                    <Text type={TEXT_TYPES.text} color="green">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Beatae impedit reiciendis facilis quisquam
                        repellat id minus voluptatum! Error soluta id maxime
                        cumque, obcaecati earum veritatis ipsa doloribus quasi
                        delectus perferendis.
                    </Text>
                </GridItem>
                <GridItem>
                    <Text type={TEXT_TYPES.text} color="green">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Beatae impedit reiciendis facilis quisquam
                        repellat id minus voluptatum! Error soluta id maxime
                        cumque, obcaecati earum veritatis ipsa doloribus quasi
                        delectus perferendis.
                    </Text>
                </GridItem>
                <GridItem>
                    <Text type={TEXT_TYPES.text} color="green">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Beatae impedit reiciendis facilis quisquam
                        repellat id minus voluptatum! Error soluta id maxime
                        cumque, obcaecati earum veritatis ipsa doloribus quasi
                        delectus perferendis.
                    </Text>
                </GridItem>
            </Grid> */}
                {/* <GridWithTemplate
                mobileColumnsCount="1"
                tabletColumnsCount="2"
                desktopColumnsCount="3"
                desktopGridGap="10px"
                templateAreasDesktop='"text0 . text1" ". text2 ."'
                templateAreasMobile=""
                templateAreasTablet=""
            >
                <GridItemArea areaName="text1">
                    <Text type={TEXT_TYPES.text} color="green">
                        text1
                    </Text>
                </GridItemArea>
                <GridItemArea areaName="text2">
                    <Text type={TEXT_TYPES.text} color="green">
                        text2
                    </Text>
                </GridItemArea>
                <GridItemArea areaName="text0">
                    <Text type={TEXT_TYPES.text} color="green">
                        text0
                    </Text>
                </GridItemArea>
            </GridWithTemplate> */}
                <Text type={TEXT_TYPES.title} size={TEXT_SIZES.xxl}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.s
                    Beatae impedit reiciendis facilis quisquam repellat id minus
                    voluptatum! Error soluta id maxime cumque, obcaecati earum
                    veritatis ipsa doloribus quasi delectus perferendis.
                </Text>
                <Text type={TEXT_TYPES.title} size={TEXT_SIZES.xxl}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.s
                    Beatae impedit reiciendis facilis quisquam repellat id minus
                    voluptatum! Error soluta id maxime cumque, obcaecati earum
                    veritatis ipsa doloribus quasi delectus perferendis.
                </Text>
                <Text type={TEXT_TYPES.title} size={TEXT_SIZES.xxl}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.s
                    Beatae impedit reiciendis facilis quisquam repellat id minus
                    voluptatum! Error soluta id maxime cumque, obcaecati earum
                    veritatis ipsa doloribus quasi delectus perferendis.
                </Text>
                <Text type={TEXT_TYPES.title} size={TEXT_SIZES.xxl}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.s
                    Beatae impedit reiciendis facilis quisquam repellat id minus
                    voluptatum! Error soluta id maxime cumque, obcaecati earum
                    veritatis ipsa doloribus quasi delectus perferendis.
                </Text>
                <Text type={TEXT_TYPES.text} color="green">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Beatae impedit reiciendis facilis quisquam repellat id minus
                    voluptatum! Error soluta id maxime cumque, obcaecati earum
                    veritatis ipsa doloribus quasi delectus perferendis.
                </Text>
            </FlexColumn>
        </Adaptive>
    );
};

export default Home;
