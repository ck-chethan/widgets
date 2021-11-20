import React, { useEffect, useState } from 'react'

const Dropdown = ({ options, selected, onSelectedChange }) => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        document.body.addEventListener('click', () => {
            console.log("BODY CLICKED");
            setOpen(false);
        }, { capture: true });
    }, []);

    const renderedOptions = options.map((option) => {
        if (option.value === selected.value) {
            return null;
        }
        return (<div key={option.value}
            onClick={() => {
                console.log("ITEM CLICKED");
                onSelectedChange(option)
            }}
            className="item">{option.label}</div>);
    });
    //Add event Listeners will call first then React listeners will call from Child and bobbling up
    return (
        <div className="ui form">
            <div className="field">
                <label htmlFor="" className="label">Select a Color</label>
                <div onClick={() => {
                    console.log("DROPDOWN CLICKED");
                    setOpen(!open)
                }}
                    className={`ui selection dropdown ${open && 'visible active'}`}
                >
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open && 'visible transition'}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dropdown
