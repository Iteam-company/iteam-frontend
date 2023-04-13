import React, { FC, Ref, memo } from "react";
import { Input } from "./styled";

interface Props {
    max: number;
    min: number;
    step: number;
    value?: string;
    onChange: any;
    translateY?: string;
    inputRef?: Ref<HTMLInputElement>;
    id?: string;
}

export const InputRange: FC<Props> = memo(
    ({
        max,
        min,
        step,
        value,
        onChange,
        inputRef,
        id,
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
                ref={inputRef}
                id={id}
                translateY={translateY}
            />
        );
    },
);
