import React, { useState } from "react";
import Header from "./components/Header";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Calculator from './components/Calculator';
import StarRating from './components/StarRating';
import Route from "./components/Route";

import { data } from "./data";

import './App.css';

const App = () => {
    const { accordionItems, dropdownOptions } = data;

    const [selected, setSelected] = useState(dropdownOptions[0]);

    return (
        <div>
            <Header />
            <div className="ui container">
                <Route path="/">
                    <Accordion items={accordionItems} />
                </Route>
                <Route path="/search">
                    <Search />
                </Route>
                <Route path="/dropdown">
                    <Dropdown
                        label="Top 5 Programming Languages for Web Development According to Chat-gpt"
                        options={dropdownOptions}
                        selected={selected}
                        onSelectedChange={setSelected}
                        topMargin
                    />
                </Route>
                <Route path="/translate">
                    <Translate />
                </Route>
                <Route path="/rating">
                    <StarRating />
                </Route>
                <Route path="/calculator">
                    <Calculator />
                </Route>

            </div>
        </div>
    );
}

export default App;