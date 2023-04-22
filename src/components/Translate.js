import React, { useState } from "react";
import Dropdown from "./Dropdown";

import * as dotenv from 'dotenv';
dotenv.config();

const options = [
    {
        label: 'English',
        value: 'en'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'French',
        value: 'fr'
    },
    {
        label: 'Spanish',
        value: 'es'
    }
];

const Translate = () => {
    const [source, setSource] = useState(options[0])
    const [target, setTarget] = useState(options[1]);
    const [entry, setEntry] = useState('');
    const [translated, setTranslated] = useState('');

    const translateText = async (entry, source, target) => {
        if (!entry) return;
        const encodedParams = new URLSearchParams();
        encodedParams.append('q', `${entry}`);
        encodedParams.append('target', `${target.value}`);
        encodedParams.append('source', `${source.value}`);

        const fetchOptions = {
            method: 'POST',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'Accept-Encoding': 'application/gzip',
                'X-RapidAPI-Key': process.env.REACT_APP_api_key,
                'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
            },
            body: encodedParams
        };

        const response = await fetch('https://google-translate1.p.rapidapi.com/language/translate/v2', fetchOptions);
        if (response.status !== 200 || !response.ok) return;
        const data = await response.json();
        setTranslated(data?.data?.translations[0]?.translatedText);
    }

    return (
        <div className="app-child">
            <div className="ui form">
                <div className="field">
                    <input className="normal-font" value={entry} onChange={e => { setEntry(e.target.value) }} required placeholder="Enter a text to translate" />
                </div>
            </div>
            <div style={{ display: 'flex', marginTop: 15, justifyContent: 'space-around' }}>
                <Dropdown
                    selected={source}
                    onSelectedChange={setSource}
                    options={options}
                    label="From"
                />
                <Dropdown
                    selected={target}
                    onSelectedChange={setTarget}
                    options={options}
                    label="To"
                />
            </div>
            <button onClick={() => translateText(entry, source, target)} className="ui secondary button normal-font" style={{ display: 'block', margin: '0 auto 20px auto' }}>Translate</button>
            <hr />
            <h3 className="ui header">{translated}</h3>
        </div>
    );
}

export default Translate;