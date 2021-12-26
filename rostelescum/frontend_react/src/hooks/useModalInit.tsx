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

    return [isShow, setIsShow];
}

export default useModalInit;
