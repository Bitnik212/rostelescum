import React from 'react';

interface IOffer {
    icon: JSX.Element | null
    value: string
    description?: string
    showEmpty: boolean
}

const Offer: React.FunctionComponent<IOffer> = ({ icon, value, description, showEmpty }): JSX.Element | null => {
    return ((value === '-' && showEmpty) || value !== '-') ? (
        <div className="rt-tariff__offer">
            <div className="enabled Main_Internet_service">
                <div className={["js-dyn-hcell rt-tariff-option", value !== '-' ? '' : 'is--disabled'].join(' ')}>
                    <i className="rt-tariff-option__icon">{icon}</i>
                    <div className="rt-tariff-option__info">
                        <div className="rt-tariff-option__title"><span>{value === '-' ? "Не включено" : value}</span></div>
                        <div className="rt-tariff-option__desc">{description}</div>
                    </div>
                </div>
            </div>
        </div>
    ) : null;
};

export default Offer;