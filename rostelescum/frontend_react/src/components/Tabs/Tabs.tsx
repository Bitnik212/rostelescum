import React from 'react';
import {TabItems, TabContent, Loader} from "../index";
import {useTabsInit} from "../../hooks/useTabsInit";

const Tabs: React.FunctionComponent = (): JSX.Element => {
    const [activeTab, setActiveTab, tabs, tariffs, loaded] = useTabsInit();

    return (
        <div className="container tabs" style={loaded ? {} : {alignItems: 'center'}}>
            { loaded ? (
                <div className="rt-tabs rt-tabs--background rt-tabs--background-gray rt-tabs-tablet rt-tabs--tag-mode rt-tabs--orange">
                    <TabItems tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
                    <TabContent activeTab={activeTab} tariffs={tariffs} />
                </div>
            ) : (
                <Loader />
            )}
        </div>
    );
};

export default Tabs;