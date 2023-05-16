import { FlexColumn } from "@/anatomic/atoms/Flex"
import { Text, TEXT_SIZES, TEXT_WEIGHTS } from "@/anatomic/atoms/Text";
import { COLORS } from "@/lib/theme/color";
import {  Box, BoxForPreview, BoxForSpot, BoxForText, BoxHover, GridBox } from "./styled";
import { Fragment } from "react";
import exploreImage_1 from '../../../assets/explore/explore_1.png';
import exploreImage_2 from '../../../assets/explore/explore_2.png';
import exploreImage_3 from '../../../assets/explore/explore_3.png';
import exploreImage_4 from '../../../assets/explore/explore_4.png';
import exploreImage_5 from '../../../assets/explore/explore_5.png';
import exploreImage_6 from '../../../assets/explore/explore_6.png';
import exploreBack from '../../../assets/explore/Rectangle 94.png';
import exploreBackOnHover from '../../../assets/explore/backOnHover.png';

import Image from "next/image";
import arrow from '../../../assets/explore/arrow.png';
import Link from "next/link";

const blocks = [
    {
        title: 'System For \n Online \n Consulting',
        link: 'Go to Preview',
        backgroundImg: exploreImage_1,
        backgroundImageOnHover: exploreBackOnHover
    }, {
        title: 'Small \n Businesses \n Accounting App',
        link: 'Go to Preview',
        backgroundImg: exploreImage_2,
        backgroundImageOnHover: exploreBackOnHover
    }, {
        title: 'Cut And \n Measure Images \n System',
        link: 'Go to Preview',
        backgroundImg: exploreImage_3,
        backgroundImageOnHover: exploreBackOnHover
    }, {
        title: 'System For \n Handling Church \n Meetings',
        link: 'Go to Preview',
        backgroundImg: exploreImage_4,
        backgroundImageOnHover: exploreBackOnHover
    },{
        title: 'Web App \n For Searching \n Job',
        link: 'Go to Preview',
        backgroundImg: exploreImage_5,
        backgroundImageOnHover: exploreBackOnHover
    },{
        title: 'Ylabs Security \n Landing \n Page',
        link: 'Go to Preview',
        backgroundImg: exploreImage_6,
        backgroundImageOnHover: exploreBackOnHover
    },
]

export const ExploreWithIteam = () => {
    return (
        <FlexColumn w="100%" justifyContent="center" alignItems="center" style={{cursor: 'pointer'}} p='2px 0 2px 0'>
            <FlexColumn w="80%">
                <FlexColumn p='0 0 45px 0'>
                    <Text
                        size={TEXT_SIZES.medium.largeM}
                        weight={TEXT_WEIGHTS.medium}
                        color={COLORS.light}
                        lineHeight='39px'
               
                    >
                        Explore with ITeam:
                    </Text>
                </FlexColumn>
            <GridBox 
                gridTemplateColumn='1fr 1fr' 
                gridTemplateRow='repeat(3, 525px)'
                gridColumnGap='13px'
                gridRowGap='15px'
            >
                {
                    blocks.map((block) => (
                        <Box key={block.title} backgroundImage={`url(${block.backgroundImg.src})`} bg='rgba(232, 186, 253, 0.55)'>
                            <BoxHover backgroundImage={`url(${block.backgroundImageOnHover.src})`} style={{opacity: 0}} whileHover={{opacity: 1, transition: {duration: 1}}}>
                                <FlexColumn justifyContent="space-between" h='100%'>
                                    <BoxForSpot t='10%' l='5%' />
                                        <BoxForText>
                                        <Text 
                                            size={TEXT_SIZES.medium.largeM}
                                            weight={TEXT_WEIGHTS.medium}
                                            color={COLORS.dark}
                                            >
                                            {block.title}
                                        </Text>
                            </BoxForText>
                        <BoxForPreview>
                            <FlexColumn>
                                <Text
                                    size={TEXT_SIZES.medium.largeM}
                                    weight={TEXT_WEIGHTS.normal}
                                    color={COLORS.dark}
                                 >         
                                    <Link href='#' style={{color: 'inherit', textDecoration: 'none'}}>
                                    {block.link}
                                    </Link>
                                </Text>
                            <Image src={arrow} alt='arrow'/>
                            </FlexColumn>
                        </BoxForPreview>
                        </FlexColumn>
                        </BoxHover>
                        <BoxForSpot />
                        </Box>
                    ))
                }
            </GridBox>
        </FlexColumn>
    </FlexColumn>
    )
}