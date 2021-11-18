import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Search = () => {
    const [term, setTerm] = useState('Programming');
    const [results, setResults] = useState([]);
    console.log(results);

    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term
                }
            });
            setResults(data.query.search);
        }

        if (term && !results.length) {
            search();
        }
        else {
            const timeoutId = setTimeout(() => {
                if (term) {
                    search();
                }
            }, 500);
            return () => {
                clearTimeout(timeoutId);
            };
        }
        // (async () => {
        //     await axios.get('https://en.wikipedia.org/w/api.php', {
        //         params: {
        //             action: 'query',
        //             list: 'search',
        //             origin: '*',
        //             format: 'json',
        //             srsearch: term
        //         }
        //     });
        // })();

        // await.get('https://en.wikipedia.org/w/api.php', {
        //     params: {
        //         action: 'query',
        //         list: 'search',
        //         origin: '*',
        //         format: 'json',
        //         srsearch: term
        //     }
        // }).then((response) => { console.log(response.data) });

    }, [term]);

    const renderedResults = results.map((result) => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a href={`https://en.wikipedia.org?curid=${result.pageid}`} className="ui button">Go</a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }} />
                    {/* {result.snippet} */}
                </div>
            </div>
        )
    })

    const onChangeInput = (e) => {
        setTerm(e.target.value);
    }

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label htmlFor="serchTermInput">Enter Search Term</label>
                    <input type="text" name="" value={term} id="serchTermInput" className="input" onChange={onChangeInput} />
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    )
}

export default Search
