import { GridItem } from "@/anatomic/atoms/Grid/grid";
import {
    LETTER_SPACING,
    Text,
    TEXT_SIZES,
    TEXT_TYPES,
    TEXT_WEIGHTS,
} from "@/anatomic/atoms/Text";
import { COLORS } from "@/lib/theme/color";
import React, { useCallback, useEffect, useState } from "react";
import { Adaptive } from "@/anatomic/molecules/Adaptive";
import { FlexColumn, FlexRow } from "@/anatomic/atoms/Flex";
import client from "@/axios";
import { InfoInterface } from "./api/technologes";
import { motion } from "framer-motion";
import { Card, Icon, GridElem } from "@/lib/pageStyles/developmentStyles";

const Development = () => {
    const [info, setInfo] = useState<InfoInterface[]>([]);

    const getInfo = useCallback(async () => {
        try {
            const { data } = await client.get("/api/technologes");
            setInfo(data);
        } catch (err) {
            console.log(err);
        }
    }, []);

    useEffect(() => {
        getInfo();
    }, []);

    return (
        <Adaptive type="column">
            <FlexRow
                justifyContent="center"
                w="100%"
                alignItems="center"
                p="100px 0 120px"
            >
                <Text
                    textAlign="center"
                    type={TEXT_TYPES.title}
                    color={COLORS.textPrimary}
                    size={TEXT_SIZES.medium.m}
                    letterSpacing={LETTER_SPACING.s}
                    weight={TEXT_WEIGHTS.main}
                >
                    Technology we use
                </Text>
            </FlexRow>

            {info.map((item) => (
                <FlexColumn justifyContent="center" w="100%" key={item.title}>
                    <FlexRow justifyContent="center" w="100%">
                        <Text
                            textAlign="center"
                            type={TEXT_TYPES.title}
                            color={COLORS.textPrimary}
                            size={TEXT_SIZES.medium.m}
                        >
                            {item.title}
                        </Text>
                    </FlexRow>
                    <GridElem
                        mobileColumnsCount="1"
                        tabletColumnsCount="2"
                        desktopColumnsCount="4"
                        desktopGridGap="20px"
                        tabletGridGap="20px"
                        mobileGridGap="20px"
                    >
                        {item.info.map((elem) => (
                            <GridItem key={elem.title}>
                                <Card
                                    as={motion.a}
                                    href={elem.href}
                                    whileHover={{
                                        scale: 1.05,
                                        boxShadow:
                                            "0 5px 13px rgba(60 72 70 0.2)",
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Icon src={elem.icon.src} />
                                    <FlexColumn
                                        alignItems="flex-start"
                                        h="100%"
                                    >
                                        <Text
                                            size={TEXT_SIZES.small.l}
                                            type={TEXT_TYPES.text_block}
                                            weight={TEXT_WEIGHTS.main}
                                            color={COLORS.textPrimary}
                                        >
                                            {elem.title}
                                        </Text>
                                        <Text
                                            size={TEXT_SIZES.small.m}
                                            type={TEXT_TYPES.text_block}
                                        >
                                            {elem.description}
                                        </Text>
                                    </FlexColumn>
                                </Card>
                            </GridItem>
                        ))}
                    </GridElem>
                </FlexColumn>
            ))}
        </Adaptive>
    );
};

export default Development;
