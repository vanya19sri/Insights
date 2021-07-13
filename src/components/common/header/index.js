import React from "react";
import "./header.css";

function Header() {
    return (
    <div className="header">
        <div className="header-menu">
        <i class="fi-rr-layout-fluid"></i>
        </div>
        <div className="header-leftFold">
            <label className="header-label">Insight</label>
        </div>
        <div className="header-rightFold">
            <div className="header-search">
            <i class="fi-rr-search"></i>
            <input placeholder="Search" />
            </div>
            <div className="header-profile">
                <div className="header-options">
                <i class="fi-rr-menu-dots"></i>
                </div>
                <img
                    className="header-avatar"
                    src="https://image.flaticon.com/icons/png/512/1256/1256650.png"></img>
            </div>
        </div>
    </div>
    );
}

export default Header;