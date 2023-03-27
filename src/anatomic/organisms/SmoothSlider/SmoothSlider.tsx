import React, {
    createContext,
    Dispatch,
    FC,
    ReactNode,
    useRef,
    useState,
} from "react";
import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Dot } from "./styled";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomLayoutEffect";
import { COLORS } from "@/lib/theme/color";

export interface SlidesInterface {
    slides: ReactNode[];
}

interface SliderContextData {
    currentSlideIndex: number;
    setCurrentSlideIndex: Dispatch<number>;
}

export const SliderContext = createContext<SliderContextData | null>(null);

export const SmoothSlider: FC<SlidesInterface> = ({ slides = [] }) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);

    useIsomorphicLayoutEffect(() => {
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
                    start: "-1 top",
                    // makes the height of the scrolling (while pinning) match the width, thus the speed remains constant (vertical/horizontal)
                    end: () =>
                        `+=${
                            containerRef!.current!.offsetHeight * slides.length
                        }`,
                    scrub: 0.5,
                    // markers: true,
                },
            });

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
                    onToggle: (self) => {
                        setCurrentSlideIndex(index);
                        self.isActive && setActive(element);
                    },
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
                        backgroundColor: COLORS.white,
                        boxShadow: "0px 4px 20px 0px #00000040",

                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <div
                        className="left-content-container"
                        style={{
                            width: "100%",
                            height: "100%",
                            overflow: "hidden",
                        }}
                    >
                        <SliderContext.Provider
                            value={{ currentSlideIndex, setCurrentSlideIndex }}
                        >
                            {!!slides.length &&
                                slides.map((content) => {
                                    return (
                                        <div
                                            className="content-container"
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                            }}
                                        >
                                            {content}
                                        </div>
                                    );
                                })}
                        </SliderContext.Provider>
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
                                return <Dot className="dot" />;
                            })}
                    </div>
                </div>
            </section>
        </div>
    );
};
