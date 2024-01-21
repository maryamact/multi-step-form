import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";

type FormWraperProps = {
    title: string
    children: ReactNode
}

export default function FormWraper({ title, children }: FormWraperProps) {
    return (
        <Box gap={2} sx={{ display: 'flex', flexDirection: "column", justifyContent: 'flex-end', }}>
            <Typography component="h1" variant="h6" align="center">
                {title}
            </Typography>
            {children}
        </Box>
    )
}