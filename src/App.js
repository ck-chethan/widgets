import React from 'react'
import Accordion from './components/Accordion'

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
]

export default () => {
    return (
        <div>
            <Accordion items={items} />
        </div>
    )
}
