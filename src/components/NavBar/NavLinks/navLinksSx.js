const navLinksSx = {

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
}

export default navLinksSx