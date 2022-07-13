import React from "react";
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";

import './Nav.css'
import Search from "./Search/Search";

const Nav = () => {
    return(
        <nav className="nav">
            <Logo/>
            <Menu/>
            <Search/>
        </nav>
    )
}

export default Nav