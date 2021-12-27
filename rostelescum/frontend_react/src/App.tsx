import React from "react";
import {Footer, Header, Tabs} from "./components";

const App: React.FunctionComponent = () => {
return (
        <div className="app">
            <Header />
            <Tabs />
            <Footer />
        </div>
    );
}

export default App;