import React from 'react';

const Loader: React.FunctionComponent = (): JSX.Element => {
    return (
        <div className="loader-container">
            <div className="loader">
                <div />
            </div>
            <h3>Контент наполняется любовью!</h3>
        </div>
    );
};

export default Loader;
