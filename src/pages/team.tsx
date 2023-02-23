import styled from "styled-components";
import { FlexColumn, FlexRow } from "@/anatomic/atoms/Flex";
import { TeamInterface } from "./api/team";
import { useCallback, useEffect, useState } from "react";
import client from "@/axios";
import { CardElem } from "@/anatomic/molecules/TeamItemCard/TeamItemCard";

const Team = () => {
    const [team, setTeam] = useState<TeamInterface[]>([]);
    const [currentMember, setCurrentMember] = useState<number>(0);

    const getTeam = useCallback(async () => {
        try {
            const { data } = await client.get("/api/team");
            setTeam(data);
        } catch (err) {
            console.log(err);
        }
    }, []);

    useEffect(() => {
        getTeam();
    }, []);

    const [counter, setCounter] = useState(0);
    const [shadowCounter, setShadowCounter] = useState(0);

    useEffect(() => {
        console.log(counter);

        if (counter < 310 && window.scrollY == 0) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    });

    const weelHandle = (e: any) => {
        var e = window.event || e;
        var delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
        console.log(delta, "!!!delta");

        const step = 360 / team.length; //k

        if (!(delta > 0) && counter < 360) {
            setCounter(counter + 5);

            const stepsQuantity = Math.ceil(counter / step);
            console.log(step, stepsQuantity, "!!!!!!!!!!!!");

            setShadowCounter(stepsQuantity * step);

            console.log(counter);
            // console.log(
            //     +String((320 / counter).toFixed(1)).at(-1)!,
            //     "proportional",
            // );
        } else {
            setCounter(counter - 5);
        }

        // setCurrentMember(+String((320 / counter).toFixed(1)).at(-1)!);
    };

    return (
        <FlexColumn
            w="100%"
            mh="calc(100vh - 100px)"
            position="relative"
            alignItems="center"
            justifyContent="center"
            style={{ overflowY: "hidden" }}
            onWheel={(e) => weelHandle(e)}
        >
            {/* <GalleryBox>         */}
            <GalleryBoxOuter
                counter={counter}
                shadowCounter={counter + (counter - shadowCounter)}
            >
                {team &&
                    team.map((item) => (
                        <CardElem
                            key={item.id}
                            avatar={item.avatar.src}
                            name={item.name}
                            position={item.position}
                        />
                    ))}
            </GalleryBoxOuter>
            {/* </GalleryBox> */}
            {/* <FlexColumn
                position="relative"
                justifyContent="space-between"
                alignItems="center"
            >
                <Circle />
                <FlexRow
                    w="19%"
                    justifyContent="space-between"
                    position="absolute"
                    style={{ top: "60px" }}
                >
                    <Point />
                    <Point />
                </FlexRow>
            </FlexColumn> */}
        </FlexColumn>
    );
};

export default Team;

const generateCssForCardsTransforms = (
    counter: number,
    cardsQuatity: number,
) => {
    let styles = "";

    for (let i = 0; i < cardsQuatity; i++) {
        styles += `.galleryBoxIn:nth-child(${i + 1}) {
        transition: all 0.1s ease-out;
        transform: rotateY(${(i + 1) * 40}deg) rotateZ(70deg) translateZ(450px);
        };
        `;
    }

    return styles;
};

const GalleryBoxOuter = styled.div<{ counter: any; shadowCounter: any }>`
    width: 600px;
    height: 200px;
    position: relative;
    transition: all 1s ease-out;
    transform: rotateZ(-70deg)
        ${({ shadowCounter }) =>
            shadowCounter ? `rotateY(${shadowCounter}deg)` : `rotateY(0deg)`};
    transform-style: preserve-3d;

    ${({ counter }) =>
        typeof counter === "number" &&
        generateCssForCardsTransforms(counter, 10)}
`;

const Circle = styled(FlexColumn)`
    align-items: center;
    background: transparent;
    border-radius: 50%;
    height: 600px;
    width: 600px;
    border: 20px solid red;
    border-right: 15px solid red;
    border-top: 8px solid red;
    border-bottom: 8px solid red;
    transform: rotateY(75deg);
`;
const Point = styled(FlexRow)`
    height: 20px;
    width: 20px;
    background-color: black;
    border-radius: 50%;
    transform: rotateY(0deg);
`; // const GalleryBox = styled.div`
//     /* position: absolute;
//     left: 50%;
//     top: 50%;
//     transform: translate(-50%, -50%); */
// `;
