import  {useContext, useState} from 'react'
import { UserContext } from '../context/UserContext'

function Login() {

  const [username, setusername] = useState('')
  const [password, setpassword] = useState('')

  const {setUser} = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault()
    setUser({username})
  } 


  return (
    <>
        <input
        type='text' placeholder='username'
        value={username}
        onChange={(e) => setusername(e.target.value) }
        />
        <br /><br />
        <input
        type='password' placeholder='password'
        value={password}
        onChange={(e) => setpassword(e.target.value)}
        />
        <br /><br /><br />
        <button onClick={handleSubmit} >Submit</button>
    </>
  )
}

export default Login
