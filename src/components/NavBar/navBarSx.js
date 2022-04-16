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
        marginLeft: "10px"
    },
    routeBtn: (path, i, location) => ({
        borderRadius: 0,
        py: 0,
        ml: i === 0 ? { xs: "8px", sm: "12px", md: "16px" } : 0,
        mr: { xs: "8px", sm: "16px" },
        fontSize: { sm: "1rem", md: "1.25rem", lg: "1.5rem" },
        borderTop: "3px solid transparent",
        borderBottom:
            path.url === location.pathname
                ? "3px solid #3b5497"
                : "3px solid transparent",
        color: path.url === location.pathname ? "#3b5497" : "inherit",
        "&:hover": {
            bgcolor: "transparent",
            borderBottom: "3px solid #3b5497",
            color: "#3b5497"
        }
    }),
    avatar: {
        width: { xs: "28px", sm: "40px" },
        height: { xs: "28px", sm: "40px" }
    },
    name: {
        fontSize: { xs: "0.8rem", sm: "1rem" },
        display: { xs: "none", sm: "initial" }
    }
}
export default navBarSx
