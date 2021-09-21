import React from "react";

import PropTypes from "prop-types";

const FormsSctn = (props) => {
    const {
        values,
        setValues,
        initialState,
        createFunction,
        toggleForm
    } = props;

    const resetForm = () => setValues(initialState);

    const onChange = event => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
    };

    const onSubmit = event => {
        event.preventDefault();
        createFunction(values);
        event.target.reset();
        resetForm();
    };

    const onCancel = () => {
        resetForm();
        toggleForm();
    };

    return (
        <section id="formSctn">
            <form onSubmit={onSubmit}>
                <h3>Add New System User</h3>
                <label
                    htmlFor="name"
                >Enter Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    onChange={onChange}
                />
                <br></br>

                <label
                    htmlFor="email"
                >Enter Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={onChange}
                />
                <br></br>

                <label
                    htmlFor="password"
                >Enter Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    onChange={onChange}
                />
                <br></br>

                <label
                    htmlFor="tos"
                >I accept the Terms of Service</label>
                <input
                    type="checkbox"
                    name="tos"
                    id="tos"
                    value="true"
                />
                <br></br>

                <button
                    id="submitBtn"
                    type="submit"
                >
                    Submit User
                </button>
                <br></br>

                <button
                    id="cancelBtn"
                    type="reset"
                    onClick={onCancel}
                >
                    Cancel
                </button>
            </form>
        </section>
    );
};

FormsSctn.propTypes = {
    values: PropTypes.any,
    setValues: PropTypes.any,
    initialState: PropTypes.object,
    toggleForm: PropTypes.func,
    createFunction: PropTypes.func
};

export default FormsSctn;
