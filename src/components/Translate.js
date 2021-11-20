import React, { useState } from 'react'
import Convert from './Convert';
import Dropdown from './Dropdown'


const options = [
    {
        label: 'Kannada',
        value: 'kn'
    },
    {
        label: 'Hindi',
        value: 'hi'
    },
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    }

];

const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label htmlFor="inputForDropdown">Enter Text</label>
                    <input id="inputForDropdown" type="text" value={text} onChange={e => setText(e.target.value)} />
                </div>
            </div>

            <Dropdown
                label="Select a Language"
                selected={language}
                onSelectedChange={setLanguage}
                options={options}
            />
            <hr />
            <h3 className="ui header">Output</h3>
            <Convert language={language} text={text} />
        </div>
    )
}

export default Translate
