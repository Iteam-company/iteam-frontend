import { Button } from "@/anatomic/atoms/Button";
import { BUTTON_VARIANTS } from "@/anatomic/atoms/Button/util";
import { Text } from "@/anatomic/atoms/Text";
import { TEXT_SIZES, TEXT_TYPES } from "@/anatomic/atoms/Text/util";
import { COLORS } from "@/lib/theme/color";

const Team = () => {
    return (
        <>
            <Text type={TEXT_TYPES.title} size={TEXT_SIZES.xxl}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.s
                Beatae impedit reiciendis facilis quisquam repellat id minus
                voluptatum! Error soluta id maxime cumque, obcaecati earum
                veritatis ipsa doloribus quasi delectus perferendis.
            </Text>
            <Text type={TEXT_TYPES.text} color="green">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
                impedit reiciendis facilis quisquam repellat id minus
                voluptatum! Error soluta id maxime cumque, obcaecati earum
                veritatis ipsa doloribus quasi delectus perferendis.
            </Text>
            <div>
                <Button
                    variant={BUTTON_VARIANTS.color}
                    label={
                        <Text lineHeight="1.5" color={COLORS.white}>
                            Read More
                        </Text>
                    }
                />
                <Button
                    variant={BUTTON_VARIANTS.change}
                    label={
                        <Text lineHeight="1.5" color={COLORS.black}>
                            Read More
                        </Text>
                    }
                />
            </div>
        </>
    );
};

export default Team;
