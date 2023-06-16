import { Component } from "@/anatomic/organisms/Header/Component";
import { useRouter } from "next/router";
import styled from "styled-components";
import { MobileComponent } from "./MobileComponent";
import { FC } from "react";
import { PropsI } from "./utils";
import { Layout } from "@/anatomic/molecules/Layout";

export const Header: FC<PropsI> = ({ data = [] }) => {
    const activeRoute = useRouter().asPath;

    return (
        <>
            <Mobile>
                <Layout>
                <MobileComponent activeRoute={activeRoute} data={data} />
                </Layout>
            </Mobile>

            <Desktop>
            <Layout>
                <Component activeRoute={activeRoute} data={data} />
                </Layout>
            </Desktop>
        </>
    );
};

const Mobile = styled.div`
    @media all and (min-width: 993px) {
        display: none;
    }
`;
const Desktop = styled.div`
    @media all and (max-width: 992px) {
        display: none;
    }
`;
