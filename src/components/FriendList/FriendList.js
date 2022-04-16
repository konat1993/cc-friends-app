import React from "react"
import Person from "../Person/Person"
import ConfirmDialogModal from "../ConfirmDialogModal/ConfirmDialogModal"
import { Container, Grid, Box, Typography } from "@mui/material"
import { filterByNameAndStatus } from "../../utils"
import { FriendsContext } from "../../context/friendsContext"
import { motion, AnimatePresence } from "framer-motion"

const FriendList = ({ searchData }) => {
    const {
        rootData,
        filteredData,
        setFilteredData,
        fetchData
    } = React.useContext(FriendsContext)
    const { status, searchValue } = searchData

    React.useEffect(() => {
        if (rootData === null) {
            fetchData()
        }
        //only once
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    React.useEffect(() => {
        const filteredPeople = rootData?.filter(
            filterByNameAndStatus(searchValue, status)
        )
        setFilteredData(filteredPeople)
    }, [searchValue, rootData, status, setFilteredData])

    return (
        <Container fixed>
            <ConfirmDialogModal />
            <Grid container rowSpacing={6} justifyContent="left">
                <AnimatePresence>
                    {filteredData && filteredData.length !== 0 ? (
                        filteredData.map((person) => {
                            return (
                                <Grid
                                    key={person.id}
                                    item
                                    container
                                    justifyContent="center"
                                    xs={12}
                                    xsm={6}
                                    sm={6}
                                    md={4}
                                    component={motion.div}
                                    layout
                                >
                                    <Person filteredData={person} />
                                </Grid>
                            )
                        })
                    ) : rootData ? (
                        <Box
                            width={1}
                            component={motion.div}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1, }}
                            exit={{ opacity: 0 }}
                        >
                            <Typography variant="h6" textAlign="center">
                                No results{" "}
                                <span role="img" aria-label="thinking-face">
                                    🤔
                                </span>
                            </Typography>
                        </Box>
                    ) : null}
                </AnimatePresence>
            </Grid>
        </Container>
    )
}

export default FriendList
