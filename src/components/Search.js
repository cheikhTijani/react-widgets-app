import React, { useState, useEffect } from "react";

const Search = () => {
    const [term, setTerm] = useState("");
    const [results, setResults] = useState([]);

    // get search data
    useEffect(() => {
        const search = async () => {

            const response = await fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srlimit=5&srsearch=${term}`);
            const data = await response.json();
            setResults(data.query.search);

        };

        const timoutId = setTimeout(() => {
            if (term) {
                search();
            }
        }, 3000);

        return () => {
            clearTimeout(timoutId);
        }

    }, [term]);

    // render serch data
    const renderedResults = results.map((result) => {
        return (
            <div key={result.pageid} className="item" style={{ padding: '10px 0' }}>
                <div className="content">
                    <div className="header normal-font" style={{ marginBottom: 5 }}>
                        <a href={`https://en.wikipedia.org?curid=${result.pageid}`} target="_blank" rel="noreferrer">{result.title}</a>
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>...
                </div>
            </div>
        );
    });


    return (
        <div className="app-child">
            <div className="ui form">
                <div className="field">
                    <label className="normal-font">Search on Wikipedia</label>
                    <input
                        value={term}
                        className="input normal-font"
                        onChange={e => setTerm(e.target.value)}
                        placeholder="type your search and click enter"
                    />
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    );
};

export default Search;