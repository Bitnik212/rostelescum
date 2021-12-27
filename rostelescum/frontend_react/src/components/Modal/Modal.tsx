import React from 'react';
import {ModalOverlay} from "../index";
import useModalInit from "../../hooks/useModalInit";
import {Close} from "../../images";

const Modal: React.FC = ({ children }): JSX.Element => {
    const [isShow, setIsShow] = useModalInit();

    return (
        <div>
            <button
                type="button"
                onClick={() => setIsShow(!isShow)}
                className="rt-button rt-button-with-ripple rt-button-bright  rt-button--is-block rt-button-orange"
            >
                Подключить
            </button>
            {isShow && (
                <ModalOverlay setIsShow={setIsShow}>
                    <div className="modal__content" onClickCapture={() => setIsShow(true)}>
                        <div className="close">
                            <Close onClick={() => setIsShow(false)} className="input-clear__icon" />
                        </div>
                        <div>
                            { children }
                        </div>
                    </div>
                </ModalOverlay>
            )}
        </div>
    );
};

export default Modal;