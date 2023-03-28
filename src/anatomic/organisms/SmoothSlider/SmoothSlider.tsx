import React, { FC, ReactNode, useRef } from "react";
import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Dot } from "./styled";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomLayoutEffect";

export interface SlidesInterface {
    slides: SlideInterface[];
}
export interface SlideInterface {
    content: ReactNode[];
    image: string;
}

export const SmoothSlider: FC<SlidesInterface> = ({ slides = [] }) => {
    const containerRef = useRef<HTMLDivElement | null>(null);

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
                            containerRef!.current!.offsetHeight * slides.length
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
                            containerRef!.current!.offsetHeight * slides.length
                        }`,
                    scrub: true,
                    // markers: true
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
                    { yPercent: 100, duration: 0.5, ease: "none" },
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
                        { yPercent: -100, x: 0 },
                        {
                            yPercent: isLastSlide ? 0 : 100,
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

            const dots = gsap.utils.toArray(".dot", containerRef.current);

            const setActive = (dot: any) => {
                dots.forEach((el: any) =>
                    el.classList.remove("dot--outer-circle"),
                );
                dot.classList.add("dot--outer-circle");
            };

            dots.forEach((element, index) => {
                ScrollTrigger.create({
                    trigger: elements[index] as any,
                    start: "top center",
                    end: "bottom center",
                    onToggle: (self) => self.isActive && setActive(element),
                    markers: true,
                });
            });
        }, containerRef);
        return () => context.revert();
    }, []);

    return (
        <div>
            <section
                className="container"
                style={{
                    height: "100vh",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 999,
                    overflow: "hidden",
                }}
                ref={containerRef}
            >
                <div
                    className="pined-window"
                    style={{
                        position: "relative",

                        height: "90vh",
                        width: "95vw",

                        borderRadius: "20px",
                        backgroundColor: "#8f81fc",

                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <div
                        className="left-content-container"
                        style={{
                            position: "relative",

                            width: "50%",
                            height: "100%",
                            overflow: "hidden",
                        }}
                    >
                        {!!slides.length &&
                            slides.map(({ content }, index) => {
                                const containerStyle = {
                                    position: "absolute",
                                    top: "0",

                                    width: "100%",
                                    height: "100%",

                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    zIndex: index,
                                    backgroundColor: "red",

                                    overflow: "hidden",
                                    ...(!!index
                                        ? {
                                              transform: "translate(100%, 0px)",
                                          }
                                        : {}),
                                } as any;
                                return (
                                    <div
                                        className={`content-container content-container--${index}`}
                                        style={containerStyle}
                                    >
                                        {content}
                                        index{index}
                                    </div>
                                );
                            })}
                    </div>
                    <div style={{ position: "absolute", top: 0 }}>
                        {!!slides.length &&
                            slides.map((_, index) => {
                                const style = {
                                    height: "115vh",
                                    width: "1px",
                                };
                                return (
                                    <div
                                        className={`page-definer page-definer--${index}`}
                                        style={style}
                                    ></div>
                                );
                            })}
                    </div>
                    <div
                        className="images-conatainer comparisonSection"
                        style={{
                            position: "relative",

                            paddingBottom: "36.25%",

                            height: "30vh",
                            width: "30vw",
                        }}
                    >
                        {!!slides.length &&
                            slides.map(({ image }, index) => {
                                const containerStyle = {
                                    position: "absolute",
                                    top: "0",

                                    width: "100%",
                                    height: "100%",

                                    overflow: "hidden",
                                    ...(!!index
                                        ? {
                                              transform: "translate(100%, 0px)",
                                          }
                                        : {}),
                                } as any;

                                const imageStyle = {
                                    position: "absolute",
                                    top: "0",

                                    width: "100%",
                                    height: "100%",

                                    overflow: "hidden",
                                    ...(!!index
                                        ? {
                                              transform:
                                                  "translate(-100%, 0px)",
                                          }
                                        : {}),
                                } as any;

                                return (
                                    <div
                                        className={`image-container--${index}`}
                                        style={containerStyle}
                                    >
                                        <img
                                            className={`image--${index}`}
                                            style={imageStyle}
                                            src={image}
                                            alt="before"
                                        />
                                    </div>
                                );
                            })}
                    </div>

                    <div
                        className="nav-dots"
                        style={{
                            position: "absolute",
                            left: "30px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            gridGap: "22px",
                            zIndex: 1000,
                        }}
                    >
                        {!!slides.length &&
                            slides.map((_, index) => {
                                return <Dot className="dot" />;
                            })}
                    </div>
                </div>
            </section>
        </div>
    );
};
