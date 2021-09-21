import React from "react";

import PropTypes from "prop-types";

const Nav = (props) => {
    const {
        toggleFunction
    } = props;


    return (
        <header>
            <h1 id="pageTtl">System User Onboarding</h1>
            <nav>
                <ul>
                    <li><button
                        id="newUsrBtn"
                        onClick={() => toggleFunction()}
                    >New User</button></li>
                </ul>
            </nav>
        </header>
    );
};

Nav.propTypes = {
    toggleFunction: PropTypes.func
};

export default Nav;
