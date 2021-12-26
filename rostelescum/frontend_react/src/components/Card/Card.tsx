import React from 'react';
import {Modal, City, Input} from "../index";
import {ICard} from "../../interfaces";

interface ICardProps {
    data: ICard
}

const Card: React.FunctionComponent<ICardProps> = ({data}): JSX.Element => {
    return (
        <div className="rt-tariff">
            <div className="rt-tariff__title js-dyn-hcell rt-tariff__link">
                {data.title}
            </div>
            <div className="rt-tariff__offers">
                <div className="rt-tariff__offer">
                    Прикол
                </div>
            </div>
            <div className="rt-font-right sp-t-0-3">
                <div className="price-comp">
                    <div className="text-right">
                        <div className="is--redesign rt-price-v2">
                            <div className="rt-price-v2__value d-inline-block rt-font-bold font-h1">750</div>
                            <div className="d-inline-block flex-column sp-l-0-1 rt-price-n__info">
                                <div className="rt-price-v2__info-item font-t-s m-font-t-xs">руб.</div>
                                <div className="rt-price-v2__info-item font-t-s m-font-t-xs">мес.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sp-t-0-3">
                <Modal>
                    <div className="cl__wrap">
                        <div className="cl__title font-h2">
                            Заявка на подключение
                        </div>
                        <div className="cl__form">
                            <div className="landing-form">
                                <div className="sp-t-1-2 md-sp-t-1">
                                    <City city="Санкт-Петербург"/>
                                </div>
                                <div className="row sp-t-1">
                                    <div className="cl__field rt-col-12">
                                        <Input name="street" type="text">
                                            Улица
                                        </Input>
                                    </div>
                                    <div className="cl__field rt-col-6 sp-t-1-1 rt-col-md-3">
                                        <Input name="house" type="text">
                                            Дом
                                        </Input>
                                    </div>
                                    <div className="cl__field rt-col-6 sp-t-1-1 rt-col-md-3">
                                        <Input name="apartment" type="text">
                                            Квартира
                                        </Input>
                                    </div>
                                </div>
                                <div className="row sp-t-1-1 md-sp-t-1">
                                    <div className="rt-col-12 rt-col-md-3">
                                        <div className="cl__field">
                                            <Input name="fullName" type="text">
                                                Как вас зовут?
                                            </Input>
                                        </div>
                                    </div>
                                    <div className="rt-col-12 rt-col-md-3 sp-t-1-1 md-sp-t-1">
                                        <div className="cl__field">
                                            <Input name="phoneNumber" type="tel" placeholder="+7 (___) ___-__-__"
                                                   floating>
                                                Контактный телефон
                                            </Input>
                                        </div>
                                    </div>
                                </div>
                                <div className="row no-gutter font-t-m color-main07-no-opacity sp-t-1-1">
                                    <p>Наши менеджеры свяжутся с Вами в ближайший час</p>
                                </div>
                                <div className="row no-gutter font-t-m sp-t-1-4 td-sp-t-1-3 md-sp-t-1-1">
                                    <div>
                                        <label className="checkbox checkbox-orange active">
                                            <div className="ripple"/>
                                            <input
                                                id="" name="acceptRules" type="checkbox" className="checkbox-element"/>
                                            <div
                                                className="checkbox-container">
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
                                </div>
                                <div className="sp-t-1-3 td-sp-t-1-2">
                                    <button className="rt-button rt-button-with-ripple  cl__submit rt-button-orange"
                                            type="submit">
                                        <div className="ripple" style={{pointerEvents: 'none'}}>
                                            <span>Отправить заявку</span>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
        </div>
    );
};

export default Card;