import React, {Dispatch} from 'react';
import { ITab } from '../../interfaces';

interface ITabProps extends ITab {
    isActive: boolean
    setActiveTab: React.Dispatch<React.SetStateAction<string>>
}

const Tab: React.FunctionComponent<ITabProps> = ({ id, title, isActive, setActiveTab }): JSX.Element => {
    return (
        <div className={["rt-tabs-nav-v2_item", isActive ? 'rt-tabs-nav-v2_item--active' : ''].join(' ')}>
            <button
                type="button"
                id={id}
                className="rt-tabs-nav-v2_item-name d-flex flex-v-center"
                onClick={() => setActiveTab(id)}
            >
                {title}
            </button>
        </div>
    );
};

export default Tab;