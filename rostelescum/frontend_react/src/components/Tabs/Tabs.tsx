import React, {useState} from 'react';
import {TabItems, TabContent} from "../index";
import { ITabs } from '../../interfaces';

const Tabs: React.FunctionComponent = (): JSX.Element => {
    const tabs: ITabs = [
        {
            id: 'three',
            title: 'Комбо 3в1',
        },
        {
            id: 'four',
            title: 'Комбо 4в1',
        },
        {
            id: 'two',
            title: 'Комбо 2в1',
        },
        {
            id: 'home',
            title: 'Домашний интернет',
        },
        {
            id: 'video',
            title: 'Видеонаблюдение',
        },
    ];
    const [activeTab, setActiveTab] = useState(tabs[0].id);

    return (
        <div className="rt-tabs rt-tabs--background rt-tabs--background-gray rt-tabs-tablet rt-tabs--tag-mode rt-tabs--orange">
            <TabItems tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
            <TabContent activeTab={activeTab} />
        </div>
    );
};

export default Tabs;