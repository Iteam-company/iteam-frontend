import React, {
    FC,
    ReactElement,
    ReactInstance,
    ReactNode,
    SetStateAction,
    useMemo,
    useRef,
    useState,
} from "react";
import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import {
    Dot,
    StyledContainer,
    StyledFrameContainer,
    StyledIframe,
    StyledImage,
    StyledNavDots,
} from "./styled";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomLayoutEffect";
import { COLORS } from "@/lib/theme/color";
import { AdaptContainer } from "@/anatomic/atoms/Container/Container";
import { useWindowSize } from "@/hooks/useWindowSize";
import { CSSProperties } from "styled-components";
import { DeviceFrame } from "./DeviceFrame";
import "react-device-frameset/styles/marvel-devices.min.css";

export interface SlidesInterface {
    slides: SlideInterface[];
    isTwoColumn?: boolean;
    navigation?: boolean;
    height?: string;
    editionContent?: ReactNode;
    slidePosition?: string;
    link?: string;
}
export interface SlideInterface {
    content: ReactNode;
    image?: string;
}

export const SmoothSlider: FC<SlidesInterface> = ({
    slides = [],
    isTwoColumn = true,
    navigation = true,
    height,
    editionContent,
    slidePosition,
}) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const size = useWindowSize();
    const h = size.width! > 1800 ? "700px" : height;
    const leftPercent = size.width! < 500 ? "-10%" : "0";

    const dots = Array.from(document.querySelectorAll(".dot"));

    const getDotByProgress = (progress: number) => {
        const dots = Array.from(document.querySelectorAll(".dot"));

        const dotIndex = +(progress * slides.length);

        return dots[Math.trunc(+dotIndex)] || dots[0];
    };

    const setActive = (dot: HTMLDivElement) => {
        const dots = Array.from(document.querySelectorAll(".dot"));
        dots.forEach((el: any) => el.classList.remove("dot--outer-circle"));
        dot.classList.add("dot--outer-circle");
    };

    const initDots = () => {
        const dots = Array.from(document.querySelectorAll(".dot"));

        setActive(dots[0] as HTMLDivElement);
    };

    useIsomorphicLayoutEffect(() => {
        initDots();

        const context = gsap.context(() => {
            gsap.timeline().fromTo(
                containerRef,
                {},
                {
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: `-1 top`,
                        end: `+=${
                            containerRef!.current!.offsetHeight * slides.length
                        }`,
                        pin: true,
                        scrub: true,
                        snap: 1 / slides.length,
                        onSnapComplete: (s) => {
                            setActive(
                                getDotByProgress(s.progress) as HTMLDivElement,
                            );
                        },
                    },
                    duration: slides.length,
                },
            );

            const contentTimeLine = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: `-1 top`,
                    // makes the height of the scrolling (while pinning) match the width, thus the speed remains constant (vertical/horizontal)
                    end: () =>
                        `+=${
                            containerRef!.current!.offsetHeight * slides.length
                        }`,
                    scrub: true,
                },
            });
            let incrementor = 0;

            // here is incrementor logic which affects the slides sliding effect (needs to be adjusted due to slides quantity)

            for (let i = 1; i <= slides.length; i++) {
                contentTimeLine
                    .add(`${incrementor}`, `${incrementor}`)
                    // animate the container one way...
                    .fromTo(
                        containerRef.current!.querySelector(
                            `.image-container--${i}`,
                        ),
                        { yPercent: -100, x: 0 },
                        { yPercent: 0, duration: 0.5, ease: "none" },
                        `${incrementor}`,
                    )
                    // ...and the image the opposite way (at the same time)
                    .fromTo(
                        containerRef.current!.querySelector(
                            `.image-container--${i} .image--${i}`,
                        ),
                        { yPercent: 100, x: 0 },
                        { yPercent: 0, duration: 0.5, ease: "none" },
                        `${incrementor}`,
                    );

                incrementor += 0.5;
            }

            incrementor = 0;

            contentTimeLine
                .add(`${incrementor}`, `${incrementor}`)
                // animate the container one way...
                .fromTo(
                    containerRef.current!.querySelector(
                        `.content-container--${0}`,
                    ),
                    { yPercent: 0, x: 0 },
                    { yPercent: -100, duration: 0.5, ease: "none" },
                    `${incrementor}`,
                );

            for (let i = 1; i < slides.length; i++) {
                const isLastSlide = i === slides.length - 1;
                contentTimeLine
                    .add(`${incrementor}`, `${incrementor}`)
                    // animate the container one way...
                    .fromTo(
                        containerRef.current!.querySelector(
                            `.content-container--${i}`,
                        ),
                        { yPercent: 100, x: 0 },
                        {
                            yPercent: isLastSlide ? 0 : -100,
                            duration: isLastSlide ? 0.5 : 1,
                            ease: "none",
                        },
                        `${incrementor}`,
                    );

                incrementor += 0.5;
            }

            const elements: Array<HTMLDivElement> = gsap.utils.toArray(
                ".page-definer",
                containerRef.current,
            );

            dots.forEach((element, index) => {
                ScrollTrigger.create({
                    trigger: elements[index] as any,
                    start: "top center",
                    end: "bottom center",
                    onToggle: () => {
                        setActive(element as HTMLDivElement);
                    },
                });
            });
        }, containerRef);
        return () => context.revert();
    }, []);

    return (
        <AdaptContainer mw="1450px">
            <section
                className="container"
                style={{
                    height: "100vh",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                }}
                ref={containerRef}
            >
                <div
                    className="pined-window"
                    style={{
                        position: "relative",
                        margin: "0 20px",
                        height: h ? h : "90vh",
                        width: "95vw",
                        paddingLeft: navigation ? "5%" : "0px",
                        boxSizing: "border-box",
                        borderRadius: "20px",
                        backgroundColor: COLORS.white,
                        boxShadow: "0px 4px 20px 0px #00000040",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        overflow: "hidden",
                    }}
                >
                    <div
                        className="left-content-container"
                        style={{
                            position: "relative",
                            width: isTwoColumn ? "55%" : "100%",
                            height: "100%",
                            overflow: "hidden",
                        }}
                    >
                        {!!slides.length &&
                            slides.map((project, index) => {
                                const { content } = project;
                                return (
                                    <StyledContainer
                                        key={index}
                                        className={`content-container content-container--${index}`}
                                        style={{
                                            justifyContent: slidePosition
                                                ? slidePosition
                                                : "center",
                                            ...(!!index
                                                ? {
                                                      transform:
                                                          "translate(100%, 0px)",
                                                  }
                                                : {}),
                                        }}
                                    >
                                        {content}
                                    </StyledContainer>
                                );
                            })}
                    </div>
                    {isTwoColumn && (
                        <div
                            className="images-container comparisonSection"
                            style={{
                                position: "relative",
                                paddingBottom: "36.25%",
                                height: "auto",
                                width: "55%",
                                background: "transparent",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    height: "100%",
                                    width: "100%",
                                    background: "transparent",
                                }}
                            >
                                <DeviceFrame isDynamicAdaptive={true}>
                                    {!!slides.length &&
                                        slides.map((project, index) => {
                                            const { image, content } = project;
                                            const typedContent =
                                                content as ReactElement<any>;

                                            const containerStyle: CSSProperties =
                                                {
                                                    left: leftPercent,
                                                    top:
                                                        size.width! < 500
                                                            ? "-49%"
                                                            : "0",
                                                    ...(!!index
                                                        ? {
                                                              transform:
                                                                  "translate(100%, 0px)",
                                                          }
                                                        : {}),
                                                };

                                            const imageStyle: CSSProperties = {
                                                ...(!!index
                                                    ? {
                                                          transform:
                                                              "translate(0%, 0px)",
                                                      }
                                                    : {}),
                                            };

                                            return (
                                                <StyledFrameContainer
                                                    className={`image-container image-container--${index}`}
                                                    style={containerStyle}
                                                    key={index}
                                                >
                                                    {typedContent.props
                                                        .projectUrl ? (
                                                        <StyledIframe
                                                            src={
                                                                typedContent
                                                                    .props
                                                                    .projectUrl
                                                            }
                                                            style={{
                                                                ...imageStyle,
                                                                border: "none",
                                                            }}
                                                        />
                                                    ) : (
                                                        <StyledImage
                                                            src={image}
                                                            style={{
                                                                ...imageStyle,
                                                            }}
                                                        />
                                                    )}
                                                </StyledFrameContainer>
                                            );
                                        })}
                                </DeviceFrame>
                            </div>
                        </div>
                    )}

                    {navigation && (
                        <StyledNavDots className="nav-dots">
                            {!!slides.length &&
                                slides.map((_, index) => {
                                    return <Dot className="dot" key={index} />;
                                })}
                        </StyledNavDots>
                    )}
                </div>

                {editionContent && editionContent}
            </section>
        </AdaptContainer>
    );
};
