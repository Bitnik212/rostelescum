import {Dispatch, SetStateAction, useEffect, useState} from "react";
import {ITabContentData, ITabs} from "../interfaces";
import {useQuery} from "@apollo/client";
import {GET_ALL_TARIFFS} from "../store/controllers";

export const useTabsInit = (): [string, Dispatch<SetStateAction<string>>, ITabs, ITabContentData] => {
    const [tabs, setTabs] = useState<ITabs>([]);
    const [tariffs, setTariffs] = useState<ITabContentData>({});
    const [activeTab, setActiveTab] = useState<string>("");
    const { loading, data } = useQuery(GET_ALL_TARIFFS);

    useEffect(() => {
        const fetchedTabs: ITabs = [];
        if (!loading) {
            data.allTariffs.forEach((tariff: any) => {
                if (!fetchedTabs.find((tab) => tab.id === tariff.type.id))
                    fetchedTabs.push(tariff.type);
            })
            setTabs(fetchedTabs);
            setActiveTab(fetchedTabs[0].id);

            const fetchedTariffs: ITabContentData = {};
            fetchedTabs.forEach((tab) => {
                fetchedTariffs[tab.id] = {
                    cards: []
                }
                fetchedTariffs[tab.id].cards = data.allTariffs.filter((tariff: any) => tab.id === tariff.type.id);
            });
            setTariffs(fetchedTariffs);
        }
    }, [loading]);

    return [activeTab, setActiveTab, tabs, tariffs];
}