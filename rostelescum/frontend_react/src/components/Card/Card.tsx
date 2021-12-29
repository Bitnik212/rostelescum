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
            <div className="rt-tariff__title js-dyn-hcell rt-tariff__link" style={{height: '64px'}}>
                {data.title}
            </div>
            <div className="rt-tariff__offers sp-b-0-3">
                <Offers offers={data.props} showEmpty />
            </div>
            <div className="rt-tariff__line" />
            <div className="rt-font-right sp-t-0-3">
                <Price price={data.price} />
            </div>
            <div className="sp-t-0-3">
                <CardModal data={data} />
            </div>
        </div>
    );
};

export default Card;