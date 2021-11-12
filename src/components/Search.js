import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Search = () => {
    const [term, setTerm] = useState('');

    useEffect(() => {
        const search = async () => {
            await axios.get('');
        }
        search();

        // (async () => {
        //     await axios.get('');
        // })();

        //await.get('').then((response)=>{console.log(response.data)});

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
