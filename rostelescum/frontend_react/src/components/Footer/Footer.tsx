import React from 'react';

const Footer = () => {
    return (
        <div className="container footer">
            © {new Date().getFullYear()} СПбКТ «Ростелеком»
        </div>
    );
};

export default Footer;