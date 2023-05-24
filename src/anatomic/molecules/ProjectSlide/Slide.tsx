import { FC } from "react";
import { ProjectSlide } from "./ProjectSlide";
import { ProjectSlideMobile } from "./ProjectSlideMobile";
import { Desktop, Mobile } from "./styled";
import { ProjectsInterface } from "@/pages/projects";

export const Slide: FC<ProjectsInterface> = (props) => {
    return (
        <>
            <Mobile
                justifyContent="center"
                alignItems="end"
                w="100%"
                h="100%"
                gap="20px"
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
                <ProjectSlide {...props} />
            </Desktop>
        </>
    );
};
