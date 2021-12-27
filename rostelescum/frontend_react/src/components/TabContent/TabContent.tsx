import React from 'react';
import {Card} from "../index";
import {ITabContentData} from "../../interfaces";

interface ITabContent {
    activeTab: string
}

const TabContent: React.FunctionComponent<ITabContent> = ({ activeTab }): JSX.Element => {
    const data: ITabContentData = {
        three: {
            cards: [
                {
                    id: 1,
                    title: 'Технологии развлечения. Старт',
                    props: [
                        {
                            title: 'Безлимитный интернет',
                            value: '200 Мбит/с',
                        },
                        {
                            title: 'Интерактивное ТВ Wink',
                            value: '141 канал посмотреть',
                        },
                        {
                            title: 'Онлайн-кинотеатр Wink',
                        },
                        {
                            title: 'Мобильная связь',
                        }
                    ],
                    price: 629,
                },
                {
                    id: 2,
                    title: 'Технологии выгоды. Старт',
                    props: [
                        {
                            title: 'Безлимитный интернет',
                            value: '200 Мбит/с',
                        },
                        {
                            title: 'Интерактивное ТВ Wink',
                            value: '141 канал посмотреть',
                        },
                        {
                            title: 'Онлайн-кинотеатр Wink',
                        },
                        {
                            title: 'Мобильная связь',
                        }
                    ],
                    price: 632,
                },
                {
                    id: 3,
                    title: 'Технологии развлечения',
                    props: [
                        {
                            title: 'Безлимитный интернет',
                            value: '300 Мбит/с',
                        },
                        {
                            title: 'Интерактивное ТВ Wink',
                            value: '182 канал посмотреть',
                        },
                        {
                            title: 'Онлайн-кинотеатр Wink',
                            value: '25 000 фильмов и сериалов',
                        },
                        {
                            title: 'Мобильная связь',
                        }
                    ],
                    price: 700,
                },
            ]
        },
        four: {
            cards: [
                {
                    id: 4,
                    title: 'Технологии выгоды',
                    props: [
                        {
                            title: 'Безлимитный интернет',
                            value: '200 Мбит/с',
                        },
                        {
                            title: 'Интерактивное ТВ Wink',
                            value: '182 канал посмотреть',
                        },
                        {
                            title: 'Онлайн-кинотеатр Wink',
                            value: '25 000 фильмов и сериалов',
                        },
                        {
                            title: 'Мобильная связь',
                            value: 'Безлимит/500 СМС/1200 мин',
                        }
                    ],
                    price: 750,
                },
                {
                    id: 5,
                    title: 'Технологии выгоды +',
                    props: [
                        {
                            title: 'Безлимитный интернет',
                            value: '200 Мбит/с',
                        },
                        {
                            title: 'Интерактивное ТВ Wink',
                            value: '182 канал посмотреть',
                        },
                        {
                            title: 'Онлайн-кинотеатр Wink',
                            value: '25 000 фильмов и сериалов',
                        },
                        {
                            title: 'Мобильная связь',
                            value: 'Безлимит/500 СМС/1200 мин/до 5 сим-карт',
                        }
                    ],
                    price: 950,
                },
                {
                    id: 6,
                    title: 'Технологии общения. PRO',
                    props: [
                        {
                            title: 'Безлимитный интернет',
                            value: '800 Мбит/с',
                        },
                        {
                            title: 'Интерактивное ТВ Wink',
                            value: 'Онлайн-кинотеатр',
                        },
                        {
                            title: 'Онлайн-кинотеатр Wink',
                        },
                        {
                            title: 'Мобильная связь',
                            value: 'Безлимит/500 СМС/2000 мин',
                        }
                    ],
                    price: 950,
                },
            ]
        }
    }

    return (
        <div className="sp-t-1">
            <div className="rt-tabs-content">
                <div className="rt-tabs-content__item">
                    {data[activeTab]?.cards.map((card) => <Card key={card.id} data={card} />)}
                </div>
            </div>
        </div>
    );
};

export default TabContent;