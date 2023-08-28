import React, { FC, ReactNode, useRef } from "react";
import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import {
    AbsoluteWrapper,
    Dot,
    ImagesContainer,
    LeftContentContainer,
    NavDots,
    PinedWindow,
    Section,
    StyledContainer,
    StyledContentContainer,
    StyledImage,
    StyledWrapper,
} from "./styled";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomLayoutEffect";
import { AdaptContainer } from "@/anatomic/atoms/Container/Container";
import { useWindowSize } from "@/hooks/useWindowSize";

export interface SlidesInterface {
    slides: SlideInterface[];
    isTwoColumn?: boolean;
    navigation?: boolean;
    height?: string;
    editionContent?: ReactNode;
    slidePosition?: string;
}
export interface SlideInterface {
    content: ReactNode[];
    image?: string;
}

export const SmoothSlider: FC<SlidesInterface> = React.memo(
    ({
        slides = [],
        isTwoColumn = true,
        navigation = true,
        height,
        editionContent,
        slidePosition,
    }) => {
        const containerRef = useRef<HTMLDivElement | null>(null);
        const size = useWindowSize();

        useIsomorphicLayoutEffect(() => {
            const context = gsap.context(() => {
                gsap.timeline().fromTo(
                    containerRef,
                    {},
                    {
                        scrollTrigger: {
                            trigger: containerRef.current,
                            start: "-1 top",
                            end: `+=${
                                containerRef!.current!.offsetHeight *
                                slides.length
                            }`,
                            pin: true,
                            scrub: true,
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
                                containerRef!.current!.offsetHeight *
                                slides.length
                            }`,
                        scrub: true,
                    },
                });
                let incrementor = 0;

                for (let i = 1; i < slides.length; i++) {
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
                const elements = gsap.utils.toArray(
                    ".page-definer",
                    containerRef.current,
                );

                const dots = gsap.utils.toArray(
                    ".dot",
                    containerRef.current,
                ) as HTMLElement[];

                const setActive = (dot: HTMLElement) => {
                    dots.forEach((el) =>
                        el.classList.remove("dot--outer-circle"),
                    );
                    dot.classList.add("dot--outer-circle");
                };

                dots.forEach((element, index) => {
                    ScrollTrigger.create({
                        trigger: elements[index] as HTMLElement,
                        start: "top center",
                        end: "bottom center",
                        onToggle: (self) => self.isActive && setActive(element),
                    });
                });
            }, containerRef);
            return () => context.revert();
        }, []);

        return (
            <AdaptContainer mw="1450px">
                <Section className="container" ref={containerRef}>
                    <PinedWindow
                        className="pined-window"
                        h={size.width! > 1800 ? "700px" : height}
                        navigation={navigation}
                    >
                        <LeftContentContainer
                            className="left-content-container"
                            isTwoColumn={isTwoColumn}
                        >
                            {!!slides.length &&
                                slides.map(({ content }, index) => (
                                    <StyledContentContainer
                                        key={index}
                                        className={`content-container content-container--${index}`}
                                        index={index}
                                        slidePosition={slidePosition}
                                    >
                                        {content}
                                    </StyledContentContainer>
                                ))}
                        </LeftContentContainer>
                        <AbsoluteWrapper>
                            {!!slides.length &&
                                slides.map((_, index) => (
                                    <StyledWrapper
                                        className={`page-definer page-definer--${index}`}
                                        key={index}
                                    />
                                ))}
                        </AbsoluteWrapper>
                        {isTwoColumn && (
                            <ImagesContainer className="images-container comparisonSection">
                                {!!slides.length &&
                                    slides.map(({ image }, index) => (
                                        <StyledContainer
                                            className={`image-container--${index}`}
                                            isMobile={size.width! < 500}
                                            index={index}
                                            key={index}
                                        >
                                            <StyledImage
                                                className={`image--${index}`}
                                                src={image!}
                                                width={1000}
                                                height={500}
                                                alt="before"
                                                index={index}
                                            />
                                        </StyledContainer>
                                    ))}
                            </ImagesContainer>
                        )}

                        {navigation && (
                            <NavDots className="nav-dots">
                                {!!slides.length &&
                                    slides.map((_, index) => {
                                        return (
                                            <Dot className="dot" key={index} />
                                        );
                                    })}
                            </NavDots>
                        )}
                    </PinedWindow>

                    {editionContent && editionContent}
                </Section>
            </AdaptContainer>
        );
    },
);
