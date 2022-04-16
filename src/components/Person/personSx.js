const personSx = {
    container: {
        width: { xs: "200px", sm: "280px" },
        minWidth: { xs: "220px", sm: "280px" },
        height: "190px",
        background: "#FFFFFF",
        border: "1px solid #E9E9E9",
        boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        position: "relative"
    },
    avatar: {
        position: "absolute",
        top: 0,
        left: "50%",
        transform: "translate(-50%,-50%)",
        width: "60px",
        height: "60px"
    },
    nameText: {
        fontWeight: 700,
        fontSize: "1.125rem",
        lineHeight: "18px",
        color: "#585858",
        mb: "8px"
    },
    statusPending: {
        height: "18px",
        fontSize: "12px",
        color: "#6F6F6F",
        mb: "30px"
    },
    statusAccepted: {
        height: "18px",
        fontSize: "12px",
        mb: "30px"
    }
}

export default personSx
