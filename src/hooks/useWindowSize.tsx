import { log } from "console";
import { useEffect, useState } from "react";

interface windowSizeProps {
    width: null | number;
    height: null | number;
}

export function useWindowSize() {
    const [windowSize, setWindowSize] = useState<windowSizeProps>({
        width: null,
        height: null,
      });


      useEffect(() => {
        function handleResize() {
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        }
        
        window.addEventListener("resize", handleResize);
         
        handleResize();
        
        return () => window.removeEventListener("resize", handleResize);
      }, []);
      return windowSize;
}
