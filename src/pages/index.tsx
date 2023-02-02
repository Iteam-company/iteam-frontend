import { Button } from "@/anatomic/atoms/Button";
import { BUTTON_VARIANTS } from "@/anatomic/atoms/Button/util";
import { FlexRow } from "@/anatomic/atoms/Flex";
import {
    Grid,
    GridItem,
    GridItemArea,
    GridWithTemplate,
} from "@/anatomic/atoms/Grid/grid";
import { Text } from "@/anatomic/atoms/Text";
import { TEXT_SIZES, TEXT_TYPES } from "@/anatomic/atoms/Text/util";
import { COLORS } from "@/lib/theme/color";

const Home = () => {
    return (
        <>
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
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
                impedit reiciendis facilis quisquam repellat id minus
                voluptatum! Error soluta id maxime cumque, obcaecati earum
                veritatis ipsa doloribus quasi delectus perferendis.
            </Text>
            <FlexRow w="400px" gap="20px">
                <Button
                    variant={BUTTON_VARIANTS.color}
                    label={
                        <Text lineHeight="1.5" color={COLORS.white}>
                            Read More
                        </Text>
                    }
                />
                <Button
                    variant={BUTTON_VARIANTS.change}
                    label={
                        <Text lineHeight="1.5" color={COLORS.black}>
                            Read More
                        </Text>
                    }
                />
            </FlexRow>
        </>
    );
};

export default Home;
