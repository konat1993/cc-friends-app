import React from "react"
import { getList } from "../services/friendsService"

export const FriendsContext = React.createContext()

const FriendsContextProvider = ({ children }) => {
  const [rootData, setRootData] = React.useState(null)
  const [isLoading, setIsLoading] = React.useState(true)
  const [isError, setIsError] = React.useState(false)

  const [personData, setPersonData] = React.useState({
    id: null,
    isAccepted: ""
  })
  const [open, setOpen] = React.useState(false)

  const fetchData = async () => {
    setIsLoading(true)
    try {
      const friendList = await getList()
      setRootData(friendList) //only once
      setIsLoading(false)
    } catch (error) {
      setIsError({ message: error })
      setIsLoading(false)
    }
  }

  return (
    <FriendsContext.Provider
      value={{
        rootData,
        setRootData,
        fetchData,
        personData,
        setPersonData,
        open,
        setOpen,
        isLoading,
        isError,
      }}
    >
      {children}
    </FriendsContext.Provider>
  )
}
export default FriendsContextProvider
