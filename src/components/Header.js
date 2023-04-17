import React, { useEffect, useRef, useState } from "react";
import Link from "./Link";

const Header = () => {
    const listRef = useRef(null);
    const [navLinks, setNavLinks] = useState([]);
    const currentPath = window.location.pathname;

    useEffect(() => {
        if (listRef) {
            setNavLinks(Array.from(listRef.current.children));
        }
    }, [listRef])

    useEffect(() => {
        navLinks.forEach((link) => {
            if (link.pathname === currentPath) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }, [currentPath, navLinks])

    return (
        <div className="ui pointing menu">
            <div className="left-menu">
                <h4>
                    <a href="/" className="header item">
                        React Widgets
                    </a>
                </h4>
            </div>
            <div className="right menu links" ref={listRef}>
                <Link href="/" className="item" navLinks={navLinks}>
                    Accordion
                </Link>
                <Link href="/dropdown" className="item" navLinks={navLinks}>
                    Dropdown
                </Link>
                <Link href="/search" className="item" navLinks={navLinks}>
                    Search
                </Link>
                <Link href="/translate" className="item" navLinks={navLinks}>
                    Translate
                </Link>
                <Link href="/rating" className="item" navLinks={navLinks}>
                    Rating
                </Link>
                <Link href="/calculator" className="item" navLinks={navLinks}>
                    Calculator
                </Link>
            </div>
        </div>
    );
}

export default Header;