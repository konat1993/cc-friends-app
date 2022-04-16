import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar"
import FriendsContextProvider from "./context/friendsContext"
import Friends from "./pages/Friends"
import Home from "./pages/Home"
import "./index.css"

const App = () => (
  <FriendsContextProvider>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/friends" element={<Friends />} />
      </Routes>
    </Router>
  </FriendsContextProvider>
)

export default App
