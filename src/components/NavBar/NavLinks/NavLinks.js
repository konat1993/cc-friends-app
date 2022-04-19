import React from 'react'
import { Link as RouterLink } from "react-router-dom"
import {
    Box,
    Button,
} from "@mui/material"
import navLinksSx from './navLinksSx'

const NavLinks = ({ paths, location }) => {
    return (
        <Box sx={{ display: { xs: "none", md: "block" } }}>
            {paths.map((path, i) => {
                const lastIndex = paths.length - 1
                return (
                    <Button
                        key={path.pathText}
                        name={`${path.pathText} route`}
                        component={RouterLink}
                        to={path.url}
                        color="secondary"
                        disableRipple
                        sx={navLinksSx.routeBtn(path, i, lastIndex, location)}
                    >
                        {path.pathText}
                    </Button>
                )
            })}
        </Box>
    )
}

export default NavLinks