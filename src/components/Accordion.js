import React, { useState, useRef } from "react";

const Accordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [lastIndex, setLastIndex] = useState(null);

    const ref = useRef();

    const onTitleClick = (index) => {
        if (!ref.current.querySelector('.content.active')) {
            setActiveIndex(index);
            setLastIndex(null);
        } else {
            setActiveIndex(index);
            setLastIndex(activeIndex);
        }
    }


    const renderItems = items.map((item, index) => {

        let active = index === activeIndex ? 'active' : '';
        if (activeIndex === lastIndex) active = '';

        return (
            <React.Fragment key={item.title}>
                <div className="title active" onClick={() => onTitleClick(index)}>
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        );
    });

    return (
        <div ref={ref} className="ui styled accordion app-child">
            {renderItems}
        </div>
    );
}

export default Accordion;