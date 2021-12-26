import React, {useState} from 'react';
import InputMask from 'react-input-mask';

interface IInputProps {
    name: string
    type: string
    title?: string
    placeholder?: string
    floating?: boolean
}

const Input: React.FunctionComponent<IInputProps> = ({
    name,
    type,
    placeholder,
    title,
    children,
    floating
}) => {
    const [isError, setIsError] = useState(false);
    const [value, setValue] = useState("");
    const [isFloating, setIsFloating] = useState(floating || false)
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        if (e.target.value === "123") {
            setIsError(true);
        } else {
            setIsError(false);
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

    return (
        <div className="input-wrapper">
            <div
                className={
                    ["input", "text-field", "text-field--purple", isError ? "text-field--error" : ""].join(' ')
                }>
                {type === 'tel' ? (
                    <InputMask
                        autoComplete="off" autoCapitalize="off" type={type}
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
                        autoComplete="off" autoCapitalize="off" type={type}
                        name={name}
                        className="input-element"
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
    );
};

export default Input;