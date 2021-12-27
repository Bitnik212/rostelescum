import React from 'react';
import {InternetIcon, TvIcon, WinkIcon, MobileIcon} from "../../images";
import {Offer} from "../index";
import {ICardProps} from "../../interfaces";

interface IOffers {
    offers: ICardProps
}

const Offers: React.FunctionComponent<IOffers> = ({ offers }): JSX.Element => {
    return (
        <div>
            {offers.map((offer) => {
                const icon = (() => {
                    switch (offer.title) {
                        case "Безлимитный интернет":
                            return <InternetIcon className="rt-sys-icon" />;
                        case "Интерактивное ТВ Wink":
                            return <TvIcon className="rt-sys-icon" />;
                        case "Онлайн-кинотеатр Wink":
                            return <WinkIcon className="rt-sys-icon" />;
                        case "Мобильная связь":
                            return <MobileIcon className="rt-sys-icon" />;
                        default:
                            return null;
                    }
                })();
                return (
                    <Offer key={offer.title} icon={icon} value={offer.value} description={offer.title} />
                )
            })}
        </div>
    )
};

export default Offers;