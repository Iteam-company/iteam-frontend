import React, { FC, ReactNode, useRef } from "react";
import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Dot } from "./styled";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomLayoutEffect";
import { COLORS } from "@/lib/theme/color";
import { AdaptContainer } from "@/anatomic/atoms/Container/Container";
import { useWindowSize } from "@/hooks/useWindowSize";

export interface SlidesInterface {
    slides: SlideInterface[];
    isTwoColumn?: boolean;
    navigation?: boolean;
    height?: string;
    editionContent?: ReactNode;
}
export interface SlideInterface {
    content: ReactNode[];
    image?: string;
}

export const SmoothSlider: FC<SlidesInterface> = ({
    slides = [],
    isTwoColumn = true,
    navigation = true,
    height,
    editionContent,
}) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const size = useWindowSize();
    const h = size.width! > 1800 ? "720px" : height;
    const leftPercent = size.width! < 500 ? "-10%" : "0";
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
                });
            });
        }, containerRef);
        return () => context.revert();
    }, []);

    return (
        <AdaptContainer>
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
                        paddingLeft: navigation ? "50px" : "0px",
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
                    {/* <BgImage top={0} right={50} src={BgImage1.src} /> */}
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
                            slides.map(({ content }, index) => {
                                const containerStyle = {
                                    position: "absolute",
                                    top: "0",
                                    height: "100%",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    zIndex: index,
                                    // width: "100%",
                                    overflow: "hidden",
                                    ...(!!index
                                        ? {
                                              transform: "translate(100%, 0px)",
                                          }
                                        : {}),
                                } as any;
                                return (
                                    <div
                                        key={index}
                                        className={`content-container content-container--${index}`}
                                        style={containerStyle}
                                    >
                                        {content}
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
                                        key={index}
                                    ></div>
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
                                width: "40vw",
                            }}
                        >
                            {!!slides.length &&
                                slides.map(({ image }, index) => {
                                    const containerStyle = {
                                        position: "absolute",
                                        top: size.width! < 500 ? "-50%" : "0",
                                        left: leftPercent,
                                        width: "100%",
                                        height: "100%",
                                        minHeight: "290px",
                                        minWidth: "290px",
                                        overflow: "hidden",
                                        tansform:
                                            size.width! < 500
                                                ? "translateY(50%)"
                                                : "",
                                        ...(!!index
                                            ? {
                                                  transform:
                                                      "translate(100%, 0px)",
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
                                            key={index}
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
                    )}

                    {navigation && (
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
                            }}
                        >
                            {!!slides.length &&
                                slides.map((_, index) => {
                                    return <Dot className="dot" key={index} />;
                                })}
                        </div>
                    )}
                </div>
                {editionContent && editionContent}
            </section>
        </AdaptContainer>
    );
};
