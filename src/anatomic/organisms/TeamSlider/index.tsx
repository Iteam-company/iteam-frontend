import { Desktop, Mobile } from "@/anatomic/molecules/ProjectSlide/styled";
import { SmoothSlider } from "../SmoothSlider";
import { FlexColumn } from "@/anatomic/atoms/Flex";
import { Button } from "@/anatomic/atoms/Button";
import { TEXT_SIZES, TEXT_WEIGHTS, Text } from "@/anatomic/atoms/Text";
import { ContactUsModal } from "../Modal";
import { FormElem } from "../Form/Form";
import { BUTTON_VARIANTS } from "@/anatomic/atoms/Button/util";
import { useWindowSize } from "@/hooks/useWindowSize";
import { FC, useState } from "react";
import { COLORS } from "@/lib/theme/color";

type Props = {
    team: Array<any>;
};

export const TeamSlider: FC<Props> = ({ team }) => {
    const [openDeskModal, setOpenDeskModal] = useState(false);
    const [openMobModal, setOpenMobModal] = useState(false);

    const size = useWindowSize();

    const closeDeskModal = () => {
        setOpenDeskModal(false);
    };

    const closeMobModal = () => {
        setOpenMobModal(false);
    };

    const openDeskModalFunc = () => {
        setOpenDeskModal(true);
    };

    const openMobModalFunc = () => {
        setOpenMobModal(true);
    };
    return (
        <>
            {team?.length ? (
                <>
                    <Desktop>
                        <SmoothSlider
                            slides={team}
                            isTwoColumn={false}
                            editionContent={
                                <FlexColumn
                                    position="absolute"
                                    style={
                                        size.width! > 1800
                                            ? {
                                                  bottom: "15vh",
                                                  left: "7vw",
                                              }
                                            : {
                                                  bottom: "2vh",
                                                  left: "10vw",
                                              }
                                    }
                                    zIndex="100"
                                >
                                    <Button
                                        clickFunc={openDeskModalFunc}
                                        gradient="94.1deg, rgba(93, 33, 171, 0.62) 13.49%, rgba(13, 112, 154, 0.55) 93.74%"
                                        variant={BUTTON_VARIANTS.gradient_link}
                                        label={
                                            <Text
                                                color={COLORS.dark}
                                                weight={TEXT_WEIGHTS.main}
                                                size={TEXT_SIZES.small.m}
                                            >
                                                Contact us
                                            </Text>
                                        }
                                    />
                                </FlexColumn>
                            }
                        />
                        <ContactUsModal
                            openModal={openDeskModal}
                            closeFunc={closeDeskModal}
                        >
                            <FormElem closeModal={closeDeskModal} />
                        </ContactUsModal>
                    </Desktop>
                    <Mobile>
                        <SmoothSlider
                            slides={team}
                            isTwoColumn={false}
                            navigation={false}
                            height={size.height! > 600 ? "85vh" : "90vh"}
                            editionContent={
                                <FlexColumn
                                    position="absolute"
                                    style={
                                        size.height! > 650
                                            ? {
                                                  bottom: "4.5vh",
                                                  left: "10vw",
                                              }
                                            : {
                                                  bottom: "1vh",
                                                  left: "10vw",
                                              }
                                    }
                                    zIndex="100"
                                >
                                    <Button
                                        clickFunc={openMobModalFunc}
                                        gradient="94.1deg, rgba(93, 33, 171, 0.62) 13.49%, rgba(13, 112, 154, 0.55) 93.74%"
                                        variant={BUTTON_VARIANTS.gradient_link}
                                        h={size.height! > 650 ? "46px" : "40px"}
                                        w={
                                            size.height! > 650
                                                ? "167px"
                                                : "140px"
                                        }
                                        label={
                                            <Text
                                                color={COLORS.dark}
                                                weight={TEXT_WEIGHTS.main}
                                                size={TEXT_SIZES.small.m}
                                            >
                                                Contact us
                                            </Text>
                                        }
                                    />
                                    <ContactUsModal
                                        openModal={openMobModal}
                                        closeFunc={closeMobModal}
                                    >
                                        <FormElem closeModal={closeMobModal} />
                                    </ContactUsModal>
                                </FlexColumn>
                            }
                        />
                    </Mobile>
                </>
            ) : null}
        </>
    );
};
