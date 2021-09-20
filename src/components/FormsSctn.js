import React from "react";

const FormsSctn = () => {
    return (
        <section id="formSctn">
            <form>
                <label
                    htmlFor="name"
                >Enter Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                />
                <br></br>

                <label
                    htmlFor="email"
                >Enter Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                />
                <br></br>

                <label
                    htmlFor="password"
                >Enter Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                />
                <br></br>

                <label
                    htmlFor="tos"
                >I accept the Terms of Service</label>
                <input
                    type="checkbox"
                    name="tos"
                    id="tos"
                />
                <br></br>

                <button id="submitBtn">
                </button>
                <br></br>

                <button id="cancelBtn">
                    Cancel
                </button>
            </form>
        </section>
    );
};

export default FormsSctn;
