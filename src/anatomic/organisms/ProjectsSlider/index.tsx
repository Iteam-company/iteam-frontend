import { FC } from "react";
import { SlideInterface, SmoothSlider } from "../SmoothSlider/SmoothSlider";
import { Desktop, Mobile } from "../AppsImplement/AppsImplement";
import { AdaptContainer } from "@/anatomic/atoms/Container/Container";
import { useWindowSize } from "@/hooks/useWindowSize";

type Props = {
    slides: Array<SlideInterface>;
};

export const ProjectsSlider: FC<Props> = ({ slides }) => {
    const size = useWindowSize();
    return (
        <>
            {slides.length && (
                <>
                    <Desktop>
                        <SmoothSlider
                            slides={slides}
                            slidePosition="space-between"
                        />
                    </Desktop>
                    <Mobile>
                        <AdaptContainer>
                            <SmoothSlider
                                height={size.height! < 701 ? "80vh" : "65vh"}
                                slidePosition="space-between"
                                slides={slides}
                                navigation={false}
                            />
                        </AdaptContainer>
                    </Mobile>
                </>
            )}
        </>
    );
};
