import { FlexColumn } from "@/anatomic/atoms/Flex";
import { ProjectsInterface } from "@/pages/api/projects";
import { FC } from "react";
import styled from "styled-components";
import { ProjectSlide } from "./ProjectSlide";
import { ProjectSlideMobile } from "./ProjectSlideMobile";

export const Slide: FC<ProjectsInterface> = (props) => {
    return (
        <Container>
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
        </Container>
    );
};

const Mobile = styled(FlexColumn)`
    @media all and (min-width: 900px) {
        display: none;
    }
`;
const Desktop = styled(FlexColumn)`
    @media all and (max-width: 899px) {
        display: none;
    }
`;
const Container = styled.div`
    margin: 0 50px;
    height: 80vh;
    padding: 20px 0;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 24px;
    @media all and (max-width: 899px) {
        margin: 0 10px;
    }
`;
