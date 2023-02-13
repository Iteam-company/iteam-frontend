import { FlexColumn } from "@/anatomic/atoms/Flex";
import { TEXT_TYPES, Text } from "@/anatomic/atoms/Text";
import { TextTyping } from "@/anatomic/atoms/TextTyping";
import React from "react";
import {
    Block,
    Box,
    Container,
    ContentConteiner,
    GridLineH,
    GridLineV,
    Typewriter,
    TextContainer,
} from "./styled";

export const Bunner = () => {
    return (
        <FlexColumn
            justifyContent="center"
            h="100%"
            w="100%"
            position="relative"
        >
            <GridLineH>
                <Typewriter>
                    <Container>
                        <Block gridArea="tl">
                            <Box />
                        </Block>
                        <Block gridArea="tc" />
                        <Block gridArea="tr" />
                        <Block gridArea="lb" />
                        <Block gridArea="bc" />
                        <Block gridArea="br" />
                        <Block gridArea="rc" />
                        <Block gridArea="lc" />
                        <ContentConteiner>
                            <GridLineV />
                            <TextContainer>
                                <Text
                                    size="50px"
                                    letterSpacing="2px"
                                    color="black"
                                    weight="700"
                                    type={TEXT_TYPES.text_block}
                                >
                                    Here at All Front, we always
                                </Text>
                                <TextTyping
                                    textStyles={{
                                        size: "50px",
                                        letterSpacing: "2px",
                                        color: "#black",
                                        weight: "700",
                                        type: TEXT_TYPES.text_block,
                                    }}
                                    text={[
                                        "test out work.",
                                        "put your users first.",
                                        "make you feel at easy.",
                                        "deliver on time.",
                                        "strive of simplicity.",
                                    ]}
                                />
                            </TextContainer>
                        </ContentConteiner>
                    </Container>
                </Typewriter>
            </GridLineH>
        </FlexColumn>
    );
};
