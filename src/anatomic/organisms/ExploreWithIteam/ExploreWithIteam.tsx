import { FlexColumn } from "@/anatomic/atoms/Flex"
import { Text, TEXT_SIZES, TEXT_WEIGHTS } from "@/anatomic/atoms/Text";
import { COLORS } from "@/lib/theme/color";
import {  Box, BoxForPreview, BoxForSpot, BoxForText, BoxHover, GridBox } from "./styled";
import { FC, Fragment } from "react";
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
import { HoverBox } from '@/anatomic/atoms/HoverBox/HoverBox';
import { getStrapiImage } from "@/hooks/useStrapiContentData";
import { AdaptContainer } from "@/anatomic/atoms/Container/Container";

type Props = {
    data: any;
}

export const ExploreWithIteam: FC<Props> = ({data}) => {
    return (
        <AdaptContainer>
        <FlexColumn w="100%"  justifyContent="center" alignItems="center" style={{cursor: 'pointer'}} p='2px 0 2px 0'>
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
                gridTemplateRow='repeat(3, 325px)'
                gridColumnGap='13px'
                gridRowGap='15px'
            >
                {
                    data.map((block: any) => { 
                        return (
                            (
                                <Box key={block.id} backgroundImage={`url(${block.backgroundImage.data.attributes.url})`} bg='rgba(77, 38, 95, 0.55)'>
                                   <HoverBox>
                                        <FlexColumn justifyContent="space-between" h='100%'>
                                            <BoxForSpot t='10%' l='5%' />
                                                <BoxForText>
                                                {/* <Text 
                                                    size={TEXT_SIZES.medium.largeM}
                                                    weight={TEXT_WEIGHTS.medium}
                                                    color={COLORS.dark}
                                                    >
                                                          {block.title}
                                                  
                                                </Text> */}
                                    </BoxForText>
                                <BoxForPreview>
                                    <FlexColumn>
                                        <Text
                                            size={TEXT_SIZES.medium.largeM}
                                            weight={TEXT_WEIGHTS.normal}
                                            color={COLORS.dark}
                                         >         
                                            <Link href={block.linkToPreview || '#'} style={{color: 'inherit', textDecoration: 'none'}}>
                                            {block.subtitleForPreview}
                                            </Link>
                                        </Text>
                                        <Image 
                                            src={`${block.previewImage.data.attributes.url}`}
                                            width={block.previewImage.data.attributes.width}
                                            height={block.previewImage.data.attributes.height}
                                            alt='arrow' style={{marginTop: '-10px'}}
                                        />
                                    </FlexColumn>
                                        </BoxForPreview>
                                    </FlexColumn>
                                </HoverBox>
                                <BoxForSpot />
                                </Box>
                            )
                        )
                    })
                }
            </GridBox>
        </FlexColumn>
    </FlexColumn>
    </AdaptContainer>
    )
}