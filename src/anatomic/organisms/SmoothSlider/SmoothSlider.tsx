import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Dot } from "./styled";

const slides: Array<any> = [
    {
        image: "https://lastfm.freetls.fastly.net/i/u/ar0/2601ee61963451c48291ad87f3a36828.jpg",
        content: <div>uuuu sukaa</div>,
    },
    {
        image: "https://memepedia.ru/wp-content/uploads/2021/05/photo5264918766142207239-1-768x512.jpg",
        content: <div>Hi igor!!!</div>,
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWj3Ubtf0p5JosI4cpPd0-tmUTPsb-zTjOIg&usqp=CAU",
        content: <div>BMW GOVNO!!!</div>,
    },
    {
        image: "https://i.scdn.co/image/ab67616d0000b273ba1a0b8f239067333cbc6d4a",
        content: <div>Hello Vika!!!</div>,
    },
];

export const SmoothSlider = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useLayoutEffect(() => {
        const context = gsap.context(() => {
            gsap.timeline().fromTo(
                containerRef,
                {},
                {
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top top",
                        end: `+=${
                            containerRef!.current!.offsetHeight * slides.length
                        }`,
                        pin: true,
                        scrub: true,
                    },
                },
            );

            const contentTimeLine = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    // makes the height of the scrolling (while pinning) match the width, thus the speed remains constant (vertical/horizontal)
                    end: () =>
                        `+=${
                            containerRef!.current!.offsetHeight * slides.length
                        }`,
                    scrub: 0.5,
                    // markers: true
                },
            });

            for (let i = 1; i < slides.length; i++) {
                contentTimeLine

                    // animate the container one way...
                    .fromTo(
                        containerRef.current!.querySelector(
                            `.image-container--${i}`,
                        ),
                        { yPercent: -100, x: 0 },
                        { yPercent: 0, ease: "none" },
                        i - 1,
                    )
                    // ...and the image the opposite way (at the same time)
                    .fromTo(
                        containerRef.current!.querySelector(
                            `.image-container--${i} .image--${i}`,
                        ),
                        { yPercent: 100, x: 0 },
                        { yPercent: 0, ease: "none" },
                        i - 1,
                    )
                    .rawTime(true);
            }

            const elements = gsap.utils.toArray(
                ".content-container",
                containerRef.current,
            );

            contentTimeLine.fromTo(
                elements,
                { yPercent: 0 },
                {
                    yPercent: -100 * (slides.length - 1),
                    duration: slides.length,
                },
                0,
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
        <section
            className="container"
            style={{
                height: "100vh",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
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
                        width: "50%",
                        height: "100%",
                        overflow: "hidden",
                    }}
                >
                    {!!slides.length &&
                        slides.map(({ content }) => {
                            return (
                                <div
                                    className="content-container"
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        border: "1px solid black",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    {content}
                                </div>
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
                                          transform: "translate(-100%, 0px)",
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
                    }}
                >
                    {!!slides.length &&
                        slides.map((_, index) => {
                            return <Dot />;
                        })}
                </div>
            </div>
        </section>
    );
};
