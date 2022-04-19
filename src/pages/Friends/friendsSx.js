const friendsSx = {
    heading: {
        borderBottom: "3px solid pink",
        borderColor: "pinky.main",
        width: "fit-content",
        px: 1,
        pt: 4,
        pb: 0.4,
        mb: 6,
        fontSize: { xs: "5vw", xsm: "1.75rem" }
    },
    toggleStatusButtonGroup: {
        "& .MuiButtonBase-root ": {
            minWidth: { xs: "80px", xsm: "110px" },
            fontSize: { xs: "0.75rem", xsm: "0.875rem" },
            p: 0
        },
        "& .MuiButtonBase-root:hover": {
            backgroundColor: "deepOcean.dark",
            color: "secondary.main"
        },
        "& .MuiButtonBase-root.Mui-selected:hover": {
            backgroundColor: "deepOcean.main",
            cursor: "default"
        }
    },
    toggleStatusButton: {
        "&.Mui-selected": {
            color: "secondary.main",
            backgroundColor: "deepOcean.main"
        },
        "&:hover .MuiTouchRipple-root": {
            display: "none"
        }
    }
}

export default friendsSx
