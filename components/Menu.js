import Link from "next/link";
import React, { useState } from "react";
import NavItem from "@components/Navitem";

export default function Menu() {

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
        <menu_stuff>
            <nav className={`nav`}>
                <Link href={"/"}>
                    <a onClick = {()=>{
                        setActiveIdx(0);
                        setNavActive(false);
                    }}
                    >
                        <h1 className="logo">Ella Smith</h1>
                    </a>
                </Link>
                <div
                    onClick={() => {
                        setNavActive(!navActive)
                    }}
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
        </menu_stuff>
    );
}