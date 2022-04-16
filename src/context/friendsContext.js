import React from "react"
import { getList } from "../services/friendsService"

export const FriendsContext = React.createContext()

const FriendsContextProvider = ({ children }) => {
    const [rootData, setRootData] = React.useState(null)
    const [filteredData, setFilteredData] = React.useState([])
    const [personData, setPersonData] = React.useState({
        id: null,
        isAccepted: ""
    })
    const [open, setOpen] = React.useState(false)

    const fetchData = async () => {
        const friendList = await getList()
        setRootData(friendList) //only once
        setFilteredData(friendList)
    }

    return (
        <FriendsContext.Provider
            value={{
                rootData,
                setRootData,
                filteredData,
                setFilteredData,
                fetchData,
                personData,
                setPersonData,
                open,
                setOpen
            }}
        >
            {children}
        </FriendsContext.Provider>
    )
}
export default FriendsContextProvider
