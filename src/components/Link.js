import React from "react";

const Link = ({ className, href, children, navLinks }) => {
    const onClick = (e) => {
        e.preventDefault();

        window.history.pushState({}, '', href);
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);

        navLinks?.map((link) => link.classList.remove('active'));
        e.target.classList.add('active');
    }
    return (
        <a onClick={onClick} className={`${className} header-link`} href={href}>{children}</a>
    );
};

export default Link;