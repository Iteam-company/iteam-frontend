import { motion } from "framer-motion";
import { StaticImageData } from "next/image";
import styled from "styled-components";
import { StringLiteral } from "typescript";

interface GridBoxProps {
    gridTemplateColumn?: string;
    gridTemplateRow?: string;
    gridColumnGap?: string;
    gridRowGap?: string;
}

export const GridBox = styled.div<GridBoxProps>`
    width: 100%;
    display: grid;
    grid-template-columns: ${props => props.gridTemplateColumn|| '1fr'};
    grid-template-rows: ${props => props.gridTemplateRow || '1fr'};
    grid-column-gap: ${props => props.gridColumnGap || '0'};
    grid-row-gap: ${props => props.gridRowGap || '0'};

    & {
      @media(max-width: 1024px) {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(6, 525px);
      }
    }
`

interface BoxProps {
    bg?: string;
    backgroundImage?: string;
}

interface BoxForTextSpotProps {
  t?: string;
  l?: string;
}

export const Box = styled.div<BoxProps>`
  position: relative;
  border-radius: 8px;
  background: ${props => props.backgroundImage || 'none'};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center right;
  overflow: hidden;

  &::before {
    background: ${props => props.bg || 'none'};
    border-radius: 8px;
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    width: 100%;
    z-index: 1;
    overflow: hidden;
  }
}`

export const BoxForText = styled.div`
  margin-top: 28px;
  padding-left: 24px;
  position: relative;
  z-index: 3;
`

export const BoxForPreview = styled.div`
  position: absolute;
  right: 35px;
  bottom: 30px;
  z-index: 2;
`

export const BoxForSpot = styled.div<BoxForTextSpotProps>`
  background: rgba(241, 241, 241, 1);
  filter: blur(100px);
  width: 40%;
  height: 40%;
  position: absolute;
  top: ${props => props.t || '30%'};
  left: ${props => props.l || '30%'};
  z-index: 2;
`

export const BoxHover = styled(motion.div)<BoxProps>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${props => props.backgroundImage || 'none'};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  z-index: 3;
  background-origin: context-box;
`