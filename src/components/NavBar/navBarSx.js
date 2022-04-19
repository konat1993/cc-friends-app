const navBarSx = {
    appBar: {
        background: "linear-gradient(90deg, #F2709C 0%, #FF9472 100%)",
        marginBottom: 4,
        width: "100vw"
    },
    logo: {
        cursor: "pointer",
        fontWeight: "900",
        fontSize: { sm: "1.5rem", md: "2rem" },
        transition: "all 0.2s ease-in-out",
        "&:hover": {
            color: "#3b5497"
        }
    },
    divider: {
        borderLeftWidth: "1.5px",
        borderColor: "#FFFFFFCC",
        ml: { xs: 1.5, xsm: 3 },
        mr: { xs: 1.5, xsm: 3 }
    },
    tagLine: {
        fontSize: { xs: "0.8rem", sm: "1rem", lg: "1.1rem" }
    },
    routeBtn: (path, i, lastIndex, location) => ({
        borderRadius: 0,
        py: 0,
        ml: { xs: "8px", sm: "12px", md: "16px" },
        mr: i === lastIndex ? 0 : { xs: "8px", sm: "12px" },
        fontSize: { xs: "0.8rem", sm: "1rem", lg: "1.1rem" },
        borderTop: "3px solid transparent",
        borderBottom:
            path.url === location.pathname
                ? "3px solid #3b5497"
                : "3px solid transparent",
        color: path.url === location.pathname ? "#3b5497" : "inherit",
        "&:hover": {
            backgroundColor: "transparent",
            borderBottom: "3px solid #3b5497",
            color: "#3b5497"
        }
    }),
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
        }
    },
    avatarBtn: { p: 0, mr: { xs: 0, xsm: 1 }, ml: { xs: 2, md: 0 } },
    avatar: {
        width: { xs: "24px", xsm: "32px", sm: "40px" },
        height: { xs: "24px", xsm: "32px", sm: "40px" }
    },
    name: {
        fontSize: { xs: "0.8rem", sm: "1rem" },
        display: { xs: "none", sm: "initial" }
    }
}
export default navBarSx
