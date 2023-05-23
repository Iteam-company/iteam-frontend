import { BoxHover } from "@/anatomic/organisms/ExploreWithIteam/styled";
import { useWindowSize } from "@/hooks/useWindowSize";
import { Children } from "react";

type Props = {
    children: JSX.Element
}

export const HoverBox: React.FC<Props>= ({children}) => {
    const size = useWindowSize();
    let layout;

    if (size.width && size.width > 1024) {
        layout =  <BoxHover  
            style={{opacity: 0}} 
            whileHover={{opacity: 1, transition: {duration: 1}}}>
                {children}
            </BoxHover>
    } else {
        layout = <BoxHover  
        style={{opacity: 0}} 
        whileInView={{opacity: 1, transition: {duration: 1, delay: 1}}}>
            {children}
        </BoxHover>
    }
    return layout;
}
