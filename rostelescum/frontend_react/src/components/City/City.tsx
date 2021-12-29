import React from 'react';
import {CityIcon} from "../../images";

interface ICityProps {
    city: string
}

const City: React.FunctionComponent<ICityProps> = ({ city }): JSX.Element => {
    return (
        <div>
            <span className="font-h-m">Ваш город</span>
            <span className="change-region fill-color-orange rt-link rt-link--orange sp-l-0-2">
                <CityIcon />
                <span className="change-region__current">
                    {city}
                </span>
            </span>
        </div>
    );
};

export default City;