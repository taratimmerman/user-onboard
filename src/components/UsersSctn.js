import React, { useState } from "react";

import FormsSctn from "./FormsSctn";
import { users } from "./users";

// const initialFormState = {
//     id: '',
//     name: '',
//     email: '',
// };

const UsersSctn = () => {
    const [systemUsers, setSystemUsers] = useState(users);
    // const [formValues, setFormValues] = useState(initialFormState);

    // const resetForm = () => setFormValues(initialFormState);

    const editUser = () => {
        // TO DO
    };

    const deleteUser = (id) => {
        setSystemUsers(systemUsers.filter(user => user.id !== id));
    };

    return (
        <main>
            <section id="usersSctn">
                <h2>System Users</h2>
                <ul>
                    {
                        systemUsers.map((user, index) => {
                           return <li key={user.id}>
                                <h1>{user.name}</h1>
                                <p>{user.email}</p>
                                <button data-cy={`editBtn${index}`} onClick={() => editUser(user.id)}>Edit</button>
                                <button data-cy={`deleteBtn${index}`} onClick={() => deleteUser(user.id)}>Delete</button>
                            </li>;
                        })
                    }
                </ul>
            </section>
            <FormsSctn />
        </main>
    );
};

export default UsersSctn;
