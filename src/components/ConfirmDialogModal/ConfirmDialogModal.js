import React from "react"
import { FriendsContext } from "../../context/friendsContext"
import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Divider
} from "@mui/material"
import { updateList } from "../../utils"

const ConfirmDialogModal = () => {
    const { rootData, setRootData, personData, open, setOpen } = React.useContext(
        FriendsContext
    )

    const updateFriendList = (personData) => {
        if (personData.isAccepted) {
            const updateStatus = updateList.acceptPersonUpdate(
                rootData,
                personData.id
            )
            setRootData(updateStatus)
        } else {
            const rejectInvitation = updateList.deletePerson(rootData, personData.id)
            setRootData(rejectInvitation)
        }
        setOpen(false)
    }

    const handleCloseModal = () => {
        setOpen(false)
    }
    return (
        <Dialog open={open} fullWidth={false} maxWidth="xs">
            <DialogTitle
                textAlign="center"
                id="alert-dialog-title"
                sx={{
                    fontSize: "1.4rem",
                    color: "#485460",
                    display: personData.isAccepted ? "none" : "block"
                }}
            >
                Rootsly
            </DialogTitle>
            {<Divider sx={{borderColor: personData.isAccepted ? 'transparent' : 'lightgray'}}/>}
            <DialogContent sx={{ pb: 1, px: personData.isAccepted ? 8 : 3 }}>
                <DialogContentText
                    id="alert-dialog-description"
                    textAlign={personData.isAccepted && "center"}
                    sx={{ fontSize: "1.1rem" }}
                >
                    Are you sure?
                </DialogContentText>
                {personData.isAccepted ? null : (
                    <>
                        <DialogContentText
                            id="alert-dialog-description"
                            sx={{
                                color: "error.light",
                                fontSize: "0.9rem",
                                mt: "8px"
                            }}
                        >
                            This action can not be undone!
                        </DialogContentText>
                        <DialogContentText
                            id="alert-dialog-description"
                            sx={{
                                color: "primary.light",
                                fontSize: "0.9rem",
                                mt: "8px"
                            }}
                        >
                            If you want to recover someone to your relationship list back, you
                            can try to invite this person and wait for their response.
                        </DialogContentText>
                    </>
                )}
            </DialogContent>
            <DialogActions
                sx={{
                    pb: 2,
                    margin: personData.isAccepted ? "10px auto 0" : "initial"
                }}
            >
                <Button
                    name='Cancel Button'
                    variant="text"
                    color="error"
                    onClick={handleCloseModal}
                    sx={{ fontSize: "0.9rem", py: 0.5, px: 1.5 }}
                >
                    Cancel
                </Button>
                <Button
                    name='Confirm Button'
                    sx={{ fontSize: "0.9rem", py: 0.5, px: 1.5 }}
                    onClick={() => updateFriendList(personData)}
                    autoFocus
                    variant="text"
                    color="success"
                >
                    Confirm
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default ConfirmDialogModal
