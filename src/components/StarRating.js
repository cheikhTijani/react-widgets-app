import React, { useState } from "react";
import starIcon from './assets/icons/star.svg';
import starFillIcon from './assets/icons/star-fill.svg';
import js from './assets/js.png';
const TOTAL_STARS = 5;

const Star = ({ selected = false, onSelect = f => f }) => (
    <>
        <img src={selected ? starFillIcon : starIcon} onClick={onSelect} alt="star icon" height={25} />
        &nbsp;
    </>
);

const createArray = length => [...Array(length)];

export default function StarRating({ totalStars = TOTAL_STARS }) {
    const [selectedStars, setSelectedStars] = useState(0);

    return (
        <div className="app-child" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 7 }}>
            <h3>What rating would you give to JavaScript?</h3>
            <img src={js} alt="JavaScript" width={150} />
            <div>
                {createArray(totalStars).map((_, i) => (
                    <Star
                        key={i}
                        selected={selectedStars > i}
                        onSelect={() => setSelectedStars(i + 1)}
                    />
                ))}
            </div>
            <h4>
                {selectedStars} out of {totalStars} stars
            </h4>
        </div>
    );
}