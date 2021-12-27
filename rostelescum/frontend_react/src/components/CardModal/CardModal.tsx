import React from 'react';
import {Button, City, Input, Modal, Offers} from "../index";
import {ICard} from "../../interfaces";

interface ICardModal {
    data: ICard
}

const CardModal: React.FunctionComponent<ICardModal> = ({ data }): JSX.Element => {
    return (
        <Modal>
            <div className="cl" style={{margin: '0'}}>
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
                                    <Input name="house" type="text" valueType="number">
                                        Дом
                                    </Input>
                                </div>
                                <div className="cl__field rt-col-6 sp-t-1-1 rt-col-md-3">
                                    <Input name="apartment" type="text" valueType="number">
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
                                <Input name="acceptRules" type="checkbox"/>
                            </div>
                            <div className="sp-t-1-3 td-sp-t-1-2">
                                <Button type="submit" style="orange">
                                    Отправить заявку
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="cl__pts-wrap">
                        <div className="cl__pts-spoiler sp-t-none sp-b-0-1 rt-annotation rt-annotation-v2">
                            <div className="rt-font-paragraph rt-annotation__title rt-annotation-v2__title">
                                <p className="cl__pts-title-tag font-h-l">{data.title}</p>
                            </div>
                            <div className="rt-annotation__content">
                                <div className="rt-annotation__content-height-resolver">
                                    <div className="cl__pts">
                                        <Offers offers={data.props} showEmpty={false} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cl__cart">
                            <div className="cl__cart-row">
                                <p className="cl__cart-title font-h-l sp-b-0-2">Стоимость тарифа</p>
                                <p className="font-t-m">{data.price} руб./мес.</p>
                            </div>
                            <div className="cl__cart-row font-lb d-flex d-space-between md-d-block"><p
                                className="color-main09-no-opacity">+плата за подключение</p><p
                                className="color-main05-no-opacity md-sp-t-0-2">300 руб</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default CardModal;