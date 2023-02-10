import { FlexColumn } from "@/anatomic/atoms/Flex";
import { TEXT_TYPES, Text } from "@/anatomic/atoms/Text";
import { TextTyping } from "@/anatomic/atoms/TextTyping";
import { COLORS } from "@/lib/theme/color";
import React from "react";
import styled from "styled-components";

export const Bunner = () => {
    return (
        <FlexColumn m="-50px 0 0 0 " justifyContent="center" h="100%" w="80%">
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
                        <TextContainer>
                            <Text
                                size="50px"
                                letterSpacing="2px"
                                color="#3b3952"
                                weight="700"
                                type={TEXT_TYPES.text_block}
                            >
                                Here at All Front, we always
                            </Text>
                            <TextTyping
                                textStyles={{
                                    size: "50px",
                                    letterSpacing: "2px",
                                    color: "#3b3952",
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
        </FlexColumn>
    );
};
const Container = styled.div`
    display: grid;
    grid-template-columns: 7px 1fr 7px 1fr 7px;
    grid-template-rows: 7px 1fr 7px 1fr 7px;
    width: 100%;
    height: 100%;
    grid-template-areas:
        "tl . tc . tr"
        ". content content content ."
        "lc content content content rc"
        ". content content content ."
        "lb . bc . br";
`;

const Block = styled.div<{ gridArea: string }>`
    grid-area: ${({ gridArea }) => gridArea};
    background-color: ${COLORS.activePath};
    height: 7px;
    width: 7px;
    z-index: 2;
`;

const ContentConteiner = styled.div`
    grid-area: content;
    width: 100%;
    height: 100%;
    border: 2px dashed ${COLORS.activePath};
    padding: 2.5px;
    position: relative;
    z-index: 0;
    margin: -5px;
`;

const Box = styled.div`
    border: 2px solid transparent;
    border-right-color: ${COLORS.activePath};
    border-bottom-color: ${COLORS.activePath};
    height: 24px;
    width: 24px;
    margin-left: -24px;
    margin-top: -24px;
    position: absolute;
`;
const Typewriter = styled.div`
    padding-top: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 262px;
    margin: 0 auto;
    width: 100%;
`;

const TextContainer = styled.div`
    padding: 40px;
    width: 100%;
    box-sizing: border-box;
`;
