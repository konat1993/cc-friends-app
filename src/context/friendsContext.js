import React from "react";
import { getList } from "../services/friendsService";

export const FriendsContext = React.createContext();

const FriendsContextProvider = ({ children }) => {
  const [rootData, setRootData] = React.useState(null);
  const [personData, setPersonData] = React.useState({
    id: null,
    isAccepted: ""
  });
  const [open, setOpen] = React.useState(false);

  const fetchData = async () => {
    const friendList = await getList();
    setRootData(friendList); //only once
  };

  return (
    <FriendsContext.Provider
      value={{
        rootData,
        setRootData,
        fetchData,
        personData,
        setPersonData,
        open,
        setOpen
      }}
    >
      {children}
    </FriendsContext.Provider>
  );
};
export default FriendsContextProvider;
