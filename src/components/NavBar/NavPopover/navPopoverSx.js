const navPopoverSx = {
    popover: { top: "8px", display: { xs: "block", md: "none" } },
    listContainer: {
        minWidth: { xsm: "150px" },
        display: { xs: "block", md: "none" }
    },
    listItemBtn: {
        "&.Mui-selected": {
            backgroundColor: "deepOcean.main"
        },
        "&.Mui-selected .MuiTypography-root, &.Mui-selected .MuiSvgIcon-root": {
            color: "secondary.main"
        },
        "&.Mui-selected:hover": {
            backgroundColor: "deepOcean.main"
        }
    }
}

export default navPopoverSx
