import React from 'react';

interface IInputCheckbox {
    name: string
}

const InputCheckbox: React.FunctionComponent<IInputCheckbox> = ({ name }): JSX.Element => {
    return (
        <div>
            <label className="checkbox checkbox-orange active">
                <div className="ripple"/>
                <input name={name} type="checkbox" className="checkbox-element"/>
                <div className="checkbox-container">
                    <svg width="12px" height="9px" viewBox="0 0 12 9"
                         version="1.1" xmlns="http://www.w3.org/2000/svg"
                         className="checkbox-container__angle">
                        <g
                            stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <g id="Checkbox"
                               transform="translate(-521.000000, -911.000000)">
                                <g
                                    id="atom/checkbox/01-default"
                                    transform="translate(515.000000, 903.000000)">
                                    <rect
                                        id="Rectangle" x="0" y="0" width="24"
                                        height="24" />
                                    <path
                                        d="M16.324634,8.26251729 C16.7319344,7.88952294 17.3644884,7.91733353 17.7374827,8.32463399 C18.0817852,8.70060364 18.0845734,9.26850523 17.7626122,9.64702019 L17.675366,9.73748271 L10.4652088,16.3403428 L6.34362098,12.7544313 C5.92696008,12.3919232 5.88306058,11.7602819 6.24556871,11.343621 C6.58019159,10.9590109 7.14413505,10.89202 7.55663064,11.169112 L7.65637902,11.2455687 L10.43,13.659 L16.324634,8.26251729 Z"
                                        id="Stroke-4" fillRule="nonzero" />
                                </g>
                            </g>
                        </g>
                    </svg>
                    <p className="font-t-m"> Я принимаю <a
                        href="https://www.rt.ru/legal" target="_blank"
                        className="agree-link rt-link rt-link--orange"> условия обработки
                        персональных данных </a></p></div>
            </label>
        </div>
    );
};

export default InputCheckbox;