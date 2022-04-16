import React from "react"
import { Box } from "@mui/material"
import searchInputSx from "./searchInputSx"

const SearchInput = ({ children }) => {
    return <Box sx={searchInputSx.container}>{children}</Box>
}

export default SearchInput
