import { TextField } from "@mui/material";
import { FormProps } from "../App";


export default function AddressForm({ street, city, state, zip, updateFields }: FormProps) {
    return (
        <>
            <TextField
                required
                id="street"
                name="street"
                label="Street"
                fullWidth
                autoFocus
                variant="outlined"
                size="small"
                value={street}
                onChange={(e) => updateFields({ street: e.target.value })}
            />
            <TextField
                id="city"
                name="city"
                label="City"
                fullWidth
                variant="outlined"
                size="small"
                value={city}
                onChange={(e) => updateFields({ city: e.target.value })}
            />
            <TextField
                id="state"
                name="state"
                label="State"
                fullWidth
                variant="outlined"
                size="small"
                value={state}
                onChange={(e) => updateFields({ state: e.target.value })}
            />
            <TextField
                id="zip"
                name="zip"
                label="Zip "
                fullWidth
                variant="outlined"
                size="small"
                value={zip}
                onChange={(e) => updateFields({ zip: e.target.value })}
            />
        </>
    )
}