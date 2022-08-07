import Link from "next/link";
import React, { useState } from "react";
import NavItem from "./NavItem";

export default function Sidebar() {

    const MENU_LIST = [
        { text: "Home", href: "/" },
        { text: "About", href: "/about" },
        { text: "Work", href: "/work" },
        { text: "Projects", href: "/projects"},
        { text: "Fun", href: "/fun" },
        { text: "Contact", href: "/contact" },
    ];

    const [navActive, setNavActive] = useState(false);
    const [activeIdx, setActiveIdx] = useState(-1);
    return (
        <sidebar>
            <nav className={`nav`}>
                <Link href={"/"}>
                    <a onClick = {()=>setActiveIdx(0)}>
                        <h1 className="logo">Ella Smith</h1>
                    </a>
                </Link>
                <div
                    onClick={() => setNavActive(!navActive)}
                    className={`nav__menu-bar`}
                >
                <div></div>
                <div></div>
                <div></div>
                </div>
                <div className={`${navActive ? "active" : ""} nav__menu-list`}>
                    {MENU_LIST.map((menu, idx) => (
                        <div
                            onClick={() => {
                                setActiveIdx(idx);
                                setNavActive(false);
                            }}
                            key={menu.text}
                            >
                            <NavItem active={activeIdx === idx} {...menu} />
                        </div>
                    ))}
                </div>
            </nav>
        </sidebar>
    );
}