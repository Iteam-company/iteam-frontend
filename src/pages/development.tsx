import { Grid, GridItem } from "@/anatomic/atoms/Grid/grid";
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
import styled from "styled-components";

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
            <BgImages />

            <FlexRow
                justifyContent="center"
                w="100%"
                alignItems="center"
                p="100px 0 120px"
            >
                <Text
                    textAlign="center"
                    type={TEXT_TYPES.title}
                    color={COLORS.text}
                    size={TEXT_SIZES.l}
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
                            color={COLORS.text}
                            size={TEXT_SIZES.l}
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
                                            size={TEXT_SIZES.xs}
                                            type={TEXT_TYPES.text_block}
                                            weight={TEXT_WEIGHTS.main}
                                            color={COLORS.text}
                                        >
                                            {elem.title}
                                        </Text>
                                        <Text
                                            size={TEXT_SIZES.xxs}
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

export const Card = styled.div`
    height: 100%;
    width: 100%;
    box-shadow: 0 0 3px rgb(60 72 88 / 15%);
    border-radius: 6px;
    padding: 16px;
    box-sizing: border-box;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 16px;
    cursor: pointer;
    text-decoration: none;
`;

export const Icon = styled.img`
    width: 25px;
    height: 25px;
`;
export const GridElem = styled(Grid)`
    @media all and (max-width: 1400px) and (min-width: 1200px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
    padding: 40px 0 60px;
    width: 100%;
    align-items: start;
`;
const BgImages = styled.div``;
