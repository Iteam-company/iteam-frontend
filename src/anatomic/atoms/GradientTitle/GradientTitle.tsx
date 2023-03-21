import { Text } from "@/anatomic/atoms/Text";
import styled from "styled-components";

export const GradientTitle = styled(Text)<{ color: string }>`
    background-image: linear-gradient(${({ color }) => color});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;
