import React from 'react';
import {Button, City, Input, Modal} from "../index";

const CardModal = () => {
    return (
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
                            <Input name="acceptRules" type="checkbox" />
                        </div>
                        <div className="sp-t-1-3 td-sp-t-1-2">
                            <Button type="submit" style="orange">
                                Отправить заявку
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default CardModal;