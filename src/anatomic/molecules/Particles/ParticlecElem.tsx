import React, { useCallback } from "react";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";

export const ParticlesElem = () => {
    const particlesInit = useCallback(async (engine: any) => {
        console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: any) => {
        await console.log(container);
    }, []);
    return (
        <Particles
            init={particlesInit}
            loaded={particlesLoaded}
            style={{
                width: "100vw",
                height: "calc(100vh - 360px)",
                overflow: "hidden",
                position: "absolute",
                zIndex: 0,
            }}
            options={{
                // background: {
                //     color: {
                //         // value: "#f4f6f8",
                //     },
                // },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 1,
                        },
                        repulse: {
                            distance: 50,
                            duration: 0.1,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#000000",
                    },
                    links: {
                        color: "#000000",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        // directions: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 1,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 4 },
                    },
                },
                detectRetina: true,
            }}
        />
    );
};
