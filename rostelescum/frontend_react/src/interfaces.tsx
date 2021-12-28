import React from "react";

export interface ITab {
    id: string
    name: string
}

export type ITabs = ITab[];

export interface ITabItems {
    tabs: ITabs
    activeTab: string
    setActiveTab: React.Dispatch<React.SetStateAction<string>>
}

export interface ICardProp {
    title?: string
    description: string
}

export type ICardProps = ICardProp[];

export interface ICard {
    id: number
    title: string
    props: ICardProps
    price: number
}

export type ICards = ICard[];

export interface ITabContentData {
    [title: string]: {
        cards: ICards
    }
}
