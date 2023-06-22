import { FC } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Video from "yet-another-react-lightbox/plugins/video";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

type Props = {
    open: boolean;
    func: (param: boolean) => void;
    data: any[];
};

export const Gallery: FC<Props> = ({ open, func, data }) => {
    const slides = data.map((item) => ({
        src: item.attributes.url,
    }));
    return (
        <Lightbox
            open={open}
            close={() => func(false)}
            slides={slides}
            plugins={[Captions, Fullscreen, Slideshow, Thumbnails]}
        />
    );
};
