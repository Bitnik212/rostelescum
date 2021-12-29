import React from 'react';
import {Modal, Offers, CardModalForm} from "../index";
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
                    <div className="cl__form" >
                        <CardModalForm tariffId={data.id} />
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