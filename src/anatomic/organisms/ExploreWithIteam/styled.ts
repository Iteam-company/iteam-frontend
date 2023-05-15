import { StaticImageData } from "next/image";
import styled from "styled-components";

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
`

interface BoxProps {
    bg?: string;
    backgroundImage?: string;
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

export  const BoxForText = styled.div`
  margin-top: 50px;
  padding-left: 24px;
  position: relative;
  z-index: 2;
`


export const BoxForPreview = styled.div`
  position: absolute;
  right: 35px;
  bottom: 30px;
  z-index: 2;
`
export const BoxForSpot = styled.div`
  background: rgba(241, 241, 241, 1);
  filter: blur(100px);
  width: 40%;
  height: 40%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`