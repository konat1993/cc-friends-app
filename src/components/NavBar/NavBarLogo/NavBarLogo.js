import React from "react"
import { Link, Typography } from "@mui/material"
import navBarLogoSx from "./navBarLogoSx"

const NavBarLogo = ({name}) => {
    return (
        <Typography
            variant="h6"
            component={Link}
            href="https://www.google.com/search?q=Rootsly"
            target="_blank"
            rel="noopener"
            color="secondary"
            sx={navBarLogoSx.logo}
        >
            {name}
        </Typography>
    )
}
export default NavBarLogo
