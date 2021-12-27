import React from 'react';

interface IButton {
    type: "submit" | "button" | "reset"
    style: "orange" | "gray" | "white" | "purple" | "transparent"
}

const Button: React.FunctionComponent<IButton> = ({ type, style, children }): JSX.Element => {
    const className = [
        "rt-button",
        type === 'submit' ? 'cl__submit' : '',
        `rt-button-${style}`
    ].join(' ');

    return (
        <button className={className} type={type}>
            <div className="ripple" style={{pointerEvents: 'none'}}>
                <span>{children}</span>
            </div>
        </button>
    );
};

export default Button;