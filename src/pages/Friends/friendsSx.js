const friendsSx = {
    heading: {
        borderBottom: "3px solid pink",
        borderColor: "pinky.main",
        width: "fit-content",
        px: 1,
        pb: 0.4,
        mb: 4
    },
    toggleStatusButtonGroup: {
        "& .MuiButtonBase-root ": {
            minWidth: { xs: "70px", xsm: "100px" },
            fontSize: { xs: "0.75rem", xsm: "0.875rem" },
            p: 0
        },
        "& .MuiButtonBase-root:hover": {
            bgcolor: "deepOcean.dark",
            color: "secondary.main"
        },
        "& .MuiButtonBase-root.Mui-selected:hover": {
            bgcolor: "deepOcean.main",
            cursor: "default"
        }
    },
    toggleStatusButton: {
        "&.Mui-selected": {
            color: "secondary.main",
            bgcolor: "deepOcean.main"
        },
        "&:hover .MuiTouchRipple-root": {
            display: "none"
        }
    }
}

export default friendsSx
