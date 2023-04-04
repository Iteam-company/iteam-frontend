import { COLORS } from "@/lib/theme/color";
import { BsTelephone } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";

export const INFO = [
    {
        title: "Email",
        text: "support@labk19.com",
        icon: <FiMail color={COLORS.textPrimary} size={24} />,
    },
    {
        title: "Phone",
        text: "+49 (0) 30 700 100 296",
        icon: <BsTelephone color={COLORS.textPrimary} size={24} />,
    },
    {
        title: "Location",
        text: "View on Google map",
        icon: <HiOutlineLocationMarker color={COLORS.textPrimary} size={24} />,
    },
];
