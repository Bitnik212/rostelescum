import React, {useEffect, useState} from 'react';
import {Button, City, Input} from "../index";
import {CREATE_ORDER, CREATE_ORDER_PROPS} from "../../store/controllers";
import { useMutation } from '@apollo/client';

interface ICardModalForm {
    tariffId: number
}

const CardModalForm: React.FunctionComponent<ICardModalForm> = ({ tariffId }): JSX.Element => {
    const [formData, setFormData] = useState<CREATE_ORDER_PROPS>({
        city: 'Санкт-Петербург',
        street: '',
        home: '',
        apartment: 0,
        phone: '',
        name: '',
        tariffId: tariffId
    });
    const [createOrder, { data, loading, error }] = useMutation(CREATE_ORDER);

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(Object.values(formData).every((field, i) => {
            if (i === 4) {
                return field.length === 11;
            }
            return !!field;
        })) {
            createOrder({variables: formData}).then();
        }
    }

    useEffect(() => {
        if (!loading && data) {
            console.log(data);
        }
    }, [loading]);

    return (
        <form onSubmit={submitHandler}>
            <div className="landing-form">
                <div className="sp-t-1-2 md-sp-t-1">
                    <City city="Санкт-Петербург"/>
                </div>
                <div className="row sp-t-1">
                    <div className="cl__field rt-col-12">
                        <Input
                            name="street"
                            type="text"
                            value={formData.street}
                            changeValue={(value) => setFormData({...formData, street: value})}
                        >
                            Улица
                        </Input>
                    </div>
                    <div className="cl__field rt-col-6 sp-t-1-1 rt-col-md-3">
                        <Input
                            name="house"
                            type="text"
                            valueType="number"
                            value={formData.home}
                            changeValue={(value) => setFormData({...formData, home: value})}
                        >
                            Дом
                        </Input>
                    </div>
                    <div className="cl__field rt-col-6 sp-t-1-1 rt-col-md-3">
                        <Input
                            name="apartment"
                            type="text"
                            valueType="number"
                            value={formData.apartment}
                            changeValue={(value) => setFormData({...formData, apartment: value * 1})}
                        >
                            Квартира
                        </Input>
                    </div>
                </div>
                <div className="row sp-t-1-1 md-sp-t-1">
                    <div className="rt-col-12 rt-col-md-3">
                        <div className="cl__field">
                            <Input
                                name="fullName"
                                type="text"
                                value={formData.name}
                                changeValue={(value) => setFormData({...formData, name: value})}
                            >
                                Как вас зовут?
                            </Input>
                        </div>
                    </div>
                    <div className="rt-col-12 rt-col-md-3 sp-t-1-1 md-sp-t-1">
                        <div className="cl__field">
                            <Input
                                name="phoneNumber"
                                type="tel"
                                placeholder="+7 (___) ___-__-__"
                                floating
                                value={formData.phone}
                                changeValue={(value) => setFormData({...formData, phone: value.replace(/[()\s-+_]/gi, '')})}
                            >
                                Контактный телефон
                            </Input>
                        </div>
                    </div>
                </div>
                <div className="row no-gutter font-t-m color-main07-no-opacity sp-t-1-1">
                    <p>Наши менеджеры свяжутся с Вами в ближайший час</p>
                </div>
                <div className="row no-gutter font-t-m sp-t-1-4 td-sp-t-1-3 md-sp-t-1-1">
                    <Input name="acceptRules" type="checkbox" required />
                </div>
                <div className="sp-t-1-3 td-sp-t-1-2">
                    <Button type="submit" style="orange">
                        Отправить заявку
                    </Button>
                </div>
            </div>
            {!loading && data && 'Заявка отправлена! Скоро наши операторы свяжутся с вами!'}
        </form>
    );
};

export default CardModalForm;