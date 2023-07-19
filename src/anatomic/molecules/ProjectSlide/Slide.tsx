import { FC } from "react";
import { ProjectSlide } from "./ProjectSlide";
import { ProjectSlideMobile } from "./ProjectSlideMobile";
import { Desktop, Mobile, SliderBox } from "./styled";
import { useWindowSize } from "@/hooks/useWindowSize";
import { ProjectsInterface } from "@/interfaces/pages/team/projects";

export const Slide: FC<ProjectsInterface> = (props) => {
    const size = useWindowSize();
    return (
        <>
            <Mobile
                justifyContent="center"
                alignItems="end"
                w="100%"
                h="100%"
                gap="20px"
                m={size.width! < 401 ? "0 0 0 5px" : "0 0 0 0"}
            >
                <ProjectSlideMobile {...props} />
            </Mobile>
            <Desktop
                justifyContent="center"
                alignItems="end"
                w="100%"
                h="100%"
                gap="40px"
            >
                <SliderBox>
                    <ProjectSlide {...props} />
                </SliderBox>
            </Desktop>
        </>
    );
};
