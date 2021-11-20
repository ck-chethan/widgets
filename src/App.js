import React, { useState } from 'react'
import Accordion from './components/Accordion'
import Dropdown from './components/Dropdown'
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

export default () => {
    return (
        <div className="">
            <Translate />
        </div>
    )
}
