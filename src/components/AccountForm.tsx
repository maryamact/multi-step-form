import { TextField } from "@mui/material";
import { FormProps } from "../App";

// type Props = {}

export default function AccountForm({ email, password, updateFields }: FormProps) {
    return (
        <>
            <TextField
                required
                id="email"
                label="Email"
                type="email"
                autoComplete="current-email"
                variant="outlined"
                size="small"
                value={email}
                onChange={(e) => updateFields({ email: e.target.value })}
            />
            <TextField
                required
                id="password"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="outlined"
                size="small"
                value={password}
                onChange={(e) => updateFields({ password: e.target.value })}
            />
        </>
    )
}