import React, { useState } from 'react'
import Accordion from './components/Accordion'
import Dropdown from './components/Dropdown'
import Search from './components/Search'

const items = [
    {
        title: "India",
        content: "Our Country"
    },
    {
        title: "Karnataka",
        content: "Our State"
    },
    {
        title: "Mandya",
        content: "Our District"
    }
];

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'The Shade of Blue',
        value: 'blue'
    }
];

export default () => {
    const [selected, setSelected] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState(true);

    return (
        <div className="">
            <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Button</button>
            {showDropdown && (<Dropdown//When you toggle it'll get remove ref so it'll give null when we click somewhere on the screen ref.current=>null
                selected={selected}
                onSelectedChange={setSelected}
                options={options}
            />)}
        </div>
    )
}
