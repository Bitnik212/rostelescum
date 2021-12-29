import React from 'react';
import {LogoIcon, LocationIcon} from "../../images";

const Header = (): JSX.Element => {
    return (
        <div className="header container">
            <a className="logo" href="/">
                <div className="rtcLogo">
                    <LogoIcon />
                </div>
                <span className="title">Ростелеком к вашим услугам</span>
            </a>
            <div className="infoContainer">
                <div className="location">
                    <LocationIcon />
                    <span className="locationTxt">Санкт-Петербург</span>
                </div>
                <a href="/admin" className="rt-button rt-button-orange">Войти</a>
            </div>
        </div>
    );
};

export default Header;