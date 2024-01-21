import { TextField } from "@mui/material";
import { FormProps } from "../App";

// export type UserData = {
//     firstName: string
//     lastName: string
//     age: string
// } OR

export default function UserForm({ firstName, lastName, age, updateFields }: FormProps) {
    return (
        <>
            <TextField
                autoFocus
                required
                id="outlined-basic"
                label="First Name"
                variant="outlined"
                size="small"
                value={firstName}
                onChange={(e) => updateFields({ firstName: e.target.value })}
            />
            <TextField
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
                size="small"
                value={lastName}
                onChange={(e) => updateFields({ lastName: e.target.value })}
            />
            <TextField
                id="outlined-basic"
                label="Age"
                type="number"
                InputProps={{ inputProps: { min: 0 } }}
                variant="outlined"
                size="small"
                value={age}
                onChange={(e) => updateFields({ age: e.target.value })}
            />
        </>

    )
}
