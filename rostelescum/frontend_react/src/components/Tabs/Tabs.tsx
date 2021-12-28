import React from 'react';
import {TabItems, TabContent} from "../index";
import {useTabsInit} from "../../hooks/useTabsInit";

const Tabs: React.FunctionComponent = (): JSX.Element => {
    const [activeTab, setActiveTab, tabs, tariffs] = useTabsInit();

    return (
        <div className="container tabs">
            <div className="rt-tabs rt-tabs--background rt-tabs--background-gray rt-tabs-tablet rt-tabs--tag-mode rt-tabs--orange">
                <TabItems tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
                <TabContent activeTab={activeTab} tariffs={tariffs} />
            </div>
        </div>
    );
};

export default Tabs;