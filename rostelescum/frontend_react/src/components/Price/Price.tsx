import React from 'react';

interface IPrice {
    price: number
}

const Price: React.FunctionComponent<IPrice> = ({ price }): JSX.Element => {
    return (
        <div className="price-comp">
            <div className="text-right">
                <div className="is--redesign rt-price-v2">
                    <div className="rt-price-v2__value d-inline-block rt-font-bold font-h1">{price}</div>
                    <div className="d-inline-block flex-column sp-l-0-1 rt-price-n__info">
                        <div className="rt-price-v2__info-item font-t-s m-font-t-xs">руб.</div>
                        <div className="rt-price-v2__info-item font-t-s m-font-t-xs">мес.</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Price;