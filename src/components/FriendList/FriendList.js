import React from "react"
import Person from "../Person/Person"
import ConfirmDialogModal from "../ConfirmDialogModal/ConfirmDialogModal"
import { Container, Grid, Box, Typography, Stack } from "@mui/material"
import { filterByNameAndStatus } from "../../utils"
import { FriendsContext } from "../../context/friendsContext"
import { motion, AnimatePresence } from "framer-motion"
import "./loader.css"
const FriendList = ({ searchData }) => {
  const { rootData, fetchData, isLoading, isError } = React.useContext(FriendsContext)
  const { status, searchValue } = searchData

  const convertData = React.useCallback((data) => {
    if (data) {
      if (searchValue || status !== "all") {
        const filteredData = data.filter(
          filterByNameAndStatus(searchValue, status)
        )
        return filteredData.length !== 0 ? filteredData : null
      } else {
        return data.length !== 0 ? data : null
      }
    } else {
      return null
    }
  },
    [searchValue, status]
  )

  React.useEffect(() => {
    if (!rootData) {
      //setTimeout just for ui purposes instead od server timing
      setTimeout(() => {
        fetchData()
      }, 2200)
    }
    //only once
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  if (isError) {
    return (
      <Stack alignItems="center" sx={{ width: "280px" }}>
        <Typography textAlign="center">
          {isError.message ? isError.message : "Ops! Something went wrong :("}
        </Typography>
      </Stack>
    )
  }
  return (
    <Container fixed>
      <ConfirmDialogModal />
      {isLoading ? (
        <Box className="loader" />
      ) : (
        <Grid
          container
          rowSpacing={6}
          justifyContent="left"
          sx={{ position: "relative" }}
        >
          <AnimatePresence>
            {convertData(rootData) ? (
              convertData(rootData).map((person) => {
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
            ) : (
              <Box
                width={1}
                component={motion.div}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                sx={{ position: "absolute", top: 0 }}
              >
                <Typography variant="h6" textAlign="center">
                  No results{" "}
                  <span role="img" aria-label="thinking-face">
                    🤔
                  </span>
                </Typography>
              </Box>
            )}
          </AnimatePresence>
        </Grid>
      )}
    </Container>
  )
}

export default FriendList
