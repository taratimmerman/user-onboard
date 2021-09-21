import { v4 as uuid } from "uuid";

export const users = [
    {
        id: uuid(),
        name: "Tim",
        email: "tim@onlyemployee.com",
        role: "security"
    },
    {
        id: uuid(),
        name: "Tina",
        email: "tina@timsalterego.com",
        role: "admin"
    }
];