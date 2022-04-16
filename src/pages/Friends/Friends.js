import React from "react"
import {
    Box,
    Button,
    Container,
    Input,
    Stack,
    ToggleButton,
    ToggleButtonGroup,
    Typography
} from "@mui/material"
import SearchInput from "../../components/SearchInput"
import FriendList from "../../components/FriendList/FriendList"
import friendsSx from "./friendsSx"
import searchInputSx from "../../components/SearchInput/searchInputSx"

const statusList = ["accepted", "pending", "all"]

const Friends = () => {
    const [searchValue, setSearchValue] = React.useState("")
    const [status, setStatus] = React.useState("all")
    const searchInputRef = React.useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        setSearchValue(searchInputRef.current.value)
    }
    const handleChange = (event, newStatus) => {
        if (newStatus) {
            setStatus(newStatus)
        }
    }

    return (
        <Container sx={{ pb: 10 }}>
            <Stack alignItems="center">
                <Typography sx={friendsSx.heading}>
                    Explore your relationships
                </Typography>
                <SearchInput>
                    <Box component="form" onSubmit={handleSubmit}>
                        <Input
                            inputRef={searchInputRef}
                            placeholder="Search by name"
                            name="search"
                            disableUnderline
                            sx={searchInputSx.input}
                        />
                        <Button
                            name="Search Button"
                            color="deepOcean"
                            variant="contained"
                            type="submit"
                            sx={searchInputSx.submitBtn}
                            onClick={() => searchInputRef.current.focus()}
                        >
                            Search
                        </Button>
                    </Box>
                </SearchInput>
                <Box sx={{ mt: "18px", mb: "94px" }}>
                    <ToggleButtonGroup
                        color="primary"
                        value={status}
                        exclusive
                        onChange={handleChange}
                        sx={friendsSx.toggleStatusButtonGroup}
                    >
                        {statusList.map((el) => {
                            return (
                                <ToggleButton
                                    key={el}
                                    sx={friendsSx.toggleStatusButton}
                                    value={el}
                                >
                                    {el}
                                </ToggleButton>
                            )
                        })}
                    </ToggleButtonGroup>
                </Box>

                <FriendList searchData={{ searchValue, status }} />
            </Stack>
        </Container>
    )
}

export default Friends
