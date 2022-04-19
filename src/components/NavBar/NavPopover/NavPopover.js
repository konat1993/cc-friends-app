import React from "react"
import { Link as RouterLink } from "react-router-dom"
import {
    Popover,
    List,
    ListItemButton,
    ListItemText,
    ListItem,
    ListItemIcon
} from "@mui/material"
import navPopoverSx from "./navPopoverSx"

const NavPopover = ({ anchorEl, handleClose, location, paths }) => {
    const open = Boolean(anchorEl)

    return (
        <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "right"
            }}
            transformOrigin={{
                vertical: "top",
                horizontal: "right"
            }}
            sx={navPopoverSx.popover}
        >
            <List
                component="nav"
                disablePadding
                aria-label="main mailbox folders"
                sx={navPopoverSx.listContainer}
            >
                {paths.map((path, i) => {
                    return (
                        <ListItem key={path.pathText} disablePadding>
                            <ListItemButton
                                selected={path.url === location.pathname}
                                onClick={handleClose}
                                component={RouterLink}
                                to={path.url}
                                sx={navPopoverSx.listItemBtn}
                            >
                                <ListItemIcon>
                                    <path.Icon color="primary" />
                                </ListItemIcon>
                                <ListItemText primary={path.pathText} />
                            </ListItemButton>
                        </ListItem>
                    )
                })}
            </List>
        </Popover>
    )
}
export default NavPopover
