import React, { FC } from "react";
import styled from "styled-components";
import { TeamInterface } from "@/pages/api/team";
import { COLORS } from "@/lib/theme/color";
import { Flex, FlexColumn, FlexRow } from "@/anatomic/atoms/Flex";
import { Text, TEXT_SIZES, TEXT_WEIGHTS } from "@/anatomic/atoms/Text";
import UpworkIcon from "@/assets/icon/upwork.svg";
import StarsIcon from "@/assets/icon/stars.svg";
import TopIcon from "@/assets/icon/top.svg";

export const CardElem: FC<TeamInterface> = ({ name, avatar, position }) => {
    return (
        <FlexRow gap="30px" p="0px 90px">
            <FlexColumn gap="10px" w="30%">
                <Avatar image={avatar} />
                <Text
                    weight={TEXT_WEIGHTS.main}
                    color={COLORS.black}
                    size={TEXT_SIZES.s}
                    textTransform="uppercase"
                >
                    {name}
                </Text>
                <Text size={TEXT_SIZES.xs}>{position}</Text>
                <FlexRow gap="10px" alignItems="center">
                    <img src={UpworkIcon.src} />
                    <Text
                        weight={TEXT_WEIGHTS.main}
                        size={TEXT_SIZES.xxs}
                        color={COLORS.black}
                    >
                        5.0
                    </Text>
                </FlexRow>
                <img src={StarsIcon.src} />

                <FlexRow gap="10px" alignItems="center">
                    <img src={TopIcon.src} />
                    <Text size={TEXT_SIZES.xxxs}>TOP RATED PLUS</Text>
                </FlexRow>
            </FlexColumn>

            <FlexColumn w="100%" gap="20px">
                <FlexRow justifyContent="space-between" w="100%" gap="20px">
                    <Card>
                        <Text
                            color="#433C5C"
                            textTransform="uppercase"
                            textDecoration="underline"
                            weight={TEXT_WEIGHTS.medium}
                        >
                            Experience
                        </Text>
                        <Text>Mid-Senior Developer</Text>
                        <div>
                            <FlexRow w="100%">
                                <Text>0</Text>
                                <Text>1</Text>
                            </FlexRow>

                            <ProgressBar>
                                <ProgressIndicator width="25%" />
                            </ProgressBar>
                        </div>
                    </Card>
                    <Card>Expertise</Card>
                    <Card>Rate</Card>
                </FlexRow>
            </FlexColumn>
        </FlexRow>
    );
};

const Avatar = styled.div<{ image: any }>`
    height: 100px;
    width: 100px;
    border-radius: 50%;
    background: transparent no-repeat center;
    background-size: cover;
    background-image: url(${({ image }) => image});
`;
const Card = styled(FlexColumn)`
    width: 100%;
    height: 150px;
    padding: 20px;
    background: #ffffff;
    box-shadow: 0px 4px 20px rgba(37, 7, 67, 0.37);
    border-radius: 16px;
`;
const ProgressBar = styled.div`
    width: 100%;
    background: rgba(186, 170, 252, 0.83);
    border-radius: 16px;
    height: 7px;
`;
const ProgressIndicator = styled.div<{ width: string }>`
    width: ${({ width }) => width};
    background: #5f12ac;
    height: 7px;
    border-radius: 16px;
`;
