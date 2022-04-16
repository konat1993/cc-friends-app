const searchInputSx = {
    container: { position: "relative" },
    input: {
        color: "#585858",
        border: "1px solid #E9E9E9",
        maxWidth: "467px",
        minWidth: "260px",
        width: "80vw",
        borderRadius: "100px",
        padding: "6px 120px 6px 16px",
        fontSize: { xs: "0.9rem", sm: "1rem" },
        "&.Mui-focused": {
            boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.1)"
        },
        "& .MuiInputBase-input": {
            "&::placeholder": {
                color: "#898989",
                opacity: "1"
            }
        },
        "&:hover": {
            borderColor: "deepOceanColor.main",
            boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.1)"
        }
    },
    submitBtn: {
        color: "#f5f6fa",
        position: "absolute",
        top: 0,
        right: 0,
        minWidth: { xs: "85px", sm: "100px" },
        height: "100%",
        borderRadius: "100px",
        borderLeft: "1px solid #E9E9E9",
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        fontSize: { xs: "0.9rem", sm: "1rem" },
        letterSpacing: "0.6px"
    }
}

export default searchInputSx
