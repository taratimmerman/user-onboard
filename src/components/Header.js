import React from "react";

const Nav = () => {

    const addNewUser = () => {
        // TBD
    };

    return (
        <header>
            <h1 id="pageTtl">System User Onboarding</h1>
            <nav>
                <ul>
                    <li><button id="newUsrBtn" onClick={addNewUser}>New User</button></li>
                </ul>
            </nav>
        </header>
    );
};

export default Nav;
