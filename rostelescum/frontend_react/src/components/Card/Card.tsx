import React from 'react';
import {CardModal, Offers} from "../index";
import {ICard} from "../../interfaces";
import Price from "../Price/Price";

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
                <Offers offers={data.props} />
            </div>
            <div className="rt-font-right sp-t-0-3">
                <Price price={data.price} />
            </div>
            <div className="sp-t-0-3">
                <CardModal />
            </div>
        </div>
    );
};

export default Card;