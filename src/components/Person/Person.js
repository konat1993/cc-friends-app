import React from "react"

import { FriendsContext } from "../../context/friendsContext"
import { Avatar, Box, Button, Stack, Typography } from "@mui/material"
import { motion } from "framer-motion"

import personSx from "./personSx"

const renderStatus = (statusData) => {
    const statusLC = statusData.toLowerCase()
    return !!statusLC.includes("pending")
}
const Person = ({ filteredData }) => {
    const { setPersonData, setOpen } = React.useContext(FriendsContext)
    const { firstName, lastName, status, photoUrl, id } = filteredData

    const handleClick = (personDetailsData) => {
        setOpen(true)
        setPersonData({
            ...personDetailsData
        })
    }
    return (
        <Box
            component={motion.div}
            layout
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1
            }}
            exit={{ opacity: 0 }}
            transition={{
                opacity: {
                    duration: 0.3
                }
            }}
            sx={personSx.container}
        >
            <Avatar src={photoUrl} sx={personSx.avatar} alt={`Avatar of ${firstName} ${lastName}`} />
            <Stack alignItems="center" sx={{ mt: "60px" }}>
                <Typography variant="h4" sx={personSx.nameText}>
                    {`${firstName} ${lastName}`}
                </Typography>
                {renderStatus(status) ? (
                    <>
                        <Button
                            name="Pending invitation - disabled button"
                            variant="paper"
                            disableRipple
                            sx={personSx.statusPending}
                        >
                            Pending Invitation
                        </Button>
                        <Stack direction="row" gap={1}>
                            <Button
                                name="Reject invitation"
                                onClick={() => handleClick({ id: id })}
                                variant="outlined"
                                color="pinky"
                                sx={{ width: { xs: "80px", sm: "120px" } }}
                            >
                                Reject
                            </Button>
                            <Button
                                name="Accept invitation"
                                onClick={() => handleClick({ id: id, isAccepted: "accept" })}
                                variant="contained"
                                color="pinky"
                                sx={{ width: { xs: "80px", sm: "120px" } }}
                            >
                                Accept
                            </Button>
                        </Stack>
                    </>
                ) : (
                    <>
                        <Stack direction="column" alignItems="center">
                            <Button
                                name="Accepted invitation - disabled button"
                                variant="contained"
                                color="ocean"
                                disableRipple
                                sx={personSx.statusAccepted}
                            >
                                Accepted
                            </Button>
                            <Button
                                name="Remove invitation"
                                onClick={() => handleClick({ id: id })}
                                variant="outlined"
                                color="pinky"
                                sx={{ width: "120px" }}
                            >
                                Remove
                            </Button>
                        </Stack>
                    </>
                )}
            </Stack>
        </Box>
    )
}

export default Person
