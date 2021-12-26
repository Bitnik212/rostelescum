import React from 'react';
import {Tab} from "../index";
import { ITabItems } from '../../interfaces';

const TabItems: React.FunctionComponent<ITabItems> = ({tabs, activeTab, setActiveTab}): JSX.Element => {
    return (
        <div className="rt-tabs-v2-navigation-wrapper">
            <div className="rt-tabs-v2-navigation-scoller">
                <div className="rt-tabs-v2-navigation">
                    {tabs.map((tab) => (
                        <Tab
                            key={tab.id}
                            id={tab.id}
                            title={tab.title}
                            isActive={tab.id === activeTab}
                            setActiveTab={setActiveTab}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TabItems;