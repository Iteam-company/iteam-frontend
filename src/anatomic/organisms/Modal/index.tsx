import { Children, FC, useEffect, useState } from "react";
import Modal from "react-modal";

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        border: "none",
        overflow: "hidden",
    },
};

type Props = {
    openModal: boolean;
    closeFunc: () => void;
    children?: JSX.Element;
};
export const ContactUsModal: FC<Props> = ({
    openModal,
    closeFunc,
    children,
}) => {
    useEffect(() => {
        openModal
            ? document.body.classList.add("no-scroll")
            : document.body.classList.remove("no-scroll");
    }, [openModal]);

    return (
        <div>
            <Modal
                isOpen={openModal}
                onRequestClose={closeFunc}
                style={customStyles}
            >
                {children}
            </Modal>
        </div>
    );
};
Modal.setAppElement("#__next");
