import { FC } from "react";
import { StyledTitle, StyledText, StyledBlockText } from "./styled";
import { Props, TEXT_TYPES, TEXT_WEIGHTS } from "./util";

export const Text: FC<Props> = ({
    type = TEXT_TYPES.text,
    color,
    weight = TEXT_WEIGHTS.normal,
    size,
    children = null,
    className = "",
    w = "auto",
    textAlign,
    textTransform,
    textDecoration,
    letterSpacing,
    whiteSpace,
    lineHeight,
    font,
    mobileSize,
    mobileLineHeight,
}) => {
    if (type === TEXT_TYPES.title) {
        return (
            <StyledTitle
                className={className}
                color={color}
                weight={weight}
                size={size}
                textAlign={textAlign}
                textTransform={textTransform}
                w={w}
                textDecoration={textDecoration}
                letterSpacing={letterSpacing}
                whiteSpace={whiteSpace}
                lineHeight={lineHeight}
                font={font}
                mobileSize={mobileSize}
                mobileLineHeight={mobileLineHeight}
            >
                {children}
            </StyledTitle>
        );
    }

    if (type === TEXT_TYPES.text) {
        return (
            <StyledText
                className={className}
                color={color}
                weight={weight}
                size={size}
                textAlign={textAlign}
                textTransform={textTransform}
                textDecoration={textDecoration}
                w={w}
                whiteSpace={whiteSpace}
                letterSpacing={letterSpacing}
                lineHeight={lineHeight}
                font={font}
                mobileSize={mobileSize}
                mobileLineHeight={mobileLineHeight}
             
            >
                {children}
            </StyledText>
        );
    }
    if (type === TEXT_TYPES.text_block) {
        return (
            <StyledBlockText
                className={className}
                color={color}
                weight={weight}
                size={size}
                textAlign={textAlign}
                textTransform={textTransform}
                textDecoration={textDecoration}
                w={w}
                whiteSpace={whiteSpace}
                letterSpacing={letterSpacing}
                lineHeight={lineHeight}
                font={font}
                mobileSize={mobileSize}
                mobileLineHeight={mobileLineHeight}
                
            >
                {children}
            </StyledBlockText>
        );
    }

    return null;
};
