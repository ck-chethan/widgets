import React, { useEffect, useState } from 'react'

const Search = () => {

    const [term, setTerm] = useState('');

    useEffect(() => {
        console.log("Rerendered");
    }, [term]);

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
        </div>
    )
}

export default Search
