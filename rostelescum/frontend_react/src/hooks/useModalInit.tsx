import React, {Dispatch, SetStateAction, useEffect, useState} from "react";

const useModalInit = (): [boolean, Dispatch<SetStateAction<boolean>>] => {
    const [isShow, setIsShow] = useState( false);

    useEffect(() => {
        const keyDownHandler = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsShow(false);
        };
        window.addEventListener('keydown', keyDownHandler);
        return () => window.removeEventListener('keydown', keyDownHandler);
    });

    useEffect(() => {
        if (isShow) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    })

    return [isShow, setIsShow];
}

export default useModalInit;
