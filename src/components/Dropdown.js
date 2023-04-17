import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ options, selected, onSelectedChange, label, topMargin }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const onBodyClick = (e) => {
            if (ref.current?.contains(e.target)) return;
            setOpen(false);
        }
        document.body.addEventListener('click', onBodyClick, { capture: true });

        const onEscClick = (e) => {
            if (e.key === 'Escape')
                setOpen(false);
        }
        document.body.addEventListener('keydown', onEscClick, { capture: true });

        return () => {
            document.body.removeEventListener('click', onBodyClick, { capture: true });
            document.body.removeEventListener('keydown', onEscClick, { capture: true });
        }
    }, []);

    const renderedOptions = options.map(option => {
        if (option.value === selected.value)
            return null;
        return (
            <div key={option.value} className="item" onClick={() => onSelectedChange(option)}>
                {option.label}
            </div>
        );
    });

    return (
        <div className={`${topMargin ? 'app-child' : ''}`}>
            <div ref={ref} className="ui form">
                <div className="field">
                    <label className="label normal-font text-center" style={{ marginBottom: 7 }}>{label}</label>
                    <div onClick={() => setOpen(!open)} className={`normal-font ui selection dropdown ${open ? 'visible active' : ''}`}>
                        <i className="dropdown icon"></i>
                        <div className="text">{selected.label}</div>
                        <div className={`menu ${open ? 'visible transition' : ''}`}>
                            {renderedOptions}
                        </div>
                    </div>
                </div>

            </div>
            <p style={{ fontSize: '18px', marginTop: '15px' }}>{selected.content}</p>
        </div>
    );
}

export default Dropdown;