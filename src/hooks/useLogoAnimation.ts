import { useState, useEffect } from "react";

const useLogoAnimation = (data: any) => {
    const [showLogo, setShowLogo] = useState(true);

    useEffect(() => {
        if (!data) {
            const timer = setTimeout(() => {
                setShowLogo(false);
            }, 1000);

            return () => clearTimeout(timer);
        }
    }, [data]);

    return showLogo;
};

export default useLogoAnimation;
