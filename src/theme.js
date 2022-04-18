import { createTheme } from "@mui/material/styles"

const blackColor = "#000"
const whiteColor = "#fff"
const infoColor = "#3597db"
const oceanColor = "#73cfde"
const pinkyColor = "#F2709C"
const deepOceanColor = "#4a69bd"

// A custom theme for this app
let theme = createTheme({
    palette: {
        primary: {
            main: blackColor
        },
        secondary: {
            main: whiteColor
        },
        info: {
            main: infoColor
        },
        ocean: {
            main: oceanColor
        },
        pinky: {
            main: pinkyColor
        },
        deepOcean: {
            main: deepOceanColor,
            dark: "#3b5497"
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            xsm: 560,
            sm: 768,
            md: 1000,
            lg: 1200,
            xl: 1536
        }
    },
    typography: {
        fontFamily: ["Roboto", '"Helvetica"', "Arial", "Lato", "sans-serif"].join(
            ","
        ),
        allVariants: {
            color: blackColor
        }
    },
    components: {
        MuiTypography: {
            styleOverrides: {
                root: {
                    textDecoration: "none",
                    fontFamily: "Lato",
                    fontWeight: 700
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    fontSize: "0.8125rem",
                    fontFamily: "Lato",
                    textDecoration: "none",
                    textTransform: "none",
                    borderRadius: "8px",
                    width: "fit-content",
                    minWidth: "fit-content",
                    fontWeight: "700",
                    transition: "all 0.3s ease-in-out"
                }
            },
            variants: [
                {
                    props: { variant: "contained", color: "pinky" },
                    style: {
                        background: "linear-gradient(90deg, #F2709C 0%, #FF9472 100%)",
                        color: "#fff",
                        "&:hover": {
                            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.25)"
                        }
                    }
                },
                {
                    props: { variant: "contained", color: "ocean" },
                    style: {
                        fontWeight: 900,
                        color: "#fff",
                        background: "linear-gradient(90deg, #84FAB0 0%, #8FD3F4 100%)",
                        boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.1)",
                        cursor: "default",
                        "&:hover": {
                            boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.1)"
                        }
                    }
                },
                {
                    props: { variant: "outlined", color: "pinky" },
                    style: {
                        "&:hover": {
                            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.25)"
                        }
                    }
                },
                {
                    props: { variant: "paper" },
                    style: {
                        fontWeight: 900,
                        backgroundColor: "#fff",
                        boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.1)",
                        borderRadius: "4px",
                        border: "1px solid #E9E9E9",
                        cursor: "default",
                        "&:hover": {
                            backgroundColor: "transparent"
                        }
                    }
                }
            ]
        }
    }
})
export default theme
