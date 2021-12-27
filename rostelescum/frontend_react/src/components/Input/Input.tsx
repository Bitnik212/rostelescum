import React, {useState} from 'react';
import InputMask from 'react-input-mask';
import InputCheckbox from "../InputCheckbox/InputCheckbox";

interface IInputProps {
    name: string
    type: string
    title?: string
    placeholder?: string
    floating?: boolean
    valueType?: "number" | "text"
}

const Input: React.FunctionComponent<IInputProps> = ({
    name,
    type,
    placeholder,
    title,
    children,
    floating,
    valueType
}) => {
    const [isError, setIsError] = useState(false);
    const [value, setValue] = useState("");
    const [isFloating, setIsFloating] = useState(floating || false)
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (type === 'tel') {
            setValue(e.target.value);
            return;
        }
        const pattern = valueType === "number" ? /^\d{0,4}$/ : /^[a-zA-Zа-яА-Я,\- ]{0,50}$/;
        const regexp = new RegExp(pattern);
        if (regexp.test(e.target.value)) {
            setValue(e.target.value);
            if (e.target.value === "123") {
                setIsError(true);
            } else {
                setIsError(false);
            }
        }
    }

    const onBlurHandler = () => {
        if (!value || (type === 'tel' && value.includes('_'))) {
            setIsError(true);
            setIsFloating(false);
        } else {
            setIsFloating(true);
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
                        value={value}
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
                        value={value}
                        placeholder={placeholder}
                        title={title}
                        onChange={changeHandler}
                        onBlur={onBlurHandler}
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
        <InputCheckbox name={name} />
    );
};

export default Input;