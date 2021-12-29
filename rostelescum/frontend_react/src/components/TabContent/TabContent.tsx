import React from 'react';
import {Card} from "../index";
import {ITabContentData} from "../../interfaces";

interface ITabContent {
    activeTab: string
    tariffs: ITabContentData
}

const TabContent: React.FunctionComponent<ITabContent> = ({ activeTab, tariffs }): JSX.Element => {
    return (
        <div className="sp-t-1">
            <div className="rt-tabs-content">
                <div className="rt-tabs-content__item">
                    { tariffs[activeTab] ? (
                        tariffs[activeTab].cards.map((card) => <Card key={card.id} data={card} />
                        )) : (
                            <div>Контента нет и не будет</div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default TabContent;