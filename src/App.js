import React, { useState } from 'react'
import Accordion from './components/Accordion'
import Dropdown from './components/Dropdown'
import Header from './components/Header';
import Route from './components/Route';
import Search from './components/Search'
import Translate from './components/Translate';

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

// const showAccordian = () => {
//     if (window.location.pathname === '/') {
//         return <Accordion items={items} />
//     }
// }

// const showList = () => {
//     if (window.location.pathname === '/list') {
//         return <Search />
//     }
// }

// const showDropdown = () => {
//     if (window.location.pathname === '/dropdown') {
//         return <Dropdown />
//     }
// }

// const showTranslate = () => {
//     if (window.location.pathname === '/translate') {
//         return <Translate />
//     }
// }

// const showComponents = (route, compnent) => {
//     return (window.location.pathname === route ? compnent : null);
// }

export default () => {
    const [selected, setSelected] = useState(options[0]);
    return (
        <div className="">
            <Header />
            <Route path="/">
                <Accordion items={items} />
            </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/dropdown">
                <Dropdown
                    label="Select a Color"
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelected}
                />
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
        </div>
    )
}
