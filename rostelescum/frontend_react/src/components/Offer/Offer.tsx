import React from 'react';

interface IOffer {
    icon: JSX.Element | null
    value?: string
    description: string
}

const Offer: React.FunctionComponent<IOffer> = ({ icon, value, description }): JSX.Element => {
    return (
        <div className="rt-tariff__offer">
            <div className="enabled Main_Internet_service">
                <div className={["js-dyn-hcell rt-tariff-option", value ? '' : 'is--disabled'].join(' ')} style={{height: "52px"}}>
                    <i className="rt-tariff-option__icon">{icon}</i>
                    <div className="rt-tariff-option__info">
                        <div className="rt-tariff-option__title"><span>{value || "Не включено"}</span></div>
                        <div className="rt-tariff-option__desc">{description}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offer;