import React, { FC } from "react";
import { Input } from "./styled";

interface Props {
    max: number;
    min: number;
    step: number;
    value: string;
    onChange: any;
    translateY: string;
}

export const InputRange: FC<Props> = ({
    max,
    min,
    step,
    value,
    onChange,
    translateY = "-130px",
}) => {
    return (
        <Input
            type="range"
            max={max}
            min={min}
            step={step}
            value={value}
            onChange={(e) => onChange(e)}
            translateY={translateY}
        />
    );
};
