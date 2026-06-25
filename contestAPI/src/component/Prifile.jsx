import { UserContext } from "../context/UserContext"
import { useContext } from "react"


function Prifile() {

  const {user} = useContext(UserContext);

  if(!user) return <h2>Please login</h2>

  return (
    <>
      <h2>Hello!! {user.username}</h2>
    </>
  )
}

export default Prifile
