import React, {Dispatch, SetStateAction} from 'react';

interface IModalOverlay {
    setIsShow: Dispatch<SetStateAction<boolean>>
}

const ModalOverlay: React.FunctionComponent<IModalOverlay> = ({ children, setIsShow }): JSX.Element => {
    return (
        <div className="modalOverlay" onClickCapture={() => setIsShow(false)}>
            { children }
        </div>
    );
};

export default ModalOverlay;