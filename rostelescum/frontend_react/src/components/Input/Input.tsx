import React, {Dispatch, SetStateAction, useState} from 'react';
import InputMask from 'react-input-mask';
import InputCheckbox from "../InputCheckbox/InputCheckbox";

interface IInputProps {
    name: string
    type: string
    title?: string
    placeholder?: string
    floating?: boolean
    valueType?: "number" | "text"
    value?: any
    changeValue?: (value: any) => void
    required?: boolean
}

const Input: React.FunctionComponent<IInputProps> = ({
    name,
    type,
    placeholder,
    title,
    children,
    floating,
    valueType,
    value,
    changeValue,
    required
}) => {
    const [isError, setIsError] = useState(false);
    const [valueField, setValueField] = useState("");
    const [isFloating, setIsFloating] = useState(floating || false)
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (type === 'tel') {
            if (changeValue) {
                changeValue(e.target.value)
            } else {
                setValueField(e.target.value);
            }
            return;
        }
        const pattern = valueType === "number" ? /^[\d]{0,4}$/ : /^[a-zA-Zа-яА-Я,\- ]{0,50}$/;
        const regexp = new RegExp(pattern);
        if (regexp.test(e.target.value)) {
            if (changeValue) {
                changeValue(e.target.value)
            } else {
                setValueField(e.target.value);
            }
            setIsError(false);
        }
    }

    const onBlurHandler = () => {
        if (type === 'tel' && ((value && value.includes('_')) || valueField.includes('_'))) {
            setIsError(true);
            setIsFloating(false);
        } else if (!(value || valueField)) {
            setIsError(true);
            setIsFloating(false);
        } else {
            setIsFloating(true);
            setIsError(false);
        }
    }

    return type !== "checkbox" ? (
        <div className="input-wrapper">
            <div
                className={
                    ["input", "text-field", "text-field--purple", isError ? "text-field--error" : ""].join(' ')
                }>
                {type === 'tel' ? (
                    <InputMask
                        autoComplete="off"
                        autoCapitalize="off"
                        type={type}
                        name={name}
                        className="input-element"
                        value={value || valueField}
                        placeholder={placeholder}
                        title={title}
                        onChange={changeHandler}
                        onBlur={onBlurHandler}
                        mask="+7 \(999\) 999\-99\-99"
                    />
                ) : (
                    <input
                        autoComplete="off"
                        autoCapitalize="off"
                        className="input-element"
                        type={type}
                        name={name}
                        value={value || valueField}
                        placeholder={placeholder}
                        title={title}
                        onChange={changeHandler}
                        onBlur={onBlurHandler}
                        required={required}
                    />
                )}

                <div className="text-field__line" />
                <div className={["floating-placeholder", isFloating || floating ? "floating-placeholder--go-top" : ""].join(' ')}>
                    {children}
                </div>
                <div
                    className="text-field__error-message rtb-text-field__error-message--on-the-right"><span
                    className="error-message-text-content rt-font-label">необходимо заполнить</span>
                </div>
            </div>
        </div>
    ) : (
        <InputCheckbox name={name} required={required} />
    );
};

export default Input;